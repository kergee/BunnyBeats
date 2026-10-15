import { jsxRuntime } from "../vendor/react-runtime.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
const LanguageSwitcher = ({
  darkUI: darkUI
}) => {
  const {
      i18n: e,
      t: n
    } = useTranslation(),
    a = e.language.startsWith("zh") ? "zh" : "en",
    o = g => {
      e.changeLanguage(g);
    },
    c = darkUI ? "text-white/50" : "text-black/40",
    u = darkUI ? "bg-white/10" : "bg-black/10",
    f = darkUI ? "bg-white/25" : "bg-white shadow-sm",
    m = darkUI ? "text-white" : "text-black/70",
    h = darkUI ? "text-white/40" : "text-black/30",
    x = darkUI ? "border-white/10" : "border-black/5";
  return jsxRuntime.jsxs("div", {
    className: `flex items-center justify-between mt-4 pt-4 border-t ${x}`,
    children: [jsxRuntime.jsx("span", {
      className: `text-xs font-medium ${c}`,
      children: n("ui.language")
    }), jsxRuntime.jsxs("div", {
      className: `flex p-0.5 rounded-lg ${u}`,
      children: [jsxRuntime.jsx("button", {
        onClick: () => o("zh"),
        className: `px-3 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${a === "zh" ? `${f} ${m}` : `${h} hover:opacity-70`}`,
        children: "中文"
      }), jsxRuntime.jsx("button", {
        onClick: () => o("en"),
        className: `px-3 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${a === "en" ? `${f} ${m}` : `${h} hover:opacity-70`}`,
        children: "EN"
      })]
    })]
  });
};
export { LanguageSwitcher };
//# sourceMappingURL=LanguageSwitcher.js.map
