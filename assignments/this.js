/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding is when code is executed using "this" keyword as part of simple function call then it refers to global or window object in case of browser. It is also default binding.
 * 2. Implicit Binding is when a method is called as a property of object, then "this" refers to the parent object of that method.
 * 3. New Binding is when a function is called with "new" keyword which is known as constrctor function, then "this" refers to that newly created instance.
 * 4. Explicit Binding is when a function is called using call, apply, and bind method then "this" refers to the value passed as first argument of call, apply or bind method.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function windowBinding() {
  console.log(this);
}
windowBinding();

// Principle 2
// code example for Implicit Binding
const person = {
  firstName: "Bhumi",
  lastName: "Patel",
  fullName: function() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  }
};
person.fullName();

// Principle 3
// code example for New Binding
function DCSuperhero(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}
const arrow = new DCSuperhero("Oliver", "Queen");
const flash = new DCSuperhero("Barry", "Allen");
const supergirl = new DCSuperhero("Kara", "Zor-El");
arrow.fullName();

// Principle 4
// code example for Explicit Binding
//kept the same example as principle 3 - New Binding

arrow.fullName.call(flash);
flash.fullName.apply(supergirl);
