import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { importSong, safeFileName } from '../../shared/song-import.js';

// File System Access adapter backed by a real temporary directory. Fault hooks
// model write/close failures; browser tests additionally exercise Chromium OPFS.
class Directory {
  constructor(root, faults = {}) { this.root = root; this.faults = faults; }
  child(name) {
    const result = path.resolve(this.root, name);
    assert.equal(path.dirname(result), this.root);
    return result;
  }
  async getFileHandle(name, { create = false } = {}) {
    const file = this.child(name);
    try {
      const stat = await fs.stat(file);
      if (!stat.isFile()) throw new DOMException('Not a file', 'TypeMismatchError');
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      if (!create) throw new DOMException('Missing', 'NotFoundError');
      await fs.writeFile(file, '', { flag: 'wx' });
    }
    const faults = this.faults;
    return {
      getFile: async () => new File([await fs.readFile(file)], name),
      createWritable: async () => {
        let bytes;
        return {
          write: async data => { bytes = typeof data === 'string' ? Buffer.from(data) : Buffer.from(await data.arrayBuffer()); },
          close: async () => {
            if (faults.failClose?.(file)) throw new Error('simulated disk full');
            await fs.writeFile(file, bytes);
            await faults.afterClose?.(file);
          },
          abort: async () => {},
        };
      },
    };
  }
  async getDirectoryHandle(name, { create = false } = {}) {
    const directory = this.child(name);
    if (create) await fs.mkdir(directory, { recursive: true });
    return new Directory(directory, this.faults);
  }
  async *entries() { for (const name of await fs.readdir(this.root)) yield [name, {}]; }
  async removeEntry(name) { await fs.unlink(this.child(name)); }
}

const oldSong = { id: 'old', title: 'Old song', artist: 'Artist', audioSrc: '/assets/same.mp3' };
const upload = (name, contents = 'new audio') => new File([contents], name);
const input = overrides => ({ id: 'new', title: 'New song', audio: upload('same.mp3'), ...overrides });

async function fixture(t, { raw = JSON.stringify([oldSong]), faults = {} } = {}) {
  const prefix = path.join(os.tmpdir(), 'bunnybeats-import-');
  const root = await fs.mkdtemp(prefix);
  t.after(async () => {
    assert(path.resolve(root).startsWith(path.resolve(prefix)));
    assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
    await fs.rm(root, { recursive: true, force: true });
  });
  await fs.mkdir(path.join(root, 'assets'));
  await fs.writeFile(path.join(root, 'assets/same.mp3'), 'original audio');
  if (raw !== null) await fs.writeFile(path.join(root, 'songs.json'), raw);
  return { root, directory: new Directory(root, faults), raw };
}

