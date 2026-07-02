// 金庸江湖章节 - 武侠世界风格
// 主题：江湖恩怨、侠义精神、命运与自由

const WUXIA_SCRIPT = {
    // ========== 入口 ==========
    "wuxia_entrance": {
        text: "门是旧的。旧得像百年前一句未曾兑现的诺言。推开门的刹那，你听见了江湖——不是刀剑的嘶鸣，是烟雨敲打青瓦，是远处酒楼里不知名的歌女在唱：「问世间情为何物，直教人生死相许。」山巅之上，古刹隐于云雾之间，恍若不在人间；近处酒肆中，剑光与人声交织，酒香与墨香共流。一个白衣剑客自你身侧掠过，他的剑未曾出鞘，他的眼中却有和你一样的东西——寻找。",
        bg: "wuxiaTavern",
        character: null,
        choices: [
            { text: "进入酒肆打听消息", next: "wuxia_tavern_enter" },
            { text: "前往山上的门派", next: "wuxia_mountain_path", cost: { day: 1 } },
            { text: "去竹林深处", next: "wuxia_bamboo_path", cost: { day: 1 } }
        ]
    },

    // ========== 酒肆 ==========
    "wuxia_tavern_enter": {
        text: "推开酒肆的木门，一股热浪裹着酒气扑面而来。江湖人三三两两，有的拔剑论武，有的低语密谋。角落里，一个红衣女子独坐，纤指拨动古琴，琴声如泣，如诉，如一场下了很久的雨。她的目光从你身上掠过，只一瞬——却像看了一生。",
        bg: "wuxiaTavern",
        character: "courtesan",
        choices: [
            { text: "走向红衣女子", next: "wuxia_courtesan_talk" },
            { text: "向酒保打听X", next: "wuxia_barkeeper_ask" },
            { text: "找个角落坐下观察", next: "wuxia_tavern_observe" }
        ]
    },

    "wuxia_courtesan_talk": {
        text: "琴声停了。红袖抬眸，声音如泉水淌过石隙：「又一个寻找者。」她不必问，便已知道。「你在找一个叫X的女人。」你心中一惊。她微笑：「江湖之中，消息比剑快。她来过，留下了这首曲子。也留下了你。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('x_song'); addTrait('musical'); },
        choices: [
            { text: "什么曲子？", next: "wuxia_courtesan_song" },
            { text: "她去了哪里？", next: "wuxia_courtesan_where" },
            { text: "你是谁？", next: "wuxia_courtesan_who" }
        ]
    },

    "wuxia_courtesan_song": {
        text: "红袖重新拨弦。一段旋律自指尖流淌——悲而不伤，美而不艳，像有人在告别，又像有人在等。她轻声道：「此曲名为『寻』。X说，寻找不是终点，是一种存在。她说，把这曲子留给下一个寻找她的人。」她抬眸看你。「那人就是你。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('x_philosophy'); addTrait('artistic'); },
        choices: [
            { text: "她说了什么？", next: "wuxia_courtesan_message" },
            { text: "她去了哪里？", next: "wuxia_courtesan_where" },
            { text: "弹完这首曲子", next: "wuxia_listen_song" }
        ]
    },

    "wuxia_courtesan_message": {
        text: "琴声戛然而止。红袖垂眸，仿佛在回忆什么遥远的事。良久，她方开口：「她说——『告诉寻找我的人：江湖很大，心更大。莫被恩怨缚了手脚，莫被仇恨遮了眼睛。真正的侠，是先找到自己，再助人找到他们自己。』」她凝视着你。「你明白吗？」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('x_xia_philosophy'); },
        choices: [
            { text: "她是在说侠义", next: "wuxia_xia_meaning" },
            { text: "她是在说自由", next: "wuxia_freedom_meaning" },
            { text: "我不确定", next: "wuxia_uncertain" }
        ]
    },

    "wuxia_courtesan_where": {
        text: "「竹林深处。」红袖指向窗外，烟雨之中，一片青翠若隐若现。「那里住着一位前辈。据说，他知道这江湖中所有的秘密。X去寻他，想求一个答案——关于她为何要穿越这些世界，关于她的命。」她顿了顿。「也关于你的。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('x_seeking_master'); },
        choices: [
            { text: "带我去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "那个老前辈是谁？", next: "wuxia_courtesan_master" },
            { text: "先在这里打听更多", next: "wuxia_barkeeper_ask" }
        ]
    },

    "wuxia_courtesan_who": {
        text: "「我叫红袖。」她微微一笑，笑容里有风霜，也有释然。「曾是这江湖上最有名的琴师。但X来过后，一切都不一样了。她告诉我——」红袖低头，指尖轻抚琴弦。「音乐不只是悦耳，也是一种寻找。寻找自己，寻找真相。如今我用琴声帮助寻找者，如她曾助我。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('red_sleeve_story'); },
        choices: [
            { text: "她怎么帮你的？", next: "wuxia_red_sleeve_helped" },
            { text: "告诉我X去了哪里", next: "wuxia_courtesan_where" }
        ]
    },

    "wuxia_red_sleeve_helped": {
        text: "红袖的目光飘向窗外，仿佛在看很远的地方。「我曾困在这酒肆中。」她顿了顿。「不是被锁链。是被恐惧。怕外面的江湖，怕未知。X来了，听了我一曲，只说了一句话——」她转过头，眼中似有泪光。「『你的琴声中有翅膀，为何将自己关在笼中？』从那以后，我便不再怕了。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addTrait('inspired'); },
        choices: [
            { text: "她去了哪里？", next: "wuxia_courtesan_where" },
            { text: "你愿意帮我吗？", next: "wuxia_red_sleeve_help" }
        ]
    },

    "wuxia_red_sleeve_help": {
        text: "红袖起身。衣袖拂过琴弦，发出一声轻响，像一声叹息，又像一个承诺。「当然。X助我，我助你。但有一言相告——竹林深处那位前辈，不轻易见客。须得过他的考验。」她从袖中取出一支玉笛，莹润如月。「带上它。这是我最好的乐器。也许，它能替你开口。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addClue('jade_flute'); addTrait('equipped'); },
        choices: [
            { text: "谢谢，出发去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "先去山上", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_barkeeper_ask": {
        text: "酒保擦着杯子，头也不抬。那只杯子已被他擦了不知多少遍，仿佛擦的不是杯，是岁月。「X？那个奇怪的女人？」他终于放下杯子。「她在这儿喝了一碗酒，只说了六个字——『江湖路远，不如归去。』然后便走了。有人见她往竹林方向去了。」他抬起眼，目光浑浊却透亮。「年轻人，在这江湖里，最重要的不是武功。是心。」",
        bg: "wuxiaTavern",
        character: null,
        onEnter: () => { addClue('x_went_bamboo'); },
        choices: [
            { text: "去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "和红衣女子聊聊", next: "wuxia_courtesan_talk" }
        ]
    },

    "wuxia_tavern_observe": {
        text: "你独坐角落，静观。一个白衣剑客入了你的眼——他独自饮酒，杯中有影，眼中无人。那种孤独，你认得。因为你也一样。忽然，他起身，向你走来。步履不疾不徐，像他的剑，稳，准。「你也在寻找。」他说。不是问句。「在这江湖里，寻找者能认出寻找者。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        choices: [
            { text: "你在寻找什么？", next: "wuxia_swordsman_quest" },
            { text: "你见过X吗？", next: "wuxia_swordsman_x" },
            { text: "你是谁？", next: "wuxia_swordsman_who" }
        ]
    },

    "wuxia_swordsman_quest": {
        text: "白衣剑客坐下，自斟一杯。酒入喉，话出口。「我在找一个人。和你一样。但我要找的人——」他放下酒杯，手指在桌上轻叩，像叩一扇永远不会开的门。「已经不在了。一场江湖恩怨，她被卷入其中，从此消失。我走遍天涯，只为寻她一丝痕迹。」他抬眼，目光如剑。「也许这就是江湖——每个人都在找，但不是每个人都能找到。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('swordsman_quest'); addTrait('empathetic'); },
        choices: [
            { text: "你找到她了吗？", next: "wuxia_swordsman_found" },
            { text: "你见过X吗？", next: "wuxia_swordsman_x" },
            { text: "我们可以一起找", next: "wuxia_swordsman_team" }
        ]
    },

    "wuxia_swordsman_x": {
        text: "白衣剑客眼中一亮。那光芒，像剑锋映月。「X？我见过她。三天前，就在这里。」他指向靠窗的座位。「她给我讲了一个故事——关于一个人，在无数世界中寻找。她说：『寻找的终点不是找到，是理解。理解你为何要寻找。』」他顿了顿。「然后她便走了。去了竹林深处。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('x_swordsman_meeting'); },
        choices: [
            { text: "她说了更多吗？", next: "wuxia_swordsman_more" },
            { text: "一起去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "你愿意帮我吗？", next: "wuxia_swordsman_help" }
        ]
    },

    "wuxia_swordsman_team": {
        text: "白衣剑客望着你，很久。然后他笑了——那是他第一次笑，笑容很淡，淡得像月光，却暖。「一起？在这孤独的江湖里，有人愿意同行，便是最大的运气。」他举杯，一饮而尽。「好。我们一起去竹林，一起去寻我们的答案。也许在路上——」他放下杯。「我们都能找到各自要找的东西。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('swordsman_ally'); addTrait('companion'); },
        choices: [
            { text: "出发！", next: "wuxia_bamboo_path", cost: { day: 1 } }
        ]
    },

    // ========== 竹林 ==========
    "wuxia_bamboo_path": {
        text: "踏入竹林，尘嚣顿消。风过处，万竿齐吟，飒飒如天籁。月光自竹叶间漏下，碎了一地银白。与外间的刀光剑影不同，这里只有静——一种深不见底的静。竹林深处，一方小亭。亭中，一个白发老者正在下棋。对面无人。他仿佛在与一个看不见的对手对弈，又仿佛在与自己对弈。",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "上前请教", next: "wuxia_master_approach" },
            { text: "观看他下棋", next: "wuxia_master_watch" },
            { text: "在竹林中寻找X的痕迹", next: "wuxia_bamboo_search" }
        ]
    },

    "wuxia_master_approach": {
        text: "你走近亭子。老者头也不抬，只说了两个字：「来了。」仿佛他已等了你三百年。「我等你很久了。坐。」你坐下，视线落于棋盘。黑白交错，层层叠叠，看似无解，又似有千般解法。老者落下一子，声如击玉。「这盘棋——」他缓缓道，「便是你的旅途。每一步，都是选择。每一个选择，都关乎全局。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "X来过这里吗？", next: "wuxia_master_x" },
            { text: "这盘棋怎么解？", next: "wuxia_master_chess" },
            { text: "你是谁？", next: "wuxia_master_who" }
        ]
    },

    "wuxia_master_x": {
        text: "老者终于抬起头。他的眼睛清澈如水——不是少年的清澈，是历经沧桑之后的澄明。「X来过。与我对弈了三天三夜。」他拈起一枚白子，置于棋盘中央。「她问了我一个问题：『在这江湖之中，何为真正的自由？』」老者停顿良久，仿佛那三日三夜的话，都凝在这片刻的沉默里。「我告诉她，自由不是没有束缚。自由，是选择你的束缚。」他看向你。「她想了很久。然后笑了。她说：『我明白了。』便走了。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addClue('x_freedom'); addTrait('seeker_of_truth'); },
        choices: [
            { text: "她去了哪里？", next: "wuxia_master_x_where" },
            { text: "什么是真正的自由？", next: "wuxia_freedom_explain" },
            { text: "她明白了什么？", next: "wuxia_master_x_realization" }
        ]
    },

    "wuxia_master_x_where": {
        text: "「她去了山顶。」老者抬手指向云深处。「那里有一扇门，通往下一个世界。但她说不急着走。她说，想在江湖中再待一会儿。」他收回手，又落下一子。「因为她在这里，学到了一些重要的东西。」他望着你，目光深远。「也许——她还在等你。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addClue('x_waiting'); },
        choices: [
            { text: "去山顶找她", next: "wuxia_mountain_path", cost: { day: 1 } },
            { text: "她学到了什么？", next: "wuxia_master_x_learned" }
        ]
    },

    "wuxia_master_chess": {
        text: "老者笑了。笑容很淡，淡得像茶盏里最后一缕茶烟。「这盘棋，没有唯一的解法。正如你的旅途，没有唯一的答案。」他拈起一枚棋子，却不落下。「X也问过同样的问题。她的答案是——」他将棋子轻轻放回棋盒。「『棋的解法不在于赢，在于你下棋时的态度。』」他望向你。「你该找到你自己的答案。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "我选择和棋", next: "wuxia_chess_draw" },
            { text: "我选择继续下", next: "wuxia_chess_continue" },
            { text: "我选择不下了", next: "wuxia_chess_stop" }
        ]
    },

    "wuxia_chess_draw": {
        text: "「和棋？」老者凝视着你，目光如炬，复又敛去，化作一丝笑意。「有趣。在这江湖之中，人人都求胜，日日争锋。却不知，和棋——才是最智慧的选择。」他拈起一枚棋子，在指尖转动。「和棋，意味着双方都得到了尊重，都得到了保留。X也选了和棋。不是她不能赢。是她不想让任何人输。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addTrait('peaceful'); if (typeof grantHiddenClue === 'function') grantHiddenClue('wuxia'); },
        choices: [
            { text: "去山顶找X", next: "wuxia_mountain_path", cost: { day: 1 } },
            { text: "继续和前辈聊聊", next: "wuxia_master_x" }
        ]
    },

    "wuxia_chess_continue": {
        text: "老者颔首。「继续下。继续选择。」他将棋盘向前一推，黑白棋子微微颤动，如风中竹叶。「这便是旅途的本质——不是到达终点，而是在路上，不断地做出选择。」他起身，负手而立。「去吧，寻找者。你的棋局，还在继续。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addTrait('persistent'); },
        choices: [
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_chess_stop": {
        text: "「不下了？」老者抚须而笑，笑声在竹林中回荡，如远山钟鸣。「这也是一种选择。有时候，最好的棋步，便是不下。」他目光深远，似在追忆。「X也说过类似的话：『有些仗不必打，有些棋不必下。真正的智慧，是知道何时该停。』」他顿了顿。「你懂了。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addTrait('wise'); },
        choices: [
            { text: "去山顶找X", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_master_x_realization": {
        text: "老者阖目，似在回味那三日三夜的棋局。「她明白了——」他睁开眼，目光如电。「也许她明白了寻找的真正意义。不是找到X，而是成为那个配得上找到X的人。不是抵达终点，而是成为配得上终点的自己。」他顿了顿，声音沉了下去。「她明白了——旅途本身，就是答案。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addClue('x_journey_truth'); addTrait('enlightened'); },
        choices: [
            { text: "那我呢？", next: "wuxia_what_about_me" },
            { text: "去山顶找她", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_what_about_me": {
        text: "老者望着你，眼中满是慈悲。那慈悲不是居高临下的怜悯，而是历经一切之后的懂得。「你？你也在旅途上。你也在成为。」他起身，负手立于亭边，月光为他披上一层银辉。「也许当你走到山顶，你会找到X。也许你会找到你自己。也许——」他转过身，微微一笑。「两者，本就是同一件事。去吧，寻找者。江湖在等你。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "出发", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    // ========== 山顶 ==========
    "wuxia_mountain_path": {
        text: "山道蜿蜒，拾级而上。云雾愈浓，仿佛每一步都踏在前世的梦里。松脂的清香混着山风，远处有古钟回荡，一声一声，像在数着你的脚步。山顶上，一座古旧的门派建筑静立云中。门前，一个身影——是X。她背对着你，望着云海翻涌，仿佛已站了很久。久到成了山的一部分。",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "走向她", next: "wuxia_x_mountain" },
            { text: "先观察", next: "wuxia_x_observe" },
            { text: "大声呼唤", next: "wuxia_x_call" }
        ]
    },

    "wuxia_x_mountain": {
        text: "你走向她。每一步，都踏在云上。她听见了你的足音，却没有转身。「我知道你会来。」她的声音在风中飘散，像从很远的地方传来，又像就在耳边。「我一直在这里等你。不是等你来找到我——」她终于转过身，微笑。「——是等你准备好。」她望着你，眼神清亮。「你准备好了吗？」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "我准备好了", next: "wuxia_x_ready" },
            { text: "我不知道", next: "wuxia_x_dont_know" },
            { text: "跟我走", next: "wuxia_x_come" }
        ]
    },

    "wuxia_x_ready": {
        text: "X伸出手。她的手停在半空，像一朵等待风的云。「那么，一起走吧。」她的声音很轻，轻得像山顶的雾气。「不是回到过去，也不是走向未来——是走在当下。在这江湖中，在所有的世界里，我们一起。」你握住她的手。那一瞬间，你感受到一种前所未有的平静——不是波澜不惊，而是风浪之中，心有所依。「这就是答案。」她说。「不是找到。是一起走。」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "一起走", next: "ending_wuxia_together" },
            { text: "去下一个世界", next: "wuxia_next_world" }
        ]
    },

    "ending_wuxia_together": {
        text: "你们并肩立于山巅，手牵着手，看云海翻涌如怒涛。风很大，吹动了你们的衣袂，吹不动你们的心。「在这江湖中——」X的声音穿过风声，清晰而坚定。「我学到了最重要的一课。侠，不是武功，不是门派。侠，是选择和谁一起走。」她转过头，望着你，眼中映着云海，也映着你。「我选择——和你一起走。无论前方是什么，无论还有多少世界。」你们一起走向那扇门。门的那边，是下一个冒险。江湖路远，但不再孤单。游戏结束。",
        bg: "wuxiaMountain",
        character: null,
        ending: true,
        endingTitle: "侠义同行",
        endingDescription: "你在江湖中找到了X，也找到了真正的侠义——与所爱之人同行。"
    },

    "wuxia_x_dont_know": {
        text: "X笑了。不是嘲笑，是一种懂得的笑。「不知道？这也许是最好的回答。」她望向远方，云海在她脚下沉浮。「真正的寻找者，从不假装知道一切。你只需继续走，继续选择。总有一天，你会明白的。」她转过身，背对着你，面向那扇门。「我在这里等你。无论多久。」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "我愿意等", next: "wuxia_x_wait" },
            { text: "我先去历练", next: "wuxia_next_world" }
        ]
    },

    "wuxia_x_wait": {
        text: "你走到她身边，并肩而立。沉默如山，却比千言万语更重。云海在脚下翻涌，风在耳边低语，而你们，只是站着。不需要言语，不需要答案，只需要在一起。也许这就是江湖教给你的最重要的一课——有时候，最好的行动是不动。最好的答案，是无言。",
        bg: "wuxiaMountain",
        character: null,
        onEnter: () => { addTrait('zen'); },
        choices: [
            { text: "就这样待着", next: "ending_wuxia_together" }
        ]
    },

    "wuxia_x_come": {
        text: "X望着你，眼中闪过一丝犹豫——那犹豫像风中的烛火，一闪即灭。「跟我走？去哪里？」你回答：「去任何地方。只要和你在一起。」X笑了。那笑容，是你记忆中见过的最美的光景。「好吧。」她伸出手。「但记住——在江湖中，路是自己走出来的。我们一起走，但每一步，都是我们自己的选择。」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "一起走", next: "ending_wuxia_together" },
            { text: "去下一个世界", next: "wuxia_next_world" }
        ]
    },

    "wuxia_x_observe": {
        text: "你隐于岩石之后，静静望着她。她站在山顶，山风吹动她的衣袂，如一朵开在云端的莲。她在做什么？她在笑。那笑容平静而满足，仿佛已找到了某种答案——某种你还在寻找的东西。你忽然觉得，那笑容像一面镜子，照见了你尚未抵达的地方。",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "走出去", next: "wuxia_x_mountain" },
            { text: "继续观察", next: "wuxia_x_watch_more" }
        ]
    },

    "wuxia_x_watch_more": {
        text: "你继续望着。X忽然开口，不是对你，是对着风，对着云，对着整座山：「寻找者，我知道你在那里。不必躲藏。」她的声音平静如水。「在这江湖中，没有秘密。来吧——让我们面对面，像真正的侠客。」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "走出去", next: "wuxia_x_mountain" }
        ]
    },

    "wuxia_x_call": {
        text: "你大声呼唤她的名字。声音在山谷间回荡，像投石入水，激起层层涟漪。她转过身，看见你，笑了——那笑容，仿佛已等了很久。「你终于来了。」她的声音穿过云雾，清晰地落在你耳中。「我等了你很久。不是因为我走不了——」她顿了顿，望向远方。「——是因为在这片江湖中，在这座山顶上，等待，也是一种修行。」",
        bg: "wuxiaMountain",
        character: null,
        choices: [
            { text: "走向她", next: "wuxia_x_mountain" }
        ]
    },

    "wuxia_next_world": {
        text: "你决定继续前行。下一个世界，下一个江湖。X的影子在你前方若隐若现，如雾中灯火，如夜半钟声，引着你，却不催促。你跨过门槛，身后是烟雨江湖，前方是未知旅途。青山不改，绿水长流。江湖再见。",
        bg: "wuxiaMountain",
        character: null,
        ending: { title: '江湖再见', desc: '你离开了这片烟雨江湖，但侠义的精神已在你心中扎根。X的琴声还在耳边回响，山顶的云雾还未散尽，而你的旅途才刚刚开始。' },
        choices: [
            { text: "进入下一个世界", next: "crossroads", cost: { day: 1 } }
        ]
    },

    // 补充场景
    "wuxia_xia_meaning": {
        text: "红袖颔首。「侠义……是的，X说的是侠义。」她低下头，指尖在琴弦上轻轻滑过，发出一声低吟。「但不是你想象的那种侠义——不是拔剑杀人，不是替天行道。」她抬眸望向你。「她说：『真正的侠，是助人找到他们自己。』她助了我。也许——」红袖的嘴角浮起一丝笑意。「她也在帮你找到你自己。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addTrait('xia'); },
        choices: [
            { text: "她去了哪里？", next: "wuxia_courtesan_where" },
            { text: "我需要找到自己吗？", next: "wuxia_find_self" }
        ]
    },

    "wuxia_freedom_meaning": {
        text: "「自由……」红袖沉吟良久，琴弦在她指尖微微颤动，却未出声。「也许吧。X说过：『自由，不是没有束缚。自由，是选择你的束缚。』」她望向窗外，烟雨迷蒙。「在这江湖中，每个人都被某些东西缚着——恩怨、仇恨、爱、使命。但真正的自由——」她转过头，目光坚定。「是选择你愿被什么缚着。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addTrait('free_spirit'); },
        choices: [
            { text: "我愿意被寻找束缚", next: "wuxia_courtesan_where" },
            { text: "她去了哪里？", next: "wuxia_courtesan_where" }
        ]
    },

    "wuxia_uncertain": {
        text: "红袖微笑。那笑容，像雨后初晴时第一缕阳光，不刺眼，却暖。「不确定，也没关系。」她轻轻拨了一下琴弦，一个单音在空气中飘荡，久久不散。「X说过：『寻找的意义，不在于确定，而在于不确定中继续前行。』」她抬手，指向竹林的方向。「去吧，寻找者。也许在那竹林的深处，你会找到你的答案。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        choices: [
            { text: "去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "她去了哪里？", next: "wuxia_courtesan_where" }
        ]
    },

    "wuxia_listen_song": {
        text: "你阖上双眼。琴声如流水，淌过你的心。你看见了X的影子——在每一个音符中跳跃，在每一个世界里的笑容，每一滴泪，每一次决绝。你看见了她，也看见了自己。当最后一个音符消散在空气中，你睁开眼，发现自己泪流满面。原来有些话，琴声说得比言语更清楚。",
        bg: "wuxiaTavern",
        character: "courtesan",
        onEnter: () => { addTrait('emotional'); addClue('x_memory_in_music'); },
        choices: [
            { text: "她去了哪里？", next: "wuxia_courtesan_where" },
            { text: "谢谢你的琴声", next: "wuxia_thank_red_sleeve" }
        ]
    },

    "wuxia_thank_red_sleeve": {
        text: "红袖微笑。那笑容里有释然，有祝福，有琴声未曾说尽的话。「不用谢。」她重新将手放在琴弦上。「记住，寻找者——音乐和寻找，是一样的。都是通往内心的旅途。」她开始弹琴，琴声如风，送你上路。「去吧。找到X。也找到你自己。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        choices: [
            { text: "去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_swordsman_found": {
        text: "白云摇头。他的摇头不是放弃，是一种更深的坚持。「没有。但我不会放弃。」他端起酒杯，望着杯中自己的倒影。「在这江湖中，放弃——不是选项。X也说过同样的话：『只要你不放弃，寻找就有意义。』」他一饮而尽。「所以我会继续走，继续找。也许有一天，我会找到她。也许不会。但至少——」他放下杯，眼神坚定。「我不会后悔。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addTrait('determined'); },
        choices: [
            { text: "你见过X吗？", next: "wuxia_swordsman_x" },
            { text: "一起走", next: "wuxia_swordsman_team" }
        ]
    },

    "wuxia_swordsman_more": {
        text: "白云的眼神飘远了，仿佛回到了三天前那个黄昏。「她还说了很多。」他顿了顿，一字一句地复述，像在背诵一本珍贵的剑谱。「她说：『江湖很大，但每个人的江湖，都是自己的。别让他人的故事，定义了你的故事。』」他嘴角微扬。「然后她给我倒了一杯酒，说：『喝吧。然后继续走。路在脚下。』」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('x_wuxia_wisdom'); },
        choices: [
            { text: "一起去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "各自上路", next: "wuxia_separate_ways" }
        ]
    },

    "wuxia_swordsman_help": {
        text: "白云望着你，很久。然后他点头——不重，但很稳。像他出剑前的最后一瞬。「好。我帮你找X。你帮我——」他顿了顿，声音低了下去。「——找到继续前行的勇气。」他站起身，白衣在烛光中微微发光。「在这江湖中，互相帮助，便是侠。走吧。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('swordsman_helper'); },
        choices: [
            { text: "出发", next: "wuxia_bamboo_path", cost: { day: 1 } }
        ]
    },

    "wuxia_swordsman_who": {
        text: "「我叫白云。」他说。这两个字从别人口中说出来，不过是寻常名字；从他口中说出来，却像一把剑的名字。「曾经——天下第一剑。」他顿了顿，手指无意识地抚过剑鞘。「但自从失去了她，我的剑就不再锋利了。我在找的，不是武功，是丢掉的东西。」他抬眸，目光如剑芒一闪。「不是她。是我自己。X说：『你失去的，不是她。是你曾经相信的东西。』也许她是对的。」",
        bg: "wuxiaTavern",
        character: "swordsman",
        onEnter: () => { addClue('bai_yun_story'); },
        choices: [
            { text: "你见过X吗？", next: "wuxia_swordsman_x" },
            { text: "一起走", next: "wuxia_swordsman_team" }
        ]
    },

    "wuxia_separate_ways": {
        text: "你们在酒肆门口各自转身。他向你抱拳，白衣在烟雨中渐渐模糊。「后会有期，寻找者。」他的声音从雨中传来，越来越远。「也许在某个世界的某个角落——我们会再相遇。」你看着他消失在烟雨中，像一滴墨落入江湖。你转身，继续你的旅途。",
        bg: "wuxiaTavern",
        character: null,
        onEnter: () => { addTrait('lone_wolf'); },
        choices: [
            { text: "去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_bamboo_search": {
        text: "你在竹林中细细搜寻。竹叶铺地，如一层枯黄的记忆。一串脚印，延伸向深处；一根断竹，切口整齐，似被利器划过。还有——一张纸条，夹在竹枝之间，被风吹得簌簌作响。展开，上面是熟悉的字迹：「寻找者，若你看到这个，说明你走对了方向。继续前行。答案在山顶。——X」",
        bg: "wuxiaBamboo",
        character: null,
        onEnter: () => { addClue('x_note'); },
        choices: [
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } },
            { text: "继续在竹林搜索", next: "wuxia_master_approach" }
        ]
    },

    "wuxia_master_watch": {
        text: "你静静立在一旁，看老者下棋。他的每一步都看似随意，落子无声，却暗藏千钧之势。你渐渐看出些门道——这不仅是棋，这是人生的缩影。每一步，都是选择。每一个选择，都有后果，如涟漪散开，波及全局。X一定也在这里，看过同样的棋，悟过同样的道。",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "上前请教", next: "wuxia_master_approach" },
            { text: "继续观察", next: "wuxia_master_watch_more" }
        ]
    },

    "wuxia_master_watch_more": {
        text: "老者忽然开口，声如老竹裂空：「看够了吗？」你一惊。他仍未抬头，手指却停在半空，一枚棋子悬而未落。「我知道你已站了很久。」他的声音平静如水。「在这竹林中，没有东西能逃过我的感知。」他终于放下棋子，转过头来。「来。坐。我们谈谈。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "坐下", next: "wuxia_master_approach" }
        ]
    },

    "wuxia_master_who": {
        text: "「我是谁？」老者笑了。那笑声里有一百年的风霜，也有一百年的释然。「我是这江湖的守护者，也是所有寻找者的引路人。X叫我——」他拈起一枚棋子，在指尖转动。「『棋翁』。因为我用棋，来引导迷失的人。」他抬眼看你。「你呢？你叫自己什么？」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "我叫寻找者", next: "wuxia_i_seeker_name" },
            { text: "我不知道我是谁", next: "wuxia_i_dont_know_name" }
        ]
    },

    "wuxia_i_seeker_name": {
        text: "「寻找者……」棋翁颔首，白须微动。「好名字。在这江湖中，名字不重要——重要的是，你做什么。」他落下一子，声如碎玉。「X也叫自己寻找者。但她后来发现，她不只是在寻找——她也是被寻找的人。」他望向你，目光深远。「也许——你也是。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "X来过这里吗？", next: "wuxia_master_x" }
        ]
    },

    "wuxia_i_dont_know_name": {
        text: "「不知道？」棋翁抚须，笑声如竹风过林。「这也许是最好的回答。知不知，方为知。知道自己不知道——才是智慧的开始。」他拈起一枚黑子，轻轻落下。「X也曾不知道自己是谁。但在这竹林中，她找到了答案。」他望向你。「也许——你也会。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "X来过这里吗？", next: "wuxia_master_x" }
        ]
    },

    "wuxia_freedom_explain": {
        text: "棋翁凝视棋盘，目光如穿越了千山万水。「自由……真正的自由，不是想做什么便做什么。那是任性，不是自由。」他落下一子，声如钟磬。「真正的自由，是知道自己想要什么——然后选择去追求它。」他抬眸。「X找到了她的自由——她选择继续寻找，即使不知终点在何处。这便是自由。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addTrait('free'); },
        choices: [
            { text: "我的自由是什么？", next: "wuxia_my_freedom" },
            { text: "去山顶找她", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_my_freedom": {
        text: "棋翁望着你，目光如古井，深不见底。「你的自由？只有你自己，能回答这个问题。」他沉默片刻，竹风穿过亭子，拂动他的白发。「但也许——也许你的自由，就是寻找本身。不是找到X，而是寻找X的过程。在这过程中——」他顿了顿，声音沉如暮鼓。「你成为了你自己。这，便是你的自由。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "我明白了", next: "wuxia_understand" },
            { text: "我还是不明白", next: "wuxia_still_confused" }
        ]
    },

    "wuxia_understand": {
        text: "棋翁微笑。那笑纹如水面涟漪，一圈一圈，荡开去。「你明白了。很好。」他站起身来，负手望向竹林深处。「X也明白了同样的事。去吧，寻找者。去山顶找她。告诉她——你明白了。」他转过身，眼中似有星光。「也许她会与你一起，继续这场寻找。不是为了找到答案——是为了享受寻找的过程。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "出发！", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_still_confused": {
        text: "「不明白，也无妨。」棋翁的声音很轻，轻得像竹叶落在水面。「有些事，需要时间来懂。有些路，需要走过才知。」他抬手指向山巅。「去吧，继续你的旅途。也许在路上，你会找到你的答案。X也曾困惑过——但她没有停下来。」他望着你，目光坚定。「你也不要停。」",
        bg: "wuxiaBamboo",
        character: "master",
        choices: [
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_master_x_learned": {
        text: "「她学到的——」棋翁阖目，似在回味那一盘下了三日三夜的棋。「是侠。不是武功中的侠，是心中的侠。她学会了助人找到他们自己，学会了在不确定中继续前行，学会了接受寻找本身的意义。」他睁开眼，目光澄澈如洗。「也许，这就是她在每个世界中寻找的东西——不是X。是成为更好的自己。」",
        bg: "wuxiaBamboo",
        character: "master",
        onEnter: () => { addClue('x_learned_xia'); },
        choices: [
            { text: "去山顶找她", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_find_self": {
        text: "红袖望着你，良久。「也许吧。」她轻叹一声，琴弦在她指尖微微颤动，发出一个低沉的音。「X说过：『每个人都在寻找某个东西——但他们真正寻找的，其实是自己。』」她站起身，红袖垂落。「也许，你需要先找到你自己，才能真正找到X。」她抬手，指向远方。「去吧，寻找者。江湖在等你。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        choices: [
            { text: "去竹林", next: "wuxia_bamboo_path", cost: { day: 1 } },
            { text: "去山顶", next: "wuxia_mountain_path", cost: { day: 1 } }
        ]
    },

    "wuxia_courtesan_master": {
        text: "「那位前辈？」红袖的神情变得肃然，仿佛提到了一个不该轻易提及的名字。「他是江湖传说中的棋翁——据说，已活了三百年。三百年，够看尽人间多少悲欢离合。」她顿了顿，声音更低了些。「他用棋引导迷失的人，用琴治愈受伤的心。X在他那里待了三天三夜——出来后，整个人都变了。更平静。更坚定。像一把剑，终于找到了自己的鞘。」",
        bg: "wuxiaTavern",
        character: "courtesan",
        choices: [
            { text: "去竹林找他", next: "wuxia_bamboo_path", cost: { day: 1 } }
        ]
    }
};

// 不直接合并到 SCRIPT，让 chapters-compat.js 自动转换格式
// if (typeof SCRIPT !== 'undefined') {
//     Object.assign(SCRIPT, WUXIA_SCRIPT);
// }
