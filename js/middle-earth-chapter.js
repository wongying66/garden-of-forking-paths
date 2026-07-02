// 中土世界章节 - 托尔金奇幻史诗风格
// 主题：使命与牺牲、善与恶的永恒斗争、希望在最黑暗处

const MIDDLE_EARTH_SCRIPT = {
    // ========== 入口 ==========
    "middleearth_entrance": {
        text: "那扇石门由上古工匠所雕，符文低语着世界尚且年轻时的传说。你跨过门槛——并非踏入一片土地，而是踏入一首尚未唱完的歌谣。远处，迷雾山脉如沉睡的巨人，白雪是它千年不醒的梦；近处，古森林在金色暮光中低语，每一片叶子都记得逝去之物的泪水。松脂与泥土的芬芳弥漫，还有某种比记忆更古老的气息——魔法，尚未被这世界遗忘。一个声音如远钟般在你耳畔响起：'寻找者，汝终于来了。这片土地守望已久，等待一个能改变命运之人。'",
        bg: "middleEarthForest",
        character: null,
        choices: [
            { text: "进入精灵古城", next: "middleearth_rivendell", cost: { day: 1 } },
            { text: "穿越黑暗之地", next: "middleearth_mordor_path", cost: { day: 1 } },
            { text: "寻找传说中的智者", next: "middleearth_wizard_search", cost: { day: 1 } }
        ]
    },

    // ========== 精灵古城 ==========
    "middleearth_rivendell": {
        text: "你来到隐于山谷深处的一座白城，瀑布自悬崖飞泻如银练，水晶之桥连接着座座塔楼，在暮光中熠熠生辉。精灵们在回廊间穿行，他们的歌声如风穿过千年古树的枝叶，带着一种既甜美又哀伤的音调——那是永生者才懂得的悲欢。一个身披银铠的精灵战士向你走来，她的眼眸如星辰般古老而明亮，仿佛其中沉淀着这世界所有的黎明与黄昏。",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "询问X的下落", next: "middleearth_elf_x" },
            { text: "询问这片土地的危机", next: "middleearth_elf_crisis" },
            { text: "请求庇护", next: "middleearth_elf_shelter" }
        ]
    },

    "middleearth_elf_x": {
        text: "精灵战士微微颔首，那动作轻如落叶触水。'X来过此地，在月圆之夜。她携来一物——一枚戒指，其上镌刻着连吾辈亦无法解读的符文。她言道，此戒乃通往一切世界尽头之钥。她已动身前往黑暗之地，欲将戒指投入末日火山。'她的声音沉了下去，如暮色中的钟声，'然而她不知晓，投入火山究竟意味着何等代价。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addClue('x_ring_bearer'); addTrait('quest_driven'); },
        choices: [
            { text: "投入火山意味着什么？", next: "middleearth_elf_volcano_meaning" },
            { text: "我必须去找她", next: "middleearth_go_mordor" },
            { text: "那枚戒指是什么？", next: "middleearth_elf_ring" }
        ]
    },

    "middleearth_elf_volcano_meaning": {
        text: "精灵战士的眼中掠过一丝悲伤，如秋日最后一片叶飘过湖面。'末日火山乃万界交汇之所。将戒指投入其中，便是关闭一切世界之间的通道。X将重归她来处，而你……汝亦将归返。然而代价是——汝二人，永世不得再相见。这便是牺牲的真意，寻找者。并非死去，而是永远相隔。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addClue('volcano_sacrifice'); addTrait('knowledge_burden'); },
        choices: [
            { text: "有没有其他办法？", next: "middleearth_alt_way" },
            { text: "我要阻止她", next: "middleearth_stop_x" },
            { text: "也许这是最好的结局", next: "middleearth_accept_fate" }
        ]
    },

    "middleearth_alt_way": {
        text: "精灵战士沉默了，那沉默如山谷中的回声久久不散。'有一条路，但极为凶险。若汝能在X之前抵达火山，便可以选择保留戒指。然而保留戒指意味着一切世界之间的通道永远敞开——包括黑暗势力入侵的通道。汝必须抉择：关闭通道以护佑万界，抑或保留通道以追寻X。两条路，皆通向不同的黎明。'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "我去阻止她", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "世界更重要", next: "middleearth_world_first" },
            { text: "我需要智者建议", next: "middleearth_wizard_search", cost: { day: 1 } }
        ]
    },

    "middleearth_stop_x": {
        text: "'汝欲阻止她？'精灵战士的面容变得复杂，如月光穿过云层。'汝可知这意味着什么？若X不将戒指投入火山，黑暗势力将借世界通道入侵。无数世界将在暗影中沦陷。但若汝阻止了她，汝与X至少仍可相守——在一个行将毁灭的世界里，等待最后的黄昏。'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "我不管，我要和她在一起", next: "middleearth_selfish_choice" },
            { text: "你说得对，我不能自私", next: "middleearth_selfless_choice" },
            { text: "一定有第三条路", next: "middleearth_third_way" }
        ]
    },

    "middleearth_selfish_choice": {
        text: "精灵战士望着你，眼中没有责备，唯有理解——那是永生者见惯了离别后才有的温柔。'爱，使人行疯狂之事，寻找者。但汝须铭记，真正的爱不是占有，而是尊重彼之所选。X选择了牺牲，也许汝应当尊重她的勇气。并非所有的离别都是失败，有些离别，是另一种形式的相守。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addTrait('selfish_love'); },
        choices: [
            { text: "你说得对", next: "middleearth_selfless_choice" },
            { text: "我还是要去", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_selfless_choice": {
        text: "精灵战士唇角浮现一丝微笑，那微笑如黎明前第一缕光，微弱却坚定。'汝做出了正确的选择，尽管这或许是最痛苦的选择。去吧，寻找者。也许在末日火山，汝将找到比关闭通道更好的答案。也许X亦在等待汝的到来——不是为了阻止她，而是为了陪伴她走完这最后一程。光明与汝同在。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addTrait('noble'); if (typeof grantHiddenClue === 'function') grantHiddenClue('middle_earth'); },
        choices: [
            { text: "出发去黑暗之地", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "先去找智者", next: "middleearth_wizard_search", cost: { day: 1 } }
        ]
    },

    "middleearth_third_way": {
        text: "'第三条路？'精灵战士沉思着，她的目光越过水晶塔楼，投向远方朦胧的山脉。'歌谣中确曾传唱一个古老的仪式，可将戒指之力分散至诸世界，而非关闭通道。但这仪式需两人同时施行——一人在火山之心，一人在精灵之城。汝与X……也许这便是汝等重逢的方式。命运之线，从未真正断裂。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addClue('third_ritual'); addTrait('hopeful'); },
        choices: [
            { text: "我去火山找她", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "我留在这里准备仪式", next: "middleearth_stay_ritual" }
        ]
    },

    // ========== 智者 ==========
    "middleearth_wizard_search": {
        text: "你来到古森林最深处，一棵巨树之下，一位白须老者正以枯枝在泥土中勾画着某种古老的图案。他抬起头，蓝光自他眼中闪烁，如深湖中倒映的星辰。'啊，寻找者。老朽已等候多时。坐下吧，让吾辈谈谈命运、抉择，以及那个你一直在寻找的——那个名字在你心中如火焰般燃烧的女子。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "你知道X在哪里？", next: "middleearth_wizard_x" },
            { text: "你是谁？", next: "middleearth_wizard_who" },
            { text: "告诉我关于戒指的事", next: "middleearth_wizard_ring" }
        ]
    },

    "middleearth_wizard_x": {
        text: "智者以枯枝在地上画了一个圆，那圆在泥土中微微发光，随即隐去。'X在末日火山，正在做她认为正确的事。但正确与善良，并非总是同一件事，寻找者。有时，为拯救世界，你必须牺牲最珍贵之物。X明白这一点，所以她选择了牺牲。而你——汝呢？'",
        bg: "middleEarthForest",
        character: "wizard",
        onEnter: () => { addClue('wizard_knows_x'); },
        choices: [
            { text: "我不想让她牺牲", next: "middleearth_wizard_no_sacrifice" },
            { text: "什么是正确的选择？", next: "middleearth_wizard_choice" },
            { text: "有没有不需要牺牲的办法？", next: "middleearth_wizard_no_cost" }
        ]
    },

    "middleearth_wizard_choice": {
        text: "智者长叹一声，那叹息如秋风穿过枯枝。'选择……这是世间最艰难之事。在这片土地上，没有完美的答案。每一个选择都有其代价——如同每一道光的背后，必有一片阴影。X选择了牺牲自己来关闭通道，你选择了寻找她。也许汝等之选择会冲突，也许会互补。但最终，选择本身比结果更为重要。因为正是选择，定义了我们是谁。'",
        bg: "middleEarthForest",
        character: "wizard",
        onEnter: () => { addTrait('philosophical'); },
        choices: [
            { text: "我要去找她，和她一起做选择", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "你有什么建议？", next: "middleearth_wizard_advice" }
        ]
    },

    "middleearth_wizard_advice": {
        text: "智者的眼中闪过一丝温暖，如冬日炉火。'老朽的建议？去找到她。不是为了阻止她，亦非为了帮助她，而是为了与她共同面对。有些事情，一个人无法承受——如同一个人无法扛起一座山。但两个人一起，即使末日，也可以变成一个新的开始。去吧，寻找者。命运在等待着你，而命运从不等待太久。'",
        bg: "middleEarthForest",
        character: "wizard",
        onEnter: () => { addClue('wizard_advice'); addTrait('guided'); },
        choices: [
            { text: "出发！", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_wizard_no_cost": {
        text: "智者笑了，但笑容中带着悲伤，如暮色笼罩远山。'没有代价的解决办法？在老朽漫长的岁月中，从未见过如此之事。每一个伟大的成就都需要牺牲——时间、精力，乃至生命本身。但也许……也许有一种代价是汝愿意支付的。那就是改变自己。并非改变世界，而是改变看世界的方式。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "改变自己？", next: "middleearth_wizard_change" },
            { text: "我愿意", next: "middleearth_wizard_willing" }
        ]
    },

    "middleearth_wizard_change": {
        text: "'若汝愿意改变自己，'智者缓缓说道，每一个字都如在称量其重量，'也许汝可成为那座桥梁——连接一切世界，而非关闭它们。但这意味着，汝将不再是一个寻常的寻找者，而将成为诸世界之间的守望者，永远在路途上，永远无法停留于任何一处。X可以回到她的世界，安然度日。而汝……汝将永远在诸世界之间漂泊，如风中的落叶，如海上的孤舟。'",
        bg: "middleEarthForest",
        character: "wizard",
        onEnter: () => { addClue('watcher_path'); },
        choices: [
            { text: "我愿意成为守望者", next: "ending_middleearth_watcher" },
            { text: "不，我要和X在一起", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "让我想想", next: "middleearth_wizard_think" }
        ]
    },

    "ending_middleearth_watcher": {
        text: "你接受了智者的提议，成为诸世界之间的守望者。古老的誓言在你血液中流淌，从此你守护着一切世界的通道，确保黑暗势力永无法入侵。X回到了她的世界，安全而安宁，在晨光中醒来，在星光下安眠。而你，在无数世界之间穿行，守护着她的安宁，如风守护着花朵。你偶尔会瞥见她——在某个世界的某个角落——但她看不见你。这就是你的选择：永远守望，永远沉默，永远不被看见。长夜漫漫，而你便是那守望黎明的眼睛。游戏结束。",
        bg: "middleEarthForest",
        character: "wizard",
        ending: true,
        endingTitle: "守望者",
        endingDescription: "你成为了世界之间的守护者，永远守护着X的安宁。"
    },

    // ========== 黑暗之地 ==========
    "middleearth_go_mordor": {
        text: "你踏上通往黑暗之地的道路。大地愈发荒芜，寸草不生，天空被黑云层层覆盖，硫磺的气味弥漫在灼热的空气中，如熔炉的吐息。一个矮人战士从路边的岩石后跃出，他的战斧在火山映照下闪着暗红的光。'站住！'他吼道，声音如铁锤敲击砧板，'你是黑暗之力的仆从，还是来此对抗它的勇士？回答我，别磨蹭！'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        choices: [
            { text: "我是寻找者，我在寻找X", next: "middleearth_dwarf_x" },
            { text: "我是来对抗黑暗的", next: "middleearth_dwarf_ally" },
            { text: "我只是一个旅人", next: "middleearth_dwarf_traveler" }
        ]
    },

    "middleearth_dwarf_x": {
        text: "矮人战士放下战斧，表情变得凝重，如花岗岩雕塑。'X？那个带着古怪戒指的女人？她两天前打这儿经过，独自一人，连个同伴都没带。俺想拦住她，但她说这是她必须做的事。她说：「有些使命只容一人独行，但有些旅途却需两人并肩。」俺不懂她啥意思，但也许你懂，嗯？'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addClue('x_passed_here'); addTrait('brave'); },
        choices: [
            { text: "带我去找她", next: "middleearth_dwarf_guide" },
            { text: "她说了什么？", next: "middleearth_dwarf_story" },
            { text: "你自己为什么在这里？", next: "middleearth_dwarf_reason" }
        ]
    },

    "middleearth_dwarf_guide": {
        text: "矮人战士重重点头，胡须随之一颤。'好，寻找者。俺带你去末日火山。但俺得警告你——那条路不好走，比矮人的脾气还难对付。黑暗势力的军队在巡逻，那些家伙可不会请你喝茶。而且……'他压低声音，铜铃般的眼睛扫视四周，'火山本身……也有它的意志。它不欢迎任何人，哪怕是俺们这样的硬骨头。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addClue('dwarf_guide'); addTrait('allied'); },
        choices: [
            { text: "我不在乎危险", next: "middleearth_volcano_approach", cost: { day: 1 } },
            { text: "你为什么帮我？", next: "middleearth_dwarf_why_help" }
        ]
    },

    "middleearth_dwarf_story": {
        text: "矮人战士在一块岩石上坐下，那动作沉重而疲惫。'X是个奇怪的人，俺跟你讲。她不怕黑暗，不怕危险，但她怕一件事——忘记。她说她穿越了太多世界，多到开始忘记自己是谁。就像一块石头在溪水里滚了太久，磨掉了所有的棱角。所以她决定结束这一切，关闭通道，回到原来的世界——哪怕那意味着忘记所有的旅途，所有她见过的人，还有……你。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addClue('x_fears_forgetting'); addTrait('empathetic'); },
        choices: [
            { text: "我不想让她忘记", next: "middleearth_dwarf_guide" },
            { text: "也许忘记也是一种解脱", next: "middleearth_forgetting" }
        ]
    },

    "middleearth_forgetting": {
        text: "矮人战士看着你，粗犷的脸上露出一种少见的柔和。'也许吧。但记住，寻找者——被遗忘的旅途也是旅途。即使她忘了，那些经历仍然塑造了她。就像锻造一把好剑，即使忘了锤子敲了多少下，剑仍然是锋利的。俺们矮人知道这个理儿——石头记得每一锤，哪怕打铁的人忘了。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addTrait('wise'); },
        choices: [
            { text: "带我去找她", next: "middleearth_dwarf_guide" }
        ]
    },

    "middleearth_dwarf_reason": {
        text: "'俺？'矮人战士苦笑，笑声如岩石滚落山崖，'俺在找一件东西——一把被黑暗势力夺走的祖先宝斧，那是俺祖上三代传下来的。但说实话，俺也在找意义。在这片土地上，善与恶永无休止地争斗，有时候俺会想，这一切有什么意义？X告诉俺：「意义不在于抵达何处，而在于你选择了哪条路。」也许她说得对，也许俺该放下宝斧，先找到自己的路。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addClue('dwarf_backstory'); },
        choices: [
            { text: "我们一起去找答案", next: "middleearth_dwarf_guide" },
            { text: "你的宝斧在哪里？", next: "middleearth_dwarf_axe" }
        ]
    },

    "middleearth_dwarf_axe": {
        text: "矮人战士指向远方，火光在他眼中跳动。'在末日火山的入口，黑暗之力的堡垒里。要拿到它，俺得穿过整支军队——那些家伙比山里的熊还多。但也许……也许有了你的帮助，俺能办到。你帮俺找到X，俺帮你穿过军队。怎么样，这笔买卖不亏吧？'他伸出粗壮的手掌，掌心的老茧如岩石般坚硬。",
        bg: "middleEarthVolcano",
        character: "dwarf",
        choices: [
            { text: "成交", next: "middleearth_volcano_approach", cost: { day: 1 } },
            { text: "我只需要找到X", next: "middleearth_volcano_alone", cost: { day: 1 } }
        ]
    },

    "middleearth_dwarf_ally": {
        text: "矮人战士仔细审视了你一番，那双在矿洞中练就的眼睛锐利如鹰。然后他重重点头。'好，勇士。在这片黑暗之地，多一个战友就多一分希望——比多一把斧头还管用。俺叫索林，来自铁丘，祖上是山之心矿坑的挖掘者。你呢？'你告诉了他你的名字和使命。'寻找X？有意思。看来命运把咱俩凑一块儿，不是没有道理的。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addClue('dwarf_ally'); addTrait('diplomatic'); },
        choices: [
            { text: "一起去末日火山", next: "middleearth_volcano_approach", cost: { day: 1 } },
            { text: "先告诉我关于X的事", next: "middleearth_dwarf_x" }
        ]
    },

    // ========== 末日火山 ==========
    "middleearth_volcano_approach": {
        text: "你与矮人战士并肩接近末日火山。空气愈发灼热，每一次呼吸都如吞咽火焰，大地在脚下颤抖，仿佛一头被囚禁的巨兽在咆哮。远处，火山口喷出炙热的岩浆与遮天黑烟，将天空染成血色。在火山脚下，你看到了一个熟悉的身影——X。她独自站在通往火山口的石桥上，手中握着一枚发光的戒指，那光芒在黑暗中如一颗不肯熄灭的星辰。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "冲上去阻止她", next: "middleearth_rush_x" },
            { text: "慢慢走近她", next: "middleearth_approach_x" },
            { text: "呼唤她的名字", next: "middleearth_call_x" }
        ]
    },

    "middleearth_call_x": {
        text: "你站在桥的这一端，大声呼唤X的名字。那声音在火山口回荡，压过了岩浆的咆哮。她转过身，看到了你。惊讶、喜悦、然后是悲伤——三种情绪如潮水般依次掠过她的面庞。'你怎么来了？'她问，声音轻得几乎被风吞没，'你不该来的。这是我的使命，不是你的。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "你的使命也是我的", next: "middleearth_shared_mission" },
            { text: "我不想失去你", next: "middleearth_dont_lose" },
            { text: "让我们一起做选择", next: "middleearth_together_choice" }
        ]
    },

    "middleearth_shared_mission": {
        text: "X的眼中涌出泪水，在火山光芒的映照下如融化的珍珠。'你……你真的愿意与我一同承担这一切？投入戒指意味着关闭一切世界的通道，意味着我们或许永世不得再见。你确定吗？'她的声音颤抖着，不是因为恐惧，而是因为那太过沉重、太过珍贵的希望。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "我确定", next: "ending_middleearth_sacrifice_together" },
            { text: "也许有别的办法", next: "middleearth_third_way_volcano" },
            { text: "让我想想", next: "middleearth_hesitate" }
        ]
    },

    "ending_middleearth_sacrifice_together": {
        text: "你走向X，握住她的手——那手冰凉，却在你的掌心中渐渐温暖。'一起，'你说。这短短二字，比你一生中说过的任何话都更有分量。她微笑了，那笑容如暗夜中绽放的花朵。她将戒指放在你们交握的手中，你们一同将戒指投入火山。光芒万丈，如创世之初的第一道光。所有世界之间的通道开始关闭，如合上一本古老的书。在最后一刻，你感觉到X的手紧握着你的。也许通道关闭了，但有些东西永不会消失——它们只是换了一种方式存在。游戏结束。",
        bg: "middleEarthVolcano",
        character: null,
        ending: true,
        endingTitle: "共同的牺牲",
        endingDescription: "你和X一起做出了牺牲，关闭了通道，但你们的爱超越了世界的界限。"
    },

    "middleearth_third_way_volcano": {
        text: "你想起了精灵战士所说的古老仪式。'等一下！'你喊道，声音在火山口回荡，'有一个办法，可以不关闭通道！如果我们分散戒指的力量……'X看着你，眼中闪过希望——那希望如此明亮，几乎让人不敢直视。'你说的是第三条路？'她问，'但那需要两个人同时施行仪式，如歌谣中所唱。'你点头，目光坚定。'所以让我们一起做。不是各自为战，而是并肩而行。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "开始仪式", next: "ending_middleearth_third_path" },
            { text: "太危险了", next: "middleearth_too_dangerous" }
        ]
    },

    "ending_middleearth_third_path": {
        text: "你们开始了古老的仪式。古老的语言自你们唇间流出，如早已遗忘的歌谣重被唱起。戒指的光芒分散成无数道光线，射向一切世界——如黎明破晓，如星辰坠落。通道没有关闭，但黑暗势力被永久封印，如潮水退去后再无法涨起。你感觉到力量在改变你——你成为了世界之间的桥梁，血肉之躯化作连接万界的纽带。X看着你，眼中充满了理解与爱，那爱比任何魔法都更古老、更强大。'你变了，'她说，'但你还记得我吗？'你微笑——那微笑穿越了一切世界：'永远记得。星辰会陨落，山脉会崩塌，但这份记忆，不会。'游戏结束。",
        bg: "middleEarthVolcano",
        character: null,
        ending: true,
        endingTitle: "第三条路",
        endingDescription: "你找到了不需要牺牲的答案，成为了连接所有世界的桥梁。"
    },

    "middleearth_too_dangerous": {
        text: "X看着你，轻轻摇头——那动作里有温柔，也有倔强。'危险？我们已经穿越了无数世界，面对了无数敌人。还有什么比这更危险呢？'她伸出手，那只手曾在无数个世界中握过你的手，'来吧，寻找者。让我们一同做最后的选择。不管结果如何，至少我们在一起。而这，已经足够了。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "握住她的手", next: "ending_middleearth_third_path" },
            { text: "退后", next: "middleearth_retreat" }
        ]
    },

    "middleearth_retreat": {
        text: "你退后了一步。X的眼神变得复杂，那里有失望，有理解，还有一种深深的孤独。'我理解，'她说，'并非每个人都有勇气面对未知。但记住，寻找者——逃避选择，本身也是一种选择。'她转身面向火山口，背影在火光中显得如此渺小，又如此坚定。'也许有一天，你会找到你的勇气。也许那一天的到来，不会太迟。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "不，等等！", next: "middleearth_rush_x" },
            { text: "离开", next: "middleearth_leave_volcano" }
        ]
    },

    "middleearth_leave_volcano": {
        text: "你转身离开末日火山。身后传来戒指落入岩浆的声音——那声音不大，却如同整个世界在叹息。大地在颤抖，通道关闭了。你回到了原来的世界，但X……X已经不在了。你站在空旷的花园中，那花园曾是她最爱的地方。手中只剩下那张褪色的照片，照片上的她笑得如此灿烂，仿佛这世上从未有过离别。游戏结束。",
        bg: "middleEarthVolcano",
        character: null,
        ending: true,
        endingTitle: "错过的选择",
        endingDescription: "你逃避了选择，也失去了X。"
    },

    "middleearth_rush_x": {
        text: "你冲上桥，脚下石桥在颤抖，仿佛随时都会崩塌。X惊讶地看着你，那眼神如同被惊扰的鹿。'你……'你抓住她的手腕，那手腕纤细得让人心疼。'不要投！'你喊道，声音因急切而嘶哑。你们在桥上挣扎，戒指从X的手中滑落，在石桥上滚动，发出清脆而致命的声音。你们同时扑向戒指，手指碰到了一起——在那一瞬间，时间仿佛停止了，整个世界只剩下你们交叠的指尖和那枚微微发光的戒指。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "拿起戒指", next: "middleearth_take_ring" },
            { text: "让X决定", next: "middleearth_let_x_decide" },
            { text: "一起握住戒指", next: "ending_middleearth_third_path" }
        ]
    },

    "middleearth_take_ring": {
        text: "你拿起戒指，那力量如熔岩般涌入你的身体。它在对你低语——那声音甜美而致命：你可以控制一切世界的通道，你可以成为神，超越时间与空间。但你也感觉到黑暗的力量在侵蚀你的意志，如藤蔓缠绕古树，一寸一寸地收紧。X看着你，眼中充满恐惧——不是对戒指的恐惧，而是对你正在变成的那个人的恐惧。'放下它，'她说，声音颤抖却坚定，'它正在控制你。你还记得你是谁吗？'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "放下戒指", next: "middleearth_drop_ring" },
            { text: "投入火山", next: "ending_middleearth_sacrifice_together" },
            { text: "保留力量", next: "ending_middleearth_corrupted" }
        ]
    },

    "ending_middleearth_corrupted": {
        text: "你选择保留戒指的力量。黑暗如潮水般涌入你的身体，重塑了你的灵魂——那黑暗并非来自外界，而是来自你内心深处被唤醒的角落。你不再是寻找者，你成为了新的黑暗之主，你的影子笼罩了所有世界。X看着你，泪水从她的脸颊滑落，如断线的珍珠。'你变了，'她低声说，那声音里不是愤怒，而是无尽的哀伤。你微笑——一个冰冷的微笑，那微笑不再属于你，而属于戒指。'我没有变，X。我只是做出了选择。而选择，从来都是最真实的自己。'游戏结束。",
        bg: "middleEarthVolcano",
        character: null,
        ending: true,
        endingTitle: "堕落的寻找者",
        endingDescription: "你被戒指的力量腐蚀，成为了新的黑暗。"
    },

    "middleearth_drop_ring": {
        text: "你用尽全力将戒指掷向火山口，那动作如挣脱了锁链。X抓住你的手，你们一同看着戒指消失在翻滚的岩浆中——那光芒闪烁了一下，仿佛在告别，然后沉入永恒的深渊。通道开始关闭，但这一次，你们在一起，十指相扣。'谢谢你，'X说，'谢谢你阻止了我。也许关闭通道不是唯一的答案，也许我们不用分开就能找到答案。'游戏结束。",
        bg: "middleEarthVolcano",
        character: null,
        ending: true,
        endingTitle: "正确的选择",
        endingDescription: "你放弃了力量，和X一起做出了正确的选择。"
    },

    "middleearth_dont_lose": {
        text: "X的表情变得温柔，如冰雪消融后的第一缕春风。'你不会失去我，'她说，'即使通道关闭，即使世界分离，有些东西是永恒的。我们的旅途、我们的记忆、我们的选择——这些不会消失，如同星辰不会因黎明而熄灭。但也许……也许你不需要关闭通道来找到我。也许你只需要在这里，和我一起，共同面对。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "那我们不投了", next: "middleearth_no_throw" },
            { text: "但世界需要保护", next: "middleearth_world_needs" }
        ]
    },

    "middleearth_no_throw": {
        text: "X看着手中的戒指，然后看着你——那目光从戒指移向你，仿佛是做出了某种决定。'你说得对，'她说，'也许关闭通道不是答案。也许答案是我们一起找到的——一个不需要牺牲、不需要遗忘的答案。'她将戒指递给你，那动作有一种仪式般的庄严。'拿着它，寻找者。你是连接一切世界的人——不是通过关闭通道，而是通过守护它们。守护比摧毁需要更大的勇气，而你，从不缺少勇气。'",
        bg: "middleEarthVolcano",
        character: null,
        onEnter: () => { addTrait('guardian'); },
        choices: [
            { text: "成为守护者", next: "ending_middleearth_third_path" },
            { text: "回到花园", next: "middleearth_next_world" }
        ]
    },

    "middleearth_together_choice": {
        text: "X微笑了，那微笑如拂晓之光照亮黑暗。'一起做选择……这是我听过的最好的提议，比任何歌谣都动听。'她伸出手，那只手在火山的光芒中显得如此坚定。'来吧，寻找者。无论我们选择什么，至少我们在一起。而在一起，便已胜过一切孤独的胜利。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "握住她的手", next: "ending_middleearth_sacrifice_together" },
            { text: "一起寻找第三条路", next: "ending_middleearth_third_path" }
        ]
    },

    "middleearth_hesitate": {
        text: "X静静地看着你，那目光不急不躁，却带着一种紧迫感——不是催促，而是提醒。'犹豫是人之常情，'她说，'但时间不多了。火山在咆哮，黑暗势力在逼近，如潮水将至。你必须做出选择——不是完美的选择，而是你的选择。'她等待着你，那等待本身就是一种答案。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "我准备好了", next: "ending_middleearth_sacrifice_together" },
            { text: "还有别的办法", next: "middleearth_third_way_volcano" },
            { text: "我做不到", next: "middleearth_retreat" }
        ]
    },

    "middleearth_next_world": {
        text: "你带着戒指离开了末日火山。通道没有关闭，世界之间的联系依然存在，如一张无形的网连接着一切。你知道，X还在某个地方等着你——也许在下一个世界的入口，也许在某个你尚未踏足的花园。你跨过门槛，晨光在你身后铺展开来。新的旅途在等待，而这一次，你不再只是一个寻找者——你是守护者，是桥梁，是连接一切世界的人。",
        bg: "middleEarthForest",
        character: null,
        ending: { title: '中土世界的守望者', desc: '你带着万界之钥离开了末日火山，选择守护而非关闭。世界之间的通道依然敞开，X的身影在前方若隐若现，而你将永远守望这片土地与所有世界的平衡。' },
        choices: [
            { text: "进入下一个世界", next: "crossroads", cost: { day: 1 } }
        ]
    },

    "middleearth_mordor_path": {
        text: "你独自踏上通往黑暗之地的道路。大地愈发荒芜，寸草不生，天空被黑云层层覆盖，如同被某种古老诅咒所笼罩。远处，末日火山在喷发，岩浆如血河般流淌，照亮了这末日般的荒原。你感觉到黑暗的力量在注视着你——那是一种古老而耐心的注视，仿佛在等待，等待你走错一步。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "继续前进", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "返回寻找盟友", next: "middleearth_rivendell", cost: { day: 1 } }
        ]
    },

    "middleearth_elf_crisis": {
        text: "精灵战士的表情变得凝重，如暴风雨前的天空。'黑暗之力正在觉醒，寻找者。它们在暗影中蛰伏了千年，如今正欲借世界之间的通道入侵一切世界。X携那枚戒指，是因为唯有将戒指投入末日火山，方能关闭通道，阻止黑暗势力的入侵。但她不知晓的是……关闭通道的代价。那代价，并非所有人都能承受。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addClue('dark_threat'); },
        choices: [
            { text: "什么代价？", next: "middleearth_elf_volcano_meaning" },
            { text: "我要去帮她", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_elf_shelter": {
        text: "精灵战士微微颔首。'你可以在此歇息，在这白城之中，疲惫的旅人总会找到安宁。但不要停留太久，寻找者。时间不等人——如同这山谷中的瀑布，一去不返。X亦不等人。她在末日火山，独自面对命运的审判。若汝不尽快出发，也许便来不及了。而'来不及'这三个字，是所有遗憾中最沉重的一种。'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "休息后出发", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "现在就出发", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "先了解更多", next: "middleearth_elf_x" }
        ]
    },

    "middleearth_elf_ring": {
        text: "'那枚戒指是万界之钥，'精灵战士说，她的声音带着一种古老的敬畏，'它可以打开或关闭一切世界之间的通道——如同钥匙能开锁，亦能锁门。X得到了它，但她不知如何正确使用。若使用不当，后果之严重，非你我所能想象。这就是她选择最简单的方式——投入火山，关闭一切。但简单，不总是最好的。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addClue('ring_key'); },
        choices: [
            { text: "有更好的使用方式吗？", next: "middleearth_alt_way" },
            { text: "我要去找她", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_world_first": {
        text: "精灵战士看着你，眼中闪过敬意——那是战士对战士的认可。'你选择了更艰难的道路。世界比个人更重要——这是英雄的选择，也是最孤独的选择。但记住，寻找者，英雄也是有心的。也许在保护世界的同时，你也能找到与X在一起的方式。光明不会抛弃那些心怀光明之人。去吧，命运在等待你，而英雄从不迟到。'",
        bg: "middleEarthCity",
        character: "elf",
        onEnter: () => { addTrait('heroic'); },
        choices: [
            { text: "出发", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_accept_fate": {
        text: "精灵战士看着你，表情复杂，如月光下的水面——难以捉摸，却又暗含深意。'你接受了命运？也许这是最明智的选择。但也许……也许命运并非注定的，如同河流可以改道，星辰可以陨落。去吧，寻找者。也许在末日火山，你会发现命运有更多的可能性——比歌谣中唱过的更多，比智者预言过的更多。'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "去末日火山", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_stay_ritual": {
        text: "你决定留在精灵之城准备仪式。精灵战士教你古老的咒语和仪式步骤——那咒语比这座白城还要古老，源自星辰尚未命名之时。'当X在火山端开始仪式时，你必须在此地同时开始。唯有两端同时进行，戒指的力量才能被分散而非关闭——如同将一条河流分作无数溪流，而非筑坝拦断。准备好了吗？'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "准备好了", next: "ending_middleearth_third_path" },
            { text: "我需要更多时间", next: "middleearth_more_time" }
        ]
    },

    "middleearth_more_time": {
        text: "'时间……'精灵战士轻叹，那叹息如风穿过千年古树的枝丫，'我们没有太多时间了。X已经上路，她的脚步不会为任何人停留。但我会继续教你——这仪式需要信念，比任何咒语都更重要的信念。对X的信念，对你们之间联系的信念。只要信念不灭，仪式便能成功。即使星辰陨落，即使山脉崩塌，只要心中还有信念，便有希望。'",
        bg: "middleEarthCity",
        character: "elf",
        choices: [
            { text: "我准备好了", next: "ending_middleearth_third_path" }
        ]
    },

    "middleearth_volcano_alone": {
        text: "你独自前往末日火山。路途艰难——黑暗势力的军队在巡逻，如乌鸦盘旋于腐尸之上。你不得不绕道而行，穿过干涸的河床与崩塌的峡谷。但你的决心让你坚持了下来，那是比任何刀剑都更锋利的东西。终于，你看到了末日火山口，以及站在桥上的X——她的身影在火光中如一座孤独的雕像，等待着属于她的命运。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "呼唤她", next: "middleearth_call_x" }
        ]
    },

    "middleearth_dwarf_traveler": {
        text: "矮人战士审视着你，那双在矿洞中练就的眼睛上下打量。'旅人？在这片黑暗之地？你要么非常勇敢，要么非常愚蠢——要么两者都有一点。'他咧嘴一笑，露出被烟熏黄的牙齿，'但不管怎样，你需要一个向导。俺叫索林，铁丘出身。俺可以带你去末日火山——如果你愿意帮俺找到俺的宝斧的话。怎么样，成交？'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        choices: [
            { text: "成交", next: "middleearth_volcano_approach", cost: { day: 1 } },
            { text: "我自己去", next: "middleearth_volcano_alone", cost: { day: 1 } }
        ]
    },

    "middleearth_wizard_no_sacrifice": {
        text: "智者看着你，眼中充满了理解——那是经历漫长岁月之人才有的温和。'你不想让她牺牲……这是爱的声音，寻找者。爱不愿看见所爱之人吃苦。但有时，爱意味着尊重对方的选择。X选择了这条路，因为这是她认为正确的事。你能做的，不是阻止她，而是陪伴她——陪伴，是比任何劝阻都更强大的力量。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "你说得对", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "我还是想阻止她", next: "middleearth_stop_x" }
        ]
    },

    "middleearth_wizard_who": {
        text: "'我是谁？'智者笑了，笑声如风穿过古老的橡树，'老朽是一个古老的存在，见证了无数世界的兴衰，如同老树看过无数次的叶落与花开。我见过X，也见过你——在这无限的花园中，所有的寻找者最终都会来到这片林间。我是引导者，亦是观察者。现在，让我引导你找到你的答案——那答案不在我这里，而在你自己心中，你只是需要人帮你找到它。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "告诉我X在哪里", next: "middleearth_wizard_x" },
            { text: "告诉我关于戒指", next: "middleearth_wizard_ring" }
        ]
    },

    "middleearth_wizard_ring": {
        text: "'万界之钥，'智者说，他的声音低沉如远方的雷鸣，'它可以控制一切世界之间的通道——开启或关闭，连接或隔绝。X得到了它，但她不知如何正确使用。若投入火山，它将关闭一切通道。若正确使用，它可以分散力量，保护通道同时封印黑暗。但正确使用需要两个人——一个在火山之心，一个在精灵之城。一人在火中，一人在光中。'",
        bg: "middleEarthForest",
        character: "wizard",
        onEnter: () => { addClue('ring_full_truth'); },
        choices: [
            { text: "我去火山找她", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "我去精灵之城", next: "middleearth_stay_ritual" }
        ]
    },

    "middleearth_wizard_willing": {
        text: "智者点头，那动作迟缓而庄严，如同古老的山脉在移动。'你的勇气让老朽想起了X。她也有同样的决心——那种明知前路艰难却义无反顾的决心。去吧，寻找者。找到X，与她一同面对命运。也许你们的选择会改变一切——也许正是最渺小之人，才能改变最伟大的命运。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "出发", next: "middleearth_go_mordor", cost: { day: 1 } }
        ]
    },

    "middleearth_wizard_think": {
        text: "'思考是好的，'智者说，他的声音如炉火般温暖，'但不要思考太久。X已经在路上了，时间不等人——如同这林间的溪水，一去不返。当你准备好了，就出发吧。老朽会在这里等你回来——如果你还能回来的话。但无论如何，选择权在你手中，而选择，就是一切。'",
        bg: "middleEarthForest",
        character: "wizard",
        choices: [
            { text: "我现在就出发", next: "middleearth_go_mordor", cost: { day: 1 } },
            { text: "我选择成为守望者", next: "ending_middleearth_watcher" }
        ]
    },

    "middleearth_dwarf_why_help": {
        text: "矮人战士沉默了一会儿，那沉默中有某种沉重的东西。'因为X帮助过俺。当俺在黑暗之地迷路时，连方向都分不清，是她给俺指了路。她说：「帮助别人，就是在帮助自己。」这话俺一直记着，记在斧头上，也记在心里。所以，俺帮你，也是在帮俺自己。也许在帮你找到X的过程中，俺也能找到俺自己的答案——关于那把宝斧，关于这一切的意义。'",
        bg: "middleEarthVolcano",
        character: "dwarf",
        onEnter: () => { addTrait('grateful'); },
        choices: [
            { text: "出发", next: "middleearth_volcano_approach", cost: { day: 1 } }
        ]
    },

    "middleearth_let_x_decide": {
        text: "你松开手，让X做决定。她看着你，眼中充满了复杂的情感——感激、惊讶，还有一种深深的释然。'你……你愿意让我自己选择？'她轻声说，声音如羽毛落于水面。'是的，'你说，'因为这是你的使命，你的选择。我只是想让你知道，无论你选择什么，我都在这里。'X微笑了，那是你记忆中最美的微笑——比任何世界的日出都更美，比任何歌谣都更动人。",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "看着她做选择", next: "middleearth_x_final_choice" }
        ]
    },

    "middleearth_x_final_choice": {
        text: "X看着手中的戒指，那光芒在她眸中跳动。然后她望向火山口，最后看着你。她深吸一口气——那呼吸仿佛在吞咽整个世界的重量。'你知道吗，'她说，'我一直在想，什么是正确的选择。关闭通道？保留戒指？但现在，看着你，我知道了。正确的选择不是关于通道，不是关于世界——而是关于我们。'她将戒指放在你们中间的手掌中，那动作轻柔如放下一个沉睡的孩子。'我们一起决定吧。两个人的选择，比一个人的更接近真理。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "分散戒指的力量", next: "ending_middleearth_third_path" },
            { text: "关闭通道", next: "ending_middleearth_sacrifice_together" }
        ]
    },

    "middleearth_world_needs": {
        text: "X点头，那动作坚决而温柔。'你说得对。世界需要保护——无数的人、无数的故事、无数的歌谣。但也许保护世界和在一起并不矛盾，如同黎明与星辰可以共存于同一片天空。也许……也许我们可以找到一种方式，既保护世界，又不失去彼此。'她看着你，眼中闪过希望——那希望如夜幕中的第一颗星。'你愿意和我一起寻找这种方式吗？不是放弃，而是创造。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "愿意", next: "ending_middleearth_third_path" },
            { text: "太危险了", next: "ending_middleearth_sacrifice_together" }
        ]
    },

    "middleearth_approach_x": {
        text: "你慢慢走向X，每一步都如跨越一个世界——沉重、缓慢，却又无比坚定。石桥在你脚下微微颤抖，仿佛在低语着古老的警告。她听到了你的脚步声，转过身来。她的眼中闪过惊讶，然后是泪水——那泪水在火山的光芒中晶莹如钻石。'你怎么来了？'她问，声音颤抖。'因为我答应过要找到你，'你说，'而我不打算违背承诺。一个承诺，比任何世界的重量都更轻，也比任何世界都更重。'",
        bg: "middleEarthVolcano",
        character: null,
        choices: [
            { text: "和她一起面对", next: "middleearth_together_choice" },
            { text: "阻止她", next: "middleearth_rush_x" },
            { text: "让她自己选择", next: "middleearth_let_x_decide" }
        ]
    }
};

// 不直接合并到 SCRIPT，让 chapters-compat.js 自动转换格式
// if (typeof SCRIPT !== 'undefined') {
//     Object.assign(SCRIPT, MIDDLE_EARTH_SCRIPT);
// }
