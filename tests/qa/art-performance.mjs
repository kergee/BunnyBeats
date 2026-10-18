// Run after npm run build + npm run preview. Writes only ignored local evidence.
import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const duration = Math.max(30, Number(process.argv[2]) || 300);
const output = path.resolve('recovery/art-validation-20261016');
await fs.mkdir(output, { recursive: true });
const names = { flow: '音乐流场', flock: '群游花园', lyric: '歌词变形' };
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, locale: 'zh-CN' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const cdp = await context.newCDPSession(page);
await cdp.send('Performance.enable');
const result = {
  started: new Date().toISOString(), durationTarget: duration,
  environment: { platform: process.platform, node: process.version, browser: browser.version(), viewport: '1280x800', dpr: 1, headless: true },
  method: 'One continuous run; flow, flock and lyric each use one third of the duration. Default settings, local built-in audio loop. Heap is CDP JSHeapUsedSize; not whole-process memory.',
  samples: [], errors,
};
if (process.platform === 'win32') {
  result.environment.hardware = JSON.parse(execFileSync('pwsh', ['-NoProfile', '-Command', '[pscustomobject]@{CPU=(Get-CimInstance Win32_Processor).Name;GPU=@((Get-CimInstance Win32_VideoController).Name);RAMGiB=[math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory/1GB,1)} | ConvertTo-Json -Compress'], { encoding: 'utf8', windowsHide: true }));
}
async function select(id) {
  await page.mouse.move(400, 300);
  await page.locator('button[title="样式"]').click();
  await page.getByRole('dialog', { name: '样式', exact: true }).getByRole('button', { name: names[id], exact: true }).click();
  await expect(page.locator('canvas[data-scene]')).toHaveAttribute('data-scene', id);
}
try {
  await page.goto('http://127.0.0.1:4173/');
  await expect(page.locator('#app-loading')).toHaveCount(0);
  await select('flow');
  await page.locator('audio').evaluate(audio => { audio.loop = true; });
  await page.mouse.move(400, 300);
  await page.locator('button:has(svg.lucide-play)').first().click();
  await expect.poll(() => page.locator('canvas[data-scene]').getAttribute('data-frames')).not.toBeNull();
  const started = performance.now();
  let current = 'flow', nextLog = 0;
  while (performance.now() - started < duration * 1000) {
    const elapsed = (performance.now() - started) / 1000;
    const id = ['flow', 'flock', 'lyric'][Math.min(2, Math.floor(elapsed / (duration / 3)))];
    if (id !== current) { await select(id); current = id; }
    const sample = await page.locator('canvas[data-scene]').evaluate(canvas => ({
      scene: canvas.dataset.scene, fps: Number(canvas.dataset.fps) || null,
      frames: Number(canvas.dataset.frames) || 0, quality: canvas.dataset.quality,
      particles: Number(canvas.dataset.particles), width: canvas.width, height: canvas.height,
    }));
    const metrics = Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(item => [item.name, item.value]));
    result.samples.push({ seconds: Number(elapsed.toFixed(2)), ...sample, heapMiB: metrics.JSHeapUsedSize / 1048576, domNodes: metrics.Nodes });
    if (elapsed >= nextLog) { console.log(JSON.stringify(result.samples.at(-1))); nextLog += 30; }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  result.actualSeconds = (performance.now() - started) / 1000;
  result.summary = Object.keys(names).map(scene => {
    const samples = result.samples.filter(s => s.scene === scene && s.fps);
    const fps = samples.map(s => s.fps).sort((a, b) => a - b);
    return { scene, samples: samples.length, fpsMedian: fps[Math.floor(fps.length / 2)], fpsP10: fps[Math.floor(fps.length * .1)], fpsMin: fps[0], qualities: [...new Set(samples.map(s => s.quality))], heapStartMiB: samples[0]?.heapMiB, heapEndMiB: samples.at(-1)?.heapMiB, heapPeakMiB: Math.max(...samples.map(s => s.heapMiB)) };
  });
  // Collect post-GC retained heap separately, without perturbing the measured run.
  await cdp.send('HeapProfiler.collectGarbage');
  result.heapAfterGCMiB = (await cdp.send('Performance.getMetrics')).metrics.find(m => m.name === 'JSHeapUsedSize').value / 1048576;
  console.log(JSON.stringify({ actualSeconds: result.actualSeconds, summary: result.summary, heapAfterGCMiB: result.heapAfterGCMiB, errors }, null, 2));
} finally {
  await fs.writeFile(path.join(output, 'performance.json'), JSON.stringify(result, null, 2));
  await browser.close();
}
