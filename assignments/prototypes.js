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
function GameObject (objAttributes){
  this.createdAt=objAttributes.createdAt;
  this.dimensions=objAttributes.dimensions;
}
GameObject.prototype.destroy =function(){
  return `${this.name} was removed from the game`;
}
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttributes){
  this.hp=charAttributes.hp;
  this.name=charAttributes.name;
  GameObject.call (this, charAttributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage= function(){
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
  function Humanoid(huAttributes){
    this.faction = huAttributes.faction;
    this.weapons = huAttributes.weapons;
    this.language = huAttributes.language;
    CharacterStats.call (this, huAttributes);
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet= function(){
    return `${this.name} offers a greeting in ${this.language}`
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
  function Villian(vilAttributes){
    Humanoid.call(this, vilAttributes);
    this.alias=vilAttributes.alias;
  }
  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.attack= function(character){
    while(character.hp>0){
      return character.hp-1;
    }
  return character.destroy();
  }
  function Hero(heroAttributes){
    this.sadBackStory= heroAttributes.sadBackStory;
    Humanoid.call(this,heroAttributes);
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  Hero.prototype.attack= function(character){
    if(character.hp>0){
      character.hp=character.hp-1;
      return `${character.alias} is still alive`;
    }
    else{
      return character.destroy();

    }
  
  }
  Hero.prototype.stateBackStory=function(){
    return this.sadBackStory;
  }
  Hero.prototype.justiceCall=function(character){
      return `For justice I- ${this.name} will fight you ${character.alias}`;
  }
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  const myHero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Solo',
    weapons: [
      'rock',
      'paper',
      'scissors'
    ],
    language: 'Common Toungue',
    sadBackStory: "Mom died, dad died, then revenge and vow to protect justice",
  });
  const myVillian = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 2,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
    alias: "The Pimples Popper"
  });
  console.log(myHero.stateBackStory());
  console.log(myHero.justiceCall(myVillian));
  console.log(myHero.attack(myVillian));
  console.log(myHero.attack(myVillian));
  console.log(myHero.attack(myVillian));
  console.log(myHero.attack(myVillian));