const {
  slice: JC,
  forEach: $C
} = [];
function eD(s) {
  return $C.call(JC.call(arguments, 1), e => {
    if (e) for (const n in e) s[n] === void 0 && (s[n] = e[n]);
  }), s;
}
function tD(s) {
  return typeof s != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(n => n.test(s));
}
const d_ = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const nD = function (s, e) {
  const a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      path: "/"
    },
    o = encodeURIComponent(e);
  let c = `${s}=${o}`;
  if (a.maxAge > 0) {
    const u = a.maxAge - 0;
    if (Number.isNaN(u)) throw new Error("maxAge should be a Number");
    c += `; Max-Age=${Math.floor(u)}`;
  }
  if (a.domain) {
    if (!d_.test(a.domain)) throw new TypeError("option domain is invalid");
    c += `; Domain=${a.domain}`;
  }
  if (a.path) {
    if (!d_.test(a.path)) throw new TypeError("option path is invalid");
    c += `; Path=${a.path}`;
  }
  if (a.expires) {
    if (typeof a.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
    c += `; Expires=${a.expires.toUTCString()}`;
  }
  if (a.httpOnly && (c += "; HttpOnly"), a.secure && (c += "; Secure"), a.sameSite) switch (typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite) {
    case !0:
      c += "; SameSite=Strict";
      break;
    case "lax":
      c += "; SameSite=Lax";
      break;
    case "strict":
      c += "; SameSite=Strict";
      break;
    case "none":
      c += "; SameSite=None";
      break;
    default:
      throw new TypeError("option sameSite is invalid");
  }
  return a.partitioned && (c += "; Partitioned"), c;
};
const h_ = {
  create(s, e, n, a) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (o.expires = new Date(), o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)), a && (o.domain = a), document.cookie = nD(s, e, o);
  },
  read(s) {
    const e = `${s}=`,
      n = document.cookie.split(";");
    for (let a = 0; a < n.length; a++) {
      let o = n[a];
      for (; o.charAt(0) === " ";) o = o.substring(1, o.length);
      if (o.indexOf(e) === 0) return o.substring(e.length, o.length);
    }
    return null;
  },
  remove(s, e) {
    this.create(s, "", -1, e);
  }
};
var iD = {
  name: "cookie",
  lookup(s) {
    let {
      lookupCookie: e
    } = s;
    if (e && typeof document < "u") return h_.read(e) || void 0;
  },
  cacheUserLanguage(s, e) {
    let {
      lookupCookie: n,
      cookieMinutes: a,
      cookieDomain: o,
      cookieOptions: c
    } = e;
    n && typeof document < "u" && h_.create(n, s, a, o, c);
  }
};
var aD = {
  name: "querystring",
  lookup(s) {
    var a;
    let {
        lookupQuerystring: e
      } = s,
      n;
    if (typeof window < "u") {
      let {
        search: o
      } = window.location;
      !window.location.search && ((a = window.location.hash) == null ? void 0 : a.indexOf("?")) > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
      const u = o.substring(1).split("&");
      for (let f = 0; f < u.length; f++) {
        const m = u[f].indexOf("=");
        m > 0 && u[f].substring(0, m) === e && (n = u[f].substring(m + 1));
      }
    }
    return n;
  }
};
var rD = {
  name: "hash",
  lookup(s) {
    var o;
    let {
        lookupHash: e,
        lookupFromHashIndex: n
      } = s,
      a;
    if (typeof window < "u") {
      const {
        hash: c
      } = window.location;
      if (c && c.length > 2) {
        const u = c.substring(1);
        if (e) {
          const f = u.split("&");
          for (let m = 0; m < f.length; m++) {
            const h = f[m].indexOf("=");
            h > 0 && f[m].substring(0, h) === e && (a = f[m].substring(h + 1));
          }
        }
        if (a) return a;
        if (!a && n > -1) {
          const f = c.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(f) ? (o = f[typeof n == "number" ? n : 0]) == null ? void 0 : o.replace("/", "") : void 0;
        }
      }
    }
    return a;
  }
};
let Zs = null;
const p_ = () => {
  if (Zs !== null) return Zs;
  try {
    if (Zs = typeof window < "u" && window.localStorage !== null, !Zs) return !1;
    const s = "i18next.translate.boo";
    window.localStorage.setItem(s, "foo"), window.localStorage.removeItem(s);
  } catch {
    Zs = !1;
  }
  return Zs;
};
var sD = {
  name: "localStorage",
  lookup(s) {
    let {
      lookupLocalStorage: e
    } = s;
    if (e && p_()) return window.localStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(s, e) {
    let {
      lookupLocalStorage: n
    } = e;
    n && p_() && window.localStorage.setItem(n, s);
  }
};
let Ks = null;
const m_ = () => {
  if (Ks !== null) return Ks;
  try {
    if (Ks = typeof window < "u" && window.sessionStorage !== null, !Ks) return !1;
    const s = "i18next.translate.boo";
    window.sessionStorage.setItem(s, "foo"), window.sessionStorage.removeItem(s);
  } catch {
    Ks = !1;
  }
  return Ks;
};
var oD = {
  name: "sessionStorage",
  lookup(s) {
    let {
      lookupSessionStorage: e
    } = s;
    if (e && m_()) return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(s, e) {
    let {
      lookupSessionStorage: n
    } = e;
    n && m_() && window.sessionStorage.setItem(n, s);
  }
};
var lD = {
  name: "navigator",
  lookup(s) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: a,
        language: o
      } = navigator;
      if (n) for (let c = 0; c < n.length; c++) e.push(n[c]);
      a && e.push(a), o && e.push(o);
    }
    return e.length > 0 ? e : void 0;
  }
};
var cD = {
  name: "htmlTag",
  lookup(s) {
    let {
        htmlTag: e
      } = s,
      n;
    const a = e || (typeof document < "u" ? document.documentElement : null);
    return a && typeof a.getAttribute == "function" && (n = a.getAttribute("lang")), n;
  }
};
var uD = {
  name: "path",
  lookup(s) {
    var o;
    let {
      lookupFromPathIndex: e
    } = s;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (o = n[typeof e == "number" ? e : 0]) == null ? void 0 : o.replace("/", "") : void 0;
  }
};
var fD = {
  name: "subdomain",
  lookup(s) {
    var o, c;
    let {
      lookupFromSubdomainIndex: e
    } = s;
    const n = typeof e == "number" ? e + 1 : 1,
      a = typeof window < "u" && ((c = (o = window.location) == null ? void 0 : o.hostname) == null ? void 0 : c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (a) return a[n];
  }
};
let fy = !1;
try {
  document.cookie, fy = !0;
} catch {}
const dy = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
fy || dy.splice(1, 1);
const dD = () => ({
  order: dy,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: s => s
});
class BrowserLanguageDetector {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, n);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        languageUtils: {}
      },
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = eD(n, this.options || {}, dD()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = a, this.addDetector(iD), this.addDetector(aD), this.addDetector(sD), this.addDetector(oD), this.addDetector(lD), this.addDetector(cD), this.addDetector(uD), this.addDetector(fD), this.addDetector(rD);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order,
      n = [];
    return e.forEach(a => {
      if (this.detectors[a]) {
        let o = this.detectors[a].lookup(this.options);
        o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
      }
    }), n = n.filter(a => a != null && !tD(a)).map(a => this.options.convertDetectedLanguage(a)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || n.forEach(a => {
      this.detectors[a] && this.detectors[a].cacheUserLanguage(e, this.options);
    }));
  }
}
BrowserLanguageDetector.type = "languageDetector";
export { BrowserLanguageDetector };
//# sourceMappingURL=language-detector.js.map
