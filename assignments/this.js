/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - binding to the outermost object
 * 2. Implicit Binding - An automatic binding to attributes outside the current function
 * 3. New Binding -
 * 4. Explict Binding - Stating object you wish for the current object to bing to
 *
 * write out a code example of each explanation above
 */

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const test = {
  theTest: "testing123",
  testing() {
    console.log(this.theTest);
  }
};
// code example for Implicit Binding

// Principle 3
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

const coolDude = new Person("Cool", "Dude");
// code example for New Binding

// Principle 4
const someObject = {
  name: "test"
};
someObject.call(this, args);
// code example for Explicit Binding
