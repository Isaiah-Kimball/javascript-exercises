const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if (arr.length===0){
    return 0;
  }
	return arr.reduce((total, curr) => add(total, curr));
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr);
};

const power = function(a,b) {
  arr = []
  for (let i = 0; i < b; ++i){
    arr.push(a);
  }
  return multiply(arr);
};

const factorial = function(a) {
  if (a<=1){
    return 1
  }
	arr = []
  for (let i = 1; i <= a; ++i){
    arr.push(i);
  }
  return multiply(arr);
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
