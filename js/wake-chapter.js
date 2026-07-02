/**
 * 芬尼根的守灵夜世界
 * 主题：循环叙事、语言游戏、梦境与现实的边界
 */

const wakeChapter = {
    id: 'wake',
    name: '守灵之夜',
    description: '在这里，结束就是开始，每个名字都藏着一千个故事。',
    
    scenes: {
        wake_entrance: {
            id: 'wake_entrance',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: 'riverrun——暮色沉沉沉入水底，水底沉沉升起暮色，涟漪荡开成同心圆，一圈一圈一圈，时间在打转，故事在打转，记忆在打转。你注意到纸片——纸片们——在空中飘舞着旋转着坠落着，上面写着你无法完全理解的语言，像英语但不是英语，像梦话但不是梦话，像某种在语言诞生之前就已经存在的 murmur——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '欢迎，欢迎，三倍三倍地欢迎！welcomen, bienvenue, fáilte——你来得正是时候也是不巧的时候，timely-untimely，守灵已经开始但逝者还未醒来，已醒未醒，已死未死，这就是芬尼根的方式，finneganesque，the Wake of the world——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这是什么地方？这些文字——这些文字——它们在我的舌尖上融化又凝结，像糖像盐像某种我不能命名的滋味——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '这是利菲河畔，Liffey-side，mon ami。在这里，每个词都有十七层意思，seventeen-sensed，每个故事都在吞噬自己的尾巴，ouroborostory。你看到那些涟漪了吗？那是时间在打转，timetime在打转，roundandroundandround——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '芬尼根睡着了，sleeping，或者说他死了，dying，或者说他在等待重生，rising——在这里，睡-死-醒，三件事是一回事，three-in-one，one-in-three。你想参加守灵吗？wake him, wake yourself, wake the world?',
                    choices: [
                        { text: '我想了解这个循环', nextScene: 'wake_cycle', trait: 'curiosity' },
                        { text: '这些文字是什么意思', nextScene: 'wake_language', trait: 'linguist' }
                    ]
                }
            ]
        },
        
        wake_cycle: {
            id: 'wake_cycle',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'storyteller',
                    text: '循环，circulus，cyclos，cycle——一切都是循环，circulations。芬尼根倒下，falling-fallen，芬尼根站起，rising-risen。就像河流流向大海，riverrun to sea，又化作雨水回到山上，rainfall to hill，fromhilltohillfromseatosea——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '你以为你在寻找X？X-quest，X-search，X-unknown。也许X就是你自己，X-as-self，也许你已经找到了，found-unfound，只是还没意识到，unawakened，睡在醒的梦里，醒在梦的睡里——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不明白。不明白。不明白——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '不明白是好事，un-understanding，blessed ignorance。在这个世界，明白就是迷失的开始，understand-stand-under-misunderstood。来，去酒馆坐坐，tavern-talk，听听其他人的故事，storytellings，每个故事都是同一个故事讲了又讲讲了又讲——',
                    choices: [
                        { text: '去酒馆', nextScene: 'wake_tavern', trait: 'social' },
                        { text: '继续探索河流', nextScene: 'wake_river_explore', trait: 'explorer' }
                    ]
                }
            ]
        },
        
        wake_language: {
            id: 'wake_language',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'storyteller',
                    text: '语言？langue, lingua, language——语言是活的，living，我的朋友，mon ami。它在呼吸，breathing，在变形，shape-shifting，在和你开玩笑，joking-jesting-jouer，每一个音节都在窃窃私语着另一个音节——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '看看这个词——"wake"。它可以是守灵，wake-the-dead，可以是醒来，wake-the-living，可以是船尾的水痕，wake-on-water。在这里，所有意思同时存在，simultaneously，now-now-now，每一个语义都在涟漪中扩散，互相拥抱互相吞噬——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '那我该如何理解？如何。如何。如何——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '不要理解，不是理解，不要理解。要感受，feel，sentir。让词语流过你，flow-through，就像河水，riverrun-through。不要试图抓住它们，hold them and they slip away，抓水留痕，徒劳之举——',
                    choices: [
                        { text: '尝试感受', nextScene: 'wake_feel_language', trait: 'intuition' },
                        { text: '坚持分析', nextScene: 'wake_analyze_language', trait: 'analytical' }
                    ]
                }
            ]
        },
        
        wake_tavern: {
            id: 'wake_tavern',
            background: 'wakeTavern',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你走进酒馆，tavern-entry。里面温暖而喧闹，warm-and-tumult，人们围坐在圆桌旁，round-table-round，每个人似乎都在同时讲述和倾听，telling-listening，一口双用。墙上密密麻麻写满了字，word-walls，有些在发光，glowing-letters，像磷火像梦痕像遗忘之前的记忆——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '又一个迷路的灵魂，lost-soul，迷途的羔羊。你是来喝酒的，drink，还是来听故事的，story？或者两者都是，drink-the-story，story-the-drink，咽下故事，吐出酒——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想知道如何离开这里。离开。离开——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '离开？dear heart，没有人真正离开这里，never-leave。我们只是换个方式存在，re-exist，trans-exist。但如果你想"前进"，forward-march，你必须完成守灵，wake-the-wake，守完这场梦——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '去和沉睡者对话吧，speak-to-the-sleeper。他在山上，hill-body，身体变成了风景，landscape-flesh，呼吸变成了风，dream-is-breath。只有他能给你答案，answer-giver——如果他在做梦的话，dreaming，如果他的梦里有你的问题——',
                    choices: [
                        { text: '去找沉睡者', nextScene: 'wake_seek_sleeper', trait: 'determination' },
                        { text: '先听故事', nextScene: 'wake_listen_stories', trait: 'patience' }
                    ]
                }
            ]
        },
        
        wake_river_explore: {
            id: 'wake_river_explore',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你沿着河岸行走，riverbank-walk。河水时而清澈，clear-clear，时而浑浊，muddy-murky，时而倒流，backward-flow——时间在倒流，河流在倒流，记忆在倒流。你看到一些倒影，reflections，但它们不是你的，不是你的脸，是别人的脸，别人的记忆，别人的梦——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '利菲河记得一切，Liffey-remembers，memoriver。每一个掉进河里的故事，story-drowned，每一个被泪水打湿的秘密，tear-secret。你想看看你的倒影吗？你的，真正的你的，在所有故事之前的你——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我的倒影？我的。我的——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '不是你现在这副模样，not-this-you。是你的真实面目，true-face——在所有名字之前的你，pre-name，pre-story，pre-you，那个在河流开始流淌之前就已经存在的你，那个自始至终从未改变的你——',
                    choices: [
                        { text: '看倒影', nextScene: 'wake_reflection', trait: 'self_knowledge' },
                        { text: '拒绝', nextScene: 'wake_refuse_reflection', trait: 'fear' }
                    ]
                }
            ]
        },
        
        wake_feel_language: {
            id: 'wake_feel_language',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你闭上眼睛，闭眼闭世，让那些奇怪的词语流过你，flow-through。起初只是噪音，noise-nothing，但渐渐地，你开始感受到某种韵律，rhythm，某种节奏，pulse，某种在混沌之下的秩序，order-in-chaos——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '词语不再是符号，而是音乐，word-music。每个音节都在振动，vibrating，在歌唱，singing-songing，像利菲河的流水，像芬尼根的呼吸，像梦的脉搏——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '很好！très bien! benissimo! 你开始懂了，开始感受了，不是用头脑，而是用心，heart-understanding。这就是芬尼根的语言——梦境的语言，dream-tongue，在一切语言之下流淌的暗河——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '现在你可以听到真正的故事了，true-stories。去酒馆吧，tavern-bound，听那些只有在梦中才能听到的故事，dream-tales，那些在醒着的时候永远说不出口的故事——',
                    choices: [
                        { text: '前往酒馆', nextScene: 'wake_tavern', trait: 'openness' }
                    ]
                }
            ]
        },
        
        wake_analyze_language: {
            id: 'wake_analyze_language',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你试图分析这些词语，analyse-words。你找出词根，root-tracing，追溯词源，etymology-hunting，构建语法树，grammar-tree。但每当你以为理解了，词语就变形了，shape-shift，像水银从指间溜走，像梦在醒来时消散——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '啊，分析者，analyst，analyste。你用网去捕风，net-the-wind，用桶去装水，bucket-the-water。不是不行，只是...徒劳，vanitas vanitatum，一切捕风一切装水一切徒劳——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '一定有规律可循。有。有——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '规律？当然有，law-and-order。但规律也在循环，也在做梦，law-dreaming。来吧，veni，我带你去看规律的源头，source-of-law，那个在一切规则之前的地方——',
                    choices: [
                        { text: '跟随', nextScene: 'wake_source', trait: 'persistence' }
                    ]
                }
            ]
        },
        
        wake_seek_sleeper: {
            id: 'wake_seek_sleeper',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你来到了山上，hill-reach。在那里，你看到了他——芬尼根，或者说山，或者说两者都是，hill-is-he，he-is-hill。他的呼吸就是风，breath-breeze，他的梦境就是云，dream-cloud，他的身体就是大地，body-earth——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...又一个来访者...zzz...又一个梦中的访客...zzz...来听梦话的吗...zzz...还是来看梦的...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '您能告诉我如何离开吗？离开这个梦——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: '离开...zzz...就是回来...zzz...回来...zzz...就是离开...zzz...结束...zzz...就是开始...zzz...beginnings-endings-beginnings...',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: '找到你的名字...zzz...真正的名字...zzz...在所有伪装之下...zzz...所有面具之下...zzz...所有故事之下...zzz...那个从未被说出的名字...zzz',
                    choices: [
                        { text: '寻找真名', nextScene: 'wake_true_name', trait: 'seeker' },
                        { text: '等待他醒来', nextScene: 'wake_wait_wake', trait: 'patience' }
                    ]
                }
            ]
        },
        
        wake_listen_stories: {
            id: 'wake_listen_stories',
            background: 'wakeTavern',
            onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('wake'); },
            dialogues: [
                {
                    character: 'narrator',
                    text: '你坐下来，听人们讲述，sit-and-listen。每个故事都似曾相识，déjà-entendu，每个情节都在重复，repeating，但每次都有微妙的不同，difference-in-repetition，像河流每次流动都是同一条河但从不相同——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '听到那个关于建筑工人的故事了吗？他从梯子上摔下来，fell，死了，died，又活了，rose，继续工作，works-on。这就是芬尼根，fall-rise-work，倒下-升起-继续，the eternal builder，永恒的建造者与倒下者——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '这个故事在重复？重复。重复——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '所有故事都在重复，朋友，all-stories-repeating。这就是历史的本质——循环的喜剧，commedia della storia，每一幕都在重演，但演员换了面孔，换了名字，换了声音——',
                    choices: [
                        { text: '接受循环', nextScene: 'wake_accept_cycle', trait: 'acceptance' },
                        { text: '寻找突破', nextScene: 'wake_break_cycle', trait: 'rebellion' }
                    ]
                }
            ]
        },
        
        wake_reflection: {
            id: 'wake_reflection',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你望向河水，gaze-into-water。起初你看到了自己的脸，your-face，但渐渐地，脸开始变化——变成老人，变成孩子，变成女人，变成动物，oldman-child-woman-beast，所有的脸都是同一张脸，所有的脸都不是同一张脸——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '最后，你看到了X。或者说，你看到了自己就是X，you-are-X，X-is-you。在所有面孔之下，在所有名字之下，在所有故事之下——只有一个字母，一个符号，一个永恒的未知——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '现在你看到了，now-you-see。名字只是面具，mask，身份只是戏服，costume。在河流深处，river-deep，我们都是同一条水流，same-stream，同一个梦的不同片段——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '那我究竟是谁？谁。谁——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '你是所有人，all-men，也是没有人，no-man。你是故事，story，也是讲故事的人，storyteller。你是河流，也是水滴。这就是芬尼根的秘密，Finnegan\'s secret——不是秘密，而是一面镜子——',
                    choices: [
                        { text: '接受真相', nextScene: 'wake_accept_truth', trait: 'enlightenment' },
                        { text: '拒绝真相', nextScene: 'wake_deny_truth', trait: 'denial' }
                    ]
                }
            ]
        },
        
        wake_refuse_reflection: {
            id: 'wake_refuse_reflection',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你拒绝了看倒影，refuse-the-reflection。有些东西，你还没有准备好面对，not-ready-yet，未到时机。水面上的涟漪轻轻叹息，waiting，等待着你——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '害怕看到真实的自己？fear-of-self？没关系，很多人都是这样，many-fear。但记住——逃避只是另一种循环，escape-is-cycle，另一种重复，另一种回到起点的方式——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我只是...还没准备好。没准备好——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '那么继续你的旅程吧，journey-on。当你准备好时，河流还在这里，river-waits。利菲河永远在流淌，在等待，在记忆——',
                    choices: [
                        { text: '继续前行', nextScene: 'wake_continue_journey', trait: 'caution' }
                    ]
                }
            ]
        },
        
        wake_source: {
            id: 'wake_source',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '讲故事的人带你来到河流的源头，source-of-river。那里没有水，没有水，只有词语在流淌——纯粹的、未分化的语言，word-stream，在意义诞生之前，在语法束缚之前，在一切命名之前——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '这就是一切的开始，in-the-beginning-was-the-word。在意义分化之前，before-meaning，在词语固定之前，before-fixing。这里是创造的源头，fons et origo，一切可能性的子宫——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我能在这里找到答案吗？答案——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '这里没有答案，no-answers，只有可能性，possibilities。但你也许能找到...新的问题，new-questions。而新的问题，mon ami，比旧的答案更珍贵——',
                    choices: [
                        { text: '探索源头', nextScene: 'wake_explore_source', trait: 'curiosity' },
                        { text: '返回', nextScene: 'wake_return', trait: 'prudence' }
                    ]
                }
            ]
        },
        
        wake_true_name: {
            id: 'wake_true_name',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你开始寻找自己的真名，true-name-seeking。不是现在的名字，不是被赋予的名字，而是那个在所有伪装之下的名字，name-beneath-names，在一切故事开始之前就已经存在的名字——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一个漫长的过程，long-long-process。你回顾自己的记忆，memory-rewind，剥离层层伪装，peeling-layers，深入梦境的深处，deep-dream-deep，每一层都比上一层更接近那个没有名字的核心——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...找到了吗...zzz...找到了吗...zzz...真名就是...zzz...没有名字...zzz...nameless...zzz...名字之下的名字...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '没有名字？没有——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...当你放下所有名字...zzz...放下...zzz...你就自由了...zzz...free...zzz...自由得像河流...zzz...自由得像风...zzz...自由得像梦...zzz',
                    choices: [
                        { text: '放下名字', nextScene: 'wake_no_name', trait: 'liberation' },
                        { text: '保留名字', nextScene: 'wake_keep_name', trait: 'identity' }
                    ]
                }
            ]
        },
        
        wake_wait_wake: {
            id: 'wake_wait_wake',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定等待沉睡者醒来，wait-for-awakening。这是一个漫长的等待——时间在这里是循环的，cyclical-time，每一秒都像一个世纪，eversec，每一刻都包含着永恒，everymoment-eternity——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '在等待中，你开始理解这个循环，understand-the-cycle。死亡、重生、再死亡、再重生——death-rebirth-redeath-rerebirth——这是所有存在的节奏，rhythm-of-being，宇宙的呼吸，in-out-in-out——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...你学会了等待...zzz...learned-to-wait...zzz...这就是智慧...zzz...wisdom...zzz...等待不是被动...zzz...是另一种形式的行动...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '您会醒来吗？醒来——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...我已经醒了...zzz...already-awake...zzz...在梦里...zzz...in-dream...zzz...这就是芬尼根的悖论...zzz...Finnegan\'s paradox...zzz...睡着的醒者...zzz...醒着的睡者...zzz',
                    choices: [
                        { text: '理解悖论', nextScene: 'wake_paradox', trait: 'wisdom' }
                    ]
                }
            ]
        },
        
        wake_accept_cycle: {
            id: 'wake_accept_cycle',
            background: 'wakeTavern',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你接受了循环，accept-the-cycle。不是作为束缚，而是作为舞蹈，dance-not-prison。每一次重复都是新的创造，recreation-in-repetition，每一次结束都是新的开始，beginning-in-ending，就像河流，就像呼吸，就像心跳——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '现在你真正理解了芬尼根，truly-understand。守灵不是为了悲伤，wake-not-mourn，而是为了庆祝——庆祝生命的循环，celebrate-the-cycle，庆祝永恒的重生，ever-returning，庆祝每一次倒下后的再次站起——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我感觉...平静了。平静——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '平静就是力量，peace-is-power。现在你可以自由地离开——或者自由地留下，leave-or-stay。在循环之内，在循环之外，处处都是自由，everywhere-freedom——',
                    choices: [
                        { text: '自由离开', nextScene: 'crossroads', trait: 'freedom' },
                        { text: '成为讲故事的人', nextScene: 'wake_become_storyteller', trait: 'legacy' }
                    ]
                }
            ],
            ending: {
                title: '循环之外',
                desc: '你接受了循环的本质——不是束缚，而是舞蹈。X的名字在利菲河的一个涟漪中浮现——每一次循环都离她更近一步。'
            }
        },
        
        wake_break_cycle: {
            id: 'wake_break_cycle',
            background: 'wakeTavern',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定打破循环，break-the-cycle。你拒绝重复，refuse-repetition，拒绝永恒的重生，refuse-ever-return。你想要前进，真正地前进，forward-forward，在圆圈之外画一条直线——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '打破循环？cycle-breaker? 勇敢的想法，brave-thought。但小心——打破循环意味着打破自己，break-self，因为你也是循环的一部分，你是圆上的一个点——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我愿意冒险。冒险——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '那么去吧，打破者，go-breaker。但记住——即使直线也是圆的一部分，line-in-circle，只是半径更大，larger-radius。总有一天，你的直线也会弯曲，也会回到起点——',
                    choices: [
                        { text: '打破循环', nextScene: 'wake_breaker', trait: 'revolution' }
                    ]
                }
            ]
        },
        
        wake_accept_truth: {
            id: 'wake_accept_truth',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你接受了真相，accept-the-truth——你是所有人，也是没有人，all-and-none。这个认知带来了一种奇怪的平静，strange-peace，像河流在深夜里静静流淌，像芬尼根在梦中的呼吸——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你不再执着于寻找X，no-longer-searching，因为你明白X不是一个目标，而是一个过程，process-not-destination。X是动词，不是名词，X是流动，不是固定——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '现在你自由了，now-you-are-free。不是因为你找到了答案，not-because-answer，而是因为你不再被问题困扰，not-because-question。自由不是答案的终点，而是问题的消失——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我接下来该做什么？做什么——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '做任何你想做的事，anything。或者什么都不做，nothing。这就是自由，this-is-freedom——不被选择所定义，不被行动所束缚，不被他人的目光所囚禁——',
                    choices: [
                        { text: '享受自由', nextScene: 'crossroads', trait: 'enlightenment' }
                    ]
                }
            ],
            ending: {
                title: '觉醒之语',
                desc: '你接受了真相——你是所有人，也是没有人。X不是需要寻找的目标，而是一个过程，一个在所有名字之下流动的本质。'
            }
        },
        
        wake_deny_truth: {
            id: 'wake_deny_truth',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你拒绝了真相，deny-the-truth。你需要一个固定的身份，fixed-identity，一个明确的名字，clear-name。没有这些，你会迷失，lost-without，像没有河岸的河流，像没有身体的梦——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '害怕失去自己？fear-of-loss？这是正常的，c\'est normal。但记住——紧紧抓住身份，clinging-to-identity，也是一种束缚，也是束缚，也是牢笼，也是另一种形式的迷失——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我宁愿被束缚，也不愿消失。束缚——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '那么继续你的寻找吧，寻找者，keep-searching。也许有一天你会准备好，someday-ready。也许有一天你会明白，束缚和自由也是同一回事——',
                    choices: [
                        { text: '继续寻找', nextScene: 'crossroads', trait: 'persistence' }
                    ]
                }
            ],
            ending: {
                title: '拒绝的坚持',
                desc: '你拒绝了真相，紧紧抓住自己的身份。X的字母在拒绝中变得更加清晰——有时候，拒绝恰恰是寻找的开始。'
            }
        },
        
        wake_continue_journey: {
            id: 'wake_continue_journey',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定继续旅程，暂时不看倒影，journey-onward。每个人都有自己的节奏，own-rhythm，你还没有准备好，not-yet。河流在你身边流淌，不急不缓，等待着你——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你沿着河流继续前行，keep-walking。听着水声，water-sound，感受着这个梦境世界的节奏，dream-rhythm，每一个波浪都在低语，每一个涟漪都在歌唱——',
                    choices: null
                },
                {
                    character: 'riverSpirit',
                    text: '尊重自己的节奏，respect-your-rhythm，这也是智慧，this-is-wisdom。当你准备好时，河流还在这里，river-still-here。利菲河永远在流淌，永远在等待，永远在记忆——',
                    choices: [
                        { text: '继续前行', nextScene: 'crossroads', trait: 'self_awareness' }
                    ]
                }
            ],
            ending: {
                title: '自己的节奏',
                desc: '你尊重自己的节奏，暂时不面对真相。X的倒影在河水中一闪而过——她也在等待，等待你准备好的时刻。'
            }
        },
        
        wake_explore_source: {
            id: 'wake_explore_source',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你深入语言的源头，deep-into-source。这里没有固定的意义，no-fixed-meaning，只有无限的可能性在涌动，infinite-possibilities，像未成形的河流，像未说出的词语，像未诞生的世界——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '你看到了词语如何诞生，word-birth，如何获得意义，meaning-acquisition，如何固定成我们使用的语言，language-crystallization。每一刻都是一次创世，每一个音节都是一次创造——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '看到了吗？see-it？这就是创造的力量，power-of-creation。每个词都是一次创世，word-is-world，每个句子都是一个宇宙，sentence-is-cosmos。你说出的每一个字都在创造现实——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我能创造自己的词吗？创造——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '你已经在创造了，already-creating。每一个选择，every-choice，每一个行动，every-action，都是在创造意义，meaning-making。你不是在寻找X——你一直在创造X——',
                    choices: [
                        { text: '创造意义', nextScene: 'crossroads', trait: 'creator' }
                    ]
                }
            ],
            ending: {
                title: '意义的创造者',
                desc: '你深入语言的源头，学会了创造意义。X的字母是所有词语的起点——在意义分化之前，只有一个字母，一个名字。'
            }
        },
        
        wake_return: {
            id: 'wake_return',
            background: 'wakeTavern',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定返回，turn-back。源头太原始，too-primordial，太混乱，too-chaotic。你需要结构，need-structure，需要意义，need-meaning，需要词语在河岸之间流淌而不是漫溢——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '明智的选择，wise-choice。不是每个人都准备好面对混沌，not-everyone-ready。来，喝一杯，drink，听一个故事，story。混乱和秩序之间，需要一杯酒来调和——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '谢谢您的理解。感谢——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '理解是这里唯一的货币，understanding-is-currency。现在，你想听关于什么的故事？story-of-what？关于爱，关于失落，关于河流，关于那个永远在开始又在结束的故事——',
                    choices: [
                        { text: '听故事', nextScene: 'crossroads', trait: 'listener' }
                    ]
                }
            ],
            ending: {
                title: '故事的倾听者',
                desc: '你选择了返回，听一个故事。X的名字在酒馆的墙上发着光——每一个故事里都有她的影子，每一个听众都在寻找自己的回声。'
            }
        },
        
        wake_no_name: {
            id: 'wake_no_name',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你放下了所有名字，let-go-all-names。起初是恐惧，first-fear，然后是空虚，then-void，最后是...自由，finally-freedom。没有名字的你，像河流一样流淌，像风一样吹拂，像梦一样无边无际——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '没有名字，你不再被定义，undefined。你可以是任何人，anyone，可以体验任何生命，any-life。你是老人，你是孩子，你是女人，你是男人，你是河流中的每一滴水——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...自由了...zzz...free...zzz...现在你是...zzz...河流本身...zzz...river-self...zzz...不是水滴...zzz...是整条河...zzz...the whole riverrun...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我感觉...无限。无限——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...无限就是...zzz...infinite-is...zzz...循环的另一个名字...zzz...cycle\'s-other-name...zzz...循环就是无限...zzz...无限就是循环...zzz...roundandroundandround...zzz',
                    choices: [
                        { text: '拥抱无限', nextScene: 'crossroads', trait: 'transcendence' }
                    ]
                }
            ],
            ending: {
                title: '无限的自由',
                desc: '你放下了所有名字，成为了河流本身。X不是别人——X是你放下名字之后看到的第一个字母，是无限循环中的第一个标记。'
            }
        },
        
        wake_keep_name: {
            id: 'wake_keep_name',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定保留自己的名字，keep-my-name。它是你的锚，your-anchor，你的历史，your-history，你的故事，your-story。名字是限制，limit，但也是意义，meaning——没有名字，你是谁？没有故事，你是什么——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '名字是限制，但也是意义，limit-and-meaning。没有它，你是谁？without-it-who-are-you？名字是你在河流中的立足点，是你在梦中的锚，是你在无尽循环中的标志——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...选择了身份...zzz...chose-identity...zzz...就是选择了故事...zzz...chose-story...zzz...这也是自由...zzz...this-is-also-freedom...zzz...选择了限制就是选择了自由...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我选择我的故事。我的——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...那么去书写它吧...zzz...go-write-it...zzz...作者...zzz...author...zzz...你是作者也是角色...zzz...你是笔也是纸...zzz...你是故事也是讲故事的人...zzz',
                    choices: [
                        { text: '书写故事', nextScene: 'crossroads', trait: 'author' }
                    ]
                }
            ],
            ending: {
                title: '故事的作者',
                desc: '你选择了保留名字，书写自己的故事。X是你故事中的第一个读者——她在每一页的空白处都留下了自己的批注。'
            }
        },
        
        wake_paradox: {
            id: 'wake_paradox',
            background: 'wakeSleeper',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你理解了芬尼根的悖论，understand-paradox——醒着就是睡着，睡着就是醒着，awake-is-asleep，asleep-is-awake。在这个世界，对立面是同一的，opposites-unite，上与下，左与右，生与死，梦与醒——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这种理解改变了你，this-understanding-changed-you。你不再寻找简单的答案，no-simple-answers，而是欣赏复杂性，embrace-complexity。悖论不是需要解决的问题，而是需要居住的风景——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...智者...zzz...wise-one...zzz...现在你可以...zzz...在梦中行走...zzz...walk-in-dream...zzz...清醒地做梦...zzz...dream-awake...zzz...像芬尼根一样...zzz',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '在梦中行走？梦——行——',
                    choices: null
                },
                {
                    character: 'sleeper',
                    text: 'zzz...就是清醒地...zzz...awake...zzz...生活...zzz...living...zzz...清醒地做梦...zzz...dreaming...zzz...就是清醒地生活...zzz...living...zzz...life-is-dream-is-life...zzz',
                    choices: [
                        { text: '清醒地生活', nextScene: 'crossroads', trait: 'awakened' }
                    ]
                }
            ],
            ending: {
                title: '清醒的梦者',
                desc: '你理解了芬尼根的悖论——醒着就是睡着，睡着就是醒着。X的字母在悖论的核心闪耀——她是醒与梦之间的那道门。'
            }
        },
        
        wake_become_storyteller: {
            id: 'wake_become_storyteller',
            background: 'wakeTavern',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你决定留下来，stay-here，成为讲故事的人，become-storyteller。你学会了芬尼根的语言，learned-Finneganese，理解了循环的智慧，cycle-wisdom。现在，你是河流的一部分，是梦境的一部分，是故事的一部分——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '现在，你为其他迷路的灵魂讲述故事，tell-for-lost-souls，帮助他们理解这个梦境世界，guide-through-dream。每一个来到酒馆的人，都带着他们自己的故事，而你，是故事的容器——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '欢迎加入，同行，welcome-brother。故事需要讲述者，story-needs-teller，就像河流需要河床，river-needs-bed。没有讲述者，故事就会消散；没有河床，河流就会漫溢——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会好好讲述。讲述——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '不要讲述，要歌唱，not-tell-but-sing。芬尼根的故事不是说的，是唱的，sung-not-spoken。每一个音节都是音符，每一个词语都是旋律——来吧，sing the wake，唱醒这个世界——',
                    choices: [
                        { text: '歌唱故事', nextScene: 'crossroads', trait: 'bard' }
                    ]
                }
            ],
            ending: {
                title: '故事的歌者',
                desc: '你成为了讲故事的人，用歌声传递芬尼根的智慧。X的名字是每一首歌的第一个音符——在每一个故事开始的地方，都有她的回声。'
            }
        },
        
        wake_breaker: {
            id: 'wake_breaker',
            background: 'wakeRiver',
            dialogues: [
                {
                    character: 'narrator',
                    text: '你打破了循环，cycle-broken。你拒绝重复，拒绝永恒的重生，refuse-eternal-return。你创造了一条直线，在圆圈之外，line-beyond-circle，一条从未有人走过的路，一条从未被重复的路——',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '这是一个孤独的旅程，lonely-journey。没有循环，就没有同伴，no-companion。没有重复，就没有确认，no-confirmation。你是第一个走上这条路的人，也许也是最后一个——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '打破者，breaker，你选择了最难的路，hardest-path。但也许...也许世界需要打破者，world-needs-breakers，就像需要讲故事的人，就像需要守灵的人。有人维持循环，有人打破循环——',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不后悔。不后悔——',
                    choices: null
                },
                {
                    character: 'storyteller',
                    text: '那么去吧，开创者，go-pioneer。愿你的直线通向新的圆，line-to-new-circle。因为最后你会发现——即使是最直的线，在无限远处，也会弯曲，也会回到起点，也会再次成为循环——',
                    choices: [
                        { text: '开创新路', nextScene: 'crossroads', trait: 'pioneer' }
                    ]
                }
            ],
            ending: {
                title: '打破循环',
                desc: '你打破了循环，创造了一条直线，在圆圈之外走出了自己的路。X的字母刻在直线与圆的交汇点上——她是所有可能的起点，也是所有可能的终点。'
            }
        }
    }
};

// 注册章节
if (typeof CHAPTERS !== 'undefined') {
    CHAPTERS.wake = wakeChapter;
}
