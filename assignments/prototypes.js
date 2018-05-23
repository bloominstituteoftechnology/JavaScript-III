/* 
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject(gameObjectAttributes) {
  this.createdAt = gameObjectAttributes.createdAt;
  this.dimensions = gameObjectAttributes.dimensions;
  }

  GameObject.prototype.destroy = function() {
    return 'Object was removed from the game.';
  }

const gameObject1 = new GameObject({
  "createdAt": 'home1',
  "dimensions": 'dimension1',
})
console.log(gameObject1);
console.log(gameObject1.destroy());

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterStatsAttributes) {
  this.hp = characterStatsAttributes.hp;
  this.name = characterStatsAttributes.name;
  GameObject.call(this, characterStatsAttributes);
  }

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

const characterStats1 = new CharacterStats({
  "hp": 100,
  "name": 'Roger',
  "createdAt": 'building 9',
  "dimensions": 'medium',
})

console.log(characterStats1);
console.log(characterStats1.takeDamage());
console.log(characterStats1.destroy());

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
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  CharacterStats.call(this, humanoidAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}

const humanoid1 = new Humanoid({
  "faction" : "angryBots",
  "weapons" : ["flamethrower", "sniper rifle"],
  "language" : "botspeak",
  "hp": 250,
  "name": 'alphaHumanoid',
  "createdAt": 'building 11',
  "dimensions": 'x-large',
})

console.log(humanoid1);
console.log(humanoid1.destroy());
console.log(humanoid1.takeDamage());
console.log(humanoid1.greet());

/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/



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
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!