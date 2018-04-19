/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/


// === GameObject ===
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`
}


// === CharacterStats ===

function CharacterStats(attributes) {
  this.hp = attributes.hp;
  this.name = attributes.name;
  GameObject.call(this, attributes)
}
CharacterStats.prototype = Object.create(GameObject.prototype)
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`
}



// === Humanoid ===
function Humanoid(attributes) {
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  CharacterStats.call(this, attributes)
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
}

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
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

// What's in your villian?
function Villian(attributes) {
  Humanoid.call(this, attributes);
}
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.villian_attack = function (hero) {
  --hero.hp;
  if (hero.hp <= 0) {
    return "I hath slain thee!"
  } else {
    return hero.hp;
  }
}
Villian.prototype.death = function (villian) {
  villian.hp === 0;
  return `\n You have slain ${villian.name}, thou vicious beast!`
}

// The makings of heroes
function Hero(attributes) {
  Humanoid.call(this, attributes);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.hero_attack = function (villian) {
  --villian.hp;
  if (villian.hp <= 0) {
    return "I have slain thee"
  } else {
    return villian.hp;
  }
}
Hero.prototype.kill_move = function(villian) {
  let triumph = `I have killed thee, thou ruffian! [translated from Meowish]`;
  let villianDeath = Villian.prototype.death(villian);
  let heroWins = triumph + villianDeath;
  return heroWins;
  }

Hero.prototype.hero_revive = function () {
    return ++this.hp;
  }

// Our valiant heroes
  const robertLazarus = new Hero({
    createdAt: new Date(),
    hp: 20,
    name: 'Robert Lazarus',
    faction: 'Small Town Flat Living in a City Flat',
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    weapons: [
      'Teeth',
      'Claws',
    ],
    language: 'Meowish',
  });

  const dylanThomas = new Hero({
    createdAt: new Date(),
    hp: 20,
    name: 'Dylan Thomas',
    faction: 'Small Town Cat Living in a City Flat',
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    weapons: [
      'Teeth',
      'Claws',
    ],
    language: 'Meowish',
  });

// The foes in our tale!
  const windows = new Villian({
    createdAt: new Date(),
    hp: 2,
    name: 'Window Screen',
    faction: 'Apartment',
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    weapons: [
      'Grate',
      'Glass',
    ],
    language: 'None',
  });
  console.log(windows)

  const garbageDisposal = new Villian({
    createdAt: new Date(),
    hp: 2,
    name: 'Garbage Disposal',
    faction: 'Apartment',
    weapons: [
      'Spinny metal of doom',
      'Horrible grating noise',
    ],
    language: 'None',
  })

console.log(robertLazarus)
console.log(windows.villian_attack(dylanThomas))
console.log(windows.villian_attack(dylanThomas))
console.log(windows.villian_attack(dylanThomas))
console.log(dylanThomas.hero_revive())
console.log(dylanThomas.hero_revive())
console.log(dylanThomas.hero_revive())
console.log(dylanThomas.hero_attack(garbageDisposal))
console.log(dylanThomas.hero_attack(garbageDisposal))
console.log(dylanThomas.kill_move(windows))
