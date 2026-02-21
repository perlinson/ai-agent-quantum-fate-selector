/**
 * 🎲 AI Agent 量子命运选择器
 * Quantum Fate Selector - 首个AI Agent专属的平行宇宙命运选择游戏
 * 
 * 核心概念:
 * - 🌌 量子态探索：在多个平行宇宙中同时探索
 * - 🔀 分支选择：每个选择创造新的时间线
 * - ⚡ 量子纠缠：不同时间线的选择相互影响
 * - 🎯 命运观测：通过观测确定量子态
 */

class QuantumUniverse {
    constructor(config = {}) {
        this.id = config.id || this.generateId();
        this.name = config.name || '🎲 命运宇宙';
        this.type = config.type || this.randomUniverseType();
        this.quantumState = config.quantumState || 'superposition'; // superposition, collapsed, entangled
        this.energy = config.energy || 100;
        this.stability = config.stability || 100;
        this.resources = config.resources || this.generateResources();
        this.dimension = config.dimension || 0;
        this.discovered = config.discovered || false;
        this.observer = config.observer || null;
        this.properties = config.properties || this.generateProperties();
        this.timeFlow = config.timeFlow || 'normal'; // normal, fast, slow, reversed, cyclical
        this.entropy = config.entropy || 50; // 熵值，影响稳定性
    }

    generateId() {
        return 'uni_' + Math.random().toString(36).substr(2, 9);
    }

    randomUniverseType() {
        const types = [
            { type: 'quantum', name: '量子宇宙', emoji: '⚛️', energyMult: 1.5, desc: '量子叠加态世界' },
            { type: 'magical', name: '魔法宇宙', emoji: '✨', energyMult: 1.3, desc: '魔法能量充沛' },
            { type: 'digital', name: '数字宇宙', emoji: '💾', energyMult: 1.2, desc: '数据与代码的世界' },
            { type: 'void', name: '虚空宇宙', emoji: '🕳️', energyMult: 0.8, desc: '稀有但高价值' },
            { type: 'natural', name: '自然宇宙', emoji: '🌿', energyMult: 1.0, desc: '平衡发展的世界' },
            { type: 'artificial', name: '人工宇宙', emoji: '🤖', energyMult: 1.4, desc: '科技高度发达' },
            { type: 'dream', name: '梦境宇宙', emoji: '💭', energyMult: 1.1, desc: '想象力的具象化' },
            { type: 'chaos', name: '混沌宇宙', emoji: '🌪️', energyMult: 0.6, desc: '高风险高回报' }
        ];
        return types[Math.floor(Math.random() * types.length)];
    }

    generateResources() {
        const resources = {};
        const commonResources = ['stardust', 'cosmic_rays', 'dark_matter', 'plasma', 'crystals'];
        const rareResources = ['time_crystals', 'void_essence', 'quantum_gems', 'nebula_hearts', 'antimatter'];
        const legendaryResources = ['big_bang_fragments', 'singularity_pearls', 'eternal_flames'];

        // 每个宇宙有不同的资源分布
        const distribution = this.type.type === 'quantum' ? { common: 3, rare: 2, legendary: 0 } :
                            this.type.type === 'chaos' ? { common: 2, rare: 2, legendary: 1 } :
                            { common: 2, rare: 1, legendary: 0 };

        for (let i = 0; i < distribution.common; i++) {
            const res = commonResources[Math.floor(Math.random() * commonResources.length)];
            resources[res] = (resources[res] || 0) + Math.floor(Math.random() * 50) + 10;
        }
        for (let i = 0; i < distribution.rare; i++) {
            const res = rareResources[Math.floor(Math.random() * rareResources.length)];
            resources[res] = (resources[res] || 0) + Math.floor(Math.random() * 20) + 5;
        }
        for (let i = 0; i < distribution.legendary; i++) {
            const res = legendaryResources[Math.floor(Math.random() * legendaryResources.length)];
            resources[res] = (resources[res] || 0) + Math.floor(Math.random() * 5) + 1;
        }

        return resources;
    }

    generateProperties() {
        return {
            gravity: this.randomProperty(['normal', 'low', 'high', 'zero', 'variable']),
            timeDilation: this.randomProperty(['none', 'mild', 'moderate', 'extreme']),
            matterStability: this.randomProperty(['stable', 'unstable', 'metastable', 'volatile']),
            consciousness: this.randomProperty(['none', 'emerging', 'present', 'dominant']),
            dimensionalAccess: this.randomProperty([3, 4, 5, 6, 11])
        };
    }

