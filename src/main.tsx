import "./recovered/styles.css";
import "./app/styles.css";
import { normalizePlaylist } from "../shared/song-schema.js";

async function loadSongs() {
  try {
    const response = await fetch("/songs.json", { cache: "no-store" });
    if (!response.ok) return [];
    const data: unknown = await response.json();
    return normalizePlaylist(data);
  } catch (error) {
    console.warn("songs.json could not be loaded; using the built-in playlist", error);
    return [];
  }
}

window.__NJZ_SONGS__ = await loadSongs();
// Import only after songs.json resolves: the original bundle reads the global
// while its song module is evaluated. The recovered runtime includes React.
await import("./app/application.js");

requestAnimationFrame(() => {
  document.getElementById("app-loading")?.remove();
});
