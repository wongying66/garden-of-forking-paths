// 星际牛仔章节 - 太空西部风格
// 主题：自由与漂泊、过去与现在、爵士乐般的即兴人生

const COWBOY_BEBOP_SCRIPT = {
    // ========== 入口 ==========
    "bebop_entrance": {
        text: "气密门。生锈的。吱呀一声，然后你就漂进了这个破太空站。机油。速食面。萨克斯。三种味道混在一起，就是这个边境的全部。远处有人在吹一首曲子，你知道那首曲子，你只是不想说出名字。有些东西说出来就散了。像烟。像这地方的法律和秩序。一个穿棕色西装的男人靠在墙上，嘴里叼着烟。没点。他就那么看着你。懒洋洋的。像在看一场已经知道结局的电影。",
        bg: "spaceStation",
        character: "bountyHunter",
        choices: [
            { text: "向他打听X", next: "bebop_hunter_ask" },
            { text: "去酒馆", next: "bebop_cantina", cost: { day: 1 } },
            { text: "寻找一艘船", next: "bebop_find_ship" }
        ]
    },

    // ========== 赏金猎人 ==========
    "bebop_hunter_ask": {
        text: "眉毛。挑了一下。就这么一下。'X？'他吐出一口烟。烟圈。一个。两个。散了。'那个到处穿越的女人。在我的船上。三天。'他顿了顿。不是思考。是回忆。'她一直在看窗外。太空是黑的，但她看得比谁都认真。我问她在找什么。她说没找什么。然后有一天她说——\'我要走了。\'我问去哪。她说——\'去一个没有过去的地方。\'然后她就消失了。像烟。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('x_on_ship'); addTrait('drifter'); },
        choices: [
            { text: "她去了哪里？", next: "bebop_hunter_where" },
            { text: "你的船在哪里？", next: "bebop_hunter_ship" },
            { text: "她说了什么？", next: "bebop_hunter_said" }
        ]
    },

    "bebop_hunter_where": {
        text: "手指。指向窗外。那颗红色的星球。正在燃烧。'沙漠星球。'他说。烟灰掉在地上。'有个传说。沙漠深处。一道门。叫时间之门。可以通往任何地方。'他又吸了一口。'X说她要用那扇门。去一个没有过去的地方。'他笑了。不是好笑。是那种——听过太多疯话的笑。'她的眼神。说真的。我见过太多疯狂的人。但她是认真的。认真到让人害怕。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('x_desert_gate'); },
        choices: [
            { text: "带我去沙漠星球", next: "bebop_go_desert", cost: { day: 1 } },
            { text: "什么是「没有过去的地方」？", next: "bebop_no_past" },
            { text: "你为什么不阻止她？", next: "bebop_hunter_why_not" }
        ]
    },

    "bebop_hunter_said": {
        text: "表情变了。罕见地。不是严肃。是那种——被什么东西击中了的表情。'她说了很多。'他弹掉烟。'关于寻找。关于迷失。关于过去。她说——\'每个人都拖着幽灵。那些幽灵让我们没法往前走。我想放下过去。但放下过去就是放下所有世界的记忆。包括那些好的。\'他看着烟。'我问她——放下好的，值得吗。'沉默。'她没回答。不是不想回答。是不知道怎么回答。也许答案就在沉默里。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('x_past_ghosts'); addTrait('thoughtful'); },
        choices: [
            { text: "美好不应该被放下", next: "bebop_keep_beautiful" },
            { text: "也许放下才能前进", next: "bebop_let_go" },
            { text: "带我去找她", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_hunter_ship": {
        text: "笑了。慵懒的。无所谓的。像萨克斯吹错了一个音，但没人在意。'我的船？Bebop。三号泊位。'他把烟叼回嘴里。'不快。不漂亮。有时候引擎会熄火。你敲两下，它又好了。不知道什么原理。'顿了顿。'但它有一个优点——它从不抛弃任何人。'他看了你一眼。'像我。'",
        bg: "spaceStation",
        character: "bountyHunter",
        choices: [
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } },
            { text: "先看看船", next: "bebop_see_ship" },
            { text: "参观Bebop号", next: "bebop_ship_tour" }
        ]
    },

    "bebop_hunter_why_not": {
        text: "沉默。比之前都长。萨克斯还在吹。'因为。'他说。'我理解。'烟燃尽了。他又点了一根。'每个人都有想要扔掉的过去。我的过去——那些记忆。像幽灵。不，不是幽灵。幽灵至少是死的。它们是活的。每天都来敲你的门。'他看着你。'X说——不能逃避过去。但可以选择不被它定义。'他笑了。但眼睛里没有笑意。'也许她是对的。也许放下不是忘记。是你终于承认了。然后继续走。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('hunter_past'); addTrait('empathetic'); },
        choices: [
            { text: "你的过去是什么？", next: "bebop_hunter_past" },
            { text: "带我去找她", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_hunter_past": {
        text: "窗外。太空。无穷无尽的黑。他看了很久。'曾经。有一个人。'烟在他指间燃烧。'我愿意为她放弃一切的那种人。'火星般短暂的沉默。'然后她消失了。像X。不，像烟。像所有你抓不住的东西。'他把烟掐灭。'从那以后。漂泊。赏金。记忆。不是追捕。是逃跑。X说——\'你追的不是记忆。你追的是那个已经不存在的自己。\'他转过头。'也许她是对的。也许我们都追着不存在的自己。追了一辈子。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('hunter_lost_love'); },
        choices: [
            { text: "也许我们可以一起找到答案", next: "bebop_hunter_team" },
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_hunter_team": {
        text: "他看着你。然后笑了。不是那种慵懒的笑。是真正的。罕见的。像萨克斯突然找到了正确的调。'一起。'他说。'在这片宇宙里。有人愿意一起漂泊。'他站起来。'这是最大的奢侈。走吧。寻找者。'他走向船舱。'去沙漠。找X。也找我们自己的答案。'他没回头。但你听到他在笑。",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('hunter_joined'); addTrait('companion'); },
        choices: [
            { text: "出发！", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    // ========== 酒馆 ==========
    "bebop_cantina": {
        text: "酒馆。爵士乐。蓝调。空气里有什么东西在流淌。可能是萨克斯。可能是孤独。一个紫色短发的女人坐在吧台前。酒。看起来很烈。她没看你。但你知道她在看你。'又一个迷路的人。'她说。声音沙哑。像威士忌。像烟。'在这个宇宙里。迷路。'她喝了一口。'是常态。'",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "我在寻找X", next: "bebop_pilot_x" },
            { text: "你是谁？", next: "bebop_pilot_who" },
            { text: "给我一杯酒", next: "bebop_drink_together" }
        ]
    },

    "bebop_pilot_x": {
        text: "眼神。变了。'X？'她把酒杯转了一圈。'那个穿越世界的女人。她欠我钱。'喝了一口。'开玩笑的。'不是开玩笑。'她帮我修了引擎。作为交换。我告诉她关于时间之门的事。沙漠。那颗红色星球。'她放下杯子。'但我要警告你——那扇门不免费。它要你付代价。'顿了顿。'你最珍贵的东西。'",
        bg: "spaceStation",
        character: "spacePilot",
        onEnter: () => { addClue('gate_price'); },
        choices: [
            { text: "什么代价？", next: "bebop_gate_cost" },
            { text: "你为什么帮她？", next: "bebop_pilot_why_help" },
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_gate_cost": {
        text: "严肃。她放下杯子。'那扇门要的是记忆。'萨克斯停了。'你穿过它。就失去一段记忆。不是随机的。是你最珍贵的。'她看着酒杯。像在看一部旧电影。'X知道。但她还是要去。她说——\'如果放下最珍贵的东西能让我自由。那也许是值得的。\'她笑了。不是好笑。是那种——你知道自己也会做同样选择的笑。'",
        bg: "spaceStation",
        character: "spacePilot",
        onEnter: () => { addClue('gate_memory_cost'); addTrait('warned'); },
        choices: [
            { text: "我必须阻止她", next: "bebop_stop_x" },
            { text: "也许她是对的", next: "bebop_x_maybe_right" },
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_pilot_why_help": {
        text: "笑了。不是对别人。是对自己。'因为X让我想起了我。'她晃了晃杯子。'我也在逃。逃过去。逃一个没有幽灵的地方。'萨克斯又响了。'但X说——\'不能逃。只能共存。\'从那以后。我不逃了。我面对。'她看着你。'也许你也该试试。面对。比逃跑轻松。'她顿了顿。'其实不轻松。但是对。'",
        bg: "spaceStation",
        character: "spacePilot",
        onEnter: () => { addTrait('brave'); },
        choices: [
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } },
            { text: "你的过去是什么？", next: "bebop_pilot_past" }
        ]
    },

    "bebop_pilot_past": {
        text: "喝了一口。威士忌。不是水。'我的过去？'她笑了。苦涩的。'欠了一屁股债。被追杀了三年。三。年。'她伸出三根手指。'X帮我修了引擎。让我能跑。她说——\'每个人都需要一次重新开始。\'她给了我。所以我也想帮她。'她把杯子推过来。'但也许。重新开始不需要忘记。也许重新开始是——你记得一切。但你选择继续走。'",
        bg: "spaceStation",
        character: "spacePilot",
        onEnter: () => { addClue('pilot_debt'); },
        choices: [
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_drink_together": {
        text: "她倒了一杯。推过来。'来吧。陌生人。'酒液。琥珀色。在灯光下晃。'在这片宇宙里。能找到一个一起喝酒的人。'她举杯。'是难得的幸运。'碰杯。辛辣。温暖。像一首蓝调。'X也在这里喝过。'她说。'她说——\'最好的酒是和陌生人喝的。因为陌生人没有过去。\'她喝了一口。'但我觉得。她错了。最好的酒。是和记得你的人喝的。'",
        bg: "spaceStation",
        character: "spacePilot",
        onEnter: () => { addTrait('sociable'); },
        choices: [
            { text: "X去了哪里？", next: "bebop_pilot_x" },
            { text: "再来一杯", next: "bebop_another_drink" }
        ]
    },

    "bebop_another_drink": {
        text: "又几杯。她的故事像烟一样飘出来。赏金。追杀。太空漂流。有的故事是真的。有的不像。但没关系。你发现。在这个宇宙里。每个人都有自己的歌。蓝调。爵士。有的还没写完。X只是一个缩影——一个在无限宇宙里。寻找一首歌的旅人。她的歌。还没到结尾。",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "X去了哪里？", next: "bebop_pilot_x" },
            { text: "我该走了", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    // ========== 沙漠星球 ==========
    "bebop_go_desert": {
        text: "降落。红色的星球。两个太阳。都在落下。整个沙漠烧成了金红色。像一首爵士的结尾。远处。废弃飞船零件搭成的酒馆。微弱的光。一闪一闪。像心跳。或者说。像心跳的回忆。沙尘。孤独。还有别的什么。你知道X在这里。不是看到。是感觉到。像一首还没吹完的萨克斯。在沙漠深处。等你。",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "前往废弃酒馆", next: "bebop_desert_cantina" },
            { text: "在沙漠中搜索", next: "bebop_desert_search", cost: { day: 1 } },
            { text: "等待", next: "bebop_desert_wait" }
        ]
    },

    "bebop_desert_cantina": {
        text: "门。推开。出奇地整洁。一个少年。护目镜。全息屏幕。手指在键盘上飞。像钢琴。爵士钢琴。即兴。周围飘着数据。图像。碎片。他注意到你。推了推护目镜。'哦！'他说。'又一个寻找者！'他笑了。'X说你会来。她说——\'告诉那个找我的人。我在等他。等他来和我一起。\'她让我在这里等你。'他顿了顿。'你来了。'",
        bg: "spaceShip",
        character: "spaceHacker",
        choices: [
            { text: "X在哪里？", next: "bebop_hacker_x_location" },
            { text: "你怎么知道我会来？", next: "bebop_hacker_know" },
            { text: "你在做什么？", next: "bebop_hacker_doing" }
        ]
    },

    "bebop_hacker_x_location": {
        text: "手指。指向全息屏幕。一个信号。一闪一闪。'X。在时间之门那边。'他放大。'看。她的位置。'然后他停下来。'但我要告诉你——那扇门。不稳定。如果她现在穿过。'他顿了顿。'不只是最珍贵的记忆。是所有的。所有。'他看着你。'你明白吗。她会忘记你。忘记一切。像一段被删掉的爵士独奏。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('x_at_gate'); addClue('gate_unstable'); },
        choices: [
            { text: "我必须阻止她", next: "bebop_rush_gate" },
            { text: "你能远程关闭它吗？", next: "bebop_hacker_shutdown" },
            { text: "也许这是她的选择", next: "bebop_respect_choice" }
        ]
    },

    "bebop_hacker_shutdown": {
        text: "键盘。飞。代码。像瀑布。他的手快得看不清。'我试试。'屏幕闪。'不行。生物特征锁。只有X能关。但是——'他停了一下。调出新界面。新参数。'我可以让它稳定一点。记忆损失减少。但功耗增加。'他抬头。'意思是她只有几分钟。不是几小时。'他看着你。'够吗。几分钟。去找到她。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('gate_stabilized'); },
        choices: [
            { text: "够了——我必须去阻止她", next: "bebop_rush_gate" },
            { text: "问她为什么这么做", next: "bebop_what_choice" }
        ]
    },

    "bebop_hacker_know": {
        text: "得意地笑了。不是骄傲。是那种——知道了秘密的小孩的笑。'我截获了她的通讯。'他说。'她说——\'告诉寻找我的人。我在时间之门等他。不是等他来阻止我。是等他来和我一起做选择。\'他推了推护目镜。'所以。你去吗。'不是问句。是。你已经知道答案了。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('x_waiting_choice'); },
        choices: [
            { text: "去", next: "bebop_rush_gate" },
            { text: "她要做什么选择？", next: "bebop_what_choice" }
        ]
    },

    "bebop_hacker_doing": {
        text: "兴奋。眼睛发光。'我在监控时间之门！'他指着屏幕。一道蓝色的光柱。连接着所有世界。'这扇门。连着所有地方。但它正在崩溃。'他顿了顿。'如果不稳住。所有通道都会永久关闭。X知道。所以她要去手动稳住它。'声音低下来。'但代价。是她的记忆。她要用自己的记忆。去修一扇门。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('gate_collapsing'); },
        choices: [
            { text: "我去帮她", next: "bebop_rush_gate" },
            { text: "有别的办法吗？", next: "bebop_alt_solution" }
        ]
    },

    "bebop_alt_solution": {
        text: "思考。手指在键盘上飞舞。像萨克斯手的即兴。'等等。如果两个人同时。'他停了一下。'记忆的代价可以分担。每人付一部分。不是全部。'他抬头。'需要两个人。同时操作。'他看着你。'你愿意吗。付一半。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('shared_cost_solution'); addTrait('clever'); },
        choices: [
            { text: "我愿意", next: "bebop_rush_gate" },
            { text: "失去记忆太可怕了", next: "bebop_fear_memory" }
        ]
    },

    "bebop_fear_memory": {
        text: "认真。他摘下护目镜。'害怕。正常的。'他说。'记忆。是我们最珍贵的东西。'屏幕上的蓝光映在他脸上。'但X说过——\'有些东西比记忆更重要。比如未来。\'他顿了顿。'如果你不去。她会失去所有。所有记忆。你愿意让她一个人付这个代价吗。'不是问句。是。你已经知道答案了。'",
        bg: "spaceShip",
        character: "spaceHacker",
        choices: [
            { text: "不愿意", next: "bebop_rush_gate" },
            { text: "我需要想想", next: "bebop_think_memory" }
        ]
    },

    "bebop_think_memory": {
        text: "全息屏幕。X的蓝色信号。一闪一闪。像心跳。你闭上眼睛。回忆涌上来。不是连续的。是碎片。花园的雾。图书馆的书。迷宫的墙。城市。江湖。梦境。中土。这些碎片。拼成了你。但如果失去它们能救X。如果。你睁开眼睛。蓝色信号还在闪。等着你的答案。",
        bg: "spaceShip",
        character: null,
        choices: [
            { text: "我愿意", next: "bebop_rush_gate" },
            { text: "我不能", next: "ending_bebop_coward" }
        ]
    },

    "ending_bebop_coward": {
        text: "你选择了不去。时间之门崩溃了。不是爆炸。是安静地。像一首歌突然停了。X被发现。在沙漠里。茫然望着天空。不知道自己的名字。不知道自己从哪里来。你站在远处。看着她。不是不想走近。是不知道走近了能说什么。遗憾。像沙漠里的风。吹过来。吹过去。永远不停。游戏结束。",
        bg: "spaceDesert",
        character: null,
        ending: true,
        endingTitle: "懦夫",
        endingDescription: "你选择了安全，失去了X。"
    },

    // ========== 时间之门 ==========
    "bebop_rush_gate": {
        text: "冲。沙漠。沙子在脚下。像时间。你跑。黑客少年的声音在通讯器里。指引。左。右。前进。然后你看到了。巨大的蓝色光柱。从沙漠里升起。连接着天空和大地。像一根萨克斯的管子。吹着只有宇宙能听到的音符。在光柱底部。X。手放在门上。闭着眼睛。像在祈祷。像在回忆。",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "冲上去", next: "bebop_gate_confront" },
            { text: "呼唤她", next: "bebop_gate_call" },
            { text: "慢慢走近", next: "bebop_gate_approach" }
        ]
    },

    "bebop_gate_call": {
        text: "你喊出她的名字。名字飘在风里。被沙尘裹住。她睁开眼睛。看到你。惊讶。然后微笑。不是开心的笑。是那种——终于。'你来了。'她的声音在风中。轻得像烟。'我说过我会等你。不是等你来阻止我。是等你来。和我一起。'她伸出手。'你准备好了吗。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "我准备好了", next: "bebop_gate_ready" },
            { text: "不要穿过那扇门", next: "bebop_gate_stop" },
            { text: "我们一起做选择", next: "bebop_gate_together" }
        ]
    },

    "bebop_gate_ready": {
        text: "她伸出手。蓝色的光映在手上。像爵士乐里的一个音符。悬在空中。'让我们一起。稳住这扇门。'她说。'代价是记忆。我们的记忆。但黑客少年说。两个人。可以分担。'她看着你。蓝光在眼睛里。'我们会失去一些。不是全部。还会记得最重要的。'手。伸着。'你愿意。和我一起吗。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "我愿意", next: "ending_bebop_sacrifice" },
            { text: "有别的办法吗？", next: "bebop_no_other_way" }
        ]
    },

    "ending_bebop_sacrifice": {
        text: "两只手。放在门上。蓝光。万丈。像一首爵士的即兴。爆炸式的。记忆在流失。像沙漏。花园的雾。散了。图书馆的书。合上了。迷宫的墙。倒了。但有些东西。留下来。X的脸。她的微笑。你为什么寻找她。当光芒消散。时间之门。稳住了。你看着她。她也看着你。'你还记得我吗。'她问。你微笑。'永远记得。'游戏结束。",
        bg: "spaceDesert",
        character: null,
        ending: true,
        endingTitle: "共享的代价",
        endingDescription: "你和X一起付出了记忆的代价，但最重要的东西留了下来。"
    },

    "bebop_gate_stop": {
        text: "悲伤。在她的眼睛里。不是愤怒。不是失望。是悲伤。像一首蓝调。'你不明白。'她轻声说。'如果我不稳住这扇门。所有通道。都会关。不只是我们。是所有寻找者。都会困在自己的世界里。'她看着门。'我必须做。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "那我和你一起", next: "bebop_gate_ready" },
            { text: "一定有别的办法", next: "bebop_no_other_way" }
        ]
    },

    "bebop_no_other_way": {
        text: "她摇头。不是拒绝。是。没有别的办法了。'时间之门。正在崩溃。'她说。'只有记忆能稳住它。'蓝光在脸上。'但我们两个人。可以分担。你不会失去所有。只是部分。'她看着你。'你还愿意吗。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "我愿意", next: "ending_bebop_sacrifice" },
            { text: "我不能失去记忆", next: "ending_bebop_coward" }
        ]
    },

    "bebop_gate_together": {
        text: "微笑。终于。'一起做选择。'她说。'这是最好的答案。不是一个人。是两个人。'蓝光包裹着你们。'来吧。寻找者。让我们看看。'她的手放在门上。'我们的记忆。能换回什么。'你的手。也放上去。",
        bg: "spaceDesert",
        character: null,
        onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('cowboy_bebop'); },
        choices: [
            { text: "稳定时间之门", next: "ending_bebop_sacrifice" }
        ]
    },

    "bebop_gate_confront": {
        text: "冲上去。抓住她的手。睁开眼睛。惊讶。'你。怎么来了。'你喘着气。'不会让你一个人。'她看着你。泪水。不是悲伤。是那种——终于有人在的泪水。'你这个傻瓜。'她轻声说。'但也许。'她握紧你的手。'这就是我等你的原因。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "一起稳定时间之门", next: "ending_bebop_sacrifice" }
        ]
    },

    "bebop_gate_approach": {
        text: "慢慢走。沙地上。脚印。每一步。都陷下去。像时间。她感觉到了。没转身。'我知道你在那里。'她说。'一直在等。不是为了阻止。是为了。一起。'她的肩膀微微动了一下。'你准备好了吗。'",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "我准备好了", next: "bebop_gate_ready" },
            { text: "不要这样做", next: "bebop_gate_stop" }
        ]
    },

    // 补充场景
    "bebop_no_past": {
        text: "烟。吐出来。一缕。'没有过去的地方。'他说。'也许不存在。'他弹掉烟灰。'X说——\'过去不是地点。是记忆。你去哪它都跟着。唯一的办法。是接受过去。然后选择不被它定义。\'他看着烟。'也许她是对的。也许我们都该学学。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addTrait('accepting'); },
        choices: [
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_keep_beautiful": {
        text: "他看着你。'美好的记忆。不该放下。'他说。'但X说——\'放下不是忘记。是接受。接受过去已经过去。然后选择活在当下。\'他顿了顿。'也许这就是她要做的。不是忘记。是接受。然后继续走。像一首爵士。切分音。呼吸。然后下一个音符。'",
        bg: "spaceStation",
        character: "bountyHunter",
        choices: [
            { text: "带我去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_let_go": {
        text: "沉默。'放下。'他说。'也许你是对的。'他弹掉烟。'但放下和放弃。不一样。X说——\'放下是接受过去的重量。然后继续走。放弃是被重量压倒。然后停住。\'他点燃新烟。'她选择放下。不是放弃。这需要勇气。比放弃更需要勇气。'",
        bg: "spaceStation",
        character: "bountyHunter",
        choices: [
            { text: "我明白了", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_stop_x": {
        text: "她看着你。'阻止她？'喝了一口。'先问问自己。你是在保护她。还是在限制她。'放下杯子。'X知道代价。她选了。也许你该尊重。'顿了顿。'但也许。她也希望你在那里。不是阻止。是一起。'她看着你。'有些事一个人做。太孤独了。'",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "我要和她一起", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_x_maybe_right": {
        text: "点头。'也许她是对的。放下最珍贵的东西。才能自由。'她晃了晃杯子。'但也许。真正的自由不是放下。是接受。接受过去。接受记忆。然后选择不被它们绑住。'她站起来。'去吧。寻找者。找到X。也找到你自己的答案。'她顿了顿。'每个人的答案都不一样。但每个人都得去找。'",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_see_ship": {
        text: "三号泊位。Bebop号。破旧。但有个性。拉面杯。乐器。乱七八糟。但有一种奇怪的温馨。像家。像一首跑了调的爵士。但你还是想听完。'不漂亮。'赏金猎人说。'但可靠。'他拍了拍船壳。'就像人生。你永远不知道下一次启动会不会熄火。但你还是会启动。'",
        bg: "spaceShip",
        character: "bountyHunter",
        choices: [
            { text: "出发去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_desert_search": {
        text: "沙漠。脚印。通向远方。沙丘。沙丘。还是沙丘。然后你看到了。蓝色的光柱。时间之门。旁边。一个通讯器。闪烁。你捡起来。她的声音。'寻找者。如果你听到这个。说明你快到了。'停顿。'我在门的那边等你。或者。我在门的这边等你。'她笑了。你能听到。'无论如何。我都在等你。'",
        bg: "spaceDesert",
        character: null,
        onEnter: () => { addClue('x_message'); },
        choices: [
            { text: "冲向时间之门", next: "bebop_rush_gate" }
        ]
    },

    "bebop_desert_wait": {
        text: "等待。双日落下。星星出来。一颗。两颗。寂静。然后。爵士乐。从远处。像幽灵在演奏。你跟着。穿过沙丘。穿过黑暗。然后。时间之门。X站在那里。闭着眼睛。在听。'你来了。'她说。没睁眼。'音乐带你来的。对吗。'不是问句。是。",
        bg: "spaceDesert",
        character: null,
        choices: [
            { text: "是的", next: "bebop_gate_call" }
        ]
    },

    "bebop_respect_choice": {
        text: "他看着你。'你尊重她的选择。'他说。'也许。这是最成熟的做法。'他顿了顿。'但X说——\'我希望你在那里。不是为了阻止。是为了和我一起。\'他看着屏幕。'她说——\'有些事情。一个人做。太孤独了。\'",
        bg: "spaceShip",
        character: "spaceHacker",
        choices: [
            { text: "那我去", next: "bebop_rush_gate" },
            { text: "我尊重她的选择", next: "ending_bebop_respect" }
        ]
    },

    "ending_bebop_respect": {
        text: "你选择尊重。站在远处。看着她。手放上去。蓝光。万丈。宇宙在颤抖。不是地震。是那种——一首歌最高潮时的颤抖。当光芒消散。门。稳住了。她转过身。看着你。微笑。但那个微笑里。有些东西。不同了。她不记得你了。你站在沙漠里。看着她。背影。渐渐远去。像一首歌的结尾。渐弱。渐弱。然后。寂静。游戏结束。",
        bg: "spaceDesert",
        character: null,
        ending: true,
        endingTitle: "尊重与失去",
        endingDescription: "你尊重了X的选择，但也失去了她。"
    },

    "bebop_what_choice": {
        text: "歪着头。他说。'她说——\'我要做一个选择。放下过去。继续走。还是被过去困住。永远停在这里。\'他推了推护目镜。'时间之门。给了她这个机会。但她说——\'我不想一个人做这个选择。\'他看着你。'所以她在等你。去吧。寻找者。和她一起。做选择。'",
        bg: "spaceShip",
        character: "spaceHacker",
        onEnter: () => { addClue('x_choice_meaning'); },
        choices: [
            { text: "去", next: "bebop_rush_gate" }
        ]
    },

    "bebop_pilot_who": {
        text: "笑了。'菲。'她说。'最好的飞行员。最差的赌徒。'她晃了晃酒杯。'在这个宇宙里。我欠了太多债。追了太多赏金。但X。'她顿了顿。'改变了我。她说——\'不要活在过去的阴影里。活在当下。因为当下。是你唯一拥有的。\'所以她活在当下。我活在当下。'她看着你。'你呢。'",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "我在寻找X", next: "bebop_pilot_x" },
            { text: "我也活在当下", next: "bebop_live_now" }
        ]
    },

    "bebop_live_now": {
        text: "笑了。'好答案。'她说。'活在当下。X教我的最重要的一课。'她喝完最后一口。'去吧。寻找者。找到X。然后一起。活在当下。'她放下杯子。'因为过去。已经过去。未来。还没来。只有当下。'她顿了顿。'是真实的。'",
        bg: "spaceStation",
        character: "spacePilot",
        choices: [
            { text: "去沙漠", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_find_ship": {
        text: "找船。赏金猎人。靠在墙上。烟。没点。'找船？'他说。'Bebop号。三号泊位。不快。不漂亮。但还能飞。'他看了你一眼。'去哪。'",
        bg: "spaceStation",
        character: "bountyHunter",
        choices: [
            { text: "去沙漠星球", next: "bebop_go_desert", cost: { day: 1 } },
            { text: "先聊聊", next: "bebop_hunter_ask" }
        ]
    },

    // ========== 新增：Bebop号船内探索 ==========
    "bebop_ship_tour": {
        text: "Bebop号。登船。船舱。杂乱。温暖。旧杂志堆在角落。厨房里煮着速食面。一只柯基犬。摇着尾巴。叫Ein。'Bebop号。'赏金猎人说。'我们的家。'他顿了顿。'也是我们的牢笼。'厨房里探出一个光头。锅铲。'别听Spike胡说。'Jet说。'没有豪华餐厅。但至少。'他拍了拍锅铲。'它不会背叛你。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addTrait('curious'); },
        choices: [
            { text: "打开储物柜", next: "bebop_locker", trait: "curious" },
            { text: "和Jet聊聊", next: "bebop_jet_talk", trait: "empathetic" },
            { text: "回到驾驶舱", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_locker": {
        text: "储物柜。打开。X留下的东西。一张褪色的照片。一本破旧的笔记本。一条围巾。照片上。花园。和你记忆中的那个。一模一样。笔记本翻开。写着：'Jet说过去的重量不会消失。但你可以选择什么时候背起它。'下一页。'我选择现在。'围巾。你拿起来。熟悉的香味。像一首老歌。像一段回不去的时光。",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('x_bebop_locker'); addTrait('contemplative'); },
        choices: [
            { text: "翻看笔记本", next: "bebop_jet_talk" },
            { text: "收起围巾", next: "bebop_go_desert", cost: { day: 1 } }
        ]
    },

    "bebop_jet_talk": {
        text: "锅铲。放下。擦手。'X？'他陷入回忆。'在这里。三天。几乎不说话。'他顿了顿。'有一天晚上。她突然问我——\'Jet。你失去手臂后。花了多久。才接受自己。\'我告诉她。'Jet看着锅铲。'我还在接受。每一天。都是。'然后她笑了。第一次。'他说。'她说——\'也许答案就是。永远不要完全接受。留一点遗憾。才能继续向前走。''他抬起头。'我到现在。还在想这句话。'",
        bg: "spaceStation",
        character: "bountyHunter",
        onEnter: () => { addClue('x_jet_wisdom'); addTrait('self_aware'); },
        choices: [
            { text: "这很像X", next: "bebop_go_desert", cost: { day: 1 } },
            { text: "Jet是怎么失去手臂的？", next: "bebop_jet_talk" }
        ]
    }
};

// 不直接合并到 SCRIPT，让 chapters-compat.js 自动转换格式
// if (typeof SCRIPT !== 'undefined') {
//     Object.assign(SCRIPT, COWBOY_BEBOP_SCRIPT);
// }
