/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be 
  implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid. 
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

const GameObject = function(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

const CharacterStats = function(attributes) {
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

// const char1 = new CharacterStats(50, "jim");

// console.log(char1.takeDamage());

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

const Humanoid = function(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

const Hero = function(attributes) {
  Humanoid.call(this, attributes);
  this.regularDamage = attributes.regularDamage;
  this.specialDamage = attributes.specialDamage;
  this.opponent = attributes.opponent;
}

// Hero functions
Hero.prototype.regularAttack = function() {
  if(this.opponent.hp > 0 && this.hp > 0) {
  console.log(`${this.name} does ${this.regularDamage} damage to ${this.opponent.name}`);
  this.opponent.hp -= this.regularDamage;
  console.log(`${this.opponent.name} has ${this.opponent.hp} remaining`);
  } else if(this.opponent.hp <= 0){
    this.opponent.death();
  } else if (this.hp <= 0) {
    console.log(`${this.name} is dead and cannot attack.`);
  }
}

Hero.prototype.death = function() {
  console.log(`${this.name} has died`);
}




const Villain = function(attributes) {
  Hero.call(this, attributes);

};

Villain.prototype = Object.create(Hero.prototype);

/* 
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

// /*
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const god = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 4,
    height: 10
  },
  hp: 100,
  name: "God",
  faction: "Earth",
  weapons: ["Smite"], 
  language: "English",
  regularDamage: 10,
  specialDamage: 35,
  opponent: ""
});

const satan = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 6,
    height: 8
  },
  hp: 100,
  name: "Satan",
  faction: "Hell",
  weapons: "Fireball",
  regularDamage: 10,
  specialDamage: 25,
  opponent: god
});

god.opponent = satan;

// // Event listeners for key presses

// Event listener for attack buttons
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  if(keyName === 'p'){
    god.regularAttack();
  } else if(keyName === 'l') {
    satan.regularAttack();
  }
  
});

// Movement
const playerElement = document.getElementById('target');
//start player in center of screen
playerElement.style.top = "200px";
playerElement.style.left = "200px";

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if(keyName === 'w') {
    playerElement.style.top -= "10px";
    console.log(playerElement.style.top);
  } else if (keyName === 'a'){
    playerElement.style.left -= "10px";
  } else if (keyName === 's'){
    playerElement.style.top += "10px";  
  } else if (keyName === 'd') {
    playerElement.style.left += "10px";
  }
})


// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// */

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects 
//                                 which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
