'use strict';

const crypto = require('node:crypto');

const MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-sol';
const MAX_BODY_BYTES = 16 * 1024;

function asShortString(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function asStringList(value, maxItems, maxItemLength) {
  if (!Array.isArray(value)) return [];
  return value
    .filter(item => typeof item === 'string')
    .slice(0, maxItems)
    .map(item => item.trim().slice(0, maxItemLength))
    .filter(Boolean);
}

function normalizeJourney(body = {}) {
  const journey = body.journey || {};
  const ending = body.ending || {};
  return {
    ending: {
      sceneId: asShortString(ending.sceneId, 80),
      title: asShortString(ending.title, 100),
      description: asShortString(ending.description, 600)
    },
    journey: {
      day: Number.isFinite(Number(journey.day)) ? Math.max(0, Math.min(999, Number(journey.day))) : 0,
      clues: asStringList(journey.clues, 24, 80),
      traits: asStringList(journey.traits, 32, 80),
      completedWorlds: asStringList(journey.completedWorlds, 16, 80),
      xMemories: asStringList(journey.xMemories, 12, 180)
    }
  };
}

function buildPrompt(state) {
  return [
    '请根据以下已发生的旅程，为玩家写一封来自 X 的私人回信。',
    '只能解释给定事实，不能新增世界、角色、道具、死亡或关键剧情。',
    '不要声称你是 AI，不要复述数据字段，不要使用现有影视或文学作品的专有名词。',
    '回信使用简体中文，克制、含蓄，带一点迷宫与记忆的意象；正文 90 到 150 个汉字。',
    '标题不超过 14 个汉字，署名不超过 8 个汉字。',
    '',
    JSON.stringify(state)
  ].join('\n');
}

function extractOutputText(response) {
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return response.output_text;
  }
  for (const item of response.output || []) {
    if (item && item.type === 'message') {
      for (const part of item.content || []) {
        if (part && part.type === 'output_text' && typeof part.text === 'string') return part.text;
      }
    }
  }
  return '';
}

async function requestEpilogue(state, sessionId, fetchImpl = fetch) {
  if (!process.env.OPENAI_API_KEY) {
    const error = new Error('OPENAI_API_KEY is not configured');
    error.code = 'AI_NOT_CONFIGURED';
    throw error;
  }

  const safetyIdentifier = crypto
    .createHash('sha256')
    .update(asShortString(sessionId, 128) || 'anonymous-session')
    .digest('hex');

  const response = await fetchImpl('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: MODEL,
      store: false,
      safety_identifier: safetyIdentifier,
      reasoning: { effort: 'low' },
      instructions: '你是互动叙事游戏《寻找X》的尾声写作者。严格遵守输入边界和 JSON 输出结构。',
      input: buildPrompt(state),
      max_output_tokens: 350,
      text: {
        verbosity: 'low',
        format: {
          type: 'json_schema',
          name: 'personal_epilogue',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              title: { type: 'string', minLength: 1, maxLength: 40 },
              letter: { type: 'string', minLength: 40, maxLength: 500 },
              signature: { type: 'string', minLength: 1, maxLength: 20 }
            },
            required: ['title', 'letter', 'signature'],
            additionalProperties: false
          }
        }
      }
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error?.message || `OpenAI request failed (${response.status})`);
    error.code = 'OPENAI_REQUEST_FAILED';
    throw error;
  }

  const outputText = extractOutputText(data);
  if (!outputText) {
    const error = new Error('The model returned no text');
    error.code = 'EMPTY_MODEL_OUTPUT';
    throw error;
  }

  const parsed = JSON.parse(outputText);
  return {
    title: asShortString(parsed.title, 40),
    letter: asShortString(parsed.letter, 500),
    signature: asShortString(parsed.signature, 20),
    model: data.model || MODEL
  };
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  }

  const contentLength = Number(req.headers?.['content-length'] || 0);
  const parsedBodyLength = Buffer.byteLength(JSON.stringify(req.body || {}));
  if (contentLength > MAX_BODY_BYTES || parsedBodyLength > MAX_BODY_BYTES) {
    return res.status(413).json({ error: 'PAYLOAD_TOO_LARGE' });
  }

  const state = normalizeJourney(req.body);
  try {
    const epilogue = await requestEpilogue(state, req.body?.sessionId);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(epilogue);
  } catch (error) {
    console.error('AI epilogue failed:', error.code || error.message);
    const status = error.code === 'AI_NOT_CONFIGURED' ? 503 : 502;
    return res.status(status).json({ error: error.code || 'AI_EPILOGUE_FAILED' });
  }
}

handler._private = { normalizeJourney, buildPrompt, extractOutputText, requestEpilogue };
module.exports = handler;
