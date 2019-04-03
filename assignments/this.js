/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of "this" will be the window/console Object.
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is "this". 
* 3. New Binding: When ever a constructor function is used. 
    This refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: Whenver JavaScript's call or apply method is used, "this" is explicitly defined.  WE can override what the constructor objects get set to. 
    Calling the object explicityly with a new context using .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  console.log(sayName("D'Artagnan"));

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

newman.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

// code example for Explicit Binding (call, apply)


const person = {
  name: 'Bob'
}

const skills = ['HTML', 'CSS', 'JS'];

function introduce(skills) {
  'use strict';
  console.log(`Hello! My name is ${this.name}, and I like to program in ${skills}`)
}

introduce.call(person, skills); 