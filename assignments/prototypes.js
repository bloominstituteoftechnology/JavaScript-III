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

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  console.log(`${this.name} was removed from the game.`);
}



/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  console.log(`${this.name} took damage.`);
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

function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  console.log(`${this.name} offers a greeting in ${this.language}.`);
}



function Villain(badGuyAttributes) {
  Humanoid.call(this, badGuyAttributes);
  this.power = badGuyAttributes.power;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function(characterAttributes, hitDamage) {
  let healthStatus = characterAttributes.healthPoints - hitDamage;
  if (healthStatus < 1) {
    console.log(`${this.name} attacked with ${this.power} causing the loss of ${hitDamage} health points. ${characterAttributes.name} was removed from the game.`);
  } else {
  console.log(`${this.name} attacked with ${this.power} causing the loss of ${hitDamage} health points. ${characterAttributes.name}'s health is now at ${healthStatus}.`);
  }
}

function Hero(heroicAttributes) {
  Humanoid.call(this, heroicAttributes);
  this.skill = heroicAttributes.skill;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heals = function(characterAttributes, currentHealth) {
  let healingPower = 5;
  let newHealth = currentHealth + healingPower;
  if (currentHealth < 1) {
    console.log(`${this.name} tried but could not save ${characterAttributes.name}. ${characterAttributes.name} remains dead.`)
  } else {
    console.log(`${this.name} restored ${healingPower} health points to ${characterAttributes.name} bringing their total health up to ${newHealth}!`)
  }
}
 
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

  const warlock = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 3,
    },
    healthPoints: 15,
    name: 'Eliphas',
    team: 'Mordor',
    weapons: [
      'Staff',
      'Dagger',
    ],
    language: 'Enochian',
    power: 'Spell Casting',
  });

  const witch = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 1,
    },
    healthPoints: 13,
    name: 'Locasta',
    team: 'Northland',
    weapons: [
      'Bow',
      'Magic Whip',
    ],
    language: 'Theban',
    skill: 'Magical Regeneration',
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

  console.log(warlock.attack(mage, 7)); //mage suffers fatal attack from warlock
  console.log(warlock.attack(archer, 7)); // archer damaged but still lives

  console.log(witch.heals(mage, -2)); // hero can't heal removed character
  console.log(witch.heals(archer, 3)); // hero heals damaged archer


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!