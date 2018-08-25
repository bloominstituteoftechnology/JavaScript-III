/* The four principles of "this"

   In your own words, explain the four principle for the "this" keyword below.

   1. Window Binding:

   When there is no other binding (i.e., when in the global scope), the
   default binding for 'this' is the window (or console if running Node)

   2. Implicit Binding:

   When calling a method belonging to an object using dot notation,
   'this' is implicitly bound to the object to the left of the dot.

   3. New Binding:

   When the 'new' keyword is used to instantiate a class with a constructor,
   memory is allocated for the object being created and 'this' is bound to
   the new object.

   4. Explicit Binding:

   When a function is invoked by using the call, apply, or bind methods, a
   context is passed as a parameter and 'this' is bound to that context.
   

   Write out a code example of each explanation above.
*/

// Principle 1
// code example for Window Binding

console.log('\nWindow Binding:\n');

function getGlobalThis() {
  return this;
}

console.log(getGlobalThis());


// Principle 2
// code example for Implicit Binding

console.log('\nImplicit Binding:\n');

const joe = {
  name: 'Joe',
  speak: function() {
    return `My name is ${this.name}`;
  }
};

console.log(joe.speak());


// Principle 3
// code example for New Binding

console.log('\nNew Binding:\n');

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.firstName} ${this.lastName}`;
};

const inigo = new Person('Inigo', 'Montoya');
console.log(inigo.speak());


// Principle 4
// code example for Explicit Binding

console.log('\nExplicit Binding:\n');

function whatAmI(param1, param2) {
    return `I am an object with attributes: ${param1}: ${this[param1]}, ${param2}: ${this[param2]}`;
}


const ball = {
    color: 'red',
    type: 'beach',
    size: 'large'
};


console.log(whatAmI.call(ball, 'color', 'size'));
console.log(whatAmI.apply(ball, ['color', 'type']));

const iAm = whatAmI.bind(ball);
console.log(iAm('type', 'size'));

