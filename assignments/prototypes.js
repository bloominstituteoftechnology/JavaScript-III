/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/
function GameObject(gameProps) {
  this.createdAt = gameProps.createdAt;
  this.dimensions = gameProps.dimensions;
};

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};


/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterProps) {
  GameObject.call(this, characterProps);
  this.hp = characterProps.hp;
  this.name = characterProps.name;
};
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
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
function Humanoid(humanoidProps) {
  CharacterStats.call(this, humanoidProps);
  this.faction = humanoidProps.faction;
  this.weapons = humanoidProps.weapons;
  this.language = humanoidProps.language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

 
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
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Hero(heroProps) {
    Humanoid.call(this, heroProps);
    this.strength = heroProps.strength;
  };
  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.fastAttack = function (target) {
    if (this.hp > 0) {
      target.hp -= Math.floor(Math.random() * ((this.strength/2) - 0 + 1));
      console.log(`${target.name} now has ${target.hp}hp`);
      if (target.hp < 1) console.log(target.destroy());
    } else {
      console.log(`${this.name} is no longer in the game.`)
    };
  };

  function Villain(villainProps) {
    Humanoid.call(this, villainProps);
    this.strength = villainProps.strength;
  };
  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.fastAttack = function (target) {
    if (this.hp > 0) {
      target.hp -= Math.floor(Math.random() * ((this.strength/2) - 0 + 1));
      console.log(`${target.name} now has ${target.hp}hp`);
      if (target.hp < 1) console.log(target.destroy());
    } else {
      console.log(`${this.name} is no longer in the game and can't attack.`)
    };
  };

  const superMan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 7,
    },
    hp: 100,
    strength: 20,
    name: 'Superman',
    faction: 'Kal-El',
    weapons: [
      'Fist1',
      'Fist2',
    ],
    language: 'English',
  });

  const dirtyBubble = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 4,
    },
    hp: 50,
    strength: 5,
    name: 'The Dirty Bubble',
    faction: 'E.V.I.L.',
    weapons: [
      'bubble blast',
    ],
    language: 'English',
  });

  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);
  superMan.fastAttack(dirtyBubble);
  dirtyBubble.fastAttack(superMan);