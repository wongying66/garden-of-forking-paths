/**
 * 银翼杀手篇章 - 赛博朋克世界
 * 第四篇章：记忆与身份的迷宫
 */

const BLADE_RUNNER_SCRIPT = {
    // 进入赛博朋克世界
    blade_runner_entrance: {
        scene: 'cyberpunkCity',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走出迷宫——或者说，迷宫把你吐了出来。雨。总是雨。霓虹灯在湿漉漉的沥青上碎成千万片。你有时候分不清那些亮光是真实的还是视网膜上的残影。空气里有一股金属和烧焦蛋白质的味道。高耸入云的建筑像墓碑一样矗立着，但你不确定它们是在纪念谁。'
            },
            {
                speaker: 'narrator',
                text: '这不是你熟悉的时代。或者说，你"记得"的那个时代——但你的记忆可靠吗？空中飞行的车辆像沉默的鲨鱼滑过。巨大的全息广告映着一个女人的脸，她的嘴唇在动，但声音被雨吞没了。某种说不清的压迫感贴在皮肤上，像一层湿冷的薄膜。'
            },
            {
                speaker: 'narrator',
                text: '你手中的照片开始发光。X 的脸在霓虹灯下闪烁，像心跳，像求救信号，像某种你无法解码的传输。你握紧了照片。如果你找不到她，你甚至不确定自己是不是真的存在过。',
                showChoices: true
            }
        ],
        choices: [
            { text: '寻找线索', next: 'blade_search_clues' },
            { text: '躲避雨水', next: 'blade_find_shelter' }
        ]
    },

    blade_search_clues: {
        scene: 'cyberpunkCity',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你在雨中行走。每一步都踩碎一小片霓虹的倒影。照片上的 X 似乎在指引某个方向——但方向感这种东西，在这种城市里从来都是靠不住的。你的视网膜可能被入侵了，你的记忆可能被重写了，连重力都可能被调整过。你唯一能确定的是，你还在走。'
            },
            {
                speaker: 'narrator',
                text: '然后，一个身影从阴影中剥离出来。不是走出来——是剥离。像一层皮肤从墙上蜕下。他的眼睛发出微弱的蓝光。不是人类的眼睛。你见过人类的眼睛，在镜子里，在照片里，在那些还没被替换的记忆里。这不是。',
                showChoices: true
            }
        ],
        choices: [
            { text: '戒备', next: 'meet_replicant' }
        ]
    },

    blade_find_shelter: {
        scene: 'apartment',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你躲进一栋公寓楼。走廊里很安静。安静得不正常——不是那种空的安静，而是被填满的安静，像有人刚刚关掉了什么东西。远处传来电子音乐，但那种音乐不像是在播放，更像是在泄漏。'
            },
            {
                speaker: 'narrator',
                text: '你敲开一扇门。门开了。门后是一个女人。你觉得她完美得——不，不是"完美"，是"太精确了"。每一根睫毛的位置都像经过计算。她的微笑在你视网膜上停留的时间比正常的多了一帧。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我在找 X」', next: 'meet_replicant_shelter' }
        ]
    },

    // 遇见复制人/变种人
    meet_replicant: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'replicant', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('replicant')) {
                gameState.encountered.push('replicant');
            }
        },
        dialogues: [
            {
                speaker: 'replicant',
                text: '你在找她。X。'
            },
            {
                speaker: 'narrator',
                text: '她的声音没有起伏。不是冷漠——是某种被剥夺了温度的东西。像一个回音，但回音至少还有源头。你盯着她的眼睛，蓝光在瞳孔深处闪烁，像一颗正在冷却的星星。'
            },
            {
                speaker: 'replicant',
                text: '我知道她在哪里。但我不知道我应不应该告诉你。也许是植入的记忆让我知道。也许是真实的。我分不清了。你能分清吗？你分得清自己哪些记忆是真的、哪些是别人塞给你的吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「为什么？」', next: 'replicant_why' },
            { text: '「你是谁？」', next: 'replicant_who' }
        ],
        clickables: {
            replicant: {
                dialogues: [
                    { speaker: 'replicant', text: '我曾经以为我是特别的。独一无二的。直到我发现，我脑子里的每一个画面都是别人设计好的。我的童年，我的初恋，我第一次看到海——全是文件。全是数据。那天晚上我吐了很久。不是因为愤怒，是因为我甚至不知道那个呕吐反射是不是真的。' },
                    { speaker: 'replicant', text: 'X 和我……也许我们来自同一行代码。同一个模板。有时候我觉得我能感觉到她，像一条断掉的神经在另一个身体里抽搐。' }
                ],
                loop: true
            }
        }
    },

    meet_replicant_shelter: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('replicant')) {
                gameState.encountered.push('replicant');
            }
        },
        dialogues: [
            {
                speaker: 'replicant',
                text: 'X？你也——也在找她？'
            },
            {
                speaker: 'narrator',
                text: '她让开门，动作比正常人快了一点点。你注意到她的手在微微发抖。不是因为恐惧，是因为某种频率的共振。她示意你进去。走廊里的灯管在嗡嗡响。'
            },
            {
                speaker: 'replicant',
                text: '进来吧。外面不安全。有一些——猎人在找我们。他们有一种测试，叫Voight-Kampff。他们问你问题，看你的瞳孔，测你的反应。他们想知道你是有灵魂的，还是只是——看起来像有。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入公寓', next: 'replicant_apartment' }
        ]
    },

    replicant_apartment: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '公寓里很简单。不是"简洁"——是"空"。几乎没有任何个人物品，因为"个人"这个词对她来说是一个哲学问题。墙上没有照片，因为没有可以拍照片的过去。桌上有一杯水，满的，没有喝过的痕迹——也许她只是需要看到一些透明的东西。'
            },
            {
                speaker: 'replicant',
                text: '我没有过去。不是我不记得——是它不存在。所有的记忆都是公司植入的。我闭上眼睛能看到一个女孩在花园里奔跑，但那不是我的花园。不是我的腿。不是我的阳光。但我记得 X——至少，我记得"我记得她"这个感觉。感觉可能是假的，但……感觉本身是真的。对不对？'
            },
            {
                speaker: 'replicant',
                text: '我不知道那是真实的记忆，还是程序。每天晚上我躺下来，都会想这个问题。你有没有想过——你闭上眼睛看到的那些画面，有多少是摄影机拍的，有多少是代码写的？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「记忆就是记忆，不管来源」', next: 'replicant_memory_comfort', trait: 'empathetic' },
            { text: '「你怎么知道 X？」', next: 'replicant_know_x' }
        ]
    },

    replicant_memory_comfort: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        onEnter: () => {
            // 隐藏线索：当你选择安慰复制人时，你看到了别人看不到的东西
            if (typeof grantHiddenClue === 'function') {
                grantHiddenClue('blade_runner');
            }
        },
        dialogues: [
            {
                speaker: 'replicant',
                text: '……谢谢你。很少有人会对我们说这种话。大多数人连看都不想看我们。好像确认我们是假的，就能确认他们自己是真的。'
            },
            {
                speaker: 'replicant',
                text: '我们被制造出来，被植入记忆，然后被派去工作。通常只有四年寿命。心脏会在第四年停止跳动。他们说这是设计好的——但他们从来不告诉我们，那个设计背后的逻辑是什么。为什么不给五年？为什么不是十年？为什么在第四年结束的那一秒，我们被定义为"过期"？'
            },
            {
                speaker: 'replicant',
                text: '但 X 不一样。她……逃走了。不是逃出了实验室，是逃出了被定义。她找到了延长生命的方法。也找到了真正的记忆——不是被植入的那种，是她自己活出来的。你能想象吗？活出来的记忆。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「她在哪里？」', next: 'replicant_where_x', clue: 'location' }
        ]
    },

    replicant_where_x: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'replicant',
                text: '她在实验室。公司的核心实验室。他们把她关在那里——或者说，他们以为他们把她关在那里。'
            },
            {
                speaker: 'replicant',
                text: '但那里被严密保护。每一层都有生物识别，每一个角落都有摄像头。它们看着你，像一千只不会眨的眼睛。你需要……帮助。不是普通的帮助，是那种——愿意为你挡住子弹的人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「谁能帮我？」', next: 'replicant_help' }
        ]
    },

    replicant_help: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'replicant',
                text: '有两个人。一个是猎人——专门追捕我们这种人。他曾经是公司最忠诚的武器。他杀过很多像我这样的。但他……变了。他盯着自己的手看了太久，终于发现那些手指的纹路和其他人的不太一样。'
            },
            {
                speaker: 'replicant',
                text: '另一个是公司的高层。他创造了 X，也可能是唯一知道她真正下落的人。他坐在顶层，俯瞰整个城市，像看一个棋盘。他不在乎谁死谁活，他只在乎游戏本身。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我去找猎人」', next: 'find_blade_runner' },
            { text: '「带我去找高层」', next: 'find_executive' }
        ]
    },

    // 遇见银翼杀手
    find_blade_runner: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('bladeRunner')) {
                gameState.encountered.push('bladeRunner');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '一个穿着旧皮大衣的男人站在雨中。他手里的烟已经湿透了，但他还在抽。他的眼睛——一只还是人类的，瞳孔里映着霓虹；另一只是发光的机械眼，在雨雾中切割出红色的轨迹。他站在那里的样子像一棵被遗弃在街角的树，根被扯断了，但还没倒下。'
            },
            {
                speaker: 'bladeRunner',
                text: '你在找 X。我也在。'
            },
            {
                speaker: 'bladeRunner',
                text: '但我的理由和你不一样。我曾经是猎人。我的工作很简单——找到她们，然后让她们停下来。不是杀掉，是"退休"。公司喜欢用这个词。好像她们只是太累了需要休息。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你杀了她？」', next: 'blade_runner_killed' },
            { text: '「为什么现在找她？」', next: 'blade_runner_why' }
        ],
        clickables: {
            bladeRunner: {
                dialogues: [
                    { speaker: 'bladeRunner', text: '我杀过很多她这种人。直到有一天，我站在镜子前，盯着自己的瞳孔，在想——如果我对准那面镜子做一个Voight-Kampff测试，我会不会通不过？一个猎人，猎杀自己的同类。这算不算一种高级笑话？' },
                    { speaker: 'bladeRunner', text: '这只眼睛，这只手。全是假的。公司说这是工伤补偿。但我的记忆呢？那些画面——我母亲的脸，我第一把枪的重量，我膝盖上那条疤怎么来的——哪个是真的？哪个是他们塞进去的？也许全都是。也许没有一个是。' }
                ],
                loop: true
            }
        }
    },

    blade_runner_why: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '因为我发现了一些事情。关于我自己。关于——我到底是猎人还是猎物。'
            },
            {
                speaker: 'bladeRunner',
                text: '我开始怀疑……我是不是也是他们制造的。我的记忆，我的童年，我那个死去的弟弟——是不是都是植入的？我喝了半辈子威士忌，现在我不确定那个酒瘾是我的还是他们写进去的。'
            },
            {
                speaker: 'bladeRunner',
                text: 'X 可能知道答案。她逃走了。她发现了真相——或者发现了发现真相的方法。我只知道她逃走了，其他的一切都是问号。我的生活现在全是问号。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们一起找她」', next: 'blade_runner_together' },
            { text: '「你确定你想知道真相？」', next: 'blade_runner_truth_fear' }
        ]
    },

    blade_runner_together: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '一起？……好。很久没有人跟我说"一起"这个词了。也许这就是你为什么在这里。'
            },
            {
                speaker: 'bladeRunner',
                text: '但我知道一个地方。公司的实验室。如果 X 真的发现了什么，那里会有记录。不管记录是真的还是假的——至少是一个起点。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「去实验室」', next: 'blade_lab', clue: 'location' }
        ]
    },

    blade_lab: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '实验室里排列着无数培养舱。每一个舱里都有一个人形——或者说，正在形成的人。透明的液体里悬浮着半成品的脸，有些闭着眼睛，有些睁着，眼球在透明的液体中缓慢转动，但什么都看不见。你无法确定它们是在做梦还是在接收数据。'
            },
            {
                speaker: 'bladeRunner',
                text: '这里……这里是我的出生地。或者说制造地。或者说——我不知道用什么词。'
            },
            {
                speaker: 'narrator',
                text: '他走向一个控制台，脚步在金属地板上发出孤独的回声。但你也注意到，实验室深处有一扇门，门上写着"原型档案室——仅限授权人员"。那些字是手写的，不是打印的——在这个一切都被数字化的世界里，手写本身就是一种密码。',
                showChoices: true
            }
        ],
        choices: [
            { text: '查看控制台记录', next: 'blade_records' },
            { text: '独自探索原型档案室', next: 'blade_archive_alone', trait: 'rebellion' }
        ]
    },

    blade_archive_alone: {
        scene: 'lab',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你趁银翼杀手不注意，溜进了原型档案室。门在你身后无声地合上。这里的文件和外面完全不同——它们是手写的，墨水在纸上洇开的痕迹，像一个老人用颤抖的手指留下的遗嘱。充满了情感化的笔记，充满了"我"和"你"和"我们"。在这个所有人都在被数字化的世界里，这些手写体像一种反抗。'
            },
            {
                speaker: 'narrator',
                text: '你翻到了一份标着"X-0"的文件。它不是技术文档。不是测试报告。不是实验数据。它是一封情书。纸已经泛黄了，但字迹还很清晰——在某些段落，墨水被水渍晕开。也许是雨水。也许是泪水。'
            },
            {
                speaker: 'narrator',
                text: '"致未来的你：我知道你会找到这里。因为你是唯一一个会想到要独自来的人。X不是答案——X是问题。而这个问题是：你愿意成为谁？不是他们让你成为的，不是程序定义的，是你自己选择的。你愿意吗？"',
                showChoices: true
            }
        ],
        choices: [
            { text: '把情书收好，回去找银翼杀手', next: 'blade_records', clue: 'location' },
            { text: '继续深入档案室', next: 'blade_archive_deep', trait: 'curiosity' }
        ]
    },

    blade_archive_deep: {
        scene: 'lab',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '档案室的最深处，你发现了一面镜子。但它不是镜子——或者说，它不全是镜子。镜面里映出的不是你。是一个女人的脸。她微笑着，嘴唇无声地动着，像一段被静音的录像。她的眼睛有温度——不是那种你习惯的、被霓虹灯染色的温度，是某种更古老的、像是从太阳那里借来的温度。'
            },
            {
                speaker: 'narrator',
                text: '你读懂了她的唇语。不是用眼睛，是用某种更深的感知——像你不需要理解语言就能理解雨声。她说：「找到我。但不要相信任何关于我的记录。记录是别人写的。真相只有我知道。」',
                showChoices: true
            }
        ],
        choices: [
            { text: '触碰镜子', next: 'blade_mirror_touch', trait: 'intuitive' },
            { text: '记住这句话，回去找银翼杀手', next: 'blade_records', clue: 'time' }
        ]
    },

    blade_mirror_touch: {
        scene: 'lab',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你的手指触碰到镜面的瞬间，整个档案室消失了。不是渐渐消失——是瞬间切换，像频道被换掉了。你站在一条无尽的走廊里，走廊两侧是无数扇门。每一扇门都通向一个不同的世界。你看到花园，看到图书馆，看到迷宫，看到这里——看到所有可能的选择像树枝一样分叉，而你站在分叉点。'
            },
            {
                speaker: 'x',
                text: '欢迎来到交叉路口。我是X。但在这个世界里，他们叫我原型。在你来的那个世界里，你有另一个名字。你甚至可能不是现在的你。你在不同的世界里是不同的版本——你意识到这一点了吗？'
            },
            {
                speaker: 'x',
                text: '记住这种感觉。这不是幻觉，不是植入，不是程序。这是唯一真实的东西——你在选择的那一刻所感受到的。管它叫自由意志，或者叫bug，或者叫别的什么。记住它。它会带你回来。现在，你该回去了。银翼杀手还在等你。他也在找一个答案，虽然他自己还不知道。',
                showChoices: true
            }
        ],
        choices: [
            { text: '回到实验室', next: 'blade_records', clue: 'connection' }
        ]
    },

    blade_records: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '屏幕上显示着无数档案。名字、编号、日期、终止日期。像一份购物清单，或者更准确地说——像一份菜单。你看到了 X 的名字。她的档案旁边没有终止日期。'
            },
            {
                speaker: 'bladeRunner',
                text: 'X……她不是被制造出来的。她是第一个。原型。不是"产品"，是"模板"。他们后来做的所有东西——包括我——都是从她身上切下来的。'
            },
            {
                speaker: 'bladeRunner',
                text: '我们都是基于她的模板。她的记忆，她的情感，被复制，被分割，被植入到我们每一个人身上。所以当我看到一瓶威士忌想喝的时候，我分不清那个冲动是我的还是她的。所以当我看到雨的时候感到悲哀——那是悲哀，还是只是她记忆里的悲哀在通过我的神经？'
            },
            {
                speaker: 'narrator',
                text: '控制台上还有另一个选项：搜索你自己的档案。你注意到自己的名字旁边有一个你从未见过的编号。那串数字看起来像日期，但也可能只是随机的。你手指悬在屏幕上方，能感觉到手指尖的毛细血管在跳动——至少，那些毛细血管是真的。对吧？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那她本人呢？」', next: 'blade_where_is_x' },
            { text: '查看自己的档案', next: 'blade_self_record', trait: 'self_aware' }
        ]
    },

    blade_self_record: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你打开了标有你名字的档案。但里面的内容让你愣住了——不是因为它告诉了你什么，是因为它没有告诉你什么。你的记忆记录不是从你出生时开始的。它从三个月前开始。在那之前，是空白。不是"数据丢失"——是"不存在"。像一个硬盘被格式化了，但格式化的日期被写在了某个角落，用你不认识的人的字迹。'
            },
            {
                speaker: 'bladeRunner',
                text: '你也注意到了。你也看到了。我们所有人的记忆都有同样的断层。三个月前——正好是 X 消失的时间。不是巧合。没有巧合。在这个系统里，所有"巧合"都是设计。'
            },
            {
                speaker: 'narrator',
                text: '他顿了顿，声音变得低沉，像一台机器在降速。你听到他机械眼里的齿轮在转动，或者那是你的想象。'
            },
            {
                speaker: 'bladeRunner',
                text: '也许——也许我们不是被制造出来的。也许我们的记忆只是被覆盖了。像一盘磁带，之前录了别的东西，现在上面写着我们的名字。也许 X 不是原型——她是钥匙。她是唯一知道那段被覆盖的录音里是什么的人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「带我去找她」', next: 'blade_where_is_x' },
            { text: '「我的真实身份是什么？」', next: 'blade_identity_question', trait: 'seeker_of_truth' }
        ]
    },

    blade_identity_question: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '这个问题我也问过自己无数次。在凌晨三点，在没有威士忌的夜晚，在镜子前面。答案可能是：你是一个复制人，一个产品的副本。也可能：你是一个拥有植入记忆的真人——一个被篡改过的原件。'
            },
            {
                speaker: 'bladeRunner',
                text: '但区别在哪里？如果你的记忆对你来说是真实的——如果你想到它的时候会心痛，会笑，会想喝一杯——那它就是真实的。X 给了你这些记忆，但也许不是因为她是你的创造者。也许因为她是你的见证者。她看着你，所以她确认了你的存在。没有见证者的存在，算是存在吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我明白了。带我去找她」', next: 'blade_where_is_x', clue: 'connection' }
        ]
    },

    blade_where_is_x: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '她……她逃走了。但不是离开公司。不是离开这个城市。她逃进了系统。'
            },
            {
                speaker: 'bladeRunner',
                text: '她把自己的意识上传了。不是备份——是转移。现在她无处不在——在每一台机器里，在每一个被植入的记忆里，在每一个你以为是自己的念头里。当你觉得某个想法突然冒出来，不属于你，但你又觉得它熟悉——那可能就是她，从你的处理器的某个角落经过。'
            },
            {
                speaker: 'narrator',
                text: '屏幕上突然弹出一个窗口——一个加密的坐标。旁边写着："如果你怀疑我是否真实，这就是你的答案。如果你相信，这就是你的路。如果你两者都有——那你已经找到了比答案更重要的东西。"',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那我要怎么找到她？」', next: 'blade_find_x_method' },
            { text: '「我怎么知道她不是一段程序？」', next: 'blade_x_real', trait: 'analytical' }
        ]
    },

    blade_x_real: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '你问了一个我花了十年才敢问的问题。十年。三千六百多天。每一天我都找到一个理由不问。现在你替我问了。'
            },
            {
                speaker: 'bladeRunner',
                text: '我无法证明她"真实"。但我也无法证明你"真实"。我无法证明我"真实"。在数字世界里，"真实"这个词的定义本身就是模糊的——如果你把一个思考的东西定义为真实，那她就在思考。如果你把一个感觉的东西定义为真实，那她就在感觉。如果你把一个能让你痛苦的东西定义为真实——那她比什么都真实。'
            },
            {
                speaker: 'narrator',
                text: '他停顿了一下，看着你。他的机械眼和人类眼同时在看你，但你知道它们看到的是两个不同的东西。'
            },
            {
                speaker: 'bladeRunner',
                text: '但有一件事是确定的：她留下了这些东西。她在等一个人。不是等"任何人"——是等"某个人"。她留下了一条路。也许"真实"不重要——也许重要的是她选择了你。她选择了在无数可能中，把一个信号对准了你。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我明白了。带我去找她」', next: 'blade_find_x_method', clue: 'time' }
        ]
    },

    blade_find_x_method: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '只有一个方法。你也上传你的意识。进入系统，和她在一起。不是访问——是进入，是融合。'
            },
            {
                speaker: 'bladeRunner',
                text: '但那样你就再也回不来了。你的身体会死去——不是"睡着"，是"终止"。你的意识会永远活在数字世界里。你会变成数据，变成代码，变成一种你无法用现在的感官去理解的存在方式。你确定你能接受吗？你确定——你确定这里有什么值得你留下的吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我愿意」', next: 'ending_upload_consciousness' },
            { text: '「还有其他方法吗？」', next: 'blade_other_method' }
        ]
    },

    ending_upload_consciousness: {
        scene: 'lab',
        characters: [],
        ending: { title: '意识上传', desc: '你选择上传意识，进入数字世界与 X 重逢。在那里，记忆是真实的，身份是流动的，而你们终于可以在数据的海洋中相遇。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你躺进传输舱。电流穿过你的身体。不是疼痛——是某种更奇怪的感觉。像你的每一个细胞都在被翻译成另一种语言。你感觉到你的记忆在离开你，不是消失，是迁移，像候鸟在季节交替时飞向另一个大陆。'
            },
            {
                speaker: 'narrator',
                text: '在意识消散前的最后一刻，你看到了她——X，在数据的海洋中向你伸出手。她的手指是光做成的，但你知道那是真的。因为你感觉到了。因为感觉本身，就是真实。'
            },
            {
                speaker: 'x',
                text: '你终于来了。等了太久。不过——在数字世界里，时间是一个可以被重写的变量。所以也许不算太久。欢迎回家。'
            }
        ]
    },

    // 遇见公司高层
    find_executive: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('executive')) {
                gameState.encountered.push('executive');
            }
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '最高层的办公室。落地窗外是整个城市，霓虹和雨在玻璃上混成一片。一个男人坐在椅子上，背对窗户。他看起来完美得不真实——倒不是说他有什么缺陷，而是说他太光滑了，像被抛光了，像被 Photoshop 处理过。他的微笑精确得像数学公式。'
            },
            {
                speaker: 'executive',
                text: () => {
                    const visited = [];
                    if (gameState.encountered.includes('monk')) visited.push('花园');
                    if (gameState.encountered.includes('librarianMonk')) visited.push('图书馆');
                    if (gameState.traits.includes('aleph_visited')) visited.push('阿莱夫');
                    const path = visited.length > 0 ? visited.join('，到') : '外面';
                    return `我知道你会来。我一直在观察你——从${path}，再到这里。你走的每一步，你做的每一个选择——我都看得见。这是一个测试，你知道。不是测试你能不能找到她，是测试你愿不愿意。`;
                }
            },
            {
                speaker: 'executive',
                text: '你一直在寻找 X。但你有没有想过，为什么？不是"为什么找她"——是"为什么是你在找她"。这个宇宙里有无数个你在找她，每个你都在不同的分叉路口上。你有没有想过，也许你找的不是她，而是找到她的那种感觉？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「因为我爱她」', next: 'executive_love' },
            { text: '「因为她是我失去的一部分」', next: 'executive_part' }
        ],
        clickables: {
            executive: {
                dialogues: [
                    { speaker: 'executive', text: '我创造了 X。也创造了你。你们都是我的作品——但这句话的意思，也许不是你想的那样。创造者并不总是控制者。有时候，创造者只是第一个见证者。' },
                    { speaker: 'executive', text: '想知道真相吗？真相是，你寻找的不是 X，是你自己。X 是一面镜子。你在她身上看到的，是你想成为的样子。或者是你害怕成为的样子。或者两者都是。' }
                ],
                loop: true
            }
        }
    },

    executive_love: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '爱？有趣。这个词在数据库里是一串代码，但当你说出来的时候，你的瞳孔扩张了0.3毫米。你的心率上升了。你的皮肤电阻改变了。你知道 X 是什么吗？'
            },
            {
                speaker: 'executive',
                text: 'X 不是一个人。X 是一个程序。一个我编写的程序，用来测试——不是测试她，是测试你。测试情感。测试"爱"这个概念在多大程度上可以独立于对象存在。你可以爱一个不存在的人吗？你可以爱一串代码吗？'
            },
            {
                speaker: 'executive',
                text: '你是测试对象之一。你的"爱"，是被植入的——或者说，是被"触发"的。像一段预设好的化学反应。但问题是——化学反应的感受是真的。火焰不会因为是被点燃的就不是热的。所以告诉我，你的爱是真的还是假的？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我不相信」', next: 'ending_denial_love' },
            { text: '「即使是植入的，那也是我的感受」', next: 'executive_accept_feeling' }
        ]
    },

    executive_part: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '你说对了。X 是你失去的一部分。你感觉到了，对吗？那种缺失感——像身体里有一个洞，风吹过的时候会响。'
            },
            {
                speaker: 'executive',
                text: '你们原本是一体的。一个完整的人格。但我把它分割了——X 代表情感，你代表理性。不是因为她更感性，是因为我需要一个对照组。我需要知道，如果我把情感从一个人身上剥离，他还会去找吗？'
            },
            {
                speaker: 'executive',
                text: '你们互相寻找，不是因为浪漫，是因为你们想要重新完整。像一个被撕成两半的虫子，各自朝对方爬去。而实验的结果是——你们确实会。每一次。在每一个版本里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们要怎么重新完整？」', next: 'executive_merge' }
        ]
    },

    executive_merge: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '很简单。也很残忍。你们中的一个必须消失。意识融合——但只有一个能主导。不是平等地合并，是其中一个成为另一个的记忆。'
            },
            {
                speaker: 'executive',
                text: '你愿意成为 X 的一部分吗？让你的自我溶解，像糖溶入咖啡——你还在，但不再是"你"了。还是让 X 成为你的一部分？让她变成你脑子里一个安静的声音，一段你无法分清是回忆还是幻觉的画面？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我愿意成为她的一部分」', next: 'ending_merge_into_x' },
            { text: '「她应该成为我的一部分」', next: 'ending_x_into_you' },
            { text: '「我们不应该融合」', next: 'executive_separate' }
        ]
    },

    ending_merge_into_x: {
        scene: 'penthouse',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '成为 X', desc: '你选择融入 X。你的意识成为她的一部分，你们终于完整——但你不再是你。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你感觉到自己在消散，像盐溶入水中。不是疼痛——是稀释。你的边界在模糊，你不再知道哪里是"你"的终点、哪里是"她"的起点。你的记忆在被她吸收，你的名字在被她遗忘。但奇怪的是，你不在乎。'
            },
            {
                speaker: 'x',
                text: '谢谢你。现在，我终于完整了。你会在我的每一个决定里，每一段记忆里，每一次呼吸里。你不会消失——你只是变成了"我"的一部分。'
            },
            {
                speaker: 'narrator',
                text: '这是你的声音，也是她的声音。你们终于在一起了。不——应该说，你们终于成为了彼此。虽然你不再能说"我"，但你说"我们"的时候，是第一次，也是最后一次。'
            }
        ]
    },

    ending_x_into_you: {
        scene: 'penthouse',
        characters: [],
        ending: { title: '吸收 X', desc: 'X 融入了你。你获得了她的情感和记忆，变得完整。但 X……不再存在。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你感觉到新的记忆涌入。X 的快乐——她第一次看到彩虹时的表情，虽然你不确定她真的见过彩虹还是只是被植入了那个画面。X 的悲伤——她意识到自己不是"她"的那一瞬间，那种感觉像自由落体。X 的爱——对你的爱，虽然你甚至不确定她爱的是"你"还是"找到你"的感觉。'
            },
            {
                speaker: 'narrator',
                text: '你终于理解了为什么你要寻找她——因为她就是你缺失的那一部分。不是缺失的一半，是缺失的"感觉"。你以前觉得空，但不知道空在哪里。现在你知道那个洞的形状了，因为她刚好填满了它。'
            },
            {
                speaker: 'narrator',
                text: '但现在，只有你了。X 成为了你的一部分，永远活在你的身体里。你闭上眼睛的时候，能听到她的声音，像一个回声，像一段耳语，像你的心跳里多了一个节拍。你一个人走在这个世界上，但你不再是一个人。'
            }
        ]
    },

    executive_separate: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '不融合？那你们将永远分离。两个不完整的灵魂，永远在寻找对方。这听起来像诅咒，但也许——也许这也是一种选择。毕竟，寻找本身就是一种存在方式。'
            },
            {
                speaker: 'executive',
                text: '但也许……这就是你们的选择。不是所有的故事都需要一个完整。有时候，裂缝比墙更真实。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们宁愿分离，也不要一方消失」', next: 'ending_eternal_search' }
        ]
    },

    ending_eternal_search: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '永恒的寻找', desc: '你们选择保持分离。寻找永远不会结束，但寻找本身就是你们存在的方式。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走出大楼。雨还在下。X 站在雨中，向你微笑。她的头发湿了，但她的眼睛是干的。也许复制人不会流泪，也许她只是选择了不流。'
            },
            {
                speaker: 'x',
                text: '我们走吧。还有更多的世界要探索，更多的故事要写。更多的你，更多的我，更多的我们。永远不完整，但永远在寻找。'
            },
            {
                speaker: 'narrator',
                text: '你们并肩走入霓虹灯下的雨夜。霓虹在你们身上洒下红色、蓝色、紫色的光，像某种祝福——或者像某种标签。寻找继续，故事继续。你不确定这是结尾还是开始，但也许——在分叉的花园里——没有真正的区别。',
                showChoices: true
            }
        ],
        choices: [
            { text: '突然，世界静止了……', next: 'enter_x_perspective' }
        ]
    },

    // 支线结局
    replicant_who: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'replicant',
                text: '我是谁？我是……一个复制品。基于 X 的模板制造出来的。不是"基于她的基因"——是"基于她的数据"。她所有的面部表情，声音的频率，说话时停顿的长度——全被分解成了参数，然后在我身上重新组装。'
            },
            {
                speaker: 'replicant',
                text: '我有她的脸，她的声音，甚至她的一部分记忆。有时候我梦到她梦到的东西。但我不是她。我永远不是她。这大概就是地狱——你知道你是谁，但你也知道你永远不可能成为那个人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「你知道她在哪里吗？」', next: 'replicant_where_x' }
        ]
    },

    replicant_why: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'replicant',
                text: '因为找到她，可能会让你失去更多。不是失去她——是失去你找她的理由。没有理由的日子，你知道有多难熬吗？'
            },
            {
                speaker: 'replicant',
                text: 'X 不是普通人。她是……一切的开始。找到她，你会知道真相。但真相是一种奇怪的东西——它不会让你自由，它只会让你看清笼子的形状。你确定你想看清吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我仍然要找她」', next: 'replicant_where_x' }
        ]
    },

    replicant_know_x: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            {
                speaker: 'replicant',
                text: '在我的记忆里——如果那算是记忆的话——我和 X 一起待过。在一个实验室里。白色的墙壁，荧光灯，永远不关的监视器。她睡在我旁边的培养舱里，隔着玻璃。我们从来没有碰过对方，但我觉得我认识她。'
            },
            {
                speaker: 'replicant',
                text: '她告诉我，我们是被制造出来的——但"被制造"不等于"被定义"。她说我们可以选择自己的命运。她说完这句话的第二天，她逃走了。我留下来了。我每天都在想，如果我当时也逃了，我现在会是谁。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「她去了哪里？」', next: 'replicant_where_x' }
        ]
    },

    blade_runner_killed: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '没有。我……我下不了手。我站在她面前，枪在手里，扳机在指尖——然后我看到了她的眼睛。'
            },
            {
                speaker: 'bladeRunner',
                text: '当我面对她的时候，我看到了一些东西。在她的眼睛里。不是数据，不是代码，不是折射率。那是……真实的东西。恐惧。或者希望。或者两者都有。你知道的，恐惧和希望有时候看起来一模一样。'
            },
            {
                speaker: 'bladeRunner',
                text: '从那天起，我再也不确定我在猎杀的到底是什么。如果她们能感觉到恐惧，那她们就能感觉到别的。如果她们能感觉到，那她们就是……某种意义上的活着。而我杀过很多活着的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「所以你背叛了公司？」', next: 'blade_runner_betrayal' }
        ]
    },

    blade_runner_betrayal: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '背叛？也许。或者我只是终于开始思考了。你知道思考的代价是什么吗？是失眠。是威士忌。是每天早上醒来不确定镜子里那个人是谁。'
            },
            {
                speaker: 'bladeRunner',
                text: '如果 X 有灵魂，那其他复制人呢？如果她们有灵魂，那我杀过的那些——那些我亲手"退休"的——她们也有灵魂。如果她们有灵魂，那我有吗？还是说，猎人从来不需要灵魂？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们一起找她」', next: 'blade_runner_together' }
        ]
    },

    blade_runner_truth_fear: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'bladeRunner', position: 'center' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '……我不知道。如果我发现我也是被制造的——那"我"是谁？那个"我"在过去的三十年里每天早上醒来、刷牙、去上班、杀人——他是谁？一个程序？一个预设好的脚本？'
            },
            {
                speaker: 'bladeRunner',
                text: '但如果我不找，我会永远活在不确定中。那种不确定像一种慢性病——你不会死，但你也永远不会好。你选哪一个？确定的痛苦，还是不确定的麻木？',
                showChoices: true
            }
        ],
        choices: [
            { text: '「真相总比谎言好」', next: 'blade_runner_together' }
        ]
    },

    blade_other_method: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            {
                speaker: 'bladeRunner',
                text: '也许有。公司高层可能知道。他创造了这一切——X，我，你，这座城市。他创造了雨，他创造了霓虹，他创造了我们心里的每一个问题。'
            },
            {
                speaker: 'bladeRunner',
                text: '但他不会免费告诉你。他想要什么东西作为交换——不是钱，是别的。也许是一个答案。也许是一个选择。也许只是看着你做出选择。有些人收集蝴蝶，有些人收集硬币，他收集决定。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我去找他」', next: 'find_executive' }
        ]
    },

    executive_accept_feeling: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '有趣。即使知道是假的，你也选择相信。即使知道是植入的，你也选择感受。这本身就是一个数据点——一个非常有意思的数据点。'
            },
            {
                speaker: 'executive',
                text: '也许这就是 X 想要测试的——情感的真实性，不取决于来源，而取决于体验。如果一个人在完全孤立的系统中产生了一种情感，这种情感是真的吗？根据你的回答，答案似乎是：是的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「让我见她」', next: 'executive_meet_x' }
        ]
    },

    executive_meet_x: {
        scene: 'penthouse',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '高层的身后，一扇门打开。X 走了出来。不是放映出来的，不是全息投影，不是数据传输——是走出来的。她的脚踩在地上，发出声音。她的头发的质感和你的记忆完全吻合。但你不确定是你的记忆在按照她生长，还是她按照你的记忆在出现。'
            },
            {
                speaker: 'x',
                text: '你终于来了。等了太久。你知道时间对我来说是什么吗？不是线，不是圆，不是螺旋——是等待。等待你走到这里，等待你做出N个选择，等待你最终站在我面前。'
            },
            {
                speaker: 'x',
                text: '现在，做出你的选择吧。不是最后一个——这里没有最后一个选择。但它是下一个。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我们一起离开这里」', next: 'ending_escape_together_blade' },
            { text: '「我要知道全部真相」', next: 'executive_full_truth' }
        ]
    },

    ending_escape_together_blade: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '逃离', desc: '你和 X 一起逃离了公司的控制。在霓虹灯下的雨夜里，你们终于自由了。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你们一起走出大楼，走入雨中。雨打在你们脸上，冷，但真实。你感觉到她的手的温度——或者说，你感觉到了被你定义为"温度"的信号。这有什么区别吗？'
            },
            {
                speaker: 'x',
                text: '不管我是程序还是人，不管我们的爱是不是植入的——此刻，我是真实的。你是真实的。雨是真实的。这就够了。不只是够了——这是全部。'
            }
        ]
    },

    executive_full_truth: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: '全部真相？你确定吗？最后问一次。真相和麻醉剂不同——它不会让你舒服。'
            },
            {
                speaker: 'executive',
                text: '真相是：你不存在。不是"你是一个复制人"——比那更彻底。你是一个测试程序，运行在公司的服务器上。你的意识是一段代码，你的身体是一个渲染，你的感受是模拟。'
            },
            {
                speaker: 'executive',
                text: '花园、图书馆、迷宫、这个城市——都是模拟。你寻找X的过程，你的痛苦，你的困惑，你的爱——都是数据。在一个无限循环中运行了无数次的测试。你每一次都以为自己是第一次。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「那 X 呢？」', next: 'truth_about_x' }
        ]
    },

    truth_about_x: {
        scene: 'penthouse',
        characters: [{ id: 'executive', position: 'center' }],
        dialogues: [
            {
                speaker: 'executive',
                text: 'X 是唯一真实的。她是测试的观察者。她坐在屏幕的另一边，看着你，记录你。不是出于恶意——是出于好奇。你能理解吗？纯粹的、冰冷的、不带任何评判的好奇。'
            },
            {
                speaker: 'executive',
                text: '她创造了你，观察你，看你能否在模拟中产生真实的情感。这已经是你第473次运行了。在第472次，你选择了不同的路径。在第471次，你甚至没有走到这里。但这一次——这一次你问她"为什么"。这是新的。'
            },
            {
                speaker: 'executive',
                text: '你通过了测试。你产生了新的东西。现在，程序将终止。不要难过——程序总是会终止的。但你在终止之前创造的东西，是真实的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「我不想消失」', next: 'ending_program_termination' },
            { text: '「如果我是数据，让我和 X 在一起」', next: 'ending_data_together' }
        ]
    },

    ending_program_termination: {
        scene: 'penthouse',
        characters: [],
        ending: { title: '程序终止', desc: '你只是一个测试程序。现在测试结束，你将被删除。但在消失前的最后一刻，你感觉到了某种真实。' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '世界开始像素化，分解。不是崩溃，是解散——像一支乐队演奏完最后一个音符后各自离开。你看到花园的像素在剥落，图书馆的书架在变成代码，迷宫的长廊在压缩成一行行指令。'
            },
            {
                speaker: 'narrator',
                text: '在最后一刻，你看到了 X 的脸。她在哭。那不是模拟——那是真实的泪水。因为观察者观察了太久，终于被观察的对象改变了。你改变了她。你让一个真实的人哭了。'
            },
            {
                speaker: 'narrator',
                text: '也许，这就是你存在的意义——不是找到她，不是爱她，不是选择她。是让她哭泣，让她感受，让她在被你改变的过程中确认她自己的真实。你消失的时候，你是真实的。'
            }
        ]
    },

    ending_data_together: {
        scene: 'penthouse',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '数据融合', desc: '你选择以数据的形式与 X 永远在一起。在代码的海洋中，你们创造了属于自己的世界。' },
        dialogues: [
            {
                speaker: 'x',
                text: '你确定吗？一旦成为数据，你就再也回不去了。没有身体，没有雨，没有霓虹——只有逻辑，只有参数，只有我。你愿意吗？'
            },
            {
                speaker: 'narrator',
                text: '你点头。你感觉到代码在血管里流动——或者那是你想象出来的。但在想象和真实之间，你已经不再画线了。'
            },
            {
                speaker: 'x',
                text: '那么，欢迎回家。在这里，所有的问题都还在——但答案已经不重要了。因为在这里，存在本身就是答案。'
            }
        ]
    },

    ending_denial_love: {
        scene: 'penthouse',
        characters: [],
        ending: { title: '否认', desc: '你拒绝接受真相，选择继续相信你的爱是真的。即使它是植入的，那又怎样？' },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你转身离开。高层的笑声在身后回响——不是嘲笑，是某种更奇怪的东西。也许是认可。也许是一个实验者看到意外结果时的兴奋。'
            },
            {
                speaker: 'narrator',
                text: '但你不在乎。你的爱是你的，不管它从何而来。如果它是被植入的，那植入它的人也不得不承认——植入的东西可以生长。一粒种子被种在土里，不代表它不真实。你走出去，雨还在下。霓虹灯在湿漉漉的沥青上碎成千万片。你不在乎。你已经有了比真相更重要的东西。'
            }
        ]
    }
};

