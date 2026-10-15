// Verify the recovery already on disk. This command never regenerates source files.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { parse } from '@babel/parser';
import generatorModule from '@babel/generator';
import traverseModule from '@babel/traverse';
import * as t from '@babel/types';
import postcss from 'postcss';

const generate = generatorModule.default ?? generatorModule;
const traverse = traverseModule.default ?? traverseModule;
const workspace = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const recoveredRoot = path.join(workspace, 'src/recovered');
const evidencePath = path.join(workspace, 'recovery/2026-10-15-rea/evidence/independent-verification.json');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const readAst = code => parse(code, { sourceType: 'module' });
const sorted = values => [...values].sort();
const readJson = filename => JSON.parse(fs.readFileSync(filename, 'utf8').replace(/^\uFEFF/, ''));

function splitDeclarations(body) {
  return body.flatMap(node => {
    if (!t.isVariableDeclaration(node) || node.declarations.length === 1) return [node];
    return node.declarations.map((declaration, index) => ({
      ...node, declarations: [declaration], start: declaration.start, end: declaration.end,
      leadingComments: index === 0 ? node.leadingComments : [],
      trailingComments: index === node.declarations.length - 1 ? node.trailingComments : [],
    }));
  });
}

// Same alpha-normalization algorithm as the recovery command; no recovered file is rewritten.
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

// Retain CSS node hierarchy and semantic fields; omit formatting (raws), locations and parent links.
function canonicalCss(root) {
  const clean = node => {
    const result = { type: node.type };
    for (const key of ['name', 'params', 'selector', 'prop', 'value', 'important', 'text']) {
      if (node[key] !== undefined) result[key] = node[key];
    }
    if (node.nodes) result.nodes = node.nodes.map(clean);
    return result;
  };
  return JSON.stringify(clean(root));
}

function cyclesIn(graph) {
  const state = new Map();
  const stack = [];
  const cycles = [];
  const visit = file => {
    state.set(file, 1);
    stack.push(file);
    for (const dependency of graph.get(file) ?? []) {
      if (!state.has(dependency)) visit(dependency);
      else if (state.get(dependency) === 1) cycles.push([...stack.slice(stack.indexOf(dependency)), dependency]);
    }
    stack.pop();
    state.set(file, 2);
  };
  for (const file of graph.keys()) if (!state.has(file)) visit(file);
  return cycles;
}

function variableInitializer(body, name) {
  for (const node of body) {
    if (!t.isVariableDeclaration(node)) continue;
    for (const declaration of node.declarations) {
      if (t.isIdentifier(declaration.id, { name })) return declaration.init;
    }
  }
  assert.fail(`Missing variable ${name}`);
}

function literalLyrics(body, name) {
  const value = variableInitializer(body, name);
  assert(t.isTemplateLiteral(value), `${name} must remain a template literal`);
  assert.equal(value.expressions.length, 0, `${name} must not have interpolations`);
  assert.equal(value.quasis.length, 1, `${name} must have exactly one literal part`);
  const text = value.quasis[0].value.cooked;
  const entries = JSON.parse(text);
  assert(Array.isArray(entries), `${name} must be a JSON array`);
  return { text, entries };
}

