/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - `this` keyword defaults to window object.
* 2. Implicit Binding - When called, an invoked function looks at left of dot and "this" will refernce it.
* 3. New Binding - Uses the 'new' keyword to bind 'this' to new object.
* 4. Explicit Binding - Call a function in the global scope.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let sayAge = function() {
    console.log(this.age);
};

let me1 = {
    age: 24
};
// sayAge(); will return undefined because it does not have anything to the left of it.
window.age = 25;
sayAge(); // now shows 25 because the default window age is 25.

// Principle 2

// code example for Implicit Binding

let sayNameMixin = function(obj){
    obj.sayName = function() {
        console.log(this.name);
    };
};

let me2 = {
    name: 'Arthur',
    age: 24
};

let meTwo = {
    name: 'Frank',
    age: 23
};

sayNameMixin(me2);
sayNameMixin(meTwo);

me2.sayName();
meTwo.sayName(); 

// Principle 3

// code example for New Binding
function meetingPeople(greetings) {
    this.greeting  "Hello";
    this.greeter = greetings;
    this.speak = function() {
        return (this.greeting + " " + this.greeter)
    }
};

const arthur = new meetingPeople('Arthur');
const frank = new meetingPeople('Frank');

arthur.speak(); //? 
frank.speak(); //?

// Principle 4

// code example for Explicit Binding
let me4 = {
    name: 'Arthur',
    age: 24
};

let myName = function(hobby1, hobby2, hobby3) {
    console.log('My name is:' + " " + this.me4 + " " + "I like to play games such as: " + hobby1 + ", " + hobby2 + ", " + hobby3 ) 
};

let hobbies = ["League", "WoW", "Witcher 3"];
