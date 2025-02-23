function orderBy(objects, properties) {
    if (!Array.isArray(objects) || !objects.every(obj => typeof obj == 'object')) 
        throw new Error("First argument should be an Array of objects");

    let comp =function(a, b){
        for (let prop of properties){
            if (!(prop in a) || !(prop in b))
                throw new Error(`Not every object contains the property '${prop}'`);
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
        }
        return 0;
    }

    return [...objects].sort(comp);
}

module.exports = orderBy;
