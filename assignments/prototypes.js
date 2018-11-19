/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/


const GameObject = function (attribute) {
  this.createdAt = attribute.createdAt;
  this.dimensions = attribute.dimensions;
  this.constructor.prototype.destroy = function () {
    return `${this.name} was removed from the game`;
  }
}

const CharacterStats = function (childAttribute) {
  this.hp = childAttribute.hp;
  this.name = childAttribute.name;
  GameObject.call(this, childAttribute);
  this.constructor.prototype.takeDamage = function () {
    return `${this.name} took damage.`
  }
}

const Humanoid = function (humanoindAttr) {
  this.faction = humanoindAttr.faction;
  this.weapons = humanoindAttr.weapons;
  this.language = humanoindAttr.language;
  CharacterStats.call(this, humanoindAttr);
  this.constructor.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
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
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


const Soldier = function (villianAttr) {
  Humanoid.call(this, villianAttr);
  this.constructor.prototype.attack = function (target) {
    if (target.hp > 0) {
      target.hp -= 10;
      return `${this.name} attacked ${target.name}! ${target.name} has ${target.hp} hp remaining!`
    }
    else {
      return this.destroy();
    }
  }
}

const Targaryen = function (tarAttr) {
  Humanoid.call(this, tarAttr);
  this.constructor.prototype.dracarys = function (target) {
    target.hp = 0;
    return `${this.name} used Dracarys! ${target.name} is burned to ashes...` + target.destroy();
  }
}

const jonSnow = new Soldier({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 6,
  },
  hp: 100,
  name: 'Jon Snow',
  faction: 'Night\'s Watch',
  weapons: [
    'Longclaw',
  ],
  language: 'Valyrian',
});


const nightKing = new Soldier({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 7,
  },
  hp: 99,
  name: 'The Night King',
  faction: 'Night Walker',
  weapons: [
    'Ice Blade',
  ],
  language: 'Silence',
});

const danny = new Targaryen ({
  createdAt: new Date(),
  dimensions: {
    length: 9,
    width: 6,
    height: 9,
  },
  hp: 100,
  name: 'Daenerys Targaryen',
  faction: 'Dothraki',
  weapons: [
    'Dragons',
  ],
  language: 'Valyrian',
});

console.log(jonSnow.attack(nightKing));
console.log(nightKing.attack(jonSnow));
console.log(jonSnow.attack(nightKing));
console.log(nightKing.attack(jonSnow));
console.log(jonSnow.attack(nightKing));
console.log(nightKing.attack(jonSnow));
console.log(jonSnow.attack(nightKing));
console.log(nightKing.attack(jonSnow));
console.log(danny.dracarys(nightKing));
console.log(jonSnow.greet());