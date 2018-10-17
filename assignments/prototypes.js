/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing
  several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom
  of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/* David Freitag made this awesome dice roller and explained how it worked to me. */
function dice(sides, numberOfDie) {
  let working = [];
  let min = 1;
  for (let i = 0; i < numberOfDie; i++) {
      working.push(Math.floor(Math.random() * (sides - min + 1)) + min);
  }
  return working.reduce((total, items) => total + items, 0);
}
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimentions = attributes.dimensions;
  this.destoy = function(opponentName, weapon, damage) {
    return `${this.name} was slain by ${opponentName}'s ${weapon} after suffering ${damage} of damage.`;
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
  GameObject.call(this, attributes)
  this.hp = attributes.hp;
  this.name = attributes.name;
  this.alignment = attributes.alignment;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(opponentName, weapon, damage) {
  this.hp -= damage;
  if (this.hp <= 0) {
    return this.destroy(opponentName, weapon, damage);
  }

  else {
    return `${this.name} was attacked by ${opponentName} weilding a ${weapon}, suffering ${damage} of damage.
      ${this.name} now ${this.hp} health points remaining`;
  }
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
 
function Humanoid(attributes) {
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}

/* Stretch Task ~ Hero Constructor */
function Hero(attributes) {
  Humanoid.call(this, attributes);
}

/* Stretch Task ~ Hero Prototype */
Hero.prototype = Object.create(Humanoid.prototype);

/* Stretch Task ~ Healthtaker (Hero) */
Hero.prototype.glaveSweep = function(target, weapon) {
  let damage = dice(8, 1);
  return target.takeDamage(this.name, this.weapons[weapon], damage)
}

/* Stretch Task ~ Villian Constructor */
function Villian(attributes) {
  Humanoid.call(this, attributes);
}

/* Stretch Task ~ Villian Prototype */
Villian.prototype = Object.create(Humanoid.prototype);

/* Stretch Task ~ Healthtaker (Villian) */
Villian.prototype.shadowStrike = function(target, weapon) {
  let damage = dice(8,2);
  return target.takeDamage(this.name, this.weapons[weapon], damage)
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
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which
  //   could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

/* Stretch Task ~ The Dukeout */
