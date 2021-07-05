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

// const camelot = new GameObject({
//   createdAt: new Date(),
//   name: new Name(),
//   dimensions: {
//     length: 2, 
//     width: 1,
//     height: 3,
//   },
//   healthPoints: 15,
//   name: 'Lady Guinevere',
//   team: 'Sir Lancelot',
//   weapons: ['Chastity Belt', 'Silver Armour'],
//   language: 'English',
// });

// function game(gameAttrs) {
//   GameObject.call(this, gameAttrs);
//   this.newGame = gameAttrs.newGame;
// }
// game.prototype = Object.create(GameObject.prototype);

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
};

CharacterStats.prototype = (GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

// const arthur = new CharacterStats({
//   createdAt: new Date(),
//   name: new Name(),
//   dimensions: {
//     length: 2.5,
//     width: 2,
//     height: 4,
//   },
//   healthPoints: 20,
//   name: 'King Arthur',
//   team: 'Merlyn',
//   weapons: ['Holy Grail', 'Merlyns Beard'],
//   language: 'English', 'Common Tongue',
// });

// function character(characterAttrs) {
//   CharacterStats.call(this, characterAttrs);
//   this.newCharacter = characterAttrs.newCharacter;
// }
// character.prototype = Object.create(CharacterStats.prototype);

function Humanoid(human) {
  CharacterStats.call(this,human);
  this.team = human.team;
  this.weapons = human.weapons;
  this.language = human.language;
}

Humanoid.prototype = (CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

const mage = new Humanoid({
  createdAt: '19 July 2019',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
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
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
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

  function Villain(bad) {
    GameObject.call(this, bad);
    this.createdAt = bad.createdAt;
    this.name = bad.name;
    this.dimensions = bad.dimensions;
    };

Villain.prototype = (Humanoid.prototype);
Villain.prototype.kill = function() {
  return `${this.name} tries to kill them with his ${this.weapons}.`;
}
  const gameVillain = new Villain({
  createdAt: '19 July 2019',
  dimensions: {
    length: 3, 
    width: 2,
    height: 5,
  },
  healthPoints: 10,
  name: 'The Evil Mordred',
  team: 'Cave of Mordue',
  weapons: ['Flaming Sword', 'Black Armour', 'Invisible Shield'],
  language: 'Orkish',
  });

  function Hero(brave) {
    GameObject.call(this, brave);
    this.createdAt = brave.createdAt;
    this.name = brave.name;
    this.dimensions = brave.dimensions;
  };

  Hero.prototype = (Villain.prototype);
  Hero.prototype.save = function() {
  return `${this.name} tries to save them with his ${this.weapons}.`;
}

  const gameHero = new Hero({
  createdAt:'19 July 2019',
  dimensions: {
    length: 2, 
    width: 1.5,
    height: 3,
  },
  healthPoints: 15,
  name: 'The Handsome Prince Charming',
  team: 'Lady of the Lake',
  weapons: ['Sword in the Stone', 'White Armour', 'Golden Shield'],
  language: 'English',
  });


console.log(gameHero.name);
// console.log(gameHero.team);
// console.log(gameHero.weapons);
console.log(gameVillain.name);
// console.log(gameVillain.team);
// console.log(gameVillain.language);
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

