/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. implicit binding-when a function is called, the object left of the dot is 'this'
 * 2. new binding-used with constructor functions
 * 3. explicit binding-uses .call and .apply
 * 4. global scope- will refer to the window object
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
// function greetMe(name) {
//   console.log("Hello " + name);
//   console.log(this);
// }

const greetMe = name => {
  console.log("Hello " + name);
  console.log(this);
};

greetMe("John");

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};

myObj.sayHello("Ryan");

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

// const CordialPerson = greeter => {
//   this.greeting = "Hello ";
//   this.greeter = greeter;
//   this.speak = function() {
//     console.log(this.greeting + this.greeter);
//     console.log(this);
//   };
// };

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// jerry.speak();
// newman.speak();

// Principle 4

// code example for Explicit Binding
//using New Binding example

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

jerry.speak.call(newman);
newman.speak.apply(jerry);

newman.speak();
jerry.speak();
