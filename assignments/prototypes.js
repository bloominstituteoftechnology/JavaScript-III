/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
//----------------------------------------------------------------------------------------
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function(){
  console.log(this.name + ' was removed from the game.');
}
// const newObject = new GameObject({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   }
// });
// console.log(newObject);
//----------------------------------------------------------------------------------------
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes){
  GameObject.call(this, attributes);//so child knows what 'this' is
  this.hp = attributes.hp;
  this.name = attributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);//inherit parents prototypes
CharacterStats.prototype.takeDamage = function(){
  console.log(this.name + ' took damage')
};
// const someStats = new CharacterStats({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   },
//   hp: 5,
//   name: 'Bruce'
// })
// console.log(someStats);
//----------------------------------------------------------------------------------------
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes){
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  this.archtype = attributes.archtype;
  this.damage = attributes.damage;
  this.armor = attributes.armor;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  console.log(`${this.name} offers a greeting in ${this.language}`);
};
//----------------------------------------------------------------------------------------
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
    hp: 10,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
    archtype: 'Mage',
    damage: 4,
    armor: 1,
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 20,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
    archtype: 'Swordsman',
    damage: 3,
    armor: 3
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 15,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    archtype: 'Archer',
    damage: 2,
    armor: 2,
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  //console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  //console.log(mage.takeDamage()); // Bruce took damage.
  //console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  archer.greet();
  mage.takeDamage();
  swordsman.destroy();
  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  function Hero(attributes){
    Humanoid.call(this, attributes);
    this.specialAbility = attributes.specialAbility;
    this.critChance = attributes.critChance;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.attack = function(target){
    console.log(`${this.name} attacks ${target.name} the ${target.archtype} with ${this.weapons[0]}.`);

    let damageTaken = 0;

    if(Math.random() < this.critChance){
      damageTaken = this.damage*1.5 - target.armor;
      console.log(`Critical Strike!`);
    }
    else{
      damageTaken = this.damage - target.armor;
    }

    target.hp -= damageTaken;

    if(target.hp <= 0){
      console.log(`${target.name} takes ${damageTaken} points of damage and has been slain.`)
      target.destroy();
    }
    else{
      console.log(`${target.name} takes ${damageTaken} points of damage and has ${target.hp} hp remaining.`);
    }
  }

  const sheRa = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 4,
    },
    hp: 30,
    name: 'She-Ra',
    faction: 'Masters of the Universe',
    weapons: [
      'Sword of Protection',
      'Shield',
      'Boomarang'
    ],
    language: 'Eternian',
    specialAbility: 'Transmute Sword',
    archtype: 'Princess of Power',
    damage: 8,
    critChance: 0.5,
    armor: 2,
  });
  
  const evilLyn = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 4,
    },
    hp: 30,
    name: 'Evil-Lyn',
    faction: 'Agents of Doom',
    weapons: [
      'Crystal Orb Greatstaff',
      'Dark Magic'
    ],
    language: 'Eternian',
    specialAbility: 'Stormcall',
    archtype: 'Dark Wizard',
    damage: 7,
    critChance: 0.3,
    armor: 1, 
  });