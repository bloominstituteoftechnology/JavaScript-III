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

function GameObject (gameAttributes) {
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}

// GameObject.prototype.createdAt = new Date();

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * hp      done
  * name    done
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'       done
  * should inherit destroy() from GameObject's prototype                                      done
*/

function CharacterStats(charAttributes) {
  this.hp = charAttributes.hp;
  this.name = charAttributes.name;
  GameObject.call(this, charAttributes);
}

// Referencing GameObject.prototype to access its properties, including destroy() from GameObject.prototype
CharacterStats.prototype = Object.create(GameObject.prototype);

// takeDamage() // prototype method -> reference this.name from itself
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}





/*
  === Humanoid ===
  * faction      done
  * weapons      done
  * language      done
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'       done
  * should inherit destroy() from GameObject through CharacterStats       done
  * should inherit takeDamage() from CharacterStats                       done
*/

function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

// Referencing CharacterStats.prototype to have access its properties and GameObject as well. 
Humanoid.prototype = Object.create(CharacterStats.prototype);


//greet() // prototype method -> referencing this.name from CharacterStats and this.language from itself
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
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


  function Villain(villainAttributes) {
    this.hp = villainAttributes.hp;  //might not be required
    Humanoid.call(this, villainAttributes);   
    //call to inherit from Humanoid constructor function
  }

  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.attack = function(obj, hp) {
    // check your health points
    console.log(obj.name);   //testing
    console.log(obj.hp);     //testing
    let count = obj.hp;
    // decrement one health points
    const decrement = (count) => {
      console.log(count - 1);
      console.log(`${this.name} took damage.`)
      return count;
    }
    // return new lowered health points
    console.log(decrement());
    // if hp === 0,
    if (obj.hp === 0) {
      destroy(obj.name);
    } else {
      console.log (`${obj} has ${obj.hp} health points left.`)
    }
    // invoke destroy()
    // console.log(`${obj.name} was removed from the game.`);
  }


  function Hero(heroAttributes) {
    this.hp = heroAttributes.hp;    //might not be required
    Humanoid.call(this, heroAttributes);
    //call to inherit from Humanoid constructor function
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.attack(archer, 10);
  // Villain.prototype.attack(archer);
  // Villain.prototype.attack(archer);
