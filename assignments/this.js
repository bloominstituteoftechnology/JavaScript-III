/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const callMe = function() {
  return this.innerWidth;
};
console.log(callMe());

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: "Hello",
  sayHello(name) {
    console.log(`${this.greeting} my name is ${name}`);
  }
};
const me = "Josh";
myObj.sayHello(me);

// Principle 3

// code example for New Binding

function MyNewObj(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.speak = function() {
    return "My name is " + this.name;
  };
}
const cat = new MyNewObj({ name: "Fluffy", age: 2 });
console.log(cat.name);

// Principle 4

// code example for Explicit Binding

function Child(childAttributes) {
  MyNewObj.call(this, childAttributes);
}
const kitten = new Child({ name: "Floofums", age: 1 });
console.log(kitten.speak());
