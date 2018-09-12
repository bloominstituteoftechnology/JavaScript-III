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

function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.destroy = function() {
        return `${this.name} was removed from the game.`;
    }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes) {
    GameObject.call(this, characterAttributes);
    this.hp = characterAttributes.hp;
    this.name = characterAttributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype)
CharacterStats.prototype.takeDamage = function(damage) {
    this.hp -= damage;
    return `${this.name} took damage.`;
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
function Humanoid(humanStats) {
    CharacterStats.call(this, humanStats);
    this.faction = humanStats.faction;
    this.weapons = humanStats.weapons;
    this.language = humanStats.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
};





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

function Hero(heroStats) {
    Humanoid.call(this, heroStats);
    this.magic = heroStats.magic;
    this.swordsmanship = heroStats.swordsmanship;
    this.speed = heroStats.speed;
}

Hero.prototype = Object.create(Humanoid.prototype);

function Villian(villianStats) {
    Humanoid.call(this, villianStats);
    this.magic = villianStats.magic;
    this.swordsmanship = villianStats.swordsmanship;
    this.speed = villianStats.speed;
}

Villian.prototype = Object.create(Humanoid.prototype);

let damage = 0;

Humanoid.prototype.castSpell = function(enemy) {
    damage = this.magic * this.speed;

    if (enemy.hp > 0) {
        enemy.takeDamage(damage);
    } else {
        console.log(enemy.destroy());
    }
    console.log(`${enemy.name}'s health is now: ${enemy.hp}`)
        //did the attack kill them?
    if (enemy.hp < 0) {
        console.log(enemy.destroy());
        console.log(`Goodbye ${enemy.name}`);
    }
}

const wizardsDuel = function(attacker, defender) {
    while ((attacker.hp > 0) && (defender.hp > 0)) {
        attacker.castSpell(defender);
        defender.castSpell(attacker);
    }
}

const wizard = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 40,
    name: 'Harry',
    faction: 'London',
    weapons: [
        'Wand',
        'Dagger',
    ],
    language: 'English',
    magic: 3,
    swordsmanship: 4,
    speed: 2
})

const darkWizard = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 40,
    name: 'Raspar',
    faction: 'Cave',
    weapons: [
        'wand',
        'Dagger',
    ],
    language: 'Elvish',
    magic: 4,
    swordsmanship: 0,
    speed: 1
})


wizard.castSpell(darkWizard);
wizardsDuel(darkWizard, wizard);