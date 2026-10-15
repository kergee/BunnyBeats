import { parsePlaylist, validatePlaylist } from './song-schema.js';
import { parseLyrics } from '../src/recovered/lyrics/parseLyrics.js';

const AUDIO_EXTENSIONS = new Set(['mp3', 'wav', 'm4a', 'flac', 'ogg']);
const COVER_EXTENSIONS = new Set(['webp', 'png', 'jpg', 'jpeg']);
const LYRIC_EXTENSIONS = new Set(['lrc', 'txt', 'json']);
const activeImports = new WeakMap();

export function safeFileName(name) {
  let result = String(name).normalize('NFC')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/[\\/:*?"<>|]/g, '-').trim().replace(/[. ]+$/, '');
  if (!result || result === '.' || result === '..') result = 'file';
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(result)) result = `_${result}`;
  const dot = result.lastIndexOf('.');
  const extension = dot > 0 && result.length - dot <= 12 ? result.slice(dot) : '';
  let stem = extension ? result.slice(0, dot) : result;
  while (new TextEncoder().encode(stem + extension).length > 180) stem = [...stem].slice(0, -1).join('');
  return stem + extension;
}

function assertUpload(file, extensions, label, required = false) {
  if (!file) {
    if (required) throw new Error(`请选择${label}文件。`);
    return;
  }
  const extension = String(file.name).split('.').pop().toLowerCase();
  if (!extensions.has(extension)) throw new Error(`${label}格式不支持：${file.name}`);
  if (!Number.isFinite(file.size) || file.size <= 0) throw new Error(`${label}文件为空。`);
}

export async function readPlaylistSnapshot(directory) {
  let handle;
  try { handle = await directory.getFileHandle('songs.json'); }
  catch (error) {
    if (error.name === 'NotFoundError') return { exists: false, text: null, songs: [] };
    throw new Error('无法读取 songs.json，请检查目录权限；未修改歌单。', { cause: error });
  }
  const text = await readExactText(handle);
  return { exists: true, text, songs: parsePlaylist(text) };
}

async function readExactText(handle) {
  const bytes = await (await handle.getFile()).arrayBuffer();
  // Blob.text() removes a UTF-8 BOM; preserve it for exact backups and conflict checks.
  return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
}

async function writeFile(directory, name, contents) {
  const handle = await directory.getFileHandle(name, { create: true });
  const stream = await handle.createWritable();
  try { await stream.write(contents); await stream.close(); }
  catch (error) {
    try { await stream.abort(); } catch { /* A failed/closed stream may already be aborted. */ }
    throw error;
  }
}

async function usedNames(directory) {
  const names = new Set();
  for await (const [name] of directory.entries()) names.add(name.normalize('NFC').toLocaleLowerCase('en-US'));
  return names;
}

function reserveName(name, used) {
  const safe = safeFileName(name);
  const dot = safe.lastIndexOf('.');
  const stem = dot > 0 ? safe.slice(0, dot) : safe;
  const extension = dot > 0 ? safe.slice(dot) : '';
  let candidate = safe;
  let suffix = 2;
  while (used.has(candidate.toLocaleLowerCase('en-US'))) candidate = `${stem}-${suffix++}${extension}`;
  used.add(candidate.toLocaleLowerCase('en-US'));
  return candidate;
}

async function removeCreated(directory, names) {
  const failed = [];
  for (const name of [...names].reverse()) {
    try { await directory.removeEntry(name); }
    catch (error) { if (error.name !== 'NotFoundError') failed.push(name); }
  }
  return failed;
}

async function readRawPlaylist(directory) {
  try { return await readExactText(await directory.getFileHandle('songs.json')); }
  catch (error) { if (error.name === 'NotFoundError') return null; throw error; }
}

