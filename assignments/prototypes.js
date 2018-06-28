/*
  Object oriented design is commonly used in video games.  For this part of the
  assignment you will be implementing several constructor functions with their
  correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject,
  CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use
  the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properites and methods that are defined
  in their block comments below:
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
  $(this.defeat).html(`<h1>${this.name} has been defeated!</h1>`).addClass('defeat');
};
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
CharacterStats.prototype.takeDamage = function(dmg, dam) {
  let damage = Math.floor(Math.random() * Math.floor(dmg));
  this.hp -= damage;
  $(this.dam).html(`${this.name} did ${damage} damage`);
  // if (damage == 0) {
  //   return `${this.name} dodged the attack!`;
  // }
  // this.hp -= damage;
  // return `${this.name} took ${damage} damage. ${this.hp} HP remains`;
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
function Humanoid(attr) {
  CharacterStats.call(this, attr);
  this.faction = attr.faction;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

function Hero(attr) {
  Humanoid.call(this, attr);
  this.disp = attr.disp;
  this.dam = attr.dam;
  this.defeat = attr.defeat
}
Hero.prototype = Object.create(Humanoid.prototype);

function Villain(attr) {
  Humanoid.call(this, attr);
  this.disp = attr.disp;
  this.dam = attr.dam;
  this.defeat = attr.defeat;
}
Villain.prototype = Object.create(Humanoid.prototype);

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 200,
  name: "Klaus the Bright",
  faction: "Warriors of Light",
  weapons: {
    name: "Shining Sword of Holy Destruction",
    damage: 25
  },
  language: "Common Toungue",
  dam: document.getElementsByClassName("hero-dmg"),
  disp: document.getElementsByClassName("hero"),
  defeat: document.getElementsByClassName("hero-defeat")
});

const demonKing = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 500,
  name: "Aykrd King of Demons",
  faction: "Demons",
  weapons: {
    name: "Corrupted Battleax of Despair",
    damage: 10
  },
  language: "Demon Tongue",
  dam: document.getElementsByClassName("villain-dmg"),
  disp: document.getElementsByClassName("villain"),
  defeat: document.getElementsByClassName("villain-defeat")
});

function battle(hero, villain) {

  // let turn = 1;
  // console.log(
  //   `Here begins the battle between ${hero.name} and ${villain.name}!`
  // );
  if (hero.hp > 0 && villain.hp > 0) {
    // console.log(
    //   `${hero.name} HP: ${hero.hp}         ${villain.name} HP: ${villain.hp}`
    // );
    if (hero.hp > 0) {
      // console.log(
      //   `${hero.name} attacks ${villain.name} with ${hero.weapons.name}`
      // );
      villain.takeDamage(hero.weapons.damage);
    }
    if (villain.hp > 0) {
      // console.log(
      //   `${villain.name} attacks ${hero.name} with ${villain.weapons.name}`
      // );
      hero.takeDamage(villain.weapons.damage);
    }
  }
  if (hero.hp <= 0) {
    // console.log(`${villain.name} has emerged victorious! All is lost!`);
    hero.destroy();
  } else if (villain.hp <= 0) {
    // console.log(
    //   `Rejoice! For our hero ${hero.name} has conquered evil once and for all!`
    // );
    villain.destroy();
  }
  $(hero.disp).html(
    `<h5 class="card-title">${hero.name}</h5><p class="card-text">HP: ${
      hero.hp
    }</p>`
  );

  $(villain.disp).html(
    `<h5 class="card-title">${villain.name}</h5><p class="card-text">HP: ${
      villain.hp
    }</p>`
  );
}

$(".go").on("click", function() {
  battle(hero, demonKing);
});

/*
 * Inheritance chain: Humanoid -> CharacterStats -> GameObject
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

//Test you work by uncommenting these 3 objects and the list of console logs below:

/*
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
*/

// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!