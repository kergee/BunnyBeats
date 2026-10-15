import { React, jsxRuntime } from "../vendor/react-runtime.js";
const LyricsPanel = ({
  lyrics: lyrics,
  currentTime: currentTime,
  onLyricClick: onLyricClick,
  compact = !1,
  maxLines: maxLines,
  themeColor = "#ff4d6a",
  variant = "default"
}) => {
  const f = React.useRef(null),
    [m, h] = React.useState(!1),
    x = React.useRef(null),
    g = React.useRef(!1),
    v = lyrics.findIndex((_, L) => {
      const D = lyrics[L + 1];
      return currentTime >= _.time && (!D || currentTime < D.time);
    }),
    y = () => {
      f.current && (g.current || (h(!0), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        h(!1);
      }, 4e3)));
    },
    M = () => y(),
    E = _ => {
      _.isTrusted && y();
    };
  React.useEffect(() => () => {
    x.current && clearTimeout(x.current);
  }, []), React.useEffect(() => {
    const _ = v >= lyrics.length - 3;
    if (f.current && v !== -1 && !m && !_) {
      const L = f.current,
        D = L.children[v];
      if (D) {
        const O = L.clientHeight,
          F = D.offsetTop,
          P = D.clientHeight,
          B = F - O * .35 + P / 2;
        g.current = !0, L.scrollTo({
          top: B,
          behavior: "smooth"
        }), setTimeout(() => {
          g.current = !1;
        }, 800);
      }
    }
  }, [v, m, lyrics]);
  const S = maxLines && maxLines > 0 && v !== -1 ? (() => {
    const _ = Math.floor((maxLines - 1) / 2),
      L = Math.max(0, v - _),
      D = Math.min(lyrics.length, L + maxLines),
      O = Math.max(0, D - maxLines);
    return lyrics.slice(O, D).map((F, P) => ({
      ...F,
      originalIndex: O + P
    }));
  })() : lyrics.map((_, L) => ({
    ..._,
    originalIndex: L
  }));
  return maxLines && maxLines > 0 ? jsxRuntime.jsx("div", {
    className: "h-full w-full flex flex-col items-center justify-center relative overflow-hidden",
    children: jsxRuntime.jsx("div", {
      className: "w-full mx-auto max-w-full",
      children: S.map(_ => {
        const L = _.originalIndex === v;
        return jsxRuntime.jsx("div", {
          onClick: () => onLyricClick == null ? void 0 : onLyricClick(_.time),
          className: `transition-all duration-500 ease-out ${compact ? "mb-1.5" : "mb-4"} font-bold tracking-tight cursor-pointer text-center transform break-words whitespace-normal
                  ${L ? `${maxLines === 1 ? "text-[22px]" : "text-2xl"} scale-100 opacity-100` : "text-[22px] scale-100 opacity-50 text-gray-400/50"}`,
          style: L ? {
            color: themeColor
          } : void 0,
          children: _.text
        }, _.originalIndex);
      })
    })
  }) : jsxRuntime.jsx("div", {
    className: "h-full w-full flex flex-col items-center lg:items-start justify-center relative overflow-hidden",
    children: jsxRuntime.jsx("div", {
      ref: f,
      onScroll: E,
      onWheel: M,
      onTouchMove: M,
      className: "w-full h-full overflow-y-auto no-scrollbar pt-[35vh] pb-[15vh] relative z-0",
      style: {
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
      },
      children: S.map(_ => {
        const L = _.originalIndex === v;
        return jsxRuntime.jsx("div", {
          onClick: () => onLyricClick == null ? void 0 : onLyricClick(_.time),
          className: variant === "fullscreen" ? `transition-all duration-700 ease-out mb-9 tracking-tight cursor-pointer text-center lg:text-left origin-center lg:origin-left transform break-words whitespace-normal
                      ${L ? "text-[26px] font-bold scale-100 opacity-100 translate-x-0" : "text-2xl font-bold text-gray-400/50 scale-100 opacity-100 hover:opacity-100"}` : `transition-all duration-700 ease-out mb-10 text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight cursor-pointer text-center lg:text-left origin-center lg:origin-left transform
                      ${L ? "scale-100 opacity-100 blur-none translate-x-0" : "text-gray-400/60 scale-95 opacity-40 blur-[0.5px] hover:opacity-60 hover:text-gray-500"}`,
          style: L ? {
            color: themeColor
          } : void 0,
          children: _.text
        }, _.originalIndex);
      })
    })
  });
};
export { LyricsPanel };
//# sourceMappingURL=LyricsPanel.js.map
