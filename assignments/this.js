/* The for principles of "this";
 * in your own words. explain the four principles for the "this" keyword below.
 * 1. When in the global scope, the value of "this" will be the window/console Object.
 * 2. Whenever a function is called by a preceding dot, the object before that dot is this.
 * 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
 * 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
 */

// Principle 1
function helloObject(str) {
  console.log(this);
  return str;
}
//helloObject("This is a really pointless function!");

let obj = { num: 2 };
const addToThis = function(a) {
  return this.num + a;
};
//console.log(addToThis.call(obj, 4));

// Principle 2
const person = {
  name: "Kevin",
  age: 21,
  location: "Lambda",
  greet: function() {
    return `Hi my name is ${this.name} and I am ${
      this.age
    } years old living in ${this.location}.`;
  }
};

console.log(person.greet());

// Principle 3 (using new keyword)

function Food(favorite) {
  this.food = favorite;
}

const myFavoriteFood = new Food(`pizza`);
console.log(`My favorite food is ${myFavoriteFood.food}`);

// Principle 4 (explicit binding)
const cat = {
  name: "Kevin",
  species: "tabby",
  sound: "meow"
};

function speak() {
  console.log(`${this.name} says ${this.sound}`);
}

speak.call(cat);

// function CordialPerson(greeter) {
// this.greeting = "Hello ";
// this.greeter = greeter;
// this.speak = function () {
//   console.log(this.greeting + this.greeter);
// };
// return greeter;
// }
// //const jerry = new CordialPerson("Newman");
// //const newman = new CordialPerson("Jerry");
// //jerry.speak.call(newman);
// //newman.speak.apply(jerry);

// //jerry.speak();
// //newman.speak();
// Instructions:
// Add a new attribute of sound to these objects
// Create a new method called speak
// Make the pet say it’s sound
//   (you are doing this using.prototype)
function Pet(name, species, sound) {
  this.name = name;
  this.species = species;
  this.sound = sound;
}

let happy = new Pet("Happy", "cat", "meow");

Pet.prototype.greet = function() {
  console.log(this.sound);
};

happy.greet();
