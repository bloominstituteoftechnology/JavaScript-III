/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. it is using this while intentionally or unitetionally pointing to the window. 
* 2. The implicit binding is reffering to the left of the dot and binds to that scope
* 3. The  new  binding uses this while referencing a constructor to build a new object using the constructor.
* 4. this is used in explicit binding to reference another constructor for inheritance .
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
function CharacterStats (attributes){
    GameObject.call(this, attributes);
    this.hp = attributes.hp;
    this.name = attributes.name;
  }
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage`}
    CharacterStats.prototype = Object.create(GameObject.prototype);

// Principle 3

// code example for New Binding
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



// Principle 4

// code example for Explicit Binding
function Humanoid (attributes){
    GameObject.call(this, attributes);
    CharacterStats.call(this, attributes);
     this.faction = attributes.faction;
     this.weapons = attributes.weapons;
     this.language = attributes.language;
  }