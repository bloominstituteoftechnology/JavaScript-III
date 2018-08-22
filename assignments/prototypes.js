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
function GameObject(info)   {
    this.createdAt = info.createdAt;
    this.dimensions = {
        width: info.dimensions.width,
        length: info.dimensions.length,
        height: info.dimensions.height,
    }
}
GameObject.prototype.destroy = function()    {
    return `${this.name} was removed from the game.`
}
// let info = {
//     dimensions: {
//         width: 1,
//         length: 2,
//         height: 3,
//     }
// }
// const square = new GameObject(info);
// console.log(square);
// console.log(square.destroy())
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(info)   {
    GameObject.call(this, info)
    this.hp = info.hp;
    this.name = info.name;
    this.constructor = CharacterStats;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(damage)    {
    this.hp = this.hp - damage;
    return `${this.name} took damage.`
}

// const ryanStats = {
//     hp: 100,
//     name: "Ryan",
//     dimensions: {
//         length: 1,
//         width: 2,
//         height: 3,
//     }
// }
// const CharRyan = new CharacterStats(ryanStats);
// console.log(CharRyan);
// console.log(CharRyan.takeDamage());
// console.log(CharRyan.destroy());
/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(info) {
    CharacterStats.call(this, info);
    this.faction = info.faction;
    this.weapons = info.weapons;
    this.language = info.language;
    this.constructor = Humanoid;
}

Humanoid.prototype = Object.create(CharacterStats.prototype)

Humanoid.prototype.greet = function()   {
    return `${this.name} offers a greeting in ${this.language}`;
}

Humanoid.prototype.basicAttack = function(target) {
    target.hp -= 1;
    console.log(target.hp)
    return `${this.name} hit!`
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
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
  Hero.prototype = Object.create(Humanoid.prototype);
  function Hero(info)   {
      Humanoid.call(this, info);
      this.constructor = Hero;
      this.heroStrike = function(target)    {
          let targetDodge = Math.random();
          let heroHit = Math.random();
          heroHit > targetDodge ? target.hp-=3 : target.hp;
          console.log(target.hp)
          if(target.hp < 1) {
              return target.destroy()
          }
          return heroHit > targetDodge ? `${this.name} hit!` : `${this.name} missed!`
      }
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  function Villain(info)    {
      Humanoid.call(this, info);
      this.constructor = Villain;
      this.villainAttack = function(target) {
          let targetDodge = Math.random();
          let heroHit = Math.random() + .1;
          heroHit > targetDodge ? target.hp-=2 : target.hp;
          console.log(target.hp)
          if(target.hp < 1) {
              return target.destroy()
          }
          return heroHit > targetDodge ? `${this.name} hit!` : `${this.name} missed!`
      }
  }
  const TheHero = new Hero({
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
  const TheVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'notLilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
function combat(hero, villain) {
    while(villain.hp>0 && hero.hp > 0)    {
        console.log(hero.heroStrike(villain))
        if(villain.hp<0) {
            break;
        }
        console.log(villain.villainAttack(hero))
        if(hero.hp<0)    {
            break;
        }
    }
    return "Combat complete!"
}
console.log(TheVillain.basicAttack(TheHero));
// combat(TheHero, TheVillain);
