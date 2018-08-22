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

const GameObject = function (gameObjectData) {
    this.createdAt = gameObjectData.createdAt;
    this.dimensions = gameObjectData.dimensions;
};

GameObject.prototype.destroy = function () {return `${this.name} was removed from the game.`};


const CharacterStats = function (characterStatData) {
    GameObject.call(this, characterStatData);
    this.hp = characterStatData.hp;
    this.name = characterStatData.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {this.hp--; return `${this.name} took damage.`};


const Humanoid = function (humanoidData) {
    CharacterStats.call(this, humanoidData);
    this.faction = humanoidData.faction;
    this.weapons = humanoidData.weapons;
    this.language = humanoidData.language;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {return `${this.name} offers a greeting in ${this.language}`};

// villain
const Villain = function (villainData) {
    Humanoid.call(this, villainData)
}
Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.punch = function (hero) {
    let damage = Math.floor(Math.random() * 10);
    hero.hp -= damage;
    return `${this.name} dealt ${damage} damage to ${hero.name}!`;
};

// hero
const Hero = function (heroData) {
    Humanoid.call(this, heroData);
};
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.sonicScrewdriver = function (villain) {
    let damage = Math.floor(Math.random() * 10);
    villain.hp -= damage;
    return `${this.name} dealt ${damage} damage to ${villain.name}!`;
};

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

const theDoctor = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 2,
    },
    hp: 300,
    name: 'The Doctor',
    faction: 'Gallifrey',
    weapons: [
        'Brain',
    ],
    language: 'All',
});

const theMaster = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 1,
    },
    hp: 250,
    name: 'The Master',
    faction: 'Gallifrey',
    weapons: [
        'Psychosis',
    ],
    language: 'All',
});

let fight = function (hero, villain) {
    let winner = hero.name;
    while (villain.hp > 0 || hero.hp > 0) {
        console.log('\n' + hero.sonicScrewdriver(villain));
        console.log('\n' + villain.punch(hero));
    }
    if (villain.hp > 0) {
        winner = villain.name; console.log('\n' + hero.destroy());
    }
    else {
        console.log('\n' + villain.destroy())
    };
    return `\n ${winner} is victorious!`;
}

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

  console.log(fight(theDoctor, theMaster)); // Good and Evil battle it out...

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!