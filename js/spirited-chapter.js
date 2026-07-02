/**
 * 千与千寻/神隐世界
 * 主题：成长与勇气、记忆与身份、贪婪与纯真
 */

const spiritedChapter = {
    id: 'spirited',
    name: '神隐之旅',
    description: '在这个神灵与妖怪共存的世界，不要忘记你的名字。',
    
    scenes: {
        spirited_entrance: {
            id: 'spirited_entrance',
            background: 'spiritedMarket',
            dialogues: [
                {
                    character: 'narrator',
                    text: '黄昏。那种光线让你分不清是白天还是夜晚——好像两者在商量谁来接手。红色的灯笼在微风中轻轻摇曳，一盏接一盏，像在传递什么秘密。空气中飘着食物的香气——酱油、烤鱼、还有某种甜得让人鼻子发酸的东西。你不知道那是什么。但你记得小时候闻过。在很久以前。在你还记得自己是谁的时候。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你停下脚步。街道两旁是古老的日式建筑，木头的纹理在暮色中显得湿润而温暖。摊位上摆满了你从没见过的食物——有些闪着柔和的光，有些则在阴影里沉默着，像在等人来认领它们。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你来了。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '迷路的灵魂。你已经跨过了边界。你闻到了吗？这是不属于人类世界的风。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我……我只是迷路了。我想回家。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '家。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '在这里，名字就是力量，记忆就是锚点。如果你忘了你是谁——你就再也回不去了。这是这个世界的规则。不是谁定的，是它本来就是这样。',
                    choices: [
                        { text: '我会记住的', nextScene: 'spirited_bathhouse', trait: 'determination' },
                        { text: '请帮帮我', nextScene: 'spirited_help', trait: 'humility' }
                    ]
                }
            ]
        },
        
        spirited_help: {
            id: 'spirited_help',
            background: 'spiritedMarket',
            dialogues: [
                {
                    character: 'narrator',
                    text: '风从河面上吹过来，带着水草的味道。那个戴面具的身影沉默了一会儿，久到你以为它不会再说话了。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '寻求帮助并不可耻。在你来之前，每一个在这里生活过的人，都曾向别人伸出手。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '我可以指引你。但路，最后还是要你自己走。这是神隐世界的规则——不是残酷，是诚实。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我该怎么做？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你需要一份工作。在这个世界，不工作的人会变成猪——不是惩罚，是这个世界运转的方式。就像河水要流动，树要生长。去汤屋吧。那里总是需要帮手。',
                    choices: [
                        { text: '去汤屋', nextScene: 'spirited_bathhouse', trait: 'acceptance' },
                        { text: '寻找其他方法', nextScene: 'spirited_alternative', trait: 'independence' }
                    ]
                }
            ]
        },
        
        spirited_alternative: {
            id: 'spirited_alternative',
            background: 'spiritedMarket',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '一定有其他方法。我不想为妖怪工作。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影没有立刻回答。它只是站在那里，像一棵老树。然后它轻轻叹了口气——不是失望，是理解。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '骄傲的灵魂。在这个世界，骄傲是危险的。但……也许你的坚持，也是一种力量。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '如果你不愿意去汤屋，那就去寻找海原电车吧。它行驶在水上，没有轨道，没有时刻表。它会带你去你想去的地方——只要你有足够的勇气，知道自己要去哪里。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '海原电车？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '一辆在水上行驶的列车。它连接着所有的世界。但只有内心安静的人才能看见它，只有知道自己名字的人才能乘坐它。',
                    choices: [
                        { text: '寻找电车', nextScene: 'spirited_train', trait: 'adventure' },
                        { text: '还是去汤屋', nextScene: 'spirited_bathhouse', trait: 'pragmatism' }
                    ]
                }
            ]
        },
        
        spirited_bathhouse: {
            id: 'spirited_bathhouse',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你来到了汤屋。它大得像一座山，又精致得像一个首饰盒。蒸汽从每一扇窗户里涌出来，像这座建筑在呼吸。灯火通明，但不是刺眼的亮——是那种你在很远的地方就能看见，然后心里忽然觉得温暖的亮。各种奇怪的生物进进出出。没有人停下来看你。他们只是侧了侧身，给你让出一条路。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '又来了一个。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '人类总是这么不小心。不过——你倒是走到了这里，也算不容易。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '请给我一份工作。我什么都愿意做。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人看着你。她的眼神不像是在审视，像是在辨认——辨认你是不是她见过的某个人，或者某个人身上的一部分。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '什么都愿意做？很好。在这里，工作就是呼吸。懒惰的人会变成煤炭——不是惩罚，是自然。贪婪的人会变成猪——不是诅咒，是选择。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '但首先——告诉我你的名字。',
                    choices: [
                        { text: '说出真名', nextScene: 'spirited_truth_name', trait: 'honesty' },
                        { text: '犹豫', nextScene: 'spirited_hesitate', trait: 'caution' }
                    ]
                }
            ]
        },
        
        spirited_truth_name: {
            id: 'spirited_truth_name',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我的名字是……',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你说了出来。那声音比你想象的要轻，但屋子里很安静，所以每个人都听到了。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '好孩子。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '记住，在这个世界，名字是你的锚。只要你的名字还在你心里，你就不会漂走。不管风多大，水多深。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '现在，开始工作吧。从最简单的开始——打扫浴室。为客人准备毛巾。毛巾要叠得整整齐齐，不是为了让别人看，是因为你叠的时候，手会记得你在做什么。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你开始了在汤屋的工作。很辛苦。地板比你想象的要大，水桶比你想象的要重。但当你把一块地板擦干净，看到木纹从污垢下面露出来的时候——你忽然觉得，这件事值得做。',
                    choices: [
                        { text: '努力工作', nextScene: 'spirited_hard_work', trait: 'diligence' },
                        { text: '观察学习', nextScene: 'spirited_observe', trait: 'curiosity' }
                    ]
                }
            ]
        },
        
        spirited_hesitate: {
            id: 'spirited_hesitate',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我……',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '屋子里很安静。蒸汽在天花板上凝结成水滴，一滴一滴地落下来。没有人催你。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '犹豫？',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '聪明。在这个世界，轻易透露名字是危险的。但记住——如果你连自己的名字都不敢承认，你又怎么记得回家的路？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '她转身，从抽屉里拿出一张纸。不是魔法——就是普通的纸，有点发黄，边缘卷了起来。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '我不会强迫你。但工作必须开始。我给你起一个新名字——千。直到你准备好说出真名。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '千……',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '千。只是一个字。但记住——千只是你的面具，不是你的脸。不要忘记面具下面是空的。',
                    choices: [
                        { text: '接受新名字', nextScene: 'spirited_new_identity', trait: 'adaptation' }
                    ]
                }
            ]
        },
        
        spirited_train: {
            id: 'spirited_train',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你走到了海边。月亮很圆，但不够亮——刚好让你看清水面，又看不清水底下有什么。一列火车静静地行驶在浅浅的海水上，轨道在水面下若隐若现，像一条沉睡的龙。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '火车缓缓停下。没有声音——只有水波轻轻拍打着车轮。车门打开，里面空无一人。座位上没有灰尘，但有一种被等待了很久的感觉。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你要上车吗？海原电车会带你去任何你想去的地方。但旅途可能比你想象的更漫长——不是距离长，是你的心需要时间。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想回家。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '家。这个字从你嘴里说出来的时候，我听到了它的重量。但家的方向不在轨道上，在你心里。电车可以载你，但你要知道你要去哪里。',
                    choices: [
                        { text: '上车', nextScene: 'spirited_train_ride', trait: 'trust' },
                        { text: '询问更多', nextScene: 'spirited_train_info', trait: 'caution' }
                    ]
                }
            ]
        },
        
        spirited_train_info: {
            id: 'spirited_train_info',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'roundSpirit',
                    text: '你想知道什么？电车的秘密？还是你自己的秘密？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这趟旅程会带我去哪里？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '圆形的精灵没有立刻回答。它看着远处的水面，那里有一群飞鸟——也可能是飞鱼——在月光下掠过。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '它会带你去你需要去的地方，不一定是你想去的地方。有时候，这两者不是同一个方向。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '但有一件事是确定的——无论去哪里，你都会改变。旅途会改变旅人。就像河水会改变石头。不是一下子，是一点一点地。',
                    choices: [
                        { text: '接受改变', nextScene: 'spirited_train_ride', trait: 'growth' },
                        { text: '害怕改变', nextScene: 'spirited_fear_change', trait: 'insecurity' }
                    ]
                }
            ]
        },
        
        spirited_fear_change: {
            id: 'spirited_fear_change',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我不想改变。我想保持原来的自己。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '海风吹过来，把你的话吹散了。圆形的精灵没有笑，也没有叹气。它只是安静地等着，像是在等一个更深的答案从你心里浮上来。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '害怕改变是正常的。就像树害怕秋天——叶子会掉，看起来像是失去了什么。但春天到来的时候，它才知道那些叶子没有白掉。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '不改变不意味着保持不变——它意味着停滞。而停滞在这个世界，就是慢慢消失。不是死，是变成透明。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '改变不意味着失去自己。它意味着你终于开始认识自己。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '……我明白了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你其实还不太明白。但你说"明白了"的时候，有一部分是真的明白了。这是第一次。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '那么，准备好开始你的旅程了吗？',
                    choices: [
                        { text: '准备好了', nextScene: 'spirited_train_ride', trait: 'acceptance' }
                    ]
                }
            ]
        },
        
        spirited_train_ride: {
            id: 'spirited_train_ride',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你登上了海原电车。火车缓缓启动，行驶在无边的水面上。窗外的景色如梦似幻——有时是沉在水底的房子，屋顶上长满了海草，窗户里还有灯光。有时是一座孤零零的岛，岛上只有一棵树。有时是其他乘客的剪影——他们安静地坐在自己的座位上，像在等一个很久以前的约定。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你遇到了其他乘客。一个沉默的无脸人，他坐在角落里，什么都没有说，但你觉得他什么都听到了。一个女孩，她说她要去见姐妹——说这句话的时候她的眼睛亮了，但很快又暗了下去。还有一些看不清面容的影子，他们一直在窗外，从不进来。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '火车穿过一片雾。当雾散开的时候，你看到了那个戴面具的身影。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '我们又见面了。看来你选择了自己的道路。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你也在车上？你要去哪里？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '我去哪里不重要。我一直在车上——只是有时候你看不见我。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '重要的是，你在旅途中找到了什么。不是目的地，是路上的东西。',
                    choices: [
                        { text: '寻找自我', nextScene: 'spirited_self_discovery', trait: 'introspection' },
                        { text: '寻找答案', nextScene: 'spirited_seeking_answers', trait: 'curiosity' }
                    ]
                }
            ]
        },
        
        spirited_hard_work: {
            id: 'spirited_hard_work',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你全身心地投入工作。打扫的时候你知道了地板有几块木板会轻轻响动，准备的时候你知道了毛巾在热水里泡多久最柔软，服务的时候你知道了每个妖怪喜欢的温度都不一样——河童喜欢凉一点，萝卜神喜欢热一点，无脸人从来没有说过他喜欢什么，但你注意到他总是在蒸汽最浓的地方坐着。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '渐渐地，你开始理解这个世界的规则。妖怪们虽然外表可怕，但大多只是累了。他们来汤屋不是为了别的事，就是来洗个热水澡——在人类世界里，没有人会为他们烧水。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你做得很好。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '比我想象的要好。你知道为什么吗？因为你在用心做事——不是用手，是用心。也许……也许你有留在这个世界的潜质。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不想留在这里。我想回家。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '我知道。但记住——有时候我们必须先学会在一个地方好好生活，才能离开它。就像一棵树，必须先把根扎下去，才能知道自己要往哪个方向长。',
                    choices: [
                        { text: '继续工作', nextScene: 'spirited_excellence', trait: 'perseverance' },
                        { text: '寻找机会', nextScene: 'spirited_see_escape', trait: 'opportunism' }
                    ]
                }
            ]
        },
        
        spirited_observe: {
            id: 'spirited_observe',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你在工作的同时，也在观察。你注意到汤屋的运作方式——锅炉房的煤球精灵们有自己的休息时间，它们会在午夜吃一种你从没见过的黑色小点心。你注意到不同妖怪之间的关系——那个总是板着脸的客人，其实每次来都会给门口的守卫带一颗糖。你还注意到一些隐藏的通道——有些门只在特定的时间打开，有些楼梯只在特定的光线下显现。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '知识就是力量。在这个陌生的世界，每多知道一件事，你就多一份踏实。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你是个好奇的灵魂。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '在这个世界，好奇心可以是祝福，也可以是诅咒——取决于你用它来做什么。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想了解这个世界。了解是克服恐惧的第一步。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '聪明的想法。那么让我告诉你一个秘密——汤屋的顶层有一个房间，那里藏着这个世界的真相。不是那种写在纸上的真相，是那种你必须自己去看的真相。',
                    choices: [
                        { text: '探索顶层', nextScene: 'spirited_explore_top', trait: 'adventure' },
                        { text: '谨慎行事', nextScene: 'spirited_cautious_work', trait: 'prudence' }
                    ]
                }
            ]
        },
        
        spirited_new_identity: {
            id: 'spirited_new_identity',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你接受了"千"这个名字，开始了新的生活。渐渐地，你开始适应汤屋的节奏——清晨的蒸汽，午后的忙碌，深夜的安静。你甚至交到了一些朋友——那个负责烧锅炉的老爷爷会给你留一块烤红薯，热乎乎的，包在纸里。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '但有时候，在深夜，你会感到一种奇怪的空虚。像是心里有个洞，不大不小，刚好够一阵风穿过去。你记不得自己以前是谁，记不得家在哪里，记不得妈妈说话的声音是什么样的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影出现在你面前——不是从门里进来的，是从影子里面。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你正在迷失。新身份正在一点一点地吞噬旧身份。这不是你的错——这是这个世界的运作方式。但它是危险的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我该怎么办？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下面的声音很轻，但很清楚。像雨滴落在石头上。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '找到锚点。一张照片，一个名字，一段记忆——任何能让你记起真实自我的东西。哪怕只是一阵气味。一阵风。一个声音。',
                    choices: [
                        { text: '寻找记忆', nextScene: 'spirited_find_memory', trait: 'determination' },
                        { text: '接受新身份', nextScene: 'spirited_accept_new', trait: 'adaptation' }
                    ]
                }
            ]
        },
        
        spirited_self_discovery: {
            id: 'spirited_self_discovery',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '在漫长的旅途中，你开始思考。不是那种刻意的思考——是那种自然而然的，像水从高处往低处流。你是谁。你想要什么。你害怕什么。这些问题不是一下子涌上来的，是一个一个地，像火车窗外经过的岛屿，远远地出现了，又远远地消失了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '没有工作的压力，没有生存的威胁。只有你，和你的思绪，和海浪拍打车轮的声音。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '发现什么了吗？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你沉默了一会儿。火车的汽笛声在水面上飘了很久才散。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我发现……我比我想象的要勇敢。也比我想象的要脆弱。这两种感觉不矛盾。它们像水和油一样，同时在我心里，分不开。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '这就是成长。认识自己的光亮和阴影，接受自己的完整和不完整。不是变得完美，是变得真实。',
                    choices: [
                        { text: '接受自己', nextScene: 'spirited_accept_self', trait: 'self_acceptance' },
                        { text: '想要改变', nextScene: 'spirited_want_change', trait: 'aspiration' }
                    ]
                }
            ]
        },
        
        spirited_seeking_answers: {
            id: 'spirited_seeking_answers',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你向其他乘客询问关于这个世界的问题。你问那个无脸人——他什么都没有说，只是递给你一杯温热的茶。你问那个去见姐妹的女孩——她说她也不知道答案，但她知道一定要往前走。你问那些窗外的影子——它们没有回答，但它们的沉默让你觉得，它们曾经也问过同样的问题。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每个人给你的答案都不一样。但都指向同一件事——你必须找到内心的安静。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '答案不在外面，在里面。当你准备好了，路自然会出现。不是魔法——是准备。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我该如何准备？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '放下恐惧。放下贪婪。放下执着。当你不再被这些束缚时，你就自由了。不是自由地离开——是自由地选择。',
                    choices: [
                        { text: '学习放下', nextScene: 'spirited_letting_go', trait: 'wisdom' },
                        { text: '继续寻找', nextScene: 'spirited_keep_seeking', trait: 'persistence' }
                    ]
                }
            ]
        },
        
        spirited_excellence: {
            id: 'spirited_excellence',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你的努力得到了认可。你从一个普通的服务员升为了重要的员工，甚至开始接待一些尊贵的客人。你学会了分辨不同妖怪的喜好——那个总在雨天来的老河神，喜欢水温刚好比体温高一点。那个每周三来的白鹤，只喝山泉水泡的茶。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '但地位的提升也带来了新的诱惑。更多的金钱——金币在灯笼下闪闪发光，像在说"拿吧"。更多的权力——别人开始对你弯腰，这种感觉是温热的，像刚倒好的洗澡水。更多的……贪婪。它来得那么自然，你甚至没有注意到。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你做得很好，千。也许太好了。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '记住，在这个世界，贪婪是最危险的罪。不是因为它邪恶——是因为它太容易了。它就在那里，像一块没人看的金子，等着你伸手。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不会被贪婪控制的。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '每个人都这么说。我年轻时也这么说。但面对诱惑时，真正的考验才开始。',
                    choices: [
                        { text: '保持谦逊', nextScene: 'spirited_humble', trait: 'humility' },
                        { text: '追求更多', nextScene: 'spirited_ambitious', trait: 'ambition' }
                    ]
                }
            ]
        },
        
        spirited_see_escape: {
            id: 'spirited_see_escape',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你在工作的同时，也在寻找离开的机会。你注意到汤屋的一些弱点——后门在凌晨三点会有一刻钟没有人看守，厨房的窗户对着一条你从没见过的楼梯。你还注意到一些可以利用的规则漏洞——不是错误，是缝隙。每一个古老的系统都有缝隙。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你遇到了一个神秘的无脸人。他穿着黑色的袍子，手里总是拿着金子——不是炫耀，而是他好像不知道金子还能用来做什么。他愿意给你任何你想要的东西。他什么都不说，只是把金子递过来，手有点抖。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '小心那个无脸人。他的礼物有代价。不是因为他在骗你——是因为他也不知道代价是什么。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '什么代价？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你的友谊。你的依赖。你的灵魂。他给予是为了索取——不是因为他贪心，是因为他太孤独了。孤独到不知道除了"给"，还能怎么和人相处。',
                    choices: [
                        { text: '拒绝诱惑', nextScene: 'spirited_reject_temptation', trait: 'integrity' },
                        { text: '利用机会', nextScene: 'spirited_use_opportunity', trait: 'opportunism' }
                    ]
                }
            ]
        },
        
        spirited_explore_top: {
            id: 'spirited_explore_top',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你偷偷来到了汤屋的顶层。这里的空气不一样——冷一些，干一些，像是很久没有被呼吸过。尘埃在月光中悬浮，一动不动。你走得很慢，每一步都像在问一个问题。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在一个房间里，你发现了一些奇怪的东西。被收藏的名字——写在一张一张的纸上，字迹有的工整，有的潦草，有的已经褪色到几乎看不见。被保存的记忆——装在小瓶子里，摇一摇就会发光，里面有声音，有面孔，有雨声。被囚禁的灵魂——它们没有形体，但你知道它们在那里，因为空气忽然变重了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人站在你身后。你竟没有听到她来的声音。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你不该来这里。但既然来了……也许你已经准备好了。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '什么真相？',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '汤屋不只是为妖怪服务的地方。它也是……一个监狱。不是那种有铁栏杆的监狱。是那种你进去了，然后慢慢忘记自己是谁的监狱。那些被遗忘的灵魂，那些迷失的自我——都被收藏在这里。不是被关起来，是被存起来。像你把不用的东西放进阁楼，想着有一天还会下来拿。',
                    choices: [
                        { text: '想要解救他们', nextScene: 'spirited_liberator', trait: 'compassion' },
                        { text: '担心自己', nextScene: 'spirited_worry_self', trait: 'self_preservation' }
                    ]
                }
            ]
        },
        
        spirited_cautious_work: {
            id: 'spirited_cautious_work',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选择了谨慎。虽然好奇，但你知道现在不是冒险的时候。有些真相需要等待——不是因为它会变，是因为你需要准备好才能面对它。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你继续做好自己的工作。擦地的时候比之前更认真了——不是因为害怕被发现，是因为你想把每一件事都做好。你小心翼翼地收集信息，像一只松鼠收集过冬的坚果。每一句话，每一个眼神，每一个在走廊里不经意间听到的对话。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '谨慎是美德。在这个世界，鲁莽的人往往变成猪——不是因为他们贪婪，是因为他们太快了。快到来不及看清脚下的路。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会等待正确的时机。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '圆形的精灵点了点头。不是赞许——是认可。一个同伴对另一个同伴的认可。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '耐心的人最终会得到最好的结果。不是因为他们等来的——是因为他们在等待的时候，知道了什么才是真正重要的。',
                    choices: [
                        { text: '继续等待', nextScene: 'spirited_patience_reward', trait: 'patience' }
                    ]
                }
            ]
        },
        
        spirited_find_memory: {
            id: 'spirited_find_memory',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始寻找能让你记起真实自我的东西。你翻找自己的物品——口袋里有一张揉皱的糖纸，是你喜欢的那个牌子。你询问其他员工——那个老锅炉工说，你刚来的时候手里攥着什么东西，很紧。你甚至冒险进入禁地——在楼梯间的一个角落里，你找到了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '一张旧照片。上面是你和家人的合影。不是在什么特别的场合——就是普通的一天，阳光很好，你们站在家门口。妈妈的手搭在你的肩膀上。你记得那只手的感觉——不是温热的，也不是冰凉的，就是熟悉的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '记忆如潮水般涌回来。不是一下子，是一点一点地——像水漫过沙滩。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想起来了……我是谁。我来自哪里。我为什么在这里。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影站在你的身后。这次你没有惊讶。你好像知道它会来。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '很好。现在你有了锚点。有了它，你就不会漂走——不管风多大，水多深。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '但我该怎么回去？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '当你真正准备好时，路自然会出现。但现在——先保持这个记忆。它是你最宝贵的财富。不是金子，不是权力，是这张纸。这张纸上有你的名字。',
                    choices: [
                        { text: '珍惜记忆', nextScene: 'spirited_cherish_memory', trait: 'gratitude' }
                    ]
                }
            ]
        },
        
        spirited_accept_new: {
            id: 'spirited_accept_new',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定完全接受"千"这个身份。过去的你是谁已经不重要了——不是忘记了，是放下了。就像秋天的树叶放下自己，让新的芽在春天长出来。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你放下了对过去的执着，全身心地投入到新的生活中。有时候你会想起一些片段——妈妈的声音，家门口的树，下雨天窗户上的水珠——但它们越来越模糊，越来越不重要。不是消失了，是变成了另一种东西。变成了你的一部分。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你做出了选择。这是你的权利。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '但记住，一旦完全放弃过去，就再也回不去了。不是门关上了——是桥消失了。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不后悔。这里就是我的家。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人沉默了一会儿。蒸汽从她身后升起来，把她的轮廓变得模糊，然后又清晰。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '那么欢迎你，千。从现在开始，你正式成为汤屋的一员。不是客人，不是过客，是家人。',
                    choices: [
                        { text: '开始新生活', nextScene: 'crossroads', trait: 'new_home' }
                    ]
                }
            ],
            ending: {
                title: '千寻的答案',
                desc: '你选择了永远留在神隐世界，成为汤屋的一员。但X的名字在某个角落的储物柜上刻着——她来过，选择了离开，因为她没有忘记自己的名字。'
            }
        },
        
        spirited_accept_self: {
            id: 'spirited_accept_self',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你接受了自己的光亮和阴影。接受了自己的勇敢——那个敢在陌生世界里说"请给我一份工作"的自己。也接受了自己的脆弱——那个在深夜感到空虚、害怕改变、想要逃跑的自己。你不再试图成为完美的人，而是成为完整的人。完整的人有裂缝，但裂缝里可以长出苔藓和花。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这种接受带来了一种奇怪的平静。不是那种兴奋的快乐——是那种你在井边坐了很久，然后发现水面上映出了你的脸，而你终于觉得那张脸就是你。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你找到了内心的平静。这是最难的旅程，也是最重要的旅程。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我感觉……自由了。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '是的。当你不再与自己战斗时，你就自由了。现在，你可以去任何你想去的地方。不是逃走——是出发。',
                    choices: [
                        { text: '选择目的地', nextScene: 'spirited_choose_destination', trait: 'freedom' }
                    ]
                }
            ],
            ending: {
                title: '回到人间',
                desc: '你自由地选择了自己的道路——回家，或者继续旅行。X的足迹在海原电车的车票上隐约可见，她曾在这趟旅程中找到了自己。'
            }
        },
        
        spirited_want_change: {
            id: 'spirited_want_change',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你发现了自己想要改变的地方。不是因为你不好——是因为你可以更好。就像一棵树知道自己哪根枝干可以长得更直，哪片叶子可以长得更绿。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这种愿望不是自我否定，是自我灌溉。你想成为的那个人，其实已经在你心里了——只是需要一点时间，一点勇气，一点耐心。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '想要改变是勇敢的。但记住——改变应该是加法，不是减法。你不是要抛弃旧的自己，你是要添加新的自己。就像一棵树不是把旧的年轮砍掉，而是在外面再长一圈。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我明白了。我要成为更好的自己——不是另一个自己，是更好的自己。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么，当你准备好时，改变就会开始。不是轰的一声，是静悄悄的。像春天来的时候。',
                    choices: [
                        { text: '开始改变', nextScene: 'spirited_transformation', trait: 'growth' }
                    ]
                }
            ],
            ending: {
                title: '成长的旅人',
                desc: '你成为了更好的自己，带着完整的灵魂迎接未来。X的签名在一个温泉池的底部闪烁着——成长是一场永远在路上的修行。'
            }
        },
        
        spirited_letting_go: {
            id: 'spirited_letting_go',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始学习放下。放下对回家的执念——不是不想回家，是不再让"想回家"这件事占据你所有的呼吸。放下对未知的恐惧——你终于明白，恐惧不是敌人，它只是你的影子，你走到哪里它跟到哪里，但它不能伤害你。放下对控制的渴望——你开始接受，有些事情不是你能决定的，就像天气，就像海浪，就像火车什么时候到站。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每一次放下，你都感到一种轻松。原来，我们一直在背负太多不必要的东西。不是别人给我们的——是我们自己捡起来的。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '放下不是放弃。放下是释放。当你不再紧抓，你反而能拥有更多——不是因为更多东西进来了，是因为你的手空出来了。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我感觉……路开始清晰了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你看着窗外。水面上的倒影不再模糊——它们清楚地映出了你。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '是的。当你不再被执念蒙蔽时，真相就会显现。不是它藏起来了——是你终于愿意看了。',
                    choices: [
                        { text: '继续前行', nextScene: 'spirited_clear_path', trait: 'clarity' }
                    ]
                }
            ],
            ending: {
                title: '清晰的归途',
                desc: '当你放下执念，回家的路变得清晰。X曾在桥的另一端刻下了一个箭头——指向的不是方向，而是内心。'
            }
        },
        
        spirited_keep_seeking: {
            id: 'spirited_keep_seeking',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定继续寻找。虽然别人告诉你答案在里面，但你还是想要外部的确认。不是不相信他们——是有些路，你必须自己走一遍才相信。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这也是一种学习。有时候，我们必须走弯路才能找到直路。每一个弯道都有它自己的风景——一棵你从没见过的树，一个和你同路的旅人，一阵忽然吹来的风。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '继续寻找吧。每一个寻找的过程都是成长。即使最后发现答案一直在你心里——这段旅程也值得。因为你走过了，所以你知道了。不是被告诉的，是真正知道的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不会放弃的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下面好像有了一丝笑——不是嘴在笑，是眼睛在笑。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么祝你好运，寻找者。愿你在寻找中找到自己——不是最后，是路上。',
                    choices: [
                        { text: '继续旅程', nextScene: 'spirited_journey_continues', trait: 'persistence' }
                    ]
                }
            ],
            ending: {
                title: '无尽的旅程',
                desc: '你的旅程永无止境——永远寻找，或最终找到。X的名字在海原电车的终点站标识上，模糊而清晰，像一个永远在路上的约定。'
            }
        },
        
        spirited_humble: {
            id: 'spirited_humble',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选择了保持谦逊。虽然地位提升，但你依然记得自己是谁——那个刚来汤屋时连毛巾都不会叠的人。你记得每一个在你困难时帮助过你的人——那个给你留烤红薯的锅炉工，那个教你分辨水温的老服务员，那个在你害怕时什么都不说只是站在你旁边的妖怪。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你善待每一个员工，无论他们的地位高低。你帮助新来的迷失者，就像别人曾经帮助你一样。你发现，帮助别人并不需要你有多强大——只需要你记得自己曾经也脆弱过。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你通过了考验。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '在这个充满诱惑的世界，保持本心是最难的。不是因为它需要力量——是因为它需要你一直记得。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只是做了应该做的事。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人沉默了一会儿。蒸汽从她身后升起来，把她的脸变得柔和了。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '这正是为什么你值得尊敬。不是因为你说得漂亮——是因为你做得安静。现在，作为奖励，我可以帮你一个忙。你想要什么？',
                    choices: [
                        { text: '想要回家', nextScene: 'spirited_way_home', trait: 'home_sick' },
                        { text: '想要帮助其他人', nextScene: 'spirited_help_others', trait: 'altruism' }
                    ]
                }
            ],
            ending: {
                title: '回家的勇气',
                desc: '你坚定地踏上了回家的路——穿过红色的桥，不回头，不犹豫。X的指纹留在桥栏杆上，她曾以同样的决心走过这里。'
            }
        },
        
        spirited_ambitious: {
            id: 'spirited_ambitious',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选择了追求更多。金钱——它们在灯笼下闪闪发光，每一枚都像一个小小的月亮。权力——别人开始对你弯腰，这种感觉像温水，泡进去就不想出来。地位——你有了自己的房间，自己的茶具，自己的名字被写在更靠前的位置。你想要这一切。不是因为你贪婪——是因为你开始觉得，也许你值得。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你开始接受无脸人的礼物。他每次来都给你金子——不用开口，手伸过来，金子在掌心里，温热的。你开始利用你的职位谋取私利——不是大恶，是小事。一点一点地。每一次都像是"只是这一次"，但"这一次"越来越多。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你变了，千。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '或者说，你终于显露了真面目。不是变坏了——是忘记了。忘记了那个刚来汤屋时，连毛巾都不会叠，但眼睛里有光的自己。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只是想要更好的生活。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '贪婪总是这样开始的。不是从"坏"开始的——是从"更好"开始的。小心，千。在这个世界，贪婪的终点是变成猪。不是变成怪物——是变成只知道吃、不知道欲望之外还有什么的存在。',
                    choices: [
                        { text: '反思改变', nextScene: 'spirited_reflect', trait: 'redemption' },
                        { text: '继续贪婪', nextScene: 'spirited_consumed', trait: 'corruption' }
                    ]
                }
            ],
            ending: {
                title: '善良的力量',
                desc: '你选择推迟自己的归途，帮助其他迷失的灵魂。X的手帕系在汤屋的栏杆上——她曾在这里帮助过无数人找到回家的路。'
            }
        },
        
        spirited_reject_temptation: {
            id: 'spirited_reject_temptation',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你拒绝了无脸人的礼物。他把金子递过来的时候，手有点抖——不是生气，是那种你已经猜到了但还是希望不是这样的失望。你摇了摇头。不是大声的，是轻轻的，但很清楚。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '无脸人把金子收回了袍子里。他没有走。他只是站在那里，离你三步远，像是在等你说"不过"或者"但是"。你没有说。后来他慢慢走了。走的时候背影很小——不是人变小了，是你忽然觉得他原来没有那么大。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影出现在你身边。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你做出了正确的选择。在这个世界，正直是最宝贵的财富——不是因为它值钱，是因为它不会贬值。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只想用正确的方式回家。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下面的声音轻了，但更清楚了。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么你会的。坚持正道的人，最终都会找到回家的路。不是因为它更近——是因为你走得踏实。',
                    choices: [
                        { text: '坚持正道', nextScene: 'spirited_righteous_path', trait: 'integrity' }
                    ]
                }
            ],
            ending: {
                title: '正直的旅人',
                desc: '你坚持走正道，赢得了所有妖怪的尊重。X的签名在汤屋的荣誉名册上——正直的人永远不会被遗忘。'
            }
        },
        
        spirited_use_opportunity: {
            id: 'spirited_use_opportunity',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定利用这个机会。你接受了无脸人的金子——他递过来的时候，你可以感觉到他希望你接。不是那种贪婪的"希望"，是那种孤独的"希望"。你用它贿赂守卫，获取信息。你得到了自由，也得到了知识——但你也欠下了什么。不是钱，是别的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '短期内，这很有效。你获得了自由，获得了知识。但每次你走过走廊，无脸人都在那里——不是在等你，是刚好在那里。你开始觉得，他在的地方，影子好像更浓一些。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '捷径往往是最长的路。你省下了时间，但付出了代价——不是金子可以偿还的代价。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '什么代价？',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '无脸人现在拥有你的一部分。不是灵魂，不是名字——是某种更微妙的东西。你的独立，你的自由意志，你选择"不"的能力。这些东西不是一下子被拿走的——是一点一点地，像潮水退去时带走沙子。',
                    choices: [
                        { text: '偿还债务', nextScene: 'spirited_pay_debt', trait: 'responsibility' },
                        { text: '逃避债务', nextScene: 'spirited_run_away', trait: 'cowardice' }
                    ]
                }
            ]
        },
        
        spirited_liberator: {
            id: 'spirited_liberator',
            background: 'spiritedBathhouse',
            onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('spirited'); },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定解救那些被囚禁的灵魂。这是一个危险的决定——但你无法袖手旁观。不是因为你是英雄，是因为你看到了那些名字，那些记忆，那些在瓶子里发光的灵魂——它们让你想到了自己。想到了那个差点忘记名字的自己。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你开始秘密地释放那些名字。一张一张的纸，你小心翼翼地打开，像打开一封封信。每一个被解救的灵魂都让你感到一种深深的满足——不是那种"我做了好事"的满足，是那种"对了，就是这样"的满足。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人发现的时候，你没有跑。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你发现了我的秘密，还试图破坏它。你知道这意味着什么吗？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我知道。但我不能看着这些灵魂被囚禁。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人沉默了很久。蒸汽从天窗飘出去，像一声叹息。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '……有趣。也许……也许我错了。也许汤屋不应该是一个监狱。也许那些灵魂应该被记得，而不是被收藏。',
                    choices: [
                        { text: '改变汤屋', nextScene: 'spirited_reform', trait: 'reformer' }
                    ]
                }
            ],
            ending: {
                title: '改革者',
                desc: '你改变了汤屋的本质，让它从一个监狱变成了真正的避难所。X的名字刻在汤屋新的大门前——改革者，欢迎回来。'
            }
        },
        
        spirited_worry_self: {
            id: 'spirited_worry_self',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你担心自己也会成为被囚禁的灵魂之一。这个恐惧像一盆冷水浇在身上——不是外面，是里面。你开始睡不着。你开始注意到那些瓶子。你开始想象自己的名字被写在一张纸上，然后被放进抽屉里，然后被忘记。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你不再关心其他人，只关心自己的生存。这不是自私——是本能。就像一只鸟在暴风雨来临前，先找自己的巢。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '恐惧让你盲目。但也许……也许这种恐惧也是保护自己的方式。它让你警觉，让你小心，让你知道什么东西是危险的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只想安全。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '圆形的精灵沉默了一会儿。它看着你，眼神里没有评判。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '那么去寻找安全吧。但记住——真正的安全不是逃避，是面对。不是躲在墙后面，是知道墙在那里，然后选择走出去。',
                    choices: [
                        { text: '寻找安全', nextScene: 'spirited_seek_safety', trait: 'survival' }
                    ]
                }
            ],
            ending: {
                title: '生存的智慧',
                desc: '你选择了以自己的方式生存——不是英雄，不是传奇，只是一个想要活下去的人。X的信中说："有时候，活下去就是最大的胜利。"'
            }
        },
        
        spirited_patience_reward: {
            id: 'spirited_patience_reward',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你的耐心终于得到了回报。不是那种"忽然一切变好了"的回报——是那种一点一点积累起来的回报，像冬天存下来的柴火，到了春天才知道够用。你发现了汤屋的一个秘密——在特定的时间，通往人类世界的门会打开。不是魔法，是规律。就像潮汐，就像月相，就像所有的"回家"都有自己的时刻。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你也发现了一些可以帮助你回家的物品——一颗药丸，不是什么神奇的药丸，就是普通的药丸，但你握在手里的时候觉得它是热的。一张地图，上面画着不是路，而是风向。还有一些忠告——写在很久以前的纸上，纸已经黄了，但字迹还很清晰。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '耐心的人最终都会得到他们想要的。不是因为他们等到了——是因为他们在等待的时候，已经变成了配得上它的人。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我准备好了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你确实准备好了。不是因为你说这句话的时候很坚定——是因为你说这句话的时候，声音里没有颤抖。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '那么去吧。记住，无论你走到哪里，你在这里学到的东西都会陪伴着你。不是知识——是经历。',
                    choices: [
                        { text: '准备回家', nextScene: 'spirited_ready_home', trait: 'preparation' }
                    ]
                }
            ],
            ending: {
                title: '真正回家',
                desc: '你终于回家了，带着在神隐世界学到的一切。X的明信片在信箱里等着你——上面只有一句话："欢迎回来。继续寻找。"'
            }
        },
        
        spirited_cherish_memory: {
            id: 'spirited_cherish_memory',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你珍惜着那张照片，珍惜着那些记忆。你把照片放在口袋里——靠近心脏的地方。每当你感到迷茫，你就拿出来看看。不是看久——就是看一眼。看到妈妈的手搭在你肩膀上，看到阳光很好，看到那是普通的一天——然后你就想起来了。不是想起什么具体的事，是想起那种感觉。那种"我知道我是谁"的感觉。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每当你感到迷茫，你就看看照片，记起你是谁，你来自哪里，你要去哪里。这三个问题，你以前从来没有认真想过。现在它们变成了你的呼吸。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '记忆是强大的魔法。不是那种会发光的魔法——是那种你看不见，但它一直在的魔法。只要记得，你就永远不会真正迷失。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会永远记得。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下面的眼睛好像亮了一下。不是眼泪——是光。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么你已经拥有了最宝贵的财富。不是金子，不是权力——是这张纸。现在，去找到你的路吧。',
                    choices: [
                        { text: '带着记忆前行', nextScene: 'spirited_with_memory', trait: 'remembrance' }
                    ]
                }
            ],
            ending: {
                title: '记忆的守护者',
                desc: '你带着珍贵的记忆继续前行，它们是你的锚点，你的指南。X在照片背面留下了一行字："记忆是爱的另一种形式。不要忘记，也不要被回忆束缚。"'
            }
        },
        
        spirited_new_life: {
            id: 'spirited_new_life',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始了作为"千"的新生活。你学习妖怪的习俗——在满月的时候不能踩到走廊上的影子，在雨天要在门口放一碗清水。你掌握汤屋的规则——不是写在纸上的规则，是那种在这里生活久了自然就知道的规则。你逐渐成为这个世界的一员。不是客人，不是过客——是家人。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '有时候，你会想起过去的片段。但它们越来越模糊，越来越不重要。不是消失了——是变成了湖底的石头。你知道它们在那里，但水面上已经看不到波纹了。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你适应得很好，千。也许比我想象的还要好。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这里就是我的家。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人点了点头。不是赞许——是认可。一个家人对另一个家人的认可。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '那么欢迎你回家，千。',
                    choices: [
                        { text: '永远留下', nextScene: 'crossroads', trait: 'new_home' }
                    ]
                }
            ],
            ending: {
                title: '千寻的答案',
                desc: '你选择了永远留在神隐世界，成为汤屋的一员。但X的名字在某个角落的储物柜上刻着——她来过，选择了离开，因为她没有忘记自己的名字。'
            }
        },
        
        spirited_choose_destination: {
            id: 'spirited_choose_destination',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '现在你真正自由了。你可以选择去任何地方——回家，回到那个有妈妈做的饭、有下雨天窗台上的水珠的地方。去探索新的世界，去那些你在地图上从没见过的角落。或者继续在这列火车上旅行——不是在赶路，是在生活。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每一个选择都是正确的。因为这都是你的选择。不是被恐惧驱动的，不是被贪婪牵引的——是你自己，在安静中做出的决定。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你要去哪里，旅人？',
                    choices: [
                        { text: '回家', nextScene: 'crossroads', trait: 'home' },
                        { text: '继续旅行', nextScene: 'crossroads', trait: 'wanderer' }
                    ]
                }
            ],
            ending: {
                title: '回到人间',
                desc: '你自由地选择了自己的道路——回家，或者继续旅行。X的足迹在海原电车的车票上隐约可见，她曾在这趟旅程中找到了自己。'
            }
        },
        
        spirited_transformation: {
            id: 'spirited_transformation',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始了改变的旅程。不是抛弃旧的自己——是添加新的自己。就像一棵树，不是把旧的年轮砍掉，而是在外面再长一圈。你保留了过去的优点——善良、诚实、愿意努力。同时获得了新的品质——安静、耐心、知道什么时候该等待。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每一天，你都变得更勇敢，更智慧，更慈悲。不是那种轰轰烈烈的改变——是那种你某天早上醒来，发现昨天让你害怕的事情，今天不再让你害怕了。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '你成为了更好的自己。这就是成长的意义——不是变成别人，是变成更完整的自己。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我感觉……完整了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影点了点头。它转身的时候，你看到它背后的雾气里，好像有很多很多和你一样的人。他们都在路上。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么，带着这个完整的自己，去迎接你的未来吧。',
                    choices: [
                        { text: '迎接未来', nextScene: 'crossroads', trait: 'growth' }
                    ]
                }
            ],
            ending: {
                title: '成长的旅人',
                desc: '你成为了更好的自己，带着完整的灵魂迎接未来。X的签名在一个温泉池的底部闪烁着——成长是一场永远在路上的修行。'
            }
        },
        
        spirited_clear_path: {
            id: 'spirited_clear_path',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '当你放下执念，路开始变得清晰。你看到了回家的方向——不是在地图上，是在心里。你也看到了其他可能的道路——每一条都在光亮中延伸，不催促你，只是等着。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '选择再次回到了你手中。而这次，你不再被恐惧驱动，而是被平静引导。你的手是稳的。你的呼吸是深的。你的脚步是轻的。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你找到了路。现在，走上去吧。',
                    choices: [
                        { text: '踏上归途', nextScene: 'crossroads', trait: 'return' }
                    ]
                }
            ],
            ending: {
                title: '清晰的归途',
                desc: '当你放下执念，回家的路变得清晰。X曾在桥的另一端刻下了一个箭头——指向的不是方向，而是内心。'
            }
        },
        
        spirited_journey_continues: {
            id: 'spirited_journey_continues',
            background: 'spiritedTrain',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你的旅程还在继续。海原电车穿过一个又一个世界——每一个都有不同的风景，不同的光，不同的风。有时是水底的城市，有时是云上的平原，有时只是一片无边无际的蓝——蓝得让你分不清是海还是天。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你遇到了更多的乘客，听到了更多的故事。每一个故事都不同，但每一个故事都让你觉得——你听过。不是真的听过，是那种"原来是这样"的感觉。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '有些旅人永远在寻找，有些旅人最终找到。你会是哪一种？',
                    choices: [
                        { text: '永远寻找', nextScene: 'crossroads', trait: 'seeker' },
                        { text: '最终找到', nextScene: 'crossroads', trait: 'finder' }
                    ]
                }
            ],
            ending: {
                title: '无尽的旅程',
                desc: '你的旅程永无止境——永远寻找，或最终找到。X的名字在海原电车的终点站标识上，模糊而清晰，像一个永远在路上的约定。'
            }
        },
        
        spirited_way_home: {
            id: 'spirited_way_home',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'bathhouseMistress',
                    text: '想要回家？很好。我可以告诉你路——但走上去的是你自己。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '她走到窗前，推开窗户。外面的风灌进来，带着外面世界的气息——不是你记得的那种，但很像。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '穿过那条红色的桥。不要回头。不要犹豫。一直走到你闻到熟悉的气味——不是那种明显的，是那种你已经忘了但还是认得的。听到熟悉的声音——不是那种大的，是那种背景里的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '就这么简单？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人笑了。不是那种笑——是那种"你不知道"的笑。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '简单，但不简单。最大的挑战是你的心。如果你心里还有留恋——哪怕只是一点点——你就会回到这里。不是桥把你带回来，是你自己。',
                    choices: [
                        { text: '坚定回家', nextScene: 'crossroads', trait: 'determination' }
                    ]
                }
            ],
            ending: {
                title: '回家的勇气',
                desc: '你坚定地踏上了回家的路——穿过红色的桥，不回头，不犹豫。X的指纹留在桥栏杆上，她曾以同样的决心走过这里。'
            }
        },
        
        spirited_help_others: {
            id: 'spirited_help_others',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '女主人看着你，像是在看一个她不认识的人。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你想要帮助其他人？即使这意味着推迟你自己的回家？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '是的。我不能丢下他们。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '屋子里安静了很久。蒸汽从女主人身后升起来，把她的脸变得模糊，然后又清晰。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '……你有一颗善良的心。不是那种大声的善良——是那种安静的。也许……也许这就是为什么你会来到这个世界。不是被惩罚，不是被测试——是你需要在这里，做一些只有你能做的事。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '好吧。我会帮你。我们一起帮助那些迷失的灵魂找到回家的路。不是英雄——是摆渡人。',
                    choices: [
                        { text: '帮助他人', nextScene: 'crossroads', trait: 'compassion' }
                    ]
                }
            ],
            ending: {
                title: '善良的力量',
                desc: '你选择推迟自己的归途，帮助其他迷失的灵魂。X的手帕系在汤屋的栏杆上——她曾在这里帮助过无数人找到回家的路。'
            }
        },
        
        spirited_reflect: {
            id: 'spirited_reflect',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始反思自己的改变。不是那种惩罚式的反思——是那种安静的，像在镜子前站了很久，然后终于看清了自己的脸。贪婪让你得到了很多——金子、权力、地位。但你也失去了很多——诚实、简单、那种"我只是在做我应该做的事"的平静。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你记起了最初来到这个世界时的自己——那个只想回家的简单愿望。那个愿望还在，在很深的地方，上面盖了一层又一层的金子，但它还在。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '改变永远不晚。即使是最贪婪的人，也可以选择回头。不是回到过去——是回到自己。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想回到原来的自己。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下的声音很轻，但很清楚。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么就开始吧。赎罪的第一步是承认——不是承认错误，是承认你想改变。',
                    choices: [
                        { text: '开始赎罪', nextScene: 'crossroads', trait: 'redemption' }
                    ]
                }
            ],
            ending: {
                title: '赎罪之路',
                desc: '你选择了反思与改变，开始弥补自己的贪婪造成的伤害。X的名字写在汤屋的悔过簿上——她也有过贪婪的时刻，但她选择了回头。'
            }
        },
        
        spirited_consumed: {
            id: 'spirited_consumed',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你继续贪婪地追求更多。无脸人给你的金子越来越多——开始是金砂，然后是金块，然后是金条。你的欲望也越来越大——开始是更好的饭菜，然后是更大的房间，然后是更多的权力。每一次满足都让你想要更多。不是一种愉悦——是一种饥饿。一种永远填不满的饥饿。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '直到有一天，你发现自己变了。不是慢慢地——是忽然之间。你照镜子的时候，镜子里的人不是你。不是你认识的那个人。你试着说话，但发出的声音不像你。你试着回忆自己的名字，但那个名字已经不在你心里了。它在哪里？你不知道。也许在金子里。也许在欲望里。也许，在很久以前，你把它弄丢了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人站在你面前。她的表情很平静——不是冷漠，是悲伤。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '我警告过你。贪婪的终点是失去自我。不是变成怪物——是变成空壳。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '不……这不是我想要的……',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '但你已经说不出自己的名字了。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '欲望总是这样。它承诺一切——最后夺走一切。不是因为它坏——是因为它没有尽头。',
                    choices: [
                        { text: '接受命运', nextScene: 'crossroads', trait: 'consumed' }
                    ]
                }
            ],
            ending: {
                title: '被贪婪吞噬',
                desc: '你被贪婪吞噬，变成了另一种存在。X的名字在猪圈的围栏上刻着——她曾警告过后来者，但有些人必须亲身体验才会明白。'
            }
        },
        
        spirited_righteous_path: {
            id: 'spirited_righteous_path',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你坚持走正道。虽然这条路更难——没有人给你金子，没有人对你弯腰，没有人让你在更前面的位置写下自己的名字。但它更踏实——每一步都踩在实地上，每一个决定都让你可以安心地睡觉。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你的正直赢得了尊重——不是那种喧哗的崇拜，是那种安静的，在走廊里遇到时对方会轻轻点头的尊重。甚至包括一些妖怪的尊重——那个从来不说话的河神，在离开的时候对你鞠了一躬。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '正道虽然曲折，但终将通向目的地。你已经证明了你的价值——不是给别人看，是给自己看。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只是做了正确的事。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影点了点头——这一次，你知道那是笑。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '这正是为什么正道会选择你。不是因为你是英雄——是因为你做了选择，然后坚持了它。继续前行，正直的旅人。',
                    choices: [
                        { text: '坚持正道', nextScene: 'crossroads', trait: 'integrity' }
                    ]
                }
            ],
            ending: {
                title: '正直的旅人',
                desc: '你坚持走正道，赢得了所有妖怪的尊重。X的签名在汤屋的荣誉名册上——正直的人永远不会被遗忘。'
            }
        },
        
        spirited_pay_debt: {
            id: 'spirited_pay_debt',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定偿还欠无脸人的债务。这需要时间和努力——你为他工作，完成各种任务。有些任务很简单——帮他烧水，帮他叠毛巾。有些任务很难——帮他找到他想要的东西，虽然他从来没有说清楚到底想要什么。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '渐渐地，债务在减少，你的自由在增加。不是那种突然的自由——是那种一点一点赎回的自由，像潮水涨回来时，沙滩一点一点地重新出现。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '承担责任需要勇气。你正在赎回你的自由——不是用金子，是用行动。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会还清每一分钱的债。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你没有说"很简单"。你没有说"很快"。你只是说"我会"——这两个字够重了。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么当你还清时，你将真正自由。不是别人给你的自由——是你自己挣来的。',
                    choices: [
                        { text: '偿还债务', nextScene: 'crossroads', trait: 'responsibility' }
                    ]
                }
            ],
            ending: {
                title: '责任的重量',
                desc: '你承担了责任，偿还了每一分债务，赎回了自己的自由。X的账本上有一个名字被划掉——她理解债务的重量，也理解自由的价值。'
            }
        },
        
        spirited_run_away: {
            id: 'spirited_run_away',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定逃避债务。你偷偷离开了汤屋，试图躲藏起来。你找到了一些隐蔽的地方——后山有个山洞，河边的芦苇丛很深，但你总觉得有人在看你。不是无脸人——是你自己。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '但债务就像影子。无论你跑到哪里，它都跟着你。不是在外面——是在里面。你闭上眼睛的时候，能看到金子的颜色。你安静下来的时候，能听到无脸人沉默的声音。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '逃避不能解决问题。债务会增长——不是利息，是重量。你每逃避一天，它就重一分。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '那我该怎么办？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '面具下的声音很平静，像一杯放凉了的茶。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '面对它。只有面对，才能解脱。不是逃避让影子消失——是转身。',
                    choices: [
                        { text: '最终面对', nextScene: 'crossroads', trait: 'facing_fear' }
                    ]
                }
            ],
            ending: {
                title: '面对恐惧',
                desc: '你最终选择了面对自己的恐惧和债务。X的笔记中有一页写着："逃避的影子比恐惧本身更长。只有转身面对，影子才会消失。"'
            }
        },
        
        spirited_reform: {
            id: 'spirited_reform',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你不仅解救了被囚禁的灵魂，还改变了汤屋的本质。它不再是一个监狱——那些瓶子被清空了，那些名字被归还了，那些记忆被释放了。取而代之的，是一个真正的避难所——一个疲惫的灵魂可以来休息、来洗澡、来记起自己是谁的地方。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '妖怪们依然来这里休息。但迷失的灵魂现在可以得到帮助，而不是被囚禁。新来的迷失者会被给一杯热茶，一条干净的毛巾，和一个问题——"你叫什么名字？"不是要拿走它，是要帮你记住它。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人站在汤屋的顶楼，看着窗外的夕阳。她的背影看起来比之前小了一些——不是变老了，是放下了什么。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你让我看到了另一种可能。也许……也许改变是可能的。不是推翻一切——是换一种方式。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '每个人都可以改变。包括你。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '她转过身来。她的脸上没有表情，但她的眼睛里有光。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '也许吧。谢谢你，改革者。',
                    choices: [
                        { text: '改变一切', nextScene: 'crossroads', trait: 'reformer' }
                    ]
                }
            ],
            ending: {
                title: '改革者',
                desc: '你改变了汤屋的本质，让它从一个监狱变成了真正的避难所。X的名字刻在汤屋新的大门前——改革者，欢迎回来。'
            }
        },
        
        spirited_seek_safety: {
            id: 'spirited_seek_safety',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始寻找安全的地方。你避开危险——那些黑暗的走廊，那些不该打开的门，那些在角落里低声说话的声音。你远离冲突——不是懦弱，是选择。你只求生存——好好地活着，安安静静地，直到可以离开。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这不是懦弱，这是智慧。有时候，生存比荣耀更重要。不是只有英雄才值得被记住——每一个安静地活下来的人，都在讲述一个故事。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '你找到了自己的方式。不是每个人的旅程都一样——有些人要战斗，有些人要躲藏，有些人要等待。重要的不是方式，是方向。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只想活下去。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '圆形的精灵没有说什么大道理。它只是点了点头，把你面前的那杯茶推近了一些。茶是温的，刚刚好。',
                    choices: null
                },
                {
                    character: 'roundSpirit',
                    text: '那么活下去。以你自己的方式。活着本身就是一种勇敢。',
                    choices: [
                        { text: '生存下来', nextScene: 'crossroads', trait: 'survival' }
                    ]
                }
            ],
            ending: {
                title: '生存的智慧',
                desc: '你选择了以自己的方式生存——不是英雄，不是传奇，只是一个想要活下去的人。X的信中说："有时候，活下去就是最大的胜利。"'
            }
        },
        
        spirited_ready_home: {
            id: 'spirited_ready_home',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你准备好回家了。你收集了需要的一切——那颗药丸，那张地图，那些忠告。你也放下了不必要的负担——恐惧、贪婪、对过去的执念。你的行囊比来的时候轻了，但你的心比来的时候满了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '汤屋的朋友们来送你。锅炉工给了你一块烤红薯——包在纸里，还是热的。那个老服务员教了你最后一件事——在人类世界，你只要记得自己是谁，就不用害怕。那个妖怪什么都没说，只是站在一旁，但你看到他点了点头。即使是严厉的女主人，眼中也有一丝不舍——不是那种挽留的不舍，是那种"你去吧"的不舍。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '你在这里学到了什么，旅人？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你沉默了一会儿。不是因为不知道答案——是因为答案太多了，你需要选一个。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我学到了……我是谁。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '女主人笑了。这一次，是真的笑。',
                    choices: null
                },
                {
                    character: 'bathhouseMistress',
                    text: '那么你已经得到了最宝贵的礼物。去吧，回家。但记住——这里永远欢迎你。不是作为客人，是作为家人。',
                    choices: [
                        { text: '回家', nextScene: 'crossroads', trait: 'return_home' }
                    ]
                }
            ],
            ending: {
                title: '真正回家',
                desc: '你终于回家了，带着在神隐世界学到的一切。X的明信片在信箱里等着你——上面只有一句话："欢迎回来。继续寻找。"'
            }
        },
        
        spirited_with_memory: {
            id: 'spirited_with_memory',
            background: 'spiritedBathhouse',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你带着珍贵的记忆继续前行。它们是你的力量——不是那种让你举起重物的力量，是那种让你在黑暗里也能走下去的力量。它们是你的锚点——不是绑住你，是让你知道根在哪里。它们是你的指南——不是告诉你方向，是告诉你，你曾经从哪里来。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '无论遇到什么困难，只要看看那张照片，你就能记起为什么要坚持。不是因为照片里有答案——是因为照片里有爱。爱不是答案，但爱让寻找答案这件事变得值得。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '记忆是强大的魔法。不是那种会发光的魔法——是那种你看不见，但它一直在的魔法。带着它，你永远不会真正迷失。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会珍惜它，直到我回家。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '戴面具的身影点了点头。然后它转身要走——但没有真的走，只是退后了一步，变成了你的影子。',
                    choices: null
                },
                {
                    character: 'maskedSpirit',
                    text: '那么去吧，记忆的守护者。',
                    choices: [
                        { text: '带着记忆前行', nextScene: 'crossroads', trait: 'remembrance' }
                    ]
                }
            ],
            ending: {
                title: '记忆的守护者',
                desc: '你带着珍贵的记忆继续前行，它们是你的锚点，你的指南。X在照片背面留下了一行字："记忆是爱的另一种形式。不要忘记，也不要被回忆束缚。"'
            }
        }
    }
};

// 注册章节
if (typeof CHAPTERS !== 'undefined') {
    CHAPTERS.spirited = spiritedChapter;
}