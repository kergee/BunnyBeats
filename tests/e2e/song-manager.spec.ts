import { test, expect, type Page } from '@playwright/test';

const originalSong = { id: 'old', title: 'Old', artist: 'QA', audioSrc: '/assets/same.mp3' };
async function prepare(page: Page, raw: string) {
  await page.goto('/song-manager.html');
  await page.evaluate(async text => {
    const directory = await (await navigator.storage.getDirectory()).getDirectoryHandle('project', { create: true });
    const write = async (dir: FileSystemDirectoryHandle, name: string, value: string) => {
      const stream = await (await dir.getFileHandle(name, { create: true })).createWritable();
      await stream.write(value); await stream.close();
    };
    await write(directory, 'songs.json', text);
    await write(await directory.getDirectoryHandle('assets', { create: true }), 'same.mp3', 'ORIGINAL_AUDIO');
    (window as any).testDirectory = directory;
    (window as any).showDirectoryPicker = async () => directory;
  }, raw);
}

test('real Chromium filesystem import keeps colliding media and backs up the playlist', async ({ page }) => {
  const raw = JSON.stringify([originalSong], null, 2);
  await prepare(page, raw);
  await page.getByRole('button', { name: '1. 选择项目文件夹' }).click();
  await expect(page.getByRole('status')).toContainText('现有 1 首歌曲');
  await page.getByLabel('歌曲 ID').fill('new');
  await page.getByLabel('歌名', { exact: true }).fill('New song');
  await page.getByLabel('音频文件').setInputFiles({ name: 'same.mp3', mimeType: 'audio/mpeg', buffer: Buffer.from('NEW_AUDIO') });
  await page.getByLabel('歌词文件').setInputFiles({ name: '中文 歌词.lrc', mimeType: 'text/plain', buffer: Buffer.from('[00:00.00]新的歌词') });
  await page.getByRole('button', { name: '2. 保存歌曲' }).click();
  await expect(page.getByRole('status')).toContainText('已保存「New song」');
  const result = await page.evaluate(async () => {
    const dir: FileSystemDirectoryHandle = (window as any).testDirectory;
    const read = async (d: FileSystemDirectoryHandle, n: string) => (await (await d.getFileHandle(n)).getFile()).text();
    const songs = JSON.parse(await read(dir, 'songs.json'));
    const assets = await dir.getDirectoryHandle('assets');
    const backups = await dir.getDirectoryHandle('.bunnybeats-backups');
    const backupNames = [];
    for await (const name of (backups as any).keys()) backupNames.push(name);
    return { songs, old: await read(assets, 'same.mp3'), added: await read(assets, 'same-2.mp3'), backup: await read(backups, backupNames[0]) };
  });
  expect(result.old).toBe('ORIGINAL_AUDIO');
  expect(result.added).toBe('NEW_AUDIO');
  expect(result.backup).toBe(raw);
  expect(result.songs).toHaveLength(2);
  expect(result.songs[1].lrcSrc).toContain('%E4%B8%AD%E6%96%87%20');
  await expect(page.getByRole('button', { name: '2. 保存歌曲' })).toBeEnabled();
});

test('corrupt JSON selected in the manager remains untouched and saving is blocked', async ({ page }) => {
  await prepare(page, JSON.stringify([originalSong]));
  await page.getByRole('button', { name: '1. 选择项目文件夹' }).click();
  await expect(page.getByRole('button', { name: '2. 保存歌曲' })).toBeEnabled();
  await page.evaluate(async () => {
    const bad = await (await navigator.storage.getDirectory()).getDirectoryHandle('broken-project', { create: true });
    const writable = await (await bad.getFileHandle('songs.json', { create: true })).createWritable();
    await writable.write('{broken'); await writable.close();
    (window as any).testDirectory = bad;
    (window as any).showDirectoryPicker = async () => bad;
  });
  await page.getByRole('button', { name: '1. 选择项目文件夹' }).click();
  await expect(page.getByRole('status')).toContainText('无法解析');
  await expect(page.getByRole('button', { name: '2. 保存歌曲' })).toBeDisabled();
  const raw = await page.evaluate(async () => (await (await (window as any).testDirectory.getFileHandle('songs.json')).getFile()).text());
  expect(raw).toBe('{broken');
});

test('duplicate IDs require the update checkbox; explicit updates preserve original audio', async ({ page }) => {
  await prepare(page, JSON.stringify([originalSong]));
  await page.getByRole('button', { name: '1. 选择项目文件夹' }).click();
  await page.getByLabel('歌曲 ID').fill('old');
  await page.getByLabel('歌名', { exact: true }).fill('Updated');
  await page.getByLabel('音频文件').setInputFiles({ name: 'same.mp3', mimeType: 'audio/mpeg', buffer: Buffer.from('UPDATED') });
  await page.getByRole('button', { name: '2. 保存歌曲' }).click();
  await expect(page.getByRole('status')).toContainText('已存在');
  await page.getByLabel('替换同 ID 歌曲').check();
  await page.getByRole('button', { name: '2. 保存歌曲' }).click();
  await expect(page.getByRole('status')).toContainText('歌单共 1 首');
  await expect(page.getByLabel('替换同 ID 歌曲')).not.toBeChecked();
  const original = await page.evaluate(async () => {
    const assets = await (window as any).testDirectory.getDirectoryHandle('assets');
    return (await (await assets.getFileHandle('same.mp3')).getFile()).text();
  });
  expect(original).toBe('ORIGINAL_AUDIO');
});
