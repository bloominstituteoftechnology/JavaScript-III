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

function gameObject(gameObj) {
  this.createdAt = gameObj.createdAt;
  this.dimensions = gameObj.dimensions;
};

gameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`
}

characterStats.prototype = Object.create(gameObject.prototype);



/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function characterStats(gameObj) {
  gameObject.call(this, gameObj);
  this.hp = gameObj.hp;
  this.name = gameObj.name;
};

characterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

Humanoid.prototype = Object.create(characterStats.prototype); 
 

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(gameObj) {
  characterStats.call(this, gameObj);
  this.faction = gameObj.faction;
  this.weapons  = gameObj.weapons;
  this.language = gameObj.language;
};

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


// Hero
Hero.prototype.slice = function(villian) {
  if (villian.hp > 0)
  // return `${hero.name} hp -42`;
  console.log("Optimus sliced Megatron! Megatron health dropped to:")
  return villian.hp - 30; 
}


function Hero(gameObj) {
  Humanoid.call(this, gameObj);
  this.light = gameObj.light;
  this.dark  = gameObj.dark;
  this.power = gameObj.power;
};

// Villian

Villian.prototype.shotsfired = function(hero) {
  if (hero.hp > 0) {
  // return `${hero.name} hp -42`;
  console.log("Megatron shot Optimus! Optimus health dropped to:")
  return hero.hp - 42; 
  } else {
    console.log(hero.destroy())
  }

}

function Villian(gameObj) {
  Humanoid.call(this, gameObj);
  this.light = gameObj.light;
  this.dark  = gameObj.dark;
  this.power = gameObj.power;
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


  const optimus = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 200,
    name: 'Optimus Prime',
    faction: 'Autobots',
    weapons: [
      'Sword',
      'Shield',
    ],
    language: 'Transformer',
  });

    const mega = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 200,
    name: 'Megatron',
    faction: 'Decepticons',
    weapons: [
      'Arm Cannon',
      'Sword',
    ],
    language: 'Transformer',
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
  //  Stretch
  console.log(mega.shotsfired(optimus));
  console.log(optimus.slice(mega));
  console.log(mega.shotsfired(optimus));
  console.log(optimus.slice(mega));
  


    // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// Prrrrrrrrrrreeeeeeeeetttttttttyyyyyyyyy sure I didn't do the stretch goals right. Can't get the attacks to repeat.