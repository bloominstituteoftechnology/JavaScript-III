// Test you work by un-commenting these 3 objects and the list of console logs below:
/*Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  Each constructor function has unique properties and methods that are defined in their block comments below:
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function GameObject(attributes) {
  this.dimensions = attributes.dimensions;
  this.destroy = function () {
    let destroyed = `Object was removed from the game`;
    return destroyed;
  };
}

function CharacterStats(attributes) {
  this.name = attributes.name;
  this.healthPoints = attributes.healthPoints;
  this.takeDamage = function () {
    let tookDamage = `Object-name took damage`;
    return tookDamage;
  };
}

function Date(attributes) { // This doesn't work yet
  this.createdAt = attributes.createdAt;
}

function Humanoid(attributes) {
  this.name = attributes.name;
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  this.dimensions = attributes.dimensions;
  this.healthPoints = attributes.healthPoints;
  this.greet = function () {
    let greeting = `Hello, my name is ${this.name} (spoken in ${this.language})`;
    return greeting;
  };
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

const mage = new Humanoid({
  name: 'Bruce',
  team: 'Mage Guild',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  // createdAt: new Date(),
  healthPoints: 5,
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});


const swordsman = new Humanoid({
  name: 'Sir Mustachio',
  team: 'The Round Table',
  // createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});


const archer = new Humanoid({
  name: 'Lilith',
  team: 'Forest Kingdom',
  // createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});


console.log(mage); 
console.log(mage.name); 
console.log(mage.greet());
console.log(mage.weapons);
console.log(mage.createdAt); // doesn't work
console.log(swordsman.dimensions); 
console.log(swordsman.healthPoints); 
console.log(swordsman.team);
console.log(archer.dimensions); 
console.log(archer.language);
console.log(archer.greet());
console.log(mage.takeDamage()); 
console.log(swordsman.destroy()); 

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!