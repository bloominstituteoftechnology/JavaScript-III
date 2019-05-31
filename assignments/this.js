/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This key is going to point to the most global object
* 2. this refers to the object when using dot notation
* 3. this refers to a specific instance of the object when using new
* 4. To pass the value of this from one context to another
*
* write out a code example of each explanation above
*/

// Principle 1 - When in the global scope, the value of “this” will be the window/console Object
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

  // Principle 2 - Whenever a function is called by a preceding dot, the object before that dot is this
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayName('Ryan');

  // Principle 3 - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
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
  
  newman.speak();
  newman.speak();

// Principle 4 - Whenever JavaScript’s call or apply method is used, this is explicitly defined.
// code example for Explicit Binding
jerry.speak.call(newman);
newman.speak.apply(jerry);