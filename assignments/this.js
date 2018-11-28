/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - in global scope "this"would be entire window/console - 

* 2. Implicit Binding - "this" is defined at function invocation time by the object
to the left of the dot.

* 3. New binding - Tells what "this" is by invoking (or constructing) a "new" keyword function/object
*
* 4. Explicit Binding - uses call, apply or bind to tell function what the context
 of "this" will be. 
* write out a code example of each explanation above
*/

// Principle 1
    function sayHello(){
        "use strict"
        console.log (`Hello ${this.name}`)
    }

    const person = {
        name: "Danny",
        age: 9
    }
  //  sayHello();

// code example for Window Binding

// Principle 2

const person1 = {
    name: "Danny",
    age: 9,
    greeting: function() {
        console.log(`Hello there ${this.name}!`);
    }
}
person1.greeting()

// code example for Implicit Binding

// Principle 3

// code example for New Binding

function People(name, age) {
    this.name = name,
    this.age = age
}

const kid = new People('Ryan', 15);

// Principle 4

// code example for Explicit Binding
function sayHi(){
    
    console.log (`Hi There ${this.name}`)
}

const kid4 = {
    name: "Danny",
    age: 9
}
 sayHi.call(kid4);