export const fallbackPalette = ['#65e7dd', '#8e9aff', '#f3a9d4', '#b8e7bd'];
export function paletteFromPixels(data) {
  const buckets = new Map();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    const [r, g, b] = data.slice(i, i + 3),
      max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    if (max < 35 || min > 225) continue;
    const key = `${r >> 5},${g >> 5},${b >> 5}`;
    const v = buckets.get(key) || {
      r: 0,
      g: 0,
      b: 0,
      n: 0
    };
    v.r += r;
    v.g += g;
    v.b += b;
    v.n++;
    buckets.set(key, v);
  }
  const colors = [...buckets.values()].sort((a, b) => b.n - a.n).slice(0, 4).map(v => {
    const a = [v.r / v.n, v.g / v.n, v.b / v.n],
      max = Math.max(...a),
      gain = Math.max(1, 185 / Math.max(1, max));
    return '#' + a.map(c => Math.round(Math.min(255, c * gain * .8 + 46)).toString(16).padStart(2, '0')).join('');
  });
  return colors.length ? [...colors, ...fallbackPalette].slice(0, 4) : [...fallbackPalette];
}
export function loadPalette(url, signal) {
  if (!url) return Promise.resolve([...fallbackPalette]);
  return new Promise(resolve => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    let done = false;
    const finish = value => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      image.onload = image.onerror = null;
      signal?.removeEventListener('abort', abort);
      resolve(value);
    };
    const abort = () => {
      image.src = '';
      finish([...fallbackPalette]);
    };
    const timer = setTimeout(abort, 5000);
    image.onerror = () => finish([...fallbackPalette]);
    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 32;
        const ctx = canvas.getContext('2d', {
          willReadFrequently: true
        });
        ctx.drawImage(image, 0, 0, 32, 32);
        finish(paletteFromPixels(ctx.getImageData(0, 0, 32, 32).data));
      } catch {
        finish([...fallbackPalette]);
      }
    };
    signal?.addEventListener('abort', abort, {
      once: true
    });
    if (signal?.aborted) abort();else image.src = url;
  });
}
