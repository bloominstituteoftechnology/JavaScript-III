/*
  Object oriented design is commonly used in video games. 
   For this part of the assignment you will be implementing several constructor functions with 
   their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: 
  GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block 
  comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attrs){
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
}

GameObject.prototype.destroy = function (){
  return `${this.name} was removed from the game`;
}
/*
  === CharacterStats ===
  * hp  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// created this function to create Characterstats and bind it to parent. 
function CharacterStats(characterAttrs){
  GameObject.call(this, characterAttrs);
  this.hp = characterAttrs.hp;
  this.name = characterAttrs.name;
}

// used this to connect CharacterStats object to GameObject object. 
CharacterStats.prototype = Object.create(GameObject.prototype)

// co
CharacterStats.prototype.constructor = CharacterStats;

console.log("this is character stats", CharacterStats)

CharacterStats.prototype.takeDamage = function(){
  // console.log(`${this.name} took damage`)
      return `${this.name} took damage`
}

CharacterStats.prototype.constructor = CharacterStats;

/*
  === Humanoid ===
  * faction * weapons * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (humanoidAttrs){
 CharacterStats.call(this, humanoidAttrs);
 this.faction = humanoidAttrs.faction;
 this.weapons = humanoidAttrs.weapons;
 this.language = humanoidAttrs.language;
}

Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function (){
  return `${this.name} offers a greeting in ${this.language}`
}

 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:

// /*
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
// */

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects 
  //which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// Villian constructor
function Villain(villAttrs){
    Humanoid.call(this, villAttrs);
    this.attack = villAttrs.attack;
    this.recover = villAttrs.recover;
    // this.enemy  = villAttrs.enemy;
  }

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.constructor = Villain;
  console.log(Villain)

// Hero Constructor  
function Hero(heroAttrs){
    Humanoid.call(this, heroAttrs);
    this.attack = heroAttrs.attack;
    this.recover = heroAttrs.recover;
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.constructor = Object.create(Humanoid.prototype);
    console.log(Hero)

// Methods for causing damage to Hero and Villain
Villain.prototype.method = Villain;

Villain.prototype.attackEnemy = function (enemy){
  enemy.hp = ;
     if (enemy.hp < 1){
      return `${enemy.destroy()}`;
      console.log(`${enemy.destroy()}`)
    }
    return `${this.name} attacked ${enemy.name}. ${enemy.name} has ${enemy.hp} left!`;
  }

Hero.prototype.attackEnemy = function (enemy){
  enemy.hp -= 4;
    if (enemy.hp < 1){
      return `${enemy.destroy()}`;
      console.log(`${enemy.destroy()}`)
    }
    return `${this.name} attacked ${enemy.name}. ${enemy.name} has ${enemy.hp} left!`;
 }

//  Villain.prototype.attacked = function (attacked){
//     // attacked.hp -= 4;
//   return `${this.name} lost `;
// }

Villain.prototype.recover = function (){
    if (this.hp > 0 || this.hp <= 6){
      this.hp += 5; 
        return `${this.name} has recovered!`
    }
  }

Hero.prototype.recover = function (){
  if (this.hp > 0 || this.hp <= 10){
    this.hp++;
      return `${this.name} has recovered!`
  }
}


const killMonger = new Villain ({
  createdAt: new Date(),
  dimensions: {
    length: 11,
    width: 33,
    height: 14
  },
  name: 'Killmonger',
  hp: 50,
  weapons: 'blade',
  attackPower: 15,
  recover: 5
})

const blackPanther = new Hero ({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 32,
    height: 13
  },
  name: 'Black Panther',
  weapons: 'combative suit',
  hp: 55,
  attackPower: 14,
  recover: 15
})

console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(killMonger.attackEnemy(blackPanther))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))
console.log(blackPanther.attackEnemy(killMonger))