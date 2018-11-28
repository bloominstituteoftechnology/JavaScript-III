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

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
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

function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
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

function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.side = villainAttributes.side;
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.clubbing = function() {
  return 2;
};
Villain.prototype.claw = function() {
  return 1;
};
Villain.prototype.mace = function() {
  return 4;
};

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.side = heroAttributes.side;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.bow = function() {
  return 2;
};
Hero.prototype.sword = function() {
  return 5;
};
Hero.prototype.punch = function() {
  return 1;
};

const aragorn = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 6
  },
  healthPoints: 20,
  name: "Aragorn the Dunedain",
  team: "Minas Tirith",
  weapons: ["Sword", "Bow"],
  language: ["Elvish", "English"],
  side: "Good"
});

const orc = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 4
  },
  healthPoints: 18,
  name: "Blargh",
  team: "Orcs",
  weapons: ["Mace", "Claws", "Fangs"],
  language: ["Orcish", "English"],
  side: "bad"
});
console.log(orc);

function heroAttack(hero) {
  const num = Math.random();
  if (num < 0.33) return hero.bow();
  if (num < 0.66) return hero.sword();
  if (num < 1) return hero.punch();
}

function villainAttack(villain) {
  const num = Math.random();
  if (num < 0.33) return villain.clubbing();
  if (num < 0.66) return villain.claw();
  if (num < 1) return villain.mace();
}

function finishHim(hero, villain) {
  let round = 1;
  while (hero.healthPoints > 0 && villain.healthPoints > 0) {
    console.log(`=========== Round ${round} ===========`);
    round++;
    let heroDamage = heroAttack(hero);
    villain.healthPoints -= heroDamage;
    console.log(
      `${hero.name} dealt ${heroDamage} damage to the villain ${villain.name}.`
    );
    let villainDamage = villainAttack(villain);
    console.log(
      `${villain.name} dealt ${villainDamage} damage to the hero ${hero.name}.`
    );
    hero.healthPoints -= villainDamage;
  }
  console.log(`============ Result ============`);
  if (hero.healthPoints <= 0) {
    console.log(
      `The hero ${hero.name} died! ${villain.name} has ${
        villain.healthPoints
      } health left and won the battle!`
    );
    return;
  }
  if (villain.healthPoints <= 0) {
    console.log(
      `The villain ${villain.name} died! ${hero.name} has ${
        hero.healthPoints
      } health left and won the battle!`
    );
    return;
  }
}

finishHim(aragorn, orc);
