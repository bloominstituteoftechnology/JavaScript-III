/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the 
  bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject(gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return 'Object was removed from the game.';
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers 
    a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}
 
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
  // * Give the Hero and Villians different methods that could be used to remove health 
  //   points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// Villain
function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.points = villainAttributes.points;
  this.health = villainAttributes.health;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.gainPoints = function() {
  this.points ++;
  console.log(`${this.points} total points for ${this.name}!`);
}

Villain.prototype.loseHealth = function() {
  this.health --;
  if (this.health <= 0) {
    this.destroy();
    console.log(`${this.name} lost`);
    return
  }
  console.log(`${this.name} has ${this.health} health left!`)
}

Villain.prototype.hit = function(opponent) {
  console.log(`\n${this.name} hit ${opponent.name} with ${this.weapons[0]}!`)
  this.gainPoints();
  console.log(opponent.takeDamage());
  opponent.loseHealth();
}

// Hero
function Hero(heroAttributes) {
  Villain.call(this, heroAttributes);
}

Hero.prototype = Object.create(Villain.prototype);


const badGuy = new Villain({
  createdAt: new Date(),
  dimensions: mage.dimensions,
  hp: mage.hp,
  name: mage.name,
  faction: mage.faction,
  weapons: mage.weapons,
  language: mage.language,
  points: 0,
  health: 10
});

const goodGuy = new Hero({
  createdAt: new Date(),
  dimensions: swordsman.dimensions,
  hp: swordsman.hp,
  name: swordsman.name,
  faction: swordsman.faction,
  weapons: swordsman.weapons,
  language: swordsman.language,
  points: 0,
  health: 10
});

console.log(`\n*****************************\nNew Game: ${badGuy.name} vs ${goodGuy.name}\n*****************************`)
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);
goodGuy.hit(badGuy);
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);
goodGuy.hit(badGuy);
badGuy.hit(goodGuy);
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);
goodGuy.hit(badGuy);
goodGuy.hit(badGuy);
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);
badGuy.hit(goodGuy);
goodGuy.hit(badGuy);