// CHAPTERS 格式兼容层 - 自动将各种格式转换为 SCRIPT 格式
// 此文件必须在所有章节脚本之后加载

// 为 cthulhu-chapter.js 提供兼容函数
function addClue(clueId) {
    if (typeof gameState !== 'undefined' && !gameState.clues.includes(clueId)) {
        gameState.clues.push(clueId);
        console.log('获得线索:', clueId);
    }
}

function addTrait(traitId) {
    if (typeof gameState !== 'undefined' && !gameState.traits.includes(traitId)) {
        gameState.traits.push(traitId);
        console.log('获得特质:', traitId);
    }
}

// 通用转换函数：将 text 格式转换为 dialogues 格式
function convertTextFormat(scriptObj, scriptName) {
    if (!scriptObj) return;
    console.log('开始转换 ' + scriptName + ' 格式');
    
    Object.entries(scriptObj).forEach(([sceneId, sceneData]) => {
        // 如果已经是正确格式，跳过
        if (sceneData.dialogues) {
            return;
        }
        
        // 转换 text → dialogues
        const dialogues = [];
        if (sceneData.text) {
            dialogues.push({
                speaker: sceneData.character || 'narrator',
                text: sceneData.text
            });
        }
        
        // 转换 choices
        let choices = [];
        if (sceneData.choices) {
            choices = sceneData.choices.map(c => ({
                text: c.text,
                next: c.next,
                trait: c.trait,
                clue: c.clue,
                cost: c.cost || {}
            }));
            // 在最后一个对话上标记 showChoices
            if (dialogues.length > 0) {
                dialogues[dialogues.length - 1].showChoices = true;
            }
        }
        
        // 统一返回路径：所有指向 crossroads 的 next 改为 aleph_return
        choices.forEach(c => {
            if (c.next === 'crossroads') {
                c.next = 'aleph_return';
            }
        });
        
        // 转换 character → characters
        let characters = [];
        if (sceneData.character && sceneData.character !== 'narrator' && sceneData.character !== null) {
            characters.push({ id: sceneData.character, position: 'center' });
        }
        
        // 构建 SCRIPT 格式的场景
        SCRIPT[sceneId] = {
            scene: sceneData.bg || sceneData.scene || 'crossroads',
            characters: characters,
            dialogues: dialogues,
            choices: choices.length > 0 ? choices : undefined
        };
        
        // 保留 onEnter 回调（addClue/addTrait 等逻辑）
        if (sceneData.onEnter) {
            SCRIPT[sceneId].onEnter = sceneData.onEnter;
        }
        
        // 如果有 ending
        if (sceneData.ending) {
            if (sceneData.ending === true) {
                // ending: true 格式 → 转换为 { title, desc } 对象
                SCRIPT[sceneId].ending = {
                    title: sceneData.endingTitle || '结局',
                    desc: sceneData.endingDesc || ''
                };
            } else {
                SCRIPT[sceneId].ending = sceneData.ending;
            }
        }
        
        // 保留 endingTitle/endingDesc（用于 ending: true 格式）
        if (sceneData.endingTitle) {
            SCRIPT[sceneId].endingTitle = sceneData.endingTitle;
        }
        if (sceneData.endingDesc) {
            SCRIPT[sceneId].endingDesc = sceneData.endingDesc;
        }
        
        // 保留 clickables
        if (sceneData.clickables) {
            SCRIPT[sceneId].clickables = sceneData.clickables;
        }
        
        console.log('已转换' + scriptName + '场景:', sceneId);
    });
    
    console.log(scriptName + ' 格式转换完成');
}

