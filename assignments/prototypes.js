/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
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

// Base constructor
function GameObject(gameObjectAttributes) {
    this.createdAt = new Date();
    this.dimensions = gameObjectAttributes.dimensions;
};

function CharacterStats(characterStatsAttributes) {
    GameObject.call(this, characterStatsAttributes);
    this.hp = characterStatsAttributes.hp;
    this.name = characterStatsAttributes.name;
};
CharacterStats.prototype = Object.create(GameObject.prototype);

function Humanoid(humanoidAttributes) {
    CharacterStats.call(this, humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);

function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
    this.alignment = heroAttributes.alignment;
};
Hero.prototype = Object.create(Humanoid.prototype);

function Villain(villainAttributes) {
    Humanoid.call(this, villainAttributes);
    this.spellType = villainAttributes.spellType;
};
Villain.prototype = Object.create(Humanoid.prototype);

// Methods
GameObject.prototype.destroy = function () {
    console.log(`${this.name} ran out of health and was removed from the game.`);
}

CharacterStats.prototype.takeDamage = function () {
    console.log(`${this.name} took damage. ${this.name} now has ${this.hp} health.`);
    if (this.hp <= 0) {
        this.destroy();
    }
}

Humanoid.prototype.greet = function () {
    console.log(`${this.name} offers a greeting in ${this.language}`);
}

Hero.prototype.heroicSlash = function () {
    villain.hp = villain.hp - 5;
    console.log(`${this.name} heroically slashed ${villain.name} for 5 damage.`);
    villain.takeDamage();
}

Villain.prototype.shadowSlash = function () {
    hero.hp = hero.hp - 2.5;
    console.log(`${this.name} slashed ${hero.name} with the power of shadow for 2.5 damage.`);
    hero.takeDamage();
}

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

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 6,
    },
    hp: 15,
    name: 'Shrek',
    faction: 'The Swamp',
    weapons: [
        'Sword',
        'Shield',
    ],
    language: 'Common',
    alignment: 'neutral good'
});

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 2,
    },
    hp: 5,
    name: 'Oogly Boggo',
    faction: 'Tinker Town',
    weapons: [
        'Magic',
    ],
    language: 'Gnomish',
    powerSource: 'the Shadow'
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
  console.log(villain.shadowSlash()); // Villain attacks Hero
  console.log(hero.heroicSlash()); // Hero attacks Villain


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!