const report = { status: 'fail' };
try {
  const manifest = readJson(path.join(recoveredRoot, 'recovery-manifest.json'));
  assert.equal(manifest.modules.length, 35, 'Expected all 35 recovered modules');
  const sourcePath = path.resolve(workspace, manifest.source.path);
  const originalBytes = fs.readFileSync(sourcePath);
  const sourceSha256 = sha256(originalBytes);
  const lfSource = originalBytes.toString('utf8').replace(/\r\n/g, '\n');
  assert.equal(sha256(lfSource), '1443c37e030277e2ef8896bc53a430d9c31230b22dab3c357dd22445119cfc60',
    'Original JS differs from the fixed shipped artifact after line-ending normalization');
  if (sourceSha256 === manifest.source.sha256) {
    assert.equal(originalBytes.length, manifest.source.bytes, 'Original JS byte count differs from manifest');
  } else {
    assert.equal(sha256(lfSource), manifest.source.lfSha256, 'Original JS does not match recovery manifest LF SHA256');
    assert.equal(Buffer.byteLength(lfSource), manifest.source.lfBytes, 'Original LF byte count differs from manifest');
  }
  // The local snapshot is optional; clean clones still verify against fixed artifact identities.
  const snapshotHashesPath = path.join(workspace, 'recovery/2026-10-15-rea/artifact-sha256.json');
  const preservedHashes = fs.existsSync(snapshotHashesPath) ? readJson(snapshotHashesPath) : [
    { Path: 'index-ifD7iYwv.js', Hash: '8407f9eab50b4b90d1be2bd6f2b82cd8eb837237cb1395b3a1ea6c2fc03c5a9d' },
    { Path: 'index-5QhdSaXr.css', Hash: 'c0ba11dc333ae9d058041028ff69d83ae64019d079e4579bcf7d9476e97f2ea4' },
  ];
  const originalHashEntry = preservedHashes.find(entry => path.basename(entry.Path.replaceAll('\\', '/')) === path.basename(sourcePath));
  assert(originalHashEntry, 'Original JS missing from preserved artifact SHA256 manifest');
  const acceptedSourceHashes = new Set([
    '8407f9eab50b4b90d1be2bd6f2b82cd8eb837237cb1395b3a1ea6c2fc03c5a9d',
    '1443c37e030277e2ef8896bc53a430d9c31230b22dab3c357dd22445119cfc60',
  ]);
  assert(acceptedSourceHashes.has(manifest.source.sha256), 'Recovery manifest has an unknown original JS identity');
  assert(acceptedSourceHashes.has(originalHashEntry.Hash.toLowerCase()), 'Preserved artifact has an unknown JS identity');
  report.sourceSha256 = sourceSha256;
  report.sourceByteExact = sourceSha256 === manifest.source.sha256;
  report.sourceLfSha256 = sha256(lfSource);

  const originalAst = readAst(originalBytes.toString('utf8'));
  const originalStatementCount = originalAst.program.body.length;
  assert.equal(originalStatementCount, manifest.originalTopLevelStatements, 'Original statement count differs from manifest');
  assert(!originalAst.program.body.some(node => t.isImportDeclaration(node) || t.isExportDeclaration(node)),
    'Unexpected original module edges: generated edges must be distinguished before reassembly');
  originalAst.program.body = splitDeclarations(originalAst.program.body);
  const originalAtoms = originalAst.program.body.length;
  assert.equal(originalAtoms, manifest.atoms, 'Original atom count differs from manifest');

  const modules = new Map();
  const graph = new Map();
  const merged = [];
  let importEdges = 0;
  let importedBindings = 0;
  let generatedExports = 0;
  for (const entry of manifest.modules) {
    assert(!modules.has(entry.file), `Duplicate module ${entry.file}`);
    const modulePath = path.resolve(recoveredRoot, entry.file);
    assert(modulePath.startsWith(`${recoveredRoot}${path.sep}`), `Module escapes recovery root: ${entry.file}`);
    const code = fs.readFileSync(modulePath);
    assert.equal(sha256(code), entry.sha256, `Recovered module SHA256 mismatch: ${entry.file}`);
    const ast = readAst(code.toString('utf8'));
    const importDeclarations = ast.program.body.filter(t.isImportDeclaration);
    const exportDeclarations = ast.program.body.filter(t.isExportDeclaration);
    const actualImports = [];
    for (const node of importDeclarations) {
      assert(node.source.value.startsWith('.'), `Unexpected external import in ${entry.file}`);
      assert(node.specifiers.length > 0, `Unexpected generated side-effect import in ${entry.file}`);
      const dependency = path.posix.normalize(path.posix.join(path.posix.dirname(entry.file), node.source.value));
      assert(!dependency.startsWith('../') && !path.posix.isAbsolute(dependency), `Import escapes recovery root in ${entry.file}`);
      const names = node.specifiers.map(specifier => {
        assert(t.isImportSpecifier(specifier), `Unexpected non-named import in ${entry.file}`);
        assert(t.isIdentifier(specifier.imported), `Unexpected string-named import in ${entry.file}`);
        assert.equal(specifier.local.name, specifier.imported.name, `Unexpected import alias in ${entry.file}`);
        return specifier.imported.name;
      });
      actualImports.push({ file: dependency, names: sorted(names) });
      importedBindings += names.length;
    }
    assert.deepEqual(actualImports, entry.imports, `Generated imports do not match manifest in ${entry.file}`);
    const actualExports = [];
    for (const node of exportDeclarations) {
      assert(t.isExportNamedDeclaration(node) && !node.declaration && !node.source,
        `Unexpected export form in ${entry.file}`);
      for (const specifier of node.specifiers) {
        assert(t.isExportSpecifier(specifier) && t.isIdentifier(specifier.exported), `Unexpected export specifier in ${entry.file}`);
        assert.equal(specifier.local.name, specifier.exported.name, `Unexpected export alias in ${entry.file}`);
        actualExports.push(specifier.exported.name);
      }
    }
    assert.deepEqual(sorted(actualExports), entry.exports, `Generated exports do not match manifest in ${entry.file}`);
    let programScope;
    traverse(ast, { Program(p) { programScope = p.scope; } });
    for (const name of actualExports) assert(programScope.hasOwnBinding(name), `Export ${name} has no local binding in ${entry.file}`);
    const statements = ast.program.body.filter(node => !t.isImportDeclaration(node) && !t.isExportDeclaration(node));
    assert.equal(statements.length, entry.statements, `Recovered statement count mismatch in ${entry.file}`);
    merged.push(...statements);
    modules.set(entry.file, { exports: new Set(actualExports), imports: actualImports, statements });
    graph.set(entry.file, new Set(actualImports.map(edge => edge.file)));
    importEdges += actualImports.length;
    generatedExports += actualExports.length;
  }
  for (const [file, module] of modules) {
    for (const edge of module.imports) {
      const dependency = modules.get(edge.file);
      assert(dependency, `${file} imports missing module ${edge.file}`);
      for (const name of edge.names) assert(dependency.exports.has(name), `${file} imports undeclared export ${name} from ${edge.file}`);
    }
  }
  const cycles = cyclesIn(graph);
  report.moduleGraph = { status: cycles.length ? 'fail' : 'pass', importEdges, importedBindings, exportedBindings: generatedExports, cycles };
  assert.equal(cycles.length, 0, `Recovered module graph contains cycles: ${JSON.stringify(cycles)}`);
  assert.equal(merged.length, originalAtoms, 'Reassembled statement count differs from original atoms');
  report.modules = modules.size;
  report.statements = { original: originalStatementCount, splitOriginal: originalAtoms, reassembled: merged.length };

  const lyricVariables = [
    ['ditto', 'PC', 80], ['supernatural', 'IC', 50], ['attention', 'zC', 75],
    ['hypeboy', 'FC', 73], ['omg', 'BC', 109], ['cookie', 'HC', 104],
  ];
  const lyricCounts = {};
  for (const [song, originalName, expectedCount] of lyricVariables) {
    const original = literalLyrics(originalAst.program.body, originalName);
    const recovered = literalLyrics(merged, manifest.topLevelNames[originalName]);
    assert.equal(recovered.text, original.text, `Lyric template value differs for ${song}`);
    assert.deepEqual(recovered.entries, original.entries, `Lyric JSON differs for ${song}`);
    assert.equal(original.entries.length, expectedCount, `Unexpected original lyric count for ${song}`);
    assert.equal(recovered.entries.length, original.entries.length, `Lyric count differs for ${song}`);
    lyricCounts[song] = recovered.entries.length;
  }
  const originalSongs = variableInitializer(originalAst.program.body, 'Aa');
  const recoveredSongs = variableInitializer(merged, manifest.topLevelNames.Aa);
  assert(t.isConditionalExpression(originalSongs) && t.isArrayExpression(originalSongs.alternate), 'Original fallback song array not found');
  assert(t.isConditionalExpression(recoveredSongs) && t.isArrayExpression(recoveredSongs.alternate), 'Recovered fallback song array not found');
  assert.equal(originalSongs.alternate.elements.length, 6, 'Expected six original fallback songs');
  assert.equal(recoveredSongs.alternate.elements.length, originalSongs.alternate.elements.length, 'Fallback song count differs');
  report.songs = recoveredSongs.alternate.elements.length;
  report.lyrics = { status: 'pass', entries: lyricCounts, total: Object.values(lyricCounts).reduce((sum, count) => sum + count, 0), templateValuesExact: true };
  assert.equal(report.lyrics.total, 491, 'Expected all 491 original timed lyric entries');

  // Generate/reparse only in memory to normalize Babel's optional AST fields after splitting.
  const originalCanonical = canonicalAst(readAst(generate(originalAst).code));
  const recoveredCanonical = canonicalAst(t.file(t.program(merged, [], 'module')));
  assert.equal(sha256(recoveredCanonical), sha256(originalCanonical), 'Reassembled alpha-normalized AST differs from original');
  report.ast = { status: 'pass', canonicalSha256: sha256(originalCanonical) };

  const originalCssPath = path.join(workspace, 'assets/index-5QhdSaXr.css');
  const originalCssBytes = fs.readFileSync(originalCssPath);
  const recoveredCssBytes = fs.readFileSync(path.join(recoveredRoot, 'styles.css'));
  const cssHashEntry = preservedHashes.find(entry => path.basename(entry.Path.replaceAll('\\', '/')) === path.basename(originalCssPath));
  assert(cssHashEntry, 'Original CSS missing from preserved artifact SHA256 manifest');
  assert.equal(cssHashEntry.Hash.toLowerCase(), 'c0ba11dc333ae9d058041028ff69d83ae64019d079e4579bcf7d9476e97f2ea4', 'Preserved CSS identity differs');
  assert.equal(sha256(originalCssBytes.toString('utf8').replace(/\r\n/g, '\n')),
    '03196daa969187ab3f4e1c136d8b29b7b3405d19dd9869fba83aa5b265e0d437', 'Original CSS differs from fixed artifact after LF normalization');
  const originalCss = postcss.parse(originalCssBytes.toString('utf8'), { from: originalCssPath });
  const recoveredCss = postcss.parse(recoveredCssBytes.toString('utf8'), { from: 'src/recovered/styles.css' });
  const originalCssCanonical = canonicalCss(originalCss);
  assert.equal(canonicalCss(recoveredCss), originalCssCanonical, 'Recovered CSS semantic AST differs from original');
  let cssNodes = 0;
  originalCss.walk(() => cssNodes++);
  report.css = { status: 'pass', sourceSha256: sha256(originalCssBytes), canonicalSha256: sha256(originalCssCanonical), nodes: cssNodes };
  report.status = 'pass';
  report.boundary = 'Static artifact, AST, module-edge and lyric verification only; no browser, audio-device or desktop runtime claim.';
} catch (error) {
  report.error = error.message;
  process.exitCode = 1;
}

fs.mkdirSync(path.dirname(evidencePath), { recursive: true });
fs.writeFileSync(evidencePath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
