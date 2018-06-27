/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - invoking a function to retrieve a 
property within an object, which lies in the function.

* 2. Explicit Binding - invoking a function but with 
multiple parameters.

* 3. New Binding - used for making constructor functions
to help copy a layout for the objects.

* 4. Window Binding - default object when 
none of the above apply.
*
* write out a code example of each explanation above
*/

// Principle 1

this.name = "CS 12 window example";

function sayName(name) {
  console.log(this.name);
}

sayName("Josh");

// Principle 2

const myObject = {
    'greeting': 'What up',
    'sayHello': function(name) {
     console.log(`${this.greeting} my name is: ${name}`);
   }
 }

 myObject.sayHello("Erica");

// Principle 3

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