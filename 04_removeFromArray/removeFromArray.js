const removeFromArray = function (array, ...toRemove) {
    let filteredArray = array.filter ( function (x) {
        return toRemove.indexOf(x) < 0;
    });
    return filteredArray

};

// Do not edit below this line
module.exports = removeFromArray;
