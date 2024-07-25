const repeatString = function(word, count) {
    if (count < 0){
        return "ERROR";
    }
    let repeated = ""
    while (count > 0){
        repeated+=word;
        --count;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
