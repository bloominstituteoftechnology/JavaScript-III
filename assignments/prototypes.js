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
  this.destroy = function() {
    return `${this.name} was removed from the game`
  };
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
  this.takeDamage = function() {
    return `${this.name} took damage.`
  }
}
CharacterStats.prototype = Object.create(GameObject.prototype);
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

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

// const swordsman = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 2,
//   },
//   hp: 15,
//   name: 'Sir Mustachio',
//   faction: 'The Round Table',
//   weapons: [
//     'Giant Sword',
//     'Shield',
//   ],
//   language: 'Common Toungue',
// });
//
// const archer = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//   },
//   hp: 10,
//   name: 'Lilith',
//   faction: 'Forest Kingdom',
//   weapons: [
//     'Bow',
//     'Dagger',
//   ],
//   language: 'Elvish',
// });
//
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


// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
  this.level = villianAttributes.level;
  this.salves = villianAttributes.salves;
  this.heal = function() {
    if (this.salves === 0) {
      return `${this.name} attempted to use a healing salve even though healing goes against everything they stand but forgot they were out. `
    } else {
      this.salves -= 1;
      let healNum = Math.floor(Math.random() * this.level)
      this.hp = this.hp + healNum;
      return `${this.name} uses a healing salve for ${healNum} HP regeneration because healing is okay if it's only them.`
    };
  } //end heal
  this.attack = function(opponent) {
    if (opponent.hp <= 0) {
      return `Dude, ${opponent.name} is already out of the game. Stop beating a dead horse.`
    } else {
      let damageNum = Math.floor(Math.random() * this.level);
      if (damageNum === 0) {
        return `${this.name} evilly tried to attack with their evil ${this.weapons} but missed.`
      } else {
        opponent.hp = opponent.hp - damageNum;
        if (opponent.hp <= 0) {
          return opponent.destroy();
        } else {
          return `${this.name} wickedly uses ${this.weapons} for ${damageNum} dark HP damage to ${opponent.name}.`;
        } //end successful hit
      } //end destroy or hit
    }
  } //attack
}
Villian.prototype = Object.create(Humanoid.prototype);


function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.level = heroAttributes.level;
  this.salves = heroAttributes.salves;
  this.heal = function() {
    if (this.salves === 0) {
      return `${this.name} attempted to use a healing salve from that nice witch but forgot they were out. `
    } else {
      this.salves -= 1;
      let healNum = Math.floor(Math.random() * this.level)
      this.hp = this.hp + healNum;
      return `${this.name} uses a healing salve for ${healNum} HP regeneration`
    };
  } //end heal
  this.attack = function(opponent) {
    if (opponent.hp <= 0) {
      return `Dude, ${opponent.name} is already out of the game. Stop beating a dead horse.`
    } else {
      let damageNum = Math.floor(Math.random() * this.level);
      if (damageNum === 0) {
        return `${this.name} heroically tried to attack with their light and fluffy ${this.weapons} but missed.`
      } else {
        opponent.hp = opponent.hp - damageNum;
        if (opponent.hp <= 0) {
          return opponent.destroy();
        } else {
          return `${this.name} bravely uses ${this.weapons} for ${damageNum} HP damage to ${opponent.name}.`;
        } //end successful hit
      } //end destroy or hit
    }
  } //end attack
}
Hero.prototype = Object.create(Humanoid.prototype);

const snowWhite = new Hero({
  createdAt: new Date(),
  hp: 20,
  name: 'Snow White',
  faction: 'The Princesses',
  weapons: [
    'dwarf magic',
  ],
  language: 'Common Toungue',
  level: 6,
  salves: 2,
});

const evilQueen = new Villian({
  createdAt: new Date(),
  hp: 10,
  name: 'Evil Queen',
  faction: 'Terrible Stepmothers',
  weapons: [
    'poison apple'
  ],
  language: 'Common Toungue',
  level: 5,
  salves: 2,
})

//character object names: snowWhite, evilQueen
//method options:
//.attack(opponent) to go after that terrible other person!
//.heal() attempt to get back in the game with some magic salve. Or at least stall the inevitable embrace of death.

console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(evilQueen.heal());
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.hp);
