/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several 
  constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes){
  this.dimensions = attributes.dimensions;
  this.createdAt = attributes.createdAt;
}
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats){
  GameObject.call(this, stats)
  this.hp = stats.hp;
  this.name = stats.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
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

function Humanoid(object){
  CharacterStats.call(this, object)
  this.faction = object.faction;
  this.name = object.name;
  this.language = object.language;
  this.weapons = object.weapons;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(language){
  return `${this.name} offers a greeting in ${this.language}.`
}

 
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
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could 
  // * result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// Hero Constructo
function Hero(actions){
  Humanoid.call(this, actions);
  this.attack = actions.attack;
  this.dodge = function(){
    let successfulDodge = Math.random();
    if(successfulDodge > .05){
      return true;
    } else {
      return false;
    }
  }
};

// Hero prototypes

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attackBFG = function(){
  let damage;
  if(villain.hp > 1000){
    villain.hp = villain.hp - 1000;
    damage = `${this.name} rocks ${villain.name} with the ${this.weapons} for ${this.attack} damage. ${villain.name} is feeling the pain and his hp is ${villain.hp}`;
  } else if(villain.hp <= 1000){
    damage = `${villain.name} slept on the ${this.name} and paid the ultimate price. ${villain.destroy()}`;
  }  
  return damage;
}
// Hero.prototype.dodge = function(){
//   let successfulDodge = Math.random();
//   console.log(successfulDodge);
//   if(successfulDodge > .05){
//     return true;
//   } else {
//     return false;
//   }
// }


// Villain constructor        
function Villain(actions){
  Humanoid.call(this, actions);
  this.attack = actions.attack;
}

// Villain prototypes
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.attackRocket = function(){
  let success = hero.dodge();
  let result;
  if(success===true){
     result = `${villain.name} is too slow!`;
  } else if(success === false){
    if(hero.hp > 100){
      hero.hp = hero.hp - 100;
      result = `${villain.name} caught our hero slippin. ${hero.takeDamage()}`;
    }
    else if(hero.hp <= 100){
      result = `The ${villain.name} proved to be too much for our hero. ${hero.destroy()}`;
    }
    
  }
  return result;
}

// Characters

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    name: 'Doom Slayer',
    faction: 'United Aerospace Corporation',
    hp: 200,
    weapons: [
      'BFG 9000',
    ],
    language: 'Cold Silence',
    attack: 1000,
  })

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    name: 'Cyber-Demon',
    faction: 'Hell',
    hp: 10000,
    weapons: [
      'Rocket Launcher Arm'
    ],
    language: 'ROAR',
    attack: 100,
  })
                 
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
console.log(villain.attackRocket());
console.log(hero.attackBFG());
