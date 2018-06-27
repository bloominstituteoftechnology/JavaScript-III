/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - this means that when you use "this" in the global scope, it will be in
reference to the browser window or console itself.

* 2. implicit - this means that the function before its preceding dot becomes "this"

* 3. explicit - "this" is explicitly defined with either the call or apply methods.

* 4. new - new is used specifically when invoki/ng constructor functions.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");
  

// Principle 2

const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);

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
    console.log(`My name is: ${this.name} 
    and I like to program using these skills:
     ${skill1}, ${skill2}, ${skill3} `);
}
sayName.call(myObject, skills[0], skills[1], skills[2]);