/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/** 
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(gameObj) {
  this.createdAt = gameObj.createdAt;
  this.dimensions= gameObj.dimensions;
  }

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`;
}
/**
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
 
 this.hp = stats.hp;
 this.name = stats.name;
 GameObject.call(this,stats);


}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

/**  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(human) {
  
   // this {};
  this.faction = human.faction;
  this.weapons = human.weapons;
  this.language = human.language; 
  CharacterStats.call(this,human);
  //return this {};
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
}
/*<--------- Added Constructor for Hero ------>*/
function Hero(heros) {
  this.blood = heros.blood;
  this.race = heros.race;
  Humanoid.call(this, heros);
}
// Linking the Humanoid Prototype
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.shannara = function() {
  return `${this.name} is the last remaining of the ${this.race} race.
And is the only one who can wield, ${this.weapons[0]}.`;
};

//Different fight methods for the Hero.

Hero.prototype.loosing = function() {
  this.hp -= 20;
  return `${this.name} enraged with anger for the fate of the 4 lands lunges at the ${warlock.name}, 
with the ${this.weapons[0]}.`
}
Hero.prototype.recovering = function () {

  this.hp -= 60
  return `${this.name} recovers his ${this.weapons[1]} and uses them against the ${warlock.name}.`
}


/*<--------- Added Constructor for Villain ------>*/

function Villain(villains) {
   // this {};
  this.bookOfDruids = villains.bookOfDruids;
  Humanoid.call(this, villains);
  //returns  this {};
}

// Inherits the Humanoid prototype
Villain.prototype = Object.create(Humanoid.prototype);

// Different fighting methods for the Villain
Villain.prototype.fight = function () {
       this.hp -= 10;
  return `${this.name} cuts into the palm of his hand releasing his blood to flow into the sliver river reducing his hitpoints ${this.hp}.
Reading and chanting from the ${this.bookOfDruids}`
}

Villain.prototype.dead = function () {
  this.hp -=90
  return `In the mist of his delight the ${this.name} believing to have the upper hand. Smiled and laughed.`
  
}

// Testing Hitpoint function

// function Hitpoints(hitpoints) {
//   // this {};
// CharacterStats.call(this, hitpoints);

//  //returns  this {};
// }

// Hitpoints.prototype = Object.create(CharacterStats.prototype);

// Hitpoints.prototype.kill = function () {
//   this.hp -= 30;
//   return this.hp;
// }

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



 // Added New Hero
const ohsmford = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 85,
  name: "Will Ohsmford",
  faction: "Shady Vale",
  weapons: ["The Sword Of Shannara", "Elfstones"],
  language: "Common",
  race: 'Shannara',
  blood: 'magic',
});

// Added New Villan

const warlock = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 100,
  name: 'Warlock Lord',
  faction: 'Skull Kingdom',
  weapons: [
    'Mord Wraiths',
    'Warlock Sword',
  ],
  language: 'Demon',
  bookOfDruids: 'Codex',
});


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); 
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  /* < ----- Spoilers of the Shannara Chronicles if you have not seen it or read the books ------>*/

console.log(ohsmford.name)
console.log(ohsmford.shannara())
console.log(ohsmford.loosing())

console.log(`The ${warlock.name} throws ${ohsmford.name} reducing his hitpoints to :${ohsmford.hp}. 
While he looses the ${ohsmford.weapons[1]} in the process.`)
console.log(warlock.fight())

console.log(ohsmford.recovering())
console.log(`Pushing the ${warlock.name} back away from the sliver river. But suddenly feels the ${warlock.weapons[1]} slip deep into his stomach. 
Reducing his hitpoints to ${ohsmford.hp} points`);

console.log(warlock.dead())
console.log(`Merth, the last druid calls to ${ohsmford.name}. Sending him the ${ohsmford.weapons[0]}. He slips the blade deep
into the heart of the ${warlock.name} reducing his hitpoints to ${warlock.hp}. And so the body evaporates into thin air.`)
console.log(`${ohsmford.name} now realizing that his blood is the ${ohsmford.blood} to clean the silver river. Giving his last hitpoints ${ohsmford.hp -= 5}`)
