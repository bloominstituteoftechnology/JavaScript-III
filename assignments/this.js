/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - binds the 'this' keyword to the object that is to the left of the function automatically
* 2. Explicit binding - manually bind the 'this' keyword to an object by passing the object as an argument of the .call or .apply method of a function
* 3. New binding - bind the 'this' keyword to a new object by creating the object from a constructor function
* 4. Window binding - the default state for the 'this' keyword which refers to the window in which javascript is being run
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// window.sayHello() = function() {
//     'Hello World';
// }

// Principle 2

// code example for Implicit Binding

let alejandro = {
  name: "Alejandro",
  age: 24,
  sayName: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

let paulo = {
  name: "Paulo",
  age: 22,
  sayName: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

alejandro.sayName();
paulo.sayName();

// Principle 3

// code example for New Binding

function Animal(type, name, sound) {
  this.name = name;
  this.type = type;
  this.sound = sound;
}

const cat = new Animal("feline", "noname", "meow");
const dog = new Animal("canine", "mila", "bark");
console.log(cat);
console.log(dog);

// Principle 4

// code example for Explicit Binding

function sayHello() {
  console.log(
    `Hello, my name is ${this.name}. I am learning: ${this.languages}`
  );
}

let ale = {
  name: "Alejandro",
  age: "24",
  location: "SF",
  languages: ["HTML", "CSS", "Javascript"]
};

sayHello.call(ale);
