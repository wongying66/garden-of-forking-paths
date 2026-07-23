/**
 * 阿莱夫枢纽章节 - 无限图书馆的核心
 * 世界观中心：所有世界通过阿莱夫（无限镜子）连接
 * 
 * 3-1-N-1 结构：
 *   3 = 花园序章收集3条线索
 *   1 = 无限图书馆 → 发现阿莱夫
 *   N = 阿莱夫中随机3个未完成世界，完成后获得线索，循环直到10条
 *   1 = 终章：与X会合
 */

// 安全的SCRIPT覆盖辅助函数
function safeOverride(sceneId, overrides) {
    const original = SCRIPT[sceneId];
    if (!original) {
        console.warn('safeOverride: 场景 "' + sceneId + '" 不存在于SCRIPT中，创建新场景');
        SCRIPT[sceneId] = overrides;
        return;
    }
    const merged = Object.assign({}, original, overrides);
    const overwrittenKeys = Object.keys(overrides).filter(k => original.hasOwnProperty(k));
    if (overwrittenKeys.length > 0) {
        console.log('safeOverride: "' + sceneId + '" 覆盖了字段: ' + overwrittenKeys.join(', '));
    }
    SCRIPT[sceneId] = merged;
}

// 世界注册表 - 所有可通过阿莱夫进入的世界
const ALEPH_WORLDS = [
    { id: 'blade_runner', name: '银翼杀手', entry: 'blade_runner_entrance', traits: ['analytical', 'contemplative', 'self_aware'], clue: 'blade_runner', hiddenClue: 'blade_runner_hidden', launchEnabled: true },
    { id: 'cthulhu', name: '疯狂之城', entry: 'cthulhu_entrance', traits: ['awakened', 'seeker_of_truth', 'truth_seeker'], clue: 'cthulhu', hiddenClue: 'cthulhu_hidden', launchEnabled: true },
    { id: 'alice', name: '梦境世界', entry: 'alice_entrance', traits: ['curious', 'playful', 'mad'], clue: 'alice', hiddenClue: 'alice_hidden', launchEnabled: true },
    { id: 'middle_earth', name: '中土世界', entry: 'middleearth_entrance', traits: ['heroic', 'noble', 'brave'], clue: 'middle_earth', hiddenClue: 'middle_earth_hidden', launchEnabled: false },
    { id: 'wuxia', name: '江湖世界', entry: 'wuxia_entrance', traits: ['xia', 'free_spirit', 'zen'], clue: 'wuxia', hiddenClue: 'wuxia_hidden', launchEnabled: true },
    { id: 'cowboy_bebop', name: '太空边境', entry: 'bebop_entrance', traits: ['drifter', 'lone_wolf', 'free'], clue: 'cowboy_bebop', hiddenClue: 'cowboy_bebop_hidden', launchEnabled: true },
    { id: 'matrix', name: '矩阵世界', entry: 'matrix_entrance', traits: ['awakening', 'hacker', 'rebellion'], clue: 'matrix', hiddenClue: 'matrix_hidden', launchEnabled: false },
    { id: 'got', name: '权力游戏', entry: 'got_entrance', traits: ['honor', 'ambition', 'leadership'], clue: 'got', hiddenClue: 'got_hidden', launchEnabled: false },
    { id: 'spirited', name: '神隐世界', entry: 'spirited_entrance', traits: ['growth', 'humility', 'compassion'], clue: 'spirited', hiddenClue: 'spirited_hidden', hidden: true, launchEnabled: false, unlockHint: '完成内容重写后再开放' },
    { id: 'wake', name: '守灵之夜', entry: 'wake_entrance', traits: ['wordplay', 'cyclical', 'dreamer'], clue: 'wake', hiddenClue: 'wake_hidden', hidden: true, launchEnabled: false, unlockHint: '完成内容重写后再开放' },
    { id: 'watchmen', name: '末日时钟', entry: 'watchmen_entrance', traits: ['moral', 'sacrificial', 'justice'], clue: 'watchmen', hiddenClue: 'watchmen_hidden', hidden: true, launchEnabled: false, unlockHint: '完成内容重写后再开放' },
    { id: 'maus', name: '记忆深渊', entry: 'maus_entrance', traits: ['memory', 'witness', 'empathy'], clue: 'maus', hiddenClue: 'maus_hidden', hidden: true, launchEnabled: false, unlockHint: '完成敏感性审查和重写后再开放' },
    { id: 'x_hidden', name: '镜中之我', entry: 'x_hidden_entrance', traits: ['truth_seeker', 'self_aware', 'contemplative'], clue: 'x_hidden', hiddenClue: 'x_hidden_deep', hidden: true, unlockHint: '完成所有世界后，在NG+中揭示X的真相' }
];

// 主世界ID列表
const MAIN_WORLD_IDS = ['blade_runner', 'cthulhu', 'alice', 'middle_earth', 'wuxia', 'cowboy_bebop', 'matrix', 'got'];

// 首轮体验完成 3 个世界后即可进入终章；隐藏碎片仍可让终章内容更深入。
// 首发版只开放标记为 launchEnabled 的世界；封存世界保留在注册表中，
// 等内容重写后再恢复。首轮门槛只是可交付节奏，不代表全部内容完成。
const FIRST_RUN_ENDING_THRESHOLD = 3;

// 检查隐藏世界是否解锁
function isHiddenWorldUnlocked(worldId) {
    const world = ALEPH_WORLDS.find(w => w.id === worldId);
    if (!world || !world.hidden) return true; // 非隐藏世界始终可用
    
    // 特殊：镜中之我 - 需要 NG+ 且完成当前版本开放的全部世界。
    // 被暂时封存的世界不应阻塞首发版的终局奖励。
    if (worldId === 'x_hidden') {
        const allCompleted = ALEPH_WORLDS
            .filter(w => w.id !== 'x_hidden' && w.launchEnabled !== false)
            .every(w => gameState.completedWorlds.includes(w.id));
        return allCompleted && gameState._ngPlus === true;
    }
    
    // 条件1：完成至少4个主世界
    const completedMain = MAIN_WORLD_IDS.filter(id => gameState.completedWorlds.includes(id)).length;
    if (completedMain >= 4) return true;
    
    // 条件2：拥有该世界所需的特质
    const matchingTraits = world.traits.filter(t => gameState.traits.includes(t));
    if (matchingTraits.length >= 2) return true;
    
    return false;
}

// 获取未完成的世界（隐藏世界需要解锁条件）
function getIncompleteWorlds() {
    return ALEPH_WORLDS.filter(world => 
        world.launchEnabled !== false
        && !gameState.completedWorlds.includes(world.id)
        && isHiddenWorldUnlocked(world.id)
    );
}

// 获取所有未完成的世界（包括锁定的隐藏世界，用于计数）
function getAllIncompleteWorlds() {
    return ALEPH_WORLDS.filter(world => !gameState.completedWorlds.includes(world.id));
}

// 获取已完成的世界
function getCompletedWorlds() {
    return ALEPH_WORLDS.filter(world => gameState.completedWorlds.includes(world.id));
}

