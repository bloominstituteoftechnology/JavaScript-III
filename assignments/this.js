/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. This is the global/window object, if there are no other objects the this keyword alwayss refers to the window. all objects and properties cascade down in inheritance from the global window object.
 * 2. Most common rule. Implicit meaning implied or automatic object creations. we tell the this keyword to look at the object it is /* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. This is the global/window object, if there are no other objects the this keyword alwayss refers to the window. all objects and properties cascade down in inheritance from the global window object.
 
 * 2. Most common rule. Implicit meaning implied or automatic object creations. we tell the this keyword to look at the object it is in, instead of the window object that everything is in. module(here the object name will be what this refers to.)
 
 * 3. 
 * 
 
 * 4. Explicit allows us to use the call or apply method to direct the this keyword to the specific object that we are refering to with out function call. this is needed because functions dont by themselves have the abiity to affect the application and binding of the this keyword nor replace the window bindings.
 *
 * write out a code example of each explanation above
 */

// Principle 1 This is the global / window object, if there are no other objects the this keyword alwayss refers to the window.all objects and properties cascade down in inheritance from the global window object.

// code example for Window Binding

// Principle 2 Most common rule.Implicit meaning implied or automatic object creations.we tell the this keyword to look at the object it is in, instead of the window object that everything is in.module(here the object name will be what this refers to.)

// code example for Implicit Binding
var meme = {
    name: "sam",
    age: 30,
    sayName: function() {
        console.log(this.name);
    }


};
meme.sayName();

// Principle 3 the new keyword actually creates a new object from scratch. its part of the constructor function and will apply the this keyword to the object that is currently being created at that point in time.

// code example for New Binding
function nicePerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const teacher = new nicePerson('student');
const student = new nicePerson('teacher');

student.speak();
student.speak();


// Principle 4 Explicit allows us to use the call or apply method to direct the this keyword to the specific object that we are refering to with out function call. this is needed because functions dont by themselves have the abiity to affect the application and binding of the this keyword nor replace the window bindings.

// code example for Explicit Binding
const human = {
    name: 'BamBam',
};

const toys = ['small rocks', 'medium rocks', 'l rocks', 'bat rocks'];

function hello(toys1, toys2, toys3) {
    console.log(
        `Hello, My name is ${this.name} and these are my toys: ${toys}, ${toys}, ${toys}.`
    );
}

hello.apply(human, toys);