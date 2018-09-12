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
function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
  this.destroy = () => `${attr.name} was removed from the game`;
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attr) {
  this.hp = attr.hp;
  this.name = attr.name;
  this.takeDamage = () => `${attr.name} took damage.`;
  // GameObject.call(this, attr).destroy;
  GameObject.call(this, attr);
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
function Humanoid(attr) {
  this.faction = attr.faction;
  this.weapons = attr.weapons;
  this.language = attr.language;
  this.greet = () => `${attr.name} offers a greeting in ${attr.language}.`;
  CharacterStats.call(this, attr);
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
CharacterStats.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);


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

  
function Villian(attr) {
  this.type = 'Villain'
  Humanoid.call(this, attr);
  this.attacked = (victim) => {
    if (victim.type === this.type){
      console.log(`\n${this.type}s' cant attack other ${this.type}s'`)
    } else {
      if (victim.hp === 0) {
        console.log(`\n${victim.name} [${victim.type}] was defeated!`);
      } else {
        victim.hp = victim.hp - 25;
        console.log(`\n${this.name} [${this.type}] attacked ${victim.name} [${victim.type}] \n${this.name} [${this.type}] HP: ${this.hp} \n${victim.name} [${victim.type}] HP: ${victim.hp}\n`);
        if(victim.hp === 0) {
          console.log(victim.destroy());
        }
      }
    }
  };
}

function Hero(attr) {
  this.type = 'Hero';
  Humanoid.call(this, attr);
  this.attacked = (victim) => {
    if (victim.type === this.type){
      console.log(`\n${this.type}s' cant attack other ${this.type}s'`)
    } else {
      if (victim.hp === 0) {
        console.log(`\n${victim.name} [${victim.type}] was defeated!`);
      } else {
        victim.hp = victim.hp - 25;
        console.log(`\n${this.name} [${this.type}] attacked ${victim.name} [${victim.type}] \n${this.name} [${this.type}] HP: ${this.hp} \n${victim.name} [${victim.type}] HP: ${victim.hp}\n`);
        if(victim.hp === 0) {
          console.log(victim.destroy());
        }
      }
    }
  };
}

Villian.prototype = Object.create(Humanoid.prototype);
Hero.prototype = Object.create(Humanoid.prototype);

const chisaki = new Villian({
  createdAt: new Date(),
  hp: 100,
  name: 'Chisaki',
  group: 'Eight Precepts of Death',
  quirk: 'Overhaul'
});

const deku = new Hero({
  createdAt: new Date(),
  hp: 100,
  name: 'Deku',
  group: 'Heroes: UA Class A',
  quirk: 'One For All'
});

const bakugo = new Hero({
  createdAt: new Date(),
  hp: 100,
  name: 'Bukugo',
  group: 'Heroes: UA Class A',
  quirk: 'Explosion'
});

deku.attacked(chisaki);
chisaki.attacked(deku);
chisaki.attacked(bakugo);
bakugo.attacked(chisaki);
deku.attacked(chisaki);
chisaki.attacked(deku);
chisaki.attacked(bakugo);
chisaki.attacked(deku);
chisaki.attacked(bakugo);
deku.attacked(chisaki);
deku.attacked(chisaki);

