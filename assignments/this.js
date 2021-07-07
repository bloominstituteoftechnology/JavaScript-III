/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - When 'this' does not have any context and therefore binds to the window.
* 2. Implicit - When 'this' is used directly inside of an object and binds directly to the object.
* 3. New - When 'this' is used inside a class constructor, it can bind to any object outside using dot notation as long as it is of the same class.
* 4. Explicit - When 'this' is used it binds to a function. .call and .apply both call the function, .bind returns a new one.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const window = function () {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding

const user = {
    name: 'Mitchell',
    speak: function () {
        return `${this.name} says hello!`
    }
}

// Principle 3

// code example for New Binding

function User (userName) {
    this.userName = userName;
    this.saysHello = function () {
        return `Will ${this.userName} says hello!.`;
    };
}

// Principle 4

// code example for Explicit Binding

const mitch = {
    name: 'Mitchell',
}

const things = ['Pizza', 'Movies', 'Sleep'];
function aboutMe(thing1, thing2, thing3) {
    return `My name is ${this.name} and I like ${thing1}, ${thing2}, and ${thing3}.`;
}

aboutMe.call(mitch, things[0], things[1], things[2]);

aboutMe.apply(mitch, things);

const aboutMitch = aboutMe.bind(mitch);
aboutMitch('pizza', 'Movies', 'Sleep');