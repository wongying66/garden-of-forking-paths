'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

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
    console: { log() {}, warn() {}, error() {} },
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
    Math,
    Date,
    JSON,
    Object,
    Array,
    Set,
    Map
});

const engineSource = fs.readFileSync(path.join(__dirname, 'vn-engine.js'), 'utf8');
vm.runInContext(engineSource, context, { filename: 'vn-engine.js', timeout: 5000 });
const script = vm.runInContext('SCRIPT', context);

function findCluePath(startScene, expectedClue, maxDepth = 8) {
    const queue = [{ sceneId: startScene, depth: 0, path: [startScene], clues: new Set() }];
    const visited = new Set();

    while (queue.length > 0) {
        const current = queue.shift();
        const scene = script[current.sceneId];
        if (!scene || current.depth > maxDepth) continue;

        const clues = new Set(current.clues);
        if (scene.clue) clues.add(scene.clue);
        if (clues.has(expectedClue)) return current.path;

        const visitKey = `${current.sceneId}|${[...clues].sort().join(',')}`;
        if (visited.has(visitKey)) continue;
        visited.add(visitKey);

        const choices = Array.isArray(scene.choices) ? scene.choices : [];
        for (const choice of choices) {
            const nextClues = new Set(clues);
            if (choice.clue) nextClues.add(choice.clue);
            const nextPath = [...current.path, choice.next];
            if (nextClues.has(expectedClue)) return nextPath;
            queue.push({
                sceneId: choice.next,
                depth: current.depth + 1,
                path: nextPath,
                clues: nextClues
            });
        }
    }
    return null;
}

const cases = [
    ['meet_monk', 'name'],
    ['meet_beauty', 'time'],
    ['meet_tiger', 'location']
];

for (const [startScene, clue] of cases) {
    const pathFound = findCluePath(startScene, clue);
    assert.ok(pathFound, `${clue} must be reachable from ${startScene}`);
    console.log(`✓ ${startScene} → ${clue}: ${pathFound.join(' → ')}`);
}

console.log('Prologue clue reachability: OK');
