(function (root, factory) {
    const api = factory();
    if (typeof module === 'object' && module.exports) module.exports = api;
    if (root) root.AIEpilogue = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    function offlineFallback(journey) {
        const fragments = Array.isArray(journey.clues) ? journey.clues.length : 0;
        const worlds = Array.isArray(journey.completedWorlds) ? journey.completedWorlds.length : 0;
        const patient = Array.isArray(journey.traits) && journey.traits.some(t => /patience|methodical|cautious/.test(t));
        return {
            title: '未寄出的回信',
            letter: patient
                ? `你没有把每一道门都当成答案。你停下来，记住了其中的${fragments}块碎片，也让${worlds}个世界在身后保持完整。寻找并未结束，只是你终于知道：有些人要在不被占有时，才真正被找到。`
                : `你穿过${worlds}个世界，带回${fragments}块彼此矛盾的碎片。它们不能拼成同一张脸，却足够证明你确实来过。若下一次又在分岔处听见我的名字，请先问问：那声音究竟来自前方，还是你的记忆。`,
            signature: 'X',
            offline: true
        };
    }

    async function generate(payload, fetchImpl) {
        const call = fetchImpl || fetch;
        const response = await call('/api/epilogue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            const error = new Error(body.error || `AI_EPILOGUE_FAILED_${response.status}`);
            error.status = response.status;
            throw error;
        }
        const result = await response.json();
        if (!result.title || !result.letter || !result.signature) {
            throw new Error('INVALID_AI_EPILOGUE');
        }
        return result;
    }

    return { generate, offlineFallback };
});
