/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - this referes to what is left of the '.' when the fuction is called.
* 2. Explicit Binding - you state what the this keyword will be in the function
* 3. New Binding - when a function is call an function with the key work new in front it creats a new opject.
* 4. Window Binding - the this keyword refers to the window object
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

const roll = function(person){
 person.rollCall = function(){
     console.log(this.name)
 }
}
var aasa ={
    name: 'Aasa',
}
roll(aasa);
aasa.rollCall()
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding