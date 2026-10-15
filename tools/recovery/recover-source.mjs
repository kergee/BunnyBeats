// Deterministic recovery from the shipped artifact. Never edits assets/index-*.js.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { parse } from '@babel/parser';
import generatorModule from '@babel/generator';
import traverseModule from '@babel/traverse';
import * as t from '@babel/types';
import postcss from 'postcss';

const generate = generatorModule.default ?? generatorModule;
const traverse = traverseModule.default ?? traverseModule;
const artifact = 'assets/index-ifD7iYwv.js';
fs.mkdirSync('recovery/2026-10-15-rea/evidence', { recursive: true });
const source = fs.readFileSync(artifact, 'utf8');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const lfSource = source.replace(/\r\n/g, '\n');
assert.equal(sha256(lfSource), '1443c37e030277e2ef8896bc53a430d9c31230b22dab3c357dd22445119cfc60');
const readAst = code => parse(code, { sourceType: 'module' });
const splitDeclarations = body => body.flatMap(node => {
  if (!t.isVariableDeclaration(node) || node.declarations.length === 1) return [node];
  return node.declarations.map((declaration, index) => ({
    ...node, declarations: [declaration], start: declaration.start, end: declaration.end,
    leadingComments: index === 0 ? node.leadingComments : [],
    trailingComments: index === node.declarations.length - 1 ? node.trailingComments : [],
  }));
});
const ast = readAst(source);
const originalTopLevelStatements = ast.program.body.length;
ast.program.body = splitDeclarations(ast.program.body);
const original = readAst(generate(ast).code);

// Markers are observed original bindings, not guesses about bundler boundaries.
const boundaries = [
  [null, 'vendor/react-runtime.js'],
  ['D1', 'vendor/icons.js'], ['kd', 'components/LyricsPanel.js'],
  ['W1', 'visualizers/VinylRecord.js'], ['eS', 'themes/themeRegistry.js'],
  ['At', 'vendor/i18n-runtime.js'], ['YS', 'components/PlayerControls.js'],
  ['JS', 'visualizers/ParticleCover.js'], ['wu', 'components/LanguageSwitcher.js'],
  ['eM', 'settings/ParticleSettings.js'], ['C0', 'vendor/three-runtime.js'],
  ['ay', 'visualizers/CubesVisualizer.js'], ['aR', 'settings/CubesSettings.js'],
  ['uy', 'settings/VinylSettings.js'], ['oR', 'visualizers/PowerpuffRun.js'],
  ['R0', 'settings/PowerpuffSettings.js'], ['MC', 'components/PlaylistDrawer.js'],
  ['EC', 'components/ThemeDrawer.js'], ['CC', 'data/audio.js'],
  ['PC', 'data/lyrics/ditto.js'], ['IC', 'data/lyrics/supernatural.js'],
  ['zC', 'data/lyrics/attention.js'], ['FC', 'data/lyrics/hypeboy.js'],
  ['BC', 'data/lyrics/omg.js'], ['HC', 'data/lyrics/cookie.js'],
  ['GC', 'data/songs.js'], ['YC', 'lyrics/parseLyrics.js'],
  ['Qs', 'lyrics/layout.js'], ['Lh', 'components/RollingLyrics.js'],
  ['@852574', 'preload.js'], ['QC', 'App.js'], ['JC', 'vendor/language-detector.js'],
  ['hD', 'i18n/translations.js'], ['@883187', 'i18n/init.js'], ['py', 'mount.js'],
];
const groups = boundaries.map(([, file]) => ({ file, nodes: [], imports: new Map(), exports: new Set() }));
const markerMap = new Map(boundaries.slice(1).map(([key], index) => [key, index + 1]));
const owner = new Map();
let groupIndex = 0;
for (const node of ast.program.body) {
  const names = Object.keys(t.getOuterBindingIdentifiers(node));
  const marker = names.find(name => markerMap.has(name)) ?? `@${node.start}`;
  if (markerMap.has(marker)) {
    const next = markerMap.get(marker);
    assert.equal(next, groupIndex + 1, `Out-of-order recovery marker ${marker}`);
    groupIndex = next;
  }
  groups[groupIndex].nodes.push(node);
  owner.set(node, groups[groupIndex]);
}
assert.equal(groupIndex, groups.length - 1);

