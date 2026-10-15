# AGENTS.md

## Project

BunnyBeats is a Tauri 2 desktop music player with a Vite frontend. Current entry: `index.vite.html` -> `src/main.tsx` -> `src/app/application.js`.

- `src/app/App.js` is the business copy of the recovered player, with changes made independently of the recovery baseline.
- `src/recovered/` is the immutable AST-verified recovery baseline, including its bundled React, Three.js and i18n runtimes. Never hand-edit the original hashed `assets/index-ifD7iYwv.js` or `assets/index-5QhdSaXr.css`. Preserve the baseline and its manifest; do not weaken recovery checks to admit feature changes.
- Business modules belong outside `src/recovered/`. React hooks must use the same recovered React instance as the renderer. Type-only npm React imports are fine; do not introduce a second live React instance.
- `src/lyrics/` loads inline JSON/LRC and external lyric files, cancels old requests and clears old-song lyrics.
- `shared/song-schema.js` validates playlist data for both player and manager. Empty songs.json selects the built-in six-song playlist.
- `shared/song-import.js` implements validated imports, exact playlist backups, collision-safe filenames and guarded final playlist writes. Do not turn malformed/unreadable playlists into an empty list during writes. Rollback may remove only files created by that import.
- `song-manager.html` + `song-manager.js` -> `src/song-manager/controller.js` use browser File System Access. The manager still edits a user-selected project directory; it is not a native desktop library.
- Root `index.html` + `bootstrap.js` run the old static reference. They do not include current business fixes.

## Development and verification

```powershell
npm ci
npm run dev
npm run desktop:dev
npm run verify:recovery
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Vite dev uses 5173, desktop dev uses 8080, browser tests use a dedicated production preview on 4180. Tauri beforeDevCommand and beforeBuildCommand start/build the frontend automatically. Run browser tests against a fixed dist; do not rebuild dist concurrently with them.

`npm run build` type-checks, builds both player and song-manager pages, copies runtime media/data and validates dist. It excludes old hashed bundles, development folders and local backups. `npm run desktop:build -- --ci --bundles nsis -- --locked` builds a Windows NSIS installer after the frontend build.

Node unit tests use temporary filesystem adapters with injected I/O failures. Browser import tests use Chromium OPFS, not the real project directory. Keep test doubles and fixtures in tests/. Distinguish unit, browser, local desktop build, real desktop runtime and cloud release validation.

## CI

- `.github/workflows/frontend-checks.yml`: main/PR checks and reusable release validation.
- `.github/workflows/tauri-build.yml`: version-tag/manual-tag builds across macOS arm64/Intel, Ubuntu and Windows; creates a draft release after checks. It builds source through Tauri, not a whole-repository copy.
- Keep package.json, package-lock.json, Cargo.toml and tauri.conf.json versions consistent. A release tag must be v + that version.
- README.md is intentionally ignored. Use DEVELOPMENT.md and SONGS.md for current documentation, RECOVERY.md for provenance.
- recovery/, node_modules/, dist/, src-tauri/target/, test output and .bunnybeats-backups/ are local artifacts, not release inputs.

## Windows constraints

Use PowerShell on Windows. Do not use Bash syntax unless explicitly executing in confirmed Linux/WSL. Use PowerShell here-strings for multiline Python, not Bash heredocs. Expand wildcard directories before passing paths to rg. Preserve user changes and validate resolved paths before recursive moves or deletions.
