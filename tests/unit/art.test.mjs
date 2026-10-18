import test from 'node:test';
import assert from 'node:assert/strict';
import { seededRandom, noise, flowDirection, SpatialGrid, createFish, stepFlock, wrapText, samplePixels, bandValues, AudioFeatures, QualityGovernor } from '../../src/art/math.js';
import { defaults, sanitizeParams, readParams, themes } from '../../src/art/registry.js';
import { paletteFromPixels, fallbackPalette } from '../../src/art/palette.js';
import { FlowRenderer } from '../../src/art/renderers.js';

test('flow particles stay finite and wrap inside the canvas under pointer disturbances', () => {
  const ctx = { createRadialGradient: () => ({ addColorStop() {} }), fillRect() {}, beginPath() {}, moveTo() {}, lineTo() {}, stroke() {} };
  const renderer = new FlowRenderer(ctx, 390, 844, 2000);
  const options = { params: defaults('flow') };
  for (let i = 0; i < 300; i++) renderer.draw(1 / 60, i / 60, options, { low: 1, high: .8 }, { active: true, down: true, x: 195, y: 400, pulse: .5 }, fallbackPalette);
  assert.equal(renderer.particles.length, 2000);
  assert(renderer.particles.every(p => Number.isFinite(p.x) && Number.isFinite(p.y) && p.x >= 0 && p.x <= 390 && p.y >= 0 && p.y <= 844));
});

