/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "this" would be console or windown object
* 2. Implicit Binding - "this" context will be to the left of the invocation
* 3. New Binding - build new objects, constructor functions for the context of this
* 4. Explecit Binding - we control this, call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
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
  myObj.sayHello('Megan');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      return(this.greeting + this.greeter);
      return(this);
    };
  }
  
  const megan = new CordialPerson('Megan');
  const elizabeth = new CordialPerson('Elizabeth');
  
  megan.speak();
  elizabeth.speak();

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Megan'
  }
  
  const skills = ['HTML', 'CSS', 'JS'];
  
  function introduce(skills1, skills2, skills3) {
    console.log(`Hello! My name is ${this.name}, and I am learning ${skills1}, ${skills2}, ${skills3}`);
  }