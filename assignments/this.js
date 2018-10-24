/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. No binding is supplied so this binds to the global or window.
* 2. Calling a function using dot is implicit binding when the object in front of that dot is this.
* 3. Using a constructor function and calling new to create a new object is new binding.
* 4. Using this or apply means that this is explicitly bound to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function helloWorld(){
  console.log(this)
}

helloWorld();

// Principle 2

// code example for Implicit Binding
const arrestedDevelopment = {
  name: 'George Michael',
  fear: 'Prisons',
  phobia: function(){
    console.log(`${this.name} is afraid of ${this.fear}.`);
  }
}

// Principle 3

// code example for New Binding
function ArrestedDevelopmentConstructor (character) {
    this.character = character
    this.dance = 'Chicken Dance'
}

const magician = new ArrestedDevelopmentConstructor(Gob)

// Principle 4

// code example for Explicit Binding

function ArrestedDevelopmentConstructor (character) {
    this.character = character
    this.dance = 'Chicken Dance'
}
const drinker = new ArrestedDevelopmentConstructor(Lucille)
const magician = new ArrestedDevelopmentConstructor(Gob)
magician.speak.call(Lucille); drinker.speak.apply(Gob);
