const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0){
        return "ERROR";
    }
    
    biggest_num = num1 > num2 ? num1 : num2;
    smallest_num = num2 < num1 ? num2 : num1;
    let sum = smallest_num;
    for(let number = smallest_num+1; number <= biggest_num; ++number){
        sum += number;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
