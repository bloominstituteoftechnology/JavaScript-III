'use strict';

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/

function dice(sides, numberOfDie) {
    let working = [];
    let min = 1;
    for (let i = 0; i < numberOfDie; i++) {
        working.push(Math.floor(Math.random() * (sides - min + 1)) + min);
    }
    return working.reduce((total, items) => total + items, 0);
}

/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.destroy = function(opponentName, damage, weapon) {
        return `${
            this.name
        } was killed by ${opponentName}  after taking ${damage} damage from ${weapon}.`;
    };
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
    GameObject.call(this, attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
    this.alignment = attributes.alignment;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(opponentName, damage, weapon) {
    this.hp -= damage;
    if (this.hp <= 0) {
        return this.destroy(opponentName, damage, weapon);
    } else {
        return `${
            this.name
        } was attacked by ${opponentName} with ${weapon} for ${damage} damage and now has ${
            this.hp
        } HP`;
    }
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

function Humanoid(attributes) {
    CharacterStats.call(this, attributes);
    this.faction = attributes.faction;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
};

function Hero(attributes) {
    Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.paladinAttack = function(target, weapon) {
    let damage = dice(8, 1);
    return target.takeDamage(this.name, damage, this.weapons[weapon]);
};

function Villain(attributes) {
    Humanoid.call(this, attributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.shadeAttack = function(target, weapon) {
    let damage = dice(8, 2);
    return target.takeDamage(this.name, damage, this.weapons[weapon]);
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
        height: 1
    },
    hp: dice(6, 3),
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: ['Staff of Shamalama'],
    language: 'Common Toungue'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    hp: dice(6, 5),
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: ['Giant Sword', 'Shield'],
    language: 'Common Toungue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    hp: dice(6, 4),
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: ['Bow', 'Dagger'],
    language: 'Elvish'
});

const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 3,
        height: 6
    },
    hp: dice(6, 5),
    name: 'Eragon',
    faction: 'Alagaesian Rebels',
    weapons: ['Dragon Heart Crystal'],
    language: 'Common Tongue'
});

const shade = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 6
    },
    hp: dice(6, 3),
    name: 'Durza',
    faction: 'Alagaesian Loyalists',
    weapons: ['Demon Soul'],
    language: 'Common Tongue'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

while (paladin.hp > 0 && shade.hp > 0) {
    console.log(paladin.paladinAttack(shade, 0));
    if (shade.hp > 0) {
        console.log(shade.shadeAttack(paladin, 0));
    }
}
// Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!
