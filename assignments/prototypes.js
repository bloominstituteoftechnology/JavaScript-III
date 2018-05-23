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
  return 'Game has begun. Call game.event[action] to perform an action.';
}


//Game Method event receives a game action, and its arguments, then updates game state and logs result.
GameState.prototype.event = function (actor, move, argArr) {
  console.log(actor[move](...argArr));
}

//addChar Method: adds a character to the characters array. It also increments the heroes or villains properties depending on which character type is added.
GameState.prototype.addChar = function (char) {
  this.characters.push(char);
  this.updateCharCounts(char, 1);

}
//removeChar Method: removes a character from the characters array. If no villains left, declares victory. If no heroes left, declares loss.
GameState.prototype.removeChar = function (char) {
  let charArr = this.characters;
  charArr.slice(charArr.findIndex(char), 1);
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

//checkContinue Method: checks if there are still heroes or villains remaining. If one of these counts has gone to 0, then victory or defeat string is returned.
GameState.prototype.checkContinue = function() {
  if (this.villains < 1) {
    return 'Good has triumphed over evil! This time.'
  }
  if (this.heroes < 1) {
    return 'The prophecy has been fulfilled. You and your people are doomed. As you breathe your last breathe, you see a black mist descend on the village.'
  }
};

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
const GameObject = function (dataObj) {
  this.createdAt = dataObj.createdAt;
  this.dimensions = dataObj.dimensions;
}

GameObject.prototype.destroy = function () {
  if (this.name) {
    return `${this.name} was removed from game`
  }
  return `${this.constructor.name} was removed from game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(dataObj) {
  GameObject.call(this, dataObj);
  this.hp = dataObj.hp;
  this.name = dataObj.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.constructor = CharacterStats;

//Returns that object took damage.
//Side Effect: Reduces Characters HP.
CharacterStats.prototype.takeDamage = function (dmgPts) {
  this.hp -= dmgPts;
  if (this.hp > 0) {
    return `${this.name} took damage. ${this.hp} hit points remain.`;
  } else if (this instanceof Hero) {
    return `Alas, ${this.name} has died.`;
  } else {
    return `${this.name} was slain!`;
  }
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
function Humanoid(dataObj) {
  CharacterStats.call(this, dataObj);
  this.faction = dataObj.faction;
  this.weapons = dataObj.weapons;
  this.language = dataObj.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}


//Hero Constructor, descendent of Humanoid
function Hero(dataObj) {
  Humanoid.call(this, dataObj);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.constructor = Hero;

//Attack method. Returns a string stating that hero attacked and with what weapon. 
//NOTE: Loweres HP of target, and updates GameState if necessary
Hero.prototype.attack = function (target) {
  target.takeDamage(2);
  return `${this}.name attacked ${target.name} with ${this.weapons[0]}.`;
}

//Villain Constructor, descendent of Humanoid
function Villain(dataObj) {
  Humanoid.call(this, dataObj);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.constructor = Villain;

//Attack method. Returns a string stating that hero attacked and with what weapon. 
//NOTE: Loweres HP of target, and updates GameState if necessary
Villain.prototype.attack = function (target, weapon) {
  target.takeDamage(2);
  return `${this.name} attacked ${target.name} with ${weapon}.`;
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
game.event(swordsman, "attack", [archer])



// Stretch task: 
// * Create Villian and Hero classes that inherit from the Humanoid class.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!