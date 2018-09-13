/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  

  // === GameObject ===



  function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;

  };

  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`
  };

  
  CharacterStats.prototype = Object.create(GameObject.prototype);

  // * createdAt
  // * dimensions
  // * destroy() // prototype method -> returns the string: 'Object was removed from the game.'


  function CharacterStats(chrStatsAttribs) {
    GameObject.call(this, chrStatsAttribs);
    this.hp = chrStatsAttribs.hp;
    this.name = chrStatsAttribs.name;

  };

  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`
  };



Humanoid.prototype = Object.create(CharacterStats.prototype);


function Humanoid(humAttribs) {
  CharacterStats.call(this, humAttribs);
  this.faction = humAttribs.faction;
  this.weapons = humAttribs.weapons;
  this.language = humAttribs.language;

};

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
};


Hero.prototype = Object.create(Humanoid.prototype);
Villain.prototype = Object.create(Humanoid.prototype);


function Hero(heroAttribs) {
  Humanoid.call(this, heroAttribs);
  this.power = heroAttribs.power;
  this.weakness = heroAttribs.weakness;
};

Hero.prototype.damage = function() {
  return ` His hitpoints are now: ` + (this.hp -1);
}


function Villain(villainAttribs) {
  Humanoid.call(this, villainAttribs)
  this.superWeapon = villainAttribs.superWeapon;
  this.softSpot = villainAttribs.softSpot;
}

Villain.prototype.hit = function() {
  return ` His hitpoints are now: ` + (this.hp -1);
}



// Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

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
    language: 'Common Tongue',
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
    language: 'Common Tongue',
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

  const jordan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 20,
    name: 'Jordan the Heroic',
    faction: 'Lambda School',
    weapons: ['Rapier',
    ],
    language: 'Common Tongue',
    power: 'Coding',
    weakness: 'Javascript',
  })

const phillip = new Villain ({
  createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 20,
    name: 'Phillip the Villainous',
    faction: 'The Streets',
    weapons: ['Snarkiness',
    ],
    language: 'Common Tongue',
    superWeapon: 'Sarcasm',
    softSpot: 'Ice-cream',
})

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
  console.log(jordan.takeDamage() + jordan.damage());
  console.log(phillip.takeDamage() + phillip.hit());

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!