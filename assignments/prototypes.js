/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  this.destroy = function (){
    return `${this.name} was removed from the game`;
  };
}

CharacterStats.prototype = Object.create(GameObject.prototype);
function CharacterStats(characterStatsAttributes){
  GameObject.call(this, characterStatsAttributes);
    this.hp = characterStatsAttributes.hp;
    this.name = characterStatsAttributes.name;
    this.takeDamage = function (){
      `${this.name} took damage.`
    };
}


Humanoid.prototype = Object.create(CharacterStats.prototype);
function Humanoid(humanoidAttributes){
  CharacterStats.call(this, humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    this.greet = function (){
      return `${this.name} offers a greeting in ${this.language}.`;
    };
}
Hero.prototype = Object.create(Humanoid.prototype);
function Hero(heroAttributes){
  Humanoid.call(this, heroAttributes);
    this.magic = heroAttributes.magic;
    this.defenseMechanisms = heroAttributes.defenseMechanisms;
    this.allies = heroAttributes.allies;
    this.attack = function (){
      //causes 3 dmg to villain
    };
    this.masterAttack = function (){
      //causes super awesome 5dmg attack to villain
    };
    this.usesMagic = function (){
      //uses magic to cause 4 dmg to villain
    };
}

Villain.prototype = Object.create(Humanoid.prototype);
function Villain(villainAttributes){
  Humanoid.call(this, villainAttributes);
    this.magic = villainAttributes.magic;
    this.defenseMechanisms = villainAttributes.defenseMechanisms;
    this.allies = villainAttributes.allies;
    this.firstAttack = function (){
      //causes 1 dmg to hero
    };
    this.secondAttack = function (){
      //causes super awesome 5dmg attack to hero
    };
    this.thirdAttack = function (){
      //causes 2 dmg to hero
    }
    this.usesMagic = function (){
      //uses magic to cause 3 dmg to hero
    };
}
 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


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
    language: 'Common Tongue',
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
    language: 'Common Tongue',
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

  const link = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    hp: 18,
    name: 'Link',
    faction: 'Hyrule',
    weapons: [
      'Master Sword',
      'Bombs',
      'Bow and Arrows',
    ],
    language: 'Elvish',
    defenseMechanisms: ['shield', 'armor'],
    allies: ['Zelda', 'Forest Kingdom faction'],
    magic: 'magic wand',
  });

  const evil = new Villain({
   createdAt: new Date(),
   dimensions: {
      length: 3,
      width: 1,
      height:6,
    },
   hp:35,
   name: 'Ganondorf',
   weapons: [
    'Sword',
      ],
   defenseMechanisms: ['shield', 'armor'],
   allies: ['Mage Guild',],
   magic: 'magic staff',
  })
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
  console.log(link.language);
  console.log(evil.defenseMechanisms)


  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!