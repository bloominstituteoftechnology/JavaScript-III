/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

const GameObject = function(args) {
  this.createdAt = args.createdAt;
  this.dimensions = args.dimensions;
  this.destroy = () => `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

const CharacterStats = function(args) {
  GameObject.call(this, args);

  this.hp = args.hp;
  this.name = args.name;
  this.me = 'me';
  this.takeDamage = () => `${this.name} took damage.`;
  
  // for stretch task
  this.getBeatdown = () => {
    let pointText = 'points';
    let points = --this.hp;
    if (points === 0) {
      return this.destroy();
    } else if (points < 0) {
      return `Stop! ${this.name} is already dead y'all!`;
    } else if (points === 1) {
      pointText = 'point';
    }
    return `${this.takeDamage()}\nBut ${this.name} gets back up with ${points} ${pointText} left...`;
  };
};
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
 
const Humanoid = function(args) {
  CharacterStats.call(this, args);

  this.faction = args.faction;
  this.weapons = args.weapons;
  this.language = args.language;
  this.greet = () => `${this.name} offers a greeting in ${this.language}.`;
};
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
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  console.log('\n\n\n\n-----STRETCH TASK-----');

  CharacterStats.prototype.takeDamage = function(damage) {
    return `ow! ${damage}`;
  }

  const Villain = function(args) {
    Humanoid.call(this, args);

    this.causeChaos = (victim) => {
      console.log(String(`\n\n${this.name} messes with ${victim.name}!\n\n`).toUpperCase());
      console.log(victim.getBeatdown());
    };
  };
  Villain.prototype = Object.create(Humanoid.prototype);

  const Hero = function(args) {
    Humanoid.call(this, args);

    this.read = (victim) => {
      console.log(String(`\n\n${this.name} reads ${victim.name}!\n\n`).toUpperCase());
      console.log(victim.getBeatdown());
    };
  };
  Villain.prototype = Object.create(Humanoid.prototype);

  const troll = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 2,
    name: 'Random Troll',
    faction: 'Reddit',
    weapons: [
      'Logical Fallacy',
    ],
    language: 'Memes',
  });

  const queen = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 100,
    name: 'Vanjie',
    faction: 'Drag Race',
    weapons: [
      'Backwards Strut',
    ],
    language: 'Memes',
  });


  troll.causeChaos(queen);
  queen.read(troll);
  troll.causeChaos(queen);
  queen.read(troll);
  queen.read(troll);


