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

function GameObject(objectAttributes){
  this.createdAt = objectAttributes.createdAt;
  this.dimensions = objectAttributes.dimensions;
};

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

CharacterStats.prototype = Object.create(GameObject.prototype);

function CharacterStats(charAttributes){
  GameObject.call(this, charAttributes);
  this.healthPoints = charAttributes.healthPoints;
  this.name = charAttributes.name;
};

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
};

CharacterStats.prototype.checkHP = function() {
  if (this.healthPoints <= 0){
    this.destroy();
  }
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

Humanoid.prototype = Object.create(CharacterStats.prototype);

function Humanoid(humAttributes){
  CharacterStats.call(this, humAttributes);
  this.team = humAttributes.team;
  this.weapons = humAttributes.weapons;
  this.language = humAttributes.language;
}

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
};

Hero.prototype = Object.create(Humanoid.prototype);

function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes);
  this.powers = heroAttributes.powers;
  this.nemesis = heroAttributes.nemesis;
}

Hero.prototype.determination = function(){
  if (this.powers == 'Willpower'){
    this.healthPoints += 5;
  }
  else {
    console.log(`${this.name} lacks the will`);
  }
  
}



Hero.prototype.dispenseJustice = function(){
  // if (this.weapons.hasOwnProperty('Guillotine Sword') === true && this.powers == 'Willpower') {
    if (this.nemesis.powers == 'Schemes') {
      let hitOrMiss = Math.random();
      if (hitOrMiss > .9) {
        this.nemesis.destroy();
      }
      else if(.3 > hitOrMiss < .9) {
        this.nemesis.healthPoints -= 5;
        this.nemesis.takeDamage();
        this.nemesis.checkHP();
      }
      else {
        console.log(`${this.name} missed`)
      }
    }
    else {
      this.nemesis.destroy();
    }
  // }
// else {
//     console.log(`Not today, ${this.name}`);
//   }  
}

Villain.prototype = Object.create(Humanoid.prototype);

function Villain(villainAttributes){
  Humanoid.call(this, villainAttributes);
  this.powers = villainAttributes;
  this.nemesis = villainAttributes;
}



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

  const soldier = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 12,
    name: 'Zargon',
    team: 'Red Army',
    weapons: [
      'Guillotine Sword'
    ],
    language: 'Dialectic',
    powers: 'Willpower',
    nemesis: 'baron'
  });

  const baron = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 24,
    name: 'Gooblgar',
    team: 'Blue Empire',
    weapons: [
      'Staff of Domination'
    ],
    language: 'Evilese',
    powers: 'Schemes',
    nemesis: 'soldier'
  })

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
  console.log(soldier.weapons);

  soldier.dispenseJustice();

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!