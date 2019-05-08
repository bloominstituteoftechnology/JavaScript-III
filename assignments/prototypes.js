/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
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

// Test you work by un-commenting these 3 objects and the list of console logs below:

function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(charAttrs) {
  GameObject.call(this, charAttrs);
  this.healthPoints = charAttrs.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(humanoidAttrs) {
  GameObject.call(this, humanoidAttrs);
  CharacterStats.call(this, humanoidAttrs);
  this.team = humanoidAttrs.team;
  this.weapons = humanoidAttrs.weapons;
  this.language = humanoidAttrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

function Hero(heroAttrs) {
  GameObject.call(this, heroAttrs);
  CharacterStats.call(this, heroAttrs);
  Humanoid.call(this, heroAttrs);
  this.specialPower = heroAttrs.specialPower;
}

Hero.prototype.heal = function(char, x) {
  char.healthPoints += x;

  if (x < 2) {
    return `${this.name} used ${this.specialPower} to heal ${
      char.name
    } by ${x} point.`;
  } else {
    return `${this.name} used ${this.specialPower} to heal ${
      char.name
    } by ${x} points.`;
  }
};

function Villian(villAttrs) {
  GameObject.call(this, villAttrs);
  CharacterStats.call(this, villAttrs);
  Humanoid.call(this, villAttrs);
  this.evilSaying = villAttrs.evilSaying;
}

Villian.prototype.attack = function(char, x) {
  if (x >= char.healthPoints) {
    char.healthPoints = "Dead";
    return `${this.name} has killed ${char.name}.`;
  } else {
    char.healthPoints -= x;
    return `${this.name} has taken ${x} health from ${char.name}.`;
  }
};

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

const wizard = new Hero({
  createdAt: new Date(),
  name: "Remus",
  dimensions: {
    length: 3,
    width: 3,
    height: 5
  },
  healthPoints: 35,
  team: "Dumbledore's Army",
  weapons: ["Wand", "Cloak of Invisibility", "Pensieve"],
  language: "Common Tongue",
  specialPower: "Magic"
});

const politician = new Villian({
  createdAt: new Date(),
  name: "Herman",
  dimensions: {
    length: 2,
    width: 5,
    height: 2
  },
  healthPoints: 30,
  team: "Republican",
  weapons: ["Propoganda", "Fox News", "Rich Family"],
  language: "Filibuster",
  evilSaying: "We deserve stuff, they don't!"
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

console.log(mage.healthPoints);
console.log(wizard.heal(mage, 4));
console.log(mage.healthPoints);

console.log(politician.attack(mage, 5));
console.log(mage.healthPoints);
console.log(politician.evilSaying);

console.log(wizard.heal(mage, 2));
console.log(mage.healthPoints);
console.log(politician.attack(mage, 6));
console.log(mage.healthPoints);

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
