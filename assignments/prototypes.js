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

function GameObject(char) {
  this.createdAt = Date.now();
  this.dimensions = char.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(char){
  GameObject.call(this, char);
  this.name = char.name;
  this.healthPoints = char.healthPoints;
}

//Declare this after Constructor function declaration, this way it can inherit the immediate parents prototype functions.
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  this.healthPoints -= 5;
  if(this.healthPoints <= 0){
    this.destroy();
    return `${this.name} has died after taking 5 damage.`;
  }
  return `${this.name} took 5 damage.`;
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

function Humanoid(char){
  CharacterStats.call(this, char)
  this.team = char.team;
  this.weapons = char.weapons;
  this.language = char.language;
}

//Declare this after Constructor function declaration, this way it can inherit the immediate parents prototype functions.
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
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

  function Hero(char){
    Humanoid.call(this, char)
    this.reputation = 'Hero';
  }
  
  //Declare this after Constructor function declaration, this way it can inherit the immediate parents prototype functions.
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Hero.prototype.smite = function(target) {
    let damage = Math.floor(Math.random() * 11);
    target.healthPoints -= damage;
    if(target.healthPoints <= 0){
      return `${this.name} just smited ${target.name} for ${damage} damage!\n${target.name} has died.`
    }
    return `${this.name} just smited ${target.name} for ${damage} damage!\n${target.name} has ${target.healthPoints} health left.`
  }

  Hero.prototype.heal = function() {
    let healAmt = Math.floor(Math.random() * 11);
    this.healthPoints += healAmt;
    return `${this.name} just self healed ${healAmt} health points and is now at ${this.healthPoints} health.`;
  }

  function Villain(char){
    Humanoid.call(this, char)
    this.reputation = 'Villain';
  }
  
  //Declare this after Constructor function declaration, this way it can inherit the immediate parents prototype functions.
  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.burn = function(target) {
    let damage = Math.floor(Math.random() * 16);
    target.healthPoints -= damage;
    if(target.healthPoints <= 0){
      return `${this.name} just burned ${target.name} for ${damage} damage!\n${target.name} has died.`
    }
    return `${this.name} just burned ${target.name} for ${damage} damage!\n${target.name} has ${target.healthPoints} health left.`
  }

  Villain.prototype.sacrifice = function(target) {
    let damage = Math.floor(Math.random() * 14);
    target.healthPoints -= damage;
    let sacrificeAmt = Math.floor(damage * .5);
    this.healthPoints -= sacrificeAmt;
    if(target.healthPoints <= 0){
      return `${this.name} just sacrificed ${sacrificeAmt} points of their own Health to deal ${damage} to defeat ${target.name}`;
    } else if(this.healthPoints <= 0) {
      return `${this.name} just sacrificed ${sacrificeAmt} points of their own Health to deal ${damage} to ${target.name} - but died in the process... `;
    } else if(this.healthPoints <= 0 && target.healthPoints <= 0){
      return `${this.name} just sacrificed ${sacrificeAmt} points of their own Health to deal ${damage} to ${target.name}.\nThis attack defeated ${this.name}, as well as ${target.name}`;
    }
    return `${this.name} just sacrificed ${sacrificeAmt} points of their own Health to deal ${damage} to ${target.name}\n${target.name} has ${target.healthPoints} health left\n${this.name} has ${this.healthPoints} health left`;
  }

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 50,
    name: 'Hero',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 50,
    name: 'Villain',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  function battleSequence(player1, player2) {
    console.warn('Battle Starting')
    let turnNum = 2;
    while(player1.healthPoints > 0 && player2.healthPoints > 0){
      if(turnNum % 2 === 0){
        let attackStyle = Math.floor(Math.random() * 2);
        console.log(`${player1.name}'s Turn======================`);
        if(attackStyle >= 1) {
          console.log(player1.smite(player2));
          turnNum++;
        } else {
          console.log(player1.heal());
          turnNum++;
        }
      } else {
        let attackStyle = Math.floor(Math.random() * 2);
        console.log(`${player2.name}'s Turn======================`);
        if(attackStyle >= 1) {
          console.log(player2.burn(player1));
          turnNum++;
        } else {
          console.log(player2.sacrifice(player1));
          turnNum++;
        }
      }
    }
  }

  battleSequence(hero, villain);