test('holding the pointer gathers fish; release permits the shoal to disperse again', () => {
  const fish = createFish(90, 800, 600, seededRandom(119)), grid = new SpatialGrid();
  const distance = () => fish.reduce((sum, p) => sum + Math.hypot(p.x - 400, p.y - 300), 0) / fish.length;
  const before = distance();
  for (let i = 0; i < 900; i++) stepFlock(fish, grid, 800, 600, 1 / 60, defaults('flock'), { low: 0 }, { down: true, x: 400, y: 300 }, i / 60);
  const held = distance(); assert(held < before * .6);
  for (let i = 900; i < 1800; i++) stepFlock(fish, grid, 800, 600, 1 / 60, defaults('flock'), { low: 0 }, { down: false }, i / 60);
  assert(distance() > held * 1.2);
});
test('scene settings recover from bad storage and clamp only valid finite numbers', () => {
  assert.deepEqual(readParams('flow', {
    getItem() {
      throw new Error('denied');
    }
  }), defaults('flow'));
  assert.deepEqual(readParams('flow', {
    getItem() {
      return '{bad';
    }
  }), defaults('flow'));
  const value = sanitizeParams('flock', {
    count: 900,
    speed: NaN,
    cohesion: -2,
    quality: 'unknown'
  });
  assert.equal(value.count, 120);
  assert.equal(value.speed, 1);
  assert.equal(value.cohesion, .2);
  assert.equal(value.quality, 'auto');
  assert.equal(new Set(themes.map(t => t.id)).size, 7);
});
test('seeded flow field is repeatable, continuous and finite at the screen boundaries', () => {
  const a = seededRandom(51),
    b = seededRandom(51);
  for (let i = 0; i < 30; i++) assert.equal(a(), b());
  for (const x of [-1, 0, 100, 1280]) for (const y of [-1, 0, 800]) {
    const v = flowDirection(x, y, 3, 1.2);
    assert(Number.isFinite(v.x) && Number.isFinite(v.y));
    assert(Math.abs(Math.hypot(v.x, v.y) - 1) < 1e-9);
    assert(Math.abs(noise(x, y) - noise(x + .0001, y + .0001)) < .01);
  }
});
test('spatial neighbor query includes every actual neighbor and omits distant cells', () => {
  const points = createFish(120, 1280, 800, seededRandom(2)),
    grid = new SpatialGrid(85);
  grid.build(points);
  for (const p of points) {
    const ids = grid.neighbors(p.x, p.y);
    for (let i = 0; i < points.length; i++) if (Math.hypot(points[i].x - p.x, points[i].y - p.y) < 85) assert(ids.includes(i));
  }
  assert(!grid.neighbors(-10000, -10000).length);
});
test('flock remains finite, bounded and speed limited through five simulated minutes', () => {
  const fish = createFish(200, 390, 844, seededRandom(11));
  assert.equal(fish.length, 120);
  fish[1].x = fish[0].x;
  fish[1].y = fish[0].y;
  const grid = new SpatialGrid(),
    params = {
      speed: 1,
      cohesion: 1
    },
    audio = {
      low: .7
    };
  for (let i = 0; i < 18000; i++) stepFlock(fish, grid, 390, 844, 1 / 60, params, audio, {
    down: i < 1000,
    x: 195,
    y: 320
  }, i / 60);
  for (const p of fish) {
    assert(p.x >= 1 && p.x <= 389 && p.y >= 1 && p.y <= 843);
    assert(Number.isFinite(p.vx) && Number.isFinite(p.vy));
    assert(Math.hypot(p.vx, p.vy) <= 50 * 1.455 + .0001);
  }
});
test('text wrapping preserves CJK, English and emoji without exceeding measured line width', () => {
  assert.deepEqual(wrapText('hello music', s => s.length * 10, 80).lines, ['hello', 'music']);
  for (const text of ['你好，世界 Hello world', '🎵 hello 🌊', 'a'.repeat(100)]) {
    const result = wrapText(text, s => Array.from(s).length * 10, 100);
    assert(result.lines.every(s => Array.from(s).length <= 10));
    assert.equal(result.lines.join('').replace(/\s/g, ''), text.replace(/\s/g, ''));
  }
  const pixels = new Uint8ClampedArray(200 * 100 * 4).fill(255);
  const points = samplePixels(pixels, 200, 100, 1, 2500);
  assert.equal(points.length, 2500);
  assert(points.every(p => p.x < 200 && p.y < 100));
});
test('audio bands and time-based smoothing distinguish low and high frequency inputs', () => {
  const data = new Uint8Array(128);
  data[0] = data[1] = 255;
  const low = bandValues(data);
  assert(low.low > low.high);
  const features = new AudioFeatures();
  const analyser = {
    frequencyBinCount: 128,
    fftSize: 256,
    context: {
      sampleRate: 44100
    },
    getByteFrequencyData(bytes) {
      bytes.set(data);
    }
  };
  for (let i = 0; i < 60; i++) features.read(analyser, true, 1 / 60);
  assert(features.values.low > .5);
  for (let i = 0; i < 120; i++) features.read(analyser, false, 1 / 60);
  assert(features.values.level < .001);
  assert.deepEqual(bandValues(new Uint8Array()), {
    low: 0,
    mid: 0,
    high: 0,
    level: 0
  });
});
test('quality steps down only after sustained slow frames and manual modes override it', () => {
  const governor = new QualityGovernor();
  for (let i = 0; i < 100; i++) governor.tick(1 / 20, 'auto');
  assert.equal(governor.level, 1);
  for (let i = 0; i < 100; i++) governor.tick(1 / 20, 'auto');
  assert.equal(governor.level, 2);
  governor.tick(1 / 60, 'high');
  assert.equal(governor.level, 0);
  for (let i = 0; i < 600; i++) governor.tick(1 / 60, 'high');
  assert.equal(governor.level, 0);
});
test('palette excludes transparent pixels, lifts dark colors and has a stable fallback', () => {
  assert.deepEqual(paletteFromPixels(new Uint8ClampedArray(16)), fallbackPalette);
  const palette = paletteFromPixels(new Uint8ClampedArray([80, 10, 20, 255, 80, 10, 20, 255, 255, 255, 255, 255]));
  assert.equal(palette.length, 4);
  assert.match(palette[0], /^#[0-9a-f]{6}$/);
  assert(parseInt(palette[0].slice(1, 3), 16) > 150);
});