const names = {
  N: 'jsxRuntime', ae: 'React', Nn: 'ReactDefault', C1: 'ReactDOM',
  I1: 'CheckIcon', F1: 'MenuIcon', H1: 'PaletteIcon', v_: 'PauseIcon',
  __: 'PlayIcon', Eu: 'ResetIcon', Tu: 'SettingsIcon', Qr: 'XIcon',
  kd: 'LyricsPanel', $1: 'VinylRecord', sS: 'themeRegistry',
  y_: 'getTheme', Uh: 'isDarkTheme', oS: 'isFullscreenTheme',
  ni: 'i18n', FS: 'initReactI18next', vr: 'useTranslation',
  qS: 'PreviousIcon', ZS: 'NextIcon', Qx: 'formatTime', KS: 'LoadingBarsIcon', QS: 'PlayerControls',
  JS: 'CoverParticle', $S: 'ParticleCover', wu: 'LanguageSwitcher',
  eM: 'DEFAULT_PARTICLE_PARAMS', tM: 'ParticleSettings', Iw: 'SimplexNoise', G0: 'RoundedBoxGeometry',
  qv: 'CUBES_COLORS', nR: 'createBottomAnchoredBoxGeometry',
  Kv: 'CUBE_VERTEX_SHADER', Qv: 'CUBE_FRAGMENT_SHADER', iR: 'CubesVisualizer',
  aR: 'DEFAULT_CUBES_PARAMS', rR: 'CubesSettings', uy: 'DEFAULT_VINYL_PARAMS', sR: 'VinylSettings',
  Jv: 'BACKGROUND_BOTTOM_FRAMES', $v: 'BACKGROUND_MIDDLE_FRAMES', e_: 'BACKGROUND_TOP_FRAMES',
  Ea: 'CHARACTERS', bC: 'PowerpuffRun', R0: 'DEFAULT_POWERPUFF_PARAMS', SC: 'PowerpuffSettings',
  MC: 'PlaylistDrawer', RC: 'ThemeDrawer',
  CC: 'dittoAudio', DC: 'supernaturalAudio', NC: 'attentionAudio', LC: 'hypeboyAudio', UC: 'omgAudio', OC: 'cookieAudio',
  PC: 'dittoLyrics', IC: 'supernaturalLyrics', zC: 'attentionLyrics', FC: 'hypeboyLyrics', BC: 'omgLyrics', HC: 'cookieLyrics',
  GC: 'dittoCover', VC: 'supernaturalCover', Aa: 'songs', u_: 'getSongById', f_: 'getDefaultSong', YC: 'parseLyrics',
  Qs: 'LYRIC_LINE_HEIGHT', qC: 'ROLLING_LYRICS_HEIGHT', Nh: 'UI_HIDE_DELAY_MS', ZC: 'MOBILE_CONTROLS_EXTRA_PX',
  KC: 'clampOpacity', Lh: 'RollingLyrics', QC: 'App', hy: 'BrowserLanguageDetector',
  hD: 'zhUI', pD: 'zhThemes', mD: 'zhControls', gD: 'zhTranslation',
  xD: 'enUI', vD: 'enThemes', _D: 'enControls', yD: 'enTranslation', py: 'rootElement', bD: 'root',
};
let programPath;
traverse(ast, { Program(p) { programPath = p; } });
for (const [oldName, newName] of Object.entries(names)) {
  assert(programPath.scope.hasOwnBinding(oldName), `Missing binding ${oldName}`);
  assert(!programPath.scope.hasOwnBinding(newName), `Rename collision ${newName}`);
  programPath.scope.rename(oldName, newName);
}