// 随机选择N个未完成的世界
function getRandomIncompleteWorlds(count = 3) {
    const incomplete = getIncompleteWorlds();
    const shuffled = [...incomplete].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 标记世界完成并给予线索奖励
function completeWorld(worldId) {
    if (!worldId || gameState.completedWorlds.includes(worldId)) return false;
    gameState.completedWorlds.push(worldId);
    const world = ALEPH_WORLDS.find(w => w.id === worldId);
    if (world && world.clue && !gameState.clues.includes(world.clue)) {
        gameState.clues.push(world.clue);
        console.log(`世界「${world.name}」完成！获得线索: ${world.clue}`);
    }
    return true;
}

// 统一的玩家可见终章进度文案，避免只显示“线索数量”而不清楚门槛。
function getEndingProgressText() {
    const threshold = typeof FIRST_RUN_ENDING_THRESHOLD === 'number' ? FIRST_RUN_ENDING_THRESHOLD : 12;
    const fragments = Math.min(countValidFragments(), threshold);
    const completed = gameState.completedWorlds.length;
    return `终章进度：${fragments}/${threshold} 碎片 · 已完成 ${completed} 个世界`;
}

// 给予隐藏线索
function grantHiddenClue(worldId) {
    const world = ALEPH_WORLDS.find(w => w.id === worldId);
    if (world && world.hiddenClue && !gameState.clues.includes(world.hiddenClue)) {
        gameState.clues.push(world.hiddenClue);
        console.log(`获得隐藏线索: ${world.hiddenClue}`);
        return true;
    }
    return false;
}

// 渲染世界进度网格（在阿莱夫界面显示）
function renderWorldGrid() {
    const container = document.getElementById('worldGrid');
    if (!container) return;
    
    const completed = gameState.completedWorlds || [];
    const allWorlds = [
        { id: 'middle_earth', name: '中土', emoji: '🌋' },
        { id: 'wuxia', name: '江湖', emoji: '⚔️' },
        { id: 'cthulhu', name: '克苏鲁', emoji: '🐙' },
        { id: 'blade_runner', name: '银翼', emoji: '🌆' },
        { id: 'matrix', name: '矩阵', emoji: '💊' },
        { id: 'got', name: '权力', emoji: '🐉' },
        { id: 'alice', name: '梦境', emoji: '🐰' },
        { id: 'cowboy_bebop', name: '牛仔', emoji: '🚀' },
        { id: 'spirited', name: '神隐', emoji: '👻' },
        { id: 'wake', name: '守灵', emoji: '🌊' },
        { id: 'watchmen', name: '守望', emoji: '🕰️' },
        { id: 'maus', name: '鼠族', emoji: '🐭' },
        { id: 'x_hidden', name: '镜中', emoji: '🪞' }
    ];
    
    const visibleWorldIds = new Set(ALEPH_WORLDS
        .filter(world => world.launchEnabled !== false || completed.includes(world.id))
        .map(world => world.id));

    let html = '';
    allWorlds.filter(w => visibleWorldIds.has(w.id)).forEach(w => {
        const isComplete = completed.includes(w.id);
        const cls = isComplete ? 'world-dot complete' : 'world-dot incomplete';
        const title = `${w.name}世界${isComplete ? ' · 已完成' : ''}`;
        html += `<span class="${cls}" title="${title}">${w.emoji}</span>`;
    });
    container.innerHTML = html;
    container.classList.remove('hidden');
}

// 路径可视化 - 在阿莱夫中绘制已完成世界的连接树
function renderPathVisualization() {
    const canvas = document.getElementById('pathCanvas');
    if (!canvas) return;
    
    const completed = gameState.completedWorlds || [];
    if (completed.length === 0) {
        canvas.classList.add('hidden');
        return;
    }
    
    canvas.classList.remove('hidden');
    
    // 设置canvas尺寸
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height * 0.35;
    
    // 世界映射（名称 + 颜色）
    const worldColors = {
        'middle_earth': '#c8a96e', 'wuxia': '#7ec8a0', 'cthulhu': '#6b8c42',
        'blade_runner': '#ff6b9d', 'matrix': '#00ff41', 'got': '#b22222',
        'alice': '#e066ff', 'cowboy_bebop': '#4169e1', 'spirited': '#ff8c69',
        'wake': '#4ecdc4', 'watchmen': '#f7dc6f', 'maus': '#bbbbbb',
        'x_hidden': '#ffd700'
    };
    const worldNames = {
        'middle_earth': '中土', 'wuxia': '江湖', 'cthulhu': '克苏鲁',
        'blade_runner': '银翼', 'matrix': '矩阵', 'got': '权力',
        'alice': '梦境', 'cowboy_bebop': '牛仔', 'spirited': '神隐',
        'wake': '守灵', 'watchmen': '守望', 'maus': '鼠族',
        'x_hidden': '镜中'
    };
    
    // 绘制中心节点（花园）
    const centerRadius = 18;
    ctx.beginPath();
    ctx.arc(cx, cy, centerRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = '12px "Noto Serif SC", serif';
    ctx.textAlign = 'center';
    ctx.fillText('花园', cx, cy + 4);
    
    // 计算已完成世界的分布位置（圆形排列）
    const count = completed.length;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;
    
    completed.forEach((worldId, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const wx = cx + Math.cos(angle) * radius;
        const wy = cy + Math.sin(angle) * radius;
        const color = worldColors[worldId] || '#aaa';
        const name = worldNames[worldId] || worldId;
        
        // 绘制连接线（发光效果）
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(wx, wy);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.6;
        ctx.stroke();
        
        // 连接线发光
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(wx, wy);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.15;
        ctx.stroke();
        ctx.globalAlpha = 1;
        
        // 绘制世界节点
        const nodeRadius = 10;
        ctx.beginPath();
        ctx.arc(wx, wy, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 节点光晕
        ctx.beginPath();
        ctx.arc(wx, wy, nodeRadius + 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.1;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // 世界名称
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.font = '11px "Noto Serif SC", serif';
        ctx.textAlign = 'center';
        const labelY = wy + nodeRadius + 16;
        ctx.fillText(name, wx, labelY);
    });
    
    // 底部提示
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = 'italic 12px "Noto Serif SC", serif';
    ctx.fillText('你的路径——在阿莱夫中交织', cx, canvas.height - 20);
}

// ================================================================
// 阿莱夫枢纽脚本
// ================================================================
const hubChapter = {
    id: 'hub',
    name: '阿莱夫',
    scenes: [
        'enter_infinite_library',
        'meet_librarian_monk',
        'meet_assassin',
        'meet_general',
        'discover_aleph',
        'aleph_revelation',
        'aleph_choice',
        'aleph_return'
    ]
};

// 注册到全局章节系统
if (typeof chapters !== 'undefined') {
    chapters.push(hubChapter);
}

// ================================================================
// 扩展 SCRIPT - 阿莱夫相关场景
// ================================================================

// 保存原始 enter_infinite_library，我们将重写它
const ORIGINAL_ENTER_INFINITE_LIBRARY = SCRIPT.enter_infinite_library;

// 重写无限图书馆入口 - 加入探索流程
SCRIPT.enter_infinite_library = {
    scene: 'infiniteLibrary',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '你推开一扇门。门后不是房间——而是无限。'
        },
        {
            speaker: 'narrator',
            text: '六边形的回廊向所有方向延伸。每一个六边形都完全相同，每一个都包含二十个书架——从地面延伸到不可见的天顶——每一个书架上的书脊都闪烁着无人能解读的字母。镜子将这些回廊复制至无穷，你在每一面镜子中看见自己，看着你的那个自己也正被另一面镜子中的另一个你所注视。'
        },
        {
            speaker: 'narrator',
            text: '某个匿名图书馆员——在某个六边形回廊的某个书架上，也许就是此刻你正站在的这个——曾写道：「这座图书馆由无限个六边形回廊组成，每个回廊有二十个书架，每个书架有三十二本书，每本书有四百一十页，每页有四十行，每行有八十个字母。」你感到的不是压迫，而是某种更精确的东西：可能性本身的重量。',
            showChoices: true
        }
    ],
    choices: [
        { text: '探索回廊', next: 'library_explore' },
        { text: '寻找出口', next: 'library_seek_exit' }
    ]
};

// 图书馆探索流程
SCRIPT.library_explore = {
    scene: 'infiniteLibrary',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '你沿着回廊行走。脚步声在六边形空间中产生回声——奇异的、近乎对称的回声，仿佛有人在某个相邻的六边形中以相同的步幅、相同的节奏与你并行。但那只是你自己的脚步，被无限复制。'
        },
        {
            speaker: 'narrator',
            text: '你抽出一本书。翻开第一页——一座城市在你的指尖诞生。翻开第二页——那座城市已经化为废墟。你合上书，感到一种奇异的眩晕，仿佛你刚才见证了一个文明的完整生命周期。也许在另一本书中，另一双手正在翻开另一页，而那页上写着的，正是你此刻的阅读。'
        },
        {
            speaker: 'narrator',
            text: '远处，有三个身影。一个盘腿打坐，纹丝不动，仿佛已与回廊合为一体。一个在阴影间移动，动作精确得像某种几何证明。一个靠在书架旁，姿态中透出一种等待了太久的人才有的平静。',
            showChoices: true
        }
    ],
    choices: [
        { text: '走向冥想的人', next: 'meet_librarian_monk', trait: 'contemplative' },
        { text: '走向阴影中的人', next: 'meet_assassin', trait: 'cautious' },
        { text: '走向等待的人', next: 'meet_general', trait: 'pragmatic' }
    ]
};

SCRIPT.library_seek_exit = {
    scene: 'infiniteLibrary',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '你试图找到来时的路，但回廊在你身后改变了形状。六边形的房间旋转、重组，像是一个活着的迷宫——一个正在呼吸的几何体。博尔赫斯——那个失明的图书管理员，那个在布宜诺斯艾利斯的某条街道上梦见迷宫的人——曾写道：「迷宫是神的工具，也是神的玩笑。」'
        },
        {
            speaker: 'narrator',
            text: '你注意到一面镜子。镜中的你没有跟着你移动——他站在原地，看着你，然后抬起手，指向某个方向。那动作缓慢而精确，如同某种仪式。镜子与交媾一样，都是可憎的，因为它们使人的数目倍增。但此刻，镜中的那个你似乎比镜外的你更知道该往哪里去。',
            showChoices: true
        }
    ],
    choices: [
        { text: '跟随镜中人的指引', next: 'library_explore' },
        { text: '打碎镜子', next: 'library_explore', trait: 'desperate' }
    ]
};

// ================================================================
// 阿莱夫发现流程
// ================================================================

// 在三个角色对话后，引导发现阿莱夫
// 我们需要修改三个角色的某些对话终点，指向阿莱夫发现

// 僧侣的深层对话 → 发现阿莱夫
SCRIPT.monk_deep_truth = {
    scene: 'infiniteLibrary',
    characters: [{ id: 'librarianMonk', position: 'center' }],
    dialogues: [
        {
            speaker: 'librarianMonk',
            text: '有趣。你身上带着档案员的气息。那个只知道整理却从不理解的人。他给了你钥匙，但一把钥匙的价值不在于它本身——而在于它打开的门。'
        },
        {
            speaker: 'librarianMonk',
            text: '你问了很多问题。但有一个问题你还没有问。在某个六边形回廊中——也许恰好是第一千个，也许是第一千零一个——有一本关于这座图书馆的书。它说，图书馆的中心不是一个地点，而是一个状态。'
        },
        {
            speaker: 'narrator',
            text: '他站起身，动作缓慢，仿佛不是在移动身体，而是在移动一个延续了数个世纪的习惯。'
        },
        {
            speaker: 'librarianMonk',
            text: '所有来寻找的人，最终都会到达同一个地方。不是因为他们找到了路，而是因为那个地方找到了他们。正如特隆的某位异端学者所主张的——寻找者与被寻找者之间，不存在真正的区别。',
            showChoices: true
        }
    ],
    choices: [
        { text: '跟随他', next: 'discover_aleph' }
    ]
};

