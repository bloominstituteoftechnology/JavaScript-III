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

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:
function GameObject(params) {
  this.createdAt = params.createdAt;
  this.dimensions = params.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(params) {
  GameObject.call(this, params);
  this.hp = params.hp;
  this.name = params.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(params) {
  CharacterStats.call(this, params);
  this.faction = params.faction;
  this.weapons = params.weapons;
  this.language = params.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

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
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// Stretch

// Constructors
// Hero constructor
function Hero(params) {
  Humanoid.call(this, params);
  this.attackDmg = params.attackDmg; // attackDmg (rng)
};

Hero.prototype = Object.create(Humanoid.prototype);

// attack takes in 1 param, enemy.
// Attacks the enemy and returns no string, but outputs a console.log of info.
Hero.prototype.attack = function (enemy) {
  // If the player is dead, return you lost.
  if (this.hp <= 0) {
    this.destroy();
    return `\n${this.name} is dead.\n You lost...`;
  }

  // If the enemy is dead, return you won.
  if (enemy.hp <= 0) {
    enemy.destroy();
    return `\n${enemy.name} is dead.\n You won!`;
  }
  
  enemy.hp -= this.attackDmg;
  enemy.takeDamage();
  console.log(`\n${this.name} attacked ${enemy.name} with ${this.attackDmg} and ${enemy.name} is now at ${enemy.hp} health.`);
  console.log(vala.attack.call(vala, malik));
  return "";
};

// Villian constructor
function Villian(params) {
  Humanoid.call(this, params);
  this.attackDmg = params.attackDmg; // attackDmg (rng);
};

Villian.prototype = Object.create(Humanoid.prototype);

// atkMc takes in 1 param, mc.
// atkMc attacks the Hero character.
// I seperated the two attack functions because of the user prompt message was getting in the way of the
// return in the attack(enemy) function and this allows me to add in the enemy to attack the player and
// have a more dynamic game.
Villian.prototype.attack = function(mc) {
  // If the enemy is dead, return you won.
  if (this.hp <= 0) {
    this.destroy();
    return `\n${this.name} is dead. You won!`;
  }

  // If the player is dead, return you lost.
  if (mc.hp <= 0) {
    mc.destroy();
    return `\n${mc.name} is dead. You lost...`;
  }
  
  mc.hp -= this.attackDmg;
  mc.takeDamage();
  console.log(`\n${this.name} attacked ${mc.name} with ${this.attackDmg} and ${mc.name} is now at ${mc.hp} health.`);

  // Return to user prompt.
  ask();

  return "";
}

// End of Constructors
// Functions

// User prompt section
// begin takes in no params and returns a string.
// begin is launched at the start of the program.
function begin() {
  return "\nBegin your new adventure!\n";
}

// ask takes in no params and keeps looping until the player has won or lost.
function ask() {
  // Check if characters are dead, if so, end the game.
  const dead = checkIfDead.call(vala);
  const mcdead = checkIfDead.call(malik);

  if (dead || mcdead) {
    process.exit();
  }
  else {
    console.log("\nType \'attack\' to attack!");
    // Get user input
    prompt.get('attack', function(err, result) {
      if (result.attack.toString() === "attack") {
        console.log(malik.attack.call(malik, vala));
      }
      else {
        // If the user inputed anything else but 'attack'
        console.log("\nNot an input. Please type \'attack\'");
        ask();
      }
    });
  }
};

// End of user prompt

// Checks if the character is dead, if so return a console.log stating and return true.
// else, return false.
function checkIfDead() {
  if (this.hp <= 0) {
    console.log(`\n${this.name} is dead.`);
    return true;
  }
  else {return false}
}

// // attack takes in 1 param, enemy.
// // Attacks the enemy and returns no string, but outputs a console.log of info.
// function attack(enemy) {
//   // If the player is dead, return you lost.
//   if (this.hp <= 0) {
//     return `\n${this.name} is dead.\n You lost...`;
//   }

//   // If the enemy is dead, return you won.
//   if (enemy.hp <= 0) {
//     enemy.destroy();
//     return `\n${enemy.name} is dead.\n You won!`;
//   }
  
//   enemy.hp -= this.attackDmg;
//   enemy.takeDamage();
//   console.log(`\n${this.name} attacked ${enemy.name} with ${this.attackDmg} and ${enemy.name} is now at ${enemy.hp} health.`);
//   console.log(atkMc.call(vala, malik));
//   return "";
// };

// atkMc takes in 1 param, mc.
// atkMc attacks the Hero character.
// I seperated the two attack functions because of the user prompt message was getting in the way of the
// return in the attack(enemy) function and this allows me to add in the enemy to attack the player and
// have a more dynamic game.
// function atkMc(mc) {
//   // If the enemy is dead, return you won.
//   if (this.hp <= 0) {
//     return `\n${this.name} is dead. You won!`;
//   }

//   // If the player is dead, return you lost.
//   if (mc.hp <= 0) {
//     mc.destroy();
//     return `\n${mc.name} is dead. You lost...`;
//   }
  
//   mc.hp -= this.attackDmg;
//   mc.takeDamage();
//   console.log(`\n${this.name} attacked ${mc.name} with ${this.attackDmg} and ${mc.name} is now at ${mc.hp} health.`);

//   // Return to user prompt.
//   ask();

//   return "";
// }

// Get's a random rounded up int between two numbers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// End of functions

// Hero character
let malik = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Malik',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
  attackDmg: getRandomInt(1, 5),
});

// Villian character
let vala = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Vala',
  faction: 'Cryptids Guild',
  weapons: [
    'Sword of Plades',
  ],
  language: 'Elvish',
  attackDmg: getRandomInt(1, 5),
});

// Trying user prompts
var prompt = require('prompt');

prompt.start();
console.log(begin());
ask();
// End of user prompt section

// Simulated version
// console.log(attack.call(malik, vala));
// console.log(attack.call(vala, malik));
// console.log(attack.call(malik, vala));
// console.log(attack.call(vala, malik));
// console.log(attack.call(malik, vala));
// console.log(attack.call(vala, malik));