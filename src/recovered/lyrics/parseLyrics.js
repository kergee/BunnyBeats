const parseLyrics = s => {
  const e = (s ?? "").replace(/^\uFEFF/, "").trim();
  if (e.startsWith("[")) try {
    const c = JSON.parse(e);
    if (Array.isArray(c)) {
      const u = c.map((f, m) => {
        const h = Number(f == null ? void 0 : f.time),
          x = (f == null ? void 0 : f.lyric) ?? (f == null ? void 0 : f.text) ?? "";
        return Number.isFinite(h) ? {
          time: h / 1e3,
          text: String(x ?? ""),
          _i: m
        } : null;
      }).filter(f => !!f).sort((f, m) => f.time - m.time || f._i - m._i).map(({
        time: time,
        text: text
      }) => ({
        time: time,
        text: text
      }));
      return u.length === 0 ? [] : u;
    }
  } catch {}
  const n = e.split(`
`),
    a = [],
    o = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/;
  for (const c of n) {
    const u = c.trim();
    if (!u) continue;
    const f = o.exec(u);
    if (!f) continue;
    const m = parseInt(f[1], 10),
      h = parseInt(f[2], 10),
      x = f[3] || "0",
      g = parseFloat(`0.${x}`),
      v = m * 60 + h + g,
      y = u.replace(o, "").trim();
    a.push({
      time: v,
      text: y
    });
  }
  return a.sort((c, u) => c.time - u.time);
};
export { parseLyrics };
//# sourceMappingURL=parseLyrics.js.map