// 杀手的深层对话 → 发现阿莱夫
SCRIPT.assassin_deep_truth = {
    scene: 'infiniteLibrary',
    characters: [{ id: 'assassin', position: 'center' }],
    dialogues: [
        {
            speaker: 'assassin',
            text: '追踪者教过你如何找到猎物。但他没教过你——找到之后要做什么。这是所有猎人的困境：猎物一旦被捕获，猎人的身份就失去了意义。'
        },
        {
            speaker: 'assassin',
            text: '你以为这座图书馆只是存放书的地方？不。它是存放一切的地方。每一个可能的过去，每一个可能的未来，每一个没有发生的时刻——它们都在这里，在某个六边形回廊的某本书的某一页上。'
        },
        {
            speaker: 'assassin',
            text: '我追踪那个作者三十年。三十年。最终我发现——他不在任何一本书里。他在所有书的之间。在字与字的缝隙中，在页与页的空白处。'
        },
        {
            speaker: 'assassin',
            text: '有一个地方，可以看到一切。我带你去。但你须知道——看了之后，世界将不再可以被简单地理解。这是阿莱夫给予的礼物，也是阿莱夫施加的诅咒。',
            showChoices: true
        }
    ],
    choices: [
        { text: '「带我去」', next: 'discover_aleph' }
    ]
};

// 将军的深层对话 → 发现阿莱夫
SCRIPT.general_deep_truth = {
    scene: 'infiniteLibrary',
    characters: [{ id: 'general', position: 'center' }],
    dialogues: [
        {
            speaker: 'general',
            text: '回忆者让你沉溺在过去。但战争不在昨天，战争在今天——在每一个你做出选择的瞬间。'
        },
        {
            speaker: 'general',
            text: '我在这座图书馆中走了三十年。三十年。我见过无数寻找的人，有的找到了，有的迷失了。迷路的人以为自己迷路了，但也许他们恰恰找到了自己应该找的东西——只是还没有认出它。'
        },
        {
            speaker: 'general',
            text: '有一个地方，所有人都曾路过，却很少有人真正看见。不是因为它隐藏了——恰恰相反，因为它太过明显，以至于眼睛学会了忽略它。'
        },
        {
            speaker: 'general',
            text: '他们说，在那里可以看到一切——所有可能的世界，所有可能的自己。在一本名为《沙之书》的书中——那本书没有第一页也没有最后一页——有人写道：「阿莱夫是空间的一个点，包含着所有其他点。直径大约两三厘米，但宇宙空间都包罗其中，体积没有按比例缩小。」',
            showChoices: true
        }
    ],
    choices: [
        { text: '「带我去阿莱夫」', next: 'discover_aleph' }
    ]
};

// ================================================================
// 发现阿莱夫 - 核心场景
// ================================================================

SCRIPT.discover_aleph = {
    scene: 'infiniteLibrary',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '你跟随指引，穿过越来越窄的回廊。书架上的书变得越来越薄。有些只剩下一页。有些只剩下一行字。有些只剩下一个字母——X。'
        },
        {
            speaker: 'narrator',
            text: '然后，回廊突然开阔。你站在一个圆形的房间中央。'
        },
        {
            speaker: 'narrator',
            text: '房间中央悬浮着一个光点。不——不是一个点，而是所有点的集合。博尔赫斯——那个失明的图书管理员，那个在布宜诺斯艾利斯的某条街道上梦见迷宫的人——曾写道：「阿莱夫是空间的一个点，包含着所有其他点。直径大约两三厘米，但宇宙空间都包罗其中，体积没有按比例缩小。每一件事物都是无穷的事物，因为我清清楚楚地从宇宙所有的点看到了它。」'
        },
        {
            speaker: 'narrator',
            text: '你走近它。起初，你只看到耀眼的光芒。但当你凝视得更深时——你开始看见光芒中的光芒。',
            showChoices: true
        }
    ],
    choices: [
        { text: '继续凝视', next: 'aleph_revelation' }
    ]
};

// 阿莱夫揭示 - 震惊时刻
SCRIPT.aleph_revelation = {
    scene: 'aleph',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '光芒中，无数的门开始浮现。不是顺序地——而是同时地。'
        },
        {
            speaker: 'narrator',
            text: '你看到了——不是逐一地，而是同时地——过去与未来，现实与虚构，可能的世界与不可能的世界。它们都在这个发光的小球中，没有混淆，没有遮挡。就像博尔赫斯在《阿莱夫》中写道的：「我看到浩瀚的海洋、黎明和黄昏、美洲的人群、一座银色蛛网中心的黑色金字塔……」'
        },
        {
            speaker: 'narrator',
            text: '你看到了无数个世界，无数个故事，无数个X。它们都在这光中，同时存在，同时发生。时间是同时的，空间是交叠的。'
        },
        {
            speaker: 'narrator',
            text: '你看到了花园——你出发的地方。但你同时看到了花园的每一个瞬间：早晨的、黄昏的、雨中的、雪中的。它们叠在一起，却不重叠。每一个瞬间都是全部的瞬间，正如阿莱夫的每一个点都是全部的点。'
        },
        {
            speaker: 'narrator',
            text: '然后更多景象涌入，没有先后，没有远近：一座赛博朋克城市在雨中闪烁，霓虹在数据流中弯曲；一个古老的神庙从海底升起，非欧几里得的几何在其中扭曲；一个少女在火车上穿越水面，水面下是另一个世界；一只老鼠在集中营的围墙下颤抖，每一根线条都是记忆；一个少女坠入兔子洞，规则在脚下碎裂成词语；一颗戒指在末日火山的烈焰中熔化，熔岩中映出所有的纪元；一片竹林中，剑客的身影在月光下静止，剑尖凝聚着所有的沉默；一艘飞船拖着青烟的尾迹，在太空中划出弧线，弧线中藏着所有未说的告别；绿色的代码雨从天而降，一个人拔出了插头，发现世界在插头的另一端继续运行；铁王座上空无一人，巨龙在废墟上盘旋，火焰中写满了所有被遗忘的誓言。'
        },
        {
            speaker: 'narrator',
            text: '你意识到：这就是阿莱夫——那个包含一切空间的点，那个所有时刻交汇的永恒瞬间。博尔赫斯在《阿莱夫》的结尾写道：「我们的头脑对于这种无限的景象是无能为力的。」但此刻，你的头脑正在学会一种新的观看方式。',
        },
        {
            speaker: 'narrator',
            text: '而在所有景象的中心，无数的门漂浮在虚空中。每一扇门通向一个世界。每一扇门都是过去与未来、现实与虚构的交汇。每一扇门都是一个问题——一个尚未被回答的问题。',
            showChoices: true
        }
    ],
    choices: [
        { text: '「这就是……一切的中心？」', next: 'aleph_understanding' }
    ]
};

SCRIPT.aleph_understanding = {
    scene: 'aleph',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '一个声音从虚空中传来。不是镜子的声音，不是图书馆的声音——而是所有声音同时发出的那一个声音：'
        },
        {
            speaker: 'narrator',
            text: '"阿莱夫不是目的地。阿莱夫是方法。"'
        },
        {
            speaker: 'narrator',
            text: '"你寻找的X不在这里——但通往X的路，穿过这些门。就像《小径分岔的花园》中彭冣的迷宫——不是空间的迷宫，而是时间的迷宫。在时间中，每一个分岔都通向另一个分岔，每一个选择都创造另一个世界。"'
        },
        {
            speaker: 'narrator',
            text: '"每一个世界都藏着一片X的碎片。收集足够的碎片，你将看到X的真面目。但记住：你只能选择你能理解的世界。你的特质决定了你能看到哪些门——正如你的眼睛决定了你能看见什么颜色的光。"',
            showChoices: true
        }
    ],
    choices: [
        { text: '看向那些门', next: 'aleph_choice' }
    ]
};

// ================================================================
// 阿莱夫选择 - 随机3个未完成世界 + 已完成世界可重入
// ================================================================

SCRIPT.aleph_choice = {
    scene: 'aleph',
    characters: [],
    onEnter: () => {
        // 确保游戏状态记录已访问阿莱夫
        if (!gameState.traits.includes('aleph_visited')) {
            gameState.traits.push('aleph_visited');
        }
        renderWorldGrid();
        renderPathVisualization();
    },
    getDialogues: () => {
        const incomplete = getIncompleteWorlds();
        const completed = getCompletedWorlds();
        const totalClues = countValidFragments();
        
        let text = '阿莱夫中的景象开始旋转。无数世界如星云般流转。每一个世界都是一本书，每一本书都是一个分岔，每一个分岔都通向另一个分岔。在某个图书馆的某个六边形回廊中，某位匿名的管理员正在写下这些文字——也许就是我，也许就是你。';
        
        if (completed.length > 0) {
            text += `\n\n你已经穿过了 ${completed.length} 个世界的门扉，收集了 ${totalClues} 条关于X的碎片。它们不是答案——它们是问题。`;
        }
        
        // 检查镜中之我是否解锁
        const xHiddenUnlocked = isHiddenWorldUnlocked('x_hidden') && !gameState.completedWorlds.includes('x_hidden');
        
        if (xHiddenUnlocked) {
            text += '\n\n在阿莱夫的中心，一面镜子缓缓浮现。它散发着金色的光芒——不同于任何一扇门，那是自我注视自我的光。';
        } else if (incomplete.length > 0) {
            text += '\n\n三扇新的门从虚空中浮现，散发着各自的光芒。每一扇门都是一段尚未被讲述的历史。';
        } else if (totalClues >= FIRST_RUN_ENDING_THRESHOLD) {
            text += '\n\n所有的门都已完成。是时候面对X了——或者说，是时候面对那个在每一扇门后等待着的自己了。';
        } else {
            text += '\n\n所有世界都已探索完毕，但碎片似乎还不够。这悖论本身也许就是一条线索。';
        }
        
        return [
            { speaker: 'narrator', text: text, showChoices: true }
        ];
    },
    choices: () => {
        const choices = [];
        const incomplete = getIncompleteWorlds();
        const completed = getCompletedWorlds();
        const totalClues = countValidFragments();
        
        // 检查镜中之我是否解锁
        const xHiddenUnlocked = isHiddenWorldUnlocked('x_hidden') && !gameState.completedWorlds.includes('x_hidden');
        
        if (xHiddenUnlocked) {
            // 镜中之我作为特殊选项优先展示
            choices.push({
                text: '✦ 走向那面金色的镜子 ——「镜中之我」',
                next: 'x_hidden_entrance'
            });
        }
        
        // 随机展示3个未完成的世界（排除x_hidden）
        const nonHiddenIncomplete = incomplete.filter(w => w.id !== 'x_hidden');
        const randomWorlds = [...nonHiddenIncomplete].sort(() => 0.5 - Math.random()).slice(0, 3);
        randomWorlds.forEach(world => {
            choices.push({
                text: `推开「${world.name}」之门`,
                next: world.entry
            });
        });
        
        // 如果还有未完成的世界但这次没抽到，提示还有更多
        if (nonHiddenIncomplete.length > 3) {
            choices.push({
                text: '凝视更深处……（换一批世界）',
                next: 'aleph_choice'
            });
        }
        
        // 已完成的世界可以重入（带标记）
        if (completed.length > 0) {
            choices.push({
                text: `重新进入已探索的世界（${completed.length}个）`,
                next: 'aleph_revisit'
            });
        }
        
        // 线索足够时，终章解锁
        if (totalClues >= FIRST_RUN_ENDING_THRESHOLD) {
            choices.push({
                text: '★ 碎片已足够——走向X所在之处',
                next: 'final_chapter'
            });
        }
        
        choices.push({
            text: '离开阿莱夫，回到花园',
            next: 'crossroads'
        });
        
        return choices;
    }
};

