/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window- When in the global scope the value of "this" will be the window/console Object
* 2. Implicit- Whenever a function is called by a preceding dot, the object before that dot is "this".
* 3. Explicit- whenever Javascripts call or apply method is used, "this" is explicitly defined.
* 4. New- when a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");
  
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
  
  newman.speak();
  newman.speak();
// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);

