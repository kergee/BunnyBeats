import { React } from "./react-runtime.js";
/**
* @license lucide-react v0.554.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const D1 = s => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const N1 = s => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, n, a) => a ? a.toUpperCase() : n.toLowerCase());
const Lx = s => {
  const e = N1(s);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const x_ = (...s) => s.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim();
const L1 = s => {
  for (const e in s) if (e.startsWith("aria-") || e === "role" || e === "title") return !0;
}; /**
   * @license lucide-react v0.554.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
var U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}; /**
   * @license lucide-react v0.554.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
const O1 = React.forwardRef(({
  color: s = "currentColor",
  size: e = 24,
  strokeWidth: n = 2,
  absoluteStrokeWidth: a,
  className: o = "",
  children: c,
  iconNode: u,
  ...f
}, m) => React.createElement("svg", {
  ref: m,
  ...U1,
  width: e,
  height: e,
  stroke: s,
  strokeWidth: a ? Number(n) * 24 / Number(e) : n,
  className: x_("lucide", o),
  ...(!c && !L1(f) && {
    "aria-hidden": "true"
  }),
  ...f
}, [...u.map(([h, x]) => React.createElement(h, x)), ...(Array.isArray(c) ? c : [c])])); /**
                                                                                         * @license lucide-react v0.554.0 - ISC
                                                                                         *
                                                                                         * This source code is licensed under the ISC license.
                                                                                         * See the LICENSE file in the root directory of this source tree.
                                                                                         */
const xr = (s, e) => {
  const n = React.forwardRef(({
    className: a,
    ...o
  }, c) => React.createElement(O1, {
    ref: c,
    iconNode: e,
    className: x_(`lucide-${D1(Lx(s))}`, `lucide-${s}`, a),
    ...o
  }));
  return n.displayName = Lx(s), n;
}; /**
   * @license lucide-react v0.554.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
const P1 = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]];
const CheckIcon = xr("check", P1); /**
                                   * @license lucide-react v0.554.0 - ISC
                                   *
                                   * This source code is licensed under the ISC license.
                                   * See the LICENSE file in the root directory of this source tree.
                                   */
const z1 = [["path", {
  d: "M4 5h16",
  key: "1tepv9"
}], ["path", {
  d: "M4 12h16",
  key: "1lakjw"
}], ["path", {
  d: "M4 19h16",
  key: "1djgab"
}]];
const MenuIcon = xr("menu", z1); /**
                                 * @license lucide-react v0.554.0 - ISC
                                 *
                                 * This source code is licensed under the ISC license.
                                 * See the LICENSE file in the root directory of this source tree.
                                 */
const B1 = [["path", {
  d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
  key: "e79jfc"
}], ["circle", {
  cx: "13.5",
  cy: "6.5",
  r: ".5",
  fill: "currentColor",
  key: "1okk4w"
}], ["circle", {
  cx: "17.5",
  cy: "10.5",
  r: ".5",
  fill: "currentColor",
  key: "f64h9f"
}], ["circle", {
  cx: "6.5",
  cy: "12.5",
  r: ".5",
  fill: "currentColor",
  key: "qy21gx"
}], ["circle", {
  cx: "8.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "fotxhn"
}]];
const PaletteIcon = xr("palette", B1); /**
                                       * @license lucide-react v0.554.0 - ISC
                                       *
                                       * This source code is licensed under the ISC license.
                                       * See the LICENSE file in the root directory of this source tree.
                                       */
const G1 = [["rect", {
  x: "14",
  y: "3",
  width: "5",
  height: "18",
  rx: "1",
  key: "kaeet6"
}], ["rect", {
  x: "5",
  y: "3",
  width: "5",
  height: "18",
  rx: "1",
  key: "1wsw3u"
}]];
const PauseIcon = xr("pause", G1); /**
                                   * @license lucide-react v0.554.0 - ISC
                                   *
                                   * This source code is licensed under the ISC license.
                                   * See the LICENSE file in the root directory of this source tree.
                                   */
const V1 = [["path", {
  d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
  key: "10ikf1"
}]];
const PlayIcon = xr("play", V1); /**
                                 * @license lucide-react v0.554.0 - ISC
                                 *
                                 * This source code is licensed under the ISC license.
                                 * See the LICENSE file in the root directory of this source tree.
                                 */
const k1 = [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}]];
const ResetIcon = xr("rotate-ccw", k1); /**
                                        * @license lucide-react v0.554.0 - ISC
                                        *
                                        * This source code is licensed under the ISC license.
                                        * See the LICENSE file in the root directory of this source tree.
                                        */
const j1 = [["path", {
  d: "M14 17H5",
  key: "gfn3mx"
}], ["path", {
  d: "M19 7h-9",
  key: "6i9tg"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3",
  key: "18b49y"
}], ["circle", {
  cx: "7",
  cy: "7",
  r: "3",
  key: "dfmy0x"
}]];
const SettingsIcon = xr("settings-2", j1); /**
                                           * @license lucide-react v0.554.0 - ISC
                                           *
                                           * This source code is licensed under the ISC license.
                                           * See the LICENSE file in the root directory of this source tree.
                                           */
const X1 = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]];
const XIcon = xr("x", X1);
export { CheckIcon, MenuIcon, PaletteIcon, PauseIcon, PlayIcon, ResetIcon, SettingsIcon, XIcon };
//# sourceMappingURL=icons.js.map
