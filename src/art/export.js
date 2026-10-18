export function canvasPng(canvas) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('PNG encoding failed')), 'image/png');
    } catch (error) {
      reject(error);
    }
  });
}
export async function saveScene(canvas, id) {
  const blob = await canvasPng(canvas);
  if (blob.size > 32 * 1024 * 1024) throw new Error('PNG exceeds 32 MB');
  if (globalThis.__TAURI_INTERNALS__) {
    const {
      invoke
    } = await import('@tauri-apps/api/core');
    return invoke('save_scene_png', {
      bytes: Array.from(new Uint8Array(await blob.arrayBuffer())),
      scene: id
    });
  }
  const url = URL.createObjectURL(blob),
    link = document.createElement('a');
  link.href = url;
  link.download = `BunnyBeats-${id}-${new Date().toISOString().replace(/[:.]/g, '-')}.png`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  return 'downloaded';
}
