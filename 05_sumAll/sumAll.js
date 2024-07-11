const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" ) {
        return "ERROR";
    }

    let sum = 0;
    let index = num1;
    let condition = num2; 

    if (num1 > num2) {
        index = num2;
        condition = num1;
    } 

    for (index; index <= condition; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
