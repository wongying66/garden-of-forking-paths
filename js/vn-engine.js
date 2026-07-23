/**
 * 视觉小说引擎 - 小径分叉的花园
 * 版本 2.0 - 视觉小说版
 */

// ================================================================
// 资源配置
// ================================================================
const ASSETS = {
    scenes: {
        entrance: 'scenes/scene-garden-entrance.jpg',
        garden: 'scenes/scene-garden-entrance.jpg',
        library: 'scenes/scene-library.jpg',
        mirror: 'scenes/scene-mirror-garden.jpg',
        desert: 'scenes/scene-desert.jpg',
        crossroads: 'scenes/scene-crossroads.jpg',
        // 阿莱夫枢纽
        aleph: 'scenes/scene-aleph.jpg',
        // 无限图书馆篇章
        infiniteLibrary: 'scenes/scene-infinite-library.jpg',
        hiddenChamber: 'scenes/scene-hidden-chamber.jpg',
        bookWorld: 'scenes/scene-book-world.jpg',
        // 卡夫卡迷宫篇章
        kafkaCorridor: 'scenes/scene-kafka-corridor.jpg',
        waitingRoom: 'scenes/scene-waiting-room.jpg',
        endlessStairs: 'scenes/scene-endless-stairs.jpg',
        // 银翼杀手篇章
        cyberpunkCity: 'scenes/scene-cyberpunk-city.jpg',
        apartment: 'scenes/scene-apartment.jpg',
        lab: 'scenes/scene-lab.jpg',
        penthouse: 'scenes/scene-penthouse.jpg',
        // X视角篇章
        xMirror: 'scenes/scene-x-mirror.jpg',
        xWindow: 'scenes/scene-x-window.jpg',
        // 克苏鲁篇章
        cthulhuCity: 'scenes/scene-cthulhu-city.jpg',
        cthulhuTemple: 'scenes/scene-cthulhu-temple.jpg',
        innsmouth: 'scenes/scene-innsmouth.jpg',
        // 爱丽丝篇章
        teaParty: 'scenes/scene-tea-party.jpg',
        hedgeMaze: 'scenes/scene-hedge-maze.jpg',
        queenGround: 'scenes/scene-queen-ground.jpg',
        // 中土世界篇章
        middleEarthForest: 'scenes/scene-middle-earth-forest.jpg',
        middleEarthVolcano: 'scenes/scene-middle-earth-volcano.jpg',
        middleEarthCity: 'scenes/scene-middle-earth-city.jpg',
        // 金庸江湖篇章
        wuxiaTavern: 'scenes/scene-wuxia-tavern.jpg',
        wuxiaMountain: 'scenes/scene-wuxia-mountain.jpg',
        wuxiaBamboo: 'scenes/scene-wuxia-bamboo.jpg',
        // 星际牛仔篇章
        spaceStation: 'scenes/scene-space-station.jpg',
        spaceDesert: 'scenes/scene-space-desert.jpg',
        spaceShip: 'scenes/scene-space-ship.jpg',
        // 黑客帝国篇章
        matrixCity: 'scenes/scene-matrix-city.jpg',
        matrixCode: 'scenes/scene-matrix-code.jpg',
        matrixRebel: 'scenes/scene-matrix-rebel.jpg',
        // 冰与火之歌篇章
        gotCastle: 'scenes/scene-got-castle.jpg',
        gotNorth: 'scenes/scene-got-north.jpg',
        gotThrone: 'scenes/scene-got-throne.jpg',
        // 千与千寻篇章
        spiritedBathhouse: 'scenes/scene-spirited-bathhouse.jpg',
        spiritedTrain: 'scenes/scene-spirited-train.jpg',
        spiritedMarket: 'scenes/scene-spirited-market.jpg',
        // 芬尼根的守灵夜篇章
        wakeRiver: 'scenes/scene-wake-river.jpg',
        wakeTavern: 'scenes/scene-wake-tavern.jpg',
        wakeSleeper: 'scenes/scene-wake-sleeper.jpg',
        // 守望者篇章
        watchmenCity: 'scenes/scene-watchmen-city.jpg',
        watchmenOffice: 'scenes/scene-watchmen-office.jpg',
        watchmenClock: 'scenes/scene-watchmen-clock.jpg',
        // 鼠族篇章
        mausGhetto: 'scenes/scene-maus-ghetto.jpg',
        mausCamp: 'scenes/scene-maus-camp.jpg',
        mausFamily: 'scenes/scene-maus-family.jpg'
    },
    characters: {
        // 序章 - 博尔赫斯文学现实主义风格
        monk: 'characters/char-monk_1_nobg.png',
        beauty: 'characters/char-beauty_1_nobg.png',
        tiger: 'characters/char-tiger_1_nobg.png',
        x: 'characters/char-x_1_nobg.png',
        protagonist: 'characters/char-protagonist_1_nobg.png',
        // 无限图书馆篇章 - 博尔赫斯无限图书馆风格
        librarianMonk: 'characters/char-librarian-monk_1_nobg.png',
        assassin: 'characters/char-assassin_1_nobg.png',
        general: 'characters/char-general_1_nobg.png',
        // 卡夫卡迷宫篇章
        bureaucrat: 'characters/char-bureaucrat_nobg.png',
        gatekeeper: 'characters/char-gatekeeper_nobg.png',
        watcher: 'characters/char-watcher_nobg.png',
        // 银翼杀手篇章 - 赛博朋克黑色电影风格
        replicant: 'characters/char-replicant_1_nobg.png',
        bladeRunner: 'characters/char-blade-runner_1_nobg.png',
        executive: 'characters/char-executive_1_nobg.png',
        // 克苏鲁篇章 - 洛夫克拉夫特宇宙恐怖风格
        cultist: 'characters/char-cultist_1_nobg.png',
        investigator: 'characters/char-investigator_1_nobg.png',
        deepone: 'characters/char-deepone_1_nobg.png',
        // 爱丽丝篇章 - 维多利亚超现实主义风格
        madhatter: 'characters/char-madhatter_1_nobg.png',
        cheshire: 'characters/char-cheshire_1_nobg.png',
        queen: 'characters/char-queen_1_nobg.png',
        // 中土世界篇章 - 托尔金史诗奇幻风格
        elf: 'characters/char-elf_1_nobg.png',
        dwarf: 'characters/char-dwarf_1_nobg.png',
        wizard: 'characters/char-wizard_1_nobg.png',
        // 金庸江湖篇章 - 中国水墨武侠风格
        swordsman: 'characters/char-swordsman_1_nobg.png',
        master: 'characters/char-master_1_nobg.png',
        courtesan: 'characters/char-courtesan_1_nobg.png',
        // 星际牛仔篇章 - 90年代太空西部风格
        bountyHunter: 'characters/char-bounty-hunter_1_nobg.png',
        spacePilot: 'characters/char-space-pilot_1_nobg.png',
        spaceHacker: 'characters/char-space-hacker_1_nobg.png',
        // 黑客帝国篇章 - 赛博朋克现实主义风格
        morpheus: 'characters/char-morpheus_1a_nobg.png',
        oracle: 'characters/char-oracle_1a_nobg.png',
        agent: 'characters/char-agent_1a_nobg.png',
        // 冰与火之歌篇章 - 中世纪政治奇幻风格
        advisor: 'characters/char-advisor_1_nobg.png',
        mystic: 'characters/char-mystic_1_nobg.png',
        warrior: 'characters/char-warrior_1_nobg.png',
        // 千与千寻篇章 - 吉卜力动画风格
        maskedSpirit: 'characters/char-masked-spirit_1_nobg.png',
        bathhouseMistress: 'characters/char-bathhouse-mistress_1_nobg.png',
        roundSpirit: 'characters/char-round-spirit_1_nobg.png',
        // 芬尼根的守灵夜篇章 - 乔伊斯超现实主义风格
        storyteller: 'characters/char-storyteller_1_nobg.png',
        riverSpirit: 'characters/char-river-spirit_1_nobg.png',
        sleeper: 'characters/char-sleeper_1_nobg.png',
        // 守望者篇章 - 美漫黑色电影风格
        rorschach: 'characters/char-rorschach_1a_nobg.png',
        owl: 'characters/char-owl_1a_nobg.png',
        strategist: 'characters/char-strategist_1a_nobg.png',
        // 鼠族篇章 - 黑白图像小说风格
        survivor: 'characters/char-survivor_1_nobg.png',
        youngMouse: 'characters/char-young-mouse_1_nobg.png',
        fatherMouse: 'characters/char-father-mouse_1_nobg.png'
    }
};

// ================================================================
// 游戏状态
// ================================================================
const SAVE_SCHEMA_VERSION = 2;

const gameState = {
    currentScene: 'start',
    currentDialogue: 0,
    day: 1,
    sanity: 100,
    clues: [],
    encountered: [],
    traits: [],
    xMemories: [],
    isTyping: false,
    dialogueComplete: false,
    currentObjective: '寻找X的线索',
    completedWorlds: [],
    // 当前正在游玩的世界；用于世界结算场景没有世界前缀时的兜底识别。
    _activeWorld: null,
    _endingWorldId: null,
    dialogueHistory: [],
    choiceHistory: [],
    saveVersion: SAVE_SCHEMA_VERSION,
    settings: { typingEffect: true, typingSpeed: 50, musicVolume: 0.5, sfxVolume: 0.5 }
};

// 默认状态的深拷贝工厂函数
const _defaultGameState = () => ({
    currentScene: 'start',
    currentDialogue: 0,
    day: 1,
    sanity: 100,
    clues: [],
    encountered: [],
    traits: [],
    xMemories: [],
    isTyping: false,
    dialogueComplete: false,
    currentObjective: '寻找X的线索',
    completedWorlds: [],
    _activeWorld: null,
    _endingWorldId: null,
    dialogueHistory: [],
    choiceHistory: [],
    saveVersion: SAVE_SCHEMA_VERSION,
    settings: { typingEffect: true, typingSpeed: 50, musicVolume: 0.5, sfxVolume: 0.5 }
});

// ================================================================
// 线索定义
// ================================================================
const CLUE_DEFS = {
    name: { title: 'X的名字', desc: 'X可能是你认识的人，也可能是你自己。' },
    location: { title: 'X的位置', desc: 'X在花园的某个地方，或者在所有地方。' },
    time: { title: '时间线索', desc: 'X的存在与时间有关——或者无关。' },
    connection: { title: '连接', desc: '你和X之间有某种深刻的联系。' },
    library_secret: { title: '图书馆的秘密', desc: '无限图书馆的中心藏着阿莱夫。' },
    // 各世界线索（固定奖励）
    blade_runner: { title: '银翼杀手碎片', desc: 'X没有用出身证明自己。她曾替另一个没有名字的复制人承担后果。' },
    cthulhu: { title: '疯狂之城碎片', desc: '在古老的深渊前，你找到了一片关于X的碎片。' },
    alice: { title: '梦境世界碎片', desc: '在不遵循逻辑的世界里，你找到了一片关于X的碎片。' },
    middle_earth: { title: '中土世界碎片', desc: '在史诗般的旅程中，你找到了一片关于X的碎片。' },
    wuxia: { title: '江湖世界碎片', desc: '在侠义的世界里，你找到了一片关于X的碎片。' },
    cowboy_bebop: { title: '太空边境碎片', desc: '在星际之间漂泊时，你找到了一片关于X的碎片。' },
    matrix: { title: '矩阵世界碎片', desc: '在真实与虚幻的边界，你找到了一片关于X的碎片。' },
    got: { title: '权力游戏碎片', desc: '在权力的漩涡中，你找到了一片关于X的碎片。' },
    spirited: { title: '神隐世界碎片', desc: '在灵异的浴场中，你找到了一片关于X的碎片。' },
    wake: { title: '守灵之夜碎片', desc: '在语言的迷宫中，你找到了一片关于X的碎片。' },
    watchmen: { title: '末日时钟碎片', desc: '在道德抉择面前，你找到了一片关于X的碎片。' },
    maus: { title: '记忆深渊碎片', desc: '在历史的创伤中，你找到了一片关于X的碎片。' },
    // 各世界隐藏线索（特殊选择获得）
    blade_runner_hidden: { title: '银翼杀手·隐秘碎片', desc: 'X删除了自己的身份记录，却保留了另一个人的名字。' },
    cthulhu_hidden: { title: '疯狂之城·隐秘碎片', desc: '深渊中传来的低语揭示了X与宇宙之间的联系。' },
    alice_hidden: { title: '梦境世界·隐秘碎片', desc: '红心皇后的谜语中藏着一个关于X的秘密。' },
    middle_earth_hidden: { title: '中土世界·隐秘碎片', desc: '精灵的古老歌谣中记载着X的传说。' },
    wuxia_hidden: { title: '江湖世界·隐秘碎片', desc: '武功秘籍的最后一页写着X的名字。' },
    cowboy_bebop_hidden: { title: '太空边境·隐秘碎片', desc: '那首爵士乐的旋律中藏着X的记忆。' },
    matrix_hidden: { title: '矩阵世界·隐秘碎片', desc: '代码的底层有一个关于X的注释。' },
    got_hidden: { title: '权力游戏·隐秘碎片', desc: '龙焰中映出了X的影子。' },
    spirited_hidden: { title: '神隐世界·隐秘碎片', desc: '千与千寻的名字中藏着X的名字。' },
    wake_hidden: { title: '守灵之夜·隐秘碎片', desc: '梦话中泄露了X的秘密。' },
    watchmen_hidden: { title: '末日时钟·隐秘碎片', desc: '微笑按钮的背后是X的真相。' },
    maus_hidden: { title: '记忆深渊·隐秘碎片', desc: '幸存者的证词中有一段关于X的描述。' }
};

// ================================================================
// 任务系统
// ================================================================

// 场景ID前缀 → 世界ID 的映射（用于自动标记世界完成）
const SCENE_TO_WORLD_MAP = {
    'blade_': 'blade_runner',
    'blade_runner': 'blade_runner',
    'cthulhu': 'cthulhu',
    'deepone': 'cthulhu',
    'necronomicon': 'cthulhu',
    'alice_': 'alice',
    'rabbit': 'alice',
    'wonderland': 'alice',
    'middleearth': 'middle_earth',
    'middle_earth': 'middle_earth',
    'ring': 'middle_earth',
    'wuxia_': 'wuxia',
    'jianghu': 'wuxia',
    'bebop': 'cowboy_bebop',
    'cowboy': 'cowboy_bebop',
    'matrix_': 'matrix',
    'matrixcity': 'matrix',
    'got_': 'got',
    'westeros': 'got',
    'spirited': 'spirited',
    'sen': 'spirited',
    'yubaba': 'spirited',
    'wake_': 'wake',
    'finnegans': 'wake',
    'watchmen': 'watchmen',
    'rorschach': 'watchmen',
    'ozymandias': 'watchmen',
    'maus': 'maus',
    'holocaust': 'maus',
    'vladek': 'maus'
};

// 结局场景 → 世界 直接映射（处理不包含世界前缀的结局ID）
const ENDING_TO_WORLD_MAP = {
    // 银翼杀手（8个结局，ID不含 blade_runner 前缀，必须直接映射）
    ending_upload_consciousness: 'blade_runner',
    ending_merge_into_x: 'blade_runner',
    ending_x_into_you: 'blade_runner',
    ending_eternal_search: 'blade_runner',
    ending_escape_together_blade: 'blade_runner',
    ending_program_termination: 'blade_runner',
    ending_data_together: 'blade_runner',
    ending_denial_love: 'blade_runner',
    // 克苏鲁（9个结局，含 cthulhu 前缀，层3包含匹配可兜底）
    ending_cthulhu_enlightenment: 'cthulhu',
    ending_cthulhu_transformation: 'cthulhu',
    ending_cthulhu_guardian: 'cthulhu',
    ending_cthulhu_trapped: 'cthulhu',
    ending_cthulhu_drowned: 'cthulhu',
    ending_cthulhu_give_up: 'cthulhu',
    ending_cthulhu_tired: 'cthulhu',
    ending_cthulhu_x_reunion: 'cthulhu',
    ending_cthulhu_return_alone: 'cthulhu',
    // 爱丽丝（3个结局）
    ending_alice_tea_trapped: 'alice',
    ending_alice_together: 'alice',
    ending_alice_queen_prisoner: 'alice',
    // 中土世界（4个结局）
    ending_middleearth_watcher: 'middle_earth',
    ending_middleearth_sacrifice_together: 'middle_earth',
    ending_middleearth_third_path: 'middle_earth',
    ending_middleearth_corrupted: 'middle_earth',
    // 金庸武侠（1个结局）
    ending_wuxia_together: 'wuxia',
    // 星际牛仔（3个结局）
    ending_bebop_coward: 'cowboy_bebop',
    ending_bebop_sacrifice: 'cowboy_bebop',
    ending_bebop_respect: 'cowboy_bebop',
};

// 根据场景ID推断所属世界
function inferWorldFromScene(sceneId) {
    if (!sceneId) return null;
    // 先检查直接结局映射
    if (ENDING_TO_WORLD_MAP[sceneId]) return ENDING_TO_WORLD_MAP[sceneId];
    // 再尝试前缀匹配
    for (const [prefix, worldId] of Object.entries(SCENE_TO_WORLD_MAP)) {
        if (sceneId.startsWith(prefix)) return worldId;
    }
    // 结局场景泛匹配：ending_xxx_worldname 格式
    if (sceneId.startsWith('ending_')) {
        for (const [prefix, worldId] of Object.entries(SCENE_TO_WORLD_MAP)) {
            if (prefix.length > 3 && sceneId.includes(prefix)) return worldId;
        }
    }
    return null;
}

// 计算有效碎片数量（只计算世界线索和隐藏线索）
// 世界线索ID列表在 CLUE_DEFS 中以 _hidden 结尾或匹配世界名
function countValidFragments() {
    const worldClueIds = [
        'blade_runner', 'cthulhu', 'alice', 'middle_earth', 'wuxia',
        'cowboy_bebop', 'matrix', 'got', 'spirited', 'wake', 'watchmen', 'maus'
    ];
    return gameState.clues.filter(c => 
        worldClueIds.includes(c) || (c && c.endsWith('_hidden'))
    ).length;
}

const QUEST_SYSTEM = {
    getCurrentObjective() {
        if (!gameState.traits.includes('aleph_visited')) {
            if (gameState.clues.length < 3) {
                return { title: '收集线索', desc: `与花园中的三个人交谈，收集关于X的线索。（${gameState.clues.length}/3）` };
            } else {
                return { title: '找到阿莱夫', desc: '你已经收集了足够的线索。回到无限图书馆，找到通往阿莱夫的路。' };
            }
        } else if (countValidFragments() < (typeof FIRST_RUN_ENDING_THRESHOLD === 'number' ? FIRST_RUN_ENDING_THRESHOLD : 12)) {
            const completed = gameState.completedWorlds.length;
            const threshold = typeof FIRST_RUN_ENDING_THRESHOLD === 'number' ? FIRST_RUN_ENDING_THRESHOLD : 12;
            return { title: '穿越世界', desc: `通过阿莱夫进入不同的世界，收集X的碎片。（${countValidFragments()}/${threshold}，已探索${completed}个世界）` };
        } else {
            return { title: '揭示真相', desc: '你已经收集了足够的碎片。回到阿莱夫，走向X所在之处。' };
        }
    },
    
    getClueList() {
        return gameState.clues.map(c => CLUE_DEFS[c] || { title: c, desc: '一条神秘的线索。' });
    }
};

// ================================================================
// 剧本数据
// ================================================================

// 章节注册表（用于兼容不同格式的章节文件）
const CHAPTERS = {};

// 统一的角色名称中文映射表（所有显示角色名称的地方共用此常量）
const SHARED_SPEAKER_NAMES = {
    narrator: '旁白',
    monk: '档案员',
    beauty: '回忆者',
    tiger: '追踪者',
    x: 'X',
    // 无限图书馆篇章
    librarianMonk: '僧侣',
    assassin: '杀手',
    general: '将军',
    // 卡夫卡迷宫篇章
    bureaucrat: '官僚',
    gatekeeper: '守门人',
    watcher: '监视者',
    // 银翼杀手篇章
    replicant: '复制人',
    bladeRunner: '银翼杀手',
    executive: '公司高层',
    // 黑客帝国篇章
    morpheus: '墨菲斯',
    oracle: '先知',
    agentSmith: '特工史密斯',
    agent: '特工',
    protagonist: '主角',
    // 冰与火之歌篇章
    advisor: '谋士',
    commander: '统帅',
    spy: '密探',
    mystic: '神秘人',
    warrior: '战士',
    // 千与千寻篇章
    maskedSpirit: '面具之灵',
    riverSpirit: '河神',
    bathhouseMistress: '汤婆婆',
    roundSpirit: '圆灵',
    // 芬尼根的守灵夜篇章
    storyteller: '讲述者',
    sleeper: '沉睡者',
    // 守望者篇章
    rorschach: '罗夏',
    owl: '夜枭',
    strategist: '战略家',
    // 鼠族篇章
    survivor: '幸存者',
    youngMouse: '小老鼠',
    fatherMouse: '鼠父',
    // 爱丽丝梦游仙境篇章
    madhatter: '疯帽子',
    cheshire: '柴郡猫',
    queen: '红心女王',
    // 克苏鲁篇章
    cultist: '信徒',
    investigator: '调查员',
    deepone: '深潜者',
    // 中土世界篇章
    elf: '精灵',
    dwarf: '矮人',
    wizard: '巫师',
    // 金庸武侠篇章
    swordsman: '剑客',
    master: '宗师',
    courtesan: '花魁',
    // 星际牛仔篇章
    bountyHunter: '赏金猎人',
    spacePilot: '飞行员',
    spaceHacker: '黑客',
    // 星际牛仔角色名
    spike: '斯派克',
    jet: '杰特',
    faye: '菲',
    ed: '艾德',
    // 中土世界角色名
    frodo: '弗罗多',
    gandalf: '甘道夫',
    aragorn: '阿拉贡',
    // 黑客帝国角色名
    neo: '尼奥',
    trinity: '崔妮蒂',
    // 冰与火之歌角色名
    tyrion: '提利昂',
    daenerys: '丹妮莉丝',
    jon: '琼恩',
    // 千与千寻角色名
    chihiro: '千寻',
    haku: '白龙',
    yubaba: '汤婆婆',
    // 守望者角色名
    drmanhattan: '曼哈顿博士',
    ozymandias: '奥兹曼迪亚斯',
    // 鼠族角色名
    vladek: '弗拉德克',
    artie: '阿蒂',
    anja: '安雅'
};

