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
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
};

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
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} doesn't duck in time`; //changed for stretch
};
//for stretch
CharacterStats.prototype.takeOtherDamage = function() {
  return `${this.name} almost but doesn't quite get out of the way`;
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
function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;

  //for stretch
  this.pronouns = humanoidAttributes.pronouns;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
};


/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by uncommenting these 3 objects and the list of console logs below:

//
// const mage = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   },
//   hp: 5,
//   name: 'Bruce',
//   faction: 'Mage Guild',
//   weapons: [
//     'Staff of Shamalama',
//   ],
//   language: 'Common Toungue',
// });
//
// const swordsman = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 2,
//   },
//   hp: 15,
//   name: 'Sir Mustachio',
//   faction: 'The Round Table',
//   weapons: [
//     'Giant Sword',
//     'Shield',
//   ],
//   language: 'Common Toungue',
// });
//
// const archer = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//   },
//   hp: 10,
//   name: 'Lilith',
//   faction: 'Forest Kingdom',
//   weapons: [
//     'Bow',
//     'Dagger',
//   ],
//   language: 'Elvish',
// });
//
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


function Villain(villainAttributes) {
  Humanoid.call(this, villainAttributes);
  this.level = villainAttributes.level;
  this.equippedWeapon = this.weapons[0];
  this.salves = villainAttributes.salves;
  this.adverbs = [
      'evilly',
      'wickedly',
      'spitefully',
      'villainously',
      'meanly',
      'malevolently',
      'maliciously',
    ]
    this.adjectives = [
      'evil',
      'dark and stormy',
      'noxious',
      'mischievous',
      'wicked',
      'pestiferous',
    ]
}

Villain.prototype = Object.create(Humanoid.prototype);


Villain.prototype.heal = function() {
    if (this.salves === 0) {
      return `${this.name} attempted to use a healing salve but forgot ${this.pronouns[1]} ${this.pronouns[3]} out. `;
    }
    let healNum = Math.floor(Math.random() * this.level);
    if (healNum === 0) {
      return `Oops ${this.name} can't get the top off of the healing salve bottle. Darn childproof tops. Darn children.`;
    }
    this.salves -= 1;
    this.hp += healNum;
    return `${this.name} used a healing salve and it really got the evil blood pumping again! ${healNum} HP restored and ${this.pronouns[0]} ${this.pronouns[2]} now at ${this.hp} HP. `;
  } //end heal

Villain.prototype.attack = function(opponent) {
    if (opponent.name === this.name) {
      if (this.hp <= 0){
        return `Hey ${this.name}, I hate to have to remind you of this (because you kind of scare me), but you're dead and you can't attack anyone when you're dead. Not even yourself.`;
      }
      this.hp -= 1;
      if (this.hp <= 0) {
        return `Wooooooow, ${this.name}. You just managed to drop your ${this.equippedWeapon} on your foot, killing yourself.` + this.destroy() + `.`;
      }
      return `Did... did you just try to attack yourself, ${this.name}? Fine. You dropped your ${this.equippedWeapon} on your foot and lost 1 HP. You are now at ${this.hp} HP.`;
    }
    if (this.hp <= 0){
      return `Uhhhhhh ${this.name}? You died. You can't attack anyone. Because you're dead. This isn't a zombie game.`;
    }
    if (opponent.hp <= 0) {
      return `Hey, ${opponent.name} is already out of the game. You won. Stop beating a dead horse. Go back to your evil lair and do something evil.`;
    }
    let damageNum = Math.floor(Math.random() * this.level);
    if (damageNum === 0) {
      return `${this.name} ${this.adverbs[Math.floor(Math.random()*this.adverbs.length)]} tried to attack with ${this.pronouns[1]} ${this.adjectives[Math.floor(Math.random()*this.adjectives.length)]}  ${this.equippedWeapon} but missed.`;
    }
    opponent.hp -= damageNum;
    if (opponent.hp <= 0) {
      return `Well I guess today goes to the forces of evil. The attack lands and decimates the hero. ` + opponent.destroy();
    }
    return `${this.name} ${this.adverbs[Math.floor(Math.random()*this.adverbs.length)]} hurls ${this.pronouns[1]} ${this.adjectives[Math.floor(Math.random()*this.adjectives.length)]} ${this.equippedWeapon} at ${opponent.name} for a possible ${damageNum} HP damage. ` + opponent.takeOtherDamage() + ` and is now at ${opponent.hp} HP.`;
  } ;//attack

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.level = heroAttributes.level;
  this.equippedWeapon = this.weapons[0];
  this.salves = heroAttributes.salves;
  this.adverbs = [
    'heroically',
    'bravely',
    'boldly',
    'courageously',
    'fearlessly',
    'valorously',
    'valiantly',
    'gallantly',
    'intrepedly',
  ];
  this.adjectives = [
    'light and fluffy',
    'hearty',
    'well-conditioned',
    'wholesome',
  ];
};

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heal = function() {
    if (this.salves === 0) {
      return `${this.name} attempted to use a healing salve from that nice witch but forgot ${this.pronouns[1]} ${this.pronouns[3]} out. `;
    }
    let healNum = Math.floor(Math.random() * this.level);
    if (healNum === 0) {
      return `Oops ${this.name} can't get the top off of the healing salve bottle. Darn childproof tops. But child safety is important to ${this.pronouns[4]} so ${this.pronouns[0]}\'ll just try again later when feeling stronger than a child.`;
    }
    this.salves -= 1;
    this.hp += healNum;
    return `${this.name} uses a delicious healing salve and feels much better. ${healNum} HP restored and ${this.pronouns[0]} ${this.pronouns[2]} now at ${this.hp} HP. `;
  } //end heal

