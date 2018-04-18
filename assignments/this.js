/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Without context/constraints 'this' binds globally to the console
* 2. When calling a function with dot notation, the object before the dot is what 'this' points to.
* 3. When using the 'new' keyword to invoke a function, the child inherits the parent.
* 4. When you use the 'call' or 'apply' method, you are telling 'this' exactly what to point to (what's in the parentheses).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function someFunc(example) {
    console.log(this);
    return example;
}

someFunc("My Example");

// Principle 2

// code example for Implicit Binding

const anObj = {
    sayGoodbye: "Goodbye, ",
    goodbyeFunc: function(name) {
        console.log(`${sayGoodbye} ${name}`);
        console.log(this);
    }
};

anObj.goodbyeFunc('Alex');

// Principle 3

// code example for New Binding

function CordialPerson(person) {
    this.greeting = 'Good day, ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    };
}

const brandon = new CordialPerson('Alex');
const alex = new CordialPerson('Brrandon');

brandon.speak();
alex.speak();

// Principle 4

// code example for Explicit Binding

function CordialPerson(person) {
    this.greeting = 'Good day, ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    };
}

const brandon = new CordialPerson('Alex');
const alex = new CordialPerson('Brrandon');

brandon.speak();
alex.speak();

brandon.speak.call(alex);
alex.speak.call(brandon);
