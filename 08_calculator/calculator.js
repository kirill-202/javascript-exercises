const add = function(n1, n2) {
	return n1+n2;
}
const subtract = function(n1, n2) {
	return n1-n2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	return arr.reduce((acc, curr) => acc + curr);
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc*curr);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1; 
  return n * factorial(n-1);
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
