/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, the default binding for this, where this refers to the Window Object. Can be overridden with "use strict"
* 2. Implicit Binding, when JavaScript determines where this points, to know look to the left of the dot in the function call, thisObject.function()
* 3. Explicit Binding, when You determine where this points, the function containing this is standalone, and must be couple with .call(), .apply(), or .bind() to know what this is.
* 4. New Binding, allows you to use an obect template to create new instances of an object which is used as this for the method being called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBind() {
  return this;
}

// Principle 2

// code example for Implicit Binding

const pokemon = {
  name: 'Pikachu',
  move: 'Thundershock',

  attack: function() {
    console.log(`${this.name} used ${this.move}!`)
  }
}

pokemon.attack();

// Principle 3

// code example for New Binding

const Character = function (name, gender, combatStyle, weapon) {
  this.name = name
  this.gender = gender
  this. combatStyle = combatStyle
  this.weapon = weapon
}

const ninja = new Character('Brian', 'Male', 'Stealth', 'Dagger');

console.log(`The ninja character is named ${ninja.name}, and ${ninja.name} uses ${ninja.combatStyle} and a ${ninja.weapon}`);

// Principle 4

// code example for Explicit Binding

const hero = {
  name: 'Link'
}

const inventory = ['Master Sword', 'Hylian Shield', 'Boomerang', 'Bombchu', 'Potion x5'];

function checkItems(arguments) {
  console.log(`${this.name}\'s inventory holds ${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]}, and ${arguments[4]}`);
}

checkItems.call(hero, inventory);
