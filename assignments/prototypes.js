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

function GameObject(attributes) {
  this.createdAt = attributes.createdAt
  this.dimensions = attributes.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}

/*const gameObj = new GameObject('home', [5, 5, 5]);

console.log(gameObj.destroy());*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributeStats) {
  GameObject.call(this, attributeStats)
  this.hp = attributeStats.hp
  this.name = attributeStats.name
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`
};


/*const newGuy = new CharacterStats(10, 'Bob');

console.log(newGuy.takeDamage());*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributeHumanoids) {
  CharacterStats.call(this, attributeHumanoids)
  this.faction = attributeHumanoids.faction
  this.weapons = attributeHumanoids.weapons
  this.language = attributeHumanoids.language
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
}

Humanoid.prototype.defeat = function() {
  console.log(`${this.name} was defeated in battle`);
}

Humanoid.prototype.victory = function() {
  console.log(`${this.name} was triumphed over the enemy!`);
}




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


  function Hero(heroTraits) {
    Humanoid.call(this, heroTraits)
    this.morals = heroTraits.morals
    this.selflessness = heroTraits.selflessness
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.rescue = function() {
    return `The hero, ${this.name} with their ${this.morals} rescued an innocent citizen`
  }

  Hero.prototype.quickSlash = function(target) {
    let attackPoints = Math.floor((Math.random() * 10) + 1);
    let critChance = Math.floor((Math.random() * 20) + 1);
    let crit = false;

    if(critChance > 9) {
      attackPoints *= 2;
      crit = true;
    }

    console.log(`${this.name} attacked ${target.name}, ${attackPoints} damage`);

    if(crit) {
      console.log('CRITICAL HIT')
    }

    target.hp -= attackPoints;
  }

  function Villian(villianTraits) {
    Humanoid.call(this, villianTraits)
    this.minions = villianTraits.minions
  }

  Villian.prototype = Object.create(Humanoid.prototype)

  Villian.prototype.evilLaugh = function() {
    return `${this.name} and his ${this.minions} minions laugh maniacally`
  }

  Villian.prototype.powerStrike = function(target) {
    let attackPoints = Math.floor((Math.random() * 10) + 1);
    let critChance = Math.floor((Math.random() * 20) + 1);
    let crit = false;

    if(critChance > 12) {
      attackPoints *= 1.5;
      let crit = true;
    }

    target.hp -= attackPoints;

    if(crit) {
      console.log('CRITICAL HIT')
    }
    
    console.log(`${this.name} attacked ${target.name}, ${attackPoints} damage`);
  }

  const king = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 25,
    name: 'King Niceguy',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
    morals: 'High Moral Code',
    selflessness: true
  });

  const nemesis = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 25,
    name: 'Lord Baddude',
    faction: 'Dark Knights',
    weapons: [
      'Long Blade'
    ],
    language: 'Common Toungue',
    minions: 10
  });

console.log(king.rescue());
console.log(king.selflessness);

console.log(nemesis.evilLaugh());
console.log(nemesis.minions)

while(king.hp > 0 && nemesis.hp > 0) {
  king.quickSlash(nemesis);
  console.log(`${nemesis.hp} hp remaining`);

  if(nemesis.hp <= 0) {
    nemesis.defeat();
    king.victory();
    break;
  }

  nemesis.powerStrike(king);
  console.log(`${king.hp} hp remaining`);

  if(king.hp <= 0) {
    king.defeat();
    nemesis.victory();
    break;
  }
}
