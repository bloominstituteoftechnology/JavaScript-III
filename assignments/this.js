/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Referencing implicitly bound items from an object within that object's methods.
* 2. Referencing explicitly bound items which are in an object using a function outside of that object.
* 3. Use with the "new" keyword in order to make new objects.
* 4. When there is no other binding assigned, this will reference the window object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Implicit Binding

const dog1 = {
  name: 'Onyx',
  breed: 'Pitsky',
  toy: 'ball',
  summarize: function() {
    console.log(
      `${this.name} is a ${this.breed} whose favorite toy is a ${this.toy}.`
    );
  }
};

dog1.summarize();

// Principle 2
// code example for Explicit Binding

const dog2 = {
  name: 'Diamond',
  breed: 'Chihuahua'
};

const tricks = ['Rollover', 'Spin Around', 'Sit', 'Stay'];

function nameTricks(trick1, trick2, trick3, trick4) {
  'use strict';
  console.log(`This is ${this.name}, and she knows how to do these tricks: 
${trick1}, ${trick2}, ${trick3}, ${trick4}.`);
}

nameTricks.call(dog2, ...tricks);

// Principle 3

// code example for New Binding
function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
  this.speak = function() {
    console.log(`${this.name} says 'Meow'. That means hello!`);
  };
}

const sarabi = new Cat('Sarabi', 'Norwegian Forest Cat');

console.log(sarabi);
sarabi.speak();

// Principle 4

// code example for Window Binding
function references() {
  console.log(this); //this inside of the console.log is referencing the window.
}
