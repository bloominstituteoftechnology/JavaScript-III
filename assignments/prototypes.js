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
function GameObject(object) {
    this.createdAt = object.createdAt;
    this.dimensions = object.dimensions;

}

GameObject.prototype.destroy = function() {
    console.log(`${this.name} was removed from the game.`);
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
    this.hp = stats.hp;
    this.name = stats.name;
    GameObject.call(this, stats);
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage`;
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
function Humanoid(humanoidAtt) {
    this.faction = humanoidAtt.faction;
    this.weapons = humanoidAtt.weapons;
    this.language = humanoidAtt.language;
    CharacterStats.call(this, humanoidAtt);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
}

function Hero(good) {
    Humanoid.call(this, good);
    this.soundwave = good.soundwave;
    this.health = good.health;
}

Hero.prototype = Object.create(Humanoid.prototype);


Hero.prototype.soundwaves = function() {
    this.health -= 40;
    return `${this.name} delivers a explosive ${this.weapons[1]} to the villian.`;
}

Hero.prototype.sonicshock = function() {
    this.health -= 60;
    return `${this.name} uses ${this.weapons[0]} to become victorious.`;
}



function Villian(evil) {
    Humanoid.call(this, evil);
    this.lasers = evil.lasers;
    this.health = evil.health;
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.lasers = function() {
    this.health -= 20;
    return `The villian ${this.name} shoots ${this.weapons[0]} but misses.`;
}

Villian.prototype.cyberlink = function() {
    this.health -= 40;
    return `${this.name} tries to use ${this.weapons[1]} to no prevail.`;
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

const sonicboom = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 10,
    name: 'Sonic Boom',
    faction: 'New Earth-Squadron IV',
    weapons: [
        'sonic shock',
        'sound wave',
    ],
    language: 'English'
});

const octoBot = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    hp: 10,
    name: 'Octobot',
    faction: 'Audrino V',
    weapons: [
        'lasers',
        'cyberlink',
    ],
    language: 'Android'
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
console.log("A new battle is about to begin")
console.log(`The match ${sonicboom.name} vs ${octoBot.name} has begun.`);
console.log(sonicboom.soundwaves());
console.log(octoBot.lasers());
console.log(octoBot.cyberlink());
console.log(sonicboom.sonicshock());


// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!