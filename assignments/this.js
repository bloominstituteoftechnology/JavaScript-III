/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding reaches to the very top of the object chain (i.e. the screen); this is on a global scale, so we have 
to be careful when using it in this way. tl;dr: It is the console/window.

* 2. Implicit binding refers to the object directly to the left that is being called. tl;dr: The preceding object is 'this'.

* 3. New binding allows outside functions to be connected and called based on other functions as long as the connection is
appropriately maintained. tl;dr: 'This' is contained within its constructor.

* 4. Explicit binding has to be strictly defined by the developer; this allows for more flexibility in prototyping between 
constructors (esp. in parent/child structures.)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

name = "Geraldine";

function sayName(name) {
    console.log(this.name);
    return name;
}
sayName("Geraldine");


// Principle 2

// code example for Implicit Binding

const newObj = {
    salutation: `'sup, `,
    greetPerson: function(name) {
        console.log(`${this.salutation} my name is ${name}.`);
        console.log(this);
    }
};
newObj.greetPerson('Chris');
// Principle 3

// code example for New Binding

function WorkplaceGreeter(person) {
    this.greeting = "Hello there ";
    this.person = person;
    this.greet = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    };
}
const ron = new WorkplaceGreeter('Leslie');
const leslie = new WorkplaceGreeter('Ron');

ron.greet();
leslie.greet();
// Principle 4

// code example for Explicit Binding

let introduction = (language, code, food) => {
    console.log(`My name is ${myName.name}, and I can speak ${language}, program in ${code}, and I like ${food}.`);
}

let myName = {
    name: "Chris",
    age: 25,
    introduction: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

let likes = ['Korean', 'Javascript', 'teriyaki chicken'];

introduction.apply(myName, likes);