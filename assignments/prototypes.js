

// DRY

// define constructor function
function GameObject(attributes) {
  // Properties
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

// Parent Methods
GameObject.prototype.destroy = function() {
  console.log( 'Object was removed from the game.')
}

function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.hp = charAttributes.hp;
  this.name = charAttributes.name
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  console.log(`${this.name} took damage`)
}

function Humanoid(humanAttributes) {
  CharacterStats.call(this, humanAttributes);
  this.faction = humanAttributes.faction;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  console.log(`${this.name} offers a greeting in ${this.language}`)
}

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
  console.log(swordsman.destroy())
  // Stretch task:
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
