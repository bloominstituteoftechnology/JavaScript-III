/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New Binding - this refers to the object that is created by a constructor function
  2. Implicit - .this is automatically binded when the function is called.
  3. Explicit - The .this method has to be called to in an argument b/c it is outside of the object its referencing.
  4. Window Binding - .this refers to the window object
*/

// Principle 1

// code example for Window Binding
// function greet(name) {}



// code example for Implicit Binding
// const me = {}


// Principle 3

// code example for New Binding

// Principle 4

// function greeting () {}

function add(n) {
  return n + 5;
}
console.log(add(5));


/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several
   constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom
  of the page to test your constructor functions.

  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(parameter) {
  this.createdAt = parameter.createdAt;
  this.dimensions = parameter.dimensions;
}
GameObject.prototype.destroy = function() {
return `Object was removed from the game.`
}

/*
=== CharacterStats ===
* hp
* name
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
function CharacterStats (charStats) {
GameObject.call(this,charStats);
this.hp = charStats.hp;
this.name = charStats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
return `${this.name} took damage.`
}
/*
=== Humanoid ===
* faction
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
function Humanoid(humStats) {
  CharacterStats.call(this, humStats);
  this.faction = humStats.faction;
  this.weapons = humStats.weapons;
  this.language = humStats.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}


/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
'createdAt': new Date(),
'dimensions': {
  'length': 2,
  'width': 1,
  'height': 1,
},
  'hp': 5,
  'name': 'Bruce',
  'faction': 'Mage Guild',
  'weapons': ['Staff of Shamalama'],
  'language': 'Common Toungue',
});

const swordsman = new Humanoid({
  'createdAt': new Date(),
  'dimensions': {'length': 2, 'width': 2, 'height': 2},
  'hp': 15,
  'name': 'Sir Mustachio',
  'weapons': ['Giant Sword', 'Shield'],
  'language': 'Common Toungue',
  'faction': 'Round Table'
});

const archer = new Humanoid({
  'createdAt': new Date(),
  'dimensions': {'length': 1, 'width': 2, 'height': 4},
  'hp': 10,
  'name': 'Lilith',
  faction: 'Forest Kingdom',
  'weapons': ['Bow', 'Dagger'],
  'language': 'Elvish'
});

//console.log()
 console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
