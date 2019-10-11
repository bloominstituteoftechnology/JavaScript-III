/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - the value of "this" is the window or console.
* 2. Implicit Binding - "this" refers to the object that the method is acting on
* 3. New Binding - "this" refers to the new object created by the constructor function
* 4. Explicit Binding - whenever call or apply is used "this" is explicitly bound
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function logHello(phrase)  {
    console.log(this);
    return phrase;
};
logHello('Hello');

// Principle 2

// code example for Implicit Binding

let myObj = {
    age: 27,
    stateAge: function(name) {
        console.log(`${name} is ${this.age}`);
        console.log(this);
    }
};

myObj.stateAge("Jack");

// Principle 3

// code example for New Binding

function stateAge(person) {
    this.age = 27,
    this.person = person,
    this.state = function () {
        return `${this.person} is ${this.age}`;
        console.log (this);
    };
}

const jack = new stateAge('Jack');
jack.state();

// Principle 4

// code example for Explicit Binding

function stateAge(person) {
    this.age = 27,
    this.person = person,
    this.state = function () {
        return `${this.person} is ${this.age}`;
        console.log (this);
    };
}

const jim = new stateAge('Jack');
const jill = new stateAge('Jill');
jim.state.call(jill);