Hero.prototype.attack = function(opponent) {
    if (opponent.name === this.name) {
      if (this.hp <= 0){
        return `Hey ${this.name}, I hate to break it to you but you're dead and you can't attack anyone when you're dead. Not even yourself. Heroes don't get like a pass on the death thing.`;
      }
      this.hp -= 1;
      if (this.hp <= 0) {
        return `Congratulations, ${this.name}. You just managed to drop your ${this.equippedWeapon} on your foot, killing yourself. ` + this.destroy() + `.`;
      }
      return `Did... did you just try to attack yourself, ${this.name}? Fine. You dropped your ${this.equippedWeapon} on your foot and lost 1 HP. You are now at ${this.hp} HP.`;
    }
    if (this.hp <= 0){
      return `Uhhhhhh ${this.name}? You died. You can't attack anyone. Because you're dead. This isn't a zombie game.`;
    }
    if (opponent.hp <= 0) {
      return `Look, ${opponent.name} is already out of the game. Light triumphed over darkness. Stop beating a dead horse.`;
    }
    let damageNum = Math.floor(Math.random() * this.level);
    if (damageNum === 0) {
      return `${this.name} ${this.adverbs[Math.floor(Math.random()*this.adverbs.length)]} tried to attack with ${this.pronouns[1]} ${this.adjectives[Math.floor(Math.random()*this.adjectives.length)]} ${this.equippedWeapon} but missed.`;
    }
    opponent.hp -= damageNum;
    if (opponent.hp <= 0) {
      return `YEAH FORCES OF LIGHT! The attack lands and lands hard enough to kill. Wait are heroes supposed to kill people? ` + opponent.destroy();
    }
    return `${this.name} ${this.adverbs[Math.floor(Math.random()*this.adverbs.length)]} throws ${this.pronouns[1]} ${this.adjectives[Math.floor(Math.random()*this.adjectives.length)]} ${this.equippedWeapon} at ${opponent.name} for a possible maximum ${damageNum} HP damage. ` + opponent.takeDamage() + ` and is now at ${opponent.hp} HP.`;
  }; //end attack

const snowWhite = new Hero({
  createdAt: new Date(),
  hp: 20,
  name: 'Snow White',
  faction: 'The Princesses',
  weapons: [
    'attack dwarf',
    'frying pan',
  ],
  language: 'Common Toungue',
  level: 6,
  salves: 2,
  gender: 'Neither',
  pronouns: [
    'they',
    'their',
    'were',
    'are',
    'them',
  ],
});

const evilQueen = new Villain({
  createdAt: new Date(),
  hp: 20,
  name: 'The Evil Queen',
  faction: 'Terrible Stepmothers',
  weapons: [
    'poison apple',
    'that creepy mirror',
  ],
  language: 'Common Toungue',
  level: 5,
  salves: 2,
  gender: 'Female',
  pronouns: [
    'she',
    'her',
    'was',
    'is',
    'her',
  ]

})






//character object names: snowWhite, evilqueen
//method options:
//.attack(opponent) to go after that terrible other person!
//.heal() attempt to get back in the game with some magic salve. Or at least stall the inevitable embrace of death.

console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(evilQueen));
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(snowWhite.heal());
console.log(snowWhite.salves);
console.log(snowWhite.heal())
console.log(snowWhite.salves);
console.log(snowWhite.heal());
console.log(snowWhite.salves);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(evilQueen));
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(snowWhite.heal());
console.log(snowWhite.salves);
console.log(snowWhite.heal())
console.log(snowWhite.salves);
console.log(snowWhite.heal());
console.log(snowWhite.salves);
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(evilQueen));
console.log(snowWhite.attack(evilQueen));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(evilQueen.attack(snowWhite));
console.log(snowWhite.heal());
console.log(snowWhite.salves);
console.log(snowWhite.heal())
console.log(snowWhite.salves);
console.log(snowWhite.heal());
console.log(snowWhite.salves);
