export const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
export function seededRandom(seed = 73) {
  return () => {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const hash = (x, y) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
};
export function noise(x, y) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  let u = x - ix,
    v = y - iy;
  u = u * u * (3 - 2 * u);
  v = v * v * (3 - 2 * v);
  return (hash(ix, iy) * (1 - u) + hash(ix + 1, iy) * u) * (1 - v) + (hash(ix, iy + 1) * (1 - u) + hash(ix + 1, iy + 1) * u) * v;
}
export function bandValues(bytes, sampleRate = 44100, fftSize = 256) {
  const band = (lo, hi) => {
    const start = clamp(Math.floor(lo * fftSize / sampleRate), 0, bytes.length - 1),
      end = clamp(Math.ceil(hi * fftSize / sampleRate), 0, bytes.length - 1);
    let sum = 0;
    for (let i = start; i <= end; i++) sum += bytes[i] || 0;
    return sum / Math.max(1, end - start + 1) / 255;
  };
  if (!bytes.length) return {
    low: 0,
    mid: 0,
    high: 0,
    level: 0
  };
  return {
    low: band(40, 250),
    mid: band(250, 3500),
    high: band(3500, 12000),
    level: band(40, 12000)
  };
}
export class AudioFeatures {
  values = {
    low: 0,
    mid: 0,
    high: 0,
    level: 0,
    pulse: 0
  };
  read(analyser, playing, dt) {
    let next = {
      low: 0,
      mid: 0,
      high: 0,
      level: 0
    };
    if (analyser && playing) {
      if (this.bytes?.length !== analyser.frequencyBinCount) this.bytes = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(this.bytes);
      next = bandValues(this.bytes, analyser.context.sampleRate, analyser.fftSize);
    }
    const previous = this.values.level;
    for (const key of ['low', 'mid', 'high', 'level']) this.values[key] += (next[key] - this.values[key]) * (1 - Math.exp(-dt * (next[key] > this.values[key] ? 12 : 4)));
    this.values.pulse = Math.max(this.values.pulse * Math.exp(-dt * 7), clamp((next.level - previous) * 3, 0, 1));
    return this.values;
  }
}
export function flowDirection(x, y, time, curl) {
  const scale = .0028;
  const angle = noise(x * scale + time * .025, y * scale - time * .018) * Math.PI * 4 * curl;
  return {
    x: Math.cos(angle),
    y: Math.sin(angle)
  };
}
export class SpatialGrid {
  constructor(size = 85) {
    this.size = size;
    this.cells = new Map();
  }
  key(x, y) {
    return `${Math.floor(x / this.size)},${Math.floor(y / this.size)}`;
  }
  build(points) {
    this.cells.clear();
    points.forEach((p, i) => {
      const key = this.key(p.x, p.y);
      if (!this.cells.has(key)) this.cells.set(key, []);
      this.cells.get(key).push(i);
    });
  }
  neighbors(x, y) {
    const a = Math.floor(x / this.size),
      b = Math.floor(y / this.size),
      ids = [];
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) ids.push(...(this.cells.get(`${a + dx},${b + dy}`) || []));
    return ids;
  }
}
export function createFish(count, width, height, random) {
  return Array.from({
    length: clamp(Math.floor(count), 0, 120)
  }, (_, i) => ({
    x: random() * width,
    y: random() * height,
    vx: (random() - .5) * 50,
    vy: (random() - .5) * 50,
    color: i % 4,
    size: 2 + random() * 2
  }));
}
export function stepFlock(fish, grid, width, height, dt, params, audio, pointer, time) {
  grid.build(fish);
  const accelerations = fish.map((p, index) => {
    let sx = 0,
      sy = 0,
      ax = 0,
      ay = 0,
      cx = 0,
      cy = 0,
      n = 0;
    for (const id of grid.neighbors(p.x, p.y)) {
      if (id === index) continue;
      const q = fish[id],
        dx = p.x - q.x,
        dy = p.y - q.y,
        d2 = dx * dx + dy * dy;
      if (d2 > 85 * 85) continue;
      if (d2 < 25 * 25) {
        sx += dx / Math.max(4, d2);
        sy += dy / Math.max(4, d2);
      }
      ax += q.vx;
      ay += q.vy;
      cx += q.x;
      cy += q.y;
      n++;
    }
    const separation = 440 * (1 + (audio.pulse || 0) * .9),
      cohesion = params.cohesion * (1 + (audio.mid || 0) * .65);
    let fx = sx * separation,
      fy = sy * separation;
    if (n) {
      fx += (ax / n - p.vx) * .7 + (cx / n - p.x) * .22 * cohesion;
      fy += (ay / n - p.vy) * .7 + (cy / n - p.y) * .22 * cohesion;
    }
    const margin = 70;
    if (p.x < margin) fx += (margin - p.x) * .7;
    if (p.x > width - margin) fx -= (p.x - width + margin) * .7;
    if (p.y < margin) fy += (margin - p.y) * .7;
    if (p.y > height - margin) fy -= (p.y - height + margin) * .7;
    fx += Math.cos(time * .3 + index * .17) * 5;
    fy += Math.sin(time * .4 + index * .13) * 5;
    if (pointer.down) {
      const dx = pointer.x - p.x,
        dy = pointer.y - p.y,
        d = Math.hypot(dx, dy);
      if (d > 30) {
        fx += dx * .28;
        fy += dy * .28;
      }
    }
    return {
      x: fx,
      y: fy
    };
  });
  fish.forEach((p, i) => {
    p.vx += accelerations[i].x * dt;
    p.vy += accelerations[i].y * dt;
    const max = 50 * params.speed * (1 + audio.low * .65),
      length = Math.hypot(p.vx, p.vy) || 1;
    if (length > max) {
      p.vx = p.vx / length * max;
      p.vy = p.vy / length * max;
    }
    p.x = clamp(p.x + p.vx * dt, 1, Math.max(1, width - 1));
    p.y = clamp(p.y + p.vy * dt, 1, Math.max(1, height - 1));
  });
}
export function wrapText(text, measure, maxWidth, maxLines = 3) {
  const tokens = text.replace(/\s+/gu, ' ').trim().match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*|\s+|./gu) || [];
  const chars = tokens.flatMap(token => measure(token) > maxWidth ? Array.from(token) : [token]), lines = [];
  let line = '';
  for (const char of chars) {
    if (line && measure(line + char) > maxWidth) {
      lines.push(line.trim());
      line = char.trimStart();
    } else line += char;
  }
  if (line) lines.push(line.trim());
  return {
    lines,
    fits: lines.length <= maxLines && lines.every(l => measure(l) <= maxWidth)
  };
}
export function samplePixels(data, width, height, step, max = 2500) {
  const points = [];
  for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) if (data[(y * width + x) * 4 + 3] > 100) points.push({
    x,
    y
  });
  if (points.length <= max) return points;
  return Array.from({
    length: max
  }, (_, i) => points[Math.floor(i * points.length / max)]);
}
export class QualityGovernor {
  level = 0;
  slow = 0;
  elapsed = 0;
  frames = 0;
  tick(dt, mode) {
    if (mode !== 'auto') {
      this.level = {
        high: 0,
        medium: 1,
        low: 2
      }[mode] ?? 0;
      this.slow = 0;
      return false;
    }
    this.elapsed += dt;
    this.frames++;
    if (this.elapsed < 2) return false;
    const fps = this.frames / this.elapsed;
    this.elapsed = 0;
    this.frames = 0;
    this.slow = fps < 42 ? this.slow + 1 : 0;
    if (this.slow >= 2 && this.level < 2) {
      this.level++;
      this.slow = 0;
      return true;
    }
    return false;
  }
}
