/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when the "this" keyword references the window object.
* 2. Implicit Binding: Look to the LEFT of the DOT.
* 3. New Binding: New keyword creates a new empty object and this keyword now applies to that new object.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.age = 30;
function sayAge () {
    console.log("My age is ${this.age}");
}
// Principle 2

// code example for Implicit Binding
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    },
    mother: {
      name: 'Stacey',
      greet() {
        alert(`Hello, my name is ${this.name}`)
      }
    }
  }

  user.greet();
  user.mother.greet();
// Principle 3

// code example for New Binding
function GameObject(attributes) {
    this.weapon = attributes.weapon;
    this.name = attributes.name;
}

const skeleton = new GameObject();

// Principle 4

// code example for Explicit Binding
function greet () {
  alert(`Hello, my name is ${this.name}`)
}
// const user is above in previous example

greet.call(user);