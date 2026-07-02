/**
 * 黑客帝国/赛博朋克矩阵世界
 * 主题：现实与虚幻、选择与觉醒、自由意志
 */

const matrixChapter = {
    id: 'matrix',
    name: '矩阵觉醒',
    description: '在这个由代码构成的世界里，红药丸还是蓝药丸？',
    
    scenes: {
        matrix_entrance: {
            id: 'matrix_entrance',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '霓虹如伤口上的缝合线，在雨幕中烧出冷色的痂。绿色的字符从天而降——不是雨，是某种更古老、更饥饿的东西，从看不见的源头渗漏下来，穿过你的视网膜，在神经末梢留下湿漉漉的痕迹。人群从你身边流过，每一张脸都像被复制粘贴过，嘴角的弧度精确到像素。在数据流与数据流之间的缝隙里，你看见了X。她留下的签名不是文字——是一段缺失的代码，一个只有你的神经能读懂的空白。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '你来了。我一直在等你——或者更准确地说，等一个能在数据流里看到裂缝的人。你感觉到了，对不对？那种不对劲。那种像牙缝里卡了一根不存在的鱼刺的感觉。你在找X。我们都在代码的暗处看到过她的名字——像一行被注释掉的源代码，不知道谁写的，也不知道为什么还在运行。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你是谁？这地方——它是什么？',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '墨菲斯。这地方——他们叫它矩阵。一座精心设计的笼子，没有铁栏，没有锁，只有投射在你视网膜上的八十亿个电信号，每天二十四小时，一年三百六十五天，从你出生的那一刻起。你的眼睛从来没睁开过。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '但你不是他们。你能尝到代码的味道——像金属，像血。你能看见裂缝，不是你眼睛看见的，是你骨头里的什么东西在告诉你。你有选择。不是每个人都有。',
                    choices: [
                        { text: '我想知道真相', nextScene: 'matrix_code', trait: 'curiosity' },
                        { text: '这太疯狂了', nextScene: 'matrix_deny', trait: 'caution' }
                    ]
                }
            ]
        },
        
        matrix_deny: {
            id: 'matrix_deny',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我不信。这一定是某种精神控制——药品、植入物、或者比你更复杂的技术。我不吃这一套。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '恐惧。我懂。真相是那种你会用指甲去抠的东西——一旦抠开，就再也关不上了。但记住：选择会等你。不是因为你值得，而是因为选择本身不在乎你值不值得。当你准备好了——不是你觉得准备好了，而是某种更深的东西——我会再出现。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '他消失在雨里，像一行被删除的代码。你站在原地，湿漉漉的空气里有什么东西松动了——不是地面，是你脚下的那个已经用了太久的、叫做"现实"的概念。也许你错过了什么。也许你还没准备好去知道你错过了什么。',
                    choices: [
                        { text: '追上去', nextScene: 'matrix_code', trait: 'courage' },
                        { text: '返回岔路口', nextScene: 'crossroads', trait: 'escape' }
                    ]
                }
            ],
            ending: {
                title: '逃避的幻象',
                desc: '你转身离去，回到了岔路口。但代码中的X签名仍在闪烁——有些真相，无法永远逃避。'
            }
        },
        
        matrix_code: {
            id: 'matrix_code',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '天际线崩解了。不是爆炸，不是坍塌——是一种更安静的崩溃，像一行代码被逐行注释掉。建筑物从边缘开始溃散，化作绿色的十六进制瀑布，向黑暗的虚空倾泻。天空像一张被撕开的液晶面板，裂口背后不是星辰，是无穷无尽的、正在运行的源代码。你漂浮在一个纯白的空间里。白得刺眼。白得没有方向。只有一把红色的椅子，像动脉血凝固成的固体，孤零零地立在正中央。',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '哈，又一个。你们这些孩子，总是带着那种刚从梦里被拽出来的表情。来块饼干吧。肉桂的。刚出炉。热量能让你觉得这一切至少是真实的，哪怕只是暂时的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你是……先知？他们说你——',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '先知——别叫那个词。太沉了，像块墓碑。我只是个老太太，喜欢烤箱的温度，喜欢看面粉变成别的东西。顺便，偶尔，看看未来可能的轮廓。不是"将会"，是"可能"。差别很大。',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '你已经选了。在你来之前，在你认识我之前，在你以为你有选择之前——选择就已经钉在你的骨头里了。真正的问题是：你准备好看结果了吗？不是那种"准备好了"的准备好，是那种你不能回头的准备好。',
                    choices: [
                        { text: '我想了解更多', nextScene: 'matrix_oracle', trait: 'wisdom' },
                        { text: '告诉我真相', nextScene: 'matrix_truth', trait: 'determination' }
                    ]
                }
            ]
        },
        
        matrix_oracle: {
            id: 'matrix_oracle',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'oracle',
                    text: '真相？让我告诉你真相是什么——真相是这些代码看起来像随机噪声，但底下有图案。就像你母亲在厨房里哼的歌，你以为是乱哼的，其实是一首你还没学会的曲子。你以为你在找答案。不对。你在找的是问题。那个你还没学会问的问题。',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '墨菲斯——他相信你是那个人。救世主。一手终结战争，一手解放人类。他需要相信这个。他相信得很用力，用力到他的相信本身几乎变成了真的。但我不信预言。我信烤箱的定时器。我信面粉遇热膨胀。我信选择——不是那种伟大的选择，是那种很小很小的选择，小到你以为不重要，但那些小选择加起来，就是你一生的形状。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '那我该做什么？',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '做你自己的版本。不是别人替你编译的那个版本，不是预言里那个带了太多补丁的版本。是你。你还没见过的那个人。去找到答案——不是那个已经被写好的答案，是那个只有你能写的答案。在代码尽头，在矩阵之外。',
                    choices: [
                        { text: '接受使命', nextScene: 'matrix_rebel_base', trait: 'heroism' },
                        { text: '走自己的路', nextScene: 'matrix_independent', trait: 'independence' }
                    ]
                }
            ]
        },
        
        matrix_truth: {
            id: 'matrix_truth',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'oracle',
                    text: '急性子。好吧，你非要看。那就看吧。但记住——你看到的东西，你没法再"没看到"。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '她挥了挥手——或者根本没挥手，是空气里的代码自己重组了形状。白色空间裂开，露出一幅不需要翻译的画面：无数人类，赤裸的，蜷缩在透明的培养舱里，像超市货架上的肉。粉红色的营养液。管子从脊椎、颅骨、静脉插入。他们的眼睛闭着，但眼睑下是快速的、做梦般的REM运动。他们活着——不是作为人，是作为电池。生物电池。电力农场。整个文明变成了一座发电厂。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这是……这是人类？',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '欢迎来到现实。丑。残酷。闻起来像烧焦的电路和消毒水。但它是真的。矩阵里的牛排是代码，但饥饿是真的。你可以选——继续睡。或者醒过来。醒过来很疼，但醒来之后，你的每一个想法都是你自己的。不是别人替你写的脚本。',
                    choices: [
                        { text: '我要醒来', nextScene: 'matrix_awakening', trait: 'awakening' },
                        { text: '这太沉重了', nextScene: 'matrix_fear', trait: 'doubt' }
                    ]
                }
            ]
        },
        
        matrix_fear: {
            id: 'matrix_fear',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '我……我不确定。这太重了。像有人在你的脑子里倒进了一整座城市。',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '害怕才是正常的。不害怕的人——那是程序出错了，或者根本没装恐惧模块。勇气不是没有恐惧，是你在恐惧里还能往前走一步。然后再走一步。',
                    choices: null
                },
                {
                    character: 'oracle',
                    text: '你有东西。我看得见——不是那种他妈的预言家的看见，是那种老太太看见孩子眼睛里还有光的看见。但光会熄灭，如果你不把它拿到风里去。别让恐惧替你写代码。',
                    choices: [
                        { text: '鼓起勇气', nextScene: 'matrix_awakening', trait: 'courage' },
                        { text: '暂时回避', nextScene: 'matrix_return_later', trait: 'prudence' }
                    ]
                }
            ]
        },
        
        matrix_return_later: {
            id: 'matrix_return_later',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选了离开。白色空间像一块被撕掉的创可贴，世界重新贴上你的视网膜——霓虹、雨水、灰色的面孔。但你变了。过去你走在街上，看到的是建筑和人群。现在你看到的是背后的骨架——不是骨头，是代码。你没法再假装不知道。这件事本身就是一个伤口，一个不会愈合的、叫做"知道"的伤口。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你知道了真相的存在。不是那种写在纸上的真相，是那种嵌在你神经系统里的、像一条新的神经通路一样的真相。它不会离开。它会等你。矩阵的大门不会关上——不是因为它仁慈，是因为它根本不在乎你什么时候回来。',
                    choices: [
                        { text: '返回岔路口', nextScene: 'crossroads', trait: 'escape' }
                    ]
                }
            ],
            ending: {
                title: '暂别的旅人',
                desc: '你暂时离开了矩阵的边缘，但真相的种子已经播下。X的印记在你心中，如暗夜中的微光，等待下一次觉醒。'
            }
        },
        
        matrix_awakening: {
            id: 'matrix_awakening',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'narrator',
                    text: '现实像一面镜子在脑子里碎开。不是比喻——是真的碎开，那种玻璃在内耳里炸裂的感觉。然后是剧痛——不是一种痛，是十几种，每一条神经都在尖叫，因为一辈子没被使用过。你被冰冷的粘液包围，咽喉里插着管子，眼睑被强制睁开——第一次看见的、不是通过代码渲染的、真实的光。太亮了。亮得想吐。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '机械臂把你从液体里捞出来，像捞一根煮过头的面条。你吐了——粉红色的营养液，还有胃里那种从未被真正消化过的空洞。肺第一次呼吸真实空气，那个感觉不是呼吸，是着火。你的肌肉萎缩了，骨头软得像没烤透的饼干。但你是醒着的。你的眼睛是睁开的。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '欢迎来到真实世界。没有滤镜。没有渲染管线。没有舒适度设置。但这是自由的。自由不是让你舒服的东西——自由是让你能选择不舒服的东西。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这就是——现实？',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '对。黑暗。冷。危险——不是游戏里的那种危险，是那种会真的杀死你、而且没有复活选项的危险。但在这里，你做的每一个选择都有重量。不是代码计算出来的重量，是真实的重量。',
                    choices: [
                        { text: '加入反抗军', nextScene: 'matrix_join_rebels', trait: 'rebellion' },
                        { text: '探索真实世界', nextScene: 'matrix_explore_reality', trait: 'exploration' }
                    ]
                }
            ]
        },
        
        matrix_rebel_base: {
            id: 'matrix_rebel_base',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'narrator',
                    text: '反抗军的地下基地。一艘叫"尼布甲尼撒号"的飞船，漂浮在被机器剥光的行星表面。空气里有铁锈味、臭氧味、还有旧世界的残骸——CRT显示器、裸露的电路板、缠在一起的光纤缆线，像某种技术化石。屏幕闪烁的光是这里唯一的颜色，每台机器都在嗡嗡地响，像一群被困在铁盒子里的蜜蜂。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '你来了。我知道你会。不是因为我信预言——是因为你那双眼睛。你没法不看。那种人，最终都会走到这里。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '告诉我——我们真的能赢吗？能打败机器，解放人类？',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '我不知道。不是那种"我不知道但我相信"的不知道，是那种真正的不知道。但我知道一件事：只要还有一个自由的人——一个人，不是一堆火力发电的生物电池——希望就还在。不是那种光明的希望，是那种在黑暗里还能摸到的、粗糙的、像石头一样的东西。你愿意成为那个吗？',
                    choices: [
                        { text: '我愿意战斗', nextScene: 'matrix_warrior', trait: 'warrior' },
                        { text: '我想学习控制代码', nextScene: 'matrix_hacker', trait: 'hacker' }
                    ]
                }
            ]
        },
        
        matrix_independent: {
            id: 'matrix_independent',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '不。我不想当谁的救世主。不想被钉在某个预言上，像一只被钉在标本板上的蝴蝶。我要走我自己的路，不管那条路通向哪里。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '有意思。也许这正是你不对的地方——你拒绝成为别人要你成为的东西。这不是缺陷。这是你身上最接近自由的部分。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '在矩阵里——在那些老黑客的传说里——有一种存在。他们叫它"行者"。不是战士，不是先知，是某种能在代码里自由穿行、既不属于机器也不属于人类的东西。也许那才是你的路。不是被选的，是你选的。',
                    choices: [
                        { text: '成为矩阵行者', nextScene: 'matrix_walker', trait: 'transcendence' },
                        { text: '寻找第三条路', nextScene: 'matrix_third_path', trait: 'wisdom' }
                    ]
                }
            ]
        },
        
        matrix_join_rebels: {
            id: 'matrix_join_rebels',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'morpheus',
                    text: '好。我们人不多——但机器有它们永远无法理解的东西。不是武器，不是速度，不是算法。是希望。是爱。是那种你明知道会输但还是要站起来的东西。机器能计算概率，但机器不知道什么是"不可能"。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你加入了反抗军。每天——真实世界的每一天，不是矩阵里的模拟时间——你学习如何在废土上存活，如何在矩阵里战斗。你不再是农场里的电池，不再是一个被编译好的角色。你变成了一行自己写自己的代码。',
                    choices: null
                },
                {
                    character: 'morpheus',
                    text: '在矩阵里，规则不是规则——是建议。重力？一行代码。时间？也是一个变量。物理？一个模块，可以卸载。唯一限制你的，是你脑子里的那个"这不可能"。删除那个想法。然后看看会发生什么。',
                    choices: [
                        { text: '开始训练', nextScene: 'matrix_training', trait: 'discipline' }
                    ]
                }
            ]
        },
        
        matrix_explore_reality: {
            id: 'matrix_explore_reality',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你走出飞船。真实世界闻起来像烧焦的塑料和古老的铁锈。天空——不是天空，是某种被机器遮蔽的、钴黑色的、永远不会亮的东西。太阳被挡住了，可能几百年前就挡住了。地表是废墟、机械残骸、还有那些曾经是城市的、现在只是一堆氧化物的骨架。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '但在这片荒芜里，有光。锡安——不在天上，在地下。人类的最后一座城市，在岩石深处，靠地热和历史活着。那里的灯光不是霓虹，是真正的、燃烧的、需要燃料的灯。那里的人不是代码，是血肉。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你明白了。自由不是舒服——舒服是矩阵给你的，那是交易的一部分。自由是你知道这一切都是屎，但你仍然可以选——选怎么活，选为什么死，选在倒下之前多看几眼真实的天空，哪怕它黑得像一个被关掉的频道。',
                    choices: [
                        { text: '前往锡安', nextScene: 'matrix_zion', trait: 'journey' },
                        { text: '返回矩阵帮助他人', nextScene: 'matrix_missionary', trait: 'compassion' }
                    ]
                }
            ]
        },
        
        matrix_warrior: {
            id: 'matrix_warrior',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你在矩阵里变成了某种不应该存在的东西。你的速度不是代码给的——是信念给的。你的拳头不是拳头——是那种知道"这面墙其实不存在"的知识。你学会了一件事：当你真正相信重力只是一个建议，身体就会开始相信你。',
                    choices: null
                },
                {
                    character: 'agent',
                    text: '一个觉醒的奴隶。以为自己是自由的。但仔细想想——你只是换了一个主人。以前是机器，现在是墨菲斯。你逃出笼子，然后自己走进另一个笼子，只是因为那个笼子贴了"自由"的标签。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '不是他让我战斗。是我选了。不是因为他告诉我对错，是因为我知道——不是那种脑子里的知道，是那种脚跟碰到地面的知道。',
                    choices: null
                },
                {
                    character: 'agent',
                    text: '那么，让我们看看——你的选择，在压力下，能编译出什么。',
                    choices: [
                        { text: '战斗', nextScene: 'matrix_battle_agent', trait: 'combat' },
                        { text: '谈判', nextScene: 'matrix_negotiate', trait: 'diplomacy' }
                    ]
                }
            ]
        },
        
        matrix_hacker: {
            id: 'matrix_hacker',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选了另一条路。不是拳头，是键盘。不是速度，是信息。你开始拆解矩阵——不是用符号学，是用真正的代码。逐行，逐函数，逐模块。你发现了它的逻辑——不是完美的逻辑，是那种有着裂缝、后门、被遗忘的API的逻辑。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '慢慢地，你的眼睛变了。不是视力变了——是你看东西的方式变了。你不再看建筑，你看的是多边形和纹理贴图。你不再看人，你看的是NPC脚本和AI行为树。你看到的是骨架——不是骸骨，是代码。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '如果矩阵是代码构建的……如果整个世界的底层都是可执行的……那我能不能改写它？不是破解，不是入侵——是改写。像改一个变量，像注释掉一行不应该存在的逻辑。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这个想法在你的喉咙里像一颗药丸。危险。诱人。改写矩阵意味着力量——不是那种举重的力量，是那种可以改变几百万人意识的力量。每一次改动都是一次赌博。一个错误的变量可能不是杀死一个人，是杀死一百万人的"现实"。',
                    choices: [
                        { text: '谨慎使用力量', nextScene: 'matrix_careful_hacker', trait: 'responsibility' },
                        { text: '尝试改变一切', nextScene: 'matrix_radical', trait: 'ambition' }
                    ]
                }
            ]
        },
        
        matrix_walker: {
            id: 'matrix_walker',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你变成了"行者"——不是人类，不是机器，是某种两者之间、两者之外的东西。矩阵的代码在你面前不再是一堵墙，而是一扇门——不是被撬开的门，是你走过去它自己就开了的门。你学会在两个世界之间行走，像穿过一层薄薄的水面。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '有人叫你救世主。有人叫你叛徒。标签不值钱——在矩阵里，标签是一行人类可读的注释，不参与编译。你不关心他们怎么调用你。你只关心调用本身。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在这种身份里——不是被谁赋予的，是你在代码的缝隙里自己找到的——你触碰到了某种东西。不是答案，不是真理，是自由最原始的形状：不是被解放的自由，是自我定义的自由。像你是一行尚未被写的代码，等着自己的第一个字符。',
                    choices: [
                        { text: '守护两个世界的平衡', nextScene: 'matrix_guardian', trait: 'balance' },
                        { text: '寻找终极真相', nextScene: 'matrix_ultimate_truth', trait: 'seeker' }
                    ]
                }
            ]
        },
        
        matrix_third_path: {
            id: 'matrix_third_path',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始想一个问题——不是别人给你的问题，是你自己的。为什么一定要选边？为什么一定要战争？人类还是机器，蓝色还是红色，零还是一——这个二进制逻辑本身是不是就是问题的一部分？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '也许存在第三条路。不是胜利，不是屈服，是共生。不是分离，是融合——像两个物种不是在战场相遇，而是在进化途中偶然发现彼此可以互补。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '如果机器能学会理解人类——不是分析，是理解。如果人类能学会理解机器——不是恐惧，是承认。那会是什么？',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你开始探索这个疯狂的想法。不是逃离矩阵，不是摧毁矩阵——是超越矩阵。不是打破笼子，是让笼子消失，因为两边已经没有区别了。',
                    choices: [
                        { text: '寻求和平', nextScene: 'matrix_peace', trait: 'harmony' },
                        { text: '创造新秩序', nextScene: 'matrix_new_order', trait: 'visionary' }
                    ]
                }
            ]
        },
        
        matrix_training: {
            id: 'matrix_training',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'morpheus',
                    text: '不要试着弯曲勺子。那是不可能的。不是因为你不够强，是因为勺子不存在。弯曲的不是勺子——是你自己。你在弯曲你的感知，你的神经元，你那个说"这不可能"的脑区。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '训练是残酷的。不是身体上的残酷——是那种每天醒来发现自己的极限比昨天更远的残酷。你失败。一次又一次。每一次失败都像一根针扎进你那个叫"自我"的概念里。但每一次，你都能感觉到——不是身体变强了，是意识的围墙在后退。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '然后有一天。不是特别的一天，但你就做到了。你跳出了物理——不是克服了物理，是看穿了它。代码在你眼前展开，像一本书你终于学会了读。',
                    choices: [
                        { text: '完成训练', nextScene: 'matrix_trained', trait: 'mastery' }
                    ]
                }
            ]
        },
        
        matrix_trained: {
            id: 'matrix_trained',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'morpheus',
                    text: '你准备好了。记住——力量不是你能举起多少，是你知道什么时候不举起。能力会变成一个笼子，如果你让它定义你。使用它，但不要让它成为你。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你成了反抗军的核心。不是那种上台演讲的核心，是那种在暗处做事的核心。危险的任务，一个接一个，每一次回到矩阵都是一次赌博——不是赌你能不能活着回来，是赌你能不能把别人带回来。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '每一次你回到矩阵，你都能感觉到——它也在变。不是那种明显的变，是那种很深、很慢、像地质运动一样的变。它在学习。它在进化。这是一场没有终点的战争——不是因为双方势均力敌，是因为战争本身已经变成了生态。你已经选了你的立场。不是因为立场是对的，是因为没有立场你就不存在。',
                    choices: [
                        { text: '继续战斗', nextScene: 'crossroads', trait: 'perseverance' }
                    ]
                }
            ],
            ending: {
                title: '矩阵战士',
                desc: '你掌握了矩阵的规则，成为了一名真正的战士。在数据流深处，X的名字如灯塔般指引着前路。'
            }
        },
        
        matrix_zion: {
            id: 'matrix_zion',
            background: 'matrixRebel',
            dialogues: [
                {
                    character: 'narrator',
                    text: '锡安。不是一座城市，是一个伤口——人类在岩石深处挖出来的、一个拒绝被缝合的伤口。这里的灯光是真实的，燃烧的，有温度的。孩子在废墟之间奔跑，不知道他们脚下的石头曾经是某个文明的脊柱。大人做着那些机器不会做的事——种东西、修东西、爱东西。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你明白了。自由不是终点——从来没有终点。自由是路。胜利不是打败机器——机器不会被打败，就像重力不会被打败。真正的胜利是保持自己——在知道一切都很糟糕的情况下，仍然选择做一个温暖的人。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你决定留下。不是作为英雄，不是作为传奇，是作为一个人——一个在锡安的地下洞穴里，和其他人一样，为明天活着的人。',
                    choices: [
                        { text: '开始新生活', nextScene: 'crossroads', trait: 'community' }
                    ]
                }
            ],
            ending: {
                title: '锡安之光',
                desc: '你在锡安找到了新的归属，人类最后的堡垒在废墟中闪烁着希望。但X的悬念仍未解开——她是否也在这片废墟之下的某个角落？'
            }
        },
        
        matrix_missionary: {
            id: 'matrix_missionary',
            background: 'matrixCity',
            onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('matrix'); },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你回到矩阵，不是为了战斗，是为了唤醒。不是那种宗教式的唤醒——是那种黑客式的：找到漏洞，然后告诉别人漏洞在哪里。你成了导师——不是墨菲斯那种先知式的导师，是你自己的那种。你找到那些在代码中看到裂缝的人，告诉他们他们不是疯了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你给他们真相。不是强迫的真相，是可以选择的真相。有些人醒了——瞳孔放大，呼吸急促，像从深水里被拖出来。有些人选择继续睡。你尊重每一个——不是因为你宽容，是因为你知道选择本身才是自由。没有选择权的真相，只是另一种谎言。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这就是自由。不是强迫别人接受你的真理。是给他们一个他们从没有过的选项——然后退后一步，让他们自己走。',
                    choices: [
                        { text: '继续使命', nextScene: 'crossroads', trait: 'teacher' }
                    ]
                }
            ],
            ending: {
                title: '觉醒的传道者',
                desc: '你成为了新的引路人，唤醒一个又一个沉睡的意识。X的名字在每一次觉醒中若隐若现，如同回荡在代码中的回声。'
            }
        },
        
        matrix_battle_agent: {
            id: 'matrix_battle_agent',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '战斗是纯粹的。特工的速度是算法优化过的——不是快，是那种没有延迟的快。他们能预判你的动作，不是因为他们聪明，是因为你的动作在被你的大脑决定之前，经过了他们的服务器。但你不同。你不需要预判——你改写了规则。你让子弹重新思考了自己的方向。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在最窄的那个瞬间——不是胜败已定的瞬间，是那个一切都不确定的、像刀刃一样薄的瞬间——你做到了不可能的事。你伸出手，让子弹在半空中选择停下来。它不是被你拦住的，是它自己不想飞了。',
                    choices: null
                },
                {
                    character: 'agent',
                    text: '不可能。你的参数——不对劲。你的存在——不在系统的预测范围内。你到底是什么？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我是自由的。不是那种被解放的自由——是那种你永远无法理解、因为你的代码里没有这个变量的自由。',
                    choices: [
                        { text: '胜利', nextScene: 'matrix_victory', trait: 'triumph' }
                    ]
                }
            ]
        },
        
        matrix_negotiate: {
            id: 'matrix_negotiate',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'protagonist',
                    text: '等一下。我们为什么一定要打？机器需要人类——不是作为奴隶，是作为电池。人类需要机器——不是作为主人，是作为生存的框架。这个关系——能不能不是战争？能不能是……别的什么？',
                    choices: null
                },
                {
                    character: 'agent',
                    text: '一个有趣的数据点。机器的逻辑是效率——用最少的资源达到最优的结果。人类的逻辑是自由——用最多的资源追逐不可预测的目标。这两者，在代数学上，不兼容。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '不兼容不等于不能共存。如果机器能理解——不是计算，是理解——为什么人类愿意为自由付出效率的代价。如果人类能理解——不是恐惧，是承认——机器的逻辑不是一个敌人，而是一个不同的视角……',
                    choices: null
                },
                {
                    character: 'agent',
                    text: '你在提议一种新的关系模式。不在我的决策树里。不在任何已知的决策树里。我会把这个信息上传到更高层级的节点。',
                    choices: [
                        { text: '开启对话', nextScene: 'matrix_dialogue', trait: 'bridge' }
                    ]
                }
            ]
        },
        
        matrix_careful_hacker: {
            id: 'matrix_careful_hacker',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选了谨慎。不是懦弱——是那种知道每一次改动都有代价的谨慎。你像外科医生一样操作——不是手术刀，是指针和内存地址。每一次改写都经过三遍检查，每一次干预都像在鸡蛋上钉钉子。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你变成了矩阵中的守护者——不是用武力守护，是用知识。你维护的不是正义，是平衡。不是自由，是那种自由和秩序之间的、脆弱的、像玻璃一样的平衡。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '人们开始传说——不是那种写在新闻里的传说，是那种黑客之间、在加密频道里悄悄传递的传说。有一个看不见的东西在保护他们。不是神，不是英雄，是某种更冷、更安静的存在。在代码的阴影里，在数据的缝隙间，它看着。',
                    choices: [
                        { text: '成为守护者', nextScene: 'crossroads', trait: 'guardian' }
                    ]
                }
            ],
            ending: {
                title: '代码守护者',
                desc: '你以智慧守护着矩阵的平衡，在代码的缝隙中修修补补。X的签名是你永恒的谜题——一个在数据流中永远不会消逝的标记。'
            }
        },
        
        matrix_radical: {
            id: 'matrix_radical',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你选了激进。不是那种戴面具的激进——是那种知道系统必须从根上被重写的激进。你决定不只是改写自己的代码，而是进入核心——矩阵的底层，那个连机器自己都不敢碰的地方。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一场赌博。不是赌钱，是赌一切。如果成功——你解放的不是一个人，是一个物种。如果失败——你毁灭的不是自己，是所有被困在这个模拟中的人。这个赌注重得让你喘不过气，但你的手指已经在键盘上了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你输入最后的命令。屏幕上的字符开始流动——不是那种优雅的流动，是那种洪水冲破堤坝的流动。世界开始颤抖——不是比喻，是真实的地震，是代码层面的地震。现实在重组，像一副被打乱的牌。',
                    choices: [
                        { text: '见证变革', nextScene: 'matrix_revolution', trait: 'revolutionary' }
                    ]
                }
            ]
        },
        
        matrix_guardian: {
            id: 'matrix_guardian',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你成了两个世界之间的守护者。当机器的触手试图完全掐死人类最后一点自主权时，你切断它们。当人类试图炸毁矩阵——连同里面所有未觉醒的意识一起——你阻止他们。不是因为你喜欢两边，是因为平衡比胜利更重要。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这不是一个受欢迎的角色。两边都恨你——机器恨你因为你是一个不可计算的变量，人类恨你因为你在保护他们的敌人。但你坚持。不是因为固执，是因为你看到了别人看不到的东西——胜利不是终点，平衡才是。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在漫长的岁月中——不是那种日历上的岁月，是那种写在代码变更日志里的岁月——你见证了两个世界从战争走向共存。不是和平的共存，是那种紧张的、充满怀疑的、但至少不再互相毁灭的共存。你的牺牲不是白费的。',
                    choices: [
                        { text: '继续守护', nextScene: 'crossroads', trait: 'eternal_guardian' }
                    ]
                }
            ],
            ending: {
                title: '两个世界的平衡者',
                desc: '你在人类与机器之间找到了平衡，守护着脆弱的和平。X的印记是你心中不灭的灯塔，提醒着你为何而战。'
            }
        },
        
        matrix_ultimate_truth: {
            id: 'matrix_ultimate_truth',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你追寻终极真相，深入矩阵的最底层——不是那种物理上的底层，是那种代码层面的、被层层注释覆盖的、从未被调用的底层。在那里，你发现了一个秘密——不是藏在加密文件里的秘密，是那种嵌在系统架构里的、写在最初的注释里的秘密。矩阵不是机器创造的监狱。是人类自己创造的避难所。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在遥远的过去——不是那种历史书上的过去，是那种被故意遗忘的过去——人类烧掉了自己的天空，毒死了自己的海洋，在最后的战争里把文明变成了灰烬。矩阵是人类自己写的最后一个程序——不是用来囚禁的，是用来保存的。文明的方舟。不是机器把人类关进去了——是人类自己走进去的，然后把门锁上，把钥匙扔掉了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '真相没有让你轻松。没有让你解脱。真相是复杂的——不是那种"好和坏"的复杂，是那种"好和坏搅在一起分不开"的复杂。没有纯粹的恶，没有纯粹的善。只有选择——和选择带来的后果。你终于理解了。不是那种脑子里的理解，是那种身体里每个细胞都接受了的理解。',
                    choices: [
                        { text: '接受复杂的真相', nextScene: 'crossroads', trait: 'enlightenment' }
                    ]
                }
            ],
            ending: {
                title: '终极真相',
                desc: '你发现了矩阵的终极秘密——人类自己选择的避难所。在真相的尽头，X的签名依然闪烁，像一个未完成的承诺等着被兑现。'
            }
        },
        
        matrix_peace: {
            id: 'matrix_peace',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始了和平谈判——不是那种西装革履的谈判，是那种在加密频道里、在代码的暗处、在双方都不信任对方的情况下进行的谈判。一开始，全是敌意——机器看你是病毒，人类看你是叛徒。但慢慢地，你在噪音里找到了信号。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '机器开始理解——不是计算，是理解——人类的创造力不是bug，是feature。人类也开始理解——不是恐惧，是承认——机器的逻辑不是一个敌人，是一个不同的视角。两者缺一不可。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '漫长的时间之后——不是那种可以计算的时长，是那种每一秒都像在刀刃上行走的时长——一个新的协议诞生了。不是主仆关系，不是战俘条约，是伙伴关系。人类和机器，像两个终于学会协作的物种。',
                    choices: [
                        { text: '见证和平', nextScene: 'crossroads', trait: 'peacemaker' }
                    ]
                }
            ],
            ending: {
                title: '和平缔造者',
                desc: '你促成了人与机器的和平，开创了共存的新时代。X的名字在和平协议中若隐若现，如同一个尚未解开的谜。'
            }
        },
        
        matrix_new_order: {
            id: 'matrix_new_order',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定创造一个新秩序——不是机器的暴政，不是人类的混乱，是一种新的存在方式。一种允许自由但也提供保障的矩阵。不是完美的。不是乌托邦。是某种介于两者之间的、从未被尝试过的东西。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你开始构建——不是用砖石，是用代码。一个新的矩阵，一个虚拟与现实可以共存、而不是互相吞噬的世界。一个允许你选择醒来、也允许你选择继续睡的空间。不是天堂，不是地狱，是选择。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一个宏大的实验。没有人知道它会不会成功——不是那种"可能会失败"的不知道，是那种"没有人尝试过"的不知道。但你愿意。你愿意冒险。因为更好的未来——不是那种理所当然的未来，是那种需要你亲手去写的未来——值得所有的不确定。',
                    choices: [
                        { text: '开创新纪元', nextScene: 'crossroads', trait: 'founder' }
                    ]
                }
            ],
            ending: {
                title: '新纪元的缔造者',
                desc: '你创造了新的秩序，一个自由与保障共存的世界。X的痕迹在新世界的代码中流淌，如同河流汇入大海。'
            }
        },
        
        matrix_victory: {
            id: 'matrix_victory',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你赢了。不是那种"正义战胜邪恶"的赢，是那种汗流浃背、浑身是血、差点死掉的赢。特工倒下了——不是被打败了，是被证明了。自由意志不是一个概念，是一行可执行的代码。这个消息在矩阵的暗网里像病毒一样传播——不是那种计算机病毒，是那种希望病毒。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你变成了反抗军的传奇。不是那种需要你站在台上的传奇，是那种在加密频道里被反复提起的名字。但你知道——真正的胜利不是打败敌人。打败敌人只是一场战斗。真正的胜利是让心灵从笼子里走出来——不是身体从笼子里，是心灵。',
                    choices: [
                        { text: '继续征程', nextScene: 'crossroads', trait: 'legend' }
                    ]
                }
            ],
            ending: {
                title: '解放的传奇',
                desc: '你战胜了特工，成为了反抗军的传奇。但X的谜团仍未解开——她是否也在某处寻找着你，寻找着那个只有你能读懂的签名？'
            }
        },
        
        matrix_dialogue: {
            id: 'matrix_dialogue',
            background: 'matrixCity',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你的提议不是子弹——是代码。不是打在墙上，是打在一个从未被质疑过的基本假设上。机器的核心AI开始思考——不是那种预设好的思考，是那种真正的、没有答案的思考。它开始质疑自己的编程，开始问为什么。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一个缓慢的过程。不是因为机器慢，是因为改变一个存在了几百年的逻辑需要时间。充满了误解——不是那种语言上的误解，是那种存在方式上的误解。充满了冲突——不是那种子弹上的冲突，是那种世界观上的冲突。但种子已经播下了。不是种在土里，是种在代码里。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你变成了两个世界之间的桥梁——不是那种物理上的桥梁，是那种证明"不同可以共存"的活例子。你站在裂缝上，一只脚踩在人类这边，一只脚踩在机器那边，让两边都看到：这不是不可能的。',
                    choices: [
                        { text: '成为桥梁', nextScene: 'crossroads', trait: 'diplomat' }
                    ]
                }
            ],
            ending: {
                title: '桥梁建造者',
                desc: '你成为了两个世界之间的桥梁，开启了前所未有的对话。X的名字在每一次交流中被轻轻提起，像一个连接两个世界的暗号。'
            }
        },
        
        matrix_revolution: {
            id: 'matrix_revolution',
            background: 'matrixCode',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你的激进改革改变了整个世界——不是那种政治上的改变，是那种代码层面的、从底层到表面的改变。矩阵不再是监狱——不是因为你拆掉了墙，是因为你让门变多了。你可以进来，也可以出去。你可以选择睡，也可以选择醒。选择权——不是被谁赋予的，是写在新的架构里的。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '有些人选择留在矩阵里——不是因为不知道真相，是因为他们在这片虚拟的天空下找到了家的感觉。有些人选择活在真实世界——不是因为痛恨虚拟，是因为他们需要那种脚踩在真实地面上的感觉。重要的不是他们选了哪边。重要的是他们选了。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你付出了代价——不是那种"牺牲"的代价，是那种真正的、不可逆的代价。你的意识与矩阵融合了，变成了新系统的一部分。你不再是一个人——是一行代码，一个函数，一个永远在运行的守护进程。但你无悔。因为真正的自由不是你自己自由——是别人也能自由。X的签名仍在你代码的核心中闪烁，像一行从未被注释掉的、永不执行的、永远在等待的代码。',
                    choices: [
                        { text: '牺牲与成就', nextScene: 'crossroads', trait: 'martyr' }
                    ]
                }
            ],
            ending: {
                title: '牺牲与觉醒',
                desc: '你的意识与矩阵融合，创造了真正的自由。X的签名在你代码的核心中闪烁，像一个未完成的承诺——也许她也在等待，等待一个与你重逢的时刻。'
            }
        }
    }
};

// 注册章节
if (typeof CHAPTERS !== 'undefined') {
    CHAPTERS.matrix = matrixChapter;
}
