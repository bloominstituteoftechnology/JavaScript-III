/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.intro = function() {
    return `My name is ${this.firstName} ${this.lastName}`;
  };
}
// Principle 3

// code example for New Binding
let sunil = new User('Sunil', 'Karki');
console.log(sunil.intro());

// Principle 4
// code example for Explicit Binding
let favColors = ['Red', 'Blue', 'Pink'];

function favColor(color1, color2, color3) {
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
  console.log(
    `My favorite colors are : ${this.color1}, ${this.color2}, ${this.color3}`
  );
}
favColor.apply(sunil, favColors);
