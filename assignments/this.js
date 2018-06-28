/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - at invocation this has nothing to assign to so it defaults to the window object.
* 2. Implicit binding - at invocation look to what is to the left of the dot.
* 3. Explicit binding - at invocation you tell this what it's going to be using methods call, apply, or bind.
* 4. New binding - the this keyword is bound to a new object being made from the use of new with a constructor.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this.name);
}

// Principle 2

const myObject = {
    'greeting': 'What up',
    'sayHello': function(name) {
     console.log(`${this.greeting} my name is: ${name}`);
    }
}

// Principle 3

function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');

// Principle 4
const myObject = {
    'name': 'Jim',
    'age': 30
  }
  
  const skills = ['HTML','CSS','JS'];
  
  function sayName(skill1, skill2, skill3) {
    console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
  }
  sayName.apply(myObject, skills);