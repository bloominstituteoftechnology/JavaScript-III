/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Windown/global - this references the window object when no explicit reference is defined and what it is being called on exsists in the window object
* 2.  Implicit - this references an object that is being called inside of the window object. It is not explicitly defined however it is infered in the context of the call. Check to the left of the dot.
* 3.  New - This refers to the constructor object that is created as a new instance of that object.
* 4.  Explicit - this refers to what it is explicitly bound to through the use of call, apply, or bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//
function hello() {
  console.log(this);
}

// Principle 2

// code example for Implicit Binding

const newObject = {
  name: 'Zach',
  email: 'fakeEmail@example.com',
  printOutInfo() {
    return `${this.name}, ${this.email}`;
  },
};

// Principle 3

// code example for New Binding
//

function NewPerson(firstName, lastName, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteFood = favoriteFood;
}

// Principle 4

// code example for Explicit Binding

function Person(attributes) {
  this.firstName = attributes.firstName;
  this.lastName = attributes.lastName;
  this.favoriteFood = attributes.favoriteFood;
}

function Child(childAttributes) {
  Person.call(this, childAttributes);
}
