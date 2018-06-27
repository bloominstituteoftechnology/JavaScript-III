/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, global, the whole content window
* 2. Implicit Binding, in a function, it refers to the object connected to it.
* 3. New Binding, used in constructor function to refer to the object being instantiated
* 4. Explicit binding, when using a Javascript call or apply method,
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObject = {

  sayHello: function(name) {
    console.log(`My name is ${name}`);
    console.log(this);
  }
};

myObject.sayHello('Joseph');
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting+this.greeter);
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
