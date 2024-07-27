const findTheOldest = function(arr) {
    //console.log(arr);
    let oldestPerson = null;
    let oldestAge = 0;
    for (const person of arr){
        //console.log(person);
        let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : 2012 - person.yearOfBirth;
        //console.log(age);
        if (age > oldestAge){
            oldestAge = age;
            oldestPerson = person;
            //console.log("changed");
        }
    }
    console.log(oldestPerson);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