const TRAIT_NAMES = {
    methodical: '有条不紊',
    intuitive: '直觉',
    instinctive: '本能',
    contemplative: '沉思',
    self_aware: '自我觉察',
    obsessive: '执着',
    reckless: '鲁莽',
    curious: '好奇',
    cautious: '谨慎',
    compassionate: '同情',
    ruthless: '冷酷',
    hopeful: '希望',
    despairing: '绝望'
};

const SCRIPT = {
    // ===== 序章 =====
    start: {
        scene: 'entrance',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你醒来时，手里有一张照片。照片上的人脸被刻意抹去了，背面只写着一个字母：X。你不记得她是谁，也不记得自己为什么要找她。'
            },
            {
                speaker: 'narrator',
                text: '你只确定一件事：X来过这座花园，而且留下了线索。找到她之前，你需要先弄清三件事——她叫什么、什么时候来过、从哪里离开。'
            },
            {
                speaker: 'narrator',
                text: '花园里有三个人可能见过她：档案员保管名字，回忆者保管时间，追踪者保管方向。先去找他们。收集三条不同的线索，花园中心的门就会打开。',
                showChoices: true
            }
        ],
        choices: [
            { text: '找档案员：问 X 的名字', next: 'meet_monk', trait: 'methodical' },
            { text: '找回忆者：确认 X 什么时候来过', next: 'meet_beauty', trait: 'intuitive' },
            { text: '找追踪者：寻找 X 离开的方向', next: 'meet_tiger', trait: 'instinctive' }
        ]
    },

    // ===== 遇见档案员 =====
    meet_monk: {
        scene: 'library',
        characters: [
            { id: 'monk', position: 'center', clickable: true }
        ],
        onEnter: () => {
            if (!gameState.encountered.includes('monk')) {
                gameState.encountered.push('monk');
                if (!gameState.clues.includes('name')) {
                    gameState.clues.push('name');
                }
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走进档案室。墙上挂满了照片，背面都写着 X。老人正在给它们编号，桌上摊着一本没有封面的登记簿。'
            },
            {
                speaker: 'monk',
                text: '档案员抬头看你：你是来找照片上的人吧？她叫 X，至少所有记录都这样写。',
                highlight: 'monk'
            },
            {
                speaker: 'monk',
                text: '我能确认一件事：X来过花园中心。她离开时把一张照片留在这里，照片背面除了 X，还有一句话："别先问她是谁，先问她为什么离开。"',
                speakTime: 8000
            },
            {
                speaker: 'narrator',
                text: '他把登记簿推到你面前。最后一页有三个空栏：名字、时间、方向。名字一栏已经被写上了 X。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续查 X 的记录', next: 'monk_inquiry' },
            { text: '翻看照片，寻找 X 离开的方向', next: 'monk_photos', clue: 'location' },
            { text: '先去问另外两个人', next: 'monk_clues' }
        ],
        clickables: {
            monk: {
                dialogues: [
                    { speaker: 'monk', text: '你想问什么？我已经在这里很久了，久到忘记了时间。' },
                    { speaker: 'monk', text: '每一份档案都是一个故事。有些故事已经结束，有些还在继续。你的故事呢？' }
                ],
                loop: true
            }
        }
    },

    monk_inquiry: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '登记簿里有很多个 X。她每次出现，照片上的脸都不一样，但右手腕上都有一道细小的伤痕。'
            },
            {
                speaker: 'monk',
                text: '我问过她为什么反复更换身份。她没有回答，只把手腕上的伤痕按住。你认识这道伤吗？'
            },
            {
                speaker: 'monk',
                text: '最近一次，她从中心门出来，往镜花丛方向走。回忆者也许知道她当时的样子。',
                speakTime: 10000
            },
            {
                speaker: 'monk',
                text: '你现在有一条可核对的信息：X的名字是 X，她最后一次从中心门出来后去了镜花丛。去问回忆者，别只听她的判断，记下她看见的时间。',
                showChoices: true
            }
        ],
        choices: [
            { text: '查看她留下的信', next: 'monk_letter', clue: 'connection' },
            { text: '追问她离开的方向', next: 'monk_where', clue: 'location' },
            { text: '问她的外貌和伤痕', next: 'monk_description' },
            { text: '去镜花丛找回忆者', next: 'meet_beauty' },
            { text: '去沙地找追踪者', next: 'meet_tiger' }
        ]
    },

    monk_clues: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '你想知道下一步？很简单：登记簿还缺两栏——时间和方向。回忆者能补时间，追踪者能补方向。'
            },
            {
                speaker: 'monk',
                text: '三栏填满后，花园中心的门会打开。门后不是答案，而是更多证据。你可以先把任务完成，再决定要不要继续相信这些记录。',
                speakTime: 10000
            },
            {
                speaker: 'monk',
                text: '去找回忆者和追踪者。回来时，看看登记簿上的三个空栏是否都已经填满。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去找回忆者', next: 'meet_beauty' },
            { text: '去找追踪者', next: 'meet_tiger' },
            { text: '回到花园中心检查进度', next: 'crossroads' }
        ]
    },

    monk_letter: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '老人从怀中取出一封泛黄的信。纸张已经脆了，但字迹清晰——那是一种你不认识的字体，但你能读懂每一个字，就像在梦里读一本你从未读过的书。'
            },
            {
                speaker: 'monk',
                text: '"如果你在读这封信——"她写道，"——那你就是我了。不是比喻，不是修辞。当你读到这句话的时候，你和我之间没有区别。我寻找X，你也在寻找X。我写下了这封信，但当你读它的时候，你也在写。我们共享同一个动词。"'
            },
            {
                speaker: 'monk',
                text: '"去花园中心。那里有一扇门，门上的文字会告诉你下一步。但你不需要记住这些文字——它们会记住你。"',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我会找到那扇门——不是因为它通向哪里，而是因为它本身就是终点」', next: 'crossroads', clue: 'location' },
            { text: '「还有其他人知道这封信的事吗？」', next: 'monk_others' }
        ]
    },

    monk_description: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '她……让我想想。不是想她的长相，而是想她给我的感觉。她站在这里的时候，我总觉得书架上的书脊都在微微发光——就像镜子。'
            },
            {
                speaker: 'monk',
                text: '她说她正在写一个故事。一个关于寻找的故事。她问我："在这个故事里，我是作者还是角色？"我说："也许两者都是。也许博尔赫斯写《环形废墟》的时候，他自己也在被另一个博尔赫斯书写。"'
            },
            {
                speaker: 'monk',
                text: '她笑了笑。那个笑容，我现在想起来，和你的笑容很像。也许不是像——也许就是同一个。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我要找到她——或者找到我自己」', next: 'crossroads', clue: 'name' },
            { text: '「这太奇怪了——但奇怪才是花园的常态」', next: 'monk_clues' }
        ]
    },

    monk_others: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '回忆者在镜花丛中。她不读取记忆——她读取的是记忆之间的空白。那些被遗忘的间隙，比被记住的事情更真实。博尔赫斯说，遗忘是记忆的一种形式，也许是唯一真诚的形式。'
            },
            {
                speaker: 'monk',
                text: '追踪者在沙地上。他不追踪足迹——他追踪的是足迹被风吹散之后留下的空缺。他找到的不是方向，而是所有方向的分叉点。'
            },
            {
                speaker: 'monk',
                text: '去找他们吧。然后回到这里。不是因为我需要你回来——而是因为花园需要你迷路。博尔赫斯说，迷宫的美不在于出口，而在于你永远找不到出口。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去找回忆者——去记忆的空白处', next: 'meet_beauty' },
            { text: '去找追踪者——去方向的分叉点', next: 'meet_tiger' },
            { text: '去花园中心——也许那扇门在等我', next: 'crossroads' }
        ]
    },

    monk_photos: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走近那面墙。成千上万张照片，每一张都模糊，每一张背面都写着X。但在模糊之中，你发现了一个规律——每张照片上的人脸，轮廓都在缓慢地变化，像水面上的倒影。'
            },
            {
                speaker: 'narrator',
                text: '有些照片的边缘有日期——有些是一百年前，有些是昨天，有些甚至是明天。博尔赫斯在《特隆》里写道：未来已经存在，只是我们的记忆还没有到达那里。'
            },
            {
                speaker: 'narrator',
                text: '你抽出一张。照片背面除了X，还有一行小字：「不要相信回忆者的话。她的记忆是真实的，但真实本身也是一种虚构。」'
            },
            {
                speaker: 'narrator',
                text: '照片下面压着一张纸条，纸条上的字迹和你的很像：「X的名字写在风中。去花园中心——那里有一扇门，门上的文字是你自己写的。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '去花园中心——那扇门在等我书写', next: 'crossroads' },
            { text: '去找回忆者——看看她记忆中有什么关于我的事', next: 'meet_beauty' }
        ]
    },

    monk_time: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '时间在这里没有意义。我可能是昨天来的，也可能是创世那天来的。在这座花园里，所有的时间同时存在。'
            },
            {
                speaker: 'narrator',
                text: '他指向墙上的一个时钟——但时钟没有指针，只有无数细小的刻度，密密麻麻，像是蚂蚁的足迹。'
            },
            {
                speaker: 'monk',
                text: '每一个刻度都是一个寻找者进入花园的瞬间。你看到那个最亮的点了吗？那是你。'
            },
            {
                speaker: 'narrator',
                text: '你凑近看。确实有一个点在微微发光。而在它旁边，有另一个点——更暗，但仍然存在。'
            },
            {
                speaker: 'monk',
                text: '你也许会困惑——我说X是三个月前来的，而追踪者说她是三天前来的。在这座花园里，这两个说法都是真的。因为时间不是一条线——它是一个圆。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那是 X 吗？」', next: 'monk_confirm_x' },
            { text: '去花园的中心', next: 'crossroads' }
        ]
    },

    monk_confirm_x: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '那是 X 进入花园的瞬间。比你早……或者比你晚。在这座花园里，"早"和"晚"只是方向不同的同一条路。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续追问', next: 'monk_inquiry' },
            { text: '去花园的中心', next: 'crossroads', clue: 'time' }
        ]
    },

    monk_who: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '老人从书架上抽出一个文件夹。文件夹上没有标签，只有一道裂痕，像是一道伤疤。'
            },
            {
                speaker: 'monk',
                text: '根据档案，X 是你的——等等，这很奇怪。档案显示 X 同时是你的爱人、你的敌人、你的证人和你的受害者。'
            },
            {
                speaker: 'monk',
                text: '这不可能。除非……你不是一个人。除非你是四个人，而 X 是你和另一个人之间的那个空间。'
            },
            {
                speaker: 'monk',
                text: '或者更简单：X 是你的另一个名字。你在寻找的，是过去的自己。',
                showChoices: true
            }
        ],
        choices: [
            { text: '接受这个可能性', next: 'accept_x_self', trait: 'self_aware' },
            { text: '拒绝：X 是另一个人', next: 'reject_x_self', trait: 'obsessive' }
        ]
    },

    monk_where: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '老人展开一张地图。但这不是普通的地图——这是一张时间的地图。'
            },
            {
                speaker: 'monk',
                text: '根据这张地图，当你完全忘记她的时候，她就会完全记得你。当你完全记得她的时候，她就会完全忘记你。你们永远在追逐彼此的背影。'
            },
            {
                speaker: 'monk',
                text: '但有一个例外。如果你们同时到达中心，记忆会重叠。你们会同时记得和忘记。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去花园中心', next: 'crossroads' },
            { text: '先去找追踪者', next: 'meet_tiger' }
        ]
    },

    monk_exist: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '这是最危险的档案。根据某些记录，X 从未存在过。她是你在进入花园的那一刻创造出来的。'
            },
            {
                speaker: 'monk',
                text: '你需要一个理由来解释自己为什么在这里，于是你创造了 X。你需要一个目标，于是你给自己设定了一个不可能完成的任务。'
            },
            {
                speaker: 'monk',
                text: '问题是：即使你知道她是被创造的，你还会继续寻找吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「即使她是被创造的，我也要找到她。」', next: 'accept_illusion', trait: 'romantic' },
            { text: '「如果是被创造的，那寻找就没有意义。」', next: 'ending_silence', trait: 'nihilist' }
        ]
    },

    // ===== 遇见回忆者 =====
    meet_beauty: {
        scene: 'mirror',
        characters: [
            { id: 'beauty', position: 'center', clickable: true }
        ],
        onEnter: () => {
            if (!gameState.encountered.includes('beauty')) {
                gameState.encountered.push('beauty');
                if (!gameState.clues.includes('time')) {
                    gameState.clues.push('time');
                }
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走进镜花丛。每朵花里都映着一段记忆；有些属于你，有些属于陌生人。回忆者正在给花浇水。'
            },
            {
                speaker: 'beauty',
                text: '回忆者看着你：X在这里待过一整晚。她一直盯着同一朵花，直到花里的日期从昨天变成了明天。',
                highlight: 'beauty'
            },
            {
                speaker: 'beauty',
                text: '我能告诉你她什么时候来过，但不能保证那段时间属于她。这里的记忆会被重新写入。你要找的是时间，还是一段可信的证词？',
                speakTime: 10000
            },
            {
                speaker: 'beauty',
                text: '她离开前说：如果有人来找我，不要告诉他我是谁，先告诉他我何时决定离开。',
                showChoices: true
            }
        ],
        choices: [
            { text: '查看她盯着的那朵花', next: 'beauty_memory', clue: 'time' },
            { text: '问 X 去了哪里', next: 'beauty_center', clue: 'location' },
            { text: '请她帮你核对照片', next: 'beauty_help' }
        ],
        clickables: {
            beauty: {
                dialogues: [
                    { speaker: 'beauty', text: '记忆是一种选择。你想记住什么？' },
                    { speaker: 'beauty', text: 'X 的眼睛……你还记得是什么颜色的吗？' }
                ],
                loop: true
            }
        }
    },

    beauty_center: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '花园中心有一扇门。不是门——是一个"门"的概念。博尔赫斯说，在特隆的哲学里，没有名词，只有动词。所以那扇门不是一个东西，而是一个动作：开。'
            },
            {
                speaker: 'beauty',
                text: '门上刻满了文字。但我不能告诉你那些文字是什么——因为每个人的门上，文字都不同。X说，她看到的文字是："你在找的不是X，而是寻找X这件事本身。"'
            },
            {
                speaker: 'beauty',
                text: '她说："只有当你收集了足够多的碎片，门才会开。"但碎片是什么？不是线索，不是信息——而是你愿意相信多少个互相矛盾的版本。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我要收集这些碎片——不是收集，而是成为碎片」', next: 'beauty_help' },
            { text: '「那扇门在哪里？——不，那扇门什么时候？」', next: 'crossroads', clue: 'location' }
        ]
    },

    beauty_memory: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '她忘记了自己的名字。但"忘记"这个词不对——她选择不再记得。在花园里，遗忘是一种主动的行为，就像博尔赫斯笔下的富内斯——不是因为他记不住，而是因为他记住了太多。'
            },
            {
                speaker: 'beauty',
                text: '她说："我来这里是为了找回我的名字。但我越找，就越不确定这个名字是否曾经属于我。也许名字不是被拥有的，而是被借用的。也许X，不是我失去的名字，而是我借出去的名字。"'
            },
            {
                speaker: 'beauty',
                text: '她问我："如果我借出了我的名字，那现在的我，是谁？"我当时没有回答——现在我也不确定。但也许，这个问题本身，就是她留给你的线索。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我会帮她找回名字——不是这个名字，而是所有名字的源头」', next: 'beauty_help', clue: 'name' },
            { text: '「这太悲伤了——但悲伤也是一种记忆的方式」', next: 'beauty_help' },
            { text: '「触碰我的额头——让我看见所有被遗忘的记忆」', next: 'beauty_full_memory' }
        ]
    },

    beauty_help: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '我可以帮你。但帮助这个词，在花园里是一面镜子——你帮我的同时，我帮你。花园里的三个人——档案员掌握着名字，我掌握着时间，追踪者掌握着空间。但名字、时间、空间——这些词在花园里是同一个词的不同写法。'
            },
            {
                speaker: 'beauty',
                text: '档案员知道X是谁——不是她的身份，而是她的名字。我知道X什么时候来过——不是日期，而是时间本身是什么。追踪者知道X去了哪里——不是地点，而是方向如何分叉。'
            },
            {
                speaker: 'beauty',
                text: '去和他们都谈谈吧。当你收集了足够多的碎片——不是数量，而是重量，一种你在梦醒时分能感到的重量的碎片——花园中心的那扇门，会在你到达之前就为你打开。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我会去找他们——不是寻找，而是被找到」', next: 'crossroads' },
            { text: '「如果我已经和档案员谈过了呢？」', next: 'beauty_progress' },
            { text: '「我想真正见到她——不是记忆，而是她本人」', next: 'beauty_meet_truly' }
        ]
    },

    beauty_progress: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '那你已经迈出了第一步。'
            },
            {
                speaker: 'beauty',
                text: `你现在有${gameState.clues.length}条线索。当你收集到3条时，就可以去花园中心了。`
            },
            {
                speaker: 'beauty',
                text: '如果还没和追踪者谈过，去找他吧。他在沙地上等你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去找追踪者', next: 'meet_tiger' },
            { text: '去花园中心', next: 'crossroads' }
        ]
    },

    beauty_full_memory: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '女人伸出手，触碰你的额头。一瞬间，洪水般的记忆涌来——'
            },
            {
                speaker: 'narrator',
                text: '你记得 X 的笑声。你记得她生气时皱起的眉头。你记得她说"再见"时的语气，那种"再也不见"的语气。'
            },
            {
                speaker: 'narrator',
                text: '你也记得其他的事——你记得自己是谁了。但记忆继续涌入，你开始失去平衡。'
            },
            {
                speaker: 'narrator',
                text: '然后你看到了真相：回忆者自己的记忆也是被编辑过的。有人在她的记忆里种下了X，就像种子一样。她不记得是谁做的——但她记得那个人的背影，穿着档案馆的长袍。'
            },
            {
                speaker: 'beauty',
                text: '现在你记得她了。但你是谁？现在你也知道了我的秘密——我的记忆，和你的记忆一样，是被写进去的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我不记得我是谁了」', next: 'ending_lost_self', trait: 'sacrifice' },
            { text: '「帮我找回我自己」', next: 'beauty_restore', trait: 'self_preservation' }
        ]
    },

    beauty_meet_truly: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '真正相见？在这座花园里，"真正"是一个危险的词。但我会告诉你一个方法。'
            },
            {
                speaker: 'narrator',
                text: '她从花丛中摘下一朵花，花瓣是透明的，像是由光构成的。'
            },
            {
                speaker: 'beauty',
                text: '这朵花叫"同步"。如果你能把它带到花园的中心，你和 X 的记忆会完全重叠。但代价是——你们会变成同一个人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '接过花，去花园中心', next: 'crossroads', trait: 'sacrifice' },
            { text: '「有没有不失去自我的方法？」', next: 'beauty_async' }
        ]
    },

    beauty_async: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '不失去自我的方法？有一个。但那个方法更残酷。'
            },
            {
                speaker: 'beauty',
                text: '你们可以选择"平行"。永远记得彼此，但永远无法真正相见。你们会在花园的两端，各自走各自的路。'
            },
            {
                speaker: 'beauty',
                text: '这是一种永恒的陪伴，也是一种永恒的分离。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我选择平行」', next: 'ending_parallel', trait: 'self_preservation' },
            { text: '去花园中心', next: 'crossroads' }
        ]
    },

    beauty_restore: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '你想找回自己？这比失去自己更难。要找回自己，你必须忘记 X。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「帮我找回自己」', next: 'ending_forget_x', trait: 'self_preservation' },
            { text: '「不，我宁愿记得 X」', next: 'ending_lost_self', trait: 'sacrifice' }
        ]
    },

    beauty_other_way: {
        scene: 'mirror',
        characters: [{ id: 'beauty', position: 'center' }],
        dialogues: [
            {
                speaker: 'beauty',
                text: '有。去找档案员，他可以告诉你 X 在哪里。去找追踪者，他可以带你找到 X。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去找档案员', next: 'meet_monk' },
            { text: '去找追踪者', next: 'meet_tiger' },
            { text: '去花园中心', next: 'crossroads' }
        ]
    },

    // ===== 遇见追踪者 =====
    meet_tiger: {
        scene: 'desert',
        characters: [
            { id: 'tiger', position: 'center', clickable: true }
        ],
        onEnter: () => {
            if (!gameState.encountered.includes('tiger')) {
                gameState.encountered.push('tiger');
                if (!gameState.clues.includes('location')) {
                    gameState.clues.push('location');
                }
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向沙地。风把脚印吹散，又在更远处留下新的脚印。一只老虎从沙丘后现身，鼻尖朝向花园中心。'
            },
            {
                speaker: 'tiger',
                text: '我闻到了 X 的气味。她三天前经过这里，鞋底沾着黑色的书页灰。她没有往出口走，而是去了图书馆。',
                highlight: 'tiger'
            },
            {
                speaker: 'tiger',
                text: '她问我有没有更快的路。我告诉她：最快的路会让你失去一部分记忆，安全的路会让你晚到一步。她选了第三条——自己判断。',
                speakTime: 10000
            },
            {
                speaker: 'tiger',
                text: '我可以给你一个方向，但不能替你走。先确认你要找的是她，还是她留下的路。',
                showChoices: true
            }
        ],
        choices: [
            { text: '记录方向：图书馆', next: 'tiger_library', clue: 'location' },
            { text: '让老虎带路', next: 'tiger_guide' },
            { text: '追问她失去的记忆', next: 'tiger_fragments', clue: 'connection' }
        ],
        clickables: {
            tiger: {
                dialogues: [
                    { speaker: 'tiger', text: '气味……它在分叉。三条路。你自己选择。' },
                    { speaker: 'tiger', text: '我的鼻子不会说谎。但有时候，真相比谎言更难接受。' }
                ],
                loop: true
            }
        }
    },

    tiger_fast: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '最快的路径是穿过死亡。在这座花园里，"死亡"不是终点。它是一种……加速器。'
            },
            {
                speaker: 'tiger',
                text: '但代价是——当你到达时，你可能已经不再是原来的你了。死亡会带走你的一部分。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我走」', next: 'path_death', trait: 'desperate' },
            { text: '「我选择更安全的路」', next: 'tiger_sure' }
        ]
    },

    tiger_library: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '她去找档案员了。档案员知道很多事情——不是因为他收集了它们，而是因为他被收集了。每一个进入图书馆的人，都会成为档案的一部分。档案员本人，也许就是第一份档案。'
            },
            {
                speaker: 'tiger',
                text: '但她没有从图书馆直接去花园中心。她去了镜花丛，找回忆者。然后她才走向中心。不是因为她需要更多线索——而是因为她需要从不同的方向同时抵达。博尔赫斯在《小径分叉的花园》里写道：一个人同时选择所有的路，才能抵达所有的终点。'
            },
            {
                speaker: 'tiger',
                text: '她走了一条完整的路径：档案员→回忆者→我→花园中心。不是线性的——是同时的。在花园里，顺序不是先后的，而是深浅的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那我现在该怎么做？——不是顺序，而是深浅」', next: 'tiger_guide' },
            { text: '「她最后去了花园中心吗？——或者说，她一直在花园中心？」', next: 'crossroads', clue: 'location' }
        ]
    },

    tiger_guide: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '我可以带你去花园中心。但带路这个词，在沙漠里是危险的——我带你走的路，会成为你走过的路，但不会成为你唯一的路。'
            },
            {
                speaker: 'tiger',
                text: '档案员知道名字。回忆者知道时间。我知道空间——不是某一条路，而是所有路分叉的那个点。你需要我们三个人的信息——不是信息本身，而是信息之间的空白。那些空白，才是真正的线索。',
                speakTime: 8000
            },
            {
                speaker: 'tiger',
                text: `你现在有${gameState.clues.length}条线索。数量不重要——但当你有了三条不同的线索，你就有了三种不同的谎言。而三种谎言的交集，就是真相。`,
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我去花园中心——不是带路，而是同时走所有路」', next: 'crossroads' },
            { text: '「我还需要更多的角度——不是线索，而是看线索的方式」', next: 'tiger_fragments' },
            { text: '「最快的路怎么走？——但最快，也许就是最慢」', next: 'tiger_fast' },
            { text: '「X是不是在死亡里？——死亡是花园的另一种语法」', next: 'tiger_death' }
        ]
    },

    tiger_fragments: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '碎片？X收集的不是碎片——是碎片之间的裂缝。在花园里，事物之间的空白比事物本身更真实。博尔赫斯用一生的时间写一本不存在的书，因为他知道，空白才是书的内容。'
            },
            {
                speaker: 'tiger',
                text: '档案员有X的名字——但不是她的身份，而是名字本身。回忆者有X的记忆——但不是事件，而是记忆的重力。我有X的足迹——但不是她走过的路，而是她没走过的路。'
            },
            {
                speaker: 'tiger',
                text: '当你收集了三种不同的碎片——不是拼图，而是三种互相矛盾的拼图——花园中心的那扇门，会自己打开。不是因为你打开了它，而是因为它一直在等你意识到它已经开了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我会去收集——不是碎片，而是空白」', next: 'crossroads' },
            { text: '「如果我已经有了足够多的矛盾呢？」', next: 'tiger_check_progress' }
        ]
    },

    tiger_check_progress: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: `让我闻闻……你身上有${gameState.clues.length}条线索。不是气味——是语法。每一条线索都是一句话，而你已经有了${gameState.clues.length}句话。`
            },
            {
                speaker: 'tiger',
                text: gameState.clues.length >= 3 
                    ? '够了。不是数量够了——而是矛盾够了。三种不同的说法，三种不同的谎言，而谎言的交点就是真相。那扇门会为你打开。跟我来。'
                    : '还不够。不是数量——而是你还没有同时相信所有矛盾的准备。去和档案员、回忆者谈谈，然后带着三种不同的真相回来。',
                showChoices: true
            }
        ],
        choices: [
            { text: gameState.clues.length >= 3 ? '「带我去那扇门——它已经开了」' : '「我会回来的——不是回来，而是从未离开」', next: 'crossroads' }
        ]
    },

    tiger_sure: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '最确定的路径？没有最确定的——只有最诚实的。最诚实的路是跟随所有气味，走完整个花园，遇见所有三个人，收集所有矛盾，然后在花园中心，什么都不做——让门自己开。',
                showChoices: true
            }
        ],
        choices: [
            { text: '跟随它去花园中心——不是跟随，而是被跟随', next: 'crossroads', clue: 'connection' },
            { text: '先去档案室——那些书在等我，或者说，我在等那些书', next: 'meet_monk' },
            { text: '先去镜花园——让记忆倒映出我的脸', next: 'meet_beauty' }
        ]
    },

    tiger_death: {
        scene: 'desert',
        characters: [{ id: 'tiger', position: 'center' }],
        dialogues: [
            {
                speaker: 'tiger',
                text: '你问X是否在死亡里？在花园里，死亡不是终点——它是一个语法标记。博尔赫斯在《巴别图书馆》里写道：死亡是图书馆里唯一一本没有文字的书。你要读它吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我走那条路径——不是走向死亡，而是走向语法结束的地方」', next: 'path_death', trait: 'suicidal' },
            { text: '去花园中心——让门代替死亡来回答', next: 'crossroads' }
        ]
    },

    path_death: {
        scene: 'desert',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你选择了通往死亡的路径。沙漠变得越来越热，然后突然变得冰冷——不是温度的变化，而是语言的变化。"热"和"冷"这些词，在这里失去了意义，因为你已经离开了语言可以描述的范围。'
            },
            {
                speaker: 'narrator',
                text: '然后你看到了X。她躺在沙地上，眼睛闭着，像是在睡觉。或者像是在等待——等待一个词，一个能让她重新存在的词。博尔赫斯说，地狱不是火，而是被遗忘。也许天堂也不是光，而是被记住。'
            },
            {
                speaker: 'x',
                text: '你来了。我等了太久——但"太久"是一个时间概念，而在这里，时间是静止的。你终于读到了这本书的最后一页。但书的最后一页，通常也是第一页的镜像。'
            },
            {
                speaker: 'narrator',
                text: '她伸出手。那一瞬间，你看到了照片上的脸——那张脸终于清晰了。它和她的脸一模一样。也和你自己的脸一模一样。',
                showChoices: true
            }
        ],
        choices: [
            { text: '和她一起留在这里——不是留下，而是停止寻找', next: 'ending_death_together' },
            { text: '带她离开——不是离开，而是重新开始寻找', next: 'ending_death_escape' }
        ]
    },

    // ===== 十字路口 =====
    crossroads: {
        scene: 'crossroads',
        characters: [],
        getDialogues: () => {
            const refs = [];
            if (gameState.encountered.includes('monk')) refs.push('档案员说过：花园的中心不是地点，而是时间——所有记忆在此处重叠，像一本被反复书写的羊皮纸。');
            if (gameState.encountered.includes('beauty')) refs.push('回忆者说过：在这里，记住即是相遇，遗忘即是告别——而这两种动作，在花园的语言中是同一个词。');
            if (gameState.encountered.includes('tiger')) refs.push('追踪者说过：所有的气味最终汇聚成一个点。那个点不是终点，而是所有起点同时存在的地方。');
            
            const refText = refs.length > 0 
                ? refs.join(' ') 
                : '你还没有和任何人交谈过。花园在等待——但等待这个词，在花园里意味着邀请。你需要先收集线索，就像博尔赫斯在进入巴别图书馆之前，先学会了遗忘。';
            
            return [
                {
                    speaker: 'narrator',
                    text: `你站在花园的中心。博尔赫斯在某处写道：迷宫的中心不是出口，而是另一个迷宫。这里有三扇门——一扇门上倒映着无尽的文字，仿佛某本没有第一页也没有最后一页的书；一扇门通往一片澄澈的、没有记忆的大海；一扇门通往一座沙漠，那里每一粒沙都曾是某个文明的图书馆。`
                },
                {
                    speaker: 'narrator',
                    text: `你已经走了 ${gameState.day} 天。在小径分岔的花园里，一天的重量与一年的重量并无不同。你收集了 ${gameState.clues.length} 条关于 X 的线索——每一条线索都像特隆的某个赫罗尼尔，在你注意到它的那一刻才开始存在。`
                },
                {
                    speaker: 'narrator',
                    text: refText,
                    showChoices: true
                }
            ];
        },
        choices: () => {
            const choices = [];
            
            // 核心流程：收集3条线索后才能进入无限图书馆发现阿莱夫
            if (gameState.clues.length >= 3) {
                choices.push({ text: '推开刻满文字的大门——门上的文字在变化，但含义不变：你正在进入一个无限的问题', next: 'enter_infinite_library' });
            } else {
                choices.push({ text: '触碰刻满文字的大门——门上的文字太密了，你还无法辨认（需要3条线索）', next: 'need_more_clues' });
            }
            
            // 访问过阿莱夫后，可以直接返回阿莱夫
            if (gameState.traits.includes('aleph_visited')) {
                choices.push({ text: '回到阿莱夫——那个直径两三厘米的、包含宇宙所有点的球体', next: 'aleph_choice' });
            }
            
            choices.push({ text: '等待——在环形的时间里，等待即是一种抵达', next: 'ending_wait' });
            choices.push({ text: '离开——但离开花园的人，是否真的离开了花园？', next: 'ending_leave' });
            if (gameState.clues.length < 3) {
                choices.push({ text: '我还需要更多线索——不是信息，而是理解信息的方式', next: 'need_more_clues' });
                choices.push({ text: '也许我还没准备好——就像博尔赫斯在写《阿莱夫》之前，需要先成为盲人', next: 'need_more' });
            }
            return choices;
        }
    },

    need_more_clues: {
        scene: 'crossroads',
        characters: [],
        getDialogues: () => {
            const unmet = [];
            if (!gameState.encountered.includes('monk')) unmet.push('档案员');
            if (!gameState.encountered.includes('beauty')) unmet.push('回忆者');
            if (!gameState.encountered.includes('tiger')) unmet.push('追踪者');
            
            const hintText = unmet.length > 0
                ? `${unmet.join('、')}——${unmet.length > 1 ? '他们每个人都掌握着谜题的一部分，而这些部分拼在一起，并不构成谜底，而是构成另一个谜题' : 'ta掌握着谜题的一部分——而谜题的一部分，就是整个谜题，正如阿莱夫中的每一个点都包含所有的点'}。去和${unmet.length > 1 ? '他们' : 'ta'}交谈吧。`
                : '你已经和所有人都交谈过了。但线索不是被找到的——线索是在你准备好的那一刻，自己显现的。试着以不同的顺序重新审视它们。';
            
            return [
                {
                    speaker: 'narrator',
                    text: '你试图推开那扇刻满文字的大门。门纹丝不动。博尔赫斯曾写道：有些门只有在你不推的时候才会打开。'
                },
                {
                    speaker: 'narrator',
                    text: `门上浮现出一行字——不是警告，而是定义：「收集 ${3 - gameState.clues.length} 条更多线索。线索不是钥匙，是钥匙的形状的记忆。」`
                },
                {
                    speaker: 'narrator',
                    text: hintText,
                    showChoices: true
                }
            ];
        },
        choices: () => {
            const choices = [];
            if (!gameState.encountered.includes('monk')) choices.push({ text: '去找档案员——那个整理碎片的人，也许他自己就是最大的碎片', next: 'meet_monk' });
            if (!gameState.encountered.includes('beauty')) choices.push({ text: '去找回忆者——记忆是时间的迷宫，而她是迷宫的地图', next: 'meet_beauty' });
            if (!gameState.encountered.includes('tiger')) choices.push({ text: '去找追踪者——她追踪的不是气味，而是气味消失后留下的空缺', next: 'meet_tiger' });
            if (choices.length === 0) choices.push({ text: '在花园中徘徊——有时候，徘徊是唯一正确的方向', next: 'crossroads' });
            return choices;
        }
    },

    need_more: {
        scene: 'crossroads',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你意识到自己还没有准备好。不是缺乏勇气——而是你还没有学会同时相信所有矛盾的答案。博尔赫斯说，怀疑是智力的一种形式，但信念是另一种。也许你需要的不是更多的线索，而是接受线索之间互相矛盾这一事实。',
                showChoices: true
            }
        ],
        choices: [
            { text: '回到档案室——那些书脊背面，也许写着另一个你', next: 'meet_monk' },
            { text: '回到镜花园——让记忆的碎片重新排列', next: 'meet_beauty' },
            { text: '回到荒野——在沙地的空白处，也许有新的文字', next: 'meet_tiger' }
        ]
    },

    // ===== 特殊节点 =====
    accept_x_self: {
        scene: 'library',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你接受了这个可能性：X是你自己。不是比喻，不是象征，而是字面意义上的。博尔赫斯在《另一个》中写道：与另一个自己相遇，是世界上最可怕也最安宁的事——因为你终于知道，你不是一个人，但另一个人也不是你。'
            },
            {
                speaker: 'narrator',
                text: '你走出档案室。雾气中，你看到了一个身影——那个身影转身，向你微笑。那是你的脸。或者，是X的脸。现在，这两者没有区别了。就像博尔赫斯说的，镜子的恐怖在于：它不会说谎，但它的真相，比你想象的要复杂得多。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向那个身影——不是相遇，而是认出', next: 'ending_found_self' }
        ]
    },

    reject_x_self: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '执念是一种力量。它可以推动你走得更远，也可以让你永远在一面镜子里打转。博尔赫斯笔下的富内斯，记住了每一片树叶，却无法理解"树叶"这个概念。有时候，拒绝一个答案，就是对这个答案最深的敬意。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续寻找——不是拒绝，而是选择更深的迷宫', next: 'crossroads' }
        ]
    },

    accept_illusion: {
        scene: 'library',
        characters: [{ id: 'monk', position: 'center' }],
        dialogues: [
            {
                speaker: 'monk',
                text: '你选择相信自己的创造。这是一种勇气，也是一种疯狂。去吧。去花园的中心。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去花园中心', next: 'crossroads' }
        ]
    },

    // ===== 结局 =====
    ending_found_knowledge: {
        scene: 'library',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '找到 X', desc: '你完成了寻找。但找到只是另一个开始。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开了书之门。一份档案从架子上飘下来，落在你手中。里面是 X 的一切。'
            },
            {
                speaker: 'narrator',
                text: '你找到了 X。档案的最后一页写着：「X 在花园的另一端，正在阅读关于你的档案。」'
            },
            {
                speaker: 'narrator',
                text: '档案化为灰烬。'
            }
        ]
    },

    ending_found_memory: {
        scene: 'mirror',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '重逢', desc: '你和 X 终于相见。不是终点，而是一起走的起点。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开了海之门。在镜子的另一端，你看到了 X。她也看到了你。'
            },
            {
                speaker: 'narrator',
                text: '你们同时开口，说出同一个词：「你。」记忆重叠了。'
            }
        ]
    },

    ending_found_instinct: {
        scene: 'desert',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '找到 X', desc: '你用本能找到了她。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开了沙漠之门。你奔跑，不需要理由，不需要方向。你的身体知道 X 在哪里。'
            },
            {
                speaker: 'narrator',
                text: '然后你看到了她。X 站在沙漠的尽头，背对着你。她转过身。'
            }
        ]
    },

    ending_found_self: {
        scene: 'crossroads',
        characters: [],
        ending: { title: '找到自己', desc: '你意识到 X 从来不是另一个人，而是你丢失的那部分自己。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你站在三扇门前，但你没有推开任何一扇。你意识到，你一直在寻找的 X，从来就不是另一个人。'
            },
            {
                speaker: 'narrator',
                text: '你就是 X。X 就是你。而你们，终于和解了。'
            }
        ]
    },

    ending_lost_self: {
        scene: 'mirror',
        characters: [],
        ending: { title: '迷失自我', desc: '你记得 X 的一切，但忘记了自己是谁。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你记得 X 的一切，但你不记得自己了。你变成了寻找的化身。你不再是人，而是一个动词——"寻找"。'
            }
        ]
    },

    ending_silence: {
        scene: 'entrance',
        characters: [],
        ending: { title: '沉默', desc: '你选择了停止寻找。在沉默中，答案不再重要。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你选择了沉默。不是拒绝说话，而是拒绝寻找。这就是卡夫卡式的结局：不是悲剧，不是喜剧，只是……未完成。'
            }
        ]
    },

    ending_wait: {
        scene: 'crossroads',
        characters: [],
        ending: { title: '等待', desc: '你变成了一个等待的人。希望存在，即使它是一种痛苦。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定等待。你变成了花园的一个特征，像那三扇门，像那些雾气。X 会来吗？你不知道。但只要你在等，希望就存在。'
            }
        ]
    },

    ending_leave: {
        scene: 'entrance',
        characters: [],
        ending: { title: '离开', desc: '你选择停止寻找。有些谜题不需要答案。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定离开。你走出石牌坊。你会忘记 X 吗？也许。也许不会。但即使记得，那也会是一种不同的记得。'
            }
        ]
    },

    ending_parallel: {
        scene: 'mirror',
        characters: [],
        ending: { title: '平行', desc: '你和 X 永远记得彼此，但永远无法真正相见。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你选择了平行。你和 X 会永远记得彼此，但永远无法真正相见。这是一种奇怪的安慰。'
            }
        ]
    },

    ending_forget_x: {
        scene: 'mirror',
        characters: [],
        ending: { title: '遗忘', desc: '你选择了找回自己，代价是忘记 X。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你选择了忘记。一阵温暖，然后是……空白。你把照片放下。它对你没有意义了。'
            }
        ]
    },

    ending_death_together: {
        scene: 'desert',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '永恒陪伴', desc: '你选择和 X 一起留在死亡里。这是你们的选择。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定留下。你们并肩躺在沙地上。"你会后悔吗？" X 问。"也许会，"你说，"但后悔也是一种陪伴。"'
            }
        ]
    },

    ending_death_escape: {
        scene: 'desert',
        characters: [],
        ending: { title: '无法带走', desc: '你试图带走 X，但有些东西无法被带走。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你试图带她离开。但沙漠没有尽头。"没用的，" X 说，"我是这个地方的一部分。你不能带走一个地方。"'
            }
        ]
    },

    // ================================================================
    // 第二篇章：无限图书馆
    // ================================================================
    
    // 过渡：从花园进入图书馆
    enter_infinite_library: {
        scene: 'infiniteLibrary',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开一扇刻满文字的门。门后不是房间，而是——无限的六边形回廊。'
            },
            {
                speaker: 'narrator',
                text: '每一面墙都是书架，每一本书都是一个世界。镜子将回廊无限复制，你看到无数个自己在无数个回廊中。'
            },
            {
                speaker: 'narrator',
                text: '远处，有三个身影。一个在冥想，一个在阴影中移动，一个靠在书架旁，似乎在等待什么。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向冥想的人', next: 'meet_librarian_monk', trait: 'contemplative' },
            { text: '走向阴影中的人', next: 'meet_assassin', trait: 'cautious' },
            { text: '走向等待的人', next: 'meet_general', trait: 'pragmatic' }
        ]
    },

    // 遇见图书馆僧侣
    meet_librarian_monk: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('librarianMonk')) {
                gameState.encountered.push('librarianMonk');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '一个僧侣坐在回廊中央，双眼闭合，手中捧着一本无字的书。他的存在像是一种沉默的声明。'
            },
            {
                speaker: 'librarianMonk',
                text: '你来了。我在等你。或者说，这本书在等你。'
            },
            {
                speaker: 'librarianMonk',
                text: '这座图书馆包含所有可能的书——所有已经写成的，所有尚未写成的，所有永远不会被写成的。'
            },
            {
                speaker: 'narrator',
                text: '他睁开眼睛。那双眼睛清澈得像是能看穿书页。你注意到他长袍的领口处别着一枚徽章——和花园里那个档案员佩戴的一模一样。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「X 在哪本书里？」', next: 'monk_x_book', clue: 'location' },
            { text: '「你守护的是什么书？」', next: 'monk_guarded_book' },
            { text: '「这里有没有出口？」', next: 'monk_exit' },
            { text: '「我可以接替你吗？」', next: 'monk_become_guardian' }
        ],
        clickables: {
            librarianMonk: {
                dialogues: [
                    { speaker: 'librarianMonk', text: '每一本书都是一个迷宫。你确定要打开吗？' },
                    { speaker: 'librarianMonk', text: '沉默是最好的阅读方式。' }
                ],
                loop: true
            }
        }
    },

    monk_x_book: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: 'X 在哪本书里？这个问题假设 X 是一个可以被书写的人。但也许 X 是这本书的读者，而不是书中的角色。'
            },
            {
                speaker: 'narrator',
                text: '他指向你手中的照片。'
            },
            {
                speaker: 'librarianMonk',
                text: '这张照片本身是一本书。背面那个 X，是书名。你一直在读这本书，但你还没有翻到正文。',
                showChoices: true
            }
        ],
        choices: [
            { text: '翻开照片', next: 'open_photo_book', trait: 'intuitive' },
            { text: '继续寻找 X 的实体', next: 'search_x_entity' }
        ]
    },

    open_photo_book: {
        scene: 'bookWorld',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你将照片当作书翻开。文字从纸面浮起，形成一条路。你踏上那条由句子铺成的路。'
            },
            {
                speaker: 'narrator',
                text: '路的尽头，你看到一个身影——但那不是 X。那是你自己，背对着你，正在阅读一本关于 X 的书。'
            },
            {
                speaker: 'narrator',
                text: '你意识到：X 不是一个人，而是一个故事。而你，是那个故事的唯一读者。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向那个阅读的自己', next: 'ending_merge_self' },
            { text: '离开这个书的世界', next: 'enter_infinite_library' }
        ]
    },

    ending_merge_self: {
        scene: 'bookWorld',
        characters: [],
        ending: { title: '融合', desc: '你与阅读的自己合二为一。X 从此不再是一个寻找的对象，而是一个被阅读的故事。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向自己，穿过文字的迷雾。当你触碰那个背影时，你们融合了。你不再寻找 X，因为你已经成为那个讲述 X 的人。'
            }
        ]
    },

    monk_guarded_book: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: '我守护的书？它没有名字。它记录的是所有被遗忘的事。每一个被遗忘的人，每一个被遗忘的瞬间，都在这本书里。'
            },
            {
                speaker: 'narrator',
                text: '他手中的无字书微微发光。'
            },
            {
                speaker: 'librarianMonk',
                text: '你想知道 X 是否被遗忘了吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「是的，我想知道」', next: 'check_x_forgotten', clue: 'connection' },
            { text: '「不，我害怕答案」', next: 'fear_answer' }
        ]
    },

    check_x_forgotten: {
        scene: 'hiddenChamber',
        characters: [{ id: 'librarianMonk', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '僧侣带你穿过无数回廊，来到一个隐藏的房间。墙上贴满了照片——都是 X，但每一张都不同。'
            },
            {
                speaker: 'librarianMonk',
                text: '这些是被遗忘的 X。每一个进入图书馆的人，都会遗忘一部分 X。这些碎片被收集在这里。'
            },
            {
                speaker: 'narrator',
                text: '你看到其中一张——那正是你手中的照片。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「这意味着我已经遗忘了 X？」', next: 'already_forgotten' },
            { text: '拿走所有照片', next: 'take_all_photos' }
        ]
    },

    already_forgotten: {
        scene: 'hiddenChamber',
        characters: [{ id: 'librarianMonk', position: 'left' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: '不。这意味着你正在遗忘。这座图书馆的每一秒都在偷走你的记忆。你越深入，遗忘越多。'
            },
            {
                speaker: 'librarianMonk',
                text: '但有一个悖论：只有完全遗忘 X 的人，才能在图书馆的尽头找到 X。因为那里存放的，正是所有被遗忘的事物。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续深入图书馆', next: 'library_depth', trait: 'sacrifice' },
            { text: '离开图书馆，保留记忆', next: 'exit_preserve_memory', trait: 'self_preservation' }
        ]
    },

    library_depth: {
        scene: 'infiniteLibrary',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你继续深入。回廊变得越来越暗，书架上的文字变得越来越模糊。你感觉到记忆正在流失。'
            },
            {
                speaker: 'narrator',
                text: '你忘记了 X 的声音。然后是她的脸。然后是她的名字。最后，你忘记了"X"这个符号本身。'
            },
            {
                speaker: 'narrator',
                text: '然后，你看到了她。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向她', next: 'ending_found_by_forgetting' }
        ]
    },

    ending_found_by_forgetting: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '遗忘中找到', desc: '你通过遗忘找到了 X。但你还记得这是你要找的人吗？' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '她站在那里，由所有被遗忘的事物构成。你不知道她是谁，但你知道她一直在等你。'
            },
            {
                speaker: 'x',
                text: '你终于来了。你忘记了我，所以我才能被找到。'
            }
        ]
    },

    exit_preserve_memory: {
        scene: 'entrance',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你转身离开。在走出图书馆的那一刻，你感觉到记忆回流。你记得 X 了——但你也记得，你差点永远失去她。',
                showChoices: true
            }
        ],
        choices: [
            { text: '回到花园继续寻找', next: 'crossroads' }
        ]
    },

    // 缺失场景补充
    monk_exit: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: '出口？这座图书馆没有出口。或者说，每一扇门都是出口，但每一扇门都通向另一座图书馆。'
            },
            {
                speaker: 'narrator',
                text: '他指向四周的镜子。每一个镜子里都是另一个回廊，另一个你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续寻找 X', next: 'meet_librarian_monk' },
            { text: '推开最近的一扇门', next: 'enter_infinite_library' }
        ]
    },

    fear_answer: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: '害怕是合理的。有些答案比问题更危险。'
            },
            {
                speaker: 'narrator',
                text: '他合上无字书，不再说话。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续在图书馆探索', next: 'enter_infinite_library' }
        ]
    },

    search_x_entity: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: 'X 的实体……在这座图书馆里，"实体"是一个危险的概念。每一个角色都存在于某本书里，但当你翻开那本书，他们就从角色变成了文字。'
            },
            {
                speaker: 'narrator',
                text: '他指向远处。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向他指的方向', next: 'enter_infinite_library' }
        ]
    },

    take_all_photos: {
        scene: 'hiddenChamber',
        characters: [{ id: 'librarianMonk', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你试图拿走所有照片，但当你触碰它们时，它们化作灰尘飘散。'
            },
            {
                speaker: 'librarianMonk',
                text: '被遗忘的东西无法被带走。它们只能存在于遗忘之中。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续深入图书馆', next: 'library_depth' }
        ]
    },

    // 遇见杀手
    meet_assassin: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('assassin')) {
                gameState.encountered.push('assassin');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '一个身影从阴影中浮现。他的动作无声，眼神冰冷。你注意到他的手指轻轻搭在一本书的书脊上——像是在抚摸一把刀。'
            },
            {
                speaker: 'assassin',
                text: '你也在找人。我看得出来。我们是一样的。'
            },
            {
                speaker: 'assassin',
                text: '但我在找的人必须死。你在找的人呢？她必须活吗？'
            },
            {
                speaker: 'narrator',
                text: '他的目光扫过你的肩膀——你肩上还残留着花园里追踪者留下的气味痕迹。他微微眯起眼睛，似乎认出了什么。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我必须找到她，不论死活」', next: 'assassin_shared', trait: 'desperate' },
            { text: '「我要她活着」', next: 'assassin_conflict', trait: 'romantic' },
            { text: '「你在找谁？」', next: 'assassin_target' },
            { text: '「你有没有想过，你的目标是谁？」', next: 'assassin_target_revealed' }
        ],
        clickables: {
            assassin: {
                dialogues: [
                    { speaker: 'assassin', text: '图书馆是最好的猎场。没有人能在这里藏住一辈子。' },
                    { speaker: 'assassin', text: '每一本书都是一条命。我读过很多书。' }
                ],
                loop: true
            }
        }
    },

    assassin_shared: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '不论死活……我理解。有时候，找到比活着更重要。'
            },
            {
                speaker: 'narrator',
                text: '他从阴影中抽出一把刀，递给你。'
            },
            {
                speaker: 'assassin',
                text: '这把刀可以切开书页。用它可以进入任何一本书的世界。但警告你——有些书一旦进入，就再也出不来了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '接过刀', next: 'take_knife', clue: 'location' },
            { text: '「我不需要武器」', next: 'refuse_weapon' }
        ]
    },

    take_knife: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你接过刀。它比想象中轻，几乎像是一片书页。'
            },
            {
                speaker: 'assassin',
                text: '现在你可以选择。用这把刀切开任何一本书，进入其中的世界。X 就在某本书里。'
            },
            {
                speaker: 'assassin',
                text: '但你要想清楚：你是要找到她，还是要救她？这两个目标可能不兼容。',
                showChoices: true
            }
        ],
        choices: [
            { text: '切开最近的一本书', next: 'cut_nearest_book' },
            { text: '问他 X 在哪本书', next: 'assassin_x_location' }
        ]
    },

    cut_nearest_book: {
        scene: 'bookWorld',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你将刀切入最近的书脊。书页裂开，露出一片由文字构成的荒原。你走进去。'
            },
            {
                speaker: 'narrator',
                text: '这里是一个故事的世界。你看到无数角色在文字间行走，但他们都是纸做的，没有真正的生命。'
            },
            {
                speaker: 'narrator',
                text: '在远处，你看到一个身影——不是 X，而是一个正在书写的人。他抬起头，看向你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向书写者', next: 'meet_the_writer' },
            { text: '退出这本书', next: 'enter_infinite_library' }
        ]
    },

    meet_the_writer: {
        scene: 'bookWorld',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向那个人。他的脸是空白的——不是没有五官，而是五官在不断变化，像是还没有被书写完成。'
            },
            {
                speaker: 'narrator',
                text: '「你来了，」他说，声音像是从很远的地方传来，「我一直在等你。我是这个故事的作者，而你——是读者。」'
            },
            {
                speaker: 'narrator',
                text: '「X 是我写的一个角色。但她……逃走了。她不想被我的故事定义。她逃进了其他的故事，其他的世界。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我去她逃去的地方」', next: 'chase_x', trait: 'determined' },
            { text: '「也许她不想被找到」', next: 'respect_x_escape', trait: 'self_aware' }
        ]
    },

    chase_x: {
        scene: 'bookWorld',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '作者指向书页的边缘。「她逃进了书页之间的空白。那是没有故事的地方，没有定义，没有束缚。」'
            },
            {
                speaker: 'narrator',
                text: '「但那里也没有存在。进入空白，她将不再是任何角色——包括她自己。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入空白寻找她', next: 'enter_the_void' },
            { text: '放弃，回到图书馆', next: 'enter_infinite_library' }
        ]
    },

    enter_the_void: {
        scene: 'bookWorld',
        characters: [],
        ending: { title: '空白', desc: '你进入了书页之间的空白。X 在这里，但你们都不再是任何故事的一部分。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你踏入空白。文字消失了，故事消失了。你看到 X——她没有形状，没有定义，只是存在本身。'
            },
            {
                speaker: 'narrator',
                text: '你意识到：在这里，你们都是自由的。但自由也是一种虚无。'
            }
        ]
    },

    respect_x_escape: {
        scene: 'bookWorld',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你停下了。也许 X 逃走是有原因的。也许她不想被任何故事——包括你的寻找——所定义。',
                showChoices: true
            }
        ],
        choices: [
            { text: '离开，不再寻找', next: 'ending_stop_searching' },
            { text: '继续，但换一种方式', next: 'enter_infinite_library' }
        ]
    },

    ending_stop_searching: {
        scene: 'infiniteLibrary',
        characters: [],
        ending: { title: '停止寻找', desc: '你选择不再寻找 X。也许这是另一种找到——找到放下的勇气。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你放下了手中的照片。它飘落在无数书页之间，成为图书馆的一部分。你不再寻找。X 自由了。你也自由了。'
            }
        ]
    },

    // 杀手相关缺失场景
    assassin_conflict: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '你要她活着？那比杀死她更难。在这座图书馆里，存在是一种奢侈。'
            },
            {
                speaker: 'narrator',
                text: '他收起刀，眼神中有一丝不易察觉的悲伤。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「为什么？」', next: 'assassin_why_alive' },
            { text: '继续寻找 X', next: 'enter_infinite_library' }
        ]
    },

    assassin_why_alive: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '因为活着意味着被阅读。在这座图书馆里，每一个角色都在被无数读者阅读、解读、定义。'
            },
            {
                speaker: 'assassin',
                text: '死亡是一种解脱——不再被任何故事束缚。你想让她活着？你确定那不是一种残忍？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我仍然要找到她」', next: 'take_knife', clue: 'connection' },
            { text: '离开杀手', next: 'enter_infinite_library' }
        ]
    },

    assassin_target: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '我在找一个作者。他写了一个故事，那个故事杀死了我的过去。我要找到他，结束那个故事。'
            },
            {
                speaker: 'narrator',
                text: '他的手指轻轻颤抖。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「也许 X 知道他在哪里」', next: 'assassin_x_knows' },
            { text: '继续寻找 X', next: 'enter_infinite_library' }
        ]
    },

    assassin_x_knows: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: 'X？也许。在这座图书馆里，每个人都知道每个人。每个人也都在躲避每个人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '一起寻找', next: 'enter_infinite_library', clue: 'connection' }
        ]
    },

    assassin_x_location: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: 'X 在哪本书？我不知道。但我知道一个方法——用这把刀切开你自己的书。'
            },
            {
                speaker: 'narrator',
                text: '他指向你脚下。你低头，发现自己站在一本巨大的书上。',
                showChoices: true
            }
        ],
        choices: [
            { text: '切开脚下的书', next: 'cut_nearest_book' }
        ]
    },

    refuse_weapon: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '不需要武器？那你的寻找只是一种幻想。在这座图书馆里，不切开书页，你永远无法真正进入任何故事。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续无武器寻找', next: 'enter_infinite_library' }
        ]
    },

    // 遇见将军
    meet_general: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('general')) {
                gameState.encountered.push('general');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '一个穿着褪色军装的男人靠在书架旁。他的肩章少了一颗星，胸前的勋章位置有褪色的痕迹。他看着一张地图，但地图上没有标注。'
            },
            {
                speaker: 'general',
                text: '又一个迷路的人。这座图书馆专门收集迷路的人。'
            },
            {
                speaker: 'general',
                text: '我曾经指挥过三千人。现在，我连自己都指挥不了。'
            },
            {
                speaker: 'narrator',
                text: '他胸前的勋章上刻着一朵花——和花园里回忆者镜花丛中的花一模一样。那是记忆之花。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你在找什么？」', next: 'general_search' },
            { text: '「你认识 X 吗？」', next: 'general_knows_x' },
            { text: '「你的地图……」', next: 'general_map' },
            { text: '「你想找到那场战役的另一种结局吗？」', next: 'general_final_choice' }
        ],
        clickables: {
            general: {
                dialogues: [
                    { speaker: 'general', text: '战争教会我一件事：有时候，撤退比进攻更需要勇气。' },
                    { speaker: 'general', text: '我在这座图书馆走了三十年。或者三百年。时间在这里没有意义。' }
                ],
                loop: true
            }
        }
    },

    general_search: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '我在找一场战役。一场我输掉的战役。我想知道——我到底输在哪里。'
            },
            {
                speaker: 'narrator',
                text: '他指着周围的书架。'
            },
            {
                speaker: 'general',
                text: '这座图书馆记录了所有可能的结果。在某本书里，我赢了那场战役。在某本书里，三千人都活了下来。我想找到那本书。',
                showChoices: true
            }
        ],
        choices: [
            { text: '帮他找那本书', next: 'help_general', trait: 'compassionate' },
            { text: '「也许有些结果不应该被改变」', next: 'accept_defeat' }
        ]
    },

    help_general: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你和将军一起在书架间搜寻。终于，在一本积满灰尘的书里，他找到了那场战役的另一种结局。'
            },
            {
                speaker: 'general',
                text: '在这里……我做出了不同的决定。三千人都活了下来。'
            },
            {
                speaker: 'narrator',
                text: '他合上书，沉默了很久。'
            },
            {
                speaker: 'general',
                text: '但这不是我的现实。这只是……一个可能。我还是要回到我的失败里去。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「也许我们可以留在可能里」', next: 'stay_in_possibility' },
            { text: '告别将军，继续寻找 X', next: 'enter_infinite_library', clue: 'connection' }
        ]
    },

    stay_in_possibility: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '留在可能里？那不是活着，那只是……做梦。'
            },
            {
                speaker: 'narrator',
                text: '他看着你，眼神中有一丝羡慕。'
            },
            {
                speaker: 'general',
                text: '但也许你是对的。也许这座图书馆存在的意义，就是让我们有一个地方可以做梦。'
            },
            {
                speaker: 'narrator',
                text: '他指向远处的一扇门。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向那扇门', next: 'general_final_door' }
        ]
    },

    general_final_door: {
        scene: 'hiddenChamber',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开那扇门。里面是一个小房间，墙上挂满了照片——都是同一个人，但每一张都不同。'
            },
            {
                speaker: 'narrator',
                text: '你认出了那张脸。是 X。'
            },
            {
                speaker: 'narrator',
                text: '每一张照片下面都有一行字：「X 在寻找你。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '这是真的吗？', next: 'x_seeking_you' }
        ]
    },

    x_seeking_you: {
        scene: 'hiddenChamber',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你听到身后有脚步声。你转身。'
            },
            {
                speaker: 'narrator',
                text: 'X 站在那里。她看着你，眼中有一种你从未见过的表情——释然。'
            },
            {
                speaker: 'x',
                text: '我一直在找你。你不知道吗？'
            },
            {
                speaker: 'x',
                text: '我们一直在互相寻找。在这座图书馆里，在所有可能的世界里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '拥抱她', next: 'ending_reunion_library' }
        ]
    },

    ending_reunion_library: {
        scene: 'hiddenChamber',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '图书馆重逢', desc: '在无限图书馆的深处，你和 X 终于找到了彼此。原来你们一直在互相寻找。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你拥抱她。在这个由所有可能的故事构成的地方，你们的故事终于交汇。'
            },
            {
                speaker: 'x',
                text: '现在，我们可以一起读这本书了。但……这本书还有更多的章节。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「还有什么？」', next: 'library_to_blade' }
        ]
    },

    library_to_blade: {
        scene: 'hiddenChamber',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '有一个世界，和我们的完全不同。那里没有书，没有花园，只有钢铁和霓虹。'
            },
            {
                speaker: 'x',
                text: '在那个世界里，人们质疑什么是真实，什么是记忆，什么是灵魂。'
            },
            {
                speaker: 'x',
                text: '我想……我们需要去那里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「一起去」', next: 'blade_runner_entrance' }
        ]
    },

    // 将军相关缺失场景
    general_knows_x: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: 'X？我听说过这个名字。在图书馆的某个地方，有一整面墙都是关于她的记录。'
            },
            {
                speaker: 'narrator',
                text: '他指向远处的一个黑暗回廊。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向那个回廊', next: 'check_x_forgotten', clue: 'location' },
            { text: '继续和将军交谈', next: 'meet_general' }
        ]
    },

    general_map: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '这张地图？它没有标注，因为图书馆本身就在不断变化。每当你以为找到了路，回廊就会重新排列。'
            },
            {
                speaker: 'narrator',
                text: '他苦笑了一下。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那怎么找到 X？」', next: 'general_find_x_advice' },
            { text: '继续探索', next: 'enter_infinite_library' }
        ]
    },

    general_find_x_advice: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '找到 X？在这座图书馆里，找到任何东西都需要一个悖论：你必须先忘记你要找什么。'
            },
            {
                speaker: 'general',
                text: '我找了三十年，越找越远。也许有一天我会完全忘记我在找什么——然后，也许就在那一天，我会找到。',
                showChoices: true
            }
        ],
        choices: [
            { text: '接受这个悖论', next: 'library_depth', trait: 'sacrifice' },
            { text: '拒绝这个悖论', next: 'enter_infinite_library', trait: 'determined' }
        ]
    },

    accept_defeat: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '不应该被改变？也许你是对的。也许失败是唯一真实的东西。胜利只是可能，失败才是现实。'
            },
            {
                speaker: 'narrator',
                text: '他低下头，看着自己褪色的勋章。',
                showChoices: true
            }
        ],
        choices: [
            { text: '告别将军', next: 'enter_infinite_library' }
        ]
    },

    // ================================================================
    // 图书馆人物支线结局
    // ================================================================

    // 僧侣支线：选择成为新的守护者
    monk_become_guardian: {
        scene: 'hiddenChamber',
        characters: [{ id: 'librarianMonk', position: 'center' }],
        dialogues: [
            {
                speaker: 'librarianMonk',
                text: '你想接替我？成为新的守护者？'
            },
            {
                speaker: 'narrator',
                text: '他看着你，眼中有一种古老的疲惫。'
            },
            {
                speaker: 'librarianMonk',
                text: '我已经守护这本书三百年。或者三千年。时间在这里没有意义。'
            },
            {
                speaker: 'librarianMonk',
                text: '但也许……是时候了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我愿意守护」', next: 'ending_new_guardian' },
            { text: '「不，我还是要找 X」', next: 'enter_infinite_library' }
        ]
    },

    ending_new_guardian: {
        scene: 'hiddenChamber',
        characters: [],
        ending: { title: '新的守护者', desc: '你选择留在图书馆，成为新的守护者。X 的故事将被你记录，而你的故事将被遗忘。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你接过无字书。僧侣的身影渐渐消散，像是被书页吸收。'
            },
            {
                speaker: 'narrator',
                text: '现在，你是守护者了。你会记录每一个寻找 X 的人，就像僧侣记录了你。'
            }
        ]
    },

    // 杀手支线：发现目标其实是自己
    assassin_target_revealed: {
        scene: 'bookWorld',
        characters: [{ id: 'assassin', position: 'center' }],
        dialogues: [
            {
                speaker: 'assassin',
                text: '我一直在找一个作者。他写了一个故事，那个故事杀死了我的过去。'
            },
            {
                speaker: 'narrator',
                text: '他的声音颤抖。'
            },
            {
                speaker: 'assassin',
                text: '但我刚刚发现……那个作者就是我自己。我写了那个故事，然后忘记了我写过它。'
            },
            {
                speaker: 'assassin',
                text: '我想杀死的，是我自己。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你不必杀死任何人」', next: 'ending_assassin_redemption' },
            { text: '「有时候我们需要杀死过去的自己」', next: 'ending_assassin_transformation' }
        ]
    },

    ending_assassin_redemption: {
        scene: 'infiniteLibrary',
        characters: [],
        ending: { title: '杀手的救赎', desc: '杀手放下了刀。他不再追杀任何人，包括他自己。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '他看着你，眼中有一种你从未见过的东西——希望。'
            },
            {
                speaker: 'assassin',
                text: '谢谢你。也许……我可以写一个新的故事。'
            }
        ]
    },

    ending_assassin_transformation: {
        scene: 'bookWorld',
        characters: [],
        ending: { title: '自我了断', desc: '杀手杀死了"过去的自己"，获得了新生。但新生的他，还是原来的他吗？' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '他用刀切开了那本书。书页间，一个身影倒下——那是他自己，但穿着不同的衣服，有着不同的表情。'
            },
            {
                speaker: 'narrator',
                text: '当他抬起头时，他的眼神变了。他不再是杀手，也不再是作者。他是谁？连他自己也不知道。'
            }
        ]
    },

    // 将军支线：找到战役的另一种结局，但选择不改变
    general_final_choice: {
        scene: 'hiddenChamber',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '我找到了。那本书里有我胜利的版本。三千人都活了下来。'
            },
            {
                speaker: 'narrator',
                text: '他的手在颤抖。'
            },
            {
                speaker: 'general',
                text: '但你知道吗？那个版本的我，不是我。那个我没有经历过失败，没有失去过任何人。'
            },
            {
                speaker: 'general',
                text: '他只是一个……可能性。而我，是现实。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你选择了接受失败？」', next: 'general_acceptance' },
            { text: '「你可以成为那个可能性」', next: 'general_become_possibility' }
        ]
    },

    general_acceptance: {
        scene: 'infiniteLibrary',
        characters: [{ id: 'general', position: 'center' }],
        dialogues: [
            {
                speaker: 'general',
                text: '接受？不。我不接受失败。但我接受我是那个失败的人。'
            },
            {
                speaker: 'general',
                text: '这是我的故事。不是那个胜利者的故事。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那你接下来去哪？」', next: 'ending_general_journey' }
        ]
    },

    ending_general_journey: {
        scene: 'infiniteLibrary',
        characters: [],
        ending: { title: '将军的旅程', desc: '将军选择继续寻找，不是寻找胜利，而是寻找自己失败的意义。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '他收起地图，走向图书馆的深处。'
            },
            {
                speaker: 'general',
                text: '也许有一天，我会找到答案。也许不会。但寻找本身，就是我的答案。'
            }
        ]
    },

    general_become_possibility: {
        scene: 'bookWorld',
        characters: [],
        ending: { title: '成为可能性', desc: '将军进入了那本胜利的书。但他发现，那个世界没有他的位置——因为那个世界已经有了一个将军。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '他走进书页。那个胜利的世界在他眼前展开。'
            },
            {
                speaker: 'narrator',
                text: '但他看到，那个世界里已经有一个他了——一个从未失败的将军，一个他无法成为的人。'
            },
            {
                speaker: 'narrator',
                text: '他站在书页之间，既不属于这个世界，也不属于那个世界。'
            }
        ]
    },

    // ================================================================
    // 第三篇章：卡夫卡迷宫
    // ================================================================

    enter_kafka_maze: {
        scene: 'kafkaCorridor',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开一扇灰色的门。门后是一条长得没有尽头的走廊，两侧是编号的门，天花板上是闪烁的荧光灯。'
            },
            {
                speaker: 'narrator',
                text: '走廊尽头有一扇巨大的门，上面挂着无数把锁。你知道 X 就在那扇门后面。'
            },
            {
                speaker: 'narrator',
                text: '但当你走向那扇门时，你发现自己在原地打转。无论你走多久，那扇门始终保持着同样的距离。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续走向大门', next: 'approach_gate' },
            { text: '敲开最近的门', next: 'knock_nearby_door' },
            { text: '寻找其他人', next: 'find_others' }
        ]
    },

    approach_gate: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('gatekeeper')) {
                gameState.encountered.push('gatekeeper');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你终于走到了大门前。一个穿着制服的男人站在那里，手中拿着一大串钥匙，但没有任何一把能打开这扇门。'
            },
            {
                speaker: 'gatekeeper',
                text: '你不能进去。'
            },
            {
                speaker: 'narrator',
                text: '他的语气平淡，像是在陈述天气。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「为什么？」', next: 'gatekeeper_why' },
            { text: '「我有权利进去」', next: 'gatekeeper_rights' },
            { text: '「X 在里面吗？」', next: 'gatekeeper_x_inside' },
            { text: '「你想进去吗？」', next: 'gatekeeper_secret' }
        ],
        clickables: {
            gatekeeper: {
                dialogues: [
                    { speaker: 'gatekeeper', text: '这不是我能决定的。' },
                    { speaker: 'gatekeeper', text: '你需要等待。' }
                ],
                loop: true
            }
        }
    },

    gatekeeper_why: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '为什么？这不是我能回答的问题。你需要去问 3 号办公室。'
            },
            {
                speaker: 'narrator',
                text: '他指向走廊。你回头看，所有的门都标着"3"。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去 3 号办公室', next: 'office_3' }
        ]
    },

    office_3: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('bureaucrat')) {
                gameState.encountered.push('bureaucrat');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走进一间等候室。里面坐满了人，每个人都拿着一张号码牌。柜台后面坐着一个没有脸的人——或者说，他的脸被阴影完全遮盖了。'
            },
            {
                speaker: 'bureaucrat',
                text: '请取号。'
            },
            {
                speaker: 'narrator',
                text: '你低头，发现自己手中已经有一张号码牌：8472。墙上的显示屏显示：正在办理：23。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我要等多久？」', next: 'bureaucrat_wait' },
            { text: '「我要进去找 X」', next: 'bureaucrat_x' },
            { text: '插队', next: 'bureaucrat_cut', trait: 'desperate' },
            { text: '「我能看看你的脸吗？」', next: 'bureaucrat_face' },
            { text: '离开等候室', next: 'kafka_corridor_return' }
        ],
        clickables: {
            bureaucrat: {
                dialogues: [
                    { speaker: 'bureaucrat', text: '请耐心等待。' },
                    { speaker: 'bureaucrat', text: '系统正在处理。' }
                ],
                loop: true
            }
        }
    },

    kafka_corridor_return: {
        scene: 'kafkaCorridor',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定离开这个荒谬的等候室。走廊依然漫长，但至少你在移动。'
            },
            {
                speaker: 'narrator',
                text: '卡夫卡的世界就是这样——无尽的走廊，无尽的等待，无尽的形式。但你可以选择不被困住。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续探索', next: 'enter_kafka_maze' },
            { text: '回到花园', next: 'crossroads' }
        ]
    },

    bureaucrat_wait: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '等待时间取决于很多因素。你的申请需要经过 7 个部门的审批。'
            },
            {
                speaker: 'narrator',
                text: '他递给你一叠表格。'
            },
            {
                speaker: 'bureaucrat',
                text: '请先填写这些。第 3 页需要公证，第 7 页需要翻译，第 12 页……等等，第 12 页已经废止了。你需要等新版本。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「新版本什么时候出？」', next: 'bureaucrat_new_version' },
            { text: '填写表格', next: 'fill_forms', trait: 'methodical' }
        ]
    },

    bureaucrat_new_version: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '新版本？这不在我的职权范围内。你需要去问 7 号办公室。'
            },
            {
                speaker: 'narrator',
                text: '你回头看，所有的门都标着"7"。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「这不就是 7 号办公室吗？」', next: 'bureaucrat_confusion' },
            { text: '离开，继续寻找', next: 'kafka_loop' }
        ]
    },

    kafka_loop: {
        scene: 'endlessStairs',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走进一条螺旋楼梯。你向上走，但每一层都一模一样。你向下走，情况也一样。'
            },
            {
                speaker: 'narrator',
                text: '你感觉到有人在看着你。你回头，走廊尽头有一个黑影。但当你眨眼，黑影消失了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续向上', next: 'stairs_up' },
            { text: '继续向下', next: 'stairs_down' },
            { text: '调查黑影', next: 'investigate_shadow' }
        ]
    },

    investigate_shadow: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('watcher')) {
                gameState.encountered.push('watcher');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向黑影出现的地方。那里空无一人，只有墙上的一行字：「你正在被观察。」'
            },
            {
                speaker: 'narrator',
                text: '你感觉到背后有视线。你猛地转身。'
            },
            {
                speaker: 'narrator',
                text: '一个黑影站在你身后，只有眼睛发出微光。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你是谁？」', next: 'watcher_who' },
            { text: '「你在监视我？」', next: 'watcher_watching' },
            { text: '逃跑', next: 'watcher_run', trait: 'paranoid' },
            { text: '「你其实也是被困的人吧？」', next: 'watcher_truth' }
        ],
        clickables: {
            watcher: {
                dialogues: [
                    { speaker: 'watcher', text: '……' },
                    { speaker: 'watcher', text: '继续走。' }
                ],
                loop: true
            }
        }
    },

    watcher_who: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '我是记录者。我记录每一个试图进入大门的人。'
            },
            {
                speaker: 'narrator',
                text: '他的声音像是从很远的地方传来。'
            },
            {
                speaker: 'watcher',
                text: '你想知道一个秘密吗？从来没有人成功进入那扇门。但他们都还在尝试。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「为什么进不去？」', next: 'watcher_why_impossible' },
            { text: '「X 在里面吗？」', next: 'watcher_x_inside' }
        ]
    },

    watcher_why_impossible: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '因为门后面什么都没有。或者，门后面是另一个走廊，通向另一扇门，后面是另一个走廊……'
            },
            {
                speaker: 'watcher',
                text: '这是一个没有出口的迷宫。设计它的人早就忘了为什么要设计它。现在它只是在运转，像一台没有目的的机器。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那 X 在哪里？」', next: 'watcher_where_x' },
            { text: '「我要怎么出去？」', next: 'watcher_how_exit' }
        ]
    },

    watcher_where_x: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: 'X？她不在迷宫里。她从未进入过迷宫。'
            },
            {
                speaker: 'narrator',
                text: '黑影的眼睛闪烁了一下。'
            },
            {
                speaker: 'watcher',
                text: '你在寻找的 X，是设计这个迷宫的人。她在外面，看着里面的人徒劳地寻找她。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「这不可能是真的」', next: 'ending_denial' },
            { text: '「我要怎么出去？」', next: 'watcher_how_exit' }
        ]
    },

    watcher_how_exit: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '出去？只有一个方法。'
            },
            {
                speaker: 'narrator',
                text: '他指向楼梯下方——那里有一扇门，门上写着「放弃」。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走向那扇门', next: 'door_give_up' },
            { text: '继续寻找', next: 'kafka_loop', trait: 'obsessive' }
        ]
    },

    door_give_up: {
        scene: 'kafkaCorridor',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向那扇门。门没有锁，轻轻一推就开了。'
            },
            {
                speaker: 'narrator',
                text: '门后是一个普通的房间。X 坐在一张椅子上，正在阅读一本书。'
            },
            {
                speaker: 'narrator',
                text: '她抬起头，看着你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你就是设计迷宫的人？」', next: 'x_the_designer' }
        ]
    },

    x_the_designer: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '设计迷宫？不。我只是第一个被困在这里的人。'
            },
            {
                speaker: 'x',
                text: '我花了很长时间才明白：迷宫不是为了困住我们而存在的。迷宫是因为我们相信它存在而存在的。'
            },
            {
                speaker: 'x',
                text: '你一直在寻找我。但我也在寻找你。我们都在寻找对方，却在这个没有尽头的走廊里错过了无数次。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们一起出去」', next: 'ending_escape_together' },
            { text: '「我要留下来」', next: 'ending_stay_in_maze' }
        ]
    },

    ending_escape_together: {
        scene: 'entrance',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '逃离迷宫', desc: '你终于和 X 一起走出了卡夫卡迷宫。但你们都知道，迷宫永远在那里，等待着下一个寻找者。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你们一起走出迷宫。但眼前的不是阳光，而是……霓虹。'
            },
            {
                speaker: 'narrator',
                text: '雨夜。高楼。飞行车辆。这是一个完全不同的世界。'
            },
            {
                speaker: 'x',
                text: '这是……下一个地方。我感觉到，这里有我们要找的答案。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「走吧」', next: 'blade_runner_entrance' }
        ]
    },

    ending_stay_in_maze: {
        scene: 'endlessStairs',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '留在迷宫', desc: '你选择留在卡夫卡迷宫里。也许在这里，寻找本身就是意义。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: 'X 看着你，眼中有一丝悲伤，但也有理解。'
            },
            {
                speaker: 'x',
                text: '那么，我们一起走吧。也许有一天，我们会找到那扇门真正的钥匙。'
            }
        ]
    },

    ending_denial: {
        scene: 'endlessStairs',
        characters: [],
        ending: { title: '否认', desc: '你拒绝接受真相，继续在迷宫中徒劳地寻找。这是你的选择，也是你的命运。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你转身离开黑影，继续在楼梯上行走。向上，向下，没有区别。'
            },
            {
                speaker: 'narrator',
                text: '你永远不会知道，X 就在你身后，看着你渐行渐远。'
            }
        ]
    },

    // 缺失场景补充
    knock_nearby_door: {
        scene: 'kafkaCorridor',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你敲开一扇门。门后是一个和你刚才走过的一模一样的走廊。'
            },
            {
                speaker: 'narrator',
                text: '你走进去，身后的门无声地关上。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续走', next: 'kafka_loop' }
        ]
    },

    find_others: {
        scene: 'waitingRoom',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走进等候室。里面坐满了人，每个人都面无表情，手中拿着号码牌。'
            },
            {
                speaker: 'narrator',
                text: '你试图和旁边的人说话，但他只是茫然地看着你，然后低下头。',
                showChoices: true
            }
        ],
        choices: [
            { text: '取号等待', next: 'office_3' }
        ]
    },

    gatekeeper_rights: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '权利？你需要先证明你有权利。证明需要文件，文件需要审批，审批需要时间。'
            },
            {
                speaker: 'narrator',
                text: '他的语气没有任何变化，像是在背诵一段背过无数遍的话。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「什么文件？」', next: 'gatekeeper_documents' }
        ]
    },

    gatekeeper_documents: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '文件清单在 3 号办公室。但 3 号办公室今天不办公。'
            },
            {
                speaker: 'narrator',
                text: '他指向走廊。你回头看，所有的门都关着。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「什么时候办公？」', next: 'gatekeeper_when' }
        ]
    },

    gatekeeper_when: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '办公时间？这不在我的职权范围内。'
            },
            {
                speaker: 'narrator',
                text: '他不再说话，只是站在那里，像一尊雕像。',
                showChoices: true
            }
        ],
        choices: [
            { text: '离开', next: 'kafka_loop' }
        ]
    },

    gatekeeper_x_inside: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: 'X？我不认识这个名字。这里没有叫 X 的人。'
            },
            {
                speaker: 'narrator',
                text: '他的眼神空洞，像是在看着你又像是看穿了你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「让我进去确认」', next: 'gatekeeper_why' }
        ]
    },

    bureaucrat_x: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: 'X？我们需要查询系统。系统今天维护。'
            },
            {
                speaker: 'narrator',
                text: '他递给你另一张号码牌：8473。',
                showChoices: true
            }
        ],
        choices: [
            { text: '等待', next: 'bureaucrat_wait' }
        ]
    },

    bureaucrat_cut: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '插队？这是严重违规。你需要填写《插队申请表》。'
            },
            {
                speaker: 'narrator',
                text: '他递给你一叠更厚的表格。',
                showChoices: true
            }
        ],
        choices: [
            { text: '填写表格', next: 'fill_forms' }
        ]
    },

    fill_forms: {
        scene: 'waitingRoom',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你开始填写表格。第 1 页：姓名。第 2 页：目的。第 3 页……'
            },
            {
                speaker: 'narrator',
                text: '你填了很久。当你填完最后一页时，你发现第一页已经泛黄了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '提交表格', next: 'submit_forms' }
        ]
    },

    submit_forms: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '表格已收到。审批需要 30 个工作日。'
            },
            {
                speaker: 'narrator',
                text: '他收下表格，然后指向等候室的椅子。',
                showChoices: true
            }
        ],
        choices: [
            { text: '等待', next: 'ending_wait_forever' },
            { text: '离开', next: 'kafka_loop' }
        ]
    },

    ending_wait_forever: {
        scene: 'waitingRoom',
        characters: [],
        ending: { title: '永恒等待', desc: '你选择在等候室等待。时间在这里失去了意义，你成为了这个官僚机器的一部分。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你坐下。周围的人都和你一样，面无表情，等待着永远不会到来的号码。'
            },
            {
                speaker: 'narrator',
                text: '你忘记了为什么要等待，只记得等待本身。'
            }
        ]
    },

    bureaucrat_confusion: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '这里是 3 号办公室。但你要找的 7 号办公室在别处。'
            },
            {
                speaker: 'narrator',
                text: '「别处」是哪里？他没有回答。',
                showChoices: true
            }
        ],
        choices: [
            { text: '离开', next: 'kafka_loop' }
        ]
    },

    stairs_up: {
        scene: 'endlessStairs',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你向上走。十层，二十层，一百层。每一层都一样。'
            },
            {
                speaker: 'narrator',
                text: '你停下来喘气。当你回头看，发现你只走了三层。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续', next: 'kafka_loop' }
        ]
    },

    stairs_down: {
        scene: 'endlessStairs',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你向下走。楼梯似乎没有尽头。'
            },
            {
                speaker: 'narrator',
                text: '你停下来，发现自己在同一层。墙上的标记显示：3F。你从哪里开始，就回到了哪里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续', next: 'kafka_loop' }
        ]
    },

    watcher_run: {
        scene: 'endlessStairs',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你转身逃跑。你跑上楼梯，跑下楼梯，穿过走廊。'
            },
            {
                speaker: 'narrator',
                text: '当你停下来喘气时，你发现黑影就在你面前。'
            },
            {
                speaker: 'narrator',
                text: '「你无法逃离，」黑影说，「因为你无处可去。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '面对他', next: 'investigate_shadow' }
        ]
    },

    watcher_watching: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '监视？不。我只是记录。每一个进入迷宫的人都会被记录。'
            },
            {
                speaker: 'watcher',
                text: '你是第 8472 个。前面有 8471 个。他们都在某个地方，继续寻找。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「他们在哪里？」', next: 'watcher_where_others' }
        ]
    },

    watcher_where_others: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '他们？他们就在你身边。在等候室，在走廊，在楼梯上。'
            },
            {
                speaker: 'narrator',
                text: '你环顾四周。空无一人。但你感觉到，无数双眼睛正在看着你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我要怎么找到 X？」', next: 'watcher_where_x' }
        ]
    },

    watcher_x_inside: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: 'X 在门后？也许。但那扇门从未被打开过。'
            },
            {
                speaker: 'watcher',
                text: '守门人有一大串钥匙，但没有一把能打开那扇门。你知道为什么吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「为什么？」', next: 'watcher_why_locked' }
        ]
    },

    watcher_why_locked: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '因为那扇门没有锁。它只是一扇门，推一下就会开。'
            },
            {
                speaker: 'watcher',
                text: '但从来没有人试过。他们都以为需要钥匙，需要审批，需要等待。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你在骗我」', next: 'ending_denial' },
            { text: '回去推门', next: 'push_the_door' }
        ]
    },

    push_the_door: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你回到大门前。守门人还在那里。'
            },
            {
                speaker: 'gatekeeper',
                text: '你不能——'
            },
            {
                speaker: 'narrator',
                text: '你无视他，直接推向大门。门开了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走进去', next: 'door_give_up' }
        ]
    },

    // ================================================================
    // 卡夫卡迷宫人物支线结局
    // ================================================================

    // 守门人支线：他其实也想进去
    gatekeeper_secret: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你注意到守门人的眼神。他在看大门的时候，有一种……渴望。'
            },
            {
                speaker: 'narrator',
                text: '「你在这里多久了？」你问。'
            },
            {
                speaker: 'gatekeeper',
                text: '……我不知道。'
            },
            {
                speaker: 'gatekeeper',
                text: '「我想进去，」他突然说，声音低得几乎听不见，「但我不能。我是守门人。守门人不能进去。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你可以跟我一起进去」', next: 'gatekeeper_join' },
            { text: '「为什么守门人不能进去？」', next: 'gatekeeper_why_cannot' }
        ]
    },

    gatekeeper_join: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '跟你一起？这……这违反了规定。'
            },
            {
                speaker: 'narrator',
                text: '他的手在颤抖，钥匙串发出轻微的碰撞声。'
            },
            {
                speaker: 'gatekeeper',
                text: '但也许……规定就是用来违反的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '推开门，一起进去', next: 'ending_gatekeeper_freedom' }
        ]
    },

    ending_gatekeeper_freedom: {
        scene: 'entrance',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        ending: { title: '守门人的自由', desc: '守门人终于离开了他的岗位。他不知道门后是什么，但至少，他不再被困在原地。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你们一起走出大门。守门人回头看了一眼他守了一辈子的地方。'
            },
            {
                speaker: 'gatekeeper',
                text: '谢谢你。我不知道外面有什么……但我终于可以去看看了。'
            }
        ]
    },

    gatekeeper_why_cannot: {
        scene: 'kafkaCorridor',
        characters: [{ id: 'gatekeeper', position: 'center' }],
        dialogues: [
            {
                speaker: 'gatekeeper',
                text: '因为……如果守门人进去了，就没有人守门了。'
            },
            {
                speaker: 'narrator',
                text: '他说完这句话，愣住了。'
            },
            {
                speaker: 'gatekeeper',
                text: '但这扇门……从来没有人进去过。那我守的是什么？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你守的是你自己的牢笼」', next: 'ending_gatekeeper_realization' }
        ]
    },

    ending_gatekeeper_realization: {
        scene: 'kafkaCorridor',
        characters: [],
        ending: { title: '顿悟', desc: '守门人意识到他守的不是门，而是他自己。但他选择继续守下去——因为这是他唯一知道的存在方式。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '守门人沉默了很久。'
            },
            {
                speaker: 'gatekeeper',
                text: '你说得对。但我……我已经不会做别的事了。'
            },
            {
                speaker: 'narrator',
                text: '他重新站直，恢复了那副面无表情的样子。'
            }
        ]
    },

    // 官僚支线：他其实有脸，只是被系统抹去了
    bureaucrat_face: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你盯着他看。在阴影中，你似乎看到了什么——一张脸，一张普通人的脸，有皱纹，有疲惫。'
            },
            {
                speaker: 'narrator',
                text: '「你有脸，」你说。'
            },
            {
                speaker: 'bureaucrat',
                text: '……曾经有的。'
            },
            {
                speaker: 'bureaucrat',
                text: '「在这个系统里，有脸的人会被消耗殆尽。所以我学会了隐藏。没有脸，就没有人能看到你的疲惫。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你可以离开这个系统」', next: 'bureaucrat_leave' },
            { text: '「你叫什么名字？」', next: 'bureaucrat_name' }
        ]
    },

    bureaucrat_leave: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '离开？去哪里？外面的世界……我已经不记得了。'
            },
            {
                speaker: 'narrator',
                text: '他的声音里有一丝恐惧。'
            },
            {
                speaker: 'bureaucrat',
                text: '而且，如果我走了，谁来处理这些表格？谁来叫号？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「也许不需要有人做这些」', next: 'ending_bureaucrat_freedom' },
            { text: '「你可以找到新的事情做」', next: 'ending_bureaucrat_hope' }
        ]
    },

    ending_bureaucrat_freedom: {
        scene: 'waitingRoom',
        characters: [],
        ending: { title: '系统的崩溃', desc: '官僚离开了他的岗位。等候室里的人渐渐散去，号码牌掉落在地上。系统终于停止了运转。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '他站起来，摘下那顶看不见的帽子，走向出口。'
            },
            {
                speaker: 'narrator',
                text: '在他身后，显示屏熄灭了。正在办理：——。'
            }
        ]
    },

    ending_bureaucrat_hope: {
        scene: 'entrance',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        ending: { title: '新的开始', desc: '官僚和你一起离开了迷宫。他不知道未来会怎样，但至少，他有了自己的名字。' },
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '我叫……我叫卡尔。'
            },
            {
                speaker: 'narrator',
                text: '他说出这个名字的时候，阴影从他脸上褪去。你看到了一个疲惫但真实的人。'
            }
        ]
    },

    bureaucrat_name: {
        scene: 'waitingRoom',
        characters: [{ id: 'bureaucrat', position: 'center' }],
        dialogues: [
            {
                speaker: 'bureaucrat',
                text: '名字？我……'
            },
            {
                speaker: 'narrator',
                text: '他愣住了，像是在回忆一件很久远的事。'
            },
            {
                speaker: 'bureaucrat',
                text: '我叫……卡尔。我已经三十年没有说出这个名字了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「卡尔，我们一起走吧」', next: 'ending_bureaucrat_hope' }
        ]
    },

    // 监视者支线：他其实是所有被困者的集合
    watcher_truth: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '你想知道我是谁？'
            },
            {
                speaker: 'narrator',
                text: '黑影的眼睛闪烁着，像是有很多双眼睛在同时眨眼。'
            },
            {
                speaker: 'watcher',
                text: '我是所有被困在这里的人。每一个放弃寻找的人，每一个选择等待的人，每一个填写表格直到忘记自己是谁的人……他们都成为了我。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你会消失吗？」', next: 'watcher_disappear' },
            { text: '「我可以帮你解脱」', next: 'watcher_release' }
        ]
    },

    watcher_disappear: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '消失？不。只要还有人被困在这里，我就存在。'
            },
            {
                speaker: 'watcher',
                text: '但也许……你可以让我变小一点。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「怎么做到？」', next: 'ending_watcher_diminish' }
        ]
    },

    ending_watcher_diminish: {
        scene: 'endlessStairs',
        characters: [],
        ending: { title: '减少一个', desc: '你离开了迷宫。监视者少了一个组成部分——但还有 8471 个。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走出迷宫的那一刻，感觉到背后的视线少了一道。'
            },
            {
                speaker: 'narrator',
                text: '但这只是开始。还有很多人在迷宫里，等待着你，或者等待成为监视者的一部分。'
            }
        ]
    },

    watcher_release: {
        scene: 'endlessStairs',
        characters: [{ id: 'watcher', position: 'center' }],
        dialogues: [
            {
                speaker: 'watcher',
                text: '解脱？你是说……让他们自由？'
            },
            {
                speaker: 'narrator',
                text: '黑影颤抖了一下，像是很多声音在同时叹息。'
            },
            {
                speaker: 'watcher',
                text: '也许……是时候了。我已经记录了太久。也许记录的意义，就是有一天可以停止记录。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「让他们走吧」', next: 'ending_watcher_release' }
        ]
    },

    ending_watcher_release: {
        scene: 'entrance',
        characters: [],
        ending: { title: '释放', desc: '监视者释放了所有被困者的灵魂。迷宫依然存在，但它是空的——直到下一个寻找者到来。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你感觉到一阵风吹过。那是 8472 个灵魂同时呼出的气息。'
            },
            {
                speaker: 'narrator',
                text: '迷宫的墙壁依然矗立，但它们现在是空的。等待被新的故事填满。'
            }
        ]
    }
};

