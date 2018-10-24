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

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

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
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

function GameObject(gameObejectAttributes){
  this.createdAt = gameObejectAttributes.createdAt;
  this.dimensions = gameObejectAttributes.dimensions;
}
//methods for this ^ constructor 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; 
}
 
//Build next constructor 
function CharacterStats(characterStatsAttribute){
  this.hp = characterStatsAttribute.hp;
  this.name = characterStatsAttribute.name; 
  GameObject.call(this, characterStatsAttribute); 
}
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype); 

//methods for this ^ constructor 
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

//Test you work by uncommenting these 3 objects and the list of console logs below:
function Humanoid(humanoidAttributes){  
  this.faction = humanoidAttributes.faction; 
  this.weapons = humanoidAttributes.weapons; 
  this.language = humanoidAttributes.language; 
  CharacterStats.call(this,humanoidAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype); 
//Humanoid methods under here. 
//greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//^^ building above. 
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Joseph',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Magic',
  ],
  language: 'Common',
});


const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir David',
  faction: 'Knights Templar',
  weapons: [
    'large Sword',
    'Shield',
  ],
  language: 'Common',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Samantha',
  faction: 'Kingdom of the Forest',
  weapons: [
    'Bow and Arrow',
    'Small Dagger',
  ],
  language: 'Elvish',
});
// new constructor 
function Villian(villianAttributes){
  Humanoid.call(this, villianAttributes); 
  this.opponentHealth = villianAttributes.opponentHealth;
}
//inherit
Villian.prototype = Object.create(Humanoid.prototype); 

//methods 
Villian.prototype.KillerEvilStare = function () {
  this.opponentHealth -= 10;
  return `The villian ${this.name} lets out an evil laugh you will fail because I am ${this.name}`;
}
const failure = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'EvilOne',
  faction: 'Kingdom of the Forest',
  weapons: [
    'Killer Evil Stare', 'Slow but Deadly Walk'
  ],
  language: 'Elvish and Common',
});

function Hero (heroAttributes){
  this.opponentHealth = heroAttributes.opponentHealth;

  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);  

Hero.prototype.swordandShield = function () {
  this.opponentHealth -=20;
  console.log(this.opponent); 
  return `The hero ${this.name} uses his sword and shield`; 
}
Hero.prototype.speed = function () {
  this.opponentHealth -=50; 
  return `The hero ${this.name} uses his speed`
}
Hero.prototype.flawlessVictory = function() {
  this.opponentHealth-= 30; 
  return `The hero learns to fight using his weapons ${this.weapons}... and defeats the villian`; 
}


const Matthew = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Matthew',
  faction: 'Kingdom of the Forest',
  weapons: [
    'Sword', 'Sheild', 'Dagger', 'Speed', 'Bow and Arrow'
  ],
  language: 'Common',
  opponentHealth: 100
});

EvilOne = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'EvilOne',
  faction: 'Kingdom of the Forest',
  weapons: [
    'Killer Evil Stare','Slow but Deadly Walk'
  ],
  language: 'Elvish and Common',
  opponentHealth: 100
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
console.log(swordsman.destroy()); 


console.log("A new battle is about to begin")
console.log(`The battle of ${Matthew.name} vs ${EvilOne.name} has begun.`);
console.log(`The villian has the following weapons ${EvilOne.weapons}`);
console.log(`The hero has the following weapons ${Matthew.weapons}`); 
console.log(`The villian speaks the following language ${EvilOne.language}`);
console.log(`The hero speaks the following language ${Matthew.language}`);
console.log(EvilOne.KillerEvilStare());
console.log(`${Matthew.name} has been reduced, ${Matthew.name} now has ${EvilOne.opponentHealth}`);
console.log(Matthew.swordandShield());
console.log(`${EvilOne.name} has been reduced, ${EvilOne.name} now has ${EvilOne.opponentHealth}`);
console.log(Matthew.speed());
console.log(`${EvilOne.name} has been reduced, ${EvilOne.name} now has ${Matthew.opponentHealth}`) ;
console.log(Matthew.flawlessVictory()); 
console.log(`${EvilOne.name} has been reduced, ${Matthew.opponentHealth} now has ${Matthew.opponentHealth}`);


 

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!