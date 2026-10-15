import { React, ReactDefault, jsxRuntime } from "../recovered/vendor/react-runtime.js";
import { XIcon } from "../recovered/vendor/icons.js";
import { LyricsPanel } from "../recovered/components/LyricsPanel.js";
import { VinylRecord } from "../recovered/visualizers/VinylRecord.js";
import { isDarkTheme, isFullscreenTheme } from "../recovered/themes/themeRegistry.js";
import { PlayerControls } from "../recovered/components/PlayerControls.js";
import { ParticleCover } from "../recovered/visualizers/ParticleCover.js";
import { ParticleSettings } from "../recovered/settings/ParticleSettings.js";
import { CubesVisualizer } from "../recovered/visualizers/CubesVisualizer.js";
import { CubesSettings } from "../recovered/settings/CubesSettings.js";
import { DEFAULT_VINYL_PARAMS, VinylSettings } from "../recovered/settings/VinylSettings.js";
import { PowerpuffRun } from "../recovered/visualizers/PowerpuffRun.js";
import { DEFAULT_POWERPUFF_PARAMS, PowerpuffSettings } from "../recovered/settings/PowerpuffSettings.js";
import { PlaylistDrawer } from "../recovered/components/PlaylistDrawer.js";
import { ThemeDrawer } from "../recovered/components/ThemeDrawer.js";
import { getDefaultSong, getSongById, songs } from "../recovered/data/songs.js";
import { useSongLyrics } from "../lyrics/useSongLyrics";
import { LyricsNotice } from "../lyrics/LyricsNotice.js";
import { MOBILE_CONTROLS_EXTRA_PX, UI_HIDE_DELAY_MS } from "../recovered/lyrics/layout.js";
import { RollingLyrics } from "../recovered/components/RollingLyrics.js";
const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(!1),
    [theme, setTheme] = React.useState("cubes"),
    [currentTime, setCurrentTime] = React.useState(0),
    [duration, setDuration] = React.useState(0),
    [isSeeking, setIsSeeking] = React.useState(!1),
    [isBuffering, setIsBuffering] = React.useState(!1),
    isLoading = isSeeking || isBuffering,
    [currentSongId, setCurrentSongId] = React.useState(getDefaultSong().id),
    [volume, setVolume] = React.useState(.8),
    [analyser, setAnalyser] = React.useState(null),
    [isPlaylistOpen, setPlaylistOpen] = React.useState(!1),
    [isThemeOpen, setThemeOpen] = React.useState(!1),
    [isUIHidden, setUIHidden] = React.useState(!1),
    [showFullscreenLyrics, setShowFullscreenLyrics] = React.useState(!1),
    W = React.useRef(null),
    J = React.useRef(null),
    controlsRef = React.useRef(null),
    lastStableTimeRef = React.useRef(0),
    lastLyricIndexRef = React.useRef(-1),
    [controlsHeight, setControlsHeight] = React.useState(0),
    [isMobile, setIsMobile] = React.useState(() => typeof window < "u" ? window.innerWidth < 768 : !1),
    [ee, he] = React.useState(null),
    [Ee, Be] = React.useState(null);
  React.useEffect(() => {
    const j = window.visualViewport,
      xe = () => {
        const De = (j == null ? void 0 : j.height) ?? window.innerHeight;
        document.documentElement.style.setProperty("--app-height", `${Math.round(De)}px`);
      };
    return xe(), window.addEventListener("resize", xe), j == null || j.addEventListener("resize", xe), j == null || j.addEventListener("scroll", xe), () => {
      window.removeEventListener("resize", xe), j == null || j.removeEventListener("resize", xe), j == null || j.removeEventListener("scroll", xe);
    };
  }, []), React.useEffect(() => {
    const j = window.visualViewport,
      xe = () => {
        setIsMobile(window.innerWidth < 768);
      };
    return xe(), window.addEventListener("resize", xe), j == null || j.addEventListener("resize", xe), () => {
      window.removeEventListener("resize", xe), j == null || j.removeEventListener("resize", xe);
    };
  }, []), React.useLayoutEffect(() => {
    const j = controlsRef.current;
    if (!j) return;
    const xe = () => {
      const lt = j.getBoundingClientRect(),
        xt = Math.max(0, Math.round(lt.height));
      setControlsHeight(xt);
    };
    xe();
    const De = typeof ResizeObserver < "u" ? new ResizeObserver(() => xe()) : null;
    De == null || De.observe(j);
    const Ze = window.visualViewport;
    return Ze == null || Ze.addEventListener("resize", xe), Ze == null || Ze.addEventListener("scroll", xe), window.addEventListener("resize", xe), () => {
      De == null || De.disconnect(), Ze == null || Ze.removeEventListener("resize", xe), Ze == null || Ze.removeEventListener("scroll", xe), window.removeEventListener("resize", xe);
    };
  }, []);
  const currentSong = React.useMemo(() => getSongById(currentSongId) || getDefaultSong(), [currentSongId]),
    { lines: lyrics, error: lyricsError, retry: retryLyrics } = useSongLyrics(currentSong),
    controlsBottomInset = Math.max(0, controlsHeight) + 12 + (isMobile ? MOBILE_CONTROLS_EXTRA_PX : 0),
    songInfo = React.useMemo(() => {
      const j = currentSong.title,
        xe = j.match(/^(.*?)\s*-\s*(.*Remix)$/i);
      if (xe) {
        const De = xe[1].trim(),
          Ze = xe[2].replace(/\s+/g, "");
        return `${De}(${Ze}) - ${currentSong.artist}`;
      }
      return `${j} - ${currentSong.artist}`;
    }, [currentSong]),
    currentLyricIndex = React.useMemo(() => lyrics.findIndex((j, xe) => {
      const De = lyrics[xe + 1];
      return currentTime >= j.time && (!De || currentTime < De.time);
    }), [lyrics, currentTime]),
    {
      currentLyric: currentLyric,
      prevLyric: previousLyric
    } = React.useMemo(() => ({
      currentLyric: currentLyricIndex !== -1 ? lyrics[currentLyricIndex].text : "",
      prevLyric: currentLyricIndex > 0 ? lyrics[currentLyricIndex - 1].text : ""
    }), [lyrics, currentLyricIndex]),
    [particleParams, setParticleParams] = React.useState(() => {
      const j = localStorage.getItem("particleParams");
      if (j) try {
        return JSON.parse(j);
      } catch (xe) {
        console.error("Failed to parse particle params", xe);
      }
      return {
        density: 2,
        baseSize: 2,
        amplitude: 2.1,
        speed: 1.5
      };
    }),
    [cubesParams, setCubesParams] = React.useState(() => {
      const j = {
          height: .9,
          spread: 1.5,
          damping: .25,
          showRabbits: !0,
          showHearts: !0
        },
        xe = localStorage.getItem("cubesParams");
      if (xe) try {
        const De = JSON.parse(xe);
        return {
          ...j,
          ...De
        };
      } catch (De) {
        console.error("Failed to parse cubes params", De);
      }
      return j;
    }),
    [powerpuffParams, setPowerpuffParams] = React.useState(() => {
      const j = localStorage.getItem("powerpuffParams");
      if (j) try {
        const xe = JSON.parse(j);
        return {
          ...DEFAULT_POWERPUFF_PARAMS,
          ...xe
        };
      } catch (xe) {
        console.error("Failed to parse powerpuff params", xe);
      }
      return DEFAULT_POWERPUFF_PARAMS;
    }),
    [vinylParams, setVinylParams] = React.useState(() => {
      const j = localStorage.getItem("vinylParams");
      if (j) try {
        return JSON.parse(j);
      } catch (xe) {
        console.error("Failed to parse vinyl params", xe);
      }
      return DEFAULT_VINYL_PARAMS;
    });
  React.useEffect(() => {
    localStorage.setItem("cubesParams", JSON.stringify(cubesParams));
  }, [cubesParams]), React.useEffect(() => {
    localStorage.setItem("vinylParams", JSON.stringify(vinylParams));
  }, [vinylParams]), React.useEffect(() => {
    localStorage.setItem("powerpuffParams", JSON.stringify(powerpuffParams));
  }, [powerpuffParams]), React.useEffect(() => {
    localStorage.setItem("particleParams", JSON.stringify(particleParams));
  }, [particleParams]);
  const selectSong = j => {
      if (!getSongById(j) || j === currentSongId) return;
      const De = audioRef.current ? !audioRef.current.paused : isPlaying,
        Ze = autoAdvanceRef.current || De;
      autoAdvanceRef.current = !1;
      const lt = performance.now();
      songChangedAtRef.current = lt, V.current = 0, requestedSeekRef.current = null, pendingSeekRef.current = null, hiddenTimeRef.current = null, sourceRetryRef.current = !1, stalledRetryCountRef.current = 0, lastProgressTimeRef.current = 0, lastPlayStartedAtRef.current = lt, audioRef.current && (audioRef.current.pause(), audioRef.current.currentTime = 0), cancelSeek({
        invalidate: !0
      }), setCurrentTime(0), setDuration(0), setIsPlaying(!1), setIsBuffering(!1), lastStableTimeRef.current = 0, lastLyricIndexRef.current = -1, pendingAutoplayRef.current = Ze, setCurrentSongId(j);
    },
    previousSong = () => {
      const j = songs.findIndex(De => De.id === currentSongId),
        xe = j <= 0 ? songs.length - 1 : j - 1;
      selectSong(songs[xe].id);
    },
    nextSong = () => {
      const j = songs.findIndex(De => De.id === currentSongId),
        xe = j >= songs.length - 1 ? 0 : j + 1;
      selectSong(songs[xe].id);
    },
    audioRef = React.useRef(null),
    audioContextRef = React.useRef(null),
    analyserRef = React.useRef(null),
    pendingSeekRef = React.useRef(null),
    seekSessionRef = React.useRef(null),
    lastProgressTimeRef = React.useRef(0),
    lastPlayStartedAtRef = React.useRef(0),
    pendingAutoplayRef = React.useRef(!1),
    autoAdvanceRef = React.useRef(!1),
    sourceRetryRef = React.useRef(!1),
    stalledRetryCountRef = React.useRef(0),
    hiddenTimeRef = React.useRef(null),
    requestedSeekRef = React.useRef(null),
    seekRequestGenerationRef = React.useRef(0),
    isSeekingRef = React.useRef(!1),
    songChangedAtRef = React.useRef(performance.now()),
    V = React.useRef(0);
  React.useEffect(() => {
    isSeekingRef.current = isSeeking;
  }, [isSeeking]);
  const ensureAnalyser = ReactDefault.useCallback(() => {
      if (!(!audioRef.current || analyserRef.current)) try {
        const j = window.AudioContext || window.webkitAudioContext,
          xe = new j(),
          De = xe.createAnalyser();
        De.fftSize = 256;
        const Ze = xe.createMediaElementSource(audioRef.current);
        Ze.connect(De), De.connect(xe.destination), audioContextRef.current = xe, analyserRef.current = Ze, setAnalyser(De);
      } catch (j) {
        console.error("Audio Context setup failed:", j);
      }
    }, []),
    resumeAudioContext = ReactDefault.useCallback(async () => {
      audioContextRef.current || ensureAnalyser();
      const j = audioContextRef.current;
      if ((j == null ? void 0 : j.state) === "suspended") try {
        await j.resume();
      } catch {}
    }, [ensureAnalyser]),
    cancelSeek = ReactDefault.useCallback(j => {
      const xe = audioRef.current,
        De = seekSessionRef.current;
      if (pendingSeekRef.current = null, De && xe) {
        try {
          xe.muted = De.prevMuted;
        } catch {}
        seekSessionRef.current = {
          ...De,
          active: !1,
          shouldResume: !1
        };
      }
      ((j == null ? void 0 : j.invalidate) ?? !0) && (seekRequestGenerationRef.current += 1), setIsSeeking(!1);
    }, []),
    beginSeek = ReactDefault.useCallback((j, xe) => {
      const De = audioRef.current;
      if (!De) return null;
      const Ze = seekRequestGenerationRef.current + 1;
      seekRequestGenerationRef.current = Ze;
      const lt = seekSessionRef.current,
        xt = lt != null && lt.active ? lt.prevMuted : De.muted;
      seekSessionRef.current = {
        id: Ze,
        targetTime: j,
        active: !0,
        shouldResume: xe || !De.paused,
        prevMuted: xt
      }, requestedSeekRef.current = {
        songId: currentSongId,
        time: j
      }, setIsSeeking(!0), setIsBuffering(!1);
      try {
        De.muted = !0;
      } catch {}
      return Ze;
    }, [currentSongId]),
    isStaleSeek = ReactDefault.useCallback(j => {
      const xe = seekSessionRef.current;
      return j !== seekRequestGenerationRef.current || (xe == null ? void 0 : xe.id) !== j;
    }, []),
    finishSeek = ReactDefault.useCallback(j => {
      const xe = audioRef.current,
        De = seekSessionRef.current;
      if (!xe || !De || !De.active || De.id !== seekRequestGenerationRef.current || (j == null ? void 0 : j.requestId) != null && De.id !== j.requestId) return !1;
      const Ze = Math.max(0, De.targetTime),
        lt = Number.isFinite(xe.currentTime) && xe.currentTime >= Math.max(0, Ze - .35),
        bt = ((j == null ? void 0 : j.forceResume) ?? !0) && De.shouldResume ? HTMLMediaElement.HAVE_FUTURE_DATA : HTMLMediaElement.HAVE_CURRENT_DATA,
        Ut = xe.readyState >= bt;
      if (!lt || !Ut) return !1;
      seekSessionRef.current = {
        ...De,
        active: !1,
        shouldResume: !1
      }, setIsSeeking(!1), setIsBuffering(!1);
      try {
        xe.muted = De.prevMuted;
      } catch {}
      return ((j == null ? void 0 : j.forceResume) ?? !0) && De.shouldResume && xe.paused && (async () => {
        try {
          lastPlayStartedAtRef.current = performance.now(), await resumeAudioContext(), await xe.play();
        } catch {}
      })(), !0;
    }, [resumeAudioContext]);
  React.useEffect(() => {
    const j = audioRef.current;
    if (!j) return;
    const xe = () => {
        const bt = Number.isFinite(j.currentTime) ? j.currentTime : 0;
        hiddenTimeRef.current = bt, pendingSeekRef.current = null, pendingAutoplayRef.current = !1, autoAdvanceRef.current = !1, cancelSeek({
          invalidate: !0
        });
        try {
          j.pause();
        } catch {}
        setIsPlaying(!1), setIsBuffering(!1);
        const Ut = audioContextRef.current;
        Ut && Ut.suspend().catch(() => {});
      },
      De = () => {
        const bt = hiddenTimeRef.current;
        if (!(bt == null || !Number.isFinite(bt))) {
          try {
            j.currentTime = bt;
          } catch {}
          setCurrentTime(bt), lastStableTimeRef.current = bt;
        }
      },
      Ze = () => {
        document.hidden ? xe() : De();
      },
      lt = () => xe(),
      xt = () => De();
    return document.addEventListener("visibilitychange", Ze), window.addEventListener("pagehide", lt), window.addEventListener("pageshow", xt), () => {
      document.removeEventListener("visibilitychange", Ze), window.removeEventListener("pagehide", lt), window.removeEventListener("pageshow", xt);
    };
  }, [cancelSeek]), React.useEffect(() => {
    const j = () => {
      resumeAudioContext();
    };
    return window.addEventListener("pointerdown", j, {
      once: !0
    }), window.addEventListener("keydown", j, {
      once: !0
    }), () => {
      window.removeEventListener("pointerdown", j), window.removeEventListener("keydown", j);
    };
  }, [resumeAudioContext]), React.useEffect(() => {
    if (!pendingAutoplayRef.current) return;
    const j = audioRef.current;
    if (!j) return;
    pendingAutoplayRef.current = !1, (async () => {
      try {
        lastPlayStartedAtRef.current = performance.now(), await resumeAudioContext(), await j.play();
      } catch {}
    })();
  }, [currentSongId, resumeAudioContext]);
  const ct = ReactDefault.useCallback(async () => {
      const j = audioRef.current;
      if (j) try {
        j.paused ? (lastPlayStartedAtRef.current = performance.now(), await resumeAudioContext(), await j.play()) : (cancelSeek({
          invalidate: !0
        }), j.pause(), setIsBuffering(!1));
      } catch {}
    }, [cancelSeek, resumeAudioContext]),
    ut = ReactDefault.useCallback(async (j, xe, De) => {
      const Ze = audioRef.current;
      if (!Ze) return !1;
      const lt = performance.now(),
        xt = (De == null ? void 0 : De.epsilon) ?? .25,
        bt = (De == null ? void 0 : De.acceptPastTarget) ?? !1;
      for (; performance.now() - lt < xe;) {
        const Ut = Ze.currentTime;
        if (Number.isFinite(Ut)) {
          if (bt) {
            if (Ut >= j - xt) return !0;
          } else if (Math.abs(Ut - j) <= xt) return !0;
        }
        await new Promise(qt => setTimeout(qt, 50));
      }
      return !1;
    }, []),
    mt = ReactDefault.useCallback(async (j, xe) => {
      const De = audioRef.current;
      if (!De) return !1;
      const Ze = performance.now();
      if (sourceRetryRef.current || Ze < stalledRetryCountRef.current) return !1;
      sourceRetryRef.current = !0, stalledRetryCountRef.current = Ze + 5e3;
      const lt = Number.isFinite(De.duration) ? De.duration : duration,
        xt = K => {
          const ce = Number.isFinite(lt) && lt > 0 ? Math.max(0, lt - .01) : K;
          return Math.max(0, Math.min(K, ce));
        },
        bt = Number.isFinite(De.currentTime) ? De.currentTime : 0,
        Ut = xe == null ? void 0 : xe.targetTime,
        qt = Number.isFinite(Ut) ? Ut : bt,
        _t = xt(qt),
        Pt = j === "seek" ? _t : Math.max(0, _t - .05),
        fn = async () => {
          try {
            await resumeAudioContext();
          } catch {}
          try {
            De.pause();
          } catch {}
          try {
            De.currentTime = Pt;
          } catch {}
          try {
            return lastPlayStartedAtRef.current = performance.now(), await De.play(), await ut(Pt, 400, {
              epsilon: .6,
              acceptPastTarget: !0
            });
          } catch {
            return !1;
          }
        },
        gn = async () => await new Promise(K => {
          let ce = !1;
          const le = We => {
              ce || (ce = !0, De.removeEventListener("canplay", ne), De.removeEventListener("loadedmetadata", ne), De.removeEventListener("error", Xe), K(We));
            },
            ne = () => le(!0),
            Xe = () => le(!1);
          De.addEventListener("canplay", ne, {
            once: !0
          }), De.addEventListener("loadedmetadata", ne, {
            once: !0
          }), De.addEventListener("error", Xe, {
            once: !0
          }), setTimeout(() => le(!0), 1500);
        }),
        Tn = async () => {
          try {
            await resumeAudioContext();
          } catch {}
          try {
            De.pause();
          } catch {}
          try {
            const K = De.currentSrc || De.src;
            K && (De.src = K), De.load(), await gn();
            const ce = Number.isFinite(De.duration) ? De.duration : lt,
              le = Math.max(0, Math.min(_t, Number.isFinite(ce) && ce > 0 ? ce - .01 : _t));
            try {
              De.currentTime = le;
            } catch {}
            return lastPlayStartedAtRef.current = performance.now(), await De.play(), await ut(le, 600, {
              epsilon: .6,
              acceptPastTarget: !0
            });
          } catch {
            return !1;
          }
        };
      let C = !1;
      return C = await fn(), C || (C = await Tn()), sourceRetryRef.current = !1, C;
    }, [resumeAudioContext, ut, duration]),
    Gt = ReactDefault.useCallback(async (j, xe) => {
      const De = audioRef.current;
      if (!De) return;
      const Ze = (xe == null ? void 0 : xe.autoPlay) ?? !0,
        lt = performance.now();
      lastProgressTimeRef.current = lt;
      const xt = Number.isFinite(De.duration) ? De.duration : duration,
        bt = Math.max(0, Math.min(j, Number.isFinite(xt) && xt > 0 ? xt : j)),
        Ut = beginSeek(bt, Ze);
      if (Ut == null) return;
      const qt = () => isStaleSeek(Ut);
      pendingSeekRef.current = {
        targetTime: bt,
        startedAtMs: lt,
        deadlineAtMs: lt + 1200
      }, setCurrentTime(bt), lastStableTimeRef.current = bt;
      const _t = async () => {
        if (qt()) return !1;
        try {
          await resumeAudioContext();
        } catch {}
        if (qt()) return !1;
        try {
          De.currentTime = bt;
        } catch {}
        if (qt()) return !1;
        if (Ze) try {
          lastPlayStartedAtRef.current = performance.now(), await De.play();
        } catch {}
        if (qt()) return !1;
        const fn = await ut(bt, 900, {
          epsilon: .6,
          acceptPastTarget: !0
        });
        return qt() ? !1 : fn;
      };
      let Pt = await _t();
      qt() || !Pt && (await mt("seek", {
        targetTime: bt
      }), qt() || (Pt = await _t(), qt())) || (pendingSeekRef.current = null, Pt ? (lastStableTimeRef.current = bt, finishSeek({
        requestId: Ut,
        forceResume: !0
      })) : (lastStableTimeRef.current = bt, setCurrentTime(bt), setIsSeeking(!0)));
    }, [beginSeek, finishSeek, duration, resumeAudioContext, isStaleSeek, mt, ut]),
    gt = ReactDefault.useCallback(j => {
      const xe = audioRef.current;
      if (!xe || !Number.isFinite(j)) return;
      seekRequestGenerationRef.current += 1;
      const De = Number.isFinite(xe.duration) ? xe.duration : duration,
        Ze = Math.max(0, Math.min(j, Number.isFinite(De) && De > 0 ? De : j)),
        lt = performance.now();
      requestedSeekRef.current = {
        songId: currentSongId,
        time: Ze
      }, pendingSeekRef.current = {
        targetTime: Ze,
        startedAtMs: lt,
        deadlineAtMs: lt + 300
      }, lastProgressTimeRef.current = lt, lastStableTimeRef.current = Ze, setCurrentTime(Ze), setIsBuffering(!1);
      try {
        xe.currentTime = Ze;
      } catch {}
    }, [currentSongId, duration]),
    Fn = () => {
      var Ut;
      const j = audioRef.current;
      if (!j) return;
      const xe = j.currentTime,
        De = (Ut = seekSessionRef.current) != null && Ut.active ? seekSessionRef.current : null;
      if (De) {
        const qt = pendingSeekRef.current;
        if (qt) if (performance.now() <= qt.deadlineAtMs) {
          if (Number.isFinite(xe) && Math.abs(xe - qt.targetTime) > 2) return;
        } else pendingSeekRef.current = null;
        if (Number.isFinite(xe) && xe < De.targetTime - 2) return;
        finishSeek({
          requestId: De.id,
          forceResume: !0
        });
      } else isBuffering && Number.isFinite(xe) && xe > .2 && setIsBuffering(!1);
      const Ze = lyrics.findIndex((qt, _t) => {
          const Pt = lyrics[_t + 1];
          return xe >= qt.time && (!Pt || xe < Pt.time);
        }),
        lt = Ze !== lastLyricIndexRef.current,
        bt = Math.abs(xe - lastStableTimeRef.current) >= 1;
      (lt || bt) && (lastLyricIndexRef.current = Ze, lastStableTimeRef.current = xe, setCurrentTime(xe));
    },
    Un = () => {
      const j = audioRef.current;
      if (!j) return;
      const xe = j.duration;
      setDuration(xe);
      const De = requestedSeekRef.current;
      if (De) {
        if (De.songId !== currentSongId) {
          requestedSeekRef.current = null;
          return;
        }
        !Number.isFinite(xe) || xe <= 0 || De.time > Math.max(0, xe - .01) && (requestedSeekRef.current = null);
      }
    },
    bn = j => {
      Gt(j, {
        autoPlay: !0
      });
    },
    Tt = () => {
      const j = audioRef.current;
      if (!j) return;
      const xe = performance.now();
      if (xe - songChangedAtRef.current < UI_HIDE_DELAY_MS || xe - V.current < 800) return;
      const De = Number.isFinite(j.duration) ? j.duration : duration,
        Ze = Number.isFinite(j.currentTime) ? j.currentTime : currentTime;
      !Number.isFinite(De) || De <= 0 || !Number.isFinite(Ze) || Ze < Math.max(0, De - 1.2) || (V.current = xe, requestedSeekRef.current = null, pendingSeekRef.current = null, autoAdvanceRef.current = !0, nextSong());
    };
  return React.useEffect(() => {
    const j = audioRef.current;
    if (!j) return;
    const xe = () => {
        var _t;
        setIsPlaying(!0), (_t = seekSessionRef.current) != null && _t.active || setIsBuffering(!1);
      },
      De = () => {
        var _t;
        setIsPlaying(!1), setIsBuffering(!1), (_t = seekSessionRef.current) != null && _t.active || setIsSeeking(!1);
      },
      Ze = () => {
        var _t;
        j.paused || ((_t = seekSessionRef.current) != null && _t.active ? setIsSeeking(!0) : setIsBuffering(!0));
      },
      lt = () => {
        var _t;
        j.paused || ((_t = seekSessionRef.current) != null && _t.active ? setIsSeeking(!0) : setIsBuffering(!0));
      },
      xt = () => {
        const _t = seekSessionRef.current;
        if (_t != null && _t.active) {
          finishSeek({
            requestId: _t.id,
            forceResume: !0
          });
          return;
        }
        setIsBuffering(!1);
      },
      bt = () => {
        const _t = seekSessionRef.current;
        if (_t != null && _t.active) {
          finishSeek({
            requestId: _t.id,
            forceResume: !1
          });
          return;
        }
        setIsBuffering(!1);
      },
      Ut = () => {
        var _t;
        (_t = seekSessionRef.current) != null && _t.active && setIsSeeking(!0);
      },
      qt = () => {
        const _t = seekSessionRef.current;
        _t != null && _t.active && finishSeek({
          requestId: _t.id,
          forceResume: !0
        });
      };
    return j.volume = volume, j.addEventListener("play", xe), j.addEventListener("pause", De), j.addEventListener("waiting", Ze), j.addEventListener("stalled", lt), j.addEventListener("canplay", xt), j.addEventListener("playing", bt), j.addEventListener("seeking", Ut), j.addEventListener("seeked", qt), () => {
      j.removeEventListener("play", xe), j.removeEventListener("pause", De), j.removeEventListener("waiting", Ze), j.removeEventListener("stalled", lt), j.removeEventListener("canplay", xt), j.removeEventListener("playing", bt), j.removeEventListener("seeking", Ut), j.removeEventListener("seeked", qt);
    };
  }, [finishSeek, currentSong, volume]), React.useEffect(() => {
    const j = audioRef.current;
    if (!j) return;
    let xe = Number.isFinite(j.currentTime) ? j.currentTime : 0,
      De = performance.now(),
      Ze = 0;
    const lt = () => {
        var $e;
        const Pt = performance.now(),
          fn = Pt - De;
        De = Pt;
        const gn = Pt - songChangedAtRef.current < UI_HIDE_DELAY_MS,
          Tn = requestedSeekRef.current,
          C = Tn && Tn.songId === currentSongId && Number.isFinite(Tn.time) ? Tn.time : null;
        if (document.hidden || j.seeking) {
          Ze = 0, xe = Number.isFinite(j.currentTime) ? j.currentTime : 0;
          return;
        }
        const K = Pt - lastProgressTimeRef.current < 1500,
          ce = Pt - lastPlayStartedAtRef.current < 1500,
          le = pendingSeekRef.current,
          ne = le ? Pt <= le.deadlineAtMs : !1;
        if (gn || K || ce || ne || ($e = seekSessionRef.current) != null && $e.active || isSeekingRef.current) {
          Ze = 0, xe = Number.isFinite(j.currentTime) ? j.currentTime : 0;
          return;
        }
        if (j.paused) {
          Ze = 0, xe = Number.isFinite(j.currentTime) ? j.currentTime : 0;
          return;
        }
        const Xe = Number.isFinite(j.currentTime) ? j.currentTime : 0;
        if (Xe > xe + .02) {
          Ze = 0, xe = Xe;
          return;
        }
        Ze += fn, Ze >= 1500 && (Ze = 0, C != null ? mt("watchdog", {
          targetTime: C
        }) : mt("watchdog"));
      },
      xt = window.setInterval(lt, 250),
      bt = () => {
        var Tn;
        if (performance.now() - songChangedAtRef.current < UI_HIDE_DELAY_MS || j.paused || (Tn = seekSessionRef.current) != null && Tn.active || isSeekingRef.current) return;
        const fn = requestedSeekRef.current,
          gn = fn && fn.songId === currentSongId && Number.isFinite(fn.time) ? fn.time : null;
        gn != null ? mt("watchdog", {
          targetTime: gn
        }) : mt("watchdog");
      },
      Ut = () => {
        bt();
      },
      qt = () => {
        bt();
      },
      _t = () => {
        bt();
      };
    return j.addEventListener("waiting", Ut), j.addEventListener("stalled", qt), j.addEventListener("error", _t), () => {
      window.clearInterval(xt), j.removeEventListener("waiting", Ut), j.removeEventListener("stalled", qt), j.removeEventListener("error", _t);
    };
  }, [currentSongId, mt]), React.useEffect(() => {
    const j = () => {
      setPlaylistOpen(!1), W.current && clearTimeout(W.current), W.current = setTimeout(() => {
        setPlaylistOpen(!0);
      }, 4e3);
    };
    return window.addEventListener("mousemove", j), j(), () => {
      window.removeEventListener("mousemove", j), W.current && clearTimeout(W.current);
    };
  }, []), React.useLayoutEffect(() => {
    if (theme !== "vinyl") return;
    const j = () => window.innerWidth < 1024,
      xe = () => isPlaylistOpen ? 10 : 12,
      De = () => {
        if (!j()) {
          he(null), Be(null);
          return;
        }
        if (!J.current) return;
        const bt = J.current.getBoundingClientRect(),
          Ut = Math.max(0, window.innerHeight - bt.bottom),
          qt = Math.round(Math.min(72, Math.max(18, Ut * .18))),
          _t = Math.round(bt.bottom + qt),
          Pt = !isPlaylistOpen && controlsRef.current ? Math.round(controlsRef.current.getBoundingClientRect().top) : null,
          fn = Pt !== null ? Math.max(0, Pt - xe()) : Math.max(0, window.innerHeight - xe()),
          gn = Math.max(0, fn - _t);
        he(_t), Be(gn);
      };
    De();
    const Ze = requestAnimationFrame(De),
      lt = () => De();
    window.addEventListener("resize", lt);
    const xt = typeof ResizeObserver < "u" ? new ResizeObserver(() => De()) : null;
    return xt && (J.current && xt.observe(J.current), controlsRef.current && xt.observe(controlsRef.current)), () => {
      cancelAnimationFrame(Ze), window.removeEventListener("resize", lt), xt == null || xt.disconnect();
    };
  }, [theme, isPlaylistOpen, currentSongId]), jsxRuntime.jsxs("div", {
    className: "relative w-full bg-gray-50 overflow-hidden flex flex-col font-sans selection:bg-[#ff4d6a] selection:text-white",
    style: {
      height: "var(--app-height, 100vh)"
    },
    children: [jsxRuntime.jsx(LyricsNotice, { error: lyricsError, onRetry: retryLyrics }), jsxRuntime.jsx("div", {
      "aria-hidden": "true",
      className: `hidden sm:block absolute inset-0 z-0 bg-cover bg-center scale-125 origin-top-right transition-opacity transition-transform duration-1000 ${theme === "vinyl" ? "opacity-25" : "opacity-0"}`,
      style: {
        backgroundImage: `url(${currentSong.coverUrl})`,
        filter: "blur(120px)"
      }
    }), jsxRuntime.jsx("div", {
      "aria-hidden": "true",
      className: `absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent transition-opacity duration-500 ${theme === "vinyl" ? "opacity-100" : "opacity-0"}`
    }), jsxRuntime.jsx("audio", {
      ref: audioRef,
      src: currentSong.audioSrc,
      onTimeUpdate: Fn,
      onLoadedMetadata: Un,
      onEnded: Tt,
      crossOrigin: "anonymous",
      preload: "metadata"
    }), theme === "particle" && jsxRuntime.jsxs("div", {
      className: "absolute inset-0 z-10 overflow-hidden bg-black",
      children: [jsxRuntime.jsx(ParticleCover, {
        analyser: analyser,
        coverUrl: currentSong.coverUrl,
        isPlaying: isPlaying,
        params: particleParams
      }), jsxRuntime.jsx(ParticleSettings, {
        params: particleParams,
        onChange: setParticleParams,
        isUIHidden: isPlaylistOpen
      }), isPlaylistOpen && jsxRuntime.jsxs("div", {
        className: "absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center pointer-events-none animate-in fade-in duration-500",
        children: [jsxRuntime.jsx(RollingLyrics, {
          lyrics: lyrics,
          currentIndex: currentLyricIndex,
          align: "center",
          paddingClassName: "px-10",
          widthStyle: {
            width: "100%"
          },
          inactiveColor: "white",
          activeColor: "white",
          inactiveOpacity: .4,
          activeOpacity: .7
        }), jsxRuntime.jsx("div", {
          className: "text-[14px] text-white/30 font-normal mt-4 text-center",
          children: songInfo
        })]
      })]
    }), theme === "cubes" && jsxRuntime.jsxs("div", {
      className: "absolute inset-0 z-10 overflow-hidden",
      children: [jsxRuntime.jsx(CubesVisualizer, {
        analyser: analyser,
        isPlaying: isPlaying,
        params: cubesParams,
        colorTheme: currentSong.cubesTheme,
        uiBottomInsetPx: controlsBottomInset
      }), jsxRuntime.jsx(CubesSettings, {
        params: cubesParams,
        onChange: setCubesParams,
        isUIHidden: isPlaylistOpen
      }), isPlaylistOpen && jsxRuntime.jsxs("div", {
        className: "absolute bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 lg:left-12 lg:right-auto z-20 flex flex-col items-center lg:items-start pointer-events-none animate-in fade-in duration-500",
        children: [jsxRuntime.jsx("div", {
          className: "w-full lg:hidden",
          children: jsxRuntime.jsx(RollingLyrics, {
            lyrics: lyrics,
            currentIndex: currentLyricIndex,
            align: "center",
            paddingClassName: "px-10",
            widthStyle: {
              width: "100%"
            },
            inactiveColor: "black",
            activeColor: currentSong.themeColor,
            inactiveOpacity: .4,
            activeOpacity: 1
          })
        }), jsxRuntime.jsx("div", {
          className: "hidden lg:block",
          children: jsxRuntime.jsx(RollingLyrics, {
            lyrics: lyrics,
            currentIndex: currentLyricIndex,
            align: "left",
            widthStyle: {
              width: "min(520px, calc(100vw - 96px))"
            },
            inactiveColor: "black",
            activeColor: currentSong.themeColor,
            inactiveOpacity: .4,
            activeOpacity: 1
          })
        }), jsxRuntime.jsx("div", {
          className: "text-[14px] text-black/20 font-normal mt-4 text-center lg:text-left",
          children: songInfo
        })]
      })]
    }), theme === "powerpuff" && jsxRuntime.jsxs("div", {
      className: "absolute inset-0 z-10 overflow-hidden",
      children: [jsxRuntime.jsx(PowerpuffRun, {
        analyser: analyser,
        isPlaying: isPlaying,
        params: powerpuffParams,
        lyricLine: currentLyric,
        songInfo: songInfo
      }), jsxRuntime.jsx(PowerpuffSettings, {
        params: powerpuffParams,
        setParams: setPowerpuffParams,
        isUIHidden: isPlaylistOpen
      }), jsxRuntime.jsx("div", {
        className: `absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-500 ${isPlaylistOpen ? "opacity-0" : "opacity-100"}`,
        style: {
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)"
        }
      })]
    }), theme === "vinyl" && jsxRuntime.jsxs("div", {
      className: "relative z-10 flex-1 min-h-0",
      children: [jsxRuntime.jsx("div", {
        className: "absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible",
        children: jsxRuntime.jsx("div", {
          ref: J,
          className: "lg:absolute lg:top-0 lg:right-0 lg:-translate-y-[25%] lg:translate-x-[35%]",
          children: jsxRuntime.jsx(VinylRecord, {
            coverUrl: currentSong.coverUrl,
            isPlaying: isPlaying,
            vinylSpeed: vinylParams.vinylSpeed,
            rabbitSpeed: vinylParams.rabbitSpeed
          })
        })
      }), jsxRuntime.jsxs("div", {
        className: "relative z-10 h-full flex flex-col lg:flex-row w-full px-6 lg:pl-40 lg:pr-0 pt-12 pb-10",
        children: [jsxRuntime.jsxs("div", {
          className: "w-full lg:w-5/12 flex flex-col h-full lg:pr-8 mt-4 items-center lg:items-start",
          children: [jsxRuntime.jsxs("div", {
            className: "mb-6 flex-shrink-0 text-center lg:text-left relative -top-[10px] sm:top-0",
            children: [jsxRuntime.jsx("div", {
              className: "flex items-center justify-center lg:justify-start gap-3 mb-2",
              children: jsxRuntime.jsx("h1", {
                className: "text-[18px] lg:text-3xl font-bold text-gray-900 tracking-tight leading-tight",
                children: currentSong.title
              })
            }), jsxRuntime.jsx("div", {
              className: "flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-sm lg:text-lg mb-5 font-normal",
              children: jsxRuntime.jsx("span", {
                children: currentSong.artist
              })
            })]
          }), jsxRuntime.jsx("div", {
            className: "hidden lg:block lg:flex-1 min-h-0 relative lg:mb-8 overflow-hidden w-full",
            children: jsxRuntime.jsx(LyricsPanel, {
              lyrics: lyrics,
              currentTime: currentTime,
              onLyricClick: bn,
              themeColor: currentSong.themeColor
            })
          })]
        }), jsxRuntime.jsx("div", {
          className: "hidden lg:block lg:w-7/12"
        }), jsxRuntime.jsx(VinylSettings, {
          params: vinylParams,
          onChange: setVinylParams,
          isUIHidden: isPlaylistOpen
        })]
      }), jsxRuntime.jsx("div", {
        className: "lg:hidden absolute left-0 right-0 z-10 px-6 text-center overflow-hidden transition-all duration-500 cursor-pointer",
        style: {
          top: ee ?? void 0,
          maxHeight: Ee ?? void 0
        },
        onClick: () => !isPlaylistOpen && setShowFullscreenLyrics(!0),
        children: jsxRuntime.jsx(LyricsPanel, {
          lyrics: lyrics,
          currentTime: currentTime,
          onLyricClick: isPlaylistOpen ? bn : void 0,
          compact: isPlaylistOpen,
          maxLines: isPlaylistOpen ? 4 : 1,
          themeColor: currentSong.themeColor
        })
      })]
    }), isFullscreenTheme(theme) && jsxRuntime.jsx("div", {
      className: "flex-1"
    }), theme === "vinyl" && isPlaylistOpen && jsxRuntime.jsx("div", {
      className: "fixed bottom-4 left-0 right-0 z-10 flex justify-center pointer-events-none",
      children: jsxRuntime.jsx("div", {
        className: "w-full"
      })
    }), jsxRuntime.jsxs("div", {
      ref: controlsRef,
      className: `relative z-20 flex-shrink-0 w-full px-0 transition-all duration-500 ease-in-out ${isPlaylistOpen ? "opacity-0 translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`,
      children: [theme === "vinyl" && !isPlaylistOpen && null, jsxRuntime.jsx(PlayerControls, {
        isPlaying: isPlaying,
        isLoading: isLoading,
        onPlayPause: ct,
        currentTime: currentTime,
        duration: duration,
        onSeek: bn,
        onScrub: gt,
        theme: theme,
        currentSongId: currentSongId,
        onSongChange: j => {
          selectSong(j), setThemeOpen(!1);
        },
        isPlaylistOpen: isThemeOpen,
        onTogglePlaylist: () => setThemeOpen(j => !j),
        isThemeOpen: isUIHidden,
        onToggleTheme: () => setUIHidden(j => !j),
        onSkipPrev: previousSong,
        onSkipNext: nextSong,
        coverUrl: currentSong.coverUrl,
        songTitle: currentSong.title,
        artistName: currentSong.artist
      })]
    }), jsxRuntime.jsx(PlaylistDrawer, {
      isOpen: isThemeOpen,
      darkUI: isDarkTheme(theme),
      songs: songs,
      currentSongId: currentSongId,
      isPlaying: isPlaying,
      onClose: () => setThemeOpen(!1),
      onPlayPause: ct,
      onSelectSong: j => {
        selectSong(j);
      }
    }), jsxRuntime.jsx(ThemeDrawer, {
      isOpen: isUIHidden,
      darkUI: isDarkTheme(theme),
      currentTheme: theme,
      onClose: () => setUIHidden(!1),
      onSelectTheme: setTheme
    }), showFullscreenLyrics && jsxRuntime.jsxs("div", {
      className: "fixed inset-0 z-50 lg:hidden",
      children: [jsxRuntime.jsx("div", {
        className: "absolute inset-0 backdrop-blur-xl bg-white/70",
        onClick: () => setShowFullscreenLyrics(!1)
      }), jsxRuntime.jsx("button", {
        onClick: () => setShowFullscreenLyrics(!1),
        className: "absolute top-6 right-6 z-10 p-2",
        children: jsxRuntime.jsx(XIcon, {
          className: "w-5 h-5 text-gray-400"
        })
      }), jsxRuntime.jsx("div", {
        className: "relative z-0 h-full w-full px-6 pt-16 pb-8",
        children: jsxRuntime.jsx(LyricsPanel, {
          lyrics: lyrics,
          currentTime: currentTime,
          onLyricClick: bn,
          themeColor: currentSong.themeColor,
          variant: "fullscreen"
        })
      })]
    })]
  });
};
export { App };
// Business copy of src/recovered/App.js. The recovery baseline stays immutable.
