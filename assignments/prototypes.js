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
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  //return `${this.name} was removed from the game`;
  console.log(`${this.name} was removed from the game`);
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(damage) {
  this.hp -= damage;
  // return `${this.name} took ${damage} points of damage.`;
  console.log(`${this.name} took ${damage} points of damage.`);
};

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

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

const heroBar = document.getElementsByClassName('goodGuy')[0];
const villainBar = document.querySelector('.badGuy');
const heroStatus = document.getElementById('heroStatus');
const villainStatus = document.getElementById('villainStatus');
const battleButton = document.getElementById('battleButton');

function Villain(attributes) {
  Humanoid.call(this, attributes);
  this.spell = attributes.spell;
}

Villain.prototype = Object.create(Humanoid.prototype);

/* Villain.prototype.fireball = function(defender) {
  console.log(`${this.name} hurls a fireball at ${defender.name}.`);
  defender.takeDamage(1);
  if (defender.hp <= 0) {
    defender.destroy();
  }
}; */


function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.spell = attributes.spell;
}

Hero.prototype = Object.create(Humanoid.prototype);


const badGuy = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 50,
  name: 'Dr. Evil',
  faction: 'Villaindia',
  weapons: [
    'Magic wand',
  ],
  language: 'Villainese',
  spell: {
    name: 'fireball',
    damage: 5,
  },
});

const goodGuy = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 50,
  name: 'Lightning Man',
  faction: 'Hero Village',
  weapons: [
    'Charm', 'Guile',
  ],
  language: 'Gamehenge',
  spell: {
    name: 'lightning',
    damage: 5},
});


function cast(caster, defender) {
  console.log(`${caster.name} casts ${caster.spell.name} at ${defender.name}!`);
  const damage = Math.floor(Math.random() * caster.spell.damage);
  defender.takeDamage(damage);
}

function updateHealthBars() {
  heroBar.style.height = (goodGuy.hp * 5) + 'px';
  villainBar.style.height = (badGuy.hp * 5) + 'px';
}

function updateStatus() {
  heroStatus.innerText = `${goodGuy.name}: ${goodGuy.hp}`;
  villainStatus.innerText = `${badGuy.name}: ${badGuy.hp}`;

}
function battle(attacker, defender) {
  while (attacker.hp > 0 && defender.hp > 0) {
    cast(attacker, defender);
    if (defender.hp <= 0) {
      console.log(`${defender.name} has perished.`);
      defender.destroy();
      break;
    }
    cast(defender, attacker);
    if (attacker.hp <= 0) {
      console.log(`${attacker.name} has perished.`);
      attacker.destroy();
      break;
    }
    updateHealthBars();
    updateStatus();
  }
}

console.dir(badGuy);
console.dir(goodGuy);
battle(badGuy, goodGuy);
