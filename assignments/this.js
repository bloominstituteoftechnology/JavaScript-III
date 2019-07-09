/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. If this is called in the global scope, it will refer to the window or console object
* 2. If this is called inside of an object, it is implicit that it refers to that Object. also, refers to the object to the left of the dot
* 3. When using a constructor class and building a new object with that class, the this keyword refers to each new instance of that Object
* 4. You can use the keywords call, apply, or bind to explicitly attach the this keyword to something
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function print() {
  console.log(this)
}
print();

// Principle 2

// code example for Implicit Binding

const myObj = {
  name: 'Marge',
  date: new Date,
  speak: function() {
    console.log(`My name is ${this.name} and today is ${this.date}`)
  }
}

console.log(myObj.speak());

// Principle 3
// code example for New Binding
class Character {
  constructor(attr) {
    this.name = attr.name;
    this.gender = attr.gender;
    this.origin = attr.origin;
    this.powers = attr.powers;
    this.alliance = attr.alliance;
    this.intro = function () {
      console.log(`There's a new ${this.alliance} on the block. ${this.gender} name is ${this.name}, and comes from ${this.origin}. Powers include ${this.powers}.`);
    };
  }
}

const electro = new Character({
  name: 'ELECTRO',
  gender: 'His',
  origin: 'South Dakota',
  powers: 'electricity manipulation and telekenesis',
  alliance: 'villain'
})

const shadow = new Character({
  name: 'SHADOW',
  gender: 'Her',
  origin: 'Israel',
  powers: 'light refraction, dimension hopping, and making a solid cup of tea',
  alliance: 'hero'
})

electro.intro();
shadow.intro();

// Principle 4

// code example for Explicit Binding

electro.intro.call(shadow);



console.log(`-----------------End of "this"-----------------`)