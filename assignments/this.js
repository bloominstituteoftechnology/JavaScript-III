/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window binding. These are *ultra* global and apply to absolutely everything. They will be applied unless you say differently or they are not explicitly determined already.
* 2. The implicit binding. These bind to objects.
* 3. The explicit binding. These bind to functions.
* 4. The new binding. These create objects from constructors.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this.anything);


// Principle 2
// code example for Implicit Binding
const hair = {
    'color': 'red',
    'texture': 'thick',
    'length': 'short',
    'howLong': function(length) {
        console.log(`My hair is ${this.length}.`)
    }
}
hair.howLong();


// Principle 3
// code example for New Binding
function Dog(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.species = 'dog';
    this.bark = function (){
        console.log(`${name}, the ${color} ${breed} ${this.species}, barks!`)}
}
const sparky = new Dog('Sparky','poodle', 'white');
const doug = new Dog('Doug','Wiener', 'brown');

sparky.bark();
console.log(sparky.breed);

// Principle 4

// code example for Explicit Binding

function Cat(name, breed, color) {
    Dog.call(this, name, breed, color);
    this.species = 'cat';
    this.meow = function (){
        console.log(`${name}, the ${color} ${breed} ${this.species}, meows!`)
    }
}
const lulu = new Cat('Lulu', 'Domestic short-hair', "brown");
lulu.meow();