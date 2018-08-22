/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several 
  constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the 
  page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(obj){
  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(obj){
  GameObject.call(this, obj);
  this.hp = obj.hp;
  this.name = obj.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(amount){
  this.hp -= amount;
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

function Humanoid(obj){
  CharacterStats.call(this, obj);
  this.faction = obj.faction;
  this.weapons = obj.weapons;
  this.language = obj.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


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
console.log(mage.takeDamage(1)); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which 
  //    could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


// Villian constructor
function Villian(obj){
  Humanoid.call(this, obj);
  this.evilCreed = obj.evilCreed;
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.evilBanter = function(hero){
  return `I'm ${this.name}, and you ${hero} have no chance in stopping my evil plan`;
}

Villian.prototype.win = function(){
  return 'Nothing can stop my evil plan';
}

Villian.prototype.die = function(){
  return 'You have defeated me this time, but I will rise again';
}

// Hero constructor
function Hero(obj){
  Humanoid.call(this, obj);
  this.herosCreed = obj.herosCreed;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.banter = function(villian){
  return `I ${this.name}, shall defeat you ${villian}, and restore peace to the kingdom`;
}

Hero.prototype.win = function(){
  return 'Defeating scum like you is all in a days work';
}

Hero.prototype.die = function(){
  return `This can't be, the hero is supposed to win`;
}


// Villian
const villian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 3,
  },
  hp: 10,
  name: 'Gorgo',
  faction: 'Death Orcs',
  weapons: [
    'Archfiend\'s Hammer',
    'Spear of the Soul Ripper',
  ],
  language: 'Orc',
  evilCreed: 'To cast the world in darkness'
});

// Hero
const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Sir Eric of the Copa',
  faction: 'Knights of the Light',
  weapons: [
    'Sword of Truth',
    'Dagger of Justice',
  ],
  language: 'Language of the Gods',
  herosCreed: 'To preserve the kingdom in light'
});

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function fight(hero, villian){
  console.log('\nAn Epic Battle');
  console.log(hero.banter(villian.name));
  console.log(villian.evilBanter(hero.name));

  // Fight based on weighted scale
  console.log('\nLet The Battle Begin');
  while(hero.hp > 0 && villian.hp > 0)
  {
    if(getRandomInt(10) < 6){
      // villian gets hit
      villian.takeDamage(getRandomInt(3));
      console.log(`The hero strikes a blow. ${villian.name}: ${villian.hp}hp, ${hero.name}: ${hero.hp}hp`)
    }

    else{
      // hero takes damage
      hero.takeDamage(getRandomInt(2));
      console.log(`The villian strikes a blow. ${villian.name}: ${villian.hp}hp, ${hero.name}: ${hero.hp}hp`)
    }
  }

  // Hero wins
  if(villian.hp <= 0){
    console.log(`${hero.name} has won!!!!`);
    console.log(villian.die());
    console.log(hero.win());
  }

  // Villian wins
  else{
    console.log(`${villian.name} has defeated ${hero.name}`);
    console.log(hero.die());
    console.log(villian.win());
  }
}


fight(hero, villian);
