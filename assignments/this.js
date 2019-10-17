/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. the function is called by new
 * 2. the function is called by call(), apply(), or bind()
 * 3. the function is called as a method
 * 4. the function is called in the global scope
 *
 * write out a code example of each explanation above
 */

// Principle 1
function Chara(stat) {
  this.stat = stat;
  this.power = function() {
    console.log("You can't beat me!");
  };
}

const chara = new Chara(200);

// code example for Window Binding

// Principle 2
function hello(hi) {
  Chara.call(this);
}
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function Foo() {
  // 2- add properties and methods
  this.name = "Osama";
  this.say = function() {
    return "I am " + this.name;
  };
}

var name = "Ahmed";
var result = new Foo();
console.log(result.name);

// Principle 4

// code example for Explicit Binding
function greet() {
  console.log(this.name);
}

var person = {
  name: "Alex"
};

greet.call(person);
