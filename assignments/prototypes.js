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
function GameObject(gameObjectAtts) {
  this.createdAt = gameObjectAtts.createdAt;
  this.dimensions = gameObjectAtts.dimensions;
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
function CharacterStats(characterStatsAtts) {
  GameObject.call(this, characterStatsAtts);
  this.hp = characterStatsAtts.hp;
  this.name = characterStatsAtts.name;
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
function Humanoid(humanoidAtts) {
  CharacterStats.call(this, humanoidAtts);
  this.faction = humanoidAtts.faction;
  this.weapons = humanoidAtts.weapons;
  this.language = humanoidAtts.language;
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


  console.log("\nSTRETCH TASKS");
  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  function Villain(villainAtts) {
    Humanoid.call(this, villainAtts);
  }

  function Hero(heroAtts) {
    Humanoid.call(this, heroAtts);
  }

  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.takeDamage = function() {
    this.hp -= 3;
    if (this.hp <= 0) {
      return `${this.name} took 3pts of damage! ${this.name} has no more hp left! ${this.destroy()}`; 
    }
    return `${this.name} took 3pts of damage! ${this.name}'s hp is now ${this.hp}.`;
  }

  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.takeDamage = function() {
    this.hp -= 3;
    if (this.hp <= 0) {
      return `${this.name} took 3pts of damage! ${this.name} has no more hp left! ${this.destroy()}`; 
    }
    return `${this.name} took 3pts of damage! ${this.name}'s hp is now ${this.hp}.`;
  }

  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  const goodGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    hp: 10,
    name: 'Good guy',
    faction: 'Earth',
    weapons: [
      'Sword',
      'Gun',
    ],
    language: 'Good guy-ish',
  });

  const badGuy = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 1,
    },
    hp: 8,
    name: 'Bad guy',
    faction: 'Bad Earth',
    weapons: [
      'Knife',
      'Bow',
    ],
    language: 'Bad guy-ish',
  });

  console.log(badGuy.takeDamage());
  console.log(goodGuy.takeDamage());
  console.log(badGuy.takeDamage());
  console.log(goodGuy.takeDamage());
  console.log(badGuy.takeDamage());
