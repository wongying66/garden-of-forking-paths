/**
 * 视觉特效引擎 - 增强游戏体验
 * 
 * 包含：
 * 1. 场景粒子特效（每个世界独特环境粒子）
 * 2. 角色入场/退场动画
 * 3. 场景过渡特效
 * 4. 屏幕震动/闪光
 * 5. 打字机音效
 */

class EffectsEngine {
    constructor() {
        this.particleCanvas = null;
        this.particleCtx = null;
        this.particles = [];
        this.animationId = null;
        this.currentEffect = null;
        this.shakeTimeout = null;
    }

    init() {
        // 创建粒子画布层
        this.particleCanvas = document.createElement('canvas');
        this.particleCanvas.id = 'particle-layer';
        this.particleCanvas.style.cssText = `
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 8;
        `;
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.appendChild(this.particleCanvas);
            this.particleCtx = this.particleCanvas.getContext('2d');
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
        }
    }

    resizeCanvas() {
        if (!this.particleCanvas) return;
        const container = this.particleCanvas.parentElement;
        if (container) {
            this.particleCanvas.width = container.offsetWidth;
            this.particleCanvas.height = container.offsetHeight;
        }
    }

    // ================================================================
    // 1. 场景粒子特效
    // ================================================================

    startParticles(sceneId) {
        this.stopParticles();
        if (!this.particleCanvas || !this.particleCtx) return;
        const effect = this.particleEffects[sceneId] || this.particleEffects['garden'];
        this.currentEffect = effect;
        this.particles = [];
        
        // 初始化粒子
        for (let i = 0; i < effect.count; i++) {
            this.particles.push(effect.createParticle(this.particleCanvas));
        }
        
        this.animateParticles();
    }

    stopParticles() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.particles = [];
        if (this.particleCtx) {
            this.particleCtx.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);
        }
    }

    animateParticles() {
        if (!this.particleCtx || !this.currentEffect) return;
        if (this.particles.length === 0) {
            this.stopParticles();
            return;
        }
        
        const ctx = this.particleCtx;
        const canvas = this.particleCanvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.particles.forEach(p => {
            this.currentEffect.updateParticle(p, canvas);
            this.currentEffect.drawParticle(p, ctx);
        });
        
        this.animationId = requestAnimationFrame(() => this.animateParticles());
    }

    particleEffects = {
        // ---- 花园：飘落的花瓣 ----
        garden: {
            count: 30,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: 2 + Math.random() * 4,
                speedY: 0.3 + Math.random() * 0.8,
                speedX: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                opacity: 0.3 + Math.random() * 0.4,
                color: ['#e8c4c4', '#f0d4a0', '#d4a0c4', '#c4d4e8'][Math.floor(Math.random() * 4)]
            }),
            updateParticle: (p, canvas) => {
                p.y += p.speedY;
                p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
                p.rotation += p.rotationSpeed;
                if (p.y > canvas.height + 10) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        // ---- 银翼杀手：雨丝 ----
        cyberpunkCity: {
            count: 80,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: 10 + Math.random() * 20,
                speedY: 8 + Math.random() * 12,
                speedX: -1 + Math.random() * 0.5,
                opacity: 0.1 + Math.random() * 0.2
            }),
            updateParticle: (p, canvas) => {
                p.y += p.speedY;
                p.x += p.speedX;
                if (p.y > canvas.height + p.length) {
                    p.y = -p.length;
                    p.x = Math.random() * canvas.width;
                }
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.strokeStyle = '#a0c8e8';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.speedX * 2, p.y + p.length);
                ctx.stroke();
                ctx.restore();
            }
        },

        // ---- 克苏鲁：深海气泡 ----
        cthulhuCity: {
            count: 25,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: canvas.height + Math.random() * 50,
                size: 1 + Math.random() * 3,
                speedY: -(0.5 + Math.random() * 1.5),
                speedX: (Math.random() - 0.5) * 0.3,
                opacity: 0.1 + Math.random() * 0.2,
                wobble: Math.random() * Math.PI * 2
            }),
            updateParticle: (p, canvas) => {
                p.y += p.speedY;
                p.x += p.speedX + Math.sin(p.wobble) * 0.3;
                p.wobble += 0.02;
                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.strokeStyle = '#4a7a6a';
                ctx.fillStyle = 'rgba(74, 122, 106, 0.1)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                // 高光
                ctx.fillStyle = 'rgba(120, 180, 160, 0.3)';
                ctx.beginPath();
                ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        // ---- 无限图书馆：漂浮的尘埃/光点 ----
        infiniteLibrary: {
            count: 40,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 0.5 + Math.random() * 1.5,
                speedY: (Math.random() - 0.5) * 0.3,
                speedX: (Math.random() - 0.5) * 0.3,
                opacity: 0.1 + Math.random() * 0.3,
                pulse: Math.random() * Math.PI * 2
            }),
            updateParticle: (p, canvas) => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += 0.02;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
                ctx.fillStyle = '#e8dcc8';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        // ---- 阿莱夫：无限光点汇聚 ----
        aleph: {
            count: 60,
            createParticle: (canvas) => {
                const angle = Math.random() * Math.PI * 2;
                const dist = 100 + Math.random() * Math.max(canvas.width, canvas.height) * 0.6;
                return {
                    x: canvas.width / 2 + Math.cos(angle) * dist,
                    y: canvas.height / 2 + Math.sin(angle) * dist,
                    targetX: canvas.width / 2,
                    targetY: canvas.height / 2,
                    size: 1 + Math.random() * 2,
                    speed: 0.5 + Math.random() * 1.5,
                    opacity: 0.2 + Math.random() * 0.5,
                    color: ['#d4af37', '#2a9d8f', '#c44536', '#e8dcc8'][Math.floor(Math.random() * 4)]
                };
            },
            updateParticle: (p, canvas) => {
                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 10) {
                    const angle = Math.random() * Math.PI * 2;
                    const newDist = 100 + Math.random() * Math.max(canvas.width, canvas.height) * 0.6;
                    p.x = canvas.width / 2 + Math.cos(angle) * newDist;
                    p.y = canvas.height / 2 + Math.sin(angle) * newDist;
                } else {
                    p.x += (dx / dist) * p.speed;
                    p.y += (dy / dist) * p.speed;
                }
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                // 拖尾
                ctx.globalAlpha = p.opacity * 0.3;
                ctx.beginPath();
                ctx.arc(p.x - (p.targetX - p.x) * 0.1, p.y - (p.targetY - p.y) * 0.1, p.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        // ---- 黑客帝国：绿色代码雨 ----
        matrixCity: {
            count: 50,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                char: ['0', '1', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ'][Math.floor(Math.random() * 7)],
                speedY: 2 + Math.random() * 4,
                opacity: 0.1 + Math.random() * 0.3,
                size: 10 + Math.random() * 6
            }),
            updateParticle: (p, canvas) => {
                p.y += p.speedY;
                if (p.y > canvas.height + 20) {
                    p.y = -20;
                    p.x = Math.random() * canvas.width;
                    p.char = ['0', '1', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ'][Math.floor(Math.random() * 7)];
                }
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = '#0f0';
                ctx.font = `${p.size}px monospace`;
                ctx.fillText(p.char, p.x, p.y);
                ctx.restore();
            }
        },

        // ---- 千与千寻：温暖的萤火虫 ----
        spiritedBathhouse: {
            count: 20,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 2 + Math.random() * 3,
                speedY: (Math.random() - 0.5) * 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                opacity: 0.3 + Math.random() * 0.4,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03
            }),
            updateParticle: (p, canvas) => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += p.pulseSpeed;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                const glow = 0.5 + 0.5 * Math.sin(p.pulse);
                ctx.globalAlpha = p.opacity * glow;
                ctx.fillStyle = '#f0e8a0';
                ctx.shadowColor = '#f0e8a0';
                ctx.shadowBlur = 10 * glow;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        },

        // ---- 默认：轻柔尘埃 ----
        default: {
            count: 20,
            createParticle: (canvas) => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 0.5 + Math.random() * 1,
                speedY: (Math.random() - 0.5) * 0.2,
                speedX: (Math.random() - 0.5) * 0.2,
                opacity: 0.1 + Math.random() * 0.2
            }),
            updateParticle: (p, canvas) => {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            },
            drawParticle: (p, ctx) => {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = '#e8dcc8';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
    };

    // ================================================================
    // 2. 角色入场/退场动画
    // ================================================================

    animateCharacterIn(element, position) {
        if (!element) return;
        element.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        switch(position) {
            case 'left':
                element.style.transform = 'translateX(-120%)';
                element.style.opacity = '0';
                requestAnimationFrame(() => {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                });
                break;
            case 'right':
                element.style.transform = 'translateX(120%)';
                element.style.opacity = '0';
                requestAnimationFrame(() => {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                });
                break;
            case 'center':
                element.style.transform = 'translateX(-50%) scale(0.8)';
                element.style.opacity = '0';
                requestAnimationFrame(() => {
                    element.style.transform = 'translateX(-50%) scale(1)';
                    element.style.opacity = '1';
                });
                break;
        }
    }

    animateCharacterOut(element, position) {
        if (!element) return;
        element.style.transition = 'all 0.4s ease-in';
        
        switch(position) {
            case 'left':
                element.style.transform = 'translateX(-120%)';
                element.style.opacity = '0';
                break;
            case 'right':
                element.style.transform = 'translateX(120%)';
                element.style.opacity = '0';
                break;
            case 'center':
                element.style.transform = 'translateX(-50%) scale(0.8)';
                element.style.opacity = '0';
                break;
        }
    }

    // ================================================================
    // 3. 场景过渡特效
    // ================================================================

    async transition(type, duration = 800) {
        const overlay = document.getElementById('sceneOverlay');
        if (!overlay) return;
        
        switch(type) {
            case 'fade':
                overlay.style.transition = `opacity ${duration}ms ease`;
                overlay.style.opacity = '1';
                await this.wait(duration);
                overlay.style.opacity = '0';
                break;
                
            case 'dissolve':
                overlay.style.background = 'radial-gradient(circle, transparent 0%, #000 100%)';
                overlay.style.transition = `opacity ${duration}ms ease`;
                overlay.style.opacity = '1';
                await this.wait(duration);
                overlay.style.background = '#000';
                overlay.style.opacity = '0';
                break;
                
            case 'wipe':
                overlay.style.transition = 'none';
                overlay.style.background = 'linear-gradient(90deg, #000 0%, #000 100%)';
                overlay.style.clipPath = 'inset(0 100% 0 0)';
                overlay.style.opacity = '1';
                requestAnimationFrame(() => {
                    overlay.style.transition = `clip-path ${duration}ms ease`;
                    overlay.style.clipPath = 'inset(0 0% 0 0)';
                });
                await this.wait(duration);
                overlay.style.clipPath = 'inset(0 0 0 100%)';
                await this.wait(duration);
                overlay.style.opacity = '0';
                overlay.style.clipPath = 'none';
                break;
                
            case 'radial':
                overlay.style.transition = 'none';
                overlay.style.background = '#000';
                overlay.style.clipPath = 'circle(0% at 50% 50%)';
                overlay.style.opacity = '1';
                requestAnimationFrame(() => {
                    overlay.style.transition = `clip-path ${duration}ms ease`;
                    overlay.style.clipPath = 'circle(150% at 50% 50%)';
                });
                await this.wait(duration);
                overlay.style.clipPath = 'circle(0% at 50% 50%)';
                await this.wait(duration);
                overlay.style.opacity = '0';
                overlay.style.clipPath = 'none';
                break;
                
            default:
                overlay.style.transition = `opacity ${duration}ms ease`;
                overlay.style.opacity = '1';
                await this.wait(duration);
                overlay.style.opacity = '0';
        }
    }

    // ================================================================
    // 4. 屏幕震动/闪光
    // ================================================================

    shake(intensity = 5, duration = 300) {
        const container = document.querySelector('.game-container');
        if (!container) return;
        
        if (this.shakeTimeout) clearTimeout(this.shakeTimeout);
        
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed >= duration) {
                container.style.transform = 'none';
                return;
            }
            const progress = elapsed / duration;
            const currentIntensity = intensity * (1 - progress);
            const x = (Math.random() - 0.5) * currentIntensity * 2;
            const y = (Math.random() - 0.5) * currentIntensity * 2;
            container.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    flash(color = '#fff', duration = 200) {
        // 复用已有元素，避免DOM堆积
        if (!this._flashEl) {
            this._flashEl = document.createElement('div');
            this._flashEl.style.cssText = `
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                pointer-events: none;
                z-index: 9999;
                transition: opacity ${duration}ms ease;
            `;
            document.body.appendChild(this._flashEl);
        }
        // 清除之前的定时器
        if (this._flashTimer) clearTimeout(this._flashTimer);
        this._flashEl.style.backgroundColor = color;
        this._flashEl.style.display = 'block';
        this._flashEl.style.opacity = '0.5';
        requestAnimationFrame(() => {
            this._flashEl.style.opacity = '0';
        });
        this._flashTimer = setTimeout(() => {
            this._flashEl.style.display = 'none';
        }, duration + 50);
    }

    // ================================================================
    // 5. 打字机音效（使用 Web Audio API 生成）
    // ================================================================

    playTypeSound() {
        if (!window.audioCtx && typeof musicEngine !== 'undefined' && musicEngine.ctx) {
            window.audioCtx = musicEngine.ctx;
        }
        if (!window.audioCtx) return;
        
        const ctx = window.audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.03);
        
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    }

    // ================================================================
    // 工具函数
    // ================================================================

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// 全局实例
const effectsEngine = new EffectsEngine();
