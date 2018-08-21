/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding refers to "this" being a global object or in the window. 
* 2. Implicit invokes a function using dot notation and the context of "this" is to the left of the dot.
* 3. Explicit binding is using call, apply or bind on a function. "This" is in those contexts.
* 4. New binding is 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this)
// code example for Window Binding

// Principle 2
var MyObject = function (){
this.name = "Rick";
};
// code example for Implicit Binding

// Principle 3
rusty.call(this, ...nails)
// code example for New Binding

// Principle 4
const newPlane = new Plane();
// code example for Explicit Binding