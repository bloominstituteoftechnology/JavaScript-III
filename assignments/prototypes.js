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
function GameObject(gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
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
function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
  this.attack = charAttributes.attack;
  this.defense = charAttributes.defense;
  this.critical = false;
  this.name = charAttributes.name;
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
function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}

Humanoid.prototype.attackTarget = function (target) {
  return target.hp -= this.attack - target.defense;
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
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

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
// * Create Villian and Hero classes that inherit from the Humanoid class.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!



class Hero extends Humanoid {

  constructor(heroAttributes) {
    super(heroAttributes);
  }
}
const link = new Hero({
  name: "Link",
  language: "Hylian",
  hp: 21,
  attack: 5,
  defense: 4,
  weapons: ["Bow", "Master Sword"],
  critical: false
});

console.log(link); //?
class Villian extends Humanoid {
  constructor(villianAttributes) {
    super(villianAttributes);
  }

}

const ganondorf = new Villian({
  name: "Ganondorf",
  language: "Hylian",
  hp: 12,
  attack: 7,
  defense: 3,
  critical: false
});


function battle(player1, player2) {

  let player1WinResults = `${player1.name} has won!`;
  let player2WinResults = `${player2.name} has won!`;
  let tieResults = `It is a tie!`;

  while (player1.hp > 0 || player2.hp > 0) {

    player1.attackTarget(player2);
    player2.attackTarget(player1);
    console.log(`${player1.name} HP: ${player1.hp}`);
    console.log(`${player2.name} HP: ${player2.hp}`);
    if (player1.hp <= 0 && player2.hp <= 0) {
      return tieResults;
    } else if (player1.hp <= 0) {
      return player2WinResults;
    } else if (player2.hp <= 0) {
      return player1WinResults;
    }
  }

}

console.log(battle(link, ganondorf));