(function() {
    // 处理 CHAPTERS 格式
    if (typeof CHAPTERS !== 'undefined') {
        console.log('开始转换 CHAPTERS 格式，发现章节:', Object.keys(CHAPTERS));
        
        Object.values(CHAPTERS).forEach(chapter => {
            if (!chapter.scenes) {
                console.log('章节没有 scenes 属性，跳过');
                return;
            }
            
            Object.entries(chapter.scenes).forEach(([sceneId, sceneData]) => {
                // 转换格式：character → speaker, background → scene
                const convertedDialogues = sceneData.dialogues ? sceneData.dialogues.map(d => {
                    const converted = { ...d };
                    if (converted.character) {
                        converted.speaker = converted.character;
                        delete converted.character;
                    }
                    return converted;
                }) : [];

                // 找到最后一个有 choices 的对话，将其设为 showChoices
                let lastChoiceIndex = -1;
                convertedDialogues.forEach((d, i) => {
                    if (d.choices && d.choices.length > 0) {
                        lastChoiceIndex = i;
                    }
                });
                if (lastChoiceIndex >= 0) {
                    convertedDialogues.forEach((d) => {
                        delete d.choices;
                    });
                    convertedDialogues[lastChoiceIndex].showChoices = true;
                }

                // 转换 choices 格式
                let convertedChoices = [];
                if (sceneData.dialogues) {
                    for (const d of sceneData.dialogues) {
                        if (d.choices && d.choices.length > 0) {
                            convertedChoices = d.choices.map(c => ({
                                text: c.text,
                                next: c.nextScene || c.next,
                                trait: c.trait,
                                clue: c.clue,
                                cost: c.cost || {}
                            }));
                            break;
                        }
                    }
                }
                
                // 统一返回路径：所有指向 crossroads 的 next 改为 aleph_return
                convertedChoices.forEach(c => {
                    if (c.next === 'crossroads') {
                        c.next = 'aleph_return';
                    }
                });

                // 构建 SCRIPT 格式的场景
                SCRIPT[sceneId] = {
                    scene: sceneData.background || sceneData.scene || 'crossroads',
                    characters: sceneData.characters || [],
                    dialogues: convertedDialogues,
                    choices: convertedChoices.length > 0 ? convertedChoices : undefined,
                    onEnter: sceneData.onEnter
                };

                // 如果有 ending
                if (sceneData.ending) {
                    if (sceneData.ending === true) {
                        SCRIPT[sceneId].ending = {
                            title: sceneData.endingTitle || '结局',
                            desc: sceneData.endingDesc || ''
                        };
                    } else {
                        SCRIPT[sceneId].ending = sceneData.ending;
                    }
                }
                
                console.log('已转换CHAPTERS场景:', sceneId);
            });
        });
        
        console.log('CHAPTERS 格式转换完成');
    }

    // 处理 CTHULHU_SCRIPT 格式
    if (typeof CTHULHU_SCRIPT !== 'undefined') {
        convertTextFormat(CTHULHU_SCRIPT, 'CTHULHU');
    }
    
    // 处理 WUXIA_SCRIPT 格式
    if (typeof WUXIA_SCRIPT !== 'undefined') {
        convertTextFormat(WUXIA_SCRIPT, 'WUXIA');
    }
    
    // 处理 COWBOY_BEBOP_SCRIPT 格式
    if (typeof COWBOY_BEBOP_SCRIPT !== 'undefined') {
        convertTextFormat(COWBOY_BEBOP_SCRIPT, 'COWBOY_BEBOP');
    }
    
    // 处理 MIDDLE_EARTH_SCRIPT 格式
    if (typeof MIDDLE_EARTH_SCRIPT !== 'undefined') {
        convertTextFormat(MIDDLE_EARTH_SCRIPT, 'MIDDLE_EARTH');
    }
    
    // BLADE_RUNNER_SCRIPT 已经是正确的 dialogues 格式，直接合并
    if (typeof BLADE_RUNNER_SCRIPT !== 'undefined') {
        Object.assign(SCRIPT, BLADE_RUNNER_SCRIPT);
        console.log('BLADE_RUNNER_SCRIPT 直接合并完成，场景:', Object.keys(BLADE_RUNNER_SCRIPT));
    }
})();
