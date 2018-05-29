/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.
  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}
/*
=== GameObject ===
* createdAt
* dimensions
* destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
function CharacterStats(statsAttributes) {
  GameObject.call(this, statsAttributes);
  this.hp = statsAttributes.hp;
  this.name = statsAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
} 
/*
=== CharacterStats ===
* hp
* name
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
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
  name: 'Thor',
  faction: 'Asgardian',
  weapons: [
    'Mjolnir',
  ],
  language: 'Native Toungue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Deadpool',
  faction: 'Mutant',
  weapons: [
    'Swords',
    'Guns',
    'More Guns',
  ],
  language: 'Sarcasm',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Joker',
  faction: 'Arkham Patient ',
  weapons: [
    'Bombs',
    'Guns',
    'Mob',
  ],
  language: 'English 1940s street slang',
});

console.log(mage.createdAt); 
console.log(archer.dimensions); 
console.log(swordsman.hp); 
console.log(mage.name); 
console.log(swordsman.faction); 
console.log(mage.weapons); 
console.log(archer.language); 
console.log(archer.greet()); 
console.log(mage.takeDamage()); 
console.log(swordsman.destroy()); .


// Stretch task: 
// * Create Villian and Hero classes that inherit from the Humanoid class.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