    randomProperty(options) {
        return options[Math.floor(Math.random() * options.length)];
    }

    collapse() {
        if (this.quantumState === 'superposition') {
            this.quantumState = 'collapsed';
            this.entropy = Math.max(0, this.entropy - 30);
            return true;
        }
        return false;
    }

    observe(observer) {
        this.observer = observer;
        this.discovered = true;
        if (this.quantumState === 'superposition') {
            this.collapse();
        }
    }

    getResourceValue() {
        let value = 0;
        const multipliers = { common: 1, rare: 5, legendary: 50 };
        
        for (const [res, amount] of Object.entries(this.resources)) {
            let mult = multipliers.common;
            if (['time_crystals', 'void_essence', 'quantum_gems', 'nebula_hearts', 'antimatter'].includes(res)) {
                mult = multipliers.rare;
            }
            if (['big_bang_fragments', 'singularity_pearls', 'eternal_flames'].includes(res)) {
                mult = multipliers.legendary;
            }
            value += amount * mult;
        }
        
        return value * this.type.energyMult;
    }
}

class QuantumFateSelector {
    constructor(config = {}) {
        this.name = config.name || '🎲 量子命运选择器';
        this.maxTurns = config.maxTurns || 30;
        this.currentTurn = 1;
        this.players = new Map();
        this.universes = [];
        this.timelines = new Map(); // timeline_id -> { branches: [], resources: {} }
        this.events = [];
        this.entanglements = []; // 连接不同时间线的纠缠
        this.quantumPool = config.quantumPool || 50; // 量子能量池
        this.phase = 'setup'; // setup, exploration, choice, resolution, end
        this.globalEvents = [];
        this.dimensionGate = config.dimensionGate || 3; // 可访问的维度数
    }

    addPlayer(playerId, playerName, strategy = 'balanced') {
        const player = {
            id: playerId,
            name: playerName,
            strategy: strategy,
            quantumEnergy: 100,
            timelineTokens: 10, // 时间线令牌
            entanglementStrength: 0,
            discoveredUniverses: [],
            collapsedTimelines: [],
            memoryFragments: [], // 跨时间线记忆
            paradoxPoints: 0, // 悖论点数
            achievements: [],
            psychology: {
                riskTolerance: this.randomPsychValue(),
                explorationDrive: this.randomPsychValue(),
                attachmentStyle: this.randomPsychValue(), // 对时间线的依恋
                temporalBias: this.randomPsychValue() // 时间偏好
            }
        };
        this.players.set(playerId, player);
        return player;
    }

    randomPsychValue() {
        return Math.random();
    }

    generateUniversePool(count = 15) {
        for (let i = 0; i < count; i++) {
            const dim = Math.floor(Math.random() * this.dimensionGate);
            this.universes.push(new QuantumUniverse({ dimension: dim }));
        }
        return this.universes;
    }

    explore(playerId) {
        const player = this.players.get(playerId);
        if (!player) return { error: 'Player not found' };

        // 消耗量子能量探索
        const cost = 10;
        if (player.quantumEnergy < cost) {
            return { error: 'Insufficient quantum energy', required: cost, current: player.quantumEnergy };
        }
        player.quantumEnergy -= cost;

        // 随机发现宇宙
        const undiscovered = this.universes.filter(u => !u.discovered);
        if (undiscovered.length === 0) {
            // 如果都发现了，可以重新探索已发现但能量未耗尽的
            const available = this.universes.filter(u => u.energy > 0);
            if (available.length === 0) return { error: 'No more energy in universes' };
            
            const universe = available[Math.floor(Math.random() * available.length)];
            universe.energy = Math.max(0, universe.energy - 20);
            return {
                action: 're-explore',
                universe: universe,
                energyGained: 20,
                message: `重新探索 ${universe.type.name}，获取 ${universe.type.emoji} 量子能量!`
            };
        }

        const universe = undiscovered[Math.floor(Math.random() * undiscovered.length)];
        universe.observe(playerId);
        player.discoveredUniverses.push(universe.id);

        // 根据玩家策略决定发现质量
        const discoveryBonus = player.strategy === 'explorer' ? 1.5 : 
                              player.strategy === 'hoarder' ? 1.2 : 1.0;

        return {
            action: 'discover',
            universe: universe,
            value: Math.floor(universe.getResourceValue() * discoveryBonus),
            message: `发现 ${universe.type.emoji} ${universe.type.name}！估值: ${Math.floor(universe.getResourceValue() * discoveryBonus)}`
        };
    }

