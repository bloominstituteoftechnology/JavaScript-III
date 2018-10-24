/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If you dont have this in an object than its scope is global/window
* 2. this refers to the . (obj) before it
* 3. When used with a constructor it refers to the new object
* 4. explicit - 
*
* write out a code example of each explanation above
*/

// Principle 1

// // code example for Window Binding
// function helloWorld(hi) {
//     console.log(this)
//     return 'hi'
// }
// // Principle 2

// // code example for Implicit Binding

// const helloWorld ={
//     greeting: 'hiya',
//     saySup: function(name) {
//         console.log(`${this.greeting} my name is ${name}`);
//         console.log(this);
//     }
// }

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding