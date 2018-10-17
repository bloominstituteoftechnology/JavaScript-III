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
// function GameObject(data) {
//   this.createdAt = new Date();
//   this.dimensions = data.dimensions;
// }

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`;
// }

class GameObject {
  constructor(data) {
    this.createdAt = new Date();
    this.dimension = data.dimension;
  }

  destroy() {
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

// function CharacterStats(data) {
//   GameObject.call(this, data);
//   this.hp = data.hp;
//   this.name = data.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// }

class CharacterStats extends GameObject {
  constructor(data) {
    super(data);
    this.hp = data.hp;
    this.name = data.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
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
//  function Humanoid(data){
//   CharacterStats.call(this, data);
//   this.faction = data.faction;
//   this.weapons = data.weapons;
//   this.language = data.language;
//  }

//  Humanoid.prototype = Object.create(CharacterStats.prototype);

//  Humanoid.prototype.greet = function() {
//    return `${this.name} offers a greeting in ${this.language}`;
//  }

 class Humanoid extends CharacterStats {
   constructor(data) {
     super(data);
     this.faction = data.faction;
     this.weapons = data.weapons;
     this.langauge = data.language;
   }
   greet() {
     return `${this.name} offers a greeting in ${this.language}`;
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

  // function Hero(data) {
  //   Humanoid.call(this, data);
  //   this.morals = data.morals;
  //   this.disposition = data.disposition;
  // }

  // Hero.prototype = Object.create(Humanoid.prototype);

  // Hero.prototype.tisButAScratch = function() {
  //     this.hp -= 5;
  //     if (this.hp <= 0 ) {return `${this.name} has been killed.`};
  //     return `${this.name} has ${this.hp} health remaining.`;
  // }

  // Hero.prototype.prettyFlowers = function(foe) {
  //   foe.hp -= 6;
  //   if (foe.hp <= 0) {return `${this.name} has killed ${foe.name}!`;}
  //   return `${foe.name} has ${foe.hp} health remaining.`;
  // }

  class Hero extends Humanoid {
    constructor(data) {
      super(data);
      this.morals = data.morals;
      this.disposition = data.disposition;
    }

    tisButAScratch() {
      this.hp -= 3;
      if (this.hp <= 0) {return `${this.name} has been killed.`;}
      return `${this.name} has ${this.hp} health remaining.`;
    }

    prettyFlowers(foe) {
      foe.hp -= 6;
      if (foe.hp <= 0) {return `${this.name} has killed ${foe.name}!`;}
      return `${foe.name} has ${foe.hp} health remaining.`;
    }
  }

  const jeff = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 1,
      height: 8,
    },
    hp: 15,
    name: 'Jeff',
    faction: 'DandyBoys',
    weapons: [
      'Hugs',
      'Kisses',
    ],
    language: 'Flowery Language',
    morals: 'exquisite',
    disposition: 'gentleman',
  })
  console.log(jeff.name);
  // console.log(jeff.tisButAScratch());
  // console.log(jeff.tisButAScratch());
  // console.log(jeff.tisButAScratch());
  console.log(jeff.prettyFlowers(archer));

  // function sadBoy(data) {
  //   Humanoid.call(this, data);
  //   this.level = data.level;
  //   this.disposition = data.disposition;

  // }

  // sadBoy.prototype = Object.create(Humanoid.prototype);

  // sadBoy.prototype.existentialAngst = function(foe) {
  //   foe.hp -= 3;
  //   if (foe.hp <= 2) {
  //     foe.disposition = 'sad';
  //     return `${foe.name} is now too ${foe.disposition} to go on living.`;
  //   }
  //   return `${this.name}'s sadness has crushed ${foe.name}'s will to live. ${foe.hp} health remaining.`;
  // }

  // sadBoy.prototype.youDontKnowMyPain = function() {
  //   this.disposition = 'miserable';
  //   this.hp -= 1;
  //   return `${this.name}'s self-pity has struck again, ${this.name}'s health is now down to ${this.hp}.`;
  // }

  class sadBoy extends Humanoid {
    constructor(data) {
      super(data);
      this.level = data.level;
      this.disposition = data.disposition;
    }

    existentialAngst(foe) {
      foe.hp -= 3;
      if (foe.hp <= 2) {
      foe.disposition = 'sad';
      return `${foe.name} is now too ${foe.disposition} to go on living.`;
      }
      return `${this.name}'s sadness has crushed ${foe.name}'s will to live. ${foe.hp} health remaining.`;
    }

    youDontKnowMyPain() {
      this.disposition = 'miserable';
      this.hp -= 1;
      return `${this.name}'s self-pity has struck again, ${this.name}'s health is now down to ${this.hp}.`;
    }
  }


  const carl = new sadBoy({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 7,
      height: 3,
    },
    hp: 7,
    name: 'Carl',
    faction: 'Sad Boys',
    weapons: [
      'crippling depression',
      'soul-crushing regret',
    ],
    language: 'sadBoy twitter memes',
    morals: 'dead like his soul',
    disposition: 'apathetic',
  })

  console.log(carl);
  console.log(carl.youDontKnowMyPain());
  console.log(carl.existentialAngst(jeff));
  console.log(carl.existentialAngst(jeff));
  console.log(carl.existentialAngst(jeff));
  console.log(carl.existentialAngst(jeff));
  console.log(carl.existentialAngst(jeff));
  console.log(carl.existentialAngst(jeff));