/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If no other binding is attached, the window is the value of 'this'.
* 2. Whenever a function is invoked, 'this' binds to the object before the preceding dot.
* 3. Used in contructor function 'this' refers to a instance of the object. 
* 4. The first parameter of .call or .apply method is the binding of 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);



// Principle 2

// code example for Implicit Binding
const sable = {
  'name': 'Mo',
  'speak': function(breed) {
    console.log(`My name is ${this.name}, and I am a ${breed}.`)
  } 
};
sable.speak('Shetland Sheepdog');



// Principle 3

// code example for New Binding
function MyPet(name) {
  this.name = name;
  this.breed = 'Shetland Sheepdog'
  this.intro = function() {
    console.log(`${this.name} is a ${this.breed}`)
  }
}

const mo = new MyPet('Mo');
const bi = new MyPet('Bi');

mo.intro();
bi.intro();



// Principle 4

// code example for Explicit Binding
const tri = {
  'name': 'Bi',
  'age': 5
};
const favorite = ['snuggle', 'follow my humans around', 'fetch'];

function biLikes(favorite1, favorite2) {
  console.log(`My name is ${this.name}, and I like to ${favorite1} and ${favorite2}.`)
}

biLikes.apply(tri, favorite);