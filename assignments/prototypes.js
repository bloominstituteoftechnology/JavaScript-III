/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(object) {
  this.createdAt = object.createdAt;
  this.name = object.name;
  this.dimensions = object.dimensions;
}

GameObject.prototype.destroy = function() { return `${this.name} was removed from the game.`; }

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterObject) {
  GameObject.call(this, characterObject);
  this.healthPoints = characterObject.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() { return `${this.name} took damage.`; }

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidObject) {
  CharacterStats.call(this, humanoidObject);
  this.team = humanoidObject.team;
  this.weapons = humanoidObject.weapons;
  this.language = humanoidObject.language;
}


Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() { 
  return `${this.name} offers a greeting in ${this.language}.`;
}
Humanoid.prototype.damage = function(opponent) {
  opponent.healthPoints -= this.weaponDamage;
  return `${this.name} damages ${opponent.name} for ${this.weaponDamage}. ${opponent.name}'s health is at ${opponent.healthPoints}`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(heroObject) {
  Humanoid.call(this, heroObject);
  this.weaponDamage = heroObject.weaponDamage;
  this.maxHealth = heroObject.healthPoints;
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.useHealthPotion = function(potionSize) {
  if (this.healthPoints < this.maxHealth) {
    this.healthPoints += this.potionSize;
    return `${this.name} uses a health potion, {this.name} healed for +${this.potionSize}. Health at ${this.healthPoints} now.`;
  } else {
    return `${this.name} tried to use a health potion but it had no affect! Health at ${this.healthPoints}.`;
  }
}

function Villian(villianObject) {
  Humanoid.call(this, villianObject);
  this.weaponDamage = villianObject.weaponDamage;
}

Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.useTrick = function(opponent) {
  return `${this.name} threw sand into the ${opponent.name}'s eyes!`
}

const tina = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 2,
    height: 3,
  },
  healthPoints: 15,
  name: 'Tina',
  team: 'Kiss-my-anthia',
  weapons: [
    'fists',
  ],
  language: 'Old English',
  weaponDamage: Math.floor((Math.random() * 3) + 1),
});

const king = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 5,
    height: 7,
  },
  healthPoints: 15,
  name: 'King',
  team: 'Lunesta',
  weapons: [
    'Theodore\'s Axe',
  ],
  language: 'Bog',
  weaponDamage: Math.floor((Math.random() * 3) + 1),
});


function startGame() {
  console.log(`${tina.name} was created at ${tina.createdAt}`);
  console.log(`${king.name} was created at ${king.createdAt}`);
  while (tina.healthPoints >= 1) {
    console.log(tina.damage(king));
    console.log(king.damage(tina));

    if (tina.healthPoints < 1) {
      console.log(`${tina.name} runs away before death`);
      console.log(tina.destroy());
      break;
    }
    if (king.healthPoints < 1) {
      console.log(`${king.name} runs away before death`);
      console.log(king.destroy());
      break;
    }

  }
}

startGame();