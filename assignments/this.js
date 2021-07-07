/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

//When in the global scope, the value of “this” will be the window/console Object

// code example for Window Binding
const myFunction = function () {
    console.log(this);
};
myFunction();

// Principle 2

//Implicit Binding is specifically binding objects and methods.

// code example for Implicit Binding
const dad = {
    name: 'Tuvok',
    age: 104,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
dad.greet();
// Principle 3

//New Binding creates oblects

// code example for New Binding

function CostcoDoorman(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`);
    };
  }
  
  const ivan = new CostcoDoorman('Keith');
  const keith = new CostcoDoorman('Ivan');

  console.log(ivan);
  console.log(keith);

  keith.speak();
   ivan.speak();

//   const ivan = {
//       greeter: 'Ivan',
//       greeting: 'Hello'
//       speak: function() {
//         console.log(`${this.greeting} ${this.greeter}`);
//       }
//   }
  

// Principle 4

//Whenever JavaScript’s call or apply method is used, this is explicitly defined.

// code example for Explicit Binding

const person = {
    name: 'Tuvok',
    age: 104
}
const sports = ['baseball', 'football', 'basketball'];

function funTime() {
    'use strict'
    console.log(`Hello my name is ${this.name} and I am ${this.age}.  The sports
    that I like to play are ${sports}`)
}

    funTime.call(person);



    const introduceLater = funTime.bind(person);
    introduceLater();