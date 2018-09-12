/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - the closure the "this" keyword is in has something to the left of the dot when invoked
* 2. Explicit binding - the use of call, apply, bind to bind the "this" keyword to a certain context
* 3. The new keyword - creates a brand new object with "this" keyword bound to it
* 4. Global binding - default refers to the window when not in a specific closure
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const sayAge = () => {
  console.log(this.age);
};
sayAge(); // undefined

// Principle 2
// code example for Implicit Binding
const me = {
  name: 'Peter',
  age: 26,
  sayName() {
    console.log(this.name)
  }
};
me.sayName(); // 'Peter'

// Principle 3
// code example for New Binding
const Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};
const zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra.color); // 'black and white'

// Principle 4
// code example for Explicit Binding
const sayName = function() {
  console.log(`My name is ${this.name}`);
};
sayName.call(me);
sayName(); // 'My name is Peter'