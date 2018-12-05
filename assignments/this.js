/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding:

- Answer: Window Binding is always there. Like in the example of the forest of trees, Window Binding is the entire forest.


* 2. Implicit Binding:

- Answer: Implicit (AUTOMATIC!) Binding. Automatic means that Implicit Binding essentially happens for free. It is automatic.
If you look to your left of the invocation of a method there you will find your 'this' keyword.

* 3. New Binding: 

- Answer: Building NEW objects! When you build a constructor function make sure to
calitalize the first letter to tell the next developer what you are doing!

* 4. Explicit Binding:

- Answer: We control this! In Explicit Binding we control which 'this' keyword is being applied.

*
* write out a code example of each explanation above
*/


// Principle 1 

// Answer (commenting answers out because last time they showed up in console)
// code example for Window Binding:

// function myName(name) {
//     console.log(this);
//     return name;
// }

// myName("Kelli");


// Principle 2
// code example for Implicit Binding

// const myGreeting = {
//     greeting: 'Hi',
//     sayHi: function(name) {
//         console.log(`${this.greeting} my name is ${name}`);
//     }
// };

// myGreeting.sayHi('Kelli');


// Principle 3
// code example for New Binding

// function CordialPerson(greeter) {
//     this.greeting = 'Hello';
//     this.greeter = greeter;
//     this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     };
// }

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


