import { React, jsxRuntime } from "../vendor/react-runtime.js";
import { ResetIcon, SettingsIcon, XIcon } from "../vendor/icons.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
import { LanguageSwitcher } from "../components/LanguageSwitcher.js";
const DEFAULT_POWERPUFF_PARAMS = {
  bounceStrength: 1,
  sensitivity: .5,
  sceneSpeed: 1,
  friction: .94
};
const PowerpuffSettings = ({
  params: params,
  setParams: setParams,
  isUIHidden: isUIHidden
}) => {
  const [a, o] = React.useState(!1),
    {
      t: c
    } = useTranslation(),
    u = () => {
      setParams(DEFAULT_POWERPUFF_PARAMS);
    },
    f = (m, h) => {
      setParams(x => ({
        ...x,
        [m]: h
      }));
    };
  return isUIHidden ? null : a ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", {
      className: "fixed inset-0 z-[19] bg-transparent",
      onClick: () => o(!1)
    }), jsxRuntime.jsxs("div", {
      className: "absolute top-[70px] right-6 z-20 w-72 bg-white/10 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300 border border-white/5 shadow-2xl",
      children: [jsxRuntime.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [jsxRuntime.jsxs("div", {
          className: "flex items-center gap-2",
          children: [jsxRuntime.jsx("h3", {
            className: "text-sm font-bold text-white/70 uppercase tracking-wider",
            children: c("controls.powerpuff_title")
          }), jsxRuntime.jsx("button", {
            onClick: u,
            className: "text-gray-400 hover:text-gray-300 transition-colors",
            title: c("ui.reset"),
            children: jsxRuntime.jsx(ResetIcon, {
              className: "w-4 h-4"
            })
          })]
        }), jsxRuntime.jsx("button", {
          onClick: () => o(!1),
          className: "text-gray-400 hover:text-gray-300 transition-colors",
          children: jsxRuntime.jsx(XIcon, {
            className: "w-5 h-5"
          })
        })]
      }), jsxRuntime.jsxs("div", {
        className: "space-y-6",
        children: [jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.scene_speed")
            }), jsxRuntime.jsxs("span", {
              className: "text-white/40",
              children: [params.sceneSpeed.toFixed(1), "x"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.1",
            max: "3.0",
            step: "0.1",
            value: params.sceneSpeed,
            onChange: m => f("sceneSpeed", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.friction")
            }), jsxRuntime.jsxs("span", {
              className: "text-white/40",
              children: [((1 - params.friction) * 100).toFixed(0), "%"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.01",
            max: "0.20",
            step: "0.01",
            value: (1 - params.friction).toFixed(2),
            onChange: m => {
              const h = parseFloat(m.target.value);
              f("friction", 1 - h);
            },
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.sensitivity")
            }), jsxRuntime.jsxs("span", {
              className: "text-white/40",
              children: [(params.sensitivity * 100).toFixed(0), "%"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0",
            max: "1",
            step: "0.05",
            value: params.sensitivity,
            onChange: m => f("sensitivity", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsx(LanguageSwitcher, {
          darkUI: !0
        })]
      })]
    })]
  }) : jsxRuntime.jsx("button", {
    onClick: () => o(!0),
    className: "absolute top-[70px] right-6 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-300 hover:bg-white/15",
    children: jsxRuntime.jsx(SettingsIcon, {
      className: "w-[20px] h-[20px]"
    })
  });
};
export { DEFAULT_POWERPUFF_PARAMS, PowerpuffSettings };
//# sourceMappingURL=PowerpuffSettings.js.map
