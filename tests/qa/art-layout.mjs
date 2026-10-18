// Inspect the generated screenshots as well as the geometry assertions.
import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';
const output = path.resolve('recovery/art-validation-20261016');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const records = [];
try {
  for (const [width, height] of [[800, 600], [1280, 800], [390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height }, locale: 'zh-CN', hasTouch: width === 390, deviceScaleFactor: width === 390 ? 2 : 1 });
    const page = await context.newPage();
    await page.route('**/songs.json', route => route.fulfill({ json: [{ id: 'art-layout', title: '光与音乐', artist: '布局测试', audioSrc: '/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3', lrcSrc: '[00:00.00]光点随着音乐轻轻呼吸 Hello, music', coverUrl: '/missing-cover.png' }] }));
    await page.goto('http://127.0.0.1:4173/');
    await expect(page.locator('#app-loading')).toHaveCount(0);
    for (const [id, name] of [['flow', '音乐流场'], ['flock', '群游花园'], ['lyric', '歌词变形']]) {
      await page.mouse.move(200, 230);
      await page.locator('button[title="样式"]').click();
      await page.getByRole('dialog', { name: '样式', exact: true }).getByRole('button', { name, exact: true }).click();
      await expect(page.locator('canvas[data-scene]')).toHaveAttribute('data-scene', id);
      await expect.poll(() => page.locator('aside[aria-label="样式"]').evaluate(e => { const r = e.getBoundingClientRect(); return r.left >= innerWidth - 1 || r.top >= innerHeight - 1; })).toBe(true);
      await page.mouse.move(200, 230);
      await page.screenshot({ path: path.join(output, `${id}-${width}x${height}.png`) });
      await page.getByRole('button', { name: '场景设置', exact: true }).click();
      const box = await page.getByRole('dialog', { name: '场景设置', exact: true }).boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(width);
      expect(box.y + box.height).toBeLessThan(height);
      await page.screenshot({ path: path.join(output, `${id}-settings-${width}x${height}.png`) });
      records.push({ id, width, height, panel: box, canvas: await page.locator('canvas[data-scene]').evaluate(c => ({ width: c.width, height: c.height, label: c.getAttribute('aria-label') })) });
      await page.getByRole('button', { name: '关闭场景设置', exact: true }).click();
    }
    await context.close();
  }
  await fs.writeFile(path.join(output, 'layout.json'), JSON.stringify(records, null, 2));
  console.log(`${records.length} scene / viewport combinations recorded`);
} finally { await browser.close(); }
