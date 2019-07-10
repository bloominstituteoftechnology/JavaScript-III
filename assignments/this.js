/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When in the global scope, "this" will be the window/console Object
* 2. Implicit - When a function is called by a preceding dot, the object left of the dot will be "this"
* 3. New - Whenever a constructor function is used, "this" refers t0 the specific instance of the object that is created and returned by the constructor function.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
	console.log(this);
	return name;
}
sayName('Amine');
// code example for Window Binding

// Principle 2
function 

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
