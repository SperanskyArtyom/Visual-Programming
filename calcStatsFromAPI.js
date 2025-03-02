const loadData = require('./loadData');
const calcStats = require('./calcStats');

async function calcStatsFromAPI() {
    try {
        const catsInfo = await loadData();
        const stats = calcStats(catsInfo);
        return stats;
    } catch (error) {
        console.error('Ошибка при загрузке данных или вычислении статистики:', error);
        throw error;
    }
}

module.exports = calcStatsFromAPI;
