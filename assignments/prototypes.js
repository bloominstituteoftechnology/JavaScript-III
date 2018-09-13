/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
CharacterStats.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);
Villain.prototype = Object.create(Humanoid.prototype);
Hero.prototype = Object.create(Humanoid.prototype);
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

function CharacterStats(statAttributes) {
  GameObject.call(this, statAttributes);
  this.hp = statAttributes.hp;
  this.name = statAttributes.name;
}

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

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
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
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
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
  weapons: ['Giant Sword', 'Shield'],
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
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons.toString()); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.greed = villainAttributes.greed;
  this.lust = villainAttributes.lust;
  this.cackle = villainAttributes.cackle;
}

Villain.prototype.slap = function(foe) {
  if (foe.hp - 3 <= 0) {
    return `${foe.takeDamage()} ${foe.name}'s HP is depleted. ${foe.destroy()}`;
  } else {
    return `${foe.takeDamage()} ${foe.name} now has ${(foe.hp -= 3)}HP.`;
  }
};

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.valor = heroAttributes.valor;
  this.charisma = heroAttributes.charisma;
  this.bravery = heroAttributes.bravery;
}
Hero.prototype.punch = function(foe) {
  if (foe.hp - 3 <= 0) {
    return `${foe.takeDamage()} ${foe.name}'s HP is depleted. ${foe.destroy()}`;
  } else {
    return `${foe.takeDamage()} ${foe.name} now has ${(foe.hp -= 2)}hp.`;
  }
};

const lich = new Villain({
  name: 'Milk the Lich',
  hp: 30,
});

const knight = new Hero({
  name: 'Jerry the Knight',
  hp: 35,
});

console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
console.log(knight.punch(lich));
console.log(lich.slap(knight));
