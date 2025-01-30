const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear(); 
    people.forEach(person => {
        person.age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    });

    people.sort((a, b) => b.age - a.age);

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;


