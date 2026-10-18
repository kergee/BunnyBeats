import { clamp, seededRandom, flowDirection, SpatialGrid, createFish, stepFlock, wrapText, samplePixels } from './math.js';
export function paintBackground(ctx, w, h, alpha = 1) {
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = alpha;
  const gradient = ctx.createRadialGradient(w * .5, h * .45, 0, w * .5, h * .5, Math.max(w, h) * .8);
  gradient.addColorStop(0, '#111b30');
  gradient.addColorStop(.5, '#090f20');
  gradient.addColorStop(1, '#040811');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;
}
export class FlowRenderer {
  constructor(ctx, w, h, count) {
    this.ctx = ctx;
    this.resize(w, h, count);
  }
  resize(w, h, count) {
    this.w = w;
    this.h = h;
    this.random = seededRandom(197);
    this.particles = Array.from({
      length: count
    }, (_, i) => ({
      x: this.random() * w,
      y: this.random() * h,
      age: this.random() * 300,
      color: i % 4
    }));
    this.initial = true;
  }
  draw(dt, time, options, audio, pointer, palette) {
    const {
        ctx,
        w,
        h
      } = this,
      params = options.params;
    paintBackground(ctx, w, h, this.initial ? 1 : clamp(.09 - params.trail * .075, .012, .09));
    const rounds = this.initial ? 55 : 1;
    this.initial = false;
    for (let round = 0; round < rounds; round++) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = .7 + (audio.high || 0) * .9;
      for (let color = 0; color < 4; color++) {
        ctx.strokeStyle = palette[color];
        ctx.globalAlpha = .22;
        ctx.beginPath();
        for (let i = color; i < this.particles.length; i += 4) {
          const p = this.particles[i],
            dir = flowDirection(p.x, p.y, time, params.curl);
          if (pointer.active) {
            const dx = p.x - pointer.x,
              dy = p.y - pointer.y,
              d = Math.hypot(dx, dy) || 1,
              force = Math.max(0, 1 - d / 180) * (pointer.down ? 2.5 : .7);
            dir.x += -dy / d * force;
            dir.y += dx / d * force;
            if (pointer.pulse > 0) {
              const ring = Math.abs(d - (1 - pointer.pulse) * 200);
              const f = Math.max(0, 1 - ring / 55) * pointer.pulse * 3;
              dir.x += dx / d * f;
              dir.y += dy / d * f;
            }
          }
          const speed = 35 * params.speed * (1 + audio.low * params.response * 1.8),
            step = rounds > 1 ? 1 / 45 : dt;
          const x = p.x,
            y = p.y;
          p.x += dir.x * speed * step;
          p.y += dir.y * speed * step;
          p.age += step * 60;
          if (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.age > 360) {
            p.x = this.random() * w;
            p.y = this.random() * h;
            p.age = 0;
            continue;
          }
          ctx.moveTo(x, y);
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
export class FlockRenderer {
  constructor(ctx, w, h, count) {
    this.ctx = ctx;
    this.grid = new SpatialGrid();
    this.resize(w, h, count);
  }
  resize(w, h, count) {
    this.w = w;
    this.h = h;
    this.fish = createFish(count, w, h, seededRandom(119));
  }
  draw(dt, time, options, audio, pointer, palette) {
    const {
      ctx,
      w,
      h
    } = this;
    paintBackground(ctx, w, h);
    stepFlock(this.fish, this.grid, w, h, dt, options.params, audio, pointer, time);
    // Quiet suspended plankton give the scene depth without image assets.
    ctx.fillStyle = '#8fa8c5';
    ctx.globalAlpha = .17;
    for (let i = 0; i < 45; i++) {
      const x = (Math.sin(i * 73.1) * .5 + .5) * w,
        y = (i * 53.7 + time * 3) % h;
      ctx.beginPath();
      ctx.arc(x, y, i % 3 === 0 ? 1.3 : .6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (const [i, p] of this.fish.entries()) {
      const angle = Math.atan2(p.vy, p.vx),
        size = p.size * (1 + audio.mid * .3),
        tail = Math.sin(time * 9 + i) * 1.4;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(angle);
      ctx.fillStyle = palette[p.color];
      ctx.shadowColor = palette[p.color];
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 2.1, size * .65, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = .6;
      ctx.beginPath();
      ctx.moveTo(-size * 1.4, 0);
      ctx.lineTo(-size * 3.2, size + tail);
      ctx.lineTo(-size * 3.2, -size + tail);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ecffff';
      ctx.beginPath();
      ctx.arc(size, .0, .65, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    if (pointer.down) {
      ctx.strokeStyle = palette[0];
      ctx.globalAlpha = .25;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 20 + Math.sin(time * 2) * 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }
}
export function textTargets(text, w, h, count, density = 1, bottomInset = 140) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(w));
  canvas.height = Math.max(1, Math.round(h));
  const ctx = canvas.getContext('2d', {
    willReadFrequently: true
  });
  const top = Math.min(132, h * .35), bottom = Math.max(top + 24, h - Math.max(120, bottomInset + 24));
  const available = bottom - top, centerY = (top + bottom) / 2;
  let font = Math.min(88, w * .12),
    layout;
  const fits = () => layout.fits && font * (1 + Math.max(0, layout.lines.length - 1) * 1.38) <= available;
  const setFont = () => {
    ctx.font = `600 ${font}px "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif`;
  };
  do {
    setFont();
    layout = wrapText(text, s => ctx.measureText(s).width, w * .8);
    if (fits()) break;
    font -= 1;
  } while (font > 8);
  // Very long lines scale further rather than silently dropping lyric characters.
  while (!fits() && font > 1) {
    font *= .85;
    setFont();
    layout = wrapText(text, s => ctx.measureText(s).width, w * .8);
  }
  const lineHeight = font * 1.38;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  layout.lines.forEach((line, i) => ctx.fillText(line, w * .5, centerY + (i - (layout.lines.length - 1) / 2) * lineHeight));
  const points = samplePixels(ctx.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height, Math.max(2, Math.round(4 / density)), count);
  return {
    points,
    centerY,
    font,
    lines: layout.lines
  };
}
export class LyricRenderer {
  constructor(ctx, w, h, count) {
    this.ctx = ctx;
    this.resize(w, h, count);
  }
  resize(w, h, count) {
    this.w = w;
    this.h = h;
    this.count = count;
    this.key = '';
    this.particles = [];
    this.random = seededRandom(51);
  }
  setText(text, density, instant = false, bottomInset = 140) {
    if (this.key === `${text}:${density}:${bottomInset}`) return;
    const initial = !this.particles.length || instant;
    this.transition = initial ? 0 : 1;
    this.key = `${text}:${density}:${bottomInset}`;
    this.layout = textTargets(text, this.w, this.h, this.count, density, bottomInset);
    const previous = this.particles;
    this.particles = this.layout.points.map((target, i) => {
      const old = previous.length ? previous[Math.floor(i * previous.length / this.layout.points.length)] : null;
      return {
        x: initial ? target.x : old?.x ?? this.w / 2,
        y: initial ? target.y : old?.y ?? this.h / 2,
        tx: target.x,
        ty: target.y,
        vx: initial ? 0 : (this.random() - .5) * 440,
        vy: initial ? 0 : (this.random() - .5) * 400,
        color: i % 4
      };
    });
  }
  draw(dt, time, options, audio, pointer, palette) {
    const {
      ctx,
      w,
      h
    } = this;
    this.setText(options.lyric || options.title || 'BunnyBeats', options.params.density, !options.playing, options.bottomInset);
    paintBackground(ctx, w, h);
    const expansion = 1 + Math.sin(time * 1.8) * audio.level * .025 * options.params.breath;
    this.transition = Math.max(0, this.transition - dt * options.params.gather);
    const spring = 45 * options.params.gather * clamp(1 - this.transition / .8, 0, 1),
      drag = Math.exp(-dt * (this.transition > .8 ? 3 : 10));
    for (const p of this.particles) {
      const tx = w / 2 + (p.tx - w / 2) * expansion,
        ty = this.layout.centerY + (p.ty - this.layout.centerY) * expansion;
      p.vx += (tx - p.x) * spring * dt;
      p.vy += (ty - p.y) * spring * dt;
      if (pointer.active) {
        const dx = p.x - pointer.x,
          dy = p.y - pointer.y,
          d = Math.hypot(dx, dy) || 1;
        if (d < 85) {
          const f = (1 - d / 85) * 700 * dt;
          p.vx += dx / d * f;
          p.vy += dy / d * f;
        }
      }
      p.vx *= drag;
      p.vy *= drag;
      p.x = clamp(p.x + p.vx * dt, -30, w + 30);
      p.y = clamp(p.y + p.vy * dt, -30, h + 30);
    }
    for (let color = 0; color < 4; color++) {
      ctx.fillStyle = palette[color];
      ctx.globalAlpha = .95;
      ctx.beginPath();
      for (let i = color; i < this.particles.length; i += 4) {
        const p = this.particles[i];
        ctx.moveTo(p.x + 1.2, p.y);
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
      }
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}
