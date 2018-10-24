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

GameObject = function (properties) {
    this.createdAt = properties.createdAt;
    this.dimensions = properties.dimensions;
};

GameObject.prototype.destroy = function () {
    console.log(`Object was removed from the game`);
};

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.hp = stats.hp;
    this.name = stats.name
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
    console.log(`${this.name} took damage.`);
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

function Humanoid(features) {
    CharacterStats.call(this, features);
    this.faction = features.faction;
    this.weapons = features.weapons;
    this.language = features.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    console.log(`${this.name} offers a greeting in ${this.language}.`);// greeting method for humanoid
};


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
// * Create Villian and Hero constructor functions that inherit from the Humanoid 
// constructor function.


const Hero = function (heroStats) {
    Humanoid.call(this, heroStats);
};

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.harmon = function (hero, villian) {
    if (hero.hp >= 0) {
        villian.hp -= Math.floor(Math.random() * 10 + 5);
        if (villian.hp <= 0) {
            villian.destroy();
        }
        else {
            villian.takeDamage();
            consoleLogFunctions.hpLeft.call(villian);
        }
    }
    
    else {
        consoleLogFunctions.noHpLeft.call(villian);
    }
};


Hero.prototype.plotArmour = function(hero) {
    if(hero.hp >=0 && hero.hp<=20) {
        hero.hp = 50;
        console.log(`It's too early for ${hero.name} to die! Hp fully restored`)
    }
    else {
        console.log('Hero not weak enough for comeback yet')
    }
};

const JosephJoestar = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 3,
        height: 5.
    },
    hp: 50,
    name: 'Joeseph Joestar',
    faction: 'Human',
    weapons: ['Hamon'],
    language: 'English'
});






const Villian = function (villianStats) {
    Humanoid.call(this, villianStats);
};

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.bloodLust = function (villian, hero) {
    if (villian.hp >= 0) {
        hero.hp -= Math.floor(Math.random() * 5 + 5);
        if (hero.hp <= 0) {
            hero.destroy();
        }
        else {
            hero.takeDamage();
            consoleLogFunctions.hpLeft.call(hero);
        }
    }

    else {
        consoleLogFunctions.noHpLeft.call(villian);
    }
};

Villian.prototype.heal = function (villian) {
    if (villian.hp >= 0) {
        if (villian.hp >= 0) {
            villian.hp += Math.floor(Math.random() * 5);
            consoleLogFunctions.hpLeft.call(villian);
        }
    }

    else {
        consoleLogFunctions.noHpLeft.call(villian);
    }
};

const Dio = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 3,
        height: 5.
    },
    hp: 75,
    name: 'Dio',
    faction: 'Vampire',
    weapons: ['Regeneration'],
    language: 'English'
});



const consoleLogFunctions = {
    noHpLeft: function () {
        console.log(`${this.name} is out of hp. Cannot attack anymore`);
    },
    hpLeft: function() {
        console.log(`${this.name} has ${this.hp}hp left`)
    }
};


// * Give the Hero and Villians different methods that could be used to 
// remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.plotArmour(JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
JosephJoestar.harmon(JosephJoestar,Dio);
Dio.heal(Dio);
Dio.bloodLust(Dio, JosephJoestar);
