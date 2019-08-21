/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If it is executed globally, it will bind to the window object of a web browser
 * 2. If it is executed on an object using dot notation, it is an implicit binding.
 * 3. the new keyword creates a new object of inherited `this` properties from the constructor function
 * 4. If it is bound using .call(), .bind(), or .apply() it is an explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let myCon = function(obj) {
  this.name = obj.name;
  this.age = obj.age;
};

myCon.prototype.dance = function() {
  return `${this.name} still dances at age ${this.age}`;
};

const newGuy = new myCon({ name: "kyle", age: 70 });

newGuy.dance();

// Principle 3

// code example for New Binding

console.log(newGuy);

// Principle 4

// code example for Explicit Binding

let Strong = function(obj) {
  this.iq = obj.iq;
  this.weight = obj.weight;
  myCon.call(this, obj);
};
