/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. global object binding which means you can bnding the This keyword to the window object
 * 2. implicit binding which is implying the left of the dot is the this reference
 * 3. new binding which means the this keyword is referenced based on when the construction function is invoked.
 * 4. explicit binding which is whenever this is explicitly defined when using .call and .apply
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function winBinding() {
  console.log(this);
}
winBinding();
// Principle 2

// code example for Implicit Binding
const obj = {
  id: 1,
  firstName: "Hamza",
  lastName: "Elkhoudiri",
  fullName: function() {
    console.log(this.firstName, this.lastName);
  }
};

obj.fullName();
// Principle 3

// code example for New Binding
function Pets(attrs) {
  this.name = attrs.name;
  this.kind = attrs.kind;
  this.food = attrs.food;
  this.speak = function() {
    if (this.kind === "dog") {
      return "I am a DOG";
    } else if (this.kind === "cat") {
      return "I am a CAT";
    }
  };
}

const dog = new Pets({
  name: "shadow",
  kind: "dog",
  food: "dog food"
});
const cat = new Pets({
  name: "kitty",
  kind: "cat",
  food: "cat food"
});
console.log(dog.name);
console.log(cat.name);
// Principle 4

// code example for Explicit Binding
console.log(dog.speak.call(cat));
console.log(dog.speak());
console.log(cat.speak.call(dog));
console.log(cat.speak());
