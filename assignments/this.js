/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// When in the global scope, the value of “this” will be the window/console Object;

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}

sayName("D'Artagnan");



// Principle 2

// Whenever a function is called by a preceding dot, the object before that dot is this.
// code example for implicit Binding

const sayNameFunc = obj => {
    obj.sayName = function() {
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    };
};


// This principle is one of the most commonly used applications of the this keyword. Here is another example for use to play with.

const me = { name: 'Ryan'};
const you = {name: 'Freddy'};
sayNameFunc(me);
sayNameFunc(you);




// Principle 3


// Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

// This Principle is a doozy. Because we have to learn about constructor functions here. Don’t worry if a lot of this stuff goes over your head, be a sponge right now. Absorb as much of this as you can and we cover constructors in depth tomorrow. SO be at ease :)

// Simply put: A constructor function is a function that returns an object. It’s an object creator. We use them a lot in JavaScript and they lend themselves to a paradigm called: ‘Object Oriented Programming’. CordialPerson will be a function that creates an object for us. When we call it we have to use the new keyword.

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        // console.log(`${this.greeting} ${this.greeter}`);
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();




// Principle 4


// Whenever JavaScript’s call or apply method is used, this is explicitly defined.

// Taking the above object oriented approach we can discover that we can override what the CordialPerson constructor objects get set to. By calling them explicitly with a new context using .call and .apply



function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        // console.log(`${this.greeting} ${this.greeter}`);
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// code example for Explicit Binding


jerry.speak.call(newman);
newman.speak.apply(jerry);