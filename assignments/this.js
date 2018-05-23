/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - "this" refers to the window
* 2. Implicit binding - "this" refers to variable within the same object.
* 3. New binding - using "this" in a new constructor
* 4. Explicit binding - ability to use "this" outside of the object declaration.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayGreeting(name) {
    var greeting = "hello";
    console.log(greeting + this.name);
    return name;
}
sayGreeting('Erin');


// Principle 2
// code example for Implicit Binding
const Cocoa = {
    'name': "Cocoa",
    'log': function() {
        console.log(this.name + ' is a cat.');
    }
}
Cocoa.log();

// Principle 3
// code example for New Binding
function Cat(name) {
    this.name = name;
}

const oatmeal = new Cat('Oatmeal');
cat(oatmeal);

// Principle 4
// code example for Explicit Binding

let myName = {
    name: 'Erin',
};
function sayGreeting() {
    var greeting = "hello, my name is " + this.name;
    console.log(greeting);
    return name;
}
sayGreeting.call(myName);