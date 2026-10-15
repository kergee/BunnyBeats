import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
const root = path.resolve('dist');
for (const name of ['index.html', 'song-manager.html']) {
  const html = fs.readFileSync(path.join(root, name), 'utf8');
  assert(!html.includes('/bootstrap.js'), `${name} still loads the legacy bootstrap`);
  assert(!html.includes('/src/'), `${name} references development source`);
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)];
  assert(scripts.length > 0, `${name} has no built entry`);
  for (const [, url] of [...scripts, ...html.matchAll(/<link\b[^>]*\bhref="(\/assets\/[^"?#]+)"/g)]) {
    const file = path.resolve(root, `.${decodeURIComponent(url)}`);
    assert(file.startsWith(`${root}${path.sep}`), 'Unexpected output path');
    assert(fs.existsSync(file), `Missing built asset: ${url}`);
  }
}
for (const file of ['songs.json', 'manifest.json', 'assets/Ditto - 250 Remix-VsqlpH8W.mp3']) {
  assert(fs.existsSync(path.join(root, file)), `Missing runtime file: ${file}`);
}
for (const file of ['assets/index-ifD7iYwv.js', 'assets/index-5QhdSaXr.css', 'src', 'tools', 'node_modules', 'recovery']) {
  assert(!fs.existsSync(path.join(root, file)), `Development/baseline artifact leaked into dist: ${file}`);
}
console.log('dist OK: source player and song manager, local media, no legacy bundle or development folders');
