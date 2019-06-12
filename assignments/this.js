/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function danceParty() {
  console.log(this);
}
// 2 examples
function danceParty(dance) {
  return `i like to ${this.dance}`;
}

console.log(danceParty("salsa"));

// Principle 2

// code example for Implicit Binding ---- automatic with objects and methods

const alliance = {
  name: "Jaina",
  age: 147,
  spell: "polymorph",
  cast: function() {
    return `${this.name} casts a powerful spell ${this.spell}`;
  }
};

console.log(alliance.cast());

// Principle 3

// code example for New Binding

var Car = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var mustang = new Car("red", "manual", "fast");

// Principle 4

// code example for Explicit Binding

const member = {
  name: "jackson"
};

function greeting(cake, soda, wine) {
  return "welcome to the party action ${this.name} would you like: ${cake}, ${soda},${wine}";
}

console.log(greeting.call(member, "chocolate", "coke", "twobuck"));
