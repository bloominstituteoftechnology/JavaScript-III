/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding gets its context from the window object
* 2. Implicit binding gets its context from whatever is before the '.'
* 3. New binding gets its context from a new object being built by an object construtor.
* 4. Explicit binding gives a function explicit context using .call(), .apply(), or .bind()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
global.name = 'Max';
function greet() {
  console.log(`Hello, ${this.name}.`);
};
greet();

// Principle 2

// code example for Implicit Binding
const obj = {
  color: 'red',
  whatcolor: function () {console.log(this.color)}
};
obj.whatcolor();

// Principle 3

// code example for New Binding
function ObjectMaker(name) {
  this.name = name;
}
const obj2 = new ObjectMaker('Bob');
console.log(obj2.name);

// Principle 4

// code example for Explicit Binding
function getName() {return (`This object's name is ${this.name}.`)};
console.log(getName.call(obj2));