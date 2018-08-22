/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing 
  several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom 
  of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
  /*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(CSattrs) {
  this.hp = CSattrs.hp;
  this.name = CSattrs.name;
  GameObject.call(this, CSattrs);
}

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}
CharacterStats.prototype.destroy = GameObject.prototype.destroy;
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(Hattrs) {
   this.faction = Hattrs.faction;
   this.weapons = Hattrs.weapons;
   this.language = Hattrs.language;
   CharacterStats.call(this, Hattrs);
 }
 Humanoid.prototype.greet = function() {
   `${this.name} offers a greeting in ${this.language}`;
 }
 Humanoid.prototype.destroy = CharacterStats.prototype.destroy;
 Humanoid.prototype.takeDamage = CharacterStats.prototype.takeDamage;
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


  
  function Villian(Vattrs) {
    this.alignment = Vattrs.alignment;
    Humanoid.call(this, Vattrs);
  }

    Villian.prototype.blackmail = function (type) {
    type.hp = type.hp - 5;
    if (type.hp <= 0) {
    return `${type.name} has been blackmailed. ${type.destroy()}`;
    }
    else {
    return `${type.name} has been blackmailed. ${type.name} now has a health of ${type.hp}`;
    }
  }

 Villian.prototype.destroy = Humanoid.prototype.destroy;
 Villian.prototype.takeDamage = Humanoid.prototype.takeDamage;

  function Hero(Heroattrs) {
    this.alignment = Heroattrs.alignment;
    Humanoid.call(this, Heroattrs);
  }

    Hero.prototype.proselytize = function (type) {
    type.hp = type.hp - 5;
    if (type.hp <= 0) {
    return `${type.name} has been preached to about compassion. ${type.destroy()}`;
    }
    else {
    return `${type.name} has been preached to about compassion. ${type.name} now has a health of ${type.hp}`;
    }
  }

 Hero.prototype.destroy = Humanoid.prototype.destroy;
 Hero.prototype.takeDamage = Humanoid.prototype.takeDamage;

 const darkArcher = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Ramon',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Poisoned Dagger',
    ],
    language: 'Elvish',
    alignment: 'chaotic evil',
 });

 const lightKnight = new Hero ({
       createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Sira',
    faction: 'The Round Table',
    weapons: [
      'Holy Mace',
      'Shield of Light',
    ],
    language: 'Common Tongue',
 });
lightKnight.proselytize(darkArcher);
darkArcher.blackmail(lightKnight);
lightKnight.proselytize(darkArcher);
