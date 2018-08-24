/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit Binding : Any time the dot notation is used "THIS" will refer to the object to the left of the dot.
 * 2.  Explicit Binding: Any time Call() or Apply() methods are used it will bind THIS to that object
 * 3.  New Binding: A constructor must be created and the "NEW" keyword must be used to create a new instance of the constructor. 
 * 4.  Window Binding : Any time THIS keyword is used in the Global/Window Scope THIS will refer to Global/Window.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this); //since this is in the global scope it will return Window object. 

// Principle 2

// code example for Implicit Binding
const implicit = {
  explanation: "implicit example",
  whoDis: function (name) {
         console.log(` ${'this is'} ${name} ${this.explanation}`);
  },
};
implicit.whoDis('Javier\'s');

// Principle 3

// code example for New Binding
function ToyBin(toy) {
    this.favoriteStatment = 'is my favorite toy',
    this.favorite = toy,
    this.favoriteToy = function (favToy) {
      console.log(`${this.favorite} ${this.favoriteStatment}`);
    }
};

const voltron = new ToyBin('Voltron');

voltron.favoriteToy('Voltron');


// Principle 4

// code example for Explicit Binding
implicit.call(this, )