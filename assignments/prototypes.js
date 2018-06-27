/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
  * 
*/
    function GameObject(gameAttributes){
      this.createdAt = gameAttributes.createdAt;
      this.dimensions = gameAttributes.dimensions;
    }

    GameObject.prototype.destroy = function(){
        console.log('Object was removed from the game');
    }
/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

    function CharacterStats(characterAttributes){
      GameObject.call(this,characterAttributes);
      this.hp = characterAttributes.hp;
      this.name = characterAttributes.name;
    }

    CharacterStats.prototype = Object.create(GameObject.prototype);

    CharacterStats.prototype.takeDamage = function(damage){
      this.hp -= damage;
      if(this.hp > 0){
        console.log(`${this.name} took damage! ${this.hp} remaining. Watch out!`)
      }else if(this.hp <= 0){
        destroy();
      }
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
      CharacterStats.call(this, humanoidAttributes);
      this.faction = humanoidAttributes.faction;
      this.weapons = humanoidAttributes.weapons;
      this.language = humanoidAttributes.language;
    }

    Humanoid.prototype = Object.create(CharacterStats.prototype)

    CharacterStats.prototype.greet = function(){
      console.log(`${this.name} offers a greeting in ${this.language}`)
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

  function Villian(villianAttributes){
    Humanoid.call(this, villianAttributes);
    this.name = villianAttributes.name;
    this.target = villianAttributes.target;
  }

  Villian.prototype = Object.create(Humanoid.prototype);
  Villian.prototype.attack = function(target){
    console.log(`${this.name} just attacked ${target.name} with ${this.weapons}`)
    target.takeDamage(5);
    }


  function Hero(heroAttributes){
    Villian.call(this, heroAttributes); 
    
  }

  Hero.prototype = Object.create(Villian.prototype);
  
const superMan = new Hero({
  createdAt: new Date(),
  name: 'SuperMan', 
  hp: 50, 
  faction: 'City King',
  weapons: [
      'Fists of Iron',
      'Shield',
    ],
    language: 'Common Tongue',
});

const shyVillian = new Villian({
  createdAt: new Date(),
  name: 'shyVillian', 
  hp: 50, 
  faction: 'City King', 
  weapons: [
      'Bombs',
      'Magic Spells',
    ],
    language: 'Common Tongue',
})


shyVillian.attack(superMan);