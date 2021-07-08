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

function GameObject(params){
  this.createdAt = params.createdAt;
  this.dimensions = params.dimensions;
};

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charParams){
  GameObject.call(this, charParams);
  this.hp = charParams.hp;
  this.name = charParams.name;
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
 function Humanoid(humanoidParams){
   CharacterStats.call(this, humanoidParams);
   this.faction = humanoidParams.faction;
   this.weapons = humanoidParams.weapons;
   this.language = humanoidParams.language;
 }
Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function(){
   return `${this.name} offers a greeting in ${this.language}`;
 };

 function Hero(heroParams){
   Humanoid.call(this, heroParams);
   this.specialPower = heroParams.cripplingCollegeDebt
 }
Hero.prototype = Object.create(Humanoid.prototype);

Humanoid.prototype.attack = function(victim){
  victim.hp -=5;
  if(victim.hp >=1){
  return `${victim.name} was hit with cripplingCollegeDebt they lost 5 health points`;
} else {return `The crushing weight of debt has killed ${victim.name}. ${victim.destroy()}`}
}

function Villian (villianParams){
  Humanoid.call(this, villianParams);
}
Villian.prototype=Object.create(Humanoid.prototype);

Villian.prototype.attack = function(victim){
  victim.hp -=5;
  if(victim.hp >= 1){
  return `${victim.name} was hit with extensive experience requirements for an entry level job. -5 health points.`
  } else {return `${victim.name} was hit with extensive experience requirements for an entry level job. ${victim.name} has succumbed to the inflicted injuries. ${victim.destroy()}` }
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    hp: 1,
    name: 'Scott',
    faction: 'Private College',
    weapons: 'Liberal Arts',
    language: '2 years of spanish',
    weapons: 'Crippling College Debt',
  });

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    hp: 1,
    name: 'Workforce',
    faction: 'Margins',
    weapons: 'Unreasonable expectations',
    language: 'Money',
    weapons: 'fear',
  });
  

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

  console.log(hero.name);
  console.log(hero.faction);
  console.log(hero.greet());
  console.log(hero.attack(swordsman));

  console.log(villian.name);
  console.log(villian.faction);
  console.log(villian.greet());
  console.log(hero.attack(villian));


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!