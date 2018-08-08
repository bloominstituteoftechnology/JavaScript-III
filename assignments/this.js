/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - when in the global scope, this refers to the window object
* 2. implicit binding - this refers to the object that the function is called upon by a preceding dot
* 3. new binding - this refers to the object that is created by a constructor function
* 4. explicit binding - binds this to a specific object that is called out or applied 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this.name);
}

sayName("hello");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayName: function(name) {
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
      console.log(this.greeting + ', ' + this.greeter);
      console.log(this);
    };
  }
  
  const newman = new CordialPerson('Jerry');
  
  newman.speak();


// Principle 4

// code example for Explicit Binding
const jerry = new CordialPerson('Newman');

newman.speak.call(jerry); 
