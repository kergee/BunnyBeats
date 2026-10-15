import { React, jsxRuntime } from "../vendor/react-runtime.js";
const oR = "/assets/blue1-D1u2Z049.webp";
const lR = "/assets/blue2-CKkN-Z5_.webp";
const cR = "/assets/blue3-B2m4gvFn.webp";
const uR = "/assets/blue4-CPYZi0Dd.webp";
const fR = "/assets/blue5-qLdk5TOt.webp";
const dR = "/assets/pink1-Chq9-D0b.webp";
const hR = "/assets/pink2-DtM3S5we.webp";
const pR = "/assets/pink3-C4KZVAWU.webp";
const mR = "/assets/pink4-Dx7Rlq0c.webp";
const gR = "/assets/pink5-BaApiMma.webp";
const xR = "/assets/green1-B_QTU5oD.webp";
const vR = "/assets/green2-Xcxs--AI.webp";
const _R = "/assets/green3-CWfRHF9_.webp";
const yR = "/assets/green4-CyrCEIz5.webp";
const bR = "/assets/green5-06zlY0a6.webp";
const SR = "/assets/yellow1-BT_GX0oo.webp";
const MR = "/assets/yellow2-4QxaKfk9.webp";
const ER = "/assets/yellow3-DxghXuPD.webp";
const TR = "/assets/yellow4-uWu5mJgu.webp";
const AR = "/assets/yellow5-BjHg1QEb.webp";
const wR = "/assets/purple1-9nf7kIan.webp";
const RR = "/assets/purple2-DN0sYXhz.webp";
const CR = "/assets/purple3-DwEBxOlY.webp";
const DR = "/assets/purple4-CpF46QWc.webp";
const NR = "/assets/purple5-Dx6CHyrK.webp";
const LR = "/assets/gingerman1-C_X6TYrq.webp";
const UR = "/assets/gingerman2-huLUuD7G.webp";
const OR = "/assets/gingerman3-Dr41h5oK.webp";
const PR = "/assets/gingerman4-Dr4xr1t5.webp";
const IR = "/assets/gingerman5-SCbRrPyZ.webp";
const zR = "/assets/gingerman6-DTv5dnOk.webp";
const FR = "/assets/gingerman7-CXvGRkat.webp";
const BR = "/assets/rabbit1-CYSuzl1i.webp";
const HR = "/assets/rabbit2-Ccp3SGeL.webp";
const GR = "/assets/rabbit3-Cvm05xTr.webp";
const VR = "/assets/rabbit4-DQde3D7j.webp";
const kR = "/assets/rabbit5-BtmovHwU.webp";
const jR = "/assets/rabbit6--5FMhTUf.webp";
const XR = "/assets/deer1-Cd9u--ZS.webp";
const WR = "/assets/deer2-D8cIlCEI.webp";
const YR = "/assets/deer3-DJay5npW.webp";
const qR = "/assets/deer4-B3WojhVI.webp";
const ZR = "/assets/deer5-Bp80q8J-.webp";
const KR = "/assets/deer6-g3W-S1m7.webp";
const QR = "/assets/bottom1-BWyFYund.webp";
const JR = "/assets/bottom1-BWyFYund.webp";
const $R = "/assets/bottom3-Cbja2cnB.webp";
const eC = "/assets/middle1-xmxZYQzq.webp";
const tC = "/assets/middle2-D-YiqMrN.webp";
const nC = "/assets/middle3-B5iMqTgL.webp";
const iC = "/assets/top-UuQxetsB.webp";
const BACKGROUND_BOTTOM_FRAMES = [QR, JR, $R];
const BACKGROUND_MIDDLE_FRAMES = [eC, tC, nC];
const BACKGROUND_TOP_FRAMES = [iC];
const aC = .8;
const rC = 1.5;
const sC = 2;
const Th = [LR, UR, OR, PR, IR, zR, FR];
const t_ = 20;
const oC = .455;
const Ah = [BR, HR, GR, VR, kR, jR];
const n_ = 15;
const lC = .875;
const wh = [XR, WR, YR, qR, ZR, KR];
const i_ = 15;
const cC = .65;
const a_ = 12;
const r_ = 120;
const s_ = 1 / 30;
const CHARACTERS = [{
  name: "blue",
  frames: [oR, lR, cR, uR, fR],
  isAnimated: !0,
  trailColor: "#8AAEE0",
  freqStart: 40,
  freqEnd: 200,
  extraBoost: 1.5,
  baseX: .38,
  baseY: .1
}, {
  name: "green",
  frames: [xR, vR, _R, yR, bR],
  isAnimated: !0,
  trailColor: "#A2E48E",
  freqStart: 1e3,
  freqEnd: 4e3,
  extraBoost: 1,
  baseX: .63,
  baseY: .1
}, {
  name: "pink",
  frames: [dR, hR, pR, mR, gR],
  isAnimated: !0,
  trailColor: "#D782B7",
  freqStart: 200,
  freqEnd: 1500,
  extraBoost: 1,
  baseX: .505,
  baseY: .25
}, {
  name: "yellow",
  frames: [SR, MR, ER, TR, AR],
  isAnimated: !0,
  trailColor: "#F6C263",
  freqStart: 80,
  freqEnd: 400,
  extraBoost: 1.5,
  baseX: .38,
  baseY: .4
}, {
  name: "purple",
  frames: [wR, RR, CR, DR, NR],
  isAnimated: !0,
  trailColor: "#A67EDE",
  freqStart: 3e3,
  freqEnd: 12e3,
  extraBoost: 1.2,
  baseX: .63,
  baseY: .4
}];
const uC = "#65CCF1";
const fC = .003;
const dC = .001;
const hC = 3;
const pC = .85;
const mC = .015;
const cl = 80;
const Rh = 35;
const gC = 120;
const xC = .2;
const vC = 80;
const o_ = ["rgba(255, 255, 255, 0.9)", "rgba(220, 235, 255, 0.8)", "rgba(200, 220, 255, 0.7)", "rgba(180, 200, 240, 0.6)"];
const l_ = [2, 3, 4, 5];
const Ch = {
  min: .5,
  max: 2
};
const Dh = {
  min: -.3,
  max: .3
};
const _C = .5;
const yC = 3;
const lu = [12, 14, 16, 18, 20];
const c_ = 1.2;
const PowerpuffRun = ({
  analyser: analyser,
  isPlaying: isPlaying,
  params: params,
  lyricLine: lyricLine,
  songInfo: songInfo
}) => {
  const c = React.useRef(null),
    u = React.useRef(0),
    f = React.useRef([]),
    m = React.useRef(!1),
    h = React.useRef(CHARACTERS.map(() => 0)),
    x = React.useRef(0),
    g = React.useRef([]),
    v = React.useRef([]),
    y = React.useRef([]),
    M = React.useRef(!1),
    E = React.useRef([]),
    S = React.useRef(!1),
    _ = React.useRef(0),
    L = React.useRef(0);
  React.useRef(0);
  const D = React.useRef([]),
    O = React.useRef(!1),
    F = React.useRef(0),
    P = React.useRef(0),
    B = React.useRef([]),
    q = React.useRef(!1),
    w = React.useRef(0),
    A = React.useRef(0),
    H = React.useRef(0),
    k = React.useRef(0),
    W = React.useRef(0),
    J = React.useRef(0),
    ie = React.useRef([]),
    I = React.useRef(!1),
    Y = React.useRef([]),
    Z = React.useRef(!1),
    pe = React.useRef([0, 0, 0, 0, 0]),
    Me = React.useRef([0, 0, 0, 0, 0]),
    z = React.useRef([0, 0, 0, 0, 0]),
    ee = React.useRef(null),
    he = React.useRef(0),
    Ee = React.useRef(""),
    Be = React.useRef(""),
    te = React.useRef(null),
    me = React.useRef({
      currentLyric: "",
      nextLyric: null,
      phase: "idle",
      alpha: 1
    }),
    He = React.useRef("");
  React.useEffect(() => {
    Ee.current = (lyricLine ?? "").trim();
  }, [lyricLine]), React.useEffect(() => {
    Be.current = (songInfo ?? "").trim();
  }, [songInfo]), React.useEffect(() => {
    const Ke = [];
    let Te = 0,
      Je = 0;
    CHARACTERS.forEach(G => {
      Te += G.frames.length;
    });
    const st = () => {
      Je++, Je === Te && (m.current = !0);
    };
    CHARACTERS.forEach((G, nt) => {
      Ke[nt] = [], G.frames.forEach((rt, it) => {
        const Fe = new Image();
        Fe.src = rt, Fe.onload = st, Ke[nt][it] = Fe;
      });
    }), f.current = Ke;
  }, []), React.useEffect(() => {
    let Ke = BACKGROUND_BOTTOM_FRAMES.length + BACKGROUND_MIDDLE_FRAMES.length + BACKGROUND_TOP_FRAMES.length,
      Te = 0;
    const Je = () => {
        Te++, Te === Ke && (M.current = !0);
      },
      st = [];
    BACKGROUND_BOTTOM_FRAMES.forEach((rt, it) => {
      const Fe = new Image();
      Fe.src = rt, Fe.onload = Je, st[it] = Fe;
    }), g.current = st;
    const G = [];
    BACKGROUND_MIDDLE_FRAMES.forEach((rt, it) => {
      const Fe = new Image();
      Fe.src = rt, Fe.onload = Je, G[it] = Fe;
    }), v.current = G;
    const nt = [];
    BACKGROUND_TOP_FRAMES.forEach((rt, it) => {
      const Fe = new Image();
      Fe.src = rt, Fe.onload = Je, nt[it] = Fe;
    }), y.current = nt;
  }, []), React.useEffect(() => {
    let Ke = 0;
    const Te = [];
    Th.forEach((Je, st) => {
      const G = new Image();
      G.src = Je, G.onload = () => {
        Ke++, Ke === Th.length && (S.current = !0);
      }, Te[st] = G;
    }), E.current = Te;
  }, []), React.useEffect(() => {
    let Ke = 0;
    const Te = [];
    Ah.forEach((Je, st) => {
      const G = new Image();
      G.src = Je, G.onload = () => {
        Ke++, Ke === Ah.length && (O.current = !0);
      }, Te[st] = G;
    }), D.current = Te;
  }, []), React.useEffect(() => {
    let Ke = 0;
    const Te = [];
    wh.forEach((Je, st) => {
      const G = new Image();
      G.src = Je, G.onload = () => {
        if (Ke++, Ke === wh.length) {
          q.current = !0;
          let nt = 0;
          for (const rt of Te) {
            const it = rt.height > 0 ? rt.width / rt.height : 0;
            it > nt && (nt = it);
          }
          H.current = nt;
        }
      }, Te[st] = G;
    }), B.current = Te;
  }, []);
  const Ge = React.useCallback((Ke, Te, Je) => {
      const st = Te / Je;
      return Math.floor(Ke / st);
    }, []),
    qe = React.useCallback((Ke, Te, Je, st, G) => {
      const nt = Ge(Te, st, G),
        rt = Math.min(Ge(Je, st, G), Ke.length - 1);
      if (nt >= rt) return 0;
      let it = 0;
      for (let Fe = nt; Fe <= rt; Fe++) it += Ke[Fe];
      return it / (rt - nt + 1) / 255;
    }, [Ge]);
  return React.useEffect(() => {
    var ft;
    const Ke = c.current;
    if (!Ke) return;
    const Te = Ke.getContext("2d");
    if (!Te) return;
    const Je = () => {
      const U = window.devicePixelRatio || 1,
        T = Ke.getBoundingClientRect();
      Ke.width = T.width * U, Ke.height = T.height * U, Te.setTransform(U, 0, 0, U, 0, 0);
    };
    Je(), window.addEventListener("resize", Je);
    const st = ((ft = analyser == null ? void 0 : analyser.context) == null ? void 0 : ft.sampleRate) || 44100,
      G = (analyser == null ? void 0 : analyser.fftSize) || 2048;
    let nt = performance.now(),
      rt = 0;
    const it = () => {
        nt = performance.now();
      },
      Fe = () => {
        document.hidden || it();
      };
    document.addEventListener("visibilitychange", Fe);
    const Et = (U, T, $, ve, ue) => {
        if (U.length === 0 || !U[0].complete) return;
        const Ye = U.map(Re => Re.width / Re.height).map(Re => Re * ve),
          ke = Ye.reduce((Re, oe) => Re + oe, 0);
        let Qe = -(T % ke);
        for (; Qe < ue;) for (let Re = 0; Re < U.length; Re++) {
          const oe = U[Re],
            Le = Ye[Re];
          if (Qe + Le > 0 && Qe < ue) {
            const Ve = Math.floor(Qe),
              _e = Math.floor($),
              ze = Math.ceil(Le) + 1,
              V = Math.ceil(ve);
            Te.drawImage(oe, Ve, _e, ze, V);
          }
          if (Qe += Le, Qe >= ue) break;
        }
      },
      tt = () => {
        u.current = requestAnimationFrame(tt);
        const U = performance.now();
        let T = (U - nt) / 1e3;
        nt = U, (!Number.isFinite(T) || T < 0) && (T = 0), T > s_ && (T = s_);
        const $ = T * r_;
        rt += T, he.current += $;
        const ve = Ke.getBoundingClientRect(),
          ue = ve.width,
          se = ve.height;
        if (isPlaying) {
          const oe = params.sceneSpeed || 1;
          k.current += aC * oe * $, W.current += rC * oe * $, J.current += sC * oe * $;
        }
        Te.clearRect(0, 0, ue, se);
        const Ye = () => {
          const oe = Ee.current,
            Le = Be.current,
            Ve = oe.length > 0 ? oe : He.current;
          Ve.length > 0 && (He.current = Ve);
          const _e = me.current,
            ze = He.current;
          ze && ze !== _e.currentLyric && ze !== _e.nextLyric && (_e.nextLyric = ze, _e.phase = "fadeOut", _e.alpha = Math.min(1, Math.max(0, _e.alpha)));
          const V = .04;
          _e.phase === "fadeOut" ? (_e.alpha = Math.max(0, _e.alpha - V * $), _e.alpha <= .01 && (_e.nextLyric && (_e.currentLyric = _e.nextLyric), _e.nextLyric = null, _e.phase = "fadeIn")) : _e.phase === "fadeIn" ? (_e.alpha = Math.min(1, _e.alpha + V * $), _e.alpha >= .99 && (_e.alpha = 1, _e.phase = "idle")) : (_e.alpha = 1, !_e.currentLyric && ze && (_e.currentLyric = ze));
          const Pe = ue * .5,
            we = se * .63,
            Ie = rt,
            Ne = Math.cos(Ie * .3) * 12,
            Ae = Math.sin(Ie * .5) * 12 + Math.sin(Ie * 1.2) * 4,
            je = Math.cos(Ie * .35 + 2) * 10,
            ct = Math.sin(Ie * .55 + 1.5) * 10 + Math.sin(Ie * 1.3) * 3,
            ut = ue < 768,
            mt = ue >= 768 && ue < 1024,
            Gt = ut ? 20 : mt ? 26 : 34,
            gt = ut ? 12 : mt ? 14 : 18,
            Fn = ut ? 500 : 600,
            Un = ut ? 400 : 500;
          Te.save(), Te.textAlign = "center", Te.textBaseline = "middle", Te.shadowColor = "rgba(0,0,0,0.25)", Te.shadowBlur = 6, Te.shadowOffsetX = 0, Te.shadowOffsetY = 2;
          const bn = .4 * _e.alpha;
          if (_e.currentLyric) if (Te.font = `${Fn} ${Gt}px Inter, system-ui, -apple-system, Segoe UI, sans-serif`, Te.fillStyle = `rgba(255,255,255,${bn})`, ut) {
            const j = Math.max(80, ue - 48),
              xe = 2,
              De = Math.round(Gt * 1.2),
              Ze = Pt => Te.measureText(Pt).width,
              lt = Pt => {
                if (Ze(Pt) <= j) return Pt;
                let gn = Pt;
                for (; gn.length > 0 && Ze(gn + "…") > j;) gn = gn.slice(0, -1);
                return gn.length > 0 ? gn + "…" : "…";
              },
              xt = Pt => {
                const fn = (Pt ?? "").trim();
                if (!fn) return [];
                const gn = /\s/.test(fn),
                  Tn = gn ? fn.split(/\s+/) : Array.from(fn),
                  C = gn ? " " : "",
                  K = [];
                let ce = "";
                const le = () => {
                  ce && K.push(ce), ce = "";
                };
                for (const ne of Tn) {
                  const Xe = ce ? ce + C + ne : ne;
                  if (Ze(Xe) <= j) {
                    ce = Xe;
                    continue;
                  }
                  if (ce) {
                    if (le(), K.length >= xe) break;
                    if (Ze(ne) <= j) {
                      ce = ne;
                      continue;
                    }
                  }
                  let We = "";
                  for (const $e of Array.from(ne)) {
                    const at = We + $e;
                    if (Ze(at) <= j) We = at;else if (We) {
                      if (ce = We, le(), K.length >= xe) {
                        We = "";
                        break;
                      }
                      We = $e;
                    } else if (ce = $e, le(), K.length >= xe) {
                      We = "";
                      break;
                    }
                  }
                  if (K.length >= xe) break;
                  We && (ce = We);
                }
                return K.length < xe && ce && le(), K.length > xe ? K.slice(0, xe) : (K.length === xe && (K[xe - 1] = lt(K[xe - 1])), K);
              },
              bt = te.current;
            let Ut;
            bt && bt.text === _e.currentLyric && bt.width === j ? Ut = bt.lines : (Ut = xt(_e.currentLyric), te.current = {
              text: _e.currentLyric,
              width: j,
              lines: Ut
            });
            const qt = Pe + Ne,
              _t = we + Ae;
            for (let Pt = 0; Pt < Ut.length; Pt++) Te.fillText(Ut[Pt], qt, _t + Pt * De, j);
            Ye._lyricLines = Math.max(1, Ut.length), Ye._lyricLineHeight = De, Ye._lyricMaxWidth = j;
          } else Te.fillText(_e.currentLyric, Pe + Ne, we + Ae);
          if (Le) {
            Te.font = `${Un} ${gt}px Inter, system-ui, -apple-system, Segoe UI, sans-serif`, Te.fillStyle = "rgba(255,255,255,0.20)";
            const Tt = ut ? Number(Ye._lyricLines ?? 1) : 1,
              j = ut ? Number(Ye._lyricLineHeight ?? Math.round(Gt * 1.2)) : 0,
              xe = ut ? Number(Ye._lyricMaxWidth ?? ue - 48) : void 0,
              De = we + Ae + (ut ? (Tt - 1) * j : 0),
              Ze = we + ct + (ut ? (Tt - 1) * j : 0) + Math.round(Gt * 1.25),
              lt = De + Gt * .9,
              xt = Math.max(Ze, lt);
            ut && typeof xe == "number" && xe > 0 ? Te.fillText(Le, Pe + je, xt, xe) : Te.fillText(Le, Pe + je, xt);
          }
          Te.restore();
        };
        if (M.current) {
          if (Et(g.current, k.current, 0, se, ue), S.current && E.current.length > 0 && g.current.length >= 3) {
            for (L.current += $; L.current >= t_;) L.current -= t_, _.current = (_.current + 1) % Th.length;
            const ze = E.current[_.current],
              V = se * oC,
              Pe = ze.width / ze.height,
              we = V * Pe,
              Ie = g.current[0].width / g.current[0].height * se,
              Ne = g.current[1].width / g.current[1].height * se,
              Ae = g.current[2].width / g.current[2].height * se,
              je = Ie + Ne + Ae,
              ct = Ie + Ne,
              ut = Ae * .3,
              mt = ct + ut,
              Gt = k.current % je;
            let gt = mt - Gt;
            if (gt < -we && (gt += je), gt > ue + je - we && (gt -= je), gt > -we && gt < ue) {
              const Fn = se - V - se * .05;
              Te.drawImage(ze, gt, Fn, we, V);
            }
          }
          if (O.current && D.current.length > 0 && g.current.length >= 3 && g.current[0].width > 0 && g.current[1].width > 0 && g.current[2].width > 0) {
            for (P.current += $; P.current >= n_;) P.current -= n_, F.current = (F.current + 1) % Ah.length;
            const ze = D.current[F.current],
              V = se * lC,
              Pe = ze.width / ze.height,
              we = V * Pe,
              Ie = g.current[0].width / g.current[0].height * se,
              Ne = g.current[1].width / g.current[1].height * se,
              Ae = g.current[2].width / g.current[2].height * se,
              je = Ie + Ne + Ae,
              ct = Ie,
              ut = Ne * .3,
              mt = .9,
              Gt = k.current % je,
              gt = se - V - se * .05,
              Fn = Math.max(0, Ne - ut - we);
            for (let Un = -1; Un <= 1; Un++) {
              const bn = -Gt + ct + Un * je,
                Tt = Math.max(0, ue - bn),
                j = Math.min(Tt * (1 - mt), Fn),
                xe = bn + ut + j;
              xe > -we && xe < ue && Te.drawImage(ze, xe, gt, we, V);
            }
          }
          if (q.current && B.current.length > 0 && g.current.length >= 3 && g.current[0].width > 0 && g.current[1].width > 0 && g.current[2].width > 0) {
            for (A.current += $; A.current >= i_;) A.current -= i_, w.current = (w.current + 1) % wh.length;
            const ze = B.current[w.current],
              V = se * cC,
              Pe = ze.width / ze.height,
              we = V * Pe,
              Ie = g.current[0].width / g.current[0].height * se,
              Ne = g.current[1].width / g.current[1].height * se,
              Ae = g.current[2].width / g.current[2].height * se,
              je = Ie + Ne + Ae,
              ct = 0,
              ut = Ie * .3,
              mt = .8,
              Gt = k.current % je,
              gt = se - V - se * .05,
              Fn = Math.max(0, Ie - ut - we);
            for (let Un = -1; Un <= 1; Un++) {
              const bn = -Gt + ct + Un * je,
                Tt = Math.max(0, ue - bn),
                j = Math.min(Tt * (1 - mt), Fn),
                xe = bn + ut + j;
              xe > -we && xe < ue && Te.drawImage(ze, xe, gt, we, V);
            }
          }
          Ye();
          const oe = se * .6,
            Le = se - oe;
          Et(v.current, W.current, Le, oe, ue);
          const Ve = se * .3,
            _e = se - Ve;
          Et(y.current, J.current, _e, Ve, ue);
        } else Te.fillStyle = uC, Te.fillRect(0, 0, ue, se), Ye();
        if (!I.current || ie.current.length === 0) {
          const oe = [];
          for (let Le = 0; Le < vC; Le++) oe.push({
            x: Math.random() * ue,
            y: Math.random() * se,
            size: l_[Math.floor(Math.random() * l_.length)],
            speedY: Ch.min + Math.random() * (Ch.max - Ch.min),
            speedX: Dh.min + Math.random() * (Dh.max - Dh.min),
            color: o_[Math.floor(Math.random() * o_.length)],
            swayOffset: Math.random() * Math.PI * 2
          });
          ie.current = oe, I.current = !0;
        }
        ie.current.forEach(oe => {
          oe.y += oe.speedY * $;
          const Le = rt * (.02 * r_) + oe.swayOffset,
            Ve = Math.sin(Le) * _C * .1;
          oe.x += (oe.speedX + Ve) * $, oe.y > se + oe.size && (oe.y = -oe.size, oe.x = Math.random() * ue), oe.x > ue + oe.size ? oe.x = -oe.size : oe.x < -oe.size && (oe.x = ue + oe.size), Te.fillStyle = oe.color;
          const _e = Math.floor(oe.x),
            ze = Math.floor(oe.y);
          oe.size <= 2 ? Te.fillRect(_e, ze, oe.size, oe.size) : oe.size === 3 ? (Te.fillRect(_e + 1, ze, 1, 1), Te.fillRect(_e, ze + 1, 3, 1), Te.fillRect(_e + 1, ze + 2, 1, 1)) : oe.size === 4 ? (Te.fillRect(_e + 1, ze, 2, 1), Te.fillRect(_e, ze + 1, 4, 2), Te.fillRect(_e + 1, ze + 3, 2, 1)) : (Te.fillRect(_e + 1, ze, 1, 1), Te.fillRect(_e + 3, ze, 1, 1), Te.fillRect(_e, ze + 1, 5, 1), Te.fillRect(_e + 1, ze + 2, 3, 1), Te.fillRect(_e, ze + 3, 5, 1), Te.fillRect(_e + 1, ze + 4, 1, 1), Te.fillRect(_e + 3, ze + 4, 1, 1));
        });
        let ke = [0, 0, 0, 0, 0];
        if (analyser) {
          (!ee.current || ee.current.length !== analyser.frequencyBinCount) && (ee.current = new Uint8Array(analyser.frequencyBinCount)), analyser.getByteFrequencyData(ee.current);
          const oe = ee.current;
          oe && (ke = CHARACTERS.map(Le => qe(oe, Le.freqStart, Le.freqEnd, st, G)));
        }
        const ye = params.sensitivity || .5,
          Qe = hC * (.5 + ye * 1.5),
          Re = ke.every(oe => oe < .03);
        for (CHARACTERS.forEach((oe, Le) => {
          const Ve = ke[Le],
            _e = pe.current[Le];
          if (Ve > _e) {
            const ut = 1 - Math.pow(1 - fC, $);
            pe.current[Le] = _e + (Ve - _e) * ut;
          } else {
            const mt = 1 - Math.pow(1 - (Re ? 2e-4 : dC), $);
            pe.current[Le] = _e + (Ve - _e) * mt;
          }
          let ze = Ve - pe.current[Le];
          const V = .08;
          ze > V && (pe.current[Le] = Ve - V, ze = V);
          const Pe = CHARACTERS[Le].extraBoost || 1;
          let we = Math.max(0, ze * Qe * Pe);
          we = Math.min(we, pC);
          const Ie = Me.current[Le],
            Ne = z.current[Le],
            je = (we - Ie) * mC;
          z.current[Le] = Ne + je * $;
          const ct = params.friction ?? .94;
          z.current[Le] *= Math.pow(ct, $), Me.current[Le] = Ie + z.current[Le] * $, Me.current[Le] < 0 && (Me.current[Le] = 0, z.current[Le] *= -.2), Me.current[Le] > 1 && (Me.current[Le] = 1, z.current[Le] *= -.4);
        }), x.current += $; x.current >= a_;) x.current -= a_, CHARACTERS.forEach((oe, Le) => {
          oe.isAnimated && oe.frames.length > 1 && (h.current[Le] = (h.current[Le] + 1) % oe.frames.length);
        });
        Z.current || (Y.current = CHARACTERS.map(() => {
          const oe = [];
          for (let Le = 0; Le < yC; Le++) {
            const Ve = lu[Math.floor(Math.random() * lu.length)];
            oe.push({
              relativeX: Math.random(),
              relativeY: (Math.random() - .5) * .8,
              size: Ve,
              baseSize: Ve,
              opacity: .5 + Math.random() * .5,
              speed: c_ * (.7 + Math.random() * .6)
            });
          }
          return oe;
        }), Z.current = !0), CHARACTERS.forEach((oe, Le) => {
          const Ve = Me.current[Le],
            _e = oe.baseX,
            ze = ue * .505,
            V = 90;
          let Pe;
          _e < .5 ? Pe = Math.min(ue * _e, ze - V) : _e > .51 ? Pe = Math.max(ue * _e, ze + V) : Pe = ze;
          const we = se * oe.baseY,
            Ie = Ve * ue * xC,
            Ne = Pe + Ie,
            Ae = we,
            je = gC + Ie,
            ct = Ne - je,
            ut = Te.createLinearGradient(ct, 0, Ne, 0);
          ut.addColorStop(0, "transparent"), ut.addColorStop(.3, oe.trailColor + "30"), ut.addColorStop(.7, oe.trailColor + "70"), ut.addColorStop(1, oe.trailColor), Te.fillStyle = ut, Te.fillRect(ct, Ae - Rh / 2, je, Rh);
          const mt = Y.current[Le];
          mt && mt.forEach(gt => {
            gt.relativeX -= gt.speed / je * $, 1 - gt.relativeX, gt.size = gt.baseSize * (.3 + gt.relativeX * .7), gt.opacity = Math.max(0, .9 * gt.relativeX), (gt.relativeX < 0 || gt.size < 1 || gt.opacity < .1) && (gt.relativeX = .85 + Math.random() * .15, gt.relativeY = (Math.random() - .5) * .8, gt.baseSize = lu[Math.floor(Math.random() * lu.length)], gt.size = gt.baseSize, gt.opacity = .7 + Math.random() * .3, gt.speed = c_ * (.7 + Math.random() * .6));
            const Fn = ct + gt.relativeX * je,
              Un = Ae + gt.relativeY * Rh,
              bn = Math.max(2, Math.floor(gt.size));
            Te.fillStyle = `rgba(255, 255, 255, ${gt.opacity * .5})`;
            const Tt = Math.floor(Fn),
              j = Math.floor(Un);
            bn <= 12 ? (Te.fillRect(Tt - 4, j - 3, 3, 2), Te.fillRect(Tt + 1, j - 3, 3, 2), Te.fillRect(Tt - 4, j - 1, 9, 2), Te.fillRect(Tt - 3, j + 1, 7, 1), Te.fillRect(Tt - 2, j + 2, 5, 1), Te.fillRect(Tt - 1, j + 3, 3, 1), Te.fillRect(Tt, j + 4, 1, 1)) : bn <= 16 ? (Te.fillRect(Tt - 5, j - 4, 4, 2), Te.fillRect(Tt + 1, j - 4, 4, 2), Te.fillRect(Tt - 5, j - 2, 11, 3), Te.fillRect(Tt - 4, j + 1, 9, 2), Te.fillRect(Tt - 3, j + 3, 7, 1), Te.fillRect(Tt - 2, j + 4, 5, 1), Te.fillRect(Tt - 1, j + 5, 3, 1), Te.fillRect(Tt, j + 6, 1, 1)) : (Te.fillRect(Tt - 6, j - 5, 5, 2), Te.fillRect(Tt + 1, j - 5, 5, 2), Te.fillRect(Tt - 6, j - 3, 13, 4), Te.fillRect(Tt - 5, j + 1, 11, 2), Te.fillRect(Tt - 4, j + 3, 9, 1), Te.fillRect(Tt - 3, j + 4, 7, 1), Te.fillRect(Tt - 2, j + 5, 5, 1), Te.fillRect(Tt - 1, j + 6, 3, 1), Te.fillRect(Tt, j + 7, 1, 1));
          });
          const Gt = f.current[Le];
          if (m.current && Gt && Gt.length > 0) {
            const gt = h.current[Le],
              Fn = Gt[gt] || Gt[0];
            Te.drawImage(Fn, Ne - cl / 2, Ae - cl / 2, cl, cl);
          } else Te.fillStyle = oe.trailColor, Te.beginPath(), Te.arc(Ne, Ae, cl / 3, 0, Math.PI * 2), Te.fill();
        });
      };
    return tt(), () => {
      window.removeEventListener("resize", Je), document.removeEventListener("visibilitychange", Fe), cancelAnimationFrame(u.current);
    };
  }, [analyser, isPlaying, params, qe]), jsxRuntime.jsx("canvas", {
    ref: c,
    className: "w-full h-full absolute inset-0",
    style: {
      imageRendering: "pixelated"
    }
  });
};
export { PowerpuffRun };
//# sourceMappingURL=PowerpuffRun.js.map
