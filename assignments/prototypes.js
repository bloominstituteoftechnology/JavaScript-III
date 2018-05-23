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
function GameObject (objAttr) {
  this.createdAt = objAttr.createdAt;
  this.dimensions = objAttr.dimensions;
  // this.destroy = function(){
  //   return `${this.name} was removed from the game.`;
  // }
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
function CharacterStats (stats) {
  GameObject.call(this, stats); //inherit destroy() from GameObject
  this.hp = stats.hp;
  this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
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
function Humanoid (charAttr) {
  CharacterStats.call(this,charAttr);
  this.faction = charAttr.faction;
  this.weapons = charAttr.weapons;
  this.language = charAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}

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
  hp: 12,
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

//Create villain class
function Villain(villainSkills) {

  Humanoid.call(this, villainSkills);
}  

Villain.prototype = Object.create(Humanoid.prototype);

//Create skill method for villain
Villain.prototype.deadbeam = function (obj) {
  let damage = Math.ceil(Math.random()*3);
  //Remove hp from object when this function is called
  obj.hp -= damage;

  //Check object's hp, if it's <= 0 then call destroy() function
  if (obj.hp <= 0) {
    return `${obj.name} has no hp left. ${obj.destroy()}`;
  }

  //if not then return message showing how much damage was done.
  return `${this.name} has performed Dead Beam on ${obj.name}. ${obj.takeDamage()}(${damage} dmg). ${obj.name}'s remaining hp is ${obj.hp}.`
}

//Create hero class
function Hero(heroSkills) {

  Humanoid.call(this, heroSkills);
}  

Hero.prototype = Object.create(Humanoid.prototype);

//Create skill method for hero
Hero.prototype.kamehameha = function (obj) {
  let damage = Math.ceil(Math.random()*3);
  //Remove hp from object when this function is called
  obj.hp -= damage;

  //Check object's hp, if it's <= 0 then call destroy() function
  if (obj.hp <= 0) {
    return `${obj.name} has no hp left. ${obj.destroy()}`;
  }

  //if not then return message showing how much damage was done.
  return `${this.name} has performed Dead Beam on ${obj.name}. ${obj.takeDamage()}(${damage} dmg). ${obj.name}'s remaining hp is ${obj.hp}.`
  }


//Create 2 new characters villain and hero  
const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Cell',
  faction: 'Android',
  weapons: [
    'Dead Beam',
    'Ki Blast',
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
  hp: 10,
  name: 'Songoku',
  faction: 'Human',
  weapons: [
    'Martial Art',
    'Energy Blast',
  ],
  language: 'Common Tongue',
});

console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));
console.log(hero.kamehameha(villain));
console.log(villain.deadbeam(hero));



