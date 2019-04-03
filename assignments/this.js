/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this is grabbing all of the things because it isn't           pointing to anything. this will always try to default to window.
* 2. Implicit Binding - this is what's left of the dot and is for objects.
* 3. New Binding - constructor functions are used  to create new objects 
* 4. Explicit Binding - this using methods.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  console.log(sayName("Pearl"));

// Principle 2

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

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
  jerry.speak();

// Principle 4

  jerry.speak.call(newman);