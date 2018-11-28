/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In global scope, 'this' will be the window/console object.
* 2. 'this' will come before the dot in a function
* 3.  indicates to a specific instance of a object
* 4.  'this' is controlled by what we call it
*
Window Binding:
function me(name) {
  console.log(this);
  return name;
}
sayName("Cynthia");

Implicit Binding:

const oneSaying = {
  nameSaying: 'Hola',
  sayHello: function(names) {
    console.log(`${this.name} my name is ${names}`);
    console.log(this);
  }
};
oneSaying.sayHello('Cynthia);

New Binding:

function NewPerson(nerds) {
  this.nerdGreetings = 'Hello earthlings ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.nerdGreetings + this.greeter);
    console.log(this);
  };
}

Explicit Binding:

const person = {
  name: 'Billy'
}

const hobbies = ['biking', 'skateboarding', 'skiing'];

function introduce(hobbies) {
  "use strict";
  console.log(`What's up, My name is ${this.name}, and I have hobbies in ${hobbies}`);
}



* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding