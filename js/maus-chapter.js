/**
 * 鼠族世界
 * 主题：历史创伤、生存与记忆、父子关系
 */

const mausChapter = {
    id: 'maus',
    name: '幸存者',
    description: '通过记忆，我们活着。通过讲述，我们幸存。',
    
    scenes: {
        maus_entrance: {
            id: 'maus_entrance',
            background: 'mausFamily',
            dialogues: [
                {
                    character: 'narrator',
                    text: '在这一格画面里，一只老老鼠坐在厨房桌边。他在数药片。一颗一颗，排成整齐的行列。他的爪子瘦得像干树枝。画面是黑白的，只有他手臂上那一串数字是墨水般深的蓝黑色。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '所以你来了。你总是来，但不总是问。今天你想问什么？',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我想听。从头开始。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '从头。好。但你得知道——有些事讲出来不像听上去那么简单。我把它们画在脑子里，一格一格。但说出来...不一样。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '那是1939年。猫来了。他们敲了门。就这样。',
                    choices: [
                        { text: '发生了什么', nextScene: 'maus_war', trait: 'listener' },
                        { text: '您是如何幸存的', nextScene: 'maus_survival', trait: 'seeker' },
                        { text: '日常是怎样的', nextScene: 'maus_daily_life', trait: 'empathetic' }
                    ]
                }
            ]
        },
        
        maus_war: {
            id: 'maus_war',
            background: 'mausGhetto',
            dialogues: [
                {
                    character: 'narrator',
                    text: '下一格。画面变了。你看到猫的影子——巨大的、黑色的猫的影子——越过整条街道。老鼠们挤在墙角，缩成小小的灰色团块。黑白线条画出了铁丝网，画出了破碎的窗户，画出了老鼠脸上那种你无法用语言描述的表情。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '他们把我们从洞里赶出来。猫兵站在街上，靴子踏在石板上。一个包裹。他们说，只准带一个包裹。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '一个包裹。你拿什么？照片？面包？你父亲的手表？我拿了面包。到现在我还记得那块表的样子。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '隔离区...是什么样的？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '挤。臭。饿。猪警察站在外面，有时候他们往里面扔面包。有时候他们假装没看见。但猫兵每天来。他们数我们。像数面包。',
                    choices: [
                        { text: '继续听', nextScene: 'maus_continue', trait: 'empathy' },
                        { text: '这太沉重了', nextScene: 'maus_heavy', trait: 'overwhelmed' }
                    ]
                }
            ]
        },
        
        maus_survival: {
            id: 'maus_survival',
            background: 'mausCamp',
            dialogues: [
                {
                    character: 'narrator',
                    text: '这格画面更暗了。墨水几乎淹没了纸面。你看到一排排条纹制服的老鼠，站在雪地里。他们的耳朵冻得发白。瞭望塔上，猫的剪影一动不动。我不知道该怎么画这个。这些线条太轻了。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '幸存。不是勇敢。勇敢的人死了。幸存的人...运气好。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '你学会一些事。哪只猫可以靠近。哪只猫会打。哪只猫只要给他一根烟就转头不看。学会了这些，你就能多活一天。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '您做了什么？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我修鞋。猫的靴子。修一双，换一碗汤。不是好汤。但里面有东西。有时候一片土豆。有时候...什么都没有。',
                    choices: [
                        { text: '放弃什么', nextScene: 'maus_sacrifice', trait: 'questioner' },
                        { text: '您后悔吗', nextScene: 'maus_regret', trait: 'empathy' }
                    ]
                }
            ]
        },
        
        maus_continue: {
            id: 'maus_continue',
            background: 'mausCamp',
            dialogues: [
                {
                    character: 'survivor',
                    text: '你还要听。好。我继续说。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '在营里，有一只猪。波兰猪。他也在里面。不知道为什么。他给我面包。一次。两次。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '在那个地方，一块面包比你的命还贵。他给了我。我没问为什么。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '他活下来了吗？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我不知道。解放那天，狗兵来了。很大的狗。他们把门打开。我走出去。没看见他。',
                    choices: [
                        { text: '记忆很重要', nextScene: 'maus_memory', trait: 'understanding' },
                        { text: '还有其他故事吗', nextScene: 'maus_more_stories', trait: 'curiosity' }
                    ]
                }
            ]
        },
        
        maus_heavy: {
            id: 'maus_heavy',
            background: 'mausFamily',
            ending: {
                title: '记忆的重量',
                desc: '这一格，你合上了书页。但黑白画面不会消失。它们留在你视网膜上，像曝光过度的底片。X在日记里写："有些故事太重了，只能分很多次听。"'
            },
            dialogues: [
                {
                    character: 'survivor',
                    text: '太重了。我知道。每天醒来，这些记忆就在这里。我不请你背。你背不动。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '你走吧。下次再来。我还在这里。我总是在这里。药片数完了，我会再数一遍。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我不是不想听。我只是...不知道怎么把这一切放进脑子里。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '没人知道。连我也不知道。你去吧。',
                    choices: [
                        { text: '稍后再回来', nextScene: 'crossroads', trait: 'respectful' }
                    ]
                }
            ]
        },
        
        maus_sacrifice: {
            id: 'maus_sacrifice',
            background: 'mausCamp',
            dialogues: [
                {
                    character: 'survivor',
                    text: '放弃什么？你把你的名字交出去。他们给你一个号码。你看——在这一格里，老老鼠卷起袖子。前臂上，一串数字。墨水的颜色比周围的皮肤还深。我画的时候手在抖。这些数字在纸上看起来那么轻，但它们在人身上永远不会消失。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '放弃你的名字。放弃你的尊严。放弃...别人。有些老鼠我出卖了。不是故意的。但出卖了。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '您原谅自己了吗？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '原谅？我不懂这个词。活着。活着就是我的回答。',
                    choices: [
                        { text: '理解', nextScene: 'maus_understanding', trait: 'empathy' },
                        { text: '评判', nextScene: 'maus_judgment', trait: 'moral' }
                    ]
                }
            ]
        },
        
        maus_regret: {
            id: 'maus_regret',
            background: 'mausFamily',
            dialogues: [
                {
                    character: 'survivor',
                    text: '后悔。每天。每天早上醒来，我问自己：为什么我在这里？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我的妹妹。她比我小。她被带走了。我站在队伍的另一边。我看着她被猫带走。我没有动。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你不能动。动了你也会死。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我知道。但知道是一回事。在脑子里知道。在心里...不一样。',
                    choices: [
                        { text: '幸存者内疚', nextScene: 'maus_guilt', trait: 'understanding' }
                    ]
                }
            ]
        },
        
        maus_memory: {
            id: 'maus_memory',
            background: 'mausFamily',
            ending: {
                title: '见证者',
                desc: '在这一格，你看到自己的手——人类的手——握着这本黑白漫画。X在边缘写道："见证就是最大的抵抗。画下来，就是不让它们消失。"'
            },
            onEnter: () => { if (typeof grantHiddenClue === 'function') grantHiddenClue('maus'); },
            dialogues: [
                {
                    character: 'survivor',
                    text: '记忆。没有记忆，他们就真的死了。第二次死。第一次是身体。第二次是没有人记得。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '所以我讲。不是为我自己。我没什么好讲的。是为他们。那些老鼠。那些脸。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会记住。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '那就够了。你记住。然后你讲给别人。这就是全部。',
                    choices: [
                        { text: '成为见证者', nextScene: 'crossroads', trait: 'witness' }
                    ]
                }
            ]
        },
        
        maus_more_stories: {
            id: 'maus_more_stories',
            background: 'mausGhetto',
            ending: {
                title: '爱的力量',
                desc: '在最后一格，两只老鼠在铁丝网下握住了爪子。画面很小，缩在角落里，但它是整页唯一不全是阴影的地方。X留下了这个标记——一个圆圈，圈住了这两只老鼠。'
            },
            dialogues: [
                {
                    character: 'survivor',
                    text: '更多故事。太多了。但我讲一个不一样的。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '在隔离区，我认识了一只母老鼠。她瘦。头发乱。但她笑起来——你在这地方不常看到笑。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我们结婚了。没有戒指。没有证婚人。一只猪警察假装没看见。我们说了几句话。就这样。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '她...活下来了吗？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '活下来了。我们一起出来。一起坐船。一起到了这里。她现在在隔壁房间。她也在数药片。',
                    choices: [
                        { text: '爱的力量', nextScene: 'crossroads', trait: 'hope' }
                    ]
                }
            ]
        },
        
        maus_understanding: {
            id: 'maus_understanding',
            background: 'mausFamily',
            ending: {
                title: '理解之路',
                desc: '你合上这一章。黑白画面还在你眼前晃动。X在笔记里说："理解不是原谅。理解是看见。看见就够了。"'
            },
            dialogues: [
                {
                    character: 'survivor',
                    text: '你听了。你听了就够了。你不判断。不判断的人很少。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '在那个地方，没有对错。只有今天。你能不能活过今天。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我能理解。至少，我在试着理解。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '试着就够了。你父亲——他不理解。他不想理解。你不一样。',
                    choices: [
                        { text: '尊重', nextScene: 'crossroads', trait: 'respect' }
                    ]
                }
            ]
        },
        
        maus_judgment: {
            id: 'maus_judgment',
            background: 'mausFamily',
            ending: {
                title: '离开者',
                desc: '你放下了这本漫画。但放不下那些画面。X写道："离开不是逃避。有时候，离开只是因为承受不了——而承受不了本身也是一种见证。"'
            },
            dialogues: [
                {
                    character: 'protagonist',
                    text: '您出卖了别人。您怎么能...',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '你不在那里。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '在这一格里，老老鼠没有表情。他的眼睛是两条黑线。我不知道该怎么画他的眼睛。愤怒？悲伤？还是什么都没有？也许什么都没有才是最可怕的。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '你在这里。你安全。你可以判断。但如果你在那里——你也会做一样的事。或者你死了。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我选择活着。',
                    choices: [
                        { text: '继续听', nextScene: 'maus_continue', trait: 'openness' },
                        { text: '离开', nextScene: 'crossroads', trait: 'uncomfortable' }
                    ]
                }
            ]
        },
        
        maus_guilt: {
            id: 'maus_guilt',
            background: 'mausFamily',
            ending: {
                title: '致敬',
                desc: '你看着这一页——老老鼠的手臂上，数字在黑白画面里格外醒目。X在页边画了一个小小的星。不是六角星。就是一个普通的星。她说："纪念不需要形状。"'
            },
            dialogues: [
                {
                    character: 'survivor',
                    text: '我活着。我母亲死了。我妹妹死了。我父亲死了。我活着。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '有时候我想，也许他们替我死了。我不知道。这种想法不讲道理。但它在这里。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '您用讲述纪念他们。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '我讲。我每天讲。但讲不完。他们的脸太多了。',
                    choices: [
                        { text: '致敬', nextScene: 'crossroads', trait: 'honor' }
                    ]
                }
            ]
        },

        // ========== 新增：集中营日常 ==========
        maus_daily_life: {
            id: 'maus_daily_life',
            background: 'mausFamily',
            dialogues: [
                {
                    character: 'narrator',
                    text: '画面切换。凌晨四点。雪地。猫兵站在高台上，他的影子盖住了整个画面下三分之一。一排排老鼠，条纹制服，每一只都缩着脖子。在这一格里，你能看见他们的呼吸——白色的，像一小团一小团要消失的烟。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '早上四点。点名。站两小时。你旁边的人倒了，你不能扶。你扶了，猫兵看见。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '面包。拳头大的面包。这是你一天。你咬一小口。很小。放在嘴里不咽。让它在嘴里化掉。',
                    choices: null
                },
                {
                    character: 'narrator',
                    text: '下一格。一只老老鼠在教旁边的年轻老鼠——用爪子比划着，如何在雪地里偷偷换脚。他画了一个小圆圈，像在传授某种秘密技艺。画面里，他们的眼睛是仅有的亮点。',
                    choices: [
                        { text: '这些日常怎么坚持下来的？', nextScene: 'maus_table_talk', trait: 'empathetic' },
                        { text: '继续听', nextScene: 'maus_final', trait: 'memory' }
                    ]
                }
            ]
        },

        maus_table_talk: {
            id: 'maus_table_talk',
            background: 'mausFamily',
            dialogues: [
                {
                    character: 'survivor',
                    text: '画面回到厨房。老老鼠面前的药片还没数完。他拿起一颗，放在桌上，推过去，又拿回来。窗外，一只猫的影子在街对面走过。与画面无关。与画面有关。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '怎么坚持？不坚持就死了。没有别的。你就是站着。站到下一次点名。然后下一次。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '但晚上，我们讲。小声讲。讲战前吃的面包。讲阳光。讲河。那些东西在脑子里，不在胃里。但也能让你活下去。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: 'X也问过您这些吗？',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '问过。她坐在你现在坐的椅子上。她问我怎么画。我说，不要画。画下来太轻了。但她还是画了。',
                    choices: [
                        { text: '明白了一些东西', nextScene: 'maus_final', trait: 'witness' },
                        { text: '向她致敬', nextScene: 'crossroads', trait: 'honor' }
                    ]
                }
            ]
        },

        maus_final: {
            id: 'maus_final',
            background: 'mausFamily',
            ending: {
                title: '讲述者',
                desc: '最后一格。老老鼠放下了袖子，遮住了手臂上的数字。但你还在看。你也还在画。X写道："画这些对吗？把这些变成图画是对的吗？我不知道。但我画了。因为不画，它们就真的消失了。"'
            },
            dialogues: [
                {
                    character: 'survivor',
                    text: '在这最后一格里，老老鼠卷起了袖子。那串数字露出来。我画了很久。每一笔。每一划。墨水不够黑。怎么画都不够黑。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: '你看到了。这个号码。他们给我的。我留着。不是纪念。是...证据。',
                    choices: null
                },
                {
                    character: 'protagonist',
                    text: '我会记住。我会继续画。',
                    choices: null
                },
                {
                    character: 'survivor',
                    text: 'X说她要画下来。我说，画吧。但画在纸上，和画在肉上，不一样。去吧。把故事带走。我继续数药片。',
                    choices: [
                        { text: '离开这个世界', nextScene: 'crossroads', trait: 'memory' }
                    ]
                }
            ]
        }
    }
};

// 注册章节
if (typeof CHAPTERS !== 'undefined') {
    CHAPTERS.maus = mausChapter;
}