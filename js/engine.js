/**
 * 小径分叉的花园 - 核心游戏引擎
 * 版本 2.0.0
 */

// ================================================================
// 游戏状态
// ================================================================
const gameState = {
    currentScene: 'start',
    day: 1,
    clues: [],
    encountered: [],
    protagonist: { type: null, traits: [] },
    xMemories: [], // X 的碎片记忆
    xStatus: 'unknown',
    ending: null,
    choiceHistory: [], // 选择历史
    playTime: 0 // 游戏时长
};

// ================================================================
// 配置（从 config.json 加载）
// ================================================================
let CONFIG = null;

async function loadConfig() {
    try {
        const response = await fetch('data/config.json');
        CONFIG = await response.json();
        return CONFIG;
    } catch (e) {
        console.error('Failed to load config:', e);
        return null;
    }
}

// ================================================================
// 天数系统
// ================================================================
function getDayPhase(day) {
    if (!CONFIG) return { name: '初入', xStatus: '清晰', xDesc: 'X 的轮廓仍然分明' };
    for (const phase of CONFIG.DAY_PHASES) {
        if (day <= phase.max) return phase;
    }
    return CONFIG.DAY_PHASES[CONFIG.DAY_PHASES.length - 1];
}

// ================================================================
// X 的碎片记忆系统
// ================================================================
function triggerXMemory(sceneId) {
    if (!CONFIG || !CONFIG.X_MEMORIES) return null;
    
    const memories = Object.values(CONFIG.X_MEMORIES);
    const eligible = memories.filter(m => 
        m.scenes && m.scenes.includes(sceneId) && 
        !gameState.xMemories.includes(m.id)
    );
    
    if (eligible.length === 0) return null;
    
    // 30% 概率触发
    if (Math.random() > 0.3) return null;
    
    const memory = eligible[Math.floor(Math.random() * eligible.length)];
    gameState.xMemories.push(memory.id);
    
    return memory;
}

function showXMemoryPopup(text) {
    const popup = document.getElementById('xMemoryPopup');
    if (!popup) return;
    
    popup.textContent = text;
    popup.classList.add('visible');
    
    setTimeout(() => {
        popup.classList.remove('visible');
    }, 5000);
}

// ================================================================
// 三人互动系统
// ================================================================
function getDynamicDialogue(sceneId) {
    const met = gameState.encountered;
    const traits = gameState.protagonist.traits;
    const day = gameState.day;
    
    // 根据已遇见的人物和天数，返回额外的对话
    const extraDialogues = [];
    
    // 如果已经见过档案员，回忆者会有不同的开场
    if (met.includes('monk') && sceneId === 'meet_beauty') {
        extraDialogues.push({
            speaker: 'beauty',
            text: '档案员告诉你什么了？那些文字……它们只会让你更困惑。'
        });
    }
    
    // 如果已经见过回忆者，追踪者会有不同的态度
    if (met.includes('beauty') && sceneId === 'meet_tiger') {
        extraDialogues.push({
            speaker: 'tiger',
            text: '回忆者的气味在你身上。她给了你什么？记忆？还是遗忘？'
        });
    }
    
    // 如果已经见过追踪者，档案员会有不同的建议
    if (met.includes('tiger') && sceneId === 'meet_monk') {
        extraDialogues.push({
            speaker: 'monk',
            text: '追踪者带你走了多远？有时候，走得越远，离答案越近。有时候，恰恰相反。'
        });
    }
    
    // 天数影响
    if (day >= 6 && sceneId === 'crossroads') {
        extraDialogues.push({
            speaker: 'all',
            text: '三个声音同时响起：「你已经走了太久。你还记得为什么出发吗？」'
        });
    }
    
    // 特质影响
    if (traits.includes('sacrifice') && sceneId === 'ending_found_final') {
        extraDialogues.push({
            speaker: 'x',
            text: '你愿意为我牺牲一切。但你知道吗？有时候，活着比牺牲更需要勇气。'
        });
    }
    
    return extraDialogues;
}

// ================================================================
// 打字机效果
// ================================================================
let typewriterTimeout = null;

function typeWriter(element, htmlContent) {
    return new Promise((resolve) => {
        if (typewriterTimeout) clearTimeout(typewriterTimeout);
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        const paragraphs = element.querySelectorAll('p');
        
        paragraphs.forEach((p, index) => {
            p.classList.remove('visible', 'typing');
            const sourceP = tempDiv.querySelectorAll('p')[index];
            if (sourceP) p.innerHTML = sourceP.innerHTML;
        });
        
        paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.classList.add('visible', 'typing');
                setTimeout(() => p.classList.remove('typing'), 300);
            }, index * 400);
        });
        
        setTimeout(resolve, paragraphs.length * 400 + 500);
    });
}

