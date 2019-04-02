/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when 'this' is used in teh global scope, it will be a console Object
* 2. Implicit Binding - when a function is called by a preceding dot, the object before that dot is 'this'
* 3. New Binding - when a constructor function is used, 'this' refers to the instance of the object that is returned by the function
* 4. Explicit Binding - when call or apply methods are used, 'this' becomes explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myCharacter(name) {
    console.log(this);
    return name;
}
myCharacter("Orivald");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding