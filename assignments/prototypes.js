/* :) */

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


//* Game Object
function GameObject(parentAttributes) {
  this.createdAt = parentAttributes.createdAt;
  this.dimensions = parentAttributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return 'Object was removed from the game.';
}


//* Character Stats
function CharacterStats(childAttributes) {
  GameObject.call(this, childAttributes);
  this.hp = childAttributes.hp;
  this.name = childAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}


//* Humanoid
function Humanoid(grandChildAttributes) {
  CharacterStats.call(this, grandChildAttributes);
  this.faction = grandChildAttributes.faction;
  this.weapons = grandChildAttributes.weapons;
  this.language = grandChildAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}


//* Hero
function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heal = function(subject) {
  subject.hp++;
}

const theHealer = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 5,
    height: 3,
  },
  hp: 100,
  name: 'theHealer',
  faction: 'Healers Associated',
  weapons: [
    'Healing Wand',
  ],
  language: 'Common Toungue',
});

theHealer.heal(theHealer);
console.log(theHealer);


//* Villian
function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.take = function(subject) {
  subject.hp--;
}

const theVillian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 20,
    width: 1,
    height: 2,
  },
  hp: 1000,
  name: 'theVillian',
  faction: 'Unknown',
  weapons: [
    'Destruction Wand',
  ],
  language: 'Unknown',
});

theVillian.take(theHealer);
console.log(theHealer);

theVillian.take(theHealer);
console.log(theHealer);



//Test you work by uncommenting these 3 objects and the list of console logs below:


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

  theVillian.take(archer);
  console.log(archer.hp);
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