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

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
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

// Test you work by uncommenting these 3 objects and the list of console logs below:
/*****************************************************************
 ************************** Constructor **************************
 *****************************************************************/
function GameObject(obj){
  this.createdAt = obj.createdAt;
  this.dimensions = obj.dimensions;
}

// ************************ Prototype(s) *************************
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

/*****************************************************************
 ************************** Constructor **************************
 *****************************************************************/
function CharacterStats(obj){
  GameObject.call(this, obj);
  this.hp = obj.hp;
  this.name = obj.name;
}

// ************************ Prototype(s) *************************
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage`;
}

/*****************************************************************
 ************************** Constructor **************************
 *****************************************************************/
function Humanoid(obj){
  CharacterStats.call(this, obj);
  this.faction = obj.faction;
  this.weapons = obj.weapons;
  this.language = obj.language;
  if (obj.faction === 'Knight'){
    this.attack = obj.attack;
    this.throw = obj.throw;
  }
  if (obj.faction === 'Boss'){
    this.cast = obj.cast;
  }
}

// ************************ Prototype(s) *************************
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
}

/*****************************************************************
 **************************** Objects ****************************
 *****************************************************************/
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

  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 9999,
    name: 'Champion',
    faction: 'Knight',
    weapons: [
      '2H Sword',
      'Dart'
    ],
    language: 'Human',
    attack: function(monster, dmg){
      monster.hp -= dmg;
      if (monster.hp <= 0){
        return monster.destroy();
      }
      return `${this.name} attacks ${monster.name} with a ${this.weapons[0]} and does ${dmg} dmg.`;
    },
    throw: function(monster, dmg){
      monster.hp -= dmg;
      if (monster.hp <= 0){
        return monster.destroy();
      }
      return `${this.name} throws a ${this.weapons[1]} at ${monster.name} and does ${dmg} dmg.`;
    }
  });

  const villian = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 3,
    },
    hp: 200000,
    name: 'Dark Lord',
    faction: 'Boss',
    weapons: [
      'Wand'
    ],
    language: 'All',
    cast: function(character, spellName, dmg){
      character.hp -= dmg;
      if (character.hp <= 0){
        return character.destroy();
      }
      return `${this.name} casts ${spellName} with the ${this.weapons[0]} on ${character.name} and does ${dmg} dmg.`;
    }
  });

/*****************************************************************
 ****************************** Main *****************************
 *****************************************************************/  
  console.log(mage.createdAt); // Today's date
  console.log(JSON.stringify(archer.dimensions)); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons.toString()); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Flare', 100));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Ultima', 150));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Super Nova', 200));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Flare', 100));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Ultima', 150));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Super Nova', 200));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Flare', 100));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Ultima', 150));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Super Nova', 200));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Flare', 100));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Ultima', 150));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Super Nova', 200));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(villian.cast(hero, 'Flare', 100));
  console.log(hero.attack(villian, 5000));
  console.log(hero.throw(villian, 9999));
  console.log(`${hero.name} HP Left: ${hero.hp}`);