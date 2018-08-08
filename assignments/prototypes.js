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
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(character_attributes){
  GameObject.call(this, character_attributes);
  this.hp = character_attributes.hp;
  this.name = character_attributes.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype)
CharacterStats.prototype.takeDamage = function (){
  return `${this.name} took damage`;
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
 
function Humanoid(humanoid_attributes){
  CharacterStats.call(this, humanoid_attributes);
  this.faction = humanoid_attributes.faction
  this.weapons = humanoid_attributes.weapons;
  this.language = humanoid_attributes.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

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


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  //stretch acitivity
function Hero(hero_attributes){
  Humanoid.call(this, hero_attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(weapon, enemy, hero){
  switch (weapon){
    case "wooden sword":
      enemy.hp = enemy.hp - 10;
      console.log(`${enemy.name} takes 10 points of damage from ${weapon}`);
    break;
    case "boomerang":
      enemy.hp = enemy.hp - 5;
      console.log(`${enemy.name} takes 5 points of damage from ${weapon}`);
    break;
    case "courange":
      hero.hp += 10;
      if (Hero.hp > 70 ) {
        hero.hp === 70;
      }
      console.log(`${hero.name} heals 10 points hp due to his ${weapon} current hp ${hero.hp}`);
    break;
  }
  if (enemy.hp <= 0){
    console.log(`${enemy.name} has suffered a fatal blow`)
    console.log(enemy.destroy()); 
  } else {
    console.log(`${enemy.name}'s current hp is: ${enemy.hp} \n`);
  }
}
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

function Villian(villian_attributes){
  Humanoid.call(this, villian_attributes);
}

Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.attack = function(weapon, enemy){
  switch (weapon){
    case "fire bolt":
      enemy.hp = enemy.hp - 10;
      console.log(`${enemy.name} takes 10 points of damage from ${weapon}`);
    break;
    case "staff":
      enemy.hp = enemy.hp - 5;
      console.log(`${enemy.name} takes 5 points of damage from ${weapon}`);
    break;
    case "lazers":
      enemy.hp = enemy.hp - 20;
      console.log(`${enemy.name} takes 20 points hp from ${weapon}`);
    break;
  }
  if (enemy.hp <= 0){
    console.log(`${enemy.name} has suffered a fatal blow`)
    console.log(enemy.destroy()); 
  } else {
    console.log(`${enemy.name}'s current hp is: ${enemy.hp} \n`);
  }
}

const adventurer = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 70,
  name: "Link",
  faction: "Hyrule",
  weapons: ["wooden sword", "boomerang", "courange"],
  language: "Elvish",
})

const badGuy = new Villian ({
  createdAt: new Date(),
  dimensions: {
  length: 3,
  width: 3,
  height: 3,
  },
  hp: 70,
  name: "Ganon",
  faction: "Land of Darkness",
  weapons: ["fire bolt", "staff", "lazers"],
  language: "Elvish",
});

// Test you work by uncommenting these 3 objects and the list of console logs below:

// game one bad guy wins
// badGuy.attack(badGuy.weapons[0], adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);
// adventurer.attack(adventurer.weapons[2], badGuy, adventurer);
// adventurer.attack(adventurer.weapons[1], badGuy, adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);

// game two good guy wins
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// badGuy.attack(badGuy.weapons[2], adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);
// adventurer.attack(adventurer.weapons[0], badGuy, adventurer);