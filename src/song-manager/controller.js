import { importSong, readPlaylistSnapshot } from '../../shared/song-import.js';

const pickDirBtn = document.getElementById('pickDir');
const saveSongBtn = document.getElementById('saveSong');
const statusEl = document.getElementById('status');
let projectDirHandle = null;
let saving = false;

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.className = `status ${isError ? 'err' : 'ok'}`;
}

pickDirBtn.addEventListener('click', async () => {
  if (!window.showDirectoryPicker) {
    setStatus('请在支持文件夹选择的 Chrome 或 Edge 中打开歌曲管理器。', true);
    return;
  }
  try {
    const selected = await window.showDirectoryPicker({ mode: 'readwrite' });
    const snapshot = await readPlaylistSnapshot(selected);
    projectDirHandle = selected;
    saveSongBtn.disabled = false;
    setStatus(`已连接「${selected.name}」，现有 ${snapshot.songs.length} 首歌曲。`);
  } catch (error) {
    if (error.name !== 'AbortError') {
      projectDirHandle = null;
      saveSongBtn.disabled = true;
      setStatus(error.message, true);
    }
  }
});

saveSongBtn.addEventListener('click', async () => {
  if (saving || !projectDirHandle) return;
  const value = id => document.getElementById(id).value.trim();
  const input = {
    id: value('id'), title: value('title'), artist: value('artist'), album: value('album'),
    themeColor: value('themeColor'), cubesTheme: value('cubesTheme'),
    audio: document.getElementById('audioFile').files[0],
    cover: document.getElementById('coverFile').files[0],
    lyrics: document.getElementById('lrcFile').files[0],
    replaceExisting: document.getElementById('replaceExisting').checked,
  };
  saving = true;
  saveSongBtn.disabled = true;
  pickDirBtn.disabled = true;
  document.body.setAttribute('aria-busy', 'true');
  setStatus('正在校验并保存歌曲…');
  try {
    const save = () => importSong(projectDirHandle, input);
    const result = navigator.locks
      ? await navigator.locks.request(`bunnybeats-song-import:${projectDirHandle.name}`, save)
      : await save();
    setStatus(`已保存「${result.song.title}」，歌单共 ${result.count} 首。刷新播放器即可播放。${result.backupPath ? `\n原歌单备份：${result.backupPath}` : ''}`);
    document.getElementById('replaceExisting').checked = false;
  } catch (error) {
    setStatus(error.message || '保存失败，请检查文件夹权限。', true);
  } finally {
    saving = false;
    saveSongBtn.disabled = !projectDirHandle;
    pickDirBtn.disabled = false;
    document.body.removeAttribute('aria-busy');
  }
});
