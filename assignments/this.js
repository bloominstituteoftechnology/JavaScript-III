/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Using "this" inside a function or outside points to the "window" object
* 2. Using "this" inside a method points to the object invoking the method (left side of the dot)
* 3. Using constructor function and "new" keyword points to the object newly created
* 4. Using "call"/"apply"/"bind" allows us to change the "this" pointing to whatever you wish
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function logThis () {
  console.log(this);
}

logThis();

// Principle 2

// code example for Implicit Binding

const thisIsAnObject = {
  "name": "this is an object",
  "logThis": function() {
    console.log(`${this.name}`);
  }
}

thisIsAObject.logThis();

// Principle 3

// code example for New Binding

function Student (name, age) {
  this.name = name;
  this.age = age;
  this.speak = function () {
    console.log(`Hi I am ${this.name}`);
  }
}

const steven = new Student('steven', 100);
steven.speak();

// Principle 4

// code example for Explicit Binding

function Cat (name, age) {
  this.name = name;
  this.age = age;
  this.meow = function () {
    console.log(`Mmmmmmmmeow`);
  }
}

const lyly = new Cat('lyly', 3);
steven.speak.call(lyly);