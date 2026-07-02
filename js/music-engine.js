/**
 * 场景音乐引擎 - 程序化生成
 * 使用 Web Audio API 为每个场景/世界创作独特的氛围音乐
 * 
 * 音乐风格按原著氛围设计：
 * - 序章花园：博尔赫斯式静谧，钢琴+弦乐泛音
 * - 无限图书馆：空旷回声，管风琴+低频嗡鸣
 * - 阿莱夫：无限叠加的和声，所有音色的交汇
 * - 银翼杀手：Vangelis式合成器，雨声+忧郁旋律
 * - 克苏鲁：深海低频，不和谐音程，水压感
 * - 爱丽丝：维多利亚音乐盒，变调圆舞曲
 * - 中土世界：托尔金式民谣，竖琴+长笛
 * - 金庸武侠：古琴+竹笛，五声音阶
 * - 星际牛仔：爵士+布鲁斯，萨克斯+贝斯
 * - 黑客帝国：工业电子，低频脉冲+代码雨
 * - 冰与火之歌：中世纪合唱，弦乐+定音鼓
 * - 千与千寻：久石让式钢琴，温暖弦乐
 * - 芬尼根守灵夜：循环叠加的语音碎片，凯尔特风笛
 * - 守望者：黑暗爵士，不和谐和弦+脉搏节拍
 * - 鼠族：极简钢琴，犹太民间音乐元素
 */

class SceneMusicEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.currentScene = null;
        this.currentNodes = [];
        this.isPlaying = false;
        this.volume = 0.3;
        this.fadeTime = 2.0;
        this.loopIntervals = [];
    }

    init() {
        if (this.ctx) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 0;
        this.masterGain.connect(this.ctx.destination);
        
        // 添加混响效果
        this.reverb = this.createReverb();
        this.reverbGain = this.ctx.createGain();
        this.reverbGain.gain.value = 0.3;
        this.reverbGain.connect(this.masterGain);
        this.reverb.connect(this.reverbGain);
    }

    createReverb() {
        const convolver = this.ctx.createConvolver();
        const rate = this.ctx.sampleRate;
        const length = rate * 3;
        const impulse = this.ctx.createBuffer(2, length, rate);
        for (let ch = 0; ch < 2; ch++) {
            const data = impulse.getChannelData(ch);
            for (let i = 0; i < length; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5);
            }
        }
        convolver.buffer = impulse;
        return convolver;
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggle() {
        if (!this.ctx) this.init();
        this.resume();
        
        if (this.isPlaying) {
            this.fadeOut();
            return false; // 正在关闭
        } else {
            if (this.currentScene) {
                this.playScene(this.currentScene);
                return true; // 正在开启
            }
            return false; // 无场景可播放
        }
    }

    setVolume(v) {
        this.volume = Math.max(0, Math.min(1, v));
        if (this.masterGain && this.isPlaying) {
            this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.1);
        }
    }

    fadeOut() {
        if (!this.ctx || !this.isPlaying) return;
        this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, this.fadeTime / 3);
        setTimeout(() => {
            this.stopAll();
            this.isPlaying = false;
        }, this.fadeTime * 1000 + 500);
    }

    stopAll() {
        this.loopIntervals.forEach(id => clearInterval(id));
        this.loopIntervals = [];
        this.currentNodes.forEach(node => {
            try {
                if (node.stop) node.stop();
                if (node.disconnect) node.disconnect();
            } catch(e) {}
        });
        this.currentNodes = [];
    }

    playScene(sceneId) {
        if (!this.ctx) this.init();
        this.resume();
        
        this.stopAll();
        this.currentScene = sceneId;
        this.isPlaying = true;
        
        const generator = this.musicGenerators[sceneId] || this.musicGenerators['garden'];
        generator.call(this);
        
        this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, this.fadeTime / 3);
    }

    // ================================================================
    // 音符工具函数
    // ================================================================
    
    noteFreq(note, octave = 4) {
        const notes = { C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11 };
        const n = notes[note] || 0;
        return 440 * Math.pow(2, (n - 9 + (octave - 4) * 12) / 12);
    }

    playTone(freq, duration, type = 'sine', gainVal = 0.1, detune = 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        osc.detune.value = detune;
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(gainVal, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + duration - 0.5);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.masterGain);
        gain.connect(this.reverb);
        osc.start();
        osc.stop(this.ctx.currentTime + duration + 0.1);
        this.currentNodes.push(osc);
        return osc;
    }

    playDrone(freq, type = 'sine', gainVal = 0.05) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.value = gainVal;
        
        lfo.type = 'sine';
        lfo.frequency.value = 0.1 + Math.random() * 0.3;
        lfoGain.gain.value = freq * 0.005;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        osc.connect(gain);
        gain.connect(this.masterGain);
        gain.connect(this.reverb);
        osc.start();
        lfo.start();
        this.currentNodes.push(osc, lfo);
        return { osc, gain, lfo };
    }

    playNoise(duration, gainVal = 0.02) {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.5;
        }
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        gain.gain.value = gainVal;
        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        source.start();
        this.currentNodes.push(source);
        return source;
    }

    // ================================================================
    // 各场景音乐生成器
    // ================================================================
    
    musicGenerators = {
        // ---- 序章：花园 - 博尔赫斯式静谧 ----
        garden: function() {
            // 柔和的钢琴泛音 + 偶尔的风铃声
            const notes = ['E', 'G', 'B', 'D', 'F#', 'A'];
            const baseOctave = 4;
            
            const playGardenNote = () => {
                if (!this.isPlaying) return;
                const note = notes[Math.floor(Math.random() * notes.length)];
                const oct = baseOctave + (Math.random() > 0.7 ? 1 : 0);
                const freq = this.noteFreq(note, oct);
                this.playTone(freq, 3 + Math.random() * 4, 'sine', 0.04 + Math.random() * 0.03);
                
                // 偶尔加泛音
                if (Math.random() > 0.6) {
                    this.playTone(freq * 2, 2 + Math.random() * 2, 'sine', 0.015);
                }
            };
            
            // 持续低音
            this.playDrone(this.noteFreq('E', 2), 'sine', 0.02);
            this.playDrone(this.noteFreq('B', 2), 'sine', 0.015);
            
            // 随机间隔的音符
            playGardenNote();
            this.loopIntervals.push(setInterval(() => {
                playGardenNote();
            }, 2000 + Math.random() * 3000));
        },

        // ---- 无限图书馆：空旷回声 ----
        infiniteLibrary: function() {
            // 管风琴般的持续音 + 低频嗡鸣 + 偶尔的翻书声
            const chordFreqs = [
                this.noteFreq('C', 3),
                this.noteFreq('G', 3),
                this.noteFreq('C', 4),
                this.noteFreq('E', 4)
            ];
            
            chordFreqs.forEach(f => {
                this.playDrone(f, 'sine', 0.02);
                this.playDrone(f * 1.001, 'sine', 0.01); // 微失谐产生拍频
            });
            
            // 低频嗡鸣
            this.playDrone(55, 'triangle', 0.03);
            
            // 偶尔的"翻书"白噪声
            const playPageTurn = () => {
                if (!this.isPlaying) return;
                this.playNoise(0.15, 0.01);
            };
            
            this.loopIntervals.push(setInterval(() => {
                if (Math.random() > 0.5) playPageTurn();
            }, 4000 + Math.random() * 6000));
        },

        // ---- 阿莱夫：无限叠加 ----
        aleph: function() {
            // 所有音色交汇，层层叠加的和声
            const scales = {
                major: [0, 2, 4, 5, 7, 9, 11],
                minor: [0, 2, 3, 5, 7, 8, 10],
                pentatonic: [0, 2, 4, 7, 9],
                whole: [0, 2, 4, 6, 8, 10],
                chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            };
            
            const baseFreq = this.noteFreq('A', 3);
            let layerCount = 0;
            const maxLayers = 12;
            
            const addLayer = () => {
                if (!this.isPlaying || layerCount >= maxLayers) return;
                const scaleKeys = Object.keys(scales);
                const scale = scales[scaleKeys[Math.floor(Math.random() * scaleKeys.length)]];
                const interval = scale[Math.floor(Math.random() * scale.length)];
                const freq = baseFreq * Math.pow(2, interval / 12);
                const octave = Math.random() > 0.5 ? 2 : 1;
                const types = ['sine', 'triangle', 'sine', 'sine'];
                const type = types[Math.floor(Math.random() * types.length)];
                this.playDrone(freq * octave, type, 0.008 + Math.random() * 0.01);
                layerCount++;
            };
            
            // 核心音
            this.playDrone(baseFreq, 'sine', 0.025);
            this.playDrone(baseFreq * 1.5, 'triangle', 0.015);
            
            // 逐渐叠加
            for (let i = 0; i < 6; i++) {
                setTimeout(() => addLayer(), i * 800);
            }
            
            this.loopIntervals.push(setInterval(() => {
                if (layerCount < maxLayers) addLayer();
            }, 3000));
        },

        // ---- 银翼杀手：Vangelis式合成器 ----
        blade_runner: function() {
            // 忧郁合成器旋律 + 雨声 + 低频脉冲
            const rain = () => {
                if (!this.isPlaying) return;
                this.playNoise(2, 0.015);
            };
            
            // 持续雨声
            rain();
            this.loopIntervals.push(setInterval(rain, 1800));
            
            // 低频脉冲（城市心跳）
            this.playDrone(55, 'sawtooth', 0.02);
            this.playDrone(110, 'triangle', 0.01);
            
            // 合成器旋律 - 忧郁的下行音阶
            const melodyNotes = [
                this.noteFreq('E', 4), this.noteFreq('D', 4), this.noteFreq('C', 4),
                this.noteFreq('B', 3), this.noteFreq('A', 3), this.noteFreq('G', 3),
                this.noteFreq('A', 3), this.noteFreq('C', 4), this.noteFreq('E', 4)
            ];
            let noteIndex = 0;
            
            const playMelody = () => {
                if (!this.isPlaying) return;
                const freq = melodyNotes[noteIndex % melodyNotes.length];
                // 主音
                this.playTone(freq, 2.5, 'sawtooth', 0.03);
                // 加厚的合唱效果
                this.playTone(freq * 1.003, 2.5, 'sawtooth', 0.02);
                this.playTone(freq * 0.998, 2.5, 'triangle', 0.015);
                noteIndex++;
            };
            
            playMelody();
            this.loopIntervals.push(setInterval(playMelody, 2500));
        },

        // ---- 克苏鲁：深海恐怖 ----
        cthulhu: function() {
            // 极低频 + 不和谐音程 + 水压感 + 偶尔的不祥铃声
            const dissonantIntervals = [1.0, 1.06, 1.2, 1.33, 1.5, 1.6, 1.78];
            
            // 深海低频
            this.playDrone(30, 'sine', 0.04);
            this.playDrone(31.5, 'sine', 0.035); // 微失谐
            this.playDrone(60, 'triangle', 0.02);
            
            // 不和谐叠加层
            const addDissonance = () => {
                if (!this.isPlaying) return;
                const base = 40 + Math.random() * 30;
                const ratio = dissonantIntervals[Math.floor(Math.random() * dissonantIntervals.length)];
                this.playTone(base * ratio, 4 + Math.random() * 4, 'sine', 0.015 + Math.random() * 0.01);
            };
            
            addDissonance();
            this.loopIntervals.push(setInterval(addDissonance, 5000 + Math.random() * 5000));
            
            // 水下噪声
            const playWater = () => {
                if (!this.isPlaying) return;
                const bufferSize = this.ctx.sampleRate * 3;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.sin(i / bufferSize * Math.PI);
                }
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.value = 200 + Math.random() * 100;
                filter.Q.value = 5;
                const gain = this.ctx.createGain();
                gain.gain.value = 0.015;
                source.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);
                source.start();
                this.currentNodes.push(source);
            };
            
            playWater();
            this.loopIntervals.push(setInterval(playWater, 6000));
        },

        // ---- 爱丽丝：维多利亚音乐盒 ----
        alice: function() {
            // 音乐盒音色 + 变调圆舞曲 + 偶尔的发条声
            const boxNotes = [
                this.noteFreq('E', 5), this.noteFreq('D', 5), this.noteFreq('C', 5),
                this.noteFreq('B', 4), this.noteFreq('A', 4), this.noteFreq('G', 4),
                this.noteFreq('A', 4), this.noteFreq('B', 4), this.noteFreq('C', 5),
                this.noteFreq('D', 5), this.noteFreq('E', 5), this.noteFreq('F', 5),
                this.noteFreq('E', 5), this.noteFreq('D', 5)
            ];
            
            let idx = 0;
            const tempo = 350; // 快于正常圆舞曲，营造疯狂感
            
            const playBoxNote = () => {
                if (!this.isPlaying) return;
                const freq = boxNotes[idx % boxNotes.length];
                // 音乐盒音色：高频正弦波 + 快速衰减
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
                osc.connect(gain);
                gain.connect(this.masterGain);
                gain.connect(this.reverb);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.5);
                this.currentNodes.push(osc);
                
                // 每4拍加一个泛音（铃声）
                if (idx % 4 === 0) {
                    this.playTone(freq * 3, 0.3, 'sine', 0.02);
                }
                
                idx++;
            };
            
            // 低音伴奏
            this.playDrone(this.noteFreq('C', 3), 'triangle', 0.015);
            
            playBoxNote();
            this.loopIntervals.push(setInterval(playBoxNote, tempo));
        },

        // ---- 中土世界：托尔金式民谣 ----
        middle_earth: function() {
            // 竖琴般的分解和弦 + 长笛旋律 + 远方的号角
            const harpChord = [
                this.noteFreq('D', 4), this.noteFreq('F#', 4), this.noteFreq('A', 4),
                this.noteFreq('D', 5)
            ];
            
            let noteIdx = 0;
            
            const playHarp = () => {
                if (!this.isPlaying) return;
                const freq = harpChord[noteIdx % harpChord.length];
                // 竖琴音色：三角波 + 快速起音
                this.playTone(freq, 2, 'triangle', 0.04);
                // 泛音
                this.playTone(freq * 2, 1.5, 'sine', 0.015);
                noteIdx++;
            };
            
            // 持续低音
            this.playDrone(this.noteFreq('D', 3), 'sine', 0.02);
            this.playDrone(this.noteFreq('A', 2), 'triangle', 0.015);
            
            playHarp();
            this.loopIntervals.push(setInterval(playHarp, 800));
            
            // 偶尔的长笛旋律
            const fluteNotes = [
                this.noteFreq('F#', 5), this.noteFreq('E', 5), this.noteFreq('D', 5),
                this.noteFreq('C#', 5), this.noteFreq('D', 5), this.noteFreq('E', 5)
            ];
            let fluteIdx = 0;
            
            const playFlute = () => {
                if (!this.isPlaying) return;
                const freq = fluteNotes[fluteIdx % fluteNotes.length];
                // 长笛：正弦波 + 轻微颤音
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const vibrato = this.ctx.createOscillator();
                const vibGain = this.ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.value = freq;
                vibrato.type = 'sine';
                vibrato.frequency.value = 5;
                vibGain.gain.value = 3;
                vibrato.connect(vibGain);
                vibGain.connect(osc.frequency);
                
                gain.gain.setValueAtTime(0, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.03, this.ctx.currentTime + 1.3);
                gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2);
                
                osc.connect(gain);
                gain.connect(this.masterGain);
                gain.connect(this.reverb);
                osc.start();
                vibrato.start();
                osc.stop(this.ctx.currentTime + 2.1);
                vibrato.stop(this.ctx.currentTime + 2.1);
                this.currentNodes.push(osc, vibrato);
                fluteIdx++;
            };
            
            setTimeout(() => {
                playFlute();
                this.loopIntervals.push(setInterval(playFlute, 2200));
            }, 3000);
        },

        // ---- 金庸武侠：古琴+竹笛，五声音阶 ----
        wuxia: function() {
            // 五声音阶：宫商角徵羽 (C D E G A)
            const pentatonic = ['C', 'D', 'E', 'G', 'A'];
            const melody = [];
            
            // 生成一段古琴旋律
            for (let i = 0; i < 16; i++) {
                const note = pentatonic[Math.floor(Math.random() * pentatonic.length)];
                const oct = 3 + (Math.random() > 0.6 ? 1 : 0);
                melody.push(this.noteFreq(note, oct));
            }
            
            let idx = 0;
            
            const playGuqin = () => {
                if (!this.isPlaying) return;
                const freq = melody[idx % melody.length];
                // 古琴音色：正弦波 + 快速衰减 + 滑音效果
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq * 1.02, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(freq, this.ctx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.8);
                osc.connect(gain);
                gain.connect(this.masterGain);
                gain.connect(this.reverb);
                osc.start();
                osc.stop(this.ctx.currentTime + 2);
                this.currentNodes.push(osc);
                
                // 泛音（模拟琴弦共鸣）
                if (Math.random() > 0.5) {
                    this.playTone(freq * 2, 1.2, 'sine', 0.015);
                }
                if (Math.random() > 0.8) {
                    this.playTone(freq * 3, 0.8, 'sine', 0.008);
                }
                
                idx++;
            };
            
            // 持续低音（古琴的空弦）
            this.playDrone(this.noteFreq('C', 2), 'sine', 0.02);
            
            playGuqin();
            this.loopIntervals.push(setInterval(playGuqin, 1200 + Math.random() * 800));
        },

        // ---- 星际牛仔：爵士+布鲁斯 ----
        cowboy_bebop: function() {
            // 走贝斯线 + 萨克斯旋律 + 鼓组节奏
            const bassNotes = [
                this.noteFreq('E', 2), this.noteFreq('A', 2),
                this.noteFreq('B', 2), this.noteFreq('A', 2)
            ];
            let bassIdx = 0;
            
            const playBass = () => {
                if (!this.isPlaying) return;
                const freq = bassNotes[bassIdx % bassNotes.length];
                this.playTone(freq, 0.8, 'triangle', 0.04);
                bassIdx++;
            };
            
            // 贝斯节奏
            playBass();
            this.loopIntervals.push(setInterval(playBass, 800));
            
            // 萨克斯旋律（用方波+滤波模拟）
            const saxNotes = [
                this.noteFreq('E', 4), this.noteFreq('G', 4), this.noteFreq('A', 4),
                this.noteFreq('B', 4), this.noteFreq('A', 4), this.noteFreq('G', 4),
                this.noteFreq('E', 4), this.noteFreq('D', 4)
            ];
            let saxIdx = 0;
            
            const playSax = () => {
                if (!this.isPlaying) return;
                const freq = saxNotes[saxIdx % saxNotes.length];
                // 萨克斯：方波 + 低通滤波
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                
                osc.type = 'sawtooth';
                osc.frequency.value = freq;
                filter.type = 'lowpass';
                filter.frequency.value = 2000;
                filter.Q.value = 2;
                
                gain.gain.setValueAtTime(0, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.02, this.ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.02, this.ctx.currentTime + 0.6);
                gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.2);
                
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);
                gain.connect(this.reverb);
                osc.start();
                osc.stop(this.ctx.currentTime + 1.3);
                this.currentNodes.push(osc);
                saxIdx++;
            };
            
            setTimeout(() => {
                playSax();
                this.loopIntervals.push(setInterval(playSax, 1500));
            }, 2000);
        },

        // ---- 黑客帝国：工业电子 ----
        matrix: function() {
            // 低频脉冲 + 代码雨白噪声 + 合成器嗡鸣
            const pulseFreq = 120;
            
            // 脉冲低音
            const pulse = () => {
                if (!this.isPlaying) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'square';
                osc.frequency.value = pulseFreq;
                gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
                osc.connect(gain);
                gain.connect(this.masterGain);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.35);
                this.currentNodes.push(osc);
            };
            
            // 持续嗡鸣
            this.playDrone(60, 'sawtooth', 0.015);
            this.playDrone(120, 'square', 0.008);
            
            // 代码雨噪声
            const playCodeRain = () => {
                if (!this.isPlaying) return;
                const bufferSize = this.ctx.sampleRate * 1;
                const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() > 0.95 ? (Math.random() * 2 - 1) * 0.3 : 0;
                }
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'highpass';
                filter.frequency.value = 3000;
                const gain = this.ctx.createGain();
                gain.gain.value = 0.02;
                source.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);
                source.start();
                this.currentNodes.push(source);
            };
            
            pulse();
            playCodeRain();
            
            this.loopIntervals.push(setInterval(() => {
                pulse();
                if (Math.random() > 0.3) playCodeRain();
            }, 500));
        },

        // ---- 冰与火之歌：中世纪合唱 ----
        got: function() {
            // 弦乐持续音 + 定音鼓 + 合唱和声
            const droneChord = [
                this.noteFreq('D', 3),
                this.noteFreq('A', 3),
                this.noteFreq('D', 4),
                this.noteFreq('F', 4)
            ];
            
            droneChord.forEach(f => {
                this.playDrone(f, 'sawtooth', 0.008);
                this.playDrone(f * 1.002, 'sawtooth', 0.006);
            });
            
            // 低音
            this.playDrone(this.noteFreq('D', 2), 'sine', 0.025);
            
            // 定音鼓
            const playDrum = () => {
                if (!this.isPlaying) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(150, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);
                gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
                osc.connect(gain);
                gain.connect(this.masterGain);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.6);
                this.currentNodes.push(osc);
            };
            
            // 合唱"人声"（多个正弦波叠加）
            const playChoir = () => {
                if (!this.isPlaying) return;
                const vowelFreqs = [
                    this.noteFreq('D', 4), this.noteFreq('F', 4), this.noteFreq('A', 4)
                ];
                vowelFreqs.forEach(f => {
                    this.playTone(f, 3, 'sine', 0.012);
                    this.playTone(f * 2, 3, 'sine', 0.006);
                    this.playTone(f * 3, 3, 'sine', 0.003);
                });
            };
            
            playDrum();
            playChoir();
            
            this.loopIntervals.push(setInterval(() => {
                if (Math.random() > 0.5) playDrum();
                if (Math.random() > 0.6) playChoir();
            }, 3000));
        },

        // ---- 千与千寻：久石让式钢琴 ----
        spirited: function() {
            // 温暖钢琴 + 弦乐垫底 + 偶尔的铃音
            const melody = [
                this.noteFreq('G', 4), this.noteFreq('A', 4), this.noteFreq('B', 4),
                this.noteFreq('D', 5), this.noteFreq('E', 5), this.noteFreq('D', 5),
                this.noteFreq('B', 4), this.noteFreq('A', 4), this.noteFreq('G', 4),
                this.noteFreq('E', 4), this.noteFreq('D', 4), this.noteFreq('E', 4)
            ];
            
            // 弦乐垫底
            this.playDrone(this.noteFreq('G', 3), 'triangle', 0.02);
            this.playDrone(this.noteFreq('D', 3), 'sine', 0.015);
            this.playDrone(this.noteFreq('B', 3), 'sine', 0.01);
            
            let idx = 0;
            
            const playPiano = () => {
                if (!this.isPlaying) return;
                const freq = melody[idx % melody.length];
                // 钢琴：多个谐波叠加
                this.playTone(freq, 2.5, 'triangle', 0.04);
                this.playTone(freq * 2, 1.5, 'sine', 0.015);
                this.playTone(freq * 3, 1, 'sine', 0.008);
                this.playTone(freq * 4, 0.7, 'sine', 0.004);
                
                // 偶尔加铃音
                if (Math.random() > 0.7) {
                    this.playTone(freq * 2, 1.5, 'sine', 0.02);
                }
                
                idx++;
            };
            
            playPiano();
            this.loopIntervals.push(setInterval(playPiano, 1000));
        },

        // ---- 芬尼根守灵夜：循环叠加 ----
        wake: function() {
            // 循环的旋律碎片 + 凯尔特风笛 + 低音持续
            const fragments = [
                [this.noteFreq('A', 4), this.noteFreq('G', 4), this.noteFreq('E', 4)],
                [this.noteFreq('D', 4), this.noteFreq('C', 4), this.noteFreq('A', 3)],
                [this.noteFreq('E', 4), this.noteFreq('D', 4), this.noteFreq('B', 3)],
                [this.noteFreq('G', 4), this.noteFreq('F#', 4), this.noteFreq('D', 4)]
            ];
            
            let fragIdx = 0;
            
            // 风笛持续音（两个微失谐的正弦波）
            this.playDrone(this.noteFreq('D', 4), 'sine', 0.015);
            this.playDrone(this.noteFreq('D', 4) * 1.003, 'sine', 0.012);
            this.playDrone(this.noteFreq('A', 3), 'triangle', 0.02);
            
            const playFragment = () => {
                if (!this.isPlaying) return;
                const frag = fragments[fragIdx % fragments.length];
                frag.forEach((freq, i) => {
                    setTimeout(() => {
                        this.playTone(freq, 1.5, 'sine', 0.03);
                        this.playTone(freq * 2, 1, 'sine', 0.01);
                    }, i * 300);
                });
                fragIdx++;
            };
            
            playFragment();
            this.loopIntervals.push(setInterval(playFragment, 2000));
        },

        // ---- 守望者：黑暗爵士 ----
        watchmen: function() {
            // 不和谐和弦 + 脉搏节拍 + 忧郁小号
            const darkChord = [
                this.noteFreq('C', 3), this.noteFreq('Eb', 3),
                this.noteFreq('Gb', 3), this.noteFreq('A', 3)
            ];
            
            darkChord.forEach(f => {
                this.playDrone(f, 'sawtooth', 0.006);
            });
            
            // 脉搏节拍
            const playPulse = () => {
                if (!this.isPlaying) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = 80;
                gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
                osc.connect(gain);
                gain.connect(this.masterGain);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.2);
                this.currentNodes.push(osc);
            };
            
            // 忧郁小号旋律
            const trumpetNotes = [
                this.noteFreq('C', 4), this.noteFreq('Eb', 4), this.noteFreq('C', 4),
                this.noteFreq('Ab', 3), this.noteFreq('B', 3), this.noteFreq('C', 4)
            ];
            let tIdx = 0;
            
            const playTrumpet = () => {
                if (!this.isPlaying) return;
                const freq = trumpetNotes[tIdx % trumpetNotes.length];
                // 小号：方波 + 滤波
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                osc.type = 'sawtooth';
                osc.frequency.value = freq;
                filter.type = 'bandpass';
                filter.frequency.value = 1500;
                filter.Q.value = 3;
                gain.gain.setValueAtTime(0, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.015, this.ctx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.015, this.ctx.currentTime + 0.8);
                gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.masterGain);
                gain.connect(this.reverb);
                osc.start();
                osc.stop(this.ctx.currentTime + 1.6);
                this.currentNodes.push(osc);
                tIdx++;
            };
            
            playPulse();
            this.loopIntervals.push(setInterval(() => {
                playPulse();
                if (Math.random() > 0.4) playTrumpet();
            }, 1200));
        },

        // ---- 鼠族：极简钢琴 + 犹太民间 ----
        maus: function() {
            // 极简钢琴旋律 + 犹太民间音阶（弗里吉亚调式）
            // 弗里吉亚: C Db E F G Ab B
            const phrygian = [
                this.noteFreq('C', 4), this.noteFreq('Db', 4), this.noteFreq('E', 4),
                this.noteFreq('F', 4), this.noteFreq('G', 4), this.noteFreq('Ab', 4),
                this.noteFreq('B', 4), this.noteFreq('C', 5)
            ];
            
            const melody = [
                phrygian[0], phrygian[1], phrygian[2], phrygian[3],
                phrygian[4], phrygian[5], phrygian[4], phrygian[2],
                phrygian[1], phrygian[0], phrygian[7], phrygian[6],
                phrygian[4], phrygian[2], phrygian[1], phrygian[0]
            ];
            
            let idx = 0;
            
            const playPianoNote = () => {
                if (!this.isPlaying) return;
                const freq = melody[idx % melody.length];
                // 极简钢琴：三角波 + 少量谐波
                this.playTone(freq, 2, 'triangle', 0.035);
                this.playTone(freq * 2, 1.5, 'sine', 0.01);
                
                // 偶尔的"弦乐"点缀
                if (Math.random() > 0.8) {
                    this.playTone(freq * 0.5, 3, 'sine', 0.015);
                }
                
                idx++;
            };
            
            // 低音
            this.playDrone(this.noteFreq('C', 2), 'sine', 0.015);
            
            playPianoNote();
            this.loopIntervals.push(setInterval(playPianoNote, 900));
        },

        // ---- 终章：花园回归 ----
        final_garden: function() {
            // 所有世界音乐元素的微弱回响 + 花园主旋律
            // 先播放花园基础
            this.musicGenerators.garden.call(this);
            
            // 叠加微弱的世界元素
            setTimeout(() => {
                if (!this.isPlaying) return;
                // 弦乐层
                this.playDrone(this.noteFreq('E', 3), 'triangle', 0.015);
                this.playDrone(this.noteFreq('G', 3), 'sine', 0.01);
                this.playDrone(this.noteFreq('B', 3), 'sine', 0.01);
            }, 2000);
        }
    };

    // ================================================================
    // 场景到音乐的映射
    // ================================================================
    
    sceneMusicMap = {
        // 序章
        'garden': 'garden',
        'doorBooks': 'garden',
        'doorOcean': 'garden',
        'doorDesert': 'garden',
        'bookSand': 'garden',
        'entrance': 'garden',
        'library': 'garden',
        'mirror': 'garden',
        'desert': 'garden',
        'crossroads': 'garden',
        
        // X视角
        'xMirror': 'garden',
        'xWindow': 'garden',
        
        // 无限图书馆
        'infiniteLibrary': 'infiniteLibrary',
        'hiddenChamber': 'infiniteLibrary',
        'bookWorld': 'infiniteLibrary',
        'kafkaCorridor': 'infiniteLibrary',
        'waitingRoom': 'infiniteLibrary',
        'endlessStairs': 'infiniteLibrary',
        
        // 阿莱夫
        'aleph': 'aleph',
        
        // 银翼杀手
        'cyberpunkCity': 'blade_runner',
        'apartment': 'blade_runner',
        'lab': 'blade_runner',
        'penthouse': 'blade_runner',
        
        // 克苏鲁
        'cthulhuCity': 'cthulhu',
        'cthulhuTemple': 'cthulhu',
        'innsmouth': 'cthulhu',
        
        // 爱丽丝
        'teaParty': 'alice',
        'hedgeMaze': 'alice',
        'queenGround': 'alice',
        
        // 中土世界
        'middleEarthForest': 'middle_earth',
        'middleEarthVolcano': 'middle_earth',
        'middleEarthCity': 'middle_earth',
        
        // 金庸武侠
        'wuxiaTavern': 'wuxia',
        'wuxiaMountain': 'wuxia',
        'wuxiaBamboo': 'wuxia',
        
        // 星际牛仔
        'spaceStation': 'cowboy_bebop',
        'spaceDesert': 'cowboy_bebop',
        'spaceShip': 'cowboy_bebop',
        
        // 黑客帝国
        'matrixCity': 'matrix',
        'matrixCode': 'matrix',
        'matrixRebel': 'matrix',
        
        // 冰与火之歌
        'gotCastle': 'got',
        'gotNorth': 'got',
        'gotThrone': 'got',
        
        // 千与千寻
        'spiritedBathhouse': 'spirited',
        'spiritedTrain': 'spirited',
        'spiritedMarket': 'spirited',
        
        // 芬尼根守灵夜
        'wakeRiver': 'wake',
        'wakeTavern': 'wake',
        'wakeSleeper': 'wake',
        
        // 守望者
        'watchmenCity': 'watchmen',
        'watchmenOffice': 'watchmen',
        'watchmenClock': 'watchmen',
        
        // 鼠族
        'mausGhetto': 'maus',
        'mausCamp': 'maus',
        'mausFamily': 'maus'
    };

    // 根据场景ID播放对应音乐
    playForScene(sceneId) {
        const musicId = this.sceneMusicMap[sceneId] || 'garden';
        if (musicId !== this.currentScene) {
            this.playScene(musicId);
        }
    }
}

// 全局实例
const musicEngine = new SceneMusicEngine();
