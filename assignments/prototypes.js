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

let heroHealth = 100;
let villainHealth = 100;

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return "Object was removed from the game."
}

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
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a gretting in ${this.language}.`;
}

function Hero(attributes) {
  Humanoid.call(this, attributes);
  this.attackType = attributes.attackType;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.lightAttack = function () {
  let damage = 20;
  villainHealth -= damage;

  if (villainHealth <= 0) {
    return `Judas is vanquished`;
  } else {
    return `Judas receives ${damage} damage` //Should come back to create general names for any character that takes damage
  }
}; //It is clear that object references in this function will need to be specified eventually


function Villain(attributes) {
  Humanoid.call(this, attributes);
  this.attackType = attributes.attackType;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.darkAttack = function () {
  let damage = 5;
  heroHealth -= damage;

  if (heroHealth <= 0) {
    return `Villian is vanquished`;
  } else {
    return `Villian receives ${damage} damage`
  }
}; //It is clear that object references in this function will need to be specified eventually

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

  const zoro = new Hero({
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
    attackType: "light"
  });

  const judas = new Villain({
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
    attackType: "dark"
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
  console.log(zoro.attackType); //light
  console.log(judas.attackType); //dark
  console.log(zoro.lightAttack());
  console.log(`Judas Health: ${villainHealth}`);
  console.log(judas.darkAttack());
  console.log(`Zoro health: ${heroHealth}`);
  console.log(`Zoro activated Apesh*t mode`);
  console.log(zoro.lightAttack());
  console.log(`Judas Health: ${villainHealth}`);
  console.log(zoro.lightAttack());
  console.log(`Judas Health: ${villainHealth}`);
  console.log(zoro.lightAttack());
  console.log(`Judas Health: ${villainHealth}`);
  console.log(zoro.lightAttack());

  // Stretch task:
  // * Create Villian and Hero classes that inherit from the Humanoid class.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
