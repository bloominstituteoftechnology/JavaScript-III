/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default binding of "this". "This" will always refer to window unless it is implicitly or explicitly bound to something else. In node, "this" seems to be bound to an empty object.
* 2. Implicit binding is when "this" is implicitly bound to an object. This occurs when you use this inside of a method of an object.
* 3. New binding occurs when "this" is used in a constructor function to assign properties to a new object.
* 4. Explicit binding is when you give a reference to a "this" object to a function using .call(), .apply(), or .bind().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log("Window binding:");
console.dir(this);

// Principle 2

// code example for Implicit Binding

const thisTest = {

  objName: "Fred",
  testFunction: function() {

    console.log(`My name is ${this.objName}`);

  }

}

console.log("Implicit binding:");
thisTest.testFunction();

// Principle 3

// code example for New Binding

let Pizza = function(flavor, numSlices) {

  // Using this with New Binding to define properties and methods

  this.myFlavor = flavor;
  this.mySlices = numSlices;

  this.printInfo = function() {

    // Using this with Implicit Binding to access properties
    console.log(`I am a ${this.myFlavor} pizza with ${this.mySlices} slices.`);

  }

}

let pepperoniPizza = new Pizza("pepperoni", 12);
pepperoniPizza.printInfo();

// Principle 4

// code example for Explicit Binding

function aFunction() {

  console.log(this.greeting);

}

let myObj = {

  greeting: "Hello world!"

}

// Will log undefined, as there is no "this" reference
aFunction();

// Will log myObj.greeting
aFunction.call(myObj);
