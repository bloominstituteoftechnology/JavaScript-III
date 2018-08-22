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

function GameObject(obj) {
  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;
};

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (obj) {
  GameObject.call(this, obj);
  this.hp = obj.hp;
  this.name = obj.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
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

function Humanoid (obj) {
  CharacterStats.call(this, obj)
  this.faction = obj.faction;
  this.weapons = obj.weapons.toString();
  this.language = obj.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

let attack = function (player1, player2) {
  let p1hp = player1.hp;
  let p2hp = player2.hp;
  let p1damage = player1.damage;
  let p2damage = player2.damage;

  while (p2hp > 0) {
    p2hp = p2hp - p1damage;
    console.log(`${player1.name} has attacked ${player2.name} for ${player1.damage} damage.  ${player2.name} has ${p2hp}hp remaining`);
  };
  
};

function Hero (obj) {
  Humanoid.call(this, obj)
  this.damage = obj.damage;
  };

  Hero.prototype = Object.create(Humanoid.prototype);

function Villain (obj) {
  Humanoid.call(this, obj)
  this.damage = obj.damage;
  };

  Villain.prototype = Object.create(Humanoid.prototype);


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

  const Batman = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 50,
    name: 'Batman',
    faction: 'The League of Shadows',
    weapons:'Batarang',
    language: 'Common Toungue',
    damage: 8,
  });

  const Joker = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 50,
    name: 'The Joker',
    faction: 'None',
    weapons:'Grenade',
    language: 'Common Toungue',
    damage: 10,
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
  // console.log(Batman);

attack(Batman, Joker);

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!