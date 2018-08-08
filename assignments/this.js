/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default, this happens when you use the "this" keyword in the global scope.

* 2. Implicit binding is the most common use of the "this" keyword, implicit binding is when you use the "this" keyword within an object or function.

* 3. New binding is when your using a constructor function with the "this" keyword and you create a new object when you use the "new" keyword.

* 4. Explicit binding is when you use the "this" keyword outside of an object or function.  To avoid binding to the window object you must pass arguments and parameters to your functions and methods so the "this" keyword knows what you're referring to.

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
  'name': 'George',
  'age': 50,
  'skill': function(lang1, lang2) {
    console.log( `${this.name} knows how to program in ${lang1} and ${lang2}`);
  }
}

myObj.skill("Ruby", "JavaScript");

// Principle 3

// code example for New Binding

// constructor function
function CordialPerson(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log( `${this.greeting} ${this.greeter}`);
  }
}

const george = new CordialPerson('Fred');

george.speak();

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

// introduce.call(developer, skills);
introduce.apply(developer, skills);
// let holdOn = introduce.bind(developer, ...skills);
// holdOn();
// introduce(skills);