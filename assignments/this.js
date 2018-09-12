/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - look to the left of the dot at call time.
* 2. Explicit Binding - Telling the function what the context of the this keyword is going to be using call, bind, or apply.
* 3. new Binding - Whenever you have a function invoked with the new keyword the this keyword is bound to the new object being constructed.
* 4. Window Binding - If none of these rules apply then the this keyword is going to default to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Binding
const ball = {
  color: "white",
  throw: function() {
    console.log(`pick up and throw the ${this.color} ball to me`);
  }
};
ball.throw();
// Principle 2

// code example for Implicit Binding
let johnny = {
  name: "john",
  age: 24,
  speak: function() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
};

let joseph = {
  name: "joe",
  age: 25,
  speak: function() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
};
joseph.speak();
johnny.speak();
// Principle 3

// code example for New Bindings
function Person(attr) {
  this.name = attr.name;
  this.age = attr.age;
  this.home = attr.home;
}
let Johnny = new Person({
  name: "Johnny",
  age: 21,
  home: "Alaska"
});

// Principle 4

// code example for Explicit Binding
let dog = {
  name: "lucky",
  bark: "woof",
  speak: function() {
    console.log(`My name is ${this.name} and I ${this.bark}`);
  }
};

let otherFunc = dog.speak;
let boundFunc = otherFunc.bind(dog);
boundFunc();
