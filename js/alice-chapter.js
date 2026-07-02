// 爱丽丝梦游仙境章节 - 荒诞梦境风格（卡罗尔文风重写）
// 主题：逻辑与荒诞、成长与迷失、规则与反叛

const ALICE_SCRIPT = {
    // ========== 入口场景 ==========
    alice_entrance: {
        scene: 'teaParty',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你掉进了一个兔子洞——或者说，是兔子洞掉进了你？这取决于你从哪个方向看。如果你从下面往上看，那就是世界掉进了你里面。如果你从上面往下看——好吧，没有人能从上面往下看还能说出话来，因为他们在掉。周围的景象让你想起了某本被遗忘的童年读物：巨大的蘑菇撑开伞盖，扑克牌们围成一圈窃窃私语，还有融化的时钟像糖浆一样挂在树枝上，滴答、滴答——不，实际上是答滴、答滴——因为在这里，时间学会了倒着走。'
            },
            {
                speaker: 'narrator',
                text: '但这里不是童话。童话至少还有"从此幸福快乐"的承诺。这里只有寻找——一个关于X的寻找。而X，正如你或许已经猜到的，既是一个字母，也是一个未知数。寻找一个字母和寻找一个未知数，哪一个更难？换个问法：如果你找到了X，你还能继续寻找它吗？',
                showChoices: true
            }
        ],
        choices: [
            { text: '参加那场永无止境的茶会', next: 'alice_tea_party' },
            { text: '进入那个不断变化的迷宫', next: 'alice_maze_entrance' },
            { text: '寻找这个世界的规则', next: 'alice_seeking_rules' }
        ]
    },

    // ========== 茶会场景 ==========
    alice_tea_party: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你来到一张长得不合理的桌子前。桌子已经绕着地球一圈半了，而它还在申请更多的木料。三个身影散落在桌边，以一种令人困惑的排列方式：一个戴着高帽子的人正对着空茶杯念一首关于字母表的诗，一只猫在现身和消失之间反复横跳（它似乎无法决定自己是否想被看见），还有一把椅子像受惊的兔子一样不断变换位置，仿佛在和你玩抢座位游戏。'
            },
            {
                speaker: 'madhatter',
                text: '哈！一个新客人！一个新客人！不，等等——你是新客人，还是旧客人？这很重要，因为新客人必须喝冷茶，旧客人必须喝热茶，而如果茶是不冷不热的——那你就什么都不是，什么都不用喝！不过，既然你既不是新也不是旧（因为你还没坐下），那你就处在一种完美的量子状态，同时既是客人又不是客人！来，喝杯什么都不放的茶！',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '戴高帽子的人从椅子上弹了起来——或者说，椅子从他下面弹了出去，很难说是谁赶走了谁。他眼中闪烁的光芒让你想起凌晨三点钟的月亮，那种知道自己不该醒着但又非常享受这种感觉的月亮。',
                showChoices: true
            }
        ],
        choices: [
            { text: '询问X的下落', next: 'alice_hatter_x' },
            { text: '询问如何离开这里', next: 'alice_hatter_leave' },
            { text: '接受茶会的邀请', next: 'alice_tea_accept' }
        ]
    },

    alice_hatter_x: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: 'X？X！你说的是那个字母X，还是那个未知数X？因为字母X是第二十四个字母（如果你从A开始数，并且假设你数的时候字母没有偷偷换位置），但未知数X可以是任何东西——它可以是零，可以是一百万，可以是一杯没有茶的茶！哎呀，那个一直在寻找的女孩！她确实来过，她喝了半杯茶——准确地说，是喝了茶杯的左半边——然后，就像被橡皮擦擦掉一样，她消失了！呼——！',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '她说她在寻找故事的尽头。但我说，亲爱的姑娘，故事没有尽头！故事只有分号；然后继续；然后又开始；然后——你明白吗？茶会才是永恒的尽头，因为茶会永远在进行中，而进行中的事物怎么会有尽头呢？'
            },
            {
                speaker: 'narrator',
                text: '他做了一个爆炸的手势，帽子差点掉下来。帽子在空中旋转了整整三圈半，然后以一种违反重力的优雅姿态回到了他的头上——或者说，是他的头回到了帽子下面。',
                showChoices: true
            }
        ],
        choices: [
            { text: '她去了哪里？', next: 'alice_hatter_where' },
            { text: '她说了什么？', next: 'alice_hatter_said' },
            { text: '你也是被困在这里的吗？', next: 'alice_hatter_trapped' }
        ]
    },

    alice_hatter_where: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '她去了——嘘，小声点——她去了迷宫的方向。你知道迷宫吗？那个墙壁会自己玩捉迷藏的地方？她朝那个方向走了，朝着红心女王——那个脾气比一壶刚烧开的水还要暴躁的女王——的领地去了。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '但我要给你一个免费的警告，价值一个微笑——女王不喜欢寻找者。她更希望自己被寻找，而不是别人去寻找别人。你能理解吗？这就像你准备了一份礼物，但收到礼物的人想把礼物送给出去，但礼物已经被打开了，所以它不再是礼物而是物品——X挑战了女王的权威，然后像一只打翻墨水瓶的猫一样逃走了。现在女王正在追捕她，以及所有胆敢对她微笑的人。'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠指向远处那一排高耸的绿色墙壁。墙壁似乎在听到"女王"这个词时微微颤抖了一下。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我要去帮她', next: 'alice_help_x' },
            { text: '为什么女王要追捕她？', next: 'alice_queen_why' },
            { text: '那你为什么不去？', next: 'alice_hatter_why_not' }
        ]
    },

    alice_hatter_why_not: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '我去？我去不了！你以为我在这里是因为我喜欢这茶的味道吗？这茶根本没有味道——它只是温度和颜色的完美结合体！你不知道吗？所有在这个茶会上的人——或者说所有被茶会选中的人，因为我们没有选择茶会，茶会选择了我们——都永远不能离开茶会。这是规则第一条，也是唯一一条。'
            },
            {
                speaker: 'madhatter',
                text: '疯帽子、三月兔、睡鼠——我们都是被时间定在这里的标本。现在是永远的下午六点，既不是下午茶时间也不是晚餐时间，而是两者之间的那个尴尬的、不存在的、被所有体面的钟表拒绝的时刻。茶会永远在进行，就像一首永远唱不完的歌，只有副歌没有主歌。'
            },
            {
                speaker: 'narrator',
                text: '他拿起一只茶杯，看了一眼又放下。茶杯里没有茶——只有一只翻转的钟，钟面上刻着"六点差一分"和"六点过一分"两个时间，而指针固执地停在两者之间。'
            },
            {
                speaker: 'madhatter',
                text: '但我们至少可以说话。说话是唯一不需要离开的东西。我们可以告诉别人——告诉那些还能走的人，那些脚还没有被固定在茶会地板魔法里的人。X在迷宫里，这一点我可以肯定，就像我肯定明天是昨天一样。但迷宫不是困住她的东西。困住她的是她自己。就像困住我的也是我自己。你明白这个悖论吗？我们是自己的监狱，也是自己的钥匙。',
                showChoices: true
            }
        ],
        choices: [
            { text: '「她自己？」', next: 'alice_hatter_said' },
            { text: '「迷宫怎么走？」', next: 'alice_maze_entrance' }
        ]
    },

    alice_hatter_said: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '她说——让我想想，我得把她的原话从记忆的抽屉里翻出来，这个抽屉有点卡——她说："我在这里学到了一件事，一件比所有茶话会的谜语都重要的事：规则是用来打破的，但打破规则需要的不是蛮力，而是勇气。勇气不是没有恐惧，而是带着恐惧走向前。"然后她问我，我是否有勇气离开这个茶会。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '我说——我说——我发现自己找不到合适的词。词都在那里，排着队，但到了嘴边就变成了别的东西。我说我没有勇气。我说的时候，感觉自己的声音像一只打翻的茶杯，茶水洒了一地，收不回来。'
            },
            {
                speaker: 'narrator',
                text: '他的声音低了下来，像一只被雨水打湿的蝴蝶。在那高帽子的阴影下，你看到了一双突然不再疯狂的眼睛——那是悲伤的眼睛，是清醒的眼睛，是知道自己被困住却无法挣脱的眼睛。',
                showChoices: true
            }
        ],
        choices: [
            { text: '你可以和我一起走', next: 'alice_hatter_invite' },
            { text: '她说的对', next: 'alice_x_right' },
            { text: '那柴郡猫呢？', next: 'alice_cheshire_ask' }
        ]
    },

    alice_hatter_trapped: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '被困？被困！这是一个多么有趣的词，既可以被解读为"被困难围住"，也可以被解读为"被围困的困难"。不，不，我不是被困——我是自愿留下的！自愿和被困之间的区别，就像茶和咖啡之间的区别——一个选择了你，一个你选择了它。茶会永远进行，时间在这里是一种可选的调味品，像糖一样，你可以加也可以不加！',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '我为什么要离开？让我问你几个问题——外面的世界有永远喝不完的茶吗？有永远讲不完的谜语吗？有永远不落下的太阳吗？不，没有，一个都没有！外面的世界充满了句号，而这里只有分号；充满了告别，而这里只有"再来一杯"；充满了——充满了——充满了所有我不想面对的东西。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '但他眼神中的某种东西告诉了你真相。那种东西像是一个没有说出口的词，挂在嘴边，被咽了回去。他在说谎，或者说，他在说一种他自己也相信了的谎言，这种谎言是最难反驳的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '你在害怕什么', next: 'alice_hatter_fear' },
            { text: '我可以帮你离开', next: 'alice_hatter_help' },
            { text: '随便你', next: 'alice_leave_hatter' }
        ]
    },

    alice_hatter_fear: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '我害怕——害怕那个词，那个以"结"开头以"束"结尾的词。你知道是哪个词吗？它像一个句号，把所有的事情都关在门外。茶会一旦结束，到了七点钟——哦，七点钟！那个可怕的、准确的、不容置疑的七点钟！——我就必须面对外面的世界，那个没有永恒下午茶的世界，那个你必须对你的每一个决定负责的世界。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: 'X明白这一点。她明白结束的恐惧，但她选择继续前进，而不是停下来。她把茶会当作一个逗号，而不是一个句号。但我——我没有她的勇气。勇气是一种奇怪的东西，你不觉得吗？你无法称量它，无法测量它，无法把它装进茶杯里。但它却能决定你的一生。'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠停止了笑声。笑声像一片枯叶从树上飘落，安静地躺在地上。他静静地看着你，那眼神让你想起一个孩子第一次意识到月亮不会回答他的问题。',
                showChoices: true
            }
        ],
        choices: [
            { text: '勇气是可以学习的', next: 'alice_hatter_courage' },
            { text: '也许你需要一个理由', next: 'alice_hatter_reason' },
            { text: '那我走了', next: 'alice_leave_hatter' }
        ]
    },

    alice_hatter_courage: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '你是说——你是说——勇气像乘法表一样，可以学习？像猜谜语一样，可以练习？像喝下午茶一样，可以养成习惯？如果真是这样，那我的帽子可以为此作证——尽管帽子不会说话，但它可以点头，如果你仔细观察帽子边缘的颤动的话。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '好吧，寻找者——不，应该叫你勇气老师。我接受你的挑战，你的建议，你的荒谬的、不合逻辑的、却让我心跳加速的提议。我会离开这个茶会，和你一起寻找X。也许，在寻找的过程中，我会找到我自己的勇气——也许它就藏在某个路标下面，或者某个茶杯底部的茶叶渣里。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '他站起身，拍了拍衣服上的饼干屑——饼干屑像一群受惊的鸟一样飞散开来。他眼中闪过一丝光芒，那不是疯狂的光芒，而是希望的光芒，两者之间的区别就像闪电和萤火虫一样大。',
                showChoices: true
            }
        ],
        choices: [
            { text: '一起去迷宫', next: 'alice_maze_entrance' },
            { text: '先去见柴郡猫', next: 'alice_cheshire_meet' },
            { text: '直接去女王领地', next: 'alice_queen_ground' }
        ]
    },

    alice_leave_hatter: {
        scene: 'teaParty',
        characters: [],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '等等！在你走之前——在你离开这个永远六点钟的茶会之前——如果你找到X，如果你在那迷宫的中心遇见她，请告诉她——请告诉她疯帽匠还在这里。还在这里，还在等待，还在和那只拒绝做决定的钟表较劲。告诉她，他的帽子还在，只是帽子下面的笑容少了一些。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '也许有一天——也许在某个既不是今天也不是明天也不是昨天的日子里——我会鼓起勇气离开。也许我会找到那个词，那个能解开茶会魔法的词。也许那个词是"再见"。也许。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '你转身离开。身后传来茶杯碰撞的声音——叮、叮、叮——像是某种不完整的告别旋律。茶会还在继续，永远是六点，永远在开始，永远没有结束。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入迷宫', next: 'alice_maze_entrance' },
            { text: '去找柴郡猫', next: 'alice_cheshire_meet' }
        ]
    },

    alice_hatter_leave: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '离开？离开！这个词有四个笔画，但每一个笔画都像是一道铁栅栏！为什么要离开？这里永远是六点钟——不是早上六点，不是晚上六点，而是下午茶六点，那个金色的、完美的、被所有下午茶爱好者奉为圣杯的六点钟！在这里，永远不会有人问"你接下来要做什么"，因为"接下来"是一个不存在的时间概念！',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '没有烦恼，没有责任，没有——没有结局。每个故事都结束，但茶会不结束。没有结局的故事是安全的，就像没有打开的信封，你可以想象里面装着任何你想看到的内容。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '他的声音越来越小，像一只正在漏气的气球：也许——也许这就是问题所在。没有结局的故事，还是故事吗？一个永远不翻页的书，读者会打瞌睡的。一个永远不响起的闹钟，人们会睡过头的。一个永远不结束的茶会，客人会——会变成什么？',
                showChoices: true
            }
        ],
        choices: [
            { text: '每个故事都需要结局', next: 'alice_story_end' },
            { text: '有些故事不需要结局', next: 'alice_no_end' },
            { text: 'X明白这一点', next: 'alice_x_understands' }
        ]
    },

    alice_tea_accept: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }, { id: 'cheshire', position: 'right' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你坐下来——或者说，椅子从某个不可预知的方向滑过来接住了你——疯帽匠兴奋地给你倒了一杯茶。茶的颜色是某种介于紫色和不存在之间的颜色，它冒着热气，但热气是向下飘的。'
            },
            {
                speaker: 'cheshire',
                text: '小心哦，寻找者——或者说，寻找中的、被寻找的、将要寻找的。在这个世界里，喝茶意味着接受规则。每喝一口，你就同意了一条你不知道的条款。规则，有时候不是围栏，而是陷阱——看起来像一条路，实际上是一个坑。但我说太多了，或者说太少了，或者说得刚刚好——这取决于你喝了多少口茶。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音从虚空中飘来，像是一阵有颜色的风。疯帽匠瞪了猫一眼——但猫只是笑得更开心了，它的笑容比它的身体先出现，也比它的身体后消失，像是一个独立存在的实体。',
                showChoices: true
            }
        ],
        choices: [
            { text: '喝下茶', next: 'alice_tea_drink' },
            { text: '放下茶杯', next: 'alice_tea_refuse' },
            { text: '询问柴郡猫', next: 'alice_cheshire_talk' }
        ]
    },

    alice_tea_drink: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你喝下茶。味道是——怎么说呢——像是记忆混合着遗忘，像是糖混合着盐，像是笑声混合着叹息。你的舌头不知道该如何解读它，于是它决定放弃解读，转而享受这种困惑。'
            },
            {
                speaker: 'madhatter',
                text: '好！太好了！现在你也是我们中的一员了——或者我们也是你中的一员了，这取决于茶先进入你还是你先进入茶。在这个茶会里，你永远不需要做决定，因为所有的决定都被推迟到了七点钟，而七点钟永远不会到来！你永远不需要承担后果，因为后果被寄存在了明天，而明天永远不会变成今天！这难道不是世界上最好的安排吗？',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '但你感觉到某种东西正在像沙子一样从指缝间流失——你的决心，你的目标，甚至你的名字。名字开始变得模糊，像一个被水浸泡过的标签。你是来找X的，但X也开始变得模糊，变成一个真正的未知数。',
                showChoices: true
            }
        ],
        choices: [
            { text: '这确实很好...', next: 'ending_alice_tea_trapped' },
            { text: '不，我要继续寻找', next: 'alice_resist_tea' },
            { text: 'X喝过这茶吗？', next: 'alice_x_tea' }
        ]
    },

    ending_alice_tea_trapped: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        ending: {
            title: '永恒的下午茶',
            desc: '你选择了永恒的舒适，放弃了寻找的意义。'
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定留在茶会。毕竟，为什么要继续那个艰难的寻找呢？寻找意味着跋涉、意味着困惑、意味着可能永远找不到。而这里——这里有永远的茶，永远的饼干，永远不需要回答的谜语。'
            },
            {
                speaker: 'narrator',
                text: '这里有永远的欢笑，永远不结束的故事，永远的——舒适。舒适像一条温暖的毯子，把你裹得紧紧的，紧到你忘了毯子外面还有一个世界。'
            },
            {
                speaker: 'narrator',
                text: '你忘记了X，忘记了你的使命，忘记了你为什么来到这里。你甚至忘记了你曾经忘记过。你成为了茶会的永久客人，和疯帽匠一起，和三月兔一起，和睡鼠一起，等待永远不会到来的七点钟。而七点钟，在某个遥远的地方，看着茶会，轻轻叹了口气，转身离开了。'
            }
        ]
    },

    alice_resist_tea: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '又一个——又一个选择离开的人。你们这些寻找者，你们的脚底板是不是装了弹簧？你们的决心是不是用铁做的？X也这样做了。她喝了半口——只有半口，因为她说整口太多了——然后放下了茶杯，茶杯发出了"叮"的一声，那声音至今还在茶会里回荡。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '她说："很好喝，让我想起了一个我忘了做的梦。但有些诱惑必须拒绝，即使它们看起来很美好，就像糖衣包裹的毒药，或者看起来像王冠的枷锁。"我不明白她的意思——我不明白的事比明白的事多得多，多到可以填满一个没有底的茶杯——但也许有一天我会明白。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '你强迫自己站起来。你的腿在抗议，你的大脑在抗议，你的整个身体都在说"再坐一会儿"。但你推开了茶杯。茶杯在桌上旋转了几圈，发出了一种介于失望和释然之间的声音。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' },
            { text: '再见，疯帽匠', next: 'alice_farewell_hatter' }
        ]
    },

    // ========== 柴郡猫场景 ==========
    alice_cheshire_meet: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你正走着，突然发现空气中多了一样东西。不是声音，不是气味，而是一个——笑容。一个紫粉色条纹的、悬在半空中的、没有任何身体依附的笑容。然后，慢慢地，像是画家一笔一笔地画上去一样，身体出现了：先是耳朵，然后是眼睛（那双眼睛让你想起两个小小的、旋转的迷宫），最后是尾巴，尾巴的末端打了个问号。'
            },
            {
                speaker: 'cheshire',
                text: '啊，寻找者——或者说，被寻找所寻找的人。我在等你，但我不确定我是在等"你"还是等"某个来找X的人"。这两者之间的区别，就像猫和猫的影子之间的区别：一个会喵喵叫，另一个只会在地上躺着。但无论如何，她让我给你带个话。带话是一种奇怪的行为，因为它意味着你是一封信，但你没有信封。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的声音像是从四面八方同时传来，但同时又像是从你心里面发出来的。它让你想起了回声，但回声至少需要一面墙，而这声音连墙都不需要。',
                showChoices: true
            }
        ],
        choices: [
            { text: '她说了什么？', next: 'alice_cheshire_message' },
            { text: '你认识X？', next: 'alice_cheshire_know_x' },
            { text: '你是什么？', next: 'alice_cheshire_what' }
        ]
    },

    alice_cheshire_message: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '她说——我把她的原话保存在我的右耳里，左耳用来保存谜语——她说："告诉那个来找我的人，我在迷宫的中心。但迷宫的中心不在任何一张地图上，因为地图是静止的，而迷宫是活的。要找到我，必须先找到你自己。如果你不知道你是谁，你怎么能认出我呢？毕竟，人是在别人的眼睛里看到自己的。"',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '还有——这是她左手的食指在空中画出的第二句话——她说："小心女王。女王想要的不是答案，而是控制。控制像一条饿极了的蛇，它什么都想吞下去，包括吞下它自己的尾巴。她会用规则来诱惑你，用秩序来威胁你，用她的愤怒来——来煮一锅没有汤的汤。"',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫开始慢慢消失，从尾巴开始。尾巴的末端先变得透明，然后是身体，然后是耳朵，最后是——那个笑容。笑容在空气中多停留了整整三秒钟，像是在说："我虽然走了，但我很开心。"',
                showChoices: true
            }
        ],
        choices: [
            { text: '等等，什么意思？', next: 'alice_cheshire_explain' },
            { text: '迷宫中心在哪里？', next: 'alice_cheshire_center' },
            { text: '别走，告诉我更多', next: 'alice_cheshire_stay' }
        ]
    },

    alice_cheshire_explain: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '意思是——意思是一个包装好的东西，你打开它，里面是另一个包装，你再打开，里面还是包装。谈到最后，你要回答一个问题：你是谁？不是你的名字——名字是别人给你的标签，就像贴在果酱罐上的标签，但标签不是果酱。不是你的角色——角色是你在舞台上穿的戏服，但戏服不是穿戏服的人。而是你的本质，那个在标签被撕掉、戏服被脱下之后仍然存在的东西。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X已经回答了这个问题。她站在镜子前，问镜子里的自己："你是谁？"镜子里的她回答："我是那个永远不会停止寻找的人。"然后镜子碎了，因为她不需要镜子了。你呢，寻找者？你知道你是谁吗？或者说，你知道你不是谁吗？有时候，知道你不是谁比知道你是谁更重要。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫只剩下一个笑容悬浮在空中——一个没有身体的笑容，一个没有猫的猫，一个没有问题的答案。它那么亮，亮得让你几乎睁不开眼。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我是一个寻找者', next: 'alice_i_seeker' },
            { text: '我不知道', next: 'alice_i_dont_know' },
            { text: '我是我', next: 'alice_i_am' }
        ]
    },

    alice_i_seeker: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '寻找者？一个有趣的回答。但寻找者是一个角色，不是一个本质。就像"喝茶的人"描述了你的行为，但没有描述你的灵魂。如果你停止寻找，你还是你吗？如果答案是"不"，那你就是寻找的奴隶。如果答案是"是"，那你比寻找更大。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X问过同样的问题，在同样的地点，对着同样的空气。她的回答是——我至今还记得，因为她说话时，一朵花从红色变成了蓝色——她说："我寻找，不是因为寻找定义了我，而是因为我选择了寻找。我是选择者，不是寻找。我是风，不是风筝。"也许你也需要找到你与寻找之间的关系。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音从虚空中飘来，越来越远，越来越轻，像是有人在隔壁房间弹钢琴，弹到一半决定去吃晚饭了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我会找到的', next: 'alice_maze_entrance' },
            { text: '现在怎么办？', next: 'alice_what_now' }
        ]
    },

    // ========== 迷宫场景 ==========
    alice_maze_entrance: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你站在迷宫的入口。高耸的绿色墙壁向两边延伸，像是两条绿色的手臂，拥抱着一无所有的空气。你看不到尽头——不是因为尽头太远，而是因为尽头在不断移动，像一只不听话的句号，拒绝停留在句子的末尾。'
            },
            {
                speaker: 'narrator',
                text: '空气中弥漫着玫瑰的香气。但你注意到，有些玫瑰是红色的，有些是白色的，还有一些——正处在从白变红的过程中，像是被一只看不见的画笔在涂抹。你想起一个关于园丁和扑克牌的故事，关于他们因为种错了颜色而疯狂涂改的故事。但在这里，颜色似乎和事实一样灵活多变。红色可以是白色，白色可以是真相，真相可以是任何一个你愿意相信的颜色。'
            },
            {
                speaker: 'narrator',
                text: '一条路向左，一条路向右。但你又注意到，当你不看左边的时候，左边在悄悄变成右边。这个迷宫在和你玩一个游戏，一个你不知道规则的游戏。',
                showChoices: true
            }
        ],
        choices: [
            { text: '向左走', next: 'alice_maze_left' },
            { text: '向右走', next: 'alice_maze_right' },
            { text: '闭上眼睛随机走', next: 'alice_maze_random' }
        ]
    },

    alice_maze_left: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你向左转——左，那个在大多数地图上代表西边的方向，那个在大多数心脏里代表情感的一侧。你走了几步，数着步伐：一、二、三、四、五——然后你发现，你回到了原地。或者说，回到了一个看起来和原地一模一样的地方，但你知道它不是原地，因为原地的那朵玫瑰是红色的，而这里的玫瑰是——嗯，它正在变成红色，但还没完全红。'
            },
            {
                speaker: 'narrator',
                text: '远处传来笑声。可能是柴郡猫——它总是在最不合时宜的时候笑——也可能是风穿过树叶的声音，也可能是这个迷宫本身在笑。你开始理解为什么X说这里的规则很奇怪。奇怪到连"奇怪"这个词都不够奇怪。',
            },
            {
                speaker: 'narrator',
                text: '墙壁似乎在微微移动，像是某种巨大的绿色生物的呼吸。你感到自己不是在一个迷宫里，而是在某个东西的肚子里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '再试一次', next: 'alice_maze_retry' },
            { text: '打破墙壁', next: 'alice_maze_break' },
            { text: '大声呼唤X', next: 'alice_call_x' }
        ]
    },

    alice_maze_break: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你用力推墙壁。墙壁像橡胶一样弯曲——不，像果冻——不，像某种拒绝被定义的材料，它既不硬也不软，既不是固体也不是液体，而是一种哲学上的不确定状态。它弹了回来，没有伤害你，但也没有让你通过。它只是说：不。以一种礼貌但坚定的方式。'
            },
            {
                speaker: 'cheshire',
                text: '暴力在这里行不通，寻找者。你可以在墙上撞出一个淤青，但淤青是你自己的，不是墙壁的。你需要的是智慧——或者疯狂。或者两者之间的那个模糊地带，那个地带住着所有伟大的发明家、诗人和猫。X选择了疯狂，因为她发现，在疯狂的世界里，疯狂的人反而是最正常的。所以她找到了出路。你呢？你打算选择什么？',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '一个声音从头顶传来。你抬头，只看到一只蝴蝶倒着飞行，翅膀上写着"你在看什么"。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那我选择疯狂', next: 'alice_choose_madness' },
            { text: '我选择智慧', next: 'alice_choose_wisdom' },
            { text: '我选择两者', next: 'alice_choose_both' }
        ]
    },

    alice_choose_madness: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定拥抱疯狂。你开始唱歌——一首关于茶壶和月亮的歌，歌词是你现场编的，因为你发现疯狂不需要排练。你开始跳舞——一种膝盖朝后、手肘朝前的舞蹈，看起来像是某种远古的求雨仪式。你开始倒着走路——不是因为倒着走能到达目的地，而是因为正着走显然行不通。'
            },
            {
                speaker: 'narrator',
                text: '奇怪的事情发生了。墙壁开始回应你——它们弯曲，扭曲，像被挠痒痒的人一样扭动。然后，在一阵绿色的颤抖之后，它们打开了一条通道。通道的形状像一个问号，而你知道问号意味着问题——但问题意味着答案在前面。'
            },
            {
                speaker: 'cheshire',
                text: '疯狂是这里的通行证，亲爱的同行者。记住：在疯子的世界里，清醒的人才是疯子。而在这个迷宫里，迷路的人才是真的在走路。欢迎来到不合逻辑者的俱乐部，会员费是一个微笑。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音从远处传来。你分不清它是在笑，还是在打嗝，还是两者同时进行。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续前进', next: 'alice_maze_center' }
        ]
    },

    alice_choose_wisdom: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你停下来思考。如果迷宫会移动——这是你已经确认的事实——那么静止就是最快的移动方式。如果你不知道方向，那么任何方向都是正确的方向，同时也是错误的方向。如果你找不到路，那么路需要来找你。'
            },
            {
                speaker: 'narrator',
                text: '你坐下来，闭上眼睛，开始冥想。你让自己的呼吸变得像潮水一样有节奏——吸、呼，吸、呼。当你再次睁开眼睛时，面前出现了一条路。一条之前没有的路。它看起来像是刚刚诞生的，还带着新路的青涩和犹豫。'
            },
            {
                speaker: 'cheshire',
                text: '智慧也有它的力量，寻找者。但记住：在这个世界里，智慧有时候看起来像疯狂，就像宁静有时候看起来像风暴。真正的智慧不是知道答案，而是知道如何提问。X学会了这一点，所以她的问题比答案更有力量。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音从虚空中传来。这一次，它的声音里多了一丝赞许——一种像糖浆一样缓慢流淌的赞许。',
                showChoices: true
            }
        ],
        choices: [
            { text: '走新路', next: 'alice_maze_center' }
        ]
    },

    alice_maze_center: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('alice'); },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你来到迷宫的中心——一个圆形的小花园，像是被迷宫的手臂拥抱在怀里。在花园的中央，有一朵玫瑰——不，很多朵玫瑰，但它们都在改变颜色，从红到白，从白到蓝，从蓝到不存在。在玫瑰丛中，你看到了她。'
            },
            {
                speaker: 'x',
                text: '你来了。我等你很久了。或者说，我一直在等你决定要来。这两者之间的区别，就像等待和期待之间的区别：等待是被动的，像一块石头；期待是主动的，像一颗种子。我知道你会来，不是因为我能预知未来，而是因为我知道你是谁。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: '她背对着你，正在看一朵正在改变颜色的玫瑰。玫瑰从红色变成白色，又从白色变成一种介于歉意和希望之间的颜色。她的背影很熟悉，但又有些陌生——像是同一首歌换了调子。',
                showChoices: true
            }
        ],
        choices: [
            { text: 'X...', next: 'alice_x_confront' },
            { text: '你为什么要离开？', next: 'alice_x_why_leave' },
            { text: '跟我回去', next: 'alice_x_come_back' }
        ]
    },

    alice_x_confront: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '我知道你会找到我。你总是能找到我。不是因为你是最好的寻找者——虽然你确实是——而是因为你和我之间有一条看不见的线。线的一头系在你身上，另一头系在我身上。它像一条脐带，像一根琴弦，像一个没有写出来的句子。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '但问题是——找到我之后呢？找到是动词的完成时，但完成时意味着结束，而我们都不喜欢结束。你想从我这里得到什么？一个答案？一个拥抱？还是一个承诺，承诺我不会再离开？你要知道，有些承诺像蝴蝶，美丽但脆弱；有些承诺像锁链，坚固但沉重。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X转过身。她的脸和你记忆中一样——同样的眼睛，同样的嘴角弧度——但眼神不同了。那眼神更加清醒，更加深沉，带着一种看透了许多事情之后才会有的疲惫。像是月亮，经历了所有阴晴圆缺后，终于学会了不发光的智慧。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我想带你回家', next: 'alice_x_home' },
            { text: '我想知道真相', next: 'alice_x_truth' },
            { text: '我只是想找到你', next: 'alice_x_just_find' }
        ]
    },

    alice_x_home: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '家？"家"是一个多么奇怪的词，由四个字母组成，却包含了无数个房间。我们有家吗？还是说，我们只有寻找——寻找是唯一一个不需要地址的动词？我们没有家，亲爱的。我们有足迹，有旅程，有每一个世界留下的印记。但家？家是一个神话，一个我们互相讲述的睡前故事，让我们相信存在一个可以停下来的地方。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '但也许——也许我们可以一起创造一个新的家。不是回到过去——过去是一扇只开一面的门，你只能从里面出来，不能从外面进去。而是走向未来，那个我们还没去过的地方。你愿意吗？和我一起，继续这场寻找，即使不知道终点在哪里？即使地图上没有标注，即使指南针在旋转？',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X向你伸出手。她的手悬在半空中，像是一个问题，等待你的回答。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我愿意', next: 'ending_alice_together' },
            { text: '我累了', next: 'alice_x_tired' },
            { text: '我需要想想', next: 'alice_x_think' }
        ]
    },

    ending_alice_together: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        ending: {
            title: '一起寻找',
            desc: '你和X决定一起继续这场无限的寻找。'
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你走向X，握住她的手。她的手很温暖，像是刚泡好的茶，但比茶更温暖，因为茶会凉，而她的手，你知道，不会。'
            },
            {
                speaker: 'x',
                text: '那么，让我们一起走吧。还有那么多世界要去看——世界像书本一样叠在一起，每一页都是一个宇宙。还有那么多谜题要去解——谜题像糖果一样藏在每个角落，有些是甜的，有些是酸的，有些会让你皱眉。但最重要的是，我们一起。不是"我"和"你"，而是"我们"——一个全新的词，一个需要两个人才能发音的词。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: '你们手牵手，走向迷宫的出口。迷宫似乎感受到了什么，墙壁自动分开，像是在为你们让路。玫瑰们集体变成了金色——不是女王的金色，而是阳光的金色，温暖的金色，新的开始的金色。'
            }
        ]
    },

    // ========== 女王领地场景 ==========
    alice_queen_ground: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你来到一个巨大的草坪，草坪修剪得如此整齐，以至于每一根草都像是被尺子量过的。这里正在进行一场荒谬至极的槌球游戏——火烈鸟被当作球棍，刺猬被当作球，而球门是扑克牌士兵弯腰搭成的拱门。每当刺猬滚到一半，火烈鸟就会转过头来啄玩它的人——这大概是对"公平竞争"最独特的理解。'
            },
            {
                speaker: 'narrator',
                text: '在远处，一座宏伟的宫殿矗立着，心形的窗户闪烁着红光，像是无数只充血的眼睛。宫殿的塔楼歪向一边，仿佛在偷偷观察什么。一个穿着华丽红裙的女人坐在高台上，她的裙子如此之大，以至于她本人看起来像是裙子的一部分，而不是裙子是她的附属品。她冷冷地注视着你，那目光能把茶冻成冰。'
            },
            {
                speaker: 'queen',
                text: '又一个寻找者。你们这些寻找者，像蟑螂一样——踩死一只，又来一只。你以为你能找到她？X？那个胆敢在我的领地上自由行走的人？她挑战了我的权威，拒绝了我的游戏，然后像一阵不听话的风一样逃走了。在我的世界里，风必须听我的命令！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音冰冷，带着不容置疑的威严。空气似乎在她说"权威"这个词时凝固了，连刺猬都停止了滚动，火烈鸟都低下了头。',
                showChoices: true
            }
        ],
        choices: [
            { text: '上前觐见', next: 'alice_queen_audience' },
            { text: '隐藏起来观察', next: 'alice_queen_observe' },
            { text: '直接询问X', next: 'alice_queen_ask_x' }
        ]
    },

    alice_queen_audience: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '但没有人能真正逃离我的领地。没有人！我的领地——不是地图上的领地，而是概念上的领地——像一张没有边际的网。我会找到她，然后——然后她会明白，规则就是规则，就像头就是头，而头被砍掉后就再也长不回来。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '她以为她可以拒绝我的游戏。她以为规则是可选的，就像沙拉里的橄榄。但规则不是橄榄！规则是盘子，是桌子，是整个餐厅！没有规则，我们都只是——只是一群没有方向的火烈鸟！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '她的眼睛闪过一道红色的光芒——不是愤怒的红色，而是血液的红色，是"砍头"命令的红色。火烈鸟们集体打了个寒颤，其中一只偷偷把脖子藏在翅膀下面。',
                showChoices: true
            }
        ],
        choices: [
            { text: '她做了什么？', next: 'alice_queen_what_did' },
            { text: '我不会让你伤害她', next: 'alice_queen_protect' },
            { text: '也许我们可以合作', next: 'alice_queen_deal' }
        ]
    },

    alice_queen_what_did: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '她做了什么？她做了什么！她拒绝了我的游戏——我的槌球游戏，我的火烈鸟，我的刺猬，我的心形拱门！在这个世界里，每个人都必须玩我的游戏，遵守我的规则，因为我是女王，因为规则是我定下的，因为我是规则的制定者，而规则制定者高于规则——这是一个逻辑上的完美循环，你明白吗？',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '但她说——她说："我不玩无法获胜的游戏。"然后她就走了，穿过我禁止进入的迷宫中心，那扇只有真正理解自己才能打开的门。她穿过去了，像穿过一个不存在的障碍。我的卫兵们追过去，但墙壁升起，把他们挡在外面。墙壁背叛了我——我的墙壁，在我的领地上，背叛了我！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的愤怒让她的脸微微扭曲，像一面被用力挤压的镜子。她的王冠歪了——但没有人敢告诉她。',
                showChoices: true
            }
        ],
        choices: [
            { text: '她去了迷宫中心？', next: 'alice_queen_center' },
            { text: '为什么禁止进入？', next: 'alice_queen_why_forbidden' },
            { text: '你的游戏是什么？', next: 'alice_queen_game' }
        ]
    },

    alice_queen_protect: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '保护她？你？一个——让我仔细看看——一个普通的、双手空空的、没有任何筹码的、小小的寻找者，想要挑战红心女王的意志？这就像一只蚂蚁说它要挡住大象，像一片雪花说它要抗拒春天！荒谬！但——荒谬得有趣。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '你的勇气——或者说你的愚蠢，有时候这两者之间没有区别——让我感到好奇。也许我们可以做个交易？交易是最美妙的游戏：双方都以为自己是赢家，但总有一方是错的。你帮我找到她，把她带到我面前，我就饶她一命。怎么样？一个生命换一个生命——虽然你的生命不值钱，但她的生命，也许有一点价值。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王站起身，她的裙子像红色的海浪一样展开，淹没了三分之一的草坪。她居高临下地看着你，那高度不仅是物理上的，还是心理上的。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我拒绝', next: 'alice_queen_refuse' },
            { text: '什么交易？', next: 'alice_queen_deal_detail' },
            { text: '先告诉我她在哪里', next: 'alice_queen_where_first' }
        ]
    },

    alice_queen_refuse: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '拒绝？你竟敢拒绝我？你竟敢用那个由"拒"和"绝"组成的词，对着你的女王说出口？卫兵！卫兵！你们这些睡着的扑克牌，起来！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '扑克牌士兵从四面八方涌来——从花丛后面，从树后面，从空气本身。他们是由纸做的，但他们的武器是真的。他们的脸是平的，但他们的威胁是立体的。'
            },
            {
                speaker: 'queen',
                text: '既然你选择与她为伍——既然你选择站在那个拒绝规则的人身边——那么你就和她一样，成为我的敌人。敌人在这里只有一个下场。带走！把他的头和他的顽固一起留在这里！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '士兵们向你逼近，他们的步伐整齐划一，每一步都像是一张扑克牌被拍在桌子上。',
                showChoices: true
            }
        ],
        choices: [
            { text: '战斗', next: 'alice_queen_fight' },
            { text: '逃跑', next: 'alice_queen_escape' },
            { text: '使用疯狂', next: 'alice_queen_madness' }
        ]
    },

    alice_queen_madness: {
        scene: 'queenGround',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你开始大笑——一种从肚子深处发出的笑声，像是被挠了痒痒的大象。你开始跳舞——舞步毫无逻辑，但节奏感出乎意料的好。你开始说一些毫无意义的话，比如"为什么茶壶不能飞？因为它的翅膀是陶瓷做的！"和"如果时间是一种颜色，那它一定是紫色的，因为紫色是最慢的颜色！"'
            },
            {
                speaker: 'narrator',
                text: '女王困惑了。她的规则手册里——一本厚达三千页、用红墨水写成的书——没有应对疯狂的条款。规则需要有序的对手，而疯狂拒绝有序。卫兵们不知所措：他们手中的矛颤抖着，不知道该刺向一个在跳舞的目标，还是该加入舞蹈。'
            },
            {
                speaker: 'narrator',
                text: '在这种混乱中，你像一条滑溜溜的鱼一样从他们之间穿过。你逃走了。身后传来女王歇斯底里的尖叫，但尖叫已经追不上你了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '前往迷宫', next: 'alice_maze_entrance' }
        ]
    },

    // ========== 其他结局 ==========
    ending_alice_queen_prisoner: {
        scene: 'queenGround',
        characters: [],
        ending: {
            title: '红心囚徒',
            desc: '你被女王囚禁，但你的沉默保护了X。'
        },
        dialogues: [
            {
                speaker: 'narrator',
                text: '你被女王抓住，关进了她的地牢。地牢的墙壁是心形的，但心形的牢房仍然是牢房——甚至比方形更糟糕，因为它假装关心你。'
            },
            {
                speaker: 'narrator',
                text: '每天，她会来问你X在哪里。她的声音像一把生锈的钥匙，试图撬开你沉默的锁。你永远不会告诉她。你的沉默是一堵墙，比迷宫的墙壁更坚固，因为它是用决心而不是树篱筑成的。'
            },
            {
                speaker: 'narrator',
                text: '在黑暗中，你开始理解X为什么要不断前进。因为停留意味着被控制，被定义，被囚禁——不仅是被别人囚禁，还是被自己囚禁。自由不是一扇没有锁的门，而是即使门锁着，你仍然知道自己是自由的。'
            }
        ]
    },

    alice_next_world: {
        scene: 'hedgeMaze',
        characters: [],
        getDialogues: () => {
            const hasDeal = gameState.traits.includes('alice_queen_deal_accepted');
            const dialogues = [
                {
                    speaker: 'narrator',
                    text: '你找到了通往下一个世界的门。门看起来像一面镜子，但镜子里反射的不是你的脸，而是一条路。这不是结束——结束是另一个结束的开始，而开始是另一个开始的结束。每扇门都是一道选择题，每个选择都是一个新世界。'
                },
                {
                    speaker: 'narrator',
                    text: 'X在前方等着你——在所有世界里等着你，在所有故事里等着你，在所有你还没走过的路上等着你。你跨过门槛，门槛像是一个逗号，而逗号后面的句子，还等着你去写。'
                }
            ];
            if (hasDeal) {
                dialogues.push({
                    speaker: 'narrator',
                    text: '但你忽然想起——你的记忆像一只不听话的猫，在最不合适的时候跳出来——你答应了女王。你答应回去告诉她X的所在。承诺是一个奇怪的东西：它没有重量，却能压弯一个人的脊梁；它没有形状，却能改变一个人的脸。如果你就这样离开，你的承诺将成为谎言，而谎言会像雪球一样，越滚越大。',
                    showChoices: true
                });
            } else {
                dialogues[dialogues.length - 1].showChoices = true;
            }
            return dialogues;
        },
        choices: () => {
            const choices = [];
            if (gameState.traits.includes('alice_queen_deal_accepted')) {
                choices.push({ text: '回去见女王，信守承诺', next: 'alice_return_to_queen', trait: 'honor' });
                choices.push({ text: '离开这个世界（背弃承诺）', next: 'aleph_return', trait: 'ambition' });
            } else {
                choices.push({ text: '进入下一个世界', next: 'aleph_return' });
            }
            return choices;
        }
    },

    alice_return_to_queen: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '你回来了。你回来了！我几乎以为你逃走了——以为你像X一样，像所有那些不懂得规则价值的寻找者一样。但你没有。你站在我面前，像一个问号，等待我把它变成句号。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音带着一丝意外，像是发现茶杯里还有茶，或者发现一朵花是蓝色的而不是预期的红色。显然，她不太习惯有人信守承诺。承诺在她的世界里，大概和会飞的猪一样稀有。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '你找到她了？她告诉了你什么？告诉我——告诉我一切！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '你告诉女王你见到了X，但你留了一手——不，不是留了一手，是留了一句话。你没有说出迷宫中心的位置，因为有些秘密比交易更重要。你只是说：她留了一句话——"自由不是从别人那里获得的，是自己选择的。选择不是一种权利，而是一种责任。"女王的脸上闪过一丝你无法解读的表情。',
                showChoices: true
            }
        ],
        choices: [
            { text: '离开这个世界', next: 'aleph_return', clue: 'connection' }
        ]
    },

    // ========== 占位场景 ==========
    alice_seeking_rules: {
        scene: 'teaParty',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '规则？你问规则？让我想想——规则在这个世界里，就像茶在茶壶里：你倒出来的时候，它可能已经不是茶了。这个世界的规则就是——没有规则。或者说，规则随时在变化，像天气，像心情，像一只猫决定它是想待在室内还是室外。你今天遵守的规则，明天可能成为违法的行为。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X明白这一点。她花了一整天——或者说，在这个世界里，"一天"是一个多么模糊的概念——才弄明白：规则不是用来遵守的，而是用来理解的。理解之后，你可以选择遵守，也可以选择打破。但大多数人连理解都不做，他们只是服从。服从是最懒惰的思考方式。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的笑容变得更大——大到几乎占据了整个视野。然后，像被风吹散的烟一样，它慢慢消失了。先是嘴角，然后是牙齿，最后是那个你无法忘怀的弧度。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去茶会', next: 'alice_tea_party' },
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_hatter_invite: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '真的吗？你真的愿意带我走？不是开一个玩笑，不是讲一个谜语，而是真的——真的——用"真的"这个词的最真实的含义？我——我从来没收到过这样的邀请。邀请我参加茶会的人很多，但邀请我离开茶会的人——你是第一个，也是唯一一个，也是——也许是最重要的一个。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '那——那让我收拾一下我的帽子！帽子需要整理，就像思想需要整理，就像茶需要搅拌！',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠兴奋地跳来跳去，像一只踩到了弹簧的兔子。他抓起帽子，对着帽子说了几句话——帽子和主人之间的秘密对话——然后郑重地将它戴在头上。帽子歪了，但歪得恰到好处。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' },
            { text: '去女王领地', next: 'alice_queen_ground' }
        ]
    },

    alice_x_right: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '她说的对？也许吧——也许吧，"也许"是一个多么好的词，它既不是"是"也不是"否"，而是两者之间的吊床，你可以躺在上面摇摇晃晃，不用担心掉下来。X说的话像种子，当时可能只是一粒小东西，但后来会长成大树——长成你无法忽视的大树。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠陷入了沉思。沉思的时候，他的帽子微微倾斜，像是也在思考。帽子和主人一起思考，这是茶会特有的景象。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' },
            { text: '去找柴郡猫', next: 'alice_cheshire_meet' }
        ]
    },

    alice_cheshire_ask: {
        scene: 'teaParty',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '柴郡猫？啊，你提到我了。我在这里，又不在——就像一个问题，你问出来的时候，答案已经存在，但你还不知道。我同时存在于茶会的桌子上方三英寸处，和迷宫的墙壁后面，和你的想象里。存在，对于一只猫来说，是一个可选的状态。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X让我告诉你——她用一个微笑作为信封，用一句话作为信纸——去迷宫的中心。但首先，你需要决定你是谁。如果你不知道你是谁，迷宫会让你迷失；如果你知道自己是谁，迷宫会为你让路。这听起来像谜语，但谜语是真理穿着睡衣的样子。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的笑容悬浮在空中，像一轮没有月亮的弯月。笑容似乎在说：我告诉你了，但你又什么都没听到。这是柴郡猫特有的沟通方式。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_hatter_reason: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '理由——理由——！这个词像一个被遗忘在抽屉深处的钥匙，你要找它的时候它不在，你不找它的时候它跳出来绊你一脚。我需要一个理由，这是你说的，而你说得对——对得像一个恰好落在靶心上的飞镖！',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '帮助X！这就是理由！不是"帮助"这个动词，而是"帮助X"这个完整的句子。如果她能够挑战女王——那只穿红裙子的、把"砍头"当口头禅的、认为规则比呼吸更重要的女王——那么也许——也许我也能挑战我自己的恐惧！恐惧是一种纸做的怪物，看起来很吓人，但一沾水就软了！',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '他抓起帽子，眼中闪烁着新的光芒——不是疯狂的闪光，不是悲伤的闪光，而是一种新的、还没被命名的光芒。也许是决心。也许是希望。也许两者都是。',
                showChoices: true
            }
        ],
        choices: [
            { text: '出发！', next: 'alice_maze_entrance' }
        ]
    },

    alice_hatter_help: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '帮我？帮——帮——我？这个句子里有三个字，但每一个字都像一片羽毛，轻得让我不敢相信。没有人提出过要帮我。疯帽匠总是帮助别人——帮他们倒茶，帮他们想谜语，帮他们打发时间——但没有人帮过他。这就像太阳问月亮需不需要光，而月亮从来没有回答过。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '也许——也许我确实可以尝试。尝试是失败的前奏，这是我知道的。但尝试也是成功的第一步，这是我刚刚学会的。我需要你的帮助——不是替我做，而是和我一起做。就像两个人一起搬一个沉重的箱子，一个人搬不动，两个人却可以。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠犹豫地看着你，像一只站在树枝上的鸟，不确定是否应该飞走。',
                showChoices: true
            }
        ],
        choices: [
            { text: '当然', next: 'alice_hatter_courage' },
            { text: '先告诉我更多信息', next: 'alice_hatter_where' }
        ]
    },

    alice_story_end: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '结局——我害怕结局，因为结局意味着判断。判断像一把尺子，它不管你的故事有多曲折，它只量最后的结果。成功或失败，快乐或悲伤，英雄或小丑——在茶会里，我永远不会被判断，因为茶会没有结局，所以没有评分。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '但逃避判断的人，也逃避了赞美。逃避失败的人，也逃避了成功。逃避结局的人——也逃避了故事。一个没有结局的故事，就像一杯没有茶的杯子，它是空的，尽管它看起来是满的。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '他的声音充满了矛盾，像一首两个调子同时演奏的歌。矛盾的旋律在茶会中回荡，连茶杯都微微颤抖。',
                showChoices: true
            }
        ],
        choices: [
            { text: '但你也永远不会成长', next: 'alice_hatter_courage' },
            { text: '那是你的选择', next: 'alice_leave_hatter' }
        ]
    },

    alice_no_end: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '不需要结局？不需要结局！那故事还有什么意义？如果你打开一本书，发现它永远没有最后一页，你会一直读下去吗？你会读，读，读，直到你发现你忘了为什么开始读，忘了书里讲了什么，忘了你甚至是在读书！',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '他困惑地看着你，眉头皱得像一张被揉过的纸。',
                showChoices: true
            }
        ],
        choices: [
            { text: '意义在于过程', next: 'alice_hatter_courage' },
            { text: '每个故事都需要结局', next: 'alice_story_end' }
        ]
    },

    alice_x_understands: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: 'X明白——她总是明白，就像月亮总是明白潮汐，就像风总是明白风筝。她有一种天赋，一种把混乱变成图案的能力，一种从噪音中听出旋律的能力。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '也许这就是为什么她能找到出路，而我不能。不是因为她更聪明——好吧，也许她确实更聪明——而是因为她更勇敢。勇敢不是不害怕，而是害怕但仍然前进。我害怕，所以我停下来。她害怕，但她继续走。我们是同一种人，只是选择了不同的方向。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠低下了头。帽子滑下来遮住了他的眼睛，但你知道，帽子下面有一双湿润的眼睛。',
                showChoices: true
            }
        ],
        choices: [
            { text: '你也可以找到出路', next: 'alice_hatter_courage' },
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_tea_refuse: {
        scene: 'teaParty',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '聪明的选择——虽然"聪明"是一个相对的概念，就像"高"对于一只蚂蚁和一只长颈鹿来说完全不同。茶会是一个陷阱，一个用瓷器和银器装饰的陷阱，一个用芬芳和温暖伪装的陷阱。它看起来像天堂，但天堂有一个特点——你进去之后就再也出不来了。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X也拒绝了茶会。她看着茶杯，茶杯看着她——一人一杯对视了整整十二秒，这是我数过的——然后她放下了茶杯，茶杯发出了"叮"的一声。那声音很小，但在茶会里，它听起来像一个宣言。所以她才能继续前进，继续寻找，继续成为那个我们都在谈论的X。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫点了点头——或者说，它的头点了一下，然后消失了，只剩下笑容，然后笑容也消失了，剩下一个"点头"的抽象概念。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' },
            { text: '询问更多', next: 'alice_cheshire_talk' }
        ]
    },

    alice_cheshire_talk: {
        scene: 'teaParty',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '你想知道什么，寻找者？"什么"是一个无限大的词——它可以包含一切，也可以什么都不包含。你可以问"生命的意义是什么"，也可以问"茶为什么是热的"。两个问题都是"什么"，但答案的长度相差甚远。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的眼睛闪烁着神秘的光芒——那光芒像是深海里发光的鱼，像是夜空中的北极星，像是一个你永远猜不到的谜底。',
                showChoices: true
            }
        ],
        choices: [
            { text: 'X在哪里？', next: 'alice_cheshire_message' },
            { text: '怎么离开这个世界？', next: 'alice_cheshire_exit' },
            { text: '你是谁？', next: 'alice_cheshire_what' }
        ]
    },

    alice_cheshire_exit: {
        scene: 'teaParty',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '离开？离开是一个简单的动词，但在这里，它需要一个复杂的配方。你只需要找到迷宫中心的门——那扇门不总是门，有时候它是窗户，有时候它是镜子，有时候它只是空气中的一个想法。但首先，你需要找到X。或者，找到你自己。或者两者都找到——因为找到其中一个，往往意味着找到了另一个。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的笑容变得更大——大到几乎要溢出这个场景，大到似乎要包含整个世界。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_cheshire_know_x: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '我认识所有人——也认识没有人。"所有人"是一个集合，"没有人"也是一个集合，而这两个集合的交集，恰好是我。X是一个有趣的人。有趣的不是她说了什么，而是她怎么说的，以及她为什么说。她问我这个世界的规则——不是问"规则是什么"，而是问"为什么要有规则"。然后，当她理解了规则，她选择打破它们。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '大多数人要么接受规则，像鱼接受水；要么被规则摧毁，像水坝被洪水冲垮。但她——她重新定义了规则。她不是打破笼子，而是让笼子意识到它自己也是一个囚徒。你明白这个比喻吗？不明白也没关系，比喻的意义不在于被理解，而在于被感受。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的身体已经消失了一半——如果"一半"这个词适用于一只不断在消失和出现之间切换的猫的话。它现在看起来像一幅没画完的画。',
                showChoices: true
            }
        ],
        choices: [
            { text: '她怎么打破规则？', next: 'alice_cheshire_break' },
            { text: '我可以做到吗？', next: 'alice_cheshire_can_i' },
            { text: '女王呢？', next: 'alice_cheshire_queen' }
        ]
    },

    alice_cheshire_what: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '我？我是什么？这是一个可以写满三本书的问题。我是一个引导者——但我引导的方向由你自己决定。我是一个观察者——但我观察到的取决于你愿意展示什么。我是一个谜语——但谜语的答案不是"猫"，而是比你想象中更复杂的东西。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '我存在于规则的缝隙中，在逻辑的盲点里。你知道盲点吗？每个人都有一个看不到的地方，就在视野的边缘。我就在那里——在所有世界的盲点里，在所有故事的缝隙中。X理解我，因为她也在寻找规则的缝隙，那个可以让她逃脱的盲点。她不是用眼睛找，而是用问题找。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的眼睛闪烁着智慧的光芒——那光芒既有深度，又有广度，像一口没有底的井，井口还挂着一轮月亮。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那缝隙在哪里？', next: 'alice_cheshire_gap' },
            { text: 'X找到了吗？', next: 'alice_cheshire_found' },
            { text: '你为什么不直接告诉我？', next: 'alice_cheshire_why_riddle' }
        ]
    },

    alice_cheshire_center: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '迷宫的中心是移动的——不是物理上的移动，而是存在意义上的移动。它随着寻找者的心而移动，就像向日葵随着太阳转动。如果你带着恐惧走向迷宫，中心就是恐惧，你会看见你最害怕的东西。如果你带着希望走向迷宫，中心就是希望，你会看见你最渴望的东西。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X带着问题走向迷宫——不是"问题"这个词的消极含义，而是积极的好奇心——所以中心成了答案。答案不是终点，而是另一个问题的开始。你要带着什么去呢，寻找者？你的口袋里有爱吗？有决心吗？有疑问吗？选择你的行李，因为行李决定了旅程。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的声音从四面八方同时传来，但又像是从你心里面发出来的。你的心脏在回应它，用你听不懂的语言。',
                showChoices: true
            }
        ],
        choices: [
            { text: '带着爱', next: 'alice_with_love' },
            { text: '带着决心', next: 'alice_with_determination' },
            { text: '带着疑问', next: 'alice_with_questions' }
        ]
    },

    alice_with_love: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '爱——这是最强大的向导，也是最危险的陷阱。爱可以让你穿越最黑暗的迷宫，也可以让你在迷宫中忘记自己。爱是翅膀，让你飞起来；爱也是锁链，让你飞不远。两者之间的区别，在于你如何握着它。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X也带着爱。她爱这个世界，爱这个旅程，爱每一个遇见的人——包括那个暴脾气的女王。但她学会了不让爱成为她的枷锁。她学会了爱是一种力量，而不是一种负担。记住，寻找者：爱应该是翅膀，不是锁链。是风，不是笼子。是光，不是影子。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫完全消失了——身体、耳朵、尾巴、爪子——只剩下它的笑容在空气中徘徊。笑容持续了整整七个心跳，然后像肥皂泡一样轻轻破裂，留下一阵无声的笑声。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_i_dont_know: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '不知道？那很好！"不知道"是世界上最诚实的回答，因为大多数人说"知道"的时候，其实是在说"我以为我知道"。不知道意味着开放，意味着可能，意味着你还没有关上任何一扇门。一个不知道的人，比一个知道的人更接近真理，因为真理喜欢站在未知的门口。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X曾经也不知道。她站在这里，对着我现在所在的这个位置——虽然我现在不在，但我的位置在——说："我不知道我是谁，但我知道我要去寻找答案。"她选择了去寻找答案，而不是假装知道。假装知道是最危险的，因为它让你停止寻找。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音渐渐远去，像一首歌的结尾，最后一个音符还在空气中颤抖，但你知道它不会再回来了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我会去寻找答案', next: 'alice_maze_entrance' }
        ]
    },

    alice_i_am: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '"我是我"？这是一个开始，但还不够。就像你画了一个圆圈，但里面什么都没有。就像你说了一句话，但只有主语没有谓语。"我"是一个代词，代词需要内容来填充。你是谁？你是你的选择，你的行动，你的恐惧，你的希望。你是所有这些东西的总和，但总和大于部分。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '你需要更深入地挖掘——不是往地下挖，而是往心里挖。X花了很长时间才明白她是谁。她站在镜子前，问了一百遍"你是谁"，直到镜子里的她不再回答，而是反问她："你是谁？"那时候她才明白，答案不在镜子里，而在问问题的人心里。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的声音带着一丝鼓励——鼓励像一种温暖的调料，撒在冷冰冰的谜语上，让它变得可以下咽。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我会继续寻找', next: 'alice_maze_entrance' }
        ]
    },

    alice_what_now: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '现在？现在是一个多么微妙的时刻——它既不是过去，也不是未来，而是两者之间的刀刃。现在你需要做出选择。选择不是一个动作，而是一个方向——你转向哪里，你的"现在"就流向哪里。'
            },
            {
                speaker: 'narrator',
                text: '去迷宫，那里有X和变化的墙壁。回到茶会，那里有疯帽匠和永远不结束的下午茶。或者面对女王，那里有规则和愤怒和心形的恐怖。每个选择都会带你走向不同的路——不同的路通向不同的你，因为路不仅仅是路，路也是走路的人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' },
            { text: '回茶会', next: 'alice_tea_party' },
            { text: '面对女王', next: 'alice_queen_ground' }
        ]
    },

    alice_maze_right: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你向右转。右——大多数人的惯用手，大多数语言的"正确"方向，大多数钟表的指针移动方向。你走了很久，计步器已经转了三圈半——如果你有计步器的话。但墙壁似乎在跟随你移动，像忠实的舞伴，不肯离开你的身边。'
            },
            {
                speaker: 'narrator',
                text: '你感觉自己在一个巨大的循环中，像一只在跑步轮上奔跑的仓鼠——不是仓鼠的错，而是跑步轮的设计缺陷。这个迷宫的设计者显然认为，无限循环比死胡同更有趣。',
                showChoices: true
            }
        ],
        choices: [
            { text: '尝试不同的方法', next: 'alice_maze_break' },
            { text: '继续走', next: 'alice_maze_left' }
        ]
    },

    alice_maze_random: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你闭上眼睛，随机走动。左——右——左——左——右——你不再思考方向，不再试图理解逻辑。你让自己的脚成为向导，让偶然成为策略。'
            },
            {
                speaker: 'narrator',
                text: '当你睁开眼睛时，你发现自己在一个完全陌生的地方——陌生的意思是，它看起来不像任何你见过的地方，但同时又让你觉得非常熟悉，像是梦里的某个场景。这似乎有效！随机性在这个迷宫里，比逻辑更有效。'
            },
            {
                speaker: 'narrator',
                text: '远处传来柴郡猫的笑声——那笑声既在嘲笑你，也在为你鼓掌。两者同时进行，这是柴郡猫的专长。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续', next: 'alice_maze_center' }
        ]
    },

    alice_maze_retry: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你再试一次——同样的方法，同样的方向，同样的期望。但结果一样。爱因斯坦说过——或者说，在这个世界里，是柴郡猫说过——疯狂就是重复做同样的事情，却期待不同的结果。',
            },
            {
                speaker: 'narrator',
                text: '这个迷宫似乎在嘲笑你的常规方法。不是恶意的嘲笑，而是一种善意的、希望你学聪明的嘲笑。就像老师看着学生犯同样的错误，既无奈又期待。',
                showChoices: true
            }
        ],
        choices: [
            { text: '尝试疯狂的方法', next: 'alice_choose_madness' },
            { text: '尝试智慧的方法', next: 'alice_choose_wisdom' }
        ]
    },

    alice_call_x: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你大声呼唤X的名字——"X！"——这个名字是字母表中的第二十四个字母，但在你的声音里，它变成了一个完整的句子，一个请求，一个祈祷。',
            },
            {
                speaker: 'narrator',
                text: '回声在迷宫中回荡——"X！X！X！"——声音在墙壁之间弹跳，像一只找不到出口的乒乓球。但没有回应。迷宫的回应是沉默，而沉默是所有声音中最响亮的。',
            },
            {
                speaker: 'cheshire',
                text: '呼唤她的名字不会让她出现，寻找者。名字只是一串声音，而声音不能打开门。你需要找到她，而不是叫她的名字。找到和叫到之间的区别，就像打开一扇门和敲一扇门之间的区别——一个是进入，一个是等待。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音从某处传来——某处是迷宫中最常见的位置，因为它可以是任何地方，也可以不是任何地方。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那我该怎么找到她？', next: 'alice_cheshire_center' }
        ]
    },

    alice_choose_both: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你笑了。为什么要选择？选择意味着"非此即彼"，但谁规定世界必须是二元的？你一边唱着无意义的歌——歌词是关于一只不存在的动物和它的不存在的午餐——一边计算着步伐的韵律，每一步都精确地落在歌词的韵脚上。',
            },
            {
                speaker: 'narrator',
                text: '墙壁困惑了。它们不知道应该把你当作疯子还是智者——因为疯子不会计算，智者不会唱歌。而你同时在做两件事，这超出了它们的分类系统。在困惑中，一条道路出现了——道路的形状像是一个耸肩，仿佛在说："好吧，你赢了，我也不知道你是什么。"',
            },
            {
                speaker: 'cheshire',
                text: '聪明。非常聪明。X也会喜欢这个答案。她总是说，最好的答案不在选项之内，而在选项之外。你创造了一个新的选项，而创造总是比选择更高级。恭喜你，寻找者——你已经比大多数寻找者走得更远了。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '在这种困惑中，道路稳定下来，像一个终于被说服的固执老人。',
                showChoices: true
            }
        ],
        choices: [
            { text: '前进', next: 'alice_maze_center' }
        ]
    },

    alice_x_why_leave: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '因为我必须。不是"必须"被强迫的意思，而是"必须"像水必须流动、树必须生长、鸟必须飞的那种必须。有些事情只有离开才能明白——就像你只有离开岸边，才能看到大海的全貌；只有离开山脚，才能看到山的形状。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '我在寻找答案——关于我们是谁，关于这个世界是什么，关于一切是否有一个可以被找到的终点。而你——你在寻找我。我们的寻找是不同的，像两条不同的河流。但也许它们会交汇在某一点，那个点就是迷宫的中心，就是我们站在一起的地方。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X的声音中带着悲伤——不是那种让人绝望的悲伤，而是那种让人清醒的悲伤，像秋天的第一场雨，有些凉，但也很干净。',
                showChoices: true
            }
        ],
        choices: [
            { text: '什么答案？', next: 'alice_x_what_answer' },
            { text: '我可以帮你找', next: 'alice_x_help_find' },
            { text: '那找到了吗？', next: 'alice_x_found_answer' }
        ]
    },

    alice_x_come_back: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '回去？回哪里去？"回去"是一个方向性的动词，但方向需要一个目的地。我们有目的地吗？还是说，我们只有起点，没有终点，只有旅程，没有家？我们没有家——"家"是一个多么沉重又多么轻飘飘的词。但我们有寻找，而寻找是所有无家可归者的共同家园。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '但也许——也许我们可以一起创造一个新的家。不是回到过去——过去是一本已经合上的书，你可以重读，但无法改写。而是走向未来，走向一个我们还没有踏足的地方。那里没有地图，但有我们的脚印。你愿意和我一起做这件事吗？',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X看着你，等待你的回答。她的眼神像是一扇半开的门——你可以看到里面的光，但你还不知道那光是什么颜色。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我愿意', next: 'ending_alice_together' },
            { text: '我需要时间', next: 'alice_x_think' }
        ]
    },

    alice_x_truth: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '真相？真相是——真相是我也不知道真相。你看起来有点失望，但你仔细想想——如果我知道真相，我还会在这里吗？如果我知道答案，我还会继续寻找吗？真相不是一个可以装进口袋的东西，它像水银，你越想抓住它，它越容易从指缝间溜走。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '我在寻找，就像你一样。也许真相就是我们都在寻找——这个句子本身，就是我能给你的最接近真相的东西。寻找不是为了找到，而是为了不停止。因为一旦停止，我们就变成了石头，变成了树木，变成了那些不再问问题的人。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X苦笑着——那笑容里有疲惫，有自嘲，也有一种奇妙的宁静，像是接受了所有的矛盾之后才会有的宁静。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那我们一起找', next: 'ending_alice_together' },
            { text: '这太令人沮丧了', next: 'alice_x_tired' }
        ]
    },

    alice_x_just_find: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '只是想找到我？没有"为什么"，没有"为了什么"，只是纯粹的"找到"。这本身就是一种答案——一种不需要文字的答案，一种不需要解释的答案。你的寻找不是为了获取信息，不是为了完成使命，而是因为——因为寻找是我的名字，也是你的动词。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '也许寻找本身就是意义，不需要更多的理由。就像呼吸不需要理由，心跳不需要理由，太阳升起不需要理由。意义不在于终点，而在于每一步、每一个选择、每一个遇见的人。你遇见了我，我遇见了你，这本身就是一个足够好的故事。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X微笑着——那微笑像是一道穿过云层的阳光，不刺眼，但很温暖。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那我们继续寻找', next: 'ending_alice_together' },
            { text: '我需要休息', next: 'alice_x_tired' }
        ]
    },

    alice_x_tired: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '累了？那就休息吧。休息不是失败，不是放弃，不是停止。休息是寻找的一部分——就像音乐中的休止符，不是音乐的结束，而是音乐最有力量的部分。你需要休息，你的脚需要休息，你的心需要休息，你的问题需要休息。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '在这个花园里，在这个迷宫的中央，在这个时间流动得特别慢的地方，休息也是一种选择。但不是永远。永远的休息叫做死亡，而暂时的休息叫做生活。我们可以坐下来，看着玫瑰改变颜色，听风声，让呼吸变得比问题更重要。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X坐在你身边，一起看着改变颜色的玫瑰。玫瑰从红色变成白色，从白色变成粉色，从粉色变成一种没有名字的颜色。时间在这里变得很慢，慢到你可以听到每一秒的脚步声。',
                showChoices: true
            }
        ],
        choices: [
            { text: '休息一会儿', next: 'alice_x_rest' },
            { text: '不，我们继续', next: 'ending_alice_together' }
        ]
    },

    alice_x_think: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '思考？很好。思考意味着你在认真对待——不是对待我，而是对待你自己。思考是大脑的锻炼，是灵魂的体操，是把问题从水里捞出来晾干的过程。很多人跳过思考直接行动，然后发现行动是错的。你选择先思考，这是一种我尊敬的态度。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '我会在这里等你——不是等待的"等"，而是期待的"等"。但不要太久。花园里的时间很奇怪——一分钟可能是一小时，一小时可能是一秒。如果你太久不回来，我可能变成一朵玫瑰，或者玫瑰可能变成我。你回来的时候，请仔细辨认。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X转身继续看着玫瑰。玫瑰们似乎感受到了她的目光，集体开得更鲜艳了一些——它们喜欢被看。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我想好了，我们一起走', next: 'ending_alice_together' },
            { text: '我还需要更多时间', next: 'alice_next_world' }
        ]
    },

    alice_x_rest: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你和X一起坐在花园里。你们不说话——或者说，你们用沉默交谈，而沉默是所有语言中最诚实的一种。玫瑰继续改变颜色，从红到白，从白到蓝，从蓝到一种介于希望和回忆之间的颜色。'
            },
            {
                speaker: 'narrator',
                text: '时间在这里没有意义——或者说，意义在这里没有时间。你意识到，也许这就是答案——不是找到终点，而是学会在寻找中休息；不是完成旅程，而是享受每一步；不是解开谜题，而是爱上谜题本身。'
            },
            {
                speaker: 'narrator',
                text: 'X的呼吸很平稳，像一首没有歌词的摇篮曲。你闭上眼睛，让这一刻变成永恒——不是永远的永恒，而是这个瞬间的永恒，这个休息的永恒，这个与X在一起的永恒。',
                showChoices: true
            }
        ],
        choices: [
            { text: '继续寻找', next: 'ending_alice_together' }
        ]
    },

    alice_x_what_answer: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '答案？大问题需要大答案，而大答案往往藏在小地方。关于我们是谁——不是生物学上的谁，而是哲学上的谁。关于这个世界是什么——不是物理学上的什么，而是存在意义上的什么。关于一切是否有意义——不是"有意义"还是"无意义"，而是"意义"这个词本身是否有意义。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '大问题，对吧？大得像一个没有边界的迷宫，大得像一个没有答案的谜语。但我相信答案藏在某个地方，在某个世界里——也许是我们已经走过的世界，也许是我们还没踏足的世界。每一个世界都是一面镜子，每一面镜子都反射出答案的一部分。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X的眼中闪烁着坚定的光芒——那光芒像是黑暗中的灯塔，不保证你能到达彼岸，但保证你不会迷失方向。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我帮你找', next: 'ending_alice_together' },
            { text: '如果找不到呢？', next: 'alice_x_what_if' }
        ]
    },

    alice_x_help_find: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '你帮我？真的吗？"真的"这个词，我希望它是真的——不是"真的"作为一句客套话，而是"真的"作为一颗跳动的、真实的、有温度的心。两个人寻找总比一个人好——不是因为两个人更快，而是因为两个人可以互相提醒为什么出发。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '太好了。这个词不够大，但它是所有我能想到的词里最接近的。我们一起——不是"我"和"你"，而是"我们"。一个全新的、由两个寻找者组成的实体，一个寻找的联盟，一个问问题的团队。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X露出了真诚的笑容——不是那种礼貌的、社交的笑容，而是那种从心底升起的、像日出一样自然的笑容。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我们一起', next: 'ending_alice_together' }
        ]
    },

    alice_x_found_answer: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '找到了一些——但不是全部。就像你拼拼图，拼出了一部分，看到了图案的轮廓，但关键的几块还在盒子底部。我知道我们在一个巨大的迷宫里，一个由故事构成的迷宫，每个世界都是一个故事，每个故事都是一面镜子，每面镜子都反射出不同的我们。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '但最大的谜题还没有解开——为什么我们会在这里？是谁把我们放在这个迷宫里？这个迷宫有没有出口？出口外面是什么？这些问题像俄罗斯套娃一样，一个套着另一个，永远没有最后一个。但也许，最后一个问题本身就是答案。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X的声音在最后一个字上微微颤抖——不是害怕的颤抖，而是渴望的颤抖，是那种你知道答案就在不远处、但还需要再走几步的颤抖。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我们一起解开它', next: 'ending_alice_together' }
        ]
    },

    alice_x_what_if: {
        scene: 'hedgeMaze',
        characters: [{ id: 'x', position: 'center' }],
        dialogues: [
            {
                speaker: 'x',
                text: '如果找不到？"如果"是一个假设的词，它假设了最坏的情况。但让"如果"来决定我们的行动，就像让天气预报来决定我们的心情。如果找不到答案——那我们就继续寻找。寻找是一个过程，不是结果。过程没有失败，只有停止。',
                highlight: 'x'
            },
            {
                speaker: 'x',
                text: '寻找本身就是答案，不是吗？寻找意味着你还没有放弃，意味着你还在乎，意味着你认为存在某种值得被找到的东西。这种信念——这种固执的、不合逻辑的、美丽的信念——可能比答案本身更重要。',
                highlight: 'x'
            },
            {
                speaker: 'narrator',
                text: 'X微笑着看着你。她的微笑像是一道不服输的彩虹——即使暴风雨还在，彩虹已经出现在了天空。',
                showChoices: true
            }
        ],
        choices: [
            { text: '你说得对', next: 'ending_alice_together' }
        ]
    },

    alice_help_x: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你决定帮助X。这个决定像一颗种子，一旦种下，就开始了它自己的生命。帮助不是施舍，而是同行；不是拯救，而是陪伴。但首先——在所有故事的"首先"里——你需要找到她。而找到她的路，在迷宫的中心。'
            },
            {
                speaker: 'narrator',
                text: '迷宫在远处等着你，绿色的墙壁在阳光下微微反光，像是在对你眨眼。它知道你要来，它已经为你准备好了谜题。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_queen_why: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '为什么？为什么！你问我为什么——就像问太阳为什么升起，问潮水为什么涨落，问火烈鸟为什么是粉红色的！因为她拒绝了我的游戏！拒绝！这个词有四个笔画，但每一个笔画都在我的王冠上划了一道裂痕！',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '没有人可以拒绝我的游戏。没有人！游戏是秩序的象征，是规则的体现，是我的意志在这个混乱世界里的延伸。拒绝游戏就是拒绝我，拒绝我就是拒绝秩序，拒绝秩序就是——就是——就是叛国！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音充满了愤怒——但如果你仔细听，愤怒的下面藏着别的东西。也许是恐惧，也许是不安，也许是某种她不愿意承认的脆弱。',
                showChoices: true
            }
        ],
        choices: [
            { text: '什么游戏？', next: 'alice_queen_game' },
            { text: '她去了哪里？', next: 'alice_queen_center' }
        ]
    },

    alice_queen_center: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '她去了迷宫中心——那个我禁止任何人进入的地方。那里有一扇门，一扇通往其他世界的门。门看起来像一面镜子，但镜子里不是你的脸，而是你真正的样子。只有真正理解自己的人，才能打开那扇门，才能穿过镜子而不被碎片割伤。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '她理解了——她理解了！我花了这么多年，这么多规则，这么多"砍头"的命令，就是为了阻止任何人理解。因为理解意味着自由，而自由意味着我的统治毫无意义。如果每个人都理解自己，要女王做什么？',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音带着一丝不甘——像是一个孩子发现自己的城堡其实是沙做的，海浪一来就会消失。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我要去那扇门', next: 'alice_maze_entrance' },
            { text: '你为什么不让别人去？', next: 'alice_queen_why_forbidden' }
        ]
    },

    alice_queen_why_forbidden: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '因为那是我的领地！我的规则！我的迷宫！"我的"——这个词是所有语言中最危险的词，因为它把世界分成了"我的"和"不是我的"。如果有人可以随便离开——如果有人可以穿过那扇门，去往其他世界，而不需要我的许可——那我还算什么女王？女王是什么？一个空荡荡的称号，一个没有实质的冠冕，一个被架空的、被遗忘的、被——被怜悯的！',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '如果规则可以被无视，那制定规则的人就失去了意义。你明白吗？我不只是害怕失去权力，我害怕失去我自己。没有女王这个身份，我是什么？我是谁？',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音近乎尖叫——但尖叫的末尾，有一个小小的颤音，那是她不小心暴露的脆弱。',
                showChoices: true
            }
        ],
        choices: [
            { text: '你的规则是错的', next: 'alice_queen_refuse' },
            { text: '我理解你的恐惧', next: 'alice_queen_deal' }
        ]
    },

    alice_queen_game: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '我的游戏？我的游戏是三个词，三个缠绕在一起形成一条锁链的词：控制。秩序。规则。首先你必须控制一切——从火烈鸟的颜色到刺猬的滚动方向，从太阳升起的时间到玫瑰的色号。然后你需要秩序——没有秩序，控制就是一片散沙，一把没有穿线的珠子。最后，你需要规则——规则是秩序的语言，是控制的语法，是——是——是！',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '在这个混乱的世界里——在这个逻辑会自己打结、时间会自己倒流、猫会自己消失的世界里——只有我的游戏能带来秩序。没有秩序，我们都会疯掉。都会变成疯帽匠那样，困在永远六点钟的茶会里，喝着没有味道的茶，讲着没有答案的谜语！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的眼中闪烁着偏执的光芒——但偏执的深处，你看到了一点点恐惧，像萤火虫在黑暗中闪烁。',
                showChoices: true
            }
        ],
        choices: [
            { text: '但秩序不是一切', next: 'alice_queen_refuse' },
            { text: '也许有其他方式', next: 'alice_queen_deal' }
        ]
    },

    alice_queen_observe: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你隐藏起来——藏在一棵心形树后面，树的心形叶子为你提供了绝佳的掩护。你观察女王。观察她如何对待仆人，如何对火烈鸟发怒，如何在没人注意的时候——在所有人都忙着执行她的命令的时候——偷偷揉了一下太阳穴，叹了一口气。',
            },
            {
                speaker: 'narrator',
                text: '你发现她其实很孤独。她的权力是一种防御——像刺猬的刺，不是用来攻击的，而是用来保护自己不被伤害的。她的愤怒是一种语言——她只会说这种语言，因为她没有学过别的表达方式。她的规则是一种安全感——她需要规则来告诉自己，她是存在的，她的存在是有意义的。',
            },
            {
                speaker: 'narrator',
                text: '也许X看到了这一点。所以她选择同情而不是对抗——不是因为软弱，而是因为理解。理解是比愤怒更强大的武器，因为它可以击中愤怒的源头。',
                showChoices: true
            }
        ],
        choices: [
            { text: '上前交谈', next: 'alice_queen_audience' },
            { text: '悄悄离开', next: 'alice_maze_entrance' }
        ]
    },

    alice_queen_ask_x: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '你直接问X？你直接——直接——用一个没有缓冲的、没有敬语的、没有铺垫的句子，问我关于X的事？你怎么敢！你怎么敢把那个名字像一块石头一样扔在我的宫殿里，让它砸碎我精心布置的秩序！',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '卫兵！卫兵！你们这些扑克牌，你们这些纸做的废物，给我抓住这个无礼的人！把他的无礼和他的头一起砍掉，看看哪个先落地！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '扑克牌士兵向你涌来——他们的数量是五十二张，刚好一副完整的牌，但缺了大小王，因为女王不允许任何比她更大的牌存在。',
                showChoices: true
            }
        ],
        choices: [
            { text: '战斗', next: 'alice_queen_fight' },
            { text: '逃跑', next: 'alice_queen_escape' },
            { text: '解释', next: 'alice_queen_explain' }
        ]
    },

    alice_queen_explain: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你试图解释——解释你的意图，解释你的寻找，解释为什么X不是威胁而是答案。但你的解释像水滴落在石头上，石头没有变湿，水滴却碎了。',
            },
            {
                speaker: 'queen',
                text: '解释？我不需要解释！解释是弱者的武器，是失败者的借口，是——是——是用来拖延时间的诡计！我需要的是服从！服从！这个词只有一个意思，不需要解释！',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '士兵们越来越近——他们的脚步整齐划一，每一步都踩在你的解释上，把它踩碎。',
                showChoices: true
            }
        ],
        choices: [
            { text: '逃跑', next: 'alice_queen_escape' }
        ]
    },

    alice_queen_fight: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你试图战斗——但扑克牌士兵太多了，他们的数量不是五十二，而是五十二乘以你想逃跑的次数。每打倒一个，两个新的站起来。你被包围，被制服，被按在地上。地面是心形的，但心形的地面仍然是地面——冰冷，坚硬，无情。',
            },
            {
                speaker: 'narrator',
                text: '女王冷冷地看着你。她的目光像是在看一只被钉在纸板上的蝴蝶——美丽，但已无力挣扎。',
            },
            {
                speaker: 'narrator',
                text: '"带走。"她说，声音轻得像是在决定晚餐吃什么。',
                showChoices: true
            }
        ],
        choices: [
            { text: '被带走', next: 'ending_alice_queen_prisoner' }
        ]
    },

    alice_queen_escape: {
        scene: 'queenGround',
        characters: [],
        dialogues: [
            {
                speaker: 'narrator',
                text: '你转身逃跑——转身是一个优雅的动作，但逃跑是一个狼狈的动作，两者结合在一起，形成了一种独特的、介于优雅和狼狈之间的姿态。士兵们在后面追赶，他们的纸靴子发出沙沙的声音，像秋风中的落叶。',
            },
            {
                speaker: 'narrator',
                text: '你跑向迷宫——绿色的墙壁像久别重逢的友人一样迎接你。它们在你身后合拢，像一扇被轻轻关上的门，把追兵隔绝在外面。你听到女王在远处尖叫，但尖叫已经被墙壁吞没了。',
            },
            {
                speaker: 'narrator',
                text: '你安全了，至少暂时。但"暂时"是一个狡猾的词——它承诺了安全，又暗示了危险。在这个世界里，暂时可能是一分钟，也可能是一百年，取决于时间的脾气。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_queen_deal: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '合作？有意思。非常有意思。在这个世界里，大多数人要么服从我，要么对抗我。但合作？合作是第三种选择，而第三种选择总是最有趣的——因为它不在规则之内，也不在规则之外，而是在规则的边缘跳舞。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王轻轻敲了敲她的权杖。地面微微震动了一下——像是在回应，又像是在抗议。',
            },
            {
                speaker: 'queen',
                text: '我确实需要一个能在迷宫中行走的人。我的士兵们——那些纸做的、扁平的、没有想象力的士兵——他们太笨了。他们总是走直线，因为直线是纸的逻辑。而迷宫没有直线——迷宫是由曲线、拐弯、死胡同和幻觉组成的。你需要的是能弯曲的人，而你——你看起来能弯曲。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '你想要X。我想要迷宫中心的东西——那扇门，那个通往其他世界的入口。你想要一个人，我想要一扇门。这是不是一对完美的交易？像茶杯和茶托，像火烈鸟和刺猬，像王冠和——头？',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的笑容没有到达她的眼睛。她的眼睛是冷的，像两颗红色的玻璃珠。',
                showChoices: true
            }
        ],
        choices: [
            { text: '具体是什么交易？', next: 'alice_queen_deal_detail' },
            { text: '我拒绝交易', next: 'alice_queen_refuse' }
        ]
    },

    alice_queen_deal_detail: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '交易很简单——简单到可以写在扑克牌的背面。你帮我找到迷宫中心的门，我就让你和X一起离开。你不必把她交给我，你不必出卖任何人。你只需要找到那扇门，告诉我它的位置，然后你就可以带着你的X去任何你想去的世界。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '但记住——在这个世界里，欺骗是规则的一部分。不是被禁止的犯规，而是被允许的策略。如果你欺骗我，我不会生气——我会欣赏你的技巧，然后砍掉你的头。欣赏和砍头可以同时进行，这并不矛盾。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的笑容没有到达她的眼睛——事实上，她的笑容和她的眼睛似乎住在不同的国家，说着不同的语言。',
                showChoices: true
            }
        ],
        choices: [
            { text: '成交', next: 'alice_queen_deal_accept' },
            { text: '我拒绝', next: 'alice_queen_refuse' }
        ]
    },

    alice_queen_where_first: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '先告诉你？你以为我会先给信息？你以为我会像打开笼子一样，把我珍贵的秘密暴露给一个陌生人？信息是权力，权力是信息，这是一个循环定义，但在这个循环里，我站在顶端。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '不，不。你先证明你的价值——先让我看到你能做什么，你能找到什么，你能带回来什么。然后我才考虑告诉你。交易不是慈善，交易是交换。如果你没有什么可交换的，那你连交易的门槛都没跨过。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的态度很坚决——像一扇被锁了三重的门，每把锁的钥匙都在不同的口袋里。',
                showChoices: true
            }
        ],
        choices: [
            { text: '成交', next: 'alice_queen_deal_accept' },
            { text: '我拒绝', next: 'alice_queen_refuse' }
        ]
    },

    alice_queen_deal_accept: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        onEnter: () => {
            if (!gameState.traits.includes('alice_queen_deal_accepted')) {
                gameState.traits.push('alice_queen_deal_accepted');
            }
        },
        dialogues: [
            {
                speaker: 'queen',
                text: '聪明的选择。虽然"聪明"在你身上可能是一个相对的概念——但相对的概念在这个相对的世界里，已经足够好了。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '去吧，寻找者。找到那扇门——那扇既是门又不是门，既是出口又是入口的东西。然后回来告诉我。记住——你带着我的信任，而信任在我的世界里，像玻璃一样脆，像纸一样薄，像火烈鸟的脾气一样不可预测。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王挥了挥手——那手势像是驱赶苍蝇，又像是签发通行证，具体是哪个，取决于你从哪个角度看。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_queen_trust: {
        scene: 'queenGround',
        characters: [{ id: 'queen', position: 'center' }],
        dialogues: [
            {
                speaker: 'queen',
                text: '你怎么知道？你不知道。你怎么能知道？信任是一个赌注，你押上你的判断，赌我没有说谎。但你怎么知道？你不知道——这是信任的本质：基于不确定的确定，基于未知的已知，基于怀疑的信仰。',
                highlight: 'queen'
            },
            {
                speaker: 'queen',
                text: '但你可以选择相信我——或者选择被囚禁。选择是你自己的，就像后果是你自己的。选择对了，你得到自由；选择错了，你得到牢房。这就是为什么选择如此重要，又如此可怕。',
                highlight: 'queen'
            },
            {
                speaker: 'narrator',
                text: '女王的声音冰冷——但冰冷的表面下，你感觉到一丝奇异的真诚，像是冰层下面的水还在流动。',
                showChoices: true
            }
        ],
        choices: [
            { text: '成交', next: 'alice_queen_deal_accept' },
            { text: '我拒绝', next: 'alice_queen_refuse' }
        ]
    },

    alice_farewell_hatter: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: '再见，寻找者——或者说，再见，即将成为寻找者的人。祝你好运。"好运"是一种奇怪的东西，你不能预订它，不能购买它，不能把它装进帽子里。但它有时候会来，有时候不来，像一个不守时的客人。我真诚地希望它来参加你的茶会。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '如果你找到X——如果你在那迷宫的中心，在那变色的玫瑰丛中见到她——请告诉她，告诉她疯帽匠还记得她。记得她的茶（她只喝了半口），记得她的谜语（她说了一个关于乌鸦和写字台的谜语，我至今还在想答案），记得她的勇气（那是我见过的最勇敢的东西，比任何帽子都高）。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '你转身离开。身后传来茶杯碰撞的声音——叮、叮、叮——像是某种不完整的告别旋律。你走的时候，感觉茶会还在继续，永远是六点，永远在开始，永远没有结束。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_x_tea: {
        scene: 'teaParty',
        characters: [{ id: 'madhatter', position: 'center' }],
        dialogues: [
            {
                speaker: 'madhatter',
                text: 'X？她喝了一口——准确地说，是喝了茶杯的东经三十度到东经六十度之间的那一小片区域——然后放下了。放下的动作很轻，但茶杯发出的声音很重，重得像一个宣言。',
                highlight: 'madhatter'
            },
            {
                speaker: 'madhatter',
                text: '她说："很好喝——不是\u2018好喝\u2019，而是\u2018很好喝进入了我的喉咙，然后告诉我它的故事，那个故事很动人，但只有一半是真的\u2019。但我还有路要走，路在等我，我不能让路等太久，因为路是一个没有耐心的东西。"然后她就走了，像一阵有目的地的风。',
                highlight: 'madhatter'
            },
            {
                speaker: 'narrator',
                text: '疯帽匠的眼中闪过一丝怀念——怀念像一杯放了太久的茶，颜色还在，但味道已经淡了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我也要走', next: 'alice_resist_tea' },
            { text: '再坐一会儿', next: 'alice_tea_drink' }
        ]
    },

    alice_cheshire_break: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '她怎么打破规则？她问了一个三个字母的词——"为什么"。不是"规则是什么"，不是"规则怎么用"，而是"为什么要有规则"。这个问题像一把小刀，看起来很小，但可以切开一切。大多数人接受规则，像鱼接受水——他们不思考水，他们只是在水里。但X问："为什么必须是水？为什么不能是空气？"',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '然后她发现——规则只是约定，不是真理。约定是大家同意的事情，但约定可以改变，可以推翻，可以重新商量。真理不一样——真理不依赖于同意。她找到了规则的漏洞：规则自己说了"必须遵守规则"，但规则没有说"必须遵守规则"这句话本身是不是规则。这是一个逻辑上的循环，而她从这个循环里跳了出来。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的笑容变得神秘——不是那种"我知道你不知道"的神秘，而是那种"我知道但我不确定我该不该告诉你"的神秘。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我也可以问为什么', next: 'alice_cheshire_can_i' }
        ]
    },

    alice_cheshire_can_i: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '你可以？当然可以。"可以"是一个被低估的词，它意味着许可，但在这个世界里，你需要的是你自己的许可，而不是别人的。每个人都可以问"为什么"——这个问题没有专利，没有版权，没有使用费。它像空气一样，是免费的。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '但大多数人害怕答案。他们害怕"为什么"后面的那个空白，因为空白可能填满他们不想听到的东西。X不怕——她问"为什么"，然后安静地听答案，不管答案是什么，不管答案有多可怕。你呢？你准备好听答案了吗？不管答案是什么？',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的眼睛直视着你——那双眼睛像是两个小小的、无限深的隧道，隧道尽头有光，但你不确定那光是什么颜色。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我不怕', next: 'alice_maze_entrance' },
            { text: '我有点怕', next: 'alice_i_dont_know' }
        ]
    },

    alice_cheshire_queen: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '女王？啊，女王。她是规则的化身——不是规则的制定者，而是规则的受害者。她制定了那么多规则，不是为了控制别人，而是为了控制自己。她害怕——害怕失去控制，害怕混乱，害怕自己在没有规则的世界里会变成什么。所以她制定了无数规则，像蜘蛛织网一样，把自己和所有人都困在里面。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '但规则越多，漏洞越多。就像织网，网越密，线越细，越容易破。她的规则手册有三千页，但漏洞有三千零一页。X读懂了那一页——那一页是空白的。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的笑容带着一丝嘲讽——但嘲讽的对象不是女王，而是规则本身。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那漏洞在哪里？', next: 'alice_cheshire_gap' }
        ]
    },

    alice_cheshire_gap: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '漏洞？在规则的缝隙中，在逻辑的盲点里。你知道盲点吗？每个人都有一个看不到的地方，就在视野的边缘。规则的盲点也一样——它存在于规则和规则之间，在那条没有人注意到的裂缝里。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '就像我现在存在的地方——我不完全存在，也不完全不存在。我不在规则之内，也不在规则之外，我就在规则的缝隙里。这就是漏洞。漏洞不是门，不是窗，而是墙壁本身的不完美。你不需要打破墙壁，你只需要找到那个不完美的地方，然后穿过它。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的身体开始消失——从尾巴开始，然后是它的条纹，然后是它的耳朵，最后是它的眼睛。眼睛消失的时候，像是两颗星星同时熄灭了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '那我该怎么找到漏洞？', next: 'alice_maze_entrance' }
        ]
    },

    alice_cheshire_found: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '她找到了吗？"找到"是一个完成时的动词，而完成时意味着结束。也许她找到了，也许她没有。但问题不在于她是否找到了，而在于她在寻找的过程中，已经改变了。改变是比找到更重要的结果——找到是一瞬间的，改变是永远的。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '她走进迷宫的时候是一个人，走到迷宫中心的时候变成了另一个人。不是魔法，不是诅咒，而是寻找本身塑造了她。寻找像一把刻刀，每一刀都在她身上留下了痕迹。也许这就是答案——不是终点，而是旅程；不是结果，而是过程。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的声音变得柔和——像一条丝绒毯子，轻轻地盖在谜语上，让谜语变得可以接受。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我明白了', next: 'alice_maze_entrance' }
        ]
    },

    alice_cheshire_why_riddle: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '为什么不直接告诉你？因为直接知道的答案，你不会珍惜。就像你直接得到一块蛋糕，你会吃掉它，然后忘记它的味道。但如果你自己烤了那块蛋糕——测量、搅拌、等待——你会记住每一步，每一个味道，每一个等待的瞬间。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X也经历了同样的过程。她问我谜语——我给了她谜语，不是答案。她必须自己解开，自己理解，自己找到。这个过程很痛苦，但痛苦是成长的别名。如果我把答案直接给她，她就不会成为今天的她。你也不会成为你需要成为的那个人。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的眼睛闪烁着智慧——那种智慧不是用来炫耀的，而是用来分享的，尽管分享的方式让人困惑。',
                showChoices: true
            }
        ],
        choices: [
            { text: '我理解', next: 'alice_maze_entrance' }
        ]
    },

    alice_cheshire_stay: {
        scene: 'hedgeMaze',
        characters: [{ id: 'cheshire', position: 'center' }],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '我已经告诉你很多了，寻找者。太多了，多到我自己都觉得惊讶——而惊讶，对于一只什么都见过的猫来说，是很罕见的。我已经把X的消息传递给了你，把迷宫的提示放在了你的口袋里，把思考的种子种在了你的心里。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: '剩下的，你需要自己去发现。发现不是被告知，而是自己睁开眼睛。我不能再给你更多了——不是因为吝啬，而是因为给太多会阻碍你的成长。就像浇水太多会烂根，喂食太多会撑坏肚子。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫完全消失了——先是身体，然后是尾巴，然后是笑容，最后是那个"消失"的动作本身。它消失了，连消失的痕迹都没有留下。',
                showChoices: true
            }
        ],
        choices: [
            { text: '去迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_with_determination: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '决心？很好。决心是最可靠的向导——它不会迷路，不会打瞌睡，不会在关键时刻消失。决心是一盏灯，你把它举在手里，它可以照亮前方三步，三步之后仍然是黑暗，但你至少知道该往哪里迈出第一步。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X也有决心——她的决心大得像一头大象，但她的决心学会了灵活。记住：决心不是固执。固执是头撞南墙不回头，决心是绕开南墙继续走。固执是闭上眼睛，决心是睁开眼睛。你要有决心，但不要有固执。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '柴郡猫的声音渐渐远去——像一首歌的尾音，在空中飘了三秒钟，然后被风吹散了。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入迷宫', next: 'alice_maze_entrance' }
        ]
    },

    alice_with_questions: {
        scene: 'hedgeMaze',
        characters: [],
        dialogues: [
            {
                speaker: 'cheshire',
                text: '带着疑问？这是最诚实的态度——比自信更诚实，比信仰更诚实，比任何肯定的答案都更诚实。疑问是知识的开始，是所有发现的起点，是每一个"为什么"的母亲。一个人带着疑问，意味着他还在成长；一个人没有疑问，意味着他已经停止了思考。',
                highlight: 'cheshire'
            },
            {
                speaker: 'cheshire',
                text: 'X也带着疑问——她的疑问多得像一箱没有整理的拼图，但她不急于得到答案。她享受寻找的过程，享受每一个"也许"和"可能"，享受每一个死胡同带来的教训。她告诉你，疑问不是负担，而是翅膀。',
                highlight: 'cheshire'
            },
            {
                speaker: 'narrator',
                text: '猫的声音带着赞许——赞许像一阵暖风，轻轻地吹过，然后融合在空气中。',
                showChoices: true
            }
        ],
        choices: [
            { text: '进入迷宫', next: 'alice_maze_entrance' }
        ]
    }
};

// 合并到主脚本
if (typeof SCRIPT !== 'undefined') {
    Object.assign(SCRIPT, ALICE_SCRIPT);
}