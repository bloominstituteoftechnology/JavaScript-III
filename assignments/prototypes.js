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
function GameObject(attribute){
  this.createdAt = attribute.createdAt;
  this.dimensions = attribute.dimensions;
}
GameObject.prototype.destroy = function (){
  return `Object was removed from the game`;
}


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterAttributes){
  GameObject.call(this, characterAttributes);
  this.hp = characterAttributes.hp;
  this.name = characterAttributes.name;
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
function Humanoid(humanoidAttributes){
  GameObject.call(this, humanoidAttributes);
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.damage = humanoidAttributes.damage;
}
Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}

//Stretch Villians
function Villian(vAts){
  Humanoid.call(this, vAts );
  this.villian_move = vAts.villian_move;
}
Villian.prototype = Object.create(GameObject.prototype);
Villian.prototype = Object.create(CharacterStats.prototype);
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.vBattle = function(){
  for(human.hp; human.hp>0;human.hp-=demon.damage){
    console.log(`${human.name} has been attacked by ${demon.name} of the ${demon.faction} and is currently at ${human.hp} hp`);
    if(`${human.hp}` <= 10){
      return `${human.name} has been slain`;
    }
  }
}

function Hero(hAts){
  Humanoid.call(this, hAts);
  this.hero_move = hAts.hero_move;
}
Hero.prototype = Object.create(GameObject.prototype);
Hero.prototype = Object.create(CharacterStats.prototype);
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.hBattle = function(){
  for(demon.hp; demon.hp>0;demon.hp-=human.damage){
    console.log(`${demon.name} has been attacked and is currently at ${demon.hp} hp`);
    if(`${demon.hp}` <= 20){
      return `${demon.name} has been vanquished`;
    }
  }
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
    hp: 50,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    damage: 45,
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 150,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    damage: 40,
    language: 'Common Toungue',
  });
  //
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    damage: 25,
    language: 'Elvish',
  });

  const demon = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 100,
    name: 'Balthazar',
    faction: 'Demon Clan',
    weapons: [
      'Pitchfork',
      'sword',
    ],
    villian_move:`demon-edged swork`,
    damage: 15,
    language: 'demonic',
  });

  const human = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 3,
      height: 6,
    },
    hp: 160,
    name: 'King David',
    faction: 'Situ Clan',
    weapons: [
      'left-fist',
      'right-fist',
    ],
    hero_move: `Star of David`,
    damage: 15,
    language: 'english',
  });
  //
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
  console.log(archer.damage);
  console.log(demon.villian_move);
  console.log(demon.vBattle());
  console.log(human.hero_move);
  console.log(human.hBattle());
  // Stretch task:
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
