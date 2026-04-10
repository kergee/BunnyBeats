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
    import("/assets/index-ifD7iYwv.js")
      .then(() => {
        // Give React one frame to render before hiding the loading screen
        requestAnimationFrame(() => {
          const loading = document.getElementById("app-loading");
          if (loading) loading.remove();
        });
      })
      .catch((err) => {
        console.error("main bundle load failed", err);
      });
  });