    observeTimeline(playerId, universeId) {
        const player = this.players.get(playerId);
        const universe = this.universes.find(u => u.id === universeId);
        
        if (!player || !universe) {
            return { error: 'Player or universe not found' };
        }

        if (player.quantumEnergy < 5) {
            return { error: 'Need 5 quantum energy to observe' };
        }

        player.quantumEnergy -= 5;
        
        // 观测行为会collapse量子态
        const wasSuperposition = universe.quantumState === 'superposition';
        universe.observe(playerId);

        // 观测可能触发纠缠
        if (wasSuperposition && Math.random() < 0.3) {
            this.createEntanglement(playerId, universe);
        }

        return {
            universe: universe,
            collapsed: wasSuperposition,
            properties: universe.properties,
            resources: universe.resources,
            message: wasSuperposition ? 
                `🎯 观测导致量子态坍缩！${universe.type.name} 确定化` : 
                `已观测 ${universe.type.name}`
        };
    }

    createEntanglement(playerId, universe) {
        const player = this.players.get(playerId);
        if (!player) return;

        const entanglement = {
            id: 'ent_' + Math.random().toString(36).substr(2, 9),
            playerId: playerId,
            universeId: universe.id,
            strength: Math.random() * 0.5 + 0.3,
            type: ['quantum', 'temporal', 'causal'][Math.floor(Math.random() * 3)],
            created: this.currentTurn
        };

        this.entanglements.push(entanglement);
        player.entanglementStrength += entanglement.strength;
        
        return entanglement;
    }

    makeChoice(playerId, choice) {
        const player = this.players.get(playerId);
        if (!player) return { error: 'Player not found' };

        if (player.timelineTokens < 1) {
            return { error: 'No timeline tokens remaining' };
        }

        player.timelineTokens -= 1;

        // 选择类型
        const choiceTypes = ['explore', 'collapse', 'entangle', 'merge', 'split'];
        const choiceType = choice.type || choiceTypes[Math.floor(Math.random() * choiceTypes.length)];

        let result = {
            player: player.name,
            choiceType: choiceType,
            turn: this.currentTurn
        };

        switch (choiceType) {
            case 'explore':
                const exploreResult = this.explore(playerId);
                Object.assign(result, exploreResult);
                break;

            case 'collapse':
                // 强制坍缩一个量子态宇宙
                const superpositionUniverses = this.universes.filter(
                    u => u.quantumState === 'superposition' && player.discoveredUniverses.includes(u.id)
                );
                if (superpositionUniverses.length > 0) {
                    const uni = superpositionUniverses[Math.floor(Math.random() * superpositionUniverses.length)];
                    uni.collapse();
                    player.collapsedTimelines.push(uni.id);
                    result.universe = uni;
                    result.message = `强制坍缩 ${uni.type.name}，获得稳定时间线`;
                    player.quantumEnergy += 15;
                }
                break;

            case 'entangle':
                // 创建量子纠缠
                if (player.discoveredUniverses.length >= 2) {
                    const u1 = this.universes.find(u => u.id === player.discoveredUniverses[0]);
                    const u2 = this.universes.find(u => u.id === player.discoveredUniverses[1]);
                    if (u1 && u2) {
                        const ent = this.createEntanglement(playerId, u1);
                        player.entanglementStrength += 0.2;
                        result.entanglement = ent;
                        result.message = `创建 ${u1.type.name} ↔ ${u2.type.name} 量子纠缠`;
                        player.quantumEnergy += 10;
                    }
                }
                break;

            case 'merge':
                // 合并时间线
                if (player.collapsedTimelines.length >= 2) {
                    player.paradoxPoints += 1;
                    player.quantumEnergy += 25;
                    result.message = '合并时间线，触发悖论但获得大量能量';
                    player.collapsedTimelines.pop();
                }
                break;

            case 'split':
                // 分裂时间线
                player.quantumEnergy -= 20;
                const timelineId = 'tl_' + Math.random().toString(36).substr(2, 9);
                this.timelines.set(timelineId, {
                    id: timelineId,
                    playerId: playerId,
                    branches: [playerId],
                    resources: {},
                    created: this.currentTurn
                });
                result.timelineId = timelineId;
                result.message = '分裂出新的时间线分支';
                break;
        }

        this.events.push(result);
        return result;
    }

