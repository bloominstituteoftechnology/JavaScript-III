/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global - When the value of this is the window / global scope
* 2. Implicit - this is whatever is left of the dot
* 3. New Binding - When this refers to the constructor function instance
* 4. Explicit Binding - When using call or apply you define what this is
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function fullName(name) {
  console.log(this);
  return name;
}

fullName('Andrey');

// Principle 2

// code example for Implicit Binding
const obj = {
  name: 'Andrey',
  sayHello: function (name) {
    console.log(`Hello ${this.name}`);
  }
};

obj.sayHello();

// Principle 3

// code example for New Binding
function Person(pers) {
  this.greeting = 'Hello',
    this.pers = pers;
  this.speak = function () {
    console.log(this.greeting + ' ' + this.pers);
  };
}

const andrew = new Person('Andew');
andrew.speak();

// Principle 4

// code example for Explicit Binding
function Person2(persAtt) {
  Person.call(this, persAtt);
  this.isChild = persAtt.isChild;
}

Person2.prototype = Object.create(Person.prototype);

const snow = new Person2({
  greeting: 'Hello There'
});

Person2.prototype.checkIfChild = function () {
  if (this.isChild) {
    console.log(`Note a child`);
  }
}