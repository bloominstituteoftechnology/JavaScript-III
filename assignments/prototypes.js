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
function GameObject(optionsObj) {
  this.createdAt = optionsObj.createdAt;
  this.dimensions = optionsObj.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(optionsObj) {
  GameObject.call(this, optionsObj);
  this.hp = optionsObj.hp;
  this.name = optionsObj.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.constructor = CharacterStats;

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
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

function Humanoid(optionsObj) {
  CharacterStats.call(this, optionsObj);
  this.faction = optionsObj.faction;
  this.weapons = optionsObj.weapons;
  this.language = optionsObj.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:


<<<<<<< HEAD
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
=======
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

function Hero(optionsObj) {
  Humanoid.call(this, optionsObj);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.magicMissile = function (villain) {
  villain.hp = villain.hp - (Math.floor(Math.random() * 1) + 1)
  console.log(`${this.name} fires a Magic Missile at ${villain.name}`)
}

Hero.prototype.checkHP = function () {
  if (this.hp <= 0) {
    console.log(`${this.destroy()}`)
  } else {
    console.log(`${this.name} has ${this.hp} remaining`);
  }
}

function Villain(optionsObj) {
  Humanoid.call(this, optionsObj)
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.constructor = Villain;

Villain.prototype.acidArrow = function (hero) {
  hero.hp = hero.hp - (Math.floor(Math.random() * 2) + 1)
  console.log(`${this.name} fires an Acid Arrow at ${hero.name}`);
}

Villain.prototype.checkHP = function () {
  if (this.hp <= 0) {
    console.log(`${this.destroy()}`);
  } else {
    console.log(`${this.name} has ${this.hp} remaining`);
  }
}

const jace = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  hp: 75,
  name: 'Jace Beleren',
  faction: 'Vryn',
  weapons: [
    'Tome of Vryn'
  ],
  language: 'Words of the Planeswalkers',
});

const tezzeret = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 5,
  },
  hp: 115,
  name: 'Tezzeret',
  faction: 'Alara',
  weapons: [
    'The Artificer'
  ],
  language: 'Words of the Planeswalkers',
});

function turnSimulator(hero, villain) {
  console.log(`Game Start.`)
  for (let i = 99; i > 0; i--) {
    if (hero.hp <= 0 || villain.hp <= 0) {
      console.log(`Game is over.`);
    } else {
      if ((Math.floor(Math.random() * 100) + 1) % 2 === 0) {

        hero.checkHP();
        hero.magicMissile(villain);
        villain.checkHP();
        console.log(`----end of turn----`)

      } else {
        villain.checkHP();
        villain.acidArrow(hero);
        hero.checkHP();
        console.log(`----end of turn----`)
      }
    }
  }
}

console.log(turnSimulator(jace, tezzeret));
>>>>>>> d1e1379... Complete stretch AND turn simulator
