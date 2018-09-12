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
  //console.log(attributes);
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.constructor = GameObject;

GameObject.prototype.destroy = function() {
  return 'Object was removed from the game.';
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes) {
  //This binds the "this" keyword to Parent
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
  this.name = charAttributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.constructor = CharacterStats;

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

// this sets up the __proto__ and allows us to use methods now across objects


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanAttributes) {
  //This binds the "this" keyword to Parent
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.constructor = Humanoid;      // parent parent

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

function Hero(heroAttributes) {
  //This binds the "this" keyword to Parent
  Humanoid.call(this, heroAttributes);   //parent childAttributes
  this.nemesis = heroAttributes.nemisis;   // childAttributes
  this.exterior = heroAttributes.exterior; // childAttributes
  this.needsToSave = heroAttributes.needsToSave; // childAttributes
}
Hero.prototype = Object.create(Humanoid.prototype); // child parent

Hero.prototype.story = function() {                         // child
  return `${this.name}, a ${this.exterior} ${this.faction} who speaks ${this.language}, needs to save ${this.needsToSave} from ${this.nemesis} using a ${this.weapons}`;
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


  const princess = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 3,
    },
    hp: 15,
    name: 'Leia',
    faction: 'Alderaan',
    weapons: [
      'Blaster Pistol',
    ],
    language: 'Galactic Basic & some Shyriiwook',
    exterior: 'princess',
    needsToSave: 'Han Solo',
    nemisis: 'Darth Vader'

    // Hero.prototype.story = function() {                         // child
  // return `${this.name}, a ${this.exterior}, needs to save ${this.needsToSave} from ${this.nemesis}`;
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
  console.log(princess.story()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!