import { ReactDefault, jsxRuntime } from "../vendor/react-runtime.js";
import { ResetIcon, SettingsIcon, XIcon } from "../vendor/icons.js";
import { useTranslation } from "../vendor/i18n-runtime.js";
import { LanguageSwitcher } from "../components/LanguageSwitcher.js";
const DEFAULT_PARTICLE_PARAMS = {
  density: 2,
  baseSize: 2,
  amplitude: 2.1,
  speed: 1.5
};
const ParticleSettings = ({
  params: params,
  onChange: onChange,
  isUIHidden: isUIHidden
}) => {
  const [a, o] = ReactDefault.useState(!1),
    {
      t: c
    } = useTranslation(),
    u = () => {
      onChange(DEFAULT_PARTICLE_PARAMS);
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
      className: "absolute top-[70px] right-6 z-20 w-64 bg-white/10 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300",
      children: [jsxRuntime.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [jsxRuntime.jsxs("div", {
          className: "flex items-center gap-2",
          children: [jsxRuntime.jsx("h3", {
            className: "text-sm font-bold text-white/70 uppercase tracking-wider",
            children: c("controls.particle_title")
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
              children: c("controls.density")
            }), jsxRuntime.jsx("span", {
              className: "text-white/40",
              children: 11 - params.density
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "1",
            max: "10",
            step: "1",
            value: 11 - params.density,
            onChange: m => f("density", 11 - parseInt(m.target.value)),
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.size")
            }), jsxRuntime.jsxs("span", {
              className: "text-white/40",
              children: [params.baseSize.toFixed(1), "px"]
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "1",
            max: "10",
            step: "0.5",
            value: params.baseSize,
            onChange: m => f("baseSize", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.amplitude")
            }), jsxRuntime.jsx("span", {
              className: "text-white/40",
              children: params.amplitude.toFixed(1)
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0",
            max: "5",
            step: "0.1",
            value: params.amplitude,
            onChange: m => f("amplitude", parseFloat(m.target.value)),
            className: "w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"
          })]
        }), jsxRuntime.jsxs("div", {
          className: "space-y-2",
          children: [jsxRuntime.jsxs("div", {
            className: "flex justify-between text-xs font-medium text-white/50",
            children: [jsxRuntime.jsx("span", {
              children: c("controls.speed")
            }), jsxRuntime.jsx("span", {
              className: "text-white/40",
              children: params.speed.toFixed(1)
            })]
          }), jsxRuntime.jsx("input", {
            type: "range",
            min: "0.1",
            max: "5",
            step: "0.1",
            value: params.speed,
            onChange: m => f("speed", parseFloat(m.target.value)),
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
}; /**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
export { ParticleSettings };
//# sourceMappingURL=ParticleSettings.js.map
