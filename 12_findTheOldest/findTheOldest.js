const findTheOldest = function(array) {
    array.sort((previousPerson, nextPerson) => {
        return (getAge(nextPerson)) - (getAge(previousPerson));
    });
    return array[0];
};

function getAge(person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
