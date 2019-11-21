/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1
//Principle 1: Window/Global Object Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan");

// code example for Window Binding

// Principle 2
//Principle 2: Implicit Binding
const myObj = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello("Ryan");

// code example for Implicit Binding

// Principle 3
//Principle 3: New binding
function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

newman.speak();
newman.speak();

// code example for New Binding

// Principle 4
//Principle 4: Explicit binding
jerry.speak.call(newman);
newman.speak.apply(jerry);

// code example for Explicit Binding
