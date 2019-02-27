/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is what happens when this isn't really bound to anything
* 2. Implicit binding is when this is bound to something before a dot, like when a method is being called.
* 3. New binding is when this is bound using the new keyword and a constructor function.
* 4. Explicit binding is when this is bound using a function like apply, call, or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this;
// Principle 2

// code example for Implicit Binding


const me = {
  name: "Dan",
  that: function () {
    console.log(this.name);
  }
}

me.that();

// Principle 3

// code example for New Binding
function Person(attrs) {
  this.name = attrs.name;
}

const myself = new Person({name: "Dan"})

console.log(myself.name)

// Principle 4

// code example for Explicit Binding
// Continued from Principle 2
const you = {
  name: "Jorp",
}

me.that.call(you)