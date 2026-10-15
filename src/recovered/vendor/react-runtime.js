(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver(o => {
    for (const c of o) if (c.type === "childList") for (const u of c.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && a(u);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(o) {
    const c = {};
    return o.integrity && (c.integrity = o.integrity), o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? c.credentials = "include" : o.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = n(o);
    fetch(o.href, c);
  }
})();
function g_(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var zd = {
  exports: {}
};
var Qo = {}; /**
             * @license React
             * react-jsx-runtime.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Sx;
function _1() {
  if (Sx) return Qo;
  Sx = 1;
  var s = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.fragment");
  function n(a, o, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      c = {};
      for (var f in o) f !== "key" && (c[f] = o[f]);
    } else c = o;
    return o = c.ref, {
      $$typeof: s,
      type: a,
      key: u,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return Qo.Fragment = e, Qo.jsx = n, Qo.jsxs = n, Qo;
}
var Mx;
function y1() {
  return Mx || (Mx = 1, zd.exports = _1()), zd.exports;
}
var jsxRuntime = y1();
var Fd = {
  exports: {}
};
var wt = {}; /**
             * @license React
             * react.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Ex;
function b1() {
  if (Ex) return wt;
  Ex = 1;
  var s = Symbol.for("react.transitional.element"),
    e = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    u = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    v = Symbol.iterator;
  function y(z) {
    return z === null || typeof z != "object" ? null : (z = v && z[v] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    E = Object.assign,
    S = {};
  function _(z, ee, he) {
    this.props = z, this.context = ee, this.refs = S, this.updater = he || M;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function (z, ee) {
    if (typeof z != "object" && typeof z != "function" && z != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, ee, "setState");
  }, _.prototype.forceUpdate = function (z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function L() {}
  L.prototype = _.prototype;
  function D(z, ee, he) {
    this.props = z, this.context = ee, this.refs = S, this.updater = he || M;
  }
  var O = D.prototype = new L();
  O.constructor = D, E(O, _.prototype), O.isPureReactComponent = !0;
  var F = Array.isArray;
  function P() {}
  var B = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    q = Object.prototype.hasOwnProperty;
  function w(z, ee, he) {
    var Ee = he.ref;
    return {
      $$typeof: s,
      type: z,
      key: ee,
      ref: Ee !== void 0 ? Ee : null,
      props: he
    };
  }
  function A(z, ee) {
    return w(z.type, ee, z.props);
  }
  function H(z) {
    return typeof z == "object" && z !== null && z.$$typeof === s;
  }
  function k(z) {
    var ee = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + z.replace(/[=:]/g, function (he) {
      return ee[he];
    });
  }
  var W = /\/+/g;
  function J(z, ee) {
    return typeof z == "object" && z !== null && z.key != null ? k("" + z.key) : ee.toString(36);
  }
  function ie(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(P, P) : (z.status = "pending", z.then(function (ee) {
          z.status === "pending" && (z.status = "fulfilled", z.value = ee);
        }, function (ee) {
          z.status === "pending" && (z.status = "rejected", z.reason = ee);
        })), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function I(z, ee, he, Ee, Be) {
    var te = typeof z;
    (te === "undefined" || te === "boolean") && (z = null);
    var me = !1;
    if (z === null) me = !0;else switch (te) {
      case "bigint":
      case "string":
      case "number":
        me = !0;
        break;
      case "object":
        switch (z.$$typeof) {
          case s:
          case e:
            me = !0;
            break;
          case x:
            return me = z._init, I(me(z._payload), ee, he, Ee, Be);
        }
    }
    if (me) return Be = Be(z), me = Ee === "" ? "." + J(z, 0) : Ee, F(Be) ? (he = "", me != null && (he = me.replace(W, "$&/") + "/"), I(Be, ee, he, "", function (qe) {
      return qe;
    })) : Be != null && (H(Be) && (Be = A(Be, he + (Be.key == null || z && z.key === Be.key ? "" : ("" + Be.key).replace(W, "$&/") + "/") + me)), ee.push(Be)), 1;
    me = 0;
    var He = Ee === "" ? "." : Ee + ":";
    if (F(z)) for (var Ge = 0; Ge < z.length; Ge++) Ee = z[Ge], te = He + J(Ee, Ge), me += I(Ee, ee, he, te, Be);else if (Ge = y(z), typeof Ge == "function") for (z = Ge.call(z), Ge = 0; !(Ee = z.next()).done;) Ee = Ee.value, te = He + J(Ee, Ge++), me += I(Ee, ee, he, te, Be);else if (te === "object") {
      if (typeof z.then == "function") return I(ie(z), ee, he, Ee, Be);
      throw ee = String(z), Error("Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead.");
    }
    return me;
  }
  function Y(z, ee, he) {
    if (z == null) return z;
    var Ee = [],
      Be = 0;
    return I(z, Ee, "", "", function (te) {
      return ee.call(he, te, Be++);
    }), Ee;
  }
  function Z(z) {
    if (z._status === -1) {
      var ee = z._result;
      ee = ee(), ee.then(function (he) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = he);
      }, function (he) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = he);
      }), z._status === -1 && (z._status = 0, z._result = ee);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var pe = typeof reportError == "function" ? reportError : function (z) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var ee = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
          error: z
        });
        if (!window.dispatchEvent(ee)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", z);
        return;
      }
      console.error(z);
    },
    Me = {
      map: Y,
      forEach: function (z, ee, he) {
        Y(z, function () {
          ee.apply(this, arguments);
        }, he);
      },
      count: function (z) {
        var ee = 0;
        return Y(z, function () {
          ee++;
        }), ee;
      },
      toArray: function (z) {
        return Y(z, function (ee) {
          return ee;
        }) || [];
      },
      only: function (z) {
        if (!H(z)) throw Error("React.Children.only expected to receive a single React element child.");
        return z;
      }
    };
  return wt.Activity = g, wt.Children = Me, wt.Component = _, wt.Fragment = n, wt.Profiler = o, wt.PureComponent = D, wt.StrictMode = a, wt.Suspense = m, wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, wt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (z) {
      return B.H.useMemoCache(z);
    }
  }, wt.cache = function (z) {
    return function () {
      return z.apply(null, arguments);
    };
  }, wt.cacheSignal = function () {
    return null;
  }, wt.cloneElement = function (z, ee, he) {
    if (z == null) throw Error("The argument must be a React element, but you passed " + z + ".");
    var Ee = E({}, z.props),
      Be = z.key;
    if (ee != null) for (te in ee.key !== void 0 && (Be = "" + ee.key), ee) !q.call(ee, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && ee.ref === void 0 || (Ee[te] = ee[te]);
    var te = arguments.length - 2;
    if (te === 1) Ee.children = he;else if (1 < te) {
      for (var me = Array(te), He = 0; He < te; He++) me[He] = arguments[He + 2];
      Ee.children = me;
    }
    return w(z.type, Be, Ee);
  }, wt.createContext = function (z) {
    return z = {
      $$typeof: u,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: c,
      _context: z
    }, z;
  }, wt.createElement = function (z, ee, he) {
    var Ee,
      Be = {},
      te = null;
    if (ee != null) for (Ee in ee.key !== void 0 && (te = "" + ee.key), ee) q.call(ee, Ee) && Ee !== "key" && Ee !== "__self" && Ee !== "__source" && (Be[Ee] = ee[Ee]);
    var me = arguments.length - 2;
    if (me === 1) Be.children = he;else if (1 < me) {
      for (var He = Array(me), Ge = 0; Ge < me; Ge++) He[Ge] = arguments[Ge + 2];
      Be.children = He;
    }
    if (z && z.defaultProps) for (Ee in me = z.defaultProps, me) Be[Ee] === void 0 && (Be[Ee] = me[Ee]);
    return w(z, te, Be);
  }, wt.createRef = function () {
    return {
      current: null
    };
  }, wt.forwardRef = function (z) {
    return {
      $$typeof: f,
      render: z
    };
  }, wt.isValidElement = H, wt.lazy = function (z) {
    return {
      $$typeof: x,
      _payload: {
        _status: -1,
        _result: z
      },
      _init: Z
    };
  }, wt.memo = function (z, ee) {
    return {
      $$typeof: h,
      type: z,
      compare: ee === void 0 ? null : ee
    };
  }, wt.startTransition = function (z) {
    var ee = B.T,
      he = {};
    B.T = he;
    try {
      var Ee = z(),
        Be = B.S;
      Be !== null && Be(he, Ee), typeof Ee == "object" && Ee !== null && typeof Ee.then == "function" && Ee.then(P, pe);
    } catch (te) {
      pe(te);
    } finally {
      ee !== null && he.types !== null && (ee.types = he.types), B.T = ee;
    }
  }, wt.unstable_useCacheRefresh = function () {
    return B.H.useCacheRefresh();
  }, wt.use = function (z) {
    return B.H.use(z);
  }, wt.useActionState = function (z, ee, he) {
    return B.H.useActionState(z, ee, he);
  }, wt.useCallback = function (z, ee) {
    return B.H.useCallback(z, ee);
  }, wt.useContext = function (z) {
    return B.H.useContext(z);
  }, wt.useDebugValue = function () {}, wt.useDeferredValue = function (z, ee) {
    return B.H.useDeferredValue(z, ee);
  }, wt.useEffect = function (z, ee) {
    return B.H.useEffect(z, ee);
  }, wt.useEffectEvent = function (z) {
    return B.H.useEffectEvent(z);
  }, wt.useId = function () {
    return B.H.useId();
  }, wt.useImperativeHandle = function (z, ee, he) {
    return B.H.useImperativeHandle(z, ee, he);
  }, wt.useInsertionEffect = function (z, ee) {
    return B.H.useInsertionEffect(z, ee);
  }, wt.useLayoutEffect = function (z, ee) {
    return B.H.useLayoutEffect(z, ee);
  }, wt.useMemo = function (z, ee) {
    return B.H.useMemo(z, ee);
  }, wt.useOptimistic = function (z, ee) {
    return B.H.useOptimistic(z, ee);
  }, wt.useReducer = function (z, ee, he) {
    return B.H.useReducer(z, ee, he);
  }, wt.useRef = function (z) {
    return B.H.useRef(z);
  }, wt.useState = function (z) {
    return B.H.useState(z);
  }, wt.useSyncExternalStore = function (z, ee, he) {
    return B.H.useSyncExternalStore(z, ee, he);
  }, wt.useTransition = function () {
    return B.H.useTransition();
  }, wt.version = "19.2.0", wt;
}
var Tx;
function Mu() {
  return Tx || (Tx = 1, Fd.exports = b1()), Fd.exports;
}
var React = Mu();
const ReactDefault = g_(React);
var Bd = {
  exports: {}
};
var Jo = {};
var Hd = {
  exports: {}
};
var Gd = {}; /**
             * @license React
             * scheduler.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Ax;
function S1() {
  return Ax || (Ax = 1, function (s) {
    function e(I, Y) {
      var Z = I.length;
      I.push(Y);
      e: for (; 0 < Z;) {
        var pe = Z - 1 >>> 1,
          Me = I[pe];
        if (0 < o(Me, Y)) I[pe] = Y, I[Z] = Me, Z = pe;else break e;
      }
    }
    function n(I) {
      return I.length === 0 ? null : I[0];
    }
    function a(I) {
      if (I.length === 0) return null;
      var Y = I[0],
        Z = I.pop();
      if (Z !== Y) {
        I[0] = Z;
        e: for (var pe = 0, Me = I.length, z = Me >>> 1; pe < z;) {
          var ee = 2 * (pe + 1) - 1,
            he = I[ee],
            Ee = ee + 1,
            Be = I[Ee];
          if (0 > o(he, Z)) Ee < Me && 0 > o(Be, he) ? (I[pe] = Be, I[Ee] = Z, pe = Ee) : (I[pe] = he, I[ee] = Z, pe = ee);else if (Ee < Me && 0 > o(Be, Z)) I[pe] = Be, I[Ee] = Z, pe = Ee;else break e;
        }
      }
      return Y;
    }
    function o(I, Y) {
      var Z = I.sortIndex - Y.sortIndex;
      return Z !== 0 ? Z : I.id - Y.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      s.unstable_now = function () {
        return c.now();
      };
    } else {
      var u = Date,
        f = u.now();
      s.unstable_now = function () {
        return u.now() - f;
      };
    }
    var m = [],
      h = [],
      x = 1,
      g = null,
      v = 3,
      y = !1,
      M = !1,
      E = !1,
      S = !1,
      _ = typeof setTimeout == "function" ? setTimeout : null,
      L = typeof clearTimeout == "function" ? clearTimeout : null,
      D = typeof setImmediate < "u" ? setImmediate : null;
    function O(I) {
      for (var Y = n(h); Y !== null;) {
        if (Y.callback === null) a(h);else if (Y.startTime <= I) a(h), Y.sortIndex = Y.expirationTime, e(m, Y);else break;
        Y = n(h);
      }
    }
    function F(I) {
      if (E = !1, O(I), !M) if (n(m) !== null) M = !0, P || (P = !0, k());else {
        var Y = n(h);
        Y !== null && ie(F, Y.startTime - I);
      }
    }
    var P = !1,
      B = -1,
      q = 5,
      w = -1;
    function A() {
      return S ? !0 : !(s.unstable_now() - w < q);
    }
    function H() {
      if (S = !1, P) {
        var I = s.unstable_now();
        w = I;
        var Y = !0;
        try {
          e: {
            M = !1, E && (E = !1, L(B), B = -1), y = !0;
            var Z = v;
            try {
              t: {
                for (O(I), g = n(m); g !== null && !(g.expirationTime > I && A());) {
                  var pe = g.callback;
                  if (typeof pe == "function") {
                    g.callback = null, v = g.priorityLevel;
                    var Me = pe(g.expirationTime <= I);
                    if (I = s.unstable_now(), typeof Me == "function") {
                      g.callback = Me, O(I), Y = !0;
                      break t;
                    }
                    g === n(m) && a(m), O(I);
                  } else a(m);
                  g = n(m);
                }
                if (g !== null) Y = !0;else {
                  var z = n(h);
                  z !== null && ie(F, z.startTime - I), Y = !1;
                }
              }
              break e;
            } finally {
              g = null, v = Z, y = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? k() : P = !1;
        }
      }
    }
    var k;
    if (typeof D == "function") k = function () {
      D(H);
    };else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(),
        J = W.port2;
      W.port1.onmessage = H, k = function () {
        J.postMessage(null);
      };
    } else k = function () {
      _(H, 0);
    };
    function ie(I, Y) {
      B = _(function () {
        I(s.unstable_now());
      }, Y);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function (I) {
      I.callback = null;
    }, s.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < I ? Math.floor(1e3 / I) : 5;
    }, s.unstable_getCurrentPriorityLevel = function () {
      return v;
    }, s.unstable_next = function (I) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = v;
      }
      var Z = v;
      v = Y;
      try {
        return I();
      } finally {
        v = Z;
      }
    }, s.unstable_requestPaint = function () {
      S = !0;
    }, s.unstable_runWithPriority = function (I, Y) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var Z = v;
      v = I;
      try {
        return Y();
      } finally {
        v = Z;
      }
    }, s.unstable_scheduleCallback = function (I, Y, Z) {
      var pe = s.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? pe + Z : pe) : Z = pe, I) {
        case 1:
          var Me = -1;
          break;
        case 2:
          Me = 250;
          break;
        case 5:
          Me = 1073741823;
          break;
        case 4:
          Me = 1e4;
          break;
        default:
          Me = 5e3;
      }
      return Me = Z + Me, I = {
        id: x++,
        callback: Y,
        priorityLevel: I,
        startTime: Z,
        expirationTime: Me,
        sortIndex: -1
      }, Z > pe ? (I.sortIndex = Z, e(h, I), n(m) === null && I === n(h) && (E ? (L(B), B = -1) : E = !0, ie(F, Z - pe))) : (I.sortIndex = Me, e(m, I), M || y || (M = !0, P || (P = !0, k()))), I;
    }, s.unstable_shouldYield = A, s.unstable_wrapCallback = function (I) {
      var Y = v;
      return function () {
        var Z = v;
        v = Y;
        try {
          return I.apply(this, arguments);
        } finally {
          v = Z;
        }
      };
    };
  }(Gd)), Gd;
}
var wx;
function M1() {
  return wx || (wx = 1, Hd.exports = S1()), Hd.exports;
}
var Vd = {
  exports: {}
};
var Kn = {}; /**
             * @license React
             * react-dom.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Rx;
function E1() {
  if (Rx) return Kn;
  Rx = 1;
  var s = Mu();
  function e(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++) h += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + m + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {}
  var a = {
      d: {
        f: n,
        r: function () {
          throw Error(e(522));
        },
        D: n,
        C: n,
        L: n,
        m: n,
        X: n,
        S: n,
        M: n
      },
      p: 0,
      findDOMNode: null
    },
    o = Symbol.for("react.portal");
  function c(m, h, x) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: g == null ? null : "" + g,
      children: m,
      containerInfo: h,
      implementation: x
    };
  }
  var u = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(m, h) {
    if (m === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Kn.createPortal = function (m, h) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(e(299));
    return c(m, h, null, x);
  }, Kn.flushSync = function (m) {
    var h = u.T,
      x = a.p;
    try {
      if (u.T = null, a.p = 2, m) return m();
    } finally {
      u.T = h, a.p = x, a.d.f();
    }
  }, Kn.preconnect = function (m, h) {
    typeof m == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, a.d.C(m, h));
  }, Kn.prefetchDNS = function (m) {
    typeof m == "string" && a.d.D(m);
  }, Kn.preinit = function (m, h) {
    if (typeof m == "string" && h && typeof h.as == "string") {
      var x = h.as,
        g = f(x, h.crossOrigin),
        v = typeof h.integrity == "string" ? h.integrity : void 0,
        y = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      x === "style" ? a.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
        crossOrigin: g,
        integrity: v,
        fetchPriority: y
      }) : x === "script" && a.d.X(m, {
        crossOrigin: g,
        integrity: v,
        fetchPriority: y,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, Kn.preinitModule = function (m, h) {
    if (typeof m == "string") if (typeof h == "object" && h !== null) {
      if (h.as == null || h.as === "script") {
        var x = f(h.as, h.crossOrigin);
        a.d.M(m, {
          crossOrigin: x,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0
        });
      }
    } else h == null && a.d.M(m);
  }, Kn.preload = function (m, h) {
    if (typeof m == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var x = h.as,
        g = f(x, h.crossOrigin);
      a.d.L(m, x, {
        crossOrigin: g,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, Kn.preloadModule = function (m, h) {
    if (typeof m == "string") if (h) {
      var x = f(h.as, h.crossOrigin);
      a.d.m(m, {
        as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
        crossOrigin: x,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0
      });
    } else a.d.m(m);
  }, Kn.requestFormReset = function (m) {
    a.d.r(m);
  }, Kn.unstable_batchedUpdates = function (m, h) {
    return m(h);
  }, Kn.useFormState = function (m, h, x) {
    return u.H.useFormState(m, h, x);
  }, Kn.useFormStatus = function () {
    return u.H.useHostTransitionStatus();
  }, Kn.version = "19.2.0", Kn;
}
var Cx;
function T1() {
  if (Cx) return Vd.exports;
  Cx = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
    } catch (e) {
      console.error(e);
    }
  }
  return s(), Vd.exports = E1(), Vd.exports;
} /**
  * @license React
  * react-dom-client.production.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Dx;
function A1() {
  if (Dx) return Jo;
  Dx = 1;
  var s = M1(),
    e = Mu(),
    n = T1();
  function a(t) {
    var i = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) i += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function c(t) {
    var i = t,
      r = t;
    if (t.alternate) for (; i.return;) i = i.return;else {
      t = i;
      do i = t, (i.flags & 4098) !== 0 && (r = i.return), t = i.return; while (t);
    }
    return i.tag === 3 ? r : null;
  }
  function u(t) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function f(t) {
    if (t.tag === 31) {
      var i = t.memoizedState;
      if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (c(t) !== t) throw Error(a(188));
  }
  function h(t) {
    var i = t.alternate;
    if (!i) {
      if (i = c(t), i === null) throw Error(a(188));
      return i !== t ? null : t;
    }
    for (var r = t, l = i;;) {
      var d = r.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (l = d.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p;) {
          if (p === r) return m(d), t;
          if (p === l) return m(d), i;
          p = p.sibling;
        }
        throw Error(a(188));
      }
      if (r.return !== l.return) r = d, l = p;else {
        for (var b = !1, R = d.child; R;) {
          if (R === r) {
            b = !0, r = d, l = p;
            break;
          }
          if (R === l) {
            b = !0, l = d, r = p;
            break;
          }
          R = R.sibling;
        }
        if (!b) {
          for (R = p.child; R;) {
            if (R === r) {
              b = !0, r = p, l = d;
              break;
            }
            if (R === l) {
              b = !0, l = p, r = d;
              break;
            }
            R = R.sibling;
          }
          if (!b) throw Error(a(189));
        }
      }
      if (r.alternate !== l) throw Error(a(190));
    }
    if (r.tag !== 3) throw Error(a(188));
    return r.stateNode.current === r ? t : i;
  }
  function x(t) {
    var i = t.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return t;
    for (t = t.child; t !== null;) {
      if (i = x(t), i !== null) return i;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for("react.element"),
    y = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    S = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    L = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    O = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    w = Symbol.for("react.activity"),
    A = Symbol.for("react.memo_cache_sentinel"),
    H = Symbol.iterator;
  function k(t) {
    return t === null || typeof t != "object" ? null : (t = H && t[H] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var W = Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === W ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case _:
        return "Profiler";
      case S:
        return "StrictMode";
      case F:
        return "Suspense";
      case P:
        return "SuspenseList";
      case w:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case M:
        return "Portal";
      case D:
        return t.displayName || "Context";
      case L:
        return (t._context.displayName || "Context") + ".Consumer";
      case O:
        var i = t.render;
        return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case B:
        return i = t.displayName || null, i !== null ? i : J(t.type) || "Memo";
      case q:
        i = t._payload, t = t._init;
        try {
          return J(t(i));
        } catch {}
    }
    return null;
  }
  var ie = Array.isArray,
    I = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    pe = [],
    Me = -1;
  function z(t) {
    return {
      current: t
    };
  }
  function ee(t) {
    0 > Me || (t.current = pe[Me], pe[Me] = null, Me--);
  }
  function he(t, i) {
    Me++, pe[Me] = t.current, t.current = i;
  }
  var Ee = z(null),
    Be = z(null),
    te = z(null),
    me = z(null);
  function He(t, i) {
    switch (he(te, i), he(Be, t), he(Ee, null), i.nodeType) {
      case 9:
      case 11:
        t = (t = i.documentElement) && (t = t.namespaceURI) ? Xg(t) : 0;
        break;
      default:
        if (t = i.tagName, i = i.namespaceURI) i = Xg(i), t = Wg(i, t);else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    ee(Ee), he(Ee, t);
  }
  function Ge() {
    ee(Ee), ee(Be), ee(te);
  }
  function qe(t) {
    t.memoizedState !== null && he(me, t);
    var i = Ee.current,
      r = Wg(i, t.type);
    i !== r && (he(Be, t), he(Ee, r));
  }
  function Ke(t) {
    Be.current === t && (ee(Ee), ee(Be)), me.current === t && (ee(me), Yo._currentValue = Z);
  }
  var Te, Je;
  function st(t) {
    if (Te === void 0) try {
      throw Error();
    } catch (r) {
      var i = r.stack.trim().match(/\n( *(at )?)/);
      Te = i && i[1] || "", Je = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Te + t + Je;
  }
  var G = !1;
  function nt(t, i) {
    if (!t || G) return "";
    G = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (i) {
              var Oe = function () {
                throw Error();
              };
              if (Object.defineProperty(Oe.prototype, "props", {
                set: function () {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Oe, []);
                } catch (Se) {
                  var ge = Se;
                }
                Reflect.construct(t, [], Oe);
              } else {
                try {
                  Oe.call();
                } catch (Se) {
                  ge = Se;
                }
                t.call(Oe.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Se) {
                ge = Se;
              }
              (Oe = t()) && typeof Oe.catch == "function" && Oe.catch(function () {});
            }
          } catch (Se) {
            if (Se && ge && typeof Se.stack == "string") return [Se.stack, ge.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      d && d.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var p = l.DetermineComponentFrameRoot(),
        b = p[0],
        R = p[1];
      if (b && R) {
        var X = b.split(`
`),
          de = R.split(`
`);
        for (d = l = 0; l < X.length && !X[l].includes("DetermineComponentFrameRoot");) l++;
        for (; d < de.length && !de[d].includes("DetermineComponentFrameRoot");) d++;
        if (l === X.length || d === de.length) for (l = X.length - 1, d = de.length - 1; 1 <= l && 0 <= d && X[l] !== de[d];) d--;
        for (; 1 <= l && 0 <= d; l--, d--) if (X[l] !== de[d]) {
          if (l !== 1 || d !== 1) do if (l--, d--, 0 > d || X[l] !== de[d]) {
            var Ce = `
` + X[l].replace(" at new ", " at ");
            return t.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", t.displayName)), Ce;
          } while (1 <= l && 0 <= d);
          break;
        }
      }
    } finally {
      G = !1, Error.prepareStackTrace = r;
    }
    return (r = t ? t.displayName || t.name : "") ? st(r) : "";
  }
  function rt(t, i) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return st(t.type);
      case 16:
        return st("Lazy");
      case 13:
        return t.child !== i && i !== null ? st("Suspense Fallback") : st("Suspense");
      case 19:
        return st("SuspenseList");
      case 0:
      case 15:
        return nt(t.type, !1);
      case 11:
        return nt(t.type.render, !1);
      case 1:
        return nt(t.type, !0);
      case 31:
        return st("Activity");
      default:
        return "";
    }
  }
  function it(t) {
    try {
      var i = "",
        r = null;
      do i += rt(t, r), r = t, t = t.return; while (t);
      return i;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Fe = Object.prototype.hasOwnProperty,
    Et = s.unstable_scheduleCallback,
    tt = s.unstable_cancelCallback,
    ft = s.unstable_shouldYield,
    U = s.unstable_requestPaint,
    T = s.unstable_now,
    $ = s.unstable_getCurrentPriorityLevel,
    ve = s.unstable_ImmediatePriority,
    ue = s.unstable_UserBlockingPriority,
    se = s.unstable_NormalPriority,
    Ye = s.unstable_LowPriority,
    ke = s.unstable_IdlePriority,
    ye = s.log,
    Qe = s.unstable_setDisableYieldValue,
    Re = null,
    oe = null;
  function Le(t) {
    if (typeof ye == "function" && Qe(t), oe && typeof oe.setStrictMode == "function") try {
      oe.setStrictMode(Re, t);
    } catch {}
  }
  var Ve = Math.clz32 ? Math.clz32 : V,
    _e = Math.log,
    ze = Math.LN2;
  function V(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (_e(t) / ze | 0) | 0;
  }
  var Pe = 256,
    we = 262144,
    Ie = 4194304;
  function Ne(t) {
    var i = t & 42;
    if (i !== 0) return i;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ae(t, i, r) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var d = 0,
      p = t.suspendedLanes,
      b = t.pingedLanes;
    t = t.warmLanes;
    var R = l & 134217727;
    return R !== 0 ? (l = R & ~p, l !== 0 ? d = Ne(l) : (b &= R, b !== 0 ? d = Ne(b) : r || (r = R & ~t, r !== 0 && (d = Ne(r))))) : (R = l & ~p, R !== 0 ? d = Ne(R) : b !== 0 ? d = Ne(b) : r || (r = l & ~t, r !== 0 && (d = Ne(r)))), d === 0 ? 0 : i !== 0 && i !== d && (i & p) === 0 && (p = d & -d, r = i & -i, p >= r || p === 32 && (r & 4194048) !== 0) ? i : d;
  }
  function je(t, i) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & i) === 0;
  }
  function ct(t, i) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ut() {
    var t = Ie;
    return Ie <<= 1, (Ie & 62914560) === 0 && (Ie = 4194304), t;
  }
  function mt(t) {
    for (var i = [], r = 0; 31 > r; r++) i.push(t);
    return i;
  }
  function Gt(t, i) {
    t.pendingLanes |= i, i !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function gt(t, i, r, l, d, p) {
    var b = t.pendingLanes;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= r, t.entangledLanes &= r, t.errorRecoveryDisabledLanes &= r, t.shellSuspendCounter = 0;
    var R = t.entanglements,
      X = t.expirationTimes,
      de = t.hiddenUpdates;
    for (r = b & ~r; 0 < r;) {
      var Ce = 31 - Ve(r),
        Oe = 1 << Ce;
      R[Ce] = 0, X[Ce] = -1;
      var ge = de[Ce];
      if (ge !== null) for (de[Ce] = null, Ce = 0; Ce < ge.length; Ce++) {
        var Se = ge[Ce];
        Se !== null && (Se.lane &= -536870913);
      }
      r &= ~Oe;
    }
    l !== 0 && Fn(t, l, 0), p !== 0 && d === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(b & ~i));
  }
  function Fn(t, i, r) {
    t.pendingLanes |= i, t.suspendedLanes &= ~i;
    var l = 31 - Ve(i);
    t.entangledLanes |= i, t.entanglements[l] = t.entanglements[l] | 1073741824 | r & 261930;
  }
  function Un(t, i) {
    var r = t.entangledLanes |= i;
    for (t = t.entanglements; r;) {
      var l = 31 - Ve(r),
        d = 1 << l;
      d & i | t[l] & i && (t[l] |= i), r &= ~d;
    }
  }
  function bn(t, i) {
    var r = i & -i;
    return r = (r & 42) !== 0 ? 1 : Tt(r), (r & (t.suspendedLanes | i)) !== 0 ? 0 : r;
  }
  function Tt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function j(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xe() {
    var t = Y.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : mx(t.type));
  }
  function De(t, i) {
    var r = Y.p;
    try {
      return Y.p = t, i();
    } finally {
      Y.p = r;
    }
  }
  var Ze = Math.random().toString(36).slice(2),
    lt = "__reactFiber$" + Ze,
    xt = "__reactProps$" + Ze,
    bt = "__reactContainer$" + Ze,
    Ut = "__reactEvents$" + Ze,
    qt = "__reactListeners$" + Ze,
    _t = "__reactHandles$" + Ze,
    Pt = "__reactResources$" + Ze,
    fn = "__reactMarker$" + Ze;
  function gn(t) {
    delete t[lt], delete t[xt], delete t[Ut], delete t[qt], delete t[_t];
  }
  function Tn(t) {
    var i = t[lt];
    if (i) return i;
    for (var r = t.parentNode; r;) {
      if (i = r[bt] || r[lt]) {
        if (r = i.alternate, i.child !== null || r !== null && r.child !== null) for (t = $g(t); t !== null;) {
          if (r = t[lt]) return r;
          t = $g(t);
        }
        return i;
      }
      t = r, r = t.parentNode;
    }
    return null;
  }
  function C(t) {
    if (t = t[lt] || t[bt]) {
      var i = t.tag;
      if (i === 5 || i === 6 || i === 13 || i === 31 || i === 26 || i === 27 || i === 3) return t;
    }
    return null;
  }
  function K(t) {
    var i = t.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return t.stateNode;
    throw Error(a(33));
  }
  function ce(t) {
    var i = t[Pt];
    return i || (i = t[Pt] = {
      hoistableStyles: new Map(),
      hoistableScripts: new Map()
    }), i;
  }
  function le(t) {
    t[fn] = !0;
  }
  var ne = new Set(),
    Xe = {};
  function We(t, i) {
    $e(t, i), $e(t + "Capture", i);
  }
  function $e(t, i) {
    for (Xe[t] = i, t = 0; t < i.length; t++) ne.add(i[t]);
  }
  var at = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    yt = {},
    Mt = {};
  function ht(t) {
    return Fe.call(Mt, t) ? !0 : Fe.call(yt, t) ? !1 : at.test(t) ? Mt[t] = !0 : (yt[t] = !0, !1);
  }
  function Dt(t, i, r) {
    if (ht(i)) if (r === null) t.removeAttribute(i);else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(i);
          return;
        case "boolean":
          var l = i.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            t.removeAttribute(i);
            return;
          }
      }
      t.setAttribute(i, "" + r);
    }
  }
  function Yt(t, i, r) {
    if (r === null) t.removeAttribute(i);else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttribute(i, "" + r);
    }
  }
  function Zt(t, i, r, l) {
    if (l === null) t.removeAttribute(r);else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttributeNS(i, r, "" + l);
    }
  }
  function Vt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function en(t) {
    var i = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function vt(t, i, r) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, i);
    if (!t.hasOwnProperty(i) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var d = l.get,
        p = l.set;
      return Object.defineProperty(t, i, {
        configurable: !0,
        get: function () {
          return d.call(this);
        },
        set: function (b) {
          r = "" + b, p.call(this, b);
        }
      }), Object.defineProperty(t, i, {
        enumerable: l.enumerable
      }), {
        getValue: function () {
          return r;
        },
        setValue: function (b) {
          r = "" + b;
        },
        stopTracking: function () {
          t._valueTracker = null, delete t[i];
        }
      };
    }
  }
  function cn(t) {
    if (!t._valueTracker) {
      var i = en(t) ? "checked" : "value";
      t._valueTracker = vt(t, i, "" + t[i]);
    }
  }
  function kt(t) {
    if (!t) return !1;
    var i = t._valueTracker;
    if (!i) return !0;
    var r = i.getValue(),
      l = "";
    return t && (l = en(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== r ? (i.setValue(t), !0) : !1;
  }
  function Bn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Fa = /[\n"\\]/g;
  function dn(t) {
    return t.replace(Fa, function (i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function $i(t, i, r, l, d, p, b, R) {
    t.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.type = b : t.removeAttribute("type"), i != null ? b === "number" ? (i === 0 && t.value === "" || t.value != i) && (t.value = "" + Vt(i)) : t.value !== "" + Vt(i) && (t.value = "" + Vt(i)) : b !== "submit" && b !== "reset" || t.removeAttribute("value"), i != null ? Hn(t, b, Vt(i)) : r != null ? Hn(t, b, Vt(r)) : l != null && t.removeAttribute("value"), d == null && p != null && (t.defaultChecked = !!p), d != null && (t.checked = d && typeof d != "function" && typeof d != "symbol"), R != null && typeof R != "function" && typeof R != "symbol" && typeof R != "boolean" ? t.name = "" + Vt(R) : t.removeAttribute("name");
  }
  function hn(t, i, r, l, d, p, b, R) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.type = p), i != null || r != null) {
      if (!(p !== "submit" && p !== "reset" || i != null)) {
        cn(t);
        return;
      }
      r = r != null ? "" + Vt(r) : "", i = i != null ? "" + Vt(i) : r, R || i === t.value || (t.value = i), t.defaultValue = i;
    }
    l = l ?? d, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = R ? t.checked : !!l, t.defaultChecked = !!l, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (t.name = b), cn(t);
  }
  function Hn(t, i, r) {
    i === "number" && Bn(t.ownerDocument) === t || t.defaultValue === "" + r || (t.defaultValue = "" + r);
  }
  function On(t, i, r, l) {
    if (t = t.options, i) {
      i = {};
      for (var d = 0; d < r.length; d++) i["$" + r[d]] = !0;
      for (r = 0; r < t.length; r++) d = i.hasOwnProperty("$" + t[r].value), t[r].selected !== d && (t[r].selected = d), d && l && (t[r].defaultSelected = !0);
    } else {
      for (r = "" + Vt(r), i = null, d = 0; d < t.length; d++) {
        if (t[d].value === r) {
          t[d].selected = !0, l && (t[d].defaultSelected = !0);
          return;
        }
        i !== null || t[d].disabled || (i = t[d]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Gn(t, i, r) {
    if (i != null && (i = "" + Vt(i), i !== t.value && (t.value = i), r == null)) {
      t.defaultValue !== i && (t.defaultValue = i);
      return;
    }
    t.defaultValue = r != null ? "" + Vt(r) : "";
  }
  function jn(t, i, r, l) {
    if (i == null) {
      if (l != null) {
        if (r != null) throw Error(a(92));
        if (ie(l)) {
          if (1 < l.length) throw Error(a(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), i = r;
    }
    r = Vt(i), t.defaultValue = r, l = t.textContent, l === r && l !== "" && l !== null && (t.value = l), cn(t);
  }
  function Xi(t, i) {
    if (i) {
      var r = t.firstChild;
      if (r && r === t.lastChild && r.nodeType === 3) {
        r.nodeValue = i;
        return;
      }
    }
    t.textContent = i;
  }
  var ea = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function V0(t, i, r) {
    var l = i.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "" : l ? t.setProperty(i, r) : typeof r != "number" || r === 0 || ea.has(i) ? i === "float" ? t.cssFloat = r : t[i] = ("" + r).trim() : t[i] = r + "px";
  }
  function k0(t, i, r) {
    if (i != null && typeof i != "object") throw Error(a(62));
    if (t = t.style, r != null) {
      for (var l in r) !r.hasOwnProperty(l) || i != null && i.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var d in i) l = i[d], i.hasOwnProperty(d) && r[d] !== l && V0(t, d, l);
    } else for (var p in i) i.hasOwnProperty(p) && V0(t, p, i[p]);
  }
  function Lu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var my = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
    gy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wl(t) {
    return gy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ta() {}
  var Uu = null;
  function Ou(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Jr = null,
    $r = null;
  function j0(t) {
    var i = C(t);
    if (i && (t = i.stateNode)) {
      var r = t[xt] || null;
      e: switch (t = i.stateNode, i.type) {
        case "input":
          if ($i(t, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), i = r.name, r.type === "radio" && i != null) {
            for (r = t; r.parentNode;) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + dn("" + i) + '"][type="radio"]'), i = 0; i < r.length; i++) {
              var l = r[i];
              if (l !== t && l.form === t.form) {
                var d = l[xt] || null;
                if (!d) throw Error(a(90));
                $i(l, d.value, d.defaultValue, d.defaultValue, d.checked, d.defaultChecked, d.type, d.name);
              }
            }
            for (i = 0; i < r.length; i++) l = r[i], l.form === t.form && kt(l);
          }
          break e;
        case "textarea":
          Gn(t, r.value, r.defaultValue);
          break e;
        case "select":
          i = r.value, i != null && On(t, !!r.multiple, i, !1);
      }
    }
  }
  var Pu = !1;
  function X0(t, i, r) {
    if (Pu) return t(i, r);
    Pu = !0;
    try {
      var l = t(i);
      return l;
    } finally {
      if (Pu = !1, (Jr !== null || $r !== null) && (pc(), Jr && (i = Jr, t = $r, $r = Jr = null, j0(i), t))) for (i = 0; i < t.length; i++) j0(t[i]);
    }
  }
  function co(t, i) {
    var r = t.stateNode;
    if (r === null) return null;
    var l = r[xt] || null;
    if (l === null) return null;
    r = l[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (r && typeof r != "function") throw Error(a(231, i, typeof r));
    return r;
  }
  var na = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Iu = !1;
  if (na) try {
    var uo = {};
    Object.defineProperty(uo, "passive", {
      get: function () {
        Iu = !0;
      }
    }), window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo);
  } catch {
    Iu = !1;
  }
  var Ba = null,
    zu = null,
    Rl = null;
  function W0() {
    if (Rl) return Rl;
    var t,
      i = zu,
      r = i.length,
      l,
      d = "value" in Ba ? Ba.value : Ba.textContent,
      p = d.length;
    for (t = 0; t < r && i[t] === d[t]; t++);
    var b = r - t;
    for (l = 1; l <= b && i[r - l] === d[p - l]; l++);
    return Rl = d.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Cl(t) {
    var i = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Dl() {
    return !0;
  }
  function Y0() {
    return !1;
  }
  function ii(t) {
    function i(r, l, d, p, b) {
      this._reactName = r, this._targetInst = d, this.type = l, this.nativeEvent = p, this.target = b, this.currentTarget = null;
      for (var R in t) t.hasOwnProperty(R) && (r = t[R], this[R] = r ? r(p) : p[R]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Dl : Y0, this.isPropagationStopped = Y0, this;
    }
    return g(i.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Dl);
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Dl);
      },
      persist: function () {},
      isPersistent: Dl
    }), i;
  }
  var _r = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Nl = ii(_r),
    fo = g({}, _r, {
      view: 0,
      detail: 0
    }),
    xy = ii(fo),
    Fu,
    Bu,
    ho,
    Ll = g({}, fo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t ? t.movementX : (t !== ho && (ho && t.type === "mousemove" ? (Fu = t.screenX - ho.screenX, Bu = t.screenY - ho.screenY) : Bu = Fu = 0, ho = t), Fu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Bu;
      }
    }),
    q0 = ii(Ll),
    vy = g({}, Ll, {
      dataTransfer: 0
    }),
    _y = ii(vy),
    yy = g({}, fo, {
      relatedTarget: 0
    }),
    Hu = ii(yy),
    by = g({}, _r, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Sy = ii(by),
    My = g({}, _r, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }),
    Ey = ii(My),
    Ty = g({}, _r, {
      data: 0
    }),
    Z0 = ii(Ty),
    Ay = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    wy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    Ry = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
  function Cy(t) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(t) : (t = Ry[t]) ? !!i[t] : !1;
  }
  function Gu() {
    return Cy;
  }
  var Dy = g({}, fo, {
      key: function (t) {
        if (t.key) {
          var i = Ay[t.key] || t.key;
          if (i !== "Unidentified") return i;
        }
        return t.type === "keypress" ? (t = Cl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? wy[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gu,
      charCode: function (t) {
        return t.type === "keypress" ? Cl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress" ? Cl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }),
    Ny = ii(Dy),
    Ly = g({}, Ll, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    K0 = ii(Ly),
    Uy = g({}, fo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gu
    }),
    Oy = ii(Uy),
    Py = g({}, _r, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Iy = ii(Py),
    zy = g({}, Ll, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Fy = ii(zy),
    By = g({}, _r, {
      newState: 0,
      oldState: 0
    }),
    Hy = ii(By),
    Gy = [9, 13, 27, 32],
    Vu = na && "CompositionEvent" in window,
    po = null;
  na && "documentMode" in document && (po = document.documentMode);
  var Vy = na && "TextEvent" in window && !po,
    Q0 = na && (!Vu || po && 8 < po && 11 >= po),
    J0 = " ",
    $0 = !1;
  function ep(t, i) {
    switch (t) {
      case "keyup":
        return Gy.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function tp(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var es = !1;
  function ky(t, i) {
    switch (t) {
      case "compositionend":
        return tp(i);
      case "keypress":
        return i.which !== 32 ? null : ($0 = !0, J0);
      case "textInput":
        return t = i.data, t === J0 && $0 ? null : t;
      default:
        return null;
    }
  }
  function jy(t, i) {
    if (es) return t === "compositionend" || !Vu && ep(t, i) ? (t = W0(), Rl = zu = Ba = null, es = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Q0 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var Xy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function np(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i === "input" ? !!Xy[t.type] : i === "textarea";
  }
  function ip(t, i, r, l) {
    Jr ? $r ? $r.push(l) : $r = [l] : Jr = l, i = bc(i, "onChange"), 0 < i.length && (r = new Nl("onChange", "change", null, r, l), t.push({
      event: r,
      listeners: i
    }));
  }
  var mo = null,
    go = null;
  function Wy(t) {
    Bg(t, 0);
  }
  function Ul(t) {
    var i = K(t);
    if (kt(i)) return t;
  }
  function ap(t, i) {
    if (t === "change") return i;
  }
  var rp = !1;
  if (na) {
    var ku;
    if (na) {
      var ju = "oninput" in document;
      if (!ju) {
        var sp = document.createElement("div");
        sp.setAttribute("oninput", "return;"), ju = typeof sp.oninput == "function";
      }
      ku = ju;
    } else ku = !1;
    rp = ku && (!document.documentMode || 9 < document.documentMode);
  }
  function op() {
    mo && (mo.detachEvent("onpropertychange", lp), go = mo = null);
  }
  function lp(t) {
    if (t.propertyName === "value" && Ul(go)) {
      var i = [];
      ip(i, go, t, Ou(t)), X0(Wy, i);
    }
  }
  function Yy(t, i, r) {
    t === "focusin" ? (op(), mo = i, go = r, mo.attachEvent("onpropertychange", lp)) : t === "focusout" && op();
  }
  function qy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ul(go);
  }
  function Zy(t, i) {
    if (t === "click") return Ul(i);
  }
  function Ky(t, i) {
    if (t === "input" || t === "change") return Ul(i);
  }
  function Qy(t, i) {
    return t === i && (t !== 0 || 1 / t === 1 / i) || t !== t && i !== i;
  }
  var fi = typeof Object.is == "function" ? Object.is : Qy;
  function xo(t, i) {
    if (fi(t, i)) return !0;
    if (typeof t != "object" || t === null || typeof i != "object" || i === null) return !1;
    var r = Object.keys(t),
      l = Object.keys(i);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var d = r[l];
      if (!Fe.call(i, d) || !fi(t[d], i[d])) return !1;
    }
    return !0;
  }
  function cp(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function up(t, i) {
    var r = cp(t);
    t = 0;
    for (var l; r;) {
      if (r.nodeType === 3) {
        if (l = t + r.textContent.length, t <= i && l >= i) return {
          node: r,
          offset: i - t
        };
        t = l;
      }
      e: {
        for (; r;) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = cp(r);
    }
  }
  function fp(t, i) {
    return t && i ? t === i ? !0 : t && t.nodeType === 3 ? !1 : i && i.nodeType === 3 ? fp(t, i.parentNode) : "contains" in t ? t.contains(i) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function dp(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var i = Bn(t.document); i instanceof t.HTMLIFrameElement;) {
      try {
        var r = typeof i.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) t = i.contentWindow;else break;
      i = Bn(t.document);
    }
    return i;
  }
  function Xu(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i && (i === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || i === "textarea" || t.contentEditable === "true");
  }
  var Jy = na && "documentMode" in document && 11 >= document.documentMode,
    ts = null,
    Wu = null,
    vo = null,
    Yu = !1;
  function hp(t, i, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Yu || ts == null || ts !== Bn(l) || (l = ts, "selectionStart" in l && Xu(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), vo && xo(vo, l) || (vo = l, l = bc(Wu, "onSelect"), 0 < l.length && (i = new Nl("onSelect", "select", null, i, r), t.push({
      event: i,
      listeners: l
    }), i.target = ts)));
  }
  function yr(t, i) {
    var r = {};
    return r[t.toLowerCase()] = i.toLowerCase(), r["Webkit" + t] = "webkit" + i, r["Moz" + t] = "moz" + i, r;
  }
  var ns = {
      animationend: yr("Animation", "AnimationEnd"),
      animationiteration: yr("Animation", "AnimationIteration"),
      animationstart: yr("Animation", "AnimationStart"),
      transitionrun: yr("Transition", "TransitionRun"),
      transitionstart: yr("Transition", "TransitionStart"),
      transitioncancel: yr("Transition", "TransitionCancel"),
      transitionend: yr("Transition", "TransitionEnd")
    },
    qu = {},
    pp = {};
  na && (pp = document.createElement("div").style, "AnimationEvent" in window || (delete ns.animationend.animation, delete ns.animationiteration.animation, delete ns.animationstart.animation), "TransitionEvent" in window || delete ns.transitionend.transition);
  function br(t) {
    if (qu[t]) return qu[t];
    if (!ns[t]) return t;
    var i = ns[t],
      r;
    for (r in i) if (i.hasOwnProperty(r) && r in pp) return qu[t] = i[r];
    return t;
  }
  var mp = br("animationend"),
    gp = br("animationiteration"),
    xp = br("animationstart"),
    $y = br("transitionrun"),
    eb = br("transitionstart"),
    tb = br("transitioncancel"),
    vp = br("transitionend"),
    _p = new Map(),
    Zu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Zu.push("scrollEnd");
  function Pi(t, i) {
    _p.set(t, i), We(i, [t]);
  }
  var Ol = typeof reportError == "function" ? reportError : function (t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var i = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(i)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    },
    Si = [],
    is = 0,
    Ku = 0;
  function Pl() {
    for (var t = is, i = Ku = is = 0; i < t;) {
      var r = Si[i];
      Si[i++] = null;
      var l = Si[i];
      Si[i++] = null;
      var d = Si[i];
      Si[i++] = null;
      var p = Si[i];
      if (Si[i++] = null, l !== null && d !== null) {
        var b = l.pending;
        b === null ? d.next = d : (d.next = b.next, b.next = d), l.pending = d;
      }
      p !== 0 && yp(r, d, p);
    }
  }
  function Il(t, i, r, l) {
    Si[is++] = t, Si[is++] = i, Si[is++] = r, Si[is++] = l, Ku |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function Qu(t, i, r, l) {
    return Il(t, i, r, l), zl(t);
  }
  function Sr(t, i) {
    return Il(t, null, null, i), zl(t);
  }
  function yp(t, i, r) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r);
    for (var d = !1, p = t.return; p !== null;) p.childLanes |= r, l = p.alternate, l !== null && (l.childLanes |= r), p.tag === 22 && (t = p.stateNode, t === null || t._visibility & 1 || (d = !0)), t = p, p = p.return;
    return t.tag === 3 ? (p = t.stateNode, d && i !== null && (d = 31 - Ve(r), t = p.hiddenUpdates, l = t[d], l === null ? t[d] = [i] : l.push(i), i.lane = r | 536870912), p) : null;
  }
  function zl(t) {
    if (50 < Ho) throw Ho = 0, od = null, Error(a(185));
    for (var i = t.return; i !== null;) t = i, i = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var as = {};
  function nb(t, i, r, l) {
    this.tag = t, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function di(t, i, r, l) {
    return new nb(t, i, r, l);
  }
  function Ju(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ia(t, i) {
    var r = t.alternate;
    return r === null ? (r = di(t.tag, i, t.key, t.mode), r.elementType = t.elementType, r.type = t.type, r.stateNode = t.stateNode, r.alternate = t, t.alternate = r) : (r.pendingProps = i, r.type = t.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t.flags & 65011712, r.childLanes = t.childLanes, r.lanes = t.lanes, r.child = t.child, r.memoizedProps = t.memoizedProps, r.memoizedState = t.memoizedState, r.updateQueue = t.updateQueue, i = t.dependencies, r.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }, r.sibling = t.sibling, r.index = t.index, r.ref = t.ref, r.refCleanup = t.refCleanup, r;
  }
  function bp(t, i) {
    t.flags &= 65011714;
    var r = t.alternate;
    return r === null ? (t.childLanes = 0, t.lanes = i, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = r.childLanes, t.lanes = r.lanes, t.child = r.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = r.memoizedProps, t.memoizedState = r.memoizedState, t.updateQueue = r.updateQueue, t.type = r.type, i = r.dependencies, t.dependencies = i === null ? null : {
      lanes: i.lanes,
      firstContext: i.firstContext
    }), t;
  }
  function Fl(t, i, r, l, d, p) {
    var b = 0;
    if (l = t, typeof t == "function") Ju(t) && (b = 1);else if (typeof t == "string") b = o1(t, r, Ee.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;else e: switch (t) {
      case w:
        return t = di(31, r, i, d), t.elementType = w, t.lanes = p, t;
      case E:
        return Mr(r.children, d, p, i);
      case S:
        b = 8, d |= 24;
        break;
      case _:
        return t = di(12, r, i, d | 2), t.elementType = _, t.lanes = p, t;
      case F:
        return t = di(13, r, i, d), t.elementType = F, t.lanes = p, t;
      case P:
        return t = di(19, r, i, d), t.elementType = P, t.lanes = p, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case D:
            b = 10;
            break e;
          case L:
            b = 9;
            break e;
          case O:
            b = 11;
            break e;
          case B:
            b = 14;
            break e;
          case q:
            b = 16, l = null;
            break e;
        }
        b = 29, r = Error(a(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return i = di(b, r, i, d), i.elementType = t, i.type = l, i.lanes = p, i;
  }
  function Mr(t, i, r, l) {
    return t = di(7, t, l, i), t.lanes = r, t;
  }
  function $u(t, i, r) {
    return t = di(6, t, null, i), t.lanes = r, t;
  }
  function Sp(t) {
    var i = di(18, null, null, 0);
    return i.stateNode = t, i;
  }
  function ef(t, i, r) {
    return i = di(4, t.children !== null ? t.children : [], t.key, i), i.lanes = r, i.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, i;
  }
  var Mp = new WeakMap();
  function Mi(t, i) {
    if (typeof t == "object" && t !== null) {
      var r = Mp.get(t);
      return r !== void 0 ? r : (i = {
        value: t,
        source: i,
        stack: it(i)
      }, Mp.set(t, i), i);
    }
    return {
      value: t,
      source: i,
      stack: it(i)
    };
  }
  var rs = [],
    ss = 0,
    Bl = null,
    _o = 0,
    Ei = [],
    Ti = 0,
    Ha = null,
    Wi = 1,
    Yi = "";
  function aa(t, i) {
    rs[ss++] = _o, rs[ss++] = Bl, Bl = t, _o = i;
  }
  function Ep(t, i, r) {
    Ei[Ti++] = Wi, Ei[Ti++] = Yi, Ei[Ti++] = Ha, Ha = t;
    var l = Wi;
    t = Yi;
    var d = 32 - Ve(l) - 1;
    l &= ~(1 << d), r += 1;
    var p = 32 - Ve(i) + d;
    if (30 < p) {
      var b = d - d % 5;
      p = (l & (1 << b) - 1).toString(32), l >>= b, d -= b, Wi = 1 << 32 - Ve(i) + d | r << d | l, Yi = p + t;
    } else Wi = 1 << p | r << d | l, Yi = t;
  }
  function tf(t) {
    t.return !== null && (aa(t, 1), Ep(t, 1, 0));
  }
  function nf(t) {
    for (; t === Bl;) Bl = rs[--ss], rs[ss] = null, _o = rs[--ss], rs[ss] = null;
    for (; t === Ha;) Ha = Ei[--Ti], Ei[Ti] = null, Yi = Ei[--Ti], Ei[Ti] = null, Wi = Ei[--Ti], Ei[Ti] = null;
  }
  function Tp(t, i) {
    Ei[Ti++] = Wi, Ei[Ti++] = Yi, Ei[Ti++] = Ha, Wi = i.id, Yi = i.overflow, Ha = t;
  }
  var Xn = null,
    pn = null,
    jt = !1,
    Ga = null,
    Ai = !1,
    af = Error(a(519));
  function Va(t) {
    var i = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw yo(Mi(i, t)), af;
  }
  function Ap(t) {
    var i = t.stateNode,
      r = t.type,
      l = t.memoizedProps;
    switch (i[lt] = t, i[xt] = l, r) {
      case "dialog":
        zt("cancel", i), zt("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        zt("load", i);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Vo.length; r++) zt(Vo[r], i);
        break;
      case "source":
        zt("error", i);
        break;
      case "img":
      case "image":
      case "link":
        zt("error", i), zt("load", i);
        break;
      case "details":
        zt("toggle", i);
        break;
      case "input":
        zt("invalid", i), hn(i, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
        break;
      case "select":
        zt("invalid", i);
        break;
      case "textarea":
        zt("invalid", i), jn(i, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || i.textContent === "" + r || l.suppressHydrationWarning === !0 || kg(i.textContent, r) ? (l.popover != null && (zt("beforetoggle", i), zt("toggle", i)), l.onScroll != null && zt("scroll", i), l.onScrollEnd != null && zt("scrollend", i), l.onClick != null && (i.onclick = ta), i = !0) : i = !1, i || Va(t, !0);
  }
  function wp(t) {
    for (Xn = t.return; Xn;) switch (Xn.tag) {
      case 5:
      case 31:
      case 13:
        Ai = !1;
        return;
      case 27:
      case 3:
        Ai = !0;
        return;
      default:
        Xn = Xn.return;
    }
  }
  function os(t) {
    if (t !== Xn) return !1;
    if (!jt) return wp(t), jt = !0, !1;
    var i = t.tag,
      r;
    if ((r = i !== 3 && i !== 27) && ((r = i === 5) && (r = t.type, r = !(r !== "form" && r !== "button") || Sd(t.type, t.memoizedProps)), r = !r), r && pn && Va(t), wp(t), i === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(317));
      pn = Jg(t);
    } else if (i === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(317));
      pn = Jg(t);
    } else i === 27 ? (i = pn, nr(t.type) ? (t = wd, wd = null, pn = t) : pn = i) : pn = Xn ? Ri(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Er() {
    pn = Xn = null, jt = !1;
  }
  function rf() {
    var t = Ga;
    return t !== null && (oi === null ? oi = t : oi.push.apply(oi, t), Ga = null), t;
  }
  function yo(t) {
    Ga === null ? Ga = [t] : Ga.push(t);
  }
  var sf = z(null),
    Tr = null,
    ra = null;
  function ka(t, i, r) {
    he(sf, i._currentValue), i._currentValue = r;
  }
  function sa(t) {
    t._currentValue = sf.current, ee(sf);
  }
  function of(t, i, r) {
    for (; t !== null;) {
      var l = t.alternate;
      if ((t.childLanes & i) !== i ? (t.childLanes |= i, l !== null && (l.childLanes |= i)) : l !== null && (l.childLanes & i) !== i && (l.childLanes |= i), t === r) break;
      t = t.return;
    }
  }
  function lf(t, i, r, l) {
    var d = t.child;
    for (d !== null && (d.return = t); d !== null;) {
      var p = d.dependencies;
      if (p !== null) {
        var b = d.child;
        p = p.firstContext;
        e: for (; p !== null;) {
          var R = p;
          p = d;
          for (var X = 0; X < i.length; X++) if (R.context === i[X]) {
            p.lanes |= r, R = p.alternate, R !== null && (R.lanes |= r), of(p.return, r, t), l || (b = null);
            break e;
          }
          p = R.next;
        }
      } else if (d.tag === 18) {
        if (b = d.return, b === null) throw Error(a(341));
        b.lanes |= r, p = b.alternate, p !== null && (p.lanes |= r), of(b, r, t), b = null;
      } else b = d.child;
      if (b !== null) b.return = d;else for (b = d; b !== null;) {
        if (b === t) {
          b = null;
          break;
        }
        if (d = b.sibling, d !== null) {
          d.return = b.return, b = d;
          break;
        }
        b = b.return;
      }
      d = b;
    }
  }
  function ls(t, i, r, l) {
    t = null;
    for (var d = i, p = !1; d !== null;) {
      if (!p) {
        if ((d.flags & 524288) !== 0) p = !0;else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var b = d.alternate;
        if (b === null) throw Error(a(387));
        if (b = b.memoizedProps, b !== null) {
          var R = d.type;
          fi(d.pendingProps.value, b.value) || (t !== null ? t.push(R) : t = [R]);
        }
      } else if (d === me.current) {
        if (b = d.alternate, b === null) throw Error(a(387));
        b.memoizedState.memoizedState !== d.memoizedState.memoizedState && (t !== null ? t.push(Yo) : t = [Yo]);
      }
      d = d.return;
    }
    t !== null && lf(i, t, r, l), i.flags |= 262144;
  }
  function Hl(t) {
    for (t = t.firstContext; t !== null;) {
      if (!fi(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ar(t) {
    Tr = t, ra = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Wn(t) {
    return Rp(Tr, t);
  }
  function Gl(t, i) {
    return Tr === null && Ar(t), Rp(t, i);
  }
  function Rp(t, i) {
    var r = i._currentValue;
    if (i = {
      context: i,
      memoizedValue: r,
      next: null
    }, ra === null) {
      if (t === null) throw Error(a(308));
      ra = i, t.dependencies = {
        lanes: 0,
        firstContext: i
      }, t.flags |= 524288;
    } else ra = ra.next = i;
    return r;
  }
  var ib = typeof AbortController < "u" ? AbortController : function () {
      var t = [],
        i = this.signal = {
          aborted: !1,
          addEventListener: function (r, l) {
            t.push(l);
          }
        };
      this.abort = function () {
        i.aborted = !0, t.forEach(function (r) {
          return r();
        });
      };
    },
    ab = s.unstable_scheduleCallback,
    rb = s.unstable_NormalPriority,
    An = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
  function cf() {
    return {
      controller: new ib(),
      data: new Map(),
      refCount: 0
    };
  }
  function bo(t) {
    t.refCount--, t.refCount === 0 && ab(rb, function () {
      t.controller.abort();
    });
  }
  var So = null,
    uf = 0,
    cs = 0,
    us = null;
  function sb(t, i) {
    if (So === null) {
      var r = So = [];
      uf = 0, cs = hd(), us = {
        status: "pending",
        value: void 0,
        then: function (l) {
          r.push(l);
        }
      };
    }
    return uf++, i.then(Cp, Cp), i;
  }
  function Cp() {
    if (--uf === 0 && So !== null) {
      us !== null && (us.status = "fulfilled");
      var t = So;
      So = null, cs = 0, us = null;
      for (var i = 0; i < t.length; i++) (0, t[i])();
    }
  }
  function ob(t, i) {
    var r = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (d) {
          r.push(d);
        }
      };
    return t.then(function () {
      l.status = "fulfilled", l.value = i;
      for (var d = 0; d < r.length; d++) (0, r[d])(i);
    }, function (d) {
      for (l.status = "rejected", l.reason = d, d = 0; d < r.length; d++) (0, r[d])(void 0);
    }), l;
  }
  var Dp = I.S;
  I.S = function (t, i) {
    hg = T(), typeof i == "object" && i !== null && typeof i.then == "function" && sb(t, i), Dp !== null && Dp(t, i);
  };
  var wr = z(null);
  function ff() {
    var t = wr.current;
    return t !== null ? t : un.pooledCache;
  }
  function Vl(t, i) {
    i === null ? he(wr, wr.current) : he(wr, i.pool);
  }
  function Np() {
    var t = ff();
    return t === null ? null : {
      parent: An._currentValue,
      pool: t
    };
  }
  var fs = Error(a(460)),
    df = Error(a(474)),
    kl = Error(a(542)),
    jl = {
      then: function () {}
    };
  function Lp(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Up(t, i, r) {
    switch (r = t[r], r === void 0 ? t.push(i) : r !== i && (i.then(ta, ta), i = r), i.status) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw t = i.reason, Pp(t), t;
      default:
        if (typeof i.status == "string") i.then(ta, ta);else {
          if (t = un, t !== null && 100 < t.shellSuspendCounter) throw Error(a(482));
          t = i, t.status = "pending", t.then(function (l) {
            if (i.status === "pending") {
              var d = i;
              d.status = "fulfilled", d.value = l;
            }
          }, function (l) {
            if (i.status === "pending") {
              var d = i;
              d.status = "rejected", d.reason = l;
            }
          });
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw t = i.reason, Pp(t), t;
        }
        throw Cr = i, fs;
    }
  }
  function Rr(t) {
    try {
      var i = t._init;
      return i(t._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Cr = r, fs) : r;
    }
  }
  var Cr = null;
  function Op() {
    if (Cr === null) throw Error(a(459));
    var t = Cr;
    return Cr = null, t;
  }
  function Pp(t) {
    if (t === fs || t === kl) throw Error(a(483));
  }
  var ds = null,
    Mo = 0;
  function Xl(t) {
    var i = Mo;
    return Mo += 1, ds === null && (ds = []), Up(ds, t, i);
  }
  function Eo(t, i) {
    i = i.props.ref, t.ref = i !== void 0 ? i : null;
  }
  function Wl(t, i) {
    throw i.$$typeof === v ? Error(a(525)) : (t = Object.prototype.toString.call(i), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t)));
  }
  function Ip(t) {
    function i(re, Q) {
      if (t) {
        var fe = re.deletions;
        fe === null ? (re.deletions = [Q], re.flags |= 16) : fe.push(Q);
      }
    }
    function r(re, Q) {
      if (!t) return null;
      for (; Q !== null;) i(re, Q), Q = Q.sibling;
      return null;
    }
    function l(re) {
      for (var Q = new Map(); re !== null;) re.key !== null ? Q.set(re.key, re) : Q.set(re.index, re), re = re.sibling;
      return Q;
    }
    function d(re, Q) {
      return re = ia(re, Q), re.index = 0, re.sibling = null, re;
    }
    function p(re, Q, fe) {
      return re.index = fe, t ? (fe = re.alternate, fe !== null ? (fe = fe.index, fe < Q ? (re.flags |= 67108866, Q) : fe) : (re.flags |= 67108866, Q)) : (re.flags |= 1048576, Q);
    }
    function b(re) {
      return t && re.alternate === null && (re.flags |= 67108866), re;
    }
    function R(re, Q, fe, Ue) {
      return Q === null || Q.tag !== 6 ? (Q = $u(fe, re.mode, Ue), Q.return = re, Q) : (Q = d(Q, fe), Q.return = re, Q);
    }
    function X(re, Q, fe, Ue) {
      var pt = fe.type;
      return pt === E ? Ce(re, Q, fe.props.children, Ue, fe.key) : Q !== null && (Q.elementType === pt || typeof pt == "object" && pt !== null && pt.$$typeof === q && Rr(pt) === Q.type) ? (Q = d(Q, fe.props), Eo(Q, fe), Q.return = re, Q) : (Q = Fl(fe.type, fe.key, fe.props, null, re.mode, Ue), Eo(Q, fe), Q.return = re, Q);
    }
    function de(re, Q, fe, Ue) {
      return Q === null || Q.tag !== 4 || Q.stateNode.containerInfo !== fe.containerInfo || Q.stateNode.implementation !== fe.implementation ? (Q = ef(fe, re.mode, Ue), Q.return = re, Q) : (Q = d(Q, fe.children || []), Q.return = re, Q);
    }
    function Ce(re, Q, fe, Ue, pt) {
      return Q === null || Q.tag !== 7 ? (Q = Mr(fe, re.mode, Ue, pt), Q.return = re, Q) : (Q = d(Q, fe), Q.return = re, Q);
    }
    function Oe(re, Q, fe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return Q = $u("" + Q, re.mode, fe), Q.return = re, Q;
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case y:
            return fe = Fl(Q.type, Q.key, Q.props, null, re.mode, fe), Eo(fe, Q), fe.return = re, fe;
          case M:
            return Q = ef(Q, re.mode, fe), Q.return = re, Q;
          case q:
            return Q = Rr(Q), Oe(re, Q, fe);
        }
        if (ie(Q) || k(Q)) return Q = Mr(Q, re.mode, fe, null), Q.return = re, Q;
        if (typeof Q.then == "function") return Oe(re, Xl(Q), fe);
        if (Q.$$typeof === D) return Oe(re, Gl(re, Q), fe);
        Wl(re, Q);
      }
      return null;
    }
    function ge(re, Q, fe, Ue) {
      var pt = Q !== null ? Q.key : null;
      if (typeof fe == "string" && fe !== "" || typeof fe == "number" || typeof fe == "bigint") return pt !== null ? null : R(re, Q, "" + fe, Ue);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case y:
            return fe.key === pt ? X(re, Q, fe, Ue) : null;
          case M:
            return fe.key === pt ? de(re, Q, fe, Ue) : null;
          case q:
            return fe = Rr(fe), ge(re, Q, fe, Ue);
        }
        if (ie(fe) || k(fe)) return pt !== null ? null : Ce(re, Q, fe, Ue, null);
        if (typeof fe.then == "function") return ge(re, Q, Xl(fe), Ue);
        if (fe.$$typeof === D) return ge(re, Q, Gl(re, fe), Ue);
        Wl(re, fe);
      }
      return null;
    }
    function Se(re, Q, fe, Ue, pt) {
      if (typeof Ue == "string" && Ue !== "" || typeof Ue == "number" || typeof Ue == "bigint") return re = re.get(fe) || null, R(Q, re, "" + Ue, pt);
      if (typeof Ue == "object" && Ue !== null) {
        switch (Ue.$$typeof) {
          case y:
            return re = re.get(Ue.key === null ? fe : Ue.key) || null, X(Q, re, Ue, pt);
          case M:
            return re = re.get(Ue.key === null ? fe : Ue.key) || null, de(Q, re, Ue, pt);
          case q:
            return Ue = Rr(Ue), Se(re, Q, fe, Ue, pt);
        }
        if (ie(Ue) || k(Ue)) return re = re.get(fe) || null, Ce(Q, re, Ue, pt, null);
        if (typeof Ue.then == "function") return Se(re, Q, fe, Xl(Ue), pt);
        if (Ue.$$typeof === D) return Se(re, Q, fe, Gl(Q, Ue), pt);
        Wl(Q, Ue);
      }
      return null;
    }
    function ot(re, Q, fe, Ue) {
      for (var pt = null, Kt = null, dt = Q, Nt = Q = 0, Bt = null; dt !== null && Nt < fe.length; Nt++) {
        dt.index > Nt ? (Bt = dt, dt = null) : Bt = dt.sibling;
        var Qt = ge(re, dt, fe[Nt], Ue);
        if (Qt === null) {
          dt === null && (dt = Bt);
          break;
        }
        t && dt && Qt.alternate === null && i(re, dt), Q = p(Qt, Q, Nt), Kt === null ? pt = Qt : Kt.sibling = Qt, Kt = Qt, dt = Bt;
      }
      if (Nt === fe.length) return r(re, dt), jt && aa(re, Nt), pt;
      if (dt === null) {
        for (; Nt < fe.length; Nt++) dt = Oe(re, fe[Nt], Ue), dt !== null && (Q = p(dt, Q, Nt), Kt === null ? pt = dt : Kt.sibling = dt, Kt = dt);
        return jt && aa(re, Nt), pt;
      }
      for (dt = l(dt); Nt < fe.length; Nt++) Bt = Se(dt, re, Nt, fe[Nt], Ue), Bt !== null && (t && Bt.alternate !== null && dt.delete(Bt.key === null ? Nt : Bt.key), Q = p(Bt, Q, Nt), Kt === null ? pt = Bt : Kt.sibling = Bt, Kt = Bt);
      return t && dt.forEach(function (or) {
        return i(re, or);
      }), jt && aa(re, Nt), pt;
    }
    function St(re, Q, fe, Ue) {
      if (fe == null) throw Error(a(151));
      for (var pt = null, Kt = null, dt = Q, Nt = Q = 0, Bt = null, Qt = fe.next(); dt !== null && !Qt.done; Nt++, Qt = fe.next()) {
        dt.index > Nt ? (Bt = dt, dt = null) : Bt = dt.sibling;
        var or = ge(re, dt, Qt.value, Ue);
        if (or === null) {
          dt === null && (dt = Bt);
          break;
        }
        t && dt && or.alternate === null && i(re, dt), Q = p(or, Q, Nt), Kt === null ? pt = or : Kt.sibling = or, Kt = or, dt = Bt;
      }
      if (Qt.done) return r(re, dt), jt && aa(re, Nt), pt;
      if (dt === null) {
        for (; !Qt.done; Nt++, Qt = fe.next()) Qt = Oe(re, Qt.value, Ue), Qt !== null && (Q = p(Qt, Q, Nt), Kt === null ? pt = Qt : Kt.sibling = Qt, Kt = Qt);
        return jt && aa(re, Nt), pt;
      }
      for (dt = l(dt); !Qt.done; Nt++, Qt = fe.next()) Qt = Se(dt, re, Nt, Qt.value, Ue), Qt !== null && (t && Qt.alternate !== null && dt.delete(Qt.key === null ? Nt : Qt.key), Q = p(Qt, Q, Nt), Kt === null ? pt = Qt : Kt.sibling = Qt, Kt = Qt);
      return t && dt.forEach(function (v1) {
        return i(re, v1);
      }), jt && aa(re, Nt), pt;
    }
    function on(re, Q, fe, Ue) {
      if (typeof fe == "object" && fe !== null && fe.type === E && fe.key === null && (fe = fe.props.children), typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case y:
            e: {
              for (var pt = fe.key; Q !== null;) {
                if (Q.key === pt) {
                  if (pt = fe.type, pt === E) {
                    if (Q.tag === 7) {
                      r(re, Q.sibling), Ue = d(Q, fe.props.children), Ue.return = re, re = Ue;
                      break e;
                    }
                  } else if (Q.elementType === pt || typeof pt == "object" && pt !== null && pt.$$typeof === q && Rr(pt) === Q.type) {
                    r(re, Q.sibling), Ue = d(Q, fe.props), Eo(Ue, fe), Ue.return = re, re = Ue;
                    break e;
                  }
                  r(re, Q);
                  break;
                } else i(re, Q);
                Q = Q.sibling;
              }
              fe.type === E ? (Ue = Mr(fe.props.children, re.mode, Ue, fe.key), Ue.return = re, re = Ue) : (Ue = Fl(fe.type, fe.key, fe.props, null, re.mode, Ue), Eo(Ue, fe), Ue.return = re, re = Ue);
            }
            return b(re);
          case M:
            e: {
              for (pt = fe.key; Q !== null;) {
                if (Q.key === pt) {
                  if (Q.tag === 4 && Q.stateNode.containerInfo === fe.containerInfo && Q.stateNode.implementation === fe.implementation) {
                    r(re, Q.sibling), Ue = d(Q, fe.children || []), Ue.return = re, re = Ue;
                    break e;
                  } else {
                    r(re, Q);
                    break;
                  }
                } else i(re, Q);
                Q = Q.sibling;
              }
              Ue = ef(fe, re.mode, Ue), Ue.return = re, re = Ue;
            }
            return b(re);
          case q:
            return fe = Rr(fe), on(re, Q, fe, Ue);
        }
        if (ie(fe)) return ot(re, Q, fe, Ue);
        if (k(fe)) {
          if (pt = k(fe), typeof pt != "function") throw Error(a(150));
          return fe = pt.call(fe), St(re, Q, fe, Ue);
        }
        if (typeof fe.then == "function") return on(re, Q, Xl(fe), Ue);
        if (fe.$$typeof === D) return on(re, Q, Gl(re, fe), Ue);
        Wl(re, fe);
      }
      return typeof fe == "string" && fe !== "" || typeof fe == "number" || typeof fe == "bigint" ? (fe = "" + fe, Q !== null && Q.tag === 6 ? (r(re, Q.sibling), Ue = d(Q, fe), Ue.return = re, re = Ue) : (r(re, Q), Ue = $u(fe, re.mode, Ue), Ue.return = re, re = Ue), b(re)) : r(re, Q);
    }
    return function (re, Q, fe, Ue) {
      try {
        Mo = 0;
        var pt = on(re, Q, fe, Ue);
        return ds = null, pt;
      } catch (dt) {
        if (dt === fs || dt === kl) throw dt;
        var Kt = di(29, dt, null, re.mode);
        return Kt.lanes = Ue, Kt.return = re, Kt;
      } finally {}
    };
  }
  var Dr = Ip(!0),
    zp = Ip(!1),
    ja = !1;
  function hf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function pf(t, i) {
    t = t.updateQueue, i.updateQueue === t && (i.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Xa(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Wa(t, i, r) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($t & 2) !== 0) {
      var d = l.pending;
      return d === null ? i.next = i : (i.next = d.next, d.next = i), l.pending = i, i = zl(t), yp(t, null, r), i;
    }
    return Il(t, l, i, r), zl(t);
  }
  function To(t, i, r) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (r & 4194048) !== 0)) {
      var l = i.lanes;
      l &= t.pendingLanes, r |= l, i.lanes = r, Un(t, r);
    }
  }
  function mf(t, i) {
    var r = t.updateQueue,
      l = t.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var d = null,
        p = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var b = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          p === null ? d = p = b : p = p.next = b, r = r.next;
        } while (r !== null);
        p === null ? d = p = i : p = p.next = i;
      } else d = p = i;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = r;
      return;
    }
    t = r.lastBaseUpdate, t === null ? r.firstBaseUpdate = i : t.next = i, r.lastBaseUpdate = i;
  }
  var gf = !1;
  function Ao() {
    if (gf) {
      var t = us;
      if (t !== null) throw t;
    }
  }
  function wo(t, i, r, l) {
    gf = !1;
    var d = t.updateQueue;
    ja = !1;
    var p = d.firstBaseUpdate,
      b = d.lastBaseUpdate,
      R = d.shared.pending;
    if (R !== null) {
      d.shared.pending = null;
      var X = R,
        de = X.next;
      X.next = null, b === null ? p = de : b.next = de, b = X;
      var Ce = t.alternate;
      Ce !== null && (Ce = Ce.updateQueue, R = Ce.lastBaseUpdate, R !== b && (R === null ? Ce.firstBaseUpdate = de : R.next = de, Ce.lastBaseUpdate = X));
    }
    if (p !== null) {
      var Oe = d.baseState;
      b = 0, Ce = de = X = null, R = p;
      do {
        var ge = R.lane & -536870913,
          Se = ge !== R.lane;
        if (Se ? (Ft & ge) === ge : (l & ge) === ge) {
          ge !== 0 && ge === cs && (gf = !0), Ce !== null && (Ce = Ce.next = {
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: null,
            next: null
          });
          e: {
            var ot = t,
              St = R;
            ge = i;
            var on = r;
            switch (St.tag) {
              case 1:
                if (ot = St.payload, typeof ot == "function") {
                  Oe = ot.call(on, Oe, ge);
                  break e;
                }
                Oe = ot;
                break e;
              case 3:
                ot.flags = ot.flags & -65537 | 128;
              case 0:
                if (ot = St.payload, ge = typeof ot == "function" ? ot.call(on, Oe, ge) : ot, ge == null) break e;
                Oe = g({}, Oe, ge);
                break e;
              case 2:
                ja = !0;
            }
          }
          ge = R.callback, ge !== null && (t.flags |= 64, Se && (t.flags |= 8192), Se = d.callbacks, Se === null ? d.callbacks = [ge] : Se.push(ge));
        } else Se = {
          lane: ge,
          tag: R.tag,
          payload: R.payload,
          callback: R.callback,
          next: null
        }, Ce === null ? (de = Ce = Se, X = Oe) : Ce = Ce.next = Se, b |= ge;
        if (R = R.next, R === null) {
          if (R = d.shared.pending, R === null) break;
          Se = R, R = Se.next, Se.next = null, d.lastBaseUpdate = Se, d.shared.pending = null;
        }
      } while (!0);
      Ce === null && (X = Oe), d.baseState = X, d.firstBaseUpdate = de, d.lastBaseUpdate = Ce, p === null && (d.shared.lanes = 0), Qa |= b, t.lanes = b, t.memoizedState = Oe;
    }
  }
  function Fp(t, i) {
    if (typeof t != "function") throw Error(a(191, t));
    t.call(i);
  }
  function Bp(t, i) {
    var r = t.callbacks;
    if (r !== null) for (t.callbacks = null, t = 0; t < r.length; t++) Fp(r[t], i);
  }
  var hs = z(null),
    Yl = z(0);
  function Hp(t, i) {
    t = ma, he(Yl, t), he(hs, i), ma = t | i.baseLanes;
  }
  function xf() {
    he(Yl, ma), he(hs, hs.current);
  }
  function vf() {
    ma = Yl.current, ee(hs), ee(Yl);
  }
  var hi = z(null),
    wi = null;
  function Ya(t) {
    var i = t.alternate;
    he(Sn, Sn.current & 1), he(hi, t), wi === null && (i === null || hs.current !== null || i.memoizedState !== null) && (wi = t);
  }
  function _f(t) {
    he(Sn, Sn.current), he(hi, t), wi === null && (wi = t);
  }
  function Gp(t) {
    t.tag === 22 ? (he(Sn, Sn.current), he(hi, t), wi === null && (wi = t)) : qa();
  }
  function qa() {
    he(Sn, Sn.current), he(hi, hi.current);
  }
  function pi(t) {
    ee(hi), wi === t && (wi = null), ee(Sn);
  }
  var Sn = z(0);
  function ql(t) {
    for (var i = t; i !== null;) {
      if (i.tag === 13) {
        var r = i.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Td(r) || Ad(r))) return i;
      } else if (i.tag === 19 && (i.memoizedProps.revealOrder === "forwards" || i.memoizedProps.revealOrder === "backwards" || i.memoizedProps.revealOrder === "unstable_legacy-backwards" || i.memoizedProps.revealOrder === "together")) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null;) {
        if (i.return === null || i.return === t) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var oa = 0,
    Ct = null,
    rn = null,
    wn = null,
    Zl = !1,
    ps = !1,
    Nr = !1,
    Kl = 0,
    Ro = 0,
    ms = null,
    lb = 0;
  function vn() {
    throw Error(a(321));
  }
  function yf(t, i) {
    if (i === null) return !1;
    for (var r = 0; r < i.length && r < t.length; r++) if (!fi(t[r], i[r])) return !1;
    return !0;
  }
  function bf(t, i, r, l, d, p) {
    return oa = p, Ct = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, I.H = t === null || t.memoizedState === null ? Em : If, Nr = !1, p = r(l, d), Nr = !1, ps && (p = kp(i, r, l, d)), Vp(t), p;
  }
  function Vp(t) {
    I.H = No;
    var i = rn !== null && rn.next !== null;
    if (oa = 0, wn = rn = Ct = null, Zl = !1, Ro = 0, ms = null, i) throw Error(a(300));
    t === null || Rn || (t = t.dependencies, t !== null && Hl(t) && (Rn = !0));
  }
  function kp(t, i, r, l) {
    Ct = t;
    var d = 0;
    do {
      if (ps && (ms = null), Ro = 0, ps = !1, 25 <= d) throw Error(a(301));
      if (d += 1, wn = rn = null, t.updateQueue != null) {
        var p = t.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      I.H = Tm, p = i(r, l);
    } while (ps);
    return p;
  }
  function cb() {
    var t = I.H,
      i = t.useState()[0];
    return i = typeof i.then == "function" ? Co(i) : i, t = t.useState()[0], (rn !== null ? rn.memoizedState : null) !== t && (Ct.flags |= 1024), i;
  }
  function Sf() {
    var t = Kl !== 0;
    return Kl = 0, t;
  }
  function Mf(t, i, r) {
    i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~r;
  }
  function Ef(t) {
    if (Zl) {
      for (t = t.memoizedState; t !== null;) {
        var i = t.queue;
        i !== null && (i.pending = null), t = t.next;
      }
      Zl = !1;
    }
    oa = 0, wn = rn = Ct = null, ps = !1, Ro = Kl = 0, ms = null;
  }
  function $n() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wn === null ? Ct.memoizedState = wn = t : wn = wn.next = t, wn;
  }
  function Mn() {
    if (rn === null) {
      var t = Ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = rn.next;
    var i = wn === null ? Ct.memoizedState : wn.next;
    if (i !== null) wn = i, rn = t;else {
      if (t === null) throw Ct.alternate === null ? Error(a(467)) : Error(a(310));
      rn = t, t = {
        memoizedState: rn.memoizedState,
        baseState: rn.baseState,
        baseQueue: rn.baseQueue,
        queue: rn.queue,
        next: null
      }, wn === null ? Ct.memoizedState = wn = t : wn = wn.next = t;
    }
    return wn;
  }
  function Ql() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Co(t) {
    var i = Ro;
    return Ro += 1, ms === null && (ms = []), t = Up(ms, t, i), i = Ct, (wn === null ? i.memoizedState : wn.next) === null && (i = i.alternate, I.H = i === null || i.memoizedState === null ? Em : If), t;
  }
  function Jl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Co(t);
      if (t.$$typeof === D) return Wn(t);
    }
    throw Error(a(438, String(t)));
  }
  function Tf(t) {
    var i = null,
      r = Ct.updateQueue;
    if (r !== null && (i = r.memoCache), i == null) {
      var l = Ct.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (i = {
        data: l.data.map(function (d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (i == null && (i = {
      data: [],
      index: 0
    }), r === null && (r = Ql(), Ct.updateQueue = r), r.memoCache = i, r = i.data[i.index], r === void 0) for (r = i.data[i.index] = Array(t), l = 0; l < t; l++) r[l] = A;
    return i.index++, r;
  }
  function la(t, i) {
    return typeof i == "function" ? i(t) : i;
  }
  function $l(t) {
    var i = Mn();
    return Af(i, rn, t);
  }
  function Af(t, i, r) {
    var l = t.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = r;
    var d = t.baseQueue,
      p = l.pending;
    if (p !== null) {
      if (d !== null) {
        var b = d.next;
        d.next = p.next, p.next = b;
      }
      i.baseQueue = d = p, l.pending = null;
    }
    if (p = t.baseState, d === null) t.memoizedState = p;else {
      i = d.next;
      var R = b = null,
        X = null,
        de = i,
        Ce = !1;
      do {
        var Oe = de.lane & -536870913;
        if (Oe !== de.lane ? (Ft & Oe) === Oe : (oa & Oe) === Oe) {
          var ge = de.revertLane;
          if (ge === 0) X !== null && (X = X.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: de.action,
            hasEagerState: de.hasEagerState,
            eagerState: de.eagerState,
            next: null
          }), Oe === cs && (Ce = !0);else if ((oa & ge) === ge) {
            de = de.next, ge === cs && (Ce = !0);
            continue;
          } else Oe = {
            lane: 0,
            revertLane: de.revertLane,
            gesture: null,
            action: de.action,
            hasEagerState: de.hasEagerState,
            eagerState: de.eagerState,
            next: null
          }, X === null ? (R = X = Oe, b = p) : X = X.next = Oe, Ct.lanes |= ge, Qa |= ge;
          Oe = de.action, Nr && r(p, Oe), p = de.hasEagerState ? de.eagerState : r(p, Oe);
        } else ge = {
          lane: Oe,
          revertLane: de.revertLane,
          gesture: de.gesture,
          action: de.action,
          hasEagerState: de.hasEagerState,
          eagerState: de.eagerState,
          next: null
        }, X === null ? (R = X = ge, b = p) : X = X.next = ge, Ct.lanes |= Oe, Qa |= Oe;
        de = de.next;
      } while (de !== null && de !== i);
      if (X === null ? b = p : X.next = R, !fi(p, t.memoizedState) && (Rn = !0, Ce && (r = us, r !== null))) throw r;
      t.memoizedState = p, t.baseState = b, t.baseQueue = X, l.lastRenderedState = p;
    }
    return d === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function wf(t) {
    var i = Mn(),
      r = i.queue;
    if (r === null) throw Error(a(311));
    r.lastRenderedReducer = t;
    var l = r.dispatch,
      d = r.pending,
      p = i.memoizedState;
    if (d !== null) {
      r.pending = null;
      var b = d = d.next;
      do p = t(p, b.action), b = b.next; while (b !== d);
      fi(p, i.memoizedState) || (Rn = !0), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), r.lastRenderedState = p;
    }
    return [p, l];
  }
  function jp(t, i, r) {
    var l = Ct,
      d = Mn(),
      p = jt;
    if (p) {
      if (r === void 0) throw Error(a(407));
      r = r();
    } else r = i();
    var b = !fi((rn || d).memoizedState, r);
    if (b && (d.memoizedState = r, Rn = !0), d = d.queue, Df(Yp.bind(null, l, d, t), [t]), d.getSnapshot !== i || b || wn !== null && wn.memoizedState.tag & 1) {
      if (l.flags |= 2048, gs(9, {
        destroy: void 0
      }, Wp.bind(null, l, d, r, i), null), un === null) throw Error(a(349));
      p || (oa & 127) !== 0 || Xp(l, i, r);
    }
    return r;
  }
  function Xp(t, i, r) {
    t.flags |= 16384, t = {
      getSnapshot: i,
      value: r
    }, i = Ct.updateQueue, i === null ? (i = Ql(), Ct.updateQueue = i, i.stores = [t]) : (r = i.stores, r === null ? i.stores = [t] : r.push(t));
  }
  function Wp(t, i, r, l) {
    i.value = r, i.getSnapshot = l, qp(i) && Zp(t);
  }
  function Yp(t, i, r) {
    return r(function () {
      qp(i) && Zp(t);
    });
  }
  function qp(t) {
    var i = t.getSnapshot;
    t = t.value;
    try {
      var r = i();
      return !fi(t, r);
    } catch {
      return !0;
    }
  }
  function Zp(t) {
    var i = Sr(t, 2);
    i !== null && li(i, t, 2);
  }
  function Rf(t) {
    var i = $n();
    if (typeof t == "function") {
      var r = t;
      if (t = r(), Nr) {
        Le(!0);
        try {
          r();
        } finally {
          Le(!1);
        }
      }
    }
    return i.memoizedState = i.baseState = t, i.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: la,
      lastRenderedState: t
    }, i;
  }
  function Kp(t, i, r, l) {
    return t.baseState = r, Af(t, rn, typeof l == "function" ? l : la);
  }
  function ub(t, i, r, l, d) {
    if (nc(t)) throw Error(a(485));
    if (t = i.action, t !== null) {
      var p = {
        payload: d,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          p.listeners.push(b);
        }
      };
      I.T !== null ? r(!0) : p.isTransition = !1, l(p), r = i.pending, r === null ? (p.next = i.pending = p, Qp(i, p)) : (p.next = r.next, i.pending = r.next = p);
    }
  }
  function Qp(t, i) {
    var r = i.action,
      l = i.payload,
      d = t.state;
    if (i.isTransition) {
      var p = I.T,
        b = {};
      I.T = b;
      try {
        var R = r(d, l),
          X = I.S;
        X !== null && X(b, R), Jp(t, i, R);
      } catch (de) {
        Cf(t, i, de);
      } finally {
        p !== null && b.types !== null && (p.types = b.types), I.T = p;
      }
    } else try {
      p = r(d, l), Jp(t, i, p);
    } catch (de) {
      Cf(t, i, de);
    }
  }
  function Jp(t, i, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function (l) {
      $p(t, i, l);
    }, function (l) {
      return Cf(t, i, l);
    }) : $p(t, i, r);
  }
  function $p(t, i, r) {
    i.status = "fulfilled", i.value = r, em(i), t.state = r, i = t.pending, i !== null && (r = i.next, r === i ? t.pending = null : (r = r.next, i.next = r, Qp(t, r)));
  }
  function Cf(t, i, r) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do i.status = "rejected", i.reason = r, em(i), i = i.next; while (i !== l);
    }
    t.action = null;
  }
  function em(t) {
    t = t.listeners;
    for (var i = 0; i < t.length; i++) (0, t[i])();
  }
  function tm(t, i) {
    return i;
  }
  function nm(t, i) {
    if (jt) {
      var r = un.formState;
      if (r !== null) {
        e: {
          var l = Ct;
          if (jt) {
            if (pn) {
              t: {
                for (var d = pn, p = Ai; d.nodeType !== 8;) {
                  if (!p) {
                    d = null;
                    break t;
                  }
                  if (d = Ri(d.nextSibling), d === null) {
                    d = null;
                    break t;
                  }
                }
                p = d.data, d = p === "F!" || p === "F" ? d : null;
              }
              if (d) {
                pn = Ri(d.nextSibling), l = d.data === "F!";
                break e;
              }
            }
            Va(l);
          }
          l = !1;
        }
        l && (i = r[0]);
      }
    }
    return r = $n(), r.memoizedState = r.baseState = i, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tm,
      lastRenderedState: i
    }, r.queue = l, r = bm.bind(null, Ct, l), l.dispatch = r, l = Rf(!1), p = Pf.bind(null, Ct, !1, l.queue), l = $n(), d = {
      state: i,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = d, r = ub.bind(null, Ct, d, p, r), d.dispatch = r, l.memoizedState = t, [i, r, !1];
  }
  function im(t) {
    var i = Mn();
    return am(i, rn, t);
  }
  function am(t, i, r) {
    if (i = Af(t, i, tm)[0], t = $l(la)[0], typeof i == "object" && i !== null && typeof i.then == "function") try {
      var l = Co(i);
    } catch (b) {
      throw b === fs ? kl : b;
    } else l = i;
    i = Mn();
    var d = i.queue,
      p = d.dispatch;
    return r !== i.memoizedState && (Ct.flags |= 2048, gs(9, {
      destroy: void 0
    }, fb.bind(null, d, r), null)), [l, p, t];
  }
  function fb(t, i) {
    t.action = i;
  }
  function rm(t) {
    var i = Mn(),
      r = rn;
    if (r !== null) return am(i, r, t);
    Mn(), i = i.memoizedState, r = Mn();
    var l = r.queue.dispatch;
    return r.memoizedState = t, [i, l, !1];
  }
  function gs(t, i, r, l) {
    return t = {
      tag: t,
      create: r,
      deps: l,
      inst: i,
      next: null
    }, i = Ct.updateQueue, i === null && (i = Ql(), Ct.updateQueue = i), r = i.lastEffect, r === null ? i.lastEffect = t.next = t : (l = r.next, r.next = t, t.next = l, i.lastEffect = t), t;
  }
  function sm() {
    return Mn().memoizedState;
  }
  function ec(t, i, r, l) {
    var d = $n();
    Ct.flags |= t, d.memoizedState = gs(1 | i, {
      destroy: void 0
    }, r, l === void 0 ? null : l);
  }
  function tc(t, i, r, l) {
    var d = Mn();
    l = l === void 0 ? null : l;
    var p = d.memoizedState.inst;
    rn !== null && l !== null && yf(l, rn.memoizedState.deps) ? d.memoizedState = gs(i, p, r, l) : (Ct.flags |= t, d.memoizedState = gs(1 | i, p, r, l));
  }
  function om(t, i) {
    ec(8390656, 8, t, i);
  }
  function Df(t, i) {
    tc(2048, 8, t, i);
  }
  function db(t) {
    Ct.flags |= 4;
    var i = Ct.updateQueue;
    if (i === null) i = Ql(), Ct.updateQueue = i, i.events = [t];else {
      var r = i.events;
      r === null ? i.events = [t] : r.push(t);
    }
  }
  function lm(t) {
    var i = Mn().memoizedState;
    return db({
      ref: i,
      nextImpl: t
    }), function () {
      if (($t & 2) !== 0) throw Error(a(440));
      return i.impl.apply(void 0, arguments);
    };
  }
  function cm(t, i) {
    return tc(4, 2, t, i);
  }
  function um(t, i) {
    return tc(4, 4, t, i);
  }
  function fm(t, i) {
    if (typeof i == "function") {
      t = t();
      var r = i(t);
      return function () {
        typeof r == "function" ? r() : i(null);
      };
    }
    if (i != null) return t = t(), i.current = t, function () {
      i.current = null;
    };
  }
  function dm(t, i, r) {
    r = r != null ? r.concat([t]) : null, tc(4, 4, fm.bind(null, i, t), r);
  }
  function Nf() {}
  function hm(t, i) {
    var r = Mn();
    i = i === void 0 ? null : i;
    var l = r.memoizedState;
    return i !== null && yf(i, l[1]) ? l[0] : (r.memoizedState = [t, i], t);
  }
  function pm(t, i) {
    var r = Mn();
    i = i === void 0 ? null : i;
    var l = r.memoizedState;
    if (i !== null && yf(i, l[1])) return l[0];
    if (l = t(), Nr) {
      Le(!0);
      try {
        t();
      } finally {
        Le(!1);
      }
    }
    return r.memoizedState = [l, i], l;
  }
  function Lf(t, i, r) {
    return r === void 0 || (oa & 1073741824) !== 0 && (Ft & 261930) === 0 ? t.memoizedState = i : (t.memoizedState = r, t = mg(), Ct.lanes |= t, Qa |= t, r);
  }
  function mm(t, i, r, l) {
    return fi(r, i) ? r : hs.current !== null ? (t = Lf(t, r, l), fi(t, i) || (Rn = !0), t) : (oa & 42) === 0 || (oa & 1073741824) !== 0 && (Ft & 261930) === 0 ? (Rn = !0, t.memoizedState = r) : (t = mg(), Ct.lanes |= t, Qa |= t, i);
  }
  function gm(t, i, r, l, d) {
    var p = Y.p;
    Y.p = p !== 0 && 8 > p ? p : 8;
    var b = I.T,
      R = {};
    I.T = R, Pf(t, !1, i, r);
    try {
      var X = d(),
        de = I.S;
      if (de !== null && de(R, X), X !== null && typeof X == "object" && typeof X.then == "function") {
        var Ce = ob(X, l);
        Do(t, i, Ce, xi(t));
      } else Do(t, i, l, xi(t));
    } catch (Oe) {
      Do(t, i, {
        then: function () {},
        status: "rejected",
        reason: Oe
      }, xi());
    } finally {
      Y.p = p, b !== null && R.types !== null && (b.types = R.types), I.T = b;
    }
  }
  function hb() {}
  function Uf(t, i, r, l) {
    if (t.tag !== 5) throw Error(a(476));
    var d = xm(t).queue;
    gm(t, d, i, Z, r === null ? hb : function () {
      return vm(t), r(l);
    });
  }
  function xm(t) {
    var i = t.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: Z
      },
      next: null
    };
    var r = {};
    return i.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: r
      },
      next: null
    }, t.memoizedState = i, t = t.alternate, t !== null && (t.memoizedState = i), i;
  }
  function vm(t) {
    var i = xm(t);
    i.next === null && (i = t.alternate.memoizedState), Do(t, i.next.queue, {}, xi());
  }
  function Of() {
    return Wn(Yo);
  }
  function _m() {
    return Mn().memoizedState;
  }
  function ym() {
    return Mn().memoizedState;
  }
  function pb(t) {
    for (var i = t.return; i !== null;) {
      switch (i.tag) {
        case 24:
        case 3:
          var r = xi();
          t = Xa(r);
          var l = Wa(i, t, r);
          l !== null && (li(l, i, r), To(l, i, r)), i = {
            cache: cf()
          }, t.payload = i;
          return;
      }
      i = i.return;
    }
  }
  function mb(t, i, r) {
    var l = xi();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nc(t) ? Sm(i, r) : (r = Qu(t, i, r, l), r !== null && (li(r, t, l), Mm(r, i, l)));
  }
  function bm(t, i, r) {
    var l = xi();
    Do(t, i, r, l);
  }
  function Do(t, i, r, l) {
    var d = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nc(t)) Sm(i, d);else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = i.lastRenderedReducer, p !== null)) try {
        var b = i.lastRenderedState,
          R = p(b, r);
        if (d.hasEagerState = !0, d.eagerState = R, fi(R, b)) return Il(t, i, d, 0), un === null && Pl(), !1;
      } catch {} finally {}
      if (r = Qu(t, i, d, l), r !== null) return li(r, t, l), Mm(r, i, l), !0;
    }
    return !1;
  }
  function Pf(t, i, r, l) {
    if (l = {
      lane: 2,
      revertLane: hd(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nc(t)) {
      if (i) throw Error(a(479));
    } else i = Qu(t, r, l, 2), i !== null && li(i, t, 2);
  }
  function nc(t) {
    var i = t.alternate;
    return t === Ct || i !== null && i === Ct;
  }
  function Sm(t, i) {
    ps = Zl = !0;
    var r = t.pending;
    r === null ? i.next = i : (i.next = r.next, r.next = i), t.pending = i;
  }
  function Mm(t, i, r) {
    if ((r & 4194048) !== 0) {
      var l = i.lanes;
      l &= t.pendingLanes, r |= l, i.lanes = r, Un(t, r);
    }
  }
  var No = {
    readContext: Wn,
    use: Jl,
    useCallback: vn,
    useContext: vn,
    useEffect: vn,
    useImperativeHandle: vn,
    useLayoutEffect: vn,
    useInsertionEffect: vn,
    useMemo: vn,
    useReducer: vn,
    useRef: vn,
    useState: vn,
    useDebugValue: vn,
    useDeferredValue: vn,
    useTransition: vn,
    useSyncExternalStore: vn,
    useId: vn,
    useHostTransitionStatus: vn,
    useFormState: vn,
    useActionState: vn,
    useOptimistic: vn,
    useMemoCache: vn,
    useCacheRefresh: vn
  };
  No.useEffectEvent = vn;
  var Em = {
      readContext: Wn,
      use: Jl,
      useCallback: function (t, i) {
        return $n().memoizedState = [t, i === void 0 ? null : i], t;
      },
      useContext: Wn,
      useEffect: om,
      useImperativeHandle: function (t, i, r) {
        r = r != null ? r.concat([t]) : null, ec(4194308, 4, fm.bind(null, i, t), r);
      },
      useLayoutEffect: function (t, i) {
        return ec(4194308, 4, t, i);
      },
      useInsertionEffect: function (t, i) {
        ec(4, 2, t, i);
      },
      useMemo: function (t, i) {
        var r = $n();
        i = i === void 0 ? null : i;
        var l = t();
        if (Nr) {
          Le(!0);
          try {
            t();
          } finally {
            Le(!1);
          }
        }
        return r.memoizedState = [l, i], l;
      },
      useReducer: function (t, i, r) {
        var l = $n();
        if (r !== void 0) {
          var d = r(i);
          if (Nr) {
            Le(!0);
            try {
              r(i);
            } finally {
              Le(!1);
            }
          }
        } else d = i;
        return l.memoizedState = l.baseState = d, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: d
        }, l.queue = t, t = t.dispatch = mb.bind(null, Ct, t), [l.memoizedState, t];
      },
      useRef: function (t) {
        var i = $n();
        return t = {
          current: t
        }, i.memoizedState = t;
      },
      useState: function (t) {
        t = Rf(t);
        var i = t.queue,
          r = bm.bind(null, Ct, i);
        return i.dispatch = r, [t.memoizedState, r];
      },
      useDebugValue: Nf,
      useDeferredValue: function (t, i) {
        var r = $n();
        return Lf(r, t, i);
      },
      useTransition: function () {
        var t = Rf(!1);
        return t = gm.bind(null, Ct, t.queue, !0, !1), $n().memoizedState = t, [!1, t];
      },
      useSyncExternalStore: function (t, i, r) {
        var l = Ct,
          d = $n();
        if (jt) {
          if (r === void 0) throw Error(a(407));
          r = r();
        } else {
          if (r = i(), un === null) throw Error(a(349));
          (Ft & 127) !== 0 || Xp(l, i, r);
        }
        d.memoizedState = r;
        var p = {
          value: r,
          getSnapshot: i
        };
        return d.queue = p, om(Yp.bind(null, l, p, t), [t]), l.flags |= 2048, gs(9, {
          destroy: void 0
        }, Wp.bind(null, l, p, r, i), null), r;
      },
      useId: function () {
        var t = $n(),
          i = un.identifierPrefix;
        if (jt) {
          var r = Yi,
            l = Wi;
          r = (l & ~(1 << 32 - Ve(l) - 1)).toString(32) + r, i = "_" + i + "R_" + r, r = Kl++, 0 < r && (i += "H" + r.toString(32)), i += "_";
        } else r = lb++, i = "_" + i + "r_" + r.toString(32) + "_";
        return t.memoizedState = i;
      },
      useHostTransitionStatus: Of,
      useFormState: nm,
      useActionState: nm,
      useOptimistic: function (t) {
        var i = $n();
        i.memoizedState = i.baseState = t;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return i.queue = r, i = Pf.bind(null, Ct, !0, r), r.dispatch = i, [t, i];
      },
      useMemoCache: Tf,
      useCacheRefresh: function () {
        return $n().memoizedState = pb.bind(null, Ct);
      },
      useEffectEvent: function (t) {
        var i = $n(),
          r = {
            impl: t
          };
        return i.memoizedState = r, function () {
          if (($t & 2) !== 0) throw Error(a(440));
          return r.impl.apply(void 0, arguments);
        };
      }
    },
    If = {
      readContext: Wn,
      use: Jl,
      useCallback: hm,
      useContext: Wn,
      useEffect: Df,
      useImperativeHandle: dm,
      useInsertionEffect: cm,
      useLayoutEffect: um,
      useMemo: pm,
      useReducer: $l,
      useRef: sm,
      useState: function () {
        return $l(la);
      },
      useDebugValue: Nf,
      useDeferredValue: function (t, i) {
        var r = Mn();
        return mm(r, rn.memoizedState, t, i);
      },
      useTransition: function () {
        var t = $l(la)[0],
          i = Mn().memoizedState;
        return [typeof t == "boolean" ? t : Co(t), i];
      },
      useSyncExternalStore: jp,
      useId: _m,
      useHostTransitionStatus: Of,
      useFormState: im,
      useActionState: im,
      useOptimistic: function (t, i) {
        var r = Mn();
        return Kp(r, rn, t, i);
      },
      useMemoCache: Tf,
      useCacheRefresh: ym
    };
  If.useEffectEvent = lm;
  var Tm = {
    readContext: Wn,
    use: Jl,
    useCallback: hm,
    useContext: Wn,
    useEffect: Df,
    useImperativeHandle: dm,
    useInsertionEffect: cm,
    useLayoutEffect: um,
    useMemo: pm,
    useReducer: wf,
    useRef: sm,
    useState: function () {
      return wf(la);
    },
    useDebugValue: Nf,
    useDeferredValue: function (t, i) {
      var r = Mn();
      return rn === null ? Lf(r, t, i) : mm(r, rn.memoizedState, t, i);
    },
    useTransition: function () {
      var t = wf(la)[0],
        i = Mn().memoizedState;
      return [typeof t == "boolean" ? t : Co(t), i];
    },
    useSyncExternalStore: jp,
    useId: _m,
    useHostTransitionStatus: Of,
    useFormState: rm,
    useActionState: rm,
    useOptimistic: function (t, i) {
      var r = Mn();
      return rn !== null ? Kp(r, rn, t, i) : (r.baseState = t, [t, r.queue.dispatch]);
    },
    useMemoCache: Tf,
    useCacheRefresh: ym
  };
  Tm.useEffectEvent = lm;
  function zf(t, i, r, l) {
    i = t.memoizedState, r = r(l, i), r = r == null ? i : g({}, i, r), t.memoizedState = r, t.lanes === 0 && (t.updateQueue.baseState = r);
  }
  var Ff = {
    enqueueSetState: function (t, i, r) {
      t = t._reactInternals;
      var l = xi(),
        d = Xa(l);
      d.payload = i, r != null && (d.callback = r), i = Wa(t, d, l), i !== null && (li(i, t, l), To(i, t, l));
    },
    enqueueReplaceState: function (t, i, r) {
      t = t._reactInternals;
      var l = xi(),
        d = Xa(l);
      d.tag = 1, d.payload = i, r != null && (d.callback = r), i = Wa(t, d, l), i !== null && (li(i, t, l), To(i, t, l));
    },
    enqueueForceUpdate: function (t, i) {
      t = t._reactInternals;
      var r = xi(),
        l = Xa(r);
      l.tag = 2, i != null && (l.callback = i), i = Wa(t, l, r), i !== null && (li(i, t, r), To(i, t, r));
    }
  };
  function Am(t, i, r, l, d, p, b) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, p, b) : i.prototype && i.prototype.isPureReactComponent ? !xo(r, l) || !xo(d, p) : !0;
  }
  function wm(t, i, r, l) {
    t = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(r, l), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(r, l), i.state !== t && Ff.enqueueReplaceState(i, i.state, null);
  }
  function Lr(t, i) {
    var r = i;
    if ("ref" in i) {
      r = {};
      for (var l in i) l !== "ref" && (r[l] = i[l]);
    }
    if (t = t.defaultProps) {
      r === i && (r = g({}, r));
      for (var d in t) r[d] === void 0 && (r[d] = t[d]);
    }
    return r;
  }
  function Rm(t) {
    Ol(t);
  }
  function Cm(t) {
    console.error(t);
  }
  function Dm(t) {
    Ol(t);
  }
  function ic(t, i) {
    try {
      var r = t.onUncaughtError;
      r(i.value, {
        componentStack: i.stack
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Nm(t, i, r) {
    try {
      var l = t.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null
      });
    } catch (d) {
      setTimeout(function () {
        throw d;
      });
    }
  }
  function Bf(t, i, r) {
    return r = Xa(r), r.tag = 3, r.payload = {
      element: null
    }, r.callback = function () {
      ic(t, i);
    }, r;
  }
  function Lm(t) {
    return t = Xa(t), t.tag = 3, t;
  }
  function Um(t, i, r, l) {
    var d = r.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var p = l.value;
      t.payload = function () {
        return d(p);
      }, t.callback = function () {
        Nm(i, r, l);
      };
    }
    var b = r.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (t.callback = function () {
      Nm(i, r, l), typeof d != "function" && (Ja === null ? Ja = new Set([this]) : Ja.add(this));
      var R = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: R !== null ? R : ""
      });
    });
  }
  function gb(t, i, r, l, d) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (i = r.alternate, i !== null && ls(i, r, d, !0), r = hi.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return wi === null ? mc() : r.alternate === null && _n === 0 && (_n = 3), r.flags &= -257, r.flags |= 65536, r.lanes = d, l === jl ? r.flags |= 16384 : (i = r.updateQueue, i === null ? r.updateQueue = new Set([l]) : i.add(l), ud(t, l, d)), !1;
          case 22:
            return r.flags |= 65536, l === jl ? r.flags |= 16384 : (i = r.updateQueue, i === null ? (i = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([l])
            }, r.updateQueue = i) : (r = i.retryQueue, r === null ? i.retryQueue = new Set([l]) : r.add(l)), ud(t, l, d)), !1;
        }
        throw Error(a(435, r.tag));
      }
      return ud(t, l, d), mc(), !1;
    }
    if (jt) return i = hi.current, i !== null ? ((i.flags & 65536) === 0 && (i.flags |= 256), i.flags |= 65536, i.lanes = d, l !== af && (t = Error(a(422), {
      cause: l
    }), yo(Mi(t, r)))) : (l !== af && (i = Error(a(423), {
      cause: l
    }), yo(Mi(i, r))), t = t.current.alternate, t.flags |= 65536, d &= -d, t.lanes |= d, l = Mi(l, r), d = Bf(t.stateNode, l, d), mf(t, d), _n !== 4 && (_n = 2)), !1;
    var p = Error(a(520), {
      cause: l
    });
    if (p = Mi(p, r), Bo === null ? Bo = [p] : Bo.push(p), _n !== 4 && (_n = 2), i === null) return !0;
    l = Mi(l, r), r = i;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, t = d & -d, r.lanes |= t, t = Bf(r.stateNode, l, t), mf(r, t), !1;
        case 1:
          if (i = r.type, p = r.stateNode, (r.flags & 128) === 0 && (typeof i.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ja === null || !Ja.has(p)))) return r.flags |= 65536, d &= -d, r.lanes |= d, d = Lm(d), Um(d, t, r, l), mf(r, d), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Hf = Error(a(461)),
    Rn = !1;
  function Yn(t, i, r, l) {
    i.child = t === null ? zp(i, null, r, l) : Dr(i, t.child, r, l);
  }
  function Om(t, i, r, l, d) {
    r = r.render;
    var p = i.ref;
    if ("ref" in l) {
      var b = {};
      for (var R in l) R !== "ref" && (b[R] = l[R]);
    } else b = l;
    return Ar(i), l = bf(t, i, r, b, p, d), R = Sf(), t !== null && !Rn ? (Mf(t, i, d), ca(t, i, d)) : (jt && R && tf(i), i.flags |= 1, Yn(t, i, l, d), i.child);
  }
  function Pm(t, i, r, l, d) {
    if (t === null) {
      var p = r.type;
      return typeof p == "function" && !Ju(p) && p.defaultProps === void 0 && r.compare === null ? (i.tag = 15, i.type = p, Im(t, i, p, l, d)) : (t = Fl(r.type, null, l, i, i.mode, d), t.ref = i.ref, t.return = i, i.child = t);
    }
    if (p = t.child, !qf(t, d)) {
      var b = p.memoizedProps;
      if (r = r.compare, r = r !== null ? r : xo, r(b, l) && t.ref === i.ref) return ca(t, i, d);
    }
    return i.flags |= 1, t = ia(p, l), t.ref = i.ref, t.return = i, i.child = t;
  }
  function Im(t, i, r, l, d) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (xo(p, l) && t.ref === i.ref) if (Rn = !1, i.pendingProps = l = p, qf(t, d)) (t.flags & 131072) !== 0 && (Rn = !0);else return i.lanes = t.lanes, ca(t, i, d);
    }
    return Gf(t, i, r, l, d);
  }
  function zm(t, i, r, l) {
    var d = l.children,
      p = t !== null ? t.memoizedState : null;
    if (t === null && i.stateNode === null && (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (p = p !== null ? p.baseLanes | r : r, t !== null) {
          for (l = i.child = t.child, d = 0; l !== null;) d = d | l.lanes | l.childLanes, l = l.sibling;
          l = d & ~p;
        } else l = 0, i.child = null;
        return Fm(t, i, p, r, l);
      }
      if ((r & 536870912) !== 0) i.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Vl(i, p !== null ? p.cachePool : null), p !== null ? Hp(i, p) : xf(), Gp(i);else return l = i.lanes = 536870912, Fm(t, i, p !== null ? p.baseLanes | r : r, r, l);
    } else p !== null ? (Vl(i, p.cachePool), Hp(i, p), qa(), i.memoizedState = null) : (t !== null && Vl(i, null), xf(), qa());
    return Yn(t, i, d, r), i.child;
  }
  function Lo(t, i) {
    return t !== null && t.tag === 22 || i.stateNode !== null || (i.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.sibling;
  }
  function Fm(t, i, r, l, d) {
    var p = ff();
    return p = p === null ? null : {
      parent: An._currentValue,
      pool: p
    }, i.memoizedState = {
      baseLanes: r,
      cachePool: p
    }, t !== null && Vl(i, null), xf(), Gp(i), t !== null && ls(t, i, l, !0), i.childLanes = d, null;
  }
  function ac(t, i) {
    return i = sc({
      mode: i.mode,
      children: i.children
    }, t.mode), i.ref = t.ref, t.child = i, i.return = t, i;
  }
  function Bm(t, i, r) {
    return Dr(i, t.child, null, r), t = ac(i, i.pendingProps), t.flags |= 2, pi(i), i.memoizedState = null, t;
  }
  function xb(t, i, r) {
    var l = i.pendingProps,
      d = (i.flags & 128) !== 0;
    if (i.flags &= -129, t === null) {
      if (jt) {
        if (l.mode === "hidden") return t = ac(i, l), i.lanes = 536870912, Lo(null, t);
        if (_f(i), (t = pn) ? (t = Qg(t, Ai), t = t !== null && t.data === "&" ? t : null, t !== null && (i.memoizedState = {
          dehydrated: t,
          treeContext: Ha !== null ? {
            id: Wi,
            overflow: Yi
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Sp(t), r.return = i, i.child = r, Xn = i, pn = null)) : t = null, t === null) throw Va(i);
        return i.lanes = 536870912, null;
      }
      return ac(i, l);
    }
    var p = t.memoizedState;
    if (p !== null) {
      var b = p.dehydrated;
      if (_f(i), d) {
        if (i.flags & 256) i.flags &= -257, i = Bm(t, i, r);else if (i.memoizedState !== null) i.child = t.child, i.flags |= 128, i = null;else throw Error(a(558));
      } else if (Rn || ls(t, i, r, !1), d = (r & t.childLanes) !== 0, Rn || d) {
        if (l = un, l !== null && (b = bn(l, r), b !== 0 && b !== p.retryLane)) throw p.retryLane = b, Sr(t, b), li(l, t, b), Hf;
        mc(), i = Bm(t, i, r);
      } else t = p.treeContext, pn = Ri(b.nextSibling), Xn = i, jt = !0, Ga = null, Ai = !1, t !== null && Tp(i, t), i = ac(i, l), i.flags |= 4096;
      return i;
    }
    return t = ia(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = i.ref, i.child = t, t.return = i, t;
  }
  function rc(t, i) {
    var r = i.ref;
    if (r === null) t !== null && t.ref !== null && (i.flags |= 4194816);else {
      if (typeof r != "function" && typeof r != "object") throw Error(a(284));
      (t === null || t.ref !== r) && (i.flags |= 4194816);
    }
  }
  function Gf(t, i, r, l, d) {
    return Ar(i), r = bf(t, i, r, l, void 0, d), l = Sf(), t !== null && !Rn ? (Mf(t, i, d), ca(t, i, d)) : (jt && l && tf(i), i.flags |= 1, Yn(t, i, r, d), i.child);
  }
  function Hm(t, i, r, l, d, p) {
    return Ar(i), i.updateQueue = null, r = kp(i, l, r, d), Vp(t), l = Sf(), t !== null && !Rn ? (Mf(t, i, p), ca(t, i, p)) : (jt && l && tf(i), i.flags |= 1, Yn(t, i, r, p), i.child);
  }
  function Gm(t, i, r, l, d) {
    if (Ar(i), i.stateNode === null) {
      var p = as,
        b = r.contextType;
      typeof b == "object" && b !== null && (p = Wn(b)), p = new r(l, p), i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Ff, i.stateNode = p, p._reactInternals = i, p = i.stateNode, p.props = l, p.state = i.memoizedState, p.refs = {}, hf(i), b = r.contextType, p.context = typeof b == "object" && b !== null ? Wn(b) : as, p.state = i.memoizedState, b = r.getDerivedStateFromProps, typeof b == "function" && (zf(i, r, b, l), p.state = i.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (b = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), b !== p.state && Ff.enqueueReplaceState(p, p.state, null), wo(i, l, p, d), Ao(), p.state = i.memoizedState), typeof p.componentDidMount == "function" && (i.flags |= 4194308), l = !0;
    } else if (t === null) {
      p = i.stateNode;
      var R = i.memoizedProps,
        X = Lr(r, R);
      p.props = X;
      var de = p.context,
        Ce = r.contextType;
      b = as, typeof Ce == "object" && Ce !== null && (b = Wn(Ce));
      var Oe = r.getDerivedStateFromProps;
      Ce = typeof Oe == "function" || typeof p.getSnapshotBeforeUpdate == "function", R = i.pendingProps !== R, Ce || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (R || de !== b) && wm(i, p, l, b), ja = !1;
      var ge = i.memoizedState;
      p.state = ge, wo(i, l, p, d), Ao(), de = i.memoizedState, R || ge !== de || ja ? (typeof Oe == "function" && (zf(i, r, Oe, l), de = i.memoizedState), (X = ja || Am(i, r, X, l, ge, de, b)) ? (Ce || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = l, i.memoizedState = de), p.props = l, p.state = de, p.context = b, l = X) : (typeof p.componentDidMount == "function" && (i.flags |= 4194308), l = !1);
    } else {
      p = i.stateNode, pf(t, i), b = i.memoizedProps, Ce = Lr(r, b), p.props = Ce, Oe = i.pendingProps, ge = p.context, de = r.contextType, X = as, typeof de == "object" && de !== null && (X = Wn(de)), R = r.getDerivedStateFromProps, (de = typeof R == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (b !== Oe || ge !== X) && wm(i, p, l, X), ja = !1, ge = i.memoizedState, p.state = ge, wo(i, l, p, d), Ao();
      var Se = i.memoizedState;
      b !== Oe || ge !== Se || ja || t !== null && t.dependencies !== null && Hl(t.dependencies) ? (typeof R == "function" && (zf(i, r, R, l), Se = i.memoizedState), (Ce = ja || Am(i, r, Ce, l, ge, Se, X) || t !== null && t.dependencies !== null && Hl(t.dependencies)) ? (de || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, Se, X), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, Se, X)), typeof p.componentDidUpdate == "function" && (i.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || b === t.memoizedProps && ge === t.memoizedState || (i.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === t.memoizedProps && ge === t.memoizedState || (i.flags |= 1024), i.memoizedProps = l, i.memoizedState = Se), p.props = l, p.state = Se, p.context = X, l = Ce) : (typeof p.componentDidUpdate != "function" || b === t.memoizedProps && ge === t.memoizedState || (i.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === t.memoizedProps && ge === t.memoizedState || (i.flags |= 1024), l = !1);
    }
    return p = l, rc(t, i), l = (i.flags & 128) !== 0, p || l ? (p = i.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : p.render(), i.flags |= 1, t !== null && l ? (i.child = Dr(i, t.child, null, d), i.child = Dr(i, null, r, d)) : Yn(t, i, r, d), i.memoizedState = p.state, t = i.child) : t = ca(t, i, d), t;
  }
  function Vm(t, i, r, l) {
    return Er(), i.flags |= 256, Yn(t, i, r, l), i.child;
  }
  var Vf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function kf(t) {
    return {
      baseLanes: t,
      cachePool: Np()
    };
  }
  function jf(t, i, r) {
    return t = t !== null ? t.childLanes & ~r : 0, i && (t |= gi), t;
  }
  function km(t, i, r) {
    var l = i.pendingProps,
      d = !1,
      p = (i.flags & 128) !== 0,
      b;
    if ((b = p) || (b = t !== null && t.memoizedState === null ? !1 : (Sn.current & 2) !== 0), b && (d = !0, i.flags &= -129), b = (i.flags & 32) !== 0, i.flags &= -33, t === null) {
      if (jt) {
        if (d ? Ya(i) : qa(), (t = pn) ? (t = Qg(t, Ai), t = t !== null && t.data !== "&" ? t : null, t !== null && (i.memoizedState = {
          dehydrated: t,
          treeContext: Ha !== null ? {
            id: Wi,
            overflow: Yi
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Sp(t), r.return = i, i.child = r, Xn = i, pn = null)) : t = null, t === null) throw Va(i);
        return Ad(t) ? i.lanes = 32 : i.lanes = 536870912, null;
      }
      var R = l.children;
      return l = l.fallback, d ? (qa(), d = i.mode, R = sc({
        mode: "hidden",
        children: R
      }, d), l = Mr(l, d, r, null), R.return = i, l.return = i, R.sibling = l, i.child = R, l = i.child, l.memoizedState = kf(r), l.childLanes = jf(t, b, r), i.memoizedState = Vf, Lo(null, l)) : (Ya(i), Xf(i, R));
    }
    var X = t.memoizedState;
    if (X !== null && (R = X.dehydrated, R !== null)) {
      if (p) i.flags & 256 ? (Ya(i), i.flags &= -257, i = Wf(t, i, r)) : i.memoizedState !== null ? (qa(), i.child = t.child, i.flags |= 128, i = null) : (qa(), R = l.fallback, d = i.mode, l = sc({
        mode: "visible",
        children: l.children
      }, d), R = Mr(R, d, r, null), R.flags |= 2, l.return = i, R.return = i, l.sibling = R, i.child = l, Dr(i, t.child, null, r), l = i.child, l.memoizedState = kf(r), l.childLanes = jf(t, b, r), i.memoizedState = Vf, i = Lo(null, l));else if (Ya(i), Ad(R)) {
        if (b = R.nextSibling && R.nextSibling.dataset, b) var de = b.dgst;
        b = de, l = Error(a(419)), l.stack = "", l.digest = b, yo({
          value: l,
          source: null,
          stack: null
        }), i = Wf(t, i, r);
      } else if (Rn || ls(t, i, r, !1), b = (r & t.childLanes) !== 0, Rn || b) {
        if (b = un, b !== null && (l = bn(b, r), l !== 0 && l !== X.retryLane)) throw X.retryLane = l, Sr(t, l), li(b, t, l), Hf;
        Td(R) || mc(), i = Wf(t, i, r);
      } else Td(R) ? (i.flags |= 192, i.child = t.child, i = null) : (t = X.treeContext, pn = Ri(R.nextSibling), Xn = i, jt = !0, Ga = null, Ai = !1, t !== null && Tp(i, t), i = Xf(i, l.children), i.flags |= 4096);
      return i;
    }
    return d ? (qa(), R = l.fallback, d = i.mode, X = t.child, de = X.sibling, l = ia(X, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = X.subtreeFlags & 65011712, de !== null ? R = ia(de, R) : (R = Mr(R, d, r, null), R.flags |= 2), R.return = i, l.return = i, l.sibling = R, i.child = l, Lo(null, l), l = i.child, R = t.child.memoizedState, R === null ? R = kf(r) : (d = R.cachePool, d !== null ? (X = An._currentValue, d = d.parent !== X ? {
      parent: X,
      pool: X
    } : d) : d = Np(), R = {
      baseLanes: R.baseLanes | r,
      cachePool: d
    }), l.memoizedState = R, l.childLanes = jf(t, b, r), i.memoizedState = Vf, Lo(t.child, l)) : (Ya(i), r = t.child, t = r.sibling, r = ia(r, {
      mode: "visible",
      children: l.children
    }), r.return = i, r.sibling = null, t !== null && (b = i.deletions, b === null ? (i.deletions = [t], i.flags |= 16) : b.push(t)), i.child = r, i.memoizedState = null, r);
  }
  function Xf(t, i) {
    return i = sc({
      mode: "visible",
      children: i
    }, t.mode), i.return = t, t.child = i;
  }
  function sc(t, i) {
    return t = di(22, t, null, i), t.lanes = 0, t;
  }
  function Wf(t, i, r) {
    return Dr(i, t.child, null, r), t = Xf(i, i.pendingProps.children), t.flags |= 2, i.memoizedState = null, t;
  }
  function jm(t, i, r) {
    t.lanes |= i;
    var l = t.alternate;
    l !== null && (l.lanes |= i), of(t.return, i, r);
  }
  function Yf(t, i, r, l, d, p) {
    var b = t.memoizedState;
    b === null ? t.memoizedState = {
      isBackwards: i,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: d,
      treeForkCount: p
    } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = l, b.tail = r, b.tailMode = d, b.treeForkCount = p);
  }
  function Xm(t, i, r) {
    var l = i.pendingProps,
      d = l.revealOrder,
      p = l.tail;
    l = l.children;
    var b = Sn.current,
      R = (b & 2) !== 0;
    if (R ? (b = b & 1 | 2, i.flags |= 128) : b &= 1, he(Sn, b), Yn(t, i, l, r), l = jt ? _o : 0, !R && t !== null && (t.flags & 128) !== 0) e: for (t = i.child; t !== null;) {
      if (t.tag === 13) t.memoizedState !== null && jm(t, r, i);else if (t.tag === 19) jm(t, r, i);else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === i) break e;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === i) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (d) {
      case "forwards":
        for (r = i.child, d = null; r !== null;) t = r.alternate, t !== null && ql(t) === null && (d = r), r = r.sibling;
        r = d, r === null ? (d = i.child, i.child = null) : (d = r.sibling, r.sibling = null), Yf(i, !1, d, r, p, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, d = i.child, i.child = null; d !== null;) {
          if (t = d.alternate, t !== null && ql(t) === null) {
            i.child = d;
            break;
          }
          t = d.sibling, d.sibling = r, r = d, d = t;
        }
        Yf(i, !0, r, null, p, l);
        break;
      case "together":
        Yf(i, !1, null, null, void 0, l);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function ca(t, i, r) {
    if (t !== null && (i.dependencies = t.dependencies), Qa |= i.lanes, (r & i.childLanes) === 0) if (t !== null) {
      if (ls(t, i, r, !1), (r & i.childLanes) === 0) return null;
    } else return null;
    if (t !== null && i.child !== t.child) throw Error(a(153));
    if (i.child !== null) {
      for (t = i.child, r = ia(t, t.pendingProps), i.child = r, r.return = i; t.sibling !== null;) t = t.sibling, r = r.sibling = ia(t, t.pendingProps), r.return = i;
      r.sibling = null;
    }
    return i.child;
  }
  function qf(t, i) {
    return (t.lanes & i) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Hl(t)));
  }
  function vb(t, i, r) {
    switch (i.tag) {
      case 3:
        He(i, i.stateNode.containerInfo), ka(i, An, t.memoizedState.cache), Er();
        break;
      case 27:
      case 5:
        qe(i);
        break;
      case 4:
        He(i, i.stateNode.containerInfo);
        break;
      case 10:
        ka(i, i.type, i.memoizedProps.value);
        break;
      case 31:
        if (i.memoizedState !== null) return i.flags |= 128, _f(i), null;
        break;
      case 13:
        var l = i.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Ya(i), i.flags |= 128, null) : (r & i.child.childLanes) !== 0 ? km(t, i, r) : (Ya(i), t = ca(t, i, r), t !== null ? t.sibling : null);
        Ya(i);
        break;
      case 19:
        var d = (t.flags & 128) !== 0;
        if (l = (r & i.childLanes) !== 0, l || (ls(t, i, r, !1), l = (r & i.childLanes) !== 0), d) {
          if (l) return Xm(t, i, r);
          i.flags |= 128;
        }
        if (d = i.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), he(Sn, Sn.current), l) break;
        return null;
      case 22:
        return i.lanes = 0, zm(t, i, r, i.pendingProps);
      case 24:
        ka(i, An, t.memoizedState.cache);
    }
    return ca(t, i, r);
  }
  function Wm(t, i, r) {
    if (t !== null) {
      if (t.memoizedProps !== i.pendingProps) Rn = !0;else {
        if (!qf(t, r) && (i.flags & 128) === 0) return Rn = !1, vb(t, i, r);
        Rn = (t.flags & 131072) !== 0;
      }
    } else Rn = !1, jt && (i.flags & 1048576) !== 0 && Ep(i, _o, i.index);
    switch (i.lanes = 0, i.tag) {
      case 16:
        e: {
          var l = i.pendingProps;
          if (t = Rr(i.elementType), i.type = t, typeof t == "function") Ju(t) ? (l = Lr(t, l), i.tag = 1, i = Gm(null, i, t, l, r)) : (i.tag = 0, i = Gf(null, i, t, l, r));else {
            if (t != null) {
              var d = t.$$typeof;
              if (d === O) {
                i.tag = 11, i = Om(null, i, t, l, r);
                break e;
              } else if (d === B) {
                i.tag = 14, i = Pm(null, i, t, l, r);
                break e;
              }
            }
            throw i = J(t) || t, Error(a(306, i, ""));
          }
        }
        return i;
      case 0:
        return Gf(t, i, i.type, i.pendingProps, r);
      case 1:
        return l = i.type, d = Lr(l, i.pendingProps), Gm(t, i, l, d, r);
      case 3:
        e: {
          if (He(i, i.stateNode.containerInfo), t === null) throw Error(a(387));
          l = i.pendingProps;
          var p = i.memoizedState;
          d = p.element, pf(t, i), wo(i, l, null, r);
          var b = i.memoizedState;
          if (l = b.cache, ka(i, An, l), l !== p.cache && lf(i, [An], r, !0), Ao(), l = b.element, p.isDehydrated) {
            if (p = {
              element: l,
              isDehydrated: !1,
              cache: b.cache
            }, i.updateQueue.baseState = p, i.memoizedState = p, i.flags & 256) {
              i = Vm(t, i, l, r);
              break e;
            } else if (l !== d) {
              d = Mi(Error(a(424)), i), yo(d), i = Vm(t, i, l, r);
              break e;
            } else {
              switch (t = i.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (pn = Ri(t.firstChild), Xn = i, jt = !0, Ga = null, Ai = !0, r = zp(i, null, l, r), i.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
            }
          } else {
            if (Er(), l === d) {
              i = ca(t, i, r);
              break e;
            }
            Yn(t, i, l, r);
          }
          i = i.child;
        }
        return i;
      case 26:
        return rc(t, i), t === null ? (r = ix(i.type, null, i.pendingProps, null)) ? i.memoizedState = r : jt || (r = i.type, t = i.pendingProps, l = Sc(te.current).createElement(r), l[lt] = i, l[xt] = t, qn(l, r, t), le(l), i.stateNode = l) : i.memoizedState = ix(i.type, t.memoizedProps, i.pendingProps, t.memoizedState), null;
      case 27:
        return qe(i), t === null && jt && (l = i.stateNode = ex(i.type, i.pendingProps, te.current), Xn = i, Ai = !0, d = pn, nr(i.type) ? (wd = d, pn = Ri(l.firstChild)) : pn = d), Yn(t, i, i.pendingProps.children, r), rc(t, i), t === null && (i.flags |= 4194304), i.child;
      case 5:
        return t === null && jt && ((d = l = pn) && (l = qb(l, i.type, i.pendingProps, Ai), l !== null ? (i.stateNode = l, Xn = i, pn = Ri(l.firstChild), Ai = !1, d = !0) : d = !1), d || Va(i)), qe(i), d = i.type, p = i.pendingProps, b = t !== null ? t.memoizedProps : null, l = p.children, Sd(d, p) ? l = null : b !== null && Sd(d, b) && (i.flags |= 32), i.memoizedState !== null && (d = bf(t, i, cb, null, null, r), Yo._currentValue = d), rc(t, i), Yn(t, i, l, r), i.child;
      case 6:
        return t === null && jt && ((t = r = pn) && (r = Zb(r, i.pendingProps, Ai), r !== null ? (i.stateNode = r, Xn = i, pn = null, t = !0) : t = !1), t || Va(i)), null;
      case 13:
        return km(t, i, r);
      case 4:
        return He(i, i.stateNode.containerInfo), l = i.pendingProps, t === null ? i.child = Dr(i, null, l, r) : Yn(t, i, l, r), i.child;
      case 11:
        return Om(t, i, i.type, i.pendingProps, r);
      case 7:
        return Yn(t, i, i.pendingProps, r), i.child;
      case 8:
        return Yn(t, i, i.pendingProps.children, r), i.child;
      case 12:
        return Yn(t, i, i.pendingProps.children, r), i.child;
      case 10:
        return l = i.pendingProps, ka(i, i.type, l.value), Yn(t, i, l.children, r), i.child;
      case 9:
        return d = i.type._context, l = i.pendingProps.children, Ar(i), d = Wn(d), l = l(d), i.flags |= 1, Yn(t, i, l, r), i.child;
      case 14:
        return Pm(t, i, i.type, i.pendingProps, r);
      case 15:
        return Im(t, i, i.type, i.pendingProps, r);
      case 19:
        return Xm(t, i, r);
      case 31:
        return xb(t, i, r);
      case 22:
        return zm(t, i, r, i.pendingProps);
      case 24:
        return Ar(i), l = Wn(An), t === null ? (d = ff(), d === null && (d = un, p = cf(), d.pooledCache = p, p.refCount++, p !== null && (d.pooledCacheLanes |= r), d = p), i.memoizedState = {
          parent: l,
          cache: d
        }, hf(i), ka(i, An, d)) : ((t.lanes & r) !== 0 && (pf(t, i), wo(i, null, null, r), Ao()), d = t.memoizedState, p = i.memoizedState, d.parent !== l ? (d = {
          parent: l,
          cache: l
        }, i.memoizedState = d, i.lanes === 0 && (i.memoizedState = i.updateQueue.baseState = d), ka(i, An, l)) : (l = p.cache, ka(i, An, l), l !== d.cache && lf(i, [An], r, !0))), Yn(t, i, i.pendingProps.children, r), i.child;
      case 29:
        throw i.pendingProps;
    }
    throw Error(a(156, i.tag));
  }
  function ua(t) {
    t.flags |= 4;
  }
  function Zf(t, i, r, l, d) {
    if ((i = (t.mode & 32) !== 0) && (i = !1), i) {
      if (t.flags |= 16777216, (d & 335544128) === d) if (t.stateNode.complete) t.flags |= 8192;else if (_g()) t.flags |= 8192;else throw Cr = jl, df;
    } else t.flags &= -16777217;
  }
  function Ym(t, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0) t.flags &= -16777217;else if (t.flags |= 16777216, !lx(i)) if (_g()) t.flags |= 8192;else throw Cr = jl, df;
  }
  function oc(t, i) {
    i !== null && (t.flags |= 4), t.flags & 16384 && (i = t.tag !== 22 ? ut() : 536870912, t.lanes |= i, ys |= i);
  }
  function Uo(t, i) {
    if (!jt) switch (t.tailMode) {
      case "hidden":
        i = t.tail;
        for (var r = null; i !== null;) i.alternate !== null && (r = i), i = i.sibling;
        r === null ? t.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = t.tail;
        for (var l = null; r !== null;) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? i || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
    }
  }
  function mn(t) {
    var i = t.alternate !== null && t.alternate.child === t.child,
      r = 0,
      l = 0;
    if (i) for (var d = t.child; d !== null;) r |= d.lanes | d.childLanes, l |= d.subtreeFlags & 65011712, l |= d.flags & 65011712, d.return = t, d = d.sibling;else for (d = t.child; d !== null;) r |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= l, t.childLanes = r, i;
  }
  function _b(t, i, r) {
    var l = i.pendingProps;
    switch (nf(i), i.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mn(i), null;
      case 1:
        return mn(i), null;
      case 3:
        return r = i.stateNode, l = null, t !== null && (l = t.memoizedState.cache), i.memoizedState.cache !== l && (i.flags |= 2048), sa(An), Ge(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (os(i) ? ua(i) : t === null || t.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rf())), mn(i), null;
      case 26:
        var d = i.type,
          p = i.memoizedState;
        return t === null ? (ua(i), p !== null ? (mn(i), Ym(i, p)) : (mn(i), Zf(i, d, null, l, r))) : p ? p !== t.memoizedState ? (ua(i), mn(i), Ym(i, p)) : (mn(i), i.flags &= -16777217) : (t = t.memoizedProps, t !== l && ua(i), mn(i), Zf(i, d, t, l, r)), null;
      case 27:
        if (Ke(i), r = te.current, d = i.type, t !== null && i.stateNode != null) t.memoizedProps !== l && ua(i);else {
          if (!l) {
            if (i.stateNode === null) throw Error(a(166));
            return mn(i), null;
          }
          t = Ee.current, os(i) ? Ap(i) : (t = ex(d, l, r), i.stateNode = t, ua(i));
        }
        return mn(i), null;
      case 5:
        if (Ke(i), d = i.type, t !== null && i.stateNode != null) t.memoizedProps !== l && ua(i);else {
          if (!l) {
            if (i.stateNode === null) throw Error(a(166));
            return mn(i), null;
          }
          if (p = Ee.current, os(i)) Ap(i);else {
            var b = Sc(te.current);
            switch (p) {
              case 1:
                p = b.createElementNS("http://www.w3.org/2000/svg", d);
                break;
              case 2:
                p = b.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                break;
              default:
                switch (d) {
                  case "svg":
                    p = b.createElementNS("http://www.w3.org/2000/svg", d);
                    break;
                  case "math":
                    p = b.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                    break;
                  case "script":
                    p = b.createElement("div"), p.innerHTML = "<script><\/script>", p = p.removeChild(p.firstChild);
                    break;
                  case "select":
                    p = typeof l.is == "string" ? b.createElement("select", {
                      is: l.is
                    }) : b.createElement("select"), l.multiple ? p.multiple = !0 : l.size && (p.size = l.size);
                    break;
                  default:
                    p = typeof l.is == "string" ? b.createElement(d, {
                      is: l.is
                    }) : b.createElement(d);
                }
            }
            p[lt] = i, p[xt] = l;
            e: for (b = i.child; b !== null;) {
              if (b.tag === 5 || b.tag === 6) p.appendChild(b.stateNode);else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === i) break e;
              for (; b.sibling === null;) {
                if (b.return === null || b.return === i) break e;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            i.stateNode = p;
            e: switch (qn(p, d, l), d) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && ua(i);
          }
        }
        return mn(i), Zf(i, i.type, t === null ? null : t.memoizedProps, i.pendingProps, r), null;
      case 6:
        if (t && i.stateNode != null) t.memoizedProps !== l && ua(i);else {
          if (typeof l != "string" && i.stateNode === null) throw Error(a(166));
          if (t = te.current, os(i)) {
            if (t = i.stateNode, r = i.memoizedProps, l = null, d = Xn, d !== null) switch (d.tag) {
              case 27:
              case 5:
                l = d.memoizedProps;
            }
            t[lt] = i, t = !!(t.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || kg(t.nodeValue, r)), t || Va(i, !0);
          } else t = Sc(t).createTextNode(l), t[lt] = i, i.stateNode = t;
        }
        return mn(i), null;
      case 31:
        if (r = i.memoizedState, t === null || t.memoizedState !== null) {
          if (l = os(i), r !== null) {
            if (t === null) {
              if (!l) throw Error(a(318));
              if (t = i.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(557));
              t[lt] = i;
            } else Er(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            mn(i), t = !1;
          } else r = rf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), t = !0;
          if (!t) return i.flags & 256 ? (pi(i), i) : (pi(i), null);
          if ((i.flags & 128) !== 0) throw Error(a(558));
        }
        return mn(i), null;
      case 13:
        if (l = i.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (d = os(i), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!d) throw Error(a(318));
              if (d = i.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[lt] = i;
            } else Er(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            mn(i), d = !1;
          } else d = rf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = d), d = !0;
          if (!d) return i.flags & 256 ? (pi(i), i) : (pi(i), null);
        }
        return pi(i), (i.flags & 128) !== 0 ? (i.lanes = r, i) : (r = l !== null, t = t !== null && t.memoizedState !== null, r && (l = i.child, d = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (d = l.alternate.memoizedState.cachePool.pool), p = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (p = l.memoizedState.cachePool.pool), p !== d && (l.flags |= 2048)), r !== t && r && (i.child.flags |= 8192), oc(i, i.updateQueue), mn(i), null);
      case 4:
        return Ge(), t === null && xd(i.stateNode.containerInfo), mn(i), null;
      case 10:
        return sa(i.type), mn(i), null;
      case 19:
        if (ee(Sn), l = i.memoizedState, l === null) return mn(i), null;
        if (d = (i.flags & 128) !== 0, p = l.rendering, p === null) {
          if (d) Uo(l, !1);else {
            if (_n !== 0 || t !== null && (t.flags & 128) !== 0) for (t = i.child; t !== null;) {
              if (p = ql(t), p !== null) {
                for (i.flags |= 128, Uo(l, !1), t = p.updateQueue, i.updateQueue = t, oc(i, t), i.subtreeFlags = 0, t = r, r = i.child; r !== null;) bp(r, t), r = r.sibling;
                return he(Sn, Sn.current & 1 | 2), jt && aa(i, l.treeForkCount), i.child;
              }
              t = t.sibling;
            }
            l.tail !== null && T() > dc && (i.flags |= 128, d = !0, Uo(l, !1), i.lanes = 4194304);
          }
        } else {
          if (!d) if (t = ql(p), t !== null) {
            if (i.flags |= 128, d = !0, t = t.updateQueue, i.updateQueue = t, oc(i, t), Uo(l, !0), l.tail === null && l.tailMode === "hidden" && !p.alternate && !jt) return mn(i), null;
          } else 2 * T() - l.renderingStartTime > dc && r !== 536870912 && (i.flags |= 128, d = !0, Uo(l, !1), i.lanes = 4194304);
          l.isBackwards ? (p.sibling = i.child, i.child = p) : (t = l.last, t !== null ? t.sibling = p : i.child = p, l.last = p);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = T(), t.sibling = null, r = Sn.current, he(Sn, d ? r & 1 | 2 : r & 1), jt && aa(i, l.treeForkCount), t) : (mn(i), null);
      case 22:
      case 23:
        return pi(i), vf(), l = i.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (i.flags |= 8192) : l && (i.flags |= 8192), l ? (r & 536870912) !== 0 && (i.flags & 128) === 0 && (mn(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : mn(i), r = i.updateQueue, r !== null && oc(i, r.retryQueue), r = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), l = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (l = i.memoizedState.cachePool.pool), l !== r && (i.flags |= 2048), t !== null && ee(wr), null;
      case 24:
        return r = null, t !== null && (r = t.memoizedState.cache), i.memoizedState.cache !== r && (i.flags |= 2048), sa(An), mn(i), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, i.tag));
  }
  function yb(t, i) {
    switch (nf(i), i.tag) {
      case 1:
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 3:
        return sa(An), Ge(), t = i.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (i.flags = t & -65537 | 128, i) : null;
      case 26:
      case 27:
      case 5:
        return Ke(i), null;
      case 31:
        if (i.memoizedState !== null) {
          if (pi(i), i.alternate === null) throw Error(a(340));
          Er();
        }
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 13:
        if (pi(i), t = i.memoizedState, t !== null && t.dehydrated !== null) {
          if (i.alternate === null) throw Error(a(340));
          Er();
        }
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 19:
        return ee(Sn), null;
      case 4:
        return Ge(), null;
      case 10:
        return sa(i.type), null;
      case 22:
      case 23:
        return pi(i), vf(), t !== null && ee(wr), t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 24:
        return sa(An), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qm(t, i) {
    switch (nf(i), i.tag) {
      case 3:
        sa(An), Ge();
        break;
      case 26:
      case 27:
      case 5:
        Ke(i);
        break;
      case 4:
        Ge();
        break;
      case 31:
        i.memoizedState !== null && pi(i);
        break;
      case 13:
        pi(i);
        break;
      case 19:
        ee(Sn);
        break;
      case 10:
        sa(i.type);
        break;
      case 22:
      case 23:
        pi(i), vf(), t !== null && ee(wr);
        break;
      case 24:
        sa(An);
    }
  }
  function Oo(t, i) {
    try {
      var r = i.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var d = l.next;
        r = d;
        do {
          if ((r.tag & t) === t) {
            l = void 0;
            var p = r.create,
              b = r.inst;
            l = p(), b.destroy = l;
          }
          r = r.next;
        } while (r !== d);
      }
    } catch (R) {
      nn(i, i.return, R);
    }
  }
  function Za(t, i, r) {
    try {
      var l = i.updateQueue,
        d = l !== null ? l.lastEffect : null;
      if (d !== null) {
        var p = d.next;
        l = p;
        do {
          if ((l.tag & t) === t) {
            var b = l.inst,
              R = b.destroy;
            if (R !== void 0) {
              b.destroy = void 0, d = i;
              var X = r,
                de = R;
              try {
                de();
              } catch (Ce) {
                nn(d, X, Ce);
              }
            }
          }
          l = l.next;
        } while (l !== p);
      }
    } catch (Ce) {
      nn(i, i.return, Ce);
    }
  }
  function Zm(t) {
    var i = t.updateQueue;
    if (i !== null) {
      var r = t.stateNode;
      try {
        Bp(i, r);
      } catch (l) {
        nn(t, t.return, l);
      }
    }
  }
  function Km(t, i, r) {
    r.props = Lr(t.type, t.memoizedProps), r.state = t.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      nn(t, i, l);
    }
  }
  function Po(t, i) {
    try {
      var r = t.ref;
      if (r !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof r == "function" ? t.refCleanup = r(l) : r.current = l;
      }
    } catch (d) {
      nn(t, i, d);
    }
  }
  function qi(t, i) {
    var r = t.ref,
      l = t.refCleanup;
    if (r !== null) if (typeof l == "function") try {
      l();
    } catch (d) {
      nn(t, i, d);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    } else if (typeof r == "function") try {
      r(null);
    } catch (d) {
      nn(t, i, d);
    } else r.current = null;
  }
  function Qm(t) {
    var i = t.type,
      r = t.memoizedProps,
      l = t.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (d) {
      nn(t, t.return, d);
    }
  }
  function Kf(t, i, r) {
    try {
      var l = t.stateNode;
      Vb(l, t.type, r, i), l[xt] = i;
    } catch (d) {
      nn(t, t.return, d);
    }
  }
  function Jm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && nr(t.type) || t.tag === 4;
  }
  function Qf(t) {
    e: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Jm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if (t.tag === 27 && nr(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Jf(t, i, r) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, i ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(t, i) : (i = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, i.appendChild(t), r = r._reactRootContainer, r != null || i.onclick !== null || (i.onclick = ta));else if (l !== 4 && (l === 27 && nr(t.type) && (r = t.stateNode, i = null), t = t.child, t !== null)) for (Jf(t, i, r), t = t.sibling; t !== null;) Jf(t, i, r), t = t.sibling;
  }
  function lc(t, i, r) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, i ? r.insertBefore(t, i) : r.appendChild(t);else if (l !== 4 && (l === 27 && nr(t.type) && (r = t.stateNode), t = t.child, t !== null)) for (lc(t, i, r), t = t.sibling; t !== null;) lc(t, i, r), t = t.sibling;
  }
  function $m(t) {
    var i = t.stateNode,
      r = t.memoizedProps;
    try {
      for (var l = t.type, d = i.attributes; d.length;) i.removeAttributeNode(d[0]);
      qn(i, l, r), i[lt] = t, i[xt] = r;
    } catch (p) {
      nn(t, t.return, p);
    }
  }
  var fa = !1,
    Cn = !1,
    $f = !1,
    eg = typeof WeakSet == "function" ? WeakSet : Set,
    Vn = null;
  function bb(t, i) {
    if (t = t.containerInfo, yd = Cc, t = dp(t), Xu(t)) {
      if ("selectionStart" in t) var r = {
        start: t.selectionStart,
        end: t.selectionEnd
      };else e: {
        r = (r = t.ownerDocument) && r.defaultView || window;
        var l = r.getSelection && r.getSelection();
        if (l && l.rangeCount !== 0) {
          r = l.anchorNode;
          var d = l.anchorOffset,
            p = l.focusNode;
          l = l.focusOffset;
          try {
            r.nodeType, p.nodeType;
          } catch {
            r = null;
            break e;
          }
          var b = 0,
            R = -1,
            X = -1,
            de = 0,
            Ce = 0,
            Oe = t,
            ge = null;
          t: for (;;) {
            for (var Se; Oe !== r || d !== 0 && Oe.nodeType !== 3 || (R = b + d), Oe !== p || l !== 0 && Oe.nodeType !== 3 || (X = b + l), Oe.nodeType === 3 && (b += Oe.nodeValue.length), (Se = Oe.firstChild) !== null;) ge = Oe, Oe = Se;
            for (;;) {
              if (Oe === t) break t;
              if (ge === r && ++de === d && (R = b), ge === p && ++Ce === l && (X = b), (Se = Oe.nextSibling) !== null) break;
              Oe = ge, ge = Oe.parentNode;
            }
            Oe = Se;
          }
          r = R === -1 || X === -1 ? null : {
            start: R,
            end: X
          };
        } else r = null;
      }
      r = r || {
        start: 0,
        end: 0
      };
    } else r = null;
    for (bd = {
      focusedElem: t,
      selectionRange: r
    }, Cc = !1, Vn = i; Vn !== null;) if (i = Vn, t = i.child, (i.subtreeFlags & 1028) !== 0 && t !== null) t.return = i, Vn = t;else for (; Vn !== null;) {
      switch (i = Vn, p = i.alternate, t = i.flags, i.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = i.updateQueue, t = t !== null ? t.events : null, t !== null)) for (r = 0; r < t.length; r++) d = t[r], d.ref.impl = d.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && p !== null) {
            t = void 0, r = i, d = p.memoizedProps, p = p.memoizedState, l = r.stateNode;
            try {
              var ot = Lr(r.type, d);
              t = l.getSnapshotBeforeUpdate(ot, p), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (St) {
              nn(r, r.return, St);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = i.stateNode.containerInfo, r = t.nodeType, r === 9) Ed(t);else if (r === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ed(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(a(163));
      }
      if (t = i.sibling, t !== null) {
        t.return = i.return, Vn = t;
        break;
      }
      Vn = i.return;
    }
  }
  function tg(t, i, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ha(t, r), l & 4 && Oo(5, r);
        break;
      case 1:
        if (ha(t, r), l & 4) if (t = r.stateNode, i === null) try {
          t.componentDidMount();
        } catch (b) {
          nn(r, r.return, b);
        } else {
          var d = Lr(r.type, i.memoizedProps);
          i = i.memoizedState;
          try {
            t.componentDidUpdate(d, i, t.__reactInternalSnapshotBeforeUpdate);
          } catch (b) {
            nn(r, r.return, b);
          }
        }
        l & 64 && Zm(r), l & 512 && Po(r, r.return);
        break;
      case 3:
        if (ha(t, r), l & 64 && (t = r.updateQueue, t !== null)) {
          if (i = null, r.child !== null) switch (r.child.tag) {
            case 27:
            case 5:
              i = r.child.stateNode;
              break;
            case 1:
              i = r.child.stateNode;
          }
          try {
            Bp(t, i);
          } catch (b) {
            nn(r, r.return, b);
          }
        }
        break;
      case 27:
        i === null && l & 4 && $m(r);
      case 26:
      case 5:
        ha(t, r), i === null && l & 4 && Qm(r), l & 512 && Po(r, r.return);
        break;
      case 12:
        ha(t, r);
        break;
      case 31:
        ha(t, r), l & 4 && ag(t, r);
        break;
      case 13:
        ha(t, r), l & 4 && rg(t, r), l & 64 && (t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null && (r = Db.bind(null, r), Kb(t, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || fa, !l) {
          i = i !== null && i.memoizedState !== null || Cn, d = fa;
          var p = Cn;
          fa = l, (Cn = i) && !p ? pa(t, r, (r.subtreeFlags & 8772) !== 0) : ha(t, r), fa = d, Cn = p;
        }
        break;
      case 30:
        break;
      default:
        ha(t, r);
    }
  }
  function ng(t) {
    var i = t.alternate;
    i !== null && (t.alternate = null, ng(i)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (i = t.stateNode, i !== null && gn(i)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xn = null,
    ai = !1;
  function da(t, i, r) {
    for (r = r.child; r !== null;) ig(t, i, r), r = r.sibling;
  }
  function ig(t, i, r) {
    if (oe && typeof oe.onCommitFiberUnmount == "function") try {
      oe.onCommitFiberUnmount(Re, r);
    } catch {}
    switch (r.tag) {
      case 26:
        Cn || qi(r, i), da(t, i, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Cn || qi(r, i);
        var l = xn,
          d = ai;
        nr(r.type) && (xn = r.stateNode, ai = !1), da(t, i, r), jo(r.stateNode), xn = l, ai = d;
        break;
      case 5:
        Cn || qi(r, i);
      case 6:
        if (l = xn, d = ai, xn = null, da(t, i, r), xn = l, ai = d, xn !== null) if (ai) try {
          (xn.nodeType === 9 ? xn.body : xn.nodeName === "HTML" ? xn.ownerDocument.body : xn).removeChild(r.stateNode);
        } catch (p) {
          nn(r, i, p);
        } else try {
          xn.removeChild(r.stateNode);
        } catch (p) {
          nn(r, i, p);
        }
        break;
      case 18:
        xn !== null && (ai ? (t = xn, Zg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, r.stateNode), Rs(t)) : Zg(xn, r.stateNode));
        break;
      case 4:
        l = xn, d = ai, xn = r.stateNode.containerInfo, ai = !0, da(t, i, r), xn = l, ai = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Za(2, r, i), Cn || Za(4, r, i), da(t, i, r);
        break;
      case 1:
        Cn || (qi(r, i), l = r.stateNode, typeof l.componentWillUnmount == "function" && Km(r, i, l)), da(t, i, r);
        break;
      case 21:
        da(t, i, r);
        break;
      case 22:
        Cn = (l = Cn) || r.memoizedState !== null, da(t, i, r), Cn = l;
        break;
      default:
        da(t, i, r);
    }
  }
  function ag(t, i) {
    if (i.memoizedState === null && (t = i.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Rs(t);
      } catch (r) {
        nn(i, i.return, r);
      }
    }
  }
  function rg(t, i) {
    if (i.memoizedState === null && (t = i.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Rs(t);
    } catch (r) {
      nn(i, i.return, r);
    }
  }
  function Sb(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var i = t.stateNode;
        return i === null && (i = t.stateNode = new eg()), i;
      case 22:
        return t = t.stateNode, i = t._retryCache, i === null && (i = t._retryCache = new eg()), i;
      default:
        throw Error(a(435, t.tag));
    }
  }
  function cc(t, i) {
    var r = Sb(t);
    i.forEach(function (l) {
      if (!r.has(l)) {
        r.add(l);
        var d = Nb.bind(null, t, l);
        l.then(d, d);
      }
    });
  }
  function ri(t, i) {
    var r = i.deletions;
    if (r !== null) for (var l = 0; l < r.length; l++) {
      var d = r[l],
        p = t,
        b = i,
        R = b;
      e: for (; R !== null;) {
        switch (R.tag) {
          case 27:
            if (nr(R.type)) {
              xn = R.stateNode, ai = !1;
              break e;
            }
            break;
          case 5:
            xn = R.stateNode, ai = !1;
            break e;
          case 3:
          case 4:
            xn = R.stateNode.containerInfo, ai = !0;
            break e;
        }
        R = R.return;
      }
      if (xn === null) throw Error(a(160));
      ig(p, b, d), xn = null, ai = !1, p = d.alternate, p !== null && (p.return = null), d.return = null;
    }
    if (i.subtreeFlags & 13886) for (i = i.child; i !== null;) sg(i, t), i = i.sibling;
  }
  var Ii = null;
  function sg(t, i) {
    var r = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ri(i, t), si(t), l & 4 && (Za(3, t, t.return), Oo(3, t), Za(5, t, t.return));
        break;
      case 1:
        ri(i, t), si(t), l & 512 && (Cn || r === null || qi(r, r.return)), l & 64 && fa && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (r = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
        break;
      case 26:
        var d = Ii;
        if (ri(i, t), si(t), l & 512 && (Cn || r === null || qi(r, r.return)), l & 4) {
          var p = r !== null ? r.memoizedState : null;
          if (l = t.memoizedState, r === null) {
            if (l === null) {
              if (t.stateNode === null) {
                e: {
                  l = t.type, r = t.memoizedProps, d = d.ownerDocument || d;
                  t: switch (l) {
                    case "title":
                      p = d.getElementsByTagName("title")[0], (!p || p[fn] || p[lt] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = d.createElement(l), d.head.insertBefore(p, d.querySelector("head > title"))), qn(p, l, r), p[lt] = t, le(p), l = p;
                      break e;
                    case "link":
                      var b = sx("link", "href", d).get(l + (r.href || ""));
                      if (b) {
                        for (var R = 0; R < b.length; R++) if (p = b[R], p.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && p.getAttribute("rel") === (r.rel == null ? null : r.rel) && p.getAttribute("title") === (r.title == null ? null : r.title) && p.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                          b.splice(R, 1);
                          break t;
                        }
                      }
                      p = d.createElement(l), qn(p, l, r), d.head.appendChild(p);
                      break;
                    case "meta":
                      if (b = sx("meta", "content", d).get(l + (r.content || ""))) {
                        for (R = 0; R < b.length; R++) if (p = b[R], p.getAttribute("content") === (r.content == null ? null : "" + r.content) && p.getAttribute("name") === (r.name == null ? null : r.name) && p.getAttribute("property") === (r.property == null ? null : r.property) && p.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && p.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                          b.splice(R, 1);
                          break t;
                        }
                      }
                      p = d.createElement(l), qn(p, l, r), d.head.appendChild(p);
                      break;
                    default:
                      throw Error(a(468, l));
                  }
                  p[lt] = t, le(p), l = p;
                }
                t.stateNode = l;
              } else ox(d, t.type, t.stateNode);
            } else t.stateNode = rx(d, l, t.memoizedProps);
          } else p !== l ? (p === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : p.count--, l === null ? ox(d, t.type, t.stateNode) : rx(d, l, t.memoizedProps)) : l === null && t.stateNode !== null && Kf(t, t.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        ri(i, t), si(t), l & 512 && (Cn || r === null || qi(r, r.return)), r !== null && l & 4 && Kf(t, t.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (ri(i, t), si(t), l & 512 && (Cn || r === null || qi(r, r.return)), t.flags & 32) {
          d = t.stateNode;
          try {
            Xi(d, "");
          } catch (ot) {
            nn(t, t.return, ot);
          }
        }
        l & 4 && t.stateNode != null && (d = t.memoizedProps, Kf(t, d, r !== null ? r.memoizedProps : d)), l & 1024 && ($f = !0);
        break;
      case 6:
        if (ri(i, t), si(t), l & 4) {
          if (t.stateNode === null) throw Error(a(162));
          l = t.memoizedProps, r = t.stateNode;
          try {
            r.nodeValue = l;
          } catch (ot) {
            nn(t, t.return, ot);
          }
        }
        break;
      case 3:
        if (Tc = null, d = Ii, Ii = Mc(i.containerInfo), ri(i, t), Ii = d, si(t), l & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Rs(i.containerInfo);
        } catch (ot) {
          nn(t, t.return, ot);
        }
        $f && ($f = !1, og(t));
        break;
      case 4:
        l = Ii, Ii = Mc(t.stateNode.containerInfo), ri(i, t), si(t), Ii = l;
        break;
      case 12:
        ri(i, t), si(t);
        break;
      case 31:
        ri(i, t), si(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, cc(t, l)));
        break;
      case 13:
        ri(i, t), si(t), t.child.flags & 8192 && t.memoizedState !== null != (r !== null && r.memoizedState !== null) && (fc = T()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, cc(t, l)));
        break;
      case 22:
        d = t.memoizedState !== null;
        var X = r !== null && r.memoizedState !== null,
          de = fa,
          Ce = Cn;
        if (fa = de || d, Cn = Ce || X, ri(i, t), Cn = Ce, fa = de, si(t), l & 8192) e: for (i = t.stateNode, i._visibility = d ? i._visibility & -2 : i._visibility | 1, d && (r === null || X || fa || Cn || Ur(t)), r = null, i = t;;) {
          if (i.tag === 5 || i.tag === 26) {
            if (r === null) {
              X = r = i;
              try {
                if (p = X.stateNode, d) b = p.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none";else {
                  R = X.stateNode;
                  var Oe = X.memoizedProps.style,
                    ge = Oe != null && Oe.hasOwnProperty("display") ? Oe.display : null;
                  R.style.display = ge == null || typeof ge == "boolean" ? "" : ("" + ge).trim();
                }
              } catch (ot) {
                nn(X, X.return, ot);
              }
            }
          } else if (i.tag === 6) {
            if (r === null) {
              X = i;
              try {
                X.stateNode.nodeValue = d ? "" : X.memoizedProps;
              } catch (ot) {
                nn(X, X.return, ot);
              }
            }
          } else if (i.tag === 18) {
            if (r === null) {
              X = i;
              try {
                var Se = X.stateNode;
                d ? Kg(Se, !0) : Kg(X.stateNode, !1);
              } catch (ot) {
                nn(X, X.return, ot);
              }
            }
          } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === t) && i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
          if (i === t) break e;
          for (; i.sibling === null;) {
            if (i.return === null || i.return === t) break e;
            r === i && (r = null), i = i.return;
          }
          r === i && (r = null), i.sibling.return = i.return, i = i.sibling;
        }
        l & 4 && (l = t.updateQueue, l !== null && (r = l.retryQueue, r !== null && (l.retryQueue = null, cc(t, r))));
        break;
      case 19:
        ri(i, t), si(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, cc(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ri(i, t), si(t);
    }
  }
  function si(t) {
    var i = t.flags;
    if (i & 2) {
      try {
        for (var r, l = t.return; l !== null;) {
          if (Jm(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(a(160));
        switch (r.tag) {
          case 27:
            var d = r.stateNode,
              p = Qf(t);
            lc(t, p, d);
            break;
          case 5:
            var b = r.stateNode;
            r.flags & 32 && (Xi(b, ""), r.flags &= -33);
            var R = Qf(t);
            lc(t, R, b);
            break;
          case 3:
          case 4:
            var X = r.stateNode.containerInfo,
              de = Qf(t);
            Jf(t, de, X);
            break;
          default:
            throw Error(a(161));
        }
      } catch (Ce) {
        nn(t, t.return, Ce);
      }
      t.flags &= -3;
    }
    i & 4096 && (t.flags &= -4097);
  }
  function og(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) {
      var i = t;
      og(i), i.tag === 5 && i.flags & 1024 && i.stateNode.reset(), t = t.sibling;
    }
  }
  function ha(t, i) {
    if (i.subtreeFlags & 8772) for (i = i.child; i !== null;) tg(t, i.alternate, i), i = i.sibling;
  }
  function Ur(t) {
    for (t = t.child; t !== null;) {
      var i = t;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Za(4, i, i.return), Ur(i);
          break;
        case 1:
          qi(i, i.return);
          var r = i.stateNode;
          typeof r.componentWillUnmount == "function" && Km(i, i.return, r), Ur(i);
          break;
        case 27:
          jo(i.stateNode);
        case 26:
        case 5:
          qi(i, i.return), Ur(i);
          break;
        case 22:
          i.memoizedState === null && Ur(i);
          break;
        case 30:
          Ur(i);
          break;
        default:
          Ur(i);
      }
      t = t.sibling;
    }
  }
  function pa(t, i, r) {
    for (r = r && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null;) {
      var l = i.alternate,
        d = t,
        p = i,
        b = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          pa(d, p, r), Oo(4, p);
          break;
        case 1:
          if (pa(d, p, r), l = p, d = l.stateNode, typeof d.componentDidMount == "function") try {
            d.componentDidMount();
          } catch (de) {
            nn(l, l.return, de);
          }
          if (l = p, d = l.updateQueue, d !== null) {
            var R = l.stateNode;
            try {
              var X = d.shared.hiddenCallbacks;
              if (X !== null) for (d.shared.hiddenCallbacks = null, d = 0; d < X.length; d++) Fp(X[d], R);
            } catch (de) {
              nn(l, l.return, de);
            }
          }
          r && b & 64 && Zm(p), Po(p, p.return);
          break;
        case 27:
          $m(p);
        case 26:
        case 5:
          pa(d, p, r), r && l === null && b & 4 && Qm(p), Po(p, p.return);
          break;
        case 12:
          pa(d, p, r);
          break;
        case 31:
          pa(d, p, r), r && b & 4 && ag(d, p);
          break;
        case 13:
          pa(d, p, r), r && b & 4 && rg(d, p);
          break;
        case 22:
          p.memoizedState === null && pa(d, p, r), Po(p, p.return);
          break;
        case 30:
          break;
        default:
          pa(d, p, r);
      }
      i = i.sibling;
    }
  }
  function ed(t, i) {
    var r = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), t = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (t = i.memoizedState.cachePool.pool), t !== r && (t != null && t.refCount++, r != null && bo(r));
  }
  function td(t, i) {
    t = null, i.alternate !== null && (t = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== t && (i.refCount++, t != null && bo(t));
  }
  function zi(t, i, r, l) {
    if (i.subtreeFlags & 10256) for (i = i.child; i !== null;) lg(t, i, r, l), i = i.sibling;
  }
  function lg(t, i, r, l) {
    var d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        zi(t, i, r, l), d & 2048 && Oo(9, i);
        break;
      case 1:
        zi(t, i, r, l);
        break;
      case 3:
        zi(t, i, r, l), d & 2048 && (t = null, i.alternate !== null && (t = i.alternate.memoizedState.cache), i = i.memoizedState.cache, i !== t && (i.refCount++, t != null && bo(t)));
        break;
      case 12:
        if (d & 2048) {
          zi(t, i, r, l), t = i.stateNode;
          try {
            var p = i.memoizedProps,
              b = p.id,
              R = p.onPostCommit;
            typeof R == "function" && R(b, i.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (X) {
            nn(i, i.return, X);
          }
        } else zi(t, i, r, l);
        break;
      case 31:
        zi(t, i, r, l);
        break;
      case 13:
        zi(t, i, r, l);
        break;
      case 23:
        break;
      case 22:
        p = i.stateNode, b = i.alternate, i.memoizedState !== null ? p._visibility & 2 ? zi(t, i, r, l) : Io(t, i) : p._visibility & 2 ? zi(t, i, r, l) : (p._visibility |= 2, xs(t, i, r, l, (i.subtreeFlags & 10256) !== 0 || !1)), d & 2048 && ed(b, i);
        break;
      case 24:
        zi(t, i, r, l), d & 2048 && td(i.alternate, i);
        break;
      default:
        zi(t, i, r, l);
    }
  }
  function xs(t, i, r, l, d) {
    for (d = d && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child; i !== null;) {
      var p = t,
        b = i,
        R = r,
        X = l,
        de = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          xs(p, b, R, X, d), Oo(8, b);
          break;
        case 23:
          break;
        case 22:
          var Ce = b.stateNode;
          b.memoizedState !== null ? Ce._visibility & 2 ? xs(p, b, R, X, d) : Io(p, b) : (Ce._visibility |= 2, xs(p, b, R, X, d)), d && de & 2048 && ed(b.alternate, b);
          break;
        case 24:
          xs(p, b, R, X, d), d && de & 2048 && td(b.alternate, b);
          break;
        default:
          xs(p, b, R, X, d);
      }
      i = i.sibling;
    }
  }
  function Io(t, i) {
    if (i.subtreeFlags & 10256) for (i = i.child; i !== null;) {
      var r = t,
        l = i,
        d = l.flags;
      switch (l.tag) {
        case 22:
          Io(r, l), d & 2048 && ed(l.alternate, l);
          break;
        case 24:
          Io(r, l), d & 2048 && td(l.alternate, l);
          break;
        default:
          Io(r, l);
      }
      i = i.sibling;
    }
  }
  var zo = 8192;
  function vs(t, i, r) {
    if (t.subtreeFlags & zo) for (t = t.child; t !== null;) cg(t, i, r), t = t.sibling;
  }
  function cg(t, i, r) {
    switch (t.tag) {
      case 26:
        vs(t, i, r), t.flags & zo && t.memoizedState !== null && l1(r, Ii, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        vs(t, i, r);
        break;
      case 3:
      case 4:
        var l = Ii;
        Ii = Mc(t.stateNode.containerInfo), vs(t, i, r), Ii = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = zo, zo = 16777216, vs(t, i, r), zo = l) : vs(t, i, r));
        break;
      default:
        vs(t, i, r);
    }
  }
  function ug(t) {
    var i = t.alternate;
    if (i !== null && (t = i.child, t !== null)) {
      i.child = null;
      do i = t.sibling, t.sibling = null, t = i; while (t !== null);
    }
  }
  function Fo(t) {
    var i = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (i !== null) for (var r = 0; r < i.length; r++) {
        var l = i[r];
        Vn = l, dg(l, t);
      }
      ug(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) fg(t), t = t.sibling;
  }
  function fg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fo(t), t.flags & 2048 && Za(9, t, t.return);
        break;
      case 3:
        Fo(t);
        break;
      case 12:
        Fo(t);
        break;
      case 22:
        var i = t.stateNode;
        t.memoizedState !== null && i._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (i._visibility &= -3, uc(t)) : Fo(t);
        break;
      default:
        Fo(t);
    }
  }
  function uc(t) {
    var i = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (i !== null) for (var r = 0; r < i.length; r++) {
        var l = i[r];
        Vn = l, dg(l, t);
      }
      ug(t);
    }
    for (t = t.child; t !== null;) {
      switch (i = t, i.tag) {
        case 0:
        case 11:
        case 15:
          Za(8, i, i.return), uc(i);
          break;
        case 22:
          r = i.stateNode, r._visibility & 2 && (r._visibility &= -3, uc(i));
          break;
        default:
          uc(i);
      }
      t = t.sibling;
    }
  }
  function dg(t, i) {
    for (; Vn !== null;) {
      var r = Vn;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Za(8, r, i);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          bo(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, Vn = l;else e: for (r = t; Vn !== null;) {
        l = Vn;
        var d = l.sibling,
          p = l.return;
        if (ng(l), l === r) {
          Vn = null;
          break e;
        }
        if (d !== null) {
          d.return = p, Vn = d;
          break e;
        }
        Vn = p;
      }
    }
  }
  var Mb = {
      getCacheForType: function (t) {
        var i = Wn(An),
          r = i.data.get(t);
        return r === void 0 && (r = t(), i.data.set(t, r)), r;
      },
      cacheSignal: function () {
        return Wn(An).controller.signal;
      }
    },
    Eb = typeof WeakMap == "function" ? WeakMap : Map,
    $t = 0,
    un = null,
    It = null,
    Ft = 0,
    tn = 0,
    mi = null,
    Ka = !1,
    _s = !1,
    nd = !1,
    ma = 0,
    _n = 0,
    Qa = 0,
    Or = 0,
    id = 0,
    gi = 0,
    ys = 0,
    Bo = null,
    oi = null,
    ad = !1,
    fc = 0,
    hg = 0,
    dc = 1 / 0,
    hc = null,
    Ja = null,
    Pn = 0,
    $a = null,
    bs = null,
    ga = 0,
    rd = 0,
    sd = null,
    pg = null,
    Ho = 0,
    od = null;
  function xi() {
    return ($t & 2) !== 0 && Ft !== 0 ? Ft & -Ft : I.T !== null ? hd() : xe();
  }
  function mg() {
    if (gi === 0) if ((Ft & 536870912) === 0 || jt) {
      var t = we;
      we <<= 1, (we & 3932160) === 0 && (we = 262144), gi = t;
    } else gi = 536870912;
    return t = hi.current, t !== null && (t.flags |= 32), gi;
  }
  function li(t, i, r) {
    (t === un && (tn === 2 || tn === 9) || t.cancelPendingCommit !== null) && (Ss(t, 0), er(t, Ft, gi, !1)), Gt(t, r), (($t & 2) === 0 || t !== un) && (t === un && (($t & 2) === 0 && (Or |= r), _n === 4 && er(t, Ft, gi, !1)), Zi(t));
  }
  function gg(t, i, r) {
    if (($t & 6) !== 0) throw Error(a(327));
    var l = !r && (i & 127) === 0 && (i & t.expiredLanes) === 0 || je(t, i),
      d = l ? wb(t, i) : cd(t, i, !0),
      p = l;
    do {
      if (d === 0) {
        _s && !l && er(t, i, 0, !1);
        break;
      } else {
        if (r = t.current.alternate, p && !Tb(r)) {
          d = cd(t, i, !1), p = !1;
          continue;
        }
        if (d === 2) {
          if (p = i, t.errorRecoveryDisabledLanes & p) var b = 0;else b = t.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            i = b;
            e: {
              var R = t;
              d = Bo;
              var X = R.current.memoizedState.isDehydrated;
              if (X && (Ss(R, b).flags |= 256), b = cd(R, b, !1), b !== 2) {
                if (nd && !X) {
                  R.errorRecoveryDisabledLanes |= p, Or |= p, d = 4;
                  break e;
                }
                p = oi, oi = d, p !== null && (oi === null ? oi = p : oi.push.apply(oi, p));
              }
              d = b;
            }
            if (p = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          Ss(t, 0), er(t, i, 0, !0);
          break;
        }
        e: {
          switch (l = t, p = d, p) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              er(l, i, gi, !Ka);
              break e;
            case 2:
              oi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((i & 62914560) === i && (d = fc + 300 - T(), 10 < d)) {
            if (er(l, i, gi, !Ka), Ae(l, 0, !0) !== 0) break e;
            ga = i, l.timeoutHandle = Yg(xg.bind(null, l, r, oi, hc, ad, i, gi, Or, ys, Ka, p, "Throttled", -0, 0), d);
            break e;
          }
          xg(l, r, oi, hc, ad, i, gi, Or, ys, Ka, p, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Zi(t);
  }
  function xg(t, i, r, l, d, p, b, R, X, de, Ce, Oe, ge, Se) {
    if (t.timeoutHandle = -1, Oe = i.subtreeFlags, Oe & 8192 || (Oe & 16785408) === 16785408) {
      Oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ta
      }, cg(i, p, Oe);
      var ot = (p & 62914560) === p ? fc - T() : (p & 4194048) === p ? hg - T() : 0;
      if (ot = c1(Oe, ot), ot !== null) {
        ga = p, t.cancelPendingCommit = ot(Tg.bind(null, t, i, p, r, l, d, b, R, X, Ce, Oe, null, ge, Se)), er(t, p, b, !de);
        return;
      }
    }
    Tg(t, i, p, r, l, d, b, R, X);
  }
  function Tb(t) {
    for (var i = t;;) {
      var r = i.tag;
      if ((r === 0 || r === 11 || r === 15) && i.flags & 16384 && (r = i.updateQueue, r !== null && (r = r.stores, r !== null))) for (var l = 0; l < r.length; l++) {
        var d = r[l],
          p = d.getSnapshot;
        d = d.value;
        try {
          if (!fi(p(), d)) return !1;
        } catch {
          return !1;
        }
      }
      if (r = i.child, i.subtreeFlags & 16384 && r !== null) r.return = i, i = r;else {
        if (i === t) break;
        for (; i.sibling === null;) {
          if (i.return === null || i.return === t) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function er(t, i, r, l) {
    i &= ~id, i &= ~Or, t.suspendedLanes |= i, t.pingedLanes &= ~i, l && (t.warmLanes |= i), l = t.expirationTimes;
    for (var d = i; 0 < d;) {
      var p = 31 - Ve(d),
        b = 1 << p;
      l[p] = -1, d &= ~b;
    }
    r !== 0 && Fn(t, r, i);
  }
  function pc() {
    return ($t & 6) === 0 ? (Go(0), !1) : !0;
  }
  function ld() {
    if (It !== null) {
      if (tn === 0) var t = It.return;else t = It, ra = Tr = null, Ef(t), ds = null, Mo = 0, t = It;
      for (; t !== null;) qm(t.alternate, t), t = t.return;
      It = null;
    }
  }
  function Ss(t, i) {
    var r = t.timeoutHandle;
    r !== -1 && (t.timeoutHandle = -1, Xb(r)), r = t.cancelPendingCommit, r !== null && (t.cancelPendingCommit = null, r()), ga = 0, ld(), un = t, It = r = ia(t.current, null), Ft = i, tn = 0, mi = null, Ka = !1, _s = je(t, i), nd = !1, ys = gi = id = Or = Qa = _n = 0, oi = Bo = null, ad = !1, (i & 8) !== 0 && (i |= i & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= i; 0 < l;) {
      var d = 31 - Ve(l),
        p = 1 << d;
      i |= t[d], l &= ~p;
    }
    return ma = i, Pl(), r;
  }
  function vg(t, i) {
    Ct = null, I.H = No, i === fs || i === kl ? (i = Op(), tn = 3) : i === df ? (i = Op(), tn = 4) : tn = i === Hf ? 8 : i !== null && typeof i == "object" && typeof i.then == "function" ? 6 : 1, mi = i, It === null && (_n = 1, ic(t, Mi(i, t.current)));
  }
  function _g() {
    var t = hi.current;
    return t === null ? !0 : (Ft & 4194048) === Ft ? wi === null : (Ft & 62914560) === Ft || (Ft & 536870912) !== 0 ? t === wi : !1;
  }
  function yg() {
    var t = I.H;
    return I.H = No, t === null ? No : t;
  }
  function bg() {
    var t = I.A;
    return I.A = Mb, t;
  }
  function mc() {
    _n = 4, Ka || (Ft & 4194048) !== Ft && hi.current !== null || (_s = !0), (Qa & 134217727) === 0 && (Or & 134217727) === 0 || un === null || er(un, Ft, gi, !1);
  }
  function cd(t, i, r) {
    var l = $t;
    $t |= 2;
    var d = yg(),
      p = bg();
    (un !== t || Ft !== i) && (hc = null, Ss(t, i)), i = !1;
    var b = _n;
    e: do try {
      if (tn !== 0 && It !== null) {
        var R = It,
          X = mi;
        switch (tn) {
          case 8:
            ld(), b = 6;
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            hi.current === null && (i = !0);
            var de = tn;
            if (tn = 0, mi = null, Ms(t, R, X, de), r && _s) {
              b = 0;
              break e;
            }
            break;
          default:
            de = tn, tn = 0, mi = null, Ms(t, R, X, de);
        }
      }
      Ab(), b = _n;
      break;
    } catch (Ce) {
      vg(t, Ce);
    } while (!0);
    return i && t.shellSuspendCounter++, ra = Tr = null, $t = l, I.H = d, I.A = p, It === null && (un = null, Ft = 0, Pl()), b;
  }
  function Ab() {
    for (; It !== null;) Sg(It);
  }
  function wb(t, i) {
    var r = $t;
    $t |= 2;
    var l = yg(),
      d = bg();
    un !== t || Ft !== i ? (hc = null, dc = T() + 500, Ss(t, i)) : _s = je(t, i);
    e: do try {
      if (tn !== 0 && It !== null) {
        i = It;
        var p = mi;
        t: switch (tn) {
          case 1:
            tn = 0, mi = null, Ms(t, i, p, 1);
            break;
          case 2:
          case 9:
            if (Lp(p)) {
              tn = 0, mi = null, Mg(i);
              break;
            }
            i = function () {
              tn !== 2 && tn !== 9 || un !== t || (tn = 7), Zi(t);
            }, p.then(i, i);
            break e;
          case 3:
            tn = 7;
            break e;
          case 4:
            tn = 5;
            break e;
          case 7:
            Lp(p) ? (tn = 0, mi = null, Mg(i)) : (tn = 0, mi = null, Ms(t, i, p, 7));
            break;
          case 5:
            var b = null;
            switch (It.tag) {
              case 26:
                b = It.memoizedState;
              case 5:
              case 27:
                var R = It;
                if (b ? lx(b) : R.stateNode.complete) {
                  tn = 0, mi = null;
                  var X = R.sibling;
                  if (X !== null) It = X;else {
                    var de = R.return;
                    de !== null ? (It = de, gc(de)) : It = null;
                  }
                  break t;
                }
            }
            tn = 0, mi = null, Ms(t, i, p, 5);
            break;
          case 6:
            tn = 0, mi = null, Ms(t, i, p, 6);
            break;
          case 8:
            ld(), _n = 6;
            break e;
          default:
            throw Error(a(462));
        }
      }
      Rb();
      break;
    } catch (Ce) {
      vg(t, Ce);
    } while (!0);
    return ra = Tr = null, I.H = l, I.A = d, $t = r, It !== null ? 0 : (un = null, Ft = 0, Pl(), _n);
  }
  function Rb() {
    for (; It !== null && !ft();) Sg(It);
  }
  function Sg(t) {
    var i = Wm(t.alternate, t, ma);
    t.memoizedProps = t.pendingProps, i === null ? gc(t) : It = i;
  }
  function Mg(t) {
    var i = t,
      r = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = Hm(r, i, i.pendingProps, i.type, void 0, Ft);
        break;
      case 11:
        i = Hm(r, i, i.pendingProps, i.type.render, i.ref, Ft);
        break;
      case 5:
        Ef(i);
      default:
        qm(r, i), i = It = bp(i, ma), i = Wm(r, i, ma);
    }
    t.memoizedProps = t.pendingProps, i === null ? gc(t) : It = i;
  }
  function Ms(t, i, r, l) {
    ra = Tr = null, Ef(i), ds = null, Mo = 0;
    var d = i.return;
    try {
      if (gb(t, d, i, r, Ft)) {
        _n = 1, ic(t, Mi(r, t.current)), It = null;
        return;
      }
    } catch (p) {
      if (d !== null) throw It = d, p;
      _n = 1, ic(t, Mi(r, t.current)), It = null;
      return;
    }
    i.flags & 32768 ? (jt || l === 1 ? t = !0 : _s || (Ft & 536870912) !== 0 ? t = !1 : (Ka = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = hi.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Eg(i, t)) : gc(i);
  }
  function gc(t) {
    var i = t;
    do {
      if ((i.flags & 32768) !== 0) {
        Eg(i, Ka);
        return;
      }
      t = i.return;
      var r = _b(i.alternate, i, ma);
      if (r !== null) {
        It = r;
        return;
      }
      if (i = i.sibling, i !== null) {
        It = i;
        return;
      }
      It = i = t;
    } while (i !== null);
    _n === 0 && (_n = 5);
  }
  function Eg(t, i) {
    do {
      var r = yb(t.alternate, t);
      if (r !== null) {
        r.flags &= 32767, It = r;
        return;
      }
      if (r = t.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !i && (t = t.sibling, t !== null)) {
        It = t;
        return;
      }
      It = t = r;
    } while (t !== null);
    _n = 6, It = null;
  }
  function Tg(t, i, r, l, d, p, b, R, X) {
    t.cancelPendingCommit = null;
    do xc(); while (Pn !== 0);
    if (($t & 6) !== 0) throw Error(a(327));
    if (i !== null) {
      if (i === t.current) throw Error(a(177));
      if (p = i.lanes | i.childLanes, p |= Ku, gt(t, r, p, b, R, X), t === un && (It = un = null, Ft = 0), bs = i, $a = t, ga = r, rd = p, sd = d, pg = l, (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Lb(se, function () {
        return Dg(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (i.flags & 13878) !== 0, (i.subtreeFlags & 13878) !== 0 || l) {
        l = I.T, I.T = null, d = Y.p, Y.p = 2, b = $t, $t |= 4;
        try {
          bb(t, i, r);
        } finally {
          $t = b, Y.p = d, I.T = l;
        }
      }
      Pn = 1, Ag(), wg(), Rg();
    }
  }
  function Ag() {
    if (Pn === 1) {
      Pn = 0;
      var t = $a,
        i = bs,
        r = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || r) {
        r = I.T, I.T = null;
        var l = Y.p;
        Y.p = 2;
        var d = $t;
        $t |= 4;
        try {
          sg(i, t);
          var p = bd,
            b = dp(t.containerInfo),
            R = p.focusedElem,
            X = p.selectionRange;
          if (b !== R && R && R.ownerDocument && fp(R.ownerDocument.documentElement, R)) {
            if (X !== null && Xu(R)) {
              var de = X.start,
                Ce = X.end;
              if (Ce === void 0 && (Ce = de), "selectionStart" in R) R.selectionStart = de, R.selectionEnd = Math.min(Ce, R.value.length);else {
                var Oe = R.ownerDocument || document,
                  ge = Oe && Oe.defaultView || window;
                if (ge.getSelection) {
                  var Se = ge.getSelection(),
                    ot = R.textContent.length,
                    St = Math.min(X.start, ot),
                    on = X.end === void 0 ? St : Math.min(X.end, ot);
                  !Se.extend && St > on && (b = on, on = St, St = b);
                  var re = up(R, St),
                    Q = up(R, on);
                  if (re && Q && (Se.rangeCount !== 1 || Se.anchorNode !== re.node || Se.anchorOffset !== re.offset || Se.focusNode !== Q.node || Se.focusOffset !== Q.offset)) {
                    var fe = Oe.createRange();
                    fe.setStart(re.node, re.offset), Se.removeAllRanges(), St > on ? (Se.addRange(fe), Se.extend(Q.node, Q.offset)) : (fe.setEnd(Q.node, Q.offset), Se.addRange(fe));
                  }
                }
              }
            }
            for (Oe = [], Se = R; Se = Se.parentNode;) Se.nodeType === 1 && Oe.push({
              element: Se,
              left: Se.scrollLeft,
              top: Se.scrollTop
            });
            for (typeof R.focus == "function" && R.focus(), R = 0; R < Oe.length; R++) {
              var Ue = Oe[R];
              Ue.element.scrollLeft = Ue.left, Ue.element.scrollTop = Ue.top;
            }
          }
          Cc = !!yd, bd = yd = null;
        } finally {
          $t = d, Y.p = l, I.T = r;
        }
      }
      t.current = i, Pn = 2;
    }
  }
  function wg() {
    if (Pn === 2) {
      Pn = 0;
      var t = $a,
        i = bs,
        r = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || r) {
        r = I.T, I.T = null;
        var l = Y.p;
        Y.p = 2;
        var d = $t;
        $t |= 4;
        try {
          tg(t, i.alternate, i);
        } finally {
          $t = d, Y.p = l, I.T = r;
        }
      }
      Pn = 3;
    }
  }
  function Rg() {
    if (Pn === 4 || Pn === 3) {
      Pn = 0, U();
      var t = $a,
        i = bs,
        r = ga,
        l = pg;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0 ? Pn = 5 : (Pn = 0, bs = $a = null, Cg(t, t.pendingLanes));
      var d = t.pendingLanes;
      if (d === 0 && (Ja = null), j(r), i = i.stateNode, oe && typeof oe.onCommitFiberRoot == "function") try {
        oe.onCommitFiberRoot(Re, i, void 0, (i.current.flags & 128) === 128);
      } catch {}
      if (l !== null) {
        i = I.T, d = Y.p, Y.p = 2, I.T = null;
        try {
          for (var p = t.onRecoverableError, b = 0; b < l.length; b++) {
            var R = l[b];
            p(R.value, {
              componentStack: R.stack
            });
          }
        } finally {
          I.T = i, Y.p = d;
        }
      }
      (ga & 3) !== 0 && xc(), Zi(t), d = t.pendingLanes, (r & 261930) !== 0 && (d & 42) !== 0 ? t === od ? Ho++ : (Ho = 0, od = t) : Ho = 0, Go(0);
    }
  }
  function Cg(t, i) {
    (t.pooledCacheLanes &= i) === 0 && (i = t.pooledCache, i != null && (t.pooledCache = null, bo(i)));
  }
  function xc() {
    return Ag(), wg(), Rg(), Dg();
  }
  function Dg() {
    if (Pn !== 5) return !1;
    var t = $a,
      i = rd;
    rd = 0;
    var r = j(ga),
      l = I.T,
      d = Y.p;
    try {
      Y.p = 32 > r ? 32 : r, I.T = null, r = sd, sd = null;
      var p = $a,
        b = ga;
      if (Pn = 0, bs = $a = null, ga = 0, ($t & 6) !== 0) throw Error(a(331));
      var R = $t;
      if ($t |= 4, fg(p.current), lg(p, p.current, b, r), $t = R, Go(0, !1), oe && typeof oe.onPostCommitFiberRoot == "function") try {
        oe.onPostCommitFiberRoot(Re, p);
      } catch {}
      return !0;
    } finally {
      Y.p = d, I.T = l, Cg(t, i);
    }
  }
  function Ng(t, i, r) {
    i = Mi(r, i), i = Bf(t.stateNode, i, 2), t = Wa(t, i, 2), t !== null && (Gt(t, 2), Zi(t));
  }
  function nn(t, i, r) {
    if (t.tag === 3) Ng(t, t, r);else for (; i !== null;) {
      if (i.tag === 3) {
        Ng(i, t, r);
        break;
      } else if (i.tag === 1) {
        var l = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ja === null || !Ja.has(l))) {
          t = Mi(r, t), r = Lm(2), l = Wa(i, r, 2), l !== null && (Um(r, l, i, t), Gt(l, 2), Zi(l));
          break;
        }
      }
      i = i.return;
    }
  }
  function ud(t, i, r) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Eb();
      var d = new Set();
      l.set(i, d);
    } else d = l.get(i), d === void 0 && (d = new Set(), l.set(i, d));
    d.has(r) || (nd = !0, d.add(r), t = Cb.bind(null, t, i, r), i.then(t, t));
  }
  function Cb(t, i, r) {
    var l = t.pingCache;
    l !== null && l.delete(i), t.pingedLanes |= t.suspendedLanes & r, t.warmLanes &= ~r, un === t && (Ft & r) === r && (_n === 4 || _n === 3 && (Ft & 62914560) === Ft && 300 > T() - fc ? ($t & 2) === 0 && Ss(t, 0) : id |= r, ys === Ft && (ys = 0)), Zi(t);
  }
  function Lg(t, i) {
    i === 0 && (i = ut()), t = Sr(t, i), t !== null && (Gt(t, i), Zi(t));
  }
  function Db(t) {
    var i = t.memoizedState,
      r = 0;
    i !== null && (r = i.retryLane), Lg(t, r);
  }
  function Nb(t, i) {
    var r = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          d = t.memoizedState;
        d !== null && (r = d.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    l !== null && l.delete(i), Lg(t, r);
  }
  function Lb(t, i) {
    return Et(t, i);
  }
  var vc = null,
    Es = null,
    fd = !1,
    _c = !1,
    dd = !1,
    tr = 0;
  function Zi(t) {
    t !== Es && t.next === null && (Es === null ? vc = Es = t : Es = Es.next = t), _c = !0, fd || (fd = !0, Ob());
  }
  function Go(t, i) {
    if (!dd && _c) {
      dd = !0;
      do for (var r = !1, l = vc; l !== null;) {
        if (t !== 0) {
          var d = l.pendingLanes;
          if (d === 0) var p = 0;else {
            var b = l.suspendedLanes,
              R = l.pingedLanes;
            p = (1 << 31 - Ve(42 | t) + 1) - 1, p &= d & ~(b & ~R), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
          }
          p !== 0 && (r = !0, Ig(l, p));
        } else p = Ft, p = Ae(l, l === un ? p : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (p & 3) === 0 || je(l, p) || (r = !0, Ig(l, p));
        l = l.next;
      } while (r);
      dd = !1;
    }
  }
  function Ub() {
    Ug();
  }
  function Ug() {
    _c = fd = !1;
    var t = 0;
    tr !== 0 && jb() && (t = tr);
    for (var i = T(), r = null, l = vc; l !== null;) {
      var d = l.next,
        p = Og(l, i);
      p === 0 ? (l.next = null, r === null ? vc = d : r.next = d, d === null && (Es = r)) : (r = l, (t !== 0 || (p & 3) !== 0) && (_c = !0)), l = d;
    }
    Pn !== 0 && Pn !== 5 || Go(t), tr !== 0 && (tr = 0);
  }
  function Og(t, i) {
    for (var r = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, p = t.pendingLanes & -62914561; 0 < p;) {
      var b = 31 - Ve(p),
        R = 1 << b,
        X = d[b];
      X === -1 ? ((R & r) === 0 || (R & l) !== 0) && (d[b] = ct(R, i)) : X <= i && (t.expiredLanes |= R), p &= ~R;
    }
    if (i = un, r = Ft, r = Ae(t, t === i ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, r === 0 || t === i && (tn === 2 || tn === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && tt(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((r & 3) === 0 || je(t, r)) {
      if (i = r & -r, i === t.callbackPriority) return i;
      switch (l !== null && tt(l), j(r)) {
        case 2:
        case 8:
          r = ue;
          break;
        case 32:
          r = se;
          break;
        case 268435456:
          r = ke;
          break;
        default:
          r = se;
      }
      return l = Pg.bind(null, t), r = Et(r, l), t.callbackPriority = i, t.callbackNode = r, i;
    }
    return l !== null && l !== null && tt(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Pg(t, i) {
    if (Pn !== 0 && Pn !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var r = t.callbackNode;
    if (xc() && t.callbackNode !== r) return null;
    var l = Ft;
    return l = Ae(t, t === un ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (gg(t, l, i), Og(t, T()), t.callbackNode != null && t.callbackNode === r ? Pg.bind(null, t) : null);
  }
  function Ig(t, i) {
    if (xc()) return null;
    gg(t, i, !0);
  }
  function Ob() {
    Wb(function () {
      ($t & 6) !== 0 ? Et(ve, Ub) : Ug();
    });
  }
  function hd() {
    if (tr === 0) {
      var t = cs;
      t === 0 && (t = Pe, Pe <<= 1, (Pe & 261888) === 0 && (Pe = 256)), tr = t;
    }
    return tr;
  }
  function zg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wl("" + t);
  }
  function Fg(t, i) {
    var r = i.ownerDocument.createElement("input");
    return r.name = i.name, r.value = i.value, t.id && r.setAttribute("form", t.id), i.parentNode.insertBefore(r, i), t = new FormData(t), r.parentNode.removeChild(r), t;
  }
  function Pb(t, i, r, l, d) {
    if (i === "submit" && r && r.stateNode === d) {
      var p = zg((d[xt] || null).action),
        b = l.submitter;
      b && (i = (i = b[xt] || null) ? zg(i.formAction) : b.getAttribute("formAction"), i !== null && (p = i, b = null));
      var R = new Nl("action", "action", null, l, d);
      t.push({
        event: R,
        listeners: [{
          instance: null,
          listener: function () {
            if (l.defaultPrevented) {
              if (tr !== 0) {
                var X = b ? Fg(d, b) : new FormData(d);
                Uf(r, {
                  pending: !0,
                  data: X,
                  method: d.method,
                  action: p
                }, null, X);
              }
            } else typeof p == "function" && (R.preventDefault(), X = b ? Fg(d, b) : new FormData(d), Uf(r, {
              pending: !0,
              data: X,
              method: d.method,
              action: p
            }, p, X));
          },
          currentTarget: d
        }]
      });
    }
  }
  for (var pd = 0; pd < Zu.length; pd++) {
    var md = Zu[pd],
      Ib = md.toLowerCase(),
      zb = md[0].toUpperCase() + md.slice(1);
    Pi(Ib, "on" + zb);
  }
  Pi(mp, "onAnimationEnd"), Pi(gp, "onAnimationIteration"), Pi(xp, "onAnimationStart"), Pi("dblclick", "onDoubleClick"), Pi("focusin", "onFocus"), Pi("focusout", "onBlur"), Pi($y, "onTransitionRun"), Pi(eb, "onTransitionStart"), Pi(tb, "onTransitionCancel"), Pi(vp, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), We("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), We("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), We("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), We("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), We("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));
  function Bg(t, i) {
    i = (i & 4) !== 0;
    for (var r = 0; r < t.length; r++) {
      var l = t[r],
        d = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (i) for (var b = l.length - 1; 0 <= b; b--) {
          var R = l[b],
            X = R.instance,
            de = R.currentTarget;
          if (R = R.listener, X !== p && d.isPropagationStopped()) break e;
          p = R, d.currentTarget = de;
          try {
            p(d);
          } catch (Ce) {
            Ol(Ce);
          }
          d.currentTarget = null, p = X;
        } else for (b = 0; b < l.length; b++) {
          if (R = l[b], X = R.instance, de = R.currentTarget, R = R.listener, X !== p && d.isPropagationStopped()) break e;
          p = R, d.currentTarget = de;
          try {
            p(d);
          } catch (Ce) {
            Ol(Ce);
          }
          d.currentTarget = null, p = X;
        }
      }
    }
  }
  function zt(t, i) {
    var r = i[Ut];
    r === void 0 && (r = i[Ut] = new Set());
    var l = t + "__bubble";
    r.has(l) || (Hg(i, t, 2, !1), r.add(l));
  }
  function gd(t, i, r) {
    var l = 0;
    i && (l |= 4), Hg(r, t, l, i);
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function xd(t) {
    if (!t[yc]) {
      t[yc] = !0, ne.forEach(function (r) {
        r !== "selectionchange" && (Fb.has(r) || gd(r, !1, t), gd(r, !0, t));
      });
      var i = t.nodeType === 9 ? t : t.ownerDocument;
      i === null || i[yc] || (i[yc] = !0, gd("selectionchange", !1, i));
    }
  }
  function Hg(t, i, r, l) {
    switch (mx(i)) {
      case 2:
        var d = d1;
        break;
      case 8:
        d = h1;
        break;
      default:
        d = Ld;
    }
    r = d.bind(null, i, r, t), d = void 0, !Iu || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(i, r, {
      capture: !0,
      passive: d
    }) : t.addEventListener(i, r, !0) : d !== void 0 ? t.addEventListener(i, r, {
      passive: d
    }) : t.addEventListener(i, r, !1);
  }
  function vd(t, i, r, l, d) {
    var p = l;
    if ((i & 1) === 0 && (i & 2) === 0 && l !== null) e: for (;;) {
      if (l === null) return;
      var b = l.tag;
      if (b === 3 || b === 4) {
        var R = l.stateNode.containerInfo;
        if (R === d) break;
        if (b === 4) for (b = l.return; b !== null;) {
          var X = b.tag;
          if ((X === 3 || X === 4) && b.stateNode.containerInfo === d) return;
          b = b.return;
        }
        for (; R !== null;) {
          if (b = Tn(R), b === null) return;
          if (X = b.tag, X === 5 || X === 6 || X === 26 || X === 27) {
            l = p = b;
            continue e;
          }
          R = R.parentNode;
        }
      }
      l = l.return;
    }
    X0(function () {
      var de = p,
        Ce = Ou(r),
        Oe = [];
      e: {
        var ge = _p.get(t);
        if (ge !== void 0) {
          var Se = Nl,
            ot = t;
          switch (t) {
            case "keypress":
              if (Cl(r) === 0) break e;
            case "keydown":
            case "keyup":
              Se = Ny;
              break;
            case "focusin":
              ot = "focus", Se = Hu;
              break;
            case "focusout":
              ot = "blur", Se = Hu;
              break;
            case "beforeblur":
            case "afterblur":
              Se = Hu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Se = q0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Se = _y;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Se = Oy;
              break;
            case mp:
            case gp:
            case xp:
              Se = Sy;
              break;
            case vp:
              Se = Iy;
              break;
            case "scroll":
            case "scrollend":
              Se = xy;
              break;
            case "wheel":
              Se = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              Se = Ey;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Se = K0;
              break;
            case "toggle":
            case "beforetoggle":
              Se = Hy;
          }
          var St = (i & 4) !== 0,
            on = !St && (t === "scroll" || t === "scrollend"),
            re = St ? ge !== null ? ge + "Capture" : null : ge;
          St = [];
          for (var Q = de, fe; Q !== null;) {
            var Ue = Q;
            if (fe = Ue.stateNode, Ue = Ue.tag, Ue !== 5 && Ue !== 26 && Ue !== 27 || fe === null || re === null || (Ue = co(Q, re), Ue != null && St.push(ko(Q, Ue, fe))), on) break;
            Q = Q.return;
          }
          0 < St.length && (ge = new Se(ge, ot, null, r, Ce), Oe.push({
            event: ge,
            listeners: St
          }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (ge = t === "mouseover" || t === "pointerover", Se = t === "mouseout" || t === "pointerout", ge && r !== Uu && (ot = r.relatedTarget || r.fromElement) && (Tn(ot) || ot[bt])) break e;
          if ((Se || ge) && (ge = Ce.window === Ce ? Ce : (ge = Ce.ownerDocument) ? ge.defaultView || ge.parentWindow : window, Se ? (ot = r.relatedTarget || r.toElement, Se = de, ot = ot ? Tn(ot) : null, ot !== null && (on = c(ot), St = ot.tag, ot !== on || St !== 5 && St !== 27 && St !== 6) && (ot = null)) : (Se = null, ot = de), Se !== ot)) {
            if (St = q0, Ue = "onMouseLeave", re = "onMouseEnter", Q = "mouse", (t === "pointerout" || t === "pointerover") && (St = K0, Ue = "onPointerLeave", re = "onPointerEnter", Q = "pointer"), on = Se == null ? ge : K(Se), fe = ot == null ? ge : K(ot), ge = new St(Ue, Q + "leave", Se, r, Ce), ge.target = on, ge.relatedTarget = fe, Ue = null, Tn(Ce) === de && (St = new St(re, Q + "enter", ot, r, Ce), St.target = fe, St.relatedTarget = on, Ue = St), on = Ue, Se && ot) t: {
              for (St = Bb, re = Se, Q = ot, fe = 0, Ue = re; Ue; Ue = St(Ue)) fe++;
              Ue = 0;
              for (var pt = Q; pt; pt = St(pt)) Ue++;
              for (; 0 < fe - Ue;) re = St(re), fe--;
              for (; 0 < Ue - fe;) Q = St(Q), Ue--;
              for (; fe--;) {
                if (re === Q || Q !== null && re === Q.alternate) {
                  St = re;
                  break t;
                }
                re = St(re), Q = St(Q);
              }
              St = null;
            } else St = null;
            Se !== null && Gg(Oe, ge, Se, St, !1), ot !== null && on !== null && Gg(Oe, on, ot, St, !0);
          }
        }
        e: {
          if (ge = de ? K(de) : window, Se = ge.nodeName && ge.nodeName.toLowerCase(), Se === "select" || Se === "input" && ge.type === "file") var Kt = ap;else if (np(ge)) {
            if (rp) Kt = Ky;else {
              Kt = qy;
              var dt = Yy;
            }
          } else Se = ge.nodeName, !Se || Se.toLowerCase() !== "input" || ge.type !== "checkbox" && ge.type !== "radio" ? de && Lu(de.elementType) && (Kt = ap) : Kt = Zy;
          if (Kt && (Kt = Kt(t, de))) {
            ip(Oe, Kt, r, Ce);
            break e;
          }
          dt && dt(t, ge, de), t === "focusout" && de && ge.type === "number" && de.memoizedProps.value != null && Hn(ge, "number", ge.value);
        }
        switch (dt = de ? K(de) : window, t) {
          case "focusin":
            (np(dt) || dt.contentEditable === "true") && (ts = dt, Wu = de, vo = null);
            break;
          case "focusout":
            vo = Wu = ts = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yu = !1, hp(Oe, r, Ce);
            break;
          case "selectionchange":
            if (Jy) break;
          case "keydown":
          case "keyup":
            hp(Oe, r, Ce);
        }
        var Nt;
        if (Vu) e: {
          switch (t) {
            case "compositionstart":
              var Bt = "onCompositionStart";
              break e;
            case "compositionend":
              Bt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Bt = "onCompositionUpdate";
              break e;
          }
          Bt = void 0;
        } else es ? ep(t, r) && (Bt = "onCompositionEnd") : t === "keydown" && r.keyCode === 229 && (Bt = "onCompositionStart");
        Bt && (Q0 && r.locale !== "ko" && (es || Bt !== "onCompositionStart" ? Bt === "onCompositionEnd" && es && (Nt = W0()) : (Ba = Ce, zu = "value" in Ba ? Ba.value : Ba.textContent, es = !0)), dt = bc(de, Bt), 0 < dt.length && (Bt = new Z0(Bt, t, null, r, Ce), Oe.push({
          event: Bt,
          listeners: dt
        }), Nt ? Bt.data = Nt : (Nt = tp(r), Nt !== null && (Bt.data = Nt)))), (Nt = Vy ? ky(t, r) : jy(t, r)) && (Bt = bc(de, "onBeforeInput"), 0 < Bt.length && (dt = new Z0("onBeforeInput", "beforeinput", null, r, Ce), Oe.push({
          event: dt,
          listeners: Bt
        }), dt.data = Nt)), Pb(Oe, t, de, r, Ce);
      }
      Bg(Oe, i);
    });
  }
  function ko(t, i, r) {
    return {
      instance: t,
      listener: i,
      currentTarget: r
    };
  }
  function bc(t, i) {
    for (var r = i + "Capture", l = []; t !== null;) {
      var d = t,
        p = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || p === null || (d = co(t, r), d != null && l.unshift(ko(t, d, p)), d = co(t, i), d != null && l.push(ko(t, d, p))), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Bb(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gg(t, i, r, l, d) {
    for (var p = i._reactName, b = []; r !== null && r !== l;) {
      var R = r,
        X = R.alternate,
        de = R.stateNode;
      if (R = R.tag, X !== null && X === l) break;
      R !== 5 && R !== 26 && R !== 27 || de === null || (X = de, d ? (de = co(r, p), de != null && b.unshift(ko(r, de, X))) : d || (de = co(r, p), de != null && b.push(ko(r, de, X)))), r = r.return;
    }
    b.length !== 0 && t.push({
      event: i,
      listeners: b
    });
  }
  var Hb = /\r\n?/g,
    Gb = /\u0000|\uFFFD/g;
  function Vg(t) {
    return (typeof t == "string" ? t : "" + t).replace(Hb, `
`).replace(Gb, "");
  }
  function kg(t, i) {
    return i = Vg(i), Vg(t) === i;
  }
  function sn(t, i, r, l, d, p) {
    switch (r) {
      case "children":
        typeof l == "string" ? i === "body" || i === "textarea" && l === "" || Xi(t, l) : (typeof l == "number" || typeof l == "bigint") && i !== "body" && Xi(t, "" + l);
        break;
      case "className":
        Yt(t, "class", l);
        break;
      case "tabIndex":
        Yt(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yt(t, r, l);
        break;
      case "style":
        k0(t, l, p);
        break;
      case "data":
        if (i !== "object") {
          Yt(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (i !== "a" || r !== "href")) {
          t.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(r);
          break;
        }
        l = wl("" + l), t.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof p == "function" && (r === "formAction" ? (i !== "input" && sn(t, i, "name", d.name, d, null), sn(t, i, "formEncType", d.formEncType, d, null), sn(t, i, "formMethod", d.formMethod, d, null), sn(t, i, "formTarget", d.formTarget, d, null)) : (sn(t, i, "encType", d.encType, d, null), sn(t, i, "method", d.method, d, null), sn(t, i, "target", d.target, d, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(r);
          break;
        }
        l = wl("" + l), t.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (t.onclick = ta);
        break;
      case "onScroll":
        l != null && zt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && zt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(a(61));
          if (r = l.__html, r != null) {
            if (d.children != null) throw Error(a(60));
            t.innerHTML = r;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        r = wl("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, "" + l) : t.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, "") : t.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(r, l) : t.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(r, l) : t.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(r) : t.setAttribute(r, l);
        break;
      case "popover":
        zt("beforetoggle", t), zt("toggle", t), Dt(t, "popover", l);
        break;
      case "xlinkActuate":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Zt(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Zt(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Zt(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Zt(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Dt(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = my.get(r) || r, Dt(t, r, l));
    }
  }
  function _d(t, i, r, l, d, p) {
    switch (r) {
      case "style":
        k0(t, l, p);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(a(61));
          if (r = l.__html, r != null) {
            if (d.children != null) throw Error(a(60));
            t.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Xi(t, l) : (typeof l == "number" || typeof l == "bigint") && Xi(t, "" + l);
        break;
      case "onScroll":
        l != null && zt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && zt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = ta);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xe.hasOwnProperty(r)) e: {
          if (r[0] === "o" && r[1] === "n" && (d = r.endsWith("Capture"), i = r.slice(2, d ? r.length - 7 : void 0), p = t[xt] || null, p = p != null ? p[r] : null, typeof p == "function" && t.removeEventListener(i, p, d), typeof l == "function")) {
            typeof p != "function" && p !== null && (r in t ? t[r] = null : t.hasAttribute(r) && t.removeAttribute(r)), t.addEventListener(i, l, d);
            break e;
          }
          r in t ? t[r] = l : l === !0 ? t.setAttribute(r, "") : Dt(t, r, l);
        }
    }
  }
  function qn(t, i, r) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        zt("error", t), zt("load", t);
        var l = !1,
          d = !1,
          p;
        for (p in r) if (r.hasOwnProperty(p)) {
          var b = r[p];
          if (b != null) switch (p) {
            case "src":
              l = !0;
              break;
            case "srcSet":
              d = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(a(137, i));
            default:
              sn(t, i, p, b, r, null);
          }
        }
        d && sn(t, i, "srcSet", r.srcSet, r, null), l && sn(t, i, "src", r.src, r, null);
        return;
      case "input":
        zt("invalid", t);
        var R = p = b = d = null,
          X = null,
          de = null;
        for (l in r) if (r.hasOwnProperty(l)) {
          var Ce = r[l];
          if (Ce != null) switch (l) {
            case "name":
              d = Ce;
              break;
            case "type":
              b = Ce;
              break;
            case "checked":
              X = Ce;
              break;
            case "defaultChecked":
              de = Ce;
              break;
            case "value":
              p = Ce;
              break;
            case "defaultValue":
              R = Ce;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Ce != null) throw Error(a(137, i));
              break;
            default:
              sn(t, i, l, Ce, r, null);
          }
        }
        hn(t, p, R, X, de, b, d, !1);
        return;
      case "select":
        zt("invalid", t), l = b = p = null;
        for (d in r) if (r.hasOwnProperty(d) && (R = r[d], R != null)) switch (d) {
          case "value":
            p = R;
            break;
          case "defaultValue":
            b = R;
            break;
          case "multiple":
            l = R;
          default:
            sn(t, i, d, R, r, null);
        }
        i = p, r = b, t.multiple = !!l, i != null ? On(t, !!l, i, !1) : r != null && On(t, !!l, r, !0);
        return;
      case "textarea":
        zt("invalid", t), p = d = l = null;
        for (b in r) if (r.hasOwnProperty(b) && (R = r[b], R != null)) switch (b) {
          case "value":
            l = R;
            break;
          case "defaultValue":
            d = R;
            break;
          case "children":
            p = R;
            break;
          case "dangerouslySetInnerHTML":
            if (R != null) throw Error(a(91));
            break;
          default:
            sn(t, i, b, R, r, null);
        }
        jn(t, l, d, p);
        return;
      case "option":
        for (X in r) if (r.hasOwnProperty(X) && (l = r[X], l != null)) switch (X) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            sn(t, i, X, l, r, null);
        }
        return;
      case "dialog":
        zt("beforetoggle", t), zt("toggle", t), zt("cancel", t), zt("close", t);
        break;
      case "iframe":
      case "object":
        zt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Vo.length; l++) zt(Vo[l], t);
        break;
      case "image":
        zt("error", t), zt("load", t);
        break;
      case "details":
        zt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        zt("error", t), zt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (de in r) if (r.hasOwnProperty(de) && (l = r[de], l != null)) switch (de) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(137, i));
          default:
            sn(t, i, de, l, r, null);
        }
        return;
      default:
        if (Lu(i)) {
          for (Ce in r) r.hasOwnProperty(Ce) && (l = r[Ce], l !== void 0 && _d(t, i, Ce, l, r, void 0));
          return;
        }
    }
    for (R in r) r.hasOwnProperty(R) && (l = r[R], l != null && sn(t, i, R, l, r, null));
  }
  function Vb(t, i, r, l) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null,
          p = null,
          b = null,
          R = null,
          X = null,
          de = null,
          Ce = null;
        for (Se in r) {
          var Oe = r[Se];
          if (r.hasOwnProperty(Se) && Oe != null) switch (Se) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              X = Oe;
            default:
              l.hasOwnProperty(Se) || sn(t, i, Se, null, l, Oe);
          }
        }
        for (var ge in l) {
          var Se = l[ge];
          if (Oe = r[ge], l.hasOwnProperty(ge) && (Se != null || Oe != null)) switch (ge) {
            case "type":
              p = Se;
              break;
            case "name":
              d = Se;
              break;
            case "checked":
              de = Se;
              break;
            case "defaultChecked":
              Ce = Se;
              break;
            case "value":
              b = Se;
              break;
            case "defaultValue":
              R = Se;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Se != null) throw Error(a(137, i));
              break;
            default:
              Se !== Oe && sn(t, i, ge, Se, l, Oe);
          }
        }
        $i(t, b, R, X, de, Ce, p, d);
        return;
      case "select":
        Se = b = R = ge = null;
        for (p in r) if (X = r[p], r.hasOwnProperty(p) && X != null) switch (p) {
          case "value":
            break;
          case "multiple":
            Se = X;
          default:
            l.hasOwnProperty(p) || sn(t, i, p, null, l, X);
        }
        for (d in l) if (p = l[d], X = r[d], l.hasOwnProperty(d) && (p != null || X != null)) switch (d) {
          case "value":
            ge = p;
            break;
          case "defaultValue":
            R = p;
            break;
          case "multiple":
            b = p;
          default:
            p !== X && sn(t, i, d, p, l, X);
        }
        i = R, r = b, l = Se, ge != null ? On(t, !!r, ge, !1) : !!l != !!r && (i != null ? On(t, !!r, i, !0) : On(t, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        Se = ge = null;
        for (R in r) if (d = r[R], r.hasOwnProperty(R) && d != null && !l.hasOwnProperty(R)) switch (R) {
          case "value":
            break;
          case "children":
            break;
          default:
            sn(t, i, R, null, l, d);
        }
        for (b in l) if (d = l[b], p = r[b], l.hasOwnProperty(b) && (d != null || p != null)) switch (b) {
          case "value":
            ge = d;
            break;
          case "defaultValue":
            Se = d;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(a(91));
            break;
          default:
            d !== p && sn(t, i, b, d, l, p);
        }
        Gn(t, ge, Se);
        return;
      case "option":
        for (var ot in r) if (ge = r[ot], r.hasOwnProperty(ot) && ge != null && !l.hasOwnProperty(ot)) switch (ot) {
          case "selected":
            t.selected = !1;
            break;
          default:
            sn(t, i, ot, null, l, ge);
        }
        for (X in l) if (ge = l[X], Se = r[X], l.hasOwnProperty(X) && ge !== Se && (ge != null || Se != null)) switch (X) {
          case "selected":
            t.selected = ge && typeof ge != "function" && typeof ge != "symbol";
            break;
          default:
            sn(t, i, X, ge, l, Se);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var St in r) ge = r[St], r.hasOwnProperty(St) && ge != null && !l.hasOwnProperty(St) && sn(t, i, St, null, l, ge);
        for (de in l) if (ge = l[de], Se = r[de], l.hasOwnProperty(de) && ge !== Se && (ge != null || Se != null)) switch (de) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (ge != null) throw Error(a(137, i));
            break;
          default:
            sn(t, i, de, ge, l, Se);
        }
        return;
      default:
        if (Lu(i)) {
          for (var on in r) ge = r[on], r.hasOwnProperty(on) && ge !== void 0 && !l.hasOwnProperty(on) && _d(t, i, on, void 0, l, ge);
          for (Ce in l) ge = l[Ce], Se = r[Ce], !l.hasOwnProperty(Ce) || ge === Se || ge === void 0 && Se === void 0 || _d(t, i, Ce, ge, l, Se);
          return;
        }
    }
    for (var re in r) ge = r[re], r.hasOwnProperty(re) && ge != null && !l.hasOwnProperty(re) && sn(t, i, re, null, l, ge);
    for (Oe in l) ge = l[Oe], Se = r[Oe], !l.hasOwnProperty(Oe) || ge === Se || ge == null && Se == null || sn(t, i, Oe, ge, l, Se);
  }
  function jg(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function kb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, i = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var d = r[l],
          p = d.transferSize,
          b = d.initiatorType,
          R = d.duration;
        if (p && R && jg(b)) {
          for (b = 0, R = d.responseEnd, l += 1; l < r.length; l++) {
            var X = r[l],
              de = X.startTime;
            if (de > R) break;
            var Ce = X.transferSize,
              Oe = X.initiatorType;
            Ce && jg(Oe) && (X = X.responseEnd, b += Ce * (X < R ? 1 : (R - de) / (X - de)));
          }
          if (--l, i += 8 * (p + b) / (d.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return i / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var yd = null,
    bd = null;
  function Sc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Xg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wg(t, i) {
    if (t === 0) switch (i) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && i === "foreignObject" ? 0 : t;
  }
  function Sd(t, i) {
    return t === "textarea" || t === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.children == "bigint" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Md = null;
  function jb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Md ? !1 : (Md = t, !0) : (Md = null, !1);
  }
  var Yg = typeof setTimeout == "function" ? setTimeout : void 0,
    Xb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qg = typeof Promise == "function" ? Promise : void 0,
    Wb = typeof queueMicrotask == "function" ? queueMicrotask : typeof qg < "u" ? function (t) {
      return qg.resolve(null).then(t).catch(Yb);
    } : Yg;
  function Yb(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function nr(t) {
    return t === "head";
  }
  function Zg(t, i) {
    var r = i,
      l = 0;
    do {
      var d = r.nextSibling;
      if (t.removeChild(r), d && d.nodeType === 8) if (r = d.data, r === "/$" || r === "/&") {
        if (l === 0) {
          t.removeChild(d), Rs(i);
          return;
        }
        l--;
      } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") l++;else if (r === "html") jo(t.ownerDocument.documentElement);else if (r === "head") {
        r = t.ownerDocument.head, jo(r);
        for (var p = r.firstChild; p;) {
          var b = p.nextSibling,
            R = p.nodeName;
          p[fn] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && p.rel.toLowerCase() === "stylesheet" || r.removeChild(p), p = b;
        }
      } else r === "body" && jo(t.ownerDocument.body);
      r = d;
    } while (r);
    Rs(i);
  }
  function Kg(t, i) {
    var r = t;
    t = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? i ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (i ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8) if (r = l.data, r === "/$") {
        if (t === 0) break;
        t--;
      } else r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || t++;
      r = l;
    } while (r);
  }
  function Ed(t) {
    var i = t.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i;) {
      var r = i;
      switch (i = i.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ed(r), gn(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(r);
    }
  }
  function qb(t, i, r, l) {
    for (; t.nodeType === 1;) {
      var d = r;
      if (t.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[fn]) switch (i) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (p = t.getAttribute("rel"), p === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (p !== d.rel || t.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || t.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || t.getAttribute("title") !== (d.title == null ? null : d.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (p = t.getAttribute("src"), (p !== (d.src == null ? null : d.src) || t.getAttribute("type") !== (d.type == null ? null : d.type) || t.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && p && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (i === "input" && t.type === "hidden") {
        var p = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && t.getAttribute("name") === p) return t;
      } else return t;
      if (t = Ri(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Zb(t, i, r) {
    if (i === "") return null;
    for (; t.nodeType !== 3;) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !r || (t = Ri(t.nextSibling), t === null)) return null;
    return t;
  }
  function Qg(t, i) {
    for (; t.nodeType !== 8;) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = Ri(t.nextSibling), t === null)) return null;
    return t;
  }
  function Td(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ad(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Kb(t, i) {
    var r = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = i;else if (t.data !== "$?" || r.readyState !== "loading") i();else {
      var l = function () {
        i(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Ri(t) {
    for (; t != null; t = t.nextSibling) {
      var i = t.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = t.data, i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&" || i === "F!" || i === "F") break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return t;
  }
  var wd = null;
  function Jg(t) {
    t = t.nextSibling;
    for (var i = 0; t;) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "/$" || r === "/&") {
          if (i === 0) return Ri(t.nextSibling);
          i--;
        } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || i++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function $g(t) {
    t = t.previousSibling;
    for (var i = 0; t;) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (i === 0) return t;
          i--;
        } else r !== "/$" && r !== "/&" || i++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ex(t, i, r) {
    switch (i = Sc(r), t) {
      case "html":
        if (t = i.documentElement, !t) throw Error(a(452));
        return t;
      case "head":
        if (t = i.head, !t) throw Error(a(453));
        return t;
      case "body":
        if (t = i.body, !t) throw Error(a(454));
        return t;
      default:
        throw Error(a(451));
    }
  }
  function jo(t) {
    for (var i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
    gn(t);
  }
  var Ci = new Map(),
    tx = new Set();
  function Mc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var xa = Y.d;
  Y.d = {
    f: Qb,
    r: Jb,
    D: $b,
    C: e1,
    L: t1,
    m: n1,
    X: a1,
    S: i1,
    M: r1
  };
  function Qb() {
    var t = xa.f(),
      i = pc();
    return t || i;
  }
  function Jb(t) {
    var i = C(t);
    i !== null && i.tag === 5 && i.type === "form" ? vm(i) : xa.r(t);
  }
  var Ts = typeof document > "u" ? null : document;
  function nx(t, i, r) {
    var l = Ts;
    if (l && typeof i == "string" && i) {
      var d = dn(i);
      d = 'link[rel="' + t + '"][href="' + d + '"]', typeof r == "string" && (d += '[crossorigin="' + r + '"]'), tx.has(d) || (tx.add(d), t = {
        rel: t,
        crossOrigin: r,
        href: i
      }, l.querySelector(d) === null && (i = l.createElement("link"), qn(i, "link", t), le(i), l.head.appendChild(i)));
    }
  }
  function $b(t) {
    xa.D(t), nx("dns-prefetch", t, null);
  }
  function e1(t, i) {
    xa.C(t, i), nx("preconnect", t, i);
  }
  function t1(t, i, r) {
    xa.L(t, i, r);
    var l = Ts;
    if (l && t && i) {
      var d = 'link[rel="preload"][as="' + dn(i) + '"]';
      i === "image" && r && r.imageSrcSet ? (d += '[imagesrcset="' + dn(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (d += '[imagesizes="' + dn(r.imageSizes) + '"]')) : d += '[href="' + dn(t) + '"]';
      var p = d;
      switch (i) {
        case "style":
          p = As(t);
          break;
        case "script":
          p = ws(t);
      }
      Ci.has(p) || (t = g({
        rel: "preload",
        href: i === "image" && r && r.imageSrcSet ? void 0 : t,
        as: i
      }, r), Ci.set(p, t), l.querySelector(d) !== null || i === "style" && l.querySelector(Xo(p)) || i === "script" && l.querySelector(Wo(p)) || (i = l.createElement("link"), qn(i, "link", t), le(i), l.head.appendChild(i)));
    }
  }
  function n1(t, i) {
    xa.m(t, i);
    var r = Ts;
    if (r && t) {
      var l = i && typeof i.as == "string" ? i.as : "script",
        d = 'link[rel="modulepreload"][as="' + dn(l) + '"][href="' + dn(t) + '"]',
        p = d;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = ws(t);
      }
      if (!Ci.has(p) && (t = g({
        rel: "modulepreload",
        href: t
      }, i), Ci.set(p, t), r.querySelector(d) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Wo(p))) return;
        }
        l = r.createElement("link"), qn(l, "link", t), le(l), r.head.appendChild(l);
      }
    }
  }
  function i1(t, i, r) {
    xa.S(t, i, r);
    var l = Ts;
    if (l && t) {
      var d = ce(l).hoistableStyles,
        p = As(t);
      i = i || "default";
      var b = d.get(p);
      if (!b) {
        var R = {
          loading: 0,
          preload: null
        };
        if (b = l.querySelector(Xo(p))) R.loading = 5;else {
          t = g({
            rel: "stylesheet",
            href: t,
            "data-precedence": i
          }, r), (r = Ci.get(p)) && Rd(t, r);
          var X = b = l.createElement("link");
          le(X), qn(X, "link", t), X._p = new Promise(function (de, Ce) {
            X.onload = de, X.onerror = Ce;
          }), X.addEventListener("load", function () {
            R.loading |= 1;
          }), X.addEventListener("error", function () {
            R.loading |= 2;
          }), R.loading |= 4, Ec(b, i, l);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: R
        }, d.set(p, b);
      }
    }
  }
  function a1(t, i) {
    xa.X(t, i);
    var r = Ts;
    if (r && t) {
      var l = ce(r).hoistableScripts,
        d = ws(t),
        p = l.get(d);
      p || (p = r.querySelector(Wo(d)), p || (t = g({
        src: t,
        async: !0
      }, i), (i = Ci.get(d)) && Cd(t, i), p = r.createElement("script"), le(p), qn(p, "link", t), r.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, l.set(d, p));
    }
  }
  function r1(t, i) {
    xa.M(t, i);
    var r = Ts;
    if (r && t) {
      var l = ce(r).hoistableScripts,
        d = ws(t),
        p = l.get(d);
      p || (p = r.querySelector(Wo(d)), p || (t = g({
        src: t,
        async: !0,
        type: "module"
      }, i), (i = Ci.get(d)) && Cd(t, i), p = r.createElement("script"), le(p), qn(p, "link", t), r.head.appendChild(p)), p = {
        type: "script",
        instance: p,
        count: 1,
        state: null
      }, l.set(d, p));
    }
  }
  function ix(t, i, r, l) {
    var d = (d = te.current) ? Mc(d) : null;
    if (!d) throw Error(a(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (i = As(r.href), r = ce(d).hoistableStyles, l = r.get(i), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(i, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          t = As(r.href);
          var p = ce(d).hoistableStyles,
            b = p.get(t);
          if (b || (d = d.ownerDocument || d, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, p.set(t, b), (p = d.querySelector(Xo(t))) && !p._p && (b.instance = p, b.state.loading = 5), Ci.has(t) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Ci.set(t, r), p || s1(d, t, r, b.state))), i && l === null) throw Error(a(528, ""));
          return b;
        }
        if (i && l !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return i = r.async, r = r.src, typeof r == "string" && i && typeof i != "function" && typeof i != "symbol" ? (i = ws(r), r = ce(d).hoistableScripts, l = r.get(i), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(i, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(a(444, t));
    }
  }
  function As(t) {
    return 'href="' + dn(t) + '"';
  }
  function Xo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ax(t) {
    return g({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function s1(t, i, r, l) {
    t.querySelector('link[rel="preload"][as="style"][' + i + "]") ? l.loading = 1 : (i = t.createElement("link"), l.preload = i, i.addEventListener("load", function () {
      return l.loading |= 1;
    }), i.addEventListener("error", function () {
      return l.loading |= 2;
    }), qn(i, "link", r), le(i), t.head.appendChild(i));
  }
  function ws(t) {
    return '[src="' + dn(t) + '"]';
  }
  function Wo(t) {
    return "script[async]" + t;
  }
  function rx(t, i, r) {
    if (i.count++, i.instance === null) switch (i.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + dn(r.href) + '"]');
        if (l) return i.instance = l, le(l), l;
        var d = g({}, r, {
          "data-href": r.href,
          "data-precedence": r.precedence,
          href: null,
          precedence: null
        });
        return l = (t.ownerDocument || t).createElement("style"), le(l), qn(l, "style", d), Ec(l, r.precedence, t), i.instance = l;
      case "stylesheet":
        d = As(r.href);
        var p = t.querySelector(Xo(d));
        if (p) return i.state.loading |= 4, i.instance = p, le(p), p;
        l = ax(r), (d = Ci.get(d)) && Rd(l, d), p = (t.ownerDocument || t).createElement("link"), le(p);
        var b = p;
        return b._p = new Promise(function (R, X) {
          b.onload = R, b.onerror = X;
        }), qn(p, "link", l), i.state.loading |= 4, Ec(p, r.precedence, t), i.instance = p;
      case "script":
        return p = ws(r.src), (d = t.querySelector(Wo(p))) ? (i.instance = d, le(d), d) : (l = r, (d = Ci.get(p)) && (l = g({}, r), Cd(l, d)), t = t.ownerDocument || t, d = t.createElement("script"), le(d), qn(d, "link", l), t.head.appendChild(d), i.instance = d);
      case "void":
        return null;
      default:
        throw Error(a(443, i.type));
    } else i.type === "stylesheet" && (i.state.loading & 4) === 0 && (l = i.instance, i.state.loading |= 4, Ec(l, r.precedence, t));
    return i.instance;
  }
  function Ec(t, i, r) {
    for (var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), d = l.length ? l[l.length - 1] : null, p = d, b = 0; b < l.length; b++) {
      var R = l[b];
      if (R.dataset.precedence === i) p = R;else if (p !== d) break;
    }
    p ? p.parentNode.insertBefore(t, p.nextSibling) : (i = r.nodeType === 9 ? r.head : r, i.insertBefore(t, i.firstChild));
  }
  function Rd(t, i) {
    t.crossOrigin == null && (t.crossOrigin = i.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = i.referrerPolicy), t.title == null && (t.title = i.title);
  }
  function Cd(t, i) {
    t.crossOrigin == null && (t.crossOrigin = i.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = i.referrerPolicy), t.integrity == null && (t.integrity = i.integrity);
  }
  var Tc = null;
  function sx(t, i, r) {
    if (Tc === null) {
      var l = new Map(),
        d = Tc = new Map();
      d.set(r, l);
    } else d = Tc, l = d.get(r), l || (l = new Map(), d.set(r, l));
    if (l.has(t)) return l;
    for (l.set(t, null), r = r.getElementsByTagName(t), d = 0; d < r.length; d++) {
      var p = r[d];
      if (!(p[fn] || p[lt] || t === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = p.getAttribute(i) || "";
        b = t + b;
        var R = l.get(b);
        R ? R.push(p) : l.set(b, [p]);
      }
    }
    return l;
  }
  function ox(t, i, r) {
    t = t.ownerDocument || t, t.head.insertBefore(r, i === "title" ? t.querySelector("head > title") : null);
  }
  function o1(t, i, r) {
    if (r === 1 || i.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof i.precedence != "string" || typeof i.href != "string" || i.href === "") break;
        return !0;
      case "link":
        if (typeof i.rel != "string" || typeof i.href != "string" || i.href === "" || i.onLoad || i.onError) break;
        switch (i.rel) {
          case "stylesheet":
            return t = i.disabled, typeof i.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (i.async && typeof i.async != "function" && typeof i.async != "symbol" && !i.onLoad && !i.onError && i.src && typeof i.src == "string") return !0;
    }
    return !1;
  }
  function lx(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function l1(t, i, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var d = As(l.href),
          p = i.querySelector(Xo(d));
        if (p) {
          i = p._p, i !== null && typeof i == "object" && typeof i.then == "function" && (t.count++, t = Ac.bind(t), i.then(t, t)), r.state.loading |= 4, r.instance = p, le(p);
          return;
        }
        p = i.ownerDocument || i, l = ax(l), (d = Ci.get(d)) && Rd(l, d), p = p.createElement("link"), le(p);
        var b = p;
        b._p = new Promise(function (R, X) {
          b.onload = R, b.onerror = X;
        }), qn(p, "link", l), r.instance = p;
      }
      t.stylesheets === null && (t.stylesheets = new Map()), t.stylesheets.set(r, i), (i = r.state.preload) && (r.state.loading & 3) === 0 && (t.count++, r = Ac.bind(t), i.addEventListener("load", r), i.addEventListener("error", r));
    }
  }
  var Dd = 0;
  function c1(t, i) {
    return t.stylesheets && t.count === 0 && Rc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (r) {
      var l = setTimeout(function () {
        if (t.stylesheets && Rc(t, t.stylesheets), t.unsuspend) {
          var p = t.unsuspend;
          t.unsuspend = null, p();
        }
      }, 6e4 + i);
      0 < t.imgBytes && Dd === 0 && (Dd = 62500 * kb());
      var d = setTimeout(function () {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Rc(t, t.stylesheets), t.unsuspend)) {
          var p = t.unsuspend;
          t.unsuspend = null, p();
        }
      }, (t.imgBytes > Dd ? 50 : 800) + i);
      return t.unsuspend = r, function () {
        t.unsuspend = null, clearTimeout(l), clearTimeout(d);
      };
    } : null;
  }
  function Ac() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rc(this, this.stylesheets);else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var wc = null;
  function Rc(t, i) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, wc = new Map(), i.forEach(u1, t), wc = null, Ac.call(t));
  }
  function u1(t, i) {
    if (!(i.state.loading & 4)) {
      var r = wc.get(t);
      if (r) var l = r.get(null);else {
        r = new Map(), wc.set(t, r);
        for (var d = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < d.length; p++) {
          var b = d[p];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (r.set(b.dataset.precedence, b), l = b);
        }
        l && r.set(null, l);
      }
      d = i.instance, b = d.getAttribute("data-precedence"), p = r.get(b) || l, p === l && r.set(null, d), r.set(b, d), this.count++, l = Ac.bind(this), d.addEventListener("load", l), d.addEventListener("error", l), p ? p.parentNode.insertBefore(d, p.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(d, t.firstChild)), i.state.loading |= 4;
    }
  }
  var Yo = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function f1(t, i, r, l, d, p, b, R, X) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt(0), this.hiddenUpdates = mt(null), this.identifierPrefix = l, this.onUncaughtError = d, this.onCaughtError = p, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = X, this.incompleteTransitions = new Map();
  }
  function cx(t, i, r, l, d, p, b, R, X, de, Ce, Oe) {
    return t = new f1(t, i, r, b, X, de, Ce, Oe, R), i = 1, p === !0 && (i |= 24), p = di(3, null, null, i), t.current = p, p.stateNode = t, i = cf(), i.refCount++, t.pooledCache = i, i.refCount++, p.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: i
    }, hf(p), t;
  }
  function ux(t) {
    return t ? (t = as, t) : as;
  }
  function fx(t, i, r, l, d, p) {
    d = ux(d), l.context === null ? l.context = d : l.pendingContext = d, l = Xa(i), l.payload = {
      element: r
    }, p = p === void 0 ? null : p, p !== null && (l.callback = p), r = Wa(t, l, i), r !== null && (li(r, t, i), To(r, t, i));
  }
  function dx(t, i) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var r = t.retryLane;
      t.retryLane = r !== 0 && r < i ? r : i;
    }
  }
  function Nd(t, i) {
    dx(t, i), (t = t.alternate) && dx(t, i);
  }
  function hx(t) {
    if (t.tag === 13 || t.tag === 31) {
      var i = Sr(t, 67108864);
      i !== null && li(i, t, 67108864), Nd(t, 67108864);
    }
  }
  function px(t) {
    if (t.tag === 13 || t.tag === 31) {
      var i = xi();
      i = Tt(i);
      var r = Sr(t, i);
      r !== null && li(r, t, i), Nd(t, i);
    }
  }
  var Cc = !0;
  function d1(t, i, r, l) {
    var d = I.T;
    I.T = null;
    var p = Y.p;
    try {
      Y.p = 2, Ld(t, i, r, l);
    } finally {
      Y.p = p, I.T = d;
    }
  }
  function h1(t, i, r, l) {
    var d = I.T;
    I.T = null;
    var p = Y.p;
    try {
      Y.p = 8, Ld(t, i, r, l);
    } finally {
      Y.p = p, I.T = d;
    }
  }
  function Ld(t, i, r, l) {
    if (Cc) {
      var d = Ud(l);
      if (d === null) vd(t, i, l, Dc, r), gx(t, l);else if (m1(d, t, i, r, l)) l.stopPropagation();else if (gx(t, l), i & 4 && -1 < p1.indexOf(t)) {
        for (; d !== null;) {
          var p = C(d);
          if (p !== null) switch (p.tag) {
            case 3:
              if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                var b = Ne(p.pendingLanes);
                if (b !== 0) {
                  var R = p;
                  for (R.pendingLanes |= 2, R.entangledLanes |= 2; b;) {
                    var X = 1 << 31 - Ve(b);
                    R.entanglements[1] |= X, b &= ~X;
                  }
                  Zi(p), ($t & 6) === 0 && (dc = T() + 500, Go(0));
                }
              }
              break;
            case 31:
            case 13:
              R = Sr(p, 2), R !== null && li(R, p, 2), pc(), Nd(p, 2);
          }
          if (p = Ud(l), p === null && vd(t, i, l, Dc, r), p === d) break;
          d = p;
        }
        d !== null && l.stopPropagation();
      } else vd(t, i, l, null, r);
    }
  }
  function Ud(t) {
    return t = Ou(t), Od(t);
  }
  var Dc = null;
  function Od(t) {
    if (Dc = null, t = Tn(t), t !== null) {
      var i = c(t);
      if (i === null) t = null;else {
        var r = i.tag;
        if (r === 13) {
          if (t = u(i), t !== null) return t;
          t = null;
        } else if (r === 31) {
          if (t = f(i), t !== null) return t;
          t = null;
        } else if (r === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
          t = null;
        } else i !== t && (t = null);
      }
    }
    return Dc = t, null;
  }
  function mx(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($()) {
          case ve:
            return 2;
          case ue:
            return 8;
          case se:
          case Ye:
            return 32;
          case ke:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Pd = !1,
    ir = null,
    ar = null,
    rr = null,
    qo = new Map(),
    Zo = new Map(),
    sr = [],
    p1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function gx(t, i) {
    switch (t) {
      case "focusin":
      case "focusout":
        ir = null;
        break;
      case "dragenter":
      case "dragleave":
        ar = null;
        break;
      case "mouseover":
      case "mouseout":
        rr = null;
        break;
      case "pointerover":
      case "pointerout":
        qo.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zo.delete(i.pointerId);
    }
  }
  function Ko(t, i, r, l, d, p) {
    return t === null || t.nativeEvent !== p ? (t = {
      blockedOn: i,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: p,
      targetContainers: [d]
    }, i !== null && (i = C(i), i !== null && hx(i)), t) : (t.eventSystemFlags |= l, i = t.targetContainers, d !== null && i.indexOf(d) === -1 && i.push(d), t);
  }
  function m1(t, i, r, l, d) {
    switch (i) {
      case "focusin":
        return ir = Ko(ir, t, i, r, l, d), !0;
      case "dragenter":
        return ar = Ko(ar, t, i, r, l, d), !0;
      case "mouseover":
        return rr = Ko(rr, t, i, r, l, d), !0;
      case "pointerover":
        var p = d.pointerId;
        return qo.set(p, Ko(qo.get(p) || null, t, i, r, l, d)), !0;
      case "gotpointercapture":
        return p = d.pointerId, Zo.set(p, Ko(Zo.get(p) || null, t, i, r, l, d)), !0;
    }
    return !1;
  }
  function xx(t) {
    var i = Tn(t.target);
    if (i !== null) {
      var r = c(i);
      if (r !== null) {
        if (i = r.tag, i === 13) {
          if (i = u(r), i !== null) {
            t.blockedOn = i, De(t.priority, function () {
              px(r);
            });
            return;
          }
        } else if (i === 31) {
          if (i = f(r), i !== null) {
            t.blockedOn = i, De(t.priority, function () {
              px(r);
            });
            return;
          }
        } else if (i === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Nc(t) {
    if (t.blockedOn !== null) return !1;
    for (var i = t.targetContainers; 0 < i.length;) {
      var r = Ud(t.nativeEvent);
      if (r === null) {
        r = t.nativeEvent;
        var l = new r.constructor(r.type, r);
        Uu = l, r.target.dispatchEvent(l), Uu = null;
      } else return i = C(r), i !== null && hx(i), t.blockedOn = r, !1;
      i.shift();
    }
    return !0;
  }
  function vx(t, i, r) {
    Nc(t) && r.delete(i);
  }
  function g1() {
    Pd = !1, ir !== null && Nc(ir) && (ir = null), ar !== null && Nc(ar) && (ar = null), rr !== null && Nc(rr) && (rr = null), qo.forEach(vx), Zo.forEach(vx);
  }
  function Lc(t, i) {
    t.blockedOn === i && (t.blockedOn = null, Pd || (Pd = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, g1)));
  }
  var Uc = null;
  function _x(t) {
    Uc !== t && (Uc = t, s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
      Uc === t && (Uc = null);
      for (var i = 0; i < t.length; i += 3) {
        var r = t[i],
          l = t[i + 1],
          d = t[i + 2];
        if (typeof l != "function") {
          if (Od(l || r) === null) continue;
          break;
        }
        var p = C(r);
        p !== null && (t.splice(i, 3), i -= 3, Uf(p, {
          pending: !0,
          data: d,
          method: r.method,
          action: l
        }, l, d));
      }
    }));
  }
  function Rs(t) {
    function i(X) {
      return Lc(X, t);
    }
    ir !== null && Lc(ir, t), ar !== null && Lc(ar, t), rr !== null && Lc(rr, t), qo.forEach(i), Zo.forEach(i);
    for (var r = 0; r < sr.length; r++) {
      var l = sr[r];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < sr.length && (r = sr[0], r.blockedOn === null);) xx(r), r.blockedOn === null && sr.shift();
    if (r = (t.ownerDocument || t).$$reactFormReplay, r != null) for (l = 0; l < r.length; l += 3) {
      var d = r[l],
        p = r[l + 1],
        b = d[xt] || null;
      if (typeof p == "function") b || _x(r);else if (b) {
        var R = null;
        if (p && p.hasAttribute("formAction")) {
          if (d = p, b = p[xt] || null) R = b.formAction;else if (Od(d) !== null) continue;
        } else R = b.action;
        typeof R == "function" ? r[l + 1] = R : (r.splice(l, 3), l -= 3), _x(r);
      }
    }
  }
  function yx() {
    function t(p) {
      p.canIntercept && p.info === "react-transition" && p.intercept({
        handler: function () {
          return new Promise(function (b) {
            return d = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function i() {
      d !== null && (d(), d = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var p = navigation.currentEntry;
        p && p.url != null && navigation.navigate(p.url, {
          state: p.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        d = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", i), navigation.addEventListener("navigateerror", i), setTimeout(r, 100), function () {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", i), navigation.removeEventListener("navigateerror", i), d !== null && (d(), d = null);
      };
    }
  }
  function Id(t) {
    this._internalRoot = t;
  }
  Oc.prototype.render = Id.prototype.render = function (t) {
    var i = this._internalRoot;
    if (i === null) throw Error(a(409));
    var r = i.current,
      l = xi();
    fx(r, l, t, i, null, null);
  }, Oc.prototype.unmount = Id.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var i = t.containerInfo;
      fx(t.current, 2, null, t, null, null), pc(), i[bt] = null;
    }
  };
  function Oc(t) {
    this._internalRoot = t;
  }
  Oc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var i = xe();
      t = {
        blockedOn: null,
        target: t,
        priority: i
      };
      for (var r = 0; r < sr.length && i !== 0 && i < sr[r].priority; r++);
      sr.splice(r, 0, t), r === 0 && xx(t);
    }
  };
  var bx = e.version;
  if (bx !== "19.2.0") throw Error(a(527, bx, "19.2.0"));
  Y.findDOMNode = function (t) {
    var i = t._reactInternals;
    if (i === void 0) throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","), Error(a(268, t)));
    return t = h(i), t = t !== null ? x(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var x1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pc.isDisabled && Pc.supportsFiber) try {
      Re = Pc.inject(x1), oe = Pc;
    } catch {}
  }
  return Jo.createRoot = function (t, i) {
    if (!o(t)) throw Error(a(299));
    var r = !1,
      l = "",
      d = Rm,
      p = Cm,
      b = Dm;
    return i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (l = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (p = i.onCaughtError), i.onRecoverableError !== void 0 && (b = i.onRecoverableError)), i = cx(t, 1, !1, null, null, r, l, null, d, p, b, yx), t[bt] = i.current, xd(t), new Id(i);
  }, Jo.hydrateRoot = function (t, i, r) {
    if (!o(t)) throw Error(a(299));
    var l = !1,
      d = "",
      p = Rm,
      b = Cm,
      R = Dm,
      X = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (d = r.identifierPrefix), r.onUncaughtError !== void 0 && (p = r.onUncaughtError), r.onCaughtError !== void 0 && (b = r.onCaughtError), r.onRecoverableError !== void 0 && (R = r.onRecoverableError), r.formState !== void 0 && (X = r.formState)), i = cx(t, 1, !0, i, r ?? null, l, d, X, p, b, R, yx), i.context = ux(null), r = i.current, l = xi(), l = Tt(l), d = Xa(l), d.callback = null, Wa(r, d, l), r = l, i.current.lanes = r, Gt(i, r), Zi(i), t[bt] = i.current, xd(t), new Oc(i);
  }, Jo.version = "19.2.0", Jo;
}
var Nx;
function w1() {
  if (Nx) return Bd.exports;
  Nx = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
    } catch (e) {
      console.error(e);
    }
  }
  return s(), Bd.exports = A1(), Bd.exports;
}
var R1 = w1();
const ReactDOM = g_(R1); /**
                         * @license lucide-react v0.554.0 - ISC
                         *
                         * This source code is licensed under the ISC license.
                         * See the LICENSE file in the root directory of this source tree.
                         */
export { Mu, React, ReactDOM, ReactDefault, jsxRuntime };
//# sourceMappingURL=react-runtime.js.map