// ================================================================
// 存档系统
// ================================================================
const SaveSystem = {
    slots: 5,
    
    getSaveKey(slot) {
        return `garden_save_${slot}`;
    },
    
    save(slot) {
        const saveData = {
            ...gameState,
            savedAt: Date.now(),
            version: '2.0.0'
        };
        localStorage.setItem(this.getSaveKey(slot), JSON.stringify(saveData));
        return true;
    },
    
    load(slot) {
        const data = localStorage.getItem(this.getSaveKey(slot));
        if (!data) return null;
        
        try {
            const parsed = JSON.parse(data);
            Object.assign(gameState, parsed);
            return true;
        } catch (e) {
            return null;
        }
    },
    
    delete(slot) {
        localStorage.removeItem(this.getSaveKey(slot));
    },
    
    getSlotInfo(slot) {
        const data = localStorage.getItem(this.getSaveKey(slot));
        if (!data) return null;
        
        try {
            const parsed = JSON.parse(data);
            return {
                day: parsed.day,
                scene: parsed.currentScene,
                savedAt: parsed.savedAt,
                clues: parsed.clues.length,
                encountered: parsed.encountered.length
            };
        } catch (e) {
            return null;
        }
    },
    
    getAllSlots() {
        const slots = [];
        for (let i = 1; i <= this.slots; i++) {
            slots.push({ slot: i, info: this.getSlotInfo(i) });
        }
        return slots;
    }
};

// ================================================================
// 音频系统
// ================================================================
const AudioSystem = {
    audioContext: null,
    ambientAudio: null,
    muted: false,
    
    init() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    },
    
    // 使用 Web Audio API 生成简单的环境音
    playAmbient(type) {
        if (this.muted || !this.audioContext) return;
        
        this.stopAmbient();
        
        // 创建简单的噪音/氛围音
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        // 根据场景类型设置不同的频率
        const frequencies = {
            garden: 80,
            doorBooks: 120,
            doorOcean: 60,
            doorDesert: 100,
            bookSand: 40
        };
        
        oscillator.frequency.value = frequencies[type] || 80;
        oscillator.type = 'sine';
        
        gainNode.gain.value = 0.05;
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        this.ambientAudio = { oscillator, gainNode };
    },
    
    stopAmbient() {
        if (this.ambientAudio) {
            this.ambientAudio.oscillator.stop();
            this.ambientAudio = null;
        }
    },
    
    playClick() {
        if (this.muted || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
    },
    
    playClueFound() {
        if (this.muted || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.3);
    },
    
    toggleMute() {
        this.muted = !this.muted;
        if (this.muted) this.stopAmbient();
        return this.muted;
    }
};

// ================================================================
// 背景系统
// ================================================================
const BG_LAYERS = {};
let currentBg = 'garden';

function initBackgroundLayers() {
    BG_LAYERS.garden = document.getElementById('bgGarden');
    BG_LAYERS.doorBooks = document.getElementById('bgDoorBooks');
    BG_LAYERS.doorOcean = document.getElementById('bgDoorOcean');
    BG_LAYERS.doorDesert = document.getElementById('bgDoorDesert');
    BG_LAYERS.bookSand = document.getElementById('bgBookSand');
}

function switchBackground(bgKey) {
    if (bgKey === currentBg) return;
    
    const newLayer = BG_LAYERS[bgKey];
    const oldLayer = BG_LAYERS[currentBg];
    
    if (newLayer) newLayer.classList.add('active');
    if (oldLayer) oldLayer.classList.remove('active');
    
    AudioSystem.playAmbient(bgKey);
    currentBg = bgKey;
}

// ================================================================
// UI 更新函数
// ================================================================
function updateStatusBar() {
    const phase = getDayPhase(gameState.day);
    
    document.getElementById('dayCount').textContent = `第${gameState.day}天`;
    document.getElementById('dayPhase').textContent = phase.name;
    document.getElementById('xStatus').textContent = phase.xStatus;
    document.getElementById('metCount').textContent = `${gameState.encountered.length}/3`;
    
    const phaseEl = document.getElementById('dayPhase');
    const xStatusEl = document.getElementById('xStatus');
    
    const colors = {
        2: '#7aba98',
        5: '#d4a040',
        8: '#c47070',
        12: '#8a5050'
    };
    
    let color = '#8a5050';
    for (const [max, c] of Object.entries(colors)) {
        if (gameState.day <= parseInt(max)) {
            color = c;
            break;
        }
    }
    
    phaseEl.style.color = color;
    xStatusEl.style.color = color;
    
    // 线索点
    const dotsContainer = document.getElementById('clueDots');
    dotsContainer.innerHTML = '';
    const totalClues = CONFIG ? Object.keys(CONFIG.CLUES).length - 1 : 4;
    for (let i = 0; i < totalClues; i++) {
        const dot = document.createElement('span');
        dot.className = 'clue-dot';
        if (i < gameState.clues.length) dot.classList.add('found');
        dotsContainer.appendChild(dot);
    }
}

function updateCluesPanel() {
    const list = document.getElementById('cluesList');
    list.innerHTML = '';
    
    if (CONFIG && CONFIG.CLUES) {
        // 默认线索
        const defaultClue = document.createElement('div');
        defaultClue.className = 'clue-item found';
        defaultClue.textContent = CONFIG.CLUES.photo.text;
        list.appendChild(defaultClue);
        
        // 已发现的线索
        gameState.clues.forEach(clueId => {
            const clue = CONFIG.CLUES[clueId];
            if (clue && clueId !== 'photo') {
                const el = document.createElement('div');
                el.className = 'clue-item found';
                el.textContent = clue.text;
                list.appendChild(el);
            }
        });
    }
}