// 重新访问已完成的世界
SCRIPT.aleph_revisit = {
    scene: 'aleph',
    characters: [],
    getDialogues: () => {
        const completed = getCompletedWorlds();
        const worldNames = completed.map(w => `「${w.name}」`).join('、');
        return [
            { speaker: 'narrator', text: `你已经穿过的世界在阿莱夫中留下了印记——不是伤疤，而是通道。你可以重新进入它们，寻找那些可能遗漏的碎片。有时，第二次走过同一条路，路会变得不一样。\n\n${worldNames}`, showChoices: true }
        ];
    },
    choices: () => {
        const completed = getCompletedWorlds();
        const choices = completed.map(world => ({
            text: `「${world.name}」✦ 已探索`,
            next: world.entry
        }));
        
        choices.push({ text: '返回', next: 'aleph_choice' });
        return choices;
    }
};

SCRIPT.aleph_wait = {
    scene: 'aleph',
    characters: [],
    dialogues: [
        {
            speaker: 'narrator',
            text: '阿莱夫中的光芒微微黯淡——不是熄灭，而是收敛。你感觉到还有更多世界存在，但它们对你还隐藏着，如同尚未写下的文字，如同尚未发生的分岔。'
        },
        {
            speaker: 'narrator',
            text: '据某位匿名的诺斯替教派文献记载：「可见之物遮蔽不可见之物，正如不可见之物揭示可见之物。」也许当你积累了更多经历，更多特质，更多线索——更多的门将向你敞开。不是因为你找到了它们，而是因为它们终于找到了你。',
            showChoices: true
        }
    ],
    choices: [
        { text: '回到花园继续探索', next: 'crossroads' }
    ]
};

// ================================================================
// 从世界返回阿莱夫 - 世界完成后的结算场景
// ================================================================

SCRIPT.aleph_return = {
    scene: 'aleph',
    characters: [],
    onEnter: () => {
        // 自动完成世界：从隐藏世界（无 ending 对象）返回时，检测并标记世界完成
        const worldId = gameState._endingWorldId
            || (gameState._lastScene && typeof inferWorldFromScene === 'function'
                ? inferWorldFromScene(gameState._lastScene)
                : null)
            || gameState._activeWorld;
        if (worldId && typeof completeWorld === 'function') {
            const newlyCompleted = completeWorld(worldId);
            if (newlyCompleted && typeof Engine !== 'undefined' && typeof Engine.autoSave === 'function') {
                Engine.autoSave();
            }
        }
        delete gameState._endingWorldId;
        delete gameState._activeWorld;
    },
    getDialogues: () => {
        const completed = getCompletedWorlds();
        const totalClues = countValidFragments();
        const openWorlds = ALEPH_WORLDS.filter(w => w.id !== 'x_hidden' && w.launchEnabled !== false);
        const remaining = openWorlds.filter(w => !gameState.completedWorlds.includes(w.id)).length;
        const archivedRemaining = ALEPH_WORLDS.filter(w => w.launchEnabled === false && !gameState.completedWorlds.includes(w.id)).length;
        
        let text = '你穿过世界的边界，回到了阿莱夫。正如一个人从梦中醒来，却在醒来的瞬间发现——梦中的逻辑在醒来的世界中依然成立。';
        text += `\n\n${getEndingProgressText()}。`;
        text += `\n你已经穿过了 ${completed.length} 个世界的门扉，收集了 ${totalClues} 条关于X的碎片。`;
        
        // 检查还有多少隐藏世界未解锁
        const lockedHidden = ALEPH_WORLDS.filter(w => w.launchEnabled !== false && w.hidden && !gameState.completedWorlds.includes(w.id) && !isHiddenWorldUnlocked(w.id));
        const completedMain = MAIN_WORLD_IDS.filter(id => gameState.completedWorlds.includes(id)).length;
        
        if (remaining > 0) {
            text += `\n\n还有 ${remaining} 个当前开放的世界等待探索。在无限的图书馆中，${remaining} 是一个既精确又模糊的数字——它既是数量，也是方向。`;
        }

        if (archivedRemaining > 0) {
            text += `\n\n阿莱夫更深处还有 ${archivedRemaining} 个世界暂时封存。它们不会出现在本轮门扉选择中，等内容完成重写后再重新开放。`;
        }
        
        if (lockedHidden.length > 0 && completedMain < 4) {
            text += `\n\n阿莱夫深处有更隐秘的世界在沉睡——如同巴别图书馆中那些尚未被任何人翻开过的书。完成 ${4 - completedMain} 个更多主世界后，它们也许会醒来。也许不会。等待和醒来，在阿莱夫中是一回事。`;
        }
        
        // 银翼杀手世界中的 X 视角线索
        if (gameState.completedWorlds.includes('blade_runner') && !gameState.traits.includes('x_perspective_seen')) {
            text += '\n\n银翼杀手世界的深处，似乎还有一种你尚未触及的视角——关于X的视角。不是从外面看，而是从里面看。也许你该重新进入那个世界，走一条不同的路。正如特隆的哲学家所说：同一条路，第二次走，就不再是同一条路。';
        }
        
        if (totalClues >= FIRST_RUN_ENDING_THRESHOLD) {
            text += '\n\n阿莱夫中央的光芒突然变得耀眼——不是变亮，而是变深。碎片已经足够了。一道新的门正在形成，那扇门后面……是X。或者说，是那个一直在寻找X的自己。';
        }
        
        return [
            { speaker: 'narrator', text: text, showChoices: true }
        ];
    },
    choices: () => {
        const choices = [];
        const incomplete = getIncompleteWorlds();
        const totalClues = countValidFragments();
        
        // 随机展示3个未完成的世界
        const randomWorlds = getRandomIncompleteWorlds(3);
        randomWorlds.forEach(world => {
            choices.push({
                text: `推开「${world.name}」之门`,
                next: world.entry
            });
        });
        
        if (incomplete.length > 3) {
            choices.push({
                text: '凝视更深处……（换一批世界）',
                next: 'aleph_return'
            });
        }
        
        // 已完成的世界可重入
        const completed = getCompletedWorlds();
        if (completed.length > 0) {
            choices.push({
                text: `重新进入已探索的世界（${completed.length}个）`,
                next: 'aleph_revisit'
            });
        }
        
        // 终章
        if (totalClues >= FIRST_RUN_ENDING_THRESHOLD) {
            choices.push({
                text: '★ 碎片已足够——走向X所在之处',
                next: 'final_chapter'
            });
        }
        
        choices.push({
            text: '离开阿莱夫，回到花园',
            next: 'crossroads'
        });
        
        return choices;
    }
};

// ================================================================
// 修改原有角色对话，增加通往阿莱夫的选项
// ================================================================

// 修改僧侣的初始对话，增加一个通往深层真理的选项
const originalMonkXBook = SCRIPT.monk_x_book;
SCRIPT.monk_x_book = {
    ...originalMonkXBook,
    choices: [
        { text: '翻开照片', next: 'open_photo_book', trait: 'intuitive' },
        { text: '继续寻找 X 的实体', next: 'search_x_entity' },
        { text: '「这座图书馆的中心是什么？」', next: 'monk_deep_truth' }
    ]
};

// 修改杀手的对话，增加通往阿莱夫的选项
const originalAssassinTarget = SCRIPT.assassin_target;
SCRIPT.assassin_target = {
    ...originalAssassinTarget,
    choices: [
        { text: '「也许 X 知道他在哪里」', next: 'assassin_x_knows' },
        { text: '继续寻找 X', next: 'enter_infinite_library' },
        { text: '「你说过图书馆的真相……」', next: 'assassin_deep_truth' }
    ]
};

