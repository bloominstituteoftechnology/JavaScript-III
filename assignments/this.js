/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding occurs when in global scope and 'this' points to the window/console Object
* 2. aka "automatic binding" Whenever a function is called by a preceding dot, the object before that dot is 'this'.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Occurs whenever a .call or .apply method is used and defines 'this' explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Josh");

// Principle 2

// code example for Implicit Binding
const myGreeting = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myGreeting.sayHello('Josh');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const josh = new CordialPerson('Josh');
  const christie = new CordialPerson('Christie');
  
  josh.speak();
  christie.speak();

// Principle 4

// code example for Explicit Binding
function Parent(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
    this.rock = attributes.rock;
  }

function Child(childAttributes) {
    Parent.call(this, childAttributes);
  }