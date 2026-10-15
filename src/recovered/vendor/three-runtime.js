/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const C0 = "181";
const nM = 0;
const Jx = 1;
const iM = 2;
const w_ = 1;
const aM = 2;
const Ta = 3;
const gr = 0;
const ci = 1;
const wa = 2;
const Da = 0;
const Js = 1;
const $x = 2;
const ev = 3;
const tv = 4;
const rM = 5;
const jr = 100;
const sM = 101;
const oM = 102;
const lM = 103;
const cM = 104;
const uM = 200;
const fM = 201;
const dM = 202;
const hM = 203;
const Fh = 204;
const Bh = 205;
const pM = 206;
const mM = 207;
const gM = 208;
const xM = 209;
const vM = 210;
const _M = 211;
const yM = 212;
const bM = 213;
const SM = 214;
const Hh = 0;
const Gh = 1;
const Vh = 2;
const eo = 3;
const kh = 4;
const jh = 5;
const Xh = 6;
const Wh = 7;
const R_ = 0;
const MM = 1;
const EM = 2;
const Na = 0;
const TM = 1;
const AM = 2;
const wM = 3;
const RM = 4;
const CM = 5;
const DM = 6;
const NM = 7;
const C_ = 300;
const to = 301;
const no = 302;
const Yh = 303;
const qh = 304;
const Ru = 306;
const Zh = 1e3;
const Ra = 1001;
const Kh = 1002;
const bi = 1003;
const LM = 1004;
const Fc = 1005;
const Oi = 1006;
const qd = 1007;
const Wr = 1008;
const Oa = 1009;
const D_ = 1010;
const N_ = 1011;
const gl = 1012;
const D0 = 1013;
const Zr = 1014;
const Ca = 1015;
const ro = 1016;
const N0 = 1017;
const L0 = 1018;
const xl = 1020;
const L_ = 35902;
const U_ = 35899;
const O_ = 1021;
const P_ = 1022;
const Vi = 1023;
const vl = 1026;
const _l = 1027;
const I_ = 1028;
const U0 = 1029;
const O0 = 1030;
const P0 = 1031;
const I0 = 1033;
const cu = 33776;
const uu = 33777;
const fu = 33778;
const du = 33779;
const Qh = 35840;
const Jh = 35841;
const $h = 35842;
const e0 = 35843;
const t0 = 36196;
const n0 = 37492;
const i0 = 37496;
const a0 = 37808;
const r0 = 37809;
const s0 = 37810;
const o0 = 37811;
const l0 = 37812;
const c0 = 37813;
const u0 = 37814;
const f0 = 37815;
const d0 = 37816;
const h0 = 37817;
const p0 = 37818;
const m0 = 37819;
const g0 = 37820;
const x0 = 37821;
const v0 = 36492;
const _0 = 36494;
const y0 = 36495;
const b0 = 36283;
const S0 = 36284;
const M0 = 36285;
const E0 = 36286;
const UM = 3200;
const OM = 3201;
const PM = 0;
const IM = 1;
const pr = "";
const yi = "srgb";
const io = "srgb-linear";
const vu = "linear";
const ln = "srgb";
const Ds = 7680;
const nv = 519;
const zM = 512;
const FM = 513;
const BM = 514;
const z_ = 515;
const HM = 516;
const GM = 517;
const VM = 518;
const kM = 519;
const T0 = 35044;
const iv = "300 es";
const Ji = 2e3;
const _u = 2001;
function F_(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function yl(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function jM() {
  const s = yl("canvas");
  return s.style.display = "block", s;
}
const av = {};
function yu(...s) {
  const e = "THREE." + s.shift();
  console.log(e, ...s);
}
function Rt(...s) {
  const e = "THREE." + s.shift();
  console.warn(e, ...s);
}
function yn(...s) {
  const e = "THREE." + s.shift();
  console.error(e, ...s);
}
function bl(...s) {
  const e = s.join(" ");
  e in av || (av[e] = !0, Rt(...s));
}
function XM(s, e, n) {
  return new Promise(function (a, o) {
    function c() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          o();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(c, n);
          break;
        default:
          a();
      }
    }
    setTimeout(c, n);
  });
}
class so {
  addEventListener(e, n) {
    this._listeners === void 0 && (this._listeners = {});
    const a = this._listeners;
    a[e] === void 0 && (a[e] = []), a[e].indexOf(n) === -1 && a[e].push(n);
  }
  hasEventListener(e, n) {
    const a = this._listeners;
    return a === void 0 ? !1 : a[e] !== void 0 && a[e].indexOf(n) !== -1;
  }
  removeEventListener(e, n) {
    const a = this._listeners;
    if (a === void 0) return;
    const o = a[e];
    if (o !== void 0) {
      const c = o.indexOf(n);
      c !== -1 && o.splice(c, 1);
    }
  }
  dispatchEvent(e) {
    const n = this._listeners;
    if (n === void 0) return;
    const a = n[e.type];
    if (a !== void 0) {
      e.target = this;
      const o = a.slice(0);
      for (let c = 0, u = o.length; c < u; c++) o[c].call(this, e);
      e.target = null;
    }
  }
}
const Qn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let rv = 1234567;
const hl = Math.PI / 180;
const Sl = 180 / Math.PI;
function La() {
  const s = Math.random() * 4294967295 | 0,
    e = Math.random() * 4294967295 | 0,
    n = Math.random() * 4294967295 | 0,
    a = Math.random() * 4294967295 | 0;
  return (Qn[s & 255] + Qn[s >> 8 & 255] + Qn[s >> 16 & 255] + Qn[s >> 24 & 255] + "-" + Qn[e & 255] + Qn[e >> 8 & 255] + "-" + Qn[e >> 16 & 15 | 64] + Qn[e >> 24 & 255] + "-" + Qn[n & 63 | 128] + Qn[n >> 8 & 255] + "-" + Qn[n >> 16 & 255] + Qn[n >> 24 & 255] + Qn[a & 255] + Qn[a >> 8 & 255] + Qn[a >> 16 & 255] + Qn[a >> 24 & 255]).toLowerCase();
}
function Ht(s, e, n) {
  return Math.max(e, Math.min(n, s));
}
function z0(s, e) {
  return (s % e + e) % e;
}
function WM(s, e, n, a, o) {
  return a + (s - e) * (o - a) / (n - e);
}
function YM(s, e, n) {
  return s !== e ? (n - s) / (e - s) : 0;
}
function pl(s, e, n) {
  return (1 - n) * s + n * e;
}
function qM(s, e, n, a) {
  return pl(s, e, 1 - Math.exp(-n * a));
}
function ZM(s, e = 1) {
  return e - Math.abs(z0(s, e * 2) - e);
}
function KM(s, e, n) {
  return s <= e ? 0 : s >= n ? 1 : (s = (s - e) / (n - e), s * s * (3 - 2 * s));
}
function QM(s, e, n) {
  return s <= e ? 0 : s >= n ? 1 : (s = (s - e) / (n - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function JM(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function $M(s, e) {
  return s + Math.random() * (e - s);
}
function e3(s) {
  return s * (.5 - Math.random());
}
function t3(s) {
  s !== void 0 && (rv = s);
  let e = rv += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function n3(s) {
  return s * hl;
}
function i3(s) {
  return s * Sl;
}
function a3(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function r3(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function s3(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function o3(s, e, n, a, o) {
  const c = Math.cos,
    u = Math.sin,
    f = c(n / 2),
    m = u(n / 2),
    h = c((e + a) / 2),
    x = u((e + a) / 2),
    g = c((e - a) / 2),
    v = u((e - a) / 2),
    y = c((a - e) / 2),
    M = u((a - e) / 2);
  switch (o) {
    case "XYX":
      s.set(f * x, m * g, m * v, f * h);
      break;
    case "YZY":
      s.set(m * v, f * x, m * g, f * h);
      break;
    case "ZXZ":
      s.set(m * g, m * v, f * x, f * h);
      break;
    case "XZX":
      s.set(f * x, m * M, m * y, f * h);
      break;
    case "YXY":
      s.set(m * y, f * x, m * M, f * h);
      break;
    case "ZYZ":
      s.set(m * M, m * y, f * x, f * h);
      break;
    default:
      Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + o);
  }
}
function Gi(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function an(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Pr = {
  DEG2RAD: hl,
  RAD2DEG: Sl,
  generateUUID: La,
  clamp: Ht,
  euclideanModulo: z0,
  mapLinear: WM,
  inverseLerp: YM,
  lerp: pl,
  damp: qM,
  pingpong: ZM,
  smoothstep: KM,
  smootherstep: QM,
  randInt: JM,
  randFloat: $M,
  randFloatSpread: e3,
  seededRandom: t3,
  degToRad: n3,
  radToDeg: i3,
  isPowerOfTwo: a3,
  ceilPowerOfTwo: r3,
  floorPowerOfTwo: s3,
  setQuaternionFromProperEuler: o3,
  normalize: an,
  denormalize: Gi
};
class Wt {
  constructor(e = 0, n = 0) {
    Wt.prototype.isVector2 = !0, this.x = e, this.y = n;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, n) {
    return this.x = e, this.y = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, n) {
    return this.x = e.x + n.x, this.y = e.y + n.y, this;
  }
  addScaledVector(e, n) {
    return this.x += e.x * n, this.y += e.y * n, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, n) {
    return this.x = e.x - n.x, this.y = e.y - n.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const n = this.x,
      a = this.y,
      o = e.elements;
    return this.x = o[0] * n + o[3] * a + o[6], this.y = o[1] * n + o[4] * a + o[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, n) {
    return this.x = Ht(this.x, e.x, n.x), this.y = Ht(this.y, e.y, n.y), this;
  }
  clampScalar(e, n) {
    return this.x = Ht(this.x, e, n), this.y = Ht(this.y, e, n), this;
  }
  clampLength(e, n) {
    const a = this.length();
    return this.divideScalar(a || 1).multiplyScalar(Ht(a, e, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const a = this.dot(e) / n;
    return Math.acos(Ht(a, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      a = this.y - e.y;
    return n * n + a * a;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this;
  }
  lerpVectors(e, n, a) {
    return this.x = e.x + (n.x - e.x) * a, this.y = e.y + (n.y - e.y) * a, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, n = 0) {
    return this.x = e[n], this.y = e[n + 1], this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this.x, e[n + 1] = this.y, e;
  }
  fromBufferAttribute(e, n) {
    return this.x = e.getX(n), this.y = e.getY(n), this;
  }
  rotateAround(e, n) {
    const a = Math.cos(n),
      o = Math.sin(n),
      c = this.x - e.x,
      u = this.y - e.y;
    return this.x = c * a - u * o + e.x, this.y = c * o + u * a + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class El {
  constructor(e = 0, n = 0, a = 0, o = 1) {
    this.isQuaternion = !0, this._x = e, this._y = n, this._z = a, this._w = o;
  }
  static slerpFlat(e, n, a, o, c, u, f) {
    let m = a[o + 0],
      h = a[o + 1],
      x = a[o + 2],
      g = a[o + 3],
      v = c[u + 0],
      y = c[u + 1],
      M = c[u + 2],
      E = c[u + 3];
    if (f <= 0) {
      e[n + 0] = m, e[n + 1] = h, e[n + 2] = x, e[n + 3] = g;
      return;
    }
    if (f >= 1) {
      e[n + 0] = v, e[n + 1] = y, e[n + 2] = M, e[n + 3] = E;
      return;
    }
    if (g !== E || m !== v || h !== y || x !== M) {
      let S = m * v + h * y + x * M + g * E;
      S < 0 && (v = -v, y = -y, M = -M, E = -E, S = -S);
      let _ = 1 - f;
      if (S < .9995) {
        const L = Math.acos(S),
          D = Math.sin(L);
        _ = Math.sin(_ * L) / D, f = Math.sin(f * L) / D, m = m * _ + v * f, h = h * _ + y * f, x = x * _ + M * f, g = g * _ + E * f;
      } else {
        m = m * _ + v * f, h = h * _ + y * f, x = x * _ + M * f, g = g * _ + E * f;
        const L = 1 / Math.sqrt(m * m + h * h + x * x + g * g);
        m *= L, h *= L, x *= L, g *= L;
      }
    }
    e[n] = m, e[n + 1] = h, e[n + 2] = x, e[n + 3] = g;
  }
  static multiplyQuaternionsFlat(e, n, a, o, c, u) {
    const f = a[o],
      m = a[o + 1],
      h = a[o + 2],
      x = a[o + 3],
      g = c[u],
      v = c[u + 1],
      y = c[u + 2],
      M = c[u + 3];
    return e[n] = f * M + x * g + m * y - h * v, e[n + 1] = m * M + x * v + h * g - f * y, e[n + 2] = h * M + x * y + f * v - m * g, e[n + 3] = x * M - f * g - m * v - h * y, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, n, a, o) {
    return this._x = e, this._y = n, this._z = a, this._w = o, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, n = !0) {
    const a = e._x,
      o = e._y,
      c = e._z,
      u = e._order,
      f = Math.cos,
      m = Math.sin,
      h = f(a / 2),
      x = f(o / 2),
      g = f(c / 2),
      v = m(a / 2),
      y = m(o / 2),
      M = m(c / 2);
    switch (u) {
      case "XYZ":
        this._x = v * x * g + h * y * M, this._y = h * y * g - v * x * M, this._z = h * x * M + v * y * g, this._w = h * x * g - v * y * M;
        break;
      case "YXZ":
        this._x = v * x * g + h * y * M, this._y = h * y * g - v * x * M, this._z = h * x * M - v * y * g, this._w = h * x * g + v * y * M;
        break;
      case "ZXY":
        this._x = v * x * g - h * y * M, this._y = h * y * g + v * x * M, this._z = h * x * M + v * y * g, this._w = h * x * g - v * y * M;
        break;
      case "ZYX":
        this._x = v * x * g - h * y * M, this._y = h * y * g + v * x * M, this._z = h * x * M - v * y * g, this._w = h * x * g + v * y * M;
        break;
      case "YZX":
        this._x = v * x * g + h * y * M, this._y = h * y * g + v * x * M, this._z = h * x * M - v * y * g, this._w = h * x * g - v * y * M;
        break;
      case "XZY":
        this._x = v * x * g - h * y * M, this._y = h * y * g - v * x * M, this._z = h * x * M + v * y * g, this._w = h * x * g + v * y * M;
        break;
      default:
        Rt("Quaternion: .setFromEuler() encountered an unknown order: " + u);
    }
    return n === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, n) {
    const a = n / 2,
      o = Math.sin(a);
    return this._x = e.x * o, this._y = e.y * o, this._z = e.z * o, this._w = Math.cos(a), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const n = e.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      u = n[1],
      f = n[5],
      m = n[9],
      h = n[2],
      x = n[6],
      g = n[10],
      v = a + f + g;
    if (v > 0) {
      const y = .5 / Math.sqrt(v + 1);
      this._w = .25 / y, this._x = (x - m) * y, this._y = (c - h) * y, this._z = (u - o) * y;
    } else if (a > f && a > g) {
      const y = 2 * Math.sqrt(1 + a - f - g);
      this._w = (x - m) / y, this._x = .25 * y, this._y = (o + u) / y, this._z = (c + h) / y;
    } else if (f > g) {
      const y = 2 * Math.sqrt(1 + f - a - g);
      this._w = (c - h) / y, this._x = (o + u) / y, this._y = .25 * y, this._z = (m + x) / y;
    } else {
      const y = 2 * Math.sqrt(1 + g - a - f);
      this._w = (u - o) / y, this._x = (c + h) / y, this._y = (m + x) / y, this._z = .25 * y;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, n) {
    let a = e.dot(n) + 1;
    return a < 1e-8 ? (a = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = a) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = a)) : (this._x = e.y * n.z - e.z * n.y, this._y = e.z * n.x - e.x * n.z, this._z = e.x * n.y - e.y * n.x, this._w = a), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ht(this.dot(e), -1, 1)));
  }
  rotateTowards(e, n) {
    const a = this.angleTo(e);
    if (a === 0) return this;
    const o = Math.min(1, n / a);
    return this.slerp(e, o), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, n) {
    const a = e._x,
      o = e._y,
      c = e._z,
      u = e._w,
      f = n._x,
      m = n._y,
      h = n._z,
      x = n._w;
    return this._x = a * x + u * f + o * h - c * m, this._y = o * x + u * m + c * f - a * h, this._z = c * x + u * h + a * m - o * f, this._w = u * x - a * f - o * m - c * h, this._onChangeCallback(), this;
  }
  slerp(e, n) {
    if (n <= 0) return this;
    if (n >= 1) return this.copy(e);
    let a = e._x,
      o = e._y,
      c = e._z,
      u = e._w,
      f = this.dot(e);
    f < 0 && (a = -a, o = -o, c = -c, u = -u, f = -f);
    let m = 1 - n;
    if (f < .9995) {
      const h = Math.acos(f),
        x = Math.sin(h);
      m = Math.sin(m * h) / x, n = Math.sin(n * h) / x, this._x = this._x * m + a * n, this._y = this._y * m + o * n, this._z = this._z * m + c * n, this._w = this._w * m + u * n, this._onChangeCallback();
    } else this._x = this._x * m + a * n, this._y = this._y * m + o * n, this._z = this._z * m + c * n, this._w = this._w * m + u * n, this.normalize();
    return this;
  }
  slerpQuaternions(e, n, a) {
    return this.copy(e).slerp(n, a);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      n = 2 * Math.PI * Math.random(),
      a = Math.random(),
      o = Math.sqrt(1 - a),
      c = Math.sqrt(a);
    return this.set(o * Math.sin(e), o * Math.cos(e), c * Math.sin(n), c * Math.cos(n));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, n = 0) {
    return this._x = e[n], this._y = e[n + 1], this._z = e[n + 2], this._w = e[n + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this._x, e[n + 1] = this._y, e[n + 2] = this._z, e[n + 3] = this._w, e;
  }
  fromBufferAttribute(e, n) {
    return this._x = e.getX(n), this._y = e.getY(n), this._z = e.getZ(n), this._w = e.getW(n), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class be {
  constructor(e = 0, n = 0, a = 0) {
    be.prototype.isVector3 = !0, this.x = e, this.y = n, this.z = a;
  }
  set(e, n, a) {
    return a === void 0 && (a = this.z), this.x = e, this.y = n, this.z = a, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, n) {
    return this.x = e.x + n.x, this.y = e.y + n.y, this.z = e.z + n.z, this;
  }
  addScaledVector(e, n) {
    return this.x += e.x * n, this.y += e.y * n, this.z += e.z * n, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, n) {
    return this.x = e.x - n.x, this.y = e.y - n.y, this.z = e.z - n.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, n) {
    return this.x = e.x * n.x, this.y = e.y * n.y, this.z = e.z * n.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(sv.setFromEuler(e));
  }
  applyAxisAngle(e, n) {
    return this.applyQuaternion(sv.setFromAxisAngle(e, n));
  }
  applyMatrix3(e) {
    const n = this.x,
      a = this.y,
      o = this.z,
      c = e.elements;
    return this.x = c[0] * n + c[3] * a + c[6] * o, this.y = c[1] * n + c[4] * a + c[7] * o, this.z = c[2] * n + c[5] * a + c[8] * o, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const n = this.x,
      a = this.y,
      o = this.z,
      c = e.elements,
      u = 1 / (c[3] * n + c[7] * a + c[11] * o + c[15]);
    return this.x = (c[0] * n + c[4] * a + c[8] * o + c[12]) * u, this.y = (c[1] * n + c[5] * a + c[9] * o + c[13]) * u, this.z = (c[2] * n + c[6] * a + c[10] * o + c[14]) * u, this;
  }
  applyQuaternion(e) {
    const n = this.x,
      a = this.y,
      o = this.z,
      c = e.x,
      u = e.y,
      f = e.z,
      m = e.w,
      h = 2 * (u * o - f * a),
      x = 2 * (f * n - c * o),
      g = 2 * (c * a - u * n);
    return this.x = n + m * h + u * g - f * x, this.y = a + m * x + f * h - c * g, this.z = o + m * g + c * x - u * h, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const n = this.x,
      a = this.y,
      o = this.z,
      c = e.elements;
    return this.x = c[0] * n + c[4] * a + c[8] * o, this.y = c[1] * n + c[5] * a + c[9] * o, this.z = c[2] * n + c[6] * a + c[10] * o, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, n) {
    return this.x = Ht(this.x, e.x, n.x), this.y = Ht(this.y, e.y, n.y), this.z = Ht(this.z, e.z, n.z), this;
  }
  clampScalar(e, n) {
    return this.x = Ht(this.x, e, n), this.y = Ht(this.y, e, n), this.z = Ht(this.z, e, n), this;
  }
  clampLength(e, n) {
    const a = this.length();
    return this.divideScalar(a || 1).multiplyScalar(Ht(a, e, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this.z += (e.z - this.z) * n, this;
  }
  lerpVectors(e, n, a) {
    return this.x = e.x + (n.x - e.x) * a, this.y = e.y + (n.y - e.y) * a, this.z = e.z + (n.z - e.z) * a, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, n) {
    const a = e.x,
      o = e.y,
      c = e.z,
      u = n.x,
      f = n.y,
      m = n.z;
    return this.x = o * m - c * f, this.y = c * u - a * m, this.z = a * f - o * u, this;
  }
  projectOnVector(e) {
    const n = e.lengthSq();
    if (n === 0) return this.set(0, 0, 0);
    const a = e.dot(this) / n;
    return this.copy(e).multiplyScalar(a);
  }
  projectOnPlane(e) {
    return Zd.copy(this).projectOnVector(e), this.sub(Zd);
  }
  reflect(e) {
    return this.sub(Zd.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const a = this.dot(e) / n;
    return Math.acos(Ht(a, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      a = this.y - e.y,
      o = this.z - e.z;
    return n * n + a * a + o * o;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, n, a) {
    const o = Math.sin(n) * e;
    return this.x = o * Math.sin(a), this.y = Math.cos(n) * e, this.z = o * Math.cos(a), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, n, a) {
    return this.x = e * Math.sin(n), this.y = a, this.z = e * Math.cos(n), this;
  }
  setFromMatrixPosition(e) {
    const n = e.elements;
    return this.x = n[12], this.y = n[13], this.z = n[14], this;
  }
  setFromMatrixScale(e) {
    const n = this.setFromMatrixColumn(e, 0).length(),
      a = this.setFromMatrixColumn(e, 1).length(),
      o = this.setFromMatrixColumn(e, 2).length();
    return this.x = n, this.y = a, this.z = o, this;
  }
  setFromMatrixColumn(e, n) {
    return this.fromArray(e.elements, n * 4);
  }
  setFromMatrix3Column(e, n) {
    return this.fromArray(e.elements, n * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, n = 0) {
    return this.x = e[n], this.y = e[n + 1], this.z = e[n + 2], this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this.x, e[n + 1] = this.y, e[n + 2] = this.z, e;
  }
  fromBufferAttribute(e, n) {
    return this.x = e.getX(n), this.y = e.getY(n), this.z = e.getZ(n), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      n = Math.random() * 2 - 1,
      a = Math.sqrt(1 - n * n);
    return this.x = a * Math.cos(e), this.y = n, this.z = a * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Zd = new be();
const sv = new El();
class Lt {
  constructor(e, n, a, o, c, u, f, m, h) {
    Lt.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, n, a, o, c, u, f, m, h);
  }
  set(e, n, a, o, c, u, f, m, h) {
    const x = this.elements;
    return x[0] = e, x[1] = o, x[2] = f, x[3] = n, x[4] = c, x[5] = m, x[6] = a, x[7] = u, x[8] = h, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const n = this.elements,
      a = e.elements;
    return n[0] = a[0], n[1] = a[1], n[2] = a[2], n[3] = a[3], n[4] = a[4], n[5] = a[5], n[6] = a[6], n[7] = a[7], n[8] = a[8], this;
  }
  extractBasis(e, n, a) {
    return e.setFromMatrix3Column(this, 0), n.setFromMatrix3Column(this, 1), a.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const n = e.elements;
    return this.set(n[0], n[4], n[8], n[1], n[5], n[9], n[2], n[6], n[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const a = e.elements,
      o = n.elements,
      c = this.elements,
      u = a[0],
      f = a[3],
      m = a[6],
      h = a[1],
      x = a[4],
      g = a[7],
      v = a[2],
      y = a[5],
      M = a[8],
      E = o[0],
      S = o[3],
      _ = o[6],
      L = o[1],
      D = o[4],
      O = o[7],
      F = o[2],
      P = o[5],
      B = o[8];
    return c[0] = u * E + f * L + m * F, c[3] = u * S + f * D + m * P, c[6] = u * _ + f * O + m * B, c[1] = h * E + x * L + g * F, c[4] = h * S + x * D + g * P, c[7] = h * _ + x * O + g * B, c[2] = v * E + y * L + M * F, c[5] = v * S + y * D + M * P, c[8] = v * _ + y * O + M * B, this;
  }
  multiplyScalar(e) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= e, n[4] *= e, n[7] *= e, n[2] *= e, n[5] *= e, n[8] *= e, this;
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      a = e[1],
      o = e[2],
      c = e[3],
      u = e[4],
      f = e[5],
      m = e[6],
      h = e[7],
      x = e[8];
    return n * u * x - n * f * h - a * c * x + a * f * m + o * c * h - o * u * m;
  }
  invert() {
    const e = this.elements,
      n = e[0],
      a = e[1],
      o = e[2],
      c = e[3],
      u = e[4],
      f = e[5],
      m = e[6],
      h = e[7],
      x = e[8],
      g = x * u - f * h,
      v = f * m - x * c,
      y = h * c - u * m,
      M = n * g + a * v + o * y;
    if (M === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / M;
    return e[0] = g * E, e[1] = (o * h - x * a) * E, e[2] = (f * a - o * u) * E, e[3] = v * E, e[4] = (x * n - o * m) * E, e[5] = (o * c - f * n) * E, e[6] = y * E, e[7] = (a * m - h * n) * E, e[8] = (u * n - a * c) * E, this;
  }
  transpose() {
    let e;
    const n = this.elements;
    return e = n[1], n[1] = n[3], n[3] = e, e = n[2], n[2] = n[6], n[6] = e, e = n[5], n[5] = n[7], n[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const n = this.elements;
    return e[0] = n[0], e[1] = n[3], e[2] = n[6], e[3] = n[1], e[4] = n[4], e[5] = n[7], e[6] = n[2], e[7] = n[5], e[8] = n[8], this;
  }
  setUvTransform(e, n, a, o, c, u, f) {
    const m = Math.cos(c),
      h = Math.sin(c);
    return this.set(a * m, a * h, -a * (m * u + h * f) + u + e, -o * h, o * m, -o * (-h * u + m * f) + f + n, 0, 0, 1), this;
  }
  scale(e, n) {
    return this.premultiply(Kd.makeScale(e, n)), this;
  }
  rotate(e) {
    return this.premultiply(Kd.makeRotation(-e)), this;
  }
  translate(e, n) {
    return this.premultiply(Kd.makeTranslation(e, n)), this;
  }
  makeTranslation(e, n) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, n, 0, 0, 1), this;
  }
  makeRotation(e) {
    const n = Math.cos(e),
      a = Math.sin(e);
    return this.set(n, -a, 0, a, n, 0, 0, 0, 1), this;
  }
  makeScale(e, n) {
    return this.set(e, 0, 0, 0, n, 0, 0, 0, 1), this;
  }
  equals(e) {
    const n = this.elements,
      a = e.elements;
    for (let o = 0; o < 9; o++) if (n[o] !== a[o]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let a = 0; a < 9; a++) this.elements[a] = e[a + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const a = this.elements;
    return e[n] = a[0], e[n + 1] = a[1], e[n + 2] = a[2], e[n + 3] = a[3], e[n + 4] = a[4], e[n + 5] = a[5], e[n + 6] = a[6], e[n + 7] = a[7], e[n + 8] = a[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Kd = new Lt();
const ov = new Lt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322);
const lv = new Lt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function l3() {
  const s = {
      enabled: !0,
      workingColorSpace: io,
      spaces: {},
      convert: function (o, c, u) {
        return this.enabled === !1 || c === u || !c || !u || (this.spaces[c].transfer === ln && (o.r = Ua(o.r), o.g = Ua(o.g), o.b = Ua(o.b)), this.spaces[c].primaries !== this.spaces[u].primaries && (o.applyMatrix3(this.spaces[c].toXYZ), o.applyMatrix3(this.spaces[u].fromXYZ)), this.spaces[u].transfer === ln && (o.r = $s(o.r), o.g = $s(o.g), o.b = $s(o.b))), o;
      },
      workingToColorSpace: function (o, c) {
        return this.convert(o, this.workingColorSpace, c);
      },
      colorSpaceToWorking: function (o, c) {
        return this.convert(o, c, this.workingColorSpace);
      },
      getPrimaries: function (o) {
        return this.spaces[o].primaries;
      },
      getTransfer: function (o) {
        return o === pr ? vu : this.spaces[o].transfer;
      },
      getToneMappingMode: function (o) {
        return this.spaces[o].outputColorSpaceConfig.toneMappingMode || "standard";
      },
      getLuminanceCoefficients: function (o, c = this.workingColorSpace) {
        return o.fromArray(this.spaces[c].luminanceCoefficients);
      },
      define: function (o) {
        Object.assign(this.spaces, o);
      },
      _getMatrix: function (o, c, u) {
        return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (o) {
        return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (o = this.workingColorSpace) {
        return this.spaces[o].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (o, c) {
        return bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), s.workingToColorSpace(o, c);
      },
      toWorkingColorSpace: function (o, c) {
        return bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), s.colorSpaceToWorking(o, c);
      }
    },
    e = [.64, .33, .3, .6, .15, .06],
    n = [.2126, .7152, .0722],
    a = [.3127, .329];
  return s.define({
    [io]: {
      primaries: e,
      whitePoint: a,
      transfer: vu,
      toXYZ: ov,
      fromXYZ: lv,
      luminanceCoefficients: n,
      workingColorSpaceConfig: {
        unpackColorSpace: yi
      },
      outputColorSpaceConfig: {
        drawingBufferColorSpace: yi
      }
    },
    [yi]: {
      primaries: e,
      whitePoint: a,
      transfer: ln,
      toXYZ: ov,
      fromXYZ: lv,
      luminanceCoefficients: n,
      outputColorSpaceConfig: {
        drawingBufferColorSpace: yi
      }
    }
  }), s;
}
const Jt = l3();
function Ua(s) {
  return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4);
}
function $s(s) {
  return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055;
}
let Ns;
class c3 {
  static getDataURL(e, n = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let a;
    if (e instanceof HTMLCanvasElement) a = e;else {
      Ns === void 0 && (Ns = yl("canvas")), Ns.width = e.width, Ns.height = e.height;
      const o = Ns.getContext("2d");
      e instanceof ImageData ? o.putImageData(e, 0, 0) : o.drawImage(e, 0, 0, e.width, e.height), a = Ns;
    }
    return a.toDataURL(n);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const n = yl("canvas");
      n.width = e.width, n.height = e.height;
      const a = n.getContext("2d");
      a.drawImage(e, 0, 0, e.width, e.height);
      const o = a.getImageData(0, 0, e.width, e.height),
        c = o.data;
      for (let u = 0; u < c.length; u++) c[u] = Ua(c[u] / 255) * 255;
      return a.putImageData(o, 0, 0), n;
    } else if (e.data) {
      const n = e.data.slice(0);
      for (let a = 0; a < n.length; a++) n instanceof Uint8Array || n instanceof Uint8ClampedArray ? n[a] = Math.floor(Ua(n[a] / 255) * 255) : n[a] = Ua(n[a]);
      return {
        data: n,
        width: e.width,
        height: e.height
      };
    } else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let u3 = 0;
class F0 {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", {
      value: u3++
    }), this.uuid = La(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  getSize(e) {
    const n = this.data;
    return typeof HTMLVideoElement < "u" && n instanceof HTMLVideoElement ? e.set(n.videoWidth, n.videoHeight, 0) : n instanceof VideoFrame ? e.set(n.displayHeight, n.displayWidth, 0) : n !== null ? e.set(n.width, n.height, n.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    if (!n && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const a = {
        uuid: this.uuid,
        url: ""
      },
      o = this.data;
    if (o !== null) {
      let c;
      if (Array.isArray(o)) {
        c = [];
        for (let u = 0, f = o.length; u < f; u++) o[u].isDataTexture ? c.push(Qd(o[u].image)) : c.push(Qd(o[u]));
      } else c = Qd(o);
      a.url = c;
    }
    return n || (e.images[this.uuid] = a), a;
  }
}
function Qd(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? c3.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (Rt("Texture: Unable to serialize Texture."), {});
}
let f3 = 0;
const Jd = new be();
class Zn extends so {
  constructor(e = Zn.DEFAULT_IMAGE, n = Zn.DEFAULT_MAPPING, a = Ra, o = Ra, c = Oi, u = Wr, f = Vi, m = Oa, h = Zn.DEFAULT_ANISOTROPY, x = pr) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", {
      value: f3++
    }), this.uuid = La(), this.name = "", this.source = new F0(e), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = a, this.wrapT = o, this.magFilter = c, this.minFilter = u, this.anisotropy = h, this.format = f, this.internalFormat = null, this.type = m, this.offset = new Wt(0, 0), this.repeat = new Wt(1, 1), this.center = new Wt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Lt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = x, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Jd).x;
  }
  get height() {
    return this.source.getSize(Jd).y;
  }
  get depth() {
    return this.source.getSize(Jd).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, n) {
    this.updateRanges.push({
      start: e,
      count: n
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  setValues(e) {
    for (const n in e) {
      const a = e[n];
      if (a === void 0) {
        Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);
        continue;
      }
      const o = this[n];
      if (o === void 0) {
        Rt(`Texture.setValues(): property '${n}' does not exist.`);
        continue;
      }
      o && a && o.isVector2 && a.isVector2 || o && a && o.isVector3 && a.isVector3 || o && a && o.isMatrix3 && a.isMatrix3 ? o.copy(a) : this[n] = a;
    }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    if (!n && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const a = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (a.userData = this.userData), n || (e.textures[this.uuid] = a), a;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  transformUv(e) {
    if (this.mapping !== C_) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Zh:
        e.x = e.x - Math.floor(e.x);
        break;
      case Ra:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Kh:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Zh:
        e.y = e.y - Math.floor(e.y);
        break;
      case Ra:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Kh:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Zn.DEFAULT_IMAGE = null;
Zn.DEFAULT_MAPPING = C_;
Zn.DEFAULT_ANISOTROPY = 1;
class En {
  constructor(e = 0, n = 0, a = 0, o = 1) {
    En.prototype.isVector4 = !0, this.x = e, this.y = n, this.z = a, this.w = o;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, n, a, o) {
    return this.x = e, this.y = n, this.z = a, this.w = o, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      case 3:
        this.w = n;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, n) {
    return this.x = e.x + n.x, this.y = e.y + n.y, this.z = e.z + n.z, this.w = e.w + n.w, this;
  }
  addScaledVector(e, n) {
    return this.x += e.x * n, this.y += e.y * n, this.z += e.z * n, this.w += e.w * n, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, n) {
    return this.x = e.x - n.x, this.y = e.y - n.y, this.z = e.z - n.z, this.w = e.w - n.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const n = this.x,
      a = this.y,
      o = this.z,
      c = this.w,
      u = e.elements;
    return this.x = u[0] * n + u[4] * a + u[8] * o + u[12] * c, this.y = u[1] * n + u[5] * a + u[9] * o + u[13] * c, this.z = u[2] * n + u[6] * a + u[10] * o + u[14] * c, this.w = u[3] * n + u[7] * a + u[11] * o + u[15] * c, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const n = Math.sqrt(1 - e.w * e.w);
    return n < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / n, this.y = e.y / n, this.z = e.z / n), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let n, a, o, c;
    const m = e.elements,
      h = m[0],
      x = m[4],
      g = m[8],
      v = m[1],
      y = m[5],
      M = m[9],
      E = m[2],
      S = m[6],
      _ = m[10];
    if (Math.abs(x - v) < .01 && Math.abs(g - E) < .01 && Math.abs(M - S) < .01) {
      if (Math.abs(x + v) < .1 && Math.abs(g + E) < .1 && Math.abs(M + S) < .1 && Math.abs(h + y + _ - 3) < .1) return this.set(1, 0, 0, 0), this;
      n = Math.PI;
      const D = (h + 1) / 2,
        O = (y + 1) / 2,
        F = (_ + 1) / 2,
        P = (x + v) / 4,
        B = (g + E) / 4,
        q = (M + S) / 4;
      return D > O && D > F ? D < .01 ? (a = 0, o = .707106781, c = .707106781) : (a = Math.sqrt(D), o = P / a, c = B / a) : O > F ? O < .01 ? (a = .707106781, o = 0, c = .707106781) : (o = Math.sqrt(O), a = P / o, c = q / o) : F < .01 ? (a = .707106781, o = .707106781, c = 0) : (c = Math.sqrt(F), a = B / c, o = q / c), this.set(a, o, c, n), this;
    }
    let L = Math.sqrt((S - M) * (S - M) + (g - E) * (g - E) + (v - x) * (v - x));
    return Math.abs(L) < .001 && (L = 1), this.x = (S - M) / L, this.y = (g - E) / L, this.z = (v - x) / L, this.w = Math.acos((h + y + _ - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const n = e.elements;
    return this.x = n[12], this.y = n[13], this.z = n[14], this.w = n[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, n) {
    return this.x = Ht(this.x, e.x, n.x), this.y = Ht(this.y, e.y, n.y), this.z = Ht(this.z, e.z, n.z), this.w = Ht(this.w, e.w, n.w), this;
  }
  clampScalar(e, n) {
    return this.x = Ht(this.x, e, n), this.y = Ht(this.y, e, n), this.z = Ht(this.z, e, n), this.w = Ht(this.w, e, n), this;
  }
  clampLength(e, n) {
    const a = this.length();
    return this.divideScalar(a || 1).multiplyScalar(Ht(a, e, n));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this.z += (e.z - this.z) * n, this.w += (e.w - this.w) * n, this;
  }
  lerpVectors(e, n, a) {
    return this.x = e.x + (n.x - e.x) * a, this.y = e.y + (n.y - e.y) * a, this.z = e.z + (n.z - e.z) * a, this.w = e.w + (n.w - e.w) * a, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, n = 0) {
    return this.x = e[n], this.y = e[n + 1], this.z = e[n + 2], this.w = e[n + 3], this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this.x, e[n + 1] = this.y, e[n + 2] = this.z, e[n + 3] = this.w, e;
  }
  fromBufferAttribute(e, n) {
    return this.x = e.getX(n), this.y = e.getY(n), this.z = e.getZ(n), this.w = e.getW(n), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class d3 extends so {
  constructor(e = 1, n = 1, a = {}) {
    super(), a = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Oi,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, a), this.isRenderTarget = !0, this.width = e, this.height = n, this.depth = a.depth, this.scissor = new En(0, 0, e, n), this.scissorTest = !1, this.viewport = new En(0, 0, e, n);
    const o = {
        width: e,
        height: n,
        depth: a.depth
      },
      c = new Zn(o);
    this.textures = [];
    const u = a.count;
    for (let f = 0; f < u; f++) this.textures[f] = c.clone(), this.textures[f].isRenderTargetTexture = !0, this.textures[f].renderTarget = this;
    this._setTextureOptions(a), this.depthBuffer = a.depthBuffer, this.stencilBuffer = a.stencilBuffer, this.resolveDepthBuffer = a.resolveDepthBuffer, this.resolveStencilBuffer = a.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = a.depthTexture, this.samples = a.samples, this.multiview = a.multiview;
  }
  _setTextureOptions(e = {}) {
    const n = {
      minFilter: Oi,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (n.mapping = e.mapping), e.wrapS !== void 0 && (n.wrapS = e.wrapS), e.wrapT !== void 0 && (n.wrapT = e.wrapT), e.wrapR !== void 0 && (n.wrapR = e.wrapR), e.magFilter !== void 0 && (n.magFilter = e.magFilter), e.minFilter !== void 0 && (n.minFilter = e.minFilter), e.format !== void 0 && (n.format = e.format), e.type !== void 0 && (n.type = e.type), e.anisotropy !== void 0 && (n.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (n.colorSpace = e.colorSpace), e.flipY !== void 0 && (n.flipY = e.flipY), e.generateMipmaps !== void 0 && (n.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (n.internalFormat = e.internalFormat);
    for (let a = 0; a < this.textures.length; a++) this.textures[a].setValues(n);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, n, a = 1) {
    if (this.width !== e || this.height !== n || this.depth !== a) {
      this.width = e, this.height = n, this.depth = a;
      for (let o = 0, c = this.textures.length; o < c; o++) this.textures[o].image.width = e, this.textures[o].image.height = n, this.textures[o].image.depth = a, this.textures[o].isData3DTexture !== !0 && (this.textures[o].isArrayTexture = this.textures[o].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, n), this.scissor.set(0, 0, e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, a = e.textures.length; n < a; n++) {
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0, this.textures[n].renderTarget = this;
      const o = Object.assign({}, e.textures[n].image);
      this.textures[n].source = new F0(o);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
class Kr extends d3 {
  constructor(e = 1, n = 1, a = {}) {
    super(e, n, a), this.isWebGLRenderTarget = !0;
  }
}
class B_ extends Zn {
  constructor(e = null, n = 1, a = 1, o = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: n,
      height: a,
      depth: o
    }, this.magFilter = bi, this.minFilter = bi, this.wrapR = Ra, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class h3 extends Zn {
  constructor(e = null, n = 1, a = 1, o = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: n,
      height: a,
      depth: o
    }, this.magFilter = bi, this.minFilter = bi, this.wrapR = Ra, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Tl {
  constructor(e = new be(1 / 0, 1 / 0, 1 / 0), n = new be(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = n;
  }
  set(e, n) {
    return this.min.copy(e), this.max.copy(n), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let n = 0, a = e.length; n < a; n += 3) this.expandByPoint(Fi.fromArray(e, n));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let n = 0, a = e.count; n < a; n++) this.expandByPoint(Fi.fromBufferAttribute(e, n));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let n = 0, a = e.length; n < a; n++) this.expandByPoint(e[n]);
    return this;
  }
  setFromCenterAndSize(e, n) {
    const a = Fi.copy(n).multiplyScalar(.5);
    return this.min.copy(e).sub(a), this.max.copy(e).add(a), this;
  }
  setFromObject(e, n = !1) {
    return this.makeEmpty(), this.expandByObject(e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, n = !1) {
    e.updateWorldMatrix(!1, !1);
    const a = e.geometry;
    if (a !== void 0) {
      const c = a.getAttribute("position");
      if (n === !0 && c !== void 0 && e.isInstancedMesh !== !0) for (let u = 0, f = c.count; u < f; u++) e.isMesh === !0 ? e.getVertexPosition(u, Fi) : Fi.fromBufferAttribute(c, u), Fi.applyMatrix4(e.matrixWorld), this.expandByPoint(Fi);else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Bc.copy(e.boundingBox)) : (a.boundingBox === null && a.computeBoundingBox(), Bc.copy(a.boundingBox)), Bc.applyMatrix4(e.matrixWorld), this.union(Bc);
    }
    const o = e.children;
    for (let c = 0, u = o.length; c < u; c++) this.expandByObject(o[c], n);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, n) {
    return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Fi), Fi.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let n, a;
    return e.normal.x > 0 ? (n = e.normal.x * this.min.x, a = e.normal.x * this.max.x) : (n = e.normal.x * this.max.x, a = e.normal.x * this.min.x), e.normal.y > 0 ? (n += e.normal.y * this.min.y, a += e.normal.y * this.max.y) : (n += e.normal.y * this.max.y, a += e.normal.y * this.min.y), e.normal.z > 0 ? (n += e.normal.z * this.min.z, a += e.normal.z * this.max.z) : (n += e.normal.z * this.max.z, a += e.normal.z * this.min.z), n <= -e.constant && a >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(el), Hc.subVectors(this.max, el), Ls.subVectors(e.a, el), Us.subVectors(e.b, el), Os.subVectors(e.c, el), lr.subVectors(Us, Ls), cr.subVectors(Os, Us), Ir.subVectors(Ls, Os);
    let n = [0, -lr.z, lr.y, 0, -cr.z, cr.y, 0, -Ir.z, Ir.y, lr.z, 0, -lr.x, cr.z, 0, -cr.x, Ir.z, 0, -Ir.x, -lr.y, lr.x, 0, -cr.y, cr.x, 0, -Ir.y, Ir.x, 0];
    return !$d(n, Ls, Us, Os, Hc) || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$d(n, Ls, Us, Os, Hc)) ? !1 : (Gc.crossVectors(lr, cr), n = [Gc.x, Gc.y, Gc.z], $d(n, Ls, Us, Os, Hc));
  }
  clampPoint(e, n) {
    return n.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Fi).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Fi).length() * .5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (va[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), va[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), va[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), va[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), va[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), va[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), va[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), va[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(va), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const va = [new be(), new be(), new be(), new be(), new be(), new be(), new be(), new be()];
const Fi = new be();
const Bc = new Tl();
const Ls = new be();
const Us = new be();
const Os = new be();
const lr = new be();
const cr = new be();
const Ir = new be();
const el = new be();
const Hc = new be();
const Gc = new be();
const zr = new be();
function $d(s, e, n, a, o) {
  for (let c = 0, u = s.length - 3; c <= u; c += 3) {
    zr.fromArray(s, c);
    const f = o.x * Math.abs(zr.x) + o.y * Math.abs(zr.y) + o.z * Math.abs(zr.z),
      m = e.dot(zr),
      h = n.dot(zr),
      x = a.dot(zr);
    if (Math.max(-Math.max(m, h, x), Math.min(m, h, x)) > f) return !1;
  }
  return !0;
}
const p3 = new Tl();
const tl = new be();
const eh = new be();
class B0 {
  constructor(e = new be(), n = -1) {
    this.isSphere = !0, this.center = e, this.radius = n;
  }
  set(e, n) {
    return this.center.copy(e), this.radius = n, this;
  }
  setFromPoints(e, n) {
    const a = this.center;
    n !== void 0 ? a.copy(n) : p3.setFromPoints(e).getCenter(a);
    let o = 0;
    for (let c = 0, u = e.length; c < u; c++) o = Math.max(o, a.distanceToSquared(e[c]));
    return this.radius = Math.sqrt(o), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const n = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= n * n;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, n) {
    const a = this.center.distanceToSquared(e);
    return n.copy(e), a > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    tl.subVectors(e, this.center);
    const n = tl.lengthSq();
    if (n > this.radius * this.radius) {
      const a = Math.sqrt(n),
        o = (a - this.radius) * .5;
      this.center.addScaledVector(tl, o / a), this.radius += o;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (eh.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(tl.copy(e.center).add(eh)), this.expandByPoint(tl.copy(e.center).sub(eh))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const _a = new be();
const th = new be();
const Vc = new be();
const ur = new be();
const nh = new be();
const kc = new be();
const ih = new be();
class m3 {
  constructor(e = new be(), n = new be(0, 0, -1)) {
    this.origin = e, this.direction = n;
  }
  set(e, n) {
    return this.origin.copy(e), this.direction.copy(n), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, n) {
    return n.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, _a)), this;
  }
  closestPointToPoint(e, n) {
    n.subVectors(e, this.origin);
    const a = n.dot(this.direction);
    return a < 0 ? n.copy(this.origin) : n.copy(this.origin).addScaledVector(this.direction, a);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const n = _a.subVectors(e, this.origin).dot(this.direction);
    return n < 0 ? this.origin.distanceToSquared(e) : (_a.copy(this.origin).addScaledVector(this.direction, n), _a.distanceToSquared(e));
  }
  distanceSqToSegment(e, n, a, o) {
    th.copy(e).add(n).multiplyScalar(.5), Vc.copy(n).sub(e).normalize(), ur.copy(this.origin).sub(th);
    const c = e.distanceTo(n) * .5,
      u = -this.direction.dot(Vc),
      f = ur.dot(this.direction),
      m = -ur.dot(Vc),
      h = ur.lengthSq(),
      x = Math.abs(1 - u * u);
    let g, v, y, M;
    if (x > 0) {
      if (g = u * m - f, v = u * f - m, M = c * x, g >= 0) {
        if (v >= -M) {
          if (v <= M) {
            const E = 1 / x;
            g *= E, v *= E, y = g * (g + u * v + 2 * f) + v * (u * g + v + 2 * m) + h;
          } else v = c, g = Math.max(0, -(u * v + f)), y = -g * g + v * (v + 2 * m) + h;
        } else v = -c, g = Math.max(0, -(u * v + f)), y = -g * g + v * (v + 2 * m) + h;
      } else v <= -M ? (g = Math.max(0, -(-u * c + f)), v = g > 0 ? -c : Math.min(Math.max(-c, -m), c), y = -g * g + v * (v + 2 * m) + h) : v <= M ? (g = 0, v = Math.min(Math.max(-c, -m), c), y = v * (v + 2 * m) + h) : (g = Math.max(0, -(u * c + f)), v = g > 0 ? c : Math.min(Math.max(-c, -m), c), y = -g * g + v * (v + 2 * m) + h);
    } else v = u > 0 ? -c : c, g = Math.max(0, -(u * v + f)), y = -g * g + v * (v + 2 * m) + h;
    return a && a.copy(this.origin).addScaledVector(this.direction, g), o && o.copy(th).addScaledVector(Vc, v), y;
  }
  intersectSphere(e, n) {
    _a.subVectors(e.center, this.origin);
    const a = _a.dot(this.direction),
      o = _a.dot(_a) - a * a,
      c = e.radius * e.radius;
    if (o > c) return null;
    const u = Math.sqrt(c - o),
      f = a - u,
      m = a + u;
    return m < 0 ? null : f < 0 ? this.at(m, n) : this.at(f, n);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const n = e.normal.dot(this.direction);
    if (n === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const a = -(this.origin.dot(e.normal) + e.constant) / n;
    return a >= 0 ? a : null;
  }
  intersectPlane(e, n) {
    const a = this.distanceToPlane(e);
    return a === null ? null : this.at(a, n);
  }
  intersectsPlane(e) {
    const n = e.distanceToPoint(this.origin);
    return n === 0 || e.normal.dot(this.direction) * n < 0;
  }
  intersectBox(e, n) {
    let a, o, c, u, f, m;
    const h = 1 / this.direction.x,
      x = 1 / this.direction.y,
      g = 1 / this.direction.z,
      v = this.origin;
    return h >= 0 ? (a = (e.min.x - v.x) * h, o = (e.max.x - v.x) * h) : (a = (e.max.x - v.x) * h, o = (e.min.x - v.x) * h), x >= 0 ? (c = (e.min.y - v.y) * x, u = (e.max.y - v.y) * x) : (c = (e.max.y - v.y) * x, u = (e.min.y - v.y) * x), a > u || c > o || ((c > a || isNaN(a)) && (a = c), (u < o || isNaN(o)) && (o = u), g >= 0 ? (f = (e.min.z - v.z) * g, m = (e.max.z - v.z) * g) : (f = (e.max.z - v.z) * g, m = (e.min.z - v.z) * g), a > m || f > o) || ((f > a || a !== a) && (a = f), (m < o || o !== o) && (o = m), o < 0) ? null : this.at(a >= 0 ? a : o, n);
  }
  intersectsBox(e) {
    return this.intersectBox(e, _a) !== null;
  }
  intersectTriangle(e, n, a, o, c) {
    nh.subVectors(n, e), kc.subVectors(a, e), ih.crossVectors(nh, kc);
    let u = this.direction.dot(ih),
      f;
    if (u > 0) {
      if (o) return null;
      f = 1;
    } else if (u < 0) f = -1, u = -u;else return null;
    ur.subVectors(this.origin, e);
    const m = f * this.direction.dot(kc.crossVectors(ur, kc));
    if (m < 0) return null;
    const h = f * this.direction.dot(nh.cross(ur));
    if (h < 0 || m + h > u) return null;
    const x = -f * ur.dot(ih);
    return x < 0 ? null : this.at(x / u, c);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ln {
  constructor(e, n, a, o, c, u, f, m, h, x, g, v, y, M, E, S) {
    Ln.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, n, a, o, c, u, f, m, h, x, g, v, y, M, E, S);
  }
  set(e, n, a, o, c, u, f, m, h, x, g, v, y, M, E, S) {
    const _ = this.elements;
    return _[0] = e, _[4] = n, _[8] = a, _[12] = o, _[1] = c, _[5] = u, _[9] = f, _[13] = m, _[2] = h, _[6] = x, _[10] = g, _[14] = v, _[3] = y, _[7] = M, _[11] = E, _[15] = S, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ln().fromArray(this.elements);
  }
  copy(e) {
    const n = this.elements,
      a = e.elements;
    return n[0] = a[0], n[1] = a[1], n[2] = a[2], n[3] = a[3], n[4] = a[4], n[5] = a[5], n[6] = a[6], n[7] = a[7], n[8] = a[8], n[9] = a[9], n[10] = a[10], n[11] = a[11], n[12] = a[12], n[13] = a[13], n[14] = a[14], n[15] = a[15], this;
  }
  copyPosition(e) {
    const n = this.elements,
      a = e.elements;
    return n[12] = a[12], n[13] = a[13], n[14] = a[14], this;
  }
  setFromMatrix3(e) {
    const n = e.elements;
    return this.set(n[0], n[3], n[6], 0, n[1], n[4], n[7], 0, n[2], n[5], n[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, n, a) {
    return e.setFromMatrixColumn(this, 0), n.setFromMatrixColumn(this, 1), a.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, n, a) {
    return this.set(e.x, n.x, a.x, 0, e.y, n.y, a.y, 0, e.z, n.z, a.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const n = this.elements,
      a = e.elements,
      o = 1 / Ps.setFromMatrixColumn(e, 0).length(),
      c = 1 / Ps.setFromMatrixColumn(e, 1).length(),
      u = 1 / Ps.setFromMatrixColumn(e, 2).length();
    return n[0] = a[0] * o, n[1] = a[1] * o, n[2] = a[2] * o, n[3] = 0, n[4] = a[4] * c, n[5] = a[5] * c, n[6] = a[6] * c, n[7] = 0, n[8] = a[8] * u, n[9] = a[9] * u, n[10] = a[10] * u, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const n = this.elements,
      a = e.x,
      o = e.y,
      c = e.z,
      u = Math.cos(a),
      f = Math.sin(a),
      m = Math.cos(o),
      h = Math.sin(o),
      x = Math.cos(c),
      g = Math.sin(c);
    if (e.order === "XYZ") {
      const v = u * x,
        y = u * g,
        M = f * x,
        E = f * g;
      n[0] = m * x, n[4] = -m * g, n[8] = h, n[1] = y + M * h, n[5] = v - E * h, n[9] = -f * m, n[2] = E - v * h, n[6] = M + y * h, n[10] = u * m;
    } else if (e.order === "YXZ") {
      const v = m * x,
        y = m * g,
        M = h * x,
        E = h * g;
      n[0] = v + E * f, n[4] = M * f - y, n[8] = u * h, n[1] = u * g, n[5] = u * x, n[9] = -f, n[2] = y * f - M, n[6] = E + v * f, n[10] = u * m;
    } else if (e.order === "ZXY") {
      const v = m * x,
        y = m * g,
        M = h * x,
        E = h * g;
      n[0] = v - E * f, n[4] = -u * g, n[8] = M + y * f, n[1] = y + M * f, n[5] = u * x, n[9] = E - v * f, n[2] = -u * h, n[6] = f, n[10] = u * m;
    } else if (e.order === "ZYX") {
      const v = u * x,
        y = u * g,
        M = f * x,
        E = f * g;
      n[0] = m * x, n[4] = M * h - y, n[8] = v * h + E, n[1] = m * g, n[5] = E * h + v, n[9] = y * h - M, n[2] = -h, n[6] = f * m, n[10] = u * m;
    } else if (e.order === "YZX") {
      const v = u * m,
        y = u * h,
        M = f * m,
        E = f * h;
      n[0] = m * x, n[4] = E - v * g, n[8] = M * g + y, n[1] = g, n[5] = u * x, n[9] = -f * x, n[2] = -h * x, n[6] = y * g + M, n[10] = v - E * g;
    } else if (e.order === "XZY") {
      const v = u * m,
        y = u * h,
        M = f * m,
        E = f * h;
      n[0] = m * x, n[4] = -g, n[8] = h * x, n[1] = v * g + E, n[5] = u * x, n[9] = y * g - M, n[2] = M * g - y, n[6] = f * x, n[10] = E * g + v;
    }
    return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(g3, e, x3);
  }
  lookAt(e, n, a) {
    const o = this.elements;
    return vi.subVectors(e, n), vi.lengthSq() === 0 && (vi.z = 1), vi.normalize(), fr.crossVectors(a, vi), fr.lengthSq() === 0 && (Math.abs(a.z) === 1 ? vi.x += 1e-4 : vi.z += 1e-4, vi.normalize(), fr.crossVectors(a, vi)), fr.normalize(), jc.crossVectors(vi, fr), o[0] = fr.x, o[4] = jc.x, o[8] = vi.x, o[1] = fr.y, o[5] = jc.y, o[9] = vi.y, o[2] = fr.z, o[6] = jc.z, o[10] = vi.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const a = e.elements,
      o = n.elements,
      c = this.elements,
      u = a[0],
      f = a[4],
      m = a[8],
      h = a[12],
      x = a[1],
      g = a[5],
      v = a[9],
      y = a[13],
      M = a[2],
      E = a[6],
      S = a[10],
      _ = a[14],
      L = a[3],
      D = a[7],
      O = a[11],
      F = a[15],
      P = o[0],
      B = o[4],
      q = o[8],
      w = o[12],
      A = o[1],
      H = o[5],
      k = o[9],
      W = o[13],
      J = o[2],
      ie = o[6],
      I = o[10],
      Y = o[14],
      Z = o[3],
      pe = o[7],
      Me = o[11],
      z = o[15];
    return c[0] = u * P + f * A + m * J + h * Z, c[4] = u * B + f * H + m * ie + h * pe, c[8] = u * q + f * k + m * I + h * Me, c[12] = u * w + f * W + m * Y + h * z, c[1] = x * P + g * A + v * J + y * Z, c[5] = x * B + g * H + v * ie + y * pe, c[9] = x * q + g * k + v * I + y * Me, c[13] = x * w + g * W + v * Y + y * z, c[2] = M * P + E * A + S * J + _ * Z, c[6] = M * B + E * H + S * ie + _ * pe, c[10] = M * q + E * k + S * I + _ * Me, c[14] = M * w + E * W + S * Y + _ * z, c[3] = L * P + D * A + O * J + F * Z, c[7] = L * B + D * H + O * ie + F * pe, c[11] = L * q + D * k + O * I + F * Me, c[15] = L * w + D * W + O * Y + F * z, this;
  }
  multiplyScalar(e) {
    const n = this.elements;
    return n[0] *= e, n[4] *= e, n[8] *= e, n[12] *= e, n[1] *= e, n[5] *= e, n[9] *= e, n[13] *= e, n[2] *= e, n[6] *= e, n[10] *= e, n[14] *= e, n[3] *= e, n[7] *= e, n[11] *= e, n[15] *= e, this;
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      a = e[4],
      o = e[8],
      c = e[12],
      u = e[1],
      f = e[5],
      m = e[9],
      h = e[13],
      x = e[2],
      g = e[6],
      v = e[10],
      y = e[14],
      M = e[3],
      E = e[7],
      S = e[11],
      _ = e[15];
    return M * (+c * m * g - o * h * g - c * f * v + a * h * v + o * f * y - a * m * y) + E * (+n * m * y - n * h * v + c * u * v - o * u * y + o * h * x - c * m * x) + S * (+n * h * g - n * f * y - c * u * g + a * u * y + c * f * x - a * h * x) + _ * (-o * f * x - n * m * g + n * f * v + o * u * g - a * u * v + a * m * x);
  }
  transpose() {
    const e = this.elements;
    let n;
    return n = e[1], e[1] = e[4], e[4] = n, n = e[2], e[2] = e[8], e[8] = n, n = e[6], e[6] = e[9], e[9] = n, n = e[3], e[3] = e[12], e[12] = n, n = e[7], e[7] = e[13], e[13] = n, n = e[11], e[11] = e[14], e[14] = n, this;
  }
  setPosition(e, n, a) {
    const o = this.elements;
    return e.isVector3 ? (o[12] = e.x, o[13] = e.y, o[14] = e.z) : (o[12] = e, o[13] = n, o[14] = a), this;
  }
  invert() {
    const e = this.elements,
      n = e[0],
      a = e[1],
      o = e[2],
      c = e[3],
      u = e[4],
      f = e[5],
      m = e[6],
      h = e[7],
      x = e[8],
      g = e[9],
      v = e[10],
      y = e[11],
      M = e[12],
      E = e[13],
      S = e[14],
      _ = e[15],
      L = g * S * h - E * v * h + E * m * y - f * S * y - g * m * _ + f * v * _,
      D = M * v * h - x * S * h - M * m * y + u * S * y + x * m * _ - u * v * _,
      O = x * E * h - M * g * h + M * f * y - u * E * y - x * f * _ + u * g * _,
      F = M * g * m - x * E * m - M * f * v + u * E * v + x * f * S - u * g * S,
      P = n * L + a * D + o * O + c * F;
    if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const B = 1 / P;
    return e[0] = L * B, e[1] = (E * v * c - g * S * c - E * o * y + a * S * y + g * o * _ - a * v * _) * B, e[2] = (f * S * c - E * m * c + E * o * h - a * S * h - f * o * _ + a * m * _) * B, e[3] = (g * m * c - f * v * c - g * o * h + a * v * h + f * o * y - a * m * y) * B, e[4] = D * B, e[5] = (x * S * c - M * v * c + M * o * y - n * S * y - x * o * _ + n * v * _) * B, e[6] = (M * m * c - u * S * c - M * o * h + n * S * h + u * o * _ - n * m * _) * B, e[7] = (u * v * c - x * m * c + x * o * h - n * v * h - u * o * y + n * m * y) * B, e[8] = O * B, e[9] = (M * g * c - x * E * c - M * a * y + n * E * y + x * a * _ - n * g * _) * B, e[10] = (u * E * c - M * f * c + M * a * h - n * E * h - u * a * _ + n * f * _) * B, e[11] = (x * f * c - u * g * c - x * a * h + n * g * h + u * a * y - n * f * y) * B, e[12] = F * B, e[13] = (x * E * o - M * g * o + M * a * v - n * E * v - x * a * S + n * g * S) * B, e[14] = (M * f * o - u * E * o - M * a * m + n * E * m + u * a * S - n * f * S) * B, e[15] = (u * g * o - x * f * o + x * a * m - n * g * m - u * a * v + n * f * v) * B, this;
  }
  scale(e) {
    const n = this.elements,
      a = e.x,
      o = e.y,
      c = e.z;
    return n[0] *= a, n[4] *= o, n[8] *= c, n[1] *= a, n[5] *= o, n[9] *= c, n[2] *= a, n[6] *= o, n[10] *= c, n[3] *= a, n[7] *= o, n[11] *= c, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      a = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      o = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(n, a, o));
  }
  makeTranslation(e, n, a) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, n, 0, 0, 1, a, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const n = Math.cos(e),
      a = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, n, -a, 0, 0, a, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const n = Math.cos(e),
      a = Math.sin(e);
    return this.set(n, 0, a, 0, 0, 1, 0, 0, -a, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const n = Math.cos(e),
      a = Math.sin(e);
    return this.set(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, n) {
    const a = Math.cos(n),
      o = Math.sin(n),
      c = 1 - a,
      u = e.x,
      f = e.y,
      m = e.z,
      h = c * u,
      x = c * f;
    return this.set(h * u + a, h * f - o * m, h * m + o * f, 0, h * f + o * m, x * f + a, x * m - o * u, 0, h * m - o * f, x * m + o * u, c * m * m + a, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, n, a) {
    return this.set(e, 0, 0, 0, 0, n, 0, 0, 0, 0, a, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, n, a, o, c, u) {
    return this.set(1, a, c, 0, e, 1, u, 0, n, o, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, n, a) {
    const o = this.elements,
      c = n._x,
      u = n._y,
      f = n._z,
      m = n._w,
      h = c + c,
      x = u + u,
      g = f + f,
      v = c * h,
      y = c * x,
      M = c * g,
      E = u * x,
      S = u * g,
      _ = f * g,
      L = m * h,
      D = m * x,
      O = m * g,
      F = a.x,
      P = a.y,
      B = a.z;
    return o[0] = (1 - (E + _)) * F, o[1] = (y + O) * F, o[2] = (M - D) * F, o[3] = 0, o[4] = (y - O) * P, o[5] = (1 - (v + _)) * P, o[6] = (S + L) * P, o[7] = 0, o[8] = (M + D) * B, o[9] = (S - L) * B, o[10] = (1 - (v + E)) * B, o[11] = 0, o[12] = e.x, o[13] = e.y, o[14] = e.z, o[15] = 1, this;
  }
  decompose(e, n, a) {
    const o = this.elements;
    let c = Ps.set(o[0], o[1], o[2]).length();
    const u = Ps.set(o[4], o[5], o[6]).length(),
      f = Ps.set(o[8], o[9], o[10]).length();
    this.determinant() < 0 && (c = -c), e.x = o[12], e.y = o[13], e.z = o[14], Bi.copy(this);
    const h = 1 / c,
      x = 1 / u,
      g = 1 / f;
    return Bi.elements[0] *= h, Bi.elements[1] *= h, Bi.elements[2] *= h, Bi.elements[4] *= x, Bi.elements[5] *= x, Bi.elements[6] *= x, Bi.elements[8] *= g, Bi.elements[9] *= g, Bi.elements[10] *= g, n.setFromRotationMatrix(Bi), a.x = c, a.y = u, a.z = f, this;
  }
  makePerspective(e, n, a, o, c, u, f = Ji, m = !1) {
    const h = this.elements,
      x = 2 * c / (n - e),
      g = 2 * c / (a - o),
      v = (n + e) / (n - e),
      y = (a + o) / (a - o);
    let M, E;
    if (m) M = c / (u - c), E = u * c / (u - c);else if (f === Ji) M = -(u + c) / (u - c), E = -2 * u * c / (u - c);else if (f === _u) M = -u / (u - c), E = -u * c / (u - c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + f);
    return h[0] = x, h[4] = 0, h[8] = v, h[12] = 0, h[1] = 0, h[5] = g, h[9] = y, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = M, h[14] = E, h[3] = 0, h[7] = 0, h[11] = -1, h[15] = 0, this;
  }
  makeOrthographic(e, n, a, o, c, u, f = Ji, m = !1) {
    const h = this.elements,
      x = 2 / (n - e),
      g = 2 / (a - o),
      v = -(n + e) / (n - e),
      y = -(a + o) / (a - o);
    let M, E;
    if (m) M = 1 / (u - c), E = u / (u - c);else if (f === Ji) M = -2 / (u - c), E = -(u + c) / (u - c);else if (f === _u) M = -1 / (u - c), E = -c / (u - c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + f);
    return h[0] = x, h[4] = 0, h[8] = 0, h[12] = v, h[1] = 0, h[5] = g, h[9] = 0, h[13] = y, h[2] = 0, h[6] = 0, h[10] = M, h[14] = E, h[3] = 0, h[7] = 0, h[11] = 0, h[15] = 1, this;
  }
  equals(e) {
    const n = this.elements,
      a = e.elements;
    for (let o = 0; o < 16; o++) if (n[o] !== a[o]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let a = 0; a < 16; a++) this.elements[a] = e[a + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const a = this.elements;
    return e[n] = a[0], e[n + 1] = a[1], e[n + 2] = a[2], e[n + 3] = a[3], e[n + 4] = a[4], e[n + 5] = a[5], e[n + 6] = a[6], e[n + 7] = a[7], e[n + 8] = a[8], e[n + 9] = a[9], e[n + 10] = a[10], e[n + 11] = a[11], e[n + 12] = a[12], e[n + 13] = a[13], e[n + 14] = a[14], e[n + 15] = a[15], e;
  }
}
const Ps = new be();
const Bi = new Ln();
const g3 = new be(0, 0, 0);
const x3 = new be(1, 1, 1);
const fr = new be();
const jc = new be();
const vi = new be();
const cv = new Ln();
const uv = new El();
class Pa {
  constructor(e = 0, n = 0, a = 0, o = Pa.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = n, this._z = a, this._order = o;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, n, a, o = this._order) {
    return this._x = e, this._y = n, this._z = a, this._order = o, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, n = this._order, a = !0) {
    const o = e.elements,
      c = o[0],
      u = o[4],
      f = o[8],
      m = o[1],
      h = o[5],
      x = o[9],
      g = o[2],
      v = o[6],
      y = o[10];
    switch (n) {
      case "XYZ":
        this._y = Math.asin(Ht(f, -1, 1)), Math.abs(f) < .9999999 ? (this._x = Math.atan2(-x, y), this._z = Math.atan2(-u, c)) : (this._x = Math.atan2(v, h), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ht(x, -1, 1)), Math.abs(x) < .9999999 ? (this._y = Math.atan2(f, y), this._z = Math.atan2(m, h)) : (this._y = Math.atan2(-g, c), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ht(v, -1, 1)), Math.abs(v) < .9999999 ? (this._y = Math.atan2(-g, y), this._z = Math.atan2(-u, h)) : (this._y = 0, this._z = Math.atan2(m, c));
        break;
      case "ZYX":
        this._y = Math.asin(-Ht(g, -1, 1)), Math.abs(g) < .9999999 ? (this._x = Math.atan2(v, y), this._z = Math.atan2(m, c)) : (this._x = 0, this._z = Math.atan2(-u, h));
        break;
      case "YZX":
        this._z = Math.asin(Ht(m, -1, 1)), Math.abs(m) < .9999999 ? (this._x = Math.atan2(-x, h), this._y = Math.atan2(-g, c)) : (this._x = 0, this._y = Math.atan2(f, y));
        break;
      case "XZY":
        this._z = Math.asin(-Ht(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(v, h), this._y = Math.atan2(f, c)) : (this._x = Math.atan2(-x, y), this._y = 0);
        break;
      default:
        Rt("Euler: .setFromRotationMatrix() encountered an unknown order: " + n);
    }
    return this._order = n, a === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, n, a) {
    return cv.makeRotationFromQuaternion(e), this.setFromRotationMatrix(cv, n, a);
  }
  setFromVector3(e, n = this._order) {
    return this.set(e.x, e.y, e.z, n);
  }
  reorder(e) {
    return uv.setFromEuler(this), this.setFromQuaternion(uv, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this._x, e[n + 1] = this._y, e[n + 2] = this._z, e[n + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Pa.DEFAULT_ORDER = "XYZ";
class H_ {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let v3 = 0;
const fv = new be();
const Is = new El();
const ya = new Ln();
const Xc = new be();
const nl = new be();
const _3 = new be();
const y3 = new El();
const dv = new be(1, 0, 0);
const hv = new be(0, 1, 0);
const pv = new be(0, 0, 1);
const mv = {
  type: "added"
};
const b3 = {
  type: "removed"
};
const zs = {
  type: "childadded",
  child: null
};
const ah = {
  type: "childremoved",
  child: null
};
class ui extends so {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
      value: v3++
    }), this.uuid = La(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ui.DEFAULT_UP.clone();
    const e = new be(),
      n = new Pa(),
      a = new El(),
      o = new be(1, 1, 1);
    function c() {
      a.setFromEuler(n, !1);
    }
    function u() {
      n.setFromQuaternion(a, void 0, !1);
    }
    n._onChange(c), a._onChange(u), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: a
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: o
      },
      modelViewMatrix: {
        value: new Ln()
      },
      normalMatrix: {
        value: new Lt()
      }
    }), this.matrix = new Ln(), this.matrixWorld = new Ln(), this.matrixAutoUpdate = ui.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new H_(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, n) {
    this.quaternion.setFromAxisAngle(e, n);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, n) {
    return Is.setFromAxisAngle(e, n), this.quaternion.multiply(Is), this;
  }
  rotateOnWorldAxis(e, n) {
    return Is.setFromAxisAngle(e, n), this.quaternion.premultiply(Is), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(dv, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(hv, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(pv, e);
  }
  translateOnAxis(e, n) {
    return fv.copy(e).applyQuaternion(this.quaternion), this.position.add(fv.multiplyScalar(n)), this;
  }
  translateX(e) {
    return this.translateOnAxis(dv, e);
  }
  translateY(e) {
    return this.translateOnAxis(hv, e);
  }
  translateZ(e) {
    return this.translateOnAxis(pv, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ya.copy(this.matrixWorld).invert());
  }
  lookAt(e, n, a) {
    e.isVector3 ? Xc.copy(e) : Xc.set(e, n, a);
    const o = this.parent;
    this.updateWorldMatrix(!0, !1), nl.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ya.lookAt(nl, Xc, this.up) : ya.lookAt(Xc, nl, this.up), this.quaternion.setFromRotationMatrix(ya), o && (ya.extractRotation(o.matrixWorld), Is.setFromRotationMatrix(ya), this.quaternion.premultiply(Is.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return e === this ? (yn("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(mv), zs.child = e, this.dispatchEvent(zs), zs.child = null) : yn("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let a = 0; a < arguments.length; a++) this.remove(arguments[a]);
      return this;
    }
    const n = this.children.indexOf(e);
    return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(b3), ah.child = e, this.dispatchEvent(ah), ah.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), ya.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ya.multiply(e.parent.matrixWorld)), e.applyMatrix4(ya), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(mv), zs.child = e, this.dispatchEvent(zs), zs.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, n) {
    if (this[e] === n) return this;
    for (let a = 0, o = this.children.length; a < o; a++) {
      const u = this.children[a].getObjectByProperty(e, n);
      if (u !== void 0) return u;
    }
  }
  getObjectsByProperty(e, n, a = []) {
    this[e] === n && a.push(this);
    const o = this.children;
    for (let c = 0, u = o.length; c < u; c++) o[c].getObjectsByProperty(e, n, a);
    return a;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(nl, e, _3), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(nl, y3, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const n = this.matrixWorld.elements;
    return e.set(n[8], n[9], n[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const n = this.children;
    for (let a = 0, o = n.length; a < o; a++) n[a].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const n = this.children;
    for (let a = 0, o = n.length; a < o; a++) n[a].traverseVisible(e);
  }
  traverseAncestors(e) {
    const n = this.parent;
    n !== null && (e(n), n.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const n = this.children;
    for (let a = 0, o = n.length; a < o; a++) n[a].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, n) {
    const a = this.parent;
    if (e === !0 && a !== null && a.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), n === !0) {
      const o = this.children;
      for (let c = 0, u = o.length; c < u; c++) o[c].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string",
      a = {};
    n && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, a.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const o = {};
    o.uuid = this.uuid, o.type = this.type, this.name !== "" && (o.name = this.name), this.castShadow === !0 && (o.castShadow = !0), this.receiveShadow === !0 && (o.receiveShadow = !0), this.visible === !1 && (o.visible = !1), this.frustumCulled === !1 && (o.frustumCulled = !1), this.renderOrder !== 0 && (o.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (o.userData = this.userData), o.layers = this.layers.mask, o.matrix = this.matrix.toArray(), o.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (o.matrixAutoUpdate = !1), this.isInstancedMesh && (o.type = "InstancedMesh", o.count = this.count, o.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (o.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (o.type = "BatchedMesh", o.perObjectFrustumCulled = this.perObjectFrustumCulled, o.sortObjects = this.sortObjects, o.drawRanges = this._drawRanges, o.reservedRanges = this._reservedRanges, o.geometryInfo = this._geometryInfo.map(f => ({
      ...f,
      boundingBox: f.boundingBox ? f.boundingBox.toJSON() : void 0,
      boundingSphere: f.boundingSphere ? f.boundingSphere.toJSON() : void 0
    })), o.instanceInfo = this._instanceInfo.map(f => ({
      ...f
    })), o.availableInstanceIds = this._availableInstanceIds.slice(), o.availableGeometryIds = this._availableGeometryIds.slice(), o.nextIndexStart = this._nextIndexStart, o.nextVertexStart = this._nextVertexStart, o.geometryCount = this._geometryCount, o.maxInstanceCount = this._maxInstanceCount, o.maxVertexCount = this._maxVertexCount, o.maxIndexCount = this._maxIndexCount, o.geometryInitialized = this._geometryInitialized, o.matricesTexture = this._matricesTexture.toJSON(e), o.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (o.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (o.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (o.boundingBox = this.boundingBox.toJSON()));
    function c(f, m) {
      return f[m.uuid] === void 0 && (f[m.uuid] = m.toJSON(e)), m.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? o.background = this.background.toJSON() : this.background.isTexture && (o.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (o.environment = this.environment.toJSON(e).uuid);else if (this.isMesh || this.isLine || this.isPoints) {
      o.geometry = c(e.geometries, this.geometry);
      const f = this.geometry.parameters;
      if (f !== void 0 && f.shapes !== void 0) {
        const m = f.shapes;
        if (Array.isArray(m)) for (let h = 0, x = m.length; h < x; h++) {
          const g = m[h];
          c(e.shapes, g);
        } else c(e.shapes, m);
      }
    }
    if (this.isSkinnedMesh && (o.bindMode = this.bindMode, o.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (c(e.skeletons, this.skeleton), o.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const f = [];
      for (let m = 0, h = this.material.length; m < h; m++) f.push(c(e.materials, this.material[m]));
      o.material = f;
    } else o.material = c(e.materials, this.material);
    if (this.children.length > 0) {
      o.children = [];
      for (let f = 0; f < this.children.length; f++) o.children.push(this.children[f].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      o.animations = [];
      for (let f = 0; f < this.animations.length; f++) {
        const m = this.animations[f];
        o.animations.push(c(e.animations, m));
      }
    }
    if (n) {
      const f = u(e.geometries),
        m = u(e.materials),
        h = u(e.textures),
        x = u(e.images),
        g = u(e.shapes),
        v = u(e.skeletons),
        y = u(e.animations),
        M = u(e.nodes);
      f.length > 0 && (a.geometries = f), m.length > 0 && (a.materials = m), h.length > 0 && (a.textures = h), x.length > 0 && (a.images = x), g.length > 0 && (a.shapes = g), v.length > 0 && (a.skeletons = v), y.length > 0 && (a.animations = y), M.length > 0 && (a.nodes = M);
    }
    return a.object = o, a;
    function u(f) {
      const m = [];
      for (const h in f) {
        const x = f[h];
        delete x.metadata, m.push(x);
      }
      return m;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, n = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), n === !0) for (let a = 0; a < e.children.length; a++) {
      const o = e.children[a];
      this.add(o.clone());
    }
    return this;
  }
}
ui.DEFAULT_UP = new be(0, 1, 0);
ui.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Hi = new be();
const ba = new be();
const rh = new be();
const Sa = new be();
const Fs = new be();
const Bs = new be();
const gv = new be();
const sh = new be();
const oh = new be();
const lh = new be();
const ch = new En();
const uh = new En();
const fh = new En();
class Ui {
  constructor(e = new be(), n = new be(), a = new be()) {
    this.a = e, this.b = n, this.c = a;
  }
  static getNormal(e, n, a, o) {
    o.subVectors(a, n), Hi.subVectors(e, n), o.cross(Hi);
    const c = o.lengthSq();
    return c > 0 ? o.multiplyScalar(1 / Math.sqrt(c)) : o.set(0, 0, 0);
  }
  static getBarycoord(e, n, a, o, c) {
    Hi.subVectors(o, n), ba.subVectors(a, n), rh.subVectors(e, n);
    const u = Hi.dot(Hi),
      f = Hi.dot(ba),
      m = Hi.dot(rh),
      h = ba.dot(ba),
      x = ba.dot(rh),
      g = u * h - f * f;
    if (g === 0) return c.set(0, 0, 0), null;
    const v = 1 / g,
      y = (h * m - f * x) * v,
      M = (u * x - f * m) * v;
    return c.set(1 - y - M, M, y);
  }
  static containsPoint(e, n, a, o) {
    return this.getBarycoord(e, n, a, o, Sa) === null ? !1 : Sa.x >= 0 && Sa.y >= 0 && Sa.x + Sa.y <= 1;
  }
  static getInterpolation(e, n, a, o, c, u, f, m) {
    return this.getBarycoord(e, n, a, o, Sa) === null ? (m.x = 0, m.y = 0, "z" in m && (m.z = 0), "w" in m && (m.w = 0), null) : (m.setScalar(0), m.addScaledVector(c, Sa.x), m.addScaledVector(u, Sa.y), m.addScaledVector(f, Sa.z), m);
  }
  static getInterpolatedAttribute(e, n, a, o, c, u) {
    return ch.setScalar(0), uh.setScalar(0), fh.setScalar(0), ch.fromBufferAttribute(e, n), uh.fromBufferAttribute(e, a), fh.fromBufferAttribute(e, o), u.setScalar(0), u.addScaledVector(ch, c.x), u.addScaledVector(uh, c.y), u.addScaledVector(fh, c.z), u;
  }
  static isFrontFacing(e, n, a, o) {
    return Hi.subVectors(a, n), ba.subVectors(e, n), Hi.cross(ba).dot(o) < 0;
  }
  set(e, n, a) {
    return this.a.copy(e), this.b.copy(n), this.c.copy(a), this;
  }
  setFromPointsAndIndices(e, n, a, o) {
    return this.a.copy(e[n]), this.b.copy(e[a]), this.c.copy(e[o]), this;
  }
  setFromAttributeAndIndices(e, n, a, o) {
    return this.a.fromBufferAttribute(e, n), this.b.fromBufferAttribute(e, a), this.c.fromBufferAttribute(e, o), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Hi.subVectors(this.c, this.b), ba.subVectors(this.a, this.b), Hi.cross(ba).length() * .5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ui.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, n) {
    return Ui.getBarycoord(e, this.a, this.b, this.c, n);
  }
  getInterpolation(e, n, a, o, c) {
    return Ui.getInterpolation(e, this.a, this.b, this.c, n, a, o, c);
  }
  containsPoint(e) {
    return Ui.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ui.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, n) {
    const a = this.a,
      o = this.b,
      c = this.c;
    let u, f;
    Fs.subVectors(o, a), Bs.subVectors(c, a), sh.subVectors(e, a);
    const m = Fs.dot(sh),
      h = Bs.dot(sh);
    if (m <= 0 && h <= 0) return n.copy(a);
    oh.subVectors(e, o);
    const x = Fs.dot(oh),
      g = Bs.dot(oh);
    if (x >= 0 && g <= x) return n.copy(o);
    const v = m * g - x * h;
    if (v <= 0 && m >= 0 && x <= 0) return u = m / (m - x), n.copy(a).addScaledVector(Fs, u);
    lh.subVectors(e, c);
    const y = Fs.dot(lh),
      M = Bs.dot(lh);
    if (M >= 0 && y <= M) return n.copy(c);
    const E = y * h - m * M;
    if (E <= 0 && h >= 0 && M <= 0) return f = h / (h - M), n.copy(a).addScaledVector(Bs, f);
    const S = x * M - y * g;
    if (S <= 0 && g - x >= 0 && y - M >= 0) return gv.subVectors(c, o), f = (g - x) / (g - x + (y - M)), n.copy(o).addScaledVector(gv, f);
    const _ = 1 / (S + E + v);
    return u = E * _, f = v * _, n.copy(a).addScaledVector(Fs, u).addScaledVector(Bs, f);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const G_ = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
const dr = {
  h: 0,
  s: 0,
  l: 0
};
const Wc = {
  h: 0,
  s: 0,
  l: 0
};
function dh(s, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? s + (e - s) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - n) : s;
}
class Xt {
  constructor(e, n, a) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, n, a);
  }
  set(e, n, a) {
    if (n === void 0 && a === void 0) {
      const o = e;
      o && o.isColor ? this.copy(o) : typeof o == "number" ? this.setHex(o) : typeof o == "string" && this.setStyle(o);
    } else this.setRGB(e, n, a);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, n = yi) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Jt.colorSpaceToWorking(this, n), this;
  }
  setRGB(e, n, a, o = Jt.workingColorSpace) {
    return this.r = e, this.g = n, this.b = a, Jt.colorSpaceToWorking(this, o), this;
  }
  setHSL(e, n, a, o = Jt.workingColorSpace) {
    if (e = z0(e, 1), n = Ht(n, 0, 1), a = Ht(a, 0, 1), n === 0) this.r = this.g = this.b = a;else {
      const c = a <= .5 ? a * (1 + n) : a + n - a * n,
        u = 2 * a - c;
      this.r = dh(u, c, e + 1 / 3), this.g = dh(u, c, e), this.b = dh(u, c, e - 1 / 3);
    }
    return Jt.colorSpaceToWorking(this, o), this;
  }
  setStyle(e, n = yi) {
    function a(c) {
      c !== void 0 && parseFloat(c) < 1 && Rt("Color: Alpha component of " + e + " will be ignored.");
    }
    let o;
    if (o = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let c;
      const u = o[1],
        f = o[2];
      switch (u) {
        case "rgb":
        case "rgba":
          if (c = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return a(c[4]), this.setRGB(Math.min(255, parseInt(c[1], 10)) / 255, Math.min(255, parseInt(c[2], 10)) / 255, Math.min(255, parseInt(c[3], 10)) / 255, n);
          if (c = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return a(c[4]), this.setRGB(Math.min(100, parseInt(c[1], 10)) / 100, Math.min(100, parseInt(c[2], 10)) / 100, Math.min(100, parseInt(c[3], 10)) / 100, n);
          break;
        case "hsl":
        case "hsla":
          if (c = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return a(c[4]), this.setHSL(parseFloat(c[1]) / 360, parseFloat(c[2]) / 100, parseFloat(c[3]) / 100, n);
          break;
        default:
          Rt("Color: Unknown color model " + e);
      }
    } else if (o = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const c = o[1],
        u = c.length;
      if (u === 3) return this.setRGB(parseInt(c.charAt(0), 16) / 15, parseInt(c.charAt(1), 16) / 15, parseInt(c.charAt(2), 16) / 15, n);
      if (u === 6) return this.setHex(parseInt(c, 16), n);
      Rt("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, n);
    return this;
  }
  setColorName(e, n = yi) {
    const a = G_[e.toLowerCase()];
    return a !== void 0 ? this.setHex(a, n) : Rt("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ua(e.r), this.g = Ua(e.g), this.b = Ua(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = $s(e.r), this.g = $s(e.g), this.b = $s(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = yi) {
    return Jt.workingToColorSpace(Jn.copy(this), e), Math.round(Ht(Jn.r * 255, 0, 255)) * 65536 + Math.round(Ht(Jn.g * 255, 0, 255)) * 256 + Math.round(Ht(Jn.b * 255, 0, 255));
  }
  getHexString(e = yi) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, n = Jt.workingColorSpace) {
    Jt.workingToColorSpace(Jn.copy(this), n);
    const a = Jn.r,
      o = Jn.g,
      c = Jn.b,
      u = Math.max(a, o, c),
      f = Math.min(a, o, c);
    let m, h;
    const x = (f + u) / 2;
    if (f === u) m = 0, h = 0;else {
      const g = u - f;
      switch (h = x <= .5 ? g / (u + f) : g / (2 - u - f), u) {
        case a:
          m = (o - c) / g + (o < c ? 6 : 0);
          break;
        case o:
          m = (c - a) / g + 2;
          break;
        case c:
          m = (a - o) / g + 4;
          break;
      }
      m /= 6;
    }
    return e.h = m, e.s = h, e.l = x, e;
  }
  getRGB(e, n = Jt.workingColorSpace) {
    return Jt.workingToColorSpace(Jn.copy(this), n), e.r = Jn.r, e.g = Jn.g, e.b = Jn.b, e;
  }
  getStyle(e = yi) {
    Jt.workingToColorSpace(Jn.copy(this), e);
    const n = Jn.r,
      a = Jn.g,
      o = Jn.b;
    return e !== yi ? `color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})` : `rgb(${Math.round(n * 255)},${Math.round(a * 255)},${Math.round(o * 255)})`;
  }
  offsetHSL(e, n, a) {
    return this.getHSL(dr), this.setHSL(dr.h + e, dr.s + n, dr.l + a);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, n) {
    return this.r = e.r + n.r, this.g = e.g + n.g, this.b = e.b + n.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, n) {
    return this.r += (e.r - this.r) * n, this.g += (e.g - this.g) * n, this.b += (e.b - this.b) * n, this;
  }
  lerpColors(e, n, a) {
    return this.r = e.r + (n.r - e.r) * a, this.g = e.g + (n.g - e.g) * a, this.b = e.b + (n.b - e.b) * a, this;
  }
  lerpHSL(e, n) {
    this.getHSL(dr), e.getHSL(Wc);
    const a = pl(dr.h, Wc.h, n),
      o = pl(dr.s, Wc.s, n),
      c = pl(dr.l, Wc.l, n);
    return this.setHSL(a, o, c), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const n = this.r,
      a = this.g,
      o = this.b,
      c = e.elements;
    return this.r = c[0] * n + c[3] * a + c[6] * o, this.g = c[1] * n + c[4] * a + c[7] * o, this.b = c[2] * n + c[5] * a + c[8] * o, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, n = 0) {
    return this.r = e[n], this.g = e[n + 1], this.b = e[n + 2], this;
  }
  toArray(e = [], n = 0) {
    return e[n] = this.r, e[n + 1] = this.g, e[n + 2] = this.b, e;
  }
  fromBufferAttribute(e, n) {
    return this.r = e.getX(n), this.g = e.getY(n), this.b = e.getZ(n), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Jn = new Xt();
Xt.NAMES = G_;
let S3 = 0;
class Al extends so {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
      value: S3++
    }), this.uuid = La(), this.name = "", this.type = "Material", this.blending = Js, this.side = gr, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Fh, this.blendDst = Bh, this.blendEquation = jr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = eo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = nv, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ds, this.stencilZFail = Ds, this.stencilZPass = Ds, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const n in e) {
      const a = e[n];
      if (a === void 0) {
        Rt(`Material: parameter '${n}' has value of undefined.`);
        continue;
      }
      const o = this[n];
      if (o === void 0) {
        Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);
        continue;
      }
      o && o.isColor ? o.set(a) : o && o.isVector3 && a && a.isVector3 ? o.copy(a) : this[n] = a;
    }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == "string";
    n && (e = {
      textures: {},
      images: {}
    });
    const a = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    a.uuid = this.uuid, a.type = this.type, this.name !== "" && (a.name = this.name), this.color && this.color.isColor && (a.color = this.color.getHex()), this.roughness !== void 0 && (a.roughness = this.roughness), this.metalness !== void 0 && (a.metalness = this.metalness), this.sheen !== void 0 && (a.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (a.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (a.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (a.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (a.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (a.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (a.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (a.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (a.shininess = this.shininess), this.clearcoat !== void 0 && (a.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (a.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (a.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (a.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (a.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, a.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (a.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (a.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (a.dispersion = this.dispersion), this.iridescence !== void 0 && (a.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (a.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (a.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (a.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (a.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (a.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (a.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (a.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (a.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (a.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (a.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (a.lightMap = this.lightMap.toJSON(e).uuid, a.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (a.aoMap = this.aoMap.toJSON(e).uuid, a.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (a.bumpMap = this.bumpMap.toJSON(e).uuid, a.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (a.normalMap = this.normalMap.toJSON(e).uuid, a.normalMapType = this.normalMapType, a.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (a.displacementMap = this.displacementMap.toJSON(e).uuid, a.displacementScale = this.displacementScale, a.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (a.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (a.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (a.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (a.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (a.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (a.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (a.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (a.combine = this.combine)), this.envMapRotation !== void 0 && (a.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (a.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (a.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (a.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (a.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (a.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (a.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (a.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (a.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (a.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (a.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (a.size = this.size), this.shadowSide !== null && (a.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (a.sizeAttenuation = this.sizeAttenuation), this.blending !== Js && (a.blending = this.blending), this.side !== gr && (a.side = this.side), this.vertexColors === !0 && (a.vertexColors = !0), this.opacity < 1 && (a.opacity = this.opacity), this.transparent === !0 && (a.transparent = !0), this.blendSrc !== Fh && (a.blendSrc = this.blendSrc), this.blendDst !== Bh && (a.blendDst = this.blendDst), this.blendEquation !== jr && (a.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (a.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (a.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (a.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (a.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (a.blendAlpha = this.blendAlpha), this.depthFunc !== eo && (a.depthFunc = this.depthFunc), this.depthTest === !1 && (a.depthTest = this.depthTest), this.depthWrite === !1 && (a.depthWrite = this.depthWrite), this.colorWrite === !1 && (a.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (a.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== nv && (a.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (a.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (a.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ds && (a.stencilFail = this.stencilFail), this.stencilZFail !== Ds && (a.stencilZFail = this.stencilZFail), this.stencilZPass !== Ds && (a.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (a.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (a.rotation = this.rotation), this.polygonOffset === !0 && (a.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (a.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (a.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (a.linewidth = this.linewidth), this.dashSize !== void 0 && (a.dashSize = this.dashSize), this.gapSize !== void 0 && (a.gapSize = this.gapSize), this.scale !== void 0 && (a.scale = this.scale), this.dithering === !0 && (a.dithering = !0), this.alphaTest > 0 && (a.alphaTest = this.alphaTest), this.alphaHash === !0 && (a.alphaHash = !0), this.alphaToCoverage === !0 && (a.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (a.premultipliedAlpha = !0), this.forceSinglePass === !0 && (a.forceSinglePass = !0), this.wireframe === !0 && (a.wireframe = !0), this.wireframeLinewidth > 1 && (a.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (a.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (a.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (a.flatShading = !0), this.visible === !1 && (a.visible = !1), this.toneMapped === !1 && (a.toneMapped = !1), this.fog === !1 && (a.fog = !1), Object.keys(this.userData).length > 0 && (a.userData = this.userData);
    function o(c) {
      const u = [];
      for (const f in c) {
        const m = c[f];
        delete m.metadata, u.push(m);
      }
      return u;
    }
    if (n) {
      const c = o(e.textures),
        u = o(e.images);
      c.length > 0 && (a.textures = c), u.length > 0 && (a.images = u);
    }
    return a;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const n = e.clippingPlanes;
    let a = null;
    if (n !== null) {
      const o = n.length;
      a = new Array(o);
      for (let c = 0; c !== o; ++c) a[c] = n[c].clone();
    }
    return this.clippingPlanes = a, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class V_ extends Al {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pa(), this.combine = R_, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Dn = new be();
const Yc = new Wt();
let M3 = 0;
class ki {
  constructor(e, n, a = !1) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
      value: M3++
    }), this.name = "", this.array = e, this.itemSize = n, this.count = e !== void 0 ? e.length / n : 0, this.normalized = a, this.usage = T0, this.updateRanges = [], this.gpuType = Ca, this.version = 0;
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, n) {
    this.updateRanges.push({
      start: e,
      count: n
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, n, a) {
    e *= this.itemSize, a *= n.itemSize;
    for (let o = 0, c = this.itemSize; o < c; o++) this.array[e + o] = n.array[a + o];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let n = 0, a = this.count; n < a; n++) Yc.fromBufferAttribute(this, n), Yc.applyMatrix3(e), this.setXY(n, Yc.x, Yc.y);else if (this.itemSize === 3) for (let n = 0, a = this.count; n < a; n++) Dn.fromBufferAttribute(this, n), Dn.applyMatrix3(e), this.setXYZ(n, Dn.x, Dn.y, Dn.z);
    return this;
  }
  applyMatrix4(e) {
    for (let n = 0, a = this.count; n < a; n++) Dn.fromBufferAttribute(this, n), Dn.applyMatrix4(e), this.setXYZ(n, Dn.x, Dn.y, Dn.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let n = 0, a = this.count; n < a; n++) Dn.fromBufferAttribute(this, n), Dn.applyNormalMatrix(e), this.setXYZ(n, Dn.x, Dn.y, Dn.z);
    return this;
  }
  transformDirection(e) {
    for (let n = 0, a = this.count; n < a; n++) Dn.fromBufferAttribute(this, n), Dn.transformDirection(e), this.setXYZ(n, Dn.x, Dn.y, Dn.z);
    return this;
  }
  set(e, n = 0) {
    return this.array.set(e, n), this;
  }
  getComponent(e, n) {
    let a = this.array[e * this.itemSize + n];
    return this.normalized && (a = Gi(a, this.array)), a;
  }
  setComponent(e, n, a) {
    return this.normalized && (a = an(a, this.array)), this.array[e * this.itemSize + n] = a, this;
  }
  getX(e) {
    let n = this.array[e * this.itemSize];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  setX(e, n) {
    return this.normalized && (n = an(n, this.array)), this.array[e * this.itemSize] = n, this;
  }
  getY(e) {
    let n = this.array[e * this.itemSize + 1];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  setY(e, n) {
    return this.normalized && (n = an(n, this.array)), this.array[e * this.itemSize + 1] = n, this;
  }
  getZ(e) {
    let n = this.array[e * this.itemSize + 2];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  setZ(e, n) {
    return this.normalized && (n = an(n, this.array)), this.array[e * this.itemSize + 2] = n, this;
  }
  getW(e) {
    let n = this.array[e * this.itemSize + 3];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  setW(e, n) {
    return this.normalized && (n = an(n, this.array)), this.array[e * this.itemSize + 3] = n, this;
  }
  setXY(e, n, a) {
    return e *= this.itemSize, this.normalized && (n = an(n, this.array), a = an(a, this.array)), this.array[e + 0] = n, this.array[e + 1] = a, this;
  }
  setXYZ(e, n, a, o) {
    return e *= this.itemSize, this.normalized && (n = an(n, this.array), a = an(a, this.array), o = an(o, this.array)), this.array[e + 0] = n, this.array[e + 1] = a, this.array[e + 2] = o, this;
  }
  setXYZW(e, n, a, o, c) {
    return e *= this.itemSize, this.normalized && (n = an(n, this.array), a = an(a, this.array), o = an(o, this.array), c = an(c, this.array)), this.array[e + 0] = n, this.array[e + 1] = a, this.array[e + 2] = o, this.array[e + 3] = c, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== T0 && (e.usage = this.usage), e;
  }
}
class k_ extends ki {
  constructor(e, n, a) {
    super(new Uint16Array(e), n, a);
  }
}
class j_ extends ki {
  constructor(e, n, a) {
    super(new Uint32Array(e), n, a);
  }
}
class Yr extends ki {
  constructor(e, n, a) {
    super(new Float32Array(e), n, a);
  }
}
let E3 = 0;
const Di = new Ln();
const hh = new ui();
const Hs = new be();
const _i = new Tl();
const il = new Tl();
const kn = new be();
class za extends so {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
      value: E3++
    }), this.uuid = La(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (F_(e) ? j_ : k_)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, n) {
    return this.attributes[e] = n, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, n, a = 0) {
    this.groups.push({
      start: e,
      count: n,
      materialIndex: a
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, n) {
    this.drawRange.start = e, this.drawRange.count = n;
  }
  applyMatrix4(e) {
    const n = this.attributes.position;
    n !== void 0 && (n.applyMatrix4(e), n.needsUpdate = !0);
    const a = this.attributes.normal;
    if (a !== void 0) {
      const c = new Lt().getNormalMatrix(e);
      a.applyNormalMatrix(c), a.needsUpdate = !0;
    }
    const o = this.attributes.tangent;
    return o !== void 0 && (o.transformDirection(e), o.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Di.makeRotationFromQuaternion(e), this.applyMatrix4(Di), this;
  }
  rotateX(e) {
    return Di.makeRotationX(e), this.applyMatrix4(Di), this;
  }
  rotateY(e) {
    return Di.makeRotationY(e), this.applyMatrix4(Di), this;
  }
  rotateZ(e) {
    return Di.makeRotationZ(e), this.applyMatrix4(Di), this;
  }
  translate(e, n, a) {
    return Di.makeTranslation(e, n, a), this.applyMatrix4(Di), this;
  }
  scale(e, n, a) {
    return Di.makeScale(e, n, a), this.applyMatrix4(Di), this;
  }
  lookAt(e) {
    return hh.lookAt(e), hh.updateMatrix(), this.applyMatrix4(hh.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Hs).negate(), this.translate(Hs.x, Hs.y, Hs.z), this;
  }
  setFromPoints(e) {
    const n = this.getAttribute("position");
    if (n === void 0) {
      const a = [];
      for (let o = 0, c = e.length; o < c; o++) {
        const u = e[o];
        a.push(u.x, u.y, u.z || 0);
      }
      this.setAttribute("position", new Yr(a, 3));
    } else {
      const a = Math.min(e.length, n.count);
      for (let o = 0; o < a; o++) {
        const c = e[o];
        n.setXYZ(o, c.x, c.y, c.z || 0);
      }
      e.length > n.count && Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), n.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Tl());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      yn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new be(-1 / 0, -1 / 0, -1 / 0), new be(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), n) for (let a = 0, o = n.length; a < o; a++) {
        const c = n[a];
        _i.setFromBufferAttribute(c), this.morphTargetsRelative ? (kn.addVectors(this.boundingBox.min, _i.min), this.boundingBox.expandByPoint(kn), kn.addVectors(this.boundingBox.max, _i.max), this.boundingBox.expandByPoint(kn)) : (this.boundingBox.expandByPoint(_i.min), this.boundingBox.expandByPoint(_i.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && yn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new B0());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      yn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new be(), 1 / 0);
      return;
    }
    if (e) {
      const a = this.boundingSphere.center;
      if (_i.setFromBufferAttribute(e), n) for (let c = 0, u = n.length; c < u; c++) {
        const f = n[c];
        il.setFromBufferAttribute(f), this.morphTargetsRelative ? (kn.addVectors(_i.min, il.min), _i.expandByPoint(kn), kn.addVectors(_i.max, il.max), _i.expandByPoint(kn)) : (_i.expandByPoint(il.min), _i.expandByPoint(il.max));
      }
      _i.getCenter(a);
      let o = 0;
      for (let c = 0, u = e.count; c < u; c++) kn.fromBufferAttribute(e, c), o = Math.max(o, a.distanceToSquared(kn));
      if (n) for (let c = 0, u = n.length; c < u; c++) {
        const f = n[c],
          m = this.morphTargetsRelative;
        for (let h = 0, x = f.count; h < x; h++) kn.fromBufferAttribute(f, h), m && (Hs.fromBufferAttribute(e, h), kn.add(Hs)), o = Math.max(o, a.distanceToSquared(kn));
      }
      this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && yn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index,
      n = this.attributes;
    if (e === null || n.position === void 0 || n.normal === void 0 || n.uv === void 0) {
      yn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const a = n.position,
      o = n.normal,
      c = n.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ki(new Float32Array(4 * a.count), 4));
    const u = this.getAttribute("tangent"),
      f = [],
      m = [];
    for (let q = 0; q < a.count; q++) f[q] = new be(), m[q] = new be();
    const h = new be(),
      x = new be(),
      g = new be(),
      v = new Wt(),
      y = new Wt(),
      M = new Wt(),
      E = new be(),
      S = new be();
    function _(q, w, A) {
      h.fromBufferAttribute(a, q), x.fromBufferAttribute(a, w), g.fromBufferAttribute(a, A), v.fromBufferAttribute(c, q), y.fromBufferAttribute(c, w), M.fromBufferAttribute(c, A), x.sub(h), g.sub(h), y.sub(v), M.sub(v);
      const H = 1 / (y.x * M.y - M.x * y.y);
      isFinite(H) && (E.copy(x).multiplyScalar(M.y).addScaledVector(g, -y.y).multiplyScalar(H), S.copy(g).multiplyScalar(y.x).addScaledVector(x, -M.x).multiplyScalar(H), f[q].add(E), f[w].add(E), f[A].add(E), m[q].add(S), m[w].add(S), m[A].add(S));
    }
    let L = this.groups;
    L.length === 0 && (L = [{
      start: 0,
      count: e.count
    }]);
    for (let q = 0, w = L.length; q < w; ++q) {
      const A = L[q],
        H = A.start,
        k = A.count;
      for (let W = H, J = H + k; W < J; W += 3) _(e.getX(W + 0), e.getX(W + 1), e.getX(W + 2));
    }
    const D = new be(),
      O = new be(),
      F = new be(),
      P = new be();
    function B(q) {
      F.fromBufferAttribute(o, q), P.copy(F);
      const w = f[q];
      D.copy(w), D.sub(F.multiplyScalar(F.dot(w))).normalize(), O.crossVectors(P, w);
      const H = O.dot(m[q]) < 0 ? -1 : 1;
      u.setXYZW(q, D.x, D.y, D.z, H);
    }
    for (let q = 0, w = L.length; q < w; ++q) {
      const A = L[q],
        H = A.start,
        k = A.count;
      for (let W = H, J = H + k; W < J; W += 3) B(e.getX(W + 0)), B(e.getX(W + 1)), B(e.getX(W + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      n = this.getAttribute("position");
    if (n !== void 0) {
      let a = this.getAttribute("normal");
      if (a === void 0) a = new ki(new Float32Array(n.count * 3), 3), this.setAttribute("normal", a);else for (let v = 0, y = a.count; v < y; v++) a.setXYZ(v, 0, 0, 0);
      const o = new be(),
        c = new be(),
        u = new be(),
        f = new be(),
        m = new be(),
        h = new be(),
        x = new be(),
        g = new be();
      if (e) for (let v = 0, y = e.count; v < y; v += 3) {
        const M = e.getX(v + 0),
          E = e.getX(v + 1),
          S = e.getX(v + 2);
        o.fromBufferAttribute(n, M), c.fromBufferAttribute(n, E), u.fromBufferAttribute(n, S), x.subVectors(u, c), g.subVectors(o, c), x.cross(g), f.fromBufferAttribute(a, M), m.fromBufferAttribute(a, E), h.fromBufferAttribute(a, S), f.add(x), m.add(x), h.add(x), a.setXYZ(M, f.x, f.y, f.z), a.setXYZ(E, m.x, m.y, m.z), a.setXYZ(S, h.x, h.y, h.z);
      } else for (let v = 0, y = n.count; v < y; v += 3) o.fromBufferAttribute(n, v + 0), c.fromBufferAttribute(n, v + 1), u.fromBufferAttribute(n, v + 2), x.subVectors(u, c), g.subVectors(o, c), x.cross(g), a.setXYZ(v + 0, x.x, x.y, x.z), a.setXYZ(v + 1, x.x, x.y, x.z), a.setXYZ(v + 2, x.x, x.y, x.z);
      this.normalizeNormals(), a.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let n = 0, a = e.count; n < a; n++) kn.fromBufferAttribute(e, n), kn.normalize(), e.setXYZ(n, kn.x, kn.y, kn.z);
  }
  toNonIndexed() {
    function e(f, m) {
      const h = f.array,
        x = f.itemSize,
        g = f.normalized,
        v = new h.constructor(m.length * x);
      let y = 0,
        M = 0;
      for (let E = 0, S = m.length; E < S; E++) {
        f.isInterleavedBufferAttribute ? y = m[E] * f.data.stride + f.offset : y = m[E] * x;
        for (let _ = 0; _ < x; _++) v[M++] = h[y++];
      }
      return new ki(v, x, g);
    }
    if (this.index === null) return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const n = new za(),
      a = this.index.array,
      o = this.attributes;
    for (const f in o) {
      const m = o[f],
        h = e(m, a);
      n.setAttribute(f, h);
    }
    const c = this.morphAttributes;
    for (const f in c) {
      const m = [],
        h = c[f];
      for (let x = 0, g = h.length; x < g; x++) {
        const v = h[x],
          y = e(v, a);
        m.push(y);
      }
      n.morphAttributes[f] = m;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const u = this.groups;
    for (let f = 0, m = u.length; f < m; f++) {
      const h = u[f];
      n.addGroup(h.start, h.count, h.materialIndex);
    }
    return n;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const m = this.parameters;
      for (const h in m) m[h] !== void 0 && (e[h] = m[h]);
      return e;
    }
    e.data = {
      attributes: {}
    };
    const n = this.index;
    n !== null && (e.data.index = {
      type: n.array.constructor.name,
      array: Array.prototype.slice.call(n.array)
    });
    const a = this.attributes;
    for (const m in a) {
      const h = a[m];
      e.data.attributes[m] = h.toJSON(e.data);
    }
    const o = {};
    let c = !1;
    for (const m in this.morphAttributes) {
      const h = this.morphAttributes[m],
        x = [];
      for (let g = 0, v = h.length; g < v; g++) {
        const y = h[g];
        x.push(y.toJSON(e.data));
      }
      x.length > 0 && (o[m] = x, c = !0);
    }
    c && (e.data.morphAttributes = o, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const u = this.groups;
    u.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(u)));
    const f = this.boundingSphere;
    return f !== null && (e.data.boundingSphere = f.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const n = {};
    this.name = e.name;
    const a = e.index;
    a !== null && this.setIndex(a.clone());
    const o = e.attributes;
    for (const h in o) {
      const x = o[h];
      this.setAttribute(h, x.clone(n));
    }
    const c = e.morphAttributes;
    for (const h in c) {
      const x = [],
        g = c[h];
      for (let v = 0, y = g.length; v < y; v++) x.push(g[v].clone(n));
      this.morphAttributes[h] = x;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const u = e.groups;
    for (let h = 0, x = u.length; h < x; h++) {
      const g = u[h];
      this.addGroup(g.start, g.count, g.materialIndex);
    }
    const f = e.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    const m = e.boundingSphere;
    return m !== null && (this.boundingSphere = m.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
}
const xv = new Ln();
const Fr = new m3();
const qc = new B0();
const vv = new be();
const Zc = new be();
const Kc = new be();
const Qc = new be();
const ph = new be();
const Jc = new be();
const _v = new be();
const $c = new be();
class Ia extends ui {
  constructor(e = new za(), n = new V_()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = n, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, n) {
    return super.copy(e, n), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const n = this.geometry.morphAttributes,
      a = Object.keys(n);
    if (a.length > 0) {
      const o = n[a[0]];
      if (o !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let c = 0, u = o.length; c < u; c++) {
          const f = o[c].name || String(c);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[f] = c;
        }
      }
    }
  }
  getVertexPosition(e, n) {
    const a = this.geometry,
      o = a.attributes.position,
      c = a.morphAttributes.position,
      u = a.morphTargetsRelative;
    n.fromBufferAttribute(o, e);
    const f = this.morphTargetInfluences;
    if (c && f) {
      Jc.set(0, 0, 0);
      for (let m = 0, h = c.length; m < h; m++) {
        const x = f[m],
          g = c[m];
        x !== 0 && (ph.fromBufferAttribute(g, e), u ? Jc.addScaledVector(ph, x) : Jc.addScaledVector(ph.sub(n), x));
      }
      n.add(Jc);
    }
    return n;
  }
  raycast(e, n) {
    const a = this.geometry,
      o = this.material,
      c = this.matrixWorld;
    o !== void 0 && (a.boundingSphere === null && a.computeBoundingSphere(), qc.copy(a.boundingSphere), qc.applyMatrix4(c), Fr.copy(e.ray).recast(e.near), !(qc.containsPoint(Fr.origin) === !1 && (Fr.intersectSphere(qc, vv) === null || Fr.origin.distanceToSquared(vv) > (e.far - e.near) ** 2)) && (xv.copy(c).invert(), Fr.copy(e.ray).applyMatrix4(xv), !(a.boundingBox !== null && Fr.intersectsBox(a.boundingBox) === !1) && this._computeIntersections(e, n, Fr)));
  }
  _computeIntersections(e, n, a) {
    let o;
    const c = this.geometry,
      u = this.material,
      f = c.index,
      m = c.attributes.position,
      h = c.attributes.uv,
      x = c.attributes.uv1,
      g = c.attributes.normal,
      v = c.groups,
      y = c.drawRange;
    if (f !== null) {
      if (Array.isArray(u)) for (let M = 0, E = v.length; M < E; M++) {
        const S = v[M],
          _ = u[S.materialIndex],
          L = Math.max(S.start, y.start),
          D = Math.min(f.count, Math.min(S.start + S.count, y.start + y.count));
        for (let O = L, F = D; O < F; O += 3) {
          const P = f.getX(O),
            B = f.getX(O + 1),
            q = f.getX(O + 2);
          o = eu(this, _, e, a, h, x, g, P, B, q), o && (o.faceIndex = Math.floor(O / 3), o.face.materialIndex = S.materialIndex, n.push(o));
        }
      } else {
        const M = Math.max(0, y.start),
          E = Math.min(f.count, y.start + y.count);
        for (let S = M, _ = E; S < _; S += 3) {
          const L = f.getX(S),
            D = f.getX(S + 1),
            O = f.getX(S + 2);
          o = eu(this, u, e, a, h, x, g, L, D, O), o && (o.faceIndex = Math.floor(S / 3), n.push(o));
        }
      }
    } else if (m !== void 0) if (Array.isArray(u)) for (let M = 0, E = v.length; M < E; M++) {
      const S = v[M],
        _ = u[S.materialIndex],
        L = Math.max(S.start, y.start),
        D = Math.min(m.count, Math.min(S.start + S.count, y.start + y.count));
      for (let O = L, F = D; O < F; O += 3) {
        const P = O,
          B = O + 1,
          q = O + 2;
        o = eu(this, _, e, a, h, x, g, P, B, q), o && (o.faceIndex = Math.floor(O / 3), o.face.materialIndex = S.materialIndex, n.push(o));
      }
    } else {
      const M = Math.max(0, y.start),
        E = Math.min(m.count, y.start + y.count);
      for (let S = M, _ = E; S < _; S += 3) {
        const L = S,
          D = S + 1,
          O = S + 2;
        o = eu(this, u, e, a, h, x, g, L, D, O), o && (o.faceIndex = Math.floor(S / 3), n.push(o));
      }
    }
  }
}
function T3(s, e, n, a, o, c, u, f) {
  let m;
  if (e.side === ci ? m = a.intersectTriangle(u, c, o, !0, f) : m = a.intersectTriangle(o, c, u, e.side === gr, f), m === null) return null;
  $c.copy(f), $c.applyMatrix4(s.matrixWorld);
  const h = n.ray.origin.distanceTo($c);
  return h < n.near || h > n.far ? null : {
    distance: h,
    point: $c.clone(),
    object: s
  };
}
function eu(s, e, n, a, o, c, u, f, m, h) {
  s.getVertexPosition(f, Zc), s.getVertexPosition(m, Kc), s.getVertexPosition(h, Qc);
  const x = T3(s, e, n, a, Zc, Kc, Qc, _v);
  if (x) {
    const g = new be();
    Ui.getBarycoord(_v, Zc, Kc, Qc, g), o && (x.uv = Ui.getInterpolatedAttribute(o, f, m, h, g, new Wt())), c && (x.uv1 = Ui.getInterpolatedAttribute(c, f, m, h, g, new Wt())), u && (x.normal = Ui.getInterpolatedAttribute(u, f, m, h, g, new be()), x.normal.dot(a.direction) > 0 && x.normal.multiplyScalar(-1));
    const v = {
      a: f,
      b: m,
      c: h,
      normal: new be(),
      materialIndex: 0
    };
    Ui.getNormal(Zc, Kc, Qc, v.normal), x.face = v, x.barycoord = g;
  }
  return x;
}
class oo extends za {
  constructor(e = 1, n = 1, a = 1, o = 1, c = 1, u = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: n,
      depth: a,
      widthSegments: o,
      heightSegments: c,
      depthSegments: u
    };
    const f = this;
    o = Math.floor(o), c = Math.floor(c), u = Math.floor(u);
    const m = [],
      h = [],
      x = [],
      g = [];
    let v = 0,
      y = 0;
    M("z", "y", "x", -1, -1, a, n, e, u, c, 0), M("z", "y", "x", 1, -1, a, n, -e, u, c, 1), M("x", "z", "y", 1, 1, e, a, n, o, u, 2), M("x", "z", "y", 1, -1, e, a, -n, o, u, 3), M("x", "y", "z", 1, -1, e, n, a, o, c, 4), M("x", "y", "z", -1, -1, e, n, -a, o, c, 5), this.setIndex(m), this.setAttribute("position", new Yr(h, 3)), this.setAttribute("normal", new Yr(x, 3)), this.setAttribute("uv", new Yr(g, 2));
    function M(E, S, _, L, D, O, F, P, B, q, w) {
      const A = O / B,
        H = F / q,
        k = O / 2,
        W = F / 2,
        J = P / 2,
        ie = B + 1,
        I = q + 1;
      let Y = 0,
        Z = 0;
      const pe = new be();
      for (let Me = 0; Me < I; Me++) {
        const z = Me * H - W;
        for (let ee = 0; ee < ie; ee++) {
          const he = ee * A - k;
          pe[E] = he * L, pe[S] = z * D, pe[_] = J, h.push(pe.x, pe.y, pe.z), pe[E] = 0, pe[S] = 0, pe[_] = P > 0 ? 1 : -1, x.push(pe.x, pe.y, pe.z), g.push(ee / B), g.push(1 - Me / q), Y += 1;
        }
      }
      for (let Me = 0; Me < q; Me++) for (let z = 0; z < B; z++) {
        const ee = v + z + ie * Me,
          he = v + z + ie * (Me + 1),
          Ee = v + (z + 1) + ie * (Me + 1),
          Be = v + (z + 1) + ie * Me;
        m.push(ee, he, Be), m.push(he, Ee, Be), Z += 6;
      }
      f.addGroup(y, Z, w), y += Z, v += Y;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new oo(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ao(s) {
  const e = {};
  for (const n in s) {
    e[n] = {};
    for (const a in s[n]) {
      const o = s[n][a];
      o && (o.isColor || o.isMatrix3 || o.isMatrix4 || o.isVector2 || o.isVector3 || o.isVector4 || o.isTexture || o.isQuaternion) ? o.isRenderTargetTexture ? (Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][a] = null) : e[n][a] = o.clone() : Array.isArray(o) ? e[n][a] = o.slice() : e[n][a] = o;
    }
  }
  return e;
}
function ti(s) {
  const e = {};
  for (let n = 0; n < s.length; n++) {
    const a = ao(s[n]);
    for (const o in a) e[o] = a[o];
  }
  return e;
}
function A3(s) {
  const e = [];
  for (let n = 0; n < s.length; n++) e.push(s[n].clone());
  return e;
}
function X_(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Jt.workingColorSpace;
}
const w3 = {
  clone: ao,
  merge: ti
};
var R3 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;
var C3 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ji extends Al {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = R3, this.fragmentShader = C3, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      multiDraw: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ao(e.uniforms), this.uniformsGroups = A3(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    n.glslVersion = this.glslVersion, n.uniforms = {};
    for (const o in this.uniforms) {
      const u = this.uniforms[o].value;
      u && u.isTexture ? n.uniforms[o] = {
        type: "t",
        value: u.toJSON(e).uuid
      } : u && u.isColor ? n.uniforms[o] = {
        type: "c",
        value: u.getHex()
      } : u && u.isVector2 ? n.uniforms[o] = {
        type: "v2",
        value: u.toArray()
      } : u && u.isVector3 ? n.uniforms[o] = {
        type: "v3",
        value: u.toArray()
      } : u && u.isVector4 ? n.uniforms[o] = {
        type: "v4",
        value: u.toArray()
      } : u && u.isMatrix3 ? n.uniforms[o] = {
        type: "m3",
        value: u.toArray()
      } : u && u.isMatrix4 ? n.uniforms[o] = {
        type: "m4",
        value: u.toArray()
      } : n.uniforms[o] = {
        value: u
      };
    }
    Object.keys(this.defines).length > 0 && (n.defines = this.defines), n.vertexShader = this.vertexShader, n.fragmentShader = this.fragmentShader, n.lights = this.lights, n.clipping = this.clipping;
    const a = {};
    for (const o in this.extensions) this.extensions[o] === !0 && (a[o] = !0);
    return Object.keys(a).length > 0 && (n.extensions = a), n;
  }
}
class W_ extends ui {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ln(), this.projectionMatrix = new Ln(), this.projectionMatrixInverse = new Ln(), this.coordinateSystem = Ji, this._reversedDepth = !1;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, n) {
    return super.copy(e, n), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, n) {
    super.updateWorldMatrix(e, n), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hr = new be();
const yv = new Wt();
const bv = new Wt();
class Li extends W_ {
  constructor(e = 50, n = 1, a = .1, o = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = a, this.far = o, this.focus = 10, this.aspect = n, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, n) {
    return super.copy(e, n), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const n = .5 * this.getFilmHeight() / e;
    this.fov = Sl * 2 * Math.atan(n), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(hl * .5 * this.fov);
    return .5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Sl * 2 * Math.atan(Math.tan(hl * .5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, n, a) {
    hr.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(hr.x, hr.y).multiplyScalar(-e / hr.z), hr.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), a.set(hr.x, hr.y).multiplyScalar(-e / hr.z);
  }
  getViewSize(e, n) {
    return this.getViewBounds(e, yv, bv), n.subVectors(bv, yv);
  }
  setViewOffset(e, n, a, o, c, u) {
    this.aspect = e / n, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = n, this.view.offsetX = a, this.view.offsetY = o, this.view.width = c, this.view.height = u, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let n = e * Math.tan(hl * .5 * this.fov) / this.zoom,
      a = 2 * n,
      o = this.aspect * a,
      c = -.5 * o;
    const u = this.view;
    if (this.view !== null && this.view.enabled) {
      const m = u.fullWidth,
        h = u.fullHeight;
      c += u.offsetX * o / m, n -= u.offsetY * a / h, o *= u.width / m, a *= u.height / h;
    }
    const f = this.filmOffset;
    f !== 0 && (c += e * f / this.getFilmWidth()), this.projectionMatrix.makePerspective(c, c + o, n, n - a, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return n.object.fov = this.fov, n.object.zoom = this.zoom, n.object.near = this.near, n.object.far = this.far, n.object.focus = this.focus, n.object.aspect = this.aspect, this.view !== null && (n.object.view = Object.assign({}, this.view)), n.object.filmGauge = this.filmGauge, n.object.filmOffset = this.filmOffset, n;
  }
}
const Gs = -90;
const Vs = 1;
class D3 extends ui {
  constructor(e, n, a) {
    super(), this.type = "CubeCamera", this.renderTarget = a, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const o = new Li(Gs, Vs, e, n);
    o.layers = this.layers, this.add(o);
    const c = new Li(Gs, Vs, e, n);
    c.layers = this.layers, this.add(c);
    const u = new Li(Gs, Vs, e, n);
    u.layers = this.layers, this.add(u);
    const f = new Li(Gs, Vs, e, n);
    f.layers = this.layers, this.add(f);
    const m = new Li(Gs, Vs, e, n);
    m.layers = this.layers, this.add(m);
    const h = new Li(Gs, Vs, e, n);
    h.layers = this.layers, this.add(h);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      n = this.children.concat(),
      [a, o, c, u, f, m] = n;
    for (const h of n) this.remove(h);
    if (e === Ji) a.up.set(0, 1, 0), a.lookAt(1, 0, 0), o.up.set(0, 1, 0), o.lookAt(-1, 0, 0), c.up.set(0, 0, -1), c.lookAt(0, 1, 0), u.up.set(0, 0, 1), u.lookAt(0, -1, 0), f.up.set(0, 1, 0), f.lookAt(0, 0, 1), m.up.set(0, 1, 0), m.lookAt(0, 0, -1);else if (e === _u) a.up.set(0, -1, 0), a.lookAt(-1, 0, 0), o.up.set(0, -1, 0), o.lookAt(1, 0, 0), c.up.set(0, 0, 1), c.lookAt(0, 1, 0), u.up.set(0, 0, -1), u.lookAt(0, -1, 0), f.up.set(0, -1, 0), f.lookAt(0, 0, 1), m.up.set(0, -1, 0), m.lookAt(0, 0, -1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const h of n) this.add(h), h.updateMatrixWorld();
  }
  update(e, n) {
    this.parent === null && this.updateMatrixWorld();
    const {
      renderTarget: a,
      activeMipmapLevel: o
    } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [c, u, f, m, h, x] = this.children,
      g = e.getRenderTarget(),
      v = e.getActiveCubeFace(),
      y = e.getActiveMipmapLevel(),
      M = e.xr.enabled;
    e.xr.enabled = !1;
    const E = a.texture.generateMipmaps;
    a.texture.generateMipmaps = !1, e.setRenderTarget(a, 0, o), e.render(n, c), e.setRenderTarget(a, 1, o), e.render(n, u), e.setRenderTarget(a, 2, o), e.render(n, f), e.setRenderTarget(a, 3, o), e.render(n, m), e.setRenderTarget(a, 4, o), e.render(n, h), a.texture.generateMipmaps = E, e.setRenderTarget(a, 5, o), e.render(n, x), e.setRenderTarget(g, v, y), e.xr.enabled = M, a.texture.needsPMREMUpdate = !0;
  }
}
class Y_ extends Zn {
  constructor(e = [], n = to, a, o, c, u, f, m, h, x) {
    super(e, n, a, o, c, u, f, m, h, x), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class N3 extends Kr {
  constructor(e = 1, n = {}) {
    super(e, e, n), this.isWebGLCubeRenderTarget = !0;
    const a = {
        width: e,
        height: e,
        depth: 1
      },
      o = [a, a, a, a, a, a];
    this.texture = new Y_(o), this._setTextureOptions(n), this.texture.isRenderTargetTexture = !0;
  }
  fromEquirectangularTexture(e, n) {
    this.texture.type = n.type, this.texture.colorSpace = n.colorSpace, this.texture.generateMipmaps = n.generateMipmaps, this.texture.minFilter = n.minFilter, this.texture.magFilter = n.magFilter;
    const a = {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      },
      o = new oo(5, 5, 5),
      c = new ji({
        name: "CubemapFromEquirect",
        uniforms: ao(a.uniforms),
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader,
        side: ci,
        blending: Da
      });
    c.uniforms.tEquirect.value = n;
    const u = new Ia(o, c),
      f = n.minFilter;
    return n.minFilter === Wr && (n.minFilter = Oi), new D3(1, 10, this).update(e, u), n.minFilter = f, u.geometry.dispose(), u.material.dispose(), this;
  }
  clear(e, n = !0, a = !0, o = !0) {
    const c = e.getRenderTarget();
    for (let u = 0; u < 6; u++) e.setRenderTarget(this, u), e.clear(n, a, o);
    e.setRenderTarget(c);
  }
}
class tu extends ui {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const L3 = {
  type: "move"
};
class mh {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new tu(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
      pinching: !1
    }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new tu(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new be(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new be()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new tu(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new be(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new be()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const n = this._hand;
      if (n) for (const a of e.hand.values()) this._getHandJoint(n, a);
    }
    return this.dispatchEvent({
      type: "connected",
      data: e
    }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({
      type: "disconnected",
      data: e
    }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, n, a) {
    let o = null,
      c = null,
      u = null;
    const f = this._targetRay,
      m = this._grip,
      h = this._hand;
    if (e && n.session.visibilityState !== "visible-blurred") {
      if (h && e.hand) {
        u = !0;
        for (const E of e.hand.values()) {
          const S = n.getJointPose(E, a),
            _ = this._getHandJoint(h, E);
          S !== null && (_.matrix.fromArray(S.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.matrixWorldNeedsUpdate = !0, _.jointRadius = S.radius), _.visible = S !== null;
        }
        const x = h.joints["index-finger-tip"],
          g = h.joints["thumb-tip"],
          v = x.position.distanceTo(g.position),
          y = .02,
          M = .005;
        h.inputState.pinching && v > y + M ? (h.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !h.inputState.pinching && v <= y - M && (h.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else m !== null && e.gripSpace && (c = n.getPose(e.gripSpace, a), c !== null && (m.matrix.fromArray(c.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, c.linearVelocity ? (m.hasLinearVelocity = !0, m.linearVelocity.copy(c.linearVelocity)) : m.hasLinearVelocity = !1, c.angularVelocity ? (m.hasAngularVelocity = !0, m.angularVelocity.copy(c.angularVelocity)) : m.hasAngularVelocity = !1));
      f !== null && (o = n.getPose(e.targetRaySpace, a), o === null && c !== null && (o = c), o !== null && (f.matrix.fromArray(o.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, o.linearVelocity ? (f.hasLinearVelocity = !0, f.linearVelocity.copy(o.linearVelocity)) : f.hasLinearVelocity = !1, o.angularVelocity ? (f.hasAngularVelocity = !0, f.angularVelocity.copy(o.angularVelocity)) : f.hasAngularVelocity = !1, this.dispatchEvent(L3)));
    }
    return f !== null && (f.visible = o !== null), m !== null && (m.visible = c !== null), h !== null && (h.visible = u !== null), this;
  }
  _getHandJoint(e, n) {
    if (e.joints[n.jointName] === void 0) {
      const a = new tu();
      a.matrixAutoUpdate = !1, a.visible = !1, e.joints[n.jointName] = a, e.add(a);
    }
    return e.joints[n.jointName];
  }
}
class bu {
  constructor(e, n = 1, a = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Xt(e), this.near = n, this.far = a;
  }
  clone() {
    return new bu(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class U3 extends ui {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Pa(), this.environmentIntensity = 1, this.environmentRotation = new Pa(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }
  copy(e, n) {
    return super.copy(e, n), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return this.fog !== null && (n.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (n.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (n.object.backgroundIntensity = this.backgroundIntensity), n.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (n.object.environmentIntensity = this.environmentIntensity), n.object.environmentRotation = this.environmentRotation.toArray(), n;
  }
}
class O3 {
  constructor(e, n) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = n, this.count = e !== void 0 ? e.length / n : 0, this.usage = T0, this.updateRanges = [], this.version = 0, this.uuid = La();
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, n) {
    this.updateRanges.push({
      start: e,
      count: n
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, n, a) {
    e *= this.stride, a *= n.stride;
    for (let o = 0, c = this.stride; o < c; o++) this.array[e + o] = n.array[a + o];
    return this;
  }
  set(e, n = 0) {
    return this.array.set(e, n), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = La()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const n = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
      a = new this.constructor(n, this.stride);
    return a.setUsage(this.usage), a;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = La()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const ei = new be();
class Su {
  constructor(e, n, a, o = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = n, this.offset = a, this.normalized = o;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let n = 0, a = this.data.count; n < a; n++) ei.fromBufferAttribute(this, n), ei.applyMatrix4(e), this.setXYZ(n, ei.x, ei.y, ei.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let n = 0, a = this.count; n < a; n++) ei.fromBufferAttribute(this, n), ei.applyNormalMatrix(e), this.setXYZ(n, ei.x, ei.y, ei.z);
    return this;
  }
  transformDirection(e) {
    for (let n = 0, a = this.count; n < a; n++) ei.fromBufferAttribute(this, n), ei.transformDirection(e), this.setXYZ(n, ei.x, ei.y, ei.z);
    return this;
  }
  getComponent(e, n) {
    let a = this.array[e * this.data.stride + this.offset + n];
    return this.normalized && (a = Gi(a, this.array)), a;
  }
  setComponent(e, n, a) {
    return this.normalized && (a = an(a, this.array)), this.data.array[e * this.data.stride + this.offset + n] = a, this;
  }
  setX(e, n) {
    return this.normalized && (n = an(n, this.array)), this.data.array[e * this.data.stride + this.offset] = n, this;
  }
  setY(e, n) {
    return this.normalized && (n = an(n, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = n, this;
  }
  setZ(e, n) {
    return this.normalized && (n = an(n, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = n, this;
  }
  setW(e, n) {
    return this.normalized && (n = an(n, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = n, this;
  }
  getX(e) {
    let n = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  getY(e) {
    let n = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  getZ(e) {
    let n = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  getW(e) {
    let n = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (n = Gi(n, this.array)), n;
  }
  setXY(e, n, a) {
    return e = e * this.data.stride + this.offset, this.normalized && (n = an(n, this.array), a = an(a, this.array)), this.data.array[e + 0] = n, this.data.array[e + 1] = a, this;
  }
  setXYZ(e, n, a, o) {
    return e = e * this.data.stride + this.offset, this.normalized && (n = an(n, this.array), a = an(a, this.array), o = an(o, this.array)), this.data.array[e + 0] = n, this.data.array[e + 1] = a, this.data.array[e + 2] = o, this;
  }
  setXYZW(e, n, a, o, c) {
    return e = e * this.data.stride + this.offset, this.normalized && (n = an(n, this.array), a = an(a, this.array), o = an(o, this.array), c = an(c, this.array)), this.data.array[e + 0] = n, this.data.array[e + 1] = a, this.data.array[e + 2] = o, this.data.array[e + 3] = c, this;
  }
  clone(e) {
    if (e === void 0) {
      yu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const n = [];
      for (let a = 0; a < this.count; a++) {
        const o = a * this.data.stride + this.offset;
        for (let c = 0; c < this.itemSize; c++) n.push(this.data.array[o + c]);
      }
      return new ki(new this.array.constructor(n), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Su(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      yu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const n = [];
      for (let a = 0; a < this.count; a++) {
        const o = a * this.data.stride + this.offset;
        for (let c = 0; c < this.itemSize; c++) n.push(this.data.array[o + c]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: n,
        normalized: this.normalized
      };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
      isInterleavedBufferAttribute: !0,
      itemSize: this.itemSize,
      data: this.data.uuid,
      offset: this.offset,
      normalized: this.normalized
    };
  }
}
class q_ extends Al {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Xt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let ks;
const al = new be();
const js = new be();
const Xs = new be();
const Ws = new Wt();
const rl = new Wt();
const Z_ = new Ln();
const nu = new be();
const sl = new be();
const iu = new be();
const Sv = new Wt();
const gh = new Wt();
const Mv = new Wt();
class P3 extends ui {
  constructor(e = new q_()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ks === void 0) {
      ks = new za();
      const n = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
        a = new O3(n, 5);
      ks.setIndex([0, 1, 2, 0, 2, 3]), ks.setAttribute("position", new Su(a, 3, 0, !1)), ks.setAttribute("uv", new Su(a, 2, 3, !1));
    }
    this.geometry = ks, this.material = e, this.center = new Wt(.5, .5), this.count = 1;
  }
  raycast(e, n) {
    e.camera === null && yn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), js.setFromMatrixScale(this.matrixWorld), Z_.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Xs.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && js.multiplyScalar(-Xs.z);
    const a = this.material.rotation;
    let o, c;
    a !== 0 && (c = Math.cos(a), o = Math.sin(a));
    const u = this.center;
    au(nu.set(-.5, -.5, 0), Xs, u, js, o, c), au(sl.set(.5, -.5, 0), Xs, u, js, o, c), au(iu.set(.5, .5, 0), Xs, u, js, o, c), Sv.set(0, 0), gh.set(1, 0), Mv.set(1, 1);
    let f = e.ray.intersectTriangle(nu, sl, iu, !1, al);
    if (f === null && (au(sl.set(-.5, .5, 0), Xs, u, js, o, c), gh.set(0, 1), f = e.ray.intersectTriangle(nu, iu, sl, !1, al), f === null)) return;
    const m = e.ray.origin.distanceTo(al);
    m < e.near || m > e.far || n.push({
      distance: m,
      point: al.clone(),
      uv: Ui.getInterpolation(al, nu, sl, iu, Sv, gh, Mv, new Wt()),
      face: null,
      object: this
    });
  }
  copy(e, n) {
    return super.copy(e, n), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function au(s, e, n, a, o, c) {
  Ws.subVectors(s, n).addScalar(.5).multiply(a), o !== void 0 ? (rl.x = c * Ws.x - o * Ws.y, rl.y = o * Ws.x + c * Ws.y) : rl.copy(Ws), s.copy(e), s.x += rl.x, s.y += rl.y, s.applyMatrix4(Z_);
}
class I3 extends Zn {
  constructor(e = null, n = 1, a = 1, o, c, u, f, m, h = bi, x = bi, g, v) {
    super(null, u, f, m, h, x, o, c, g, v), this.isDataTexture = !0, this.image = {
      data: e,
      width: n,
      height: a
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const xh = new be();
const z3 = new be();
const F3 = new Lt();
class kr {
  constructor(e = new be(1, 0, 0), n = 0) {
    this.isPlane = !0, this.normal = e, this.constant = n;
  }
  set(e, n) {
    return this.normal.copy(e), this.constant = n, this;
  }
  setComponents(e, n, a, o) {
    return this.normal.set(e, n, a), this.constant = o, this;
  }
  setFromNormalAndCoplanarPoint(e, n) {
    return this.normal.copy(e), this.constant = -n.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, n, a) {
    const o = xh.subVectors(a, n).cross(z3.subVectors(e, n)).normalize();
    return this.setFromNormalAndCoplanarPoint(o, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, n) {
    return n.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, n) {
    const a = e.delta(xh),
      o = this.normal.dot(a);
    if (o === 0) return this.distanceToPoint(e.start) === 0 ? n.copy(e.start) : null;
    const c = -(e.start.dot(this.normal) + this.constant) / o;
    return c < 0 || c > 1 ? null : n.copy(e.start).addScaledVector(a, c);
  }
  intersectsLine(e) {
    const n = this.distanceToPoint(e.start),
      a = this.distanceToPoint(e.end);
    return n < 0 && a > 0 || a < 0 && n > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, n) {
    const a = n || F3.getNormalMatrix(e),
      o = this.coplanarPoint(xh).applyMatrix4(e),
      c = this.normal.applyMatrix3(a).normalize();
    return this.constant = -o.dot(c), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Br = new B0();
const B3 = new Wt(.5, .5);
const ru = new be();
class K_ {
  constructor(e = new kr(), n = new kr(), a = new kr(), o = new kr(), c = new kr(), u = new kr()) {
    this.planes = [e, n, a, o, c, u];
  }
  set(e, n, a, o, c, u) {
    const f = this.planes;
    return f[0].copy(e), f[1].copy(n), f[2].copy(a), f[3].copy(o), f[4].copy(c), f[5].copy(u), this;
  }
  copy(e) {
    const n = this.planes;
    for (let a = 0; a < 6; a++) n[a].copy(e.planes[a]);
    return this;
  }
  setFromProjectionMatrix(e, n = Ji, a = !1) {
    const o = this.planes,
      c = e.elements,
      u = c[0],
      f = c[1],
      m = c[2],
      h = c[3],
      x = c[4],
      g = c[5],
      v = c[6],
      y = c[7],
      M = c[8],
      E = c[9],
      S = c[10],
      _ = c[11],
      L = c[12],
      D = c[13],
      O = c[14],
      F = c[15];
    if (o[0].setComponents(h - u, y - x, _ - M, F - L).normalize(), o[1].setComponents(h + u, y + x, _ + M, F + L).normalize(), o[2].setComponents(h + f, y + g, _ + E, F + D).normalize(), o[3].setComponents(h - f, y - g, _ - E, F - D).normalize(), a) o[4].setComponents(m, v, S, O).normalize(), o[5].setComponents(h - m, y - v, _ - S, F - O).normalize();else if (o[4].setComponents(h - m, y - v, _ - S, F - O).normalize(), n === Ji) o[5].setComponents(h + m, y + v, _ + S, F + O).normalize();else if (n === _u) o[5].setComponents(m, v, S, O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + n);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else {
      const n = e.geometry;
      n.boundingSphere === null && n.computeBoundingSphere(), Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Br);
  }
  intersectsSprite(e) {
    Br.center.set(0, 0, 0);
    const n = B3.distanceTo(e.center);
    return Br.radius = .7071067811865476 + n, Br.applyMatrix4(e.matrixWorld), this.intersectsSphere(Br);
  }
  intersectsSphere(e) {
    const n = this.planes,
      a = e.center,
      o = -e.radius;
    for (let c = 0; c < 6; c++) if (n[c].distanceToPoint(a) < o) return !1;
    return !0;
  }
  intersectsBox(e) {
    const n = this.planes;
    for (let a = 0; a < 6; a++) {
      const o = n[a];
      if (ru.x = o.normal.x > 0 ? e.max.x : e.min.x, ru.y = o.normal.y > 0 ? e.max.y : e.min.y, ru.z = o.normal.z > 0 ? e.max.z : e.min.z, o.distanceToPoint(ru) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const n = this.planes;
    for (let a = 0; a < 6; a++) if (n[a].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class H3 extends Zn {
  constructor(e, n, a, o, c, u, f, m, h) {
    super(e, n, a, o, c, u, f, m, h), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Q_ extends Zn {
  constructor(e, n, a = Zr, o, c, u, f = bi, m = bi, h, x = vl, g = 1) {
    if (x !== vl && x !== _l) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const v = {
      width: e,
      height: n,
      depth: g
    };
    super(v, o, c, u, f, m, x, a, h), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new F0(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return this.compareFunction !== null && (n.compareFunction = this.compareFunction), n;
  }
}
class J_ extends Zn {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Cu extends za {
  constructor(e = 1, n = 1, a = 1, o = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: n,
      widthSegments: a,
      heightSegments: o
    };
    const c = e / 2,
      u = n / 2,
      f = Math.floor(a),
      m = Math.floor(o),
      h = f + 1,
      x = m + 1,
      g = e / f,
      v = n / m,
      y = [],
      M = [],
      E = [],
      S = [];
    for (let _ = 0; _ < x; _++) {
      const L = _ * v - u;
      for (let D = 0; D < h; D++) {
        const O = D * g - c;
        M.push(O, -L, 0), E.push(0, 0, 1), S.push(D / f), S.push(1 - _ / m);
      }
    }
    for (let _ = 0; _ < m; _++) for (let L = 0; L < f; L++) {
      const D = L + h * _,
        O = L + h * (_ + 1),
        F = L + 1 + h * (_ + 1),
        P = L + 1 + h * _;
      y.push(D, O, P), y.push(O, F, P);
    }
    this.setIndex(y), this.setAttribute("position", new Yr(M, 3)), this.setAttribute("normal", new Yr(E, 3)), this.setAttribute("uv", new Yr(S, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cu(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class G3 extends Al {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = UM, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class V3 extends Al {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const vh = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  }
};
class k3 {
  constructor(e, n, a) {
    const o = this;
    let c = !1,
      u = 0,
      f = 0,
      m;
    const h = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = n, this.onError = a, this._abortController = null, this.itemStart = function (x) {
      f++, c === !1 && o.onStart !== void 0 && o.onStart(x, u, f), c = !0;
    }, this.itemEnd = function (x) {
      u++, o.onProgress !== void 0 && o.onProgress(x, u, f), u === f && (c = !1, o.onLoad !== void 0 && o.onLoad());
    }, this.itemError = function (x) {
      o.onError !== void 0 && o.onError(x);
    }, this.resolveURL = function (x) {
      return m ? m(x) : x;
    }, this.setURLModifier = function (x) {
      return m = x, this;
    }, this.addHandler = function (x, g) {
      return h.push(x, g), this;
    }, this.removeHandler = function (x) {
      const g = h.indexOf(x);
      return g !== -1 && h.splice(g, 2), this;
    }, this.getHandler = function (x) {
      for (let g = 0, v = h.length; g < v; g += 2) {
        const y = h[g],
          M = h[g + 1];
        if (y.global && (y.lastIndex = 0), y.test(x)) return M;
      }
      return null;
    }, this.abort = function () {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}
const j3 = new k3();
class H0 {
  constructor(e) {
    this.manager = e !== void 0 ? e : j3, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {}
  loadAsync(e, n) {
    const a = this;
    return new Promise(function (o, c) {
      a.load(e, o, n, c);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  abort() {
    return this;
  }
}
H0.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Ys = new WeakMap();
class X3 extends H0 {
  constructor(e) {
    super(e);
  }
  load(e, n, a, o) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const c = this,
      u = vh.get(`image:${e}`);
    if (u !== void 0) {
      if (u.complete === !0) c.manager.itemStart(e), setTimeout(function () {
        n && n(u), c.manager.itemEnd(e);
      }, 0);else {
        let g = Ys.get(u);
        g === void 0 && (g = [], Ys.set(u, g)), g.push({
          onLoad: n,
          onError: o
        });
      }
      return u;
    }
    const f = yl("img");
    function m() {
      x(), n && n(this);
      const g = Ys.get(this) || [];
      for (let v = 0; v < g.length; v++) {
        const y = g[v];
        y.onLoad && y.onLoad(this);
      }
      Ys.delete(this), c.manager.itemEnd(e);
    }
    function h(g) {
      x(), o && o(g), vh.remove(`image:${e}`);
      const v = Ys.get(this) || [];
      for (let y = 0; y < v.length; y++) {
        const M = v[y];
        M.onError && M.onError(g);
      }
      Ys.delete(this), c.manager.itemError(e), c.manager.itemEnd(e);
    }
    function x() {
      f.removeEventListener("load", m, !1), f.removeEventListener("error", h, !1);
    }
    return f.addEventListener("load", m, !1), f.addEventListener("error", h, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (f.crossOrigin = this.crossOrigin), vh.add(`image:${e}`, f), c.manager.itemStart(e), f.src = e, f;
  }
}
class W3 extends H0 {
  constructor(e) {
    super(e);
  }
  load(e, n, a, o) {
    const c = new Zn(),
      u = new X3(this.manager);
    return u.setCrossOrigin(this.crossOrigin), u.setPath(this.path), u.load(e, function (f) {
      c.image = f, c.needsUpdate = !0, n !== void 0 && n(c);
    }, a, o), c;
  }
}
class Y3 extends W_ {
  constructor(e = -1, n = 1, a = 1, o = -1, c = .1, u = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = n, this.top = a, this.bottom = o, this.near = c, this.far = u, this.updateProjectionMatrix();
  }
  copy(e, n) {
    return super.copy(e, n), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, n, a, o, c, u) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = n, this.view.offsetX = a, this.view.offsetY = o, this.view.width = c, this.view.height = u, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      n = (this.top - this.bottom) / (2 * this.zoom),
      a = (this.right + this.left) / 2,
      o = (this.top + this.bottom) / 2;
    let c = a - e,
      u = a + e,
      f = o + n,
      m = o - n;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
        x = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      c += h * this.view.offsetX, u = c + h * this.view.width, f -= x * this.view.offsetY, m = f - x * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(c, u, f, m, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return n.object.zoom = this.zoom, n.object.left = this.left, n.object.right = this.right, n.object.top = this.top, n.object.bottom = this.bottom, n.object.near = this.near, n.object.far = this.far, this.view !== null && (n.object.view = Object.assign({}, this.view)), n;
  }
}
class q3 extends Li {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
function Ev(s, e, n, a) {
  const o = Z3(a);
  switch (n) {
    case O_:
      return s * e;
    case I_:
      return s * e / o.components * o.byteLength;
    case U0:
      return s * e / o.components * o.byteLength;
    case O0:
      return s * e * 2 / o.components * o.byteLength;
    case P0:
      return s * e * 2 / o.components * o.byteLength;
    case P_:
      return s * e * 3 / o.components * o.byteLength;
    case Vi:
      return s * e * 4 / o.components * o.byteLength;
    case I0:
      return s * e * 4 / o.components * o.byteLength;
    case cu:
    case uu:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case fu:
    case du:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Jh:
    case e0:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case Qh:
    case $h:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case t0:
    case n0:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case i0:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case a0:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case r0:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case s0:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case o0:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case l0:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case c0:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case u0:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case f0:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case d0:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case h0:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case p0:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case m0:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case g0:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case x0:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case v0:
    case _0:
    case y0:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case b0:
    case S0:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case M0:
    case E0:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function Z3(s) {
  switch (s) {
    case Oa:
    case D_:
      return {
        byteLength: 1,
        components: 1
      };
    case gl:
    case N_:
    case ro:
      return {
        byteLength: 2,
        components: 1
      };
    case N0:
    case L0:
      return {
        byteLength: 2,
        components: 4
      };
    case Zr:
    case D0:
    case Ca:
      return {
        byteLength: 4,
        components: 1
      };
    case L_:
    case U_:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
  detail: {
    revision: C0
  }
}));
typeof window < "u" && (window.__THREE__ ? Rt("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = C0); /**
                                                                                                                                   * @license
                                                                                                                                   * Copyright 2010-2025 Three.js Authors
                                                                                                                                   * SPDX-License-Identifier: MIT
                                                                                                                                   */
function $_() {
  let s = null,
    e = !1,
    n = null,
    a = null;
  function o(c, u) {
    n(c, u), a = s.requestAnimationFrame(o);
  }
  return {
    start: function () {
      e !== !0 && n !== null && (a = s.requestAnimationFrame(o), e = !0);
    },
    stop: function () {
      s.cancelAnimationFrame(a), e = !1;
    },
    setAnimationLoop: function (c) {
      n = c;
    },
    setContext: function (c) {
      s = c;
    }
  };
}
function K3(s) {
  const e = new WeakMap();
  function n(f, m) {
    const h = f.array,
      x = f.usage,
      g = h.byteLength,
      v = s.createBuffer();
    s.bindBuffer(m, v), s.bufferData(m, h, x), f.onUploadCallback();
    let y;
    if (h instanceof Float32Array) y = s.FLOAT;else if (typeof Float16Array < "u" && h instanceof Float16Array) y = s.HALF_FLOAT;else if (h instanceof Uint16Array) f.isFloat16BufferAttribute ? y = s.HALF_FLOAT : y = s.UNSIGNED_SHORT;else if (h instanceof Int16Array) y = s.SHORT;else if (h instanceof Uint32Array) y = s.UNSIGNED_INT;else if (h instanceof Int32Array) y = s.INT;else if (h instanceof Int8Array) y = s.BYTE;else if (h instanceof Uint8Array) y = s.UNSIGNED_BYTE;else if (h instanceof Uint8ClampedArray) y = s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: v,
      type: y,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: f.version,
      size: g
    };
  }
  function a(f, m, h) {
    const x = m.array,
      g = m.updateRanges;
    if (s.bindBuffer(h, f), g.length === 0) s.bufferSubData(h, 0, x);else {
      g.sort((y, M) => y.start - M.start);
      let v = 0;
      for (let y = 1; y < g.length; y++) {
        const M = g[v],
          E = g[y];
        E.start <= M.start + M.count + 1 ? M.count = Math.max(M.count, E.start + E.count - M.start) : (++v, g[v] = E);
      }
      g.length = v + 1;
      for (let y = 0, M = g.length; y < M; y++) {
        const E = g[y];
        s.bufferSubData(h, E.start * x.BYTES_PER_ELEMENT, x, E.start, E.count);
      }
      m.clearUpdateRanges();
    }
    m.onUploadCallback();
  }
  function o(f) {
    return f.isInterleavedBufferAttribute && (f = f.data), e.get(f);
  }
  function c(f) {
    f.isInterleavedBufferAttribute && (f = f.data);
    const m = e.get(f);
    m && (s.deleteBuffer(m.buffer), e.delete(f));
  }
  function u(f, m) {
    if (f.isInterleavedBufferAttribute && (f = f.data), f.isGLBufferAttribute) {
      const x = e.get(f);
      (!x || x.version < f.version) && e.set(f, {
        buffer: f.buffer,
        type: f.type,
        bytesPerElement: f.elementSize,
        version: f.version
      });
      return;
    }
    const h = e.get(f);
    if (h === void 0) e.set(f, n(f, m));else if (h.version < f.version) {
      if (h.size !== f.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      a(h.buffer, f, m), h.version = f.version;
    }
  }
  return {
    get: o,
    remove: c,
    update: u
  };
}
var Q3 = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`;
var J3 = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`;
var $3 = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`;
var e2 = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var t2 = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`;
var n2 = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`;
var i2 = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`;
var a2 = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`;
var r2 = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`;
var s2 = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`;
var o2 = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`;
var l2 = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`;
var c2 = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`;
var u2 = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`;
var f2 = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`;
var d2 = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`;
var h2 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`;
var p2 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`;
var m2 = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`;
var g2 = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`;
var x2 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`;
var v2 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`;
var _2 = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`;
var y2 = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`;
var b2 = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`;
var S2 = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`;
var M2 = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`;
var E2 = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`;
var T2 = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`;
var A2 = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`;
var w2 = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var R2 = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`;
var C2 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`;
var D2 = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`;
var N2 = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`;
var L2 = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`;
var U2 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`;
var O2 = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`;
var P2 = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`;
var I2 = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;
var z2 = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`;
var F2 = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`;
var B2 = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`;
var H2 = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`;
var G2 = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`;
var V2 = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`;
var k2 = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`;
var j2 = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`;
var X2 = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`;
var W2 = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`;
var Y2 = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`;
var q2 = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`;
var Z2 = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`;
var K2 = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;
var Q2 = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`;
var J2 = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`;
var $2 = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`;
var eE = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var tE = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`;
var nE = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`;
var iE = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`;
var aE = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`;
var rE = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`;
var sE = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`;
var oE = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`;
var lE = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`;
var cE = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`;
var uE = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`;
var fE = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var dE = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`;
var hE = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`;
var pE = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`;
var mE = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`;
var gE = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var xE = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`;
var vE = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`;
var _E = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`;
var yE = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`;
var bE = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`;
var SE = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`;
var ME = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`;
var EE = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`;
var TE = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`;
var AE = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`;
var wE = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`;
var RE = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`;
var CE = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`;
var DE = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`;
var NE = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`;
var LE = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`;
var UE = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`;
var OE = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`;
var PE = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`;
var IE = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`;
var zE = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`;
var FE = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`;
var BE = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`;
var HE = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`;
var GE = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`;
var VE = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`;
var kE = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`;
var jE = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`;
var XE = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`;
var WE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var YE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`;
var qE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;
var ZE = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const KE = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`;
const QE = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const JE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const $E = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const eT = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`;
const tT = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const nT = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`;
const iT = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`;
const aT = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;
const rT = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`;
const sT = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`;
const oT = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const lT = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const cT = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const uT = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`;
const fT = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const dT = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const hT = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const pT = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`;
const mT = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const gT = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`;
const xT = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`;
const vT = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const _T = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const yT = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`;
const bT = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const ST = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const MT = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`;
const ET = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`;
const TT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`;
const AT = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`;
const wT = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const RT = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;
const CT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`;
const Ot = {
  alphahash_fragment: Q3,
  alphahash_pars_fragment: J3,
  alphamap_fragment: $3,
  alphamap_pars_fragment: e2,
  alphatest_fragment: t2,
  alphatest_pars_fragment: n2,
  aomap_fragment: i2,
  aomap_pars_fragment: a2,
  batching_pars_vertex: r2,
  batching_vertex: s2,
  begin_vertex: o2,
  beginnormal_vertex: l2,
  bsdfs: c2,
  iridescence_fragment: u2,
  bumpmap_pars_fragment: f2,
  clipping_planes_fragment: d2,
  clipping_planes_pars_fragment: h2,
  clipping_planes_pars_vertex: p2,
  clipping_planes_vertex: m2,
  color_fragment: g2,
  color_pars_fragment: x2,
  color_pars_vertex: v2,
  color_vertex: _2,
  common: y2,
  cube_uv_reflection_fragment: b2,
  defaultnormal_vertex: S2,
  displacementmap_pars_vertex: M2,
  displacementmap_vertex: E2,
  emissivemap_fragment: T2,
  emissivemap_pars_fragment: A2,
  colorspace_fragment: w2,
  colorspace_pars_fragment: R2,
  envmap_fragment: C2,
  envmap_common_pars_fragment: D2,
  envmap_pars_fragment: N2,
  envmap_pars_vertex: L2,
  envmap_physical_pars_fragment: k2,
  envmap_vertex: U2,
  fog_vertex: O2,
  fog_pars_vertex: P2,
  fog_fragment: I2,
  fog_pars_fragment: z2,
  gradientmap_pars_fragment: F2,
  lightmap_pars_fragment: B2,
  lights_lambert_fragment: H2,
  lights_lambert_pars_fragment: G2,
  lights_pars_begin: V2,
  lights_toon_fragment: j2,
  lights_toon_pars_fragment: X2,
  lights_phong_fragment: W2,
  lights_phong_pars_fragment: Y2,
  lights_physical_fragment: q2,
  lights_physical_pars_fragment: Z2,
  lights_fragment_begin: K2,
  lights_fragment_maps: Q2,
  lights_fragment_end: J2,
  logdepthbuf_fragment: $2,
  logdepthbuf_pars_fragment: eE,
  logdepthbuf_pars_vertex: tE,
  logdepthbuf_vertex: nE,
  map_fragment: iE,
  map_pars_fragment: aE,
  map_particle_fragment: rE,
  map_particle_pars_fragment: sE,
  metalnessmap_fragment: oE,
  metalnessmap_pars_fragment: lE,
  morphinstance_vertex: cE,
  morphcolor_vertex: uE,
  morphnormal_vertex: fE,
  morphtarget_pars_vertex: dE,
  morphtarget_vertex: hE,
  normal_fragment_begin: pE,
  normal_fragment_maps: mE,
  normal_pars_fragment: gE,
  normal_pars_vertex: xE,
  normal_vertex: vE,
  normalmap_pars_fragment: _E,
  clearcoat_normal_fragment_begin: yE,
  clearcoat_normal_fragment_maps: bE,
  clearcoat_pars_fragment: SE,
  iridescence_pars_fragment: ME,
  opaque_fragment: EE,
  packing: TE,
  premultiplied_alpha_fragment: AE,
  project_vertex: wE,
  dithering_fragment: RE,
  dithering_pars_fragment: CE,
  roughnessmap_fragment: DE,
  roughnessmap_pars_fragment: NE,
  shadowmap_pars_fragment: LE,
  shadowmap_pars_vertex: UE,
  shadowmap_vertex: OE,
  shadowmask_pars_fragment: PE,
  skinbase_vertex: IE,
  skinning_pars_vertex: zE,
  skinning_vertex: FE,
  skinnormal_vertex: BE,
  specularmap_fragment: HE,
  specularmap_pars_fragment: GE,
  tonemapping_fragment: VE,
  tonemapping_pars_fragment: kE,
  transmission_fragment: jE,
  transmission_pars_fragment: XE,
  uv_pars_fragment: WE,
  uv_pars_vertex: YE,
  uv_vertex: qE,
  worldpos_vertex: ZE,
  background_vert: KE,
  background_frag: QE,
  backgroundCube_vert: JE,
  backgroundCube_frag: $E,
  cube_vert: eT,
  cube_frag: tT,
  depth_vert: nT,
  depth_frag: iT,
  distanceRGBA_vert: aT,
  distanceRGBA_frag: rT,
  equirect_vert: sT,
  equirect_frag: oT,
  linedashed_vert: lT,
  linedashed_frag: cT,
  meshbasic_vert: uT,
  meshbasic_frag: fT,
  meshlambert_vert: dT,
  meshlambert_frag: hT,
  meshmatcap_vert: pT,
  meshmatcap_frag: mT,
  meshnormal_vert: gT,
  meshnormal_frag: xT,
  meshphong_vert: vT,
  meshphong_frag: _T,
  meshphysical_vert: yT,
  meshphysical_frag: bT,
  meshtoon_vert: ST,
  meshtoon_frag: MT,
  points_vert: ET,
  points_frag: TT,
  shadow_vert: AT,
  shadow_frag: wT,
  sprite_vert: RT,
  sprite_frag: CT
};
const et = {
  common: {
    diffuse: {
      value: new Xt(16777215)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new Lt()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Lt()
    },
    alphaTest: {
      value: 0
    }
  },
  specularmap: {
    specularMap: {
      value: null
    },
    specularMapTransform: {
      value: new Lt()
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    envMapRotation: {
      value: new Lt()
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    ior: {
      value: 1.5
    },
    refractionRatio: {
      value: .98
    },
    dfgLUT: {
      value: null
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    },
    aoMapTransform: {
      value: new Lt()
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    },
    lightMapTransform: {
      value: new Lt()
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpMapTransform: {
      value: new Lt()
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalMapTransform: {
      value: new Lt()
    },
    normalScale: {
      value: new Wt(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementMapTransform: {
      value: new Lt()
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    },
    emissiveMapTransform: {
      value: new Lt()
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    },
    metalnessMapTransform: {
      value: new Lt()
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    },
    roughnessMapTransform: {
      value: new Lt()
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 25e-5
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2e3
    },
    fogColor: {
      value: new Xt(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: {
      value: []
    },
    spotShadowMap: {
      value: []
    },
    spotLightMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new Xt(16777215)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Lt()
    },
    alphaTest: {
      value: 0
    },
    uvTransform: {
      value: new Lt()
    }
  },
  sprite: {
    diffuse: {
      value: new Xt(16777215)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new Wt(.5, .5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    mapTransform: {
      value: new Lt()
    },
    alphaMap: {
      value: null
    },
    alphaMapTransform: {
      value: new Lt()
    },
    alphaTest: {
      value: 0
    }
  }
};
const Ki = {
  basic: {
    uniforms: ti([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.fog]),
    vertexShader: Ot.meshbasic_vert,
    fragmentShader: Ot.meshbasic_frag
  },
  lambert: {
    uniforms: ti([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, {
      emissive: {
        value: new Xt(0)
      }
    }]),
    vertexShader: Ot.meshlambert_vert,
    fragmentShader: Ot.meshlambert_frag
  },
  phong: {
    uniforms: ti([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, {
      emissive: {
        value: new Xt(0)
      },
      specular: {
        value: new Xt(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: Ot.meshphong_vert,
    fragmentShader: Ot.meshphong_frag
  },
  standard: {
    uniforms: ti([et.common, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.roughnessmap, et.metalnessmap, et.fog, et.lights, {
      emissive: {
        value: new Xt(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: Ot.meshphysical_vert,
    fragmentShader: Ot.meshphysical_frag
  },
  toon: {
    uniforms: ti([et.common, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.gradientmap, et.fog, et.lights, {
      emissive: {
        value: new Xt(0)
      }
    }]),
    vertexShader: Ot.meshtoon_vert,
    fragmentShader: Ot.meshtoon_frag
  },
  matcap: {
    uniforms: ti([et.common, et.bumpmap, et.normalmap, et.displacementmap, et.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: Ot.meshmatcap_vert,
    fragmentShader: Ot.meshmatcap_frag
  },
  points: {
    uniforms: ti([et.points, et.fog]),
    vertexShader: Ot.points_vert,
    fragmentShader: Ot.points_frag
  },
  dashed: {
    uniforms: ti([et.common, et.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: Ot.linedashed_vert,
    fragmentShader: Ot.linedashed_frag
  },
  depth: {
    uniforms: ti([et.common, et.displacementmap]),
    vertexShader: Ot.depth_vert,
    fragmentShader: Ot.depth_frag
  },
  normal: {
    uniforms: ti([et.common, et.bumpmap, et.normalmap, et.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: Ot.meshnormal_vert,
    fragmentShader: Ot.meshnormal_frag
  },
  sprite: {
    uniforms: ti([et.sprite, et.fog]),
    vertexShader: Ot.sprite_vert,
    fragmentShader: Ot.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new Lt()
      },
      t2D: {
        value: null
      },
      backgroundIntensity: {
        value: 1
      }
    },
    vertexShader: Ot.background_vert,
    fragmentShader: Ot.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      backgroundBlurriness: {
        value: 0
      },
      backgroundIntensity: {
        value: 1
      },
      backgroundRotation: {
        value: new Lt()
      }
    },
    vertexShader: Ot.backgroundCube_vert,
    fragmentShader: Ot.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: Ot.cube_vert,
    fragmentShader: Ot.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: Ot.equirect_vert,
    fragmentShader: Ot.equirect_frag
  },
  distanceRGBA: {
    uniforms: ti([et.common, et.displacementmap, {
      referencePosition: {
        value: new be()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1e3
      }
    }]),
    vertexShader: Ot.distanceRGBA_vert,
    fragmentShader: Ot.distanceRGBA_frag
  },
  shadow: {
    uniforms: ti([et.lights, et.fog, {
      color: {
        value: new Xt(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: Ot.shadow_vert,
    fragmentShader: Ot.shadow_frag
  }
};
Ki.physical = {
  uniforms: ti([Ki.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatMapTransform: {
      value: new Lt()
    },
    clearcoatNormalMap: {
      value: null
    },
    clearcoatNormalMapTransform: {
      value: new Lt()
    },
    clearcoatNormalScale: {
      value: new Wt(1, 1)
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatRoughnessMapTransform: {
      value: new Lt()
    },
    dispersion: {
      value: 0
    },
    iridescence: {
      value: 0
    },
    iridescenceMap: {
      value: null
    },
    iridescenceMapTransform: {
      value: new Lt()
    },
    iridescenceIOR: {
      value: 1.3
    },
    iridescenceThicknessMinimum: {
      value: 100
    },
    iridescenceThicknessMaximum: {
      value: 400
    },
    iridescenceThicknessMap: {
      value: null
    },
    iridescenceThicknessMapTransform: {
      value: new Lt()
    },
    sheen: {
      value: 0
    },
    sheenColor: {
      value: new Xt(0)
    },
    sheenColorMap: {
      value: null
    },
    sheenColorMapTransform: {
      value: new Lt()
    },
    sheenRoughness: {
      value: 1
    },
    sheenRoughnessMap: {
      value: null
    },
    sheenRoughnessMapTransform: {
      value: new Lt()
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    },
    transmissionMapTransform: {
      value: new Lt()
    },
    transmissionSamplerSize: {
      value: new Wt()
    },
    transmissionSamplerMap: {
      value: null
    },
    thickness: {
      value: 0
    },
    thicknessMap: {
      value: null
    },
    thicknessMapTransform: {
      value: new Lt()
    },
    attenuationDistance: {
      value: 0
    },
    attenuationColor: {
      value: new Xt(0)
    },
    specularColor: {
      value: new Xt(1, 1, 1)
    },
    specularColorMap: {
      value: null
    },
    specularColorMapTransform: {
      value: new Lt()
    },
    specularIntensity: {
      value: 1
    },
    specularIntensityMap: {
      value: null
    },
    specularIntensityMapTransform: {
      value: new Lt()
    },
    anisotropyVector: {
      value: new Wt()
    },
    anisotropyMap: {
      value: null
    },
    anisotropyMapTransform: {
      value: new Lt()
    }
  }]),
  vertexShader: Ot.meshphysical_vert,
  fragmentShader: Ot.meshphysical_frag
};
const su = {
  r: 0,
  b: 0,
  g: 0
};
const Hr = new Pa();
const DT = new Ln();
function NT(s, e, n, a, o, c, u) {
  const f = new Xt(0);
  let m = c === !0 ? 0 : 1,
    h,
    x,
    g = null,
    v = 0,
    y = null;
  function M(D) {
    let O = D.isScene === !0 ? D.background : null;
    return O && O.isTexture && (O = (D.backgroundBlurriness > 0 ? n : e).get(O)), O;
  }
  function E(D) {
    let O = !1;
    const F = M(D);
    F === null ? _(f, m) : F && F.isColor && (_(F, 1), O = !0);
    const P = s.xr.getEnvironmentBlendMode();
    P === "additive" ? a.buffers.color.setClear(0, 0, 0, 1, u) : P === "alpha-blend" && a.buffers.color.setClear(0, 0, 0, 0, u), (s.autoClear || O) && (a.buffers.depth.setTest(!0), a.buffers.depth.setMask(!0), a.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function S(D, O) {
    const F = M(O);
    F && (F.isCubeTexture || F.mapping === Ru) ? (x === void 0 && (x = new Ia(new oo(1, 1, 1), new ji({
      name: "BackgroundCubeMaterial",
      uniforms: ao(Ki.backgroundCube.uniforms),
      vertexShader: Ki.backgroundCube.vertexShader,
      fragmentShader: Ki.backgroundCube.fragmentShader,
      side: ci,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), x.geometry.deleteAttribute("normal"), x.geometry.deleteAttribute("uv"), x.onBeforeRender = function (P, B, q) {
      this.matrixWorld.copyPosition(q.matrixWorld);
    }, Object.defineProperty(x.material, "envMap", {
      get: function () {
        return this.uniforms.envMap.value;
      }
    }), o.update(x)), Hr.copy(O.backgroundRotation), Hr.x *= -1, Hr.y *= -1, Hr.z *= -1, F.isCubeTexture && F.isRenderTargetTexture === !1 && (Hr.y *= -1, Hr.z *= -1), x.material.uniforms.envMap.value = F, x.material.uniforms.flipEnvMap.value = F.isCubeTexture && F.isRenderTargetTexture === !1 ? -1 : 1, x.material.uniforms.backgroundBlurriness.value = O.backgroundBlurriness, x.material.uniforms.backgroundIntensity.value = O.backgroundIntensity, x.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(Hr)), x.material.toneMapped = Jt.getTransfer(F.colorSpace) !== ln, (g !== F || v !== F.version || y !== s.toneMapping) && (x.material.needsUpdate = !0, g = F, v = F.version, y = s.toneMapping), x.layers.enableAll(), D.unshift(x, x.geometry, x.material, 0, 0, null)) : F && F.isTexture && (h === void 0 && (h = new Ia(new Cu(2, 2), new ji({
      name: "BackgroundMaterial",
      uniforms: ao(Ki.background.uniforms),
      vertexShader: Ki.background.vertexShader,
      fragmentShader: Ki.background.fragmentShader,
      side: gr,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
      get: function () {
        return this.uniforms.t2D.value;
      }
    }), o.update(h)), h.material.uniforms.t2D.value = F, h.material.uniforms.backgroundIntensity.value = O.backgroundIntensity, h.material.toneMapped = Jt.getTransfer(F.colorSpace) !== ln, F.matrixAutoUpdate === !0 && F.updateMatrix(), h.material.uniforms.uvTransform.value.copy(F.matrix), (g !== F || v !== F.version || y !== s.toneMapping) && (h.material.needsUpdate = !0, g = F, v = F.version, y = s.toneMapping), h.layers.enableAll(), D.unshift(h, h.geometry, h.material, 0, 0, null));
  }
  function _(D, O) {
    D.getRGB(su, X_(s)), a.buffers.color.setClear(su.r, su.g, su.b, O, u);
  }
  function L() {
    x !== void 0 && (x.geometry.dispose(), x.material.dispose(), x = void 0), h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0);
  }
  return {
    getClearColor: function () {
      return f;
    },
    setClearColor: function (D, O = 1) {
      f.set(D), m = O, _(f, m);
    },
    getClearAlpha: function () {
      return m;
    },
    setClearAlpha: function (D) {
      m = D, _(f, m);
    },
    render: E,
    addToRenderList: S,
    dispose: L
  };
}
function LT(s, e) {
  const n = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    a = {},
    o = v(null);
  let c = o,
    u = !1;
  function f(A, H, k, W, J) {
    let ie = !1;
    const I = g(W, k, H);
    c !== I && (c = I, h(c.object)), ie = y(A, W, k, J), ie && M(A, W, k, J), J !== null && e.update(J, s.ELEMENT_ARRAY_BUFFER), (ie || u) && (u = !1, O(A, H, k, W), J !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(J).buffer));
  }
  function m() {
    return s.createVertexArray();
  }
  function h(A) {
    return s.bindVertexArray(A);
  }
  function x(A) {
    return s.deleteVertexArray(A);
  }
  function g(A, H, k) {
    const W = k.wireframe === !0;
    let J = a[A.id];
    J === void 0 && (J = {}, a[A.id] = J);
    let ie = J[H.id];
    ie === void 0 && (ie = {}, J[H.id] = ie);
    let I = ie[W];
    return I === void 0 && (I = v(m()), ie[W] = I), I;
  }
  function v(A) {
    const H = [],
      k = [],
      W = [];
    for (let J = 0; J < n; J++) H[J] = 0, k[J] = 0, W[J] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: k,
      attributeDivisors: W,
      object: A,
      attributes: {},
      index: null
    };
  }
  function y(A, H, k, W) {
    const J = c.attributes,
      ie = H.attributes;
    let I = 0;
    const Y = k.getAttributes();
    for (const Z in Y) if (Y[Z].location >= 0) {
      const Me = J[Z];
      let z = ie[Z];
      if (z === void 0 && (Z === "instanceMatrix" && A.instanceMatrix && (z = A.instanceMatrix), Z === "instanceColor" && A.instanceColor && (z = A.instanceColor)), Me === void 0 || Me.attribute !== z || z && Me.data !== z.data) return !0;
      I++;
    }
    return c.attributesNum !== I || c.index !== W;
  }
  function M(A, H, k, W) {
    const J = {},
      ie = H.attributes;
    let I = 0;
    const Y = k.getAttributes();
    for (const Z in Y) if (Y[Z].location >= 0) {
      let Me = ie[Z];
      Me === void 0 && (Z === "instanceMatrix" && A.instanceMatrix && (Me = A.instanceMatrix), Z === "instanceColor" && A.instanceColor && (Me = A.instanceColor));
      const z = {};
      z.attribute = Me, Me && Me.data && (z.data = Me.data), J[Z] = z, I++;
    }
    c.attributes = J, c.attributesNum = I, c.index = W;
  }
  function E() {
    const A = c.newAttributes;
    for (let H = 0, k = A.length; H < k; H++) A[H] = 0;
  }
  function S(A) {
    _(A, 0);
  }
  function _(A, H) {
    const k = c.newAttributes,
      W = c.enabledAttributes,
      J = c.attributeDivisors;
    k[A] = 1, W[A] === 0 && (s.enableVertexAttribArray(A), W[A] = 1), J[A] !== H && (s.vertexAttribDivisor(A, H), J[A] = H);
  }
  function L() {
    const A = c.newAttributes,
      H = c.enabledAttributes;
    for (let k = 0, W = H.length; k < W; k++) H[k] !== A[k] && (s.disableVertexAttribArray(k), H[k] = 0);
  }
  function D(A, H, k, W, J, ie, I) {
    I === !0 ? s.vertexAttribIPointer(A, H, k, J, ie) : s.vertexAttribPointer(A, H, k, W, J, ie);
  }
  function O(A, H, k, W) {
    E();
    const J = W.attributes,
      ie = k.getAttributes(),
      I = H.defaultAttributeValues;
    for (const Y in ie) {
      const Z = ie[Y];
      if (Z.location >= 0) {
        let pe = J[Y];
        if (pe === void 0 && (Y === "instanceMatrix" && A.instanceMatrix && (pe = A.instanceMatrix), Y === "instanceColor" && A.instanceColor && (pe = A.instanceColor)), pe !== void 0) {
          const Me = pe.normalized,
            z = pe.itemSize,
            ee = e.get(pe);
          if (ee === void 0) continue;
          const he = ee.buffer,
            Ee = ee.type,
            Be = ee.bytesPerElement,
            te = Ee === s.INT || Ee === s.UNSIGNED_INT || pe.gpuType === D0;
          if (pe.isInterleavedBufferAttribute) {
            const me = pe.data,
              He = me.stride,
              Ge = pe.offset;
            if (me.isInstancedInterleavedBuffer) {
              for (let qe = 0; qe < Z.locationSize; qe++) _(Z.location + qe, me.meshPerAttribute);
              A.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = me.meshPerAttribute * me.count);
            } else for (let qe = 0; qe < Z.locationSize; qe++) S(Z.location + qe);
            s.bindBuffer(s.ARRAY_BUFFER, he);
            for (let qe = 0; qe < Z.locationSize; qe++) D(Z.location + qe, z / Z.locationSize, Ee, Me, He * Be, (Ge + z / Z.locationSize * qe) * Be, te);
          } else {
            if (pe.isInstancedBufferAttribute) {
              for (let me = 0; me < Z.locationSize; me++) _(Z.location + me, pe.meshPerAttribute);
              A.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else for (let me = 0; me < Z.locationSize; me++) S(Z.location + me);
            s.bindBuffer(s.ARRAY_BUFFER, he);
            for (let me = 0; me < Z.locationSize; me++) D(Z.location + me, z / Z.locationSize, Ee, Me, z * Be, z / Z.locationSize * me * Be, te);
          }
        } else if (I !== void 0) {
          const Me = I[Y];
          if (Me !== void 0) switch (Me.length) {
            case 2:
              s.vertexAttrib2fv(Z.location, Me);
              break;
            case 3:
              s.vertexAttrib3fv(Z.location, Me);
              break;
            case 4:
              s.vertexAttrib4fv(Z.location, Me);
              break;
            default:
              s.vertexAttrib1fv(Z.location, Me);
          }
        }
      }
    }
    L();
  }
  function F() {
    q();
    for (const A in a) {
      const H = a[A];
      for (const k in H) {
        const W = H[k];
        for (const J in W) x(W[J].object), delete W[J];
        delete H[k];
      }
      delete a[A];
    }
  }
  function P(A) {
    if (a[A.id] === void 0) return;
    const H = a[A.id];
    for (const k in H) {
      const W = H[k];
      for (const J in W) x(W[J].object), delete W[J];
      delete H[k];
    }
    delete a[A.id];
  }
  function B(A) {
    for (const H in a) {
      const k = a[H];
      if (k[A.id] === void 0) continue;
      const W = k[A.id];
      for (const J in W) x(W[J].object), delete W[J];
      delete k[A.id];
    }
  }
  function q() {
    w(), u = !0, c !== o && (c = o, h(c.object));
  }
  function w() {
    o.geometry = null, o.program = null, o.wireframe = !1;
  }
  return {
    setup: f,
    reset: q,
    resetDefaultState: w,
    dispose: F,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: B,
    initAttributes: E,
    enableAttribute: S,
    disableUnusedAttributes: L
  };
}
function UT(s, e, n) {
  let a;
  function o(h) {
    a = h;
  }
  function c(h, x) {
    s.drawArrays(a, h, x), n.update(x, a, 1);
  }
  function u(h, x, g) {
    g !== 0 && (s.drawArraysInstanced(a, h, x, g), n.update(x, a, g));
  }
  function f(h, x, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a, h, 0, x, 0, g);
    let y = 0;
    for (let M = 0; M < g; M++) y += x[M];
    n.update(y, a, 1);
  }
  function m(h, x, g, v) {
    if (g === 0) return;
    const y = e.get("WEBGL_multi_draw");
    if (y === null) for (let M = 0; M < h.length; M++) u(h[M], x[M], v[M]);else {
      y.multiDrawArraysInstancedWEBGL(a, h, 0, x, 0, v, 0, g);
      let M = 0;
      for (let E = 0; E < g; E++) M += x[E] * v[E];
      n.update(M, a, 1);
    }
  }
  this.setMode = o, this.render = c, this.renderInstances = u, this.renderMultiDraw = f, this.renderMultiDrawInstances = m;
}
function OT(s, e, n, a) {
  let o;
  function c() {
    if (o !== void 0) return o;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const B = e.get("EXT_texture_filter_anisotropic");
      o = s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else o = 0;
    return o;
  }
  function u(B) {
    return !(B !== Vi && a.convert(B) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function f(B) {
    const q = B === ro && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(B !== Oa && a.convert(B) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && B !== Ca && !q);
  }
  function m(B) {
    if (B === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp";
      B = "mediump";
    }
    return B === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let h = n.precision !== void 0 ? n.precision : "highp";
  const x = m(h);
  x !== h && (Rt("WebGLRenderer:", h, "not supported, using", x, "instead."), h = x);
  const g = n.logarithmicDepthBuffer === !0,
    v = n.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    y = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    M = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    E = s.getParameter(s.MAX_TEXTURE_SIZE),
    S = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    L = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    D = s.getParameter(s.MAX_VARYING_VECTORS),
    O = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    F = M > 0,
    P = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: c,
    getMaxPrecision: m,
    textureFormatReadable: u,
    textureTypeReadable: f,
    precision: h,
    logarithmicDepthBuffer: g,
    reversedDepthBuffer: v,
    maxTextures: y,
    maxVertexTextures: M,
    maxTextureSize: E,
    maxCubemapSize: S,
    maxAttributes: _,
    maxVertexUniforms: L,
    maxVaryings: D,
    maxFragmentUniforms: O,
    vertexTextures: F,
    maxSamples: P
  };
}
function PT(s) {
  const e = this;
  let n = null,
    a = 0,
    o = !1,
    c = !1;
  const u = new kr(),
    f = new Lt(),
    m = {
      value: null,
      needsUpdate: !1
    };
  this.uniform = m, this.numPlanes = 0, this.numIntersection = 0, this.init = function (g, v) {
    const y = g.length !== 0 || v || a !== 0 || o;
    return o = v, a = g.length, y;
  }, this.beginShadows = function () {
    c = !0, x(null);
  }, this.endShadows = function () {
    c = !1;
  }, this.setGlobalState = function (g, v) {
    n = x(g, v, 0);
  }, this.setState = function (g, v, y) {
    const M = g.clippingPlanes,
      E = g.clipIntersection,
      S = g.clipShadows,
      _ = s.get(g);
    if (!o || M === null || M.length === 0 || c && !S) c ? x(null) : h();else {
      const L = c ? 0 : a,
        D = L * 4;
      let O = _.clippingState || null;
      m.value = O, O = x(M, v, D, y);
      for (let F = 0; F !== D; ++F) O[F] = n[F];
      _.clippingState = O, this.numIntersection = E ? this.numPlanes : 0, this.numPlanes += L;
    }
  };
  function h() {
    m.value !== n && (m.value = n, m.needsUpdate = a > 0), e.numPlanes = a, e.numIntersection = 0;
  }
  function x(g, v, y, M) {
    const E = g !== null ? g.length : 0;
    let S = null;
    if (E !== 0) {
      if (S = m.value, M !== !0 || S === null) {
        const _ = y + E * 4,
          L = v.matrixWorldInverse;
        f.getNormalMatrix(L), (S === null || S.length < _) && (S = new Float32Array(_));
        for (let D = 0, O = y; D !== E; ++D, O += 4) u.copy(g[D]).applyMatrix4(L, f), u.normal.toArray(S, O), S[O + 3] = u.constant;
      }
      m.value = S, m.needsUpdate = !0;
    }
    return e.numPlanes = E, e.numIntersection = 0, S;
  }
}
function IT(s) {
  let e = new WeakMap();
  function n(u, f) {
    return f === Yh ? u.mapping = to : f === qh && (u.mapping = no), u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const f = u.mapping;
      if (f === Yh || f === qh) if (e.has(u)) {
        const m = e.get(u).texture;
        return n(m, u.mapping);
      } else {
        const m = u.image;
        if (m && m.height > 0) {
          const h = new N3(m.height);
          return h.fromEquirectangularTexture(s, u), e.set(u, h), u.addEventListener("dispose", o), n(h.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function o(u) {
    const f = u.target;
    f.removeEventListener("dispose", o);
    const m = e.get(f);
    m !== void 0 && (e.delete(f), m.dispose());
  }
  function c() {
    e = new WeakMap();
  }
  return {
    get: a,
    dispose: c
  };
}
const mr = 4;
const Tv = [.125, .215, .35, .446, .526, .582];
const Xr = 20;
const zT = 256;
const ol = new Y3();
const Av = new Xt();
let _h = null;
let yh = 0;
let bh = 0;
let Sh = !1;
const FT = new be();
class wv {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, n = 0, a = .1, o = 100, c = {}) {
    const {
      size: u = 256,
      position: f = FT
    } = c;
    _h = this._renderer.getRenderTarget(), yh = this._renderer.getActiveCubeFace(), bh = this._renderer.getActiveMipmapLevel(), Sh = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(u);
    const m = this._allocateTargets();
    return m.depthBuffer = !0, this._sceneToCubeUV(e, a, o, m, f), n > 0 && this._blur(m, 0, 0, n), this._applyPMREM(m), this._cleanup(m), m;
  }
  fromEquirectangular(e, n = null) {
    return this._fromTexture(e, n);
  }
  fromCubemap(e, n = null) {
    return this._fromTexture(e, n);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Dv(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Cv(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_h, yh, bh), this._renderer.xr.enabled = Sh, e.scissorTest = !1, qs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, n) {
    e.mapping === to || e.mapping === no ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), _h = this._renderer.getRenderTarget(), yh = this._renderer.getActiveCubeFace(), bh = this._renderer.getActiveMipmapLevel(), Sh = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const a = n || this._allocateTargets();
    return this._textureToCubeUV(e, a), this._applyPMREM(a), this._cleanup(a), a;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      n = 4 * this._cubeSize,
      a = {
        magFilter: Oi,
        minFilter: Oi,
        generateMipmaps: !1,
        type: ro,
        format: Vi,
        colorSpace: io,
        depthBuffer: !1
      },
      o = Rv(e, n, a);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== n) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Rv(e, n, a);
      const {
        _lodMax: c
      } = this;
      ({
        lodMeshes: this._lodMeshes,
        sizeLods: this._sizeLods,
        sigmas: this._sigmas
      } = BT(c)), this._blurMaterial = GT(c, e, n), this._ggxMaterial = HT(c, e, n);
    }
    return o;
  }
  _compileMaterial(e) {
    const n = new Ia(new za(), e);
    this._renderer.compile(n, ol);
  }
  _sceneToCubeUV(e, n, a, o, c) {
    const m = new Li(90, 1, n, a),
      h = [1, -1, 1, 1, 1, 1],
      x = [1, 1, 1, -1, -1, -1],
      g = this._renderer,
      v = g.autoClear,
      y = g.toneMapping;
    g.getClearColor(Av), g.toneMapping = Na, g.autoClear = !1, g.state.buffers.depth.getReversed() && (g.setRenderTarget(o), g.clearDepth(), g.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Ia(new oo(), new V_({
      name: "PMREM.Background",
      side: ci,
      depthWrite: !1,
      depthTest: !1
    })));
    const E = this._backgroundBox,
      S = E.material;
    let _ = !1;
    const L = e.background;
    L ? L.isColor && (S.color.copy(L), e.background = null, _ = !0) : (S.color.copy(Av), _ = !0);
    for (let D = 0; D < 6; D++) {
      const O = D % 3;
      O === 0 ? (m.up.set(0, h[D], 0), m.position.set(c.x, c.y, c.z), m.lookAt(c.x + x[D], c.y, c.z)) : O === 1 ? (m.up.set(0, 0, h[D]), m.position.set(c.x, c.y, c.z), m.lookAt(c.x, c.y + x[D], c.z)) : (m.up.set(0, h[D], 0), m.position.set(c.x, c.y, c.z), m.lookAt(c.x, c.y, c.z + x[D]));
      const F = this._cubeSize;
      qs(o, O * F, D > 2 ? F : 0, F, F), g.setRenderTarget(o), _ && g.render(E, m), g.render(e, m);
    }
    g.toneMapping = y, g.autoClear = v, e.background = L;
  }
  _textureToCubeUV(e, n) {
    const a = this._renderer,
      o = e.mapping === to || e.mapping === no;
    o ? (this._cubemapMaterial === null && (this._cubemapMaterial = Dv()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Cv());
    const c = o ? this._cubemapMaterial : this._equirectMaterial,
      u = this._lodMeshes[0];
    u.material = c;
    const f = c.uniforms;
    f.envMap.value = e;
    const m = this._cubeSize;
    qs(n, 0, 0, 3 * m, 2 * m), a.setRenderTarget(n), a.render(u, ol);
  }
  _applyPMREM(e) {
    const n = this._renderer,
      a = n.autoClear;
    n.autoClear = !1;
    const o = this._lodMeshes.length;
    for (let c = 1; c < o; c++) this._applyGGXFilter(e, c - 1, c);
    n.autoClear = a;
  }
  _applyGGXFilter(e, n, a) {
    const o = this._renderer,
      c = this._pingPongRenderTarget,
      u = this._ggxMaterial,
      f = this._lodMeshes[a];
    f.material = u;
    const m = u.uniforms,
      h = a / (this._lodMeshes.length - 1),
      x = n / (this._lodMeshes.length - 1),
      g = Math.sqrt(h * h - x * x),
      v = .05 + h * .95,
      y = g * v,
      {
        _lodMax: M
      } = this,
      E = this._sizeLods[a],
      S = 3 * E * (a > M - mr ? a - M + mr : 0),
      _ = 4 * (this._cubeSize - E);
    m.envMap.value = e.texture, m.roughness.value = y, m.mipInt.value = M - n, qs(c, S, _, 3 * E, 2 * E), o.setRenderTarget(c), o.render(f, ol), m.envMap.value = c.texture, m.roughness.value = 0, m.mipInt.value = M - a, qs(e, S, _, 3 * E, 2 * E), o.setRenderTarget(e), o.render(f, ol);
  }
  _blur(e, n, a, o, c) {
    const u = this._pingPongRenderTarget;
    this._halfBlur(e, u, n, a, o, "latitudinal", c), this._halfBlur(u, e, a, a, o, "longitudinal", c);
  }
  _halfBlur(e, n, a, o, c, u, f) {
    const m = this._renderer,
      h = this._blurMaterial;
    u !== "latitudinal" && u !== "longitudinal" && yn("blur direction must be either latitudinal or longitudinal!");
    const x = 3,
      g = this._lodMeshes[o];
    g.material = h;
    const v = h.uniforms,
      y = this._sizeLods[a] - 1,
      M = isFinite(c) ? Math.PI / (2 * y) : 2 * Math.PI / (2 * Xr - 1),
      E = c / M,
      S = isFinite(c) ? 1 + Math.floor(x * E) : Xr;
    S > Xr && Rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Xr}`);
    const _ = [];
    let L = 0;
    for (let B = 0; B < Xr; ++B) {
      const q = B / E,
        w = Math.exp(-q * q / 2);
      _.push(w), B === 0 ? L += w : B < S && (L += 2 * w);
    }
    for (let B = 0; B < _.length; B++) _[B] = _[B] / L;
    v.envMap.value = e.texture, v.samples.value = S, v.weights.value = _, v.latitudinal.value = u === "latitudinal", f && (v.poleAxis.value = f);
    const {
      _lodMax: D
    } = this;
    v.dTheta.value = M, v.mipInt.value = D - a;
    const O = this._sizeLods[o],
      F = 3 * O * (o > D - mr ? o - D + mr : 0),
      P = 4 * (this._cubeSize - O);
    qs(n, F, P, 3 * O, 2 * O), m.setRenderTarget(n), m.render(g, ol);
  }
}
function BT(s) {
  const e = [],
    n = [],
    a = [];
  let o = s;
  const c = s - mr + 1 + Tv.length;
  for (let u = 0; u < c; u++) {
    const f = Math.pow(2, o);
    e.push(f);
    let m = 1 / f;
    u > s - mr ? m = Tv[u - s + mr - 1] : u === 0 && (m = 0), n.push(m);
    const h = 1 / (f - 2),
      x = -h,
      g = 1 + h,
      v = [x, x, g, x, g, g, x, x, g, g, x, g],
      y = 6,
      M = 6,
      E = 3,
      S = 2,
      _ = 1,
      L = new Float32Array(E * M * y),
      D = new Float32Array(S * M * y),
      O = new Float32Array(_ * M * y);
    for (let P = 0; P < y; P++) {
      const B = P % 3 * 2 / 3 - 1,
        q = P > 2 ? 0 : -1,
        w = [B, q, 0, B + 2 / 3, q, 0, B + 2 / 3, q + 1, 0, B, q, 0, B + 2 / 3, q + 1, 0, B, q + 1, 0];
      L.set(w, E * M * P), D.set(v, S * M * P);
      const A = [P, P, P, P, P, P];
      O.set(A, _ * M * P);
    }
    const F = new za();
    F.setAttribute("position", new ki(L, E)), F.setAttribute("uv", new ki(D, S)), F.setAttribute("faceIndex", new ki(O, _)), a.push(new Ia(F, null)), o > mr && o--;
  }
  return {
    lodMeshes: a,
    sizeLods: e,
    sigmas: n
  };
}
function Rv(s, e, n) {
  const a = new Kr(s, e, n);
  return a.texture.mapping = Ru, a.texture.name = "PMREM.cubeUv", a.scissorTest = !0, a;
}
function qs(s, e, n, a, o) {
  s.viewport.set(e, n, a, o), s.scissor.set(e, n, a, o);
}
function HT(s, e, n) {
  return new ji({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: zT,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      roughness: {
        value: 0
      },
      mipInt: {
        value: 0
      }
    },
    vertexShader: Du(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: Da,
    depthTest: !1,
    depthWrite: !1
  });
}
function GT(s, e, n) {
  const a = new Float32Array(Xr),
    o = new be(0, 1, 0);
  return new ji({
    name: "SphericalGaussianBlur",
    defines: {
      n: Xr,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: {
        value: null
      },
      samples: {
        value: 1
      },
      weights: {
        value: a
      },
      latitudinal: {
        value: !1
      },
      dTheta: {
        value: 0
      },
      mipInt: {
        value: 0
      },
      poleAxis: {
        value: o
      }
    },
    vertexShader: Du(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Da,
    depthTest: !1,
    depthWrite: !1
  });
}
function Cv() {
  return new ji({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null
      }
    },
    vertexShader: Du(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Da,
    depthTest: !1,
    depthWrite: !1
  });
}
function Dv() {
  return new ji({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      }
    },
    vertexShader: Du(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Da,
    depthTest: !1,
    depthWrite: !1
  });
}
function Du() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function VT(s) {
  let e = new WeakMap(),
    n = null;
  function a(f) {
    if (f && f.isTexture) {
      const m = f.mapping,
        h = m === Yh || m === qh,
        x = m === to || m === no;
      if (h || x) {
        let g = e.get(f);
        const v = g !== void 0 ? g.texture.pmremVersion : 0;
        if (f.isRenderTargetTexture && f.pmremVersion !== v) return n === null && (n = new wv(s)), g = h ? n.fromEquirectangular(f, g) : n.fromCubemap(f, g), g.texture.pmremVersion = f.pmremVersion, e.set(f, g), g.texture;
        if (g !== void 0) return g.texture;
        {
          const y = f.image;
          return h && y && y.height > 0 || x && y && o(y) ? (n === null && (n = new wv(s)), g = h ? n.fromEquirectangular(f) : n.fromCubemap(f), g.texture.pmremVersion = f.pmremVersion, e.set(f, g), f.addEventListener("dispose", c), g.texture) : null;
        }
      }
    }
    return f;
  }
  function o(f) {
    let m = 0;
    const h = 6;
    for (let x = 0; x < h; x++) f[x] !== void 0 && m++;
    return m === h;
  }
  function c(f) {
    const m = f.target;
    m.removeEventListener("dispose", c);
    const h = e.get(m);
    h !== void 0 && (e.delete(m), h.dispose());
  }
  function u() {
    e = new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: a,
    dispose: u
  };
}
function kT(s) {
  const e = {};
  function n(a) {
    if (e[a] !== void 0) return e[a];
    const o = s.getExtension(a);
    return e[a] = o, o;
  }
  return {
    has: function (a) {
      return n(a) !== null;
    },
    init: function () {
      n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
    },
    get: function (a) {
      const o = n(a);
      return o === null && bl("WebGLRenderer: " + a + " extension not supported."), o;
    }
  };
}
function jT(s, e, n, a) {
  const o = {},
    c = new WeakMap();
  function u(g) {
    const v = g.target;
    v.index !== null && e.remove(v.index);
    for (const M in v.attributes) e.remove(v.attributes[M]);
    v.removeEventListener("dispose", u), delete o[v.id];
    const y = c.get(v);
    y && (e.remove(y), c.delete(v)), a.releaseStatesOfGeometry(v), v.isInstancedBufferGeometry === !0 && delete v._maxInstanceCount, n.memory.geometries--;
  }
  function f(g, v) {
    return o[v.id] === !0 || (v.addEventListener("dispose", u), o[v.id] = !0, n.memory.geometries++), v;
  }
  function m(g) {
    const v = g.attributes;
    for (const y in v) e.update(v[y], s.ARRAY_BUFFER);
  }
  function h(g) {
    const v = [],
      y = g.index,
      M = g.attributes.position;
    let E = 0;
    if (y !== null) {
      const L = y.array;
      E = y.version;
      for (let D = 0, O = L.length; D < O; D += 3) {
        const F = L[D + 0],
          P = L[D + 1],
          B = L[D + 2];
        v.push(F, P, P, B, B, F);
      }
    } else if (M !== void 0) {
      const L = M.array;
      E = M.version;
      for (let D = 0, O = L.length / 3 - 1; D < O; D += 3) {
        const F = D + 0,
          P = D + 1,
          B = D + 2;
        v.push(F, P, P, B, B, F);
      }
    } else return;
    const S = new (F_(v) ? j_ : k_)(v, 1);
    S.version = E;
    const _ = c.get(g);
    _ && e.remove(_), c.set(g, S);
  }
  function x(g) {
    const v = c.get(g);
    if (v) {
      const y = g.index;
      y !== null && v.version < y.version && h(g);
    } else h(g);
    return c.get(g);
  }
  return {
    get: f,
    update: m,
    getWireframeAttribute: x
  };
}
function XT(s, e, n) {
  let a;
  function o(v) {
    a = v;
  }
  let c, u;
  function f(v) {
    c = v.type, u = v.bytesPerElement;
  }
  function m(v, y) {
    s.drawElements(a, y, c, v * u), n.update(y, a, 1);
  }
  function h(v, y, M) {
    M !== 0 && (s.drawElementsInstanced(a, y, c, v * u, M), n.update(y, a, M));
  }
  function x(v, y, M) {
    if (M === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a, y, 0, c, v, 0, M);
    let S = 0;
    for (let _ = 0; _ < M; _++) S += y[_];
    n.update(S, a, 1);
  }
  function g(v, y, M, E) {
    if (M === 0) return;
    const S = e.get("WEBGL_multi_draw");
    if (S === null) for (let _ = 0; _ < v.length; _++) h(v[_] / u, y[_], E[_]);else {
      S.multiDrawElementsInstancedWEBGL(a, y, 0, c, v, 0, E, 0, M);
      let _ = 0;
      for (let L = 0; L < M; L++) _ += y[L] * E[L];
      n.update(_, a, 1);
    }
  }
  this.setMode = o, this.setIndex = f, this.render = m, this.renderInstances = h, this.renderMultiDraw = x, this.renderMultiDrawInstances = g;
}
function WT(s) {
  const e = {
      geometries: 0,
      textures: 0
    },
    n = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
  function a(c, u, f) {
    switch (n.calls++, u) {
      case s.TRIANGLES:
        n.triangles += f * (c / 3);
        break;
      case s.LINES:
        n.lines += f * (c / 2);
        break;
      case s.LINE_STRIP:
        n.lines += f * (c - 1);
        break;
      case s.LINE_LOOP:
        n.lines += f * c;
        break;
      case s.POINTS:
        n.points += f * c;
        break;
      default:
        yn("WebGLInfo: Unknown draw mode:", u);
        break;
    }
  }
  function o() {
    n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: e,
    render: n,
    programs: null,
    autoReset: !0,
    reset: o,
    update: a
  };
}
function YT(s, e, n) {
  const a = new WeakMap(),
    o = new En();
  function c(u, f, m) {
    const h = u.morphTargetInfluences,
      x = f.morphAttributes.position || f.morphAttributes.normal || f.morphAttributes.color,
      g = x !== void 0 ? x.length : 0;
    let v = a.get(f);
    if (v === void 0 || v.count !== g) {
      let A = function () {
        q.dispose(), a.delete(f), f.removeEventListener("dispose", A);
      };
      var y = A;
      v !== void 0 && v.texture.dispose();
      const M = f.morphAttributes.position !== void 0,
        E = f.morphAttributes.normal !== void 0,
        S = f.morphAttributes.color !== void 0,
        _ = f.morphAttributes.position || [],
        L = f.morphAttributes.normal || [],
        D = f.morphAttributes.color || [];
      let O = 0;
      M === !0 && (O = 1), E === !0 && (O = 2), S === !0 && (O = 3);
      let F = f.attributes.position.count * O,
        P = 1;
      F > e.maxTextureSize && (P = Math.ceil(F / e.maxTextureSize), F = e.maxTextureSize);
      const B = new Float32Array(F * P * 4 * g),
        q = new B_(B, F, P, g);
      q.type = Ca, q.needsUpdate = !0;
      const w = O * 4;
      for (let H = 0; H < g; H++) {
        const k = _[H],
          W = L[H],
          J = D[H],
          ie = F * P * 4 * H;
        for (let I = 0; I < k.count; I++) {
          const Y = I * w;
          M === !0 && (o.fromBufferAttribute(k, I), B[ie + Y + 0] = o.x, B[ie + Y + 1] = o.y, B[ie + Y + 2] = o.z, B[ie + Y + 3] = 0), E === !0 && (o.fromBufferAttribute(W, I), B[ie + Y + 4] = o.x, B[ie + Y + 5] = o.y, B[ie + Y + 6] = o.z, B[ie + Y + 7] = 0), S === !0 && (o.fromBufferAttribute(J, I), B[ie + Y + 8] = o.x, B[ie + Y + 9] = o.y, B[ie + Y + 10] = o.z, B[ie + Y + 11] = J.itemSize === 4 ? o.w : 1);
        }
      }
      v = {
        count: g,
        texture: q,
        size: new Wt(F, P)
      }, a.set(f, v), f.addEventListener("dispose", A);
    }
    if (u.isInstancedMesh === !0 && u.morphTexture !== null) m.getUniforms().setValue(s, "morphTexture", u.morphTexture, n);else {
      let M = 0;
      for (let S = 0; S < h.length; S++) M += h[S];
      const E = f.morphTargetsRelative ? 1 : 1 - M;
      m.getUniforms().setValue(s, "morphTargetBaseInfluence", E), m.getUniforms().setValue(s, "morphTargetInfluences", h);
    }
    m.getUniforms().setValue(s, "morphTargetsTexture", v.texture, n), m.getUniforms().setValue(s, "morphTargetsTextureSize", v.size);
  }
  return {
    update: c
  };
}
function qT(s, e, n, a) {
  let o = new WeakMap();
  function c(m) {
    const h = a.render.frame,
      x = m.geometry,
      g = e.get(m, x);
    if (o.get(g) !== h && (e.update(g), o.set(g, h)), m.isInstancedMesh && (m.hasEventListener("dispose", f) === !1 && m.addEventListener("dispose", f), o.get(m) !== h && (n.update(m.instanceMatrix, s.ARRAY_BUFFER), m.instanceColor !== null && n.update(m.instanceColor, s.ARRAY_BUFFER), o.set(m, h))), m.isSkinnedMesh) {
      const v = m.skeleton;
      o.get(v) !== h && (v.update(), o.set(v, h));
    }
    return g;
  }
  function u() {
    o = new WeakMap();
  }
  function f(m) {
    const h = m.target;
    h.removeEventListener("dispose", f), n.remove(h.instanceMatrix), h.instanceColor !== null && n.remove(h.instanceColor);
  }
  return {
    update: c,
    dispose: u
  };
}
const ey = new Zn();
const Nv = new Q_(1, 1);
const ty = new B_();
const ny = new h3();
const iy = new Y_();
const Lv = [];
const Uv = [];
const Ov = new Float32Array(16);
const Pv = new Float32Array(9);
const Iv = new Float32Array(4);
function lo(s, e, n) {
  const a = s[0];
  if (a <= 0 || a > 0) return s;
  const o = e * n;
  let c = Lv[o];
  if (c === void 0 && (c = new Float32Array(o), Lv[o] = c), e !== 0) {
    a.toArray(c, 0);
    for (let u = 1, f = 0; u !== e; ++u) f += n, s[u].toArray(c, f);
  }
  return c;
}
function In(s, e) {
  if (s.length !== e.length) return !1;
  for (let n = 0, a = s.length; n < a; n++) if (s[n] !== e[n]) return !1;
  return !0;
}
function zn(s, e) {
  for (let n = 0, a = e.length; n < a; n++) s[n] = e[n];
}
function Nu(s, e) {
  let n = Uv[e];
  n === void 0 && (n = new Int32Array(e), Uv[e] = n);
  for (let a = 0; a !== e; ++a) n[a] = s.allocateTextureUnit();
  return n;
}
function ZT(s, e) {
  const n = this.cache;
  n[0] !== e && (s.uniform1f(this.addr, e), n[0] = e);
}
function KT(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
    if (In(n, e)) return;
    s.uniform2fv(this.addr, e), zn(n, e);
  }
}
function QT(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else if (e.r !== void 0) (n[0] !== e.r || n[1] !== e.g || n[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);else {
    if (In(n, e)) return;
    s.uniform3fv(this.addr, e), zn(n, e);
  }
}
function JT(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
    if (In(n, e)) return;
    s.uniform4fv(this.addr, e), zn(n, e);
  }
}
function $T(s, e) {
  const n = this.cache,
    a = e.elements;
  if (a === void 0) {
    if (In(n, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), zn(n, e);
  } else {
    if (In(n, a)) return;
    Iv.set(a), s.uniformMatrix2fv(this.addr, !1, Iv), zn(n, a);
  }
}
function eA(s, e) {
  const n = this.cache,
    a = e.elements;
  if (a === void 0) {
    if (In(n, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), zn(n, e);
  } else {
    if (In(n, a)) return;
    Pv.set(a), s.uniformMatrix3fv(this.addr, !1, Pv), zn(n, a);
  }
}
function tA(s, e) {
  const n = this.cache,
    a = e.elements;
  if (a === void 0) {
    if (In(n, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), zn(n, e);
  } else {
    if (In(n, a)) return;
    Ov.set(a), s.uniformMatrix4fv(this.addr, !1, Ov), zn(n, a);
  }
}
function nA(s, e) {
  const n = this.cache;
  n[0] !== e && (s.uniform1i(this.addr, e), n[0] = e);
}
function iA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
    if (In(n, e)) return;
    s.uniform2iv(this.addr, e), zn(n, e);
  }
}
function aA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else {
    if (In(n, e)) return;
    s.uniform3iv(this.addr, e), zn(n, e);
  }
}
function rA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
    if (In(n, e)) return;
    s.uniform4iv(this.addr, e), zn(n, e);
  }
}
function sA(s, e) {
  const n = this.cache;
  n[0] !== e && (s.uniform1ui(this.addr, e), n[0] = e);
}
function oA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
    if (In(n, e)) return;
    s.uniform2uiv(this.addr, e), zn(n, e);
  }
}
function lA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else {
    if (In(n, e)) return;
    s.uniform3uiv(this.addr, e), zn(n, e);
  }
}
function cA(s, e) {
  const n = this.cache;
  if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
    if (In(n, e)) return;
    s.uniform4uiv(this.addr, e), zn(n, e);
  }
}
function uA(s, e, n) {
  const a = this.cache,
    o = n.allocateTextureUnit();
  a[0] !== o && (s.uniform1i(this.addr, o), a[0] = o);
  let c;
  this.type === s.SAMPLER_2D_SHADOW ? (Nv.compareFunction = z_, c = Nv) : c = ey, n.setTexture2D(e || c, o);
}
function fA(s, e, n) {
  const a = this.cache,
    o = n.allocateTextureUnit();
  a[0] !== o && (s.uniform1i(this.addr, o), a[0] = o), n.setTexture3D(e || ny, o);
}
function dA(s, e, n) {
  const a = this.cache,
    o = n.allocateTextureUnit();
  a[0] !== o && (s.uniform1i(this.addr, o), a[0] = o), n.setTextureCube(e || iy, o);
}
function hA(s, e, n) {
  const a = this.cache,
    o = n.allocateTextureUnit();
  a[0] !== o && (s.uniform1i(this.addr, o), a[0] = o), n.setTexture2DArray(e || ty, o);
}
function pA(s) {
  switch (s) {
    case 5126:
      return ZT;
    case 35664:
      return KT;
    case 35665:
      return QT;
    case 35666:
      return JT;
    case 35674:
      return $T;
    case 35675:
      return eA;
    case 35676:
      return tA;
    case 5124:
    case 35670:
      return nA;
    case 35667:
    case 35671:
      return iA;
    case 35668:
    case 35672:
      return aA;
    case 35669:
    case 35673:
      return rA;
    case 5125:
      return sA;
    case 36294:
      return oA;
    case 36295:
      return lA;
    case 36296:
      return cA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return uA;
    case 35679:
    case 36299:
    case 36307:
      return fA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return dA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hA;
  }
}
function mA(s, e) {
  s.uniform1fv(this.addr, e);
}
function gA(s, e) {
  const n = lo(e, this.size, 2);
  s.uniform2fv(this.addr, n);
}
function xA(s, e) {
  const n = lo(e, this.size, 3);
  s.uniform3fv(this.addr, n);
}
function vA(s, e) {
  const n = lo(e, this.size, 4);
  s.uniform4fv(this.addr, n);
}
function _A(s, e) {
  const n = lo(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, n);
}
function yA(s, e) {
  const n = lo(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, n);
}
function bA(s, e) {
  const n = lo(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, n);
}
function SA(s, e) {
  s.uniform1iv(this.addr, e);
}
function MA(s, e) {
  s.uniform2iv(this.addr, e);
}
function EA(s, e) {
  s.uniform3iv(this.addr, e);
}
function TA(s, e) {
  s.uniform4iv(this.addr, e);
}
function AA(s, e) {
  s.uniform1uiv(this.addr, e);
}
function wA(s, e) {
  s.uniform2uiv(this.addr, e);
}
function RA(s, e) {
  s.uniform3uiv(this.addr, e);
}
function CA(s, e) {
  s.uniform4uiv(this.addr, e);
}
function DA(s, e, n) {
  const a = this.cache,
    o = e.length,
    c = Nu(n, o);
  In(a, c) || (s.uniform1iv(this.addr, c), zn(a, c));
  for (let u = 0; u !== o; ++u) n.setTexture2D(e[u] || ey, c[u]);
}
function NA(s, e, n) {
  const a = this.cache,
    o = e.length,
    c = Nu(n, o);
  In(a, c) || (s.uniform1iv(this.addr, c), zn(a, c));
  for (let u = 0; u !== o; ++u) n.setTexture3D(e[u] || ny, c[u]);
}
function LA(s, e, n) {
  const a = this.cache,
    o = e.length,
    c = Nu(n, o);
  In(a, c) || (s.uniform1iv(this.addr, c), zn(a, c));
  for (let u = 0; u !== o; ++u) n.setTextureCube(e[u] || iy, c[u]);
}
function UA(s, e, n) {
  const a = this.cache,
    o = e.length,
    c = Nu(n, o);
  In(a, c) || (s.uniform1iv(this.addr, c), zn(a, c));
  for (let u = 0; u !== o; ++u) n.setTexture2DArray(e[u] || ty, c[u]);
}
function OA(s) {
  switch (s) {
    case 5126:
      return mA;
    case 35664:
      return gA;
    case 35665:
      return xA;
    case 35666:
      return vA;
    case 35674:
      return _A;
    case 35675:
      return yA;
    case 35676:
      return bA;
    case 5124:
    case 35670:
      return SA;
    case 35667:
    case 35671:
      return MA;
    case 35668:
    case 35672:
      return EA;
    case 35669:
    case 35673:
      return TA;
    case 5125:
      return AA;
    case 36294:
      return wA;
    case 36295:
      return RA;
    case 36296:
      return CA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return DA;
    case 35679:
    case 36299:
    case 36307:
      return NA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return LA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return UA;
  }
}
class PA {
  constructor(e, n, a) {
    this.id = e, this.addr = a, this.cache = [], this.type = n.type, this.setValue = pA(n.type);
  }
}
class IA {
  constructor(e, n, a) {
    this.id = e, this.addr = a, this.cache = [], this.type = n.type, this.size = n.size, this.setValue = OA(n.type);
  }
}
class zA {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, n, a) {
    const o = this.seq;
    for (let c = 0, u = o.length; c !== u; ++c) {
      const f = o[c];
      f.setValue(e, n[f.id], a);
    }
  }
}
const Mh = /(\w+)(\])?(\[|\.)?/g;
function zv(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function FA(s, e, n) {
  const a = s.name,
    o = a.length;
  for (Mh.lastIndex = 0;;) {
    const c = Mh.exec(a),
      u = Mh.lastIndex;
    let f = c[1];
    const m = c[2] === "]",
      h = c[3];
    if (m && (f = f | 0), h === void 0 || h === "[" && u + 2 === o) {
      zv(n, h === void 0 ? new PA(f, s, e) : new IA(f, s, e));
      break;
    } else {
      let g = n.map[f];
      g === void 0 && (g = new zA(f), zv(n, g)), n = g;
    }
  }
}
class hu {
  constructor(e, n) {
    this.seq = [], this.map = {};
    const a = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
    for (let o = 0; o < a; ++o) {
      const c = e.getActiveUniform(n, o),
        u = e.getUniformLocation(n, c.name);
      FA(c, u, this);
    }
  }
  setValue(e, n, a, o) {
    const c = this.map[n];
    c !== void 0 && c.setValue(e, a, o);
  }
  setOptional(e, n, a) {
    const o = n[a];
    o !== void 0 && this.setValue(e, a, o);
  }
  static upload(e, n, a, o) {
    for (let c = 0, u = n.length; c !== u; ++c) {
      const f = n[c],
        m = a[f.id];
      m.needsUpdate !== !1 && f.setValue(e, m.value, o);
    }
  }
  static seqWithValue(e, n) {
    const a = [];
    for (let o = 0, c = e.length; o !== c; ++o) {
      const u = e[o];
      u.id in n && a.push(u);
    }
    return a;
  }
}
function Fv(s, e, n) {
  const a = s.createShader(e);
  return s.shaderSource(a, n), s.compileShader(a), a;
}
const BA = 37297;
let HA = 0;
function GA(s, e) {
  const n = s.split(`
`),
    a = [],
    o = Math.max(e - 6, 0),
    c = Math.min(e + 6, n.length);
  for (let u = o; u < c; u++) {
    const f = u + 1;
    a.push(`${f === e ? ">" : " "} ${f}: ${n[u]}`);
  }
  return a.join(`
`);
}
const Bv = new Lt();
function VA(s) {
  Jt._getMatrix(Bv, Jt.workingColorSpace, s);
  const e = `mat3( ${Bv.elements.map(n => n.toFixed(4))} )`;
  switch (Jt.getTransfer(s)) {
    case vu:
      return [e, "LinearTransferOETF"];
    case ln:
      return [e, "sRGBTransferOETF"];
    default:
      return Rt("WebGLProgram: Unsupported color space: ", s), [e, "LinearTransferOETF"];
  }
}
function Hv(s, e, n) {
  const a = s.getShaderParameter(e, s.COMPILE_STATUS),
    c = (s.getShaderInfoLog(e) || "").trim();
  if (a && c === "") return "";
  const u = /ERROR: 0:(\d+)/.exec(c);
  if (u) {
    const f = parseInt(u[1]);
    return n.toUpperCase() + `

` + c + `

` + GA(s.getShaderSource(e), f);
  } else return c;
}
function kA(s, e) {
  const n = VA(e);
  return [`vec4 ${s}( vec4 value ) {`, `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`, "}"].join(`
`);
}
function jA(s, e) {
  let n;
  switch (e) {
    case TM:
      n = "Linear";
      break;
    case AM:
      n = "Reinhard";
      break;
    case wM:
      n = "Cineon";
      break;
    case RM:
      n = "ACESFilmic";
      break;
    case DM:
      n = "AgX";
      break;
    case NM:
      n = "Neutral";
      break;
    case CM:
      n = "Custom";
      break;
    default:
      Rt("WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
const ou = new be();
function XA() {
  Jt.getLuminanceCoefficients(ou);
  const s = ou.x.toFixed(4),
    e = ou.y.toFixed(4),
    n = ou.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${e}, ${n} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function WA(s) {
  return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ul).join(`
`);
}
function YA(s) {
  const e = [];
  for (const n in s) {
    const a = s[n];
    a !== !1 && e.push("#define " + n + " " + a);
  }
  return e.join(`
`);
}
function qA(s, e) {
  const n = {},
    a = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let o = 0; o < a; o++) {
    const c = s.getActiveAttrib(e, o),
      u = c.name;
    let f = 1;
    c.type === s.FLOAT_MAT2 && (f = 2), c.type === s.FLOAT_MAT3 && (f = 3), c.type === s.FLOAT_MAT4 && (f = 4), n[u] = {
      type: c.type,
      location: s.getAttribLocation(e, u),
      locationSize: f
    };
  }
  return n;
}
function ul(s) {
  return s !== "";
}
function Gv(s, e) {
  const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Vv(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ZA = /^[ \t]*#include +<([\w\d./]+)>/gm;
function A0(s) {
  return s.replace(ZA, QA);
}
const KA = new Map();
function QA(s, e) {
  let n = Ot[e];
  if (n === void 0) {
    const a = KA.get(e);
    if (a !== void 0) n = Ot[a], Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, a);else throw new Error("Can not resolve #include <" + e + ">");
  }
  return A0(n);
}
const JA = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function kv(s) {
  return s.replace(JA, $A);
}
function $A(s, e, n, a) {
  let o = "";
  for (let c = parseInt(e); c < parseInt(n); c++) o += a.replace(/\[\s*i\s*\]/g, "[ " + c + " ]").replace(/UNROLLED_LOOP_INDEX/g, c);
  return o;
}
function jv(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ew(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === w_ ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === aM ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Ta && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function tw(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap) switch (s.envMapMode) {
    case to:
    case no:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Ru:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function nw(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap) switch (s.envMapMode) {
    case no:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function iw(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap) switch (s.combine) {
    case R_:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case MM:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case EM:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function aw(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const n = Math.log2(e) - 2,
    a = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
    texelHeight: a,
    maxMip: n
  };
}
function rw(s, e, n, a) {
  const o = s.getContext(),
    c = n.defines;
  let u = n.vertexShader,
    f = n.fragmentShader;
  const m = ew(n),
    h = tw(n),
    x = nw(n),
    g = iw(n),
    v = aw(n),
    y = WA(n),
    M = YA(c),
    E = o.createProgram();
  let S,
    _,
    L = n.glslVersion ? "#version " + n.glslVersion + `
` : "";
  n.isRawShaderMaterial ? (S = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, M].filter(ul).join(`
`), S.length > 0 && (S += `
`), _ = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, M].filter(ul).join(`
`), _.length > 0 && (_ += `
`)) : (S = [jv(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, M, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + x : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + m : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ul).join(`
`), _ = [jv(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, M, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + x : "", n.envMap ? "#define " + g : "", v ? "#define CUBEUV_TEXEL_WIDTH " + v.texelWidth : "", v ? "#define CUBEUV_TEXEL_HEIGHT " + v.texelHeight : "", v ? "#define CUBEUV_MAX_MIP " + v.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + m : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== Na ? "#define TONE_MAPPING" : "", n.toneMapping !== Na ? Ot.tonemapping_pars_fragment : "", n.toneMapping !== Na ? jA("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", Ot.colorspace_pars_fragment, kA("linearToOutputTexel", n.outputColorSpace), XA(), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", `
`].filter(ul).join(`
`)), u = A0(u), u = Gv(u, n), u = Vv(u, n), f = A0(f), f = Gv(f, n), f = Vv(f, n), u = kv(u), f = kv(f), n.isRawShaderMaterial !== !0 && (L = `#version 300 es
`, S = [y, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + S, _ = ["#define varying in", n.glslVersion === iv ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === iv ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + _);
  const D = L + S + u,
    O = L + _ + f,
    F = Fv(o, o.VERTEX_SHADER, D),
    P = Fv(o, o.FRAGMENT_SHADER, O);
  o.attachShader(E, F), o.attachShader(E, P), n.index0AttributeName !== void 0 ? o.bindAttribLocation(E, 0, n.index0AttributeName) : n.morphTargets === !0 && o.bindAttribLocation(E, 0, "position"), o.linkProgram(E);
  function B(H) {
    if (s.debug.checkShaderErrors) {
      const k = o.getProgramInfoLog(E) || "",
        W = o.getShaderInfoLog(F) || "",
        J = o.getShaderInfoLog(P) || "",
        ie = k.trim(),
        I = W.trim(),
        Y = J.trim();
      let Z = !0,
        pe = !0;
      if (o.getProgramParameter(E, o.LINK_STATUS) === !1) {
        if (Z = !1, typeof s.debug.onShaderError == "function") s.debug.onShaderError(o, E, F, P);else {
          const Me = Hv(o, F, "vertex"),
            z = Hv(o, P, "fragment");
          yn("THREE.WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(E, o.VALIDATE_STATUS) + `

Material Name: ` + H.name + `
Material Type: ` + H.type + `

Program Info Log: ` + ie + `
` + Me + `
` + z);
        }
      } else ie !== "" ? Rt("WebGLProgram: Program Info Log:", ie) : (I === "" || Y === "") && (pe = !1);
      pe && (H.diagnostics = {
        runnable: Z,
        programLog: ie,
        vertexShader: {
          log: I,
          prefix: S
        },
        fragmentShader: {
          log: Y,
          prefix: _
        }
      });
    }
    o.deleteShader(F), o.deleteShader(P), q = new hu(o, E), w = qA(o, E);
  }
  let q;
  this.getUniforms = function () {
    return q === void 0 && B(this), q;
  };
  let w;
  this.getAttributes = function () {
    return w === void 0 && B(this), w;
  };
  let A = n.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function () {
    return A === !1 && (A = o.getProgramParameter(E, BA)), A;
  }, this.destroy = function () {
    a.releaseStatesOfProgram(this), o.deleteProgram(E), this.program = void 0;
  }, this.type = n.shaderType, this.name = n.shaderName, this.id = HA++, this.cacheKey = e, this.usedTimes = 1, this.program = E, this.vertexShader = F, this.fragmentShader = P, this;
}
let sw = 0;
class ow {
  constructor() {
    this.shaderCache = new Map(), this.materialCache = new Map();
  }
  update(e) {
    const n = e.vertexShader,
      a = e.fragmentShader,
      o = this._getShaderStage(n),
      c = this._getShaderStage(a),
      u = this._getShaderCacheForMaterial(e);
    return u.has(o) === !1 && (u.add(o), o.usedTimes++), u.has(c) === !1 && (u.add(c), c.usedTimes++), this;
  }
  remove(e) {
    const n = this.materialCache.get(e);
    for (const a of n) a.usedTimes--, a.usedTimes === 0 && this.shaderCache.delete(a.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const n = this.materialCache;
    let a = n.get(e);
    return a === void 0 && (a = new Set(), n.set(e, a)), a;
  }
  _getShaderStage(e) {
    const n = this.shaderCache;
    let a = n.get(e);
    return a === void 0 && (a = new lw(e), n.set(e, a)), a;
  }
}
class lw {
  constructor(e) {
    this.id = sw++, this.code = e, this.usedTimes = 0;
  }
}
function cw(s, e, n, a, o, c, u) {
  const f = new H_(),
    m = new ow(),
    h = new Set(),
    x = [],
    g = o.logarithmicDepthBuffer,
    v = o.vertexTextures;
  let y = o.precision;
  const M = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function E(w) {
    return h.add(w), w === 0 ? "uv" : `uv${w}`;
  }
  function S(w, A, H, k, W) {
    const J = k.fog,
      ie = W.geometry,
      I = w.isMeshStandardMaterial ? k.environment : null,
      Y = (w.isMeshStandardMaterial ? n : e).get(w.envMap || I),
      Z = Y && Y.mapping === Ru ? Y.image.height : null,
      pe = M[w.type];
    w.precision !== null && (y = o.getMaxPrecision(w.precision), y !== w.precision && Rt("WebGLProgram.getParameters:", w.precision, "not supported, using", y, "instead."));
    const Me = ie.morphAttributes.position || ie.morphAttributes.normal || ie.morphAttributes.color,
      z = Me !== void 0 ? Me.length : 0;
    let ee = 0;
    ie.morphAttributes.position !== void 0 && (ee = 1), ie.morphAttributes.normal !== void 0 && (ee = 2), ie.morphAttributes.color !== void 0 && (ee = 3);
    let he, Ee, Be, te;
    if (pe) {
      const mt = Ki[pe];
      he = mt.vertexShader, Ee = mt.fragmentShader;
    } else he = w.vertexShader, Ee = w.fragmentShader, m.update(w), Be = m.getVertexShaderID(w), te = m.getFragmentShaderID(w);
    const me = s.getRenderTarget(),
      He = s.state.buffers.depth.getReversed(),
      Ge = W.isInstancedMesh === !0,
      qe = W.isBatchedMesh === !0,
      Ke = !!w.map,
      Te = !!w.matcap,
      Je = !!Y,
      st = !!w.aoMap,
      G = !!w.lightMap,
      nt = !!w.bumpMap,
      rt = !!w.normalMap,
      it = !!w.displacementMap,
      Fe = !!w.emissiveMap,
      Et = !!w.metalnessMap,
      tt = !!w.roughnessMap,
      ft = w.anisotropy > 0,
      U = w.clearcoat > 0,
      T = w.dispersion > 0,
      $ = w.iridescence > 0,
      ve = w.sheen > 0,
      ue = w.transmission > 0,
      se = ft && !!w.anisotropyMap,
      Ye = U && !!w.clearcoatMap,
      ke = U && !!w.clearcoatNormalMap,
      ye = U && !!w.clearcoatRoughnessMap,
      Qe = $ && !!w.iridescenceMap,
      Re = $ && !!w.iridescenceThicknessMap,
      oe = ve && !!w.sheenColorMap,
      Le = ve && !!w.sheenRoughnessMap,
      Ve = !!w.specularMap,
      _e = !!w.specularColorMap,
      ze = !!w.specularIntensityMap,
      V = ue && !!w.transmissionMap,
      Pe = ue && !!w.thicknessMap,
      we = !!w.gradientMap,
      Ie = !!w.alphaMap,
      Ne = w.alphaTest > 0,
      Ae = !!w.alphaHash,
      je = !!w.extensions;
    let ct = Na;
    w.toneMapped && (me === null || me.isXRRenderTarget === !0) && (ct = s.toneMapping);
    const ut = {
      shaderID: pe,
      shaderType: w.type,
      shaderName: w.name,
      vertexShader: he,
      fragmentShader: Ee,
      defines: w.defines,
      customVertexShaderID: Be,
      customFragmentShaderID: te,
      isRawShaderMaterial: w.isRawShaderMaterial === !0,
      glslVersion: w.glslVersion,
      precision: y,
      batching: qe,
      batchingColor: qe && W._colorsTexture !== null,
      instancing: Ge,
      instancingColor: Ge && W.instanceColor !== null,
      instancingMorph: Ge && W.morphTexture !== null,
      supportsVertexTextures: v,
      outputColorSpace: me === null ? s.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : io,
      alphaToCoverage: !!w.alphaToCoverage,
      map: Ke,
      matcap: Te,
      envMap: Je,
      envMapMode: Je && Y.mapping,
      envMapCubeUVHeight: Z,
      aoMap: st,
      lightMap: G,
      bumpMap: nt,
      normalMap: rt,
      displacementMap: v && it,
      emissiveMap: Fe,
      normalMapObjectSpace: rt && w.normalMapType === IM,
      normalMapTangentSpace: rt && w.normalMapType === PM,
      metalnessMap: Et,
      roughnessMap: tt,
      anisotropy: ft,
      anisotropyMap: se,
      clearcoat: U,
      clearcoatMap: Ye,
      clearcoatNormalMap: ke,
      clearcoatRoughnessMap: ye,
      dispersion: T,
      iridescence: $,
      iridescenceMap: Qe,
      iridescenceThicknessMap: Re,
      sheen: ve,
      sheenColorMap: oe,
      sheenRoughnessMap: Le,
      specularMap: Ve,
      specularColorMap: _e,
      specularIntensityMap: ze,
      transmission: ue,
      transmissionMap: V,
      thicknessMap: Pe,
      gradientMap: we,
      opaque: w.transparent === !1 && w.blending === Js && w.alphaToCoverage === !1,
      alphaMap: Ie,
      alphaTest: Ne,
      alphaHash: Ae,
      combine: w.combine,
      mapUv: Ke && E(w.map.channel),
      aoMapUv: st && E(w.aoMap.channel),
      lightMapUv: G && E(w.lightMap.channel),
      bumpMapUv: nt && E(w.bumpMap.channel),
      normalMapUv: rt && E(w.normalMap.channel),
      displacementMapUv: it && E(w.displacementMap.channel),
      emissiveMapUv: Fe && E(w.emissiveMap.channel),
      metalnessMapUv: Et && E(w.metalnessMap.channel),
      roughnessMapUv: tt && E(w.roughnessMap.channel),
      anisotropyMapUv: se && E(w.anisotropyMap.channel),
      clearcoatMapUv: Ye && E(w.clearcoatMap.channel),
      clearcoatNormalMapUv: ke && E(w.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ye && E(w.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Qe && E(w.iridescenceMap.channel),
      iridescenceThicknessMapUv: Re && E(w.iridescenceThicknessMap.channel),
      sheenColorMapUv: oe && E(w.sheenColorMap.channel),
      sheenRoughnessMapUv: Le && E(w.sheenRoughnessMap.channel),
      specularMapUv: Ve && E(w.specularMap.channel),
      specularColorMapUv: _e && E(w.specularColorMap.channel),
      specularIntensityMapUv: ze && E(w.specularIntensityMap.channel),
      transmissionMapUv: V && E(w.transmissionMap.channel),
      thicknessMapUv: Pe && E(w.thicknessMap.channel),
      alphaMapUv: Ie && E(w.alphaMap.channel),
      vertexTangents: !!ie.attributes.tangent && (rt || ft),
      vertexColors: w.vertexColors,
      vertexAlphas: w.vertexColors === !0 && !!ie.attributes.color && ie.attributes.color.itemSize === 4,
      pointsUvs: W.isPoints === !0 && !!ie.attributes.uv && (Ke || Ie),
      fog: !!J,
      useFog: w.fog === !0,
      fogExp2: !!J && J.isFogExp2,
      flatShading: w.flatShading === !0 && w.wireframe === !1,
      sizeAttenuation: w.sizeAttenuation === !0,
      logarithmicDepthBuffer: g,
      reversedDepthBuffer: He,
      skinning: W.isSkinnedMesh === !0,
      morphTargets: ie.morphAttributes.position !== void 0,
      morphNormals: ie.morphAttributes.normal !== void 0,
      morphColors: ie.morphAttributes.color !== void 0,
      morphTargetsCount: z,
      morphTextureStride: ee,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: u.numPlanes,
      numClipIntersection: u.numIntersection,
      dithering: w.dithering,
      shadowMapEnabled: s.shadowMap.enabled && H.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: ct,
      decodeVideoTexture: Ke && w.map.isVideoTexture === !0 && Jt.getTransfer(w.map.colorSpace) === ln,
      decodeVideoTextureEmissive: Fe && w.emissiveMap.isVideoTexture === !0 && Jt.getTransfer(w.emissiveMap.colorSpace) === ln,
      premultipliedAlpha: w.premultipliedAlpha,
      doubleSided: w.side === wa,
      flipSided: w.side === ci,
      useDepthPacking: w.depthPacking >= 0,
      depthPacking: w.depthPacking || 0,
      index0AttributeName: w.index0AttributeName,
      extensionClipCullDistance: je && w.extensions.clipCullDistance === !0 && a.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (je && w.extensions.multiDraw === !0 || qe) && a.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: a.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: w.customProgramCacheKey()
    };
    return ut.vertexUv1s = h.has(1), ut.vertexUv2s = h.has(2), ut.vertexUv3s = h.has(3), h.clear(), ut;
  }
  function _(w) {
    const A = [];
    if (w.shaderID ? A.push(w.shaderID) : (A.push(w.customVertexShaderID), A.push(w.customFragmentShaderID)), w.defines !== void 0) for (const H in w.defines) A.push(H), A.push(w.defines[H]);
    return w.isRawShaderMaterial === !1 && (L(A, w), D(A, w), A.push(s.outputColorSpace)), A.push(w.customProgramCacheKey), A.join();
  }
  function L(w, A) {
    w.push(A.precision), w.push(A.outputColorSpace), w.push(A.envMapMode), w.push(A.envMapCubeUVHeight), w.push(A.mapUv), w.push(A.alphaMapUv), w.push(A.lightMapUv), w.push(A.aoMapUv), w.push(A.bumpMapUv), w.push(A.normalMapUv), w.push(A.displacementMapUv), w.push(A.emissiveMapUv), w.push(A.metalnessMapUv), w.push(A.roughnessMapUv), w.push(A.anisotropyMapUv), w.push(A.clearcoatMapUv), w.push(A.clearcoatNormalMapUv), w.push(A.clearcoatRoughnessMapUv), w.push(A.iridescenceMapUv), w.push(A.iridescenceThicknessMapUv), w.push(A.sheenColorMapUv), w.push(A.sheenRoughnessMapUv), w.push(A.specularMapUv), w.push(A.specularColorMapUv), w.push(A.specularIntensityMapUv), w.push(A.transmissionMapUv), w.push(A.thicknessMapUv), w.push(A.combine), w.push(A.fogExp2), w.push(A.sizeAttenuation), w.push(A.morphTargetsCount), w.push(A.morphAttributeCount), w.push(A.numDirLights), w.push(A.numPointLights), w.push(A.numSpotLights), w.push(A.numSpotLightMaps), w.push(A.numHemiLights), w.push(A.numRectAreaLights), w.push(A.numDirLightShadows), w.push(A.numPointLightShadows), w.push(A.numSpotLightShadows), w.push(A.numSpotLightShadowsWithMaps), w.push(A.numLightProbes), w.push(A.shadowMapType), w.push(A.toneMapping), w.push(A.numClippingPlanes), w.push(A.numClipIntersection), w.push(A.depthPacking);
  }
  function D(w, A) {
    f.disableAll(), A.supportsVertexTextures && f.enable(0), A.instancing && f.enable(1), A.instancingColor && f.enable(2), A.instancingMorph && f.enable(3), A.matcap && f.enable(4), A.envMap && f.enable(5), A.normalMapObjectSpace && f.enable(6), A.normalMapTangentSpace && f.enable(7), A.clearcoat && f.enable(8), A.iridescence && f.enable(9), A.alphaTest && f.enable(10), A.vertexColors && f.enable(11), A.vertexAlphas && f.enable(12), A.vertexUv1s && f.enable(13), A.vertexUv2s && f.enable(14), A.vertexUv3s && f.enable(15), A.vertexTangents && f.enable(16), A.anisotropy && f.enable(17), A.alphaHash && f.enable(18), A.batching && f.enable(19), A.dispersion && f.enable(20), A.batchingColor && f.enable(21), A.gradientMap && f.enable(22), w.push(f.mask), f.disableAll(), A.fog && f.enable(0), A.useFog && f.enable(1), A.flatShading && f.enable(2), A.logarithmicDepthBuffer && f.enable(3), A.reversedDepthBuffer && f.enable(4), A.skinning && f.enable(5), A.morphTargets && f.enable(6), A.morphNormals && f.enable(7), A.morphColors && f.enable(8), A.premultipliedAlpha && f.enable(9), A.shadowMapEnabled && f.enable(10), A.doubleSided && f.enable(11), A.flipSided && f.enable(12), A.useDepthPacking && f.enable(13), A.dithering && f.enable(14), A.transmission && f.enable(15), A.sheen && f.enable(16), A.opaque && f.enable(17), A.pointsUvs && f.enable(18), A.decodeVideoTexture && f.enable(19), A.decodeVideoTextureEmissive && f.enable(20), A.alphaToCoverage && f.enable(21), w.push(f.mask);
  }
  function O(w) {
    const A = M[w.type];
    let H;
    if (A) {
      const k = Ki[A];
      H = w3.clone(k.uniforms);
    } else H = w.uniforms;
    return H;
  }
  function F(w, A) {
    let H;
    for (let k = 0, W = x.length; k < W; k++) {
      const J = x[k];
      if (J.cacheKey === A) {
        H = J, ++H.usedTimes;
        break;
      }
    }
    return H === void 0 && (H = new rw(s, A, w, c), x.push(H)), H;
  }
  function P(w) {
    if (--w.usedTimes === 0) {
      const A = x.indexOf(w);
      x[A] = x[x.length - 1], x.pop(), w.destroy();
    }
  }
  function B(w) {
    m.remove(w);
  }
  function q() {
    m.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: _,
    getUniforms: O,
    acquireProgram: F,
    releaseProgram: P,
    releaseShaderCache: B,
    programs: x,
    dispose: q
  };
}
function uw() {
  let s = new WeakMap();
  function e(u) {
    return s.has(u);
  }
  function n(u) {
    let f = s.get(u);
    return f === void 0 && (f = {}, s.set(u, f)), f;
  }
  function a(u) {
    s.delete(u);
  }
  function o(u, f, m) {
    s.get(u)[f] = m;
  }
  function c() {
    s = new WeakMap();
  }
  return {
    has: e,
    get: n,
    remove: a,
    update: o,
    dispose: c
  };
}
function fw(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Xv(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Wv() {
  const s = [];
  let e = 0;
  const n = [],
    a = [],
    o = [];
  function c() {
    e = 0, n.length = 0, a.length = 0, o.length = 0;
  }
  function u(g, v, y, M, E, S) {
    let _ = s[e];
    return _ === void 0 ? (_ = {
      id: g.id,
      object: g,
      geometry: v,
      material: y,
      groupOrder: M,
      renderOrder: g.renderOrder,
      z: E,
      group: S
    }, s[e] = _) : (_.id = g.id, _.object = g, _.geometry = v, _.material = y, _.groupOrder = M, _.renderOrder = g.renderOrder, _.z = E, _.group = S), e++, _;
  }
  function f(g, v, y, M, E, S) {
    const _ = u(g, v, y, M, E, S);
    y.transmission > 0 ? a.push(_) : y.transparent === !0 ? o.push(_) : n.push(_);
  }
  function m(g, v, y, M, E, S) {
    const _ = u(g, v, y, M, E, S);
    y.transmission > 0 ? a.unshift(_) : y.transparent === !0 ? o.unshift(_) : n.unshift(_);
  }
  function h(g, v) {
    n.length > 1 && n.sort(g || fw), a.length > 1 && a.sort(v || Xv), o.length > 1 && o.sort(v || Xv);
  }
  function x() {
    for (let g = e, v = s.length; g < v; g++) {
      const y = s[g];
      if (y.id === null) break;
      y.id = null, y.object = null, y.geometry = null, y.material = null, y.group = null;
    }
  }
  return {
    opaque: n,
    transmissive: a,
    transparent: o,
    init: c,
    push: f,
    unshift: m,
    finish: x,
    sort: h
  };
}
function dw() {
  let s = new WeakMap();
  function e(a, o) {
    const c = s.get(a);
    let u;
    return c === void 0 ? (u = new Wv(), s.set(a, [u])) : o >= c.length ? (u = new Wv(), c.push(u)) : u = c[o], u;
  }
  function n() {
    s = new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
function hw() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = {
            direction: new be(),
            color: new Xt()
          };
          break;
        case "SpotLight":
          n = {
            position: new be(),
            direction: new be(),
            color: new Xt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new be(),
            color: new Xt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new be(),
            skyColor: new Xt(),
            groundColor: new Xt()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new Xt(),
            position: new be(),
            halfWidth: new be(),
            halfHeight: new be()
          };
          break;
      }
      return s[e.id] = n, n;
    }
  };
}
function pw() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Wt()
          };
          break;
        case "SpotLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Wt()
          };
          break;
        case "PointLight":
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Wt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = n, n;
    }
  };
}
let mw = 0;
function gw(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function xw(s) {
  const e = new hw(),
    n = pw(),
    a = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0
    };
  for (let h = 0; h < 9; h++) a.probe.push(new be());
  const o = new be(),
    c = new Ln(),
    u = new Ln();
  function f(h) {
    let x = 0,
      g = 0,
      v = 0;
    for (let w = 0; w < 9; w++) a.probe[w].set(0, 0, 0);
    let y = 0,
      M = 0,
      E = 0,
      S = 0,
      _ = 0,
      L = 0,
      D = 0,
      O = 0,
      F = 0,
      P = 0,
      B = 0;
    h.sort(gw);
    for (let w = 0, A = h.length; w < A; w++) {
      const H = h[w],
        k = H.color,
        W = H.intensity,
        J = H.distance,
        ie = H.shadow && H.shadow.map ? H.shadow.map.texture : null;
      if (H.isAmbientLight) x += k.r * W, g += k.g * W, v += k.b * W;else if (H.isLightProbe) {
        for (let I = 0; I < 9; I++) a.probe[I].addScaledVector(H.sh.coefficients[I], W);
        B++;
      } else if (H.isDirectionalLight) {
        const I = e.get(H);
        if (I.color.copy(H.color).multiplyScalar(H.intensity), H.castShadow) {
          const Y = H.shadow,
            Z = n.get(H);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, a.directionalShadow[y] = Z, a.directionalShadowMap[y] = ie, a.directionalShadowMatrix[y] = H.shadow.matrix, L++;
        }
        a.directional[y] = I, y++;
      } else if (H.isSpotLight) {
        const I = e.get(H);
        I.position.setFromMatrixPosition(H.matrixWorld), I.color.copy(k).multiplyScalar(W), I.distance = J, I.coneCos = Math.cos(H.angle), I.penumbraCos = Math.cos(H.angle * (1 - H.penumbra)), I.decay = H.decay, a.spot[E] = I;
        const Y = H.shadow;
        if (H.map && (a.spotLightMap[F] = H.map, F++, Y.updateMatrices(H), H.castShadow && P++), a.spotLightMatrix[E] = Y.matrix, H.castShadow) {
          const Z = n.get(H);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, a.spotShadow[E] = Z, a.spotShadowMap[E] = ie, O++;
        }
        E++;
      } else if (H.isRectAreaLight) {
        const I = e.get(H);
        I.color.copy(k).multiplyScalar(W), I.halfWidth.set(H.width * .5, 0, 0), I.halfHeight.set(0, H.height * .5, 0), a.rectArea[S] = I, S++;
      } else if (H.isPointLight) {
        const I = e.get(H);
        if (I.color.copy(H.color).multiplyScalar(H.intensity), I.distance = H.distance, I.decay = H.decay, H.castShadow) {
          const Y = H.shadow,
            Z = n.get(H);
          Z.shadowIntensity = Y.intensity, Z.shadowBias = Y.bias, Z.shadowNormalBias = Y.normalBias, Z.shadowRadius = Y.radius, Z.shadowMapSize = Y.mapSize, Z.shadowCameraNear = Y.camera.near, Z.shadowCameraFar = Y.camera.far, a.pointShadow[M] = Z, a.pointShadowMap[M] = ie, a.pointShadowMatrix[M] = H.shadow.matrix, D++;
        }
        a.point[M] = I, M++;
      } else if (H.isHemisphereLight) {
        const I = e.get(H);
        I.skyColor.copy(H.color).multiplyScalar(W), I.groundColor.copy(H.groundColor).multiplyScalar(W), a.hemi[_] = I, _++;
      }
    }
    S > 0 && (s.has("OES_texture_float_linear") === !0 ? (a.rectAreaLTC1 = et.LTC_FLOAT_1, a.rectAreaLTC2 = et.LTC_FLOAT_2) : (a.rectAreaLTC1 = et.LTC_HALF_1, a.rectAreaLTC2 = et.LTC_HALF_2)), a.ambient[0] = x, a.ambient[1] = g, a.ambient[2] = v;
    const q = a.hash;
    (q.directionalLength !== y || q.pointLength !== M || q.spotLength !== E || q.rectAreaLength !== S || q.hemiLength !== _ || q.numDirectionalShadows !== L || q.numPointShadows !== D || q.numSpotShadows !== O || q.numSpotMaps !== F || q.numLightProbes !== B) && (a.directional.length = y, a.spot.length = E, a.rectArea.length = S, a.point.length = M, a.hemi.length = _, a.directionalShadow.length = L, a.directionalShadowMap.length = L, a.pointShadow.length = D, a.pointShadowMap.length = D, a.spotShadow.length = O, a.spotShadowMap.length = O, a.directionalShadowMatrix.length = L, a.pointShadowMatrix.length = D, a.spotLightMatrix.length = O + F - P, a.spotLightMap.length = F, a.numSpotLightShadowsWithMaps = P, a.numLightProbes = B, q.directionalLength = y, q.pointLength = M, q.spotLength = E, q.rectAreaLength = S, q.hemiLength = _, q.numDirectionalShadows = L, q.numPointShadows = D, q.numSpotShadows = O, q.numSpotMaps = F, q.numLightProbes = B, a.version = mw++);
  }
  function m(h, x) {
    let g = 0,
      v = 0,
      y = 0,
      M = 0,
      E = 0;
    const S = x.matrixWorldInverse;
    for (let _ = 0, L = h.length; _ < L; _++) {
      const D = h[_];
      if (D.isDirectionalLight) {
        const O = a.directional[g];
        O.direction.setFromMatrixPosition(D.matrixWorld), o.setFromMatrixPosition(D.target.matrixWorld), O.direction.sub(o), O.direction.transformDirection(S), g++;
      } else if (D.isSpotLight) {
        const O = a.spot[y];
        O.position.setFromMatrixPosition(D.matrixWorld), O.position.applyMatrix4(S), O.direction.setFromMatrixPosition(D.matrixWorld), o.setFromMatrixPosition(D.target.matrixWorld), O.direction.sub(o), O.direction.transformDirection(S), y++;
      } else if (D.isRectAreaLight) {
        const O = a.rectArea[M];
        O.position.setFromMatrixPosition(D.matrixWorld), O.position.applyMatrix4(S), u.identity(), c.copy(D.matrixWorld), c.premultiply(S), u.extractRotation(c), O.halfWidth.set(D.width * .5, 0, 0), O.halfHeight.set(0, D.height * .5, 0), O.halfWidth.applyMatrix4(u), O.halfHeight.applyMatrix4(u), M++;
      } else if (D.isPointLight) {
        const O = a.point[v];
        O.position.setFromMatrixPosition(D.matrixWorld), O.position.applyMatrix4(S), v++;
      } else if (D.isHemisphereLight) {
        const O = a.hemi[E];
        O.direction.setFromMatrixPosition(D.matrixWorld), O.direction.transformDirection(S), E++;
      }
    }
  }
  return {
    setup: f,
    setupView: m,
    state: a
  };
}
function Yv(s) {
  const e = new xw(s),
    n = [],
    a = [];
  function o(x) {
    h.camera = x, n.length = 0, a.length = 0;
  }
  function c(x) {
    n.push(x);
  }
  function u(x) {
    a.push(x);
  }
  function f() {
    e.setup(n);
  }
  function m(x) {
    e.setupView(n, x);
  }
  const h = {
    lightsArray: n,
    shadowsArray: a,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: o,
    state: h,
    setupLights: f,
    setupLightsView: m,
    pushLight: c,
    pushShadow: u
  };
}
function vw(s) {
  let e = new WeakMap();
  function n(o, c = 0) {
    const u = e.get(o);
    let f;
    return u === void 0 ? (f = new Yv(s), e.set(o, [f])) : c >= u.length ? (f = new Yv(s), u.push(f)) : f = u[c], f;
  }
  function a() {
    e = new WeakMap();
  }
  return {
    get: n,
    dispose: a
  };
}
const _w = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
const yw = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function bw(s, e, n) {
  let a = new K_();
  const o = new Wt(),
    c = new Wt(),
    u = new En(),
    f = new G3({
      depthPacking: OM
    }),
    m = new V3(),
    h = {},
    x = n.maxTextureSize,
    g = {
      [gr]: ci,
      [ci]: gr,
      [wa]: wa
    },
    v = new ji({
      defines: {
        VSM_SAMPLES: 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new Wt()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: _w,
      fragmentShader: yw
    }),
    y = v.clone();
  y.defines.HORIZONTAL_PASS = 1;
  const M = new za();
  M.setAttribute("position", new ki(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
  const E = new Ia(M, v),
    S = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = w_;
  let _ = this.type;
  this.render = function (P, B, q) {
    if (S.enabled === !1 || S.autoUpdate === !1 && S.needsUpdate === !1 || P.length === 0) return;
    const w = s.getRenderTarget(),
      A = s.getActiveCubeFace(),
      H = s.getActiveMipmapLevel(),
      k = s.state;
    k.setBlending(Da), k.buffers.depth.getReversed() === !0 ? k.buffers.color.setClear(0, 0, 0, 0) : k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1);
    const W = _ !== Ta && this.type === Ta,
      J = _ === Ta && this.type !== Ta;
    for (let ie = 0, I = P.length; ie < I; ie++) {
      const Y = P[ie],
        Z = Y.shadow;
      if (Z === void 0) {
        Rt("WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (Z.autoUpdate === !1 && Z.needsUpdate === !1) continue;
      o.copy(Z.mapSize);
      const pe = Z.getFrameExtents();
      if (o.multiply(pe), c.copy(Z.mapSize), (o.x > x || o.y > x) && (o.x > x && (c.x = Math.floor(x / pe.x), o.x = c.x * pe.x, Z.mapSize.x = c.x), o.y > x && (c.y = Math.floor(x / pe.y), o.y = c.y * pe.y, Z.mapSize.y = c.y)), Z.map === null || W === !0 || J === !0) {
        const z = this.type !== Ta ? {
          minFilter: bi,
          magFilter: bi
        } : {};
        Z.map !== null && Z.map.dispose(), Z.map = new Kr(o.x, o.y, z), Z.map.texture.name = Y.name + ".shadowMap", Z.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(Z.map), s.clear();
      const Me = Z.getViewportCount();
      for (let z = 0; z < Me; z++) {
        const ee = Z.getViewport(z);
        u.set(c.x * ee.x, c.y * ee.y, c.x * ee.z, c.y * ee.w), k.viewport(u), Z.updateMatrices(Y, z), a = Z.getFrustum(), O(B, q, Z.camera, Y, this.type);
      }
      Z.isPointLightShadow !== !0 && this.type === Ta && L(Z, q), Z.needsUpdate = !1;
    }
    _ = this.type, S.needsUpdate = !1, s.setRenderTarget(w, A, H);
  };
  function L(P, B) {
    const q = e.update(E);
    v.defines.VSM_SAMPLES !== P.blurSamples && (v.defines.VSM_SAMPLES = P.blurSamples, y.defines.VSM_SAMPLES = P.blurSamples, v.needsUpdate = !0, y.needsUpdate = !0), P.mapPass === null && (P.mapPass = new Kr(o.x, o.y)), v.uniforms.shadow_pass.value = P.map.texture, v.uniforms.resolution.value = P.mapSize, v.uniforms.radius.value = P.radius, s.setRenderTarget(P.mapPass), s.clear(), s.renderBufferDirect(B, null, q, v, E, null), y.uniforms.shadow_pass.value = P.mapPass.texture, y.uniforms.resolution.value = P.mapSize, y.uniforms.radius.value = P.radius, s.setRenderTarget(P.map), s.clear(), s.renderBufferDirect(B, null, q, y, E, null);
  }
  function D(P, B, q, w) {
    let A = null;
    const H = q.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
    if (H !== void 0) A = H;else if (A = q.isPointLight === !0 ? m : f, s.localClippingEnabled && B.clipShadows === !0 && Array.isArray(B.clippingPlanes) && B.clippingPlanes.length !== 0 || B.displacementMap && B.displacementScale !== 0 || B.alphaMap && B.alphaTest > 0 || B.map && B.alphaTest > 0 || B.alphaToCoverage === !0) {
      const k = A.uuid,
        W = B.uuid;
      let J = h[k];
      J === void 0 && (J = {}, h[k] = J);
      let ie = J[W];
      ie === void 0 && (ie = A.clone(), J[W] = ie, B.addEventListener("dispose", F)), A = ie;
    }
    if (A.visible = B.visible, A.wireframe = B.wireframe, w === Ta ? A.side = B.shadowSide !== null ? B.shadowSide : B.side : A.side = B.shadowSide !== null ? B.shadowSide : g[B.side], A.alphaMap = B.alphaMap, A.alphaTest = B.alphaToCoverage === !0 ? .5 : B.alphaTest, A.map = B.map, A.clipShadows = B.clipShadows, A.clippingPlanes = B.clippingPlanes, A.clipIntersection = B.clipIntersection, A.displacementMap = B.displacementMap, A.displacementScale = B.displacementScale, A.displacementBias = B.displacementBias, A.wireframeLinewidth = B.wireframeLinewidth, A.linewidth = B.linewidth, q.isPointLight === !0 && A.isMeshDistanceMaterial === !0) {
      const k = s.properties.get(A);
      k.light = q;
    }
    return A;
  }
  function O(P, B, q, w, A) {
    if (P.visible === !1) return;
    if (P.layers.test(B.layers) && (P.isMesh || P.isLine || P.isPoints) && (P.castShadow || P.receiveShadow && A === Ta) && (!P.frustumCulled || a.intersectsObject(P))) {
      P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, P.matrixWorld);
      const W = e.update(P),
        J = P.material;
      if (Array.isArray(J)) {
        const ie = W.groups;
        for (let I = 0, Y = ie.length; I < Y; I++) {
          const Z = ie[I],
            pe = J[Z.materialIndex];
          if (pe && pe.visible) {
            const Me = D(P, pe, w, A);
            P.onBeforeShadow(s, P, B, q, W, Me, Z), s.renderBufferDirect(q, null, W, Me, P, Z), P.onAfterShadow(s, P, B, q, W, Me, Z);
          }
        }
      } else if (J.visible) {
        const ie = D(P, J, w, A);
        P.onBeforeShadow(s, P, B, q, W, ie, null), s.renderBufferDirect(q, null, W, ie, P, null), P.onAfterShadow(s, P, B, q, W, ie, null);
      }
    }
    const k = P.children;
    for (let W = 0, J = k.length; W < J; W++) O(k[W], B, q, w, A);
  }
  function F(P) {
    P.target.removeEventListener("dispose", F);
    for (const q in h) {
      const w = h[q],
        A = P.target.uuid;
      A in w && (w[A].dispose(), delete w[A]);
    }
  }
}
const Sw = {
  [Hh]: Gh,
  [Vh]: Xh,
  [kh]: Wh,
  [eo]: jh,
  [Gh]: Hh,
  [Xh]: Vh,
  [Wh]: kh,
  [jh]: eo
};
function Mw(s, e) {
  function n() {
    let V = !1;
    const Pe = new En();
    let we = null;
    const Ie = new En(0, 0, 0, 0);
    return {
      setMask: function (Ne) {
        we !== Ne && !V && (s.colorMask(Ne, Ne, Ne, Ne), we = Ne);
      },
      setLocked: function (Ne) {
        V = Ne;
      },
      setClear: function (Ne, Ae, je, ct, ut) {
        ut === !0 && (Ne *= ct, Ae *= ct, je *= ct), Pe.set(Ne, Ae, je, ct), Ie.equals(Pe) === !1 && (s.clearColor(Ne, Ae, je, ct), Ie.copy(Pe));
      },
      reset: function () {
        V = !1, we = null, Ie.set(-1, 0, 0, 0);
      }
    };
  }
  function a() {
    let V = !1,
      Pe = !1,
      we = null,
      Ie = null,
      Ne = null;
    return {
      setReversed: function (Ae) {
        if (Pe !== Ae) {
          const je = e.get("EXT_clip_control");
          Ae ? je.clipControlEXT(je.LOWER_LEFT_EXT, je.ZERO_TO_ONE_EXT) : je.clipControlEXT(je.LOWER_LEFT_EXT, je.NEGATIVE_ONE_TO_ONE_EXT), Pe = Ae;
          const ct = Ne;
          Ne = null, this.setClear(ct);
        }
      },
      getReversed: function () {
        return Pe;
      },
      setTest: function (Ae) {
        Ae ? me(s.DEPTH_TEST) : He(s.DEPTH_TEST);
      },
      setMask: function (Ae) {
        we !== Ae && !V && (s.depthMask(Ae), we = Ae);
      },
      setFunc: function (Ae) {
        if (Pe && (Ae = Sw[Ae]), Ie !== Ae) {
          switch (Ae) {
            case Hh:
              s.depthFunc(s.NEVER);
              break;
            case Gh:
              s.depthFunc(s.ALWAYS);
              break;
            case Vh:
              s.depthFunc(s.LESS);
              break;
            case eo:
              s.depthFunc(s.LEQUAL);
              break;
            case kh:
              s.depthFunc(s.EQUAL);
              break;
            case jh:
              s.depthFunc(s.GEQUAL);
              break;
            case Xh:
              s.depthFunc(s.GREATER);
              break;
            case Wh:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          Ie = Ae;
        }
      },
      setLocked: function (Ae) {
        V = Ae;
      },
      setClear: function (Ae) {
        Ne !== Ae && (Pe && (Ae = 1 - Ae), s.clearDepth(Ae), Ne = Ae);
      },
      reset: function () {
        V = !1, we = null, Ie = null, Ne = null, Pe = !1;
      }
    };
  }
  function o() {
    let V = !1,
      Pe = null,
      we = null,
      Ie = null,
      Ne = null,
      Ae = null,
      je = null,
      ct = null,
      ut = null;
    return {
      setTest: function (mt) {
        V || (mt ? me(s.STENCIL_TEST) : He(s.STENCIL_TEST));
      },
      setMask: function (mt) {
        Pe !== mt && !V && (s.stencilMask(mt), Pe = mt);
      },
      setFunc: function (mt, Gt, gt) {
        (we !== mt || Ie !== Gt || Ne !== gt) && (s.stencilFunc(mt, Gt, gt), we = mt, Ie = Gt, Ne = gt);
      },
      setOp: function (mt, Gt, gt) {
        (Ae !== mt || je !== Gt || ct !== gt) && (s.stencilOp(mt, Gt, gt), Ae = mt, je = Gt, ct = gt);
      },
      setLocked: function (mt) {
        V = mt;
      },
      setClear: function (mt) {
        ut !== mt && (s.clearStencil(mt), ut = mt);
      },
      reset: function () {
        V = !1, Pe = null, we = null, Ie = null, Ne = null, Ae = null, je = null, ct = null, ut = null;
      }
    };
  }
  const c = new n(),
    u = new a(),
    f = new o(),
    m = new WeakMap(),
    h = new WeakMap();
  let x = {},
    g = {},
    v = new WeakMap(),
    y = [],
    M = null,
    E = !1,
    S = null,
    _ = null,
    L = null,
    D = null,
    O = null,
    F = null,
    P = null,
    B = new Xt(0, 0, 0),
    q = 0,
    w = !1,
    A = null,
    H = null,
    k = null,
    W = null,
    J = null;
  const ie = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let I = !1,
    Y = 0;
  const Z = s.getParameter(s.VERSION);
  Z.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(Z)[1]), I = Y >= 1) : Z.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), I = Y >= 2);
  let pe = null,
    Me = {};
  const z = s.getParameter(s.SCISSOR_BOX),
    ee = s.getParameter(s.VIEWPORT),
    he = new En().fromArray(z),
    Ee = new En().fromArray(ee);
  function Be(V, Pe, we, Ie) {
    const Ne = new Uint8Array(4),
      Ae = s.createTexture();
    s.bindTexture(V, Ae), s.texParameteri(V, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(V, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let je = 0; je < we; je++) V === s.TEXTURE_3D || V === s.TEXTURE_2D_ARRAY ? s.texImage3D(Pe, 0, s.RGBA, 1, 1, Ie, 0, s.RGBA, s.UNSIGNED_BYTE, Ne) : s.texImage2D(Pe + je, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Ne);
    return Ae;
  }
  const te = {};
  te[s.TEXTURE_2D] = Be(s.TEXTURE_2D, s.TEXTURE_2D, 1), te[s.TEXTURE_CUBE_MAP] = Be(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), te[s.TEXTURE_2D_ARRAY] = Be(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), te[s.TEXTURE_3D] = Be(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), c.setClear(0, 0, 0, 1), u.setClear(1), f.setClear(0), me(s.DEPTH_TEST), u.setFunc(eo), nt(!1), rt(Jx), me(s.CULL_FACE), st(Da);
  function me(V) {
    x[V] !== !0 && (s.enable(V), x[V] = !0);
  }
  function He(V) {
    x[V] !== !1 && (s.disable(V), x[V] = !1);
  }
  function Ge(V, Pe) {
    return g[V] !== Pe ? (s.bindFramebuffer(V, Pe), g[V] = Pe, V === s.DRAW_FRAMEBUFFER && (g[s.FRAMEBUFFER] = Pe), V === s.FRAMEBUFFER && (g[s.DRAW_FRAMEBUFFER] = Pe), !0) : !1;
  }
  function qe(V, Pe) {
    let we = y,
      Ie = !1;
    if (V) {
      we = v.get(Pe), we === void 0 && (we = [], v.set(Pe, we));
      const Ne = V.textures;
      if (we.length !== Ne.length || we[0] !== s.COLOR_ATTACHMENT0) {
        for (let Ae = 0, je = Ne.length; Ae < je; Ae++) we[Ae] = s.COLOR_ATTACHMENT0 + Ae;
        we.length = Ne.length, Ie = !0;
      }
    } else we[0] !== s.BACK && (we[0] = s.BACK, Ie = !0);
    Ie && s.drawBuffers(we);
  }
  function Ke(V) {
    return M !== V ? (s.useProgram(V), M = V, !0) : !1;
  }
  const Te = {
    [jr]: s.FUNC_ADD,
    [sM]: s.FUNC_SUBTRACT,
    [oM]: s.FUNC_REVERSE_SUBTRACT
  };
  Te[lM] = s.MIN, Te[cM] = s.MAX;
  const Je = {
    [uM]: s.ZERO,
    [fM]: s.ONE,
    [dM]: s.SRC_COLOR,
    [Fh]: s.SRC_ALPHA,
    [vM]: s.SRC_ALPHA_SATURATE,
    [gM]: s.DST_COLOR,
    [pM]: s.DST_ALPHA,
    [hM]: s.ONE_MINUS_SRC_COLOR,
    [Bh]: s.ONE_MINUS_SRC_ALPHA,
    [xM]: s.ONE_MINUS_DST_COLOR,
    [mM]: s.ONE_MINUS_DST_ALPHA,
    [_M]: s.CONSTANT_COLOR,
    [yM]: s.ONE_MINUS_CONSTANT_COLOR,
    [bM]: s.CONSTANT_ALPHA,
    [SM]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function st(V, Pe, we, Ie, Ne, Ae, je, ct, ut, mt) {
    if (V === Da) {
      E === !0 && (He(s.BLEND), E = !1);
      return;
    }
    if (E === !1 && (me(s.BLEND), E = !0), V !== rM) {
      if (V !== S || mt !== w) {
        if ((_ !== jr || O !== jr) && (s.blendEquation(s.FUNC_ADD), _ = jr, O = jr), mt) switch (V) {
          case Js:
            s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case $x:
            s.blendFunc(s.ONE, s.ONE);
            break;
          case ev:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case tv:
            s.blendFuncSeparate(s.DST_COLOR, s.ONE_MINUS_SRC_ALPHA, s.ZERO, s.ONE);
            break;
          default:
            yn("WebGLState: Invalid blending: ", V);
            break;
        } else switch (V) {
          case Js:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case $x:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE, s.ONE, s.ONE);
            break;
          case ev:
            yn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case tv:
            yn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            yn("WebGLState: Invalid blending: ", V);
            break;
        }
        L = null, D = null, F = null, P = null, B.set(0, 0, 0), q = 0, S = V, w = mt;
      }
      return;
    }
    Ne = Ne || Pe, Ae = Ae || we, je = je || Ie, (Pe !== _ || Ne !== O) && (s.blendEquationSeparate(Te[Pe], Te[Ne]), _ = Pe, O = Ne), (we !== L || Ie !== D || Ae !== F || je !== P) && (s.blendFuncSeparate(Je[we], Je[Ie], Je[Ae], Je[je]), L = we, D = Ie, F = Ae, P = je), (ct.equals(B) === !1 || ut !== q) && (s.blendColor(ct.r, ct.g, ct.b, ut), B.copy(ct), q = ut), S = V, w = !1;
  }
  function G(V, Pe) {
    V.side === wa ? He(s.CULL_FACE) : me(s.CULL_FACE);
    let we = V.side === ci;
    Pe && (we = !we), nt(we), V.blending === Js && V.transparent === !1 ? st(Da) : st(V.blending, V.blendEquation, V.blendSrc, V.blendDst, V.blendEquationAlpha, V.blendSrcAlpha, V.blendDstAlpha, V.blendColor, V.blendAlpha, V.premultipliedAlpha), u.setFunc(V.depthFunc), u.setTest(V.depthTest), u.setMask(V.depthWrite), c.setMask(V.colorWrite);
    const Ie = V.stencilWrite;
    f.setTest(Ie), Ie && (f.setMask(V.stencilWriteMask), f.setFunc(V.stencilFunc, V.stencilRef, V.stencilFuncMask), f.setOp(V.stencilFail, V.stencilZFail, V.stencilZPass)), Fe(V.polygonOffset, V.polygonOffsetFactor, V.polygonOffsetUnits), V.alphaToCoverage === !0 ? me(s.SAMPLE_ALPHA_TO_COVERAGE) : He(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function nt(V) {
    A !== V && (V ? s.frontFace(s.CW) : s.frontFace(s.CCW), A = V);
  }
  function rt(V) {
    V !== nM ? (me(s.CULL_FACE), V !== H && (V === Jx ? s.cullFace(s.BACK) : V === iM ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : He(s.CULL_FACE), H = V;
  }
  function it(V) {
    V !== k && (I && s.lineWidth(V), k = V);
  }
  function Fe(V, Pe, we) {
    V ? (me(s.POLYGON_OFFSET_FILL), (W !== Pe || J !== we) && (s.polygonOffset(Pe, we), W = Pe, J = we)) : He(s.POLYGON_OFFSET_FILL);
  }
  function Et(V) {
    V ? me(s.SCISSOR_TEST) : He(s.SCISSOR_TEST);
  }
  function tt(V) {
    V === void 0 && (V = s.TEXTURE0 + ie - 1), pe !== V && (s.activeTexture(V), pe = V);
  }
  function ft(V, Pe, we) {
    we === void 0 && (pe === null ? we = s.TEXTURE0 + ie - 1 : we = pe);
    let Ie = Me[we];
    Ie === void 0 && (Ie = {
      type: void 0,
      texture: void 0
    }, Me[we] = Ie), (Ie.type !== V || Ie.texture !== Pe) && (pe !== we && (s.activeTexture(we), pe = we), s.bindTexture(V, Pe || te[V]), Ie.type = V, Ie.texture = Pe);
  }
  function U() {
    const V = Me[pe];
    V !== void 0 && V.type !== void 0 && (s.bindTexture(V.type, null), V.type = void 0, V.texture = void 0);
  }
  function T() {
    try {
      s.compressedTexImage2D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function $() {
    try {
      s.compressedTexImage3D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function ve() {
    try {
      s.texSubImage2D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function ue() {
    try {
      s.texSubImage3D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function se() {
    try {
      s.compressedTexSubImage2D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function Ye() {
    try {
      s.compressedTexSubImage3D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function ke() {
    try {
      s.texStorage2D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function ye() {
    try {
      s.texStorage3D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function Qe() {
    try {
      s.texImage2D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function Re() {
    try {
      s.texImage3D(...arguments);
    } catch (V) {
      V("WebGLState:", V);
    }
  }
  function oe(V) {
    he.equals(V) === !1 && (s.scissor(V.x, V.y, V.z, V.w), he.copy(V));
  }
  function Le(V) {
    Ee.equals(V) === !1 && (s.viewport(V.x, V.y, V.z, V.w), Ee.copy(V));
  }
  function Ve(V, Pe) {
    let we = h.get(Pe);
    we === void 0 && (we = new WeakMap(), h.set(Pe, we));
    let Ie = we.get(V);
    Ie === void 0 && (Ie = s.getUniformBlockIndex(Pe, V.name), we.set(V, Ie));
  }
  function _e(V, Pe) {
    const Ie = h.get(Pe).get(V);
    m.get(Pe) !== Ie && (s.uniformBlockBinding(Pe, Ie, V.__bindingPointIndex), m.set(Pe, Ie));
  }
  function ze() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), u.setReversed(!1), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), x = {}, pe = null, Me = {}, g = {}, v = new WeakMap(), y = [], M = null, E = !1, S = null, _ = null, L = null, D = null, O = null, F = null, P = null, B = new Xt(0, 0, 0), q = 0, w = !1, A = null, H = null, k = null, W = null, J = null, he.set(0, 0, s.canvas.width, s.canvas.height), Ee.set(0, 0, s.canvas.width, s.canvas.height), c.reset(), u.reset(), f.reset();
  }
  return {
    buffers: {
      color: c,
      depth: u,
      stencil: f
    },
    enable: me,
    disable: He,
    bindFramebuffer: Ge,
    drawBuffers: qe,
    useProgram: Ke,
    setBlending: st,
    setMaterial: G,
    setFlipSided: nt,
    setCullFace: rt,
    setLineWidth: it,
    setPolygonOffset: Fe,
    setScissorTest: Et,
    activeTexture: tt,
    bindTexture: ft,
    unbindTexture: U,
    compressedTexImage2D: T,
    compressedTexImage3D: $,
    texImage2D: Qe,
    texImage3D: Re,
    updateUBOMapping: Ve,
    uniformBlockBinding: _e,
    texStorage2D: ke,
    texStorage3D: ye,
    texSubImage2D: ve,
    texSubImage3D: ue,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: Ye,
    scissor: oe,
    viewport: Le,
    reset: ze
  };
}
function Ew(s, e, n, a, o, c, u) {
  const f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
    m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    h = new Wt(),
    x = new WeakMap();
  let g;
  const v = new WeakMap();
  let y = !1;
  try {
    y = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function M(U, T) {
    return y ? new OffscreenCanvas(U, T) : yl("canvas");
  }
  function E(U, T, $) {
    let ve = 1;
    const ue = ft(U);
    if ((ue.width > $ || ue.height > $) && (ve = $ / Math.max(ue.width, ue.height)), ve < 1) if (typeof HTMLImageElement < "u" && U instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && U instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && U instanceof ImageBitmap || typeof VideoFrame < "u" && U instanceof VideoFrame) {
      const se = Math.floor(ve * ue.width),
        Ye = Math.floor(ve * ue.height);
      g === void 0 && (g = M(se, Ye));
      const ke = T ? M(se, Ye) : g;
      return ke.width = se, ke.height = Ye, ke.getContext("2d").drawImage(U, 0, 0, se, Ye), Rt("WebGLRenderer: Texture has been resized from (" + ue.width + "x" + ue.height + ") to (" + se + "x" + Ye + ")."), ke;
    } else return "data" in U && Rt("WebGLRenderer: Image in DataTexture is too big (" + ue.width + "x" + ue.height + ")."), U;
    return U;
  }
  function S(U) {
    return U.generateMipmaps;
  }
  function _(U) {
    s.generateMipmap(U);
  }
  function L(U) {
    return U.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : U.isWebGL3DRenderTarget ? s.TEXTURE_3D : U.isWebGLArrayRenderTarget || U.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function D(U, T, $, ve, ue = !1) {
    if (U !== null) {
      if (s[U] !== void 0) return s[U];
      Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + U + "'");
    }
    let se = T;
    if (T === s.RED && ($ === s.FLOAT && (se = s.R32F), $ === s.HALF_FLOAT && (se = s.R16F), $ === s.UNSIGNED_BYTE && (se = s.R8)), T === s.RED_INTEGER && ($ === s.UNSIGNED_BYTE && (se = s.R8UI), $ === s.UNSIGNED_SHORT && (se = s.R16UI), $ === s.UNSIGNED_INT && (se = s.R32UI), $ === s.BYTE && (se = s.R8I), $ === s.SHORT && (se = s.R16I), $ === s.INT && (se = s.R32I)), T === s.RG && ($ === s.FLOAT && (se = s.RG32F), $ === s.HALF_FLOAT && (se = s.RG16F), $ === s.UNSIGNED_BYTE && (se = s.RG8)), T === s.RG_INTEGER && ($ === s.UNSIGNED_BYTE && (se = s.RG8UI), $ === s.UNSIGNED_SHORT && (se = s.RG16UI), $ === s.UNSIGNED_INT && (se = s.RG32UI), $ === s.BYTE && (se = s.RG8I), $ === s.SHORT && (se = s.RG16I), $ === s.INT && (se = s.RG32I)), T === s.RGB_INTEGER && ($ === s.UNSIGNED_BYTE && (se = s.RGB8UI), $ === s.UNSIGNED_SHORT && (se = s.RGB16UI), $ === s.UNSIGNED_INT && (se = s.RGB32UI), $ === s.BYTE && (se = s.RGB8I), $ === s.SHORT && (se = s.RGB16I), $ === s.INT && (se = s.RGB32I)), T === s.RGBA_INTEGER && ($ === s.UNSIGNED_BYTE && (se = s.RGBA8UI), $ === s.UNSIGNED_SHORT && (se = s.RGBA16UI), $ === s.UNSIGNED_INT && (se = s.RGBA32UI), $ === s.BYTE && (se = s.RGBA8I), $ === s.SHORT && (se = s.RGBA16I), $ === s.INT && (se = s.RGBA32I)), T === s.RGB && ($ === s.UNSIGNED_INT_5_9_9_9_REV && (se = s.RGB9_E5), $ === s.UNSIGNED_INT_10F_11F_11F_REV && (se = s.R11F_G11F_B10F)), T === s.RGBA) {
      const Ye = ue ? vu : Jt.getTransfer(ve);
      $ === s.FLOAT && (se = s.RGBA32F), $ === s.HALF_FLOAT && (se = s.RGBA16F), $ === s.UNSIGNED_BYTE && (se = Ye === ln ? s.SRGB8_ALPHA8 : s.RGBA8), $ === s.UNSIGNED_SHORT_4_4_4_4 && (se = s.RGBA4), $ === s.UNSIGNED_SHORT_5_5_5_1 && (se = s.RGB5_A1);
    }
    return (se === s.R16F || se === s.R32F || se === s.RG16F || se === s.RG32F || se === s.RGBA16F || se === s.RGBA32F) && e.get("EXT_color_buffer_float"), se;
  }
  function O(U, T) {
    let $;
    return U ? T === null || T === Zr || T === xl ? $ = s.DEPTH24_STENCIL8 : T === Ca ? $ = s.DEPTH32F_STENCIL8 : T === gl && ($ = s.DEPTH24_STENCIL8, Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : T === null || T === Zr || T === xl ? $ = s.DEPTH_COMPONENT24 : T === Ca ? $ = s.DEPTH_COMPONENT32F : T === gl && ($ = s.DEPTH_COMPONENT16), $;
  }
  function F(U, T) {
    return S(U) === !0 || U.isFramebufferTexture && U.minFilter !== bi && U.minFilter !== Oi ? Math.log2(Math.max(T.width, T.height)) + 1 : U.mipmaps !== void 0 && U.mipmaps.length > 0 ? U.mipmaps.length : U.isCompressedTexture && Array.isArray(U.image) ? T.mipmaps.length : 1;
  }
  function P(U) {
    const T = U.target;
    T.removeEventListener("dispose", P), q(T), T.isVideoTexture && x.delete(T);
  }
  function B(U) {
    const T = U.target;
    T.removeEventListener("dispose", B), A(T);
  }
  function q(U) {
    const T = a.get(U);
    if (T.__webglInit === void 0) return;
    const $ = U.source,
      ve = v.get($);
    if (ve) {
      const ue = ve[T.__cacheKey];
      ue.usedTimes--, ue.usedTimes === 0 && w(U), Object.keys(ve).length === 0 && v.delete($);
    }
    a.remove(U);
  }
  function w(U) {
    const T = a.get(U);
    s.deleteTexture(T.__webglTexture);
    const $ = U.source,
      ve = v.get($);
    delete ve[T.__cacheKey], u.memory.textures--;
  }
  function A(U) {
    const T = a.get(U);
    if (U.depthTexture && (U.depthTexture.dispose(), a.remove(U.depthTexture)), U.isWebGLCubeRenderTarget) for (let ve = 0; ve < 6; ve++) {
      if (Array.isArray(T.__webglFramebuffer[ve])) for (let ue = 0; ue < T.__webglFramebuffer[ve].length; ue++) s.deleteFramebuffer(T.__webglFramebuffer[ve][ue]);else s.deleteFramebuffer(T.__webglFramebuffer[ve]);
      T.__webglDepthbuffer && s.deleteRenderbuffer(T.__webglDepthbuffer[ve]);
    } else {
      if (Array.isArray(T.__webglFramebuffer)) for (let ve = 0; ve < T.__webglFramebuffer.length; ve++) s.deleteFramebuffer(T.__webglFramebuffer[ve]);else s.deleteFramebuffer(T.__webglFramebuffer);
      if (T.__webglDepthbuffer && s.deleteRenderbuffer(T.__webglDepthbuffer), T.__webglMultisampledFramebuffer && s.deleteFramebuffer(T.__webglMultisampledFramebuffer), T.__webglColorRenderbuffer) for (let ve = 0; ve < T.__webglColorRenderbuffer.length; ve++) T.__webglColorRenderbuffer[ve] && s.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);
      T.__webglDepthRenderbuffer && s.deleteRenderbuffer(T.__webglDepthRenderbuffer);
    }
    const $ = U.textures;
    for (let ve = 0, ue = $.length; ve < ue; ve++) {
      const se = a.get($[ve]);
      se.__webglTexture && (s.deleteTexture(se.__webglTexture), u.memory.textures--), a.remove($[ve]);
    }
    a.remove(U);
  }
  let H = 0;
  function k() {
    H = 0;
  }
  function W() {
    const U = H;
    return U >= o.maxTextures && Rt("WebGLTextures: Trying to use " + U + " texture units while this GPU supports only " + o.maxTextures), H += 1, U;
  }
  function J(U) {
    const T = [];
    return T.push(U.wrapS), T.push(U.wrapT), T.push(U.wrapR || 0), T.push(U.magFilter), T.push(U.minFilter), T.push(U.anisotropy), T.push(U.internalFormat), T.push(U.format), T.push(U.type), T.push(U.generateMipmaps), T.push(U.premultiplyAlpha), T.push(U.flipY), T.push(U.unpackAlignment), T.push(U.colorSpace), T.join();
  }
  function ie(U, T) {
    const $ = a.get(U);
    if (U.isVideoTexture && Et(U), U.isRenderTargetTexture === !1 && U.isExternalTexture !== !0 && U.version > 0 && $.__version !== U.version) {
      const ve = U.image;
      if (ve === null) Rt("WebGLRenderer: Texture marked for update but no image data found.");else if (ve.complete === !1) Rt("WebGLRenderer: Texture marked for update but image is incomplete");else {
        te($, U, T);
        return;
      }
    } else U.isExternalTexture && ($.__webglTexture = U.sourceTexture ? U.sourceTexture : null);
    n.bindTexture(s.TEXTURE_2D, $.__webglTexture, s.TEXTURE0 + T);
  }
  function I(U, T) {
    const $ = a.get(U);
    if (U.isRenderTargetTexture === !1 && U.version > 0 && $.__version !== U.version) {
      te($, U, T);
      return;
    } else U.isExternalTexture && ($.__webglTexture = U.sourceTexture ? U.sourceTexture : null);
    n.bindTexture(s.TEXTURE_2D_ARRAY, $.__webglTexture, s.TEXTURE0 + T);
  }
  function Y(U, T) {
    const $ = a.get(U);
    if (U.isRenderTargetTexture === !1 && U.version > 0 && $.__version !== U.version) {
      te($, U, T);
      return;
    }
    n.bindTexture(s.TEXTURE_3D, $.__webglTexture, s.TEXTURE0 + T);
  }
  function Z(U, T) {
    const $ = a.get(U);
    if (U.version > 0 && $.__version !== U.version) {
      me($, U, T);
      return;
    }
    n.bindTexture(s.TEXTURE_CUBE_MAP, $.__webglTexture, s.TEXTURE0 + T);
  }
  const pe = {
      [Zh]: s.REPEAT,
      [Ra]: s.CLAMP_TO_EDGE,
      [Kh]: s.MIRRORED_REPEAT
    },
    Me = {
      [bi]: s.NEAREST,
      [LM]: s.NEAREST_MIPMAP_NEAREST,
      [Fc]: s.NEAREST_MIPMAP_LINEAR,
      [Oi]: s.LINEAR,
      [qd]: s.LINEAR_MIPMAP_NEAREST,
      [Wr]: s.LINEAR_MIPMAP_LINEAR
    },
    z = {
      [zM]: s.NEVER,
      [kM]: s.ALWAYS,
      [FM]: s.LESS,
      [z_]: s.LEQUAL,
      [BM]: s.EQUAL,
      [VM]: s.GEQUAL,
      [HM]: s.GREATER,
      [GM]: s.NOTEQUAL
    };
  function ee(U, T) {
    if (T.type === Ca && e.has("OES_texture_float_linear") === !1 && (T.magFilter === Oi || T.magFilter === qd || T.magFilter === Fc || T.magFilter === Wr || T.minFilter === Oi || T.minFilter === qd || T.minFilter === Fc || T.minFilter === Wr) && Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(U, s.TEXTURE_WRAP_S, pe[T.wrapS]), s.texParameteri(U, s.TEXTURE_WRAP_T, pe[T.wrapT]), (U === s.TEXTURE_3D || U === s.TEXTURE_2D_ARRAY) && s.texParameteri(U, s.TEXTURE_WRAP_R, pe[T.wrapR]), s.texParameteri(U, s.TEXTURE_MAG_FILTER, Me[T.magFilter]), s.texParameteri(U, s.TEXTURE_MIN_FILTER, Me[T.minFilter]), T.compareFunction && (s.texParameteri(U, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(U, s.TEXTURE_COMPARE_FUNC, z[T.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (T.magFilter === bi || T.minFilter !== Fc && T.minFilter !== Wr || T.type === Ca && e.has("OES_texture_float_linear") === !1) return;
      if (T.anisotropy > 1 || a.get(T).__currentAnisotropy) {
        const $ = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(U, $.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, o.getMaxAnisotropy())), a.get(T).__currentAnisotropy = T.anisotropy;
      }
    }
  }
  function he(U, T) {
    let $ = !1;
    U.__webglInit === void 0 && (U.__webglInit = !0, T.addEventListener("dispose", P));
    const ve = T.source;
    let ue = v.get(ve);
    ue === void 0 && (ue = {}, v.set(ve, ue));
    const se = J(T);
    if (se !== U.__cacheKey) {
      ue[se] === void 0 && (ue[se] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, u.memory.textures++, $ = !0), ue[se].usedTimes++;
      const Ye = ue[U.__cacheKey];
      Ye !== void 0 && (ue[U.__cacheKey].usedTimes--, Ye.usedTimes === 0 && w(T)), U.__cacheKey = se, U.__webglTexture = ue[se].texture;
    }
    return $;
  }
  function Ee(U, T, $) {
    return Math.floor(Math.floor(U / $) / T);
  }
  function Be(U, T, $, ve) {
    const se = U.updateRanges;
    if (se.length === 0) n.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, T.width, T.height, $, ve, T.data);else {
      se.sort((Re, oe) => Re.start - oe.start);
      let Ye = 0;
      for (let Re = 1; Re < se.length; Re++) {
        const oe = se[Ye],
          Le = se[Re],
          Ve = oe.start + oe.count,
          _e = Ee(Le.start, T.width, 4),
          ze = Ee(oe.start, T.width, 4);
        Le.start <= Ve + 1 && _e === ze && Ee(Le.start + Le.count - 1, T.width, 4) === _e ? oe.count = Math.max(oe.count, Le.start + Le.count - oe.start) : (++Ye, se[Ye] = Le);
      }
      se.length = Ye + 1;
      const ke = s.getParameter(s.UNPACK_ROW_LENGTH),
        ye = s.getParameter(s.UNPACK_SKIP_PIXELS),
        Qe = s.getParameter(s.UNPACK_SKIP_ROWS);
      s.pixelStorei(s.UNPACK_ROW_LENGTH, T.width);
      for (let Re = 0, oe = se.length; Re < oe; Re++) {
        const Le = se[Re],
          Ve = Math.floor(Le.start / 4),
          _e = Math.ceil(Le.count / 4),
          ze = Ve % T.width,
          V = Math.floor(Ve / T.width),
          Pe = _e,
          we = 1;
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, ze), s.pixelStorei(s.UNPACK_SKIP_ROWS, V), n.texSubImage2D(s.TEXTURE_2D, 0, ze, V, Pe, we, $, ve, T.data);
      }
      U.clearUpdateRanges(), s.pixelStorei(s.UNPACK_ROW_LENGTH, ke), s.pixelStorei(s.UNPACK_SKIP_PIXELS, ye), s.pixelStorei(s.UNPACK_SKIP_ROWS, Qe);
    }
  }
  function te(U, T, $) {
    let ve = s.TEXTURE_2D;
    (T.isDataArrayTexture || T.isCompressedArrayTexture) && (ve = s.TEXTURE_2D_ARRAY), T.isData3DTexture && (ve = s.TEXTURE_3D);
    const ue = he(U, T),
      se = T.source;
    n.bindTexture(ve, U.__webglTexture, s.TEXTURE0 + $);
    const Ye = a.get(se);
    if (se.version !== Ye.__version || ue === !0) {
      n.activeTexture(s.TEXTURE0 + $);
      const ke = Jt.getPrimaries(Jt.workingColorSpace),
        ye = T.colorSpace === pr ? null : Jt.getPrimaries(T.colorSpace),
        Qe = T.colorSpace === pr || ke === ye ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, T.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, T.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Qe);
      let Re = E(T.image, !1, o.maxTextureSize);
      Re = tt(T, Re);
      const oe = c.convert(T.format, T.colorSpace),
        Le = c.convert(T.type);
      let Ve = D(T.internalFormat, oe, Le, T.colorSpace, T.isVideoTexture);
      ee(ve, T);
      let _e;
      const ze = T.mipmaps,
        V = T.isVideoTexture !== !0,
        Pe = Ye.__version === void 0 || ue === !0,
        we = se.dataReady,
        Ie = F(T, Re);
      if (T.isDepthTexture) Ve = O(T.format === _l, T.type), Pe && (V ? n.texStorage2D(s.TEXTURE_2D, 1, Ve, Re.width, Re.height) : n.texImage2D(s.TEXTURE_2D, 0, Ve, Re.width, Re.height, 0, oe, Le, null));else if (T.isDataTexture) {
        if (ze.length > 0) {
          V && Pe && n.texStorage2D(s.TEXTURE_2D, Ie, Ve, ze[0].width, ze[0].height);
          for (let Ne = 0, Ae = ze.length; Ne < Ae; Ne++) _e = ze[Ne], V ? we && n.texSubImage2D(s.TEXTURE_2D, Ne, 0, 0, _e.width, _e.height, oe, Le, _e.data) : n.texImage2D(s.TEXTURE_2D, Ne, Ve, _e.width, _e.height, 0, oe, Le, _e.data);
          T.generateMipmaps = !1;
        } else V ? (Pe && n.texStorage2D(s.TEXTURE_2D, Ie, Ve, Re.width, Re.height), we && Be(T, Re, oe, Le)) : n.texImage2D(s.TEXTURE_2D, 0, Ve, Re.width, Re.height, 0, oe, Le, Re.data);
      } else if (T.isCompressedTexture) {
        if (T.isCompressedArrayTexture) {
          V && Pe && n.texStorage3D(s.TEXTURE_2D_ARRAY, Ie, Ve, ze[0].width, ze[0].height, Re.depth);
          for (let Ne = 0, Ae = ze.length; Ne < Ae; Ne++) if (_e = ze[Ne], T.format !== Vi) {
            if (oe !== null) {
              if (V) {
                if (we) if (T.layerUpdates.size > 0) {
                  const je = Ev(_e.width, _e.height, T.format, T.type);
                  for (const ct of T.layerUpdates) {
                    const ut = _e.data.subarray(ct * je / _e.data.BYTES_PER_ELEMENT, (ct + 1) * je / _e.data.BYTES_PER_ELEMENT);
                    n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, Ne, 0, 0, ct, _e.width, _e.height, 1, oe, ut);
                  }
                  T.clearLayerUpdates();
                } else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, Ne, 0, 0, 0, _e.width, _e.height, Re.depth, oe, _e.data);
              } else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY, Ne, Ve, _e.width, _e.height, Re.depth, 0, _e.data, 0, 0);
            } else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          } else V ? we && n.texSubImage3D(s.TEXTURE_2D_ARRAY, Ne, 0, 0, 0, _e.width, _e.height, Re.depth, oe, Le, _e.data) : n.texImage3D(s.TEXTURE_2D_ARRAY, Ne, Ve, _e.width, _e.height, Re.depth, 0, oe, Le, _e.data);
        } else {
          V && Pe && n.texStorage2D(s.TEXTURE_2D, Ie, Ve, ze[0].width, ze[0].height);
          for (let Ne = 0, Ae = ze.length; Ne < Ae; Ne++) _e = ze[Ne], T.format !== Vi ? oe !== null ? V ? we && n.compressedTexSubImage2D(s.TEXTURE_2D, Ne, 0, 0, _e.width, _e.height, oe, _e.data) : n.compressedTexImage2D(s.TEXTURE_2D, Ne, Ve, _e.width, _e.height, 0, _e.data) : Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : V ? we && n.texSubImage2D(s.TEXTURE_2D, Ne, 0, 0, _e.width, _e.height, oe, Le, _e.data) : n.texImage2D(s.TEXTURE_2D, Ne, Ve, _e.width, _e.height, 0, oe, Le, _e.data);
        }
      } else if (T.isDataArrayTexture) {
        if (V) {
          if (Pe && n.texStorage3D(s.TEXTURE_2D_ARRAY, Ie, Ve, Re.width, Re.height, Re.depth), we) if (T.layerUpdates.size > 0) {
            const Ne = Ev(Re.width, Re.height, T.format, T.type);
            for (const Ae of T.layerUpdates) {
              const je = Re.data.subarray(Ae * Ne / Re.data.BYTES_PER_ELEMENT, (Ae + 1) * Ne / Re.data.BYTES_PER_ELEMENT);
              n.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, Ae, Re.width, Re.height, 1, oe, Le, je);
            }
            T.clearLayerUpdates();
          } else n.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Re.width, Re.height, Re.depth, oe, Le, Re.data);
        } else n.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ve, Re.width, Re.height, Re.depth, 0, oe, Le, Re.data);
      } else if (T.isData3DTexture) V ? (Pe && n.texStorage3D(s.TEXTURE_3D, Ie, Ve, Re.width, Re.height, Re.depth), we && n.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, Re.width, Re.height, Re.depth, oe, Le, Re.data)) : n.texImage3D(s.TEXTURE_3D, 0, Ve, Re.width, Re.height, Re.depth, 0, oe, Le, Re.data);else if (T.isFramebufferTexture) {
        if (Pe) if (V) n.texStorage2D(s.TEXTURE_2D, Ie, Ve, Re.width, Re.height);else {
          let Ne = Re.width,
            Ae = Re.height;
          for (let je = 0; je < Ie; je++) n.texImage2D(s.TEXTURE_2D, je, Ve, Ne, Ae, 0, oe, Le, null), Ne >>= 1, Ae >>= 1;
        }
      } else if (ze.length > 0) {
        if (V && Pe) {
          const Ne = ft(ze[0]);
          n.texStorage2D(s.TEXTURE_2D, Ie, Ve, Ne.width, Ne.height);
        }
        for (let Ne = 0, Ae = ze.length; Ne < Ae; Ne++) _e = ze[Ne], V ? we && n.texSubImage2D(s.TEXTURE_2D, Ne, 0, 0, oe, Le, _e) : n.texImage2D(s.TEXTURE_2D, Ne, Ve, oe, Le, _e);
        T.generateMipmaps = !1;
      } else if (V) {
        if (Pe) {
          const Ne = ft(Re);
          n.texStorage2D(s.TEXTURE_2D, Ie, Ve, Ne.width, Ne.height);
        }
        we && n.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, oe, Le, Re);
      } else n.texImage2D(s.TEXTURE_2D, 0, Ve, oe, Le, Re);
      S(T) && _(ve), Ye.__version = se.version, T.onUpdate && T.onUpdate(T);
    }
    U.__version = T.version;
  }
  function me(U, T, $) {
    if (T.image.length !== 6) return;
    const ve = he(U, T),
      ue = T.source;
    n.bindTexture(s.TEXTURE_CUBE_MAP, U.__webglTexture, s.TEXTURE0 + $);
    const se = a.get(ue);
    if (ue.version !== se.__version || ve === !0) {
      n.activeTexture(s.TEXTURE0 + $);
      const Ye = Jt.getPrimaries(Jt.workingColorSpace),
        ke = T.colorSpace === pr ? null : Jt.getPrimaries(T.colorSpace),
        ye = T.colorSpace === pr || Ye === ke ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, T.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, T.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ye);
      const Qe = T.isCompressedTexture || T.image[0].isCompressedTexture,
        Re = T.image[0] && T.image[0].isDataTexture,
        oe = [];
      for (let Ae = 0; Ae < 6; Ae++) !Qe && !Re ? oe[Ae] = E(T.image[Ae], !0, o.maxCubemapSize) : oe[Ae] = Re ? T.image[Ae].image : T.image[Ae], oe[Ae] = tt(T, oe[Ae]);
      const Le = oe[0],
        Ve = c.convert(T.format, T.colorSpace),
        _e = c.convert(T.type),
        ze = D(T.internalFormat, Ve, _e, T.colorSpace),
        V = T.isVideoTexture !== !0,
        Pe = se.__version === void 0 || ve === !0,
        we = ue.dataReady;
      let Ie = F(T, Le);
      ee(s.TEXTURE_CUBE_MAP, T);
      let Ne;
      if (Qe) {
        V && Pe && n.texStorage2D(s.TEXTURE_CUBE_MAP, Ie, ze, Le.width, Le.height);
        for (let Ae = 0; Ae < 6; Ae++) {
          Ne = oe[Ae].mipmaps;
          for (let je = 0; je < Ne.length; je++) {
            const ct = Ne[je];
            T.format !== Vi ? Ve !== null ? V ? we && n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je, 0, 0, ct.width, ct.height, Ve, ct.data) : n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je, ze, ct.width, ct.height, 0, ct.data) : Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : V ? we && n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je, 0, 0, ct.width, ct.height, Ve, _e, ct.data) : n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je, ze, ct.width, ct.height, 0, Ve, _e, ct.data);
          }
        }
      } else {
        if (Ne = T.mipmaps, V && Pe) {
          Ne.length > 0 && Ie++;
          const Ae = ft(oe[0]);
          n.texStorage2D(s.TEXTURE_CUBE_MAP, Ie, ze, Ae.width, Ae.height);
        }
        for (let Ae = 0; Ae < 6; Ae++) if (Re) {
          V ? we && n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, 0, 0, 0, oe[Ae].width, oe[Ae].height, Ve, _e, oe[Ae].data) : n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, 0, ze, oe[Ae].width, oe[Ae].height, 0, Ve, _e, oe[Ae].data);
          for (let je = 0; je < Ne.length; je++) {
            const ut = Ne[je].image[Ae].image;
            V ? we && n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je + 1, 0, 0, ut.width, ut.height, Ve, _e, ut.data) : n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je + 1, ze, ut.width, ut.height, 0, Ve, _e, ut.data);
          }
        } else {
          V ? we && n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, 0, 0, 0, Ve, _e, oe[Ae]) : n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, 0, ze, Ve, _e, oe[Ae]);
          for (let je = 0; je < Ne.length; je++) {
            const ct = Ne[je];
            V ? we && n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je + 1, 0, 0, Ve, _e, ct.image[Ae]) : n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Ae, je + 1, ze, Ve, _e, ct.image[Ae]);
          }
        }
      }
      S(T) && _(s.TEXTURE_CUBE_MAP), se.__version = ue.version, T.onUpdate && T.onUpdate(T);
    }
    U.__version = T.version;
  }
  function He(U, T, $, ve, ue, se) {
    const Ye = c.convert($.format, $.colorSpace),
      ke = c.convert($.type),
      ye = D($.internalFormat, Ye, ke, $.colorSpace),
      Qe = a.get(T),
      Re = a.get($);
    if (Re.__renderTarget = T, !Qe.__hasExternalTextures) {
      const oe = Math.max(1, T.width >> se),
        Le = Math.max(1, T.height >> se);
      ue === s.TEXTURE_3D || ue === s.TEXTURE_2D_ARRAY ? n.texImage3D(ue, se, ye, oe, Le, T.depth, 0, Ye, ke, null) : n.texImage2D(ue, se, ye, oe, Le, 0, Ye, ke, null);
    }
    n.bindFramebuffer(s.FRAMEBUFFER, U), Fe(T) ? f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, ve, ue, Re.__webglTexture, 0, it(T)) : (ue === s.TEXTURE_2D || ue >= s.TEXTURE_CUBE_MAP_POSITIVE_X && ue <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, ve, ue, Re.__webglTexture, se), n.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ge(U, T, $) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, U), T.depthBuffer) {
      const ve = T.depthTexture,
        ue = ve && ve.isDepthTexture ? ve.type : null,
        se = O(T.stencilBuffer, ue),
        Ye = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        ke = it(T);
      Fe(T) ? f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ke, se, T.width, T.height) : $ ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ke, se, T.width, T.height) : s.renderbufferStorage(s.RENDERBUFFER, se, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, Ye, s.RENDERBUFFER, U);
    } else {
      const ve = T.textures;
      for (let ue = 0; ue < ve.length; ue++) {
        const se = ve[ue],
          Ye = c.convert(se.format, se.colorSpace),
          ke = c.convert(se.type),
          ye = D(se.internalFormat, Ye, ke, se.colorSpace),
          Qe = it(T);
        $ && Fe(T) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Qe, ye, T.width, T.height) : Fe(T) ? f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Qe, ye, T.width, T.height) : s.renderbufferStorage(s.RENDERBUFFER, ye, T.width, T.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function qe(U, T) {
    if (T && T.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (n.bindFramebuffer(s.FRAMEBUFFER, U), !(T.depthTexture && T.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const ve = a.get(T.depthTexture);
    ve.__renderTarget = T, (!ve.__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = !0), ie(T.depthTexture, 0);
    const ue = ve.__webglTexture,
      se = it(T);
    if (T.depthTexture.format === vl) Fe(T) ? f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, ue, 0, se) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, ue, 0);else if (T.depthTexture.format === _l) Fe(T) ? f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, ue, 0, se) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, ue, 0);else throw new Error("Unknown depthTexture format");
  }
  function Ke(U) {
    const T = a.get(U),
      $ = U.isWebGLCubeRenderTarget === !0;
    if (T.__boundDepthTexture !== U.depthTexture) {
      const ve = U.depthTexture;
      if (T.__depthDisposeCallback && T.__depthDisposeCallback(), ve) {
        const ue = () => {
          delete T.__boundDepthTexture, delete T.__depthDisposeCallback, ve.removeEventListener("dispose", ue);
        };
        ve.addEventListener("dispose", ue), T.__depthDisposeCallback = ue;
      }
      T.__boundDepthTexture = ve;
    }
    if (U.depthTexture && !T.__autoAllocateDepthBuffer) {
      if ($) throw new Error("target.depthTexture not supported in Cube render targets");
      const ve = U.texture.mipmaps;
      ve && ve.length > 0 ? qe(T.__webglFramebuffer[0], U) : qe(T.__webglFramebuffer, U);
    } else if ($) {
      T.__webglDepthbuffer = [];
      for (let ve = 0; ve < 6; ve++) if (n.bindFramebuffer(s.FRAMEBUFFER, T.__webglFramebuffer[ve]), T.__webglDepthbuffer[ve] === void 0) T.__webglDepthbuffer[ve] = s.createRenderbuffer(), Ge(T.__webglDepthbuffer[ve], U, !1);else {
        const ue = U.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
          se = T.__webglDepthbuffer[ve];
        s.bindRenderbuffer(s.RENDERBUFFER, se), s.framebufferRenderbuffer(s.FRAMEBUFFER, ue, s.RENDERBUFFER, se);
      }
    } else {
      const ve = U.texture.mipmaps;
      if (ve && ve.length > 0 ? n.bindFramebuffer(s.FRAMEBUFFER, T.__webglFramebuffer[0]) : n.bindFramebuffer(s.FRAMEBUFFER, T.__webglFramebuffer), T.__webglDepthbuffer === void 0) T.__webglDepthbuffer = s.createRenderbuffer(), Ge(T.__webglDepthbuffer, U, !1);else {
        const ue = U.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
          se = T.__webglDepthbuffer;
        s.bindRenderbuffer(s.RENDERBUFFER, se), s.framebufferRenderbuffer(s.FRAMEBUFFER, ue, s.RENDERBUFFER, se);
      }
    }
    n.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Te(U, T, $) {
    const ve = a.get(U);
    T !== void 0 && He(ve.__webglFramebuffer, U, U.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), $ !== void 0 && Ke(U);
  }
  function Je(U) {
    const T = U.texture,
      $ = a.get(U),
      ve = a.get(T);
    U.addEventListener("dispose", B);
    const ue = U.textures,
      se = U.isWebGLCubeRenderTarget === !0,
      Ye = ue.length > 1;
    if (Ye || (ve.__webglTexture === void 0 && (ve.__webglTexture = s.createTexture()), ve.__version = T.version, u.memory.textures++), se) {
      $.__webglFramebuffer = [];
      for (let ke = 0; ke < 6; ke++) if (T.mipmaps && T.mipmaps.length > 0) {
        $.__webglFramebuffer[ke] = [];
        for (let ye = 0; ye < T.mipmaps.length; ye++) $.__webglFramebuffer[ke][ye] = s.createFramebuffer();
      } else $.__webglFramebuffer[ke] = s.createFramebuffer();
    } else {
      if (T.mipmaps && T.mipmaps.length > 0) {
        $.__webglFramebuffer = [];
        for (let ke = 0; ke < T.mipmaps.length; ke++) $.__webglFramebuffer[ke] = s.createFramebuffer();
      } else $.__webglFramebuffer = s.createFramebuffer();
      if (Ye) for (let ke = 0, ye = ue.length; ke < ye; ke++) {
        const Qe = a.get(ue[ke]);
        Qe.__webglTexture === void 0 && (Qe.__webglTexture = s.createTexture(), u.memory.textures++);
      }
      if (U.samples > 0 && Fe(U) === !1) {
        $.__webglMultisampledFramebuffer = s.createFramebuffer(), $.__webglColorRenderbuffer = [], n.bindFramebuffer(s.FRAMEBUFFER, $.__webglMultisampledFramebuffer);
        for (let ke = 0; ke < ue.length; ke++) {
          const ye = ue[ke];
          $.__webglColorRenderbuffer[ke] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, $.__webglColorRenderbuffer[ke]);
          const Qe = c.convert(ye.format, ye.colorSpace),
            Re = c.convert(ye.type),
            oe = D(ye.internalFormat, Qe, Re, ye.colorSpace, U.isXRRenderTarget === !0),
            Le = it(U);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Le, oe, U.width, U.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ke, s.RENDERBUFFER, $.__webglColorRenderbuffer[ke]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), U.depthBuffer && ($.__webglDepthRenderbuffer = s.createRenderbuffer(), Ge($.__webglDepthRenderbuffer, U, !0)), n.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (se) {
      n.bindTexture(s.TEXTURE_CUBE_MAP, ve.__webglTexture), ee(s.TEXTURE_CUBE_MAP, T);
      for (let ke = 0; ke < 6; ke++) if (T.mipmaps && T.mipmaps.length > 0) for (let ye = 0; ye < T.mipmaps.length; ye++) He($.__webglFramebuffer[ke][ye], U, T, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ke, ye);else He($.__webglFramebuffer[ke], U, T, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ke, 0);
      S(T) && _(s.TEXTURE_CUBE_MAP), n.unbindTexture();
    } else if (Ye) {
      for (let ke = 0, ye = ue.length; ke < ye; ke++) {
        const Qe = ue[ke],
          Re = a.get(Qe);
        let oe = s.TEXTURE_2D;
        (U.isWebGL3DRenderTarget || U.isWebGLArrayRenderTarget) && (oe = U.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), n.bindTexture(oe, Re.__webglTexture), ee(oe, Qe), He($.__webglFramebuffer, U, Qe, s.COLOR_ATTACHMENT0 + ke, oe, 0), S(Qe) && _(oe);
      }
      n.unbindTexture();
    } else {
      let ke = s.TEXTURE_2D;
      if ((U.isWebGL3DRenderTarget || U.isWebGLArrayRenderTarget) && (ke = U.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), n.bindTexture(ke, ve.__webglTexture), ee(ke, T), T.mipmaps && T.mipmaps.length > 0) for (let ye = 0; ye < T.mipmaps.length; ye++) He($.__webglFramebuffer[ye], U, T, s.COLOR_ATTACHMENT0, ke, ye);else He($.__webglFramebuffer, U, T, s.COLOR_ATTACHMENT0, ke, 0);
      S(T) && _(ke), n.unbindTexture();
    }
    U.depthBuffer && Ke(U);
  }
  function st(U) {
    const T = U.textures;
    for (let $ = 0, ve = T.length; $ < ve; $++) {
      const ue = T[$];
      if (S(ue)) {
        const se = L(U),
          Ye = a.get(ue).__webglTexture;
        n.bindTexture(se, Ye), _(se), n.unbindTexture();
      }
    }
  }
  const G = [],
    nt = [];
  function rt(U) {
    if (U.samples > 0) {
      if (Fe(U) === !1) {
        const T = U.textures,
          $ = U.width,
          ve = U.height;
        let ue = s.COLOR_BUFFER_BIT;
        const se = U.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
          Ye = a.get(U),
          ke = T.length > 1;
        if (ke) for (let Qe = 0; Qe < T.length; Qe++) n.bindFramebuffer(s.FRAMEBUFFER, Ye.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Qe, s.RENDERBUFFER, null), n.bindFramebuffer(s.FRAMEBUFFER, Ye.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Qe, s.TEXTURE_2D, null, 0);
        n.bindFramebuffer(s.READ_FRAMEBUFFER, Ye.__webglMultisampledFramebuffer);
        const ye = U.texture.mipmaps;
        ye && ye.length > 0 ? n.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ye.__webglFramebuffer[0]) : n.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ye.__webglFramebuffer);
        for (let Qe = 0; Qe < T.length; Qe++) {
          if (U.resolveDepthBuffer && (U.depthBuffer && (ue |= s.DEPTH_BUFFER_BIT), U.stencilBuffer && U.resolveStencilBuffer && (ue |= s.STENCIL_BUFFER_BIT)), ke) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, Ye.__webglColorRenderbuffer[Qe]);
            const Re = a.get(T[Qe]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Re, 0);
          }
          s.blitFramebuffer(0, 0, $, ve, 0, 0, $, ve, ue, s.NEAREST), m === !0 && (G.length = 0, nt.length = 0, G.push(s.COLOR_ATTACHMENT0 + Qe), U.depthBuffer && U.resolveDepthBuffer === !1 && (G.push(se), nt.push(se), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, nt)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, G));
        }
        if (n.bindFramebuffer(s.READ_FRAMEBUFFER, null), n.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ke) for (let Qe = 0; Qe < T.length; Qe++) {
          n.bindFramebuffer(s.FRAMEBUFFER, Ye.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Qe, s.RENDERBUFFER, Ye.__webglColorRenderbuffer[Qe]);
          const Re = a.get(T[Qe]).__webglTexture;
          n.bindFramebuffer(s.FRAMEBUFFER, Ye.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Qe, s.TEXTURE_2D, Re, 0);
        }
        n.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ye.__webglMultisampledFramebuffer);
      } else if (U.depthBuffer && U.resolveDepthBuffer === !1 && m) {
        const T = U.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [T]);
      }
    }
  }
  function it(U) {
    return Math.min(o.maxSamples, U.samples);
  }
  function Fe(U) {
    const T = a.get(U);
    return U.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && T.__useRenderToTexture !== !1;
  }
  function Et(U) {
    const T = u.render.frame;
    x.get(U) !== T && (x.set(U, T), U.update());
  }
  function tt(U, T) {
    const $ = U.colorSpace,
      ve = U.format,
      ue = U.type;
    return U.isCompressedTexture === !0 || U.isVideoTexture === !0 || $ !== io && $ !== pr && (Jt.getTransfer($) === ln ? (ve !== Vi || ue !== Oa) && Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : yn("WebGLTextures: Unsupported texture color space:", $)), T;
  }
  function ft(U) {
    return typeof HTMLImageElement < "u" && U instanceof HTMLImageElement ? (h.width = U.naturalWidth || U.width, h.height = U.naturalHeight || U.height) : typeof VideoFrame < "u" && U instanceof VideoFrame ? (h.width = U.displayWidth, h.height = U.displayHeight) : (h.width = U.width, h.height = U.height), h;
  }
  this.allocateTextureUnit = W, this.resetTextureUnits = k, this.setTexture2D = ie, this.setTexture2DArray = I, this.setTexture3D = Y, this.setTextureCube = Z, this.rebindTextures = Te, this.setupRenderTarget = Je, this.updateRenderTargetMipmap = st, this.updateMultisampleRenderTarget = rt, this.setupDepthRenderbuffer = Ke, this.setupFrameBufferTexture = He, this.useMultisampledRTT = Fe;
}
function Tw(s, e) {
  function n(a, o = pr) {
    let c;
    const u = Jt.getTransfer(o);
    if (a === Oa) return s.UNSIGNED_BYTE;
    if (a === N0) return s.UNSIGNED_SHORT_4_4_4_4;
    if (a === L0) return s.UNSIGNED_SHORT_5_5_5_1;
    if (a === L_) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (a === U_) return s.UNSIGNED_INT_10F_11F_11F_REV;
    if (a === D_) return s.BYTE;
    if (a === N_) return s.SHORT;
    if (a === gl) return s.UNSIGNED_SHORT;
    if (a === D0) return s.INT;
    if (a === Zr) return s.UNSIGNED_INT;
    if (a === Ca) return s.FLOAT;
    if (a === ro) return s.HALF_FLOAT;
    if (a === O_) return s.ALPHA;
    if (a === P_) return s.RGB;
    if (a === Vi) return s.RGBA;
    if (a === vl) return s.DEPTH_COMPONENT;
    if (a === _l) return s.DEPTH_STENCIL;
    if (a === I_) return s.RED;
    if (a === U0) return s.RED_INTEGER;
    if (a === O0) return s.RG;
    if (a === P0) return s.RG_INTEGER;
    if (a === I0) return s.RGBA_INTEGER;
    if (a === cu || a === uu || a === fu || a === du) if (u === ln) {
      if (c = e.get("WEBGL_compressed_texture_s3tc_srgb"), c !== null) {
        if (a === cu) return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (a === uu) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (a === fu) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (a === du) return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
    } else if (c = e.get("WEBGL_compressed_texture_s3tc"), c !== null) {
      if (a === cu) return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (a === uu) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (a === fu) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (a === du) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (a === Qh || a === Jh || a === $h || a === e0) if (c = e.get("WEBGL_compressed_texture_pvrtc"), c !== null) {
      if (a === Qh) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (a === Jh) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (a === $h) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (a === e0) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (a === t0 || a === n0 || a === i0) if (c = e.get("WEBGL_compressed_texture_etc"), c !== null) {
      if (a === t0 || a === n0) return u === ln ? c.COMPRESSED_SRGB8_ETC2 : c.COMPRESSED_RGB8_ETC2;
      if (a === i0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : c.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (a === a0 || a === r0 || a === s0 || a === o0 || a === l0 || a === c0 || a === u0 || a === f0 || a === d0 || a === h0 || a === p0 || a === m0 || a === g0 || a === x0) if (c = e.get("WEBGL_compressed_texture_astc"), c !== null) {
      if (a === a0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : c.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (a === r0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : c.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (a === s0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : c.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (a === o0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : c.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (a === l0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : c.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (a === c0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : c.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (a === u0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : c.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (a === f0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : c.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (a === d0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : c.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (a === h0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : c.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (a === p0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : c.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (a === m0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : c.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (a === g0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : c.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (a === x0) return u === ln ? c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : c.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (a === v0 || a === _0 || a === y0) if (c = e.get("EXT_texture_compression_bptc"), c !== null) {
      if (a === v0) return u === ln ? c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : c.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (a === _0) return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (a === y0) return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (a === b0 || a === S0 || a === M0 || a === E0) if (c = e.get("EXT_texture_compression_rgtc"), c !== null) {
      if (a === b0) return c.COMPRESSED_RED_RGTC1_EXT;
      if (a === S0) return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (a === M0) return c.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (a === E0) return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return a === xl ? s.UNSIGNED_INT_24_8 : s[a] !== void 0 ? s[a] : null;
  }
  return {
    convert: n
  };
}
const Aw = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`;
const ww = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Rw {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, n) {
    if (this.texture === null) {
      const a = new J_(e.texture);
      (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = a;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const n = e.cameras[0].viewport,
        a = new ji({
          vertexShader: Aw,
          fragmentShader: ww,
          uniforms: {
            depthColor: {
              value: this.texture
            },
            depthWidth: {
              value: n.z
            },
            depthHeight: {
              value: n.w
            }
          }
        });
      this.mesh = new Ia(new Cu(20, 20), a);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Cw extends so {
  constructor(e, n) {
    super();
    const a = this;
    let o = null,
      c = 1,
      u = null,
      f = "local-floor",
      m = 1,
      h = null,
      x = null,
      g = null,
      v = null,
      y = null,
      M = null;
    const E = typeof XRWebGLBinding < "u",
      S = new Rw(),
      _ = {},
      L = n.getContextAttributes();
    let D = null,
      O = null;
    const F = [],
      P = [],
      B = new Wt();
    let q = null;
    const w = new Li();
    w.viewport = new En();
    const A = new Li();
    A.viewport = new En();
    const H = [w, A],
      k = new q3();
    let W = null,
      J = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (te) {
      let me = F[te];
      return me === void 0 && (me = new mh(), F[te] = me), me.getTargetRaySpace();
    }, this.getControllerGrip = function (te) {
      let me = F[te];
      return me === void 0 && (me = new mh(), F[te] = me), me.getGripSpace();
    }, this.getHand = function (te) {
      let me = F[te];
      return me === void 0 && (me = new mh(), F[te] = me), me.getHandSpace();
    };
    function ie(te) {
      const me = P.indexOf(te.inputSource);
      if (me === -1) return;
      const He = F[me];
      He !== void 0 && (He.update(te.inputSource, te.frame, h || u), He.dispatchEvent({
        type: te.type,
        data: te.inputSource
      }));
    }
    function I() {
      o.removeEventListener("select", ie), o.removeEventListener("selectstart", ie), o.removeEventListener("selectend", ie), o.removeEventListener("squeeze", ie), o.removeEventListener("squeezestart", ie), o.removeEventListener("squeezeend", ie), o.removeEventListener("end", I), o.removeEventListener("inputsourceschange", Y);
      for (let te = 0; te < F.length; te++) {
        const me = P[te];
        me !== null && (P[te] = null, F[te].disconnect(me));
      }
      W = null, J = null, S.reset();
      for (const te in _) delete _[te];
      e.setRenderTarget(D), y = null, v = null, g = null, o = null, O = null, Be.stop(), a.isPresenting = !1, e.setPixelRatio(q), e.setSize(B.width, B.height, !1), a.dispatchEvent({
        type: "sessionend"
      });
    }
    this.setFramebufferScaleFactor = function (te) {
      c = te, a.isPresenting === !0 && Rt("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function (te) {
      f = te, a.isPresenting === !0 && Rt("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function () {
      return h || u;
    }, this.setReferenceSpace = function (te) {
      h = te;
    }, this.getBaseLayer = function () {
      return v !== null ? v : y;
    }, this.getBinding = function () {
      return g === null && E && (g = new XRWebGLBinding(o, n)), g;
    }, this.getFrame = function () {
      return M;
    }, this.getSession = function () {
      return o;
    }, this.setSession = async function (te) {
      if (o = te, o !== null) {
        if (D = e.getRenderTarget(), o.addEventListener("select", ie), o.addEventListener("selectstart", ie), o.addEventListener("selectend", ie), o.addEventListener("squeeze", ie), o.addEventListener("squeezestart", ie), o.addEventListener("squeezeend", ie), o.addEventListener("end", I), o.addEventListener("inputsourceschange", Y), L.xrCompatible !== !0 && (await n.makeXRCompatible()), q = e.getPixelRatio(), e.getSize(B), E && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let He = null,
            Ge = null,
            qe = null;
          L.depth && (qe = L.stencil ? n.DEPTH24_STENCIL8 : n.DEPTH_COMPONENT24, He = L.stencil ? _l : vl, Ge = L.stencil ? xl : Zr);
          const Ke = {
            colorFormat: n.RGBA8,
            depthFormat: qe,
            scaleFactor: c
          };
          g = this.getBinding(), v = g.createProjectionLayer(Ke), o.updateRenderState({
            layers: [v]
          }), e.setPixelRatio(1), e.setSize(v.textureWidth, v.textureHeight, !1), O = new Kr(v.textureWidth, v.textureHeight, {
            format: Vi,
            type: Oa,
            depthTexture: new Q_(v.textureWidth, v.textureHeight, Ge, void 0, void 0, void 0, void 0, void 0, void 0, He),
            stencilBuffer: L.stencil,
            colorSpace: e.outputColorSpace,
            samples: L.antialias ? 4 : 0,
            resolveDepthBuffer: v.ignoreDepthValues === !1,
            resolveStencilBuffer: v.ignoreDepthValues === !1
          });
        } else {
          const He = {
            antialias: L.antialias,
            alpha: !0,
            depth: L.depth,
            stencil: L.stencil,
            framebufferScaleFactor: c
          };
          y = new XRWebGLLayer(o, n, He), o.updateRenderState({
            baseLayer: y
          }), e.setPixelRatio(1), e.setSize(y.framebufferWidth, y.framebufferHeight, !1), O = new Kr(y.framebufferWidth, y.framebufferHeight, {
            format: Vi,
            type: Oa,
            colorSpace: e.outputColorSpace,
            stencilBuffer: L.stencil,
            resolveDepthBuffer: y.ignoreDepthValues === !1,
            resolveStencilBuffer: y.ignoreDepthValues === !1
          });
        }
        O.isXRRenderTarget = !0, this.setFoveation(m), h = null, u = await o.requestReferenceSpace(f), Be.setContext(o), Be.start(), a.isPresenting = !0, a.dispatchEvent({
          type: "sessionstart"
        });
      }
    }, this.getEnvironmentBlendMode = function () {
      if (o !== null) return o.environmentBlendMode;
    }, this.getDepthTexture = function () {
      return S.getDepthTexture();
    };
    function Y(te) {
      for (let me = 0; me < te.removed.length; me++) {
        const He = te.removed[me],
          Ge = P.indexOf(He);
        Ge >= 0 && (P[Ge] = null, F[Ge].disconnect(He));
      }
      for (let me = 0; me < te.added.length; me++) {
        const He = te.added[me];
        let Ge = P.indexOf(He);
        if (Ge === -1) {
          for (let Ke = 0; Ke < F.length; Ke++) if (Ke >= P.length) {
            P.push(He), Ge = Ke;
            break;
          } else if (P[Ke] === null) {
            P[Ke] = He, Ge = Ke;
            break;
          }
          if (Ge === -1) break;
        }
        const qe = F[Ge];
        qe && qe.connect(He);
      }
    }
    const Z = new be(),
      pe = new be();
    function Me(te, me, He) {
      Z.setFromMatrixPosition(me.matrixWorld), pe.setFromMatrixPosition(He.matrixWorld);
      const Ge = Z.distanceTo(pe),
        qe = me.projectionMatrix.elements,
        Ke = He.projectionMatrix.elements,
        Te = qe[14] / (qe[10] - 1),
        Je = qe[14] / (qe[10] + 1),
        st = (qe[9] + 1) / qe[5],
        G = (qe[9] - 1) / qe[5],
        nt = (qe[8] - 1) / qe[0],
        rt = (Ke[8] + 1) / Ke[0],
        it = Te * nt,
        Fe = Te * rt,
        Et = Ge / (-nt + rt),
        tt = Et * -nt;
      if (me.matrixWorld.decompose(te.position, te.quaternion, te.scale), te.translateX(tt), te.translateZ(Et), te.matrixWorld.compose(te.position, te.quaternion, te.scale), te.matrixWorldInverse.copy(te.matrixWorld).invert(), qe[10] === -1) te.projectionMatrix.copy(me.projectionMatrix), te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else {
        const ft = Te + Et,
          U = Je + Et,
          T = it - tt,
          $ = Fe + (Ge - tt),
          ve = st * Je / U * ft,
          ue = G * Je / U * ft;
        te.projectionMatrix.makePerspective(T, $, ve, ue, ft, U), te.projectionMatrixInverse.copy(te.projectionMatrix).invert();
      }
    }
    function z(te, me) {
      me === null ? te.matrixWorld.copy(te.matrix) : te.matrixWorld.multiplyMatrices(me.matrixWorld, te.matrix), te.matrixWorldInverse.copy(te.matrixWorld).invert();
    }
    this.updateCamera = function (te) {
      if (o === null) return;
      let me = te.near,
        He = te.far;
      S.texture !== null && (S.depthNear > 0 && (me = S.depthNear), S.depthFar > 0 && (He = S.depthFar)), k.near = A.near = w.near = me, k.far = A.far = w.far = He, (W !== k.near || J !== k.far) && (o.updateRenderState({
        depthNear: k.near,
        depthFar: k.far
      }), W = k.near, J = k.far), k.layers.mask = te.layers.mask | 6, w.layers.mask = k.layers.mask & 3, A.layers.mask = k.layers.mask & 5;
      const Ge = te.parent,
        qe = k.cameras;
      z(k, Ge);
      for (let Ke = 0; Ke < qe.length; Ke++) z(qe[Ke], Ge);
      qe.length === 2 ? Me(k, w, A) : k.projectionMatrix.copy(w.projectionMatrix), ee(te, k, Ge);
    };
    function ee(te, me, He) {
      He === null ? te.matrix.copy(me.matrixWorld) : (te.matrix.copy(He.matrixWorld), te.matrix.invert(), te.matrix.multiply(me.matrixWorld)), te.matrix.decompose(te.position, te.quaternion, te.scale), te.updateMatrixWorld(!0), te.projectionMatrix.copy(me.projectionMatrix), te.projectionMatrixInverse.copy(me.projectionMatrixInverse), te.isPerspectiveCamera && (te.fov = Sl * 2 * Math.atan(1 / te.projectionMatrix.elements[5]), te.zoom = 1);
    }
    this.getCamera = function () {
      return k;
    }, this.getFoveation = function () {
      if (!(v === null && y === null)) return m;
    }, this.setFoveation = function (te) {
      m = te, v !== null && (v.fixedFoveation = te), y !== null && y.fixedFoveation !== void 0 && (y.fixedFoveation = te);
    }, this.hasDepthSensing = function () {
      return S.texture !== null;
    }, this.getDepthSensingMesh = function () {
      return S.getMesh(k);
    }, this.getCameraTexture = function (te) {
      return _[te];
    };
    let he = null;
    function Ee(te, me) {
      if (x = me.getViewerPose(h || u), M = me, x !== null) {
        const He = x.views;
        y !== null && (e.setRenderTargetFramebuffer(O, y.framebuffer), e.setRenderTarget(O));
        let Ge = !1;
        He.length !== k.cameras.length && (k.cameras.length = 0, Ge = !0);
        for (let Je = 0; Je < He.length; Je++) {
          const st = He[Je];
          let G = null;
          if (y !== null) G = y.getViewport(st);else {
            const rt = g.getViewSubImage(v, st);
            G = rt.viewport, Je === 0 && (e.setRenderTargetTextures(O, rt.colorTexture, rt.depthStencilTexture), e.setRenderTarget(O));
          }
          let nt = H[Je];
          nt === void 0 && (nt = new Li(), nt.layers.enable(Je), nt.viewport = new En(), H[Je] = nt), nt.matrix.fromArray(st.transform.matrix), nt.matrix.decompose(nt.position, nt.quaternion, nt.scale), nt.projectionMatrix.fromArray(st.projectionMatrix), nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(), nt.viewport.set(G.x, G.y, G.width, G.height), Je === 0 && (k.matrix.copy(nt.matrix), k.matrix.decompose(k.position, k.quaternion, k.scale)), Ge === !0 && k.cameras.push(nt);
        }
        const qe = o.enabledFeatures;
        if (qe && qe.includes("depth-sensing") && o.depthUsage == "gpu-optimized" && E) {
          g = a.getBinding();
          const Je = g.getDepthInformation(He[0]);
          Je && Je.isValid && Je.texture && S.init(Je, o.renderState);
        }
        if (qe && qe.includes("camera-access") && E) {
          e.state.unbindTexture(), g = a.getBinding();
          for (let Je = 0; Je < He.length; Je++) {
            const st = He[Je].camera;
            if (st) {
              let G = _[st];
              G || (G = new J_(), _[st] = G);
              const nt = g.getCameraImage(st);
              G.sourceTexture = nt;
            }
          }
        }
      }
      for (let He = 0; He < F.length; He++) {
        const Ge = P[He],
          qe = F[He];
        Ge !== null && qe !== void 0 && qe.update(Ge, me, h || u);
      }
      he && he(te, me), me.detectedPlanes && a.dispatchEvent({
        type: "planesdetected",
        data: me
      }), M = null;
    }
    const Be = new $_();
    Be.setAnimationLoop(Ee), this.setAnimationLoop = function (te) {
      he = te;
    }, this.dispose = function () {};
  }
}
const Gr = new Pa();
const Dw = new Ln();
function Nw(s, e) {
  function n(S, _) {
    S.matrixAutoUpdate === !0 && S.updateMatrix(), _.value.copy(S.matrix);
  }
  function a(S, _) {
    _.color.getRGB(S.fogColor.value, X_(s)), _.isFog ? (S.fogNear.value = _.near, S.fogFar.value = _.far) : _.isFogExp2 && (S.fogDensity.value = _.density);
  }
  function o(S, _, L, D, O) {
    _.isMeshBasicMaterial || _.isMeshLambertMaterial ? c(S, _) : _.isMeshToonMaterial ? (c(S, _), g(S, _)) : _.isMeshPhongMaterial ? (c(S, _), x(S, _)) : _.isMeshStandardMaterial ? (c(S, _), v(S, _), _.isMeshPhysicalMaterial && y(S, _, O)) : _.isMeshMatcapMaterial ? (c(S, _), M(S, _)) : _.isMeshDepthMaterial ? c(S, _) : _.isMeshDistanceMaterial ? (c(S, _), E(S, _)) : _.isMeshNormalMaterial ? c(S, _) : _.isLineBasicMaterial ? (u(S, _), _.isLineDashedMaterial && f(S, _)) : _.isPointsMaterial ? m(S, _, L, D) : _.isSpriteMaterial ? h(S, _) : _.isShadowMaterial ? (S.color.value.copy(_.color), S.opacity.value = _.opacity) : _.isShaderMaterial && (_.uniformsNeedUpdate = !1);
  }
  function c(S, _) {
    S.opacity.value = _.opacity, _.color && S.diffuse.value.copy(_.color), _.emissive && S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (S.map.value = _.map, n(_.map, S.mapTransform)), _.alphaMap && (S.alphaMap.value = _.alphaMap, n(_.alphaMap, S.alphaMapTransform)), _.bumpMap && (S.bumpMap.value = _.bumpMap, n(_.bumpMap, S.bumpMapTransform), S.bumpScale.value = _.bumpScale, _.side === ci && (S.bumpScale.value *= -1)), _.normalMap && (S.normalMap.value = _.normalMap, n(_.normalMap, S.normalMapTransform), S.normalScale.value.copy(_.normalScale), _.side === ci && S.normalScale.value.negate()), _.displacementMap && (S.displacementMap.value = _.displacementMap, n(_.displacementMap, S.displacementMapTransform), S.displacementScale.value = _.displacementScale, S.displacementBias.value = _.displacementBias), _.emissiveMap && (S.emissiveMap.value = _.emissiveMap, n(_.emissiveMap, S.emissiveMapTransform)), _.specularMap && (S.specularMap.value = _.specularMap, n(_.specularMap, S.specularMapTransform)), _.alphaTest > 0 && (S.alphaTest.value = _.alphaTest);
    const L = e.get(_),
      D = L.envMap,
      O = L.envMapRotation;
    D && (S.envMap.value = D, Gr.copy(O), Gr.x *= -1, Gr.y *= -1, Gr.z *= -1, D.isCubeTexture && D.isRenderTargetTexture === !1 && (Gr.y *= -1, Gr.z *= -1), S.envMapRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(Gr)), S.flipEnvMap.value = D.isCubeTexture && D.isRenderTargetTexture === !1 ? -1 : 1, S.reflectivity.value = _.reflectivity, S.ior.value = _.ior, S.refractionRatio.value = _.refractionRatio), _.lightMap && (S.lightMap.value = _.lightMap, S.lightMapIntensity.value = _.lightMapIntensity, n(_.lightMap, S.lightMapTransform)), _.aoMap && (S.aoMap.value = _.aoMap, S.aoMapIntensity.value = _.aoMapIntensity, n(_.aoMap, S.aoMapTransform));
  }
  function u(S, _) {
    S.diffuse.value.copy(_.color), S.opacity.value = _.opacity, _.map && (S.map.value = _.map, n(_.map, S.mapTransform));
  }
  function f(S, _) {
    S.dashSize.value = _.dashSize, S.totalSize.value = _.dashSize + _.gapSize, S.scale.value = _.scale;
  }
  function m(S, _, L, D) {
    S.diffuse.value.copy(_.color), S.opacity.value = _.opacity, S.size.value = _.size * L, S.scale.value = D * .5, _.map && (S.map.value = _.map, n(_.map, S.uvTransform)), _.alphaMap && (S.alphaMap.value = _.alphaMap, n(_.alphaMap, S.alphaMapTransform)), _.alphaTest > 0 && (S.alphaTest.value = _.alphaTest);
  }
  function h(S, _) {
    S.diffuse.value.copy(_.color), S.opacity.value = _.opacity, S.rotation.value = _.rotation, _.map && (S.map.value = _.map, n(_.map, S.mapTransform)), _.alphaMap && (S.alphaMap.value = _.alphaMap, n(_.alphaMap, S.alphaMapTransform)), _.alphaTest > 0 && (S.alphaTest.value = _.alphaTest);
  }
  function x(S, _) {
    S.specular.value.copy(_.specular), S.shininess.value = Math.max(_.shininess, 1e-4);
  }
  function g(S, _) {
    _.gradientMap && (S.gradientMap.value = _.gradientMap);
  }
  function v(S, _) {
    S.metalness.value = _.metalness, _.metalnessMap && (S.metalnessMap.value = _.metalnessMap, n(_.metalnessMap, S.metalnessMapTransform)), S.roughness.value = _.roughness, _.roughnessMap && (S.roughnessMap.value = _.roughnessMap, n(_.roughnessMap, S.roughnessMapTransform)), _.envMap && (S.envMapIntensity.value = _.envMapIntensity);
  }
  function y(S, _, L) {
    S.ior.value = _.ior, _.sheen > 0 && (S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen), S.sheenRoughness.value = _.sheenRoughness, _.sheenColorMap && (S.sheenColorMap.value = _.sheenColorMap, n(_.sheenColorMap, S.sheenColorMapTransform)), _.sheenRoughnessMap && (S.sheenRoughnessMap.value = _.sheenRoughnessMap, n(_.sheenRoughnessMap, S.sheenRoughnessMapTransform))), _.clearcoat > 0 && (S.clearcoat.value = _.clearcoat, S.clearcoatRoughness.value = _.clearcoatRoughness, _.clearcoatMap && (S.clearcoatMap.value = _.clearcoatMap, n(_.clearcoatMap, S.clearcoatMapTransform)), _.clearcoatRoughnessMap && (S.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap, n(_.clearcoatRoughnessMap, S.clearcoatRoughnessMapTransform)), _.clearcoatNormalMap && (S.clearcoatNormalMap.value = _.clearcoatNormalMap, n(_.clearcoatNormalMap, S.clearcoatNormalMapTransform), S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), _.side === ci && S.clearcoatNormalScale.value.negate())), _.dispersion > 0 && (S.dispersion.value = _.dispersion), _.iridescence > 0 && (S.iridescence.value = _.iridescence, S.iridescenceIOR.value = _.iridescenceIOR, S.iridescenceThicknessMinimum.value = _.iridescenceThicknessRange[0], S.iridescenceThicknessMaximum.value = _.iridescenceThicknessRange[1], _.iridescenceMap && (S.iridescenceMap.value = _.iridescenceMap, n(_.iridescenceMap, S.iridescenceMapTransform)), _.iridescenceThicknessMap && (S.iridescenceThicknessMap.value = _.iridescenceThicknessMap, n(_.iridescenceThicknessMap, S.iridescenceThicknessMapTransform))), _.transmission > 0 && (S.transmission.value = _.transmission, S.transmissionSamplerMap.value = L.texture, S.transmissionSamplerSize.value.set(L.width, L.height), _.transmissionMap && (S.transmissionMap.value = _.transmissionMap, n(_.transmissionMap, S.transmissionMapTransform)), S.thickness.value = _.thickness, _.thicknessMap && (S.thicknessMap.value = _.thicknessMap, n(_.thicknessMap, S.thicknessMapTransform)), S.attenuationDistance.value = _.attenuationDistance, S.attenuationColor.value.copy(_.attenuationColor)), _.anisotropy > 0 && (S.anisotropyVector.value.set(_.anisotropy * Math.cos(_.anisotropyRotation), _.anisotropy * Math.sin(_.anisotropyRotation)), _.anisotropyMap && (S.anisotropyMap.value = _.anisotropyMap, n(_.anisotropyMap, S.anisotropyMapTransform))), S.specularIntensity.value = _.specularIntensity, S.specularColor.value.copy(_.specularColor), _.specularColorMap && (S.specularColorMap.value = _.specularColorMap, n(_.specularColorMap, S.specularColorMapTransform)), _.specularIntensityMap && (S.specularIntensityMap.value = _.specularIntensityMap, n(_.specularIntensityMap, S.specularIntensityMapTransform));
  }
  function M(S, _) {
    _.matcap && (S.matcap.value = _.matcap);
  }
  function E(S, _) {
    const L = e.get(_).light;
    S.referencePosition.value.setFromMatrixPosition(L.matrixWorld), S.nearDistance.value = L.shadow.camera.near, S.farDistance.value = L.shadow.camera.far;
  }
  return {
    refreshFogUniforms: a,
    refreshMaterialUniforms: o
  };
}
function Lw(s, e, n, a) {
  let o = {},
    c = {},
    u = [];
  const f = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function m(L, D) {
    const O = D.program;
    a.uniformBlockBinding(L, O);
  }
  function h(L, D) {
    let O = o[L.id];
    O === void 0 && (M(L), O = x(L), o[L.id] = O, L.addEventListener("dispose", S));
    const F = D.program;
    a.updateUBOMapping(L, F);
    const P = e.render.frame;
    c[L.id] !== P && (v(L), c[L.id] = P);
  }
  function x(L) {
    const D = g();
    L.__bindingPointIndex = D;
    const O = s.createBuffer(),
      F = L.__size,
      P = L.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, O), s.bufferData(s.UNIFORM_BUFFER, F, P), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, D, O), O;
  }
  function g() {
    for (let L = 0; L < f; L++) if (u.indexOf(L) === -1) return u.push(L), L;
    return yn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function v(L) {
    const D = o[L.id],
      O = L.uniforms,
      F = L.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, D);
    for (let P = 0, B = O.length; P < B; P++) {
      const q = Array.isArray(O[P]) ? O[P] : [O[P]];
      for (let w = 0, A = q.length; w < A; w++) {
        const H = q[w];
        if (y(H, P, w, F) === !0) {
          const k = H.__offset,
            W = Array.isArray(H.value) ? H.value : [H.value];
          let J = 0;
          for (let ie = 0; ie < W.length; ie++) {
            const I = W[ie],
              Y = E(I);
            typeof I == "number" || typeof I == "boolean" ? (H.__data[0] = I, s.bufferSubData(s.UNIFORM_BUFFER, k + J, H.__data)) : I.isMatrix3 ? (H.__data[0] = I.elements[0], H.__data[1] = I.elements[1], H.__data[2] = I.elements[2], H.__data[3] = 0, H.__data[4] = I.elements[3], H.__data[5] = I.elements[4], H.__data[6] = I.elements[5], H.__data[7] = 0, H.__data[8] = I.elements[6], H.__data[9] = I.elements[7], H.__data[10] = I.elements[8], H.__data[11] = 0) : (I.toArray(H.__data, J), J += Y.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, k, H.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function y(L, D, O, F) {
    const P = L.value,
      B = D + "_" + O;
    if (F[B] === void 0) return typeof P == "number" || typeof P == "boolean" ? F[B] = P : F[B] = P.clone(), !0;
    {
      const q = F[B];
      if (typeof P == "number" || typeof P == "boolean") {
        if (q !== P) return F[B] = P, !0;
      } else if (q.equals(P) === !1) return q.copy(P), !0;
    }
    return !1;
  }
  function M(L) {
    const D = L.uniforms;
    let O = 0;
    const F = 16;
    for (let B = 0, q = D.length; B < q; B++) {
      const w = Array.isArray(D[B]) ? D[B] : [D[B]];
      for (let A = 0, H = w.length; A < H; A++) {
        const k = w[A],
          W = Array.isArray(k.value) ? k.value : [k.value];
        for (let J = 0, ie = W.length; J < ie; J++) {
          const I = W[J],
            Y = E(I),
            Z = O % F,
            pe = Z % Y.boundary,
            Me = Z + pe;
          O += pe, Me !== 0 && F - Me < Y.storage && (O += F - Me), k.__data = new Float32Array(Y.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = O, O += Y.storage;
        }
      }
    }
    const P = O % F;
    return P > 0 && (O += F - P), L.__size = O, L.__cache = {}, this;
  }
  function E(L) {
    const D = {
      boundary: 0,
      storage: 0
    };
    return typeof L == "number" || typeof L == "boolean" ? (D.boundary = 4, D.storage = 4) : L.isVector2 ? (D.boundary = 8, D.storage = 8) : L.isVector3 || L.isColor ? (D.boundary = 16, D.storage = 12) : L.isVector4 ? (D.boundary = 16, D.storage = 16) : L.isMatrix3 ? (D.boundary = 48, D.storage = 48) : L.isMatrix4 ? (D.boundary = 64, D.storage = 64) : L.isTexture ? Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Rt("WebGLRenderer: Unsupported uniform value type.", L), D;
  }
  function S(L) {
    const D = L.target;
    D.removeEventListener("dispose", S);
    const O = u.indexOf(D.__bindingPointIndex);
    u.splice(O, 1), s.deleteBuffer(o[D.id]), delete o[D.id], delete c[D.id];
  }
  function _() {
    for (const L in o) s.deleteBuffer(o[L]);
    u = [], o = {}, c = {};
  }
  return {
    bind: m,
    update: h,
    dispose: _
  };
}
const Uw = new Uint16Array([11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396, 14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770, 14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923, 12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843, 15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132, 11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923, 13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724, 14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491, 14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938, 12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507, 15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031, 10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673, 13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112, 14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201, 14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940, 12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212, 14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923, 10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452, 14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399, 13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808, 14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929, 11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783, 14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827, 9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174, 14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548, 13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483, 14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905, 11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442, 14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731, 9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830, 14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668, 13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150, 14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880, 10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099, 14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604, 14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709, 13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716, 14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863, 11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565, 14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705, 9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365, 14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817, 13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389, 14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867, 11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259, 14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203, 14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922, 13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738, 14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875, 11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762, 14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725, 9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509, 8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656, 15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953, 12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401, 14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812, 10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279, 14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386, 15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066, 12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845, 14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887, 10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771, 14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632, 14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138, 12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929, 15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987, 11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387, 14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244, 14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110, 14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183, 11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495, 15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967, 10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737, 14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565, 14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298, 15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213, 11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015, 15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924, 10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703, 8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423, 7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822, 15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225, 10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469, 15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860, 9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598, 8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256, 7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425, 15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210, 10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894, 14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845, 14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670, 14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940, 15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286, 10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903, 15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198, 14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058, 14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866, 14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470, 15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577, 15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208, 14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206, 14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025, 14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927, 15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162, 15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043, 15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261, 14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178, 14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360, 15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473, 15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690, 15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259, 14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250, 14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135, 14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780, 15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239, 15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143, 15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293, 14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210, 14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128, 15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457, 15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767, 15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278, 14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269, 14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329, 15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572, 15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277, 15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177, 14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293, 14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216, 13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597, 15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446, 15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790, 15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259, 14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250, 14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573, 15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391, 15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280, 15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141, 14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247, 14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498, 15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137, 15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418, 15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733, 14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185, 14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183, 13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547, 15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272, 15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214, 15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971, 14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142, 14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946, 15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663, 15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325, 15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545, 14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988, 14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263, 15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352, 1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264, 3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956, 3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470, 3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701, 2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201, 15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795, 15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140, 15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146, 14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409, 13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33, 15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316, 827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101, 2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640, 2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930, 1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359, 18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318, 326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994, 15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282, 14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981, 13761, 910, 13623, 839]);
let Ma = null;
function Ow() {
  return Ma === null && (Ma = new I3(Uw, 32, 32, O0, ro), Ma.minFilter = Oi, Ma.magFilter = Oi, Ma.wrapS = Ra, Ma.wrapT = Ra, Ma.generateMipmaps = !1, Ma.needsUpdate = !0), Ma;
}
class Pw {
  constructor(e = {}) {
    const {
      canvas: n = jM(),
      context: a = null,
      depth: o = !0,
      stencil: c = !1,
      alpha: u = !1,
      antialias: f = !1,
      premultipliedAlpha: m = !0,
      preserveDrawingBuffer: h = !1,
      powerPreference: x = "default",
      failIfMajorPerformanceCaveat: g = !1,
      reversedDepthBuffer: v = !1
    } = e;
    this.isWebGLRenderer = !0;
    let y;
    if (a !== null) {
      if (typeof WebGLRenderingContext < "u" && a instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      y = a.getContextAttributes().alpha;
    } else y = u;
    const M = new Set([I0, P0, U0]),
      E = new Set([Oa, Zr, gl, xl, N0, L0]),
      S = new Uint32Array(4),
      _ = new Int32Array(4);
    let L = null,
      D = null;
    const O = [],
      F = [];
    this.domElement = n, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = Na, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const P = this;
    let B = !1;
    this._outputColorSpace = yi;
    let q = 0,
      w = 0,
      A = null,
      H = -1,
      k = null;
    const W = new En(),
      J = new En();
    let ie = null;
    const I = new Xt(0);
    let Y = 0,
      Z = n.width,
      pe = n.height,
      Me = 1,
      z = null,
      ee = null;
    const he = new En(0, 0, Z, pe),
      Ee = new En(0, 0, Z, pe);
    let Be = !1;
    const te = new K_();
    let me = !1,
      He = !1;
    const Ge = new Ln(),
      qe = new be(),
      Ke = new En(),
      Te = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
      };
    let Je = !1;
    function st() {
      return A === null ? Me : 1;
    }
    let G = a;
    function nt(C, K) {
      return n.getContext(C, K);
    }
    try {
      const C = {
        alpha: !0,
        depth: o,
        stencil: c,
        antialias: f,
        premultipliedAlpha: m,
        preserveDrawingBuffer: h,
        powerPreference: x,
        failIfMajorPerformanceCaveat: g
      };
      if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${C0}`), n.addEventListener("webglcontextlost", Ne, !1), n.addEventListener("webglcontextrestored", Ae, !1), n.addEventListener("webglcontextcreationerror", je, !1), G === null) {
        const K = "webgl2";
        if (G = nt(K, C), G === null) throw nt(K) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (C) {
      throw C("WebGLRenderer: " + C.message), C;
    }
    let rt, it, Fe, Et, tt, ft, U, T, $, ve, ue, se, Ye, ke, ye, Qe, Re, oe, Le, Ve, _e, ze, V, Pe;
    function we() {
      rt = new kT(G), rt.init(), ze = new Tw(G, rt), it = new OT(G, rt, e, ze), Fe = new Mw(G, rt), it.reversedDepthBuffer && v && Fe.buffers.depth.setReversed(!0), Et = new WT(G), tt = new uw(), ft = new Ew(G, rt, Fe, tt, it, ze, Et), U = new IT(P), T = new VT(P), $ = new K3(G), V = new LT(G, $), ve = new jT(G, $, Et, V), ue = new qT(G, ve, $, Et), Le = new YT(G, it, ft), Qe = new PT(tt), se = new cw(P, U, T, rt, it, V, Qe), Ye = new Nw(P, tt), ke = new dw(), ye = new vw(rt), oe = new NT(P, U, T, Fe, ue, y, m), Re = new bw(P, ue, it), Pe = new Lw(G, Et, it, Fe), Ve = new UT(G, rt, Et), _e = new XT(G, rt, Et), Et.programs = se.programs, P.capabilities = it, P.extensions = rt, P.properties = tt, P.renderLists = ke, P.shadowMap = Re, P.state = Fe, P.info = Et;
    }
    we();
    const Ie = new Cw(P, G);
    this.xr = Ie, this.getContext = function () {
      return G;
    }, this.getContextAttributes = function () {
      return G.getContextAttributes();
    }, this.forceContextLoss = function () {
      const C = rt.get("WEBGL_lose_context");
      C && C.loseContext();
    }, this.forceContextRestore = function () {
      const C = rt.get("WEBGL_lose_context");
      C && C.restoreContext();
    }, this.getPixelRatio = function () {
      return Me;
    }, this.setPixelRatio = function (C) {
      C !== void 0 && (Me = C, this.setSize(Z, pe, !1));
    }, this.getSize = function (C) {
      return C.set(Z, pe);
    }, this.setSize = function (C, K, ce = !0) {
      if (Ie.isPresenting) {
        Rt("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Z = C, pe = K, n.width = Math.floor(C * Me), n.height = Math.floor(K * Me), ce === !0 && (n.style.width = C + "px", n.style.height = K + "px"), this.setViewport(0, 0, C, K);
    }, this.getDrawingBufferSize = function (C) {
      return C.set(Z * Me, pe * Me).floor();
    }, this.setDrawingBufferSize = function (C, K, ce) {
      Z = C, pe = K, Me = ce, n.width = Math.floor(C * ce), n.height = Math.floor(K * ce), this.setViewport(0, 0, C, K);
    }, this.getCurrentViewport = function (C) {
      return C.copy(W);
    }, this.getViewport = function (C) {
      return C.copy(he);
    }, this.setViewport = function (C, K, ce, le) {
      C.isVector4 ? he.set(C.x, C.y, C.z, C.w) : he.set(C, K, ce, le), Fe.viewport(W.copy(he).multiplyScalar(Me).round());
    }, this.getScissor = function (C) {
      return C.copy(Ee);
    }, this.setScissor = function (C, K, ce, le) {
      C.isVector4 ? Ee.set(C.x, C.y, C.z, C.w) : Ee.set(C, K, ce, le), Fe.scissor(J.copy(Ee).multiplyScalar(Me).round());
    }, this.getScissorTest = function () {
      return Be;
    }, this.setScissorTest = function (C) {
      Fe.setScissorTest(Be = C);
    }, this.setOpaqueSort = function (C) {
      z = C;
    }, this.setTransparentSort = function (C) {
      ee = C;
    }, this.getClearColor = function (C) {
      return C.copy(oe.getClearColor());
    }, this.setClearColor = function () {
      oe.setClearColor(...arguments);
    }, this.getClearAlpha = function () {
      return oe.getClearAlpha();
    }, this.setClearAlpha = function () {
      oe.setClearAlpha(...arguments);
    }, this.clear = function (C = !0, K = !0, ce = !0) {
      let le = 0;
      if (C) {
        let ne = !1;
        if (A !== null) {
          const Xe = A.texture.format;
          ne = M.has(Xe);
        }
        if (ne) {
          const Xe = A.texture.type,
            We = E.has(Xe),
            $e = oe.getClearColor(),
            at = oe.getClearAlpha(),
            yt = $e.r,
            Mt = $e.g,
            ht = $e.b;
          We ? (S[0] = yt, S[1] = Mt, S[2] = ht, S[3] = at, G.clearBufferuiv(G.COLOR, 0, S)) : (_[0] = yt, _[1] = Mt, _[2] = ht, _[3] = at, G.clearBufferiv(G.COLOR, 0, _));
        } else le |= G.COLOR_BUFFER_BIT;
      }
      K && (le |= G.DEPTH_BUFFER_BIT), ce && (le |= G.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), G.clear(le);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      n.removeEventListener("webglcontextlost", Ne, !1), n.removeEventListener("webglcontextrestored", Ae, !1), n.removeEventListener("webglcontextcreationerror", je, !1), oe.dispose(), ke.dispose(), ye.dispose(), tt.dispose(), U.dispose(), T.dispose(), ue.dispose(), V.dispose(), Pe.dispose(), se.dispose(), Ie.dispose(), Ie.removeEventListener("sessionstart", Un), Ie.removeEventListener("sessionend", bn), Tt.stop();
    };
    function Ne(C) {
      C.preventDefault(), yu("WebGLRenderer: Context Lost."), B = !0;
    }
    function Ae() {
      yu("WebGLRenderer: Context Restored."), B = !1;
      const C = Et.autoReset,
        K = Re.enabled,
        ce = Re.autoUpdate,
        le = Re.needsUpdate,
        ne = Re.type;
      we(), Et.autoReset = C, Re.enabled = K, Re.autoUpdate = ce, Re.needsUpdate = le, Re.type = ne;
    }
    function je(C) {
      yn("WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
    }
    function ct(C) {
      const K = C.target;
      K.removeEventListener("dispose", ct), ut(K);
    }
    function ut(C) {
      mt(C), tt.remove(C);
    }
    function mt(C) {
      const K = tt.get(C).programs;
      K !== void 0 && (K.forEach(function (ce) {
        se.releaseProgram(ce);
      }), C.isShaderMaterial && se.releaseShaderCache(C));
    }
    this.renderBufferDirect = function (C, K, ce, le, ne, Xe) {
      K === null && (K = Te);
      const We = ne.isMesh && ne.matrixWorld.determinant() < 0,
        $e = qt(C, K, ce, le, ne);
      Fe.setMaterial(le, We);
      let at = ce.index,
        yt = 1;
      if (le.wireframe === !0) {
        if (at = ve.getWireframeAttribute(ce), at === void 0) return;
        yt = 2;
      }
      const Mt = ce.drawRange,
        ht = ce.attributes.position;
      let Dt = Mt.start * yt,
        Yt = (Mt.start + Mt.count) * yt;
      Xe !== null && (Dt = Math.max(Dt, Xe.start * yt), Yt = Math.min(Yt, (Xe.start + Xe.count) * yt)), at !== null ? (Dt = Math.max(Dt, 0), Yt = Math.min(Yt, at.count)) : ht != null && (Dt = Math.max(Dt, 0), Yt = Math.min(Yt, ht.count));
      const Zt = Yt - Dt;
      if (Zt < 0 || Zt === 1 / 0) return;
      V.setup(ne, le, $e, ce, at);
      let Vt,
        en = Ve;
      if (at !== null && (Vt = $.get(at), en = _e, en.setIndex(Vt)), ne.isMesh) le.wireframe === !0 ? (Fe.setLineWidth(le.wireframeLinewidth * st()), en.setMode(G.LINES)) : en.setMode(G.TRIANGLES);else if (ne.isLine) {
        let vt = le.linewidth;
        vt === void 0 && (vt = 1), Fe.setLineWidth(vt * st()), ne.isLineSegments ? en.setMode(G.LINES) : ne.isLineLoop ? en.setMode(G.LINE_LOOP) : en.setMode(G.LINE_STRIP);
      } else ne.isPoints ? en.setMode(G.POINTS) : ne.isSprite && en.setMode(G.TRIANGLES);
      if (ne.isBatchedMesh) {
        if (ne._multiDrawInstances !== null) bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), en.renderMultiDrawInstances(ne._multiDrawStarts, ne._multiDrawCounts, ne._multiDrawCount, ne._multiDrawInstances);else if (rt.get("WEBGL_multi_draw")) en.renderMultiDraw(ne._multiDrawStarts, ne._multiDrawCounts, ne._multiDrawCount);else {
          const vt = ne._multiDrawStarts,
            cn = ne._multiDrawCounts,
            kt = ne._multiDrawCount,
            Bn = at ? $.get(at).bytesPerElement : 1,
            Fa = tt.get(le).currentProgram.getUniforms();
          for (let dn = 0; dn < kt; dn++) Fa.setValue(G, "_gl_DrawID", dn), en.render(vt[dn] / Bn, cn[dn]);
        }
      } else if (ne.isInstancedMesh) en.renderInstances(Dt, Zt, ne.count);else if (ce.isInstancedBufferGeometry) {
        const vt = ce._maxInstanceCount !== void 0 ? ce._maxInstanceCount : 1 / 0,
          cn = Math.min(ce.instanceCount, vt);
        en.renderInstances(Dt, Zt, cn);
      } else en.render(Dt, Zt);
    };
    function Gt(C, K, ce) {
      C.transparent === !0 && C.side === wa && C.forceSinglePass === !1 ? (C.side = ci, C.needsUpdate = !0, xt(C, K, ce), C.side = gr, C.needsUpdate = !0, xt(C, K, ce), C.side = wa) : xt(C, K, ce);
    }
    this.compile = function (C, K, ce = null) {
      ce === null && (ce = C), D = ye.get(ce), D.init(K), F.push(D), ce.traverseVisible(function (ne) {
        ne.isLight && ne.layers.test(K.layers) && (D.pushLight(ne), ne.castShadow && D.pushShadow(ne));
      }), C !== ce && C.traverseVisible(function (ne) {
        ne.isLight && ne.layers.test(K.layers) && (D.pushLight(ne), ne.castShadow && D.pushShadow(ne));
      }), D.setupLights();
      const le = new Set();
      return C.traverse(function (ne) {
        if (!(ne.isMesh || ne.isPoints || ne.isLine || ne.isSprite)) return;
        const Xe = ne.material;
        if (Xe) if (Array.isArray(Xe)) for (let We = 0; We < Xe.length; We++) {
          const $e = Xe[We];
          Gt($e, ce, ne), le.add($e);
        } else Gt(Xe, ce, ne), le.add(Xe);
      }), D = F.pop(), le;
    }, this.compileAsync = function (C, K, ce = null) {
      const le = this.compile(C, K, ce);
      return new Promise(ne => {
        function Xe() {
          if (le.forEach(function (We) {
            tt.get(We).currentProgram.isReady() && le.delete(We);
          }), le.size === 0) {
            ne(C);
            return;
          }
          setTimeout(Xe, 10);
        }
        rt.get("KHR_parallel_shader_compile") !== null ? Xe() : setTimeout(Xe, 10);
      });
    };
    let gt = null;
    function Fn(C) {
      gt && gt(C);
    }
    function Un() {
      Tt.stop();
    }
    function bn() {
      Tt.start();
    }
    const Tt = new $_();
    Tt.setAnimationLoop(Fn), typeof self < "u" && Tt.setContext(self), this.setAnimationLoop = function (C) {
      gt = C, Ie.setAnimationLoop(C), C === null ? Tt.stop() : Tt.start();
    }, Ie.addEventListener("sessionstart", Un), Ie.addEventListener("sessionend", bn), this.render = function (C, K) {
      if (K !== void 0 && K.isCamera !== !0) {
        yn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (B === !0) return;
      if (C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), K.parent === null && K.matrixWorldAutoUpdate === !0 && K.updateMatrixWorld(), Ie.enabled === !0 && Ie.isPresenting === !0 && (Ie.cameraAutoUpdate === !0 && Ie.updateCamera(K), K = Ie.getCamera()), C.isScene === !0 && C.onBeforeRender(P, C, K, A), D = ye.get(C, F.length), D.init(K), F.push(D), Ge.multiplyMatrices(K.projectionMatrix, K.matrixWorldInverse), te.setFromProjectionMatrix(Ge, Ji, K.reversedDepth), He = this.localClippingEnabled, me = Qe.init(this.clippingPlanes, He), L = ke.get(C, O.length), L.init(), O.push(L), Ie.enabled === !0 && Ie.isPresenting === !0) {
        const Xe = P.xr.getDepthSensingMesh();
        Xe !== null && j(Xe, K, -1 / 0, P.sortObjects);
      }
      j(C, K, 0, P.sortObjects), L.finish(), P.sortObjects === !0 && L.sort(z, ee), Je = Ie.enabled === !1 || Ie.isPresenting === !1 || Ie.hasDepthSensing() === !1, Je && oe.addToRenderList(L, C), this.info.render.frame++, me === !0 && Qe.beginShadows();
      const ce = D.state.shadowsArray;
      Re.render(ce, C, K), me === !0 && Qe.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const le = L.opaque,
        ne = L.transmissive;
      if (D.setupLights(), K.isArrayCamera) {
        const Xe = K.cameras;
        if (ne.length > 0) for (let We = 0, $e = Xe.length; We < $e; We++) {
          const at = Xe[We];
          De(le, ne, C, at);
        }
        Je && oe.render(C);
        for (let We = 0, $e = Xe.length; We < $e; We++) {
          const at = Xe[We];
          xe(L, C, at, at.viewport);
        }
      } else ne.length > 0 && De(le, ne, C, K), Je && oe.render(C), xe(L, C, K);
      A !== null && w === 0 && (ft.updateMultisampleRenderTarget(A), ft.updateRenderTargetMipmap(A)), C.isScene === !0 && C.onAfterRender(P, C, K), V.resetDefaultState(), H = -1, k = null, F.pop(), F.length > 0 ? (D = F[F.length - 1], me === !0 && Qe.setGlobalState(P.clippingPlanes, D.state.camera)) : D = null, O.pop(), O.length > 0 ? L = O[O.length - 1] : L = null;
    };
    function j(C, K, ce, le) {
      if (C.visible === !1) return;
      if (C.layers.test(K.layers)) {
        if (C.isGroup) ce = C.renderOrder;else if (C.isLOD) C.autoUpdate === !0 && C.update(K);else if (C.isLight) D.pushLight(C), C.castShadow && D.pushShadow(C);else if (C.isSprite) {
          if (!C.frustumCulled || te.intersectsSprite(C)) {
            le && Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);
            const We = ue.update(C),
              $e = C.material;
            $e.visible && L.push(C, We, $e, ce, Ke.z, null);
          }
        } else if ((C.isMesh || C.isLine || C.isPoints) && (!C.frustumCulled || te.intersectsObject(C))) {
          const We = ue.update(C),
            $e = C.material;
          if (le && (C.boundingSphere !== void 0 ? (C.boundingSphere === null && C.computeBoundingSphere(), Ke.copy(C.boundingSphere.center)) : (We.boundingSphere === null && We.computeBoundingSphere(), Ke.copy(We.boundingSphere.center)), Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)), Array.isArray($e)) {
            const at = We.groups;
            for (let yt = 0, Mt = at.length; yt < Mt; yt++) {
              const ht = at[yt],
                Dt = $e[ht.materialIndex];
              Dt && Dt.visible && L.push(C, We, Dt, ce, Ke.z, ht);
            }
          } else $e.visible && L.push(C, We, $e, ce, Ke.z, null);
        }
      }
      const Xe = C.children;
      for (let We = 0, $e = Xe.length; We < $e; We++) j(Xe[We], K, ce, le);
    }
    function xe(C, K, ce, le) {
      const {
        opaque: ne,
        transmissive: Xe,
        transparent: We
      } = C;
      D.setupLightsView(ce), me === !0 && Qe.setGlobalState(P.clippingPlanes, ce), le && Fe.viewport(W.copy(le)), ne.length > 0 && Ze(ne, K, ce), Xe.length > 0 && Ze(Xe, K, ce), We.length > 0 && Ze(We, K, ce), Fe.buffers.depth.setTest(!0), Fe.buffers.depth.setMask(!0), Fe.buffers.color.setMask(!0), Fe.setPolygonOffset(!1);
    }
    function De(C, K, ce, le) {
      if ((ce.isScene === !0 ? ce.overrideMaterial : null) !== null) return;
      D.state.transmissionRenderTarget[le.id] === void 0 && (D.state.transmissionRenderTarget[le.id] = new Kr(1, 1, {
        generateMipmaps: !0,
        type: rt.has("EXT_color_buffer_half_float") || rt.has("EXT_color_buffer_float") ? ro : Oa,
        minFilter: Wr,
        samples: 4,
        stencilBuffer: c,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Jt.workingColorSpace
      }));
      const Xe = D.state.transmissionRenderTarget[le.id],
        We = le.viewport || W;
      Xe.setSize(We.z * P.transmissionResolutionScale, We.w * P.transmissionResolutionScale);
      const $e = P.getRenderTarget(),
        at = P.getActiveCubeFace(),
        yt = P.getActiveMipmapLevel();
      P.setRenderTarget(Xe), P.getClearColor(I), Y = P.getClearAlpha(), Y < 1 && P.setClearColor(16777215, .5), P.clear(), Je && oe.render(ce);
      const Mt = P.toneMapping;
      P.toneMapping = Na;
      const ht = le.viewport;
      if (le.viewport !== void 0 && (le.viewport = void 0), D.setupLightsView(le), me === !0 && Qe.setGlobalState(P.clippingPlanes, le), Ze(C, ce, le), ft.updateMultisampleRenderTarget(Xe), ft.updateRenderTargetMipmap(Xe), rt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Dt = !1;
        for (let Yt = 0, Zt = K.length; Yt < Zt; Yt++) {
          const Vt = K[Yt],
            {
              object: en,
              geometry: vt,
              material: cn,
              group: kt
            } = Vt;
          if (cn.side === wa && en.layers.test(le.layers)) {
            const Bn = cn.side;
            cn.side = ci, cn.needsUpdate = !0, lt(en, ce, le, vt, cn, kt), cn.side = Bn, cn.needsUpdate = !0, Dt = !0;
          }
        }
        Dt === !0 && (ft.updateMultisampleRenderTarget(Xe), ft.updateRenderTargetMipmap(Xe));
      }
      P.setRenderTarget($e, at, yt), P.setClearColor(I, Y), ht !== void 0 && (le.viewport = ht), P.toneMapping = Mt;
    }
    function Ze(C, K, ce) {
      const le = K.isScene === !0 ? K.overrideMaterial : null;
      for (let ne = 0, Xe = C.length; ne < Xe; ne++) {
        const We = C[ne],
          {
            object: $e,
            geometry: at,
            group: yt
          } = We;
        let Mt = We.material;
        Mt.allowOverride === !0 && le !== null && (Mt = le), $e.layers.test(ce.layers) && lt($e, K, ce, at, Mt, yt);
      }
    }
    function lt(C, K, ce, le, ne, Xe) {
      C.onBeforeRender(P, K, ce, le, ne, Xe), C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), ne.onBeforeRender(P, K, ce, le, C, Xe), ne.transparent === !0 && ne.side === wa && ne.forceSinglePass === !1 ? (ne.side = ci, ne.needsUpdate = !0, P.renderBufferDirect(ce, K, le, ne, C, Xe), ne.side = gr, ne.needsUpdate = !0, P.renderBufferDirect(ce, K, le, ne, C, Xe), ne.side = wa) : P.renderBufferDirect(ce, K, le, ne, C, Xe), C.onAfterRender(P, K, ce, le, ne, Xe);
    }
    function xt(C, K, ce) {
      K.isScene !== !0 && (K = Te);
      const le = tt.get(C),
        ne = D.state.lights,
        Xe = D.state.shadowsArray,
        We = ne.state.version,
        $e = se.getParameters(C, ne.state, Xe, K, ce),
        at = se.getProgramCacheKey($e);
      let yt = le.programs;
      le.environment = C.isMeshStandardMaterial ? K.environment : null, le.fog = K.fog, le.envMap = (C.isMeshStandardMaterial ? T : U).get(C.envMap || le.environment), le.envMapRotation = le.environment !== null && C.envMap === null ? K.environmentRotation : C.envMapRotation, yt === void 0 && (C.addEventListener("dispose", ct), yt = new Map(), le.programs = yt);
      let Mt = yt.get(at);
      if (Mt !== void 0) {
        if (le.currentProgram === Mt && le.lightsStateVersion === We) return Ut(C, $e), Mt;
      } else $e.uniforms = se.getUniforms(C), C.onBeforeCompile($e, P), Mt = se.acquireProgram($e, at), yt.set(at, Mt), le.uniforms = $e.uniforms;
      const ht = le.uniforms;
      return (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === !0) && (ht.clippingPlanes = Qe.uniform), Ut(C, $e), le.needsLights = Pt(C), le.lightsStateVersion = We, le.needsLights && (ht.ambientLightColor.value = ne.state.ambient, ht.lightProbe.value = ne.state.probe, ht.directionalLights.value = ne.state.directional, ht.directionalLightShadows.value = ne.state.directionalShadow, ht.spotLights.value = ne.state.spot, ht.spotLightShadows.value = ne.state.spotShadow, ht.rectAreaLights.value = ne.state.rectArea, ht.ltc_1.value = ne.state.rectAreaLTC1, ht.ltc_2.value = ne.state.rectAreaLTC2, ht.pointLights.value = ne.state.point, ht.pointLightShadows.value = ne.state.pointShadow, ht.hemisphereLights.value = ne.state.hemi, ht.directionalShadowMap.value = ne.state.directionalShadowMap, ht.directionalShadowMatrix.value = ne.state.directionalShadowMatrix, ht.spotShadowMap.value = ne.state.spotShadowMap, ht.spotLightMatrix.value = ne.state.spotLightMatrix, ht.spotLightMap.value = ne.state.spotLightMap, ht.pointShadowMap.value = ne.state.pointShadowMap, ht.pointShadowMatrix.value = ne.state.pointShadowMatrix), le.currentProgram = Mt, le.uniformsList = null, Mt;
    }
    function bt(C) {
      if (C.uniformsList === null) {
        const K = C.currentProgram.getUniforms();
        C.uniformsList = hu.seqWithValue(K.seq, C.uniforms);
      }
      return C.uniformsList;
    }
    function Ut(C, K) {
      const ce = tt.get(C);
      ce.outputColorSpace = K.outputColorSpace, ce.batching = K.batching, ce.batchingColor = K.batchingColor, ce.instancing = K.instancing, ce.instancingColor = K.instancingColor, ce.instancingMorph = K.instancingMorph, ce.skinning = K.skinning, ce.morphTargets = K.morphTargets, ce.morphNormals = K.morphNormals, ce.morphColors = K.morphColors, ce.morphTargetsCount = K.morphTargetsCount, ce.numClippingPlanes = K.numClippingPlanes, ce.numIntersection = K.numClipIntersection, ce.vertexAlphas = K.vertexAlphas, ce.vertexTangents = K.vertexTangents, ce.toneMapping = K.toneMapping;
    }
    function qt(C, K, ce, le, ne) {
      K.isScene !== !0 && (K = Te), ft.resetTextureUnits();
      const Xe = K.fog,
        We = le.isMeshStandardMaterial ? K.environment : null,
        $e = A === null ? P.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : io,
        at = (le.isMeshStandardMaterial ? T : U).get(le.envMap || We),
        yt = le.vertexColors === !0 && !!ce.attributes.color && ce.attributes.color.itemSize === 4,
        Mt = !!ce.attributes.tangent && (!!le.normalMap || le.anisotropy > 0),
        ht = !!ce.morphAttributes.position,
        Dt = !!ce.morphAttributes.normal,
        Yt = !!ce.morphAttributes.color;
      let Zt = Na;
      le.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Zt = P.toneMapping);
      const Vt = ce.morphAttributes.position || ce.morphAttributes.normal || ce.morphAttributes.color,
        en = Vt !== void 0 ? Vt.length : 0,
        vt = tt.get(le),
        cn = D.state.lights;
      if (me === !0 && (He === !0 || C !== k)) {
        const Gn = C === k && le.id === H;
        Qe.setState(le, C, Gn);
      }
      let kt = !1;
      le.version === vt.__version ? (vt.needsLights && vt.lightsStateVersion !== cn.state.version || vt.outputColorSpace !== $e || ne.isBatchedMesh && vt.batching === !1 || !ne.isBatchedMesh && vt.batching === !0 || ne.isBatchedMesh && vt.batchingColor === !0 && ne.colorTexture === null || ne.isBatchedMesh && vt.batchingColor === !1 && ne.colorTexture !== null || ne.isInstancedMesh && vt.instancing === !1 || !ne.isInstancedMesh && vt.instancing === !0 || ne.isSkinnedMesh && vt.skinning === !1 || !ne.isSkinnedMesh && vt.skinning === !0 || ne.isInstancedMesh && vt.instancingColor === !0 && ne.instanceColor === null || ne.isInstancedMesh && vt.instancingColor === !1 && ne.instanceColor !== null || ne.isInstancedMesh && vt.instancingMorph === !0 && ne.morphTexture === null || ne.isInstancedMesh && vt.instancingMorph === !1 && ne.morphTexture !== null || vt.envMap !== at || le.fog === !0 && vt.fog !== Xe || vt.numClippingPlanes !== void 0 && (vt.numClippingPlanes !== Qe.numPlanes || vt.numIntersection !== Qe.numIntersection) || vt.vertexAlphas !== yt || vt.vertexTangents !== Mt || vt.morphTargets !== ht || vt.morphNormals !== Dt || vt.morphColors !== Yt || vt.toneMapping !== Zt || vt.morphTargetsCount !== en) && (kt = !0) : (kt = !0, vt.__version = le.version);
      let Bn = vt.currentProgram;
      kt === !0 && (Bn = xt(le, K, ne));
      let Fa = !1,
        dn = !1,
        $i = !1;
      const hn = Bn.getUniforms(),
        Hn = vt.uniforms;
      if (Fe.useProgram(Bn.program) && (Fa = !0, dn = !0, $i = !0), le.id !== H && (H = le.id, dn = !0), Fa || k !== C) {
        Fe.buffers.depth.getReversed() && C.reversedDepth !== !0 && (C._reversedDepth = !0, C.updateProjectionMatrix()), hn.setValue(G, "projectionMatrix", C.projectionMatrix), hn.setValue(G, "viewMatrix", C.matrixWorldInverse);
        const jn = hn.map.cameraPosition;
        jn !== void 0 && jn.setValue(G, qe.setFromMatrixPosition(C.matrixWorld)), it.logarithmicDepthBuffer && hn.setValue(G, "logDepthBufFC", 2 / (Math.log(C.far + 1) / Math.LN2)), (le.isMeshPhongMaterial || le.isMeshToonMaterial || le.isMeshLambertMaterial || le.isMeshBasicMaterial || le.isMeshStandardMaterial || le.isShaderMaterial) && hn.setValue(G, "isOrthographic", C.isOrthographicCamera === !0), k !== C && (k = C, dn = !0, $i = !0);
      }
      if (ne.isSkinnedMesh) {
        hn.setOptional(G, ne, "bindMatrix"), hn.setOptional(G, ne, "bindMatrixInverse");
        const Gn = ne.skeleton;
        Gn && (Gn.boneTexture === null && Gn.computeBoneTexture(), hn.setValue(G, "boneTexture", Gn.boneTexture, ft));
      }
      ne.isBatchedMesh && (hn.setOptional(G, ne, "batchingTexture"), hn.setValue(G, "batchingTexture", ne._matricesTexture, ft), hn.setOptional(G, ne, "batchingIdTexture"), hn.setValue(G, "batchingIdTexture", ne._indirectTexture, ft), hn.setOptional(G, ne, "batchingColorTexture"), ne._colorsTexture !== null && hn.setValue(G, "batchingColorTexture", ne._colorsTexture, ft));
      const On = ce.morphAttributes;
      if ((On.position !== void 0 || On.normal !== void 0 || On.color !== void 0) && Le.update(ne, ce, Bn), (dn || vt.receiveShadow !== ne.receiveShadow) && (vt.receiveShadow = ne.receiveShadow, hn.setValue(G, "receiveShadow", ne.receiveShadow)), le.isMeshGouraudMaterial && le.envMap !== null && (Hn.envMap.value = at, Hn.flipEnvMap.value = at.isCubeTexture && at.isRenderTargetTexture === !1 ? -1 : 1), le.isMeshStandardMaterial && le.envMap === null && K.environment !== null && (Hn.envMapIntensity.value = K.environmentIntensity), Hn.dfgLUT !== void 0 && (Hn.dfgLUT.value = Ow()), dn && (hn.setValue(G, "toneMappingExposure", P.toneMappingExposure), vt.needsLights && _t(Hn, $i), Xe && le.fog === !0 && Ye.refreshFogUniforms(Hn, Xe), Ye.refreshMaterialUniforms(Hn, le, Me, pe, D.state.transmissionRenderTarget[C.id]), hu.upload(G, bt(vt), Hn, ft)), le.isShaderMaterial && le.uniformsNeedUpdate === !0 && (hu.upload(G, bt(vt), Hn, ft), le.uniformsNeedUpdate = !1), le.isSpriteMaterial && hn.setValue(G, "center", ne.center), hn.setValue(G, "modelViewMatrix", ne.modelViewMatrix), hn.setValue(G, "normalMatrix", ne.normalMatrix), hn.setValue(G, "modelMatrix", ne.matrixWorld), le.isShaderMaterial || le.isRawShaderMaterial) {
        const Gn = le.uniformsGroups;
        for (let jn = 0, Xi = Gn.length; jn < Xi; jn++) {
          const ea = Gn[jn];
          Pe.update(ea, Bn), Pe.bind(ea, Bn);
        }
      }
      return Bn;
    }
    function _t(C, K) {
      C.ambientLightColor.needsUpdate = K, C.lightProbe.needsUpdate = K, C.directionalLights.needsUpdate = K, C.directionalLightShadows.needsUpdate = K, C.pointLights.needsUpdate = K, C.pointLightShadows.needsUpdate = K, C.spotLights.needsUpdate = K, C.spotLightShadows.needsUpdate = K, C.rectAreaLights.needsUpdate = K, C.hemisphereLights.needsUpdate = K;
    }
    function Pt(C) {
      return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === !0;
    }
    this.getActiveCubeFace = function () {
      return q;
    }, this.getActiveMipmapLevel = function () {
      return w;
    }, this.getRenderTarget = function () {
      return A;
    }, this.setRenderTargetTextures = function (C, K, ce) {
      const le = tt.get(C);
      le.__autoAllocateDepthBuffer = C.resolveDepthBuffer === !1, le.__autoAllocateDepthBuffer === !1 && (le.__useRenderToTexture = !1), tt.get(C.texture).__webglTexture = K, tt.get(C.depthTexture).__webglTexture = le.__autoAllocateDepthBuffer ? void 0 : ce, le.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function (C, K) {
      const ce = tt.get(C);
      ce.__webglFramebuffer = K, ce.__useDefaultFramebuffer = K === void 0;
    };
    const fn = G.createFramebuffer();
    this.setRenderTarget = function (C, K = 0, ce = 0) {
      A = C, q = K, w = ce;
      let le = !0,
        ne = null,
        Xe = !1,
        We = !1;
      if (C) {
        const at = tt.get(C);
        if (at.__useDefaultFramebuffer !== void 0) Fe.bindFramebuffer(G.FRAMEBUFFER, null), le = !1;else if (at.__webglFramebuffer === void 0) ft.setupRenderTarget(C);else if (at.__hasExternalTextures) ft.rebindTextures(C, tt.get(C.texture).__webglTexture, tt.get(C.depthTexture).__webglTexture);else if (C.depthBuffer) {
          const ht = C.depthTexture;
          if (at.__boundDepthTexture !== ht) {
            if (ht !== null && tt.has(ht) && (C.width !== ht.image.width || C.height !== ht.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            ft.setupDepthRenderbuffer(C);
          }
        }
        const yt = C.texture;
        (yt.isData3DTexture || yt.isDataArrayTexture || yt.isCompressedArrayTexture) && (We = !0);
        const Mt = tt.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget ? (Array.isArray(Mt[K]) ? ne = Mt[K][ce] : ne = Mt[K], Xe = !0) : C.samples > 0 && ft.useMultisampledRTT(C) === !1 ? ne = tt.get(C).__webglMultisampledFramebuffer : Array.isArray(Mt) ? ne = Mt[ce] : ne = Mt, W.copy(C.viewport), J.copy(C.scissor), ie = C.scissorTest;
      } else W.copy(he).multiplyScalar(Me).floor(), J.copy(Ee).multiplyScalar(Me).floor(), ie = Be;
      if (ce !== 0 && (ne = fn), Fe.bindFramebuffer(G.FRAMEBUFFER, ne) && le && Fe.drawBuffers(C, ne), Fe.viewport(W), Fe.scissor(J), Fe.setScissorTest(ie), Xe) {
        const at = tt.get(C.texture);
        G.framebufferTexture2D(G.FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_CUBE_MAP_POSITIVE_X + K, at.__webglTexture, ce);
      } else if (We) {
        const at = K;
        for (let yt = 0; yt < C.textures.length; yt++) {
          const Mt = tt.get(C.textures[yt]);
          G.framebufferTextureLayer(G.FRAMEBUFFER, G.COLOR_ATTACHMENT0 + yt, Mt.__webglTexture, ce, at);
        }
      } else if (C !== null && ce !== 0) {
        const at = tt.get(C.texture);
        G.framebufferTexture2D(G.FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, at.__webglTexture, ce);
      }
      H = -1;
    }, this.readRenderTargetPixels = function (C, K, ce, le, ne, Xe, We, $e = 0) {
      if (!(C && C.isWebGLRenderTarget)) {
        yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let at = tt.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && We !== void 0 && (at = at[We]), at) {
        Fe.bindFramebuffer(G.FRAMEBUFFER, at);
        try {
          const yt = C.textures[$e],
            Mt = yt.format,
            ht = yt.type;
          if (!it.textureFormatReadable(Mt)) {
            yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!it.textureTypeReadable(ht)) {
            yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          K >= 0 && K <= C.width - le && ce >= 0 && ce <= C.height - ne && (C.textures.length > 1 && G.readBuffer(G.COLOR_ATTACHMENT0 + $e), G.readPixels(K, ce, le, ne, ze.convert(Mt), ze.convert(ht), Xe));
        } finally {
          const yt = A !== null ? tt.get(A).__webglFramebuffer : null;
          Fe.bindFramebuffer(G.FRAMEBUFFER, yt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function (C, K, ce, le, ne, Xe, We, $e = 0) {
      if (!(C && C.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let at = tt.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && We !== void 0 && (at = at[We]), at) if (K >= 0 && K <= C.width - le && ce >= 0 && ce <= C.height - ne) {
        Fe.bindFramebuffer(G.FRAMEBUFFER, at);
        const yt = C.textures[$e],
          Mt = yt.format,
          ht = yt.type;
        if (!it.textureFormatReadable(Mt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!it.textureTypeReadable(ht)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Dt = G.createBuffer();
        G.bindBuffer(G.PIXEL_PACK_BUFFER, Dt), G.bufferData(G.PIXEL_PACK_BUFFER, Xe.byteLength, G.STREAM_READ), C.textures.length > 1 && G.readBuffer(G.COLOR_ATTACHMENT0 + $e), G.readPixels(K, ce, le, ne, ze.convert(Mt), ze.convert(ht), 0);
        const Yt = A !== null ? tt.get(A).__webglFramebuffer : null;
        Fe.bindFramebuffer(G.FRAMEBUFFER, Yt);
        const Zt = G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return G.flush(), await XM(G, Zt, 4), G.bindBuffer(G.PIXEL_PACK_BUFFER, Dt), G.getBufferSubData(G.PIXEL_PACK_BUFFER, 0, Xe), G.deleteBuffer(Dt), G.deleteSync(Zt), Xe;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function (C, K = null, ce = 0) {
      const le = Math.pow(2, -ce),
        ne = Math.floor(C.image.width * le),
        Xe = Math.floor(C.image.height * le),
        We = K !== null ? K.x : 0,
        $e = K !== null ? K.y : 0;
      ft.setTexture2D(C, 0), G.copyTexSubImage2D(G.TEXTURE_2D, ce, 0, 0, We, $e, ne, Xe), Fe.unbindTexture();
    };
    const gn = G.createFramebuffer(),
      Tn = G.createFramebuffer();
    this.copyTextureToTexture = function (C, K, ce = null, le = null, ne = 0, Xe = null) {
      Xe === null && (ne !== 0 ? (bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Xe = ne, ne = 0) : Xe = 0);
      let We, $e, at, yt, Mt, ht, Dt, Yt, Zt;
      const Vt = C.isCompressedTexture ? C.mipmaps[Xe] : C.image;
      if (ce !== null) We = ce.max.x - ce.min.x, $e = ce.max.y - ce.min.y, at = ce.isBox3 ? ce.max.z - ce.min.z : 1, yt = ce.min.x, Mt = ce.min.y, ht = ce.isBox3 ? ce.min.z : 0;else {
        const On = Math.pow(2, -ne);
        We = Math.floor(Vt.width * On), $e = Math.floor(Vt.height * On), C.isDataArrayTexture ? at = Vt.depth : C.isData3DTexture ? at = Math.floor(Vt.depth * On) : at = 1, yt = 0, Mt = 0, ht = 0;
      }
      le !== null ? (Dt = le.x, Yt = le.y, Zt = le.z) : (Dt = 0, Yt = 0, Zt = 0);
      const en = ze.convert(K.format),
        vt = ze.convert(K.type);
      let cn;
      K.isData3DTexture ? (ft.setTexture3D(K, 0), cn = G.TEXTURE_3D) : K.isDataArrayTexture || K.isCompressedArrayTexture ? (ft.setTexture2DArray(K, 0), cn = G.TEXTURE_2D_ARRAY) : (ft.setTexture2D(K, 0), cn = G.TEXTURE_2D), G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL, K.flipY), G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K.premultiplyAlpha), G.pixelStorei(G.UNPACK_ALIGNMENT, K.unpackAlignment);
      const kt = G.getParameter(G.UNPACK_ROW_LENGTH),
        Bn = G.getParameter(G.UNPACK_IMAGE_HEIGHT),
        Fa = G.getParameter(G.UNPACK_SKIP_PIXELS),
        dn = G.getParameter(G.UNPACK_SKIP_ROWS),
        $i = G.getParameter(G.UNPACK_SKIP_IMAGES);
      G.pixelStorei(G.UNPACK_ROW_LENGTH, Vt.width), G.pixelStorei(G.UNPACK_IMAGE_HEIGHT, Vt.height), G.pixelStorei(G.UNPACK_SKIP_PIXELS, yt), G.pixelStorei(G.UNPACK_SKIP_ROWS, Mt), G.pixelStorei(G.UNPACK_SKIP_IMAGES, ht);
      const hn = C.isDataArrayTexture || C.isData3DTexture,
        Hn = K.isDataArrayTexture || K.isData3DTexture;
      if (C.isDepthTexture) {
        const On = tt.get(C),
          Gn = tt.get(K),
          jn = tt.get(On.__renderTarget),
          Xi = tt.get(Gn.__renderTarget);
        Fe.bindFramebuffer(G.READ_FRAMEBUFFER, jn.__webglFramebuffer), Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER, Xi.__webglFramebuffer);
        for (let ea = 0; ea < at; ea++) hn && (G.framebufferTextureLayer(G.READ_FRAMEBUFFER, G.COLOR_ATTACHMENT0, tt.get(C).__webglTexture, ne, ht + ea), G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER, G.COLOR_ATTACHMENT0, tt.get(K).__webglTexture, Xe, Zt + ea)), G.blitFramebuffer(yt, Mt, We, $e, Dt, Yt, We, $e, G.DEPTH_BUFFER_BIT, G.NEAREST);
        Fe.bindFramebuffer(G.READ_FRAMEBUFFER, null), Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER, null);
      } else if (ne !== 0 || C.isRenderTargetTexture || tt.has(C)) {
        const On = tt.get(C),
          Gn = tt.get(K);
        Fe.bindFramebuffer(G.READ_FRAMEBUFFER, gn), Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER, Tn);
        for (let jn = 0; jn < at; jn++) hn ? G.framebufferTextureLayer(G.READ_FRAMEBUFFER, G.COLOR_ATTACHMENT0, On.__webglTexture, ne, ht + jn) : G.framebufferTexture2D(G.READ_FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, On.__webglTexture, ne), Hn ? G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER, G.COLOR_ATTACHMENT0, Gn.__webglTexture, Xe, Zt + jn) : G.framebufferTexture2D(G.DRAW_FRAMEBUFFER, G.COLOR_ATTACHMENT0, G.TEXTURE_2D, Gn.__webglTexture, Xe), ne !== 0 ? G.blitFramebuffer(yt, Mt, We, $e, Dt, Yt, We, $e, G.COLOR_BUFFER_BIT, G.NEAREST) : Hn ? G.copyTexSubImage3D(cn, Xe, Dt, Yt, Zt + jn, yt, Mt, We, $e) : G.copyTexSubImage2D(cn, Xe, Dt, Yt, yt, Mt, We, $e);
        Fe.bindFramebuffer(G.READ_FRAMEBUFFER, null), Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER, null);
      } else Hn ? C.isDataTexture || C.isData3DTexture ? G.texSubImage3D(cn, Xe, Dt, Yt, Zt, We, $e, at, en, vt, Vt.data) : K.isCompressedArrayTexture ? G.compressedTexSubImage3D(cn, Xe, Dt, Yt, Zt, We, $e, at, en, Vt.data) : G.texSubImage3D(cn, Xe, Dt, Yt, Zt, We, $e, at, en, vt, Vt) : C.isDataTexture ? G.texSubImage2D(G.TEXTURE_2D, Xe, Dt, Yt, We, $e, en, vt, Vt.data) : C.isCompressedTexture ? G.compressedTexSubImage2D(G.TEXTURE_2D, Xe, Dt, Yt, Vt.width, Vt.height, en, Vt.data) : G.texSubImage2D(G.TEXTURE_2D, Xe, Dt, Yt, We, $e, en, vt, Vt);
      G.pixelStorei(G.UNPACK_ROW_LENGTH, kt), G.pixelStorei(G.UNPACK_IMAGE_HEIGHT, Bn), G.pixelStorei(G.UNPACK_SKIP_PIXELS, Fa), G.pixelStorei(G.UNPACK_SKIP_ROWS, dn), G.pixelStorei(G.UNPACK_SKIP_IMAGES, $i), Xe === 0 && K.generateMipmaps && G.generateMipmap(cn), Fe.unbindTexture();
    }, this.initRenderTarget = function (C) {
      tt.get(C).__webglFramebuffer === void 0 && ft.setupRenderTarget(C);
    }, this.initTexture = function (C) {
      C.isCubeTexture ? ft.setTextureCube(C, 0) : C.isData3DTexture ? ft.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? ft.setTexture2DArray(C, 0) : ft.setTexture2D(C, 0), Fe.unbindTexture();
    }, this.resetState = function () {
      q = 0, w = 0, A = null, Fe.reset(), V.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }
  get coordinateSystem() {
    return Ji;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const n = this.getContext();
    n.drawingBufferColorSpace = Jt._getDrawingBufferColorSpace(e), n.unpackColorSpace = Jt._getUnpackColorSpace();
  }
}
class SimplexNoise {
  constructor(e = Math) {
    this.grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]], this.grad4 = [[0, 1, 1, 1], [0, 1, 1, -1], [0, 1, -1, 1], [0, 1, -1, -1], [0, -1, 1, 1], [0, -1, 1, -1], [0, -1, -1, 1], [0, -1, -1, -1], [1, 0, 1, 1], [1, 0, 1, -1], [1, 0, -1, 1], [1, 0, -1, -1], [-1, 0, 1, 1], [-1, 0, 1, -1], [-1, 0, -1, 1], [-1, 0, -1, -1], [1, 1, 0, 1], [1, 1, 0, -1], [1, -1, 0, 1], [1, -1, 0, -1], [-1, 1, 0, 1], [-1, 1, 0, -1], [-1, -1, 0, 1], [-1, -1, 0, -1], [1, 1, 1, 0], [1, 1, -1, 0], [1, -1, 1, 0], [1, -1, -1, 0], [-1, 1, 1, 0], [-1, 1, -1, 0], [-1, -1, 1, 0], [-1, -1, -1, 0]], this.p = [];
    for (let n = 0; n < 256; n++) this.p[n] = Math.floor(e.random() * 256);
    this.perm = [];
    for (let n = 0; n < 512; n++) this.perm[n] = this.p[n & 255];
    this.simplex = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 0, 0, 0], [0, 2, 3, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 3, 0], [0, 2, 1, 3], [0, 0, 0, 0], [0, 3, 1, 2], [0, 3, 2, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 0, 3], [0, 0, 0, 0], [1, 3, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 3, 0, 1], [2, 3, 1, 0], [1, 0, 2, 3], [1, 0, 3, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 3, 1], [0, 0, 0, 0], [2, 1, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 1, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 0, 1, 2], [3, 0, 2, 1], [0, 0, 0, 0], [3, 1, 2, 0], [2, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 1, 0, 2], [0, 0, 0, 0], [3, 2, 0, 1], [3, 2, 1, 0]];
  }
  noise(e, n) {
    let a, o, c;
    const u = .5 * (Math.sqrt(3) - 1),
      f = (e + n) * u,
      m = Math.floor(e + f),
      h = Math.floor(n + f),
      x = (3 - Math.sqrt(3)) / 6,
      g = (m + h) * x,
      v = m - g,
      y = h - g,
      M = e - v,
      E = n - y;
    let S, _;
    M > E ? (S = 1, _ = 0) : (S = 0, _ = 1);
    const L = M - S + x,
      D = E - _ + x,
      O = M - 1 + 2 * x,
      F = E - 1 + 2 * x,
      P = m & 255,
      B = h & 255,
      q = this.perm[P + this.perm[B]] % 12,
      w = this.perm[P + S + this.perm[B + _]] % 12,
      A = this.perm[P + 1 + this.perm[B + 1]] % 12;
    let H = .5 - M * M - E * E;
    H < 0 ? a = 0 : (H *= H, a = H * H * this._dot(this.grad3[q], M, E));
    let k = .5 - L * L - D * D;
    k < 0 ? o = 0 : (k *= k, o = k * k * this._dot(this.grad3[w], L, D));
    let W = .5 - O * O - F * F;
    return W < 0 ? c = 0 : (W *= W, c = W * W * this._dot(this.grad3[A], O, F)), 70 * (a + o + c);
  }
  noise3d(e, n, a) {
    let o, c, u, f;
    const h = (e + n + a) * .3333333333333333,
      x = Math.floor(e + h),
      g = Math.floor(n + h),
      v = Math.floor(a + h),
      y = 1 / 6,
      M = (x + g + v) * y,
      E = x - M,
      S = g - M,
      _ = v - M,
      L = e - E,
      D = n - S,
      O = a - _;
    let F, P, B, q, w, A;
    L >= D ? D >= O ? (F = 1, P = 0, B = 0, q = 1, w = 1, A = 0) : L >= O ? (F = 1, P = 0, B = 0, q = 1, w = 0, A = 1) : (F = 0, P = 0, B = 1, q = 1, w = 0, A = 1) : D < O ? (F = 0, P = 0, B = 1, q = 0, w = 1, A = 1) : L < O ? (F = 0, P = 1, B = 0, q = 0, w = 1, A = 1) : (F = 0, P = 1, B = 0, q = 1, w = 1, A = 0);
    const H = L - F + y,
      k = D - P + y,
      W = O - B + y,
      J = L - q + 2 * y,
      ie = D - w + 2 * y,
      I = O - A + 2 * y,
      Y = L - 1 + 3 * y,
      Z = D - 1 + 3 * y,
      pe = O - 1 + 3 * y,
      Me = x & 255,
      z = g & 255,
      ee = v & 255,
      he = this.perm[Me + this.perm[z + this.perm[ee]]] % 12,
      Ee = this.perm[Me + F + this.perm[z + P + this.perm[ee + B]]] % 12,
      Be = this.perm[Me + q + this.perm[z + w + this.perm[ee + A]]] % 12,
      te = this.perm[Me + 1 + this.perm[z + 1 + this.perm[ee + 1]]] % 12;
    let me = .6 - L * L - D * D - O * O;
    me < 0 ? o = 0 : (me *= me, o = me * me * this._dot3(this.grad3[he], L, D, O));
    let He = .6 - H * H - k * k - W * W;
    He < 0 ? c = 0 : (He *= He, c = He * He * this._dot3(this.grad3[Ee], H, k, W));
    let Ge = .6 - J * J - ie * ie - I * I;
    Ge < 0 ? u = 0 : (Ge *= Ge, u = Ge * Ge * this._dot3(this.grad3[Be], J, ie, I));
    let qe = .6 - Y * Y - Z * Z - pe * pe;
    return qe < 0 ? f = 0 : (qe *= qe, f = qe * qe * this._dot3(this.grad3[te], Y, Z, pe)), 32 * (o + c + u + f);
  }
  noise4d(e, n, a, o) {
    const c = this.grad4,
      u = this.simplex,
      f = this.perm,
      m = (Math.sqrt(5) - 1) / 4,
      h = (5 - Math.sqrt(5)) / 20;
    let x, g, v, y, M;
    const E = (e + n + a + o) * m,
      S = Math.floor(e + E),
      _ = Math.floor(n + E),
      L = Math.floor(a + E),
      D = Math.floor(o + E),
      O = (S + _ + L + D) * h,
      F = S - O,
      P = _ - O,
      B = L - O,
      q = D - O,
      w = e - F,
      A = n - P,
      H = a - B,
      k = o - q,
      W = w > A ? 32 : 0,
      J = w > H ? 16 : 0,
      ie = A > H ? 8 : 0,
      I = w > k ? 4 : 0,
      Y = A > k ? 2 : 0,
      Z = H > k ? 1 : 0,
      pe = W + J + ie + I + Y + Z,
      Me = u[pe][0] >= 3 ? 1 : 0,
      z = u[pe][1] >= 3 ? 1 : 0,
      ee = u[pe][2] >= 3 ? 1 : 0,
      he = u[pe][3] >= 3 ? 1 : 0,
      Ee = u[pe][0] >= 2 ? 1 : 0,
      Be = u[pe][1] >= 2 ? 1 : 0,
      te = u[pe][2] >= 2 ? 1 : 0,
      me = u[pe][3] >= 2 ? 1 : 0,
      He = u[pe][0] >= 1 ? 1 : 0,
      Ge = u[pe][1] >= 1 ? 1 : 0,
      qe = u[pe][2] >= 1 ? 1 : 0,
      Ke = u[pe][3] >= 1 ? 1 : 0,
      Te = w - Me + h,
      Je = A - z + h,
      st = H - ee + h,
      G = k - he + h,
      nt = w - Ee + 2 * h,
      rt = A - Be + 2 * h,
      it = H - te + 2 * h,
      Fe = k - me + 2 * h,
      Et = w - He + 3 * h,
      tt = A - Ge + 3 * h,
      ft = H - qe + 3 * h,
      U = k - Ke + 3 * h,
      T = w - 1 + 4 * h,
      $ = A - 1 + 4 * h,
      ve = H - 1 + 4 * h,
      ue = k - 1 + 4 * h,
      se = S & 255,
      Ye = _ & 255,
      ke = L & 255,
      ye = D & 255,
      Qe = f[se + f[Ye + f[ke + f[ye]]]] % 32,
      Re = f[se + Me + f[Ye + z + f[ke + ee + f[ye + he]]]] % 32,
      oe = f[se + Ee + f[Ye + Be + f[ke + te + f[ye + me]]]] % 32,
      Le = f[se + He + f[Ye + Ge + f[ke + qe + f[ye + Ke]]]] % 32,
      Ve = f[se + 1 + f[Ye + 1 + f[ke + 1 + f[ye + 1]]]] % 32;
    let _e = .6 - w * w - A * A - H * H - k * k;
    _e < 0 ? x = 0 : (_e *= _e, x = _e * _e * this._dot4(c[Qe], w, A, H, k));
    let ze = .6 - Te * Te - Je * Je - st * st - G * G;
    ze < 0 ? g = 0 : (ze *= ze, g = ze * ze * this._dot4(c[Re], Te, Je, st, G));
    let V = .6 - nt * nt - rt * rt - it * it - Fe * Fe;
    V < 0 ? v = 0 : (V *= V, v = V * V * this._dot4(c[oe], nt, rt, it, Fe));
    let Pe = .6 - Et * Et - tt * tt - ft * ft - U * U;
    Pe < 0 ? y = 0 : (Pe *= Pe, y = Pe * Pe * this._dot4(c[Le], Et, tt, ft, U));
    let we = .6 - T * T - $ * $ - ve * ve - ue * ue;
    return we < 0 ? M = 0 : (we *= we, M = we * we * this._dot4(c[Ve], T, $, ve, ue)), 27 * (x + g + v + y + M);
  }
  _dot(e, n, a) {
    return e[0] * n + e[1] * a;
  }
  _dot3(e, n, a, o) {
    return e[0] * n + e[1] * a + e[2] * o;
  }
  _dot4(e, n, a, o, c) {
    return e[0] * n + e[1] * a + e[2] * o + e[3] * c;
  }
}
const ll = new be();
function Ni(s, e, n, a, o, c) {
  const u = 2 * Math.PI * o / 4,
    f = Math.max(c - 2 * o, 0),
    m = Math.PI / 4;
  ll.copy(e), ll[a] = 0, ll.normalize();
  const h = .5 * u / (u + f),
    x = 1 - ll.angleTo(s) / m;
  return Math.sign(ll[n]) === 1 ? x * h : f / (u + f) + h + h * (1 - x);
}
class RoundedBoxGeometry extends oo {
  constructor(e = 1, n = 1, a = 1, o = 2, c = .1) {
    const u = o * 2 + 1;
    if (c = Math.min(e / 2, n / 2, a / 2, c), super(1, 1, 1, u, u, u), this.type = "RoundedBoxGeometry", this.parameters = {
      width: e,
      height: n,
      depth: a,
      segments: o,
      radius: c
    }, u === 1) return;
    const f = this.toNonIndexed();
    this.index = null, this.attributes.position = f.attributes.position, this.attributes.normal = f.attributes.normal, this.attributes.uv = f.attributes.uv;
    const m = new be(),
      h = new be(),
      x = new be(e, n, a).divideScalar(2).subScalar(c),
      g = this.attributes.position.array,
      v = this.attributes.normal.array,
      y = this.attributes.uv.array,
      M = g.length / 6,
      E = new be(),
      S = .5 / u;
    for (let _ = 0, L = 0; _ < g.length; _ += 3, L += 2) switch (m.fromArray(g, _), h.copy(m), h.x -= Math.sign(h.x) * S, h.y -= Math.sign(h.y) * S, h.z -= Math.sign(h.z) * S, h.normalize(), g[_ + 0] = x.x * Math.sign(m.x) + h.x * c, g[_ + 1] = x.y * Math.sign(m.y) + h.y * c, g[_ + 2] = x.z * Math.sign(m.z) + h.z * c, v[_ + 0] = h.x, v[_ + 1] = h.y, v[_ + 2] = h.z, Math.floor(_ / M)) {
      case 0:
        E.set(1, 0, 0), y[L + 0] = Ni(E, h, "z", "y", c, a), y[L + 1] = 1 - Ni(E, h, "y", "z", c, n);
        break;
      case 1:
        E.set(-1, 0, 0), y[L + 0] = 1 - Ni(E, h, "z", "y", c, a), y[L + 1] = 1 - Ni(E, h, "y", "z", c, n);
        break;
      case 2:
        E.set(0, 1, 0), y[L + 0] = 1 - Ni(E, h, "x", "z", c, e), y[L + 1] = Ni(E, h, "z", "x", c, a);
        break;
      case 3:
        E.set(0, -1, 0), y[L + 0] = 1 - Ni(E, h, "x", "z", c, e), y[L + 1] = 1 - Ni(E, h, "z", "x", c, a);
        break;
      case 4:
        E.set(0, 0, 1), y[L + 0] = 1 - Ni(E, h, "x", "y", c, e), y[L + 1] = 1 - Ni(E, h, "y", "x", c, n);
        break;
      case 5:
        E.set(0, 0, -1), y[L + 0] = Ni(E, h, "x", "y", c, e), y[L + 1] = 1 - Ni(E, h, "y", "x", c, n);
        break;
    }
  }
  static fromJSON(e) {
    return new RoundedBoxGeometry(e.width, e.height, e.depth, e.segments, e.radius);
  }
}
export { H3, Ia, Li, Na, P3, Pr, Pw, RoundedBoxGeometry, SimplexNoise, U3, W3, Xt, bu, ji, q_, yi };
//# sourceMappingURL=three-runtime.js.map
