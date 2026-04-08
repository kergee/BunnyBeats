const pickDirBtn = document.getElementById("pickDir");
const saveSongBtn = document.getElementById("saveSong");
const statusEl = document.getElementById("status");

const fields = {
  id: document.getElementById("id"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  album: document.getElementById("album"),
  themeColor: document.getElementById("themeColor"),
  cubesTheme: document.getElementById("cubesTheme"),
  audioFile: document.getElementById("audioFile"),
  coverFile: document.getElementById("coverFile"),
  lrcFile: document.getElementById("lrcFile"),
};

let projectDirHandle = null;

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.className = `status ${isError ? "err" : "ok"}`;
}

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeName(input) {
  return input.replace(/[\\/:*?"<>|]/g, "-").trim();
}

async function writeFile(dirHandle, fileName, file) {
  const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(file);
  await writable.close();
}

async function readJsonFile(dirHandle, fileName, fallback) {
  try {
    const fileHandle = await dirHandle.getFileHandle(fileName, { create: false });
    const file = await fileHandle.getFile();
    const raw = await file.text();
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function writeJsonFile(dirHandle, fileName, value) {
  const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(JSON.stringify(value, null, 2));
  await writable.close();
}

pickDirBtn.addEventListener("click", async () => {
  if (!window.showDirectoryPicker) {
    setStatus("Browser does not support File System Access API. Use Chrome/Edge.", true);
    return;
  }

  try {
    projectDirHandle = await window.showDirectoryPicker();
    await projectDirHandle.getFileHandle("songs.json", { create: true });
    await projectDirHandle.getDirectoryHandle("assets", { create: true });
    setStatus("Project folder linked. You can now save songs.");
  } catch (err) {
    setStatus(`Choose folder cancelled or failed: ${err.message}`, true);
  }
});

saveSongBtn.addEventListener("click", async () => {
  if (!projectDirHandle) {
    setStatus("Please choose project folder first.", true);
    return;
  }

  const audio = fields.audioFile.files[0];
  if (!audio) {
    setStatus("Audio file is required.", true);
    return;
  }

  const title = fields.title.value.trim();
  const id = fields.id.value.trim() || slugify(title) || `song-${Date.now()}`;
  const artist = fields.artist.value.trim() || "Unknown Artist";
  const album = fields.album.value.trim() || "Unknown Album";
  const themeColor = fields.themeColor.value.trim() || "#F05A66";
  const cubesTheme = fields.cubesTheme.value;

  const cover = fields.coverFile.files[0] || null;
  const lrc = fields.lrcFile.files[0] || null;

  const assetsDir = await projectDirHandle.getDirectoryHandle("assets", { create: true });

  const audioName = safeName(audio.name);
  const coverName = cover ? safeName(cover.name) : "";
  const lrcName = lrc ? safeName(lrc.name) : "";

  await writeFile(assetsDir, audioName, audio);
  if (cover) await writeFile(assetsDir, coverName, cover);
  if (lrc) await writeFile(assetsDir, lrcName, lrc);

  const songs = await readJsonFile(projectDirHandle, "songs.json", []);
  const nextSongs = Array.isArray(songs) ? songs.filter((s) => s.id !== id) : [];
  nextSongs.push({
    id,
    title: title || audioName.replace(/\.[^.]+$/, ""),
    artist,
    album,
    audioSrc: `/assets/${audioName}`,
    lrcSrc: lrc ? `/assets/${lrcName}` : "",
    coverUrl: cover ? `/assets/${coverName}` : "",
    themeColor,
    cubesTheme,
  });

  await writeJsonFile(projectDirHandle, "songs.json", nextSongs);
  setStatus(`Saved "${title || audioName}" successfully. Refresh player page to see it.`);
});
