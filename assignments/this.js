/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New Binding
* 2. Window Binding
* 3. Implicit
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.name = "terrance";
function wind(name) {
  console.log(this);
  return name;
}

// Principle 2

// code example for Implicit Binding

const newObj = {
  prop1: "prop1",
  logProp: function() {
    return this.prop1;
  }
};
console.log(newObj.logProp());

// Principle 3

// code example for New Binding

function Person(attr) {
  this.name = attr.name;
  this.age = attr.age;
  this.speak = function() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  };
}
const terrance = new Person({
  name: "terrance",
  age: 23
});
console.log(terrance.speak());

// Principle 4

// code example for Explicit Binding

const terrance = {
  name: "Terrance",
  age: 23
};

const greet = function(skill1, skill2, skill3) {
  return `Hello my name is ${this.name} and I am ${
    this.age
  } and I like to ${skill1}, ${skill2} and ${skill3}`;
};

const skills = ["lift", "run", "eat"];

console.log(greet.call(terrance, ...skills));
