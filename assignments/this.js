/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding: when invoked it binds "this" to whatever is left of the dot.
* 2. explicit binding: uses "call", "apply", "" to bind the "this" keyword to bind it to the first item in the parenthesis.
* 3. window binding: this has no context it defaults to the window. 'this' binds to hte window
* 4. New binding: Uses the "new" keyword to create a copy of an object. 'this' is bound to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myTest() {
    console.log(this.width);
}
// Principle 2

// code example for Implicit Binding
function User(name, pw) {
    this.userName = name;
    this.password = pw;
} 
// Principle 3

// code example for New Binding
let Willie = new User('willie','abc123');
// Principle 4

// code example for Explicit Binding
