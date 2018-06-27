/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window- this refers to the window object
 * 2. Implicit-this refers to the object to the left of the invocation
 * 3. Explicit-this is passed as a parameter
 * 4. New- used to construct a new object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this.name);
// Principle 2

// code example for Implicit Binding
const myObject = {
  'greeting': 'What up',
  'sayHello': function(name) {
    console.log(`${this.greeting} my name is: ${name}`);
  }
}
myObject.sayHello("Charles");

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {

  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(`${this.greeting} ${this.greeter}`)
  }
}
const jerry = new CordialPerson('Newman');
// Principle 4

// code example for Explicit Binding

const myObject = {
  'name': 'Jim',
  'age': 30
}

const skills = ['HTML', 'CSS', 'JS'];

function sayName(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
}