function updateCharCards() {
    ['monk', 'beauty', 'tiger'].forEach(key => {
        const card = document.getElementById('card' + key.charAt(0).toUpperCase() + key.slice(1));
        if (gameState.encountered.includes(key)) {
            card.classList.add('encountered');
        }
    });
}

// ================================================================
// 结局总结
// ================================================================
function showEndingSummary(endingKey) {
    if (!CONFIG) return;
    
    const ending = CONFIG.ENDING_INFO[endingKey] || CONFIG.ENDING_INFO.not_found;
    
    document.getElementById('summaryEndingName').textContent = ending.title;
    document.getElementById('summaryEndingDesc').textContent = ending.desc;
    
    // 本色标签
    const traitsContainer = document.getElementById('summaryTraits');
    traitsContainer.innerHTML = '';
    
    if (gameState.protagonist.traits.length > 0) {
        gameState.protagonist.traits.forEach(trait => {
            const span = document.createElement('span');
            span.className = 'summary-trait';
            span.textContent = CONFIG.TRAIT_NAMES[trait] || trait;
            traitsContainer.appendChild(span);
        });
    } else {
        traitsContainer.innerHTML = '<span class="summary-value">你的本色尚未显现</span>';
    }
    
    // 统计
    document.getElementById('summaryDays').textContent = gameState.day;
    document.getElementById('summaryClues').textContent = gameState.clues.length;
    document.getElementById('summaryMet').textContent = gameState.encountered.length;
    
    // 关于 X 的发现
    const findings = [];
    if (gameState.clues.includes('name')) findings.push('X 的名字在风中');
    if (gameState.clues.includes('location')) findings.push('X 在花园的某扇门后面');
    if (gameState.clues.includes('time')) findings.push('X 消失的时间和你进入的时间是同一个瞬间');
    if (gameState.clues.includes('connection')) findings.push('X 可能是你的爱人、敌人、证人，或者你自己');
    
    document.getElementById('summaryXFindings').innerHTML = findings.length > 0 
        ? findings.join('<br>') 
        : '你对 X 一无所知';
    
    setTimeout(() => {
        document.getElementById('endingSummary').classList.add('visible');
    }, 1500);
}

// ================================================================
// 存档界面
// ================================================================
function showSavePanel(mode = 'save') {
    const panel = document.getElementById('saveLoadPanel');
    const title = document.getElementById('saveLoadTitle');
    const slotsContainer = document.getElementById('saveSlots');
    
    title.textContent = mode === 'save' ? '保存游戏' : '读取游戏';
    slotsContainer.innerHTML = '';
    
    const slots = SaveSystem.getAllSlots();
    
    slots.forEach(({ slot, info }) => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'save-slot';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'save-slot-info';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'save-slot-name';
        nameDiv.textContent = info ? `存档 ${slot} - 第${info.day}天` : `存档 ${slot} - 空`;
        
        const metaDiv = document.createElement('div');
        metaDiv.className = 'save-slot-meta';
        
        if (info) {
            const date = new Date(info.savedAt);
            metaDiv.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()} | ${info.clues}线索 ${info.encountered}/3人`;
        } else {
            metaDiv.textContent = '无存档';
        }
        
        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(metaDiv);
        slotDiv.appendChild(infoDiv);
        
        // 按钮
        if (mode === 'save') {
            const saveBtn = document.createElement('button');
            saveBtn.className = 'save-slot-btn';
            saveBtn.textContent = '保存';
            saveBtn.onclick = () => {
                SaveSystem.save(slot);
                showSavePanel('save');
            };
            slotDiv.appendChild(saveBtn);
            
            if (info) {
                const delBtn = document.createElement('button');
                delBtn.className = 'save-slot-btn delete';
                delBtn.textContent = '删除';
                delBtn.onclick = () => {
                    SaveSystem.delete(slot);
                    showSavePanel('save');
                };
                slotDiv.appendChild(delBtn);
            }
        } else {
            if (info) {
                const loadBtn = document.createElement('button');
                loadBtn.className = 'save-slot-btn';
                loadBtn.textContent = '读取';
                loadBtn.onclick = () => {
                    SaveSystem.load(slot);
                    panel.classList.remove('visible');
                    renderScene(gameState.currentScene);
                };
                slotDiv.appendChild(loadBtn);
            }
        }
        
        slotsContainer.appendChild(slotDiv);
    });
    
    panel.classList.add('visible');
}

// ================================================================
// 导出
// ================================================================
window.GameEngine = {
    gameState,
    CONFIG,
    loadConfig,
    getDayPhase,
    triggerXMemory,
    showXMemoryPopup,
    getDynamicDialogue,
    typeWriter,
    SaveSystem,
    AudioSystem,
    initBackgroundLayers,
    switchBackground,
    updateStatusBar,
    updateCluesPanel,
    updateCharCards,
    showEndingSummary,
    showSavePanel
};
