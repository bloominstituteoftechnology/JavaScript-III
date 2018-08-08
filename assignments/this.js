/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 
* 1. Window binding is the default, this happens when you use the "this" keyword globally.

* 2. Implicit binding is when you use the "this" keyword within an object or function.
 
* 3. New binding is used with a constructor function. The "this" keyword creates a new object when you use the "new" keyword.
 
* 4. Explicit binding is when you use the "this" keyword outside of an object or function.

* write out a code example of each explanation above
*/

// Principle 1

this.hello = 'Yo';

function sayHello(hello) {
  console.log(this.hello);
}

sayHello('hello');

// code example for Window Binding

// Principle 2

const myObj = {
  name: 'Kevin Sooter',
  years: 2,
  code: function(lang1, lang2) {
    console.log(
      `${this.name} can code in ${lang1} and ${lang2}. Kevin has ${
        this.years
      } years of experience!`
    );
  }
};

// This keyword is BOUND upon invocation.
myObj.code('HTML', 'LESS');

// code example for Implicit Binding

// Principle 3

function SayHello(greeter) {
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function() {
    console.log(`${this.greeting} ${this.greeter}`);
  };
}

const kevin = new SayHello('Jason');
const jason = new SayHello('Kevin');

kevin.speak();
jason.speak();

// code example for New Binding

// Principle 4

const developer = {
  name: 'Kevin',
  age: 23
};

const skills = ['HTML', 'LESS', 'JS'];

function introduce(skill1, skill2, skill3) {
  console.log(
    `My name is ${this.name}, I am ${
      this.age
    }, and I like to program in: ${skill1}, ${skill2}, ${skill3}.`
  );
}

let binding = introduce.bind(developer, ...skills);
binding();

// code example for Explicit Binding
