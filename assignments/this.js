/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding allows you to use the 'this' keyword within the block scope if no other binding is attached.
* 2. Implicit binding is when you put the object on the left of this. It is used only when dot notation is used when invoking a function.
* 3. New bindings are used with constructor functions to create new properties.
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

function RivalQuestion(rivalName) {
  this.rivalName = rivalName;
  this.speak = function() {
    console.log( `Ah, I remember now that your rival's name is ${this.rivalName}!`);
  }
}
const oak = new RivalQuestion('Butt');
oak.speak();

// Principle 4

// code example for Explicit Binding

const trainer = {
  'name': 'Brock',
  'age': 16
}

const skills = ['cook poke treats', 'admire ladies', 'use frying pans and drying pans.'];
function introduce(skill1, skill2, skill3) {
  console.log(`My name is ${trainer.name} and I like to ${skill1}, ${skill2}, and ${skill3}`);
}

// introduce.call(developer, skills);
introduce.apply(trainer, skills);