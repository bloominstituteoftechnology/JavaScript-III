/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global (window) - the default binding whenever "this" is used without a specific call such as dot notation or call(), apply(), and bind(). When in a browser, the global context is the window.
* 2. Implicit binding - when "this" is called with a dot preceding it, it will refer to the object before the dot. One of the most commonly used applications.
* 3. New binding - used with constructor functions to refer to the specific object in question. In a case of new binding, "this" points to the new object rather than the function from which it is constructed.
* 4. Explicit binding - "this" is explicitly bound whenever call() or apply() is used. It is bound to whatever is referenced by these functions.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(greet) {
  console.log(this);
  return greet;
}
sayName("Hello there!");

// Principle 2

// code example for Implicit Binding

const newObj =   {
  name: "Evan",
  greeting: function(age) {
    console.log("`${this.name} is {age} years old.`");
    console.log(this);
  }
};
newObj.greeting(28);

// Principle 3

// code example for New Binding

function GreetPerson(greeter) {
  this.greeting = "Hi!";
  this.greeter = greeter;
  this.sayHi = function() {
    console.log(`{this.greeting} Your name is ${this.greeter}`);
    console.log(this);
  };
}

const steve = GreetPerson("Steve");
const jim = GreetPerson("Jim");

steve.sayHi();
jim.sayHi();

// Principle 4

// code example for Explicit Binding

function Child(childAttributes) {
  // This binds the "this" keyword up to Person
  Person.call(this, childAttributes)
  this.toy = childAttributes.toy;
}