test('broken existing playlist is never replaced and creates no backup or new assets', async t => {
  for (const raw of ['{broken', '{}', '[null]']) {
    const f = await fixture(t, { raw });
    await assert.rejects(importSong(f.directory, input()));
    assert.equal(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8'), raw);
    assert.deepEqual((await fs.readdir(f.root)).sort(), ['assets', 'songs.json']);
    assert.deepEqual(await fs.readdir(path.join(f.root, 'assets')), ['same.mp3']);
  }
});

test('colliding names are saved separately and the exact old playlist is backed up', async t => {
  const f = await fixture(t, { raw: '\uFEFF[\n' + JSON.stringify(oldSong) + '\n]\n' });
  const result = await importSong(f.directory, input({ cover: upload('封面 #1.png', 'cover'), lyrics: upload('lyrics.lrc', '[00:01.00]你好') }));
  assert.equal(result.song.audioSrc, '/assets/same-2.mp3');
  assert.equal(result.song.coverUrl, '/assets/%E5%B0%81%E9%9D%A2%20%231.png');
  assert.equal(await fs.readFile(path.join(f.root, 'assets/same.mp3'), 'utf8'), 'original audio');
  assert.equal(await fs.readFile(path.join(f.root, result.backupPath), 'utf8'), f.raw);
  assert.equal(JSON.parse(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8')).length, 2);
});

test('same ID requires an explicit update and still preserves old media', async t => {
  const f = await fixture(t);
  await assert.rejects(importSong(f.directory, input({ id: 'old' })), /已存在/);
  assert.deepEqual((await fs.readdir(f.root)).sort(), ['assets', 'songs.json']);
  const result = await importSong(f.directory, input({ id: 'old', replaceExisting: true }));
  assert.equal(result.count, 1);
  assert.equal(result.song.audioSrc, '/assets/same-2.mp3');
  assert.equal(await fs.readFile(path.join(f.root, 'assets/same.mp3'), 'utf8'), 'original audio');
});

test('Unicode-equivalent and case-equivalent names are treated as collisions', async t => {
  const f = await fixture(t);
  await fs.writeFile(path.join(f.root, 'assets/e\u0301.mp3'), 'original unicode');
  const unicode = await importSong(f.directory, input({ id: 'unicode', audio: upload('é.mp3') }));
  assert.equal(unicode.song.audioSrc, '/assets/%C3%A9-2.mp3');
  assert.equal(await fs.readFile(path.join(f.root, 'assets/e\u0301.mp3'), 'utf8'), 'original unicode');
  const uppercase = await importSong(f.directory, input({ id: 'uppercase', audio: upload('SAME.MP3') }));
  assert.equal(uppercase.song.audioSrc, '/assets/SAME-2.MP3');
  assert.equal(await fs.readFile(path.join(f.root, 'assets/same.mp3'), 'utf8'), 'original audio');
});

test('asset write failure removes only this import and keeps original playlist and backup', async t => {
  const f = await fixture(t, { faults: { failClose: file => file.endsWith('cover.png') } });
  await assert.rejects(importSong(f.directory, input({ cover: upload('cover.png') })), /未提交/);
  assert.equal(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8'), f.raw);
  assert.deepEqual(await fs.readdir(path.join(f.root, 'assets')), ['same.mp3']);
  assert.equal((await fs.readdir(path.join(f.root, '.bunnybeats-backups'))).length, 1);
});

test('playlist close failure rolls back new media while retaining old playlist', async t => {
  const f = await fixture(t, { faults: { failClose: file => path.basename(file) === 'songs.json' } });
  await assert.rejects(importSong(f.directory, input()), /未提交/);
  assert.equal(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8'), f.raw);
  assert.deepEqual(await fs.readdir(path.join(f.root, 'assets')), ['same.mp3']);
});

test('failed first import does not leave an empty songs.json', async t => {
  const f = await fixture(t, { raw: null, faults: { failClose: file => path.basename(file) === 'songs.json' } });
  await assert.rejects(importSong(f.directory, input()), /未提交/);
  await assert.rejects(fs.stat(path.join(f.root, 'songs.json')), { code: 'ENOENT' });
  assert.deepEqual(await fs.readdir(path.join(f.root, 'assets')), ['same.mp3']);
});

test('concurrent external edits are detected before commit and preserved', async t => {
  const faults = {};
  const f = await fixture(t, { faults });
  const changed = JSON.stringify([{ ...oldSong, title: 'Externally edited' }]);
  faults.afterClose = async file => { if (path.basename(file) === 'same-2.mp3') await fs.writeFile(path.join(f.root, 'songs.json'), changed); };
  await assert.rejects(importSong(f.directory, input()), /其他程序修改/);
  assert.equal(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8'), changed);
  assert.deepEqual(await fs.readdir(path.join(f.root, 'assets')), ['same.mp3']);
});

test('a close error after a successful commit does not delete referenced media', async t => {
  const f = await fixture(t, { faults: { afterClose: async file => { if (path.basename(file) === 'songs.json') throw new Error('post-commit error'); } } });
  const result = await importSong(f.directory, input());
  assert.equal(result.count, 2);
  assert.equal(await fs.readFile(path.join(f.root, 'assets/same-2.mp3'), 'utf8'), 'new audio');
});

test('simultaneous saves on one handle keep both songs', async t => {
  const f = await fixture(t);
  await Promise.all([importSong(f.directory, input({ id: 'a' })), importSong(f.directory, input({ id: 'b' }))]);
  assert.deepEqual(JSON.parse(await fs.readFile(path.join(f.root, 'songs.json'), 'utf8')).map(s => s.id), ['old', 'a', 'b']);
});

test('invalid uploads fail before writing and portable names are bounded', async t => {
  const f = await fixture(t);
  await assert.rejects(importSong(f.directory, input({ audio: upload('evil.exe') })), /格式不支持/);
  await assert.rejects(importSong(f.directory, input({ lyrics: upload('empty.lrc', 'not timed lyrics') })), /时间标签/);
  assert.deepEqual((await fs.readdir(f.root)).sort(), ['assets', 'songs.json']);
  assert.equal(safeFileName('CON.mp3'), '_CON.mp3');
  assert.equal(safeFileName('../bad?.mp3'), '..-bad-.mp3');
  assert(Buffer.byteLength(safeFileName('歌曲'.repeat(200) + '.mp3')) <= 180);
});
