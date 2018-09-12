/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - works in global scope
 * 2. Implicit -  only communicates inside of the function/object that it lives in
 * 3. New - works with constructor functions, constructors always have a capital letter
 * 4. Explicit - 'this' is defined when the call or apply method is used
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function myFunc(prop) {
  console.log(this);
  return prop;
}
myFunc("This is a window binding");


// Principle 2

// code example for Implicit Binding

const myObj = {
  animal: 'Bear',
  food: function (food) {
    console.log(`${this.animal}'s like to eat ${food}`);
    console.log(this);
  }
};
myObj.food('Salmon');


// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function () {
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

function Person(attributes) {
  this.gender = attributes.gender;
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
}

const fred = new Person({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});