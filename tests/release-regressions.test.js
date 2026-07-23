'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'vn.html'), 'utf8');
const engineSource = fs.readFileSync(path.join(root, 'js', 'vn-engine.js'), 'utf8');
const scriptPaths = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1].split('?')[0]);
const store = new Map();
const noopElement = {
  addEventListener() {},
  classList: { add() {}, remove() {}, contains() { return false; } },
  style: { removeProperty() {} },
  dataset: {},
  setAttribute() {},
  removeAttribute() {},
  appendChild() {},
  querySelector() { return null; },
  querySelectorAll() { return []; }
};

const context = vm.createContext({
  console: { log() {}, warn() {}, error() {} },
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
  localStorage: {
    getItem(key) { return store.has(key) ? store.get(key) : null; },
    setItem(key, value) { store.set(key, String(value)); },
    removeItem(key) { store.delete(key); }
  },
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  requestAnimationFrame(callback) { callback(); },
  Math,
  Date,
  JSON,
  Object,
  Array,
  Set,
  Map,
  fetch: async () => { throw new Error('network disabled in regression test'); }
});
context.window = context;
context.globalThis = context;

const excluded = new Set(['js/music-engine.js', 'js/effects-engine.js']);
for (const relativePath of scriptPaths) {
  if (excluded.has(relativePath)) continue;
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  vm.runInContext(source, context, { filename: relativePath, timeout: 5000 });
}

const evaluate = expression => vm.runInContext(expression, context, { timeout: 5000 });
const continuationScenes = [
  'ending_reunion_library',
  'ending_escape_together',
  'matrix_deny',
  'spirited_accept_self',
  'spirited_want_change',
  'spirited_letting_go',
  'spirited_keep_seeking',
  'spirited_humble',
  'spirited_ambitious',
  'spirited_reject_temptation',
  'spirited_liberator',
  'spirited_worry_self',
  'spirited_patience_reward',
  'spirited_cherish_memory',
  'wake_accept_cycle',
  'maus_judgment',
  'ending_eternal_search'
];

for (const sceneId of continuationScenes) {
  assert.equal(
    evaluate(`Engine.shouldShowEndingScreen(SCRIPT[${JSON.stringify(sceneId)}])`),
    false,
    `${sceneId} must remain playable instead of being cut off by the ending screen`
  );
}

assert.equal(evaluate("Engine.shouldShowEndingScreen(SCRIPT['cthulhu_next_world'])"), true);
assert.equal(evaluate('FIRST_RUN_ENDING_THRESHOLD'), 5);

assert.match(html, /\.click-continue\s*\{[\s\S]*display:\s*block;/, 'click-to-continue affordance must be visible when enabled');
assert.match(html, /id="clickContinue"[^>]*aria-live="polite"/, 'continue affordance must be announced accessibly');
assert.equal(evaluate('SAVE_SCHEMA_VERSION'), 2);
assert.ok(evaluate('Array.isArray(gameState.choiceHistory)'), 'choice history must exist in the default state');
assert.match(engineSource, /for \(let i = 0; i < 3; i\+\+\) localStorage\.removeItem\(`vn_auto_save_\$\{i\}`\)/, 'restart must clear all automatic saves');

evaluate("gameState.choiceHistory = []; Engine.recordChoice({ text: '测试一个决定', next: 'start' }); Engine.autoSave()");
assert.equal(evaluate('gameState.choiceHistory[0].choice'), '测试一个决定');
const savedSnapshots = [...store.entries()]
  .filter(([key]) => key.startsWith('vn_auto_save_'))
  .map(([, value]) => JSON.parse(value));
assert.ok(savedSnapshots.some(snapshot => snapshot.saveVersion === 2 && snapshot.choiceHistory?.length === 1), 'automatic saves must persist versioned choice history');

evaluate("Engine._applySaveData({ currentScene: 'start' })");
assert.equal(evaluate('gameState.saveVersion'), 2, 'old saves must be upgraded to the current schema');
assert.ok(evaluate('Array.isArray(gameState.choiceHistory)'), 'old saves must receive an empty choice history');

// The first ending reached in a session must create a recoverable checkpoint.
evaluate("gameState.currentScene = 'ending_reunion_library'; Engine.autoSave()");
assert.ok(evaluate('Engine.getLatestAutoSave()'), 'auto-save helper should find the newest checkpoint');

assert.doesNotMatch(html, /92个结局/, 'the title must not advertise the stale hard-coded ending count');
assert.match(html, /id="endingCount"/, 'title must expose a dynamic ending-count target');
assert.match(engineSource, /endingCount\.textContent\s*=\s*'多重结局'/, 'the title should use a player-facing ending summary');
assert.doesNotMatch(engineSource, /endingCount\.textContent\s*=\s*`\$\{count\}个结局节点`/, 'the title must not expose internal ending-node counts');

console.log('Release regressions: OK');