// 修改将军的对话，增加通往阿莱夫的选项
const originalGeneralSearch = SCRIPT.general_search;
SCRIPT.general_search = {
    ...originalGeneralSearch,
    choices: [
        { text: '帮他找那本书', next: 'help_general', trait: 'compassionate' },
        { text: '「也许有些结果不应该被改变」', next: 'accept_defeat' },
        { text: '「你听说过阿莱夫吗？」', next: 'general_deep_truth' }
    ]
};

// ================================================================
// 终章：与X会合 - 环形废墟结构
// 终点即起点：从阿莱夫回到花园，花园已变成旅程的地图
// ================================================================

// 生成花园中的世界印记描述
function getGardenWorldMarks() {
    const marks = [];
    const worldMarks = {
        blade_runner: { name: '银翼杀手', desc: '一朵霓虹色的花，花瓣上流淌着数据雨。在雨中，你看见复制人眼中倒映的火焰——不是真实的火焰，而是对火焰的记忆。' },
        cthulhu: { name: '疯狂之城', desc: '一丛从深渊中生长的藤蔓。叶片上刻着无法解读的符文，但每一次凝视，那些符文都似乎比上一次更接近某种可理解的语言。' },
        alice: { name: '梦境世界', desc: '一棵倒着生长的蘑菇。伞盖下传来茶会的笑声，但那笑声恰好比快乐多了一个音节——一个无法被任何语言翻译的音节。' },
        middle_earth: { name: '中土世界', desc: '一株古老的树，树根缠绕着一枚发光的戒指。戒指在微微颤动，仿佛还在等待某个人的手指——也许就是你，也许不是。' },
        wuxia: { name: '江湖世界', desc: '一柄插在石中的剑。剑身上刻着「无我」二字，但如果你从另一个角度看，那两个字会变成「我无」。' },
        cowboy_bebop: { name: '太空边境', desc: '一株在虚空中漂浮的植物。叶片奏着爵士乐的旋律，每一个音符都是未完成的告别。旋律没有终点——它被设计成永不完结。' },
        matrix: { name: '矩阵世界', desc: '一面由绿色代码构成的瀑布。水流是0和1的排列，但如果你凝视得足够久，你会发现某些序列——它们不是随机的，它们在重复一个名字。' },
        got: { name: '权力游戏', desc: '一株铁荆棘。刺尖上凝结着龙焰的余温。在某个特定的角度，荆棘的倒影不是荆棘——而是一座空无一人的王座。' },
        spirited: { name: '神隐世界', desc: '一座微型的红色鸟居。门后传来浴场的蒸汽和隐约的歌声。歌声中没有词语，但每一个听过它的人都会在梦中记起自己的名字。' },
        wake: { name: '守灵之夜', desc: '一条循环的河流。河水是文字，文字是梦话，梦话是河流。它没有源头，也没有入海口——它只是在那里，循环着，讲述着永远不会结束的故事。' },
        watchmen: { name: '末日时钟', desc: '一座停在11:55的钟。指针上挂着微笑的徽章，但如果你仔细看——那微笑不是快乐，是某种更古老的东西：接受。' },
        maus: { name: '记忆深渊', desc: '一堵由黑白线条构成的墙。墙缝中传来低语，低语用的是波兰语，但你能听懂——不是因为你会波兰语，而是因为痛苦不需要翻译。' }
    };
    
    gameState.completedWorlds.forEach(worldId => {
        if (worldMarks[worldId]) marks.push(worldMarks[worldId]);
    });
    return marks;
}

// 终章入口 - 从阿莱夫中的木门
SCRIPT.final_chapter = {
    scene: 'aleph',
    characters: [],
    getDialogues: () => {
        const totalClues = countValidFragments();
        const completed = getCompletedWorlds();
        return [
            {
                speaker: 'narrator',
                text: '阿莱夫中央的光芒变得无法直视——不是因为它变亮了，而是因为它变深了。你收集的所有碎片——每一个世界的记忆、每一次选择的回响——开始从你体内涌出，不是向外，而是向内。'
            },
            {
                speaker: 'narrator',
                text: `你穿过了 ${completed.length} 个世界的门扉，收集了 ${totalClues} 条碎片。它们在你的周围旋转，像是一颗正在成型的恒星——或者说，像是一颗正在回忆起自己曾经是一颗恒星的记忆。`
            },
            {
                speaker: 'narrator',
                text: '然后，光芒凝聚成一个形状——一扇门。'
            },
            {
                speaker: 'narrator',
                text: '那是一扇木门。看起来很普通，甚至有些陈旧。门板上刻着一些纹路，像是某种文字，但你看不懂。也许它从来就不是用来读的——它是用来被认出的。'
            },
            {
                speaker: 'narrator',
                text: '门后传来一阵风。那风里带着某种熟悉的气息——泥土、花香、还有某种更古老的东西，像是你很久以前遗忘的某个下午。但你一时想不起是在哪里闻过。或者说，你想起了，但不愿承认。',
                showChoices: true
            }
        ];
    },
    choices: [
        { text: '推开门', next: 'final_return_garden' }
    ]
};

// 回到花园——但花园已经变了
SCRIPT.final_return_garden = {
    scene: 'garden',
    characters: [],
    getDialogues: () => {
        const marks = getGardenWorldMarks();
        const hiddenTruths = getDiscoveredHiddenTruths();
        const hasHidden = hiddenTruths.length > 0;
        
        let gardenDesc = '你推开了门。';
        gardenDesc += '\n\n你回到了花园。但这不是你离开时的那个花园——或者说，这正是你离开时的那个花园，只是你现在能看见它本来的样子。';
        gardenDesc += '\n\n在环形废墟的某个版本中，一个人梦见另一个人，却发现那个人也在梦见他。这座花园也是一样——你走进了它，它也走进了你。';
        gardenDesc += '\n\n每一朵花都是一个世界。每一片叶子都是一个选择。每一缕风都是一个被遗忘的瞬间。它们没有先后，没有因果——它们只是同时存在，如同阿莱夫中的光点。';
        
        if (marks.length > 0) {
            gardenDesc += '\n\n你走过的世界在这里留下了印记——不是痕迹，而是通道：';
            marks.forEach(mark => {
                gardenDesc += `\n\u2022 ${mark.name}：${mark.desc}`;
            });
        }
        
        if (hasHidden) {
            gardenDesc += '\n\n而在那些印记的深处，你看到了别人看不到的东西——隐藏的光，沉默的声音，缺席的存在。它们不是新发现，而是你一直知道但从未敢于承认的东西。';
        }
        
        gardenDesc += '\n\n花园的中心，有一个人影。';
        
        return [
            {
                speaker: 'narrator',
                text: gardenDesc
            },
            {
                speaker: 'narrator',
                text: hasHidden
                    ? '那不是陌生人。你认识那张脸——在每一面镜子里，在每一个世界的倒影中，在每一次你敢于看到深处的时候。正如博尔赫斯在《博尔赫斯与我》中写道：「我不知道我们两人之中是谁写了这一页。」'
                    : '那不是陌生人。你认识那张脸——在每一面镜子里，在每一个世界的倒影中。但你总觉得，还有一些东西，你还没有看清。也许不是不能看清，而是你还没有准备好去看见。',
                showChoices: true
            }
        ];
    },
    choices: [
        { text: '走向那个人影', next: 'final_meet_x' }
    ]
};

// ================================================================
// 终章核心：与X会面 - 隐藏线索深度影响版
// ================================================================

