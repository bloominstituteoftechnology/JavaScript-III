/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*creating pull request
* 1. Implicit: when functions are called everything left of the . is associated with "this"
* 2. Explicit: call apply bind, code that directly calls the relationship with an object
* 3. New Binding: creating new objects with object maker after the function has been invoked and then returned by the constructor function
* 4. Window Binding: is the global scope reference for objects/functions 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this.name);
}

sayName("Josh");
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
sayName.call(myObject, skills);
sayName.call(myObject, ...skills);

sayName.apply(myObject, skills);

let newFunction = sayName.bind(myObject, skills[0], skills[1], skills[2]);
newFunction();
