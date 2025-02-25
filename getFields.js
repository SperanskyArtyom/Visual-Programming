function getFields(objs, field){
    let keys = []
    for (let obj of objs){
        keys.push(obj[field]);
    }

    return keys;
}

module.exports = getFields;
