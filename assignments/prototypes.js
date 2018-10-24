/*
  Object oriented design is commonly used in video games.  For this part of the assignment
   you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
   Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(dimensions){
    this.createdAt=new Date();
    this.dimensions = dimensions;
}
GameObject.prototype.destroy=function () {
  return (`${this.name} was removed from the game.`);
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(hp,name){
    GameObject.call(this);
    this.hp=hp;
    this.name= name;
}

CharacterStats.prototype=Object.create(GameObject.prototype);
CharacterStats.prototype.constructor=CharacterStats;
CharacterStats.prototype.takeDamage=function(){
    return(`${this.name} took damage.`);
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
function Humanoid(obj){

    CharacterStats.call(this);
    this.faction = obj.faction;
    this.weapons = obj.weapons;
    this.language = obj.language;
    this.hp = obj.hp;
    this.name = obj.name;
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
}
Humanoid.prototype=Object.create(CharacterStats.prototype);
Humanoid.prototype.constructor=Humanoid;
Humanoid.prototype.greet=function(){
    return (`${this.name} offers a greeting in ${this.language}`);

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
console.log(mage.destroy());




  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points
// from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

//Hero constructor functions:
 function Hero(positive){
   Humanoid.call(this,positive);
   this.traits=positive.traits;
   this.gender= positive.gender;
   this.healthPoints=positive.healthPoints;
  this.faction =positive.faction;
   this.weapons = positive.weapons;
   this.language = positive.language;
  this.hp = positive.hp;
   this.name = positive.name;
   this.createdAt = positive.createdAt;
   this.dimensions = positive.dimensions;


}
 Hero.prototype=Object.create(Humanoid.prototype);
Hero.prototype.constructor=Hero;
Hero.prototype.mistake=function(){
  return(`${this.name} health Points has gone down from ${this.healthPoints} to zero!You are destroyed! `);

 }

 const superMan= new Hero({
     createdAt: new Date(),
    dimensions: {
         length: 4,
        width: 3,
        height: 5,
    },
    hp: 7, name: 'Martin',
    faction: 'Blue Gems',
     weapons: [
        'Sword',
    ],
    language: 'English',
    gender:'M',
    traits:'fly',
    healthPoints:9,
});

 console.log(superMan.language);
 console.log(superMan.name);
console.log(superMan.traits);
console.log(superMan.mistake());

 //////////////
//Villan:
function Villan(negative){

    Humanoid.call(this,negative);
    this.power=negative.power;
    this.looks= negative.looks;
    this.healthPoints=negative.healthPoints;
    this.faction =negative.faction;
    this.weapons = negative.weapons;
    this.language = negative.language;
    this.hp = negative.hp;
    this.name = negative.name;
    this.createdAt = negative.createdAt;
    this.dimensions = negative.dimensions;


}

Villan.prototype=Object.create(Humanoid.prototype);
Villan.prototype.constructor=Villan;
Villan.prototype.evilDeeds=function(){
    return(`${this.name} You are an evil doer and your health points ${this.healthPoints} has gone down to negative,because of your cruelty!You are destroyed! `);

}
const skeleton = new Villan({
    createdAt: new Date(),
    dimensions: {
        length: 10,
        width: 6,
        height: 8,
    },
    hp: 9, name: 'Brutal',
    faction: 'Deadland',
    weapons: [
        'Black Dagger',
    ],
    language: 'French',
    power:  'Rings',
    looks:'ugly',

    healthPoints:7,
});

console.log(skeleton.looks);
console.log(skeleton.name);
console.log(skeleton.hp)
console.log(skeleton.evilDeeds());


