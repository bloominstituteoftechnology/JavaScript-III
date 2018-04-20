/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several prototypes with their correct inheritance heirarchy.

  In this file you will be creating three prototypes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each prototype has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

const GameObject = function (parameter) {
  this.createdAt = parameter.createdAt;
  this.dimensions = parameter.dimensions;
  this.destroy = function() {
    return `${this.name} was removed from the game.`;
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

const CharacterStats = function (parameter) {
  this.hp = parameter.hp;
  this.name = parameter.name;
  GameObject.call(this, parameter);
  this.status = function() {
    if (this.hp > 0) return `${this.name} has ${this.hp} hit points left.`;
    else return `${this.name} is dead!`;
  }
  this.takeDamage = function() {
return `${this.name} took damage.`;
  }
}
CharacterStats.prototype = Object.create(GameObject.prototype);
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 const Humanoid = function (parameter) {
   this.faction = parameter.faction;
   this.weapons = parameter.weapons;
   this.language = parameter.language;
   CharacterStats.call(this, parameter);
   this.greet = function () {
     return `${this.name} offers a greeting in ${this.language}`;
   }
   this.harm = function () {
     this.hp = this.hp - 5;
   }
 }

Humanoid.prototype = Object.create(CharacterStats.prototype);




/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


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
  // * Create Villian and Hero prototype that inherit from the Humanoid prototype.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!


  const Hero = function (parameter) {
    Humanoid.call(this, parameter)
    this.smite = function () {
      this.harm.call(target);
      return `${this.name} righteously smites ${target.name} for 5 damage!`
    }
  }

  Hero.prototype = Object.create(Humanoid.prototype);



  const Villian = function (parameter) {
    Humanoid.call(this, parameter)
    this.bash = function () {
      this.harm.call(target);
      return `${this.name} brutally bashes ${target.name} for 5 damage!`
    }
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  const Mr_Hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 15,
    name: 'Mister Heroic',
    faction: 'The Good Guys',
    weapons: [
      'Shiny sword',
    ],
    language: 'Common Toungue',
  });

  const Mr_Villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 20,
    name: 'Mister Villainous',
    faction: 'The Bad Guys',
    weapons: [
      'Demonic Sword',
    ],
    language: 'Orcish',
  });

console.log(Mr_Villain.status());
console.log(Mr_Hero.status());
console.log(Mr_Hero.smite(Mr_Villain));
console.log(Mr_Villain.status());
console.log(Mr_Villain.bash(Mr_Hero));
console.log(Mr_Hero.status());
console.log(Mr_Hero.smite(Mr_Villain));
console.log(Mr_Villain.status());
console.log(Mr_Villain.bash(Mr_Hero));
console.log(Mr_Hero.status());
console.log(Mr_Hero.smite(Mr_Villain));
console.log(Mr_Villain.status());
console.log(Mr_Villain.bash(Mr_Hero));
console.log(Mr_Hero.status());