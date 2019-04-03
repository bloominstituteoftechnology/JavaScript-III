/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: 
  GameObject, 
  CharacterStats, 
  Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid. 

   *Three Humanoid Objects* - already created that should end up inheriting from Humanoid.

  Use the objects at the bottom of the page to test your constructor functions. 
  
 
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject (attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/



function CharacterStats(charAttrs) {
  this.healthPoints = charAttrs.healthPoints;
  GameObject.call(this, charAttrs);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanoidAttrs)  {
  this.team = humanoidAttrs.team;
  this.weapons = humanoidAttrs.weapons;
  this.language = humanoidAttrs.language;
  CharacterStats.call(this, humanoidAttrs);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

function Villian(villianAttrs) {
  this.catchPhrase = villianAttrs.catchPhrase;
  Humanoid.call(this, villianAttrs);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.smack = function(person, damage) {
  let personHP = person.healthPoints - damage;
  if (personHP <= 0) {
    return `${this.name} smacks ${person.name} for ${damage} damage. ${person.name} is knocked out.`;
  } else {
    person.healthPoints = personHP;
    return `${this.name} slashes ${person.name} for ${damage} damage. ${person.name} has ${personHP} HP left`;
  }

}

Villian.prototype.speak = function() { 
  return `${this.name} yells "${this.catchPhrase}" in ${this.language}.`;
}

// function Hero(heroAttrs) {
//   this.costume = heroAttrs.costume;
//   Humanoid.call(this.heroAttrs);
// }

// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.deathRay = function(person) {
//   let personHP = person.healthPoints - 2;
//   person.healthPoints = personHP;
//   return `${this.name} uses Death Ray on ${person.name} for ${personHP} damage`;
// }

// Hero.prototype.costumeMove = function() {
//   return `${this.name} brandishes his ${this.costume}`;
// }




const mrVillian = new Villian( {
  createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 3,
    },
    healthPoints: 20,
    name: 'Mister Fart Face',
    team: 'Evil Dudes R Us',
    weapons: [
      'Giant Hand'
    ],
    language: 'Weirdo',
    catchPhrase: 'Gonna get ya!'
})

// const mrHero = new Hero( {
//   createdAt: new Date(),
//     dimensions: {
//       length: 3,
//       width: 3,
//       height: 3,
//     },
//     healthPoints: 20,
//     name: 'Super Dude',
//     team: 'Loners',
//     weapons: [
//       'Eyes'
//     ],
//     language: 'meh',
//     catchPhrase: 'I will save you!',
//     costume: 'cape'
// })




/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test your work by un-commenting these 3 objects and the list of console logs below:

//Test consoles
// const fly = new CharacterStats( {
//   createdAt: new Date(),
//   name: "Pearl",
//   dimensions: {
//     length: 2,
//     width: 3,
//     height: 5
//   },
//   healthPoints: 15
  
// });

// console.log(fly);
// console.log(fly.destroy()); //need () after destroy because invoking destroy                                 function
// console.log(fly.takeDamage());



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
  //console.log(hero.costumeMove());
  console.log(mrVillian.speak());
  console.log(mrVillian.smack(mage, 4));
  console.log(mrVillian.smack(mage, 3));

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.   
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!