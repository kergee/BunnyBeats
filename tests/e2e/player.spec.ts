import { test, expect, type Page } from '@playwright/test';

const audio = '/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3';
const cover = '/assets/Ditto%20-%20250%20Remix-C6lqyMPC.webp';
const song = (id: string, lrcSrc = '') => ({
  id, title: `Song ${id}`, artist: 'QA', audioSrc: `${audio}?song=${id}`,
  coverUrl: cover, lrcSrc, themeColor: '#F05A66', cubesTheme: 'pink',
});
async function playlist(page: Page, songs: ReturnType<typeof song>[]) {
  await page.route('**/songs.json', route => route.fulfill({ json: songs }));
}
async function next(page: Page) {
  await page.mouse.move(410, 300);
  await page.locator('button:has(svg rect[x="16.5"])').first().click();
}
async function boot(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#app-loading')).toHaveCount(0);
  await expect(page.locator('audio')).toHaveCount(1);
  return errors;
}

test('built-in playlist plays and a real pointer seek restores sound', async ({ page }) => {
  const errors = await boot(page);
  await expect(page.locator('audio')).toHaveJSProperty('readyState', 4);
  await page.mouse.move(400, 300);
  await page.locator('button:has(svg.lucide-play)').first().click();
  await expect.poll(() => page.locator('audio').evaluate(a => (a as HTMLAudioElement).currentTime)).toBeGreaterThan(0.1);
  const box = await page.locator('input[type=range]').first().boundingBox();
  expect(box).not.toBeNull();
  await page.mouse.move(box!.x + 3, box!.y + box!.height / 2);
  await page.mouse.down();
  await page.mouse.move(box!.x + box!.width * 0.4, box!.y + box!.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect.poll(() => page.locator('audio').evaluate(a => (a as HTMLAudioElement).currentTime)).toBeGreaterThan(60);
  await expect(page.locator('audio')).toHaveJSProperty('muted', false);
  await expect(page.locator('audio')).toHaveJSProperty('paused', false);
  await next(page);
  await expect(page.locator('audio')).toHaveAttribute('src', /Supernatural/);
  expect(errors).toEqual([]);
});

test('custom playlist loads external UTF-8 LRC instead of parsing its URL', async ({ page }) => {
  await playlist(page, [song('external', '/assets/test-lyrics.lrc')]);
  await page.route('**/assets/test-lyrics.lrc', r => r.fulfill({ contentType: 'text/plain; charset=utf-8', body: '\uFEFF[00:00.00]外部歌词已加载\r\n[00:04.50]第二句歌词' }));
  const errors = await boot(page);
  await expect(page.locator('body')).toContainText('外部歌词已加载', { timeout: 10000 });
  expect(errors).toEqual([]);
});

test('fast song changes abort old lyric requests and a song without lyrics clears the previous lines', async ({ page }) => {
  await playlist(page, [song('first', '[00:00.00]FIRST_LINE'), song('slow', '/slow.lrc'), song('empty')]);
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/slow.lrc', async route => {
    await gate;
    await route.fulfill({ body: '[00:00.00]STALE_SLOW_LINE' }).catch(() => {});
  });
  await boot(page);
  await expect(page.locator('body')).toContainText('FIRST_LINE', { timeout: 10000 });
  const started = page.waitForRequest('**/slow.lrc');
  await next(page);
  const request = await started;
  const cancelled = page.waitForEvent('requestfailed', { predicate: r => r === request });
  await next(page);
  await expect(page.locator('audio')).toHaveAttribute('src', /song=empty/);
  await cancelled;
  release();
  await expect(page.locator('body')).not.toContainText('FIRST_LINE');
  await expect(page.locator('body')).not.toContainText('STALE_SLOW_LINE');
});

test('lyric HTTP errors show a retry action without breaking playback', async ({ page }) => {
  await playlist(page, [song('retry', '/retry.lrc')]);
  let attempts = 0;
  await page.route('**/retry.lrc', r => ++attempts === 1
    ? r.fulfill({ status: 404, body: 'missing' })
    : r.fulfill({ body: '[00:00.00]RETRIED_LYRIC' }));
  await boot(page);
  await expect(page.getByRole('status')).toContainText('歌词暂时无法加载');
  await page.getByRole('button', { name: '重试', exact: true }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await expect(page.locator('body')).toContainText('RETRIED_LYRIC', { timeout: 10000 });
});

test('all four visualizers load and settings survive reload', async ({ page }) => {
  const errors = await boot(page);
  for (const name of ['飞天小女警', 'BNZ兔兔蹦床', '粒子封面', '涂鸦唱片', 'BNZ兔兔蹦床']) {
    await page.mouse.move(430, 300);
    await page.locator('button[title="样式"]').click();
    await page.getByRole('dialog', { name: '样式', exact: true }).getByRole('button', { name: new RegExp(name) }).click();
    await expect(page.getByRole('dialog', { name: '样式', exact: true })).toHaveCount(0);
    if (name === '涂鸦唱片') await expect(page.locator('img[alt="Vinyl Record"]')).toBeVisible();
    else await expect.poll(() => page.locator('canvas').evaluate(c => c.width)).toBe(1280);
  }
  await page.mouse.move(450, 310);
  await page.locator('button:has(svg.lucide-settings-2)').click();
  const slider = page.getByText('跳跃高度', { exact: true }).locator('..').locator('..').getByRole('slider');
  await slider.press('ArrowRight');
  await expect(slider).toHaveValue('1');
  await page.reload();
  await page.mouse.move(450, 310);
  await page.locator('button:has(svg.lucide-settings-2)').click();
  await expect(page.getByText('跳跃高度', { exact: true }).locator('..').locator('..').getByRole('slider')).toHaveValue('1');
  expect(errors).toEqual([]);
});

test('invalid custom metadata safely falls back to the built-in playlist', async ({ page }) => {
  await page.route('**/songs.json', r => r.fulfill({ json: [null] }));
  const errors = await boot(page);
  await expect(page.locator('audio')).toHaveAttribute('src', /Ditto/);
  expect(errors).toEqual([]);
});
