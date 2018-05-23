/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit - context is gotten from what is immediately to the left of the .
* 2. window - if nothing is specified, context goes to the global window
* 3. explicit - call, apply, bind have various ways of explicitly binding context
* 4. New - when using constructor functions, this is bound to the new objects
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this.name); // undefined

// Principle 2
// code example for Implicit Binding
const obj = {
  name: 'Thomas',
  sayName() {
    return this.name;
  },
};
console.log(obj.sayName());

// Principle 3
// code example for New Binding
function PersonMaker(context) {
  this.name = context.name;
  this.age = context.age;
}

const thomas = new PersonMaker({ name: 'thomas', age: 21 });
console.log(thomas.age);

// Principle 4
// code example for Explicit Binding
const whoas = function(num) {
  for (let i = 0; i < num; i++) {
    console.log(`Whoa there ${this.name}!!`);
  }
};

whoas.call(obj, 3);
