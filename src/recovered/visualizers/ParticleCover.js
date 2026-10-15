import { React, jsxRuntime } from "../vendor/react-runtime.js";
class CoverParticle {
  constructor(e, n, a, o, c) {
    this.x = e, this.y = n, this.z = a, this.originX = e, this.originY = n, this.originZ = a, this.targetX = e, this.targetY = n, this.targetZ = a, this.color = o, this.size = c;
  }
  draw(e, n, a) {
    const c = 400 / (400 + this.z);
    if (c <= 0) return;
    const u = n / 2 + (this.x - n / 2) * c,
      f = a / 2 + (this.y - a / 2) * c,
      m = this.size * c,
      h = Math.max(.2, Math.min(1, c));
    e.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${h})`, e.beginPath(), e.arc(u, f, m / 2, 0, Math.PI * 2), e.fill();
  }
  update(e, n, a, o, c) {
    let u = 0;
    if (e.length > 0) {
      const v = this.originX / a,
        y = Math.floor(v * e.length * .6);
      u = (e[y] || 0) / 255 * n.amplitude;
    }
    const f = Date.now() * .001 * n.speed,
      m = -u * 200,
      h = Math.sin(this.originY * .02 + f) * u * 30,
      x = Math.cos(this.originX * .02 + f) * u * 30;
    this.originX + h, this.originY + x, this.originZ + m;
    const g = c * (2 - c);
    this.x = this.originX + h * g, this.y = this.originY + x * g, this.z = this.originZ + m * g;
  }
}
const ParticleCover = ({
  analyser: analyser,
  coverUrl: coverUrl,
  isPlaying: isPlaying,
  params: params
}) => {
  const o = React.useRef(null),
    c = React.useRef([]),
    u = React.useRef(null),
    [f, m] = React.useState(!1),
    h = React.useRef(null),
    x = React.useRef(0);
  return React.useEffect(() => {
    m(!1);
    const g = new Image();
    g.crossOrigin = "Anonymous", g.src = coverUrl, g.onload = () => {
      h.current = g, m(!0);
    };
  }, [coverUrl]), React.useEffect(() => {
    var y;
    if (!h.current || !o.current) return;
    const g = () => {
      const M = h.current,
        E = o.current,
        S = document.createElement("canvas"),
        _ = S.getContext("2d");
      if (!_) return;
      const L = 150,
        D = L / M.width,
        O = Math.floor(M.height * D);
      S.width = L, S.height = O, _.drawImage(M, 0, 0, L, O);
      const P = _.getImageData(0, 0, L, O).data,
        B = [],
        q = Math.max(1, Math.floor(params.density)),
        w = (ee, he, Ee) => Math.min(Ee, Math.max(he, ee)),
        A = .7,
        H = Math.min(E.width, E.height),
        k = w(H * .45, 140, 320),
        W = Math.max(L, O),
        J = k / (W * A),
        ie = L * J,
        I = O * J,
        Y = (E.width - ie) / 2,
        Z = (E.height - I) / 2,
        pe = 2,
        Me = L * pe,
        z = O * pe;
      (E.width - Me) / 2, (E.height - z) / 2;
      for (let ee = 0; ee < O; ee += q) for (let he = 0; he < L; he += q) {
        const Ee = (ee * L + he) * 4,
          Be = P[Ee],
          te = P[Ee + 1],
          me = P[Ee + 2];
        if (P[Ee + 3] > 100) {
          const Ge = (Math.random() - .5) * 200,
            qe = Y + he * J,
            Ke = Z + ee * J,
            Te = new CoverParticle(qe, Ke, Ge, {
              r: Be,
              g: te,
              b: me
            }, params.baseSize);
          B.push(Te);
        }
      }
      c.current = B, x.current = 0;
    };
    o.current && o.current.parentElement && (o.current.width = o.current.parentElement.clientWidth, o.current.height = o.current.parentElement.clientHeight), g();
    const v = new ResizeObserver(M => {
      for (let E of M) o.current && (o.current.width = E.contentRect.width, o.current.height = E.contentRect.height, g());
    });
    return (y = o.current) != null && y.parentElement && v.observe(o.current.parentElement), () => v.disconnect();
  }, [f, params.density, params.baseSize]), React.useEffect(() => {
    if (!o.current) return;
    const g = o.current,
      v = g.getContext("2d");
    if (!v) return;
    let y = new Uint8Array(0);
    analyser && (y = new Uint8Array(analyser.frequencyBinCount));
    let M = 0;
    const E = 5,
      S = () => {
        M++, v.clearRect(0, 0, g.width, g.height), v.globalCompositeOperation = "source-over", x.current < 1 && (x.current += .01, x.current > 1 && (x.current = 1));
        const _ = x.current,
          L = .5 + .2 * (_ * (2 - _));
        analyser && analyser.getByteFrequencyData(y);
        const D = g.width / 2,
          O = g.height / 2;
        c.current.forEach(F => {
          F.update(y, params, g.width, g.height, _), F.x = D + (F.x - D) * L, F.y = O + (F.y - O) * L, F.z = F.z * L;
        }), M % E === 0 && c.current.sort((F, P) => P.z - F.z), c.current.forEach(F => {
          F.draw(v, g.width, g.height);
        }), u.current = requestAnimationFrame(S);
      };
    return S(), () => {
      u.current !== null && cancelAnimationFrame(u.current), u.current = null;
    };
  }, [analyser, params]), jsxRuntime.jsx("div", {
    className: "relative w-full h-full bg-black overflow-hidden",
    children: jsxRuntime.jsx("canvas", {
      ref: o,
      className: "block w-full h-full"
    })
  });
};
export { ParticleCover };
//# sourceMappingURL=ParticleCover.js.map
