/**
 * 守望者世界
 * 主题：道德灰色地带、末日时钟、英雄与反英雄
 */

const watchmenChapter = {
    id: 'watchmen',
    name: '末日时钟',
    description: '谁守望守望者？在末日来临前，你必须做出选择。',
    
    scenes: {
        watchmen_entrance: {
            id: 'watchmen_entrance',
            background: 'watchmenCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '雨。霓虹灯。下水道冒着蒸汽，像这个城市在呼吸——缓慢的，腐烂的呼吸。一张报纸贴在排水沟的铁栅栏上，头条写着："战争将至。"下面，一则广告："你孤独吗？你害怕吗？你觉得自己不够好吗？"答案：是的。是的。是的。你站在街角，警笛声从远处传来，但在这里，法律是一张被雨水泡烂的纸。你继续走。除了继续走，还能做什么？',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '又一个。迷失的灵魂。这座城市在腐烂。从骨髓开始。闻到了吗？狗屎。汽油。恐惧。还有别的——更深的。末日。末日有自己的气味。像烧焦的塑料。像死老鼠在墙里腐烂。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你是谁？这是什么地方？',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '罗夏。叫我罗夏。我是这座城市的良心——也是它的审判者。你看，良心和审判者，在好日子里是同一个东西。在坏日子里——在这个城市所有的日子都是坏日子——它们互相撕咬。这里是1985年的纽约。或者说，是即将不再存在的纽约。这两者之间没有区别。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '末日时钟。滴答。滴答。苏联的核弹头对准曼哈顿。你感受得到吗？空气中的重量？而我们唯一的"超级英雄"——那个蓝色的神——他走了。去火星了。去造他自己的世界。因为他厌倦了我们。厌倦了我们的渺小。我们的混乱。我们的肮脏。你有勇气面对真相吗？还是说，你宁愿继续做梦？',
                    choices: [
                        { text: '我想了解真相', nextScene: 'watchmen_truth', trait: 'seeker' },
                        { text: '末日时钟是什么', nextScene: 'watchmen_clock', trait: 'curiosity' }
                    ]
                }
            ]
        },
        
        watchmen_truth: {
            id: 'watchmen_truth',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'rorschach',
                    text: '真相。你要真相？真相是这个世界不配被拯救。人类——自私。残忍。愚蠢。一种会直立行走的病毒。但我仍然守望。不是因为我爱他们。是因为总得有人。总得有人站在垃圾堆里，指着垃圾说：这是垃圾。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '跟我来。我带你去看看这个世界的真实面目。不是报纸上的谎言。不是电视里的微笑。是血。是骨头。是下水道里漂着的、没人愿意承认的东西。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你跟随罗夏穿过阴暗的街道。经过犯罪现场——黄色警戒线像伤口上的缝线。经过腐败的政客——他们的微笑像涂了蜡。经过绝望的贫民——他们的眼睛已经死了，剩下的只是等待。墙上的涂鸦写着："拯救我们。"有人在下面对了个问号。这个世界确实在腐烂。问题不是"是否"，而是"多久"。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '看到了吗？这就是"英雄"被禁止之后的世界。他们以为禁止了义警，就禁止了暴力。他们以为禁止了面具，就禁止了真相。他们错了。他们只是撕掉了创可贴，好让伤口继续化脓。',
                    choices: [
                        { text: '为什么禁止英雄', nextScene: 'watchmen_ban', trait: 'questioner' },
                        { text: '我们能做什么', nextScene: 'watchmen_action', trait: 'activist' }
                    ]
                }
            ]
        },
        
        watchmen_clock: {
            id: 'watchmen_clock',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你来到一座巨大的钟楼内部。齿轮在转动。每一次咬合都精确得像一个数学定理。指针在移动。每一次跳动都像心跳——又像倒计时。你分不清这两种声音。钟楼内部弥漫着机油和铁锈的味道。墙上贴着一张泛黄的纸条："时间是人类发明的最残忍的东西。"',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '末日时钟。它不显示时间。它显示的是人类距离自我毁灭的距离。现在——它指向午夜前五分钟。五。分钟。你知道五分钟有多长吗？够你后悔一辈子。但不够你拯救任何人。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我们能阻止它吗？',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '也许。也许不能。但问题从来不是"能不能"。问题是——代价是什么？拯救世界往往意味着背叛它。我见过太多人声称要拯救世界。他们最终都变成了他们想要对抗的东西。每一。个。人。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '有人策划了一件可怕的事。用数百万人的死亡换取核战争的停止。用一场屠杀换取另一场屠杀的不发生。如果你觉得这听起来像疯狂——那是因为它本来就是。但数学是对的。道德是错的。你选哪一个？',
                    choices: [
                        { text: '这不对', nextScene: 'watchmen_moral', trait: 'principled' },
                        { text: '必须考虑代价', nextScene: 'watchmen_cost', trait: 'pragmatist' }
                    ]
                }
            ]
        },
        
        watchmen_ban: {
            id: 'watchmen_ban',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'rorschach',
                    text: '为什么禁止英雄？因为人们害怕我们。不是害怕我们的力量。是害怕我们让他们的软弱变得可见。我们戴上面具去打击罪犯，他们脱下面具去掩盖罪行。我们让他们感到羞耻。而羞耻，比恐惧更让人难以忍受。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '基恩法案。政府通过了它。禁止义警活动。他们说这是为了法治。笑话。法治是强者用来捆绑弱者的绳索。正义不能等待法律许可。正义是暴力的，正义是立即的，正义不填表格。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你杀过人吗？',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '必要的时候。不是因为我喜欢。不是因为杀戮让我兴奋。是因为必须有人做脏活。世界不是由干净的手建立的。它是由血淋淋的、颤抖的、被诅咒的手建立的。你准备好了吗？准备好弄脏你的手？准备好成为别人噩梦里的怪物？',
                    choices: [
                        { text: '我愿意', nextScene: 'watchmen_dirty_hands', trait: 'ruthless' },
                        { text: '我不确定', nextScene: 'watchmen_doubt', trait: 'hesitant' }
                    ]
                }
            ]
        },
        
        watchmen_action: {
            id: 'watchmen_action',
            background: 'watchmenCity',
            dialogues: [
                {
                    character: 'rorschach',
                    text: '做什么？我们可以继续。继续打击罪犯。直到核弹落下。直到我们的骨头和他们的骨头混在一起，没有人能分清哪个是英雄哪个是罪犯。或者——我们可以寻找另一种解决方案。一种更可怕的方案。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '有一个计划。一个可怕的计划。它需要牺牲。不是我们自己的牺牲——那太容易了。是别人的。是那些永远不会知道为什么他们会死的人。但可能拯救所有人。可能。我痛恨"可能"这个词。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '什么计划？',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '去问那个天才。那个认为自己是神的人。他在南极。在冰层下面。在没有人能听到尖叫的地方。他在建造他的末日机器。他的解决方案。他的——他说——"唯一的出路"。去问他。然后自己判断。',
                    choices: [
                        { text: '去找他', nextScene: 'watchmen_seek_genius', trait: 'determined' },
                        { text: '先了解更多', nextScene: 'watchmen_investigate', trait: 'cautious' }
                    ]
                }
            ]
        },
        
        watchmen_moral: {
            id: 'watchmen_moral',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '为了拯救生命而杀人？这不可能是对的。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '理想主义。令人钦佩——也很危险。就像用一把没有刀刃的剑去对抗坦克。如果你想——如果你拒绝这个计划——核战争会杀死所有人。每一个人。如果你接受，数百万人会死。但数十亿人会活。这是算术。小学算术。但道德——道德不是算术。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '数学很简单。一千万小于一百亿。道德——道德是一团乱麻。是血。是尖叫。是看着镜子里的自己，然后发现自己不再认识那个人。我戴上面具不是为了保护别人。我戴上面具是为了不用面对镜子里的自己。现在你明白了吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '一定有其他方法。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '也许有。也许没有。但时间不多了。你听到那声音了吗？滴答。滴答。午夜不会等人。它从来不等。',
                    choices: [
                        { text: '寻找其他方法', nextScene: 'watchmen_alternative', trait: 'idealist' },
                        { text: '考虑这个计划', nextScene: 'watchmen_consider', trait: 'pragmatist' }
                    ]
                }
            ]
        },
        
        watchmen_cost: {
            id: 'watchmen_cost',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '如果代价是数百万人的生命……这值得吗？',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '这就是问题。没有好的选择。只有不那么坏的选择。在完美的世界里，你不会面临这种决定。但这不是完美的世界。这是真实的。在真实的世界里，英雄不是拯救者——英雄是选择较少尸体的人。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '那个天才相信这是唯一的办法。制造一个共同的敌人。一个足够大的威胁，让美苏停止互相瞄准，开始互相拥抱。一个谎言。一个用尸体搭建的谎言。但——如果它能拯救世界呢？如果谎言是唯一的真相呢？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '用一个谎言来拯救世界？',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '历史充满了这样的谎言。每一个和平条约下面都埋着尸体。每一个国家都是建立在骨头上的。问题是——你能接受成为其中的一部分吗？你能在签署了数百万人的死亡证明之后，还能入睡吗？因为我不确定我可以。',
                    choices: [
                        { text: '我不能', nextScene: 'watchmen_refuse', trait: 'integrity' },
                        { text: '如果必须的话', nextScene: 'watchmen_accept', trait: 'utilitarian' }
                    ]
                }
            ]
        },
        
        watchmen_dirty_hands: {
            id: 'watchmen_dirty_hands',
            background: 'watchmenCity',
            dialogues: [
                {
                    character: 'rorschach',
                    text: '好。至少你不虚伪。不假装自己干净。这个世界需要更多愿意做脏活的人。需要更多愿意承认——是的，我手上沾了血。是的，我还会继续。因为干净的手救不了任何人。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '跟我来。我教你真正的正义。不是法律书上的。不是大学课堂里的。是街头的。是后巷的。是你用拳头打断一个人的鼻梁之后，他看你的眼神——不是恐惧，是终于被看到了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你跟随罗夏进入黑暗。他教你他的方法。不是武术——是哲学。用疼痛作为语言。当一个人用手臂挡你的攻击时，他的手臂在肘部弯曲的方向不对——他需要四到六周才能重新使用它。你学会了。残酷。有效。像外科手术一样精确。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '记住：一旦你开始，就无法回头。正义是一条单行道。没有掉头。没有出口。你只能一直走。直到你变成你要追捕的东西——或者直到你被追捕。',
                    choices: [
                        { text: '继续', nextScene: 'watchmen_vigilante', trait: 'committed' }
                    ]
                }
            ]
        },
        
        watchmen_doubt: {
            id: 'watchmen_doubt',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'rorschach',
                    text: '不确定？犹豫。犹豫会害死你。也会害死别人。在战场上，犹豫是一颗子弹。在街头，犹豫是一把刀。犹豫——犹豫是最奢侈的奢侈品。而这个世界已经破产了。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '但也许——也许你的犹豫是对的。也许这个世界需要的不是更多的暴力。也许暴力从来不是答案，只是问题换了一种形式。我不确定。我从来不擅长"不确定"。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '去找那个老人。夜枭。他比我更温和。他仍然相信——相信什么，我不知道。也许是相信人。相信可能性。相信"也许"这个词。他也许能给你不同的答案。或者至少，不同的问题。',
                    choices: [
                        { text: '去找他', nextScene: 'watchmen_find_owl', trait: 'seeker' }
                    ]
                }
            ]
        },
        
        watchmen_seek_genius: {
            id: 'watchmen_seek_genius',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你来到了南极。冰。无尽的冰。在白色荒漠之中，矗立着一座建筑——不属于这个时代，不属于任何时代。它像一座坟墓，又像一座宫殿。里面，那个被称为"世界上最聪明的人"正在等待。他等待了很久。他一直在等待。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '啊。又一个来评判我的人。你带着你的道德，你的正义，你的"正确"和"错误"——就像小孩子带着玩具枪上战场。告诉我，你有更好的计划吗？一个能拯救世界的计划？一个不需要任何代价的计划？我洗耳恭听。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你的计划会杀死数百万人。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '而核战争会杀死所有人。数学不骗人。数学从不骗人。一百减一百等于零。一千万小于一百亿。这是事实。你可以不喜欢事实，但你不能改变它们。你只能选择——接受它们，或者被它们碾碎。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '我制造了一个外星生物。它会攻击纽约。数百万人会死——不是作为一个犯罪统计数据，而是作为一个"共同威胁"的受害者。美苏会联合起来——不是因为他们爱彼此，而是因为他们终于找到了一个比彼此更可怕的敌人。和平将通过恐惧维持。不是爱。是恐惧。这个世界只懂恐惧。',
                    choices: [
                        { text: '这是疯狂的', nextScene: 'watchmen_madness', trait: 'moral' },
                        { text: '这可能有效', nextScene: 'watchmen_might_work', trait: 'pragmatist' }
                    ]
                }
            ]
        },
        
        watchmen_investigate: {
            id: 'watchmen_investigate',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定先调查。文件。照片。剪报。每一页都是一个伤口。你翻阅——手指沾满墨水，像沾满血。线索像蛛网一样交织：义警被系统性地杀害，一个接一个，像被从棋盘上移除的棋子。核战争一触即发——不是"可能"，是"即将"。而有人在幕后操纵一切。你可以在文件之间感受到他的指纹。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你发现了一张照片。照片上，那些曾经的英雄——微笑的，年轻的，愚蠢的。他们以为自己在拯救世界。他们不知道，世界需要的不是拯救——世界需要的是有人告诉它，它不值得被拯救。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '你发现了什么，侦探？除了灰尘和绝望？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '有人在策划一件大事。一件可怕的事。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '是的。而你必须决定——是阻止它，还是让它发生？是成为英雄，还是成为历史？这两者之间，几乎没有区别。',
                    choices: [
                        { text: '阻止它', nextScene: 'watchmen_stop_plan', trait: 'hero' },
                        { text: '了解更多', nextScene: 'watchmen_more_info', trait: 'cautious' }
                    ]
                }
            ]
        },
        
        watchmen_alternative: {
            id: 'watchmen_alternative',
            background: 'watchmenCity',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '一定有不需要杀人的方法。外交。谈判。理性对话。人类不是动物——他们可以沟通。他们可以理解。他们可以改变。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '理想主义。你看，我年轻的时候也相信这些。我在大学里读过康德。绝对命令。人是目的，不是手段。但那是哲学课。这是核弹。当导弹已经在空中，理性往往来不及。理性——理性是人类最伟大的发明。也是最慢的。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '不过——也许值得一试。如果失败了呢？你赌上了全人类的命运。如果成功了呢？你证明了——证明我们不需要成为怪物才能拯救世界。这值得赌吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '值得。我愿意尝试。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '那么去吧。和平使者。天真的、愚蠢的、勇敢的和平使者。但记住——时钟不会停止。它从不停止。在你说话的时候，它继续滴答。在你相信的时候，它继续滴答。',
                    choices: [
                        { text: '尝试外交', nextScene: 'watchmen_diplomacy', trait: 'diplomat' }
                    ]
                }
            ]
        },
        
        watchmen_consider: {
            id: 'watchmen_consider',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '如果这是唯一的办法……如果数学真的支持这个决定……如果一千万真的小于一百亿……那么也许……也许我应该接受。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '你在考虑接受。这需要巨大的心理承受力。不是勇气——勇气是面对敌人。这是别的。这是面对自己。面对一个决定接受数百万人死亡的自己。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '数百万人会死。他们的血会沾在你的手上。不是比喻——是真实。你会梦见他们。你会数他们。每一个。一。二。三。四——你会数到天亮，然后发现天还没亮。但数十亿人会活。他们会吃早餐，亲吻孩子，抱怨天气——他们不会知道，他们的每一天都是建立在尸体上的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我能承受吗？',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '只有你自己知道。没有人能替你回答。但无论你选择什么——承担它。不要找借口。不要说"我别无选择"。那是谎言。你永远有选择。只是有些选择——比死亡更重。',
                    choices: [
                        { text: '支持计划', nextScene: 'watchmen_support_plan', trait: 'utilitarian' },
                        { text: '再考虑', nextScene: 'watchmen_reconsider', trait: 'uncertain' }
                    ]
                }
            ]
        },
        
        watchmen_refuse: {
            id: 'watchmen_refuse',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我不能参与这个。杀害无辜的人——无论理由多么高尚——都是错的。不是"也许错"。是"绝对错"。如果道德有任何意义，那么它必须在最极端的情况下仍然成立。否则它什么都不是。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '那么你必须阻止它。但阻止它意味着——核战争。不是比喻。不是假设。是真实的核战争。所有人都会死。包括那些你试图保护的无辜者。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '你准备好承担这个后果了吗？你准备好看着镜子里的自己，说——"我选择让所有人死去，因为我不想让一部分人死去"？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我宁愿选择真实的毁灭，也不愿活在谎言的和平中。如果人类不能靠真相生存，那么他们也不配靠谎言生存。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '那么你是真正的英雄。愚蠢的——上帝啊，愚蠢的——但真实的。去吧。阻止他。也许你错了。也许你对。但至少——至少你不会在噩梦里问自己："如果我当时选择了另一条路呢？"',
                    choices: [
                        { text: '阻止计划', nextScene: 'watchmen_prevent', trait: 'hero' }
                    ]
                }
            ]
        },
        
        watchmen_accept: {
            id: 'watchmen_accept',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '如果这是拯救数十亿人的唯一方法……那么我必须接受。不是因为我想要。不是因为它是对的。是因为——别无选择。有时候，别无选择就是唯一的选择。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '你选择了实用主义。道德上可疑——极其可疑。但数学上正确。一千万小于一百亿。这是事实。事实不会因为你厌恶它而改变。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '但你必须知道——这个秘密必须永远保守。如果世界知道真相——如果世界知道和平是建立在谎言之上的——那么和平就会崩溃。不是"可能崩溃"。是"一定会崩溃"。真相是和平的毒药。多么讽刺。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会保守秘密。我会把它带进坟墓。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '那么欢迎加入这个可怕的联盟。守望者中最黑暗的秘密。我们守望世界——但我们到底在守望什么？是和平，还是谎言？渐渐地，你不再能分辨。也许——也许这两者本来就是同一个东西。也许这就是守望者的诅咒：我们守望的，是我们自己创造的谎言。',
                    choices: [
                        { text: '加入', nextScene: 'watchmen_join_conspiracy', trait: 'pragmatist' }
                    ]
                }
            ]
        },
        
        watchmen_vigilante: {
            id: 'watchmen_vigilante',
            background: 'watchmenCity',
            ending: {
                title: '夜巡者',
                desc: '你选择了在黑暗中守望。正义的代价是孤独，而真相——X的真相——也许就藏在这片黑暗中。继续守望，答案自会浮现。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你成为了义警。在罗夏的注视下，你学会了在黑暗中战斗。不是像骑士——骑士有盔甲，有荣誉，有结局。你像老鼠。在阴影中穿行，在灰色地带觅食。你学会了分辨：哪些声音是受害者，哪些是捕食者，哪些是两者皆是。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你打击罪犯。你保护无辜。但你也染上了鲜血。不是比喻。是真实的血。黏稠的，温热的，沾在你的指关节上，干了以后变成褐色的粉末。正义的代价——不是灵魂的一部分，而是灵魂本身。你照镜子时，开始看到罗夏的脸。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '你做得很好。也许太好了。记住——不要变成你追捕的东西。我最害怕的不是罪犯。是我自己。每天早上醒来，检查自己：我还在吗？还是我已经变成了他们？你也要检查。每天早上。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会记住的。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '那么继续守望吧。直到末日来临——或者直到你变成另一个需要被阻止的怪物。谁在守望守望者？没有人。没有人能。所以你必须自己守望自己。',
                    choices: [
                        { text: '继续守望', nextScene: 'crossroads', trait: 'vigilante' }
                    ]
                }
            ]
        },
        
        watchmen_find_owl: {
            id: 'watchmen_find_owl',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'owl',
                    text: '罗夏派你来的？有趣。他通常不信任任何人。他甚至不信任他自己。我猜你是通过了某种测试——或者只是运气好。不管是哪种，请坐。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '我是夜枭。曾经是义警。穿着戏服，在屋顶上跳跃，相信自己在做正确的事。现在——现在我退休了。不是因为我老了。是因为我累了。累到骨头里了。但我仍然关心这个世界。就像你关心一个你曾经爱过的人，即使你知道她永远不会回来。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '罗夏说有一个计划。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '是的。一个可怕的计划。一个让你在半夜醒来，浑身冷汗的计划。我需要你帮我决定——支持它，还是阻止它？或者，也许——也许最重要的是：你是否能承受任何一种选择的结果？',
                    choices: [
                        { text: '告诉我更多', nextScene: 'watchmen_clock', trait: 'seeker' }
                    ]
                }
            ]
        },
        
        watchmen_madness: {
            id: 'watchmen_madness',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '这是疯狂的！你不能为了"拯救"世界而毁灭它！你不能用屠杀来换取和平——那和平是假的，是用血写的，是用尸体的默许换来的！',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '疯狂？也许。但历史由胜利者书写。亚历山大杀死了数百万人——他是征服者。成吉思汗屠杀了整个城市——他是帝国的建立者。如果我的计划成功，我会被铭记为救世主。如果失败——我会被铭记为疯子。区别在于：成功。疯狂和天才之间的唯一区别。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你会阻止我吗？你是否愿意用你的双手，推倒我花了二十年建造的墙壁？你是否愿意在核战争爆发后，站在废墟上说——"至少我没有杀人"？你有这个能力吗？你有这个勇气吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我必须尝试。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '那么来吧。让我们看看——是理想主义更强，还是现实更残酷。我活了四十年，见过无数理想主义者。他们都变成了什么？要么死了，要么妥协了，要么——变成了我。',
                    choices: [
                        { text: '对抗他', nextScene: 'watchmen_confront', trait: 'hero' }
                    ]
                }
            ]
        },
        
        watchmen_might_work: {
            id: 'watchmen_might_work',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '这很可怕……但也许……也许这是唯一的办法。不是因为它好——是因为没有更好的。不是因为它正义——是因为没有正义的选项。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你在考虑支持我。聪明人。只有聪明人会做这种决定。愚蠢的人相信道德会拯救他们。聪明人知道——道德是奢侈品。而奢侈品，在末日面前，是第一个被放弃的。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '但记住——一旦开始，就无法回头。你按下按钮，数百万人消失。不是数字。是人。有名字的。有家庭的。有最喜欢的歌曲的。有怕黑的小孩的。他们的血会沾在我们的手上。不是比喻。是事实。你准备好了吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '为了数十亿人的生存。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '正是如此。为了数十亿人。为了那些永远不会知道我们做了什么的人。为了那些会在早餐桌上抱怨咖啡太淡的人。他们不知道——他们的咖啡，他们的抱怨，他们的"无聊的日常"——是用一千万条命换来的。那么，欢迎加入末日计划。',
                    choices: [
                        { text: '加入计划', nextScene: 'watchmen_join_plan', trait: 'pragmatist' }
                    ]
                }
            ]
        },
        
        watchmen_stop_plan: {
            id: 'watchmen_stop_plan',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定阻止这个计划。你潜入南极的设施——走廊像迷宫，墙壁像坟墓。每一个转角都可能藏着死亡。你面对那个天才。他站在他的末日机器旁边，像站在一座祭坛前。他的眼神——不是疯狂的。是冷静的。像外科医生。像屠夫。有时候，这两者没有区别。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你以为你在拯救世界？不。你在毁灭它。核战争会在一周内爆发。你阻止的不是屠杀——你阻止的是屠杀的替代方案。你选择的不是"没有屠杀"——你选择的是"更大的屠杀"。恭喜你。你的道德是干净的。你的手是干净的。你的墓碑上可以写："他从未妥协。"',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我宁愿真实的毁灭，也不愿谎言的和平。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '理想主义者。愚蠢的——但令人钦佩。你知道吗？我年轻时也像你一样。相信真相。相信道德。相信"正确的事"。然后我长大了。你也会的。如果你还有时间。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你阻止了计划。机器被关闭。阴谋被揭露。但时钟仍在滴答。它从不停止。末日仍在接近。不是以入侵的形式——而是以人类自己的手。你赢了这场战斗。但战争——战争才刚刚开始。',
                    choices: [
                        { text: '面对后果', nextScene: 'watchmen_face_consequences', trait: 'hero' }
                    ]
                }
            ]
        },
        
        watchmen_more_info: {
            id: 'watchmen_more_info',
            background: 'watchmenOffice',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你继续调查。你发现这个计划已经准备多年——不是几个月的冲动，而是几十年的策划。巨大的资源被调动。科学家。资金。政治关系。就像建造一座教堂——但祭坛上供奉的不是神，而是末日。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '而且其他义警也知道。有些人支持——因为他们相信这是唯一的路。有些人反对——因为他们拒绝成为怪物。所有人都被这个秘密压得喘不过气。它像一块石头，绑在每个人的脖子上。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '现在你了解了全貌。这不是一个人的疯狂——这是一个绝望的选择。一个人提出的，其他人被迫参与的。有些人说"是"。有些人说"不"。但没有人能说"无所谓"。这就是这个秘密的重量。它不允许你中立。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我必须选择立场。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '是的。而且无论选择什么——都会改变你。不是"可能改变"。是"一定会改变"。你走出这个房间之后，就不再是走进来时的你了。所以选择吧。但记住——没有回头路。',
                    choices: [
                        { text: '做出选择', nextScene: 'watchmen_choose_side', trait: 'decisive' }
                    ]
                }
            ]
        },
        
        watchmen_diplomacy: {
            id: 'watchmen_diplomacy',
            background: 'watchmenCity',
            ending: {
                title: '和平使者',
                desc: '你用对话而非暴力阻止了末日。X曾说，真正的力量不在于统治，而在于理解。这条路通向的，或许就是X留下的答案。'
            },
            onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('watchmen'); },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你尝试外交。不是通过武器——是通过词语。一个词接一个词，一块砖接一块砖，你试图搭建一座桥。你联系双方——苏联人，美国人，愤怒的人，恐惧的人。你发现，在核弹的阴影下，所有人都是一样的：害怕的，渺小的，渴望被听到的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一个漫长的过程。充满挫折。充满误解。充满深夜——你在凌晨三点醒来，盯着天花板，问自己：我在做什么？我凭什么认为我能改变什么？但渐渐地，那些墙壁开始松动。不是倒塌——是松动。只是松动。但有时候，松动就够了。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '你做到了不可能的事。和平——通过对话而不是恐惧。通过理解而不是炸弹。你知道这有多罕见吗？在人类历史上，这是第一次——第一次有人选择了沟通而不是毁灭。你是第一个。但愿不是最后一个。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我们只是需要有人愿意尝试。愿意相信——相信人类不仅仅是他们最坏的一面。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '是的。而你愿意。这就是英雄的真正含义。不是面具。不是力量。是愿意尝试——即使知道可能会失败。即使知道所有人都说你疯了。即使知道——这个世界可能不值得你这么做。',
                    choices: [
                        { text: '庆祝和平', nextScene: 'crossroads', trait: 'peacemaker' }
                    ]
                }
            ]
        },
        
        watchmen_support_plan: {
            id: 'watchmen_support_plan',
            background: 'watchmenClock',
            ending: {
                title: '沉重的拯救',
                desc: '你选择了实用主义的道路，背负着数百万人的重量。X也曾面临类似的选择——在无数世界中，有些选择没有正确答案。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选择了支持计划。这是一个沉重的决定——不是"正确的"，是"必要的"。你告诉自己这是必要的。你一遍又一遍地告诉自己。直到那些词语开始失去意义。直到"必要"和"邪恶"听起来像同一个词。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '计划执行了。纽约——一个巨大的、血淋淋的伤口在地图上爆发。数百万人死去。不是士兵。不是政客。是普通人。是在错误的时间出现在错误地点的人。但核战争被阻止了。世界团结了。不是因为爱——是因为恐惧。但团结了。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你做了正确的选择。艰难的——但正确的。历史会证明。不是今天。不是明天。但一百年后，当人们回顾这段历史时，他们会说——"他们做了必须做的事。"他们会感激我们。即使他们永远不会知道我们的名字。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会记住那些死去的人。每一个。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '我们都应该。他们的牺牲拯救了世界。不是自愿的牺牲——是强加的。但牺牲就是牺牲。我们欠他们。我们欠他们每一滴血。每一滴都变成了和平。也许这就是世界的交易——血换和平。从来如此。',
                    choices: [
                        { text: '承担罪责', nextScene: 'crossroads', trait: 'burdened' }
                    ]
                }
            ]
        },
        
        watchmen_reconsider: {
            id: 'watchmen_reconsider',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我需要更多时间。更多信息。更多——更多的一切。我现在不能决定。我不能。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '时间。时间是我们没有的东西。它正在滴答。每一秒。每一秒。你听到了吗？那是世界的呼吸——越来越浅。越来越快。越来越接近窒息。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '但犹豫不决比错误的选择更糟。错误的选择——至少你做了选择。你承担了后果。犹豫——犹豫是逃避。是假装你有无限的时间。你没有。我们都没有。决定吧。现在。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我……',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '选择。现在。不是明天。不是等你想清楚。是想不清楚的。永远不会想清楚。这就是重点——有些决定，你永远不知道是对是错。你只能选择。然后承担。',
                    choices: [
                        { text: '支持', nextScene: 'watchmen_support_plan', trait: 'pragmatist' },
                        { text: '反对', nextScene: 'watchmen_prevent', trait: 'idealist' }
                    ]
                }
            ]
        },
        
        watchmen_prevent: {
            id: 'watchmen_prevent',
            background: 'watchmenClock',
            ending: {
                title: '理想主义者',
                desc: '你选择了道德的高地，即使面对末日。X的线索暗示，相信人类本身就是一种力量。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你阻止了计划。你面对那个天才——面对他的逻辑，他的数学，他的"一千万小于一百亿"。面对他的绝望——不是疯狂，是绝望。一个聪明到足以看到末日的人，聪明到足以设计一个解决方案，但不够聪明到看到——有些事，不应该做。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你选择了道德的高地。即使这意味着风险。即使这意味着明天可能就没有明天了。你站在那里，在废墟尚未成为废墟的时刻，说——"不。"一个词。一个简单的词。但有些时候，一个词就够了。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你选择了理想主义。让我们希望它不会导致毁灭。让我们希望——你的"不"比我的"是"更有力量。我不相信。但——我希望。我希望你是对的。我从来没有像现在这样希望自己错了。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我们必须相信人类。相信他们不仅仅是他们最坏的一面。相信他们可以改变。可以在没有炸弹的情况下成长。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '那么去吧。相信者。证明我是错的。证明人类值得被拯救——不是因为数学，而是因为他们自己。去做吧。如果成功了——我会感谢你。如果失败了——我不会说"我告诉过你"。因为那时候，没有人能说任何话了。',
                    choices: [
                        { text: '相信人类', nextScene: 'crossroads', trait: 'idealist' }
                    ]
                }
            ]
        },
        
        watchmen_join_conspiracy: {
            id: 'watchmen_join_conspiracy',
            background: 'watchmenClock',
            ending: {
                title: '共谋者',
                desc: '你加入了守望者中最黑暗的秘密。X的日记中写道："有些秘密必须被保守，直到正确的时刻。"'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你加入了阴谋。不是作为一个不知情的旁观者——是作为一个参与者。你签了名。你用你的沉默签署了它。你承担了它的重量——不是石头，是尸体。一具接一具，压在你的肩上。你学会了走路——在那种重量下走路。你学会了微笑——在那种重量下微笑。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '世界得救了。新闻标题写着："和平。"照片上，美苏领导人握手。他们看起来如释重负。他们不知道——他们不知道他们的握手是用血润滑的。你的灵魂永远染上了污点。不是"可能"。是"已经"。你每天早上醒来，检查那个污点。它还在。它永远在。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '欢迎加入守望者中最孤独的一群人。那些为了拯救世界而背叛它的人。那些每天早上醒来，看着镜子，对里面的人说："我做了必须做的事。"然后那个镜子里的人——他不相信。但他也不反驳。因为他知道——反驳意味着重新审视一切。而重新审视一切——可能是毁灭性的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我们能保守这个秘密吗？能永远保守吗？',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '我们必须。为了和平。为了那些在和平中生活的人。为了那些永远不会知道真相的人。他们不需要知道——他们只需要活着。也许这就是我们给他们的礼物——无知。也许无知是最大的仁慈。但对我们——对我们来说，真相就是我们的惩罚。',
                    choices: [
                        { text: '保守秘密', nextScene: 'crossroads', trait: 'conspirator' }
                    ]
                }
            ]
        },
        
        watchmen_confront: {
            id: 'watchmen_confront',
            background: 'watchmenClock',
            ending: {
                title: '对抗者',
                desc: '你面对了天才，阻止了他的计划。X也曾面对过类似的时刻——在分岔路口，一个选择改变一切。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你面对了那个天才。不是用拳头——是用意志。他比你聪明一千倍——他可以在你开口之前算出你要说什么。但有些东西，计算不了。信念。愤怒。信念和愤怒——有时候，它们比逻辑更强大。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '最终，你破坏了他的计划。机器沉默。阴谋瓦解。但胜利尝起来像灰烬。因为你不知道这是否是正确的选择。你永远不会知道。也许这就是做正确的事的代价——你永远不知道它是否正确。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你赢了这场战斗。但战争——战争可能才刚刚开始。不是和我的战争。是和人类自己的战争。和他们的恐惧。和他们的无知。和他们的无法改变的自我毁灭倾向。你阻止了解决方案。现在——你准备好面对问题了吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我做了正确的事。至少——我相信我做了。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '也许。时间会证明一切。如果还有时间的话。如果核弹没有先落下。如果人类的愚蠢没有先完成我的工作。那么也许——也许有一天，你会知道答案。但现在——现在，你只能相信。只能相信。就像我一样。',
                    choices: [
                        { text: '面对未来', nextScene: 'crossroads', trait: 'uncertain_hero' }
                    ]
                }
            ]
        },
        
        watchmen_join_plan: {
            id: 'watchmen_join_plan',
            background: 'watchmenClock',
            ending: {
                title: '救世主的代价',
                desc: '你成为了计划的一部分，承担了世界的重量。X知道，有些道路一旦踏上就无法回头。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你加入了计划。你帮助准备。你帮助执行。你帮助——杀戮。不是你亲手杀死的。但你的手在按钮上。你的声音在会议中说"同意"。你的签名在文件上。每一个签名都是一条命。你已经数不清了。你停止数的那天——是你真正开始害怕的那天。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '当一切结束时，世界得救了。联合国宣布"人类历史上最伟大的和平"。报纸上，孩子们在微笑。母亲们在哭泣——幸福的泪水。但你再也无法直视镜子。镜子里的那个人——他看起来像你。但他不是你。你认识的那个人。那个相信正义的人。那个相信"正确"和"错误"的人。那个人——已经死了。',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '你做了必须做的事。这就是守望者的命运——不是保护世界，是承担世界的重量。不是站在光明中，是站在阴影里，做那些光明中的人无法想象的事。然后——然后假装自己仍然是英雄。这是最难的部分。假装。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '值得吗？告诉我——值得吗？',
                    choices: null
                },
                {
                    character: 'strategist',
                    text: '值得。但代价——代价永远存在。不是一次性的。不是"付完就结束了"。是每一天。每一分钟。你每次看到一个孩子微笑，你就会想起——他的微笑是买来的。用血买的。你每次听到有人说"和平"，你就会想起——和平是一个谎言。一个美丽的、必要的、拯救了全人类的谎言。但仍然是谎言。这就是代价。永远。',
                    choices: [
                        { text: '承担代价', nextScene: 'crossroads', trait: 'burdened_savior' }
                    ]
                }
            ]
        },
        
        watchmen_face_consequences: {
            id: 'watchmen_face_consequences',
            background: 'watchmenCity',
            ending: {
                title: '守望者的抉择',
                desc: '你选择了道德，面对后果。X的线索指向一个真相：守望者守望的不仅是世界，还有自己的灵魂。'
            },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你阻止了计划，但核战争仍在逼近。不是比喻——是真实的导弹，真实的按钮，真实的手指在按钮上颤抖。你必须面对这个后果。不是明天。不是"以后"。是现在。每一个滴答声都是一步。每一步都更接近午夜。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你继续战斗。继续寻找。继续在每一个黑暗的角落里翻找解决方案——像一个捡垃圾的人，在废墟中寻找可回收的东西。你找到了什么？碎片。线索。希望——希望是最脆弱的东西，也是最顽固的。它不肯死。即使你希望它死。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '你选择了道德。即使面对毁灭。令人钦佩。愚蠢——但令人钦佩。你知道我为什么尊敬你吗？不是因为你聪明。不是因为你强大。是因为你选择了最难的选项。不是因为它是正确的——是因为它让你在夜里还能看着镜子。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不会后悔。不会。',
                    choices: null
                },
                {
                    character: 'rorschach',
                    text: '那么继续守望吧。理想主义者。直到最后。直到最后一秒。直到最后一口气。直到——直到没有"直到"。这就是守望者做的事。守望。即使没有人在看。即使没有人关心。即使——守望本身，就是唯一的回报。',
                    choices: [
                        { text: '守望到最后', nextScene: 'crossroads', trait: 'principled' }
                    ]
                }
            ]
        },
        
        watchmen_choose_side: {
            id: 'watchmen_choose_side',
            background: 'watchmenClock',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你必须选择。支持计划——拯救世界，但牺牲灵魂。还是阻止计划——保持道德，但冒险毁灭。没有中间地带。没有灰色——尽管这个世界到处都是灰色。在这个时刻，灰色消失了。只剩下黑和白。你站在分界线上。一只脚在一边，一只脚在另一边。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '没有正确答案。只有选择。和后果。没有回头路。没有"我改变主意了"。没有"让我再想想"。这就是你被放在这里的时刻——这个时刻一直在等你。不是偶然。不是巧合。是必然。你一直在走向这个时刻。现在你在它面前。',
                    choices: null
                },
                {
                    character: 'owl',
                    text: '选择吧。时间到了。不是"快到了"。是"到了"。你听到了吗？滴答。滴答。最后一声滴答。之后——沉默。',
                    choices: [
                        { text: '支持计划', nextScene: 'watchmen_support_plan', trait: 'pragmatist' },
                        { text: '阻止计划', nextScene: 'watchmen_prevent', trait: 'idealist' }
                    ]
                }
            ]
        }
    }
};

// 注册章节
if (typeof CHAPTERS !== 'undefined') {
    CHAPTERS.watchmen = watchmenChapter;
}
