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

const GameObject = function(obj) {

  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;

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

const CharacterStats = function(obj) {

  GameObject.call(this, obj);
  this.hp = obj.hp;
  this.name = obj.name;

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

const Humanoid = function(obj) {

  CharacterStats.call(this, obj);
  this.faction = obj.faction;
  this.weapons = obj.weapons;
  this.language = obj.language;

}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {

  return `${this.name} offers a greeting in ${this.language}`;

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

// Allows reading from console in node.js
const readline = require('readline-sync');

// Fighter constructor, inherits from Humanoid
const Fighter = function(obj) {

  Humanoid.call(this, obj);

}

Fighter.prototype = Object.create(Humanoid.prototype);

// Attack function. Takes in another fighter, returns whether the attack resulted in a death.
Fighter.prototype.attack = function(opponent) {

  let weapon = Math.floor(Math.random() * this.weapons.length);
  let damage = Math.floor(Math.random() * this.weapons[weapon].maxDamage + 1);

  return opponent.takeDamage(damage);

}

// Applies damage to self, returns if self died
Fighter.prototype.takeDamage = function(damage) {

  console.log(CharacterStats.prototype.takeDamage.call(this));
  this.hp -= damage;
  console.log(`${this.name}'s current HP: ${this.hp}`);

  return this.hp <= 0;

}

// Villian constructor, inherits from Fighter
const Villian = function(obj) {

  Fighter.call(this, obj);

}

Villian.prototype = Object.create(Fighter.prototype);

// Hero constructor, inherits from Fighter
const Hero = function(obj) {

  Fighter.call(this, obj);

}

Hero.prototype = Object.create(Fighter.prototype);

// Hero attack function, overwritten to allow user input
Hero.prototype.attack = function(opponent) {

  console.log("Choose your weapon by entering in the number of the weapon:");

  for (let i = 0; i < this.weapons.length; i++) {

    console.log(`[${i}] ${this.weapons[i].name}`);

  }

  let chosenWeapon = -1;

  while (chosenWeapon == -1 || isNaN(chosenWeapon) || chosenWeapon > this.weapons.length - 1) {

    chosenWeapon = readline.question("Weapon: ");

  }

  let damage = Math.floor(Math.random() * this.weapons[chosenWeapon].maxDamage + 1);

  console.log();

  return opponent.takeDamage(damage);

}

// Sample of game
function playGame() {

  // Hero (player) object
  let myHero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Hero',
    faction: 'Forest Kingdom',
    weapons: [
      {name: "Dagger", maxDamage: 20},
      {name: "Sword", maxDamage: 35}
    ],
    language: 'JavaScript',
  });

  // Villian (AI) object
  let myVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 75,
    name: 'Villian',
    faction: 'Mountain Kingdom',
    weapons: [
      {name: "Dagger", maxDamage: 25},
      {name: "Sword", maxDamage: 45}
    ],
    language: 'Pig Latin',
  });

  // Introductions
  console.log();
  console.log(myHero.greet());
  console.log(myVillian.greet());

  // Variables
  let playing = true;
  let turn = 1;

  // Game loop
  while (playing) {

    console.log();

    if (turn === 1) { // Hero's turn

      let victory = myHero.attack(myVillian);

      if (victory) {

        console.log(myVillian.destroy());
        console.log(`${myHero.name} has won!`);
        playing = false;

      }

      turn = 2;

    }

    else { // Villian's turn

      let victory = myVillian.attack(myHero);

      if (victory) {

        console.log(myHero.destroy());
        console.log(`${myVillian.name} has won!`);
        playing = false;

      }

      turn = 1;

    }

  }

}

playGame();
