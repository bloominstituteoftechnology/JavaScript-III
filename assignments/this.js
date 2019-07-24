/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - This is when the 'this' keyword is used without context.
* 2. Implicit Binding - This is when the 'this' keyword is used with is referencing a variable from a function or object.
* 3. New Binding - This is when the 'this' keyword is used in a constructor, and will represent any object that is created by the constructor.
* 4. Explicit Binding - This is when you are referencing a function from an object, and you use a call(), bind(), or apply() function, to change what 'this' is referencing.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding() {
    return this;
}

console.log(windowBinding());

// Principle 2

// code example for Implicit Binding

const animal =  {
    species: "dog",
    about: function(name) {
        console.log(`${this.name} is a ${this.species}`);
    }
};

animal.about("Tucker");

// Principle 3

// code example for New Binding

function Person(attributes) {
    this.type = attributes.species,
    this.firstName = attributes.name
    this.speak = function() {
        console.log(`${this.firstName} is a ${this.type}.`);
    };
};

const tyler = new Person({
    species: "human",
    name: "Tyler"
});

tyler.speak();

// Principle 4

// code example for Explicit Binding

function People(attributes) {
    this.firstName = attributes.name
    this.sayHello = function() {
        console.log(`Hello, I am ${this.firstName}!`);
    };
};

const rob = new People({
    name: "Rob"
});

const alex = new People({
    name: "Alex"
});

rob.sayHello.call(alex);
alex.sayHello.apply(rob);

const lisa = {
    name: "Lisa"
};

function sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
}
let helloLisa = sayHi.bind(lisa);
helloLisa();