/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. default binding: binds 'this' to the global context. in the browser it would be the window object
* 2. implicit binding: attaches this to a parent object. Depends on the callsite of the invocation of the function. Simply put, the object on the left of the '.' of the method is what this points to.
* 3. explicit binding: we use bind, call, or apply to forcefull attach the context of this.
* 4. The new keyword: when using the new keyword. The context of this will be given to the new instance created with the new keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
var dog = {
  name: "loopi",
  bark: function () {
    console.log(this);
    return this.name + " says woof!";
  }
};

console.log(dog.bark());

// Principle 3

// code example for New Binding
function Animal(options) {
  this.species = options.species;
  this.legs = options.legs;
}
Animal.prototype.legNumber = function () {
  return this.species + " has this many legs: " + this.legs;
};

const bear = new Animal({
  legs: 4,
  species: 'bear',
});
// this is given to the new instance of
console.log(bear.legNumber());


// Principle 4

// code example for Explicit Binding
const sound = {
  word: function () {
    return this.name + " says " + this.word + "!";
  }
};

const juanito = {
  name: "Juanito",
  word: "hola"
};

const calamarious = {
  name: "Calamarious",
  word: "arrr"
};
// call invokes function! juanitos this
// console.log(sound.word.call(juanito));
console.log(sound.word.call(juanito));

console.log(sound.word.call(calamarious)); 