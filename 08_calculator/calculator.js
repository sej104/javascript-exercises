const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum + item, 0)
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  if (num === 0) return 1;

  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
