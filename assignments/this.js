/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object
* 2. Implicit
* 3. New
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dontSpeak() {
  console.log('I know just what you\'re saying.');
}

dontSpeak(); // call-site for dontSpeak is in the global scope; call-stack is: dontSpeak

// Principle 2

// code example for Implicit Binding
const whatIs = {
  name: 'Andres',
  myName: function(name) {
    console.log(`My name is ${this.name}.`);
  }
};

whatIs.myName(); // call-site for myName is in whatIs; call-stack is: whatIs -> myName

// Principle 3

// code example for New Binding
function CreateCharacter(obj) {
  this.race = obj.a;
  this.charClass = obj.b;
}

const PlayerOne = new CreateCharacter({
  a: 'Orc',
  b: 'Warrior'
});

console.log(PlayerOne.charClass);

// Principle 4

// code example for Explicit Binding
const playerTwo = {
  true_identity: 'the Real Player One'
};

function helloThere() {
  console.log(`I'm ${this.true_identity}.`);
}

helloThere.call(playerTwo);