/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when 'this' is bound to the global/console scope.
* 2. When you call a function using dot notation the object before the the dot/function is what 'this' is referrig to.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/function sayHi(name) {
    console.log(this);
    return name;
}

sayHi('John');

// Principle 1

// code example for Window Binding
const theObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }

}
theObj.sayHello('John');
// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding