/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is used in global scope, it will default to the window object. This behavior is usually not desired.
* 2. When a function is called using dot notation, the object before the dot is the object that "this" will bind to. 
* 3. When one makes a new object and assigns it to a variable, when the method of the variable is called, the "this" will bind to the instance of the object that the variable holds.
* 4. When one uses the apply or call methods on an object, the "this" keyword will be forcibly bound to the value passed into the apply or call methods instead.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const monster = {
    scream: 'RAHHHHGGHH',
    eat: function(human) {
        console.log(`${this.scream} munch munch munch. The monster eats ${human}.`);
        console.log(this);
    }
};
monster.eat('Jeremy');
// The function eat now has its "this" refer to the object in the variable monster.

// Principle 3

// code example for New Binding
function Monster(human) {
    this.scream = 'RAHHHHGGHH';
    this.human = human;
    this.eat = function() {
        console.log(`${this.scream} munch munch munch. The monster eats ${this.human}.`);
        console.log(this);
    }
}

const blargle = new Monster('Timmy');

blargle.eat();
// this is binding now to the instance of the Monster blargle.

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Johnny',
}

const weapons = ['claws','fangs','spiked tail']

function monsterDescription(array) {
    console.log(`This monster destroys ${this.name} using its ${array}.`);
}

monsterDescription.apply(person, weapons);

//the this keyword is now pointing at the variable person because of the usage of apply.
