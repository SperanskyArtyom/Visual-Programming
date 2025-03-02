function calcStats(catsInfo){
    let stats = {};
    for (let cat of catsInfo){
        if (!(cat["country"] in stats)){
            stats[cat["country"]] = 0;
        }
        stats[cat["country"]]++;
    }
    return stats;
}

module.exports = calcStats;
