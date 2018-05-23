/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  

function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.destroy = () => {
        return this.name + ' was removed from the game';
    };
}
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.hp = stats.hp;
    this.name = stats.name;
    this.takeDamage = () => {
        return `${this.name} took damage.`;
    };
    //code
}
CharacterStats.prototype = Object.create(GameObject.prototype);

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/


function Humanoid(skills) {
    CharacterStats.call(this, skills);
    this.faction = skills.faction;
    this.weapons = skills.weapons;
    this.language = skills.language;
    this.greet = () => {
        return `${this.name} offers a greeting in ${this.language}.`;
    };
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
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
  
 function Villain(stuff) {
    Humanoid.call(this, stuff);
    this.punch = () => {
        this.hp -= 3;
        if (this.hp < 0) {
            return this.name + ' has lost 3 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 3 hit points.';
    }
    };
      this.stab = () => {
        this.hp -= 7;
        if (this.hp < 0) {
            return this.name + ' has lost 7 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 7 hit points';
    }
    };
    this.strike = () => {
        this.hp -= 5;
        if (this.hp < 0) {
            return this.name + ' has lost 5 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 5 hit points';
    }
    };
    this.defend = () => {
        this.hp -= 1;
        if (this.hp < 0) {
            return this.name + ' has lost 1 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 1 hit point.';
    }
    };
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  
    function Hero(junk) {
    Humanoid.call(this, junk);
    this.zap = () => {
        this.hp -= 2;
        if (this.hp < 0) {
            return this.name + ' has lost 2 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
        return this.name + ' has lost 2 hit points.';
    }
    };
    this.stun = () => {
        this.hp -= 5;
        if (this.hp < 0) {
            return this.name + ' has lost 5 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 5 hit points';
    }
    };

        this.magicBlast = () => {
        this.hp -= 8;
        if (this.hp < 0) {
            return this.name + ' has lost 8 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 8 hit points';
    }
    };
    this.dodge = () => {
        this.hp -= 1;
        if (this.hp < 0) {
            return this.name + ' has lost 1 hit points. ' + this.name + ' was removed from the game';
            //code
        }
        else {
            return this.name + ' has lost 1 hit point.';
    }
    //code
  
    //code
  };
    }
  Hero.prototype = Object.create(Humanoid.prototype);
  
  const sorceror = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 12,
    name: 'Tim',
    faction: 'None',
    weapons: [
      'Holy Hand Grenade of Antioch',
    ],
    language: 'Common Tongue',
  });

  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Not Appearing in this Film',
    faction: "The Knights Who Say 'Ni'",
    weapons: [
      'Claymore',
      'Shield',
    ],
    language: 'Ni',
  });
  
console.log(mage.createdAt); // Today's date
  console.log(sorceror.strike()); // { length: 1, width: 2, height: 4 }
  console.log(sorceror.hp); // 15
  console.log(sorceror.name); // Bruce
  console.log(knight.faction); // The Round Table
  console.log(sorceror.weapons); // Staff of Shamalama
  console.log(knight.language); // Elvish
  console.log(knight.zap()); // Lilith offers a greeting in Elvish.
  console.log(knight.dodge()); // Bruce took damage.
  console.log(sorceror.punch()); // Sir Mustachio was removed from the game.
console.log(sorceror.defend());
console.log(knight.stun());
console.log(sorceror.strike());
    
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!