/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- If there is no other binding attached, the window is what is used for `this`
* 2. Implicit Binding- Whatever is left of the dot becomes the context for `this` in the function.
* 3. New Binding- Creates a new object
* 4. Explicit Binding- Occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.wazzup = "Wazzzzzup";

function sayHello(wazzup) {
  console.log(this.wazzup)
}

sayHello("wazzup");

// Principle 2

// code example for Implicit Binding
const myObj = {
  'name': 'Wolverine',
  'age': 100,
  'skills': function(skill1, skill2) {
    console.log( `${this.name} can slice foes with his ${skill1}, 
    and even if they manage to hurt him, his powers of ${skill2} allow him to regain the upper hand. 
    These abilities are why he has lived to be over ${this.age} years old`);
  }
}
myObj.skills("adamantium claws", "regeneration");
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`);
    }
}
const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();
// Principle 4

// code example for Explicit Binding
const Hero = {
    'name': 'Thor',
    'age': 'unknown'
  }
  
  const skills = ['lightning wielding', 'flying', 'super strength'];
  
  function Declare() {
    console.log(`My name is ${this.name}, and I will use my ${skills} to protect the citizens of Asgard to the death!`);
  }
  
  Declare.call(Hero, skills);