// Restore prop names from explicit object keys; original short local aliases are lost.
let restoredPropBindings = 0;
traverse(ast, {
  Function(p) {
    const statement = p.findParent(parent => parent.parentPath?.isProgram());
    const group = owner.get(statement?.node);
    if (!group || group.file.startsWith('vendor/')) return;
    for (const parameter of p.node.params) {
      if (!t.isObjectPattern(parameter)) continue;
      for (const property of parameter.properties) {
        if (!t.isObjectProperty(property) || property.computed || !t.isIdentifier(property.key)) continue;
        const value = t.isAssignmentPattern(property.value) ? property.value.left : property.value;
        if (!t.isIdentifier(value) || value.name === property.key.name) continue;
        if (p.scope.hasBinding(property.key.name)) continue;
        p.scope.rename(value.name, property.key.name);
        restoredPropBindings++;
      }
    }
  },
});

// Semantic names below are analyst-assigned, never claimed as recovered original names.
const appLocalNames = {
  s: 'isPlaying', e: 'setIsPlaying', n: 'theme', a: 'setTheme', o: 'currentTime', c: 'setCurrentTime',
  u: 'duration', f: 'setDuration', m: 'isSeeking', h: 'setIsSeeking', x: 'isBuffering', g: 'setIsBuffering',
  v: 'isLoading', y: 'currentSongId', M: 'setCurrentSongId', E: 'volume', S: 'setVolume',
  _: 'analyser', L: 'setAnalyser', D: 'lyrics', O: 'setLyrics', F: 'isPlaylistOpen', P: 'setPlaylistOpen',
  B: 'isThemeOpen', q: 'setThemeOpen', w: 'isUIHidden', A: 'setUIHidden', H: 'showFullscreenLyrics', k: 'setShowFullscreenLyrics',
  ie: 'controlsRef', I: 'lastStableTimeRef', Y: 'lastLyricIndexRef', Z: 'controlsHeight', pe: 'setControlsHeight',
  Me: 'isMobile', z: 'setIsMobile', te: 'currentSong', me: 'controlsBottomInset', He: 'songInfo',
  Ge: 'currentLyricIndex', qe: 'currentLyric', Ke: 'previousLyric', Te: 'particleParams', Je: 'setParticleParams',
  st: 'cubesParams', G: 'setCubesParams', nt: 'powerpuffParams', rt: 'setPowerpuffParams', it: 'vinylParams', Fe: 'setVinylParams',
  U: 'audioRef', T: 'audioContextRef', $: 'analyserRef', ve: 'pendingSeekRef', ue: 'seekSessionRef',
  se: 'lastProgressTimeRef', Ye: 'lastPlayStartedAtRef', ke: 'pendingAutoplayRef', ye: 'autoAdvanceRef',
  Qe: 'sourceRetryRef', Re: 'stalledRetryCountRef', oe: 'hiddenTimeRef', Le: 'requestedSeekRef',
  Ve: 'seekRequestGenerationRef', _e: 'isSeekingRef', ze: 'songChangedAtRef',
  Pe: 'ensureAnalyser', we: 'resumeAudioContext', Ie: 'cancelSeek', Ne: 'beginSeek', Ae: 'isStaleSeek',
  je: 'finishSeek', Et: 'selectSong', tt: 'previousSong', ft: 'nextSong',
};
const appPath = programPath.scope.getBinding('App').path.get('init');
for (const [oldName, newName] of Object.entries(appLocalNames)) {
  assert(appPath.scope.hasOwnBinding(oldName), `Missing App binding ${oldName}`);
  assert(!appPath.scope.hasBinding(newName), `App rename collision ${newName}`);
  appPath.scope.rename(oldName, newName);
}
programPath.scope.crawl();

