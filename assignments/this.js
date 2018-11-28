/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.  Window binding- Without context, "this" refers to the entire window object.

 * 2.  Implicit binding- Outside of window binding, if the function is called by dot notation, you look to the left of the dot for the "this"

* 3. New binding- If a constructor function is used with 'new' then 'this' refers to the object created by that function.
 * 4. Explicit binding- If a .call or .apply method is used, the first argument used is what "this" points to.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
const anything = {
  age: 33
};

window.age = 23;

function myAge() {
  console.log(`I am ${this.age}.`);
}

myAge(); //window = this

// Principle 2
// code example for Implicit Binding

const hobbit = {
  name: "Bilbo",
  age: "eleventyseven",
  greet() {
    console.log(`Greetings! My name is ${this.name}`);
  }
};

hobbit.greet(); //'this' binding is to the left of 'greet'

// Principle 3
// code example for New Binding
function Weapon(owner, type) {
  (this.owner = owner), (this.type = type);
}

const axe = new Weapon("Gimli", "Axe"); //whenever 'new' is invoked, the new object is 'this'

console.log(`${axe.owner} says...\'and my ${axe.type}!\'`);

// Principle 4
// code example for Explicit Binding
function greet() {
  console.log(`Greetings! My name is ${this.name}`);
}
const nephew = {
  name: "Frodo",
  age: 33
};

greet.call(nephew); //'this' is 'nephew' as it was explicitly called.
