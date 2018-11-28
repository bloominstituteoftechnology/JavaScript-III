/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Defaults to the window/console. 
* 2. Implicit Binding - Also referred to as Object Binding. Whatever object is before the . (thisObject.example) will be the object that this binds to.
* 3. New Binding - When using constuctor functions to make new objects based on existing ones, this will refer to the object where the variables were defined.
* 4. Explicit Binding - 
*
* write out a code example of each explanation above
*/

// Principle 1

function example() {
    return this;
}

// Principle 2

"use strict";
function example2(stuff) {
    this.method = stuff;
}

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding