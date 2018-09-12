/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Global binding, 'this' refers to scope of the window.
* 2.  Implicit binding, Whenever a function is called by a preceding dot, the object before that dot is this.
* 3.  New Binding, Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4.  Explicit binding 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayGreeting(phrase) {
    console.log(this);
    return phrase;
}

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');
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
function Person(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
      return `Hello, my name is ${this.name}`;
    };
  }