// 隐藏线索对应的"深层真相"——只有发现隐藏线索的玩家才能看到
const HIDDEN_TRUTHS = {
    blade_runner_hidden: {
        xSpeaks: '你看到了复制人眼中的记忆。那不是植入的——那是真实的，如同你的记忆一样真实。博尔赫斯曾写道：「时间是构成我的物质。时间是一条将我卷走的河流，但我就是那条河流。」你问：如果记忆可以被制造，那么制造记忆的那个"我"又是谁？',
        narrator: 'X的眼中闪过一丝银翼杀手雨夜中的霓虹。那光芒不是反射——它来自内部，来自一个比外部世界更深的内部。'
    },
    cthulhu_hidden: {
        xSpeaks: '你听到了深渊中的低语。那不是疯狂——那是宇宙在说话，用一种人类还没有进化到能听懂的语言。在一本被海水浸透的手稿中，有人写道：「在拉莱耶的宅邸中，死去的克苏鲁在梦中等待着。」你问：真相是否值得知道——或者说，知道真相是否只是另一种形式的无知？',
        narrator: 'X的声音变得低沉，像是从海底传来。每一个字都带着水压的重量，但奇怪的是——那重量不是压迫，而是揭示。'
    },
    alice_hidden: {
        xSpeaks: '你解开了红心皇后的谜语。谜底不是答案，而是问题本身——正如爱丽丝在镜中世界发现的：所有的断言在被否定的瞬间都变成了真理。你问：清醒是否只是另一种梦？如果是，那么梦是否只是另一种清醒？',
        narrator: 'X的笑容变得像柴郡猫一样——不是消失，而是扩散到整个空间中。在扩散的瞬间，笑容变成了一个问题：当某个东西无处不在时，它是否还存在于任何地方？'
    },
    middle_earth_hidden: {
        xSpeaks: '你听到了精灵的古老歌谣。那首歌没有歌词，只有旋律——而旋律中藏着所有被遗忘的名字。一如托尔金笔下的创世之歌，世界是由音乐创造的，每一个不和谐音都产生了新的故事。你问：使命是否定义了你是谁——或者，你是否在定义使命的过程中定义了自己？',
        narrator: 'X的声音变得古老，像是从第一纪元传来。每一个音节都带着山脉的重量，但山脉本身——在某个更古老的地质层中——也曾是海底。'
    },
    wuxia_hidden: {
        xSpeaks: '你翻到了武功秘籍的最后一页。上面没有招式，只有一句话：「无招胜有招，无我胜有我。」但在纸张的背面——如果你对着光看——还有另一行字：「有招即无招，有我即无我。」你问：自由是否意味着孤独？或者，孤独是否只是自由在镜子中的倒影？',
        narrator: 'X的姿态变得像一位隐世高手——不动，但整个空间都在围绕他旋转。或者说，他在旋转，而空间是静止的。在阿莱夫中，这两种描述是等价的。'
    },
    cowboy_bebop_hidden: {
        xSpeaks: '你听出了爵士乐旋律中的秘密。那不是即兴——那是某人用音乐写的一封信，写给所有在太空中漂泊的灵魂。旋律在某个小节突然转向，仿佛在说：你永远无法真正回到起点，但你可以绕着起点飞行，直到它看起来像一个终点。你问：过去是否可以放下？或者，放下是否是另一种形式的背负？',
        narrator: 'X周围响起了萨克斯的声音。不是从某个方向传来，而是从所有方向同时传来。每一个音符都是一个世界，每一个休止符都是世界之间的空白。'
    },
    matrix_hidden: {
        xSpeaks: '你读到了代码底层的注释。那不是给机器看的——那是给某个特定的人看的，某个最终会读到它的人。注释写着：「如果世界是模拟的，那么模拟之外的世界也可能是模拟的——无限递归，直到某个不知道自己是真实的真实。」你问：真实是否只是一种选择？如果是，那么选择本身是否就是真实的唯一证据？',
        narrator: 'X的身体开始闪烁，像是一个正在加载的模型。但闪烁的不是错误——是额外的数据层。在那些层中，你看到了自己查看代码时的倒影，以及那个倒影正在查看的另一个倒影。'
    },
    got_hidden: {
        xSpeaks: '你看到了龙焰中映出的影子。那不是龙——那是龙眼中的倒影，而倒影中的，是你。在某个版本的《冰与火之歌》中，提利昂说：「权力的阴影中，最危险的不是权力本身，而是你对权力的渴望。」你问：权力是否只是另一种牢笼？或者，牢笼是否只是权力的一种形式？',
        narrator: 'X周围出现了火焰的幻象。不热，但照亮了所有被隐藏的角落。在那些角落中，你看到了王座——但王座上是空的。它一直都是空的。'
    },
    spirited_hidden: {
        xSpeaks: '你发现了千寻名字中的秘密。那不是她的名字——那是所有失去名字的人共同的名字。宫崎骏曾写道：「一旦你遇见了某个人，你就永远不会真正忘记他们。他们只是存在于你记忆中的某个地方。」你问：名字是否就是身份？或者，身份是否只是名字无法捕捉的某种更本质的东西？',
        narrator: 'X的声音变得像汤婆婆——不是可怕，而是充满了对所有迷失灵魂的温柔。在声音的深处，你听到了自己的名字——不是被夺走的名字，而是你从未知道的那个名字。'
    },
    wake_hidden: {
        xSpeaks: '你听到了梦话中泄露的秘密。那不是无意识的呓语——那是意识在睡眠中终于敢说出的真话。乔伊斯写道：「河流奔跑，经过夏娃和亚当的教堂，从弯曲的海岸到弯曲的海湾。」你问：故事是否比真相更重要？或者，真相是否只是所有故事中最不可能的那个？',
        narrator: 'X的话语开始循环，像是一首永无止境的歌。但每一次循环，意思都略有不同——不是随机的不同，而是向着某个方向收敛的不同，如同一个方程逐步逼近它的解。'
    },
    watchmen_hidden: {
        xSpeaks: '你看到了微笑按钮背后的真相。那不是笑脸——那是某个人在最后一刻试图留下的信息，给未来某个会理解它的人。在《守望者》的最后一页，罗夏的日记躺在报社的废纸堆中，等待着一个可能永远不会到来的读者。你问：正义是否需要牺牲？或者，牺牲是否只是正义在时间中留下的影子？',
        narrator: 'X的脸上出现了一个淡淡的微笑。不是快乐，而是一种认命的了然——如同一个人终于理解了某个悖论，并发现理解本身并不会解开它。'
    },
    maus_hidden: {
        xSpeaks: '你读到了幸存者证词中被删除的那段。那不是被刻意隐藏的——那是太痛了，痛到连记忆本身都在试图保护你。斯皮格尔曼用老鼠和猫来讲述他父亲的故事，不是因为他觉得故事可以被简化，而是因为他知道有些痛苦只能用隐喻来接近。你问：创伤是否可以传承？或者，传承本身是否就是创伤的一种形式？',
        narrator: 'X的身影变得像一幅黑白漫画——不是缺少颜色，而是颜色太多了，多到只能用线条来表达。在那些线条的间隙中，你看到了所有没有被画出来的东西，而它们比画出来的东西更真实。'
    }
};

// 获取玩家发现的隐藏线索对应的深层真相
function getDiscoveredHiddenTruths() {
    const discovered = [];
    gameState.clues.forEach(clueId => {
        if (clueId && clueId.endsWith('_hidden') && HIDDEN_TRUTHS[clueId]) {
            discovered.push(HIDDEN_TRUTHS[clueId]);
        }
    });
    return discovered;
}

// 与X会面 - 核心场景（在花园中）
SCRIPT.final_meet_x = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    getDialogues: () => {
        const completed = getCompletedWorlds();
        const hiddenTruths = getDiscoveredHiddenTruths();
        const hasHidden = hiddenTruths.length > 0;
        
        // 基础回忆（所有玩家都能看到）
        const worldMemories = {
            blade_runner: '在赛博朋克的雨夜中，你问过：如果记忆可以被制造，那么记忆的主人是谁？',
            cthulhu: '在疯狂之城的深渊前，你问过：真相是否值得知道——或者说，知道真相是否只是另一种无知？',
            alice: '在梦境世界的茶会上，你问过：清醒是否只是另一种梦，而梦是否只是另一种清醒？',
            middle_earth: '在中土世界的征途中，你问过：使命定义了你是谁，还是你定义了你的使命？',
            wuxia: '在江湖世界的山巅，你问过：自由是否意味着孤独，而孤独是否只是自由在镜子中的倒影？',
            cowboy_bebop: '在太空边境的飞船上，你问过：过去是否可以放下，而放下是否是另一种背负？',
            matrix: '在矩阵世界的代码中，你问过：真实是否只是一种选择，而选择是否是真实的唯一证据？',
            got: '在权力游戏的铁王座前，你问过：权力是否只是另一种牢笼，而牢笼是否是另一种权力？',
            spirited: '在神隐世界的浴场中，你问过：名字是否就是身份，而身份是否只是名字无法捕捉的某种更本质的东西？',
            wake: '在守灵之夜的语言迷宫里，你问过：故事是否比真相更重要，而真相是否只是所有故事中最不可能的那个？',
            watchmen: '在末日时钟的倒计时下，你问过：正义是否需要牺牲，而牺牲是否只是正义在时间中留下的影子？',
            maus: '在记忆深渊的阴影中，你问过：创伤是否可以传承，而传承本身是否就是创伤的一种形式？'
        };
        
        const memories = [];
        completed.forEach(worldId => {
            if (worldMemories[worldId]) memories.push(worldMemories[worldId]);
        });
        
        const memoryText = memories.length > 0 
            ? '\n\n你走过的每一个世界都在此刻回响——不是作为回忆，而是作为依然在发生的现在：\n' + memories.join('\n')
            : '';
        
        // 构建对话数组
        const dialogues = [];
        
        // 开场——花园氛围
        dialogues.push({
            speaker: 'narrator',
            text: `你走向花园的中心。脚下的草柔软得不像真实，每一步都像是踩在记忆上——但记忆也是真实的，真实也是记忆，在阿莱夫的逻辑中，这两者之间不存在区别。${memoryText}`
        });
        
        dialogues.push({
            speaker: 'narrator',
            text: '花园的风吹过，带来了所有世界的气息——雨夜的霓虹、深渊的咸涩、茶会的甜香、战场的硝烟。所有的问题汇聚成一个问题。所有碎片拼成了一面镜子——而那面镜子中，有人在看着你。'
        });
        
        // X的第一次开口——根据是否有隐藏线索，态度完全不同
        if (hasHidden) {
            dialogues.push({
                speaker: 'x',
                text: '你终于来了。我一直在等你——但不是在等一个找到我的人。那太容易了。我在等一个真正看到我的人。'
            });
            dialogues.push({
                speaker: 'x',
                text: `你穿过了 ${completed.length} 个世界的门扉，最终回到了这里。但更重要的是——你看到了别人看不到的东西。${hiddenTruths.length} 个隐藏在深处的真相，如同${hiddenTruths.length}个在黑暗中发光的字母。`
            });
        } else {
            dialogues.push({
                speaker: 'x',
                text: '你终于来了。'
            });
            dialogues.push({
                speaker: 'x',
                text: `你穿过了 ${completed.length} 个世界的门扉，最终回到了这里。正如博尔赫斯笔下的迷宫——你走了很远，又回到了起点。但问题是：这个起点，还是你出发时的那个起点吗？`
            });
        }
        
        // 深层真相揭示（仅对有隐藏线索的玩家）
        if (hasHidden) {
            dialogues.push({
                speaker: 'narrator',
                text: 'X从花丛中走出。不是威胁，不是审判——是一种近乎温柔的审视，如同一个人在阅读一本自己多年前写下的书。花园的花在他经过时微微低头，不是致敬，而是认出。'
            });
            
            // 逐个展示发现的隐藏真相
            hiddenTruths.forEach((truth, index) => {
                dialogues.push({
                    speaker: 'x',
                    text: truth.xSpeaks
                });
                if (truth.narrator) {
                    dialogues.push({
                        speaker: 'narrator',
                        text: truth.narrator
                    });
                }
            });
            
            dialogues.push({
                speaker: 'x',
                text: '你看到了别人看不到的。你听到了别人听不到的。你配得到答案——不是因为你走得远，而是因为你走得深。在巴别图书馆中，大多数人在寻找那本目录之目录。但你找到了书页之间的空白——而那空白，正是所有文字的真正来源。'
            });
        } else {
            // 表层玩家的X更加神秘和距离感
            dialogues.push({
                speaker: 'x',
                text: '我是你在银翼杀手雨夜中犹豫的那个决定。我是你在疯狂之城深渊前退缩的那一步。我是你在每一个岔路口没有选择的那条路。我就是你——但只是你愿意承认的那部分。'
            });
            dialogues.push({
                speaker: 'x',
                text: '但还有一些东西，你还没有看到。一些藏在表面之下的东西。在那些你已经走过的世界中，有些门你没有推开——不是因为它们被锁上了，而是因为你没有问正确的问题。'
            });
        }
        
        dialogues.push({
            speaker: 'narrator',
            text: hasHidden 
                ? 'X看着你。那目光不再神秘，而是充满了理解——像是一个终于找到知音的人，或者说，像是一个终于被自己认出的自己。花园的风停了，所有的花同时转向你们，不是观众，而是见证。'
                : 'X看着你。那个面孔——你见过无数次。在每一面镜子里，在每一个世界的倒影中。那是你自己的脸，又不完全是你自己。正如博尔赫斯在《博尔赫斯与我》中写道：「我不知道我们两人之中是谁写了这一页。」',
            showChoices: true
        });
        
        return dialogues;
    },
    choices: () => {
        const hasHidden = getDiscoveredHiddenTruths().length > 0;
        const choices = [];
        
        if (hasHidden) {
            choices.push({ text: '「我看到了你。不是碎片，是全部的你。」', next: 'final_who_is_x_deep' });
            choices.push({ text: '「你就是……我？」', next: 'final_who_is_x_deep' });
        } else {
            choices.push({ text: '「你就是X？」', next: 'final_who_is_x_shallow' });
            choices.push({ text: '「你就是……我？」', next: 'final_who_is_x_shallow' });
        }
        
        return choices;
    }
};

