/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding: 'this' will be representing the window object in the global scope or outside an object constructor or definition, 
      or when not clearly defined with the functions call, apply, ot bind.
* 2. Implicit binding: When invoking a function using the dot notation, as in obj.myMethod(), the object to the left of the dot represents 'this' in the object declaration.
* 3. Explicit binding: 'this' is clearly assigned to a function using the functions call(), apply, or bind(). 
* 4. New binding: The keyword 'new' is used to create a new object from a constructor function. New defines the 'this' to be the newly created object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function example() {
  return this.toString();
}
example(); //"[object Window]"

// Principle 2
// code example for Implicit Binding
const objExample = {
  name: 'implicit binding example',
  myMethod: function() {
    console.log(`This is an example of the ${this.name}`);
  }
};
objExample.myMethod(); //This is an example of the implicit binding example

// Principle 3
// code example for New Binding
function exampleConstructor(properties) {
  this.prop1 = properties.prop1;
  this.prop2 = properties.prop2;
  this.prop3 = properties.prop3;
  this.showProperies = function() {
    console.log(`Properties: ${this.prop1}, ${this.prop2}, and ${this.prop3}`);
  }
}

const obj1 = new exampleConstructor({prop1: 'example1', prop2: 'example2', prop3: 'example3'});
obj1.showProperies(); //Properties: example1, example2, and example3

// Principle 4
// code example for Explicit Binding
const exampleFunc = function(argument1) {
  console.log(`This function prints your name: ${this.name} and the argument: ${argument1}`);
}

const obj = {
  name: 'exampleName'
};

exampleFunc.call(obj, 'myArgument'); //This function prints your name: exampleName and the argument: myArgument