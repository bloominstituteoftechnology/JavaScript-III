/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/


function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

//GameObject Methods:
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
};


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(statAttributes) {
  GameObject.call(this, statAttributes);
  this.healthPoints = statAttributes.healthPoints;
  this.name = statAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

//CharacterStats Methods: 
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

//Humanoid Methods:
CharacterStats.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
}

// === Villain 

function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.armor = villainAttributes.armor;
}

Villain.prototype = Object.create(Humanoid.prototype);

//Villain Methods: 
Villain.prototype.doDamage = function (victim, cb) {
  const damage = cb;
  victim.healthPoints = victim.healthPoints - damage;
  if (victim.healthPoints > 0){
    return `${this.name} attacked ${victim.name} -- ${victim.name} lost ${damage} health points and has ${victim.healthPoints} remaining!`
  } else {
    return `${this.name} attacked ${victim.name} -- ${victim.name} lost ${damage} health points and has been destroyed.`
  }
}

const random = function(min, max) {
  result = Math.random() * max + min;
  return Math.floor(result);
}

// === Healer

function Healer(healerAttributes) {
  Humanoid.call(this, healerAttributes);
}

Healer.prototype = Object.create(Humanoid.prototype);

Healer.prototype.heal = function (patient, cb) {
  if (patient.healthPoints > 0) {
    const health = cb;
    patient.healthPoints = patient.healthPoints + health;
    return `${this.name} healed ${patient.name} -- ${patient.name} now has ${health} health points`
  } else {
    return `Sorry, ${patient.name} cannot be revived`
  }
}



/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const bandit = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 3,
    },
    healthPoints: 10,
    name: "Karl",
    team: "",
    weapons: "club",
    language: "Common Tongue",
    armor: "Breast plate"
  })

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
  console.log(bandit).doDamage(mage, random(1, 5));
  console.log(bandit).doDamage(swordsman, random(1, 16))


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!