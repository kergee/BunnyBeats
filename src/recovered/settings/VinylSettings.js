import { ReactDefault, jsxRuntime } from "../vendor/react-runtime.js";
import { ResetIcon, SettingsIcon, XIcon } from "../vendor/icons.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
import { LanguageSwitcher } from "../components/LanguageSwitcher.js";
const DEFAULT_VINYL_PARAMS = {
  vinylSpeed: 1,
  rabbitSpeed: 1
};
const VinylSettings = ({
  params: params,
  onChange: onChange,
  isUIHidden: isUIHidden
}) => {
  const [a, o] = ReactDefault.useState(!1),
    {
      t: c
    } = useTranslation(),
    u = () => {
      onChange(DEFAULT_VINYL_PARAMS);
    },
    f = (m, h) => {
      onChange({
        ...params,
        [m]: h
      });
    };
  return isUIHidden ? null : a ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", {
      className: "fixed inset-0 z-[19] bg-transparent",
      onClick: () => o(!1)
    }), jsxRuntime.jsxs("div", {
      className: "absolute top-[70px] right-6 z-20 w-64 bg-black/5 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300",
      children: [jsxRuntime.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [jsxRuntime.jsxs("div", {
          className: "flex items-center gap-2",
          children: [jsxRuntime.jsx("h3", {
            className: "text-sm font-bold text-black/50 uppercase tracking-wider font-sans",
            children: c("controls.vinyl_title")
          }), jsxRuntime.jsx("button", {
            onClick: u,
            className: "text-gray-400 hover:text-gray-500 transition-colors",
            title: c("ui.reset"),
            children: jsxRuntime.jsx(ResetIcon, {
              className: "w-4 h-4"
            })
          })]
        }), jsxRuntime.jsx("button", {
          onClick: () => o(!1),
          className: "text-gray-400 hover:text-gray-500 transition-colors",
          children: jsxRuntime.jsx(XIcon, {
            className: "w-5 h-5"
          })
        })]
      }), jsxRuntime.jsxs("div", {
        className: "space-y-6",
        children: [jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-black/40",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.vinyl_speed")
            }), jsxRuntime.jsxs("span", {
              className: "text-black/50",
              children: [params.vinylSpeed.toFixed(1), "x"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.5",
            max: "2.0",
            step: "0.1",
            value: params.vinylSpeed,
            onChange: m => f("vinylSpeed", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-black/40",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.rabbit_speed")
            }), jsxRuntime.jsxs("span", {
              className: "text-black/50",
              children: [params.rabbitSpeed.toFixed(1), "x"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.5",
            max: "2.0",
            step: "0.1",
            value: params.rabbitSpeed,
            onChange: m => f("rabbitSpeed", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"
          })]
        }), jsxRuntime.jsx(LanguageSwitcher, {})]
      })]
    })]
  }) : jsxRuntime.jsx("button", {
    onClick: () => o(!0),
    className: "absolute top-[70px] right-6 z-20 bg-black/5 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-500 hover:bg-black/10",
    children: jsxRuntime.jsx(SettingsIcon, {
      className: "w-[20px] h-[20px]"
    })
  });
};
export { DEFAULT_VINYL_PARAMS, VinylSettings };
//# sourceMappingURL=VinylSettings.js.map
