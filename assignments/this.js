/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - This being bound to the window by default.
* 2. Implicit - When the binding is implied being in the same block of code and using dot notation.
* 3  new - Adds a new object to an array. 
* 4. Explicit - Using specific keywords to call the funtion.
*
* write out a code example of each explanation above
*/

// Principle 1

// function screen(){
//    console.log(this);
// }
// screen()

// Principle 2

// const arr = function (){
//    this.name = 'arrName';
//    this.color = 'arrColor';
//  };
 

// Principle 3

// const Arr = function (number, color, name){
// }
//
// const car = new Arr(12, red, honda)

// Principle 4

// const arr = function (){
//    this.call(arrName)
// }