/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object this binding refers to the global scope and everything the window contains.
* 2. Implicit Binding refers to the object within which this is referring.
* 3. New Bindings are typically used as constructors, as other objects can be passed through and understood as 'this.'
* 4. Explicit Binding is when a new funcction is created that acts as the original, but 'this' is already predefined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function checkIt(number) {
    console.log(this);
    return number;
}

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding