/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. When "This" is on the global scope, the value of the function will be the window object. *Unless using 'Strict' mode.
 * 2. "This" is the object being called in a function whenever it's preceded by a dot.
 * 3. In a constructor "This" refers to the specific instance of the object that is created and returned by the constructor function.
 * 4. If 'call or apply' method is used, this is explicitly defined.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
"use strict";

function strictExample() {
    console.log(this.example);
}
strictExample();
const example = "x";

strictExample();

// Principle 2
// code example for Implicit Binding

// let game = {
//   name: "NinjaAssassin",
//   players: 4,
//   gamerTag: function() {
//     console.log(this.name);
//   }
// };

// game.gamerTag();

// Principle 3
// code example for New Binding

// function Food(favorite) {
//   this.cusine = favorite;
// }

// let myFavouriteFood = new Food("Tacos");

// console.log(`My favourite food is ${myFavouriteFood.cusine}`);

// Principle 4
// code example for Explicit Binding

// function book() {
//   console.log(this.name);
// }

// let myBook = {
//   name: "Harry Potter",
//   page: 35
// };

// book.call(myBook);
