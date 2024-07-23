const palindromes = function (str) {
    const array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
        let value = array[i];
        if ( (value.toUpperCase() === value.toLowerCase() ) &&
            isNaN(value) || value === " " ) {
                array.splice(i, 1);
            }
    }
    const nonReversedString = array.join("").toLowerCase();
    const reversedString = array.reverse().join("").toLowerCase();
    return nonReversedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;