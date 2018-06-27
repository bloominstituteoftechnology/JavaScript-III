/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
let alivePlayers = [];

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

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
  alivePlayers.push(this.name);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.destroy = function () {
  alivePlayers = alivePlayers.filter(player => player !== this.name);
  
  return `${this.name} was removed from the game.`;
};

CharacterStats.prototype.takeDamage = function () {
  this.hp -= 2;
  if (this.hp > 0) {
    return `${this.name} took damage. Their health points have been decreased to ${this.hp}.`;
  } else {
    return this.destroy();
  }
  
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
Humanoid.prototype.greet = function (character) {
  return `${this.name} offers a greeting to ${character.name} in ${this.language}.\n` + character.acceptGreeting(this);
};
Humanoid.prototype.acceptGreeting = function (greeter){
  if (greeter.language === this.language) {
    return `${this.name} accepts and returns ${greeter.name}'s greeting.`
  } else {
    return `${this.name}: I do not understand you. You must be an enemy. I must attack you now.\n` + greeter.takeDamage();
  }
}

function Villian(attributes) {
  Humanoid.call(this, attributes);
}

Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.attack = function (victim){
  return victim.takeDamage() + (`\n${this.name}: Muahaha! My evil plan is working!`);
}

function Hero(attributes) {
  Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.rescue = function (victim) {
  victim.hp += 2;
  return(`${victim.name}'s health points has been restored to ${victim.hp}! ${this.name} to the rescue!`)
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

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    hp: 15,
    name: 'Captain Evil',
    faction: 'Evil Cave',
    weapons: [
      'Magic',
      'Sword',
    ],
    language: 'French',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    hp: 20,
    name: 'Superman',
    faction: 'Secret lab',
    weapons: [
      'Justice',
    ],
    language: 'Common Tongue',
  });

  console.log(alivePlayers);
  console.log('1: ' + mage.createdAt); // Today's date
  console.log('2: ' + archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log('3: ' + swordsman.hp); // 15
  console.log('4: ' + mage.name); // Bruce
  console.log('5: ' + swordsman.faction); // The Round Table
  console.log('6: ' + mage.weapons); // Staff of Shamalama
  console.log('7: ' + archer.language); // Elvish
  console.log('8: ' + archer.greet(swordsman)); // Lilith offers a greeting in Elvish.
  console.log(mage.greet(swordsman));
  console.log('9: ' + mage.takeDamage()); // Bruce took damage.
  console.log('10: ' + swordsman.destroy()); // Sir Mustachio was removed from the game.
  

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  
  
  console.log(alivePlayers);
  console.log('\n 11: ' + villian.attack(mage));
  console.log('\n 12: ' + hero.rescue(mage));
  console.log('\n 13: ' + villian.attack(mage));
  console.log('\n 14: ' + villian.attack(mage) + '\n');
  console.log(alivePlayers);
  