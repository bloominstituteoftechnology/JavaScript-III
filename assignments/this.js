/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - references the browser window, contains all JS functions and methods
 * 2. Implicit - references the function the this keyword is inside of, automatically references the function it is inside of. When a method is used, this keyword references the object left of the dot.
 * 3. Explicit - references anything you want by using the methods .call, .apply, and .bind methods. Used for assigning inheritance to constructor functions and children
 * 4. new - creates a new object based off of a controctor functions attributes
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding

const person = {
  name: 'Alex',
  age: 30,
  speak: function () {
    console.log(`${this.name}`)
  }
}

person.speak();

// Principle 3

// code example for New Binding

function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.speak = function () {
    console.log(`${this.name} is ${this.age}`);
  }
}

const alex = new Person({
  name: 'Alex',
  age: '30'
})

console.log(alex);
alex.speak();

// Principle 4

// code example for Explicit Binding

function Child(childAttributes) {
  Person.call(this, childAttributes);
  this.toy = childAttributes.toy;
}

const kiddo = {
  name: 'BamBam',
  age: '3',
  toy: "stick"
}

console.log(kiddo);