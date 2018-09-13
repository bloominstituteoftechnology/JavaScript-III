/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: if "this" isn't bound to anything else  when its function is invoked or is defined in the global scope, it will refer to the window in your browser 
* 2. implicit binding: a function is called by a preceding dot, "this" is bound to the object left of the dot
* 3. explicit binding: using methods .call, .apply and .bind "this" is explicitly defined as we override what the specified constructor object is set to
* 4. new binding: "this" is tied to an object that is created by a constructor function using "new"
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function exampleFunc(test) {
  //console.log(this); //commented out so function call doesn't console entire window
  return test;
}
exampleFunc("testing");

// Principle 2
// code example for Implicit Binding
const cat = {
  legs: 4,
  sound: "meow",
  speak: function() {
    console.log(`The cat says ${this.sound}`);
  }
};
cat.speak();

// Principle 3
// code example for New Binding
function Cat(type) {
  this.type = type;
  this.speak = function() {
    console.log(`I am a ${this.type} cat`);
  };
}

const myCat = new Cat("Siamese");
myCat.speak();

// Principle 4
// code example for Explicit Binding
const catInfo = {
  type: "Siamese",
  sound: "meow"
};

const hobbies = ["scratch furniture", "shed", "demand food"];

function beACat(hobby1, hobby2, hobby3) {
  console.log(
    `I am a ${this.type}, and I like to ${hobby1}, ${hobby2}, and ${hobby3}.`
  );
}

beACat.call(catInfo, ...hobbies);
