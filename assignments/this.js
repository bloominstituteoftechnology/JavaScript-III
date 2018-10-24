/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - when in global scope the value of "this" will be in the window object.
* 2. implicit - when a function is invoked by a preceding dot, the object before the dot is "this".
* 3. explicit - when a .call or .apply method is used, "this" is explicitly define and override whatever the constructor function object was set to.
* 4. new - "this" refers to the specific instance of an object that was created and returned from the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    this.name = name;
    console.log(this.name);
}
sayName('Lee');

// Principle 2

// code example for Implicit Binding

const flower = {
    species: 'Rose',
    bloom: function() {
        console.log(`${this.species} has bloomed`)
    }
}
flower.bloom();

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter)
    }
}

const leeroy = new CordialPerson('Leeroy');
const tann = new CordialPerson('Tann')

leeroy.speak();

// Principle 4

// code example for Explicit Binding

leeroy.speak.call(tann)