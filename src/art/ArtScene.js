import { React, jsxRuntime as jsx } from '../recovered/vendor/react-runtime.js';
import { useTranslation } from '../recovered/vendor/i18n-runtime.js';
import { controls, defaults, readParams, themes } from './registry.js';
import { ArtRuntime } from './runtime.js';
import { loadPalette } from './palette.js';
import { saveScene } from './export.js';
import { LyricsNotice } from '../lyrics/LyricsNotice.js';
import './art.css';
export function ArtScene({
  id,
  analyser,
  playing,
  coverUrl,
  title,
  lyric,
  error,
  onRetry,
  uiHidden,
  blocked,
  bottomInset
}) {
  const {
      i18n
    } = useTranslation(),
    zh = i18n.language.startsWith('zh');
  const [params, setParams] = React.useState(() => readParams(id));
  const [open, setOpen] = React.useState(false),
    [message, setMessage] = React.useState(''),
    [saving, setSaving] = React.useState(false);
  const canvas = React.useRef(null),
    runtime = React.useRef(null),
    messageTimer = React.useRef(null);
  const options = React.useRef(null);
  options.current = {
    analyser,
    playing,
    params,
    lyric,
    title,
    bottomInset
  };
  React.useEffect(() => {
    try {
      localStorage.setItem(`bunnybeats.art.${id}.v1`, JSON.stringify(params));
    } catch {/* Private mode/storage limits do not block playback. */}
    runtime.current?.invalidate();
  }, [id, params, lyric, title, bottomInset]);
  React.useEffect(() => {
    let engine;
    try {
      engine = new ArtRuntime(canvas.current, id, () => options.current);
      runtime.current = engine;
    } catch {
      setMessage(zh ? '当前设备无法绘制此场景，请选择其他样式。' : 'This scene is unavailable. Please choose another style.');
    }
    return () => {
      engine?.dispose();
      runtime.current = null;
      clearTimeout(messageTimer.current);
    };
  }, [id]);
  React.useEffect(() => {
    const controller = new AbortController();
    void loadPalette(coverUrl, controller.signal).then(palette => {
      if (!controller.signal.aborted && runtime.current) {
        runtime.current.palette = palette;
        runtime.current.invalidate();
      }
    });
    return () => controller.abort();
  }, [coverUrl, id]);
  React.useEffect(() => {
    if (blocked) {
      setOpen(false);
      if (runtime.current) {
        runtime.current.pointer.active = false;
        runtime.current.pointer.down = false;
      }
    }
  }, [blocked]);
  React.useEffect(() => {
    if (!open) return;
    const close = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const notify = text => {
    setMessage(text);
    clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setMessage(''), 4500);
  };
  const save = async () => {
    if (saving || !runtime.current) return;
    setSaving(true);
    try {
      const result = await saveScene(canvas.current, id);
      if (result !== 'cancelled') notify(zh ? result === 'downloaded' ? 'PNG 已开始下载。' : 'PNG 已保存。' : result === 'downloaded' ? 'PNG download started.' : 'PNG saved.');
    } catch (error) {
      notify((zh ? '保存失败：' : 'Save failed: ') + String(error.message || error));
    } finally {
      setSaving(false);
    }
  };
  const theme = themes.find(t => t.id === id),
    label = zh ? theme.zh : theme.en;
  const hint = zh ? {
    flow: '拖动画面，拨动流光',
    flock: '按住画面，召唤鱼群',
    lyric: '轻触文字，让光点散开'
  }[id] : {
    flow: 'Drag to stir the light',
    flock: 'Hold to gather the shoal',
    lyric: 'Touch to scatter the letters'
  }[id];
  return jsx.jsxs('section', {
    className: 'art-scene',
    'aria-label': label,
    children: [jsx.jsx('canvas', {
      ref: canvas,
      className: 'art-canvas',
      'data-scene': id,
      'aria-label': id === 'lyric' ? `${label}：${lyric || title}` : label,
      style: {
        pointerEvents: blocked ? 'none' : 'auto'
      }
    }), jsx.jsxs('div', {
      className: `art-heading ${uiHidden ? 'art-faded' : ''}`,
      'aria-hidden': true,
      children: [jsx.jsx('span', {
        className: 'art-eyebrow',
        children: 'BUNNYBEATS / GENERATIVE'
      }), jsx.jsx('h2', {
        children: label
      }), jsx.jsx('p', {
        children: hint
      })]
    }), jsx.jsxs('div', {
      className: `art-toolbar ${uiHidden && !open ? 'art-faded' : ''}`,
      inert: blocked ? true : undefined,
      children: [jsx.jsx('button', {
        type: 'button',
        className: 'art-tool',
        'aria-label': zh ? '保存画面 PNG' : 'Save scene PNG',
        disabled: saving,
        onClick: save,
        children: saving ? '…' : jsx.jsx('svg', {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          'aria-hidden': true,
          children: jsx.jsx('path', {
            d: 'M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5'
          })
        })
      }), jsx.jsx('button', {
        type: 'button',
        className: 'art-tool',
        'aria-label': zh ? '场景设置' : 'Scene settings',
        'aria-expanded': open,
        onClick: () => setOpen(v => !v),
        children: jsx.jsx('svg', {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          'aria-hidden': true,
          children: jsx.jsx('path', {
            d: 'M4 7h16M4 17h16M9 4v6m6 4v6'
          })
        })
      })]
    }), open && !blocked && jsx.jsxs('div', {
      className: 'art-panel',
      role: 'dialog',
      'aria-label': zh ? '场景设置' : 'Scene settings',
      style: {
        maxHeight: `calc(100% - ${Math.max(140, bottomInset + 90)}px)`
      },
      children: [jsx.jsxs('div', {
        className: 'art-panel-title',
        children: [jsx.jsx('strong', {
          children: label
        }), jsx.jsx('button', {
          type: 'button',
          'aria-label': zh ? '关闭场景设置' : 'Close scene settings',
          onClick: () => setOpen(false),
          children: '×'
        })]
      }), ...controls[id].map(([key, cn, en,, min, max, step]) => jsx.jsxs('div', {
        className: 'art-setting',
        children: [jsx.jsxs('span', {
          children: [jsx.jsx('label', {
            htmlFor: `art-${id}-${key}`,
            children: zh ? cn : en
          }), jsx.jsx('output', {
            'aria-hidden': true,
            children: Number(params[key]).toFixed(step >= 1 ? 0 : step < .1 ? 2 : 1)
          })]
        }), jsx.jsx('input', {
          id: `art-${id}-${key}`,
          type: 'range',
          min,
          max,
          step,
          value: params[key],
          onChange: e => setParams(p => ({
            ...p,
            [key]: Number(e.target.value)
          }))
        })]
      }, key)), jsx.jsxs('label', {
        className: 'art-setting',
        children: [jsx.jsx('span', {
          children: zh ? '画质' : 'Quality'
        }), jsx.jsx('select', {
          value: params.quality,
          onChange: e => setParams(p => ({
            ...p,
            quality: e.target.value
          })),
          children: [['auto', '自动', 'Auto'], ['high', '高', 'High'], ['medium', '中', 'Medium'], ['low', '低', 'Low']].map(([value, cn, en]) => jsx.jsx('option', {
            value,
            children: zh ? cn : en
          }, value))
        })]
      }), jsx.jsx('button', {
        type: 'button',
        className: 'art-reset',
        onClick: () => setParams(defaults(id)),
        children: zh ? '恢复默认' : 'Reset defaults'
      })]
    }), jsx.jsx(LyricsNotice, { error, onRetry }), message && jsx.jsx('div', {
      className: 'art-message',
      role: 'status',
      children: message
    })]
  });
}
