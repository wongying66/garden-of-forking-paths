# Garden of Forking Paths / 寻找X

An interactive narrative game where the rules remember what the player chose, and GPT-5.6 writes a bounded, personalized letter from X at the end of a journey.

> Current status: playable prototype. The repository contains a large authored story graph and a production-shaped AI epilogue path. A public demo URL and demo video still need to be added before the final Devpost submission.

## What the project does

The player travels through branching worlds while collecting clues, traits, memories, and consequences. The core story remains rule-driven so that important facts, endings, and progress cannot be rewritten by a model.

At an ending, the player may ask GPT-5.6 to write a short private letter from X. The model receives only a bounded summary of the completed journey:

- ending title and description;
- elapsed days;
- collected clue identifiers;
- acquired traits;
- completed worlds;
- a limited set of memories about X.

GPT-5.6 does **not** choose the ending, mutate game state, invent new worlds, or overwrite authored scenes. If the API is unavailable, the game clearly labels and displays a deterministic offline fallback.

## Current scope

The current runtime audit reports:

- 836 merged scene nodes;
- 1,205 static scene transitions;
- 98 unique runtime asset paths;
- no missing static transition targets;
- no missing mapped runtime assets;
- 12 explorable worlds plus the Aleph hub and final chapter.

These figures describe the static story graph. They are not a substitute for a full manual playthrough on every route.

## Architecture

```text
Player choice
    ↓
Rule-driven SCRIPT graph
    ↓
Persistent local game state
    ├─ clues
    ├─ traits
    ├─ completed worlds
    └─ memories of X
    ↓
Authored ending
    ↓ (optional, one bounded call)
/api/epilogue → OpenAI Responses API → GPT-5.6 Sol
    ↓
Structured JSON letter from X
```

The browser never receives the OpenAI API key. `api/epilogue.js` is a server-side Vercel function. It validates and limits the submitted state, hashes a local anonymous session identifier for `safety_identifier`, requests strict structured output, and returns only the final letter fields.

## Run the game

### Static/offline mode

Serve the repository with any static web server and open `/` or `/vn.html`. The authored game works without an API key. The GPT-5.6 button will use the clearly labelled offline fallback if `/api/epilogue` is unavailable.

For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

### Full AI mode

1. Copy the environment template:

   ```bash
   cp .env.example .env.local
   ```

2. Add a server-side OpenAI API key to `.env.local`:

   ```text
   OPENAI_API_KEY=...
   OPENAI_MODEL=gpt-5.6-sol
   ```

3. Run with the Vercel development server or deploy the repository to Vercel.

Never put the key in `vn.html`, browser JavaScript, Git history, screenshots, or the public repository. Codex credits and ChatGPT subscriptions are not OpenAI API credits.

## Test and verify

Node.js 18 or newer is required for the local audit scripts.

```bash
npm test
```

The test command checks:

- JavaScript syntax;
- actual script files loaded by `vn.html`;
- the final merged story graph;
- static `next` targets;
- mapped assets;
- the root entry point;
- the AI epilogue request/response contract;
- the offline fallback contract.

The tests do not call the OpenAI API and therefore do not consume credits.

## How Codex was used

The first playable prototype was created in Trae. Codex was then used as a repository-aware engineering and review agent to make the submission verifiable. For the current P0 pass, Codex:

- located and audited the actual Trae Git working directory;
- loaded the final story scripts in their real browser order inside an isolated runtime;
- counted scene nodes and transitions and checked missing targets/assets;
- identified that `/index.html` still opened a legacy game while the current build lived at `/vn.html`;
- replaced the public root with a deterministic redirect while preserving the old page as `legacy-index.html`;
- designed and implemented the bounded GPT-5.6 epilogue flow;
- kept the API key on the server and added input limits, structured output, an anonymous safety identifier, and an offline fallback;
- removed hard-coded Trae session paths from tests;
- added repeatable syntax, story-graph, asset, and AI-contract checks;
- wrote and verified this README and the deployment configuration.

Codex did not claim that every branch was manually played. Static/runtime checks and manual browser QA are reported separately.

## How GPT-5.6 is used

GPT-5.6 Sol runs inside the finished application only when the player asks for a personalized letter from X.

Request characteristics:

- endpoint: OpenAI Responses API;
- model: `gpt-5.6-sol` by default;
- reasoning effort: `low`;
- storage: disabled for this request (`store: false`);
- output: strict JSON schema with `title`, `letter`, and `signature`;
- input: a size-limited, server-validated journey summary;
- authority: text generation only; no ability to change game state or select endings;
- failure behavior: explicit offline fallback, never a fake AI success message.

This is intentionally a small, auditable model role. The authored rule engine controls causality; GPT-5.6 personalizes the emotional reflection.

## Entry points

- `index.html` — public root; redirects to the current game.
- `vn.html` — current visual-novel interface.
- `legacy-index.html` — preserved legacy interface; not the public default.
- `js/vn-engine.js` — main state and rendering engine.
- `js/*-chapter.js` — authored world chapters.
- `js/ai-epilogue.js` — browser client and offline fallback.
- `api/epilogue.js` — server-side GPT-5.6 endpoint.
- `tests/` — repeatable structural and AI-contract checks.

## Known limitations and next steps

- A current full browser playthrough and mobile-device pass are still required.
- The title-screen ending count should be generated from one canonical ending registry.
- Trait labels need a complete reader-facing translation registry.
- Unused and oversized image variants should be reviewed and compressed.
- Several worlds currently reference well-known fictional settings; these should be rewritten into original settings before a public commercial release.
- Public rate limiting should be configured for the AI endpoint before broad distribution.
- Add the final live-demo URL, screenshots, and a 60–90 second video before Devpost submission.

## 中文快速说明

直接运行静态网页即可游玩人工编写的完整分支。配置服务端 `OPENAI_API_KEY` 并通过 Vercel 运行后，结局页的“让 GPT-5.6 写下 X 的回信”按钮会根据本次旅程生成个性化尾声。API 不可用时会明确显示离线备用文本，不会冒充模型结果。

## License and content notice

No open-source license is granted by this repository at this stage. Third-party names, inspirations, and visual assets must be reviewed before public commercial use.