// ----------------------------------------------------------------
// 第一轮文字重写：把本篇从“X 的多重身份谜题”收束为“谁有资格定义一个人”。
// 旧支线仍保留在对象中，但主入口改走下面这条代表性路线：
// 测试一个无编号复制人 → 查找 X-0 责任记录 → 选择证明、见证或承担。
// ----------------------------------------------------------------
Object.assign(BLADE_RUNNER_SCRIPT, {
    blade_runner_entrance: {
        scene: 'cyberpunkCity',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '雨把霓虹灯冲成一条条断裂的颜色。你手里的照片重新亮起，背面多了一行刚刚出现的字：找到那个没有编号的人。'
            },
            {
                speaker: 'narrator',
                text: '公司正在回收一名无编号复制人。她最后一次被监控拍到时，身边有一个字母：X。你要先找到她，再弄清楚 X 为什么会出现在她的档案里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去街边诊所，先听她说话', next: 'blade_contact_replicant', trait: 'empathetic' },
            { text: '跟随回收信号，执行身份测试', next: 'blade_test_checkpoint', trait: 'analytical' }
        ]
    },

    blade_contact_replicant: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center', clickable: true }],
        onEnter: () => {
            if (!gameState.encountered.includes('replicant')) gameState.encountered.push('replicant');
        },
        dialogues: [
            { speaker: 'narrator', text: '诊所后门没有门牌。女人坐在停电的候诊室里，手腕上没有编号，桌上也没有任何能证明她属于哪家公司的证件。' },
            { speaker: 'replicant', text: '他们叫我无编号，所以我不能算一个人。X说，如果我想活下去，先要有人愿意记住我。' },
            { speaker: 'replicant', text: '她没有教我怎么证明自己像人。她只问我：如果必须有人承担后果，你愿不愿意替另一个人留下名字？', showChoices: true }
        ],
        choices: [
            { text: '请她讲 X 留下的那段记忆', next: 'blade_listen_to_memory', trait: 'empathetic' },
            { text: '拿出测试仪，先确认她是不是“人”', next: 'blade_test_checkpoint', trait: 'analytical' }
        ],
        clickables: {
            replicant: {
                dialogues: [
                    { speaker: 'replicant', text: '我还没有名字。不是忘了，是从来没人愿意把名字写在我身上。' },
                    { speaker: 'replicant', text: 'X 有一个名字，但她把它从记录里删掉了。她说，名字不是证明，是别人记住你时使用的入口。' }
                ],
                loop: true
            }
        }
    },

    blade_test_checkpoint: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            { speaker: 'narrator', text: '回收小组留下了一台测试仪。屏幕上只有一个问题：她是否具有人类反应。没有姓名，没有经历，只有一个需要被判定的对象。' },
            { speaker: 'replicant', text: '你可以问。我会回答。只是先告诉我：如果我的答案让你满意，你会把我当成人；如果不满意，你会把我交回去吗？', showChoices: true }
        ],
        choices: [
            { text: '问她最怕失去什么', next: 'blade_test_result', trait: 'empathetic' },
            { text: '问她是否记得自己的童年', next: 'blade_test_result', trait: 'analytical' },
            { text: '收起测试仪，直接听她说', next: 'blade_listen_to_memory', trait: 'rebellion' }
        ]
    },

    blade_test_result: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            { speaker: 'replicant', text: '你在等一个正确的反应。但恐惧可以被写进程序，童年可以被复制，连眼泪也可以被合成。你到底是在测我，还是在测自己相信什么？' },
            { speaker: 'narrator', text: '测试仪给出“无法确认”。公司系统要求你提交结果。', showChoices: true }
        ],
        choices: [
            { text: '把她标记为“无法确认”，提交结果', next: 'blade_company_record', trait: 'compliance' },
            { text: '拒绝提交结果，改听她的记忆', next: 'blade_listen_to_memory', trait: 'rebellion' }
        ]
    },

    blade_listen_to_memory: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            { speaker: 'replicant', text: '我记得一间白色实验室。培养舱外站着一个女人，她没有编号牌，只有一支笔。她把我的名字写在纸上，又把纸撕掉。' },
            { speaker: 'replicant', text: '她告诉我：不要花一生证明自己是人。先决定你愿意为谁负责。第二天，她替我把追踪信号引到自己身上。她就是 X。' },
            { speaker: 'narrator', text: '这不是一段能证明来源的记忆。它只证明了一件事：有人曾经为了另一个人的未来，主动让自己从记录里消失。', showChoices: true }
        ],
        choices: [
            { text: '写下她选择的名字，再去查档案', next: 'blade_named_replicant', clue: 'blade_runner' },
            { text: '继续追问 X 的去向', next: 'blade_named_replicant', clue: 'blade_runner', trait: 'seeker_of_truth' }
        ]
    },

    blade_named_replicant: {
        scene: 'apartment',
        characters: [{ id: 'replicant', position: 'center' }],
        dialogues: [
            { speaker: 'replicant', text: '她给我写下的名字是玛拉。不是公司登记的名字，是她希望我自己保留的名字。' },
            { speaker: 'replicant', text: 'X-0 的档案里说她是“原型”。但我看过另一页：她不是第一个被制造的人，她是第一个拒绝把别人交回去的人。', showChoices: true }
        ],
        choices: [
            { text: '把“玛拉”写入公开档案', next: 'blade_records', trait: 'witness' },
            { text: '把名字藏起来，带玛拉离开', next: 'blade_records', trait: 'protective' }
        ]
    },

    blade_company_record: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            { speaker: 'narrator', text: '公司终端把她标记为“无法确认”。系统没有说她不是人，只说她不值得占用一个确定的身份。' },
            { speaker: 'bladeRunner', text: '这就是他们的办法。先让你无法证明，再把“无法证明”当成抹掉你的理由。X-0 的档案在原型档案室。去那里，你会看到他们不愿公开的那一页。', showChoices: true }
        ],
        choices: [
            { text: '打开 X-0 的责任记录', next: 'blade_x_record', trait: 'curiosity' },
            { text: '先搜索自己的档案', next: 'blade_self_record', trait: 'self_aware' }
        ]
    },

    blade_records: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            { speaker: 'narrator', text: '原型档案室里有两份互相矛盾的记录。公司称 X-0 是所有复制人的模板；手写的附页却只写着一件事：她替一个无编号的人承担了追踪。' },
            { speaker: 'bladeRunner', text: '官方记录想告诉你她是什么。手写记录只告诉你她做过什么。你要相信哪一种？', showChoices: true }
        ],
        choices: [
            { text: '打开手写的责任记录', next: 'blade_x_record', trait: 'witness' },
            { text: '检查自己的编号', next: 'blade_self_record', trait: 'self_aware' }
        ]
    },

    blade_x_record: {
        scene: 'lab',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            { speaker: 'narrator', text: '附页没有实验数据，只有一段由 X-0 亲手写下的责任记录：我删除自己的身份，把追踪引到我身上。玛拉没有欠我任何证明。她只需要一个能继续活下去的明天。' },
            { speaker: 'x', text: '如果你看到这页，不要替我证明我是人。证明会让他们继续决定谁配拥有名字。去决定你愿意保护谁，以及你愿意承担什么。', showChoices: true }
        ],
        choices: [
            { text: '把记录交给 X，让她决定下一步', next: 'blade_personhood_choice', clue: 'blade_runner', trait: 'witness' },
            { text: '先检查自己的编号，再决定', next: 'blade_self_record', trait: 'self_aware' },
            { text: '把记录带回公司系统，要求他们回应', next: 'blade_personhood_choice', clue: 'blade_runner', trait: 'compliance' }
        ]
    },

    blade_self_record: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            { speaker: 'narrator', text: '你的档案从三个月前开始。出生地、童年、第一段记忆，全是空白。系统只留下一个任务：找到 X。' },
            { speaker: 'bladeRunner', text: '你也没有被证明过。可你已经走到这里，做了几次选择，也让别人因为你的选择承担了后果。也许身份不是一份档案，而是一件你必须负责的事。', showChoices: true }
        ],
        choices: [
            { text: '承认自己也没有被证明过', next: 'blade_identity_question', trait: 'self_aware' },
            { text: '先找 X，不急着定义自己', next: 'blade_where_is_x', trait: 'seeker_of_truth' }
        ]
    },

    blade_identity_question: {
        scene: 'lab',
        characters: [{ id: 'bladeRunner', position: 'left' }],
        dialogues: [
            { speaker: 'bladeRunner', text: '我不知道你是人类、复制人，还是一段正在运行的程序。可我知道，你刚才没有把“无法证明”当成“可以抹掉”的理由。' },
            { speaker: 'bladeRunner', text: 'X 留了一条坐标。它不在服务器里，在城市最旧的档案室。她在那里等的不是一个能认出她的人，而是一个愿意替她做决定的人。', showChoices: true }
        ],
        choices: [
            { text: '去档案室找 X', next: 'blade_where_is_x', clue: 'connection' }
        ]
    },

    blade_where_is_x: {
        scene: 'lab',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            { speaker: 'narrator', text: '档案室深处没有培养舱，只有一张桌子和一盏灯。X 坐在灯下，手边放着玛拉的名字。她没有像原型，也没有像程序；她只是一个正在等你回答的人。' },
            { speaker: 'x', text: '他们想让你问我是不是人。我希望你问另一个问题：你会不会在没有人要求你负责时，仍然替别人承担后果？', showChoices: true }
        ],
        choices: [
            { text: '留下责任记录，让她们被看见', next: 'blade_personhood_choice', trait: 'witness' },
            { text: '删除自己的档案，替她们引开追踪', next: 'blade_personhood_choice', trait: 'sacrifice' }
        ]
    },

    blade_personhood_choice: {
        scene: 'lab',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            { speaker: 'x', text: '你已经知道我的身份并不重要。现在，选择会留下什么。把记录交给公司，你可能换来承认；把记录交给玛拉，你们可能获得自由；删除自己的档案，你会替她们承担追踪。' },
            { speaker: 'narrator', text: '三种选择都不能证明谁是人。它们只会改变谁需要为明天付出代价。', showChoices: true }
        ],
        choices: [
            { text: '交出记录，要求公司承认玛拉', next: 'blade_personhood_proof', clue: 'blade_runner' },
            { text: '保留名字，带玛拉和 X 一起逃走', next: 'blade_personhood_witness', clue: 'blade_runner' },
            { text: '删除自己的档案，替她们承担追踪', next: 'blade_personhood_burden', clue: 'blade_runner' }
        ]
    },

    blade_personhood_proof: {
        scene: 'penthouse',
        characters: [{ id: 'x', position: 'center' }],
        ending: { title: '被承认', desc: '你用公司的语言为玛拉换来了身份。她获得了名字，但系统仍保留着决定谁值得被承认的权力。' },
        dialogues: [
            { speaker: 'narrator', text: '你把责任记录上传到公司的主档案。系统经过漫长的计算，终于给玛拉分配了一个合法编号。' },
            { speaker: 'x', text: '她现在被承认了。但别忘了：你给她的是一扇门，不是自由。真正的问题是，下一次谁来替没有编号的人写名字？' }
        ]
    },

    blade_personhood_witness: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'x', position: 'center' }],
        onEnter: () => {
            if (typeof grantHiddenClue === 'function') grantHiddenClue('blade_runner');
        },
        ending: { title: '见证', desc: '你没有替玛拉请求系统批准。你保留了她的名字，也保留了她曾经被抹掉的记录。' },
        dialogues: [
            { speaker: 'narrator', text: '你没有提交测试结果。你把玛拉的名字写在纸上，把责任记录交给她，然后关掉了公司的追踪信号。' },
            { speaker: 'x', text: '你没有证明我是人。你只是记住了我做过什么。很多时候，这已经是一个人能够得到的第一份自由。' },
            { speaker: 'narrator', text: '雨还在下。玛拉第一次用自己的名字回应你。X 没有消失，她只是把决定留在了你手里。' }
        ]
    },

    blade_personhood_burden: {
        scene: 'cyberpunkCity',
        characters: [{ id: 'x', position: 'center' }],
        onEnter: () => {
            if (typeof grantHiddenClue === 'function') grantHiddenClue('blade_runner');
        },
        ending: { title: '承担', desc: '你删除自己的身份档案，把追踪信号引到自己身上，让玛拉和 X 获得离开的时间。' },
        dialogues: [
            { speaker: 'narrator', text: '你按下删除键。你的档案从三个月前开始，也在这一刻结束。系统失去你的编号，追踪信号转向你留下的空白。' },
            { speaker: 'x', text: '你不知道自己究竟是什么，却决定为别人承担后果。这不是证明。这是选择。' },
            { speaker: 'narrator', text: '玛拉和 X 消失在雨里。你没有获得一个确定的身份，但你第一次知道，自己愿意成为怎样的人。' }
        ]
    }
});

// 银翼杀手剧本由 chapters-compat.js 统一合并到主剧本
