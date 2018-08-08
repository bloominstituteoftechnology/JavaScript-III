/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding allows if no other binding is attached, the window is what is used for 'this'.
* 2. Implicit binding occurs when dot notation is used to invoke a function.
* 3. New binding creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
* 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1
global.boyOrGirl = "Are you a boy or girl?";

function genderQuestion() {
  console.log(this.boyOrGirl);
}

genderQuestion();

// Principle 2

// code example for Implicit Binding

const pokemon = {
  'name': 'Bulbasaur',
  'type': 'grass',
  'offensive': function(atk1, atk2) {
    console.log( `${this.name} can use ${atk1} and ${atk2}.`);
  }
}

pokemon.offensive("Tackle", "Vine Whip");

// Principle 3

// code example for New Binding

function Rival(rivalName) {
  this.greeter = greeter;
  this.speak = function() {
    console.log( `${this.greeting} ${this.greeter}`);
  }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');
const josh = new CordialPerson('CS 13');

jerry.speak();
newman.speak();
josh.speak();

// Principle 4

// code example for Explicit Binding