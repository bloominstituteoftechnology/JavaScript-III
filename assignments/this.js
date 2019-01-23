/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding. If "this" is in the global scope it will always reference the Window object.

* 2. Implicit Binding. "This" references the object preceding a function when using dot notation. ie: object.function (here "object" is referenced by the "this" keyword) 

* 3. Explicit Binding. We control what this references using .call(), .apply(), or .bind() methods.

* 4. New Binding. When you use a constructor function, "this" refers to the object that is created by that constructor.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this)

// Principle 2
// code example for Implicit Binding

const me = {
  name: 'Dylan',
  greet: function() {
    console.log(`Hello my name is ${this.name}`)
  }
}

me.greet()

// Principle 3
// code example for New Binding

function Newperson(word) {
  this.word = word;
  this.greeting = 'Hello!';
  this.speak = function() {
    console.log(`${this.greeting} my favorite word is ${this.word}`)
  }
}

const dylan = new Newperson('apple')

dylan.speak();

// Principle 4
// code example for Explicit Binding

const person = {
  name: 'Dylan'
}

const shoes = ['nikes', 'vans', 'adidas'];

function myShoes (shoe1, shoe2, shoe3) {
  console.log(`Hi my name is ${this.name} and for shoes I have ${shoe1} ${shoe2} and ${shoe3}`);
}

myShoes.call(person, ...shoes)