/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(desc) {
  this.createdAt = desc.createdAt;
  this.dimensions = desc.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterstatDesc) {
  GameObject.call(this, characterstatDesc);
  this.healthPoints = characterstatDesc.healthPoints;
  this.name = characterstatDesc.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidDesc) {
  CharacterStats.call(this, humanoidDesc);
  this.team = humanoidDesc.team;
  this.weapons = humanoidDesc.weapons;
  this.language = humanoidDesc.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

/* Hero and Villain */

function ChosenOnes(chosenDesc) {
  Humanoid.call(this, chosenDesc);
  this.destiny = chosenDesc.destiny;
  this.enemy = chosenDesc.enemy;
  this.damage = chosenDesc.damage;
}

ChosenOnes.prototype = Object.create(Humanoid.prototype);

ChosenOnes.prototype.victory = function () {
  return `${this.name} defeated the ${this.enemy}!!!`;
};

//function subtract(a, b, cb) {
//  return cb(a - b);
//}
//let health = 0;

ChosenOnes.prototype.attack = function () {
  console.log(`${this.name} attacked the ${this.enemy}.`);
  console.log(`${this.enemy} took ${this.damage} damage.`);
  console.log(`${this.enemy} healthpoints are at ${this.healthPoints - this.damage}.`);
  //subtract(this.healthPoints, this.damage, function (health) {
  //  console.log(health);
  //});
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const hero = new ChosenOnes({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 4,
    height: 8
  },
  healthPoints: 100,
  name: "Hero",
  weapons: ["Light"],
  language: "Ancient",
  destiny: "To fight the Chosen One",
  enemy: "Villain",
  damage: 25
});

const villain = new ChosenOnes({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 4,
    height: 8
  },
  healthPoints: 100,
  name: "Villain",
  weapons: ["Darkness"],
  language: "Ancient",
  destiny: "To fight the Chosen One",
  enemy: "Hero",
  damage: 25
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

console.log(hero.attack());
console.log(villain.attack());

console.log(hero.victory());
console.log(villain.victory());