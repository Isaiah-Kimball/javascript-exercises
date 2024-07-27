const palindromes = function (str) {
    str = str.replace(/[,.!\s]/g,"");
    console.log(str);
    let left = 0;
    let right = str.length - 1;
    while (left < right){
        if (str[left].toLowerCase() !== str[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