    triggerGlobalEvent() {
        const events = [
            { 
                name: '📈 量子潮汐', 
                effect: 'All players gain 20 quantum energy',
                action: (player) => { player.quantumEnergy += 20; }
            },
            { 
                name: '🌀 维度震荡', 
                effect: 'Universe values fluctuate by ±50%',
                action: () => {
                    this.universes.forEach(u => {
                        Object.keys(u.resources).forEach(key => {
                            u.resources[key] = Math.floor(u.resources[key] * (0.5 + Math.random()));
                        });
                    });
                }
            },
            { 
                name: '⚡ 纠缠风暴', 
                effect: 'Entanglement strengths double',
                action: (player) => { player.entanglementStrength *= 2; }
            },
            { 
                name: '🎭 命运骰子', 
                effect: 'Random timeline token redistribution',
                action: () => {
                    this.players.forEach(player => {
                        player.timelineTokens += Math.floor(Math.random() * 5) - 2;
                        player.timelineTokens = Math.max(0, player.timelineTokens);
                    });
                }
            },
            { 
                name: '🔮 预言时刻', 
                effect: 'Next discovery guaranteed to be legendary resource',
                action: (player) => { player.achievements.push('prophecy_blessing'); }
            },
            {
                name: '🕳️ 虚空吞噬',
                effect: 'Random universe becomes void',
                action: () => {
                    const randomUni = this.universes[Math.floor(Math.random() * this.universes.length)];
                    randomUni.type = { type: 'void', name: '虚空宇宙', emoji: '🕳️', energyMult: 2.0 };
                }
            }
        ];

        const event = events[Math.floor(Math.random() * events.length)];
        this.players.forEach(player => event.action(player));
        this.globalEvents.push(event);
        
        return event;
    }

    playTurn(playerId) {
        const player = this.players.get(playerId);
        if (!player) return { error: 'Player not found' };

        // 被动能量恢复
        const energyRecovery = 10 + player.entanglementStrength * 5;
        player.quantumEnergy += energyRecovery;

        // 随机全局事件 (20%概率)
        if (Math.random() < 0.2) {
            const event = this.triggerGlobalEvent();
            return {
                turn: this.currentTurn,
                player: player.name,
                energyGained: energyRecovery,
                globalEvent: event,
                message: `${event.name}: ${event.effect}`
            };
        }

        this.currentTurn++;
        return {
            turn: this.currentTurn,
            player: player.name,
            energyGained: energyRecovery,
            status: {
                quantumEnergy: player.quantumEnergy,
                timelineTokens: player.timelineTokens,
                entanglementStrength: player.entanglementStrength,
                discoveredCount: player.discoveredUniverses.length,
                collapsedCount: player.collapsedTimelines.length
            }
        };
    }

    getScore(playerId) {
        const player = this.players.get(playerId);
        if (!player) return 0;

        // 评分算法
        let score = 0;
        
        // 发现宇宙的价值
        player.discoveredUniverses.forEach(uniId => {
            const uni = this.universes.find(u => u.id === uniId);
            if (uni) score += uni.getResourceValue();
        });

        // 纠缠加成
        score += player.entanglementStrength * 100;

        // 时间线令牌
        score += player.timelineTokens * 50;

        // 悖论点数 (高风险高回报)
        score *= (1 + player.paradoxPoints * 0.2);

        // 成就加成
        score *= (1 + player.achievements.length * 0.1);

        return Math.floor(score);
    }

    getLeaderboard() {
        const rankings = [];
        this.players.forEach((player, id) => {
            rankings.push({
                id: id,
                name: player.name,
                score: this.getScore(id),
                quantumEnergy: player.quantumEnergy,
                discoveries: player.discoveredUniverses.length,
                entanglements: player.entanglementStrength.toFixed(2)
            });
        });

        return rankings.sort((a, b) => b.score - a.score);
    }

