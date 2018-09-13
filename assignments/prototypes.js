/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/


function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
// prototype method -> returns the string: 'Object was removed from the game.'
GameObject.prototype.destroy = function () {
  return (`${this.name} was removed from the game`)
}
// =========================================================================
function CharacterStats(stats) {
  this.hp = stats.hp;
  this.name = stats.name;
  // *should inherit destroy() from GameObject 's prototype
  GameObject.call(this, stats);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

const stats1 = new CharacterStats({
  hp: 5,
  name: 'bob'
})
// prototype method -> returns the string '<object name> took damage.'
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`
}
// =============================================================================
function Humanoid(stuff) {
  this.faction = stuff.faction;
  this.weapons = stuff.weapons;
  this.language = stuff.language;
  // * should inherit destroy() from GameObject through CharacterStats
  // * should inherit takeDamage() from CharacterStats
  CharacterStats.call(this, stuff);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

// prototype method -> returns the string '<object name> offers a greeting in <object language>.'
Humanoid.prototype.greet = function () {
  return (`${this.name} offers a greeting in ${this.language}`)
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

function Hero(good) {
  Humanoid.call(this, good);
}

Hero.prototype.smash = function (target) {
  target.hp -= Math.ceil(Math.random() * 5)
  return (`${this.name} smashed the ${target.name}!  ${target.name} now has ${target.hp} health points left`)
}

function Villian(bad) {
  Humanoid.call(this, bad);
}

const Superman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Superman',
  faction: 'Earth',
  weapons: [
    'Lazer',
    'Frost Breath',
  ],
  language: 'English',
})

const Penguin = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Peguin',
  faction: 'Earth',
  weapons: [
    'Thugs',
    'Kife cane',
  ],
  language: 'English',
})


console.log(Penguin.hp);

console.log(Superman.smash(Penguin))

console.log(Penguin.hp);