import { Mu, React } from "./react-runtime.js";
const At = s => typeof s == "string";
const $o = () => {
  let s, e;
  const n = new Promise((a, o) => {
    s = a, e = o;
  });
  return n.resolve = s, n.reject = e, n;
};
const Ux = s => s == null ? "" : "" + s;
const lS = (s, e, n) => {
  s.forEach(a => {
    e[a] && (n[a] = e[a]);
  });
};
const cS = /###/g;
const Ox = s => s && s.indexOf("###") > -1 ? s.replace(cS, ".") : s;
const Px = s => !s || At(s);
const fl = (s, e, n) => {
  const a = At(e) ? e.split(".") : e;
  let o = 0;
  for (; o < a.length - 1;) {
    if (Px(s)) return {};
    const c = Ox(a[o]);
    !s[c] && n && (s[c] = new n()), Object.prototype.hasOwnProperty.call(s, c) ? s = s[c] : s = {}, ++o;
  }
  return Px(s) ? {} : {
    obj: s,
    k: Ox(a[o])
  };
};
const Ix = (s, e, n) => {
  const {
    obj: a,
    k: o
  } = fl(s, e, Object);
  if (a !== void 0 || e.length === 1) {
    a[o] = n;
    return;
  }
  let c = e[e.length - 1],
    u = e.slice(0, e.length - 1),
    f = fl(s, u, Object);
  for (; f.obj === void 0 && u.length;) c = `${u[u.length - 1]}.${c}`, u = u.slice(0, u.length - 1), f = fl(s, u, Object), f != null && f.obj && typeof f.obj[`${f.k}.${c}`] < "u" && (f.obj = void 0);
  f.obj[`${f.k}.${c}`] = n;
};
const uS = (s, e, n, a) => {
  const {
    obj: o,
    k: c
  } = fl(s, e, Object);
  o[c] = o[c] || [], o[c].push(n);
};
const mu = (s, e) => {
  const {
    obj: n,
    k: a
  } = fl(s, e);
  if (n && Object.prototype.hasOwnProperty.call(n, a)) return n[a];
};
const fS = (s, e, n) => {
  const a = mu(s, n);
  return a !== void 0 ? a : mu(e, n);
};
const b_ = (s, e, n) => {
  for (const a in e) a !== "__proto__" && a !== "constructor" && (a in s ? At(s[a]) || s[a] instanceof String || At(e[a]) || e[a] instanceof String ? n && (s[a] = e[a]) : b_(s[a], e[a], n) : s[a] = e[a]);
  return s;
};
const Cs = s => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var dS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const hS = s => At(s) ? s.replace(/[&<>"'\/]/g, e => dS[e]) : s;
class pS {
  constructor(e) {
    this.capacity = e, this.regExpMap = new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0) return n;
    const a = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, a), this.regExpQueue.push(e), a;
  }
}
const mS = [" ", ",", "?", "!", ";"];
const gS = new pS(20);
const xS = (s, e, n) => {
  e = e || "", n = n || "";
  const a = mS.filter(u => e.indexOf(u) < 0 && n.indexOf(u) < 0);
  if (a.length === 0) return !0;
  const o = gS.getRegExp(`(${a.map(u => u === "?" ? "\\?" : u).join("|")})`);
  let c = !o.test(s);
  if (!c) {
    const u = s.indexOf(n);
    u > 0 && !o.test(s.substring(0, u)) && (c = !0);
  }
  return c;
};
const Oh = (s, e, n = ".") => {
  if (!s) return;
  if (s[e]) return Object.prototype.hasOwnProperty.call(s, e) ? s[e] : void 0;
  const a = e.split(n);
  let o = s;
  for (let c = 0; c < a.length;) {
    if (!o || typeof o != "object") return;
    let u,
      f = "";
    for (let m = c; m < a.length; ++m) if (m !== c && (f += n), f += a[m], u = o[f], u !== void 0) {
      if (["string", "number", "boolean"].indexOf(typeof u) > -1 && m < a.length - 1) continue;
      c += m - c + 1;
      break;
    }
    o = u;
  }
  return o;
};
const ml = s => s == null ? void 0 : s.replace("_", "-");
const vS = {
  type: "logger",
  log(s) {
    this.output("log", s);
  },
  warn(s) {
    this.output("warn", s);
  },
  error(s) {
    this.output("error", s);
  },
  output(s, e) {
    var n, a;
    (a = (n = console == null ? void 0 : console[s]) == null ? void 0 : n.apply) == null || a.call(n, console, e);
  }
};
class gu {
  constructor(e, n = {}) {
    this.init(e, n);
  }
  init(e, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = e || vS, this.options = n, this.debug = n.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, a, o) {
    return o && !this.debug ? null : (At(e[0]) && (e[0] = `${a}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new gu(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new gu(this.logger, e);
  }
}
var Qi = new gu();
class Au {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return e.split(" ").forEach(a => {
      this.observers[a] || (this.observers[a] = new Map());
      const o = this.observers[a].get(n) || 0;
      this.observers[a].set(n, o + 1);
    }), this;
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e, ...n) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([o, c]) => {
      for (let u = 0; u < c; u++) o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, c]) => {
      for (let u = 0; u < c; u++) o.apply(o, [e, ...n]);
    });
  }
}
class zx extends Au {
  constructor(e, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, a, o = {}) {
    var h, x;
    const c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      u = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let f;
    e.indexOf(".") > -1 ? f = e.split(".") : (f = [e, n], a && (Array.isArray(a) ? f.push(...a) : At(a) && c ? f.push(...a.split(c)) : f.push(a)));
    const m = mu(this.data, f);
    return !m && !n && !a && e.indexOf(".") > -1 && (e = f[0], n = f[1], a = f.slice(2).join(".")), m || !u || !At(a) ? m : Oh((x = (h = this.data) == null ? void 0 : h[e]) == null ? void 0 : x[n], a, c);
  }
  addResource(e, n, a, o, c = {
    silent: !1
  }) {
    const u = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let f = [e, n];
    a && (f = f.concat(u ? a.split(u) : a)), e.indexOf(".") > -1 && (f = e.split("."), o = n, n = f[1]), this.addNamespaces(n), Ix(this.data, f, o), c.silent || this.emit("added", e, n, a, o);
  }
  addResources(e, n, a, o = {
    silent: !1
  }) {
    for (const c in a) (At(a[c]) || Array.isArray(a[c])) && this.addResource(e, n, c, a[c], {
      silent: !0
    });
    o.silent || this.emit("added", e, n, a);
  }
  addResourceBundle(e, n, a, o, c, u = {
    silent: !1,
    skipCopy: !1
  }) {
    let f = [e, n];
    e.indexOf(".") > -1 && (f = e.split("."), o = a, a = n, n = f[1]), this.addNamespaces(n);
    let m = mu(this.data, f) || {};
    u.skipCopy || (a = JSON.parse(JSON.stringify(a))), o ? b_(m, a, c) : m = {
      ...m,
      ...a
    }, Ix(this.data, f, m), u.silent || this.emit("added", e, n, a);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return n || (n = this.options.defaultNS), this.getResource(e, n);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!(n && Object.keys(n) || []).find(o => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var S_ = {
  processors: {},
  addPostProcessor(s) {
    this.processors[s.name] = s;
  },
  handle(s, e, n, a, o) {
    return s.forEach(c => {
      var u;
      e = ((u = this.processors[c]) == null ? void 0 : u.process(e, n, a, o)) ?? e;
    }), e;
  }
};
const M_ = Symbol("i18next/PATH_KEY");
function _S() {
  const s = [],
    e = Object.create(null);
  let n;
  return e.get = (a, o) => {
    var c;
    return (c = n == null ? void 0 : n.revoke) == null || c.call(n), o === M_ ? s : (s.push(o), n = Proxy.revocable(a, e), n.proxy);
  }, Proxy.revocable(Object.create(null), e).proxy;
}
function Ph(s, e) {
  const {
    [M_]: n
  } = s(_S());
  return n.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const Fx = {};
const jd = s => !At(s) && typeof s != "boolean" && typeof s != "number";
class xu extends Au {
  constructor(e, n = {}) {
    super(), lS(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Qi.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, n = {
    interpolation: {}
  }) {
    const a = {
      ...n
    };
    if (e == null) return !1;
    const o = this.resolve(e, a);
    if ((o == null ? void 0 : o.res) === void 0) return !1;
    const c = jd(o.res);
    return !(a.returnObjects === !1 && c);
  }
  extractFromKey(e, n) {
    let a = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let c = n.ns || this.options.defaultNS || [];
    const u = a && e.indexOf(a) > -1,
      f = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !xS(e, a, o);
    if (u && !f) {
      const m = e.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return {
        key: e,
        namespaces: At(c) ? [c] : c
      };
      const h = e.split(a);
      (a !== o || a === o && this.options.ns.indexOf(h[0]) > -1) && (c = h.shift()), e = h.join(o);
    }
    return {
      key: e,
      namespaces: At(c) ? [c] : c
    };
  }
  translate(e, n, a) {
    let o = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), e == null) return "";
    typeof e == "function" && (e = Ph(e, {
      ...this.options,
      ...o
    })), Array.isArray(e) || (e = [String(e)]);
    const c = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails,
      u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      {
        key: f,
        namespaces: m
      } = this.extractFromKey(e[e.length - 1], o),
      h = m[m.length - 1];
    let x = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    x === void 0 && (x = ":");
    const g = o.lng || this.language,
      v = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((g == null ? void 0 : g.toLowerCase()) === "cimode") return v ? c ? {
      res: `${h}${x}${f}`,
      usedKey: f,
      exactUsedKey: f,
      usedLng: g,
      usedNS: h,
      usedParams: this.getUsedParamsDetails(o)
    } : `${h}${x}${f}` : c ? {
      res: f,
      usedKey: f,
      exactUsedKey: f,
      usedLng: g,
      usedNS: h,
      usedParams: this.getUsedParamsDetails(o)
    } : f;
    const y = this.resolve(e, o);
    let M = y == null ? void 0 : y.res;
    const E = (y == null ? void 0 : y.usedKey) || f,
      S = (y == null ? void 0 : y.exactUsedKey) || f,
      _ = ["[object Number]", "[object Function]", "[object RegExp]"],
      L = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      D = !this.i18nFormat || this.i18nFormat.handleAsObject,
      O = o.count !== void 0 && !At(o.count),
      F = xu.hasDefaultValue(o),
      P = O ? this.pluralResolver.getSuffix(g, o.count, o) : "",
      B = o.ordinal && O ? this.pluralResolver.getSuffix(g, o.count, {
        ordinal: !1
      }) : "",
      q = O && !o.ordinal && o.count === 0,
      w = q && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${P}`] || o[`defaultValue${B}`] || o.defaultValue;
    let A = M;
    D && !M && F && (A = w);
    const H = jd(A),
      k = Object.prototype.toString.apply(A);
    if (D && A && H && _.indexOf(k) < 0 && !(At(L) && Array.isArray(A))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const W = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, A, {
          ...o,
          ns: m
        }) : `key '${f} (${this.language})' returned an object instead of string.`;
        return c ? (y.res = W, y.usedParams = this.getUsedParamsDetails(o), y) : W;
      }
      if (u) {
        const W = Array.isArray(A),
          J = W ? [] : {},
          ie = W ? S : E;
        for (const I in A) if (Object.prototype.hasOwnProperty.call(A, I)) {
          const Y = `${ie}${u}${I}`;
          F && !M ? J[I] = this.translate(Y, {
            ...o,
            defaultValue: jd(w) ? w[I] : void 0,
            joinArrays: !1,
            ns: m
          }) : J[I] = this.translate(Y, {
            ...o,
            joinArrays: !1,
            ns: m
          }), J[I] === Y && (J[I] = A[I]);
        }
        M = J;
      }
    } else if (D && At(L) && Array.isArray(M)) M = M.join(L), M && (M = this.extendTranslation(M, e, o, a));else {
      let W = !1,
        J = !1;
      !this.isValidLookup(M) && F && (W = !0, M = w), this.isValidLookup(M) || (J = !0, M = f);
      const I = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && J ? void 0 : M,
        Y = F && w !== M && this.options.updateMissing;
      if (J || W || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", g, h, f, Y ? w : M), u) {
          const z = this.resolve(f, {
            ...o,
            keySeparator: !1
          });
          z && z.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Z = [];
        const pe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && pe && pe[0]) for (let z = 0; z < pe.length; z++) Z.push(pe[z]);else this.options.saveMissingTo === "all" ? Z = this.languageUtils.toResolveHierarchy(o.lng || this.language) : Z.push(o.lng || this.language);
        const Me = (z, ee, he) => {
          var Be;
          const Ee = F && he !== M ? he : I;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(z, h, ee, Ee, Y, o) : (Be = this.backendConnector) != null && Be.saveMissing && this.backendConnector.saveMissing(z, h, ee, Ee, Y, o), this.emit("missingKey", z, h, ee, M);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? Z.forEach(z => {
          const ee = this.pluralResolver.getSuffixes(z, o);
          q && o[`defaultValue${this.options.pluralSeparator}zero`] && ee.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ee.push(`${this.options.pluralSeparator}zero`), ee.forEach(he => {
            Me([z], f + he, o[`defaultValue${he}`] || w);
          });
        }) : Me(Z, f, w));
      }
      M = this.extendTranslation(M, e, o, y, a), J && M === f && this.options.appendNamespaceToMissingKey && (M = `${h}${x}${f}`), (J || W) && this.options.parseMissingKeyHandler && (M = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}${x}${f}` : f, W ? M : void 0, o));
    }
    return c ? (y.res = M, y.usedParams = this.getUsedParamsDetails(o), y) : M;
  }
  extendTranslation(e, n, a, o, c) {
    var m, h;
    if ((m = this.i18nFormat) != null && m.parse) e = this.i18nFormat.parse(e, {
      ...this.options.interpolation.defaultVariables,
      ...a
    }, a.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
      resolved: o
    });else if (!a.skipInterpolation) {
      a.interpolation && this.interpolator.init({
        ...a,
        interpolation: {
          ...this.options.interpolation,
          ...a.interpolation
        }
      });
      const x = At(e) && (((h = a == null ? void 0 : a.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let g;
      if (x) {
        const y = e.match(this.interpolator.nestingRegexp);
        g = y && y.length;
      }
      let v = a.replace && !At(a.replace) ? a.replace : a;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), e = this.interpolator.interpolate(e, v, a.lng || this.language || o.usedLng, a), x) {
        const y = e.match(this.interpolator.nestingRegexp),
          M = y && y.length;
        g < M && (a.nest = !1);
      }
      !a.lng && o && o.res && (a.lng = this.language || o.usedLng), a.nest !== !1 && (e = this.interpolator.nest(e, (...y) => (c == null ? void 0 : c[0]) === y[0] && !a.context ? (this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : this.translate(...y, n), a)), a.interpolation && this.interpolator.reset();
    }
    const u = a.postProcess || this.options.postProcess,
      f = At(u) ? [u] : u;
    return e != null && f != null && f.length && a.applyPostProcessor !== !1 && (e = S_.handle(f, e, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(a)
      },
      ...a
    } : a, this)), e;
  }
  resolve(e, n = {}) {
    let a, o, c, u, f;
    return At(e) && (e = [e]), e.forEach(m => {
      if (this.isValidLookup(a)) return;
      const h = this.extractFromKey(m, n),
        x = h.key;
      o = x;
      let g = h.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const v = n.count !== void 0 && !At(n.count),
        y = v && !n.ordinal && n.count === 0,
        M = n.context !== void 0 && (At(n.context) || typeof n.context == "number") && n.context !== "",
        E = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      g.forEach(S => {
        var _, L;
        this.isValidLookup(a) || (f = S, !Fx[`${E[0]}-${S}`] && (_ = this.utils) != null && _.hasLoadedNamespace && !((L = this.utils) != null && L.hasLoadedNamespace(f)) && (Fx[`${E[0]}-${S}`] = !0, this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach(D => {
          var P;
          if (this.isValidLookup(a)) return;
          u = D;
          const O = [x];
          if ((P = this.i18nFormat) != null && P.addLookupKeys) this.i18nFormat.addLookupKeys(O, x, D, S, n);else {
            let B;
            v && (B = this.pluralResolver.getSuffix(D, n.count, n));
            const q = `${this.options.pluralSeparator}zero`,
              w = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (v && (n.ordinal && B.indexOf(w) === 0 && O.push(x + B.replace(w, this.options.pluralSeparator)), O.push(x + B), y && O.push(x + q)), M) {
              const A = `${x}${this.options.contextSeparator || "_"}${n.context}`;
              O.push(A), v && (n.ordinal && B.indexOf(w) === 0 && O.push(A + B.replace(w, this.options.pluralSeparator)), O.push(A + B), y && O.push(A + q));
            }
          }
          let F;
          for (; F = O.pop();) this.isValidLookup(a) || (c = F, a = this.getResource(D, S, F, n));
        }));
      });
    }), {
      res: a,
      usedKey: o,
      exactUsedKey: c,
      usedLng: u,
      usedNS: f
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, n, a, o = {}) {
    var c;
    return (c = this.i18nFormat) != null && c.getResource ? this.i18nFormat.getResource(e, n, a, o) : this.resourceStore.getResource(e, n, a, o);
  }
  getUsedParamsDetails(e = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
      a = e.replace && !At(e.replace);
    let o = a ? e.replace : e;
    if (a && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !a) {
      o = {
        ...o
      };
      for (const c of n) delete o[c];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const a in e) if (Object.prototype.hasOwnProperty.call(e, a) && n === a.substring(0, n.length) && e[a] !== void 0) return !0;
    return !1;
  }
}
class Bx {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Qi.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ml(e), !e || e.indexOf("-") < 0) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ml(e), !e || e.indexOf("-") < 0) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (At(e) && e.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return e.forEach(a => {
      if (n) return;
      const o = this.formatLanguageCode(a);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
    }), !n && this.options.supportedLngs && e.forEach(a => {
      if (n) return;
      const o = this.getScriptPartFromCode(a);
      if (this.isSupportedCode(o)) return n = o;
      const c = this.getLanguagePartFromCode(a);
      if (this.isSupportedCode(c)) return n = c;
      n = this.options.supportedLngs.find(u => {
        if (u === c) return u;
        if (!(u.indexOf("-") < 0 && c.indexOf("-") < 0) && (u.indexOf("-") > 0 && c.indexOf("-") < 0 && u.substring(0, u.indexOf("-")) === c || u.indexOf(c) === 0 && c.length > 1)) return u;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(n)), At(e) && (e = [e]), Array.isArray(e)) return e;
    if (!n) return e.default || [];
    let a = e[n];
    return a || (a = e[this.getScriptPartFromCode(n)]), a || (a = e[this.formatLanguageCode(n)]), a || (a = e[this.getLanguagePartFromCode(n)]), a || (a = e.default), a || [];
  }
  toResolveHierarchy(e, n) {
    const a = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], e),
      o = [],
      c = u => {
        u && (this.isSupportedCode(u) ? o.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
      };
    return At(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && c(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(e))) : At(e) && c(this.formatLanguageCode(e)), a.forEach(u => {
      o.indexOf(u) < 0 && c(this.formatLanguageCode(u));
    }), o;
  }
}
const Hx = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const Gx = {
  select: s => s === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class yS {
  constructor(e, n = {}) {
    this.languageUtils = e, this.options = n, this.logger = Qi.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, n) {
    this.rules[e] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, n = {}) {
    const a = ml(e === "dev" ? "en" : e),
      o = n.ordinal ? "ordinal" : "cardinal",
      c = JSON.stringify({
        cleanedCode: a,
        type: o
      });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let u;
    try {
      u = new Intl.PluralRules(a, {
        type: o
      });
    } catch {
      if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Gx;
      if (!e.match(/-|_/)) return Gx;
      const m = this.languageUtils.getLanguagePartFromCode(e);
      u = this.getRule(m, n);
    }
    return this.pluralRulesCache[c] = u, u;
  }
  needsPlural(e, n = {}) {
    let a = this.getRule(e, n);
    return a || (a = this.getRule("dev", n)), (a == null ? void 0 : a.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, n, a = {}) {
    return this.getSuffixes(e, a).map(o => `${n}${o}`);
  }
  getSuffixes(e, n = {}) {
    let a = this.getRule(e, n);
    return a || (a = this.getRule("dev", n)), a ? a.resolvedOptions().pluralCategories.sort((o, c) => Hx[o] - Hx[c]).map(o => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, n, a = {}) {
    const o = this.getRule(e, a);
    return o ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", n, a));
  }
}
const Vx = (s, e, n, a = ".", o = !0) => {
  let c = fS(s, e, n);
  return !c && o && At(n) && (c = Oh(s, n, a), c === void 0 && (c = Oh(e, n, a))), c;
};
const Xd = s => s.replace(/\$/g, "$$$$");
class kx {
  constructor(e = {}) {
    var n;
    this.logger = Qi.create("interpolator"), this.options = e, this.format = ((n = e == null ? void 0 : e.interpolation) == null ? void 0 : n.format) || (a => a), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: a,
      useRawValueToEscape: o,
      prefix: c,
      prefixEscaped: u,
      suffix: f,
      suffixEscaped: m,
      formatSeparator: h,
      unescapeSuffix: x,
      unescapePrefix: g,
      nestingPrefix: v,
      nestingPrefixEscaped: y,
      nestingSuffix: M,
      nestingSuffixEscaped: E,
      nestingOptionsSeparator: S,
      maxReplaces: _,
      alwaysFormat: L
    } = e.interpolation;
    this.escape = n !== void 0 ? n : hS, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = c ? Cs(c) : u || "{{", this.suffix = f ? Cs(f) : m || "}}", this.formatSeparator = h || ",", this.unescapePrefix = x ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : x || "", this.nestingPrefix = v ? Cs(v) : y || Cs("$t("), this.nestingSuffix = M ? Cs(M) : E || Cs(")"), this.nestingOptionsSeparator = S || ",", this.maxReplaces = _ || 1e3, this.alwaysFormat = L !== void 0 ? L : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, a) => (n == null ? void 0 : n.source) === a ? (n.lastIndex = 0, n) : new RegExp(a, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, n, a, o) {
    var y;
    let c, u, f;
    const m = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
      h = M => {
        if (M.indexOf(this.formatSeparator) < 0) {
          const L = Vx(n, m, M, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(L, void 0, a, {
            ...o,
            ...n,
            interpolationkey: M
          }) : L;
        }
        const E = M.split(this.formatSeparator),
          S = E.shift().trim(),
          _ = E.join(this.formatSeparator).trim();
        return this.format(Vx(n, m, S, this.options.keySeparator, this.options.ignoreJSONStructure), _, a, {
          ...o,
          ...n,
          interpolationkey: S
        });
      };
    this.resetRegExp();
    const x = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      g = ((y = o == null ? void 0 : o.interpolation) == null ? void 0 : y.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: M => Xd(M)
    }, {
      regex: this.regexp,
      safeValue: M => this.escapeValue ? Xd(this.escape(M)) : Xd(M)
    }].forEach(M => {
      for (f = 0; c = M.regex.exec(e);) {
        const E = c[1].trim();
        if (u = h(E), u === void 0) {
          if (typeof x == "function") {
            const _ = x(e, c, o);
            u = At(_) ? _ : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, E)) u = "";else if (g) {
            u = c[0];
            continue;
          } else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`), u = "";
        } else !At(u) && !this.useRawValueToEscape && (u = Ux(u));
        const S = M.safeValue(u);
        if (e = e.replace(c[0], S), g ? (M.regex.lastIndex += u.length, M.regex.lastIndex -= c[0].length) : M.regex.lastIndex = 0, f++, f >= this.maxReplaces) break;
      }
    }), e;
  }
  nest(e, n, a = {}) {
    let o, c, u;
    const f = (m, h) => {
      const x = this.nestingOptionsSeparator;
      if (m.indexOf(x) < 0) return m;
      const g = m.split(new RegExp(`${x}[ ]*{`));
      let v = `{${g[1]}`;
      m = g[0], v = this.interpolate(v, u);
      const y = v.match(/'/g),
        M = v.match(/"/g);
      (((y == null ? void 0 : y.length) ?? 0) % 2 === 0 && !M || M.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
      try {
        u = JSON.parse(v), h && (u = {
          ...h,
          ...u
        });
      } catch (E) {
        return this.logger.warn(`failed parsing options string in nesting for key ${m}`, E), `${m}${x}${v}`;
      }
      return u.defaultValue && u.defaultValue.indexOf(this.prefix) > -1 && delete u.defaultValue, m;
    };
    for (; o = this.nestingRegexp.exec(e);) {
      let m = [];
      u = {
        ...a
      }, u = u.replace && !At(u.replace) ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      const h = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (h !== -1 && (m = o[1].slice(h).split(this.formatSeparator).map(x => x.trim()).filter(Boolean), o[1] = o[1].slice(0, h)), c = n(f.call(this, o[1].trim(), u), u), c && o[0] === e && !At(c)) return c;
      At(c) || (c = Ux(c)), c || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), c = ""), m.length && (c = m.reduce((x, g) => this.format(x, g, a.lng, {
        ...a,
        interpolationkey: o[1].trim()
      }), c.trim())), e = e.replace(o[0], c), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const bS = s => {
  let e = s.toLowerCase().trim();
  const n = {};
  if (s.indexOf("(") > -1) {
    const a = s.split("(");
    e = a[0].toLowerCase().trim();
    const o = a[1].substring(0, a[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach(u => {
      if (u) {
        const [f, ...m] = u.split(":"),
          h = m.join(":").trim().replace(/^'+|'+$/g, ""),
          x = f.trim();
        n[x] || (n[x] = h), h === "false" && (n[x] = !1), h === "true" && (n[x] = !0), isNaN(h) || (n[x] = parseInt(h, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: n
  };
};
const jx = s => {
  const e = {};
  return (n, a, o) => {
    let c = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (c = {
      ...c,
      [o.interpolationkey]: void 0
    });
    const u = a + JSON.stringify(c);
    let f = e[u];
    return f || (f = s(ml(a), o), e[u] = f), f(n);
  };
};
const SS = s => (e, n, a) => s(ml(n), a)(e);
class MS {
  constructor(e = {}) {
    this.logger = Qi.create("formatter"), this.options = e, this.init(e);
  }
  init(e, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const a = n.cacheInBuiltFormats ? jx : SS;
    this.formats = {
      number: a((o, c) => {
        const u = new Intl.NumberFormat(o, {
          ...c
        });
        return f => u.format(f);
      }),
      currency: a((o, c) => {
        const u = new Intl.NumberFormat(o, {
          ...c,
          style: "currency"
        });
        return f => u.format(f);
      }),
      datetime: a((o, c) => {
        const u = new Intl.DateTimeFormat(o, {
          ...c
        });
        return f => u.format(f);
      }),
      relativetime: a((o, c) => {
        const u = new Intl.RelativeTimeFormat(o, {
          ...c
        });
        return f => u.format(f, c.range || "day");
      }),
      list: a((o, c) => {
        const u = new Intl.ListFormat(o, {
          ...c
        });
        return f => u.format(f);
      })
    };
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = jx(n);
  }
  format(e, n, a, o = {}) {
    const c = n.split(this.formatSeparator);
    if (c.length > 1 && c[0].indexOf("(") > 1 && c[0].indexOf(")") < 0 && c.find(f => f.indexOf(")") > -1)) {
      const f = c.findIndex(m => m.indexOf(")") > -1);
      c[0] = [c[0], ...c.splice(1, f)].join(this.formatSeparator);
    }
    return c.reduce((f, m) => {
      var g;
      const {
        formatName: h,
        formatOptions: x
      } = bS(m);
      if (this.formats[h]) {
        let v = f;
        try {
          const y = ((g = o == null ? void 0 : o.formatParams) == null ? void 0 : g[o.interpolationkey]) || {},
            M = y.locale || y.lng || o.locale || o.lng || a;
          v = this.formats[h](f, M, {
            ...x,
            ...o,
            ...y
          });
        } catch (y) {
          this.logger.warn(y);
        }
        return v;
      } else this.logger.warn(`there was no format function for ${h}`);
      return f;
    }, e);
  }
}
const ES = (s, e) => {
  s.pending[e] !== void 0 && (delete s.pending[e], s.pendingCount--);
};
class TS extends Au {
  constructor(e, n, a, o = {}) {
    var c, u;
    super(), this.backend = e, this.store = n, this.services = a, this.languageUtils = a.languageUtils, this.options = o, this.logger = Qi.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (u = (c = this.backend) == null ? void 0 : c.init) == null || u.call(c, a, o.backend, o);
  }
  queueLoad(e, n, a, o) {
    const c = {},
      u = {},
      f = {},
      m = {};
    return e.forEach(h => {
      let x = !0;
      n.forEach(g => {
        const v = `${h}|${g}`;
        !a.reload && this.store.hasResourceBundle(h, g) ? this.state[v] = 2 : this.state[v] < 0 || (this.state[v] === 1 ? u[v] === void 0 && (u[v] = !0) : (this.state[v] = 1, x = !1, u[v] === void 0 && (u[v] = !0), c[v] === void 0 && (c[v] = !0), m[g] === void 0 && (m[g] = !0)));
      }), x || (f[h] = !0);
    }), (Object.keys(c).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(c),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(f),
      toLoadNamespaces: Object.keys(m)
    };
  }
  loaded(e, n, a) {
    const o = e.split("|"),
      c = o[0],
      u = o[1];
    n && this.emit("failedLoading", c, u, n), !n && a && this.store.addResourceBundle(c, u, a, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = n ? -1 : 2, n && a && (this.state[e] = 0);
    const f = {};
    this.queue.forEach(m => {
      uS(m.loaded, [c], u), ES(m, e), n && m.errors.push(n), m.pendingCount === 0 && !m.done && (Object.keys(m.loaded).forEach(h => {
        f[h] || (f[h] = {});
        const x = m.loaded[h];
        x.length && x.forEach(g => {
          f[h][g] === void 0 && (f[h][g] = !0);
        });
      }), m.done = !0, m.errors.length ? m.callback(m.errors) : m.callback());
    }), this.emit("loaded", f), this.queue = this.queue.filter(m => !m.done);
  }
  read(e, n, a, o = 0, c = this.retryTimeout, u) {
    if (!e.length) return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: a,
        tried: o,
        wait: c,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const f = (h, x) => {
        if (this.readingCalls--, this.waitingReads.length > 0) {
          const g = this.waitingReads.shift();
          this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (h && x && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, a, o + 1, c * 2, u);
          }, c);
          return;
        }
        u(h, x);
      },
      m = this.backend[a].bind(this.backend);
    if (m.length === 2) {
      try {
        const h = m(e, n);
        h && typeof h.then == "function" ? h.then(x => f(null, x)).catch(f) : f(null, h);
      } catch (h) {
        f(h);
      }
      return;
    }
    return m(e, n, f);
  }
  prepareLoading(e, n, a = {}, o) {
    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    At(e) && (e = this.languageUtils.toResolveHierarchy(e)), At(n) && (n = [n]);
    const c = this.queueLoad(e, n, a, o);
    if (!c.toLoad.length) return c.pending.length || o(), null;
    c.toLoad.forEach(u => {
      this.loadOne(u);
    });
  }
  load(e, n, a) {
    this.prepareLoading(e, n, {}, a);
  }
  reload(e, n, a) {
    this.prepareLoading(e, n, {
      reload: !0
    }, a);
  }
  loadOne(e, n = "") {
    const a = e.split("|"),
      o = a[0],
      c = a[1];
    this.read(o, c, "read", void 0, void 0, (u, f) => {
      u && this.logger.warn(`${n}loading namespace ${c} for language ${o} failed`, u), !u && f && this.logger.log(`${n}loaded namespace ${c} for language ${o}`, f), this.loaded(e, u, f);
    });
  }
  saveMissing(e, n, a, o, c, u = {}, f = () => {}) {
    var m, h, x, g, v;
    if ((h = (m = this.services) == null ? void 0 : m.utils) != null && h.hasLoadedNamespace && !((g = (x = this.services) == null ? void 0 : x.utils) != null && g.hasLoadedNamespace(n))) {
      this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((v = this.backend) != null && v.create) {
        const y = {
            ...u,
            isUpdate: c
          },
          M = this.backend.create.bind(this.backend);
        if (M.length < 6) try {
          let E;
          M.length === 5 ? E = M(e, n, a, o, y) : E = M(e, n, a, o), E && typeof E.then == "function" ? E.then(S => f(null, S)).catch(f) : f(null, E);
        } catch (E) {
          f(E);
        } else M(e, n, a, o, f, y);
      }
      !e || !e[0] || this.store.addResource(e[0], n, a, o);
    }
  }
}
const Xx = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: s => {
    let e = {};
    if (typeof s[1] == "object" && (e = s[1]), At(s[1]) && (e.defaultValue = s[1]), At(s[2]) && (e.tDescription = s[2]), typeof s[2] == "object" || typeof s[3] == "object") {
      const n = s[3] || s[2];
      Object.keys(n).forEach(a => {
        e[a] = n[a];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: s => s,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
});
const Wx = s => {
  var e, n;
  return At(s.ns) && (s.ns = [s.ns]), At(s.fallbackLng) && (s.fallbackLng = [s.fallbackLng]), At(s.fallbackNS) && (s.fallbackNS = [s.fallbackNS]), ((n = (e = s.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : n.call(e, "cimode")) < 0 && (s.supportedLngs = s.supportedLngs.concat(["cimode"])), typeof s.initImmediate == "boolean" && (s.initAsync = s.initImmediate), s;
};
const zc = () => {};
const AS = s => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(n => {
    typeof s[n] == "function" && (s[n] = s[n].bind(s));
  });
};
class dl extends Au {
  constructor(e = {}, n) {
    if (super(), this.options = Wx(e), this.services = {}, this.logger = Qi, this.modules = {
      external: []
    }, AS(this), n && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync) return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init(e = {}, n) {
    this.isInitializing = !0, typeof e == "function" && (n = e, e = {}), e.defaultNS == null && e.ns && (At(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const a = Xx();
    this.options = {
      ...a,
      ...this.options,
      ...Wx(e)
    }, this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = a.overloadTranslationOptionHandler);
    const o = h => h ? typeof h == "function" ? new h() : h : null;
    if (!this.options.isClone) {
      this.modules.logger ? Qi.init(o(this.modules.logger), this.options) : Qi.init(null, this.options);
      let h;
      this.modules.formatter ? h = this.modules.formatter : h = MS;
      const x = new Bx(this.options);
      this.store = new zx(this.options.resources, this.options);
      const g = this.services;
      g.logger = Qi, g.resourceStore = this.store, g.languageUtils = x, g.pluralResolver = new yS(x, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== a.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), h && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (g.formatter = o(h), g.formatter.init && g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new kx(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new TS(o(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", (y, ...M) => {
        this.emit(y, ...M);
      }), this.modules.languageDetector && (g.languageDetector = o(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = o(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new xu(this.services, this.options), this.translator.on("*", (y, ...M) => {
        this.emit(y, ...M);
      }), this.modules.external.forEach(y => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = zc), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(h => {
      this[h] = (...x) => this.store[h](...x);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(h => {
      this[h] = (...x) => (this.store[h](...x), this);
    });
    const f = $o(),
      m = () => {
        const h = (x, g) => {
          this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), f.resolve(g), n(x, g);
        };
        if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return this.options.resources || !this.options.initAsync ? m() : setTimeout(m, 0), f;
  }
  loadResources(e, n = zc) {
    var c, u;
    let a = n;
    const o = At(e) ? e : this.language;
    if (typeof e == "function" && (a = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return a();
      const f = [],
        m = h => {
          if (!h || h === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(h).forEach(g => {
            g !== "cimode" && f.indexOf(g) < 0 && f.push(g);
          });
        };
      o ? m(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x => m(x)), (u = (c = this.options.preload) == null ? void 0 : c.forEach) == null || u.call(c, h => m(h)), this.services.backendConnector.load(f, this.options.ns, h => {
        !h && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(h);
      });
    } else a(null);
  }
  reloadResources(e, n, a) {
    const o = $o();
    return typeof e == "function" && (a = e, e = void 0), typeof n == "function" && (a = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), a || (a = zc), this.services.backendConnector.reload(e, n, c => {
      o.resolve(), a(c);
    }), o;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && S_.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const a = this.languages[n];
        if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
          this.resolvedLanguage = a;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, n) {
    this.isLanguageChangingTo = e;
    const a = $o();
    this.emit("languageChanging", e);
    const o = f => {
        this.language = f, this.languages = this.services.languageUtils.toResolveHierarchy(f), this.resolvedLanguage = void 0, this.setResolvedLanguage(f);
      },
      c = (f, m) => {
        m ? this.isLanguageChangingTo === e && (o(m), this.translator.changeLanguage(m), this.isLanguageChangingTo = void 0, this.emit("languageChanged", m), this.logger.log("languageChanged", m)) : this.isLanguageChangingTo = void 0, a.resolve((...h) => this.t(...h)), n && n(f, (...h) => this.t(...h));
      },
      u = f => {
        var x, g;
        !e && !f && this.services.languageDetector && (f = []);
        const m = At(f) ? f : f && f[0],
          h = this.store.hasLanguageSomeTranslations(m) ? m : this.services.languageUtils.getBestMatchFromCodes(At(f) ? [f] : f);
        h && (this.language || o(h), this.translator.language || this.translator.changeLanguage(h), (g = (x = this.services.languageDetector) == null ? void 0 : x.cacheUserLanguage) == null || g.call(x, h)), this.loadResources(h, v => {
          c(v, h);
        });
      };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? u(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(u) : this.services.languageDetector.detect(u) : u(e), a;
  }
  getFixedT(e, n, a) {
    const o = (c, u, ...f) => {
      let m;
      typeof u != "object" ? m = this.options.overloadTranslationOptionHandler([c, u].concat(f)) : m = {
        ...u
      }, m.lng = m.lng || o.lng, m.lngs = m.lngs || o.lngs, m.ns = m.ns || o.ns, m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || a || o.keyPrefix);
      const h = this.options.keySeparator || ".";
      let x;
      return m.keyPrefix && Array.isArray(c) ? x = c.map(g => (typeof g == "function" && (g = Ph(g, {
        ...this.options,
        ...u
      })), `${m.keyPrefix}${h}${g}`)) : (typeof c == "function" && (c = Ph(c, {
        ...this.options,
        ...u
      })), x = m.keyPrefix ? `${m.keyPrefix}${h}${c}` : c), this.t(x, m);
    };
    return At(e) ? o.lng = e : o.lngs = e, o.ns = n, o.keyPrefix = a, o;
  }
  t(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...e);
  }
  exists(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, n = {}) {
    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const a = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === "cimode") return !0;
    const u = (f, m) => {
      const h = this.services.backendConnector.state[`${f}|${m}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (n.precheck) {
      const f = n.precheck(this, u);
      if (f !== void 0) return f;
    }
    return !!(this.hasResourceBundle(a, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(a, e) && (!o || u(c, e)));
  }
  loadNamespaces(e, n) {
    const a = $o();
    return this.options.ns ? (At(e) && (e = [e]), e.forEach(o => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources(o => {
      a.resolve(), n && n(o);
    }), a) : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const a = $o();
    At(e) && (e = [e]);
    const o = this.options.preload || [],
      c = e.filter(u => o.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u));
    return c.length ? (this.options.preload = o.concat(c), this.loadResources(u => {
      a.resolve(), n && n(u);
    }), a) : (n && n(), Promise.resolve());
  }
  dir(e) {
    var o, c;
    if (e || (e = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const u = new Intl.Locale(e);
      if (u && u.getTextInfo) {
        const f = u.getTextInfo();
        if (f && f.direction) return f.direction;
      }
    } catch {}
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
      a = ((c = this.services) == null ? void 0 : c.languageUtils) || new Bx(Xx());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(a.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, n) {
    const a = new dl(e, n);
    return a.createInstance = dl.createInstance, a;
  }
  cloneInstance(e = {}, n = zc) {
    const a = e.forkResourceStore;
    a && delete e.forkResourceStore;
    const o = {
        ...this.options,
        ...e,
        isClone: !0
      },
      c = new dl(o);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (c.logger = c.logger.clone(e)), ["store", "services", "language"].forEach(f => {
      c[f] = this[f];
    }), c.services = {
      ...this.services
    }, c.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, a) {
      const f = Object.keys(this.store.data).reduce((m, h) => (m[h] = {
        ...this.store.data[h]
      }, m[h] = Object.keys(m[h]).reduce((x, g) => (x[g] = {
        ...m[h][g]
      }, x), m[h]), m), {});
      c.store = new zx(f, o), c.services.resourceStore = c.store;
    }
    return e.interpolation && (c.services.interpolator = new kx(o)), c.translator = new xu(c.services, o), c.translator.on("*", (f, ...m) => {
      c.emit(f, ...m);
    }), c.init(o, n), c.translator.options = o, c.translator.backendConnector.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, c;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const i18n = dl.createInstance();
i18n.createInstance;
i18n.dir;
i18n.init;
i18n.loadResources;
i18n.reloadResources;
i18n.use;
i18n.changeLanguage;
i18n.getFixedT;
i18n.t;
i18n.exists;
i18n.setDefaultNamespace;
i18n.hasLoadedNamespace;
i18n.loadNamespaces;
i18n.loadLanguages;
const wS = (s, e, n, a) => {
  var c, u, f, m;
  const o = [n, {
    code: e,
    ...(a || {})
  }];
  if ((u = (c = s == null ? void 0 : s.services) == null ? void 0 : c.logger) != null && u.forward) return s.services.logger.forward(o, "warn", "react-i18next::", !0);
  qr(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), (m = (f = s == null ? void 0 : s.services) == null ? void 0 : f.logger) != null && m.warn ? s.services.logger.warn(...o) : console != null && console.warn && console.warn(...o);
};
const Yx = {};
const E_ = (s, e, n, a) => {
  qr(n) && Yx[n] || (qr(n) && (Yx[n] = new Date()), wS(s, e, n, a));
};
const T_ = (s, e) => () => {
  if (s.isInitialized) e();else {
    const n = () => {
      setTimeout(() => {
        s.off("initialized", n);
      }, 0), e();
    };
    s.on("initialized", n);
  }
};
const Ih = (s, e, n) => {
  s.loadNamespaces(e, T_(s, n));
};
const qx = (s, e, n, a) => {
  if (qr(n) && (n = [n]), s.options.preload && s.options.preload.indexOf(e) > -1) return Ih(s, n, a);
  n.forEach(o => {
    s.options.ns.indexOf(o) < 0 && s.options.ns.push(o);
  }), s.loadLanguages(e, T_(s, a));
};
const RS = (s, e, n = {}) => !e.languages || !e.languages.length ? (E_(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(s, {
  lng: n.lng,
  precheck: (a, o) => {
    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !o(a.isLanguageChangingTo, s)) return !1;
  }
});
const qr = s => typeof s == "string";
const CS = s => typeof s == "object" && s !== null;
const DS = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const NS = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const LS = s => NS[s];
const US = s => s.replace(DS, LS);
let zh = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: US,
  transDefaultProps: void 0
};
const OS = (s = {}) => {
  zh = {
    ...zh,
    ...s
  };
};
const PS = () => zh;
let A_;
const IS = s => {
  A_ = s;
};
const zS = () => A_;
const initReactI18next = {
  type: "3rdParty",
  init(s) {
    OS(s.options.react), IS(s);
  }
};
const BS = React.createContext();
class HS {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach(n => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var Wd = {
  exports: {}
};
var Yd = {}; /**
             * @license React
             * use-sync-external-store-shim.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var Zx;
function GS() {
  if (Zx) return Yd;
  Zx = 1;
  var s = Mu();
  function e(g, v) {
    return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
  }
  var n = typeof Object.is == "function" ? Object.is : e,
    a = s.useState,
    o = s.useEffect,
    c = s.useLayoutEffect,
    u = s.useDebugValue;
  function f(g, v) {
    var y = v(),
      M = a({
        inst: {
          value: y,
          getSnapshot: v
        }
      }),
      E = M[0].inst,
      S = M[1];
    return c(function () {
      E.value = y, E.getSnapshot = v, m(E) && S({
        inst: E
      });
    }, [g, y, v]), o(function () {
      return m(E) && S({
        inst: E
      }), g(function () {
        m(E) && S({
          inst: E
        });
      });
    }, [g]), u(y), y;
  }
  function m(g) {
    var v = g.getSnapshot;
    g = g.value;
    try {
      var y = v();
      return !n(g, y);
    } catch {
      return !0;
    }
  }
  function h(g, v) {
    return v();
  }
  var x = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : f;
  return Yd.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : x, Yd;
}
var Kx;
function VS() {
  return Kx || (Kx = 1, Wd.exports = GS()), Wd.exports;
}
var kS = VS();
const jS = (s, e) => qr(e) ? e : CS(e) && qr(e.defaultValue) ? e.defaultValue : Array.isArray(s) ? s[s.length - 1] : s;
const XS = {
  t: jS,
  ready: !1
};
const WS = () => () => {};
const useTranslation = (s, e = {}) => {
  var w, A, H;
  const {
      i18n: n
    } = e,
    {
      i18n: a,
      defaultNS: o
    } = React.useContext(BS) || {},
    c = n || a || zS();
  c && !c.reportNamespaces && (c.reportNamespaces = new HS()), c || E_(c, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
  const u = React.useMemo(() => {
      var k;
      return {
        ...PS(),
        ...((k = c == null ? void 0 : c.options) == null ? void 0 : k.react),
        ...e
      };
    }, [c, e]),
    {
      useSuspense: f,
      keyPrefix: m
    } = u,
    h = o || ((w = c == null ? void 0 : c.options) == null ? void 0 : w.defaultNS),
    x = qr(h) ? [h] : h || ["translation"],
    g = React.useMemo(() => x, x);
  (H = (A = c == null ? void 0 : c.reportNamespaces) == null ? void 0 : A.addUsedNamespaces) == null || H.call(A, g);
  const v = React.useRef(0),
    y = React.useCallback(k => {
      if (!c) return WS;
      const {
          bindI18n: W,
          bindI18nStore: J
        } = u,
        ie = () => {
          v.current += 1, k();
        };
      return W && c.on(W, ie), J && c.store.on(J, ie), () => {
        W && W.split(" ").forEach(I => c.off(I, ie)), J && J.split(" ").forEach(I => c.store.off(I, ie));
      };
    }, [c, u]),
    M = React.useRef(),
    E = React.useCallback(() => {
      if (!c) return XS;
      const k = !!(c.isInitialized || c.initializedStoreOnce) && g.every(Z => RS(Z, c, u)),
        W = e.lng || c.language,
        J = v.current,
        ie = M.current;
      if (ie && ie.ready === k && ie.lng === W && ie.keyPrefix === m && ie.revision === J) return ie;
      const Y = {
        t: c.getFixedT(W, u.nsMode === "fallback" ? g : g[0], m),
        ready: k,
        lng: W,
        keyPrefix: m,
        revision: J
      };
      return M.current = Y, Y;
    }, [c, g, m, u, e.lng]),
    [S, _] = React.useState(0),
    {
      t: L,
      ready: D
    } = kS.useSyncExternalStore(y, E, E);
  React.useEffect(() => {
    if (c && !D && !f) {
      const k = () => _(W => W + 1);
      e.lng ? qx(c, e.lng, g, k) : Ih(c, g, k);
    }
  }, [c, e.lng, g, D, f, S]);
  const O = c || {},
    F = React.useRef(null),
    P = React.useRef(),
    B = k => {
      const W = Object.getOwnPropertyDescriptors(k);
      W.__original && delete W.__original;
      const J = Object.create(Object.getPrototypeOf(k), W);
      if (!Object.prototype.hasOwnProperty.call(J, "__original")) try {
        Object.defineProperty(J, "__original", {
          value: k,
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      } catch {}
      return J;
    },
    q = React.useMemo(() => {
      const k = O,
        W = k == null ? void 0 : k.language;
      let J = k;
      k && (F.current && F.current.__original === k ? P.current !== W ? (J = B(k), F.current = J, P.current = W) : J = F.current : (J = B(k), F.current = J, P.current = W));
      const ie = [L, J, D];
      return ie.t = L, ie.i18n = J, ie.ready = D, ie;
    }, [L, O, D, O.resolvedLanguage, O.language, O.languages]);
  if (c && f && !D) throw new Promise(k => {
    const W = () => k();
    e.lng ? qx(c, e.lng, g, W) : Ih(c, g, W);
  });
  return q;
};
export { i18n, initReactI18next, useTranslation };
//# sourceMappingURL=i18n-runtime.js.map