async function saveSong(directory, input) {
  const { audio, cover = null, lyrics = null, replaceExisting = false } = input;
  assertUpload(audio, AUDIO_EXTENSIONS, '音频', true);
  assertUpload(cover, COVER_EXTENSIONS, '封面');
  assertUpload(lyrics, LYRIC_EXTENSIONS, '歌词');
  if (lyrics) {
    const content = await lyrics.text();
    if (!content.trim() || parseLyrics(content).length === 0) throw new Error('歌词文件没有可识别的时间标签或 JSON 时间歌词。');
  }
  const title = String(input.title || '').trim() || audio.name.replace(/\.[^.]+$/, '');
  const slug = title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
  const id = String(input.id || '').trim() || slug || `song-${crypto.randomUUID()}`;
  if (id.length > 128) throw new Error('歌曲 ID 不能超过 128 个字符。');
  const entry = {
    id, title,
    artist: String(input.artist || '').trim() || 'Unknown Artist',
    album: String(input.album || '').trim() || 'Unknown Album',
    audioSrc: '/assets/pending', lrcSrc: '', coverUrl: '',
    themeColor: input.themeColor || '#F05A66', cubesTheme: input.cubesTheme || 'pink',
  };
  validatePlaylist([entry]);
  const snapshot = await readPlaylistSnapshot(directory);
  if (snapshot.songs.some(song => song.id === id) && !replaceExisting) {
    throw new Error(`歌曲 ID「${id}」已存在。请换一个 ID，或勾选替换同 ID 歌曲。`);
  }
  let backupPath = null;
  if (snapshot.exists) {
    const backupDirectory = await directory.getDirectoryHandle('.bunnybeats-backups', { create: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupName = reserveName(`songs-${stamp}-${crypto.randomUUID()}.json`, await usedNames(backupDirectory));
    try { await writeFile(backupDirectory, backupName, snapshot.text); }
    catch (cause) {
      await removeCreated(backupDirectory, [backupName]);
      throw new Error('歌单备份失败，已停止导入，原歌单未修改。', { cause });
    }
    backupPath = `.bunnybeats-backups/${backupName}`;
  }
  const assets = await directory.getDirectoryHandle('assets', { create: true });
  const names = await usedNames(assets);
  const created = [];
  let nextText;
  let commitAttempted = false;
  let createdManifest = false;
  try {
    for (const [field, file] of [['audioSrc', audio], ['coverUrl', cover], ['lrcSrc', lyrics]]) {
      if (!file) continue;
      const name = reserveName(file.name, names);
      created.push(name);
      await writeFile(assets, name, file);
      entry[field] = `/assets/${encodeURIComponent(name)}`;
    }
    const nextSongs = snapshot.songs.filter(song => song.id !== id);
    nextSongs.push(entry);
    nextText = JSON.stringify(nextSongs, null, 2);
    if (await readRawPlaylist(directory) !== snapshot.text) {
      throw new Error('导入期间 songs.json 被其他程序修改，已停止保存。请重新读取歌单后重试。');
    }
    commitAttempted = true;
    createdManifest = !snapshot.exists;
    await writeFile(directory, 'songs.json', nextText);
    return { song: entry, count: nextSongs.length, backupPath };
  } catch (cause) {
    let safeToRollback = !commitAttempted;
    if (commitAttempted) {
      // A device can report a close error after committing. Check before deleting assets.
      try {
        const actual = await readRawPlaylist(directory);
        if (actual === nextText) return { song: entry, count: snapshot.songs.filter(song => song.id !== id).length + 1, backupPath };
        safeToRollback = actual === snapshot.text || (createdManifest && (actual === '' || actual === null));
        if (safeToRollback && createdManifest && actual === '') await directory.removeEntry('songs.json');
      } catch { safeToRollback = false; }
    }
    const remainingFiles = safeToRollback ? await removeCreated(assets, created) : created;
    const details = remainingFiles.length ? `已保留文件供检查：${remainingFiles.join('、')}。` : '本次新增的素材已清理。';
    const state = safeToRollback ? '未提交本次歌单修改。' : '保存结果无法确认，请检查歌单后再操作。';
    const error = new Error(`${cause.message} ${state}${details}${backupPath ? ` 原歌单备份：${backupPath}` : ''}`, { cause });
    error.backupPath = backupPath;
    error.remainingFiles = remainingFiles;
    throw error;
  }
}

export function importSong(directory, input) {
  const previous = activeImports.get(directory) || Promise.resolve();
  const task = previous.catch(() => {}).then(() => saveSong(directory, input));
  activeImports.set(directory, task);
  void task.finally(() => { if (activeImports.get(directory) === task) activeImports.delete(directory); }).catch(() => {});
  return task;
}
