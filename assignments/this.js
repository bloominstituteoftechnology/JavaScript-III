/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. `this` can be used for Window/Global Object Binding. It points to the window object which has many built in methods available to the user. this.a = "dragon" would be the same as window.a = "dragon".
* 2.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = "Simon";
function sayName(name) {
    console.log(this.name); //this references to the window object so it will output Simon instead of the given argument in sayName
}
sayName("William"); //Will not log the name William
// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding