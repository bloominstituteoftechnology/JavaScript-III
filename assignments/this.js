/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if (this) is called in the global scope it will be binded to the window.
* 2. automatic binding which depends on the scope (this) is called.
* 3. new binding binds (this) to the new object it is called on.
* 4. explicit binding allows you to control what the (this) keyword will bind to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const greeting = () => {
  console.log(this);
}
// Principle 2

// code example for Implicit Binding

const Obj = {
  name: 'paul',
  type: 'cat',
  speak: function() {
    return `My name is ${this.name}`;
  }
}
console.log(Obj.speak())

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeter = greeter;
  this.greeting = 'Hello';
  this.speak = function () {
    console.log(`${this.greeting}, ${this.greeter}`)
  }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

console.log(jerry);

jerry.speak();
newman.speak();
// Principle 4

// code example for Explicit Binding

const person = {
  name: 'Bob'
}

const skills = ['HTML', 'CSS', 'JS'];

function introduce(skills1, skills2, skills3) {
  return `Hello! My name is ${this.name}, and I like to program in ${skills1}, ${skills2}, ${skills3}`;
}


console.log.apply(introduce.call(person, skills));


console.log(introduce.apply(person, skills));


const useLater = introduce.bind(person,...skills);

console.log(useLater());