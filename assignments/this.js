/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

//* Principle 1

//! code example for Window Binding

const superman = function() {
  console.log(this);
};
superman();

//* Principle 2

//! code example for Implicit Binding

var MyObject = function() {
  this.name = "MyObjectName";
  this.myProperty = "property";
};

MyObject.prototype.doStuff = function(action) {
  console.log(this.name + " is " + action + "!");
};

var obj = new MyObject();

obj.doStuff("awesome"); // prints 'MyObjectName is awesome!'
//* Principle 3

//! code example for New Binding

function vintageCar() {
  console.log(
    `This ${this.make} is a ${this.year} ${this.model} color ${this.color}`
  );
}

let car = {
  make: "Chevy",
  model: "Camero",
  year: "1969",
  color: "CandyApple Red"
};
vintageCar.call(car);

//* Principle 4

//! code example for Explicit Binding
