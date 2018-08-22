/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding or global binding is when a function is invoked in a global scope.
* 2. New binding is when we use the new key word to create a new instance of a class or of a function, in that case this would be bound to the function or class where new is pointing to.
* 3. Explicit binding is when we use call, apply and bind methods to force the binding.
* 4. Implicit binding is when we use this inside of an object or function to refer to a property of that very object or a variable created on that very function.]
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const logWindow () => {
    console.log(this);
};

// Principle 2

// code example for Implicit Binding
const greet = {
    greeting: 'Hello';
    speak: function (name) {
        console.log(this.greeting + name);
    }
}

// Principle 3

// code example for New Binding

function Greet(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
    }
};

// Principle 4

// code example for Explicit Binding

const jorge = {
    work: "Missa Papae Marcelli",
    describe: function() {
        console.log(this.work);
    }
};
const jacob = {
    work: "Freedom of the Will"
};
jorge.describe.call(jacob);