// same as
// let functionName = function(parameters) {}
const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
}

console.log(square[5]);

const people = [{
    name: 'Chanyu',
    age: 23
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jessi',
    age: 27
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30;
// })

const under30 = people.filter((person) => person.age < 30)
const age27 = people.filter((person) => person.age == 27)

console.log(under30);
console.log(age27);

// 1. find the person with age 27
// 2. print that person's name