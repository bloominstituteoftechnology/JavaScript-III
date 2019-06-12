/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If you're in a regular function, or not in a function at all, "this" points to "window". This is the default case.
 * 2. When a function is called as a method of an object, "this" is pointing to the object on the left side of the dot aka following the "left-of-the-dot" rule or "implicit binding".
 * 3. In a function that's being called as a constructor function with the "new" keyword, "this" is pointing to the object that the constructor is creating.
 * 4. You can also explicitly set the value of "this" using bind, apply or call.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding //So you don't use that much
function newFunc() {
    console.log(this); // "this" will be the window Object
  }
  
  console.log(newFunc());
  
  // Principle 2
  
  // code example for Implicit Binding
  const newObject = {
    name: "Mike V",
    greeting: function() {
      console.log(`${this.name} says HELLO!`);
    }
  };
  
  console.log(newObject.greeting());
  
  // Principle 3
  
  // code example for New Binding //This is a constructor 
  //How you know is it always has a capital
  function Person(personName) {
    this.name = personName;
    this.speak = function() {
      console.log(`My name is ${this.name}`);
      console.log(this);
    };
  }
  
  function Dog(personName) {
    this.name = personName;
    this.speak = function() {
      console.log(`My dog is called ${this.name}`);
      console.log(this);
    };
  }

  const mike = new Person("Mike");
  const dav = new Person("Chris");
  const pet = new Dog("Dan");

  mike.speak();
  pet.speak();
  dav.speak();
  
  // Principle 4
  
  // code example for Explicit Binding
  mike.speak.call(pet);