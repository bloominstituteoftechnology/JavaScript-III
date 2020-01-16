/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - refers to the left of the dot at the call time
* 2. explicit - overriding what an object is currently set to by calling them with .call and .apply
* 3. new binding - when you use the constructor function to create a new object
* 4. window binding - the whole window or forrest in the lecture
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greeting() {
    console.log(this);
}

greeting();

// Principle 2

// code example for Implicit Binding

const hobbit = {
    name: 'Peregrin Took',
    place: 'The Prancing Pony',
    drink: function() {
        console.log(`${this.name} likes to drink pints of ale at the ${this.place}`);
    }
}

hobbit.drink();

// Principle 3

// code example for New Binding

function FriendsMatrix(greeter){
    this.greeter = greeter;
    this.greeting = 'Hi';
    this.speak = function() {
        console.log(`${this.greeting}, ${this.greeter}`)
    }
}

const rachel = new FriendsMatrix('Monica');
const monica = new FriendsMatrix('Rachel');

rachel.speak();
monica.speak();
// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Sheila'
}

const hobbies = ['cook', 'read', 'sew'];

function introduce(hobbies1, hobbies2, hobbies3) {
    "use strict";
    console.log(`Hello! My name is ${this.name}, and I like to ${hobbies1}, ${hobbies2}, and ${hobbies3}. `);
}

introduce.apply(person, hobbies);