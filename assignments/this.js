/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is used when you don't use .apply, .call, or .bind. There is nothing left of the dot during invocation, so the program assumes it refers to the window by default.
*
* 2. Implicit binding for 'this' is the most common rule. It finds what 'this' refers to by looking at the left of the dot during invocation.
*
* 3. Explicit binding is when you use .call to invoke the function. .call allows you set 'this' to anything you say in the parenthesis.
*
* 4. Using new for 'this' crates an object and calls it as 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

//window.name = 'Amanda';

function talk() {
  console.log(`Hi, my name is ${this.name}`)
}

const person = {
  'name': 'Chandler'
}

talk();





// Principle 2
// code example for Implicit Binding

const implicitPerson = {
  'name': 'Ross',
  sayHi() {
    console.log(`Hello, my name is ${this.name}`)
  }
}
implicitPerson.sayHi();









// Principle 3
// code example for New Binding

function newPerson(name) {
  this.name = name;
  console.log(`hi, I am ${this.name}`)
}

const character = new newPerson('Rachel');
//console.log(`hi, I am ${this.name}`)





// Principle 4
// code example for Explicit Binding

function hello() {
  console.log(`Hi I am ${this.name}`)
}

const explicitPerson = {
  'name': 'Monica'
}
hello.call(explicitPerson)