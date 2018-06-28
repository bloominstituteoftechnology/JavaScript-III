/*
This is my initial commit so *Someone* won't throw aggressive emojis at me!
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
/*
 
                          ____                       ___  _     _           _                       
     _____ _____ _____   / ___| __ _ _ __ ___   ___ / _ \| |__ (_) ___  ___| |_   _____ _____ _____ 
    |_____|_____|_____| | |  _ / _` | '_ ` _ \ / _ \ | | | '_ \| |/ _ \/ __| __| |_____|_____|_____|
    |_____|_____|_____| | |_| | (_| | | | | | |  __/ |_| | |_) | |  __/ (__| |_  |_____|_____|_____|
                         \____|\__,_|_| |_| |_|\___|\___/|_.__// |\___|\___|\__|                    
                                                             |__/                                   
 

  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function () {
  return `Object was removed from game.`;
};

/*
/*
 
                          ____ _                          _            ____  _        _                           
     _____ _____ _____   / ___| |__   __ _ _ __ __ _  ___| |_ ___ _ __/ ___|| |_ __ _| |_ ___   _____ _____ _____ 
    |_____|_____|_____| | |   | '_ \ / _` | '__/ _` |/ __| __/ _ \ '__\___ \| __/ _` | __/ __| |_____|_____|_____|
    |_____|_____|_____| | |___| | | | (_| | | | (_| | (__| ||  __/ |   ___) | || (_| | |_\__ \ |_____|_____|_____|
                         \____|_| |_|\__,_|_|  \__,_|\___|\__\___|_|  |____/ \__\__,_|\__|___/                    
                                                                                                                  
 
*/
  ////////////////////////////////////////////////////////////////////////////////////////
  // * hp                                                                               //
  // * name                                                                             //
  // * takeDamage() prototype method -> returns the string '<object name> took damage.' //
  // * should inherit destroy() from GameObject's prototype                             //
  ////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
 function CharacterStats(characterstatsAttributes){
   GameObject.call(this,characterstatsAttributes)            
   this.hp = characterstatsAttributes.hp;          
  this.name = characterstatsAttributes.name;       
}

  ////////////////////////////////////
  // === GameObject inheritance === //
  ////////////////////////////////////
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`; 
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
//   === Humanoid === //                                                                                      //
//                                                                                                            //
//   * faction                                                                                                //
//   * weapons                                                                                                //
//   * language                                                                                               //
//   * greet() prototype method -> returns the string '<object name> offers a greeting in <object language>.' //
//   * should inherit destroy() from GameObject through CharacterStats                                        //
//   * should inherit takeDamage() from CharacterStats                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Humanoid(humanoidAttr) {
  CharacterStats.call(this, humanoidAttr);
  this.faction = humanoidAttr.faction;
  this.weapons = humanoidAttr.weapons;
  this.language = humanoidAttr.language;
}

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

  console.log(mage.createdAt);
  console.log(archer.dimensions);
  console.log(swordsman.hp); 
  console.log(mage.name); 
  console.log(swordsman.faction); 
  console.log(mage.weapons); 
  console.log(archer.language);
  console.log(archer.greet());
  console.log(mage.takeDamage());
  console.log(swordsman.destroy()); 


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!