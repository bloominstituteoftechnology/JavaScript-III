/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameObjAttr){
  this.createdAt = gameObjAttr.createdAt
  this.name = gameObjAttr.name
  this.dimensions = gameObjAttr.dimensions
  this.destroy = function(){
    return `${this.name} was removed from the game.`
  }
  
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttr){
  GameObject.call(this, charAttr)
  this.healthPoints = charAttr.healthPoints
  this.takeDamage = function(){
    return `${this.name} took damage`
  }
}




/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttr){
  CharacterStats.call(this, humanoidAttr)
  this.team = humanoidAttr.team
  this.weapons = humanoidAttr.weapons
  this.language = humanoidAttr.language
  this.sprite = humanoidAttr.sprite
  this.greet = function(){
    return `${this.name} offers a greeting in ${this.language}`
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
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
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
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
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });




  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    const villan = new Humanoid({
      createdAt: new Date(),
        dimensions: {
          length: 3,
          width: 4,
          height: 3,
        },
        healthPoints: 10,
        name: 'Villan',
        team: 'The Evil Forces',
        weapons: [
          'Dark Sword',
          'Truth',
        ],
        language: 'Spanish',
        sprite: 'https://cultofthepartyparrot.com/parrots/hd/mustacheparrot.gif'

    })
    
    // console.log(villan.greet())
    
    const hero = new Humanoid({
      
      createdAt: new Date(),
        dimensions: {
          length: 5,
          width: 3,
          height: 4,
        },
        healthPoints: 100,
        name: 'Hero',
        team: 'Love',
        weapons: [
          'Sensual Dance',
          'Intense Stare',
        ],
        language: 'Portuguese',
        sprite: 'https://cultofthepartyparrot.com/parrots/hd/originalparrot.gif'
    })
    const angel = new Humanoid({
      
      createdAt: new Date(),
        dimensions: {
          length: 5,
          width: 3,
          height: 4,
        },
        healthPoints: 100,
        name: 'Lambda Student',
        team: 'Love',
        weapons: [
          'Sensual Dance',
          'Intense Stare',
        ],
        language: 'Pain',
        sprite: 'https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif'
    })
   
    // console.log(hero.takeDamage())
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!



  window.addEventListener('DOMContentLoaded', (event) => {
    startGame()
});
  let character = [hero, villan, angel]
  function startGame(){
   let gameContainer = document.querySelector('.character-group')
   character.forEach(element=>{
      let html = `
      
      <div class="character-wrap">
      <div class="speech-bubble">${element.greet()}</div>
        <img class="character" src="${element.sprite}" alt="${element.name}">
      </div>

      `
      gameContainer.innerHTML += html
      // document.getElementsByClassName(element.name).style.background = element.sprite
      console.log(element.sprite)
   })
  }
  
 

