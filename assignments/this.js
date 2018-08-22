/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*   
* 1. Window Binding

When scope is global 'this' is the object of the window which is the object that is in the browser.

* 2. New Binding

'This' refers to the new object created when using a constructor function.

* 3. Explicit binding

Whenever apply or call is used this means that the object is explicitly defined.

* 4. Implicit binding

Used with dot notation to invoke a function, this refers to the variable in the object its referencing.

*
* write out a code example of each explanation above
*/

// Principle 1

function hiThere(name) {
    console.log(this);
    return `Hi there ${name}`;
}
// Principle 2

function personGreet(greet) {
    this.hello = 'Hello';
    this.greet = greet;
    this.greeting = function() {
        return `${this.hello} ${greet}`;
    }
}

const Alex = new personGreet('Alex');

// Principle 3

function sport() {
    return `Hello, my favorite sport is ${this.sport}`
}

const Alex = {
    sport: 'Hockey'
}
// Principle 4

const personObj = {
    hello: 'Hello my name is',
    favSport: 'Hockey',
    aboutMe: function(name) {
        return `${this.hello} ${name}, I am a huge ${this.favSport} fan`
    }
}
