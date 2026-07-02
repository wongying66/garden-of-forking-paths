/**
 * 小径分叉的花园 - 主逻辑
 * 版本 2.0.0
 */

// ================================================================
// 渲染场景
// ================================================================
function renderScene(sceneId) {
    const scene = SCENES[sceneId];
    if (!scene) {
        console.error('Scene not found:', sceneId);
        return;
    }

    // 场景切换时增加天数（非起点和结局）
    if (sceneId !== 'start' && !scene.ending && GameEngine.gameState.currentScene !== sceneId) {
        GameEngine.gameState.day++;
    }

    GameEngine.gameState.currentScene = sceneId;

    // 切换背景
    const bgKey = scene.bg || 'garden';
    GameEngine.switchBackground(bgKey);

    // 记录人物
    if (scene.character && !GameEngine.gameState.encountered.includes(scene.character)) {
        GameEngine.gameState.encountered.push(scene.character);
        GameEngine.updateCharCards();
    }

    // 标题和元信息
    document.getElementById('sceneTitle').textContent = scene.title;
    
    const metaContainer = document.getElementById('sceneMeta');
    metaContainer.innerHTML = '';
    if (scene.meta) {
        scene.meta.forEach(m => {
            const tag = document.createElement('span');
            tag.className = 'scene-tag';
            if (m.includes('档案') || m.includes('石室')) tag.classList.add('location');
            if (m.includes('镜') || m.includes('回忆')) tag.classList.add('memory');
            tag.textContent = m;
            metaContainer.appendChild(tag);
        });
    }

    // 文本 - 应用打字机效果
    const storyText = document.getElementById('storyText');
    const text = typeof scene.text === 'function' ? scene.text() : scene.text;
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    storyText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    
    GameEngine.typeWriter(storyText, storyText.innerHTML);

    // 本色揭示
    const revealEl = document.getElementById('protagonistReveal');
    if (scene.reveal) {
        revealEl.textContent = scene.reveal;
        revealEl.classList.add('visible');
    } else {
        revealEl.classList.remove('visible');
    }

    // X 的碎片记忆
    const memory = GameEngine.triggerXMemory(sceneId);
    if (memory) {
        setTimeout(() => {
            GameEngine.showXMemoryPopup(memory.text);
        }, 2000);
    }

    // 三人互动 - 动态对话
    const extraDialogues = GameEngine.getDynamicDialogue(sceneId);
    if (extraDialogues.length > 0) {
        // 可以在这里插入额外对话到故事文本中
        console.log('Extra dialogues:', extraDialogues);
    }

    // 结局标记
    const endingBanner = document.getElementById('endingBanner');
    if (scene.ending) {
        endingBanner.classList.remove('hidden');
        GameEngine.gameState.ending = scene.ending;
        GameEngine.showEndingSummary(scene.ending);
    } else {
        endingBanner.classList.add('hidden');
    }

    // 选择
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    const choices = typeof scene.choices === 'function' ? scene.choices() : scene.choices;
    
    choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn fade-in';
        btn.style.animationDelay = `${index * 0.08}s`;
        btn.innerHTML = `${choice.text} <span class="arrow">→</span>`;
        btn.onclick = () => makeChoice(choice);
        choicesContainer.appendChild(btn);
    });

    GameEngine.updateStatusBar();
    GameEngine.updateCluesPanel();
    saveState();
}

// ================================================================
// 做出选择
// ================================================================
function makeChoice(choice) {
    // 播放点击音效
    GameEngine.AudioSystem.playClick();

    // 记录选择历史
    GameEngine.gameState.choiceHistory.push({
        scene: GameEngine.gameState.currentScene,
        choice: choice.text,
        timestamp: Date.now()
    });

    // 记录特质
    if (choice.trait && !GameEngine.gameState.protagonist.traits.includes(choice.trait)) {
        GameEngine.gameState.protagonist.traits.push(choice.trait);
    }

    // 收集线索
    if (choice.clue && !GameEngine.gameState.clues.includes(choice.clue)) {
        GameEngine.gameState.clues.push(choice.clue);
        GameEngine.AudioSystem.playClueFound();
        GameEngine.updateCluesPanel();
    }

    renderScene(choice.next);
}

// ================================================================
// 状态持久化
// ================================================================
function saveState() {
    localStorage.setItem('gardenState_v3', JSON.stringify({
        currentScene: GameEngine.gameState.currentScene,
        day: GameEngine.gameState.day,
        clues: GameEngine.gameState.clues,
        encountered: GameEngine.gameState.encountered,
        protagonist: GameEngine.gameState.protagonist,
        xMemories: GameEngine.gameState.xMemories,
        choiceHistory: GameEngine.gameState.choiceHistory
    }));
}

function loadState() {
    const saved = localStorage.getItem('gardenState_v3');
    if (saved) {
        try {
            const p = JSON.parse(saved);
            Object.assign(GameEngine.gameState, p);
            return true;
        } catch (e) {
            return false;
        }
    }
    return false;
}

// ================================================================
// 初始化
// ================================================================
async function initGame() {
    // 加载配置
    await GameEngine.loadConfig();
    
    // 初始化背景图层
    GameEngine.initBackgroundLayers();
    
    // 初始化音频
    GameEngine.AudioSystem.init();

    // 尝试加载存档
    const hasState = loadState();
    
    // 渲染场景
    renderScene(GameEngine.gameState.currentScene);

    // 绑定事件
    bindEvents();
}

// ================================================================
// 事件绑定
// ================================================================
function bindEvents() {
    // 保存按钮
    document.getElementById('saveBtn').addEventListener('click', () => {
        GameEngine.showSavePanel('save');
    });

    // 读取按钮
    document.getElementById('loadBtn').addEventListener('click', () => {
        GameEngine.showSavePanel('load');
    });

    // 存档面板关闭
    document.getElementById('saveLoadClose').addEventListener('click', () => {
        document.getElementById('saveLoadPanel').classList.remove('visible');
    });

    // 音频控制
    document.getElementById('audioBtn').addEventListener('click', () => {
        const muted = GameEngine.AudioSystem.toggleMute();
        document.getElementById('audioBtn').textContent = muted ? '🔇' : '🔊';
        document.getElementById('audioBtn').classList.toggle('muted', muted);
    });

    // 结局总结关闭
    document.getElementById('summaryClose').addEventListener('click', () => {
        document.getElementById('endingSummary').classList.remove('visible');
        
        // 重置游戏状态
        GameEngine.gameState.day = 1;
        GameEngine.gameState.clues = [];
        GameEngine.gameState.encountered = [];
        GameEngine.gameState.protagonist = { type: null, traits: [] };
        GameEngine.gameState.xMemories = [];
        GameEngine.gameState.choiceHistory = [];
        GameEngine.gameState.ending = null;
        
        localStorage.removeItem('gardenState_v3');
        renderScene('start');
    });

    // 首次点击时启用音频
    document.addEventListener('click', () => {
        if (GameEngine.AudioSystem.audioContext && GameEngine.AudioSystem.audioContext.state === 'suspended') {
            GameEngine.AudioSystem.audioContext.resume();
        }
    }, { once: true });
}

// ================================================================
// 启动
// ================================================================
document.addEventListener('DOMContentLoaded', initGame);
