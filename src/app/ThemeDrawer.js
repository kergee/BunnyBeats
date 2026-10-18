import { themes } from '../art/registry.js';
import { jsxRuntime } from "../recovered/vendor/react-runtime.js";
import { CheckIcon, XIcon } from "../recovered/vendor/icons.js";
import { useTranslation } from "../recovered/vendor/i18n-runtime.js";
const ThemeDrawer = ({
  isOpen: isOpen,
  darkUI: darkUI,
  currentTheme: currentTheme,
  onClose: onClose,
  onSelectTheme: onSelectTheme
}) => {
  const {
      t: c, i18n
    } = useTranslation(),
    u = themes;
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
      "aria-label": c("ui.themes"),
      children: [jsxRuntime.jsx("div", {
        className: "flex justify-center pt-3 pb-1 sm:hidden",
        children: jsxRuntime.jsx("div", {
          className: `w-10 h-1.5 rounded-full ${darkUI ? "bg-white/10" : "bg-black/10"}`
        })
      }), jsxRuntime.jsxs("div", {
        className: "flex items-center justify-between px-6 pt-5 pb-2 sm:pt-6",
        children: [jsxRuntime.jsx("h3", {
          className: `text-base font-bold ${darkUI ? "text-white/70" : "text-gray-500"}`,
          children: c("ui.themes")
        }), jsxRuntime.jsx("button", {
          onClick: onClose,
          className: `transition-colors ${darkUI ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black/80"}`,
          "aria-label": c("ui.close"),
          children: jsxRuntime.jsx(XIcon, {
            className: "w-5 h-5"
          })
        })]
      }), jsxRuntime.jsx("div", {
        className: "px-3 pt-0 pb-2 overflow-y-auto",
        style: {maxHeight: "calc(100% - 75px)"},
        children: jsxRuntime.jsx("div", {
          className: "grid grid-cols-2 gap-4",
          children: u.map(f => {
            const m = currentTheme === f.id;
            const label = c("themes."+f.id, { defaultValue: i18n.language.startsWith("zh") ? f.zh : f.en });
            return jsxRuntime.jsxs("button", {
              onClick: () => {
                onSelectTheme(f.id), onClose();
              },
              className: `group flex flex-col items-start gap-2 p-3 rounded-xl transition-all ${darkUI ? "hover:bg-white/10" : "hover:bg-black/5"}`,
              children: [jsxRuntime.jsxs("div", {
                className: "relative w-full aspect-video rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform",
                children: [f.image ? jsxRuntime.jsx("img", {
                  src: f.image,
                  alt: label,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }) : jsxRuntime.jsx("div", { className: "art-preview art-preview-"+f.id, "aria-hidden": true, children: f.id === "lyric" ? "Aa 字" : [0,1,2,3].map(i => jsxRuntime.jsx("i", {}, i)) }), m && jsxRuntime.jsx("div", {
                  className: `absolute top-2 right-2 rounded-full p-1 text-white shadow-md ${darkUI ? "bg-[#8B7CF7]" : "bg-[#5A48DA]"}`,
                  children: jsxRuntime.jsx(CheckIcon, {
                    className: "w-3.5 h-3.5"
                  })
                })]
              }), jsxRuntime.jsx("span", {
                className: `text-sm font-medium ${m ? darkUI ? "text-[#8B7CF7]" : "text-[#5A48DA]" : darkUI ? "text-white/60" : "text-gray-500"}`,
                children: label
              })]
            }, f.id);
          })
        })
      })]
    })]
  });
};
export { ThemeDrawer };
// Business drawer; the recovered source remains immutable.