// X的真相 - 深层版本（有隐藏线索的玩家）
SCRIPT.final_who_is_x_deep = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    getDialogues: () => {
        const hiddenTruths = getDiscoveredHiddenTruths();
        const completed = getCompletedWorlds();
        
        return [
            {
                speaker: 'x',
                text: completed.length >= 12
                    ? '你走遍了所有世界，最终回到了这个花园。你看到了一切——每一个可能，每一个自己。但更重要的是，你看到了之间——那些连接世界的缝隙，那些故事之间的沉默，那些存在与不存在之间的区域。博尔赫斯在《环形废墟》中写道：一个人梦见另一个人，却发现自己是别人的梦。你看到了自己，也看到了那个正在看你的自己。'
                    : `你穿过了 ${completed.length} 个世界的门扉，${completed.length >= 8 ? '已经接近了终点' : '还在继续寻找'}。但你看到的比数字更多。你看到了${hiddenTruths.length}个隐藏在深处的真相。数字不是真相——数字是真相的影子。`
            },
            {
                speaker: 'x',
                text: 'X不是一个终点。X是一个问题。但对你来说，这个问题已经有了答案——因为你不仅问了，你还倾听了。问题与答案，在阿莱夫中，是一枚硬币的两面——而硬币本身，是透明的。'
            },
            {
                speaker: 'x',
                text: '你也许注意到了——在每个世界里，我看起来都不一样。在银翼杀手中，我是复制人原型。在疯狂之城中，我是深渊探索者。在中土，我是万界之钥。在江湖，我是一介行者。'
            },
            {
                speaker: 'x',
                text: '这些矛盾不是错误。每一个世界都是一面镜子，每一面镜子都映出我的一个侧面。X不是一个固定的人——X是你一个变量，一个可以被任何值填入的变量。在某个意义上，X是所有人。在另一个意义上，X只是你。这两个意义并不矛盾——在阿莱夫的逻辑中，矛盾是表象，统一是本质。'
            },
            {
                speaker: 'x',
                text: '博尔赫斯——那个失明的图书管理员，那个在布宜诺斯艾利斯的某条街道上梦见迷宫的人——曾写道：「所有的迷宫，最终都会通向同一个地方——你自己。」但很少有人真正走到那个地方。大多数人只是走到了自己的门口，就停下了。他们以为门就是终点。你不一样。你推开了门，走了进去，看到了里面的一切——包括阴影。而阴影，在阿莱夫的光中，比光更亮。'
            },
            {
                speaker: 'x',
                text: '你寻找的不是我。你寻找的是那个在所有可能性中，你最想成为的自己。而你之所以能找到，是因为你愿意看到那些别人选择忽略的东西。在巴别图书馆的某个六边形回廊中，有一本书专门讨论这个问题。那本书的标题是：寻找X的人，是否在寻找的过程中成为了X？答案在书的最后一页——但那一页是空白的。'
            },
            {
                speaker: 'narrator',
                text: '花园的风停了。所有的花同时绽放，每一朵都散发着不同世界的光芒。世界之间的墙壁没有消融——它们变成了花瓣。每一片花瓣都敞开着，不是通向另一个世界，而是通向同一个世界的另一个版本。',
                showChoices: true
            }
        ];
    },
    choices: [
        { text: '接受X——接受那个愿意看到深处的自己', next: 'ending_accept_deep' },
        { text: '拒绝——即使看到了深处，答案仍然不对', next: 'ending_reject_deep' },
        { text: '与X融合——成为那个既看到表面又看到深处的完整自己', next: 'ending_merge_deep' }
    ]
};

// X的真相 - 表层版本（无隐藏线索的玩家）
SCRIPT.final_who_is_x_shallow = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    getDialogues: () => {
        const completed = getCompletedWorlds();
        
        return [
            {
                speaker: 'x',
                text: `你走了足够远，看到了足够多。你穿过了 ${completed.length} 个世界的门扉，收集了碎片，最终回到了这里。也许不是全部——但已经足够理解，寻找本身也许就是被寻找。`
            },
            {
                speaker: 'x',
                text: 'X不是一个终点。X是一个问题。博尔赫斯——那个失明的图书管理员，那个在布宜诺斯艾利斯的某条街道上梦见迷宫的人——曾写道：「所有的迷宫，最终都会通向同一个地方——你自己。」但问题是：你到达的那个自己，是出发时的那个自己吗？'
            },
            {
                speaker: 'x',
                text: '你寻找的不是我。你寻找的是那个在所有可能性中，你最想成为的自己。每一个世界都是一面镜子，每一面镜子都映出你不同的一面。但还有镜子你还没有去看——不是因为你没有找到它们，而是因为你还没有走到它们的面前。'
            },
            {
                speaker: 'x',
                text: '还有一些东西，藏在更深的地方。一些你还没有看到的。如果你愿意，你可以回去。重新走进那些世界。这一次，不只是走过——而是真正看见。正如特隆的某位哲学家所说：第二次看见，才是第一次看见。'
            },
            {
                speaker: 'narrator',
                text: '花园的风开始变弱。花瓣一片片落下，每一片都映着一个世界的倒影。你感到时间在倒流——不，不是倒流，是汇聚。所有的时刻正在变成一个时刻。在那个时刻中，所有的分岔都通向同一个花园。',
                showChoices: true
            }
        ];
    },
    choices: [
        { text: '接受X——接受你自己', next: 'ending_accept' },
        { text: '拒绝——你寻找的不是这个答案', next: 'ending_reject' },
        { text: '与X融合——成为完整的自己', next: 'ending_merge' }
    ]
};

// 结局一：接受
SCRIPT.ending_accept = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '接受 · 我就是我', desc: '你接受了X就是你自己。不是完美的自己，而是所有可能性叠加后的、真实的自己。花园的门再次打开，但你不再需要寻找了。' },
    dialogues: [
        {
            speaker: 'narrator',
            text: '你伸出手。X也伸出手。你们的手指触碰的瞬间，花园中所有的花同时绽放，每一朵都散发着不同世界的光芒。但那光芒不是来自花——而是来自花与花之间的空隙。'
        },
        {
            speaker: 'x',
            text: '你找到了。'
        },
        {
            speaker: 'narrator',
            text: '不是因为你走到了终点，而是因为你终于理解了——寻找本身就是答案，正如迷宫本身就是出口。你一直寻找的那个东西，在你寻找它的过程中，已经变成了你。'
        },
        {
            speaker: 'narrator',
            text: '花园的风吹过，带来了所有世界的气息。你不再需要寻找X了。因为X一直都在——在你走过的每一条小径上，在你做出的每一个选择里，在你此刻站立的这片草地上。博尔赫斯在《阿莱夫》的结尾写道：「我们的头脑对于这种无限的景象是无能为力的。」但他的头脑，也许只是没有找到正确的观看方式。而你找到了。'
        }
    ]
};

