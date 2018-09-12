/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Within global scope, value of "this" points to gloabl object
* 2. When a function inside an object is called, "this" points to the object holding the function
* 3. When utilizing constructor functions, "this" can be used to point to new objects instantiated by the constructor function
* 4. "this" can be explicitly defined when using "bind", "call", "apply" methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var color = "h"
function printOut()
{
    let color = this.color;
    console.log( color );
}
printOut();

// Principle 2

// code example for Implicit Binding
let newObject = {
    "name": "Mark",
    "speak": function()
    {
        return `Hello, My name is ${ this.name }`;
    }
}
console.log( newObject.speak() );

// Principle 3

// code example for New Binding
function Car( door, wheels )
{
    this.door = door;
    this.wheels = wheels;
}
let Toyota = new Car( 4, 100 );
console.log( Toyota.door );

// Principle 4

// code example for Explicit Binding
let girlObj = {
    "name": "Toomba"
}
console.log( newObject.speak.call( girlObj ) );