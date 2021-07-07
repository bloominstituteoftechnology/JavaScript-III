/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding is Where if not given parameters to work in, 'this' will point back to the window on global scope.
* 2. Implicit Binding is where 'this' is used inside of an object or function to refer directly to the object or function it's in.
* 3. New Binding is where you use 'this' is used as a key in constructor functions.
* 4. Explicit Binding is where 'this' is passed down from inherent objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// ===============================console.log(this);


// Principle 2

// code example for Implicit Binding
// const person = {
//   name: 'Disney',
//   animal: 'husky',
//   pet: function() {
//     console.log(`${this.name} walks his ${this.animal} every day.`);
//   }
// }


// Principle 3

// code example for New Binding

// function Wizard(attributes) {
//   this.spell = attributes.spell;
//   this.robeColor = attributes.robeColor;
//   this.staff = attributes.staff;
// }


// Principle 4

// code example for Explicit Binding

// const goblin = {
//   name: 'Higbar',
//   favVictim: 'Humans'
// }

// function attack() {
//   return `${this.name} loves to attack ${this.favVictim}.`;
// }

// console.log(attack.call(goblin));

