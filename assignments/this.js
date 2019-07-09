/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When we use the 'this' keyword in the global scope we are binding to the window.

* 2. Implicit Binding: When we use dot syntax, whatever is to the left is "this". Refers to the scope we're working inside of.

* 3. Explicit Binding: When we use functions to bind, apply, or call properties and attach to a function or object.

* 4. New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Kevin");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Kevin');

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
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman);
newman.speak.apply(jerry);