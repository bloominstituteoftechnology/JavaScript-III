/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - When in the global scope, this refers to the window object
* 2. Implicit - When called preceding a dot, just look to the left of the dot to see what 'this' refers to.
* 3. Explicit - When you explicitly assign 'this' by using call, apply or bind.
* 4. New - When using a constructer function invoked with the new keyword, this is bound to the new object being constructed.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = "window example";

function sayName(name) {
  console.log(this.name);
}

sayName("Howard");

// Principle 2

// code example for Implicit Binding
const myObject = {
   'greeting': 'What up',
   'sayHello': function(name) {
    console.log(`${this.greeting} my name is: ${name}`);
  }
}
myObject.sayHello("Erica");
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    // new === this 
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  const josh = new CordialPerson('CS 12');
  
  jerry.speak();
  newman.speak();
  josh.speak();


// Principle 4

// code example for Explicit Binding
const myObject = {
  'name': 'Jim',
  'age': 30
}

const skills = ['HTML','CSS','JS'];
function sayName(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
}

sayName.call(myObject, skills[0], skills[1], skills[2]);


