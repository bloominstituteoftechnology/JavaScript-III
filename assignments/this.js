/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myName(name) {
    console.log(this);
    return name;
}

// myName("Kelli");

// Principle 2

// code example for Implicit Binding

const myGreeting = {
    greeting: 'Hi',
    sayHi: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
};

// myGreeting.sayHi('Kelli');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

// const Kelli = new CordialPerson('Marissa');
// const Marissa = new CordialPerson('Kelli');

// Kelli.speak();
// Marissa.speak();

// Principle 4

// code example for Explicit Binding

// function CordialPerson(greeter) {
//     this.greeting = 'Hello';
//     this.greeter = greeter;
//     this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     };
// }

// const K = new CordialPerson('Marissa');
// const M = new CordialPerson('Kelli');

// K.speak.call(Marissa);
// M.speak.apply(Kelli);