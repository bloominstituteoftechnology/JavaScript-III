/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New Binding - this refers to the object that is created by a constructor function
  2. Implicit - .this is automatically binded when the function is called.
  3. Explicit - The .this method has to be called to in an argument b/c it is outside of the object its referencing.
  4. Window Binding - .this refers to the window object
*/

// Principle 1

// code example for Window Binding
// function greet(name) {}



// code example for Implicit Binding
// const me = {}


// Principle 3

// code example for New Binding

// Principle 4

// function greeting () {}

function add(n) {
  return n + 5;
}
console.log(add(5));
