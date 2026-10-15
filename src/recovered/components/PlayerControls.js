import { ReactDefault, jsxRuntime } from "../vendor/react-runtime.js";
import { MenuIcon, PaletteIcon, PauseIcon, PlayIcon } from "../vendor/icons.js";
import { isDarkTheme } from "../themes/themeRegistry.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
const YS = "/assets/carrot-DGt1Aet5.png";
const PreviousIcon = ({
  className: className
}) => jsxRuntime.jsxs("svg", {
  viewBox: "0 0 24 24",
  className: className,
  fill: "currentColor",
  "aria-hidden": "true",
  children: [jsxRuntime.jsx("rect", {
    x: "5",
    y: "6.5",
    width: "2.5",
    height: "11",
    rx: "1.25"
  }), jsxRuntime.jsx("path", {
    d: "M18 7.2c0-1-.9-1.6-1.7-1.1L9.5 10.8c-.7.4-.7 1.4 0 1.9l6.8 4.7c.8.5 1.7-.1 1.7-1.1V7.2z"
  })]
});
const NextIcon = ({
  className: className
}) => jsxRuntime.jsxs("svg", {
  viewBox: "0 0 24 24",
  className: className,
  fill: "currentColor",
  "aria-hidden": "true",
  children: [jsxRuntime.jsx("rect", {
    x: "16.5",
    y: "6.5",
    width: "2.5",
    height: "11",
    rx: "1.25"
  }), jsxRuntime.jsx("path", {
    d: "M6 7.2c0-1 .9-1.6 1.7-1.1l6.8 4.7c.7.4.7 1.4 0 1.9l-6.8 4.7c-.8.5-1.7-.1-1.7-1.1V7.2z"
  })]
});
const formatTime = s => {
  if (!s || isNaN(s)) return "00:00";
  const e = Math.floor(s / 60),
    n = Math.floor(s % 60);
  return `${e < 10 ? "0" : ""}${e}:${n < 10 ? "0" : ""}${n}`;
};
const LoadingBarsIcon = ({
  className: className
}) => jsxRuntime.jsxs("svg", {
  viewBox: "0 0 120 120",
  className: `loading-bars-svg ${className ?? ""}`,
  "aria-hidden": "true",
  children: [jsxRuntime.jsx("rect", {
    className: "loading-bars-svg__bar loading-bars-svg__bar--1",
    x: "18",
    y: "22",
    width: "14",
    height: "76",
    rx: "7",
    fill: "currentColor"
  }), jsxRuntime.jsx("rect", {
    className: "loading-bars-svg__bar loading-bars-svg__bar--2",
    x: "40",
    y: "22",
    width: "14",
    height: "76",
    rx: "7",
    fill: "currentColor"
  }), jsxRuntime.jsx("rect", {
    className: "loading-bars-svg__bar loading-bars-svg__bar--3",
    x: "62",
    y: "22",
    width: "14",
    height: "76",
    rx: "7",
    fill: "currentColor"
  }), jsxRuntime.jsx("rect", {
    className: "loading-bars-svg__bar loading-bars-svg__bar--4",
    x: "84",
    y: "22",
    width: "14",
    height: "76",
    rx: "7",
    fill: "currentColor"
  })]
});
const PlayerControls = ({
  isPlaying: isPlaying,
  isLoading = !1,
  onPlayPause: onPlayPause,
  currentTime: currentTime,
  duration: duration,
  onSeek: onSeek,
  onScrub: onScrub,
  theme: theme,
  currentSongId: currentSongId,
  onSongChange: onSongChange,
  isPlaylistOpen: isPlaylistOpen,
  onTogglePlaylist: onTogglePlaylist,
  isThemeOpen: isThemeOpen,
  onToggleTheme: onToggleTheme,
  onSkipPrev: onSkipPrev,
  onSkipNext: onSkipNext,
  coverUrl: coverUrl,
  songTitle: songTitle,
  artistName: artistName
}) => {
  const D = isDarkTheme(theme),
    O = theme === "cubes",
    F = theme === "particle" || theme === "cubes" || theme === "powerpuff",
    {
      t: P
    } = useTranslation(),
    [B, q] = ReactDefault.useState(!1),
    w = ReactDefault.useRef(!1),
    [A, H] = ReactDefault.useState(0),
    k = ReactDefault.useRef(0),
    W = ReactDefault.useRef(0),
    J = 33,
    ie = he => Number.isFinite(he) ? !duration || !Number.isFinite(duration) || duration <= 0 ? Math.max(0, he) : Math.min(Math.max(0, he), duration) : 0,
    I = B ? A : currentTime,
    Y = he => {
      const Ee = ie(Number(he.target.value));
      k.current = Ee, H(Ee), w.current || onSeek(Ee);
    },
    Z = (he, Ee) => {
      if (!Number.isFinite(duration) || duration <= 0) return null;
      const Be = he.getBoundingClientRect(),
        te = Be.width > 0 ? (Ee - Be.left) / Be.width : 0,
        me = ie(te * duration);
      return k.current = me, H(me), me;
    },
    pe = (he, Ee = !1) => {
      if (!onScrub || he === null) return;
      const Be = performance.now();
      (Ee || Be - W.current >= J) && (W.current = Be, onScrub(he));
    },
    Me = he => {
      he.preventDefault();
      const Ee = he.currentTarget;
      w.current = !0;
      const Be = Z(Ee, he.clientX);
      q(!0), pe(Be, !0);
      try {
        Ee.setPointerCapture(he.pointerId);
      } catch {}
    },
    z = he => {
      if (!w.current) return;
      const Ee = Z(he.currentTarget, he.clientX);
      pe(Ee);
    },
    ee = he => {
      if (!w.current) return;
      let Ee = k.current;
      if (he) {
        const Be = Z(he.currentTarget, he.clientX);
        Be !== null && (Ee = Be);
      }
      w.current = !1, q(!1), onSeek(ie(Ee));
    };
  return jsxRuntime.jsxs("div", {
    className: "w-full px-6 md:px-12 pt-2 flex flex-col gap-2 z-50 relative",
    style: {
      paddingBottom: "calc(2rem + env(safe-area-inset-bottom))"
    },
    children: [jsxRuntime.jsxs("div", {
      className: "flex items-center justify-between mb-2",
      children: [jsxRuntime.jsxs("div", {
        className: "flex items-center gap-3 flex-1 min-w-0",
        children: [theme !== "vinyl" && jsxRuntime.jsx("img", {
          src: coverUrl,
          alt: songTitle,
          className: `w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-md ${F ? "hidden sm:block" : ""}`
        }), jsxRuntime.jsxs("div", {
          className: "min-w-0",
          children: [jsxRuntime.jsx("div", {
            className: "sm:hidden song-title-marquee",
            title: songTitle,
            children: jsxRuntime.jsxs("div", {
              className: "song-title-marquee-track",
              children: [jsxRuntime.jsxs("span", {
                className: `song-title-marquee-segment text-sm font-normal ${D ? "text-white/80" : "text-gray-700"}`,
                children: [jsxRuntime.jsx("span", {
                  className: "whitespace-nowrap",
                  children: songTitle
                }), jsxRuntime.jsx("span", {
                  className: "song-title-marquee-gap",
                  "aria-hidden": "true"
                })]
              }), jsxRuntime.jsxs("span", {
                className: `song-title-marquee-segment text-sm font-normal ${D ? "text-white/80" : "text-gray-700"}`,
                "aria-hidden": "true",
                children: [jsxRuntime.jsx("span", {
                  className: "whitespace-nowrap",
                  children: songTitle
                }), jsxRuntime.jsx("span", {
                  className: "song-title-marquee-gap",
                  "aria-hidden": "true"
                })]
              })]
            })
          }), jsxRuntime.jsx("p", {
            className: `hidden sm:block text-sm font-normal truncate ${D ? "text-white/80" : "text-gray-700"}`,
            children: songTitle
          }), jsxRuntime.jsx("p", {
            className: `text-xs truncate ${D ? "text-white/50" : "text-gray-400"}`,
            children: artistName
          })]
        })]
      }), jsxRuntime.jsxs("div", {
        className: "flex items-center gap-6 md:gap-8 flex-1 justify-center",
        children: [jsxRuntime.jsx("button", {
          onClick: onSkipPrev,
          className: `${D ? "text-white/60 hover:text-white/80" : "text-black/45 hover:text-black/65"} transition-colors active:scale-90`,
          children: jsxRuntime.jsx(PreviousIcon, {
            className: "w-10 h-10"
          })
        }), jsxRuntime.jsx("button", {
          onClick: onPlayPause,
          className: `w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-all active:scale-95 ${O ? "bg-black/5 text-black/70 hover:bg-black/10" : D ? "shadow-xl bg-white/20 text-white/90 hover:bg-white/30 shadow-black/20" : "bg-black/5 text-black/70 hover:bg-black/10"}`,
          children: isLoading ? jsxRuntime.jsx(LoadingBarsIcon, {
            className: "w-7 h-7"
          }) : isPlaying ? jsxRuntime.jsx(PauseIcon, {
            className: "w-7 h-7 fill-current stroke-none"
          }) : jsxRuntime.jsx(PlayIcon, {
            className: "w-7 h-7 fill-current stroke-none ml-1"
          })
        }), jsxRuntime.jsx("button", {
          onClick: onSkipNext,
          className: `${D ? "text-white/60 hover:text-white/80" : "text-black/45 hover:text-black/65"} transition-colors active:scale-90`,
          children: jsxRuntime.jsx(NextIcon, {
            className: "w-10 h-10"
          })
        })]
      }), jsxRuntime.jsxs("div", {
        className: "flex items-center gap-6 flex-1 justify-end",
        children: [jsxRuntime.jsx("button", {
          className: `flex items-center justify-center transition-colors ${isThemeOpen ? "text-[#ff4d6a]" : D ? "text-white/60 hover:text-white/80" : "text-black/40 hover:text-black/60"}`,
          title: P("ui.themes"),
          onClick: onToggleTheme,
          children: jsxRuntime.jsx(PaletteIcon, {
            className: "w-[22px] h-[22px]"
          })
        }), jsxRuntime.jsx("button", {
          className: `flex items-center justify-center transition-colors ${isPlaylistOpen ? "text-[#ff4d6a]" : D ? "text-white/60 hover:text-white/80" : "text-black/40 hover:text-black/60"}`,
          title: P("ui.playlist"),
          onClick: onTogglePlaylist,
          children: jsxRuntime.jsx(MenuIcon, {
            className: "w-[22px] h-[22px]"
          })
        })]
      })]
    }), jsxRuntime.jsxs("div", {
      className: `flex items-center gap-2 sm:gap-3 w-full max-w-3xl mx-auto text-xs font-medium transition-colors ${D ? "text-white/40 hover:text-white/60" : "text-black/40 hover:text-black/60"}`,
      children: [jsxRuntime.jsx("span", {
        className: "w-[2.25rem] text-left sm:w-10 sm:text-right tabular-nums",
        children: formatTime(I)
      }), jsxRuntime.jsxs("div", {
        className: "relative flex-1 h-[3px] group cursor-pointer flex items-center",
        children: [jsxRuntime.jsx("input", {
          type: "range",
          min: 0,
          max: duration || 100,
          value: I,
          onChange: Y,
          onPointerDown: Me,
          onPointerMove: z,
          onPointerUp: he => ee(he),
          onPointerCancel: () => ee(),
          className: "absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 opacity-0 cursor-pointer z-20 touch-none",
          style: {
            touchAction: "none"
          }
        }), jsxRuntime.jsx("div", {
          className: `absolute top-0 left-0 h-full rounded-full w-full ${D ? "bg-white/20" : "bg-black/15"}`
        }), jsxRuntime.jsx("div", {
          className: `absolute top-0 left-0 h-full rounded-full ${B ? "transition-none" : "transition-all duration-100"} ${D ? "bg-white" : "bg-black/70"}`,
          style: {
            width: `${duration ? I / duration * 100 : 0}%`
          }
        }), theme === "vinyl" ? jsxRuntime.jsx("img", {
          src: YS,
          alt: "",
          className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 object-contain opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity pointer-events-none drop-shadow-sm",
          style: {
            left: `${duration ? I / duration * 100 : 0}%`
          }
        }) : jsxRuntime.jsx("div", {
          className: `absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-md opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity pointer-events-none ${D ? "bg-white border border-white/20" : "bg-white border border-black/10"}`,
          style: {
            left: `${duration ? I / duration * 100 : 0}%`
          }
        })]
      }), jsxRuntime.jsx("span", {
        className: "w-[2.25rem] text-right sm:w-10 sm:text-left tabular-nums",
        children: formatTime(duration)
      })]
    })]
  });
};
export { PlayerControls };
//# sourceMappingURL=PlayerControls.js.map
