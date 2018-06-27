/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be
  implementing several constructor functions with their correct inheritance heirarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the
  bottom of the page to test your constructor functions.
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
function GameObject(props){
    this.createdAt = props.createdAt;
    this.dimensions = props.dimensions;
  }
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  };
  /*
    === CharacterStats ===
    * hp
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(props) {
    GameObject.call(this, props);
    this.hp = props.hp;
    this.totalHP = props.hp;
    this.name = props.name;
    this.baseAttack = props.baseAttack;
    this.alive = true;
    this.missRatio = props.missRatio;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.constructor = CharacterStats;
  // DONE
  CharacterStats.prototype.takeDamage = function(damage) {

    this.hp -= damage;

    if (this instanceof Hero) {
    this.adrenaline += (this.totalHP - this.hp) / this.totalHP;
    this.criticalHitRatio += this.adrenaline / 2;
}
    let result = '';
    if (damage === 0) {
      result = `${this.name} dodged.`;
    }

    if (this.hp < 0) {
      this.hp = 0;
      this.alive = false;
      result = this.destroy();
    }
    result = `${result}
    ${this.name} took ${damage} damage`;
    result = `${result}
    current HP: ${this.hp}
    `;
    return result;
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
  function Humanoid(props) {
    CharacterStats.call(this, props);
    this.faction = props.faction;
    this.weapons = props.weapons;
    this.language = props.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.constructor = Humanoid;
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting  in ${this.language}`;
  };
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
      height: 1
    },
    hp: 15,
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

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.hp); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.faction); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage(8)); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task:
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove
  // health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Hero(props) {
    Humanoid.call(this, props);
    this.criticalHitRatio = props.criticalHitRatio;
    this.adrenaline = 0;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.constructor = Hero;
  // TODO implement attack function
  Hero.prototype.attack = function() {
    let rand = Math.random();
    let damageDealt = this.baseAttack;
    if (rand < this.criticalHitRatio) {
      damageDealt *= 2;                              
    }
    rand = Math.random();
    if (rand < this.missRatio) {
      damageDealt = 0;
    }
    return damageDealt;
  };

  // Villain

  function Villain(props) {
    Humanoid.call(this, props);
    this.evilMeter = props.evilMeter;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.constructor = Villain;
  // Villain's Attack Function
  Villain.prototype.attack = function() {
    let damageDealt = this.baseAttack + this.evilMeter;
    rand = Math.random();
    if (rand < this.missRatio) {
      damageDealt = 0;
    }
    return damageDealt;
  }


let hero = new Hero({
  createdAt: new Date(),
  dimensions: {
  length: 1,
    width: 2,
    height: 4
  },
  hp: 900,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish',
  baseAttack: 25,
  criticalHitRatio: 0.25,
  missRatio: 0.05
});

let villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  hp: 1500,
  name: 'Chad',
  faction: 'League of Extradinarily Mean Guys',
  weapons: ['Staff of Shamalama'],
  language: 'Evil-ese',
  baseAttack: 30,
  evilMeter: 15,
  missRatio: 0.30
})
// Game Loop
while(hero.alive && villain.alive) {
  let damageDealt = hero.attack();
  console.log(villain.takeDamage(damageDealt));

  damageDealt = villain.attack();
  console.log(hero.takeDamage(damageDealt));
}