/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - Value of 'this' will be looking into global/console Object.

* 2. Implicit Binding - 'this' is limited to the function it is definted in.

* 3. New Binding - constructor function that creates a new object 

* 4. Explicit Binding - when JS's call or apply method is invoked.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

    function sayName(name) {
        console.log(this);
        return name;
    }
    sayName(/*whatever is in console*/);
    

// Principle 2

// code example for Implicit Binding

    const myObj = {
        greeting: 'Hello',
        sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
        }
    };
    myObj.sayName('Ryan');    

// Principle 3

// code example for New Binding

    function CordialPerson(greeter) {
        this.greeting = 'Hello ';
        this.greeter = greeter;
        this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
        };
    }
    
    const jerry = new CordialPerson('Newman');
    const newman = new CordialPerson('Jerry');

// Principle 4

// code example for Explicit Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak.call('Newman');
newman.speak.call('Jerry');