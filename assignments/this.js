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

myName("Kelli");

// Principle 2

// code example for Implicit Binding

const myGreeting = {
    greeting: 'Hi',
    sayHi: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }
};

myGreeting.sayHi('Kelli');

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding