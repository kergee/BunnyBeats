import { React, jsxRuntime } from "../vendor/react-runtime.js";
import { LYRIC_LINE_HEIGHT, ROLLING_LYRICS_HEIGHT, clampOpacity } from "../lyrics/layout.js";
const RollingLyrics = ({
  lyrics: lyrics,
  currentIndex: currentIndex,
  align: align,
  paddingClassName: paddingClassName,
  widthStyle: widthStyle,
  inactiveColor: inactiveColor,
  activeColor: activeColor,
  inactiveOpacity: inactiveOpacity,
  activeOpacity: activeOpacity
}) => {
  const h = React.useRef(null),
    x = React.useRef(null),
    [g, v] = React.useState(0),
    [y, M] = React.useState([]);
  React.useLayoutEffect(() => {
    const k = h.current;
    if (!k) return;
    const W = () => v(k.clientWidth);
    W();
    const J = typeof ResizeObserver < "u" ? new ResizeObserver(() => W()) : null;
    return J == null || J.observe(k), window.addEventListener("resize", W), () => {
      J == null || J.disconnect(), window.removeEventListener("resize", W);
    };
  }, []), React.useLayoutEffect(() => {
    var J;
    const k = x.current;
    if (!k || g <= 0) return;
    if (!lyrics || lyrics.length === 0) {
      M([]);
      return;
    }
    const W = new Array(lyrics.length).fill(1);
    for (let ie = 0; ie < lyrics.length; ie++) {
      k.textContent = ((J = lyrics[ie]) == null ? void 0 : J.text) ?? "";
      const I = (k.scrollHeight ?? 0) > LYRIC_LINE_HEIGHT + 1;
      W[ie] = I ? 2 : 1;
    }
    M(W);
  }, [lyrics, g]);
  const E = y.length === lyrics.length ? y : lyrics.map(() => 1),
    S = React.useMemo(() => {
      const k = new Array(E.length + 1);
      k[0] = 0;
      for (let W = 0; W < E.length; W++) k[W + 1] = k[W] + E[W] * LYRIC_LINE_HEIGHT;
      return k;
    }, [E]),
    _ = "text-[16px] font-normal transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
    L = align === "left" ? "text-left" : "text-center",
    D = paddingClassName ?? "",
    O = currentIndex >= 0 ? Math.min(currentIndex, Math.max(0, lyrics.length - 1)) : -1,
    F = O >= 0 ? E[O] === 2 : !1,
    P = O > 0 ? E[O - 1] === 2 : !1,
    B = O < 0 ? 0 : F || O === 0 || P ? O : Math.max(0, O - 1),
    q = S[B] ?? 0,
    w = O < 0 || F ? -1 : O === 0 || P ? O + 1 : O - 1,
    A = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      lineHeight: `${LYRIC_LINE_HEIGHT}px`,
      fontSize: "16px",
      fontWeight: 400,
      whiteSpace: "normal",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
      height: "auto",
      pointerEvents: "none",
      opacity: 0
    },
    H = k => ({
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: k,
      overflow: "hidden",
      whiteSpace: "normal",
      overflowWrap: "anywhere",
      wordBreak: "break-word"
    });
  return jsxRuntime.jsxs("div", {
    ref: h,
    className: `relative overflow-hidden ${L}`,
    style: {
      height: `${ROLLING_LYRICS_HEIGHT}px`,
      ...(widthStyle ?? {})
    },
    children: [jsxRuntime.jsx("div", {
      ref: x,
      "aria-hidden": "true",
      className: `${D}`,
      style: A
    }), jsxRuntime.jsx("div", {
      className: `transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${D}`,
      style: {
        transform: `translateY(-${q}px)`
      },
      children: lyrics.map((k, W) => {
        const J = E[W] ?? 1,
          ie = J * LYRIC_LINE_HEIGHT,
          I = W === O,
          Z = I ? activeOpacity : W === w ? inactiveOpacity : 0,
          pe = I ? activeColor : inactiveColor;
        return jsxRuntime.jsx("div", {
          className: _,
          style: {
            height: `${ie}px`,
            lineHeight: `${LYRIC_LINE_HEIGHT}px`,
            opacity: clampOpacity(Z),
            color: pe,
            ...H(J)
          },
          children: k.text
        }, W);
      })
    })]
  });
};
export { RollingLyrics };
//# sourceMappingURL=RollingLyrics.js.map
