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
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
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

function Humanoid(human) {
  CharacterStats.call(this, human);
  this.faction = human.faction;
  this.weapons = human.weapons;
  this.language = human.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
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

  function Villian(evil) {
    Humanoid.call(this, evil);
    this.alignment = evil.alignment;
  }
  
  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.attack = function(who) {
    if (who.hp > 1) {
    who.hp -= 1;
     return who.takeDamage() + " " + `HP is now ${who.hp}`;
  } else {
    return who.destroy();
  }
}

  const darkLord = new Villian ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    hp: 20,
    name: `Ba'alzamon`,
    faction: 'The Void',
    weapons: ['Magic', 'Stone of Chaos'],
    language: 'Burning Hate',
    alignment: 'Chaotic Evil',
  });

  console.log(darkLord.attack(mage));
  console.log(darkLord.attack(mage));
  console.log(darkLord.attack(mage));
  console.log(darkLord.attack(mage));
  console.log(darkLord.attack(mage));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(archer));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(darkLord.attack(swordsman));
  console.log(`Darkness falls over the Earth as ${darkLord.name} destroys all life. Shall no hero come to restore order?`);

function Hero (good) {
  Villian.call(this, good);
}

Hero.prototype = Object.create(Villian.prototype);
Hero.prototype.revive = function(who) {
  who.hp += 1;
  return `${who.name} was revived by ${this.name} with 1HP`;
} 

const savior = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 20,
  name: `Rand al'Thor`,
  faction: 'any',
  weapons: ['Callandor', 'The One Power'],
  language: 'Common Tounge',
  alignment: 'Chaotic Good',
});

console.log(`From the ashes rises our new hero: ${savior.name}!`);
console.log(savior.greet());
console.log(savior.revive(mage));
console.log(savior.revive(archer));
console.log(savior.revive(swordsman));
console.log(`${savior.name} says to ${mage.name}, ${archer.name} and ${swordsman.name}: "Now rest, for death can no longer hold you! I shall go to defeat ${darkLord.name}!`);
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(savior.attack(darkLord));
console.log(`${savior.name} defeats ${darkLord.name}! Now, to reconstruct our civilization from the rubble.`)