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
  return `${this.name} was removed from the game`;
}


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttributes) {
  this.hp = charAttributes.hp;
  this.name = charAttributes.name;
  GameObject.call(this, charAttributes);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  console.log(`${this.name} took damage.`);
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
function Humanoid(humanAttributes) {
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
  CharacterStats.call(this, humanAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);


Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
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
  const Villain = function(villainAttr) {
    Humanoid.call(this, villainAttr);
    this.special = villainAttr.special;
  } 

  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.stab = function() {
    console.log(`${this.name} has used stab!`);
    console.log(`${this.name} has dealt 4 damage`);
    hero.hp -= 4;
    if (hero.hp <= 0) {
      console.log(hero.destroy());
    }
  }

  const Hero = function(HeroAttr) {
    Humanoid.call(this, HeroAttr);
    this.special = HeroAttr.special;
  } 

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.chargeOfHonor = function() {
    console.log(`${this.name} has used charge of honor!`);
    console.log(`${this.name} has dealt 6 damage`);
    villain.hp -= 6;
    if (villain.hp <= 0) {
      console.log(villain.destroy());
    }
  }

  const hero = new Hero ({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 6,
    },
    hp: 25,
    name: 'Keerev',
    faction: 'Forest Kingdom',
    weapons: [
      'Sword',
      'Heavy Shield',
    ],
    language: 'Elvish',
    special: 'chargeOfHonor'
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 6,
      width: 4,
      height: 8,
    },
    hp: 27,
    name: 'Gorod',
    faction: 'The Dark Legion',
    weapons: [
      'Twisted Staff',
      'Dagger',
    ],
    language: 'Elvish', 
    special: 'stab'   
  });
  console.log("----------------------------------");
  console.log("----------------------------------");
  hero.chargeOfHonor();
  console.log(`${villain.name} has ${villain.hp} hp left`);
  console.log("----------------------------------");
  villain.stab();
  console.log(`${hero.name} has ${hero.hp} hp left`);
  console.log("----------------------------------");
  hero.chargeOfHonor();
  console.log(`${villain.name} has ${villain.hp} hp left`);
  console.log("----------------------------------");
  villain.stab();
  console.log(`${hero.name} has ${hero.hp} hp left`);
  console.log("----------------------------------");
  hero.chargeOfHonor();
  console.log(`${villain.name} has ${villain.hp} hp left`);
  console.log("----------------------------------");
  villain.stab();
  console.log(`${hero.name} has ${hero.hp} hp left`);
  console.log("----------------------------------");
  hero.chargeOfHonor();
  console.log(`${villain.name} has ${villain.hp} hp left`);
  console.log("----------------------------------");
  villain.stab();
  console.log(`${hero.name} has ${hero.hp} hp left`);
  console.log("----------------------------------");
  hero.chargeOfHonor();
  console.log(`${villain.name} has no hp left`);
  console.log("----------------------------------");

  
  




  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!