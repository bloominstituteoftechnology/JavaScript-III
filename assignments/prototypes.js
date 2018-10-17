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
function GameObject(attr){
 this.createdAt = attr.createdAt;
 this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(CharAttr){
  GameObject.call(this,CharAttr);
  this.hp = CharAttr.hp;
  this.name = CharAttr.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
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
function Humanoid(HumanoidAttr){
  CharacterStats.call(this,HumanoidAttr);
  this.faction = HumanoidAttr.faction;
  this.weapons = HumanoidAttr.weapons;
  this.language = HumanoidAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}
///////////////////////////////////
function Hero(FighterAttr){
  Humanoid.call(this,FighterAttr);
  this.attackDamage = FighterAttr.attackDamage;
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(opponent){
  if(this.hp <= 0){
    return "You are dead. You cannot attack";
  } else {
    let OppoName = opponent.name;
  let OppoHP = opponent.hp;
  name = this.name;
  attackDamage = this.attackDamage;
  function Damage(){
    if(opponent.hp - this.attackDamage <= 0){
      opponent.hp -= this.attackDamage;
      return `${OppoName} has been defeated`;
    } else {
      return opponent.hp -= this.attackDamage;
    }
  }

  if(OppoHP <= 0 ){
    return `${OppoName} has been removed from the game`;
  } else {
    Damage();
    return `${name} attacks ${OppoName} with ${this.attackDamage} damage. \n${OppoName}'s health is now ${OppoHP - this.attackDamage}`;
  }
  }
  
}
//////
function Villian(FighterAttr){
  Humanoid.call(this,FighterAttr);
  this.attackDamage = FighterAttr.attackDamage;
}

Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.attack = function(opponent){
  if(this.hp <= 0){
    return "You are dead. You cannot attack";
  } else {
    let OppoName = opponent.name;
  let OppoHP = opponent.hp;
  name = this.name;
  attackDamage = this.attackDamage;
  function Damage(){
    if(opponent.hp - this.attackDamage <= 0){
      opponent.hp -= this.attackDamage;
      return `${OppoName} has been defeated`;
    } else {
      return opponent.hp -= this.attackDamage;
    }
  }

  if(OppoHP <= 0 ){
    return `${OppoName} has been removed from the game`;
  } else {
    Damage();
    return `${name} attacks ${OppoName} with ${this.attackDamage} damage. \n${OppoName}'s health is now ${OppoHP - this.attackDamage}`;
  }
  }
  
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test your work by uncommenting these 3 objects and the list of console logs below:


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
//////////////////////////////
  const wizard = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Harry',
    faction: 'Wizards',
    weapons: [
      'Wand',
      'Cloak',
    ],
    language: 'English',
    attackDamage:10
  });

  const witch = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Lilith',
    faction: 'Witches',
    weapons: [
      'Wand',
      'Cloak',
    ],
    language: 'English',
    attackDamage:20
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
  ///////////////////
  console.log(wizard.name); // Wizard's name
  console.log(witch.attackDamage); // Witch's attackDamage
  console.log(wizard.attack(witch)); // Wizard attacks
  console.log(wizard.attack(witch)); // Wizard attacks
  console.log(wizard.attack(witch)); // Wizard attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(witch.attack(wizard)); // Witch attacks
  console.log(wizard.attack(witch)); // Wizard attacks
  console.log(witch.hp); // Witch HP
  console.log(wizard.hp); // Wizard HP


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!