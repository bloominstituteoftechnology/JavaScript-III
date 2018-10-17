/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myFunction = function () {
    console.log(this);
};
myFunction();

// Principle 2

// code example for Implicit Binding
const dad = {
    name: 'Tuvok',
    age: 104,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
dad.greet();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
function greet() {
    console.log(`Hello, my name is ${this.name}`)
}
const dad = {
    name: 'Tuvok',
    age: 104
}
greet.call(dad);