// Derive every cross-module edge from lexical bindings, including JSX-runtime calls.
for (const [name, binding] of Object.entries(programPath.scope.bindings)) {
  const declaration = binding.path.findParent(p => p.parentPath?.isProgram());
  const declarationNode = binding.path.parentPath?.isProgram() ? binding.path.node : declaration?.node;
  const from = owner.get(declarationNode);
  assert(from, `No declaration owner for ${name}`);
  for (const reference of binding.referencePaths) {
    const statement = reference.findParent(p => p.parentPath?.isProgram());
    const to = owner.get(statement?.node);
    if (!to || from === to) continue;
    if (!to.imports.has(from.file)) to.imports.set(from.file, new Set());
    to.imports.get(from.file).add(name);
    from.exports.add(name);
  }
}

const outputRoot = process.argv[2] ?? 'src/recovered';
const manifest = {
  source: { path: artifact, sha256: sha256(source), bytes: Buffer.byteLength(source),
    lfSha256: sha256(lfSource), lfBytes: Buffer.byteLength(lfSource) },
  originalTopLevelStatements, atoms: ast.program.body.length,
  transformation: 'split top-level declarations; lexical binding renames; generated imports/exports; no expression rewrites',
  topLevelNames: names, appLocalNames, restoredPropBindings, modules: [],
};
for (const group of groups) {
  const imports = [...group.imports].map(([file, symbols]) => {
    let relative = path.posix.relative(path.posix.dirname(group.file), file);
    if (!relative.startsWith('.')) relative = `./${relative}`;
    return t.importDeclaration([...symbols].sort().map(name => t.importSpecifier(t.identifier(name), t.identifier(name))), t.stringLiteral(relative));
  });
  const exports = group.exports.size ? [t.exportNamedDeclaration(null, [...group.exports].sort().map(name => t.exportSpecifier(t.identifier(name), t.identifier(name))))] : [];
  const module = t.file(t.program([...imports, ...group.nodes, ...exports]));
  const generated = generate(module, { comments: true, sourceMaps: true, sourceFileName: artifact }, source);
  // Keep maps unshifted: metadata is kept outside generated source rather than prepended.
  const code = `${generated.code}\n//# sourceMappingURL=${path.posix.basename(group.file)}.map\n`;
  const destination = path.join(outputRoot, group.file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, code);
  generated.map.sourcesContent = []; // Original stays in assets/; avoid duplicating it 35 times.
  generated.map.sources = [path.posix.relative(path.posix.dirname(`${outputRoot}/${group.file}`), artifact)];
  fs.writeFileSync(`${destination}.map`, JSON.stringify(generated.map));
  manifest.modules.push({
    file: group.file, sha256: sha256(code), statements: group.nodes.length,
    ranges: group.nodes.map(n => ({ start: n.start, end: n.end })),
    rangeSemantics: 'half-open UTF-16 character offsets',
    imports: [...group.imports].map(([file, symbols]) => ({ file, names: [...symbols].sort() })),
    exports: [...group.exports].sort(),
  });
}
const importOrder = groups.map(g => `import ${JSON.stringify(`./${g.file}`)};`).join('\n');
fs.writeFileSync(path.join(outputRoot, 'application.js'), `${importOrder}\n`);
fs.writeFileSync(path.join(outputRoot, 'recovery-manifest.json'), JSON.stringify(manifest, null, 2));

