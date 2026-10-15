import { React, jsxRuntime } from "../vendor/react-runtime.js";
const W1 = "/assets/doodlevingl-768-DuzIQ_e4.webp";
const Y1 = "/assets/rabbitSkate1-Dd7Fn1s6.webp";
const q1 = "/assets/rabbitSkate2-BCzFxxnt.webp";
const Z1 = "/assets/rabbitSkate3-rhhoy478.webp";
const K1 = "/assets/rabbitSkate4-BsPPoknM.webp";
const Q1 = "/assets/rabbitSkate5-gtKp4uG-.webp";
const J1 = "/assets/rabbitSkate6-BjZ2HVCb.webp";
const Ic = [Y1, q1, Z1, K1, Q1, J1];
const VinylRecord = ({
  coverUrl: coverUrl,
  isPlaying: isPlaying,
  vinylSpeed = 1,
  rabbitSpeed = 1
}) => {
  const [o, c] = React.useState(!1),
    [u, f] = React.useState(0),
    m = React.useRef(1),
    h = React.useRef(null),
    x = React.useRef(0);
  return React.useEffect(() => {
    for (const g of Ic) {
      const v = new Image();
      v.src = g;
    }
  }, []), React.useEffect(() => {
    if (!isPlaying || Ic.length <= 1) return;
    const v = 1e3 / 12;
    x.current = performance.now();
    const y = M => {
      M - x.current >= v && (x.current = M, f(E => {
        const S = Ic.length - 1;
        if (S <= 0) return 0;
        const _ = m.current;
        let L = E + _;
        return L > S ? (m.current = -1, L = S - 1) : L < 0 && (m.current = 1, L = 1), Math.max(0, Math.min(S, L));
      })), h.current = requestAnimationFrame(y);
    };
    return h.current = requestAnimationFrame(y), () => {
      h.current !== null && cancelAnimationFrame(h.current), h.current = null;
    };
  }, [isPlaying]), jsxRuntime.jsx("div", {
    className: "relative flex items-center justify-center transition-all duration-500",
    children: jsxRuntime.jsxs("div", {
      className: "w-[346px] h-[346px] md:w-[360px] md:h-[360px] lg:w-[55vw] lg:h-[55vw] max-w-[850px] max-h-[850px] relative flex items-center justify-center",
      children: [jsxRuntime.jsx("div", {
        className: "absolute inset-0 z-50 pointer-events-none will-change-transform",
        style: {
          animation: `spin ${16 / rabbitSpeed}s linear infinite`,
          animationPlayState: isPlaying ? "running" : "paused"
        },
        children: Ic.map((g, v) => jsxRuntime.jsx("img", {
          src: g,
          alt: "Skating Rabbit",
          loading: "eager",
          decoding: "async",
          className: `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] w-16 h-16 md:w-20 md:h-20 lg:w-[12%] lg:h-[12%] object-contain scale-x-[-1] transition-opacity duration-75 will-change-opacity ${v === u ? "opacity-100" : "opacity-0"}`
        }, g))
      }), jsxRuntime.jsxs("div", {
        className: `relative w-full h-full rounded-full flex items-center justify-center overflow-hidden ${isPlaying ? "animate-spin-slow" : "animate-spin-slow paused-anim"}`,
        style: isPlaying ? {
          animationDuration: `${20 / vinylSpeed}s`
        } : {
          animationDuration: `${20 / vinylSpeed}s`,
          animationPlayState: "paused"
        },
        children: [jsxRuntime.jsx("img", {
          src: W1,
          alt: "Vinyl Record",
          className: "absolute inset-0 w-full h-full object-cover"
        }), jsxRuntime.jsx("div", {
          className: "absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none z-20"
        }), jsxRuntime.jsx("div", {
          className: "absolute w-[65%] h-[65%] rounded-full overflow-hidden z-30 shadow-inner bg-gray-900 flex items-center justify-center",
          children: o ? jsxRuntime.jsxs("div", {
            className: "flex flex-col items-center justify-center text-[#ff4d6a] font-bold text-center p-2",
            children: [jsxRuntime.jsx("span", {
              children: "DITTO"
            }), jsxRuntime.jsx("span", {
              className: "text-xs opacity-75",
              children: "NewJeans"
            })]
          }) : jsxRuntime.jsx("img", {
            src: coverUrl,
            alt: "Ditto Cover",
            className: "w-full h-full object-cover",
            onError: () => c(!0)
          })
        }), jsxRuntime.jsx("div", {
          className: "absolute w-3 h-3 bg-[#1a1a1a] rounded-full z-40 shadow-inner border border-gray-700"
        })]
      })]
    })
  });
};
export { VinylRecord };
//# sourceMappingURL=VinylRecord.js.map
