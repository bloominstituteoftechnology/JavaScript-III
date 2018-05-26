/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/

//GameState
//Holds the current game state, principally characters. Initiates with a list of characters. Characters are Hero and Villain objects held in an array. GameState.heroes and GameState.counts keep
function GameState() {
  this.characters = [];
  this.heroes = 0;
  this.villains = 0;
}

//Game Method that receives an initial array of characters and iterates through them, adding each to the GameSTate.characters array by calling GameState.addChar repeatedly.
GameState.prototype.start = function (charArr) {
  for (let i = 0; i < charArr.length; i++) {
    this.addChar(charArr[i])
  }
  console.log('Game has begun. Time is not on your side.');
}

//addChar Method: adds a character to the characters array. It also increments the heroes or villains properties depending on which character type is added.
GameState.prototype.addChar = function (char) {
  char.gameloc = this;
  this.characters.push(char);
  this.updateCharCounts(char, 1);

}
//removeChar Method: removes a character from the characters array. If no villains left, declares victory. If no heroes left, declares loss.
GameState.prototype.removeChar = function (char) {
  let charArr = this.characters;
  let index = -1;
  for (let i=0; i<charArr.length; i++) {
    if (charArr[i] === char) {
      index = i;
      break;
    }
  }
  charArr.slice(index, 1);
  this.updateCharCounts(char, -1);
  this.checkContinue();
};

//updateCharCounts Method: receives a character, and an inc Number to change the hero and villain counts of the GameState depending on whether character is a hero or villain.

GameState.prototype.updateCharCounts = function (char, inc) {
  if (char instanceof Hero) {
    this.heroes += inc;
  } else if (char instanceof Villain) {
    this.villains += inc;
  }
};

//checkContinue Method: checks if there are still heroes or villains remaining. If one of these counts has gone to 0, then victory or defeat string is logged.
GameState.prototype.checkContinue = function () {
  if (this.villains < 1) {
    console.log('Good has triumphed over evil! This time...');
  }
  if (this.heroes < 1) {
    console.log('The prophecy has been fulfilled. You and your people are doomed. You see a black mist descend on the village. As you take your last breathe,  you realize that death now can only be a mercy.');
  }
};

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> logs the string 'Object was removed from the game.'
*/
const GameObject = function (dataObj) {
  this.createdAt = dataObj.createdAt;
  this.dimensions = dataObj.dimensions;
}

GameObject.prototype.destroy = function () {
  if (this.name) {
    console.log(`${this.name} was removed from game`);
  }
  console.log(`${this.constructor.name} was removed from game`);
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> logs the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(dataObj) {
  GameObject.call(this, dataObj);
  this.hp = dataObj.hp;
  this.name = dataObj.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.constructor = CharacterStats;

//Logs that object took damage.
//Side Effect: Reduces Characters HP.
CharacterStats.prototype.takeDamage = function (dmgPts) {
  this.hp -= dmgPts;
  if (this.hp > 0) {
    console.log(`${this.name} took damage. ${this.hp} hit points remain.`);
  } else {
    if (this instanceof Hero) {
      console.log(`Alas, ${this.name} has died.`);
    } else {
      console.log(`${this.name} was slain!`);
    }
    this.gameloc.removeChar(this);
  }
}


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> logs the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(dataObj) {
  CharacterStats.call(this, dataObj);
  this.faction = dataObj.faction;
  this.weapons = dataObj.weapons;
  this.language = dataObj.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function () {
  console.log(`${this.name} offers a greeting in ${this.language}.`);
}


//Hero Constructor, descendent of Humanoid
function Hero(dataObj) {
  Humanoid.call(this, dataObj);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.constructor = Hero;

//Attack method. Logs a string stating that hero attacked and with what weapon. 
//NOTE: Loweres HP of target, and updates GameState if necessary
Hero.prototype.attack = function (target) {
  console.log(`${this.name} attacked ${target.name} with ${this.weapons[0]}.`);
  target.takeDamage(2);
}

//Villain Constructor, descendent of Humanoid
function Villain(dataObj) {
  Humanoid.call(this, dataObj);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.constructor = Villain;

//Attack method. Logs a string stating that hero attacked and with what weapon. 
//NOTE: Loweres HP of target, and updates GameState if necessary
Villain.prototype.attack = function (target) {
  console.log(`${this.name} attacked ${target.name} with ${this.weapons[0]}.`);
  target.takeDamage(2);
}


/*
 * Inheritance chain: Humanoid -> CharacterStats -> GameObject
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

//Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Hero({
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

const swordsman = new Villain({
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

const archer = new Hero({
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

/*
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage(6)); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

let startingChars = [mage, swordsman, archer];
let game = new GameState();
game.start(startingChars);
archer.attack(swordsman);
swordsman.attack(archer);
swordsman.attack(mage);
archer.attack(swordsman);
archer.attack(swordsman);
mage.attack(swordsman);
mage.attack(swordsman);
swordsman.attack(mage);
archer.attack(swordsman);
mage.attack(swordsman);
swordsman.attack(mage);
archer.attack(swordsman);



// Stretch task: 
// * Create Villian and Hero classes that inherit from the Humanoid class.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!