/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3.Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("Slim Shady");
// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Wassam',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Will');
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Sup';
  this.greeter = walmartHandshaker;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Williams');
const newman = new CordialPerson('Will');

Williams.speak();
williams.speak();
// Principle 4

// code example for Explicit Binding
will.speak.call(Williams); Williams.speak.apply(will);
