/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - when the value of "this" is the window/console object.
* 2. Implicit Binding - whenever a function is called "this." refers to the object.
* 3. New Binding - whenever the contstructor function is used the "new" binding refers to a specific object that is created and returned by the function.
* 4. Explicit Binding - whenever .call or .apply is used "this" can be defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayHi(hello) {
    console.log(this);
    return hello;
}

sayHi("Hi");

// Principle 2

const myObj = {
    christmas: "Merry Christmas",
    sayMerry: function(name) {
        console.log(`${this.christmas}, ${name}`);
        console.log(this);
    }
};

myObj.sayMerry('Pat');

// Principle 3

function harryPotter(name) {
    this.greeting = 'Hello';
    this.name = name;
    this.greet = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
}

const harry = new harryPotter('Harry');
const hermione = new harryPotter('Hermione');

harry.greet();
hermione.greet();

// Principle 4

const ron = {
    name: 'Ron',
};

const goodDay = 'have a good day!';

function newCharacter() {
    console.log(`${this.name}, ${goodDay}`)
}

newCharacter.call(ron, goodDay);