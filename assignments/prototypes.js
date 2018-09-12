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
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.hp = stats.hp;
  this.name = stats.name;
}
// sets up proto, can now use GameObject methods
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
 function Humanoid(traits) {
   CharacterStats.call(this, traits);
   this.faction = traits.faction;
   this.weapons = traits.weapons;
   this.language = traits.language;
 }
 // sets up proto, can now use GameObject and CharacterStats methods
 Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function() {
   return `${this.name} offers a greeting in ${this.language}.`;
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

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.hp); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.faction); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

function Hero(goodGuyStuff) {
  Humanoid.call(this, goodGuyStuff);
  this.heroPose = goodGuyStuff.heroPose;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.holyStrike = function(enemy) {
  console.log(`${this.name} calls down the power of heavens, reducing ${enemy.name}'s hp by 5!`);
  enemy.hp -= 5;
  if(enemy.hp <= 0){
    console.log(enemy.destroy());
  }
}
Hero.prototype.pose = function(enemy){
  console.log(`${this.name} stands bravely before ${enemy.name} and ${this.heroPose}`);
}
Hero.prototype.hungry = function(enemy){
  this.hp += 5;
  console.log(`${this.name} runs away to the food bowl, regaining 5hp. ${enemy.name} chases after her`);
}

function Villain(evilDudeJunk) {
  Humanoid.call(this, evilDudeJunk);
  this.evilLaugh = evilDudeJunk.evilLaugh;
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.deception = function(enemy) {
  console.log(`${this.name} taps ${enemy.name} on the right shoulder and then moves to the left. ${enemy.name} looks to the right. Their pride hurts from ${this.name}'s laughter, reducing ${enemy.name}'s hp by 5!`); 
  enemy.hp -= 5;
  if(enemy.hp <= 0){
    console.log(enemy.destroy());
  }
}
Villain.prototype.gloat = function(enemy) {
  console.log(`${this.name} stands over ${enemy.name} and ${this.evilLaugh}`);
}
Villain.prototype.yowl = function(enemy) {
  console.log(`${this.name} yowls gutturally at ${enemy.name}, reducing her hp to whiskers`);
  enemy.hp -= 5;
  if(enemy.hp <= 0){
    console.log(enemy.destroy());
  }
}
const paladin = new Hero({
  createdAt: new Date(),
    dimensions: {
      length: .5,
      width: .5,
      height: 50,
    },
    hp: 15,
    name: 'Arya B Cat',
    faction: 'Whoever Feeds Her',
    weapons: [
      'Claws',
      'Running Away',
    ],
    language: 'Meow',
    heroPose: "licks her paws",
});

const furryBoy = new Villain({
  createdAt: new Date(),
    dimensions: {
      length: .5,
      width: .5,
      height: 100,
    },
    hp: 15,
    name: 'Dobert Cattington',
    faction: 'Whoever Pets Him',
    weapons: [
      'Claws',
      'More Claws',
      "Somehow, Even More Claws"
    ],
    language: 'Yowling',
    evilLaugh: "cackles in Cat",
});

furryBoy.deception(paladin);
paladin.holyStrike(furryBoy);
furryBoy.gloat(paladin);
paladin.pose(furryBoy);
paladin.hungry(furryBoy);
furryBoy.yowl(paladin);
furryBoy.yowl(paladin);
furryBoy.deception(paladin);

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!