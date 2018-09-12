/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit bindng is when 'this' references the calling function.
* 2. Window bindnig is the default state where 'this' refers to the window object if called in the global scope.
* 3. New binding is when 'this' references an object being created using a constructor function.
* 4. Explicit binding is when a function's this refers to an object explicitly using .call()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// this is referencing the windowl
this
// Principle 2

// code example for Implicit Binding
// whatever is left of the function being called is the this context
const obj = {
  x: 3,
  implicit: function (){
    return this.x;
  }
}

console.log(obj.implicit());

// Principle 3

// code example for New Binding
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.woof = function() {
    console.log(`woof! (my name is ${this.name} and I\'m a ${this.breed})`);
  }
}

let ralph = new Dog('Ralph', 'beagle');
ralph.woof();

// Principle 4

// code example for Explicit Binding
let sayName = function() {
  return this.name;
}
let person = {
  name: 'sam'
};
console.log(sayName.call(person));