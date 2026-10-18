import { test, expect, type Page } from '@playwright/test';
import fs from 'node:fs/promises';
const names: Record<string, string> = {
  flow: '音乐流场',
  flock: '群游花园',
  lyric: '歌词变形'
};
async function select(page: Page, id: string) {
  await page.mouse.move(400, 300);
  await page.locator('button[title="样式"]').click();
  await page.getByRole('dialog', {
    name: '样式',
    exact: true
  }).getByRole('button', {
    name: names[id],
    exact: true
  }).click();
  await expect(page.locator(`canvas[data-scene="${id}"]`)).toBeVisible();
  await expect.poll(() => page.locator('aside[aria-label="样式"]').evaluate(e => { const r=e.getBoundingClientRect();return r.left>=innerWidth-1||r.top>=innerHeight-1; })).toBe(true);
}

test('lyric particles fit between the heading and controls at 800x600',async({page})=>{
  await page.setViewportSize({width:800,height:600});
  await page.route('**/songs.json',r=>r.fulfill({json:[{id:'layout-art',title:'排版检查',audioSrc:'/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3',lrcSrc:'[00:00.00]光点随着音乐轻轻呼吸 Hello, music'}]}));
  await boot(page);await select(page,'lyric');
  const bounds=await page.locator('canvas[data-scene]').evaluate((canvas:HTMLCanvasElement)=>{
    const bytes=canvas.getContext('2d')!.getImageData(0,0,canvas.width,canvas.height).data;
    let top=canvas.height,bottom=0,count=0;
    for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++){
      const i=(y*canvas.width+x)*4;
      if(Math.max(bytes[i],bytes[i+1],bytes[i+2])>100){top=Math.min(top,y);bottom=Math.max(bottom,y);count++;}
    }
    return {top,bottom,count};
  });
  expect(bounds.count).toBeGreaterThan(100);expect(bounds.top).toBeGreaterThanOrEqual(128);expect(bounds.bottom).toBeLessThan(450);
});

