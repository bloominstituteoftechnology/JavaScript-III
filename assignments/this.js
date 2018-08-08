/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: while "this" is in global scope it will refer to the window/console object
* 2. Whe a function has a dot before it, this refers to the object before the dot.
* 3. When a constructor function is used, this refers to the specific instance of the object that is created and returned by constructor function
* 4. 
*Whenever JavaScripts call or apply method is used, this is explicity defined
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("Lomeli");

// Principle 2

// code example for Implicit Binding
const newObj = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
newObj.sayName("Ray");

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

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

newman.speak();
// Principle 4

// code example for Explicit Binding
newman.speak.apply(jerry);
