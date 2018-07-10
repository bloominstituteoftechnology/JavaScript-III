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

/*  ====================== define constructor function=========  */

function GameObject(objectAttributes) {
  //Properties
  this.createdAt = objectAttributes.createdAt;
  this.dimensions = objectAttributes.dimensions;
}

//Methods
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

function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes); //this inherits from GameObject Attributes
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
//This line is I think what inherits methods?!?! Links everything!?!?
//New methods go below this line.

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
 
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
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

  function Villian(villianAttributes) {
    Humanoid.call(this, villianAttributes);
    this.spells = villianAttributes.spells;
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  Villian.prototype.cast = function () {
    return `${this.name} casts a ${this.spells} spell.`;
  }

  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
    this.abilities = heroAttributes.abilities;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.ability = function () {
    return `${this.name} uses a ${this.abilities} ability.`;
  }

  const giant = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 8,
    },
    hp: 25,
    name: 'Forest Giant',
    faction: 'Giant Clan',
    weapons: [
      'Club',
      'Fist',
    ],
    language: 'Giantish',
    spells: [
      'curse',
      'mock',
    ],
  });

  const barbarian = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 6,
    },
    hp: 20,
    name: 'Connan',
    faction: 'Barbarian Clan',
    weapons: [
      'sword',
      'sheild',
    ],
    language: 'Barbarish',
    abilities: 'defense',
  });


  console.log(giant.createdAt);
  console.log(barbarian.createdAt);
  console.log(barbarian.hp);
  console.log(giant.name);
  console.log(giant.faction);
  console.log(barbarian.weapons);
  console.log(giant.weapons);
  console.log(giant.spells);
  console.log(barbarian.abilities);
  console.log(giant.language);
  console.log(barbarian.greet());
  console.log(giant.takeDamage());
  console.log(giant.cast()); //Is there a way to define which of his spells he can cast?!?!
  console.log(barbarian.ability());