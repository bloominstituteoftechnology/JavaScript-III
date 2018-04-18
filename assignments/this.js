/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW: With no Execution context the 'this' keyword bind to the Global Object.
* 2. New Object: The 'this' keyword binds to the new 'instance' created.
* 3. Implicit: The 'this' keyword binds to the object which is calling the function that enclose 'this'.
* 4. Explicit: 'this' keyword is binded to the object that call the 'call || apply || bind' method.
*
* write out a code example of each explanation above
*/


// Principle 1
// code example for Window Binding
let printThis = function () {
    console.log(this);
};
printThis(); // in a Browser it prints the 'Window' object

// Principle 2
// code example for Implicit Binding
;
let implicitContext = {
    message: "I am calling a 'method || function' with the 'this' keyword",
    printThis: function() {
        console.log(this.message);
    }
};
implicitContext.printThis();

// Principle 3
// code example for New Binding
let explicitContext = {
    message: "Calling 'this'explicity"
}
printThis.call(explicitContext)

// Principle 4
// code example for Explicit Binding
function Person () {
    this.age = 36;
}
const jean = new Person();
console.log(jean.age);
