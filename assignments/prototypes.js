/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  cons
*/
const GameObject = function(att){
  this.createdAt = att.createdAt;
  this.name = att.name;
  this.dimensions = att.dimensions;
}
GameObject.prototype.destroy = function(){
  console.log   (`${this.name} was removed from the game.`)
}

const Orc = new GameObject ({
  createdAt: "April2",
  name:"Ihab",
  dimensions:"8 feet"
})
console.log(Orc.name)
  Orc.destroy()
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
 function CharacterStats(stats){
   GameObject.call(this, stats);
   this.healthPoints = stats.healthPoints;
     this.takeDamage = function() {
   console.log(`${this.name} took damage.`)
 }
 }

  
 CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
   console.log(`${this.name} took damage.`)
 }
  
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from  through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid (hatts){
    CharacterStats.call(this,hatts)
    this.team = hatts.team;
    this.weapons = hatts.weapons;
    this.language = hatts.language;
    this.greet = function(){
   console.log(`${this.name} greets you in ${this.language} `)
 }
 }
 
 Humanoid.prototype = Object.create(GameObject.prototype);


  Humanoid.prototype.greet = function(){
    console.log(`${this.name} greets you in ${this.language} `)
  }

 //  Humanoid.prototype = Object.create(CharacterStats.prototype);
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:
 
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
 

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
function Hero (herostuff){
  Humanoid.call(this, herostuff);
  this.goodorBad = herostuff.goodorBad
   this.type = herostuff.type;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(){
  console.log(`${this.name} has done a heroic attack with ${this.weapons[0]}`)
}
 function Villian (villianStuff){
   Humanoid.call(this, villianStuff);
   this.goodorBad = villianStuff.goodorBad;
      this.type = villianStuff.type;

 }

 Villian.prototype = Object.create(Humanoid.prototype)

  Villian.prototype.attack = function(){
    console.log (`${this.name} has done a vicious and brutal attack with ${this.weapons[0]}!!`)
  }
   
   Villian.prototype.getsHit = function(){
     this.healthPoints = this.healthPoints -5;
     console.log(`Nice Hit!, ${this.name} now has ${this.healthPoints}`)
   }
   Villian.prototype.die2 = function (){
     if (this.healthPoints<1){
       console.log(this.destroy())
     }
   }

  Villian.prototype.die = function(){
    if (this.healthPoints <1){
      console.log(`Hooray! The evil ${this.name} has been vanquished and his reign of terror is over!!`)
    }else{
      console.log(`Keep fighting the Bad guy.`)
    }
  }
const Questor = new Hero ({
  name:"Questor",
  type: "Wizard",
  dimensions:{height: 6, weight:170},
  team: "Mystics of the Elven order",
  weapons:["Lightning bolts", "magic sword"],
  goodorBad: "Good",
  language: "Dwemer dialect",
  healthPoints: 25


})
console.log(Questor.weapons)
Questor.greet()
Questor.takeDamage()
Questor.attack()

const badguy = new Villian ({
  name: "Forgnar the Horrible",
  team: "Destroyers for the Underworld",
  dimensions: { height: 10, weight: 800},
  type: "Orc",
  weapons: ["Axe of doom", "Rusty Mace"],
  goodorBad: "Bad",
  language: "Orcish",
  healthPoints:20
})
badguy.greet()
console.log(badguy.weapons)
badguy.attack()
badguy.getsHit()
badguy.getsHit()
badguy.getsHit()
badguy.getsHit()

badguy.destroy()
badguy.die2()