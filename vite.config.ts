import { basename, resolve } from "node:path";
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
} from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

function useRecoveredSourceEntry(): Plugin {
  return {
    name: "bunnybeats-source-entry",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const cleanUrl = req.url?.split("?")[0];
        if (cleanUrl === "/" || cleanUrl === "/index.html") {
          req.url = req.url?.replace(cleanUrl, "/index.vite.html");
        }
        next();
      });
    },
    closeBundle() {
      const outputDir = resolve(__dirname, "dist");
      const outputIndex = resolve(__dirname, "dist/index.html");
      const viteIndex = resolve(__dirname, "dist/index.vite.html");
      if (existsSync(viteIndex)) {
        if (existsSync(outputIndex)) rmSync(outputIndex);
        renameSync(viteIndex, outputIndex);
      }

      const assetsSource = resolve(__dirname, "assets");
      const assetsTarget = resolve(outputDir, "assets");
      if (existsSync(assetsSource)) {
        mkdirSync(assetsTarget, { recursive: true });
        cpSync(assetsSource, assetsTarget, {
          recursive: true,
          force: true,
          filter: source => !["index-ifD7iYwv.js", "index-5QhdSaXr.css"].includes(basename(source)),
        });
      }

      for (const fileName of [
        "songs.json",
        "songs.example.json",
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "apple-touch-icon.png",
        "manifest.json",
      ]) {
        const source = resolve(__dirname, fileName);
        if (existsSync(source)) {
          copyFileSync(source, resolve(outputDir, fileName));
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [useRecoveredSourceEntry(), react()],
  server: {
    fs: {
      allow: [resolve(__dirname)],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        player: resolve(__dirname, "index.vite.html"),
        manager: resolve(__dirname, "song-manager.html"),
      },
    },
  },
});
