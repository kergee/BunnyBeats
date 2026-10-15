import { React } from '../recovered/vendor/react-runtime.js';
import { loadLyrics } from './loadLyrics.js';

// Use the very same React instance as the recovered renderer. This is a type-only import.
const { useState, useEffect } = React as Pick<typeof import('react'), 'useState' | 'useEffect'>;
interface LyricLine { time: number; text: string }
interface LyricsState {
  key: string;
  lines: LyricLine[];
  error: boolean;
}

export function useSongLyrics(song: { id: string; lrcSrc?: string }) {
  const key = JSON.stringify([song.id, song.lrcSrc || '']);
  const [state, setState] = useState<LyricsState>({ key: '', lines: [], error: false });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({ key, lines: [], error: false });
    void loadLyrics(song.lrcSrc, { signal: controller.signal }).then(lines => {
      if (active) setState({ key, lines, error: false });
    }).catch(error => {
      if (active && error?.name !== 'AbortError') setState({ key, lines: [], error: true });
    });
    return () => {
      active = false;
      controller.abort();
    };
  }, [key, attempt]);
  // The previous song's lyrics disappear in the same render as the song change.
  return {
    lines: state.key === key ? state.lines : [],
    error: state.key === key && state.error,
    retry: () => setAttempt(value => value + 1),
  };
}
