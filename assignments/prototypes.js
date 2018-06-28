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
function GameObject (info) {
  this.createdAt = info.createdAt;
  this.dimensions = info.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats (stats) {
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
 
function Humanoid (preferences) {
  CharacterStats.call(this, preferences);
  this.faction = preferences.faction;
  this.weapons = preferences.weapons;
  this.language = preferences.language;
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

 

  function Villain (attributes) {
    Humanoid.call(this, attributes);
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.attack = function(opponentObj) {
    const damageDealt =  Math.floor(Math.random() * 10) + 1;
    console.log(`${this.name} hit ${opponentObj.name} for ${damageDealt} damage!`);
    return damageDealt;
  }

  function Hero (attributes) {
    Villain.call(this, attributes);
  }
  
  Hero.prototype = Object.create(Villain.prototype);

 
  const orc = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 5,
    },
    hp: 100,
    name: 'Xarthix',
    faction: 'Orcs',
    weapons: [
      'Battle Axe'
    ],
    language: 'Orcish',
  });

  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 5,
    },
    hp: 100,
    name: 'Tyfor',
    faction: 'Forgotten Realm',
    weapons: [
      'Shield',
      'Broadsword',
    ],
    language: 'Common Tongue',
  });

  function battle (fighter1, fighter2) {
    let fighter1HP = fighter1.hp;
    let fighter2HP = fighter2.hp;
    let initiative = Math.random();
    console.log(`${fighter1.name} and ${fighter2} have engaged in a fight to the DEATH!`)
    while (fighter1HP >= 0 && fighter2HP >= 0) {
      if (initiative < 0.5) {
        fighter2HP -= fighter1.attack(fighter2);
        console.log(`${fighter2.name} has ${fighter2HP} hp remaining!`);
      } else {
        fighter1HP -= fighter2.attack(fighter1);
        console.log(`${fighter1.name} has ${fighter1HP} hp remaining!`);
      }
      initiative = Math.random();
    }
    if (fighter1HP <= 0) {
      return `${fighter2.name} has defeated ${fighter1.name} in combat!`;
    } else {
      return `${fighter1.name} has defeated ${fighter2.name} in combat!`;
    }
  }
  
  battle(orc, knight);