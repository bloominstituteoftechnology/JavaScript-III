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

const damageAmount = (min, max) => {
  return Math.random() * (max - min) + min;
}

const GameObject = function(attrs){
  this.createdAt = attrs.createdAt;
  this.dimensions = attrs.dimensions;
  this.destroy = function(){
    return `Object was removed from the game.`
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

const CharacterStats = function(statAttrs) {
  GameObject.call(this, statAttrs)
  this.hp = statAttrs.hp;
  this.name = statAttrs.name;
  this.takeDamage = function() {
    return `${this.name} took damage.`;
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

const Humanoid = function(humanoidAttrs){
  CharacterStats.call(this, humanoidAttrs);
  this.faction = humanoidAttrs.faction;
  this.weapons = humanoidAttrs.weapons;
  this.language = humanoidAttrs.language;
  this.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`
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

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods! 

  const Hero = function(attrs){
    Humanoid.call(this, attrs);
    this.expelliarmus = function(enemy){
      if(enemy.hp > 0){
        const damage = Math.round(damageAmount(0, 100));
        enemy.hp -= damage;
        console.log(`${this.name} hit ${enemy.name} with Expelliarmus, causing ${damage} and leaving ${enemy.name} with ${enemy.hp} \n`);
      } else {
        console.log(`Your enemy (${enemy.name}) is dead \n \n`);
      }
    }
  }

  const Villain = function(attrs){
    Humanoid.call(this, attrs);
    this.avadaKedavra = function(enemy){
      const damage = Math.round(damageAmount(0, 100));
      if(enemy.hp > 0){
        enemy.hp -= damage;
        console.log(`${this.name} hit ${enemy.name} with Avada Kedavra, causing ${damage} and leaving ${enemy.name} with ${enemy.hp} \n`);
      } else {
        console.log(`Your enemy (${enemy.name}) is dead \n \n`); 
      }
    }
  }

  const voldemort = new Villain({
    createdAt: Date.now(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    }, hp: 700, name: 'Lord Voldemort', faction: 'Bad', weapons: 'Wand', language: 'English'
  });

  const harryPotter = new Hero({
    createdAt: Date.now(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    }, hp: 200, name: 'Harry Potter', faction: 'Good', weapons: 'Wand', language: 'English'
  });

  while(voldemort.hp > 0){
    voldemort.avadaKedavra(harryPotter);

    if(harryPotter.hp <= 0){
      // since voldy and HP share a soul (sort of), if Voldy kills HP, he kills his soul in HP, not HP, thus HP must always win in direct combat.
      voldemort.hp -= 100;
      console.log((`Harry Potter, is dead. Ha! Ha Ha!! \n`).toUpperCase());
      harryPotter.hp = 100;
      console.log(`Harry: "I\'m not dead yet! We have to kill the snake!!" Harry Potter hit points is set to ${harryPotter.hp} due to the immense ignorance of Voldemort all those years ago in Godric's Hollow. \n`);
    }
    
    harryPotter.expelliarmus(voldemort);
  }



  console.log('Voldemort HP: ' + voldemort.hp);
  console.log('Harry Potter HP: ' + harryPotter.hp);