/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding--when using "this" keyword in the global scope, the value defaults to the window Object.
* 2. Implicit binding--value of "this" becomes the object on the left side of a function call.
* 3. New binding--value of "this" becomes an object created by the constructor function containg the "this" keyword.
* 4. Explicit binding--"this" is defined by a call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function doSomething(anything) {
  console.log(this);
  return anything;
}
doSomething("something");

// Principle 2

// code example for Implicit Binding
const car = {
  make: "Honda",
  model: "Accord",
  topSpeed: function(speed) {
    console.log(`The ${this.make} ${this.model} can reach ${speed}mph.`);
  }
};

const car2 = {
  make: "Toyota",
  model: "Tercel",
  topSpeed: function(speed) {
    console.log(`The ${this.make} ${this.model} can reach ${speed}mph.`);
  }
};

car.topSpeed(70);
car2.topSpeed(55);

// Principle 3

// code example for New Binding
function Runner(person) {
  this.person = person;
  this.isRunning = function() {
    console.log(`${this.person} is running.`);
  };
}

const tim = new Runner("Tim");
const jesse = new Runner("Jesse");

tim.isRunning();
jesse.isRunning();

// Principle 4

// code example for Explicit Binding
const natureDoc = function() {
  console.log(`The ${this.species} is ${this.height} tall.`);
};

const cat = {
  species: "cat",
  height: "20 inches"
};

const mouse = {
  species: "mouse",
  height: "2 inches"
};

natureDoc.call(cat);
natureDoc.call(mouse);
