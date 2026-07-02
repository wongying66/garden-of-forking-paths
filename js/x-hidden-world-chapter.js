/**
 * 第13世界：迷宫与镜子——博尔赫斯式的寓言
 * 隐藏世界，仅在 NG+ 且完成全部12个世界后解锁
 * 主题：你是X，X是你——镜子的两面，迷宫的中心
 */

const X_HIDDEN_SCRIPT = {
    // ===== 入口 =====
    x_hidden_entrance: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        onEnter: () => {
            gameState._inXHidden = true;
            if (!gameState.traits.includes('x_hidden_visited')) {
                gameState.traits.push('x_hidden_visited');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '阿莱夫中浮现出一扇你从未见过的门。它不像其他门那样由光构成——它是一面镜子。博尔赫斯曾写道，镜子是可憎的，因为它们使人的数目倍增。但这面镜子不同——它不倍增，它还原。'
            },
            {
                speaker: 'narrator',
                text: '镜中的你看着镜外的你。但镜中的你，表情略有不同。更加……清醒。仿佛那个倒影知道一些你不知道的事——或者说，知道一些你选择遗忘的事。'
            },
            {
                speaker: 'narrator',
                text: '镜中的你伸出手，穿过镜面。你感到一阵眩晕——世界翻转了。或者说，世界从未翻转；是你翻转了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '握住镜中伸出的手', next: 'x_hidden_awakening' }
        ]
    },

    // ===== 觉醒 =====
    x_hidden_awakening: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你睁开眼睛——但你不在花园里。你在一个比花园更古老的地方。'
            },
            {
                speaker: 'narrator',
                text: '你站在一条走廊里。走廊两侧是镜子，无数个你在镜中延伸，直到无穷。但镜中的你，每一个都做着不同的动作。有的在哭泣，有的在微笑，有的在奔跑，有的在沉睡。这是博尔赫斯的噩梦——不是因为他看到了无数个自己，而是因为他看到了自己曾经是、或本可以成为的所有人。'
            },
            {
                speaker: 'x',
                text: '「欢迎来到镜子的另一面。或者说——欢迎回到你从未离开过的地方。」'
            },
            {
                speaker: 'narrator',
                text: '你转身——但没有人。声音来自镜中。来自你自己的镜像。来自那个你一直以为是别人的自己。'
            },
            {
                speaker: 'x',
                text: '「你一直在寻找X。但你知道X是谁吗？X是一个变量——一个可以被任何人填入的符号。但在这座花园里，X只有一个意义。一个数学般精确的意义。」'
            },
            {
                speaker: 'x',
                text: '「X就是你。是你遗忘了的自己。这不是一个发现——这是一个证明。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「这不可能。我在寻找X，我不是X。」', next: 'x_hidden_denial' },
            { text: '「如果我是X……那我为什么在寻找自己？」', next: 'x_hidden_question' },
            { text: '沉默。等待她继续说。', next: 'x_hidden_silence' }
        ]
    },

    // ===== 否认 =====
    x_hidden_denial: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '「你手中那张照片，背面写着X。你从来没有想过，那张照片上的人是谁吗？一个谜题最有趣的部分，不是答案——而是提问者为什么对答案视而不见。」'
            },
            {
                speaker: 'narrator',
                text: '你低头看手中的照片。这一次，照片上的脸不再模糊。'
            },
            {
                speaker: 'narrator',
                text: '那是你自己的脸。博尔赫斯曾写道：\'一个作家终其一生，不过是写同一本书。\'一个寻找者终其一生，不过是寻找自己。'
            },
            {
                speaker: 'x',
                text: '「你进入花园时，把自己的记忆留在了这里。你选择忘记自己是谁，然后开始寻找一个叫做X的人。但X从来不是别人。X是一个方程，而你是这个方程唯一的解。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那我为什么要把自己锁在花园里？」', next: 'x_hidden_why' }
        ]
    },

    // ===== 疑问 =====
    x_hidden_question: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '「好问题。你在寻找自己——因为你在进入花园之前，对自己做了什么？你不妨问问：是谁写了\'我是你\'这三个字？是谁把那张照片留在了石牌坊上？」'
            },
            {
                speaker: 'narrator',
                text: '记忆像潮水一样涌来——不，不是潮水。是几何。是精确的、不可辩驳的推导。你看到了——一个时刻，一个决定，一种无法承受的痛苦。你选择走进花园，把关于自己的一切都留在了入口的石牌坊上。'
            },
            {
                speaker: 'narrator',
                text: '「我是你」——那三个字，是你自己刻下的。不是谜语，不是密码，不是隐喻。是一个陈述句。'
            },
            {
                speaker: 'x',
                text: '「你把自己拆成了两部分：寻找者，和被寻找者。就像博尔赫斯拆成了\'博尔赫斯\'和\'我\'——一个行走在布宜诺斯艾利斯的街道上，另一个在图书馆里写下关于迷宫的故事。我不清楚，我们两人之中，是谁写了这一页。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我想逃避什么？」', next: 'x_hidden_truth' }
        ]
    },

    // ===== 沉默 =====
    x_hidden_silence: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '「你一直都知道，对吗？在内心深处，你知道自己在寻找什么。」'
            },
            {
                speaker: 'x',
                text: '「你不是在寻找X。你是在拖延面对真相的时刻。因为一旦你找到了X，你就必须面对自己——面对那个你在走进花园时试图遗忘的人。」'
            },
            {
                speaker: 'narrator',
                text: '镜子中的你走近了。近到你几乎可以触摸到镜面。近到你几乎可以分辨出镜中那个人的呼吸——你的呼吸。'
            },
            {
                speaker: 'x',
                text: '「但你已经找到了。你找到了所有十二个世界，收集了所有碎片。现在是时候了。时候面对那个简单的、不可回避的事实：二加二等于四，而X等于你。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「面对什么？」', next: 'x_hidden_truth' }
        ]
    },

    // ===== 为什么 =====
    x_hidden_why: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '「因为你无法承受真相。你宁愿让自己成为一个谜题，也不愿面对那个答案。谜题是安全的——答案不是。」'
            },
            {
                speaker: 'x',
                text: '「你知道为什么花园里会有十二个世界吗？那不是别人的故事。每一个世界，都是你曾经活过的人生。就像博尔赫斯在《小径分岔的花园》中写道的——时间永远分岔，通向无数的将来。每一个分岔上的你，都走上了不同的路。中土、江湖、银翼、矩阵……你曾经是其中的每一个人。你曾经相信过每一种信仰，爱过每一种爱，失去过每一种失去。」'
            },
            {
                speaker: 'x',
                text: '「你走过了所有的路，却始终无法选择一条。所以你把自己锁在了花园里——一个所有路都分叉的地方。一个迷宫，而迷宫的中心不是出口，是另一个迷宫。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那我现在该做什么？」', next: 'x_hidden_truth' }
        ]
    },

    // ===== 真相 =====
    x_hidden_truth: {
        scene: 'xMirror',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '「选择。这个词在花园的语言中，与\'必然\'是同一个词。每一个选择，都同时是它的反面。」'
            },
            {
                speaker: 'narrator',
                text: '镜中的你伸出手，这一次，她的手穿过了镜面。她手中的不是照片，不是钥匙——而是问题本身。镜中的你手中握着的是问题本身。'
            },
            {
                speaker: 'x',
                text: '「这把钥匙可以打开花园的门。不是通往另一个世界的门——而是通往外面的门。你可以选择离开花园，带着你在所有世界里学到的一切。带着所有你曾经是过的自己。」'
            },
            {
                speaker: 'x',
                text: '「或者，你可以选择留下来。成为花园的一部分。成为下一个寻找者——或者下一个被我寻找的人。在环形废墟中，一个人梦见另一个人，却发现自己也是别人的梦。在这座花园里也是一样——你一直在寻找X，却不曾想，X也在寻找你。而你们两个人，也许都是第三个人的梦。」'
            },
            {
                speaker: 'x',
                text: '「但无论如何，你不能再假装不知道了。你已经找到了X。X在这里。X一直在这里。这是数学，不是诗歌——虽然有时候，最精确的数学读起来像诗。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我想离开。带着完整的自己。」', next: 'x_hidden_leave', ending: { title: '完整的自己', desc: 'X终于找到了自己——在镜子的另一面。花园的门打开了，你带着十二个世界的记忆，走进了阳光。不是因为找到了答案，而是因为理解了：问题本身就是答案。' } },
            { text: '「我想留下。成为花园的守护者。」', next: 'x_hidden_stay', ending: { title: '花园的守护者', desc: '你选择留在花园里，成为下一个寻找者的引导者。就像档案员、追踪者、回忆者一样——你成为了花园的一部分，等待下一个人来寻找X。而那个人，也许也是你。' } },
            { text: '「我想和你在一起。不再分开。」', next: 'x_hidden_merge', ending: { title: '合一', desc: '你握住了镜中自己的手。镜面碎裂，两个你合为一体。你不再有寻找者和被寻找者之分——你只是你。完整地，存在着。就像博尔赫斯终于在某个黄昏，与那个在布宜诺斯艾利斯街头行走的自己合为一体。' } }
        ]
    },

    // ===== 离开 =====
    x_hidden_leave: {
        scene: 'xMirror',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你接过钥匙。镜面碎裂了——不是破碎，而是融化，像冰变成水，像水变成空气，像空气变成记忆。'
            },
            {
                speaker: 'narrator',
                text: '走廊消失了。镜子消失了。花园消失了。或者说，它们从未存在过——它们只是你用来囚禁自己的几何。'
            },
            {
                speaker: 'narrator',
                text: '你站在一片开阔的草地上。阳光温暖，风中有花香。你低头看手中的照片——照片上的人对你微笑。那是你。完整的你。'
            },
            {
                speaker: 'narrator',
                text: '你终于不再寻找了——不是因为找到了什么，而是因为你理解了：寻找本身就是被找到。'
            }
        ],
        choices: [
            { text: '走出花园', next: 'credits_from_x' }
        ]
    },

    // ===== 留下 =====
    x_hidden_stay: {
        scene: 'xMirror',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你松开手。钥匙落在地上，发出的不是碰撞声，而是翻书的声音。仿佛整个花园只是一本书，而你刚刚翻到了最后一页——或者说，最初的那一页。'
            },
            {
                speaker: 'x',
                text: '「你选择了最难的路。不是因为这条路更危险——而是因为它更安静。留下来的人，要学会等待。」'
            },
            {
                speaker: 'narrator',
                text: '镜中的你微笑，后退一步，消失在镜子的深处。你感到身体变得轻盈——不是消散，而是融入。你成为了花园的一部分。成为了那个你一直在寻找的人。'
            },
            {
                speaker: 'narrator',
                text: '你看到了档案员——他曾经也是一个寻找者。你看到了追踪者——她曾经也拿着同样的照片。你明白了：花园里的每一个NPC，都曾经是一个人。他们选择了留下。就像博尔赫斯在图书馆里选择了留下。'
            },
            {
                speaker: 'narrator',
                text: '而现在，你成为了他们中的一员。等待下一个需要寻找自己的人——那个人，也许也是你。因为在这座花园里，所有的寻找者都是同一个人。'
            }
        ],
        choices: [
            { text: '等待下一个人', next: 'credits_from_x' }
        ]
    },

    // ===== 合一 =====
    x_hidden_merge: {
        scene: 'xMirror',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你握住镜中自己的手。那是你第一次触摸到自己。一种奇异的温暖——不是陌生，而是回忆。你触摸到的是你遗忘的自己。'
            },
            {
                speaker: 'narrator',
                text: '镜面碎裂——但这一次，碎片没有散落。它们飞起来，环绕着你，像一万片星光。每一片碎片里都映着一个你——不同世界里的你，不同选择下的你，不同结局中的你。'
            },
            {
                speaker: 'x',
                text: '「我们终于在一起了。或者说——我们从未分开过。分开，只是我们发明的一个动词。」'
            },
            {
                speaker: 'narrator',
                text: '你不再说\'我\'和\'你\'。你只说\'我们\'。因为寻找者和被寻找者已经不再分离——就像博尔赫斯终于在某个黄昏，与那个在布宜诺斯艾利斯街头行走的\'博尔赫斯\'合为一体。'
            },
            {
                speaker: 'narrator',
                text: '花园消失了。不，没有消失——它变成了你。你就是那座花园。你就是所有分叉的路。你就是X，也是寻找X的人。你就是那个自己写下的谜题，和那个自己找到的答案。'
            }
        ],
        choices: [
            { text: '成为你自己', next: 'credits_from_x' }
        ]
    },

    // ===== 从X视角的终章 =====
    credits_from_x: {
        scene: 'garden',
        characters: [],
        onEnter: () => {
            completeWorld('x_hidden');
            if (typeof game !== 'undefined' && game.rollCredits) {
                setTimeout(() => game.rollCredits(), 2000);
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '故事结束了。'
            },
            {
                speaker: 'narrator',
                text: '但故事也从未结束。因为在每一个选择里，在每一条分叉的路上，在每一个\'如果\'里——你都在那里。'
            },
            {
                speaker: 'narrator',
                text: '寻找X的人，最终找到了自己。而那个自己，一直在花园里，等待被发现。'
            },
            {
                speaker: 'narrator',
                text: '或者说——等待被遗忘。因为在花园的语言中，\'发现\'和\'遗忘\'是同一个动词的两种时态。'
            }
        ]
    }
};

// 注册到全局SCRIPT
if (typeof SCRIPT !== 'undefined') {
    Object.assign(SCRIPT, X_HIDDEN_SCRIPT);
}

// 注册到章节系统
if (typeof chapters !== 'undefined') {
    chapters.push({
        id: 'x_hidden',
        name: '迷宫与镜子',
        scenes: Object.keys(X_HIDDEN_SCRIPT)
    });
}