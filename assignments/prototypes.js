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
function GameObject (attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats (attributes) {
  this.hp = attributes.hp;
  this.name = attributes.name;  
  GameObject.call(this, attributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
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
function Humanoid (attributes) {
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;  
  CharacterStats.call(this, attributes);
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

  function Hero(attributes) {
    Humanoid.call(this, attributes);
  }
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.absorbAttack = function(villian) {
  villian.hp = villian.hp - 3;
  this.hp = this.hp + 3;
  return villian.hp <= 0 ? (`${this.name} attacked ${villian.name} and absorbed 3 hp, now ${this.name}'s health is ${this.hp} and ${villian.name}'s health is ${villian.hp}.`, villian.destroy())
                        : `${this.name} attacked ${villian.name} and absorbed 3 hp, now ${this.name}'s health is ${this.hp} and ${villian.name}'s health is ${villian.hp}.`;
  };

  function Villian(attributes) {
    Humanoid.call(this, attributes);
  }
  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.superAttack = function(hero) {
    hero.hp = hero.hp - 4;
    return hero.hp <= 0 ? (`${this.name} attacked ${hero.name}, now ${this.name}'s health is ${this.hp} and ${hero.name}'s health is ${hero.hp}.`, hero.destroy())
                        : `${this.name} attacked ${hero.name}, now ${this.name}'s health is ${this.hp} and ${hero.name}'s health is ${hero.hp}.`;
  };

  const medievalKnight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 5,
    },
    hp: 15,
    name: 'Jon Snow',
    faction: 'Stark Family',
    weapons: [
      'Longclaw Sword',
    ],
    language: 'Common Tongue',
  });

  const medievalBitch = new Villian ({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 4,
    },
    hp: 20,
    name: 'Cersei Lannister',
    faction: 'Lannister Family',
    weapons: [
      'Valyrian Fire',
    ],
    language: 'Common Tongue',
  });
console.log(medievalKnight.name);
console.log(medievalKnight.weapons);
console.log(medievalKnight.dimensions);
console.log(medievalBitch.language);
console.log(medievalBitch.faction);

medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
medievalBitch.superAttack(medievalKnight);
medievalKnight.absorbAttack(medievalBitch);
console.log(medievalBitch.superAttack(medievalKnight));
console.log(medievalKnight.absorbAttack(medievalBitch));
