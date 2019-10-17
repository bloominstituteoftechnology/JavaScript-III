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
function GameObject(attributes){
  this.createdAt = attributes.createdAt,
  this.name = attributes.name,
  this.dimensions =attributes.dimensions
  }
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`
  };

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes){
  GameObject.call(this, attributes),
  this.healthPoints = attributes.healthPoints
  
  }
  CharacterStats.prototype = GameObject.prototype;
  CharacterStats.prototype.takeDamage = function(){
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
 function Humanoid(attributes){
   CharacterStats.call(this, attributes),
this.team = attributes.team,
this.weapons = attributes.weapons,
this.language = attributes.language

  }
  Humanoid.prototype = CharacterStats.prototype;
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
};

function Villian(attributes) {
  Humanoid.call(this, attributes),
  this.name = attributes.name,
  this.weapons = attributes.weapons,
  this.damage = attributes.damage,
  this.hp = attributes.hp
  }
  Villian.prototype = Object.create(Humanoid);
  Villian.prototype.Damage = function (char){
    return `${this.name} attacks ${char.name} with a ${this.weapons} and did ${this.damage} damage to the hero! The hero now has ${char.hp-this.damage} health.`
  },
  Villian.prototype.Destruction = function (char1, char2){
    if (this.hp <= 0){
      return `${this.name} has 0 hp! ${this.name} is now unconscious.`
    }else if (this.hp < 5){
      return `${this.name} has ${this.hp}! They are very low on health!`
    }else { return `currently ${char1.name} has ${char1.hp -char2.damage} health`}
  
  };
  
  
  
  
  function Hero(attributes){
    Humanoid.call(this, attributes),
    this.name = attributes.name,
    this.weapons = attributes.weapons,
    this.damage = attributes.damage,
    this.hp = attributes.hp
    }
    
    Hero.prototype = Object.create(Villian);
    let currentHealth2 = this.hp-Villian.damage;
    Hero.prototype.Damage = function (char){
      return `${this.name} attacks the ${char.name} with a ${this.weapons} and did ${this.damage} damage to the villian! The Villian now has ${char.hp - this.damage} health.`
    };
    Hero.prototype.Destruction = function (char1, char2){
      if (this.hp <= 0){
        return `${this.name} has 0 hp! ${this.name} is now unconscious.`
      }else if (this.hp < 5){
        return `${this.name} has ${this.hp}! They are very low on health!`
      }else { return `currently ${char1.name} has ${char1.hp -char2.damage} health`}
    
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
  const Snyder = new Villian({
    name: 'Snyder the Villian',
    weapons: 'Sythe of Loathing',
    damage: 25,
    hp: 250
    });
    
    const Stan = new Hero({
    name: 'Stan the Hero',
    weapons: 'Lance of Light',
    damage: 30,
    hp: 180
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
  console.log(Snyder.Damage(Stan));
  console.log(Snyder.Destruction(Stan, Snyder));
  console.log(Stan.Damage(Snyder));
  console.log(Stan.Destruction(Snyder, Stan));

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!