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

function GameObject(attrGO) {
  this.createdAt = attrGO.createdAt;
  this.dimensions = attrGO.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attrCS) {
  GameObject.call(this, attrCS);
  this.hp = attrCS.hp;
  this.name = attrCS.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype)

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
};



/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(attrH) {
  CharacterStats.call(this, attrH);
  this.faction = attrH.faction;
  this.weapons = attrH.weapons;
  this.language = attrH.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return`${this.name} offers a greeting in ${this.language}.`;
};



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

  //console.log(mage.createdAt); // Today's date
  //console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  //console.log(swordsman.hp); // 15
  //console.log(mage.name); // Bruce
  //console.log(swordsman.faction); // The Round Table
  //console.log(mage.weapons); // Staff of Shamalama
  //console.log(archer.language); // Elvish
  //console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  //console.log(mage.takeDamage()); // Bruce took damage.
  //console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  function Hero(attrHero) {
    Humanoid.call(this, attrHero);
    this.heroFactor = attrHero.heroFactor ;
  }

  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.fightVillan = function (villan) {
    if (this.hp > 0) {
      if ((this.hp * this.heroFactor) * Math.random() >= (villan.hp * villan.evilFactor) * Math.random()) {
        villan.hp -= 1;
        return `${this.name} wins! Current score is ${this.hp} to ${villan.hp}.`
      } else {
      this.hp -= 1;
        return `${villan.name} win! Current score is ${this.hp} to ${villan.hp}.`
      }
    } else {
      return '';
    }
  }

  const auntAbi = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 20,
    name: 'Aunt Abi',
    faction: 'Cool Aunts Across America',
    weapons: [
      'Kindle Password',
      'Phone Number for Mom',
      'Time Out'
    ],
    language: 'English',
    heroFactor: 2
  })

  function Villan(attrV) {
    Humanoid.call(this, attrV);
    this.evilFactor = attrV.evilFactor ;
  }

  Villan.prototype = Object.create(Humanoid.prototype);
  Villan.prototype.fightHero = function (hero) {
    if (this.hp > 0) {
      if ((this.hp * this.evilFactor) * Math.random() >= (hero.hp * hero.heroFactor) * Math.random()) {
        hero.hp -= 1;
        return `${this.name} win! Current score is ${hero.hp} to ${this.hp}.`
      } else {
      this.hp -= 1;
        return `${hero.name} wins! Current score is ${hero.hp} to ${this.hp}.`
      }
    } else {
      return '';
    }
  }

  const joLo = new Villan({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 100,
    name: 'Josiah & Lorelai',
    faction: 'Rachel\'s Minions',
    weapons: [
      'Sugar',
      'Too Much Energy',
      'Bag of Cats'
    ],
    language: 'Common Toungue',
    evilFactor: 1
  })


function runFight(hero, villan) {
  if (hero.hp > 0 && villan.hp > 0) {
    console.log(hero.fightVillan(villan));
    console.log(villan.fightHero(hero));
    runFight(hero, villan);
  } else if (hero.hp <= 0) {
    console.log(`${hero.name} has no Fs left to give. ${villan.name} can have whatever they were whining about.`)
    console.log('GAME OVER');
  } else {
    console.log(`${villan.name} are too busy plotting to fight. ${hero.name} is going to try to get a nap in.`)
    console.log('GAME OVER');
  }
}

runFight(auntAbi, joLo);