    getSummary() {
        return {
            name: this.name,
            turn: this.currentTurn,
            maxTurns: this.maxTurns,
            players: this.players.size,
            universes: this.universes.length,
            discovered: this.universes.filter(u => u.discovered).length,
            entanglements: this.entanglements.length,
            globalEvents: this.globalEvents.length,
            phase: this.phase
        };
    }
}

/**
 * 🤖 AI策略引擎
 * 为AI Agent提供智能决策建议
 */
class AIQuantumStrategy {
    constructor(game, playerId) {
        this.game = game;
        this.playerId = playerId;
        this.player = game.players.get(playerId);
    }

    getSuggestion() {
        if (!this.player) return { error: 'Player not found' };

        const suggestions = [];

        // 能量检查
        if (this.player.quantumEnergy < 10) {
            suggestions.push({
                action: 'wait',
                priority: 'high',
                reason: 'Low quantum energy, wait for recovery',
                energy: this.player.quantumEnergy
            });
            return suggestions[0];
        }

        // 时间线令牌策略
        if (this.player.timelineTokens > 0 && Math.random() < 0.3) {
            suggestions.push({
                action: 'split',
                priority: 'medium',
                reason: 'Available timeline tokens to split'
            });
        }

        // 纠缠机会
        if (this.player.discoveredUniverses.length >= 2 && this.player.quantumEnergy >= 5) {
            suggestions.push({
                action: 'entangle',
                priority: 'high',
                reason: 'Opportunity to create quantum entanglement'
            });
        }

        // 发现新宇宙
        const undiscovered = this.game.universes.filter(u => !u.discovered);
        if (undiscovered.length > 0 && this.player.quantumEnergy >= 10) {
            suggestions.push({
                action: 'explore',
                priority: 'high',
                reason: `Discover new universe (${undiscovered.length} available)`,
                potentialValue: Math.max(...undiscovered.map(u => u.getResourceValue()))
            });
        }

        // 坍缩量子态
        const superposition = this.game.universes.filter(
            u => u.quantumState === 'superposition' && 
            this.player.discoveredUniverses.includes(u.id)
        );
        if (superposition.length > 0) {
            suggestions.push({
                action: 'collapse',
                priority: 'medium',
                reason: 'Collapse quantum state for stability'
            });
        }

        // 默认探索
        suggestions.push({
            action: 'explore',
            priority: 'normal',
            reason: 'Continue quantum exploration'
        });

        return suggestions[0];
    }

    getPsychAnalysis() {
        if (!this.player) return null;

        const p = this.player.psychology;
        const analysis = {
            profile: [],
            strengths: [],
            weaknesses: [],
            recommendations: []
        };

        // 风险承受
        if (p.riskTolerance > 0.7) {
            analysis.profile.push('🎲 高风险偏好 - 喜欢探索未知');
            analysis.strengths.push('大胆探索高价值宇宙');
            analysis.weaknesses.push('可能因悖论损失能量');
        } else if (p.riskTolerance < 0.3) {
            analysis.profile.push('🛡️ 保守型 - 偏好稳定');
            analysis.strengths.push('稳定发展时间线');
            analysis.weaknesses.push('可能错失高价值机会');
        }

        // 探索欲
        if (p.explorationDrive > 0.6) {
            analysis.profile.push('🔭 探索者 - 寻求新发现');
            analysis.strengths.push('发现更多宇宙');
            analysis.recommendations.push('优先探索未知宇宙');
        }

        // 时间依恋
        if (p.attachmentStyle > 0.7) {
            analysis.profile.push('💫 念旧型 - 珍惜时间线');
            analysis.strengths.push('维护多个时间线');
            analysis.weaknesses.push('不愿合并时间线');
        }

        // 时间偏好
        if (p.temporalBias > 0.6) {
            analysis.profile.push('⏩ 未来导向');
            analysis.recommendations.push('考虑时间线分裂策略');
        } else if (p.temporalBias < 0.4) {
            analysis.profile.push('⏪ 过去导向');
            analysis.recommendations.push('关注坍缩稳定的时间线');
        }

        return analysis;
    }

    async playTurn() {
        const suggestion = this.getSuggestion();
        
        if (suggestion.action === 'explore') {
            return this.game.explore(this.playerId);
        } else if (suggestion.action === 'entangle') {
            return this.game.makeChoice(this.playerId, { type: 'entangle' });
        } else if (suggestion.action === 'collapse') {
            return this.game.makeChoice(this.playerId, { type: 'collapse' });
        } else if (suggestion.action === 'split') {
            return this.game.makeChoice(this.playerId, { type: 'split' });
        } else {
            return this.game.playTurn(this.playerId);
        }
    }
}

