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

function GameObject(details) {
  this.createdAt = details.createdAt;
  this.dimensions = details.dimensions;
}
GameObject.prototype.destroy = () => {
  return `${this.name} was removed from the game`
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterDetails) {
  GameObject.call(this, characterDetails);
  this.healthPoints = characterDetails.healthPoints;
  this.name = characterDetails.name;
};

CharacterStats.prototype.takeDamage = () => {
  return `${this.name} took damage.`   
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanoidDetails) {
  CharacterStats.call(this, humanoidDetails);

  this.team = humanoidDetails.team;
  this.weapons = humanoidDetails.weapons;
  this.language = humanoidDetails.language;
  };
  
  Humanoid.prototype.greet = () => {
    return `${this.name} offers a greeting in ${this.language}`;

};

// stretch new objects
function Villain(villianDetails) {
  Humanoid.call(this, villianDetails);

  Villain.prototype.move = function(characterName) {
    return (characterName.healthPoints - 5);
  }

  };

function Hero(heroDetails) {
  Villain.call(this, heroDetails);

  Hero.prototype.ultimate = function(characterName) {
    return characterName.healthPoints - 30;
  }

};

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

  // new stretch objects
  const hulk = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 4,
      height: 7,
    },
    healthPoints: 50,
    name: 'Bruce Banner',
    team: 'The Avengers',
    weapons: [
      'Thor\'s Hammer' ,
      'Infinity Gauntlet',
    ],
    language: 'English',
  });

  const thanos = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 4,
      height: 8,
    },
    healthPoints: 30,
    name: 'Thanos',
    team: 'The Universe',
    weapons: [
      'The Gauntlet',
      'Infinity Stones',
    ],
    language: 'N/A',
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish

// stretch console
console.log(hulk.healthPoints);
console.log(thanos.healthPoints);
console.log(thanos.move(hulk));
console.log(hulk.ultimate(thanos));


  // Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


