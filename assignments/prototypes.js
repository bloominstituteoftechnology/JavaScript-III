/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
CharacterStats.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);
Char.prototype = Object.create(Humanoid.prototype);

function GameObject(gameTrait) {
  this.createdAt = gameTrait.createdAt;
  this.dimensions = gameTrait.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

function CharacterStats(statsTrait) {
  this.hp = statsTrait.hp;
  this.name = statsTrait.name;
  GameObject.call(this, statsTrait);
}

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}
 
function Humanoid(humanoidTrait) {
  this.faction = humanoidTrait.faction;
  this.weapons = humanoidTrait.weapons;
  this.language = humanoidTrait.language;
  CharacterStats.call(this, humanoidTrait);
}

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

// I originally made separate Hero & Villian constructors, but I preferred the idea of a generic character constructor with a property for team that can be specified as hero or villian (or anything, technically)

function Char(teamTrait) {
  this.team = teamTrait.team;
  Humanoid.call(this, teamTrait)
}

Char.prototype.hit = function(hitDamage) {
  this.hp = this.hp - hitDamage;
  if (this.hp < 1) {
    console.log(this.destroy());
    return `${this.team} was killed!`;
  } else {
    return `${this.team} was hit! Current hp: ${this.hp}`
  }
}

const hero = new Char({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 5,
    height: 5,
  },
  hp: 8,
  name: 'Gary',
  faction: 'Hero Guild',
  weapons: [
    'Frying Pan',
    'Hot Soup',
  ],
  language: 'French',
  team: 'Hero'
});

const villian = new Char({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 1,
  },
  hp: 2,
  name: 'Devin',
  faction: 'Villian Guild',
  weapons: [
    'Bicycle Spokes',
    'Loose Change',
    'Sharpened Palm Fronds'
  ],
  language: 'Only Grunts',
  team: 'Villian'
});

console.log(hero.hit(2));
console.log(villian.hit(5));

// Test you work by uncommenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   hp: 5,
  //   name: 'Bruce',
  //   faction: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Toungue',
  // });

  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   hp: 15,
  //   name: 'Sir Mustachio',
  //   faction: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Toungue',
  // });

  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   hp: 10,
  //   name: 'Lilith',
  //   faction: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.hp); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.faction); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!