// ================================================================
// 引擎核心
// ================================================================
const Engine = {
    elements: {},
    
    init() {
        try {
            // 初始化状态标志
            this.panelOpen = false;
            this.clickInProgress = false;
            this.sceneLoading = false;
            
            // 缓存 DOM 元素
            this.elements = {
                sceneBg: document.getElementById('sceneBg'),
                sceneOverlay: document.getElementById('sceneOverlay'),
                charLeft: document.getElementById('charLeft'),
                charCenter: document.getElementById('charCenter'),
                charRight: document.getElementById('charRight'),
                speakerName: document.getElementById('speakerName'),
                dialogueContent: document.getElementById('dialogueContent'),
                choicesContainer: document.getElementById('choicesContainer'),
                clickContinue: document.getElementById('clickContinue'),
                dayStatus: document.getElementById('dayStatus'),
                dialogueBox: document.getElementById('dialogueBox'),
                characterLayer: document.getElementById('characterLayer')
            };
            
            // 初始化特效引擎
            if (typeof effectsEngine !== 'undefined') {
                effectsEngine.init();
            }
            
            // 绑定事件
            this.bindEvents();
            
            // 显示标题画面，不直接开始游戏
            this.showTitleScreen();
        } catch (error) {
            console.error('引擎初始化失败:', error);
            alert('游戏初始化失败，请刷新页面重试。');
        }
    },

    // ================================================================
    // 标题画面
    // ================================================================
    showTitleScreen() {
        const titleScreen = document.getElementById('titleScreen');
        const gameContainer = document.querySelector('.game-container');
        titleScreen.classList.remove('fade-out');
        gameContainer.style.opacity = '0';
        gameContainer.style.pointerEvents = 'none';
        gameContainer.setAttribute('aria-hidden', 'true');

        // 不把内部脚本节点数伪装成玩家可体验的独立结局数量。
        const endingCount = document.getElementById('endingCount');
        if (endingCount) {
            endingCount.textContent = '多重结局';
        }
        
        // 标题粒子
        this.startTitleParticles();
        
        // 继续按钮：仅在有存档时显示
        let hasSave = false;
        for (let i = 0; i < 3; i++) { if (localStorage.getItem(`vn_auto_save_${i}`)) hasSave = true; }
        for (let i = 1; i <= 10; i++) { if (localStorage.getItem(`vn_save_${i}`)) hasSave = true; }
        document.getElementById('btnContinue').style.display = hasSave ? '' : 'none';
        
        // 新游戏
        document.getElementById('btnNewGame').onclick = () => {
            this.startGame(false);
        };
        
        // 继续游戏
        document.getElementById('btnContinue').onclick = () => {
            this.startGame(true);
        };
        
        // 设置
        document.getElementById('btnSettings').onclick = () => {
            this.showSettings();
        };
    },

    startTitleParticles() {
        const canvas = document.getElementById('titleParticles');
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
        
        const animate = () => {
            if (document.getElementById('titleScreen').classList.contains('fade-out')) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(196,160,96,${p.opacity})`;
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
    },

    startGame(loadSave) {
        const titleScreen = document.getElementById('titleScreen');
        const gameContainer = document.querySelector('.game-container');
        
        titleScreen.classList.add('fade-out');
        gameContainer.style.opacity = '1';
        gameContainer.style.pointerEvents = 'auto';
        gameContainer.removeAttribute('aria-hidden');
        
        if (loadSave) {
            // 加载最新的存档（自动存档或手动存档）
            let latest = null;
            let latestTime = 0;
            for (let i = 0; i < 3; i++) {
                const d = localStorage.getItem(`vn_auto_save_${i}`);
                if (d) { try { const p = JSON.parse(d); if (p.timestamp > latestTime) { latest = p; latestTime = p.timestamp; } } catch(e) {} }
            }
            for (let i = 1; i <= 10; i++) {
                const d = localStorage.getItem(`vn_save_${i}`);
                if (d) { try { const p = JSON.parse(d); if (p.timestamp > latestTime) { latest = p; latestTime = p.timestamp; } } catch(e) {} }
            }
            if (latest) {
                this._applySaveData(latest);
                this.resumeSavedScene();
            } else {
                this.loadScene('start');
            }
        } else {
            // 新游戏：完全重置游戏状态
            Object.assign(gameState, _defaultGameState());
            // NG+：如果之前完成过终章，保留 truth_seeker 特质
            if (localStorage.getItem('vn_ng_plus') === 'true') {
                gameState.traits.push('truth_seeker');
                gameState._ngPlus = true;
            }
            this.loadScene('start');
        }
    },

    // ================================================================
    // 成就系统
    // ================================================================
    _achievements: {},
    _achievementDefinitions: {
        first_step: { name: '初次踏入', desc: '进入第一个世界', icon: '🚪' },
        clue_collector: { name: '碎片收集者', desc: '收集5条线索', icon: '🧩' },
        clue_master: { name: '碎片大师', desc: '收集10条线索', icon: '✨' },
        world_explorer: { name: '世界旅人', desc: '完成3个世界', icon: '🗺️' },
        world_veteran: { name: '世界老兵', desc: '完成6个世界', icon: '🌍' },
        all_worlds: { name: '十二门全开', desc: '完成所有12个世界', icon: '🚪' },
        sanity_lost: { name: '深渊凝视', desc: '理智值降至0', icon: '👁️' },
        truth_seeker: { name: '真相大白', desc: '完成终章', icon: '⭐' },
        trait_collector: { name: '多元人格', desc: '获得5个特质', icon: '🎭' },
        day_counter: { name: '时光旅人', desc: '度过10天', icon: '⏳' },
        mirror_truth: { name: '镜中真相', desc: '发现镜中之我——X的隐藏世界', icon: '🪞' }
    },

    checkAchievements() {
        const defs = this._achievementDefinitions;
        const completed = gameState.completedWorlds || [];
        const clues = countValidFragments();
        const traits = gameState.traits || [];
        
        // 初次踏入
        if (!this._achievements.first_step && completed.length >= 1) {
            this._achievements.first_step = true;
            this.showAchievement(defs.first_step);
        }
        // 碎片收集者
        if (!this._achievements.clue_collector && clues >= 5) {
            this._achievements.clue_collector = true;
            this.showAchievement(defs.clue_collector);
        }
        // 碎片大师
        if (!this._achievements.clue_master && clues >= 10) {
            this._achievements.clue_master = true;
            this.showAchievement(defs.clue_master);
        }
        // 世界旅人
        if (!this._achievements.world_explorer && completed.length >= 3) {
            this._achievements.world_explorer = true;
            this.showAchievement(defs.world_explorer);
        }
        // 世界老兵
        if (!this._achievements.world_veteran && completed.length >= 6) {
            this._achievements.world_veteran = true;
            this.showAchievement(defs.world_veteran);
        }
        // 十二门全开
        if (!this._achievements.all_worlds && completed.length >= 12) {
            this._achievements.all_worlds = true;
            this.showAchievement(defs.all_worlds);
        }
        // 深渊凝视
        if (!this._achievements.sanity_lost && gameState.sanity <= 0) {
            this._achievements.sanity_lost = true;
            this.showAchievement(defs.sanity_lost);
        }
        // 特质收集
        if (!this._achievements.trait_collector && traits.length >= 5) {
            this._achievements.trait_collector = true;
            this.showAchievement(defs.trait_collector);
        }
        // 时光旅人
        if (!this._achievements.day_counter && gameState.day >= 10) {
            this._achievements.day_counter = true;
            this.showAchievement(defs.day_counter);
        }
        // 镜中真相
        if (!this._achievements.mirror_truth && completed.includes('x_hidden')) {
            this._achievements.mirror_truth = true;
            this.showAchievement(defs.mirror_truth);
        }
    },

    showAchievement(def) {
        const toast = document.getElementById('achievementToast');
        document.getElementById('achievementIcon').textContent = def.icon;
        document.getElementById('achievementName').textContent = def.name;
        document.getElementById('achievementDesc').textContent = def.desc;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    },

    // ================================================================
    // 设置面板
    // ================================================================
    showSettings() {
        const panel = document.getElementById('settingsPanel');
        this.panelOpen = true;
        
        const toggle = document.getElementById('toggleTyping');
        const typingOn = gameState.settings?.typingEffect !== false;
        toggle.textContent = typingOn ? '开' : '关';
        toggle.className = 'settings-toggle' + (typingOn ? ' on' : '');
        
        document.getElementById('sliderSpeed').value = gameState.settings?.typingSpeed || 50;
        document.getElementById('speedValue').textContent = (gameState.settings?.typingSpeed || 50) + 'ms';
        
        document.getElementById('sliderMusic').value = Math.round((gameState.settings?.musicVolume || 0.5) * 100);
        document.getElementById('musicValue').textContent = Math.round((gameState.settings?.musicVolume || 0.5) * 100) + '%';
        
        toggle.onclick = () => {
            gameState.settings.typingEffect = !gameState.settings.typingEffect;
            toggle.textContent = gameState.settings.typingEffect ? '开' : '关';
            toggle.className = 'settings-toggle' + (gameState.settings.typingEffect ? ' on' : '');
            this.autoSave();
        };
        
        document.getElementById('sliderSpeed').oninput = (e) => {
            gameState.settings.typingSpeed = parseInt(e.target.value);
            document.getElementById('speedValue').textContent = e.target.value + 'ms';
            this.autoSave();
        };
        
        document.getElementById('sliderMusic').oninput = (e) => {
            gameState.settings.musicVolume = parseInt(e.target.value) / 100;
            document.getElementById('musicValue').textContent = e.target.value + '%';
            if (typeof musicEngine !== 'undefined' && musicEngine.setVolume) {
                musicEngine.setVolume(gameState.settings.musicVolume);
            }
            this.autoSave();
        };
        
        document.getElementById('settingsClose').onclick = () => {
            panel.classList.remove('visible');
            this.panelOpen = false;
        };
        panel.classList.add('visible');
    },

    // ================================================================
    // 片尾字幕
    // ================================================================
    rollCredits() {
        // 解锁 NG+
        localStorage.setItem('vn_ng_plus', 'true');
        
        const screen = document.getElementById('creditsScreen');
        const scroll = document.getElementById('creditsScroll');
        
        // 填充世界名
        const worldNames = {
            blade_runner: '银翼杀手', cthulhu: '疯狂之城', alice: '梦境世界',
            middle_earth: '中土世界', wuxia: '江湖世界', cowboy_bebop: '太空边境',
            matrix: '矩阵世界', got: '权力游戏', spirited: '神隐世界',
            wake: '守灵之夜', watchmen: '末日时钟', maus: '记忆深渊'
        };
        const completed = (gameState.completedWorlds || []).map(w => worldNames[w] || w);
        document.getElementById('creditsWorlds').textContent = completed.length > 0 
            ? completed.join(' · ') 
            : '未曾探索';
        
        // 填充玩家统计
        const stats = document.getElementById('creditsPlayerStats');
        stats.innerHTML = `
            <div class="credits-heading">你的旅程</div>
            <div class="credits-item">探索世界: ${completed.length}/12</div>
            <div class="credits-item">收集碎片: ${countValidFragments()}</div>
            <div class="credits-item">获得特质: ${(gameState.traits || []).length}</div>
            <div class="credits-item">度过天数: ${gameState.day}</div>
            <div class="credits-item">解锁成就: ${Object.keys(this._achievements).length}</div>
        `;
        
        // 重置动画
        scroll.style.animation = 'none';
        scroll.offsetHeight;
        scroll.style.animation = 'creditsRoll 35s linear forwards';
        
        screen.classList.add('visible');
        
        // 跳过
        document.getElementById('creditsSkip').onclick = () => {
            screen.classList.remove('visible');
        };
        
        // 35秒后自动关闭
        this._creditsTimer = setTimeout(() => {
            screen.classList.remove('visible');
        }, 36000);
    },
    
    bindEvents() {
        // 点击继续
        this.clickInProgress = false;
        this.panelOpen = false;
        this.elements.dialogueBox.addEventListener('click', (e) => {
            if (e.target.classList.contains('choice-btn')) return;
            if (this.panelOpen) return; // 面板打开时阻止对话点击
            // 打字机进行中 → 点击跳过，立即显示完整文本
            if (!gameState.dialogueComplete) {
                this.finishTyping();
                return;
            }
            if (this.clickInProgress) return; // 防止快速点击
            
            const script = SCRIPT[gameState.currentScene];
            if (!script) {
                console.error('bindEvents click: SCRIPT[' + gameState.currentScene + '] is undefined');
                return;
            }
            const dialogues = script.getDialogues ? script.getDialogues() : script.dialogues;
            
            if (gameState.currentDialogue < dialogues.length - 1) {
                this.clickInProgress = true;
                gameState.currentDialogue++;
                this.showDialogue(dialogues[gameState.currentDialogue]);
                // 短暂延迟后允许下一次点击
                setTimeout(() => {
                    this.clickInProgress = false;
                }, 100);
            }
        });
        
        // 人物点击
        ['charLeft', 'charCenter', 'charRight'].forEach(pos => {
            this.elements[pos].addEventListener('click', () => {
                this.onCharacterClick(pos);
            });
        });
        
        // 角色层点击（委托到对话系统）
        if (this.elements.characterLayer) {
            this.elements.characterLayer.addEventListener('click', (e) => {
                // 不阻止角色精灵的点击事件
                if (e.target.closest('.character')) return;
                if (this.panelOpen) return;
                // 打字机进行中 → 跳过
                if (!gameState.dialogueComplete) {
                    this.finishTyping();
                    return;
                }
                if (this.clickInProgress) return;
                this.elements.dialogueBox.click();
            });
        }
        
        // 菜单按钮
        document.getElementById('saveBtn').addEventListener('click', () => this.showSavePanel('save'));
        document.getElementById('loadBtn').addEventListener('click', () => this.showSavePanel('load'));
        document.getElementById('panelClose').addEventListener('click', () => {
            document.getElementById('savePanel').classList.remove('visible');
            this.panelOpen = false;
        });
        document.getElementById('audioBtn').addEventListener('click', () => {
            const btn = document.getElementById('audioBtn');
            if (typeof musicEngine !== 'undefined') {
                const nowPlaying = musicEngine.toggle();
                btn.textContent = nowPlaying ? '🔇' : '🔊';
            } else {
                btn.textContent = btn.textContent === '🔊' ? '🔇' : '🔊';
            }
        });
        
        // 任务日志按钮
        document.getElementById('questBtn').addEventListener('click', () => this.showQuestPanel());
        document.getElementById('logBtn').addEventListener('click', () => this.showDialogueLog());
        document.getElementById('logClose').addEventListener('click', () => {
            document.getElementById('logPanel').classList.remove('visible');
            this.panelOpen = false;
        });
        document.getElementById('questClose').addEventListener('click', () => {
            document.getElementById('questPanel').classList.remove('visible');
            this.panelOpen = false;
        });

        // 由 GPT-5.6 根据已发生的旅程生成受控的个性化尾声。
        document.getElementById('aiEpilogueBtn').addEventListener('click', () => {
            this.generateAIEpilogue();
        });
        
        // 返回阿莱夫继续探索
        document.getElementById('continueBtn').addEventListener('click', () => {
            document.getElementById('endingScreen').classList.remove('visible');
            // 记录已完成的世界
            if (!gameState.traits.includes('world_traveler')) {
                gameState.traits.push('world_traveler');
            }
            // 只有无法解析到世界的 final/ending 场景才是终章结局。
            // 世界结算也可能使用 ending_* ID，必须返回阿莱夫继续记录进度。
            const sceneId = gameState.currentScene || '';
            const worldId = this.resolveWorldForEnding(sceneId, gameState._lastScene);
            const isFinalEnding = !worldId && (sceneId.startsWith('final_') || sceneId.startsWith('ending_'));
            if (isFinalEnding) {
                this._achievements.truth_seeker = true;
                this.showAchievement(this._achievementDefinitions.truth_seeker);
                this.rollCredits();
            } else {
                this.loadScene('aleph_return');
            }
        });
        
        // 回到存档点
        document.getElementById('loadSaveBtn').addEventListener('click', () => {
            if (this.loadAutoSave()) {
                console.log('已加载自动存档');
            } else {
                alert('没有找到存档点');
            }
        });
        
        // 重新开始
        document.getElementById('restartBtn').addEventListener('click', () => {
            const confirmed = typeof window.confirm === 'function'
                ? window.confirm('重新开始会清除本次旅程的自动存档，但保留手动存档和 NG+。确定要重新开始吗？')
                : true;
            if (!confirmed) return;
            const endingScreen = document.getElementById('endingScreen');
            endingScreen.classList.remove('visible');
            endingScreen.style.removeProperty('opacity');
            endingScreen.style.removeProperty('pointer-events');
            endingScreen.style.removeProperty('display');
            // 清除本次旅程的自动存档；手动存档和 NG+ 进度保留。
            for (let i = 0; i < 3; i++) localStorage.removeItem(`vn_auto_save_${i}`);
            // 重置按钮显示
            const loadSaveBtn = document.getElementById('loadSaveBtn');
            if (loadSaveBtn) loadSaveBtn.style.display = 'none';
            // 完全重置游戏状态
            Object.assign(gameState, _defaultGameState());
            delete gameState._autoSaveSlot;
            delete gameState._lastScene;
            delete gameState._activeWorld;
            delete gameState._endingWorldId;
            delete gameState._ngPlus;
            this.loadScene('start');
        });
    },
    
    loadScene(sceneId) {
        // 防止重复加载
        if (this.sceneLoading) return;
        this.sceneLoading = true;

        // 场景切换时先隐藏旧场景的“点击继续”提示。
        if (this.elements.clickContinue) {
            this.elements.clickContinue.classList.add('hidden');
        }

        // 转场开始时清理旧选项，避免旧按钮在新场景出现前残留。
        if (this.elements.choicesContainer) {
            this.elements.choicesContainer.classList.add('hidden');
            this.elements.choicesContainer.innerHTML = '';
        }
        
        const script = SCRIPT[sceneId];
        if (!script) {
            console.error('Scene not found:', sceneId);
            this.sceneLoading = false;
            return;
        }
        
        // 清除之前的打字机定时器
        if (this.typingTimer) {
            clearTimeout(this.typingTimer);
        }
        
        // 过渡动画
        this.elements.sceneOverlay.classList.add('active');
        
        setTimeout(() => {
            // 更新状态 - 只在进入阿莱夫世界时增加天数，序章章节不增加
            const storyScenes = ['enter_infinite_library', 'enter_kafka_maze'];
            const worldScenes = ['cthulhu_entrance', 'alice_entrance', 'middleearth_entrance', 
                'wuxia_entrance', 'bebop_entrance', 'matrix_entrance', 'got_entrance', 
                'spirited_entrance', 'wake_entrance', 'watchmen_entrance', 'maus_entrance', 
                'blade_runner_entrance', 'x_hidden_entrance'];
            if (worldScenes.includes(sceneId)) {
                gameState.day++;
            }
            // 追踪上一个场景（用于 aleph_return 自动完成世界）
            gameState._lastScene = gameState.currentScene;
            gameState.currentScene = sceneId;
            const sceneWorld = typeof inferWorldFromScene === 'function'
                ? inferWorldFromScene(sceneId)
                : null;
            if (sceneWorld) {
                gameState._activeWorld = sceneWorld;
                // 一旦重新进入任意世界，旧世界结算上下文不再适用。
                delete gameState._endingWorldId;
            }
            gameState.currentDialogue = 0;
            gameState.dialogueComplete = false;
            
            // 更新场景背景
            this.elements.sceneBg.style.backgroundImage = `url('${ASSETS.scenes[script.scene]}')`;
            
            // 背景变体（时间/天气）
            ['variant-dusk', 'variant-night', 'variant-dawn', 'variant-fog', 'variant-storm'].forEach(v => {
                this.elements.sceneBg.classList.remove(v);
            });
            if (script.bgVariant) {
                this.elements.sceneBg.classList.add('variant-' + script.bgVariant);
            }
            
            // 离开阿莱夫时隐藏路径可视化
            if (script.scene !== 'aleph') {
                const pathCanvas = document.getElementById('pathCanvas');
                if (pathCanvas) pathCanvas.classList.add('hidden');
            }
            
            // 切换场景音乐
            if (typeof musicEngine !== 'undefined' && musicEngine.isPlaying) {
                musicEngine.playForScene(script.scene);
            }
            
            // 切换场景粒子特效
            if (typeof effectsEngine !== 'undefined') {
                effectsEngine.startParticles(script.scene);
            }
            
            // 更新人物
            this.updateCharacters(script.characters || []);
            
            // 执行进入回调
            if (script.onEnter) script.onEnter();
            
            // 更新状态栏
            this.updateStatus();
            
            // 显示第一句对话
            setTimeout(() => {
                this.elements.sceneOverlay.classList.remove('active');
                let dialogues = script.getDialogues ? script.getDialogues() : script.dialogues;
                if (!dialogues || !Array.isArray(dialogues) || dialogues.length === 0) {
                    console.error('loadScene: dialogues is null, not an array, or empty for scene:', sceneId);
                    this.sceneLoading = false;
                    return;
                }
                // 拷贝数组避免污染原始数据
                dialogues = [...dialogues];
                
                // NG+ 序章增强对话
                if (gameState._ngPlus) {
                    if (sceneId === 'start') {
                        dialogues.unshift({
                            speaker: 'narrator',
                            text: '一阵强烈的既视感袭来。你曾经来过这里——不，不止一次。你完成过这趟旅程，找到了X，然后不知为何又回到了起点。花园的雾气在你面前散开，仿佛在迎接一位老朋友。你知道该去找谁，也知道每扇门后藏着什么。但这一次，你感觉到了一些不同——有些东西在等待着你，一些你之前从未注意到的细节。'
                        });
                    } else if (sceneId === 'meet_monk') {
                        dialogues.unshift({
                            speaker: 'monk',
                            text: '「你回来了。」档案员抬起头，扫帚停在半空。他的眼神中闪过一丝你从未见过的光芒——不是冷漠，不是睿智，而是一种深沉的、近乎怜悯的理解。「上一次你找到了X。但你又回到了这里。不是所有人都能做到这一点。告诉我——这一次，你在寻找什么？」'
                        });
                    }
                }
                
                this.showDialogue(dialogues[0]);
                this.sceneLoading = false;
            }, 300);
            
        }, 500);
    },
    
    updateCharacters(characters) {
        // 隐藏所有人物（带动画）
        ['left', 'center', 'right'].forEach(pos => {
            const el = this.elements['char' + pos.charAt(0).toUpperCase() + pos.slice(1)];
            if (el && !el.classList.contains('hidden')) {
                if (typeof effectsEngine !== 'undefined') {
                    effectsEngine.animateCharacterOut(el, pos);
                }
                setTimeout(() => {
                    el.classList.add('hidden');
                    el.classList.remove('speaking');
                }, 400);
            } else if (el) {
                el.classList.add('hidden');
                el.classList.remove('speaking');
            }
        });
        
        // 显示指定人物（带动画）
        setTimeout(() => {
            characters.forEach(char => {
                const pos = char.position;
                const el = this.elements['char' + pos.charAt(0).toUpperCase() + pos.slice(1)];
                if (el) {
                    el.src = ASSETS.characters[char.id];
                    el.dataset.charId = char.id;
                    el.classList.remove('hidden');
                    if (typeof effectsEngine !== 'undefined') {
                        effectsEngine.animateCharacterIn(el, pos);
                    }
                }
            });
        }, 450);
    },
    
    showDialogue(dialogue) {
        if (!dialogue || !dialogue.text) {
            console.error('showDialogue: invalid dialogue object:', dialogue);
            return;
        }
        // 记录对话历史
        if (!gameState.dialogueHistory) gameState.dialogueHistory = [];
        gameState.dialogueHistory.push({
            speaker: dialogue.speaker,
            text: dialogue.text,
            scene: gameState.currentScene
        });
        if (gameState.dialogueHistory.length > 200) {
            gameState.dialogueHistory.shift();
        }
        
        const script = SCRIPT[gameState.currentScene];
        const dialogues = script && (script.getDialogues ? script.getDialogues() : script.dialogues) || [];
        
        // 更新说话者
        const speakerEl = this.elements.speakerName;
        speakerEl.className = 'speaker-name ' + (dialogue.speaker || 'narrator');
        
        const speakerNames = SHARED_SPEAKER_NAMES;
        speakerEl.textContent = speakerNames[dialogue.speaker] || dialogue.speaker;
        
        // 高亮说话的人物
        ['charLeft', 'charCenter', 'charRight'].forEach(pos => {
            this.elements[pos].classList.remove('speaking');
        });
        
        if (dialogue.highlight) {
            const chars = script.characters || [];
            chars.forEach(char => {
                if (char.id === dialogue.highlight) {
                    const pos = 'char' + char.position.charAt(0).toUpperCase() + char.position.slice(1);
                    this.elements[pos].classList.add('speaking');
                }
            });
        }
        
        // 角色表情切换
        ['charLeft', 'charCenter', 'charRight'].forEach(pos => {
            ['mood-sad', 'mood-angry', 'mood-mysterious', 'mood-happy', 'mood-fear'].forEach(c => {
                this.elements[pos].classList.remove(c);
            });
        });
        if (dialogue.mood && dialogue.highlight) {
            const chars = script.characters || [];
            chars.forEach(char => {
                if (char.id === dialogue.highlight) {
                    const pos = 'char' + char.position.charAt(0).toUpperCase() + char.position.slice(1);
                    this.elements[pos].classList.add('mood-' + dialogue.mood);
                }
            });
        }
        
        // 打字机效果
        this.typeText(dialogue.text, () => {
            gameState.dialogueComplete = true;
            
            // 显示选择或继续提示
            if (dialogue.showChoices) {
                this.elements.clickContinue.classList.add('hidden');
                this.showChoices();
            } else if (gameState.currentDialogue < dialogues.length - 1) {
                this.elements.clickContinue.classList.remove('hidden');
            } else {
                this.elements.clickContinue.classList.add('hidden');
            }
        });
    },

    typeText(text, callback) {
        // 清除之前的打字机定时器
        if (this.typingTimer) {
            clearTimeout(this.typingTimer);
        }
        
        // 保存当前打字状态，供 finishTyping 使用
        this._typingText = text;
        this._typingCallback = callback;
        
        gameState.isTyping = true;
        this.elements.choicesContainer.classList.add('hidden');
        
        const el = this.elements.dialogueContent;
        
        // 打字机效果（可选，带音效）
        const useTypingEffect = gameState.settings?.typingEffect !== false; // 默认启用打字机效果
        
        if (useTypingEffect) {
            el.innerHTML = '';
            let i = 0;
            const typeChar = () => {
                if (i < text.length) {
                    el.innerHTML += text.charAt(i);
                    i++;
                    // 打字音效
                    if (typeof effectsEngine !== 'undefined' && i % 3 === 0) {
                        effectsEngine.playTypeSound();
                    }
                    this.typingTimer = setTimeout(typeChar, gameState.settings?.typingSpeed || 50);
                } else {
                    gameState.isTyping = false;
                    gameState.dialogueComplete = true;
                    if (callback) callback();
                }
            };
            typeChar();
        } else {
            // 直接显示完整文本（即时显示，无滚动）
            el.innerHTML = text;
            gameState.isTyping = false;
            gameState.dialogueComplete = true;
            if (callback) callback();
        }
    },
    
    // 跳过打字机效果，立即显示完整文本
    finishTyping() {
        if (!gameState.isTyping) return;
        if (this.typingTimer) {
            clearTimeout(this.typingTimer);
            this.typingTimer = null;
        }
        gameState.isTyping = false;
        gameState.dialogueComplete = true;
        
        // 立即显示完整文本
        if (this._typingText) {
            this.elements.dialogueContent.innerHTML = this._typingText;
        }
        
        // 触发回调（显示继续提示或选项）
        if (this._typingCallback) {
            const cb = this._typingCallback;
            this._typingText = null;
            this._typingCallback = null;
            cb();
        }
    },
    
    showChoices() {
        const script = SCRIPT[gameState.currentScene];
        if (!script) return;
        let choices = script.choices;
        
        if (typeof choices === 'function') {
            choices = choices();
        }
        
        if (!choices || !Array.isArray(choices)) {
            console.warn('showChoices: choices is null or not an array');
            return;
        }
        
        if (choices.length === 0) {
            console.warn('showChoices: choices is empty array for scene:', gameState.currentScene);
            return;
        }
        
        const container = this.elements.choicesContainer;
        container.innerHTML = '';
        container.classList.remove('hidden');
        container.setAttribute('aria-label', '剧情选择');
        
        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            
            // 构建选择文本 + 后果标签
            let btnHTML = choice.text;
            let costLabels = '';
            if (choice.cost) {
                if (choice.cost.sanity) costLabels += `<span class="cost-tag cost-sanity">理智-${choice.cost.sanity}</span>`;
                if (choice.cost.day) costLabels += `<span class="cost-tag cost-day">时间+${choice.cost.day}</span>`;
            }
            if (choice.trait) {
                costLabels += `<span class="cost-tag cost-trait">${TRAIT_NAMES[choice.trait] || choice.trait}</span>`;
            }
            if (choice.clue) {
                const clue = CLUE_DEFS[choice.clue];
                costLabels += `<span class="cost-tag cost-clue">${clue ? clue.title : choice.clue}</span>`;
            }
            if (costLabels) {
                btnHTML += `<span class="choice-costs">${costLabels}</span>`;
            }
            btn.innerHTML = btnHTML;
            btn.setAttribute('aria-label', choice.text);
            
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.onclick = () => this.makeChoice(choice);
            container.appendChild(btn);
        });

        // On small screens this makes the scroll affordance visible without adding
        // another competing control to the dialogue box.
        requestAnimationFrame(() => {
            container.classList.toggle('scrollable', container.scrollHeight > container.clientHeight + 1);
        });
    },

    getSceneChoices(script) {
        if (!script || !script.choices) return [];
        const choices = typeof script.choices === 'function' ? script.choices() : script.choices;
        return Array.isArray(choices) ? choices : [];
    },

    // 统一解析世界结算归属。优先使用结算场景，其次使用上一个场景，
    // 最后使用进入世界时记录的活动世界，覆盖所有旧章节和兼容格式。
    resolveWorldForEnding(sceneId = '', fallbackSceneId = '') {
        return inferWorldFromScene(sceneId)
            || inferWorldFromScene(fallbackSceneId)
            || gameState._endingWorldId
            || gameState._activeWorld
            || null;
    },

    markWorldCompleteForEnding(sceneId = '', fallbackSceneId = '') {
        const worldId = this.resolveWorldForEnding(sceneId, fallbackSceneId);
        if (worldId && typeof completeWorld === 'function') {
            const newlyCompleted = completeWorld(worldId);
            this.checkAchievements();
            return { worldId, newlyCompleted };
        }
        return { worldId: null, newlyCompleted: false };
    },

    recordChoice(choice) {
        if (!Array.isArray(gameState.choiceHistory)) gameState.choiceHistory = [];
        gameState.choiceHistory.push({
            scene: gameState.currentScene,
            choice: choice.text || '',
            next: choice.next || '',
            day: gameState.day,
            timestamp: Date.now()
        });
        // Keep the memory useful without allowing old runs to inflate saves.
        if (gameState.choiceHistory.length > 100) gameState.choiceHistory.shift();
    },

    showChoiceEcho(choice, effects = []) {
        const previous = document.querySelector('.choice-echo');
        if (previous && typeof previous.remove === 'function') previous.remove();
        if (this._choiceEchoTimer) clearTimeout(this._choiceEchoTimer);

        const echo = document.createElement('div');
        echo.className = 'choice-echo';
        echo.setAttribute('role', 'status');
        echo.setAttribute('aria-live', 'polite');

        const kicker = document.createElement('div');
        kicker.className = 'choice-echo-kicker';
        kicker.textContent = '选择已被记住';
        echo.appendChild(kicker);

        const selected = document.createElement('div');
        selected.className = 'choice-echo-text';
        selected.textContent = `「${choice.text || '未命名的选择'}」`;
        echo.appendChild(selected);

        const effectsWrap = document.createElement('div');
        effectsWrap.className = 'choice-echo-effects';
        const visibleEffects = effects.length > 0 ? effects : ['后续剧情可能回应这项决定'];
        visibleEffects.forEach(effect => {
            const tag = document.createElement('span');
            tag.className = 'choice-echo-effect';
            tag.textContent = effect;
            effectsWrap.appendChild(tag);
        });
        echo.appendChild(effectsWrap);

        document.body.appendChild(echo);
        this._choiceEchoTimer = setTimeout(() => {
            echo.classList.add('leaving');
            setTimeout(() => echo.remove(), 300);
        }, 2800);
    },

    shouldShowEndingScreen(script) {
        if (!script || !script.ending) return false;
        const choices = this.getSceneChoices(script);
        // A world-summary ending may offer only the standard return-to-hub action.
        // Any other outgoing edge is a narrative continuation and must be playable.
        return choices.length === 0 || choices.every(choice => choice.next === 'aleph_return');
    },
    
    makeChoice(choice) {
        // 点击后立即撤下旧选项，避免场景转场期间误点上一场景的按钮。
        if (this.elements.choicesContainer) {
            this.elements.choicesContainer.classList.add('hidden');
            this.elements.choicesContainer.innerHTML = '';
        }

        this.recordChoice(choice);
        const choiceEffects = [];

        // 记录特质
        if (choice.trait && !gameState.traits.includes(choice.trait)) {
            gameState.traits.push(choice.trait);
            choiceEffects.push(`倾向：${TRAIT_NAMES[choice.trait] || choice.trait}`);
        }
        
        // 收集线索
        let clueGained = false;
        if (choice.clue && !gameState.clues.includes(choice.clue)) {
            gameState.clues.push(choice.clue);
            clueGained = true;
            const clue = CLUE_DEFS[choice.clue];
            choiceEffects.push(`获得线索：${clue ? clue.title : choice.clue}`);
            
            // 获得线索时的视觉反馈
            if (typeof effectsEngine !== 'undefined') {
                effectsEngine.flash('#d4af37', 300);
            }
            
            // 获得线索时自动存档
            this.autoSave();
        }
        
        // 处理 cost（day 消耗和 sanity 消耗）
        if (choice.cost) {
            if (choice.cost.day) {
                gameState.day += choice.cost.day;
                choiceEffects.push(`时间 +${choice.cost.day}天`);
            }
            if (choice.cost.sanity) {
                gameState.sanity = Math.max(0, (gameState.sanity ?? 100) - choice.cost.sanity);
                choiceEffects.push(`理智 -${choice.cost.sanity}`);
                // 理智值过低时的视觉反馈
                if (gameState.sanity <= 30 && typeof effectsEngine !== 'undefined') {
                    effectsEngine.flash('#ff0000', 500);
                }
                // 理智值归零时触发特殊结局
                if (gameState.sanity <= 0) {
                    gameState.sanity = 100; // 重置sanity，避免存档死循环
                    this.showEnding({
                        title: '疯狂 · 深渊凝视',
                        desc: '你在克苏鲁的深渊中迷失了自我。深渊凝视了你，你没有承受住那道目光。'
                    }, choice.next);
                    return;
                }
            }
        }

        if (clueGained) {
            setTimeout(() => this.showClueNotification(choice.clue, choice.text, choiceEffects), 450);
        } else {
            setTimeout(() => this.showChoiceEcho(choice, choiceEffects), 300);
        }
        
        // 检查场景是否存在
        const nextScript = SCRIPT[choice.next];
        if (!nextScript) {
            console.error('场景不存在:', choice.next);
            alert('错误：场景 "' + choice.next + '" 不存在');
            return;
        }
        
        // 只有真正终止、或仅提供“返回阿莱夫”的世界结算场景，才显示结局屏。
        // 带有其它分支的 ending 节点仍是可玩的剧情场景。
        if (this.shouldShowEndingScreen(nextScript)) {
            // 结算场景必须成为当前场景，确保自动存档、继续按钮和阿莱夫
            // 都能读取同一个结算上下文。旧章节的世界结局可能没有世界前缀，
            // 因此通过当前世界和上一场景共同兜底。
            const previousScene = gameState.currentScene;
            const completion = this.markWorldCompleteForEnding(choice.next, previousScene);
            gameState._lastScene = choice.next;
            gameState.currentScene = choice.next;
            if (completion.worldId) {
                gameState._endingWorldId = completion.worldId;
            } else {
                delete gameState._endingWorldId;
            }
            this.showEnding(nextScript.ending, choice.next);
            return;
        }
        
        // 加载下一个场景
        this.loadScene(choice.next);
        
    },
    
    autoSave() {
        // 自动存档（保留最近3个）
        const saveData = {
            ...gameState,
            saveVersion: SAVE_SCHEMA_VERSION,
            timestamp: Date.now(),
            autoSave: true
        };
        const slot = (gameState._autoSaveSlot || 0) % 3;
        localStorage.setItem(`vn_auto_save_${slot}`, JSON.stringify(saveData));
        gameState._autoSaveSlot = slot + 1;
        console.log(`自动存档已保存 (slot ${slot})`);
    },

    getLatestAutoSave() {
        let latest = null;
        let latestTime = 0;
        for (let i = 0; i < 3; i++) {
            const data = localStorage.getItem(`vn_auto_save_${i}`);
            if (!data) continue;
            try {
                const parsed = JSON.parse(data);
                if (parsed && parsed.timestamp > latestTime) {
                    latest = parsed;
                    latestTime = parsed.timestamp;
                }
            } catch (e) {
                console.warn('自动存档损坏，已跳过:', `vn_auto_save_${i}`);
            }
        }
        if (!latest) {
            const oldData = localStorage.getItem('vn_save_0');
            if (oldData) {
                try { latest = JSON.parse(oldData); } catch (e) { /* ignore legacy corruption */ }
            }
        }
        return latest;
    },

    loadAutoSave() {
        const latest = this.getLatestAutoSave();
        if (latest) {
            this._applySaveData(latest);
            this.resumeSavedScene();
            console.log('自动存档已加载，回到：', gameState.currentScene);
            return true;
        }
        return false;
    },

    // 结算画面本身也是可恢复的存档点。若存档停在终止世界场景，
    // 直接重现结算画面，而不是把玩家送回一个无法继续的旧对话节点。
    resumeSavedScene() {
        const sceneId = gameState.currentScene || 'start';
        const script = SCRIPT[sceneId];
        if (script && this.shouldShowEndingScreen(script)) {
            const completion = this.markWorldCompleteForEnding(sceneId, gameState._lastScene);
            if (completion.worldId) gameState._endingWorldId = completion.worldId;
            this.showEnding(script.ending, sceneId);
            return;
        }
        this.loadScene(sceneId);
    },

    _applySaveData(parsed) {
        if (!parsed.completedWorlds) parsed.completedWorlds = [];
        if (!parsed.traits) parsed.traits = [];
        if (!parsed.clues) parsed.clues = [];
        if (!parsed.encountered) parsed.encountered = [];
        if (!parsed.xMemories) parsed.xMemories = [];
        if (!Array.isArray(parsed.dialogueHistory)) parsed.dialogueHistory = [];
        if (!Array.isArray(parsed.choiceHistory)) parsed.choiceHistory = [];
        if (!parsed.day) parsed.day = 1;
        if (!parsed.currentScene) parsed.currentScene = 'start';
        if (!parsed.currentObjective) parsed.currentObjective = '寻找X的线索';
        if (!parsed.currentDialogue) parsed.currentDialogue = 0;
        if (parsed.dialogueComplete === undefined) parsed.dialogueComplete = false;
        if (parsed.isTyping === undefined) parsed.isTyping = false;
        if (parsed._activeWorld === undefined) parsed._activeWorld = null;
        if (parsed._endingWorldId === undefined) parsed._endingWorldId = null;
        if (!parsed.settings) parsed.settings = { typingEffect: true, typingSpeed: 50, musicVolume: 0.5, sfxVolume: 0.5 };
        parsed.saveVersion = SAVE_SCHEMA_VERSION;
        Object.assign(gameState, parsed);
        const es = document.getElementById('endingScreen');
        if (es) { es.classList.remove('visible'); es.style.removeProperty('opacity'); es.style.removeProperty('pointer-events'); }
        const lb = document.getElementById('loadSaveBtn');
        if (lb) lb.style.display = 'none';
    },
    
    showClueNotification(clueId, choiceText = '', effects = []) {
        const clue = CLUE_DEFS[clueId] || { title: '新线索', desc: '你获得了新的信息。' };
        
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 15px 20px;
            background: rgba(10,15,12,0.95);
            border: 1px solid rgba(122,186,152,0.4);
            border-radius: 8px;
            color: #c4b5a0;
            z-index: 50;
            max-width: 300px;
            animation: slideIn 0.5s ease;
        `;
        notif.innerHTML = `
            <div style="color: #7aba98; font-size: 0.8rem; margin-bottom: 4px;">📋 获得线索</div>
            <div style="color: #e8dcc8; font-weight: bold;">${clue.title}</div>
            <div style="color: #8a7f72; font-size: 0.85rem; margin-top: 4px;">${clue.desc}</div>
            <div style="color: #6a6058; font-size: 0.75rem; margin-top: 8px;">当前线索：${gameState.clues.length} 条</div>
        `;

        if (choiceText) {
            const recorded = document.createElement('div');
            recorded.style.cssText = 'color:#c4a060;font-size:0.75rem;margin-top:10px;line-height:1.5;';
            recorded.textContent = `已记录选择：「${choiceText}」`;
            notif.appendChild(recorded);
        }
        if (effects.length > 1) {
            const effectText = document.createElement('div');
            effectText.style.cssText = 'color:#9fc5ad;font-size:0.72rem;margin-top:5px;line-height:1.5;';
            effectText.textContent = effects.filter(effect => !effect.startsWith('获得线索：')).join(' · ');
            if (effectText.textContent) notif.appendChild(effectText);
        }
        
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notif.remove(), 500);
        }, 4000);
    },
    
    onCharacterClick(position) {
        // 防抖：对话进行中不允许点击角色
        if (this.clickInProgress || !gameState.dialogueComplete) return;
        this.clickInProgress = true;
        
        const el = this.elements[position];
        const charId = el.dataset.charId;
        if (!charId) { this.clickInProgress = false; return; }
        
        const script = SCRIPT[gameState.currentScene];
        const clickables = script.clickables;
        
        if (clickables && clickables[charId]) {
            const dialogues = clickables[charId].dialogues;
            const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
            
            const speakerNames = SHARED_SPEAKER_NAMES;
            
            this.elements.speakerName.className = 'speaker-name ' + randomDialogue.speaker;
            this.elements.speakerName.textContent = speakerNames[randomDialogue.speaker] || randomDialogue.speaker;
            this.typeText(randomDialogue.text, () => {
                gameState.dialogueComplete = true;
                this.clickInProgress = false;
            });
        } else {
            this.clickInProgress = false;
        }
    },

    getAISessionId() {
        const key = 'vn_ai_session_id';
        let sessionId = localStorage.getItem(key);
        if (!sessionId) {
            sessionId = (typeof crypto !== 'undefined' && crypto.randomUUID)
                ? crypto.randomUUID()
                : `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            localStorage.setItem(key, sessionId);
        }
        return sessionId;
    },

    renderAIEpilogue(result, statusText) {
        document.getElementById('aiEpilogueTitle').textContent = result.title;
        document.getElementById('aiEpilogueLetter').textContent = result.letter;
        document.getElementById('aiEpilogueSignature').textContent = `—— ${result.signature}`;
        document.getElementById('aiEpilogueResult').classList.remove('hidden');
        document.getElementById('aiEpilogueStatus').textContent = statusText || '';
    },

    async generateAIEpilogue() {
        const button = document.getElementById('aiEpilogueBtn');
        const status = document.getElementById('aiEpilogueStatus');
        button.disabled = true;
        button.textContent = 'X 正在回信……';
        status.textContent = '正在根据你的线索、特质和选择生成专属尾声。';

        const payload = {
            sessionId: this.getAISessionId(),
            ending: this.currentEnding || {},
            journey: {
                day: gameState.day,
                clues: gameState.clues || [],
                traits: gameState.traits || [],
                completedWorlds: gameState.completedWorlds || [],
                xMemories: gameState.xMemories || []
            }
        };

        try {
            if (typeof AIEpilogue === 'undefined') throw new Error('AI_EPILOGUE_CLIENT_MISSING');
            const result = await AIEpilogue.generate(payload);
            this.renderAIEpilogue(result, `由 ${result.model || 'GPT-5.6'} 根据本次旅程生成`);
            button.textContent = '重新生成 X 的回信';
        } catch (error) {
            console.warn('AI 尾声暂不可用，使用离线备用文本：', error.message);
            const fallback = (typeof AIEpilogue !== 'undefined')
                ? AIEpilogue.offlineFallback(payload.journey)
                : { title: '未寄出的回信', letter: '你已经走过足够多的分岔。真正留下来的并非答案，而是你选择记住什么。', signature: 'X' };
            this.renderAIEpilogue(fallback, 'AI 服务暂不可用，当前显示离线备用尾声');
            button.textContent = '重试 GPT-5.6 回信';
        } finally {
            button.disabled = false;
        }
    },
    
    showEnding(ending, sceneId) {
        // 兼容两种 ending 格式：对象 {title, desc} 和布尔值 true + endingTitle/endingDesc
        let title, desc;
        if (!ending) {
            title = '结局';
            desc = '你到达了一个结局。';
        } else if (ending === true || ending === 'true') {
            const script = SCRIPT[sceneId || gameState.currentScene];
            title = (script && script.endingTitle) || '结局';
            desc = (script && script.endingDesc) || '你到达了一个结局。';
        } else {
            title = ending.title || '结局';
            desc = ending.desc || '你到达了一个结局。';
        }

        this.currentEnding = { sceneId: sceneId || gameState.currentScene, title, description: desc };
        const aiButton = document.getElementById('aiEpilogueBtn');
        if (aiButton) {
            aiButton.disabled = false;
            aiButton.textContent = '让 GPT-5.6 写下 X 的回信';
        }
        const aiStatus = document.getElementById('aiEpilogueStatus');
        if (aiStatus) aiStatus.textContent = '';
        const aiResult = document.getElementById('aiEpilogueResult');
        if (aiResult) aiResult.classList.add('hidden');
        
        document.getElementById('endingTitle').textContent = title;
        document.getElementById('endingDesc').textContent = desc;
        document.getElementById('statDays').textContent = gameState.day || 0;
        document.getElementById('statClues').textContent = typeof countValidFragments === 'function'
            ? countValidFragments()
            : ((gameState.clues && gameState.clues.length) || 0);
        document.getElementById('statMet').textContent = (gameState.encountered && gameState.encountered.length) || 0;
        const progressEl = document.getElementById('endingProgress');
        if (progressEl) {
            progressEl.textContent = typeof getEndingProgressText === 'function'
                ? getEndingProgressText()
                : '终章进度将在返回阿莱夫后更新';
        }
        
        // 始终先重置"回到存档点"按钮状态
        const loadSaveBtn = document.getElementById('loadSaveBtn');
        if (loadSaveBtn) loadSaveBtn.style.display = 'none';
        
        // 只有访问过阿莱夫后或在世界结局后显示"返回阿莱夫"按钮
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            const isInWorldEnding = this.resolveWorldForEnding(sceneId, gameState._lastScene) !== null;
            if (gameState.traits.includes('aleph_visited') || isInWorldEnding) {
                continueBtn.style.display = 'inline-block';
                // 更新按钮文本，显示线索进度
                const endingThreshold = typeof FIRST_RUN_ENDING_THRESHOLD === 'number' ? FIRST_RUN_ENDING_THRESHOLD : 12;
                const endingProgress = Math.min(countValidFragments(), endingThreshold);
                continueBtn.textContent = `返回阿莱夫（终章进度 ${endingProgress}/${endingThreshold}）`;
                // 如果还没访问过阿莱夫，自动标记
                if (!gameState.traits.includes('aleph_visited')) {
                    gameState.traits.push('aleph_visited');
                }
            } else {
                continueBtn.style.display = 'none';
            }
        }
        
        // 自动存档
        this.autoSave();

        // 检查刚刚写入的自动存档，确保首次到达结局也能回退。
        if (this.getLatestAutoSave() && loadSaveBtn) {
            loadSaveBtn.style.display = 'inline-block';
        }
        
        setTimeout(() => {
            const endingScreen = document.getElementById('endingScreen');
            // 清除可能残留的内联样式，让CSS class完全接管
            endingScreen.style.removeProperty('opacity');
            endingScreen.style.removeProperty('pointer-events');
            endingScreen.style.removeProperty('display');
            endingScreen.classList.add('visible');
        }, 1000);
    },
    
    updateStatus() {
        // 终章阶段
        let phase;
        if (gameState.currentScene.startsWith('final_') || gameState.currentScene === 'final_return_garden' || gameState.currentScene === 'final_meet_x' || gameState.currentScene.startsWith('ending_')) {
            phase = { name: '终章' };
        } else {
            const phases = [
                { max: 2, name: '初入' },
                { max: 5, name: '徘徊' },
                { max: 8, name: '迷失' },
                { max: 12, name: '临界' },
                { max: 999, name: '永恒' }
            ];
            
            phase = phases[phases.length - 1];
            for (const p of phases) {
                if (gameState.day <= p.max) {
                    phase = p;
                    break;
                }
            }
        }
        
        const clueText = countValidFragments() > 0 ? ` · ${countValidFragments()}碎片` : '';
        const worldText = gameState.completedWorlds.length > 0 ? ` · ${gameState.completedWorlds.length}世界` : '';
        const sanityText = (gameState.sanity && gameState.sanity < 100) ? ` · 理智${gameState.sanity}` : '';
        this.elements.dayStatus.textContent = `第${gameState.day}天${clueText}${worldText}${sanityText} · ${phase.name}`;
    },
    
    // 存档系统
    showSavePanel(mode) {
        const panel = document.getElementById('savePanel');
        const title = document.getElementById('panelTitle');
        const slots = document.getElementById('saveSlots');
        
        this.panelOpen = true;
        
        title.textContent = mode === 'save' ? '保存游戏' : '读取游戏';
        slots.innerHTML = '';
        
        const worldNames = {
            blade_runner: '银翼杀手', cthulhu: '疯狂之城', alice: '梦境世界',
            middle_earth: '中土', wuxia: '江湖', cowboy_bebop: '太空边境',
            matrix: '矩阵', got: '权力游戏', spirited: '神隐',
            wake: '守灵夜', watchmen: '守望者', maus: '鼠族'
        };
        
        for (let i = 1; i <= 10; i++) {
            const data = localStorage.getItem(`vn_save_${i}`);
            const slot = document.createElement('div');
            slot.style.cssText = 'padding:12px;margin:8px 0;background:rgba(255,255,255,0.05);border-radius:8px;cursor:pointer;position:relative;transition:background 0.2s;';
            
            if (data) {
                try {
                    const parsed = JSON.parse(data);
                    const date = new Date(parsed.timestamp);
                    const world = worldNames[parsed.currentScene] || '未知';
                    const traits = (parsed.traits || []).length;
                    slot.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;">
                        <div>
                            <div style="color:#c4b5a0;font-weight:600;">存档 ${i} · 第${parsed.day}天</div>
                            <div style="color:#6a6058;font-size:0.72rem;margin-top:2px;">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
                            <div style="color:#8a8072;font-size:0.7rem;margin-top:2px;">${world} · ${traits}个特质 · ${(parsed.clues||[]).length}条线索</div>
                        </div>
                        <div style="color:#6a6058;font-size:0.7rem;cursor:pointer;padding:4px;" title="删除存档">✕</div>
                    </div>`;
                } catch(e) {
                    slot.innerHTML = `<div style="color:#c47070;">存档 ${i} - 数据损坏</div>`;
                }
            } else {
                slot.innerHTML = `<div style="color:#6a6058;">存档 ${i} - 空</div>`;
            }
            
            slot.onclick = (e) => {
                // 删除按钮（点击 ✕）
                if (e.target.textContent === '✕') {
                    e.stopPropagation();
                    localStorage.removeItem(`vn_save_${i}`);
                    this.showSavePanel(mode);
                    return;
                }
                if (mode === 'save') {
                    localStorage.setItem(`vn_save_${i}`, JSON.stringify({
                        ...gameState,
                        saveVersion: SAVE_SCHEMA_VERSION,
                        timestamp: Date.now()
                    }));
                    this.showSavePanel('save');
                } else if (data) {
                    try {
                        const parsed = JSON.parse(data);
                        this._applySaveData(parsed);
                        document.getElementById('savePanel').classList.remove('visible');
                        this.panelOpen = false;
                        this.resumeSavedScene();
                    } catch(e) {
                        console.error('存档数据损坏:', e.message);
                        alert('存档数据损坏，无法加载');
                    }
                }
            };
            
            slots.appendChild(slot);
        }
        
        // 更新特质列表
        const traitNames = {
            brave: '勇敢', cautious: '谨慎', curious: '好奇', intuitive: '直觉',
            rational: '理性', empathetic: '共情', analytical: '分析', contemplative: '沉思',
            self_aware: '自省', awakened: '觉醒', seeker_of_truth: '求真', truth_seeker: '求索',
            playful: '顽皮', mad: '疯狂', heroic: '英雄', noble: '高贵',
            xia: '侠义', free_spirit: '自由', zen: '禅心', drifter: '漂泊',
            lone_wolf: '孤狼', free: '不羁', awakening: '觉醒', hacker: '黑客',
            rebellion: '反叛', honor: '荣誉', ambition: '野心', leadership: '领导',
            growth: '成长', humility: '谦逊', compassion: '慈悲', wordplay: '文字游戏',
            cyclical: '循环', dreamer: '梦想家', moral: '道德', sacrificial: '牺牲',
            justice: '正义', memory: '记忆', witness: '见证', empathy: '移情',
            aleph_visited: '阿莱夫访客'
        };
        document.getElementById('traitCount').textContent = gameState.traits.length;
        const traitList = document.getElementById('traitList');
        traitList.innerHTML = '';
        if (gameState.traits.length === 0) {
            traitList.innerHTML = '<div style="color: #6a6058; font-style: italic;">还没有获得特质。做出选择来获得特质。</div>';
        } else {
            gameState.traits.forEach(traitId => {
                const tag = document.createElement('span');
                tag.style.cssText = 'padding: 4px 10px; background: rgba(196,112,112,0.15); border-radius: 12px; color: #c47070; font-size: 0.8rem;';
                tag.textContent = traitNames[traitId] || traitId;
                tag.title = traitId;
                traitList.appendChild(tag);
            });
        }
        
        panel.classList.add('visible');
    },
    
    // 任务日志系统
    showDialogueLog() {
        const panel = document.getElementById('logPanel');
        const scroll = document.getElementById('logScroll');
        
        this.panelOpen = true;
        
        const history = gameState.dialogueHistory || [];
        if (history.length === 0) {
            scroll.innerHTML = '<div style="color: #6a6058; font-style: italic; text-align: center;">还没有对话记录。</div>';
        } else {
            const speakerNames = SHARED_SPEAKER_NAMES;
            
            let html = '';
            history.forEach((entry, i) => {
                const speaker = speakerNames[entry.speaker] || entry.speaker;
                html += `<div style="margin-bottom: 8px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #e8dcc8; font-weight: 600;">${speaker}</span>
                    <span style="color: #6a6058; font-size: 0.7rem; margin-left: 8px;">#${i + 1}</span>
                    <div style="margin-top: 2px;">${entry.text}</div>
                </div>`;
            });
            scroll.innerHTML = html;
            scroll.scrollTop = scroll.scrollHeight;
        }
        
        panel.classList.add('visible');
    },

    showQuestPanel() {
        const panel = document.getElementById('questPanel');
        
        this.panelOpen = true;
        
        // 更新当前目标
        const objective = QUEST_SYSTEM.getCurrentObjective();
        document.getElementById('currentObjective').innerHTML = `
            <div style="color: #e8dcc8; font-weight: bold;">${objective.title}</div>
            <div style="color: #c4b5a0; font-size: 0.9rem; margin-top: 4px;">${objective.desc}</div>
        `;
        
        // 更新线索列表
        document.getElementById('clueCount').textContent = countValidFragments();
        const clueList = document.getElementById('clueList');
        clueList.innerHTML = '';
        
        if (gameState.clues.length === 0) {
            clueList.innerHTML = '<div style="color: #6a6058; font-style: italic;">还没有收集到线索。去和花园中的三个人谈谈吧。</div>';
        } else {
            gameState.clues.forEach(clueId => {
                const clue = CLUE_DEFS[clueId] || { title: clueId, desc: '一条神秘的线索。' };
                const item = document.createElement('div');
                item.style.cssText = 'padding: 8px 12px; background: rgba(212,197,181,0.08); border-radius: 6px; border-left: 3px solid #7aba98;';
                item.innerHTML = `<div style="color: #e8dcc8; font-size: 0.9rem;">${clue.title}</div>
                    <div style="color: #8a7f72; font-size: 0.8rem;">${clue.desc}</div>`;
                clueList.appendChild(item);
            });
        }
        
        // 更新已访问世界
        const worldList = document.getElementById('worldList');
        worldList.innerHTML = '';
        
        if (gameState.completedWorlds.length === 0) {
            worldList.innerHTML = '<div style="color: #6a6058; font-style: italic;">还没有访问过任何世界。</div>';
        } else {
            gameState.completedWorlds.forEach(worldId => {
                const worldNames = {
                    blade_runner: '银翼杀手', cthulhu: '疯狂之城', alice: '梦境世界',
                    middle_earth: '中土世界', wuxia: '江湖世界', cowboy_bebop: '太空边境',
                    matrix: '矩阵世界', got: '权力游戏', spirited: '神隐世界',
                    wake: '守灵之夜', watchmen: '末日时钟', maus: '记忆深渊'
                };
                const tag = document.createElement('span');
                tag.style.cssText = 'padding: 4px 10px; background: rgba(122,186,152,0.2); border-radius: 12px; color: #7aba98; font-size: 0.8rem;';
                tag.textContent = worldNames[worldId] || worldId;
                worldList.appendChild(tag);
            });
        }
        
        panel.classList.add('visible');
    }
};

// 启动
document.addEventListener('DOMContentLoaded', () => Engine.init());
