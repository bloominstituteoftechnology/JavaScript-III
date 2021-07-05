/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global
* 2. implicit
* 3. new
* 4. explicit
*
* write out a code example of each explanation above
*/

// Principle 1
window
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}

sayName('Dave');

// Principle 2
implicit
// code example for Implicit Binding
const objectPrecedingADot = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
};

objectPrecedingADot.sayHello('Ryan');

// Principle 3
new
// code example for New Binding
function Humanoid(humanoidAttributes) {
    CharacterStats.call(this, humanoidAttributes);
    this.faction = humanoidAttributes.faction;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
    Humanoid.prototype.greet = function() {
      console.log(`${this.name} offers a greeting in ${this.language}.`);
    };
}
  
Humanoid.prototype = Object.create(CharacterStats.prototype);

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

// Principle 4
explicit
// code example for Explicit Binding
function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    GameObject.prototype.destroy = function() {
      console.log('Object was removed from the game.');
    };
}

function CharacterStats(characterStatsAttributes) {
    GameObject.call(this, characterStatsAttributes);
    this.hp = characterStatsAttributes.hp;
    this.name = characterStatsAttributes.name;
    CharacterStats.prototype.takeDamage = function() {
      console.log(`${this.name} took damage.`);
    };
}
  
CharacterStats.prototype = Object.create(GameObject.prototype);