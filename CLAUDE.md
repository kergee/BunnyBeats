# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

BunnyBeats is a Tauri 2 desktop wrapper around a static, single-page music player web app (NJZ/NewJeans-themed). There is **no JS build tooling in this repo** — no `package.json`, no bundler config, no frontend source tree. The player UI is a pre-built, minified ES module (`assets/index-ifD7iYwv.js` + `assets/index-5QhdSaXr.css`) that is committed directly and loaded via `<script type="module">`. Treat those hashed files as opaque build output, not something to hand-edit — the actual React source lives outside this repo.

React, ReactDOM, and `lucide-react` are not bundled; they're loaded at runtime from a CDN (`aistudiocdn.com`) via the import map in `index.html`.

## Architecture

- **`index.html`** — shell page. Contains the import map (CDN React/lucide-react), a critical-CSS loading screen (`#app-loading`), and loads `/bootstrap.js`.
- **`bootstrap.js`** — app entry point. Fetches `/songs.json`, stashes it on `window.__NJZ_SONGS__`, then dynamically imports the compiled bundle and removes the loading screen after first paint.
- **`songs.json`** — the playlist data. An empty array (`[]`) makes the player fall back to a built-in playlist baked into the compiled bundle. Song object schema is documented in `SONGS.md` (id, title, artist, album, audioSrc, lrcSrc, coverUrl, themeColor, cubesTheme).
- **`assets/`** — mixes two things: (1) actual song audio/cover/lyrics files referenced by `songs.json`, and (2) decorative sprite assets (rabbit/deer/gingerman/cubes/colored blobs) used for the player's animated background themes. It also holds the compiled JS/CSS bundle.
- **`song-manager.html` / `song-manager.js`** — a standalone Chromium-only tool (uses the File System Access API) for adding songs without touching a build step: pick the project folder once, then it writes uploaded audio/cover/lyrics files into `assets/` and appends the song entry to `songs.json` directly on disk.
- **`src-tauri/`** — the Rust/Tauri 2 desktop shell.
  - `src/lib.rs` — app setup; only registers `tauri-plugin-log` in debug builds.
  - `tauri.conf.json` — `frontendDist` points at `../dist` (only produced by CI, not checked in); `devUrl` is `http://localhost:8080`.
  - `capabilities/default.json` — minimal permission set (`core:default` only).

## Local development

There's no dev server script in the repo. Serve the repo root as static files (e.g. `python -m http.server 8080`) and open `http://localhost:8080/` — this matches `devUrl` in `tauri.conf.json` and the instructions in `SONGS.md`.

To add songs via the UI tool, open `http://localhost:8080/song-manager.html` in Chrome/Edge (File System Access API required), pick the project folder, and save — it updates `assets/` and `songs.json` directly.

For the desktop shell itself, `cargo tauri dev` (from `src-tauri/`) expects the static server above already running on port 8080.

## Release builds

Handled entirely by CI (`.github/workflows/tauri-build.yml`), triggered on pushing a `v*` tag or manual dispatch. It builds macOS (arm64 + Intel), Ubuntu, and Windows artifacts via `tauri-apps/tauri-action`. The workflow:
1. Copies the repo root (excluding `src-tauri`, `dist`, `.git`, `.github`) into `dist/`, which becomes `frontendDist`.
2. Normalizes `src-tauri/icons/*.png` to RGBA via Pillow (Tauri bundling fails on non-RGBA PNGs).
3. Runs `tauri-apps/tauri-action` to build installers and create a draft GitHub release.

There is no local equivalent script for step 1/2 — if testing a full desktop build locally, replicate the `dist/` copy manually before running `cargo tauri build`.

## Repo quirks

- `README.md` is intentionally listed in `.gitignore` (see commit "remove README from repository but keep local copy") — a local copy may exist but it will never be tracked or visible in the repo.
