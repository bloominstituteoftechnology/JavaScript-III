/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several 
  constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of 
  the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  this.destroy = function () {
    return 'Object was removed from the game.';
  }
};


// Test suite here <><><><>
// const test = {
//   'createdAt': new Date(),
//   'dimensions': '1x1'
// };

// const newGameObj = new GameObject(test);
// console.log(newGameObj);
// console.log(newGameObj.destroy());

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
  this.takeDamage = function () {
    return `${this.name} took damage.`
  }
};

// test suite here
// const test = {
//   'createdAt': new Date(),
//   'dimensions': '2x2',
//   'hp': 35,
//   'name': 'Guernica'
// }

// const winifred_the_mighty = new CharacterStats(test);
// console.log('winifred the mighty', winifred_the_mighty);
// console.log(winifred_the_mighty.takeDamage());
// console.log(winifred_the_mighty.destroy());

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(characteristics) {
  CharacterStats.call(this, characteristics);
  this.faction = characteristics.faction;
  this.weapons = characteristics.weapons;
  this.language = characteristics.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  };
};


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   hp: 5,
  //   name: 'Bruce',
  //   faction: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Toungue',
  // });

  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   hp: 15,
  //   name: 'Sir Mustachio',
  //   faction: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Toungue',
  // });

  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   hp: 10,
  //   name: 'Lilith',
  //   faction: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.hp); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.faction); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  function Villain(mostWantedPoster) {
    Humanoid.call(this, mostWantedPoster);
    this.power = mostWantedPoster.power;
  }

  Villain.prototype.evilCackle = function() {
    console.log(`Mwahaha I will rule with my mighty ${this.power}`);
  }

  const villanWillansMWP = {
    'power': 'fireballs'
  }

  const villanWillan = new Villain(villanWillansMWP);

  // console.log(villanWillan);
  // villanWillan.evilCackle();

// hero <><><><><><><><

  function Hero(royalBanner) {
    Humanoid.call(this, royalBanner);
    this.strength = 'Agility';
  }

  Hero.prototype.beatChest = function() {
    console.log(`Thump thump thump ouch!`);
  }

  const royalBanner = {
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Mutsy',
    faction: 'Drunken Rabbits Orchestra',
    weapons: [
      'sharp tongue',
    ],
    language: 'An Uncommon Tongue'
  }

  const mutorgTheHumble = new Hero(royalBanner);

  console.log(mutorgTheHumble);
  console.log(mutorgTheHumble.beatChest());
  mutorgTheHumble.hp = 5;
  console.log(mutorgTheHumble);


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!