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
console.log(this);
// Principle 2
const ThisObject = {
  item: "apple",
  speak: function() {
    return `I am a ${this.item} `;
  }
};

console.log(ThisObject.speak());

// Principle 3

function NewBinding(name) {
  this.name = name;
}

const aCoolObject = new NewBinding("Very Cool Object");

console.log(aCoolObject);

// Principle 4

// code example for Explicit Binding
