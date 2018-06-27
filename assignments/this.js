/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when the "this" keyword isn't bound to anything in particular,
    it binds to the Window object.
* 2. Implicit Binding: When the "this" keyword is bound to the object referred to
    on its left in dot notation when called.
* 3. new Binding: When creating new objects using a constructor function and the
    "new" keyword, the "this" keyword is bound to that new object.
* 4. Explicit Binding: Directing the "this" keyword to bind to a particular
    object using the .call(), .apply(), or .bind() methods on a function containing
    "this".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.name);

// Principle 2

// code example for Implicit Binding
const myObject = {
  "fee": 14,
  "fi": "Raquetball",
  "fo": "Spanish",
  "fum": function () {return `Hello! I am ${this.fee} years old, I love ${this.fi} and my family all speak ${this.fo}.`}
}

myObject.fum();

// Principle 3

// code example for New Binding
function MythicalCreature(param) {
  this.species: param.species,
  this.loves: param.loves,
  this.hates: param.hates
}

const jackalope = new MythicalCreature({
  species: "jackalope",
  loves: "pizzaberries",
  hates: "crocs"
});

// Principle 4

// code example for Explicit Binding
const myObject = {
  "fee": 14,
  "fi": "Raquetball",
  "fo": "Spanish"
}

function fum() {return `Hello! I am ${this.fee} years old, I love ${this.fi} and my family all speak ${this.fo}.`};

fum.call(myObject);
