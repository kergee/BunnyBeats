import { ReactDefault, jsxRuntime } from "../vendor/react-runtime.js";
import { ResetIcon, SettingsIcon, XIcon } from "../vendor/icons.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
import { LanguageSwitcher } from "../components/LanguageSwitcher.js";
const DEFAULT_CUBES_PARAMS = {
  height: .9,
  spread: 1.5,
  damping: .25,
  showRabbits: !0,
  showHearts: !0
};
const CubesSettings = ({
  params: params,
  onChange: onChange,
  isUIHidden: isUIHidden
}) => {
  const [a, o] = ReactDefault.useState(!1),
    {
      t: c
    } = useTranslation(),
    u = () => {
      onChange(DEFAULT_CUBES_PARAMS);
    },
    f = (x, g) => {
      onChange({
        ...params,
        [x]: g
      });
    },
    m = () => {
      onChange({
        ...params,
        showRabbits: !params.showRabbits
      });
    },
    h = () => {
      onChange({
        ...params,
        showHearts: !params.showHearts
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
            children: c("controls.cubes_title")
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
              children: c("controls.bounce_height")
            }), jsxRuntime.jsx("span", {
              className: "text-black/50",
              children: params.height.toFixed(1)
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.5",
            max: "5",
            step: "0.1",
            value: params.height,
            onChange: x => f("height", parseFloat(x.target.value)),
            className: "w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-black/40",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.damping")
            }), jsxRuntime.jsx("span", {
              className: "text-black/50",
              children: params.damping.toFixed(2)
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.05",
            max: "0.5",
            step: "0.01",
            value: params.damping,
            onChange: x => f("damping", parseFloat(x.target.value)),
            className: "w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "flex items-center justify-between",
          children: [jsxRuntime.jsx("span", {
            className: "text-xs font-medium text-black/40",
            children: c("controls.show_rabbits")
          }), jsxRuntime.jsx("button", {
            onClick: m,
            className: `relative w-10 h-5 rounded-full transition-colors duration-200 ${params.showRabbits ? "bg-black/40" : "bg-black/15"}`,
            children: jsxRuntime.jsx("span", {
              className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${params.showRabbits ? "translate-x-5" : "translate-x-0"}`
            })
          })]
        }), jsxRuntime.jsxs("div", {
          className: "flex items-center justify-between",
          children: [jsxRuntime.jsx("span", {
            className: "text-xs font-medium text-black/40",
            children: c("controls.show_heart")
          }), jsxRuntime.jsx("button", {
            onClick: h,
            className: `relative w-10 h-5 rounded-full transition-colors duration-200 ${params.showHearts ? "bg-black/40" : "bg-black/15"}`,
            children: jsxRuntime.jsx("span", {
              className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${params.showHearts ? "translate-x-5" : "translate-x-0"}`
            })
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
export { CubesSettings };
//# sourceMappingURL=CubesSettings.js.map
