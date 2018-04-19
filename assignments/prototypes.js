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

function GameObject(dimensionsObj) {
  this.createdAt = dimensionsObj.createdAt;
  this.dimensions = dimensionsObj.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
};

let gameArgs = {
  createdAt: new Date(),
  dimensions: {
    height: 4,
    width: 2,
    length: 6
  }
};

let myGame = new GameObject(gameArgs);
console.log(myGame);

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charObj) {
  GameObject.call(this, charObj);
  this.hp = charObj.hp;
  this.name = charObj.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return this.name + " took damage.";
};

var myCharObj = {
  hp: 15,
  name: "Xang",
  dimension: {
    height: 2,
    width: 3,
    lengths: 5
  },
  age: 30
};

var myChar = new CharacterStats(myCharObj);
console.log("start here");
console.log(myChar.takeDamage());
console.log(myChar.destroy());
console.log(myChar.dimensions);
console.log(myChar.createdAt);

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
var humanObj = {
  name: "Xang",
  hp: 15,
  faction: "Maga Guild",
  weapons: ["sword", "ninja stars"],
  language: "Hmong"
};

function Humanoid(humanoidObj) {
  CharacterStats.call(this, humanoidObj);

  this.faction = humanoidObj.faction;
  this.weapons = humanoidObj.weapons;
  this.language = humanoidObj.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

Humanoid.prototype.attack = function(enemy) {
    enemy.hp = enemy.hp - Math.floor((this.power + (Math.random() * 20)));
};

let me = new Humanoid(humanObj);

console.log(me.greet());
console.log(me.takeDamage());
console.log(me.destroy());

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

  console.log("============= TEST starts here ============")

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

  function Villian(objparams) {   // Villian  construtor
   Humanoid.call(this, objparams);
   this.speed = objparams.speed;
   this.power = objparams.power;
  }

  function Hero(objparams) {      // Hero constructor
    Humanoid.call(this, objparams);
    this.speed = objparams.speed;
    this.power = objparams.power;
  }

  Villian.prototype = Object.create(Humanoid.prototype);
  Hero.prototype = Object.create(Humanoid.prototype);

  var golemnAttr = {          // golemn attribues
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 6,
      height: 7,
    },
    hp: 1700,
    name: 'Malphite',
    faction: 'Rockies',
    weapons: [
      'stones'
    ],
    language: 'Greek',
    speed: 6,
    power: 25
  };

    var asheAttr = {          // Ashe attributes
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    hp: 1100,
    name: 'Ashe',
    faction: 'Uthai Thani',
    weapons: [
      'arrow'
    ],
    language: 'Thai',
    speed: 19,
    power: 17
  };

  var golemn = new Villian(golemnAttr); // an instances of of Villian
  var ashe = new Hero(asheAttr);        // an instance of Hero

function displayLengendStats(hero, villian) { // display stats
  console.log(`Hero: ${hero.name} from ${hero.faction} with hp: ${hero.hp}`);
  console.log("\n===========  vs ===========\n");
  console.log(`Villian: ${villian.name} from ${villian.faction} with hp: ${villian.hp}`);
}

function displayFightIntro(hero, villian) { // display fight intro
  console.log("\n\n==========================================================");
  console.log("================= Welcome To Legend Fight ================");
  console.log("==========================================================\n\n")

  displayLengendStats(hero, villian); // displaying lengends stats

  console.log("\n\n==========================================================");
  console.log("==========================================================");
  console.log("==========================================================\n\n");
}

function displayAttackEnemy(attacker, attacked) {  // display attack enemy
      let villianBeforeDamageHp = attacked.hp;
      console.log(`${attacked.name} current hp is ${attacked.hp}`);
      attacker.attack(attacked);
      let villianAfterDamageHp = villianBeforeDamageHp - attacked.hp;
      console.log(`${attacked.takeDamage()} ${attacked.name} took ${villianAfterDamageHp} damage from ${attacker.name} and now ${attacked.name} hp is now ${attacked.hp}`);
      // heroRandomAttack = Math.floor((Math.random() * 50) + 1) + attacker.speed;
      // villianRandomAttack = Math.floor((Math.random() * 50) + 1) + attacked.speed;
}

function displayGameOver(hero, villian) { /// display game over
  if(hero.hp <= 0) {
    console.log("\n\n======= GAME OVER =========\n");
    console.log(hero.destroy());
    console.log(`Winner is Villian ${villian.name}`);
  } else {
    console.log("\n\n======= GAME OVER =========\n");
    console.log(villian.destroy());
    console.log(`Winner is Hero ${hero.name}`);
  }
}

function fight(hero, villian) {
  let heroRandomAttack = Math.floor((Math.random() * 50) + 1) + hero.speed;
  let villianRandomAttack = Math.floor((Math.random() * 50) + 1) + villian.speed;
  displayFightIntro(hero, villian);  // displaying fight intro
  while(hero.hp > 0 && villian.hp > 0) {
    if(heroRandomAttack >= villianRandomAttack) {
      displayAttackEnemy(hero, villian);  // hero attacking villian
       heroRandomAttack = Math.floor((Math.random() * 50) + 1) + hero.speed;
       villianRandomAttack = Math.floor((Math.random() * 50) + 1) + villian.speed;
    } else {
      displayAttackEnemy(villian, hero);  // villian attacking hero
      heroRandomAttack = Math.floor((Math.random() * 50) + 1) + hero.speed;
      villianRandomAttack = Math.floor((Math.random() * 50) + 1) + villian.speed;
    }
  }
  displayGameOver(hero, villian);   // display the winner between hero and villan
}

fight(ashe, golemn); // start the fight....