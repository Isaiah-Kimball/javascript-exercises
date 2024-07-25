const reverseString = function(word) {
    let list_word = word.split("");

    console.log(list_word);
    list_word.reverse();
    console.log(list_word);
    return list_word.join("");
};

// Do not edit below this line
module.exports = reverseString;
