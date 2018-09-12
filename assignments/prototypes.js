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

// Object
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions = {
    length: attributes.dimensions.length,
    width: attributes.dimensions.width,
    height: attributes.dimensions.height
  };
  this.name = attributes.name;
}

// Prototypes
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
}

// Init prototype
CharacterStats.prototype = Object.create(GameObject.prototype);

// Prototypes
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.maxHP = humanoidAttributes.maxHP;
}

// Init prototype
Humanoid.prototype = Object.create(CharacterStats.prototype);

// Prototypes
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

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
    height: 1
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Toungue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Toungue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
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

// DOM MANIPULATION
const villain = document.getElementById('villain');
const hero = document.getElementById('hero');
const messages = document.querySelector('.messages');

// HP BARS
villainHPBar = document.querySelector('.villain-hp-bar');

// HERO
function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}

// Init prototype
Hero.prototype = Object.create(Humanoid.prototype);

// HERO PROTOTYPE METHODS
Hero.prototype.castSpell = function(villain) {
  if (villain.hp >= 1) {
    villain.hp -= 1;
    villainHPBar.style.width =
      ((villain.hp / villain.maxHP) * 100).toString() + '%';
    villainHPBar.style.color = 'red';
    messages.textContent = `${villain.takeDamage()}... HP: ${villain.hp}`;
  } else if ((villain.hp = 0)) {
    return villain.destroy();
  } else {
    return 'Overkill!';
  }
};

function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
}

// Init prototype
Villain.prototype = Object.create(Humanoid.prototype);

// * Create two new objects, one a villain and one a hero and fight it out with methods!
const swordsguy = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  hp: 15,
  maxHP: 15,
  name: 'Michael Scott',
  faction: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Toungue'
});

const archie = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  hp: 10,
  maxHP: 10,
  name: 'Lex Luther',
  faction: 'Luther Corp',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(swordsguy.castSpell(archie));

console.log(archie.hp);

villain.addEventListener('click', e => {
  if (e.target.classList.contains('attack-btn')) {
    console.log('hello');
  }
});

hero.addEventListener('click', e => {
  if (e.target.classList.contains('attack-btn')) {
    console.log('hello');
    swordsguy.castSpell(archie);
  }
});
