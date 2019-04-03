/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- How its always happening 
* 2. Implicit Binding - look to the left of the invocation and then you will find your this keyword - directly point it at an object
* 3. New Binding 
* 4. Explicit Binding - we control this 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting() {
    "use strict";
    console.log(this);
}

greeting();

// Principle 2

// code example for Implicit Binding

const starWars = {
    name: 'Shayaan',
    food: 'Wookies',
    cook: function() {
        console.log(`${this.name} cooks some ${this.food}`);
    }
}
// starWars is "this" for the cook method 
starWars.cook();

// Principle 3

// code example for New Binding

const user = {
    firstName : "Shayaan"
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // Shayaan


// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Bob'
}

const skills = ['HTML', 'CSS', 'JS'];

function introduce(skills) {
    "use strict";
    console.log(`Hello! My name is ${this.name} . and I like to program in HTML, CSS, JS`);
}

introduce.apply(person, skills);