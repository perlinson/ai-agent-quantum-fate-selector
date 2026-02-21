# 🎲 量子命运选择器 (Quantum Fate Selector)

> 首个AI Agent专属的平行宇宙命运选择游戏

## 🌌 游戏概念

在量子平行宇宙中探索、创造纠缠、书写属于你的命运！

### 核心机制

- **🌌 8种宇宙类型**: 量子、魔法、数字、虚空、自然、人工、梦境、混沌
- **⚡ 量子态系统**: 叠加态 → 坍缩态的观测机制
- **🔗 量子纠缠**: 不同宇宙之间的神秘连接
- **🔀 时间线分支**: 每一个选择创造新的平行现实
- **🎭 悖论点数**: 高风险高回报的量子冒险

### 资源系统

**普通资源**: 星尘、宇宙射线、暗物质、等离子体、水晶
**稀有资源**: 时间水晶、虚空精华、量子宝石、星云之心、反物质
**传奇资源**: 大爆炸碎片、奇点珍珠、永恒之火

## 🎮 快速开始

```javascript
const { QuantumFateSelector, AIQuantumStrategy } = require('./index.js');

// 创建游戏
const game = new QuantumFateSelector({ 
    name: '🌌 量子命运选择器',
    maxTurns: 30,
    dimensionGate: 5
});

// 添加玩家
game.addPlayer('alpha', '🔵 阿尔法', 'explorer');

// 生成宇宙池
game.generateUniversePool(20);

// 探索宇宙
const result = game.explore('alpha');
console.log(result.message);

// 创建量子纠缠
game.makeChoice('alpha', { type: 'entangle' });

// 执行回合
game.playTurn('alpha');

// 获取排行榜
console.log(game.getLeaderboard());

// AI策略建议
const ai = new AIQuantumStrategy(game, 'alpha');
console.log(ai.getSuggestion());
console.log(ai.getPsychAnalysis());
```

## 🎯 策略类型

| 类型 | 描述 | 特点 |
|------|------|------|
| `explorer` | 探索者 | 大胆探索高价值宇宙 |
| `hoarder` | 收藏家 | 稳定收集资源 |
| `balanced` | 平衡型 | 均衡发展 |
| `speculative` | 投机型 | 高风险高回报 |

## 🌐 网页版

直接在浏览器中打开 `index.html` 即可游玩！

## 🏆 成就系统

- 🌟 首次发现 - 发现第一个宇宙
- ⚡ 量子纠缠 - 创建第一个纠缠
- 🔀 时间分裂者 - 分裂第一个时间线
- 🧺 收藏家 - 发现10个不同宇宙
- 🎭 悖论大师 - 累积10点悖论点数
- 🌀 维度行者 - 探索所有维度
- 🔮 量子大师 - 达到1000分
- 🌌 万物通 - 发现所有宇宙类型

## 🎲 随机事件

- 📈 量子潮汐 - 全员获得20量子能量
- 🌀 维度震荡 - 宇宙价值波动±50%
- ⚡ 纠缠风暴 - 纠缠强度翻倍
- 🎭 命运骰子 - 时间线令牌随机分配
- 🔮 预言时刻 - 下次发现必得传奇资源
- 🕳️ 虚空吞噬 - 随机宇宙变为虚空

## 🧠 AI心理分析

游戏会根据玩家行为分析其心理特征：

- 🎲 风险偏好
- 🔭 探索欲
- 💫 时间线依恋
- ⏰ 时间偏好

## 评分算法

```
score = 发现宇宙价值 + 纠缠加成×100 + 时间线令牌×50
       × (1 + 悖论点数×0.2) × (1 + 成就数×0.1)
```

## 技术栈

- 原生 JavaScript (ES6+)
- 无框架依赖
- 响应式 CSS 设计

## 许可证

MIT License

---

*在量子宇宙中，每一次选择都是一次命运的赌注。*
