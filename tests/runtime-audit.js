'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'vn.html'), 'utf8');
const scriptPaths = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1].split('?')[0]);
const runtimeErrors = [];

const noopElement = {
  addEventListener() {},
  classList: { add() {}, remove() {}, contains() { return false; } },
  style: {},
  dataset: {},
  setAttribute() {},
  removeAttribute() {},
  appendChild() {},
  querySelector() { return null; },
  querySelectorAll() { return []; }
};

const context = vm.createContext({
  console: { log() {}, warn() {}, error: (...args) => runtimeErrors.push(args.join(' ')) },
  window: {},
  globalThis: {},
  document: {
    addEventListener() {},
    getElementById() { return noopElement; },
    querySelector() { return noopElement; },
    querySelectorAll() { return []; },
    createElement() { return { ...noopElement }; },
    body: noopElement
  },
  localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  Math,
  Date,
  JSON,
  Object,
  Array,
  Set,
  Map,
  fetch: async () => { throw new Error('network disabled in audit'); }
});
context.window = context;
context.globalThis = context;

const excluded = new Set(['js/music-engine.js', 'js/effects-engine.js']);
for (const relativePath of scriptPaths) {
  const fullPath = path.join(root, relativePath);
  assert.ok(fs.existsSync(fullPath), `Missing script: ${relativePath}`);
  if (excluded.has(relativePath)) continue;
  const source = fs.readFileSync(fullPath, 'utf8');
  vm.runInContext(source, context, { filename: relativePath, timeout: 5000 });
}

const evaluate = expression => vm.runInContext(expression, context, { timeout: 5000 });
const sceneIds = evaluate('Object.keys(SCRIPT)');
const assetPaths = evaluate('Object.values(ASSETS.scenes).concat(Object.values(ASSETS.characters))');
const allSources = scriptPaths
  .filter(relativePath => fs.existsSync(path.join(root, relativePath)))
  .map(relativePath => fs.readFileSync(path.join(root, relativePath), 'utf8'))
  .join('\n');
const nextTargets = [...allSources.matchAll(/\bnext\s*:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
const htmlIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const referencedDomIds = [...new Set([...allSources.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map(match => match[1]))];

const missingAssets = [...new Set(assetPaths.filter(relativePath => !fs.existsSync(path.join(root, relativePath))))];
const missingTargets = [...new Set(nextTargets.filter(sceneId => !sceneIds.includes(sceneId)))];
const missingDomIds = referencedDomIds.filter(id => !htmlIds.has(id));
const duplicateScripts = scriptPaths.filter((item, index) => scriptPaths.indexOf(item) !== index);
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

assert.ok(sceneIds.length >= 800, `Expected at least 800 scene nodes, found ${sceneIds.length}`);
assert.equal(missingAssets.length, 0, `Missing assets: ${missingAssets.join(', ')}`);
assert.equal(missingTargets.length, 0, `Missing scene targets: ${missingTargets.join(', ')}`);
assert.equal(missingDomIds.length, 0, `Missing DOM IDs: ${missingDomIds.join(', ')}`);
assert.equal(duplicateScripts.length, 0, `Duplicate script tags: ${duplicateScripts.join(', ')}`);
assert.equal(runtimeErrors.length, 0, `Runtime definition errors: ${runtimeErrors.join('; ')}`);
assert.match(indexHtml, /vn\.html/, 'Root index must point to the current visual-novel entry');
assert.ok(fs.existsSync(path.join(root, 'README.md')), 'README.md is required');
assert.ok(fs.existsSync(path.join(root, 'api', 'epilogue.js')), 'GPT-5.6 epilogue endpoint is required');

console.log(JSON.stringify({
  ok: true,
  scripts: scriptPaths.length,
  scenes: sceneIds.length,
  staticLinks: nextTargets.length,
  uniqueAssets: new Set(assetPaths).size,
  missingAssets: 0,
  missingTargets: 0,
  missingDomIds: 0,
  duplicateScripts: 0
}, null, 2));
