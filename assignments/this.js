/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -When in the global scope, the value of “this” will be the window/console Object
* 2. Implicit Binding -Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New Binding - Object Creator
* 4. Explicit Binding -Whenever JavaScript’s call or apply method is used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function seeMonkey(name) {
  console.log(this);
  return name;
}
seeMonkey("Curious George");



// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hello there',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.seeMonkey('Ryan');


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

const karrie = new CordialPerson('Karrie');
const larry = new CordialPerson('Larry');

newman.speak();
newman.speak();


// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman); newman.speak.apply(jerry);
