import { AudioFeatures, QualityGovernor, clamp } from './math.js';
import { FlowRenderer, FlockRenderer, LyricRenderer } from './renderers.js';
import { fallbackPalette } from './palette.js';
export class ArtRuntime {
  constructor(canvas, id, getOptions) {
    this.canvas = canvas;
    this.id = id;
    this.getOptions = getOptions;
    this.audio = new AudioFeatures();
    this.quality = new QualityGovernor();
    this.pointer = {
      x: 0,
      y: 0,
      active: false,
      down: false,
      pulse: 0
    };
    this.palette = [...fallbackPalette];
    this.time = 0;
    this.frames = 0;
    this.draws = 0;
    this.disposed = false;
    this.last = 0;
    this.total = 0;
    this.statsTime = 0;
    this.statsFrames = 0;
    this.ctx = canvas.getContext('2d', {
      alpha: false
    });
    if (!this.ctx) throw new Error('Canvas 2D is unavailable');
    this.resize = () => this.configure();
    this.visibility = () => {
      this.pointer.down = false;
      this.pointer.active = false;
      cancelAnimationFrame(this.raf);
      this.last = 0;
      if (!document.hidden && !this.disposed) this.raf = requestAnimationFrame(this.tick);
    };
    this.move = e => {
      if (e.isPrimary === false) return;
      const r = canvas.getBoundingClientRect();
      this.pointer.x = e.clientX - r.left;
      this.pointer.y = e.clientY - r.top;
      this.pointer.active = true;
    };
    this.down = e => {
      if (e.isPrimary === false || e.button > 0) return;
      this.move(e);
      this.pointer.down = true;
      this.pointer.pulse = 1;
      canvas.setPointerCapture?.(e.pointerId);
    };
    this.up = e => {
      this.pointer.down = false;
      if (e.pointerType === 'touch') this.pointer.active = false;
    };
    this.leave = () => {
      if (!this.pointer.down) this.pointer.active = false;
    };
    for (const [event, fn] of [['pointermove', this.move], ['pointerdown', this.down], ['pointerup', this.up], ['pointercancel', this.up], ['lostpointercapture', this.up], ['pointerleave', this.leave]]) canvas.addEventListener(event, fn);
    document.addEventListener('visibilitychange', this.visibility);
    this.observer = new ResizeObserver(this.resize);
    this.observer.observe(canvas);
    this.configure();
    this.tick = this.tick.bind(this);
    if (!document.hidden) this.raf = requestAnimationFrame(this.tick);
  }
  configure() {
    if (this.disposed) return;
    const options = this.getOptions(),
      mode = options.params.quality;
    if (mode !== this.mode) {
      this.quality = new QualityGovernor();
      this.quality.tick(0, mode);
      this.mode = mode;
    }
    const rect = this.canvas.getBoundingClientRect(),
      w = Math.max(1, Math.round(rect.width)),
      h = Math.max(1, Math.round(rect.height));
    const level = this.quality.level,
      ratio = Math.min(devicePixelRatio || 1, [2, 1.5, 1][level]);
    const count = this.id === 'flow' ? Math.round(2000 * [1, .65, .35][level]) : this.id === 'flock' ? Math.round(options.params.count * [1, .75, .5][level]) : Math.round(2500 * [1, .75, .5][level]);
    if (this.w === w && this.h === h && this.ratio === ratio && this.count === count && this.renderer) return;
    this.w = w;
    this.h = h;
    this.ratio = ratio;
    this.count = count;
    this.canvas.width = Math.round(w * ratio);
    this.canvas.height = Math.round(h * ratio);
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const Renderer = {
      flow: FlowRenderer,
      flock: FlockRenderer,
      lyric: LyricRenderer
    }[this.id];
    this.renderer = new Renderer(this.ctx, w, h, count);
    this.dirty = true;
    this.canvas.dataset.quality = ['high', 'medium', 'low'][level];
    this.canvas.dataset.particles = String(count);
  }
  invalidate() {
    this.dirty = true;
  }
  tick(timestamp) {
    if (this.disposed || document.hidden) return;
    this.raf = requestAnimationFrame(this.tick);
    const raw = this.last ? Math.max(0, (timestamp - this.last) / 1000) : 1 / 60;
    this.last = timestamp;
    const options = this.getOptions();
    this.configure();
    if (!options.playing && !this.dirty) return;
    const dt = options.playing ? clamp(raw, 0, .04) : 0;
    this.time += dt;
    const features = this.audio.read(options.analyser, options.playing, Math.max(dt, 1 / 60));
    this.renderer.draw(dt, this.time, options, features, this.pointer, this.palette);
    this.pointer.pulse = Math.max(0, this.pointer.pulse - dt * 1.5);
    this.draws++;
    this.dirty = false;
    if (options.playing) {
      this.frames++;
      this.total += raw;
      this.statsFrames++;
      this.statsTime += raw;
      if (this.quality.tick(raw, options.params.quality)) this.configure();
      if (this.statsTime >= 1) {
        this.canvas.dataset.fps = (this.statsFrames / this.statsTime).toFixed(1);
        this.canvas.dataset.frames = String(this.frames);
        this.canvas.dataset.simulationTime = this.time.toFixed(3);
        this.statsTime = 0;
        this.statsFrames = 0;
      }
    }
  }
  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.observer.disconnect();
    document.removeEventListener('visibilitychange', this.visibility);
    for (const [event, fn] of [['pointermove', this.move], ['pointerdown', this.down], ['pointerup', this.up], ['pointercancel', this.up], ['lostpointercapture', this.up], ['pointerleave', this.leave]]) this.canvas.removeEventListener(event, fn);
    this.renderer = null;
    this.audio.bytes = null;
  }
}
