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

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = () => `Object was removed from the game.`;

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.hp = attributes.hp;
  this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
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

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
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




// Stretch task: 
// * Create Villian and Hero classes that inherit from the Humanoid class.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

function Villain(attributes) {
  Humanoid.call(this, attributes);
}
Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.unspeakableHorror = () => {
  orchaldaer.hp -= 7;
  orchaldaer.takeDamage();
  return "Take this Orchaldaer!"
}

function Hero(attributes) {
  Humanoid.call(this, attributes);
}
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.healing = () => {
  orchaldaer.hp += 5;
  return "Not this time genericBadGuy!!"
};
Hero.prototype.heaven = () => {
  orchaldaer.hp += 5;
  return "The light has touched our hero!"
};
Hero.prototype.fistOfLight = () => {
  genericBadGuy.hp -= 3;
  return `A huge first of light smacks genericBadGuy in the face!`
};

const genericBadGuy = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 50,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const orchaldaer = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 50,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

function fight() {
  let chance = 0;
  while (orchaldaer.hp > 0 && genericBadGuy.hp > 0) {
    chance = Math.random();
    console.log(orchaldaer.fistOfLight());
    console.log(orchaldaer.healing());
    console.log(genericBadGuy.unspeakableHorror());
    if (orchaldaer.hp <= 45 && chance <= 0.2) {
      orchaldaer.heaven;
      console.log("it works");
      console.log(orchaldaer.hp)
    }
    //   continue;
    // }

    // if (orchaldaer.hp <= 0) {
    //   return "The forces of darkness have reigned surpreme again! ";
    // }
    // else if (genericBadGuy.hp <= 0) {
    //   return genericBadGuy.destroy();
    // }
  }
  if (orchaldaer.hp <= 0) {
    return "The forces of darkness have reigned surpreme again! ";
  } else if (genericBadGuy.hp <= 0) {
    return "The forces of light have reigned surpreme again! ";
  }
}

fight();