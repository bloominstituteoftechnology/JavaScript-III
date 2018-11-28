/*
  Object oriented design is commonly used in video games. For this part of the 
  assignment you will be implementing several constructor functions with their 
  correct inheritance hierarchy.

  In this file you will be creating three constructor functions: 
  GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their
  block comments below:
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

// import statement for math.js
// ES6 import statement (uncomment if using ES6)
// import * as math from 'mathjs'
// Node.js import statement
const math = require('mathjs');

// Constructors and prototypes

function GameObject(goAttributes) {
  this.createdAt = goAttributes.createdAt,
  this.dimensions = goAttributes.dimensions
}

GameObject.prototype.destroy = function () {
  return `Object was removed from the game.`;
}

function CharacterStats(csAttributes) {
  GameObject.call(this, csAttributes);
  this.healthPoints = csAttributes.healthPoints;
  this.name = csAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}

function Humanoid(hAttributes) {
  CharacterStats.call(this, hAttributes);
  this.team = hAttributes.team;
  this.weapons = hAttributes.weapons;
  this.language = hAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
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
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Attacker(attributes) {
    Humanoid.call(this, attributes);
    this.attackDamage = attributes.attackDamage;
    this.accuracy = attributes.accuracy;
    this.dodge = attributes.dodge;
  }

  Attacker.prototype = Object.create(Humanoid.prototype);
  
  // Gets a hit chance (100% is 1.0)
  function CalculateHitChance(accuracy, dodge) {
    return 0.5 + math.asinh(accuracy - dodge) / (math.square(math.pi));
  }

  // Returns a boolean if the hit was successful
  function CheckHit(hitChance) {
    return math.random(0, 1) < hitChance;
  }

  Attacker.prototype = Object.create(Humanoid.prototype);

  Attacker.prototype.attack = function(target) {
    if (this.healthPoints <= 0)
      return;

    let dodge = isFinite(target["dodge"]) ? target["dodge"] : 0;
    let accuracy = isFinite(this.accuracy) ? this.accuracy : 0;
    let hitChance = CalculateHitChance(accuracy, dodge);

    if (CheckHit(hitChance)) {
      target.healthPoints = target.healthPoints - this.attackDamage;
      console.log(`${this.name} hits ${target.name} for ${this.attackDamage} damage! (${hitChance * 100}%)`);
      if (target.healthPoints <= 0) {
        console.log(`${target.name} has been defeated!`);
        console.log(target.destroy());
      }
    } else {
      console.log(`${this.name} misses an attack against ${target.name}! {${hitChance * 100}%)`);
    }
  }

  function Hero() {
    Attacker.call(this, {
      'attackDamage': 10,
      'accuracy': 20,
      'dodge': 40,
      'team': 'Lambda School',
      'weapons': [
        'Peer Code Review',
        'I do, We do, You do',
        'なに？'
      ],
      'language': 'JavaScript',
      'healthPoints': 100,
      'name': 'Josh Knell',
      'dimensions': 'Way beyond ours'
    })
  }

  Hero.prototype = Object.create(Attacker.prototype);

  function Villain() {
    Attacker.call(this, {
      'attackDamage': 20,
      'accuracy': 10,
      'dodge': 5,
      'team': 'Evil LLC',
      'weapons': [
        'In this house we use arrow syntax',
        'Programming is not stressful at all'
      ],
      'language': 'not specific enough',
      'healthPoints': 300,
      'name': 'Big Boss',
      'dimensions': 'Huge'
    })
  }

  Villain.prototype = Object.create(Attacker.prototype);

  const ourHeroComesToSaveTheDay = new Hero();
  const uhOhHereComesTheVillain = new Villain();

  console.log(ourHeroComesToSaveTheDay.greet());
  console.log(uhOhHereComesTheVillain.greet());

  while (ourHeroComesToSaveTheDay.healthPoints > 0 && uhOhHereComesTheVillain.healthPoints > 0) {
    ourHeroComesToSaveTheDay.attack(uhOhHereComesTheVillain);
    uhOhHereComesTheVillain.attack(ourHeroComesToSaveTheDay);
  }

  if (ourHeroComesToSaveTheDay.healthPoints <= 0) {
    console.log(`The villain ${uhOhHereComesTheVillain.name} has triumphed!`);
  } else {
    console.log(`Our hero ${ourHeroComesToSaveTheDay.name} has saved the day!`);
  }