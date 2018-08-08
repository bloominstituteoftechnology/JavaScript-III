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

//Game Object
function GameObject(gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}



//Character Stats
function CharacterStats(characterAttributes) {
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;

  GameObject.call(this, characterAttributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);


//Humanoid
function Humanoid(humanoidAttributes) {
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;

  CharacterStats.call(this, humanoidAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
 

//Methods

GameObject.prototype.destroy = function() {
  return `Object removed from the game.`;
}


CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}


Humanoid.prototype.greet = function() {
  return `${this.name} offers a gretting in ${this.language}.`
}



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


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villian(villianAttributes) {

  Humanoid.call(this, villianAttributes)
}
Villian.prototype = Object.create(Humanoid.prototype);


function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes)
}

Hero.prototype = Object.create(Humanoid.prototype);


Humanoid.prototype.attack = function(victim) {
  const chooseWeapon = Math.floor(Math.random() * this.weapons.length);
  const damage = Math.round(Math.random() * 5);
  console.log(`${this.name} attaks with ${this.weapons[chooseWeapon]}, minus ${damage} points from hp.`);
  victim.hp = victim.hp - damage;
  console.log(victim.takeDamage());
  console.log(`Minus ${damage} points, the new hp is ${victim.hp}.`);
  if (victim.hp <= 0) {
    console.log(victim.destroy());
    console.log(`${this.name} has won.`)
  } else {
    console.log(`Next turn.`)
  }
}


const bad = new Villian ({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 5,
    height: 4,
  },
  hp: 15,
  name: 'Steve',
  faction: 'Dark Woods',
  weapons: [
    'Staff of Doom',
    'Dark Magic',
    'Eternal GLass Defender',
    'Unending Tyranny'
  ],
  language: 'Infernal',
});

const good = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6,
  },
  hp: 13,
  name: 'Jeff',
  faction: 'Heavenly Forest',
  weapons: [
    'Dagger of Truth',
    'My name\'s Jeff Magic',
    'Final Achievement',
    'Enchanted Katana'
  ],
  language: 'Common',
});


function play() {
  while (bad.hp > 0 && good.hp > 0) {
    const choose = ['good', 'bad'];
    const choice = choose[Math.round(Math.random())];
    if(choice === 'bad') {
      bad.attack(good);
    } else if (choice === 'good') {
      good.attack(bad);
    }
  }
}

play();
