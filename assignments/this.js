/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - When a function or method is called within the global scope this points to the window object, or the mother of all objects. aka The forest aka Gaia
* 2. Implicit - Here this' context is the object to the left of the dot. 
* 3. Explicit - We can bind functions (or constructors) to other contexts by "explicitly" passing objects into .apply, call or a bind method for later use.
* 4. New - Here this refers to the object being constructor by class syntax. When creating a number of similiar objects this will refer to each individually instead of the class itself.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const goodBoy = {
  name: 'Good boy',
  breed: 'Lab',
  bark: function() {
    console.log(this.name, 'barks');
  }
}

goodBoy.bark();

// Principle 3

// code example for New Binding

function Dog(attributes) {
  this.name = attributes.name,
  this.breed = attributes.breed
}

Dog.prototype.sit = function() {
  console.log(this.name, `sits, just like any good ${this.breed}`);
} 

const ralphi = new Dog({
  name: 'Ralphi',
  breed: 'Dalmation'
})

ralphi.sit();

// Principle 4

// code example for Explicit Binding

function slobber() {
  console.log(`${this.name} slobbers`);
}

slobber.call(goodBoy);