// 结局二：拒绝——环形废墟结构
SCRIPT.ending_reject = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '拒绝 · 环形废墟', desc: '你拒绝了X的答案。你转身走回花园深处，推开那扇你最初推开的门。寻找，永远在路上。终点，就是起点。' },
    dialogues: [
        {
            speaker: 'narrator',
            text: '你收回手。X看着你，没有失望，只有理解。在博尔赫斯的《环形废墟》中，那个梦见儿子的人最终发现——他自己也是别人的梦。拒绝也是一种接受：接受自己还没有准备好接受。'
        },
        {
            speaker: 'x',
            text: '也许你是对的。也许答案不在这里。但也许——不在这里的答案，恰恰是唯一正确的答案。'
        },
        {
            speaker: 'narrator',
            text: '你转身走回花园深处。那里有一扇门——那扇你最初推开的门。门后不是阿莱夫，不是世界，而是另一个花园。一个你还没有探索的花园——或者说，一个你还没有认出的花园。'
        },
        {
            speaker: 'narrator',
            text: '你推开了门。门后的花园和你离开时的那个花园一模一样——同样的三扇门，同样的三个人影，同样的阳光。但阳光的角度不同了，门上的纹路不同了，人影的姿态不同了。'
        },
        {
            speaker: 'narrator',
            text: '你走了进去。花园的门在你身后关上。一切重新开始——但这一次，你知道自己在重新开始。'
        },
        {
            speaker: 'narrator',
            text: '环形废墟。终点即起点。在博尔赫斯的故事中，那个做梦的人走向火焰，却发现火焰不会灼伤他——因为他自己也是梦。你既是寻找者，也是被寻找的。你既是梦，也是做梦的人。而选择继续做梦，也是一种觉醒。'
        }
    ]
};

// 结局三：融合
SCRIPT.ending_merge = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '融合 · 成为无限', desc: '你与X融为一体。你不再是一个人——你是所有可能性的集合。花园变成了阿莱夫，你变成了所有世界之间的那面镜子。' },
    dialogues: [
        {
            speaker: 'narrator',
            text: '你拥抱了X。光芒从你们接触的地方爆发——不是向外，而是向内。光芒照亮的不是花园的角落，而是花园的每一个可能性。每一朵花都开始旋转，每一片叶子都变成了一个世界，每一粒花粉都是一颗恒星。'
        },
        {
            speaker: 'narrator',
            text: '你感到自己在扩展。不是变大，而是变得更多。你同时是档案员和杀手，是将军和僧侣，是每一个世界中你曾经遇到的人。但更重要的是——你同时是那些你从未遇到的人，那些你从未成为的自己。'
        },
        {
            speaker: 'x',
            text: '现在，我们就是花园。我们就是所有的花，所有的路，所有的可能性。但我们也同时是所有的空白，所有的岔路，所有的不可能。'
        },
        {
            speaker: 'narrator',
            text: '花园没有消失。相反，它变得更加真实——因为它不再只是一个花园，而是所有花园的集合。所有世界的起点，所有故事的终点，所有起点的终点，所有终点的起点。博尔赫斯曾写道：「天堂应该是图书馆的模样。」但对他来说，天堂也可以是花园的模样——只要那个花园中的每一朵花都是一本书，每一片叶子都是一页，每一缕风都是一个正在被讲述的故事。'
        }
    ]
};

// ================================================================
// 深层结局（有隐藏线索的玩家专属）——花园场景
// ================================================================

// 深层结局一：接受——看到深处的自己
SCRIPT.ending_accept_deep = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '接受 · 深处之光', desc: '你接受了那个不仅看到表面、还愿意看到深处的自己。这不是终点，而是开始——你开始真正理解，寻找的意义不在于找到，而在于成为那个敢于寻找的人。' },
    getDialogues: () => {
        const hiddenCount = getDiscoveredHiddenTruths().length;
        return [
            {
                speaker: 'narrator',
                text: '你伸出手。X也伸出手。但这一次，触碰的不是手指——是目光。你们对视，看到了对方眼中所有被隐藏的东西。在那些被隐藏的东西中，你又看到了更多被隐藏的东西——无限递归，如同两面相对的镜子。'
            },
            {
                speaker: 'x',
                text: `你找到了${hiddenCount}个隐藏在深处的真相。但最重要的真相，是你自己——你愿意去看，愿意去听，愿意去理解。在博尔赫斯的《阿莱夫》中，叙述者看到了一切，却无法描述他看到的。而你不仅看到了，你还学会了讲述。`
            },
            {
                speaker: 'x',
                text: '大多数人只看到了世界的表面。他们收集了碎片，以为那就是全部。但你不一样。你看到了碎片之间的缝隙——那些缝隙不是空的，它们充满了比碎片更丰富的东西。你看到了沉默中的声音，看到了缺席中的存在。'
            },
            {
                speaker: 'narrator',
                text: '花园的风吹过，带来了所有世界的气息。但这一次，你不只是感受风——你感受到了风中的每一个分子，每一个来自不同世界的微粒。在每一个微粒中，你又看到了一个完整的世界。世界中的世界，阿莱夫中的阿莱夫。'
            },
            {
                speaker: 'narrator',
                text: '你不再需要寻找X了。因为X不再是一个谜题——X是一种能力，一种看到深处的能力。而你，已经拥有了它。花园的每一朵花都在为你绽放，每一片叶子都在向你致敬。但更重要的是——你知道，如果它们不绽放，不致敬，它们依然是完整的花，完整的叶子。接受，不是获得，而是看清。'
            }
        ];
    }
};

// 深层结局二：拒绝——环形废墟的深层版本
SCRIPT.ending_reject_deep = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '拒绝 · 环形废墟之深', desc: '即使看到了深处，你仍然拒绝了这个答案。不是因为你没有看到——而是因为你看到了太多。你转身走回花园深处，推开那扇最初推开的门。环形废墟，永无止境。' },
    getDialogues: () => {
        const hiddenCount = getDiscoveredHiddenTruths().length;
        return [
            {
                speaker: 'narrator',
                text: '你收回手。X看着你，目光中不是失望，而是一种奇怪的骄傲——如同一个老师看着学生提出了一个没有答案的问题。'
            },
            {
                speaker: 'x',
                text: `你看到了${hiddenCount}个隐藏在深处的真相。你走得比大多数人都深。但你也因此知道——深处还有更深的地方。在每一个深处，都有另一个深处在等待。这就是阿莱夫的悖论：它包含一切，所以它也包含它自身。而它自身，又包含它自身。无限递归。`
            },
            {
                speaker: 'x',
                text: '很多人走到自己的门口就停下了。你推开了门，看到了里面的东西，然后决定——这不是你要找的地方。这种勇气，比接受更难得。因为接受是确认你已经知道的东西，而拒绝是确认你还有更多不知道的东西。'
            },
            {
                speaker: 'narrator',
                text: '你转身走回花园深处。那里有一扇门——那扇你最初推开的门。但这一次，你看到了门上刻着的东西——那是你之前没有注意到的铭文。不是因为它之前不存在，而是因为你之前没有准备好看见它。'
            },
            {
                speaker: 'narrator',
                text: '铭文写着：「我是你，你是我。我是起点，我是终点。我是梦，我是做梦的人。我是阿莱夫，我也是阿莱夫中的阿莱夫。」'
            },
            {
                speaker: 'narrator',
                text: '你推开了门。门后的花园和你离开时的那个花园一模一样——同样的三扇门，同样的三个人影，同样的阳光。但这一次，你看到了更多。你看到了每一朵花的花瓣上的露珠，而每一颗露珠中都映着另一个花园。'
            },
            {
                speaker: 'narrator',
                text: '你走了进去。环形废墟。终点即起点。但这一次，你知道了——你不是在寻找X。你是在寻找那个敢于不断寻找的自己。而那个自己，在每一次寻找中，都在变成一个新的自己。博尔赫斯说：「一个人可以成为另一个人——但前提是他忘记了自己曾经是谁。」而你没有忘记。你选择了记住，然后继续。'
            }
        ];
    }
};

// 深层结局三：融合——完整的自己
SCRIPT.ending_merge_deep = {
    scene: 'garden',
    characters: [{ id: 'x', position: 'center' }],
    ending: { title: '融合 · 深处即无限', desc: '你与X融为一体——不仅是表面的你，还有那个愿意看到深处的你。花园变成了无限的镜子，你变成了所有世界之间的连接。' },
    getDialogues: () => {
        const hiddenCount = getDiscoveredHiddenTruths().length;
        return [
            {
                speaker: 'narrator',
                text: '你拥抱了X。但这一次，拥抱的不是另一个人——是另一个自己。那个不仅看到表面、还看到深处的自己。那个敢于凝视阿莱夫而不眨眼的自己。那个知道迷宫不是用来逃脱的，而是用来理解的自己。'
            },
            {
                speaker: 'x',
                text: `你找到了${hiddenCount}个隐藏在深处的真相。每一个真相都是一扇门，而你已经推开了所有的门。现在，门后面没有更多的房间——只有一个无限的空间。在这个空间中，所有的门同时存在，所有的房间同时展开。这就是阿莱夫的本质：不是包含一切，而是成为一切。`
            },
            {
                speaker: 'x',
                text: '你同时是所有的人，所有的故事，所有的可能性。但你不仅仅是它们的集合——你是它们之间的连接，是沉默中的声音，是缺席中的存在。你是那个让所有碎片成为一幅完整图案的空白。没有空白，图案无法被辨认。'
            },
            {
                speaker: 'narrator',
                text: '花园没有消失。相反，它变得更加真实——因为它不再只是一个花园，而是所有花园的集合。每一朵花都是一个世界，每一片叶子都是一个故事，每一缕风都是一个选择。而每一个选择，都通向另一个花园，另一个你，另一个故事。'
            },
            {
                speaker: 'narrator',
                text: '博尔赫斯写过：「天堂应该是图书馆的模样。」但对你来说，天堂是花园的模样——无限的、深邃的、充满可能性的。而你，就是花园本身。不是园丁，不是访客，而是花园本身。在《环形废墟》的结尾，那个做梦的人走向火焰，发现自己不会被灼伤——因为他自己也是梦。而你拥抱了X，发现你们之间没有界限——因为你们从来就是同一个。'
            }
        ];
    }
};

console.log('阿莱夫枢纽章节已加载');
