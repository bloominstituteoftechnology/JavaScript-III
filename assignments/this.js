/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayYourName(name) {
   console.log(`My name is ${this.name}`);
}


// Principle 2

// code example for Implicit Binding

const student = {
	"name": "Sam",
	"age": 25,
	"studentInfo": function() {
		return `Student's name is ${this.name} and student's age is ${this.age}`;
	} 
}


// Principle 3

// code example for New Binding

function NiceNeighbor(neighbor) {
  this.sentence = "Welcome to the neighborhood!";
  this.neighbor = neighbor;
  this.speak = function() {
    console.log( `${this.neighbor} says  ${this.sentence}`);
  }
}

const sam = new NiceNeighbor("Sam");

sam.speak();


// Principle 4

// code example for Explicit Binding

const car = {
	"make": "subaru",
	"price": 5000
}

const colors = ["red", "blue", "green"];

function stock(color1, color2, color3) {
	return `We have ${this.make} in ${colors}`;
}

stock.apply(car, colors);