/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When in global scope, refers to the window object, unless use strict is active.
* 2. Implicit binding - refers to the context in which it was called, AKA what is "before the dot".
* 3. New binding - if called in a constructor function, refers to the object being created.
* 4. Explicit binding - if used with bind/call/apply, refers to designated context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this); // this refers to the window

// Principle 2

// code example for Implicit Binding

const test = {
    func(){
        return this;
    }
}
console.log(test.func()); // this refers to test

// Principle 3

// code example for New Binding

function Person(attributes){
    this.name = attributes.name; // this refers to object being created.
    this.age = attributes.age;
    this.gender = attributes.gender;
}

// Principle 4

// code example for Explicit Binding

const firstThing = {
    one: 'two'
}

function thing(){
    console.log(this);
}

const testing = thing.bind(firstThing); // this refers to 'firstThing'.