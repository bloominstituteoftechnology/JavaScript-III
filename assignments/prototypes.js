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
// GameObject.prototype.destroy = () => `${this.name} was removed from the game.`;
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (charAttributes) {
  GameObject.call(this, charAttributes);
  this.healthPoints = charAttributes.healthPoints;
  this.name = charAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

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


//==========STRETCH TASKS=========== 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//Hero creator 
function Hero (heroAtts) {
  Humanoid.call(this, heroAtts);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.introSpeech = function(){
  console.log(`Do not fear, I am ${this.name} and I will defeat all evil villains!`);
}
Hero.prototype.heroicSlash = function(heroDmgDone) {
  console.log(`${this.name} slashed the villain for ${heroDmgDone}HP!`);
}

//Villain creator
function Villain (villAtts) {
  Humanoid.call(this, villAtts);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.introSpeech = function() {
  console.log(`It is I, ${this.name}, the evilest of all villains!`);
}
Villain.prototype.evilSlam = function(villainDmgDone) {
  console.log(`${this.name} maliciously slams the hero for ${villainDmgDone}HP.`);
}

//make a hero object
const mainHero = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 15,
    height: 20,
  },
  healthPoints: 125,
  name: 'Anduin',
  team: 'Alliance',
  weapons: [
    'Stormwind Sword of the Kings',
  ],
  language: 'Common Tongue',
});

//make a villain object
const mainVillain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 8,
    width: 14,
    height: 25,
  },
  healthPoints: 100,
  name: 'Sylvanas',
  team: 'Horde',
  weapons: [
    'Legendary Bow of the Forsaken',
  ],
  language: 'Elvish',
});


console.log(`A hero and a villain enter the fight! *gasp*`);

//Character intros
mainHero.introSpeech();
mainVillain.introSpeech();


//invoke methods to have them fight
console.log(`Let the fight BEGIN!`);
mainHero.heroicSlash(25);
console.log(mainVillain.takeDamage());
mainVillain.healthPoints -= 25;
console.log(`${mainVillain.name} now has ${mainVillain.healthPoints}HP left.`);
console.log(`${mainVillain.name} hits back!`);
mainVillain.evilSlam(75);
console.log(mainHero.takeDamage());
mainHero.healthPoints -= 75;
console.log(`${mainHero.name} now has ${mainHero.healthPoints}HP left.`);
mainHero.heroicSlash(75);
console.log(`It's super effective!`);
console.log(mainVillain.takeDamage());
mainVillain.healthPoints -= 75;
console.log(mainVillain.destroy());
console.log(`${mainHero.name} wins the battle!`);