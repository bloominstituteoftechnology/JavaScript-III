/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - The scope who every other scope is a closure of
* 2. Implicit Bidning - When no new object is created, you are just using the method of the singular object
* 3. Explicit bind, we use apply, bind, and call to force this to be a defined object
* 4. New bind, use contructor to create this object with certain properties and methods
*
* write out a code example of each explanation above
*/

// Principle 1


// will print window in one second
setTimeout(() => console.log(this), 1000);

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const chatBot = {
    message: "Hello",
    sayMessage: function() {
        console.log(this.message);
        console.log(this);
    }
}

chatBot.sayMessage();

// Principle 3

// code example for New Binding

class Example {
    constructor(message, name) {
        this.message = message;
        this.name = name;
    }

    speak() {
        console.log(`${this.message}, I am ${this.name}`);
    }
}

const alex = new Example("Hello world", "Alex");
alex.speak();



// Principle 4

// code example for Explicit Binding

setTimeout(alex.speak, 5000); // will print undefined because this belongs to scope timeout....


setTimeout(alex.speak.bind(alex), 5000); //but we can do this





