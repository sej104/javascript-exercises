const fibonacci = function(sequence) {
    if (sequence < 0) return "OOPS";
    const array = [0, 1];
    for (let i = 1; i < sequence; i++) {
        array.push(array[i-1] + array[i]);
    }
    return array[sequence];
};

// Do not edit below this line
module.exports = fibonacci;


// * Create a variable and set it equal to an array with values 0 and 1
// * Create a loop that starts at index 1
// * Get the index value before it and add it to the current index value
// * Push the result to array
// * Continue looping until it reaches the number inserted from the user
// * Return the last index
