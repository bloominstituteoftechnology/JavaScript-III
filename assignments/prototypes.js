/*
  Object oriented design is commonly used in video games. 
  
   For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}

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

function Humanoid(human) {
  CharacterStats.call(this, human);
  this.team = human.team;
  this.weapons = human.weapons;
  this.language = human.language;
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
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
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
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if
// health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// HERO------------------------------------------------------
function Hero(atts) {
  Humanoid.call(this, atts);
  this.class = atts.class;
  this.damage = atts.damage;
  this.drops = atts.drops;
}
Hero.prototype = Object.create(Humanoid.prototype);

//FIGHT METHOD ------------------------------------------------
Hero.prototype.attack = function(who) {
  if (who.name == this.name) {
    console.log(`It'd be stupid to attack yourself, ${this.name}...`);
    return;
  }
  let minhit = 0;
  let maxhit = this.damage;
  let applyDamage = Math.round(Math.random() * (maxhit - minhit) + minhit);
  let randomWep = this.weapons[Math.floor(Math.random() * this.weapons.length)];
  let checkHealth = who.healthPoints - applyDamage;
  let drop = who.drops[Math.floor(Math.random() * who.drops.length)];
  if (checkHealth <= 0) {
    console.log(
      `${this.name} hit ${applyDamage} and has killed ${
        who.name
      } with ${randomWep}, ${who.destroy()}`
    );
    console.log(`${this.name} has recieved a drop of ${drop}!`);
  } else {
    console.log(
      `${this.name} attacked ${
        who.name
      } with a ${randomWep} and dealt ${applyDamage} damage! ${
        who.name
      } has ${checkHealth} health remaining!`
    );
    who.healthPoints = checkHealth;
  }
};

// VILLAIN ----------------------------------------------------
function Villain(atts) {
  Hero.call(this, atts);
}
Villain.prototype = Object.create(Hero.prototype);

// HERO CREATED -----------------------------------------------
const Batal = new Hero({
  //Batal: Brave, Heroic, Champion
  name: "Batal",
  healthPoints: 75,
  class: "Hybrid",
  damage: 110,
  drops: [
    "Rare: Golden JS Trophy",
    "Common: Ashes",
    "Uncommon: I dont need you to explain this new concept to me",
    "Very_Rare: I UNDERSTAND THIS COMPLETELY"
  ],
  weapons: [
    "Abyssal Whip",
    "Trident Of The Seas",
    "Dragon Dagger",
    "Obsidian Maul",
    "Granite Maul",
    "Staff Of Light"
  ],
  language: "English",
  dimensions: {
    length: 10,
    width: 10,
    height: 20
  }
});

// VILLAIN CREATED ---------------------------------------------
const Hades = new Villain({
  name: "Hades",
  healthPoints: 75,
  class: "Mage",
  damage: 100,
  drops: [
    "Rare: Golden JS Trophy",
    "Common: Ashes",
    "Uncommon: I dont need you to explain this new concept to me",
    "Very_Rare: I UNDERSTAND THIS COMPLETELY"
  ],
  weapons: [
    "Batwing Wand and Book",
    "Lunar Staff",
    "Ahrim's Staff",
    "Vanquish",
    "Abyssal Wand and Orb",
    "Noxious Staff"
  ],
  language: "English",
  dimensions: {
    length: 20,
    width: 20,
    height: 40
  }
});

//RESULTS --------------------------------------------------------

Batal.attack(Hades);

Hades.attack(Batal);
