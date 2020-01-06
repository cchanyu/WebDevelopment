let myBook = {
    title: '1984',
    author: 'Chanyu Choung',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Fare';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge
let me = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
me.age = me.age + 1;
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);