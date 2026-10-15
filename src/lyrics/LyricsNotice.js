import { jsxRuntime } from '../recovered/vendor/react-runtime.js';
import { useTranslation } from '../recovered/vendor/i18n-runtime.js';

export function LyricsNotice({ error, onRetry }) {
  const { i18n } = useTranslation();
  if (!error) return null;
  const chinese = i18n.language.startsWith('zh');
  return jsxRuntime.jsxs('div', {
    className: 'lyrics-notice',
    role: 'status',
    children: [
      jsxRuntime.jsx('span', { children: chinese ? '歌词暂时无法加载，可继续播放。' : 'Lyrics could not be loaded. Playback is still available.' }),
      jsxRuntime.jsx('button', { type: 'button', onClick: onRetry, children: chinese ? '重试' : 'Retry' }),
    ],
  });
}
