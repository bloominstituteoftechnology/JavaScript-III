/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window-binding: This applies to the global scope. If nothing is bound to the "this" keyword, it will go to the window.
* 2. Implicit-binding: Whatever is directly left of the invocation is the "this" keyword context.
* 3. Explicit-binding: This uses .call, .bind, or .apply to reference to a function where the "this" keyword is referenced to.
* 4. new-binding: When you create a function and then an object referring back to that function "new," "this" refers to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.name = 'Mikey';

function sayName() {
    console.log(`My name is ${this.name}`);
}

sayName();
// Principle 2

// code example for Implicit Binding

const coach = {
    'name': 'Ricky',
    'age': 30,
    shout() {
        console.log(`I'm coach ${this.name}!!!`)
    }
}

coach.shout();

// Principle 3

// code example for New Binding

function Student(name) {
    this.name = name,
    this.grade = 4;
    this.introduction = function() {
        console.log(`${this.name} is in grade ${this.grade}`)
    }
}

const me = new Student("Sally");

me.introduction();

// Principle 4

// code example for Explicit Binding

function music (inst1, inst2, inst3) {
    console.log(`Hello, I'm a ${this.profession} and I'm proficient at ${inst1}, ${inst2}, and ${inst3}`);
}

const Applicant = {
    profession: "musician",
}

const instruments = ['piano', 'violin', 'guitar']

music.apply(Applicant, instruments)
