/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(gameObjAttributes) {
  this.createdAt = gameObjAttributes.createdAt;
  this.dimensions = gameObjAttributes.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};


/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charStatAttributes) {
  GameObject.call(this, charStatAttributes);
  this.healthPoints = charStatAttributes.healthPoints;
  this.name = charStatAttributes.name;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(huAttributes) {
  CharacterStats.call(this, huAttributes);
  this.team = huAttributes.team;
  this.weapons = huAttributes.weapons;
  this.language = huAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
 

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


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


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villain(vilAttributes) {
    Humanoid.call(this, vilAttributes);
  };

  Villain.prototype.attack = function(char, points) {
    let updateHealth = char.healthPoints -= points;
    if (char.healthPoints <= 0) {
      return `${char.name} is out of health!`;
    } else return `${this.name} attacked ${char.name}! ${char.name}'s health is now ${updateHealth}.`;
  }


  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
  };

  Hero.prototype = Object.create(Villain.prototype);

  const dragon = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 1,
      height: 2,
    },
    healthPoints: 20,
    name: 'Draco',
    team: 'Evil Folk',
    weapons: [
      'Fire',
      'Scales',
    ],
    language: 'Roarish',
  });

  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 18,
    name: 'Knight E. Night',
    team: 'The Round Table',
    weapons: [
      'Slingshot',
      'Grenade Launcher',
    ],
    language: 'Dutch',
  });

  function Reviver(reviverAttributes) {
    Humanoid.call(this, reviverAttributes);
  }

  Reviver.prototype.revive = function(char, points) {
    
    if (char.healthPoints > 0) {
      return `${char.name}'s health is ${char.healthPoints} and does not need to be revived.`;
    } else {
      let reviveHealth = char.healthPoints += points;
      return `${this.name} revived ${char.name}! ${char.name}'s health is now ${reviveHealth}.`;
    }
  }

  Reviver.prototype.medicine = function(char, points) {
    if (char.healthPoints > 0) {
      let updateHealth = char.healthPoints += points;
      return `${char.name} received medicine from ${this.name} and now has a health of ${updateHealth}.`;
    } else {
      return `${char.name} needs to be revived before ${this.name} can give them medicine.`;
    }
  }

const medicineMan = new Reviver({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 1,
  },
  healthPoints: 100,
  name: 'Wingapo',
  team: 'Airbenders',
  weapons: [
    'Glowing Staff'
  ],
  language: 'Chinese',
});


console.log(dragon.attack(knight, 2));
console.log(knight.attack(dragon, 5));
console.log(knight.attack(dragon, 5));
console.log(dragon.attack(knight, 4));
console.log(knight.attack(dragon, 5));
console.log(knight.attack(dragon, 5));
console.log(dragon.healthPoints);
console.log(medicineMan.revive(dragon, 3));
console.log(dragon.healthPoints);
console.log(medicineMan.revive(dragon, 3));
console.log(medicineMan.medicine(knight, 2));
console.log(knight.attack(dragon, 3));
console.log(medicineMan.medicine(dragon, 2));
