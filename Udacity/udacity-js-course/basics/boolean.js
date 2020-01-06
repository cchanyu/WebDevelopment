let temp = 31;

// === - equality operator + data type
// !== - not equal operator
// == - just value comparison
// < or > - less than or greater than
// <= or >= - less or equal or greater equal

let isFreezing = temp === 31;

console.log(isFreezing);

if(temp <= 32) {
    console.log("It's freezing outside!");
}

if(temp >= 110) {
    console.log("It's too hot outside!");
}

// Challenge

let age = 23;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);

if(age <= 7) {
    console.log("You get a child discount!");
}

if(age >= 65) {
    console.log("You get a senior discount!");
}