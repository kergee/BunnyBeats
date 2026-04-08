window.__NJZ_SONGS__ = [];

fetch("/songs.json", { cache: "no-store" })
  .then((res) => (res.ok ? res.json() : []))
  .then((data) => {
    if (Array.isArray(data)) {
      window.__NJZ_SONGS__ = data;
    }
  })
  .catch((err) => {
    console.warn("songs.json load failed, fallback to built-in playlist", err);
  })
  .finally(() => {
    import("/assets/index-ifD7iYwv.js").catch((err) => {
      console.error("main bundle load failed", err);
    });
  });
