import { jsxRuntime } from "../vendor/react-runtime.js";
const eS = () => jsxRuntime.jsx("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 relative shadow-sm flex items-center justify-center",
  children: jsxRuntime.jsx("div", {
    className: "w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 via-gray-500 to-gray-800 shadow-lg flex items-center justify-center",
    children: jsxRuntime.jsx("div", {
      className: "w-4 h-4 rounded-full bg-gray-300"
    })
  })
});
const tS = () => jsxRuntime.jsxs("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-black relative shadow-sm flex items-center justify-center",
  children: [jsxRuntime.jsx("div", {
    className: "absolute w-2 h-2 bg-cyan-400 rounded-full blur-[1px] top-1/3 left-1/3 opacity-80"
  }), jsxRuntime.jsx("div", {
    className: "absolute w-1.5 h-1.5 bg-purple-400 rounded-full blur-[1px] bottom-1/3 right-1/3 opacity-80"
  }), jsxRuntime.jsx("div", {
    className: "absolute w-1 h-1 bg-white rounded-full blur-[0.5px] top-1/2 right-1/4 opacity-60"
  })]
});
const nS = () => jsxRuntime.jsxs("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-black relative shadow-sm flex items-center justify-center",
  children: [jsxRuntime.jsx("div", {
    className: "absolute w-1 h-1 bg-yellow-400 rounded-full top-1/2 left-1/2 shadow-[0_0_4px_yellow]"
  }), jsxRuntime.jsx("div", {
    className: "absolute w-0.5 h-0.5 bg-red-500 rounded-full top-[40%] left-[40%] opacity-80"
  }), jsxRuntime.jsx("div", {
    className: "absolute w-0.5 h-0.5 bg-blue-500 rounded-full top-[40%] left-[60%] opacity-80"
  }), jsxRuntime.jsx("div", {
    className: "absolute w-0.5 h-0.5 bg-green-500 rounded-full top-[60%] left-[50%] opacity-80"
  })]
});
const iS = () => jsxRuntime.jsxs("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-[#e0f7fa] relative shadow-sm flex items-center justify-center",
  children: [jsxRuntime.jsx("div", {
    className: "absolute inset-0 bg-gradient-to-b from-white/0 to-white/50"
  }), jsxRuntime.jsxs("div", {
    className: "grid grid-cols-3 gap-1 rotate-45 scale-75 transform-gpu",
    children: [jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm translate-y-[-2px]"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm translate-y-[-2px]"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm translate-y-[-4px]"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm translate-y-[-2px]"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm translate-y-[-2px]"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 bg-white shadow-sm"
    })]
  })]
});
const aS = () => jsxRuntime.jsx("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 relative shadow-sm flex items-center justify-center",
  children: jsxRuntime.jsxs("div", {
    className: "w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-400 shadow-lg relative overflow-hidden",
    children: [jsxRuntime.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent opacity-80"
    }), jsxRuntime.jsx("div", {
      className: "absolute top-1 left-2 w-2 h-1 bg-white/80 rounded-full blur-[0.5px]"
    })]
  })
});
const rS = () => jsxRuntime.jsx("div", {
  className: "w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-pink-200 via-blue-200 to-green-200 relative shadow-sm flex items-center justify-center",
  children: jsxRuntime.jsxs("div", {
    className: "flex gap-1",
    children: [jsxRuntime.jsx("div", {
      className: "w-2 h-2 rounded-full bg-pink-500 shadow-sm"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 rounded-full bg-blue-500 shadow-sm"
    }), jsxRuntime.jsx("div", {
      className: "w-2 h-2 rounded-full bg-green-500 shadow-sm"
    })]
  })
});
const themeRegistry = [{
  id: "powerpuff",
  label: "飞天小女警",
  visible: !0,
  isDark: !0,
  isFullscreen: !0,
  Preview: rS
}, {
  id: "cubes",
  label: "方块音阶",
  visible: !0,
  isDark: !1,
  isFullscreen: !0,
  Preview: iS
}, {
  id: "particle",
  label: "封面粒子",
  visible: !0,
  isDark: !0,
  isFullscreen: !0,
  Preview: tS
}, {
  id: "vinyl",
  label: "涂鸦黑胶",
  visible: !0,
  isDark: !1,
  isFullscreen: !1,
  Preview: eS
}, {
  id: "liquid",
  label: "水银球体",
  visible: !1,
  isDark: !0,
  isFullscreen: !0,
  Preview: aS
}, {
  id: "fireworks",
  label: "礼花绽放",
  visible: !1,
  isDark: !0,
  isFullscreen: !0,
  Preview: nS
}];
function getTheme(s) {
  return themeRegistry.find(e => e.id === s);
}
function isDarkTheme(s) {
  var e;
  return ((e = getTheme(s)) == null ? void 0 : e.isDark) ?? !1;
}
function isFullscreenTheme(s) {
  var e;
  return ((e = getTheme(s)) == null ? void 0 : e.isFullscreen) ?? !1;
}
export { isDarkTheme, isFullscreenTheme };
//# sourceMappingURL=themeRegistry.js.map
