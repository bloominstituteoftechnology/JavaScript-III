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
function CharacterStats(charStats) {
  GameObject.call(this, charStats);
  this.hp = charStats.hp;
  this.name = charStats.name;
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

function Humanoid(stats) {
  CharacterStats.call(this, stats);
  this.faction = stats.faction;
  this.weapons = stats.weapons;
  this.language = stats.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
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

//both Hero and Villain objects have the .attack method which reduces a passed-through enemy object's hp by 50 points,
//then runs an if statement and returns a "still-fighting" or "victorious" dynamic string depending on the enemy's health
//an extra if statement is first passed to determine if the Hero or Villain is still above 0 hp, if not then a "defeated" string is returned
function Villain(villainStats) {
  Humanoid.call(this, villainStats);
}
Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function(character) {
  if (this.hp > 0) {
    character.hp -= 50;
    if (character.hp > 0) {
      return `${this.name} hits ${character.name} with an ${
        this.weapons[0]
      } and does 50 points of damage! Are ${character.faction} doomed?`;
    } else {
      return `${this.name} strikes ${character.name} down with an ${
        this.weapons[1]
      }! With that final blow, ${
        character.faction
      } has been wiped out! The world weeps in terror!`;
    }
  } else {
    return `${
      this.name
    } has been defeated and can no longer attack! Remember kids, villains never win!`;
  }
};

function Hero(heroStats) {
  Humanoid.call(this, heroStats);
}
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function(character) {
  if (this.hp > 0) {
    character.hp -= 50;
    if (character.hp > 0) {
      return `${this.name} hits ${character.name} with a ${
        this.weapons[0]
      } and does 50 points of damage! ${character.name} taunts ${
        this.name
      } in anger!`;
    } else {
      return `${this.name} uses ${this.weapons[1]}! ${
        character.name
      } has been defeated, and ${this.faction} are victorious!`;
    }
  } else {
    return `${
      this.name
    } has been defeated and can no longer attack! With the Symbol of Peace slain, what hope is there for ${
      this.faction
    }?`;
  }
};

const allMight = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 5
  },
  hp: 100,
  name: "All-Might",
  faction: "the Heroes",
  weapons: ["smash", "United States of Smash"],
  language: "English"
});

const allForOne = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 4
  },
  hp: 100,
  name: "All for One",
  faction: "the League of Villains",
  weapons: ["Air Cannon", "overpowered Air Cannon"],
  language: "English"
});

console.log(allForOne.attack(archer));
console.log(allMight.attack(allForOne));
console.log(allForOne.attack(allMight));
console.log(allMight.attack(allForOne));
console.log(allForOne.attack(allMight));
