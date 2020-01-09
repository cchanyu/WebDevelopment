const Person = function (firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age;
}

const me = new Person('Chanyu', 'Choung', 23);
console.log(me);

const person2 = new Person('Jenna','Lore',25);
console.log(person2);