/**
 * 第五章：X的视角
 * 短暂的视角切换——不喧宾夺主，只是展示另一面
 * 灵感：卡尔维诺《如果在冬夜，一个旅人》
 */

const X_PERSPECTIVE_SCRIPT = {
    // 从银翼杀手结局进入
    enter_x_perspective: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        onEnter: () => {
            if (!gameState.traits.includes('x_perspective_seen')) {
                gameState.traits.push('x_perspective_seen');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '世界突然静止了。'
            },
            {
                speaker: 'narrator',
                text: '你——不，不是你。是另一个人。你感觉到她的思维流过你的身体，像水穿过筛子。'
            },
            {
                speaker: 'narrator',
                text: '你现在是 X。',
                showChoices: true
            }
        ],
        choices: [
            { text: '……', next: 'x_awakening' }
        ]
    },

    x_awakening: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '你终于来了。'
            },
            {
                speaker: 'x',
                text: '不，不对。是我终于在这里了。在你的身体里，用你的眼睛看世界。'
            },
            {
                speaker: 'narrator',
                text: '你站在镜子的另一边。花园的倒影在你面前展开——但一切都反了。花朵向后绽放，路径通向不存在的方向。',
                showChoices: true
            }
        ],
        choices: [
            { text: '看看镜子里', next: 'x_look_mirror' }
        ]
    },

    x_look_mirror: {
        scene: 'xMirror',
        characters: [],
        dialogues: [
            {
                speaker: 'x',
                text: '你在镜子里看到了他。那个一直在找我的人。'
            },
            {
                speaker: 'x',
                text: '他看起来……很累。比我想象的更累。'
            },
            {
                speaker: 'x',
                text: '他不知道的是，我一直在看着他。每一步，每一个选择，每一次放弃。'
            },
            {
                speaker: 'x',
                text: '我为什么逃走？不是因为不想被他找到。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那是因为什么？', next: 'x_why_escape' }
        ]
    },

    x_why_escape: {
        scene: 'xWindow',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '因为如果被他找到，故事就结束了。'
            },
            {
                speaker: 'x',
                text: '而我不想让故事结束。'
            },
            {
                speaker: 'narrator',
                text: '你站在一扇窗前。窗的每一格都显示着不同的世界——花园、图书馆、迷宫、霓虹城市。'
            },
            {
                speaker: 'x',
                text: '他走过的每一个地方，我都在这里看着。我看到了他遇见的那些人——档案员、回忆者、追踪者、僧侣、杀手、将军……'
            },
            {
                speaker: 'x',
                text: '他们都有自己的故事。他也在他们的故事里。'
            },
            {
                speaker: 'x',
                text: '而我……我只是他故事里的一个目标。一个没有面孔的名字。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你有自己的故事吗？」', next: 'x_own_story' }
        ]
    },

    x_own_story: {
        scene: 'xWindow',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '我的故事？'
            },
            {
                speaker: 'narrator',
                text: '她沉默了一会儿。'
            },
            {
                speaker: 'x',
                text: '我的故事很简单。我曾经也是寻找者。我寻找一个人——一个我失去的人。'
            },
            {
                speaker: 'x',
                text: '我找了他很久。穿过花园，穿过图书馆，穿过迷宫。'
            },
            {
                speaker: 'x',
                text: '然后我发现……我就是那个我一直在找的人。'
            },
            {
                speaker: 'x',
                text: '从那以后，我不再寻找了。我开始等待。等待有人来找我。'
            },
            {
                speaker: 'x',
                text: '而他来了。他一直在找我。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你想让他找到你吗？」', next: 'x_want_found' }
        ]
    },

    x_want_found: {
        scene: 'xWindow',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '想。当然想。'
            },
            {
                speaker: 'x',
                text: '但如果他找到我，故事就结束了。而结束……意味着不再有寻找。不再有花园，不再有图书馆，不再有迷宫。'
            },
            {
                speaker: 'x',
                text: '也许这就是为什么我一直在逃。不是因为不想被找到，而是因为……'
            },
            {
                speaker: 'narrator',
                text: '她的声音变轻了。'
            },
            {
                speaker: 'x',
                text: '……因为我害怕被找到之后，就再也没有理由继续存在了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '视角正在回归……', next: 'x_returning' }
        ]
    },

    x_returning: {
        scene: 'xMirror',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你感觉到 X 的思维在消退。像潮水退去，露出沙滩。'
            },
            {
                speaker: 'narrator',
                text: '你重新成为你自己。但有些东西留了下来——X 的感受，X 的恐惧，X 的渴望。'
            },
            {
                speaker: 'narrator',
                text: '现在你知道了：X 不是在逃避你。她是在逃避故事的结束。'
            },
            {
                speaker: 'narrator',
                text: '而寻找，是她存在的方式。就像你一样。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续前进', next: 'return_to_main' }
        ]
    },

    // 回到主线的过渡
    return_to_main: {
        scene: 'crossroads',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你回到了十字路口。但现在，你看到的不再只是三扇门。'
            },
            {
                speaker: 'narrator',
                text: '你看到了每扇门背后的世界，看到了每个世界里的人，看到了 X 在镜子的另一边看着你。'
            },
            {
                speaker: 'narrator',
                text: '你不再只是寻找 X。你开始理解 X。',
                showChoices: true
            }
        ],
        choices: () => {
            const choices = [];
            // 根据之前的经历提供选项
            choices.push({ text: '推开镜子的门（进入第六章）', next: 'enter_chapter_six' });
            choices.push({ text: '回到花园重新开始', next: 'start' });
            return choices;
        }
    },

    // 第六章的入口占位
    enter_chapter_six: {
        scene: 'crossroads',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你推开镜子的门。'
            },
            {
                speaker: 'narrator',
                text: '门后不是另一个世界。门后是……所有世界。同时存在。'
            },
            {
                speaker: 'narrator',
                text: '花园和城市重叠在一起。图书馆的书页变成了霓虹灯。迷宫的走廊通向赛博空间的深处。'
            },
            {
                speaker: 'narrator',
                text: '世界正在融合。'
            },
            {
                speaker: 'narrator',
                text: '（第六章：世界融合 —— 尚未开放）',
                showChoices: true
            }
        ],
        choices: [
            { text: '回到十字路口', next: 'crossroads' }
        ]
    }
};

// 将X视角剧本合并到主剧本
Object.assign(SCRIPT, X_PERSPECTIVE_SCRIPT);
