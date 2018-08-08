/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If no other binding is attached, the window is what is used for "this". The scope is global.
* 2. Implicit Binding - When a function is called by a dot infront of it, the object before that dot is "this". The scope is lexical.
* 3. New Binding - When a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - When ".call" or ".apply" method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.hello = "Yo";

function sayHello(hello) {
   console.log(this.hello)
 }

 sayHello("hello");

// Principle 2

// code example for Implicit Binding

const myObj = {
    'name': 'Samwise',
    'age': 100,
    'cook': function(food1, food2) {
      console.log( `${this.name} can cook ${food1} and ${food2} and it is delicious. The cook has ${this.age} years of experience!`);
    }
  }
  
  myObj.cook("taters", "fish");

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log( `${this.greeting} ${this.greeter}`);
  }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');
const josh = new CordialPerson('CS 13');

jerry.speak();
newman.speak();
josh.speak();



// Principle 4

// code example for Explicit Binding
const developer = {
  'name': 'Jim',
  'age': 40
}

const skills = ['HTML', 'LESS', 'JS'];

function introduce(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I like to program in: ${skill1} , ${skill2} , ${skill3}`);
}

introduce.call(developer, skills);
introduce.apply(developer, skills);