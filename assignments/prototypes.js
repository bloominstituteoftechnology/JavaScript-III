/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(childAttributes) {
  GameObject.call(this, childAttributes);
  this.hp = childAttributes.hp;
  this.name = childAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(grandChildAttributes) {
  CharacterStats.call(this, grandChildAttributes);
  this.faction = grandChildAttributes.faction;
  this.weapons = grandChildAttributes.weapons;
  this.language = grandChildAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.courage = heroAttributes.courage;
  this.selflessness = heroAttributes.selflessness;
  this.humility = heroAttributes.humility;
  this.patience = heroAttributes.patience;
  this.caring = heroAttributes.caring;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function() {
  return "In the name of justice!";
};

Hero.prototype.defend = function() {
  return `${this.name} to the rescue!`;
};

function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.empathy = villainAttributes.empathy;
  this.immoral = villainAttributes.immoral;
  this.greed = villainAttributes.greed;
  this.composure = villainAttributes.composure;
  this.mystery = villainAttributes.mystery;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function() {
  return `${this.name} strikes again.`;
};

Villain.prototype.defend = function() {
  return "Evil laugh.";
};

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
    height: 1
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const jia = new Hero({
  name: "Jia",
  courage: 70,
  selflessness: 50,
  humility: 80,
  patience: 40,
  caring: 80
});

const aldus = new Villain({
  name: "Aldus",
  empathy: 40,
  immoral: 70,
  greed: 90,
  composure: 90,
  mystery: 60
});

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
console.log(aldus.attack());
console.log(jia.defend());

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
