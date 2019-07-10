/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'This' Window/Global Window Object Binding
* 2. Implicit Binding of 'This' through a function
* 3. New Binding of 'This' through use of a constructor function
* 4. Explicit binding, defining 'This' using .call() or .apply() 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`); //Hello my name...
        console.log(this); // myObj
    }
};
// myObj.sayHello('Rob A.');

// Principle 3

// code example for New Binding

function Greeting(person) {
    this.greeting = 'Hi my name is ';
    this.person = person;
    this.greet = function () {
        console.log(this.greeting + this.person);
    };
}

const Rob = new Greeting('Rob');
const Aislynn = new Greeting('Aislynn');

Rob.greet(); // 'Hi my name is Rob'
Aislynn.greet(); // 'Hi my name is Aislynn'


// Principle 4

// code example for Explicit Binding
function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const fred = new Person({
    age: 35,
    name: 'Fred',
    homeTown: 'Bedrock'
});

const barney = new Person({
    age: 35,
    name: 'Barney',
    homeTown: 'FlatRock'
});

barney.speak().call(fred);

// console.log(fred); .speak();