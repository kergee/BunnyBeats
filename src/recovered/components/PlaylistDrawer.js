import { jsxRuntime } from "../vendor/react-runtime.js";
import { PauseIcon, PlayIcon, XIcon } from "../vendor/icons.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
const PlaylistDrawer = ({
  isOpen: isOpen,
  darkUI: darkUI,
  songs: n,
  currentSongId: currentSongId,
  isPlaying: isPlaying,
  onClose: onClose,
  onPlayPause: onPlayPause,
  onSelectSong: onSelectSong
}) => {
  const {
    t: m
  } = useTranslation();
  return jsxRuntime.jsxs("div", {
    className: `fixed inset-0 z-[120] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`,
    "aria-hidden": !isOpen,
    children: [jsxRuntime.jsx("div", {
      className: `absolute inset-0 bg-transparent transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`,
      onClick: onClose
    }), jsxRuntime.jsxs("aside", {
      className: `absolute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${darkUI ? "bg-[#272727] shadow-2xl" : "bg-white shadow-xl"} 
        /* Mobile: Bottom Action Sheet */
        bottom-0 left-0 right-0 w-full h-[75vh] max-h-[85vh] rounded-t-[32px]
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        
        /* Desktop: Right Sidebar */
        sm:top-0 sm:right-0 sm:left-auto sm:bottom-auto sm:w-[420px] sm:h-screen sm:max-h-none sm:rounded-none
        ${isOpen ? "sm:translate-x-0 sm:translate-y-0" : "sm:translate-x-full sm:translate-y-0"}
        `,
      role: "dialog",
      "aria-label": m("ui.playlist"),
      children: [jsxRuntime.jsx("div", {
        className: "flex justify-center pt-3 pb-1 sm:hidden",
        children: jsxRuntime.jsx("div", {
          className: `w-10 h-1.5 rounded-full ${darkUI ? "bg-white/10" : "bg-black/10"}`
        })
      }), jsxRuntime.jsxs("div", {
        className: "relative flex items-center justify-between px-6 pt-5 pb-2 sm:pt-6",
        children: [jsxRuntime.jsx("h3", {
          className: `text-base font-bold ${darkUI ? "text-white" : "text-gray-900"}`,
          children: m("ui.playlist")
        }), jsxRuntime.jsx("button", {
          onClick: onClose,
          className: `transition-colors ${darkUI ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black/80"}`,
          "aria-label": m("ui.close"),
          children: jsxRuntime.jsx(XIcon, {
            className: "w-5 h-5"
          })
        })]
      }), jsxRuntime.jsx("div", {
        className: "relative flex-1 overflow-y-auto px-3 pt-0 pb-4",
        children: jsxRuntime.jsx("div", {
          className: "flex flex-col gap-1",
          children: n.map(h => {
            const x = currentSongId === h.id,
              g = x && isPlaying;
            return jsxRuntime.jsxs("div", {
              className: `group flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer ${darkUI ? "[@media(hover:hover)]:hover:bg-white/10" : "[@media(hover:hover)]:hover:bg-black/5"}`,
              onClick: () => {
                x ? onPlayPause() : onSelectSong(h.id);
              },
              children: [jsxRuntime.jsxs("div", {
                className: "relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 shadow-sm bg-black/10",
                children: [jsxRuntime.jsx("img", {
                  src: h.coverUrl,
                  alt: h.title,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }), jsxRuntime.jsx("button", {
                  className: "absolute inset-0 bg-black/45 flex items-center justify-center transition-opacity opacity-0 pointer-events-none [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:pointer-events-auto",
                  onClick: v => {
                    v.stopPropagation(), x ? onPlayPause() : onSelectSong(h.id);
                  },
                  "aria-label": m(g ? "ui.pause" : "ui.play"),
                  children: g ? jsxRuntime.jsx(PauseIcon, {
                    className: "w-5 h-5 text-white fill-white"
                  }) : jsxRuntime.jsx(PlayIcon, {
                    className: "w-5 h-5 text-white fill-white ml-0.5"
                  })
                })]
              }), jsxRuntime.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [jsxRuntime.jsx("p", {
                  className: `text-sm font-semibold truncate ${x ? darkUI ? "text-[#8B7CF7]" : "text-[#5A48DA]" : darkUI ? "text-white" : "text-gray-900"}`,
                  children: h.title
                }), jsxRuntime.jsx("p", {
                  className: `text-xs truncate ${x ? darkUI ? "text-[#8B7CF7]/80" : "text-[#5A48DA]/80" : darkUI ? "text-white/55" : "text-gray-500"}`,
                  children: h.artist
                })]
              })]
            }, h.id);
          })
        })
      })]
    })]
  });
};
export { PlaylistDrawer };
//# sourceMappingURL=PlaylistDrawer.js.map
