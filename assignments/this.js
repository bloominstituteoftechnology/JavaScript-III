/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:
    The window object is the object that by default the keyword 'this' points to if no other binding has
    been assigned
* 2. Implicit Binding:
    Occurs in object methods and the 'this' keyword refers to itself, so to its own methods defined on the
    object itself
* 3.  New Binding
    The this keyword is bound to the new keyword and a constructor. So eveytime that a constructor 
    is instantiated with the new keyword, a this{} object is created inside the constructor
* 4. Explicit Binding
    In this case, the keyword is explicitly defined when using call, apply or bind.
    These functions are used when parent attributes want to be inherit.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const thisObject = {
    name: 'Bella',
    species: 'cat',
    whatIsThis: function() {
        // console.log(`What is it cutie over there? That is ${this.name}. ${this.name} is a ${this.species}`);
        return `Who is that cutie? That is ${this.name}. ${this.name} is a ${this.species}`;
    }
};

console.log(thisObject);
console.log(thisObject.whatIsThis());

// Principle 3

// code example for New Binding

function Cat(attributes){
    this.name = attributes.name;
    this.species = attributes.species;
}

const Bella = new Cat({
    name: 'Bella',
    species: 'cat',
})

console.log(Bella);

// Principle 4

// code example for Explicit Binding

function Animal(attributes){
    this.name = attributes.name;
    this.species = attributes.species
}

function Cat(attributes){
    Animal.call(this, attributes);
}

Cat.prototype.meaw = function (){
        console.log(`${this.name} is a ${this.species} and she meaws`);
}

const bella = new Cat({
    name: 'Bella',
    species: 'cat',
})

console.log('Explicit binding');
console.log(bella);
console.log(bella.meaw());