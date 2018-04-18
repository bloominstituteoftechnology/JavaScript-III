/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined below:

  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'

  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype

  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats

  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.

  Stretch task:
  * Create Villian and Hero classes that inherit from the Humanoid class.
  * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  * Create two new objects, one a villian and one a hero and fight it out with methods!
*/

// ==================
// === GameObject ===
// ==================
function GameObject(gameAttributes){
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name || 'Object'} was removed from the game`;
};


// ======================
// === CharacterStats ===
// ======================
function CharacterStats(characterAttributes){
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.mp = characterAttributes.mp; // Additional for stretch task
  this.sp = characterAttributes.sp; // Additional for stretch task
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
};


// ================
// === Humanoid ===
// ================
function Humanoid(humanoidAtributes){
  CharacterStats.call(this, humanoidAtributes);
  this.faction = humanoidAtributes.faction;
  this.weapons = humanoidAtributes.weapons;
  this.spells = humanoidAtributes.spells; // Additional for stretch
  this.language = humanoidAtributes.language;
  this.equippedWeapon = 'Unarmed'; // Additional for stretch
  this.defaultAttackDamage = -5; // Additional for stretch
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
};

// Additional for stretch
Humanoid.prototype.equipWeapon = function(weapon){
  if(this.weapons[weapon] !== undefined){
    this.equippedWeapon = this.weapons[weapon];
    return `${this.name} has equipped the ${this.equippedWeapon.name}`;
  }

  return `${this.name} is unarmed.`
};

Humanoid.prototype.attack = function(target){
  if(this.equippedWeapon === 'Unarmed'){
    target.hp += -5;
    return `${this.name} engages in hand to hand combat.\n`
  } else {
    target.hp += this.weapons[this.equippedWeapon].damage;
    return `${this.name} attacked ${target.name} with the ${this.equippedWeapon}`;
  }
};

Humanoid.prototype.powerAttack = function(){

};

Humanoid.prototype.castSpell = function(spell, target){
  if(this.mp >= this.spells[spell].cost){
    this.mp += this.spells[spell].cost;
    target.hp += this.spells[spell].damage;
    return `${this.name} cast ${this.spells[spell].name}. ${target.name}'s health is now ${target.hp}.`;
  } else {
    return `${this.name} does not have enough Magic Points to cast ${this.spells[spell].name}.`;
  }
};
 
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


// Stretch Task:

// ===============
// === Villian ===
// ===============
function Villian(villianAttributes){
  Humanoid.call(this, villianAttributes);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.resurrection = function(){
  // when health reaches 0 villain randomly resurrects or dies
};

// ============
// === Hero ===
// ============
function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes);
  this.dragonShouts = [
    {
      'name': 'Fire Breath',
      'wordsOfPower': 'Yol Toor Shol!',
      'damage': -50,
      'effect': 'Your opponent has been engulfed in flames.'
    },
    {
      'name': 'Ice Form',
      'wordsOfPower': 'Iiz Slen Nus!',
      'damage': -50,
      'effect': 'Your opponent has been frozen solid.'
    },
    {
      'name': 'Marked for Death',
      'wordsOfPower': 'Krii Lun Aus!',
      'damage': -30,
      'effect': 'Your opponent grows weaker.'
    },
    {
      'name': 'Unrelenting Force',
      'wordsOfPower': 'Fus Ro Dah!',
      'damage': -15,
      'effect': 'Your opponent is thrown back a distance.'
    },
    {
      'name': 'Soul Tear',
      'wordsOfPower': 'Rii Vaaz Zol!',
      'damage': -90,
      'effect': 'Cut through your opponent\'s flesh and shatter their soul.'
    }
  ];
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.dragonShout = function(target){
  if(this.mp >= 70){
    const shout = this.dragonShouts[Math.floor(Math.random() * this.dragonShouts.length)];

    target.hp += shout.damage;
    this.mp += -70;

    return `(${shout.name}) ${shout.wordsOfPower} \n${shout.effect}`;
  } else {
    return `${this.name} does not have enough Magic Points to perform a shout.`;
  }
};

// Test Stretch Task:
const vampire = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  hp: 360,
  mp: 400,
  name: 'Harkon',
  faction: 'Volkihar',
  weapons: [
    'Sword'
  ],
  language: 'Common Tongue'
});

const dragonborn = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  hp: 315,
  mp: 225,
  sp: 300,
  name: 'Dovahkinn',
  faction: 'Dawnguard',
  weapons: {
    'dawnguard-warhammer': {
      'name': 'Dawnguard Warhammer',
      'damage': -22
    }
  },
  language: 'Common Tongue',
  spells: {
    'restore' : {
      'name': 'Restoration',
      'cost': -50,
      'damage': +25
    },
    'lightning' : {
      'name': 'Lightning Bolt',
      'cost': -50,
      'damage': -25
    }
  }
});

console.log(dragonborn);
console.log(dragonborn.equipWeapon('dawnguard-warhammer'));
console.log(dragonborn.castSpell('restore', dragonborn));
console.log(dragonborn.castSpell('restore', dragonborn));
console.log(dragonborn.castSpell('restore', dragonborn));
console.log(dragonborn.dragonShout(vampire));
console.log(dragonborn.dragonShout(vampire));

