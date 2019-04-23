/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. When used in the global scope, this is bound to the global
 * context. In browsers, that is the Window object.
 * 2. Implicit aka the object to the left (of the dot). When used
 * within an object, (like in a method), `this` is the object to the
 * left of the dot.
 * 3. When used within a constructor and instantiated with the `new`
 * binding, `this` refers to the instance created by the constructor.
 * 4. When using methods like apply, or call, you can explicitly change
 * what `this` is bound to.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  name: "Matt",
  speak: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(myObj.speak()); // myObj is to the left of speak (where `this is used`)
// thus, myObj is `this`

// Principle 3

// code example for New Binding

function Person(attrs) {
  this.name = attrs.name;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}`;
};

// the `new` keyword creates a new object using the Person constructor.
// Within the Person constructor `this` is the new object saved into the
// variable `matt`
let matt = new Person({ name: "Matt" });

// Principle 4

// code example for Explicit Binding
let leslie = new Person({ name: "Leslie" });

// Even though I'm calling speak on the `leslie` object, I am explicitly
// changing the context of `this` to the `matt` object.
leslie.speak.apply(matt);
