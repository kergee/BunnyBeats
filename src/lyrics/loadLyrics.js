import { parseLyrics } from '../recovered/lyrics/parseLyrics.js';

/**
 * Load inline JSON/LRC or an external lyrics file.
 * @param {string | undefined} source
 * @param {{signal?: AbortSignal, fetcher?: typeof fetch}} options
 */
export async function loadLyrics(source, { signal, fetcher = globalThis.fetch } = {}) {
  const text = (source || '').replace(/^\uFEFF/, '').trim();
  if (!text) return [];
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  if (text.startsWith('[')) return parseLyrics(text);
  const response = await fetcher(text, { signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`Lyrics request failed (${response.status})`);
  const body = await response.text();
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  return parseLyrics(body);
}
