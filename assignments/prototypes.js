/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be 
  implementing several constructor functions with their correct inheritance heirarchy.

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
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes){
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function (){
  return `${this.name} took damage.`
}

// CharacterStats.prototype = Object.create(GameObject.prototype);

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
  // GameObject.call(this, attributes);
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid( {   //{createdAt, {dimensions}, hp, name, faction, [weapons], language}
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
  // * Give the Hero and Villians different methods that could be used to remove health points from objects
  //   which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Villian(villanAttributes){
    Humanoid.call(this, villanAttributes);
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  //  all attack are going to be generated the same way
  //  if an attack is invoked, the enemy loses hp
  Villian.prototype.teethAttack = function(enemy){
   enemy.hp = enemy.hp + hpGenerator();
   return enemy.hp;
  }

  Villian.prototype.tailAttack = function(enemy){
    enemy.hp = enemy.hp + hpGenerator();
    return enemy.hp;
  }

  function Hero(heroAttributes){
    Humanoid.call(this, heroAttributes)
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.cutePawsAttack = function(enemy){
    enemy.hp = enemy.hp + hpGenerator();
    return enemy.hp;
  }

  Hero.prototype.purrAttack = function(enemy){
    enemy.hp = enemy.hp + hpGenerator();
    return enemy.hp;
  }

  function hpGenerator(){
    // if random number < 0.5, return -1, if > 0.5, return1
    let sign = Math.random() < 0.5 ? -1 : 1;
    let number = Math.floor(Math.random()*10);
    //  get negative or positive number
    return sign * number;
  }

  const villian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 4,
    },
    hp: 10,
    name: 'Lucy',
    faction: 'Evil Cats',
    weapons: [
      'Teeth',
      'Tails',
    ],
    language: 'Catlevil',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 5,
      height: 5,
    },
    hp: 10,
    name: 'Bella',
    faction: 'Prr Cats',
    weapons: [
      'Cute-paws',
      'Purr',
    ],
    language: 'Catuness',
  });

  console.log(villian);
  console.log(hero);

  //  Keep fighting while both are alive
  while(hero.hp > 0 && villian.hp > 0){
    console.log('Villian attacks: '+villian.teethAttack(hero) + ' hp left in hero');
    console.log('Hero attacks: '+hero.cutePawsAttack(villian) + ' hp left in villian');
    console.log('Villian attacks: '+villian.tailAttack(hero)+ ' hp left in hero');
    console.log('Hero attacks: '+hero.purrAttack(villian)+ ' hp left in villian');
  }

  //  Who died? villian or hero? Destroy that object
  if(villian.hp <= 0){
    console.log(`Hero ${hero.name} wins. Villian ${villian.destroy()}`);
  }
  else{
    console.log(`Villian ${villian.name} wins. Hero ${hero.destroy()}`);
  }
 