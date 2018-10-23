/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(gameProperties) {
  this.createdAt  = gameProperties.createdAt;
  this.dimensions = gameProperties.dimensions;
}
GameObject.prototype.destroy = function() {
  if(this.name) {
    return `${this.name} was removed from the game.`;
  }
  return "Object was removed from the game.";
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterProperties) {
  GameObject.call(this, characterProperties);
  this.hp = characterProperties.hp;
  this.name = characterProperties.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
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
function Humanoid(humanoidProperties) {
  CharacterStats.call(this, humanoidProperties);
  this.faction = humanoidProperties.faction;
  this.weapons = humanoidProperties.weapons;
  this.language = humanoidProperties.language;
} 

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
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
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

let fight = function (opponent, damage) {
  if (this.hp > 0 && opponent.hp > 0) {
    console.log(`${this.name} attack ${opponent.name} with ${this.weapons}. Damage: ${damage} health points`);
    console.log(opponent.takeDamage());
    opponent.hp -= damage;
    if (opponent.hp <= 0) {
      if (opponent.canRecharge) {
        console.log(opponent.recharge(damage));
      } else {
        console.log(opponent.destroy());
        return `GAME OVER: ${this.name} killed opponent ${opponent.name}.`;
      }
    }
    return `${opponent.name} is still alive! Still has ${opponent.hp} health points`;
  } else {
    return 'Game ended';
  }
}
  function Villain(villainProperties) {
    Humanoid.call(this, villainProperties);
    this.canRecharge = false;
  }

  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.attack = fight;

function Hero(heroProperties) {
  Humanoid.call(this, heroProperties);
  this.canRecharge = heroProperties.canRecharge;
}

Hero.prototype = Object.create(Humanoid.prototype);

//a Hero can recharge health points 
Hero.prototype.recharge = function(points) {
  this.hp += points;
  return `${this.name} recharged health points by ${points}. ${this.name} has now ${this.hp} health points.`
}

Hero.prototype.shoot = fight;


const captainAmerica = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 6,
  },
  hp: 20,
  name: 'Captain America',
  faction: 'Marvel',
  weapons: [
    'Gun',
    'shield',
  ],
  language: 'English',
  canRecharge: true
});

const redSkull = new Villain ({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 7,
  },
  hp: 10,
  name: 'Red Skull',
  faction: 'Marvel',
  weapons: [
   'Gun',
   'grenade',
  ],
  language: 'English',
});

console.log("******************* FIGHT START ****************");
console.log(`Health points for ${captainAmerica.name}: ${captainAmerica.hp}`);
console.log(`Health points for ${redSkull.name}: ${redSkull.hp}`);
console.log(captainAmerica.greet());
console.log(redSkull.attack(captainAmerica, 20));
console.log(captainAmerica.shoot(redSkull, 2));
console.log(captainAmerica.shoot(redSkull, 10));
console.log("******************* FIGHT END ****************");
