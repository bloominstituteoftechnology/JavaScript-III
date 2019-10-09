/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Globa/Window binding object: When in the global scope, the value of “this” will be the window/console Object
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayCity(city) {
    return city;
}
sayCity("Miami-Beach");



// Principle 2

// code example for Implicit Binding
const myGreeting = {
    greeting: 'Hello',
    sayHi: function(name) {
        console.log(`${this.greeting} my name is ${name}`);

    }
};
myGreeting.sayHi("Jesus");

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding