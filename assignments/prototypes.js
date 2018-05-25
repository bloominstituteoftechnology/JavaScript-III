/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`; // prototype method -> returns the string 'Object was removed from the game.'
  }
}

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  attacks(character) {
    character.hp -= 5;
    if (character.hp <= 0) {
      return (`${this.name} attacks, ${character.name}'s hp is now 0. ${character.name} faints.`);
    } else {
      return (`${this.name} attacks, ${character.name}'s hp is now: ${character.hp}`);
    }
  }
}

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }
  heals(character) {
    character.hp += 5;
    return (`${this.name} heals ${character.name}. ${character.name}'s hp is now: ${character.hp}`);
  }
}



//* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//should inherit destroy() from GameObject through CharacterStats
//should inherit takeDamage() from CharacterStats


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



const syndrome = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Syndrome',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
})

const mrIncredible = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Mr. Incredible',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'English',
})



console.log(syndrome.attacks(archer))
console.log(mrIncredible.heals(archer)) 
console.log(syndrome.attacks(mage))
console.log(syndrome.attacks(swordsman))