test('lyric retry stays usable below the header and behind scene settings on a narrow screen', async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.route('**/songs.json',r=>r.fulfill({json:[{id:'retry-art',title:'歌词重试',audioSrc:'/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3',lrcSrc:'/retry-art.lrc'}]}));
  let attempts=0;
  await page.route('**/retry-art.lrc',r=>++attempts===1?r.fulfill({status:404,body:'missing'}):r.fulfill({body:'[00:00.00]重试成功 Hello'}));
  await boot(page);await select(page,'lyric');
  await expect(page.getByRole('status')).toContainText('歌词暂时无法加载');
  const notice=await page.getByRole('status').boundingBox();expect(notice!.y).toBeGreaterThan(120);
  await page.getByRole('button',{name:'场景设置',exact:true}).click();
  await page.getByRole('dialog',{name:'场景设置',exact:true}).getByLabel('粒子密度').press('ArrowRight');
  await page.getByRole('button',{name:'关闭场景设置',exact:true}).click();
  await page.getByRole('button',{name:'重试',exact:true}).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('aria-label',/重试成功 Hello/);
});
async function boot(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('#app-loading')).toHaveCount(0);
  return errors;
}
for (const id of ['flow', 'flock', 'lyric']) {
  test(`${id}: music advances, pause freezes, PNG matches the canvas without controls`, async ({
    page
  }, info) => {
    const errors = await boot(page);
    await select(page, id);
    const canvas = page.locator('canvas[data-scene]');
    await page.mouse.move(420, 300);
    await page.locator('button:has(svg.lucide-play)').first().click();
    await expect.poll(() => canvas.getAttribute('data-frames')).not.toBeNull();
    await expect.poll(async () => Number(await canvas.getAttribute('data-fps'))).toBeGreaterThan(0);
    await page.mouse.move(430, 300);
    await page.mouse.down();
    await page.mouse.move(600, 330, {
      steps: 12
    });
    await page.mouse.up();
    await expect(page.locator('audio')).toHaveJSProperty('paused', false);
    await page.locator('button:has(svg.lucide-pause)').first().click();
    await expect(page.locator('audio')).toHaveJSProperty('paused', true);
    // A frame boundary lets the pause prop reach the engine before capturing.
    await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
    const before = await canvas.evaluate((c: HTMLCanvasElement) => c.toDataURL());
    await page.getByRole('button', {
      name: '保存画面 PNG',
      exact: true
    }).focus();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {
      name: '保存画面 PNG',
      exact: true
    }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(new RegExp(`^BunnyBeats-${id}-.*\\.png$`));
    const file = info.outputPath(`${id}.png`);
    await download.saveAs(file);
    const png = await fs.readFile(file);
    expect(png.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
    const dimensions = await canvas.evaluate((c: HTMLCanvasElement) => ({
      w: c.width,
      h: c.height
    }));
    expect(png.readUInt32BE(16)).toBe(dimensions.w);
    expect(png.readUInt32BE(20)).toBe(dimensions.h);
    const after = await canvas.evaluate((c: HTMLCanvasElement) => c.toDataURL());
    expect(after === before).toBe(true);
    // PNG encoders may choose different compression; compare decoded pixels instead.
    const samePixels = await canvas.evaluate(async (c: HTMLCanvasElement, url) => {
      const image = new Image();
      image.src = url;
      await image.decode();
      const copy = document.createElement('canvas');
      copy.width = c.width;
      copy.height = c.height;
      const ctx = copy.getContext('2d')!;
      ctx.drawImage(image, 0, 0);
      const actual = ctx.getImageData(0, 0, c.width, c.height).data,
        expected = c.getContext('2d')!.getImageData(0, 0, c.width, c.height).data;
      return actual.every((value, i) => value === expected[i]);
    }, `data:image/png;base64,${png.toString('base64')}`);
    expect(samePixels).toBe(true);
    expect(png.length).toBeGreaterThan(2000);
    expect(errors).toEqual([]);
    await page.screenshot({
      path: info.outputPath(`${id}-player.png`)
    });
  });
}
test('settings persist across reload; low quality and reset update the canvas', async ({
  page
}) => {
  await boot(page);
  await select(page, 'flow');
  await page.getByRole('button', {
    name: '场景设置',
    exact: true
  }).click();
  const panel = page.getByRole('dialog', {
    name: '场景设置',
    exact: true
  });
  for (let i = 0; i < 7; i++) await panel.getByLabel('流速').press('ArrowRight');
  await panel.getByLabel('画质').selectOption('low');
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('data-particles', '700');
  await page.reload();
  await select(page, 'flow');
  await page.getByRole('button', {
    name: '场景设置',
    exact: true
  }).click();
  await expect(panel.getByLabel('流速')).toHaveValue('1.7');
  await expect(panel.getByLabel('画质')).toHaveValue('low');
  await panel.getByRole('button', {
    name: '恢复默认'
  }).click();
  await expect(panel.getByLabel('流速')).toHaveValue('1');
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('data-particles', '2000');
});
test('lyric morph uses current line, seeks while paused, and clears text on rapid song changes', async ({
  page
}) => {
  const audio = '/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3';
  await page.route('**/songs.json', r => r.fulfill({
    json: [{
      id: 'one',
      title: 'Song one',
      audioSrc: audio,
      lrcSrc: '[00:00.00]你好 Hello\n[00:10.00]下一句 Next line'
    }, {
      id: 'two',
      title: '无歌词标题',
      audioSrc: audio,
      coverUrl: '/not-found.png'
    }]
  }));
  const errors = await boot(page);
  await select(page, 'lyric');
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('aria-label', /你好 Hello/);
  const before = await page.locator('canvas[data-scene]').evaluate((c: HTMLCanvasElement) => c.toDataURL());
  await page.locator('audio').evaluate((a: HTMLAudioElement) => {
    a.currentTime = 15;
    a.dispatchEvent(new Event('timeupdate'));
  });
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('aria-label', /下一句 Next line/);
  await expect.poll(() => page.locator('canvas[data-scene]').evaluate((c: HTMLCanvasElement) => c.toDataURL())).not.toBe(before);
  await page.mouse.move(420, 300);
  await page.locator('button:has(svg rect[x="16.5"])').first().click();
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('aria-label', /无歌词标题/);
  await expect(page.locator('canvas[data-scene]')).not.toHaveAttribute('aria-label', /下一句/);
  expect(errors).toEqual([]);
});
test('touch and resize keep all art scenes within a narrow viewport', async ({
  browser
}) => {
  const context = await browser.newContext({
    viewport: {
      width: 390,
      height: 844
    },
    hasTouch: true,
    isMobile: true,
    locale: 'zh-CN',
    deviceScaleFactor: 2
  });
  const page = await context.newPage();
  const errors = await boot(page);
  for (const id of ['flow', 'flock', 'lyric']) {
    // Mobile drawer slides vertically, so use its aria state after selection.
    await page.touchscreen.tap(180, 250);
    await page.locator('button[title="样式"]').click();
    await page.getByRole('dialog', {
      name: '样式',
      exact: true
    }).getByRole('button', {
      name: names[id],
      exact: true
    }).click();
    await expect(page.locator(`canvas[data-scene="${id}"]`)).toBeVisible();
    await page.touchscreen.tap(160, 350);
    await page.getByRole('button', {
      name: '场景设置',
      exact: true
    }).click();
    const box = await page.getByRole('dialog', {
      name: '场景设置',
      exact: true
    }).boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(390);
    const dims = await page.locator('canvas[data-scene]').evaluate((c: HTMLCanvasElement) => ({
      w: c.width,
      h: c.height
    }));
    expect(dims.w).toBeLessThanOrEqual(780);
    expect(dims.h).toBeLessThanOrEqual(1688);
    await page.getByRole('button', {
      name: '关闭场景设置',
      exact: true
    }).click();
  }
  expect(errors).toEqual([]);
  await context.close();
});
test('switching scenes releases animation callbacks and hidden-document simulation stops updates', async ({
  page
}) => {
  await page.addInitScript(() => {
    const request = window.requestAnimationFrame.bind(window),
      cancel = window.cancelAnimationFrame.bind(window),
      pending = new Set<number>();
    (window as any).pendingAnimationFrames = pending;
    window.requestAnimationFrame = callback => {
      let id = 0;
      id = request(time => {
        pending.delete(id);
        callback(time);
      });
      pending.add(id);
      return id;
    };
    window.cancelAnimationFrame = id => {
      pending.delete(id);
      cancel(id);
    };
  });
  await boot(page);
  for (const id of ['flow', 'flock', 'lyric', 'flow', 'flock', 'lyric']) await select(page, id);
  expect(await page.evaluate(() => (window as any).pendingAnimationFrames.size)).toBeLessThanOrEqual(3);
  await page.mouse.move(400, 300);
  await page.locator('button:has(svg.lucide-play)').first().click();
  await expect.poll(() => page.locator('canvas[data-scene]').getAttribute('data-frames')).not.toBeNull();
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => true
    });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  const count = await page.locator('canvas[data-scene]').getAttribute('data-frames');
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1100)));
  expect(await page.locator('canvas[data-scene]').getAttribute('data-frames')).toBe(count);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => false
    });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  // The existing player intentionally pauses on backgrounding; resume via its play control.
  await expect(page.locator('audio')).toHaveJSProperty('paused', true);
  await page.mouse.move(400, 300);
  await page.locator('button:has(svg.lucide-play)').first().click();
  await expect.poll(() => page.locator('canvas[data-scene]').getAttribute('data-frames')).not.toBe(count);
});
