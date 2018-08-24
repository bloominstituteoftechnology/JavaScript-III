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

function GameObject(gameObj) {
  this.createdAt = gameObj.createdAt;
  this.dimensions = gameObj.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charObj) {
  GameObject.call(this, charObj);
  this.hp = charObj.hp;
  this.name = charObj.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage and ${this}`; 
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

function Humanoid(humObj) {
  CharacterStats.call(this, humObj);
  this.faction = humObj.faction;
  this.weapons = humObj.weapons;
  this.language = humObj.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  // console.log(this);
  return `${this.name} offers a greeting in ${this.language} and ${this}`;
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

  // console.log(archer)

/*
function greetTwo(str) {
  if (str == "yes")
  {
    return true;
  }
  return false;
  // console.log(this);
}

console.log(greetTwo("no"));
console.log(greetTwo("yes"));
*/

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  function Villian(villObj) {
    Humanoid.call(this, villObj);
  }

  Villian.prototype = Object.create(Humanoid.prototype);

  Villian.prototype.healthBeat = function(strStatus) {
    if (strStatus === "beat"){
      --this.hp;
    }
    else{
      ++this.hp;
    }
    
    if (this.hp <= 0) {
      return `You are dead. You lost`;
    }
    return `Game on, you still have ${this.hp} lives.`;
  }

  function Hero(heroObj) {
    Humanoid.call(this, heroObj);
  }

  Hero.prototype = Object.create(Humanoid.prototype);



  const villianOne = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 2,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const heroOne = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 2,
    name: 'Jenkins',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // console.log(villianOne.healthBeat("beat"));
  // console.log(villianOne.healthBeat("beat"));
  // console.log(villianOne.healthBeat("beat"));

  warAction = {
    hero: "sword",
    villian: "defense",
    turn: 1
  }

  function fightItOut(Hero, Villian, action){
    let heroHp = Hero.hp;
    let villianHp = Villian.hp;
    switch (action.turn){
      case 1:
        switch (action.hero){
          case "sword":
            if (action.villian === "defense"){
              // return --Villian.hp;
              console.log(--Villian.hp);
            }
            else if (action.villian === "sheild"){
              // return Villian.hp;
              console.log (Villian.hp);
            }
            else{
              // return ++Villian.hp;
              console.log(++Villian.hp);
            }
        }
    }
    console.log(`Hero: ${Hero.hp} and Villian: ${Villian.hp}`)
  }

  fightItOut(heroOne, villianOne, warAction);