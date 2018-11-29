/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes){
  this.healthPoints = charAttributes.healthPoints;
  this.name = charAttributes.name;
  GameObject.call(this, charAttributes);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanAttributes){
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
  CharacterStats.call(this, humanAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

/* Hero constructor
* Stretch task: 
* Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
* Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
* Create two new objects, one a villain and one a hero and fight it out with methods!
*/

function Hero(heroAttributes){
  this.damageAmount = heroAttributes.damageAmount;
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.doDamage = function(otherCharacter){
  otherCharacter.healthPoints -= this.damageAmount;
  if(otherCharacter.healthPoints <= 0){
    return otherCharacter.destroy();
  }
  console.log(`${this.name} attacks ${otherCharacter.name} for ${this.damageAmount} damage and leaves them with ${otherCharacter.healthPoints} health points!`)
}

function Villain(villainAttributes){
  this.specialDamage = villainAttributes.specialDamage;
  Hero.call(this, villainAttributes);
}

Villain.prototype = Object.create(Hero.prototype);

Villain.prototype.specialAttack = function(otherCharacter){
  otherCharacter.healthPoints -= this.specialDamage;
  console.log(`${this.name} attacks ${otherCharacter.name} with a special attack for ${this.specialDamage} damage and leaves ${otherCharacter.name} with ${otherCharacter.healthPoints} health points!`)
  if(otherCharacter.healthPoints <= 0){
    otherCharacter.destroy();
  }
}

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

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

const theHero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 4,
  },
  healthPoints: 15,
  name: 'Kieran',
  team: 'The Hero',
  weapons: [
    'Bow and Arrow',
    'Dagger',
  ],
  language: 'Common Tongue',
  damageAmount: 5
});

const theVillain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 4,
    height: 7,
  },
  healthPoints: 15,
  name: 'The Masked Villain, Madvillain',
  team: 'Czarface',
  weapons: [
    'Verses',
    'Bombs',
  ],
  language: 'Common Tongue',
  damageAmount: 3,
  specialDamage: 5
});

//Start fight!
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theVillain.specialAttack(theHero);
theHero.doDamage(theVillain);
theVillain.doDamage(theHero);
theHero.doDamage(theVillain);
