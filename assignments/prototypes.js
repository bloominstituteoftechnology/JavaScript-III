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
const GameObject = function({ dimensions }) {
  this.createdAt = new Date().toString();
  this.dimensions = dimensions;
};

GameObject.prototype.destroy = function() {
  const name = this.name ? this.name : 'Object';
  return `${name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
const CharacterStats = function(atrs) {
  GameObject.call(this, atrs);
  this.hp = atrs.hp;
  this.name = atrs.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(dmg) {
  this.hp -= dmg;
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
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
const Humanoid = function(atrs) {
  CharacterStats.call(this, atrs);
  this.faction = atrs.faction;
  this.weapons = atrs.weapons;
  this.language = atrs.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

Humanoid.prototype.taunt = function() {
  return `${this.name} taunts its attacker!`;
}

// Test your work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
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

const Hero = function(atrs) {
  Humanoid.call(this, atrs);
};

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heavySwing = function(target) {
  console.log(`${this.name} takes a heavy swing at ${target.name}!`);
  console.log(target.takeDamage(5));
  return (target.hp < 1 ? target.destroy() : target.taunt());
}

Hero.prototype.massiveSwing = function(target) {
  console.log(`${this.name} takes a massive swing at ${target.name}!`);
  console.log(target.takeDamage(10));
  return (target.hp < 1 ? target.destroy() : target.taunt());
}

const Villain = function(atrs) {
  Humanoid.call(this, atrs);
};

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.summonImp = function(target) {
  console.log(`${this.name} summons an imp to attack ${target.name}!`);
  console.log(target.takeDamage(7));
  return (target.hp < 1 ? target.destroy() : target.taunt());
}

Villain.prototype.summonDragon = function(target) {
  console.log(`${this.name} summons a dragon to attack ${target.name}!`);
  console.log(target.takeDamage(15));
  return (target.hp < 1 ? target.destroy() : target.taunt());
}

const hero = new Hero({
  dimensions: {
    length: 3,
    width: 4,
    height: 3
  },
  hp: 40,
  name: 'Gareth',
  faction: 'The Common Good',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const villain = new Villain({
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Gigi',
  faction: 'The Common Evil',
  weapons: [
    'Great Staff',
    'Orb of Destruction',
  ],
  language: 'Common Tongue',
});

console.log(villain.summonDragon(hero)); // surprise attack
console.log(hero.heavySwing(villain)); // hero strikes back
console.log(villain.summonImp(hero)); // villain needs to recover for another dragon
console.log(hero.heavySwing(villain)); // hero strikes again
console.log(villain.summonDragon(hero)); // hero kills dragons on the daily just to bring home some food
console.log(hero.massiveSwing(villain)); // hero slays villain
