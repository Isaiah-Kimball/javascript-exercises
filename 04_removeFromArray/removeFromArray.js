const removeFromArray = function(arr, ...args) {
    console.log(args);
    let newArray = [];
    for (const value of arr){
        if (args.indexOf(value) == -1){
            newArray.push(value);
            console.log("pushed: " + value);
        }
    }
    console.log("returned: " + newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
