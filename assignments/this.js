/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window: The binding that occurs when there isn't a dot to the left of the
 * invocation, if we aren't using .bind(), .call(), or .apply(), and if we aren't
 * using the New binding.
 * 2. Implicit: The binding that occurs when there is a dot to the left of an
 * invoked function.
 * 3. New: The binding that occurs when we use the New keyword to create a new
 * object from a Constructor Function. The 'this' keyword binds to the new object.
 * 4. Explicit: The binding that occurs when using .bind(), .call(), or .apply().
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function windowBinding() {
  console.log(this);
}

console.log(windowBinding());

// Principle 2

// code example for Implicit Binding

const derek = {
  name: 'Derek',
  age: 32,
  location: 'Jacksonville, FL',
  greeting: function() {
    return `Hello, my name is ${this.name}.`;
  },
};

console.log(derek.greeting());

// Principle 3

// code example for New Binding

const Person = function(attributes) {
  this.name = attributes.name;
  this.greeting = function() {
    return `Hello, my name is ${this.name}.`;
  };
};

const newDerek = new Person({ name: 'Derek' });
const newCody = new Person({ name: 'Cody' });

console.log(newDerek.greeting());
console.log(newCody.greeting());

// Principle 4

// code example for Explicit Binding

const languages = ['HTML', 'CSS', 'JavaScript'];

function skills(skill1, skill2, skill3) {
  return `I know ${skill1}, ${skill2}, and ${skill3}!`;
}

console.log(skills.apply(this, languages));
