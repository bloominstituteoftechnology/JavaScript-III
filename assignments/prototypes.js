/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

 *** In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid. ****

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
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

GameObject.prototype.destroy = function (){
  return `${this.name} was removed from game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats){
  GameObject.call(this, stats);
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
function Humanoid(humanoidAttributes){
  // GameObject.call(this, humanoidAttributes);
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}


/*
  === Hero ===
*/
function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heroAttack = function(victim){
  victim.hp = victim.hp - 2;
  
  if(victim.hp > 0) {
    return `${this.name} heroically beat up ${victim.name}. ${victim.takeDamage()} -2 hp.
  ${victim.name}: ${victim.hp} remaining`;
  } else return victim.destroy();
}

/*
  === Villain ===
*/
function Villain(villainAttributes){
  Humanoid.call(this, villainAttributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.villainAttack = function(victim){
  victim.hp = victim.hp - 14;
  
  if(victim.hp > 0) {
    return `${this.name} snuck up behind ${victim.name} and stabbed him in the back! ${victim.takeDamage()} -14 hp
  ${victim.name}: ${victim.hp} remaining`;
  } else return victim.destroy();
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

// /*
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
  
  const hyruleWarrior = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Link',
    faction: 'Hyrule Field',
    weapons: [
      'Kokiri Sword',
      'Bomb Bag',
    ],
    language: '........',
  });

  const ganondorf = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 10,
      width: 10,
      height: 20,
    },
    hp: 20,
    name: 'Ganon',
    faction: 'Golden Land',
    weapons: [
      'Sword',
      'Dagger',
    ],
    language: '........',
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
  
  console.log(ganondorf.greet());
  console.log(hyruleWarrior.greet());
  console.log(ganondorf.villainAttack(hyruleWarrior));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));
  console.log(hyruleWarrior.heroAttack(ganondorf));


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!