const cssArtifact = 'assets/index-5QhdSaXr.css';
const cssSource = fs.readFileSync(cssArtifact, 'utf8');
const css = postcss.parse(cssSource, { from: cssArtifact });
const cssFingerprint = root => {
  const nodes = [];
  root.walk(node => nodes.push({ type: node.type, name: node.name, params: node.params,
    selector: node.selector, prop: node.prop, value: node.value, important: node.important, text: node.text }));
  return sha256(JSON.stringify(nodes));
};
const originalCssFingerprint = cssFingerprint(css);
css.walk(node => {
  let depth = 0;
  for (let parent = node.parent; parent?.type !== 'root'; parent = parent.parent) depth++;
  const indent = '  '.repeat(depth);
  node.raws.before = `\n${indent}`;
  // Whitespace-only custom-property values are significant tokens. Keep them exact.
  if (node.type === 'decl' && !node.prop.startsWith('--')) node.raws.between = ': ';
  if (node.nodes) {
    node.raws.between = ' ';
    node.raws.after = `\n${indent}`;
    node.raws.semicolon = true;
  }
});
const formattedCss = `${css.toString().trim()}\n`;
assert.equal(cssFingerprint(postcss.parse(formattedCss)), originalCssFingerprint);
fs.writeFileSync(path.join(outputRoot, 'styles.css'), formattedCss);

// Reassemble every emitted statement in original order and compare binding-normalized ASTs.
const merged = [];
for (const group of groups) {
  const module = readAst(fs.readFileSync(path.join(outputRoot, group.file), 'utf8'));
  merged.push(...module.program.body.filter(n => !t.isImportDeclaration(n) && !t.isExportNamedDeclaration(n)));
}
const recovered = t.file(t.program(merged, [], 'module'));
function canonicalAst(tree) {
  const identifiers = new WeakMap();
  let next = 0;
  traverse(tree, {
    Identifier(p) {
      const binding = p.scope.getBinding(p.node.name);
      if (binding?.identifier === p.node && !identifiers.has(binding)) identifiers.set(binding, next++);
    },
  });
  traverse(tree, {
    Identifier(p) {
      const binding = p.scope.getBinding(p.node.name);
      if (!binding || !identifiers.has(binding)) return;
      if (p.isBindingIdentifier() || p.isReferencedIdentifier()) p.node.__binding = identifiers.get(binding);
    },
  });
  const ignored = new Set(['start', 'end', 'loc', 'extra', 'leadingComments', 'trailingComments', 'innerComments', 'comments', 'tokens', 'shorthand', '__binding']);
  const clean = value => {
    if (Array.isArray(value)) return value.map(clean);
    if (!value || typeof value !== 'object') return value;
    const result = {};
    for (const key of Object.keys(value).sort()) {
      if (ignored.has(key)) continue;
      if (key === 'name' && value.__binding !== undefined) result[key] = `binding_${value.__binding}`;
      else result[key] = clean(value[key]);
    }
    return result;
  };
  return JSON.stringify(clean(tree.program));
}
const originalCanonical = canonicalAst(original);
const recoveredCanonical = canonicalAst(recovered);
if (originalCanonical !== recoveredCanonical) {
  fs.writeFileSync('recovery/2026-10-15-rea/evidence/expected-ast.json', originalCanonical);
  fs.writeFileSync('recovery/2026-10-15-rea/evidence/actual-ast.json', recoveredCanonical);
}
assert.equal(sha256(recoveredCanonical), sha256(originalCanonical), 'Recovered AST differs from the artifact');
const report = {
  status: 'pass', sourceSha256: manifest.source.sha256,
  modules: groups.length, originalTopLevelStatements, atoms: manifest.atoms,
  css: { sourceSha256: sha256(cssSource), canonicalAstSha256: originalCssFingerprint, status: 'pass' },
  canonicalAstSha256: sha256(originalCanonical), restoredPropBindings,
  topLevelRenames: Object.keys(names).length, appLocalRenames: Object.keys(appLocalNames).length,
  checked: 'All emitted code reassembled and alpha-equivalent to original AST after top-level declaration splitting and removal of generated module edges.',
  limits: 'Static structure equivalence; import evaluation order and browser behavior require separate runtime checks. No claim of original filenames, types, comments, or variable names.',
};
fs.writeFileSync('recovery/2026-10-15-rea/evidence/ast-verification.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
