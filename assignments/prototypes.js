/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor 
  functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to 
  test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attr){
  this.createdAt = new Date();
  this.dimensions = attr.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(childAttr) {
  GameObject.call(this, childAttr);
  this.healthPoints = childAttr.healthPoints;
  this.name = childAttr.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
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
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Humanoid(grandChildAttr) {
  CharacterStats.call(this, grandChildAttr);
  this.team = grandChildAttr.team;
  this.weapons = grandChildAttr.weapons;
  this.language = grandChildAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
}

// Villain & Hero Constructors

function Villain(attr) {
  Humanoid.call(this, attr);
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.slimeTime = function(target) {
  target.healthPoints -= 7;
  return `${this.name} hits ${target.name} with slime`;
}

function Hero(attr) {
  Humanoid.call(this, attr);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.magicMissle = function(target) {
  target.healthPoints -= 4;
  return `${this.name} hits ${target.name} with magic missle`;
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

  const heroJim = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 18,
    name: 'Jim',
    team: 'Honorable Dudes',
    weapons: [
      'Sword',
      'Mace',
    ],
    language: 'Common Tongue',
    constitution: 'Hero',
  });
  
  const villainDan = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 3,
      height: 3,
    },
    healthPoints: 20,
    name: 'Dan',
    team: 'Bad News Fools',
    weapons: [
      'Spiked Bat',
      'Net',
    ],
    constitution: 'Villain',
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  function fight(hero, villain) {
    let round = 1;
    while(hero.healthPoints > 0 && villain.healthPoints > 0) {
      console.log('Round ' + round)
      round++;

      if(hero.healthPoints > 0) {
        console.log(`${hero.name} attacked. It was effective.`);
        hero.magicMissle(villain);

        if(villain.healthPoints <= 0) {
          console.log(hero.destroy());
        } else {
          console.log(villain.takeDamage(), `${villain.name} has ${villain.healthPoints} remaining health.`)
        }
      }
      
      if(villain.healthPoints > 0) {
        console.log(`${villain.name} attacked. It was effective.`);
        villain.slimeTime(hero);

        if(hero.healthPoints <= 0) {
          console.log(hero.destroy());
        } else {
          console.log(hero.takeDamage(), `${hero.name} has ${hero.healthPoints} remaining health.\n`)
        }
      }
    }
  }

  fight(heroJim, villainDan);
  
  // function counter(){
  //   let fightCount = 0;
  //   return function() {
  //     return fightCount++
  //   }
  // }

  // const newCounter = counter();
  // console.log(newCounter())
  // console.log(newCounter())
  // console.log(newCounter())
  // console.log(newCounter())

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!