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

function GameObject(gameObjectAttributes){
  this.createdAt = gameObjectAttributes.createdAt;
  this.dimensions = gameObjectAttributes.dimensions;
};

GameObject.prototype.destroy = function() {
  return  `${this.name} was removed from the game.`;
}

// const item = new GameObject(
// 'now', '3D')
//
// console.log(item);
// console.log(item.dimensions);

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes){
  GameObject.call(this, characterAttributes)
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.constructor = CharacterStats;

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}

// const mageStats = new CharacterStats({'createdAt': 'now', 'dimensions': '3D', 'hp': '150hp', name:'Dark Magician'});
// //
// console.log(mageStats)



/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.constructor = Humanoid;

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
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


  function Villain(villainAttributes){
    Humanoid.call(this, villainAttributes);
    this.superAttack = villainAttributes.superAttack;
    this.regularAttack = villainAttributes.regularAttack;
    this.superPower = function(hero){
      hero.hp = hero.hp - this.superAttack.damage;
      if (hero.hp <= 0){
        return hero.noHealth();
      }
      return `${this.name} used ${this.superAttack.name} and caused ${this.superAttack.damage}, ${hero.name}'s current health is ${hero.hp}`;
    }
    this.villainAttack = function(hero){
      hero.hp = hero.hp - this.regularAttack.damage;
      if (hero.hp <= 0){
        return hero.noHealth();
      }
      return `${this.name} used ${this.regularAttack.name}, ${hero.name}'s current health is ${hero.hp}`;
    }
    this.noHealth = function(){
      return `${this.name}'s plan has been foiled, he has been captured!'`
    };
    this.regenerate = function(){
      this.hp = this.hp + 200;
      return `${this.name}'s used regenerate, his current health is now ${this.hp}`
    }

  }

  Villain.prototype = Object.create(Humanoid.prototype);

  // hero:
  // attack
  // defend
  // superPower
  // attackVillain
  // noHealth
  function Hero(heroAttributes){
    Humanoid.call(this, heroAttributes);
    this.regularAttack = heroAttributes.regularAttack;
    this.superAttack = heroAttributes.superAttack;
    this.superPower = function(villain){
      villain.hp = villain.hp - this.superAttack.damage;
      if (villain.hp <= 0){
        return villain.noHealth();
      }
      return `${this.name} used ${this.superAttack.name} and caused ${this.superAttack.damage} of damages to ${villain.name}'s health, ${villain.name}'s current health is ${villain.hp}`;
    }
    this.noHealth = function(){
      return `${this.name} has been defeated. Is this the end of ${this.name}`
    };
    this.heroAttack = function(villain){
      villain.hp = villain.hp - this.regularAttack.damage;
      if (villain.hp <= 0){
        return villain.noHealth();
      }
      return `${this.name} used ${this.regularAttack.name} and caused ${this.regularAttack.damage} of damages to ${villain.name}'s health, ${villain.name}'s current health is ${villain.hp}`;
    }

    this.powerUp = function(){
      this.superAttack.damage = this.superAttack.damage + 400;
      this.regularAttack.damage = this.regularAttack.damage + 200;
      return `${this.name} is powering up.`
    }
    this.powerDown = function(){
      this.superAttack.damage = this.superAttack.damage - 400;
      this.regularAttack.damage = this.regularAttack.damage - 200;
      return `${this.name}'s energy is dwindling, his attack has returned to normal.`
    }
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  const AllForOne = new Villain({
    name: "All For One",
    hp: 3000,
    "superAttack": {
      name: "Ultimate Combination",
      damage: 300
    },
    "regularAttack": {
    name: "Air Cannon",
    damage: 70
    }
  })

  const AllMight = new Hero({
  name: "All Might",
  hp: 2000,
  "superAttack": {
    name: "United States of Smash",
    damage: 250},
  "regularAttack": {
    name: "Texas Smash",
    damage: 100}
  })


console.log(AllForOne.superPower(AllMight))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllForOne.villainAttack(AllMight))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllForOne.regenerate())
console.log(AllMight.regularAttack.damage)
console.log(AllMight.powerUp())
console.log(AllMight.superPower(AllForOne))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllMight.superPower(AllForOne))
console.log(AllMight.powerDown())
console.log(AllMight.superPower(AllForOne))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllForOne.regenerate())
console.log(AllMight.powerUp())
console.log(AllMight.superPower(AllForOne))
console.log(AllMight.heroAttack(AllForOne))
console.log(AllMight.superPower(AllForOne))
