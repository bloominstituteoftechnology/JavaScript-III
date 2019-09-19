/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. this is applied to Window object by default is if has no other context.
 * 2. this is applied to whatever object is left of the '.' when we invoke the function
 * 3. when a function is invoked w/ the 'new' keyword, this points to the new function
 * 4. You can use .call / .apply / .bind to tell this the function to work from
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function Person(attribute) {
  //   this.name = attribute.name;
  console.log(this.says);
}
Person();

const says = "Hello";

// Principle 2
// code example for Implicit Binding
const user1 = {
  name: "Greg",
  greet() {
    return `Hi, my name is ${this.name}.`;
  }
};
//this.name will use const user as its context
console.log(user1.greet());

// Principle 3
// code example for New Binding
const user2 = new Person({
  location: "Austin, TX",
  tell() {
    return `I live in ${this.location}.`;
  }
});
console.log(user2);
// Principle 4

// code example for Explicit Binding
function GameObject(attribute) {
  this.createdAt = attribute.createdAt;
  this.name = attribute.name;
  this.dimensions = attribute.dimensions;
}

//Using .call this function now inherits from the GameObject constructor
function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}

console.log(CharacterStats());
