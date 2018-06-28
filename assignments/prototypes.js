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

// Constructor
function GameObject(gameObjectAttributes) {
  this.createdAt = gameObjectAttributes.createdAt;
  this.dimensions = gameObjectAttributes.dimensions;
}

// Methods for self
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

// Constructor
function CharacterStats(characterStatsAttributes) {
  GameObject.call(this, characterStatsAttributes);
  this.hp = characterStatsAttributes.hp;
  this.name = characterStatsAttributes.name;
}

// Inheritance of methods
CharacterStats.prototype = Object.create(GameObject.prototype);

// Methods for self
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}
CharacterStats.prototype.wonRound = function() {
  return `${this.name}'s team won the round.`;
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

// Constructor
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}
// Inheritance of methods
Humanoid.prototype = Object.create(CharacterStats.prototype);

// Methods for self
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
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


// Constructor
  function Villain(villainAttributes) {
    Humanoid.call(this, villainAttributes);
    this.luck = villainAttributes.luck;
  }

// Inheritance of methods
  Villain.prototype = Object.create(Humanoid.prototype);

// Methods for self
  Villain.prototype.nuke = function(targets) {
  targets.forEach(target => target.hp = 0);
  }

  Villain.prototype.machineGun = function(target) {
    target.hp -= (5 * this.luck);
  }



// Constructor
  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
    this.luck = heroAttributes.luck;
  }

// Inheritance of methods
  Hero.prototype = Object.create(Humanoid.prototype);

// Methods for self
  Hero.prototype.gunshot = function(target) {
  target.hp -= (20 * this.luck);
  }


  // Constructor
  function Archer(archerAttributes) {
    Humanoid.call(this, archerAttributes);
    this.luck = archerAttributes.luck;
  }

// Inheritance of methods
  Archer.prototype = Object.create(Humanoid.prototype);

// Methods for self
  Archer.prototype.arrowHit = function(target) {
  target.hp -= (20 * this.luck);
  }


  const mccree = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 200,
    name: 'Jesse McCree',
    faction: 'Overwatch',
    weapons: [
      'gun'
    ],
    language: 'English',
    luck: 1.2,
    // luck: 2
  });

  const dVa = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 600,
    name: 'Hana Song',
    faction: 'Overwatch',
    weapons: [
      'nuke'
    ],
    language: 'Korean',
    luck: 10
  });

  const hanzo = new Archer({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 200,
    name: 'Hanzo Shimada',
    faction: 'Overwatch',
    weapons: [
      'bow and arrow'
    ],
    language: 'Japanese',
    luck: 3
  });

  console.log(mccree.hp);
  console.log(dVa.hp);
  console.log(hanzo.hp);

  mccree.gunshot(dVa);
  console.log(dVa.takeDamage());
  console.log(dVa.hp);
  dVa.machineGun(mccree);
  console.log(mccree.takeDamage());
  console.log(mccree.hp);
  dVa.machineGun(mccree);
  console.log(mccree.takeDamage());
  console.log(mccree.hp);
  hanzo.arrowHit(dVa);
  console.log(dVa.takeDamage());
  console.log(dVa.hp);
  mccree.gunshot(dVa);
  console.log(dVa.takeDamage());
  mccree.gunshot(dVa);
  console.log(dVa.takeDamage());
  hanzo.arrowHit(dVa);
  console.log(dVa.takeDamage());
  mccree.gunshot(dVa);
  console.log(dVa.takeDamage());
  hanzo.arrowHit(dVa);
  console.log(dVa.takeDamage());
  hanzo.arrowHit(dVa);
  console.log(dVa.takeDamage());
  console.log(dVa.hp);

  dVa.nuke([mccree, hanzo]);
  console.log(mccree.takeDamage());
  console.log(hanzo.takeDamage());
  
  console.log(mccree.hp);
  console.log(hanzo.hp);
  console.log(mccree.destroy());
  console.log(hanzo.destroy());

  console.log(dVa.wonRound());