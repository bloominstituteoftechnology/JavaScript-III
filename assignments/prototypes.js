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

/*
  === CharacterStats ===
  * healthPoints
  * name
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

//=== Game Object ===

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; //Instead of a console.log() I used a return to get rid of that rogue undefined on line 138 in the console.
}

// === Character Stats ===
function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
  this.name = characterAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
}

// === Humanoid ===
function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.damage = humanAttributes.damage;
  this.language = humanAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
}
Humanoid.prototype.attack = function (objectToAttack) {
  if (objectToAttack.healthPoints <= 1) {
    objectToAttack.destroy();
  } else {
    objectToAttack.healthPoints -= this.damage;
    console.log(`
    ${this.name} attacked ${objectToAttack.name} for ${this.damage}\n
    ${objectToAttack.name} is now at ${objectToAttack.healthPoints} Health Points`);
  }
}
Humanoid.prototype.printStatistics = function () {
  console.log(`
  ===${this.name}=== \n
  Current Health: ${this.healthPoints} \n
  Weapons Available: ${this.weapons}
  ==================
  `)
}

// Villian
function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
}
Villian.prototype = Object.create(Humanoid.prototype);


// Hero
function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}
Hero.prototype = Object.create(Humanoid.prototype);




const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  damage: 1,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  damage: 1,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  damage: 1,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const villian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 25,
  damage: 1,
  name: 'Hannibal',
  team: 'Serial Killers',
  weapons: [
    'Knife'
  ],
  language: 'Common Tongue',
});
const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  damage: 1,
  name: 'Brandon',
  team: 'Tampa',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Common Tongue',
});
const allPlayers = [mage, swordsman, archer, villian, hero];

function getStats() {
  allPlayers.forEach((player) => {
    player.printStatistics();
  });
}

function startFight() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      hero.attack(villian);
      villian.attack(hero);
    }, 2500 * i);
  }
}

function gameBoard() {
  getStats();
  startFight();
}
gameBoard();
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!