/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}




/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.hp = attr.hp;
  this.name = attr.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  let damage = Math.floor(Math.random() * 5);
  this.hp -= damage;
  return `${this.name} took ${damage} damage. They are at ${this.hp} health!`;

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

function Humanoid(attr){
  CharacterStats.call(this, attr);
  this.faction = attr.faction;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
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
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function fightItOut(hero, villian){
    console.log(`${villian.name} is attempting to commit a felony!`);
    while(hero.hp > 0 && villian.hp > 0){
      console.log(villian.commitCrime());
      console.log(hero.takeDamage());
      console.log(hero.foilRobbery());
      console.log(villian.takeDamage());
    }
    if(hero.hp > 0){
      console.log(`${hero.name} has defeated ${villian.name}!`);
    }else if(this.rival.hp > 0){
      console.log(`$villian.name} has gotten away with his ill gotten gains!`);
    }else {
      console.log('Something effed up somewhere...');
    }
  }

  function Villian(attr) {
    Humanoid.call(this, attr);
    this.enemy = attr.enemy;
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  Villian.prototype.commitCrime = function() {
    let comeBacks = ['Nothing can stop me!', 'Come to my aid Minions!', ':evilcackle:'];
    return comeBacks[Math.floor(Math.random()*comeBacks.length)];
  }

  function Hero(attr) {
    Humanoid.call(this, attr);
    this.rival = attr.rival;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.foilRobbery = function() {
    let heroActions = ['Stop, Evil-Doer!', 'Nothing can stop Lady Justice!', ':heroicpose:'];
    return heroActions[Math.floor(Math.random()*heroActions.length)];
  }

  const deadBanshee = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 30,
    name: 'The Death Banshee',
    faction: 'Association of Evil-Doers',
    weapons: [
      'Scream',
      'Ghost Powers',
    ],
    language: 'English',
    enemy: '',
  });

  const shiningKnight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 35,
    name: 'The Shining Knight',
    faction: 'J.O.O.D.',
    weapons: [
      'Plate Armor',
      'Light Sword',
    ],
    language: 'English',
    rival: '',
  });

  fightItOut(shiningKnight, deadBanshee);
