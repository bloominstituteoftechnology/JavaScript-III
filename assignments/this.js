/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global Object Binding - if you call `this` in the global scope, it'll reach to the window object to figure out what it is.
* 2. Implicit Binding - when you call a function that involves `this` with a dot (e.g. object.function();), `this` knows that it referrs to the object before the dot.
When the function takes an object as an argument, `this` knows that it belongs to the object.
* 3. New Binding - when using a constructor function, when you call it with `new` the `this` understands that it belongs to the newly created object that you're returning from the constructor.
* 4. Explicit Binding - when you call a function with .call() .apply() or .bind() you specify the object that `this` refers to in the first parameter.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function principleOne(name) {
  console.log(`Hello ${this}!`)
}
// principleOne('Kyran'); //logs 'Hello [object global]!'

// Principle 2

// code example for Implicit Binding
const pricipleTwoCall = {
  question: 'How are you',
  ask: function (name) {
    console.log(`${this.question}, ${name}?`);
  }
};
// pricipleTwoCall.ask('Kyran'); //logs 'How are you, Kyran?'

// Principle 3

// code example for New Binding

function PrincipleThree(name) {
  this.ask = `Are you doing okay`;
  this.name = name;
  this.check = function(){
    console.log(`${this.ask}, ${this.name}?`);
  }
}

const me = new PrincipleThree('Kyran');
// me.check();

// Principle 4

// code example for Explicit Binding

const myInfo = {
  'name': 'Kyran',
  'pronoun': 'her'
}
const cats = ['Tortie', 'Stuart', 'Homer'];

function sayHi(cats1, cats2, cats3) {
  console.log(`Say hello to ${this.name} and ${this.pronoun} trash gremlins ${cats1}, ${cats2}, and ${cats3}!`)
}

// sayHi.call(myInfo, ...cats);
