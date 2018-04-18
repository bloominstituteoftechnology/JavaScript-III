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
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;

  GameObject.prototype.destroy = function () {
    return 'Object was removed from the game.'
  };
}
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes1) {
  GameObject.call(this, attributes1);
  this.hp = attributes1.hp;
  this.name = attributes1.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
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

function Humanoid(attributes2) {
  CharacterStats.call(this, attributes2);
  this.faction = attributes2.faction;
  this.weapons = attributes2.weapons;
  this.language = attributes2.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
}


 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
// STRETCH GOAL
// * Create Villian and Hero classes that inherit from the Humanoid class.  
function Hero(attributes) {
  Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.demonSwordAttacked = function () {
  this.hp -= 6;
  if(this.hp < 0) {
    return this.destroy();
  }
  else;
  {
  return this.hp;
  }
}

function Villian(attributes) {
  Humanoid.call(this, attributes);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.spinningSwordAttacked = function () {
  return this.hp = this.hp - 10;
}

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
// * Create two new objects, one a villian and one a hero and fight it out with methods!
  const hero1 = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 14,
    name: 'Link Hero of Time',
    faction: 'Knight Swordsman',
    weapons: [
      'Master Sword',
      'Hylian Shield',
    ],
    language: 'Common Toungue',
  });

  const villian1 = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 6,
      height: 4,
    },
    hp: 20,
    name: 'Ganondorf King of Theives',
    faction: 'Gerudo',
    weapons: [
      'Sword of Demise'
    ],
    language: 'Common Toungue',
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
  console.log(hero1.demonSwordAttacked())
  console.log(hero1.demonSwordAttacked())
  console.log(hero1.demonSwordAttacked())
  
  // Stretch task: 
  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  