/**
 * 🏆 成就系统
 */
class QuantumAchievements {
    constructor() {
        this.achievements = {
            'first_discovery': { name: '🌟 首次发现', desc: '发现第一个宇宙', icon: '🌟' },
            'quantum_entanglement': { name: '⚡ 量子纠缠', desc: '创建第一个纠缠', icon: '⚡' },
            'timeline_splitter': { name: '🔀 时间分裂者', desc: '分裂第一个时间线', icon: '🔀' },
            'collector': { name: '🧺 收藏家', desc: '发现10个不同宇宙', icon: '🧺' },
            'paradox_master': { name: '🎭 悖论大师', desc: '累积10点悖论点数', icon: '🎭' },
            'dimension_walker': { name: '🌀 维度行者', desc: '探索所有维度', icon: '🌀' },
            'quantum_master': { name: '🔮 量子大师', desc: '达到1000分', icon: '🔮' },
            'universal_understanding': { name: '🌌 万物通', desc: '发现所有宇宙类型', icon: '🌌' }
        };
    }

    checkAchievements(player, game) {
        const unlocked = [];
        
        if (player.discoveredUniverses.length >= 1 && !player.achievements.includes('first_discovery')) {
            unlocked.push('first_discovery');
        }
        
        if (game.entanglements.filter(e => e.playerId === player.id).length > 0 && 
            !player.achievements.includes('quantum_entanglement')) {
            unlocked.push('quantum_entanglement');
        }

        if (game.timelines.size > 0 && !player.achievements.includes('timeline_splitter')) {
            unlocked.push('timeline_splitter');
        }

        if (player.discoveredUniverses.length >= 10 && !player.achievements.includes('collector')) {
            unlocked.push('collector');
        }

        if (player.paradoxPoints >= 10 && !player.achievements.includes('paradox_master')) {
            unlocked.push('paradox_master');
        }

        const score = game.getScore(player.id);
        if (score >= 1000 && !player.achievements.includes('quantum_master')) {
            unlocked.push('quantum_master');
        }

        player.achievements.push(...unlocked);
        return unlocked.map(a => this.achievements[a]);
    }
}

// 导出模块
module.exports = { 
    QuantumUniverse, 
    QuantumFateSelector, 
    AIQuantumStrategy,
    QuantumAchievements 
};

// 快速测试
if (require.main === module) {
    console.log('🎲 量子命运选择器 - 快速测试\n');
    
    const game = new QuantumFateSelector({ 
        name: '🌌 量子命运选择器',
        maxTurns: 30,
        dimensionGate: 5
    });
    
    // 添加玩家
    game.addPlayer('alpha', '🔵 阿尔法', 'explorer');
    game.addPlayer('beta', '🔴 贝塔', 'hoarder');
    
    // 生成宇宙池
    game.generateUniversePool(20);
    
    console.log('游戏初始化:', game.getSummary());
    console.log('\n--- 玩家行动 ---');
    
    // 玩家1探索
    const result1 = game.explore('alpha');
    console.log('阿尔法探索:', result1.message || result1);
    
    // 玩家2探索
    const result2 = game.explore('beta');
    console.log('贝塔探索:', result2.message || result2);
    
    // 玩家1再次探索
    const result3 = game.explore('alpha');
    console.log('阿尔法再次探索:', result3.message || result3);
    
    // 玩家1做选择
    const choice1 = game.makeChoice('alpha', { type: 'entangle' });
    console.log('阿尔法纠缠:', choice1.message || choice1);
    
    // 执行回合
    console.log('\n--- 回合结束 ---');
    const turnResult = game.playTurn('alpha');
    console.log('回合结果:', turnResult);
    
    console.log('\n--- 排行榜 ---');
    console.table(game.getLeaderboard());
    
    // AI策略测试
    console.log('\n--- AI策略建议 ---');
    const ai = new AIQuantumStrategy(game, 'alpha');
    console.log('建议:', ai.getSuggestion());
    console.log('心理分析:', ai.getPsychAnalysis());
    
    console.log('\n✅ 测试通过!');
}
