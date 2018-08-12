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

function GameObject(gameAttr) {
  this.createdAt = gameAttr.createdAt;
  this.dimensions = gameAttr.dimensions;
  }
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game,`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttr) {
  GameObject.call(this, charAttr);
  this.hp = charAttr.hp;
  this.name = charAttr.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
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

function Humanoid(humanAttr) {
  CharacterStats.call(this, humanAttr);
  this.faction = humanAttr.faction;
  this.weapons = humanAttr.weapons;
  this.language = humanAttr.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
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
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villian(villAttr) {
  Humanoid.call(this, villAttr);
  this.weapons = villAttr.weapons;
  this.attack = villAttr.attack;
}
Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.stab = function(villian) {
  //print villian stabs hero
  console.log(`${this.name} stabs ${hero.name}`);
  //hero loses hp
  hero.hp -= 3;
  //print hero loses hp
  console.log(`${hero.name} took damage 5 times`);
  if (hero.hp <= 0) {
    //if hero has 0 hp, villian wins
    console.log(`${hero.name} has 0 hp. ${hero.name}:loser ${this.name}:winner!`);
  }
  else {
    //otherwise, print hero hp
    console.log(`${hero.name} has ${hero.hp} hp.`)
  }
}


function Hero(heroAttr) {
  Humanoid.call(this, heroAttr);
  this.weapons = heroAttr.weapons;
  this.attack = heroAttr.attack;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.pierce = function(hero) {
  //print hero pierces villian
  console.log(`${this.name} pierces ${villian.name}`);
  //villian loses hp
  villian.hp -= 5;
  //print villian loses hp
  console.log(`${villian.name} took damage 3 times`);
  if (villian.hp <= 0) {
    //if villian has 0 hp, hero wins
    console.log(`${villian.name} has 0 hp. ${villian.name}:loser ${this.name}:winner!`);
  }
  else {
    //otherwise, print villian hp
    console.log(`${villian.name} has ${villian.hp} hp.`);
  }
}


const villian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 3,
    height: 7,
  },
  hp: 48,
  name: 'Nero',
  faction: 'Knights of Mars',
  weapons: [
    'Sword of Ruin',
  ],
  language: 'Common Toungue',
  attack: 'Stab',
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 3,
    height: 6,
  },
  hp: 42,
  name: 'Tiberius',
  faction: 'Order of The Fallen God',
  weapons: [
    'Sword of Prosperity',
  ],
  language: 'Common Toungue',
  attack: 'Pierce',
});


while (hero.hp > 0 && villian.hp > 0) {
  hero.pierce(villian);
  if (villian.hp > 0) {
    villian.stab(hero);
  }
}  


