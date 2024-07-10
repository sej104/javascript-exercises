const removeFromArray = function(array, ...items) {
    for (const item of items) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) delete array[i];
        }
    }
    return array.filter((number) => number !== undefined);
}

// Do not edit below this line
module.exports = removeFromArray;
