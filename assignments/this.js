/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The first principle is Global this. in strict mode it will return undefined other wise it returns a global object. Window Binding a.k.a Global Binding happens when there is nothing for this to put to i.e. no context for this keyword to refer to
 * 2. The second principle is Implicit Binding. When using Implicit Binding whatever function precedes the dot that is what this is refering to. In Impliciting binding this always refers to what ever object is to the left of the dot. Implicit binding is used about 80% of the time when using keyword this.
 * 3. The third principle is New Binding. When using New Binding this keyword refers to a specific instance of an object that is created then returned by a constructor function. A constructor function is a function that is made and returns an object. It is essentially an object creator used to create new objetcs that share some common traits i.e. every Person would have a name:, age:, and location:.
 * 4. The fourth, and final principle is Explicit Binding. Whenever .call or .apply method is used the keyword this is Explicitly defined to what ever parameter is in the () of .call or .apply i.e. myObj.call(person.speack());.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
let myAnimal = {
  name: 'Bella',
  species: 'Dog',
  speak: 'WOFF WOOF',
  bark: function() {
    console.log(this.speak);
  },
};

myAnimal.bark();
// Principle 3

// code example for New Binding
function Pet(name) {
  this.petName = name;
}

let myPet = new Pet('Bella the lovable Pitbull');
console.log(myPet.petName);
// Principle 4

// code example for Explicit Binding
function pet() {
  console.log(this.petName);
}

let myDoggo = {
  name: 'Bella',
  petName: 'Hi, my name is Bella',
};

let myOtherDoggo = {
  name: 'Shy',
  petName: 'Hi, my name is Shy',
};

pet.call(myDoggo);
pet.call(myOtherDoggo);
