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
function GameObject(gamOb) {
    this.createdAt = gamOb.createdAt;
    this.dimensions = gamOb.dimensions;
}
GameObject.prototype.destroy = function () {
  return 'Object was removed from the game.';
};
console.log(GameObject);


/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charStat) {
  GameObject.call(this, charStat);
    this.healthPoints = charStat.healthPoints;
    this.name = charStat.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};

console.log(CharacterStats);


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(hum) {
  CharacterStats.call(this, hum);
    this.team = hum.team;
    this.weapons = hum.weapons;
    this.language = hum.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
};



 function Hero(mainHero) {
  Humanoid.call(this, mainHero);
    this.magicPoints = mainHero.magicPoints;
    this.armor = mainHero.armor;
 }
 Hero.prototype = Object.create(Humanoid.prototype);



 function Villain(mainVil) {
  Humanoid.call(this, mainVil);
    this.sorcery = mainVil.sorcery;
    this.armor = mainVil.armor;
    this.breath = mainVil.breath;
 }
 Villain.prototype = Object.create(Humanoid.prototype);



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

  const theone = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 3, 
        width: 3, 
        height: 3
      },
      healthPoints: 25,
      magicPoints: 25,
      armor: 10,
      name: 'Hubris',
      team: 'The Winning Team',
      weapons: [
        'Confident Gaze',
        'Sharp Words',
      ],
      language: 'Careless Whispers',
  });

  const dragon = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 30,
        width: 9,
        height: 16,
      },
      healthPoints: 60,
      sorcery: 30,
      armor: 20,
      breath: 'Eww! Gross!',
      name: 'Soulshucker, World Blight and Clam Enthusiast',
      team: 'I',
      weapons: [
        'Claw, Claw, Bite',
        'Breathe Chowder',
        'Tail Swipe',
      ],
      language: 'Ancient Dank',
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
  console.log(theone.greet());
  console.log(dragon.greet());


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!