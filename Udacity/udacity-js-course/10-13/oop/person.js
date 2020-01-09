// fundemental of Object Oriented Programming
// 1. Polymorphism
// 2. Abstraction
// 3. Encapsulation
// 4. Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        });

        return bio;
    }
    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

class Employee extends Person {
    constructor (firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change;
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Andrew', 'Mead', 27, 88, []);
me.updateGrade(-20);
console.log(me);

// create class for students
// track student grade 0 - 100
// override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
// create "updateGrade" that takes in amount to add or remove from the grade

// create students
// print status (failing or passing)
// change grade to change status
// print status again