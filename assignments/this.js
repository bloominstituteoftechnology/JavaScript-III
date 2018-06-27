/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers to how "this" will always try to refer to the window
* 2. Implicit binding refers to how when a function is called with a preceding dot,
     "this" will refer to the object before the dot.
* 3. New binding refers to how "this" points to the object created using a constructor function.
* 4. Explicit binding happens when we use a function like .call(), .apply() or .bind()
     We explicitly state which "this" we are referring to when we use those functions.
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
