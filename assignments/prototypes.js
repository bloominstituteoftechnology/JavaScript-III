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

// Test you work by uncommenting these 3 objects and the list of console logs below:

function GameObject(goAttrib) {
  this.createdAt = goAttrib.createdAt;
  this.dimensions = goAttrib.dimensions;
}
GameObject.prototype.destroy = function() {
  return (`${this.name} was removed from the game`);
}
// ==================== GameObject Constructor Above

function CharacterStats(csAttrib) {
  GameObject.call(this, csAttrib);
  this.hp = csAttrib.hp;
  this.name = csAttrib.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return (`${this.name} took damage`);
}
// ==================== CharacterStats Constructor Above

function Humanoid(humAttrib) {
  CharacterStats.call(this, humAttrib);
  this.faction = humAttrib.faction;
  this.weapons = humAttrib.weapons;
  this.language = humAttrib.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return (`${this.name} offers a greeting in ${this.language}`);
}
// ====================== Humanoid Constructor Above

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


function Villian (vilAttrib) {
  Humanoid.call(this, vilAttrib);
  this.damage = vilAttrib.damage;
}
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.weep = function(superhero) {
  superhero.hp -= this.damage;

  if (superhero.hp <= 0) {
    console.log(superhero.destroy());
  }

  if (superhero.hp > 0)
  console.log (`${this.name} weeps on ${superhero.name} for ${this.damage} damage!!`);
}

// ================= Villian Above

function Hero (heroAttrib) {
  Humanoid.call(this, heroAttrib);
  this.damage = heroAttrib.damage;
}
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.slice = function(enemy) {
  enemy.hp -= this.damage;

  if (enemy.hp <= 0) {
    console.log(enemy.destroy());
  }

  if (enemy.hp > 0)
  console.log (`${this.name} slices ${enemy.name} for ${this.damage} damage!!`);
}

// ==================== Hero Above

const gargamel = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1.5,
    width: 2.5,
    height: 5,
  },
  hp: 21,
  name: "Gargamel",
  faction: "Smurfville",
  weapons: [
    "Cat",
  ],
  language: "Smurf",
  damage: 4,
});


const jack = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2.2,
    width: 3.7,
    height: 5.3,
  },
  hp: 25,
  name: "Samurai Jack",
  faction: "Scotsman",
  weapons: [
    "Katana",
  ],
  language: "English",
  damage: 5,
});


jack.slice(gargamel);
gargamel.weep(jack);
jack.slice(gargamel);
jack.slice(gargamel);
gargamel.weep(jack);
gargamel.weep(jack);
jack.slice(gargamel);
jack.slice(gargamel);

console.log(gargamel.hp);
console.log(jack.hp);


