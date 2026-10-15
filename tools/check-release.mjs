import fs from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const json = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const pkg = json('package.json');
const lock = json('package-lock.json');
const config = json('src-tauri/tauri.conf.json');
const cargo = fs.readFileSync(path.join(root, 'src-tauri/Cargo.toml'), 'utf8');
const cargoVersion = cargo.match(/^version\s*=\s*"([^"]+)"/m)?.[1];
assert.equal(pkg.version, config.version, 'package.json / Tauri version mismatch');
assert.equal(cargoVersion, config.version, 'Cargo / Tauri version mismatch');
assert.equal(lock.version, pkg.version, 'package-lock.json version mismatch');
assert.equal(lock.packages[''].version, pkg.version, 'package-lock root version mismatch');
if (process.env.RELEASE_TAG) assert.equal(process.env.RELEASE_TAG, `v${pkg.version}`, 'Release tag must match the application version');
json('songs.json');
json('manifest.json');
assert.equal(config.build.beforeBuildCommand, 'npm run build');
assert.equal(config.build.beforeDevCommand, 'npm run dev:tauri');
for (const name of ['32x32.png', '128x128.png', '128x128@2x.png']) {
  const bytes = fs.readFileSync(path.join(root, 'src-tauri/icons', name));
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${name}: Git LFS object missing or invalid PNG`);
  assert.equal(bytes[25], 6, `${name} must be RGBA`);
}
console.log(`Release inputs OK: BunnyBeats ${pkg.version}`);
