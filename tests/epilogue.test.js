'use strict';

const assert = require('node:assert/strict');
const handler = require('../api/epilogue');
const client = require('../js/ai-epilogue');

const { normalizeJourney, buildPrompt, extractOutputText, requestEpilogue } = handler._private;

const normalized = normalizeJourney({
  ending: { sceneId: 'ending_accept', title: '接受', description: '旅程结束。' },
  journey: {
    day: 8,
    clues: ['name', 'time'],
    traits: ['curious'],
    completedWorlds: ['alice'],
    xMemories: ['她曾在雨中等我。']
  }
});

assert.equal(normalized.journey.day, 8);
assert.deepEqual(normalized.journey.clues, ['name', 'time']);
assert.match(buildPrompt(normalized), /不能新增世界/);
assert.equal(extractOutputText({ output_text: '{"ok":true}' }), '{"ok":true}');
assert.equal(extractOutputText({ output: [{ type: 'message', content: [{ type: 'output_text', text: 'hello' }] }] }), 'hello');

const fallback = client.offlineFallback(normalized.journey);
assert.ok(fallback.title && fallback.letter && fallback.signature);
assert.equal(fallback.offline, true);

async function testClient() {
  const result = await client.generate({ journey: normalized.journey }, async () => ({
    ok: true,
    json: async () => ({ title: '一封回信', letter: '这是经过结构校验的模型回信。', signature: 'X', model: 'gpt-5.6-sol' })
  }));
  assert.equal(result.model, 'gpt-5.6-sol');

  process.env.OPENAI_API_KEY = 'test-key-not-real';
  let capturedRequest;
  const generated = await requestEpilogue(normalized, 'stable-local-session', async (url, request) => {
    capturedRequest = { url, request, body: JSON.parse(request.body) };
    return {
      ok: true,
      json: async () => ({
        model: 'gpt-5.6-sol',
        output_text: JSON.stringify({ title: '镜后的信', letter: '你带回的碎片并不完整，但缺口本身也是形状。请保留它，不必再把我变成唯一的答案。', signature: 'X' })
      })
    };
  });
  delete process.env.OPENAI_API_KEY;

  assert.equal(capturedRequest.url, 'https://api.openai.com/v1/responses');
  assert.equal(capturedRequest.body.model, 'gpt-5.6-sol');
  assert.equal(capturedRequest.body.store, false);
  assert.equal(capturedRequest.body.reasoning.effort, 'low');
  assert.equal(capturedRequest.body.text.format.type, 'json_schema');
  assert.equal(generated.signature, 'X');
}

testClient()
  .then(() => console.log('AI epilogue contract: OK'))
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
