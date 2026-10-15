import { React, jsxRuntime } from "../vendor/react-runtime.js";
import { H3, Ia, Li, Na, P3, Pr, Pw, RoundedBoxGeometry, SimplexNoise, U3, W3, Xt, bu, ji, q_, yi } from "../vendor/three-runtime.js";
const ay = "/assets/rabbit_right_idle-DF0903mH.webp";
const ry = "/assets/rabbit_right_up-BOxRqdlp.webp";
const sy = "/assets/rabbit_right_down-XcTMHo7l.webp";
const oy = "/assets/rabbit_left_idle-CrNwdQhp.webp";
const ly = "/assets/rabbit_left_up-DpitIzTi.webp";
const cy = "/assets/rabbit_left_down-2ciY_fXn.webp";
const CUBES_COLORS = {
  pink: {
    bgTop: "#FFF2F4",
    bgBottom: "#FFE5E8",
    cubeBottom: [.953, .38, .435],
    cubeTop: [1, .898, .91]
  },
  purple: {
    bgTop: "#EFEFF7",
    bgBottom: "#CFD1F3",
    cubeBottom: [.396, .431, .898],
    cubeTop: [.933, .937, 1]
  },
  green: {
    bgTop: "#ECF3EC",
    bgBottom: "#D1ECD0",
    cubeBottom: [.345, .741, .325],
    cubeTop: [.867, .965, .863]
  }
};
const zw = 8;
const pu = 9;
const Vr = 1.2;
const Fw = [.75, .75, 1];
const Bw = [1, .8, .88];
const Hw = 3.5;
const Gw = [".........", "..*...*..", ".*.*.*.*.", ".*..*..*.", ".*.....*.", "..*...*..", "...*.*...", "....*....", "........."];
const Vw = new Set(Gw.flatMap((s, e) => s.split("").map((n, a) => n === "*" ? e * pu + a : -1)).filter(s => s >= 0));
const kw = 6;
const w0 = 2;
const Eh = w0 / 2 * .75;
const jw = 6;
const Ml = 120;
const Xw = .985;
const Ww = .015;
const Yw = .05;
const qw = .18;
const Zw = Yw * Ml;
const Kw = qw * Ml;
const Qw = Ww * Ml * Ml;
const Jw = Math.log(Xw) * Ml;
const $w = 60;
const Zv = 1 / 30;
const eR = 15;
const tR = 2;
const createBottomAnchoredBoxGeometry = (s, e, n, a, o, c) => {
  const u = new RoundedBoxGeometry(s, e, n, a, o),
    f = u.attributes.position;
  for (let m = 0; m < f.count; m++) {
    const x = (f.getY(m) + e / 2) / e,
      g = 1 - (1 - c) * x;
    f.setX(m, f.getX(m) * g), f.setZ(m, f.getZ(m) * g);
  }
  return f.needsUpdate = !0, u.computeVertexNormals(), u;
};
const CUBE_VERTEX_SHADER = `
  varying float vWorldY;
  varying vec3 vWorldNormal;
  
  void main() {
    // Calculate world position
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldY = worldPosition.y;
    
    // Transform normal to world space
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    
    // Standard vertex transformation
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const CUBE_FRAGMENT_SHADER = `
  uniform vec3 colorBottom;
  uniform vec3 colorTop;
  uniform float maxHeight;
  
  varying float vWorldY;
  varying vec3 vWorldNormal;
  
  // Linear to sRGB conversion (for output)
  vec3 linearToSRGB(vec3 linear) {
    return pow(linear, vec3(1.0/2.2));
  }
  
  void main() {
    // Map world Y (0 to maxHeight) to color gradient
    float t = clamp(vWorldY / maxHeight, 0.0, 1.0);
    
    // Use smooth interpolation for nicer gradient
    float smoothT = t * t * (3.0 - 2.0 * t);
    
    // Interpolate between bottom (saturated blue) and top (blue-tinted white) colors
    vec3 baseColor = mix(colorBottom, colorTop, smoothT);
    
    // === FACE-BASED LIGHTING ===
    // Simulates a light source from above-right
    // Top face (normal.y close to 1): +15% brightness
    // Right side (normal.x close to 1): +5% brightness
    // Left side (normal.x close to -1): base brightness
    
    float topFactor = smoothstep(0.5, 1.0, vWorldNormal.y);
    float rightFactor = smoothstep(0.5, 1.0, vWorldNormal.x);
    
    // Brightness multiplier: 
    // - Left side = 1.0 (base)
    // - Right side = 1.05 (+5%)
    // - Top face = 1.15 (+15%)
    float brightness = 1.0 + topFactor * 0.15 + rightFactor * 0.05;
    
    vec3 color = baseColor * brightness;
    
    // Clamp to prevent over-bright
    color = min(color, vec3(1.0));
    
    // Apply gamma correction for proper brightness in sRGB display
    color = linearToSRGB(color);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;
const CubesVisualizer = ({
  analyser: analyser,
  isPlaying: isPlaying,
  params: params,
  colorTheme: colorTheme,
  uiBottomInsetPx: uiBottomInsetPx
}) => {
  const c = React.useRef(null),
    u = React.useRef(null),
    f = React.useRef(null),
    m = React.useRef(null),
    h = React.useRef([]),
    x = React.useRef(null),
    g = React.useRef(null),
    v = React.useRef(null),
    y = React.useRef(colorTheme),
    M = React.useRef([]),
    E = React.useRef(new Uint8Array(128)),
    S = React.useRef(new Float32Array(pu * pu).fill(1)),
    _ = React.useRef(null),
    L = React.useRef(new SimplexNoise()),
    D = React.useRef(0),
    O = React.useRef(0),
    F = params.showHearts ? pu : zw,
    P = (q, w) => {
      const A = new Set();
      for (const H of q) H !== w && (A.add(H.cubeIndex), H.isJumping && H.targetCubeIndex !== H.cubeIndex && A.add(H.targetCubeIndex));
      return A;
    },
    B = (q, w, A) => {
      const H = Math.floor(q / F),
        k = q % F,
        W = [];
      for (let J = -w; J <= w; J++) for (let ie = -w; ie <= w; ie++) {
        if (J === 0 && ie === 0 || Math.abs(J) + Math.abs(ie) > w) continue;
        const I = H + J,
          Y = k + ie;
        if (I >= 0 && I < F && Y >= 0 && Y < F) {
          const Z = I * F + Y;
          A.has(Z) || W.push(Z);
        }
      }
      return W;
    };
  return React.useEffect(() => {
    if (!c.current) return;
    const q = c.current,
      w = new U3();
    u.current = w;
    const A = CUBES_COLORS[y.current],
      H = document.createElement("canvas");
    H.width = 2, H.height = 512;
    const k = H.getContext("2d"),
      W = k.createLinearGradient(0, 0, 0, 512);
    W.addColorStop(0, A.bgTop), W.addColorStop(1, A.bgBottom), k.fillStyle = W, k.fillRect(0, 0, 2, 512);
    const J = new H3(H);
    v.current = J, w.background = J;
    const ie = new Xt(A.bgBottom);
    w.fog = new bu(ie, 12, 45);
    const I = new Li(45, q.clientWidth / q.clientHeight, .1, 1e3);
    I.position.set(12, 12, 12), I.lookAt(0, 1, 0), f.current = I;
    const Y = new Pw({
      antialias: !0,
      alpha: !1
    });
    Y.setSize(q.clientWidth, q.clientHeight), Y.setPixelRatio(Math.min(window.devicePixelRatio, 2)), Y.toneMapping = Na, Y.outputColorSpace = yi, q.appendChild(Y.domElement), m.current = Y;
    const Z = createBottomAnchoredBoxGeometry(1, 1, 1, 4, .1, .82);
    Z.translate(0, .5, 0);
    const pe = new ji({
      vertexShader: CUBE_VERTEX_SHADER,
      fragmentShader: CUBE_FRAGMENT_SHADER,
      uniforms: {
        colorBottom: {
          value: new Xt(...A.cubeBottom)
        },
        colorTop: {
          value: new Xt(...A.cubeTop)
        },
        maxHeight: {
          value: kw
        }
      }
    });
    x.current = pe;
    const Me = new ji({
      vertexShader: CUBE_VERTEX_SHADER,
      fragmentShader: CUBE_FRAGMENT_SHADER,
      uniforms: {
        colorBottom: {
          value: new Xt(...Fw)
        },
        colorTop: {
          value: new Xt(...Bw)
        },
        maxHeight: {
          value: Hw
        }
      }
    });
    g.current = Me;
    const z = [],
      ee = (F - 1) * Vr / 2,
      he = F * F;
    S.current = new Float32Array(he).fill(1);
    for (let it = 0; it < he; it++) {
      const Fe = Math.floor(it / F),
        tt = it % F * Vr - ee,
        ft = Fe * Vr - ee,
        U = params.showHearts && Vw.has(it),
        T = new Ia(Z, U ? Me : pe);
      T.position.set(tt, 0, ft), T.scale.set(1, 1, 1), w.add(T), z.push(T);
    }
    h.current = z;
    const Ee = new W3(),
      Be = Ee.load(ay),
      te = Ee.load(ry),
      me = Ee.load(sy),
      He = Ee.load(oy),
      Ge = Ee.load(ly),
      qe = Ee.load(cy),
      Ke = 4,
      Je = Ke + 4,
      st = [],
      G = new Set();
    for (let it = 0; it < Je; it++) {
      let Fe;
      do Fe = Math.floor(Math.random() * he); while (G.has(Fe));
      G.add(Fe);
      const Et = it >= Ke,
        tt = Et ? He : Be,
        ft = Et ? Ge : te,
        U = Et ? qe : me,
        T = new q_({
          map: tt
        }),
        $ = new P3(T);
      $.scale.set(w0, w0, 1);
      const ve = z[Fe];
      $.position.set(ve.position.x, ve.scale.y + Eh, ve.position.z), w.add($), st.push({
        sprite: $,
        cubeIndex: Fe,
        targetCubeIndex: Fe,
        velocityY: 0,
        isJumping: !1,
        startX: ve.position.x,
        startZ: ve.position.z,
        hopProgress: 1,
        textures: {
          idle: tt,
          up: ft,
          down: U
        }
      });
    }
    M.current = st;
    const nt = () => {
        if (!q || !I || !Y) return;
        const it = q.clientWidth,
          Fe = q.clientHeight;
        I.aspect = it / Fe, I.updateProjectionMatrix(), Y.setSize(it, Fe);
      },
      rt = new ResizeObserver(nt);
    return rt.observe(q), () => {
      rt.disconnect(), _.current && cancelAnimationFrame(_.current), q && Y.domElement && q.removeChild(Y.domElement), Y.dispose(), Z.dispose(), pe.dispose(), Me.dispose();
    };
  }, [F]), React.useEffect(() => {
    if (y.current = colorTheme, !u.current || !x.current || !v.current) return;
    const q = CUBES_COLORS[colorTheme],
      w = u.current,
      A = x.current,
      H = v.current,
      k = document.createElement("canvas");
    k.width = 2, k.height = 512;
    const W = k.getContext("2d"),
      J = W.createLinearGradient(0, 0, 0, 512);
    J.addColorStop(0, q.bgTop), J.addColorStop(1, q.bgBottom), W.fillStyle = J, W.fillRect(0, 0, 2, 512), H.image = k, H.needsUpdate = !0, w.fog instanceof bu && w.fog.color.set(q.bgBottom), A.uniforms.colorBottom.value.setRGB(...q.cubeBottom), A.uniforms.colorTop.value.setRGB(...q.cubeTop);
  }, [colorTheme]), React.useEffect(() => {
    D.current = uiBottomInsetPx ?? 0;
  }, [uiBottomInsetPx]), React.useEffect(() => {
    if (h.current.length === 0 || !m.current || !u.current || !f.current) return;
    analyser && (E.current = new Uint8Array(analyser.frequencyBinCount));
    const q = u.current,
      w = f.current,
      A = m.current,
      H = h.current,
      k = L.current,
      W = c.current,
      J = (F - 1) * Vr / 2,
      ie = Math.sqrt(J * J + J * J);
    let I = performance.now(),
      Y = 0;
    const Z = () => {
        I = performance.now();
      },
      pe = () => {
        document.hidden || Z();
      };
    document.addEventListener("visibilitychange", pe);
    const Me = () => {
      _.current = requestAnimationFrame(Me);
      const z = performance.now();
      let ee = (z - I) / 1e3;
      I = z, (!Number.isFinite(ee) || ee < 0) && (ee = 0), ee > Zv && (ee = Zv);
      const he = ee * $w;
      if (Y += ee, W) {
        const Ge = Math.max(0, D.current),
          qe = Math.max(1, W.clientHeight),
          Ke = Pr.clamp(Ge / qe, 0, .5),
          Te = Pr.clamp(Ke * 6, 0, 2.5),
          Je = 1 - Math.pow(1 - .12, he);
        O.current = Pr.lerp(O.current, Te, Je), w.lookAt(0, 1 - O.current, 0);
      }
      analyser && isPlaying && analyser.getByteFrequencyData(E.current);
      const Ee = E.current,
        Be = H.length;
      S.current.length !== Be && (S.current = new Float32Array(Be).fill(1));
      const te = Y * .5,
        me = F % 2 === 1,
        He = Math.floor(F / 2);
      for (let Ge = 0; Ge < Be; Ge++) {
        const qe = H[Ge],
          Ke = Math.floor(Ge / F),
          Te = Ge % F,
          Je = Te * Vr - J,
          st = Ke * Vr - J,
          G = Math.sqrt(Je * Je + st * st),
          it = (me && Ke === He && Te === He ? Vr * .9 : G) / ie,
          Fe = 1 / Math.max(.1, params.spread),
          Et = Math.floor(Math.pow(it, Fe) * Ee.length * .4);
        let tt = 0;
        if (isPlaying && analyser && Ee.length > 0) {
          const Qe = Math.min(Et, Ee.length - 1),
            Re = Ee[Qe] / 255;
          tt = Math.pow(Re, 2.5);
        } else tt = (Math.sin(G * .5 - te * 2) + 1) * .05;
        const ft = (k.noise3d(Je * .2, st * .2, te * .5) + 1) * .5,
          U = tt * (.4 + .6 * ft),
          $ = .3 + ft * .4 + U * params.height * 10,
          ve = S.current[Ge],
          ue = Pr.clamp(params.damping, 0, 1),
          se = 1 - Math.pow(1 - ue, he),
          Ye = Pr.lerp(ve, $, se);
        S.current[Ge] = Ye;
        const ke = qe.scale.y;
        qe.scale.y = Ye;
        const ye = M.current.find(Qe => Qe.cubeIndex === Ge);
        if (ye) {
          ye.sprite.visible = params.showRabbits;
          const Re = Ye + Eh,
            oe = ee,
            Le = Ye - ke,
            Ve = oe > 0 ? Le / oe : 0;
          if (!isPlaying) ye.isJumping = !1, ye.velocityY = 0, ye.sprite.position.x = qe.position.x, ye.sprite.position.y = Re, ye.sprite.position.z = qe.position.z, ye.sprite.material.map = ye.textures.idle;else {
            if (Ve > Zw && !ye.isJumping && (ye.velocityY = Ve + Kw, ye.isJumping = !0, ye.targetCubeIndex = ye.cubeIndex, ye.velocityY > eR)) {
              const _e = P(M.current, ye),
                ze = B(ye.cubeIndex, tR, _e);
              ze.length > 0 && (ye.startX = ye.sprite.position.x, ye.startZ = ye.sprite.position.z, ye.targetCubeIndex = ze[Math.floor(Math.random() * ze.length)], ye.hopProgress = 0);
            }
            if (ye.isJumping) {
              if (ye.velocityY *= Math.exp(Jw * oe), ye.velocityY -= Qw * oe, ye.sprite.position.y += ye.velocityY * oe, ye.hopProgress < 1 && ye.targetCubeIndex !== ye.cubeIndex) {
                ye.hopProgress = Math.min(1, ye.hopProgress + oe * 2.5);
                const V = ye.hopProgress,
                  Pe = V < .5 ? 2 * V * V : 1 - Math.pow(-2 * V + 2, 2) / 2,
                  we = H[ye.targetCubeIndex];
                ye.sprite.position.x = Pr.lerp(ye.startX, we.position.x, Pe), ye.sprite.position.z = Pr.lerp(ye.startZ, we.position.z, Pe);
              }
              ye.velocityY > 0 ? ye.sprite.material.map = ye.textures.up : ye.sprite.material.map = ye.textures.down;
              const ze = H[ye.targetCubeIndex].scale.y + Eh;
              ye.velocityY < 0 && ye.sprite.position.y <= ze && (M.current.some(Pe => Pe !== ye && !Pe.isJumping && Pe.cubeIndex === ye.targetCubeIndex) ? (ye.targetCubeIndex = ye.cubeIndex, ye.velocityY = 3) : (ye.cubeIndex = ye.targetCubeIndex, ye.sprite.position.y = ze, ye.hopProgress = 1, ye.velocityY = 0, ye.isJumping = !1, ye.sprite.material.map = ye.textures.idle));
            } else ye.velocityY = 0, ye.sprite.position.y = Re, ye.sprite.material.map = ye.textures.idle, ye.sprite.position.x = qe.position.x, ye.sprite.position.z = qe.position.z;
            ye.sprite.position.y > Re + jw && (ye.sprite.position.y = Re, ye.velocityY = 0, ye.isJumping = !1, ye.targetCubeIndex = ye.cubeIndex, ye.hopProgress = 1, ye.sprite.material.map = ye.textures.idle);
          }
        }
      }
      A.render(q, w);
    };
    return Me(), () => {
      _.current && cancelAnimationFrame(_.current), document.removeEventListener("visibilitychange", pe);
    };
  }, [analyser, isPlaying, params]), jsxRuntime.jsx("div", {
    ref: c,
    className: "w-full h-full"
  });
};
export { CubesVisualizer, ay, cy, ly, oy, ry, sy };
//# sourceMappingURL=CubesVisualizer.js.map
