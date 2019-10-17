/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - works in global scope, "this" refers to window or console object.
 
 * 2. Implicit -  only communicates inside of the function/object that it lives in. 
 * "this" points to what comes to the left of the dot.
 
 * 3. New - works with constructor functions, constructors always have a capital letter. 
 "this" refers to the new object created.

 * 4. Explicit - "this" is defined when the call or apply method is used.
 *
 * write out a code example of each explanation above
 */


 // Principle 1

// code example for Window Binding

    console.log(this); //"this" refers to the global scope


// Principle 2

// code example for Implicit Binding
const jessNOV = {
    name: 'Jess',
    color: 'orange',
    food: 'Thanksgiving dinner',
    favoriteColor: function() {
     console.log(`${this.name}'s favorite color is ${this.color}.`)
    }
   }
   
   jessNOV.favoriteColor(); //"this" refers to name and color (left of the dots)

// Principle 3

// code example for New Binding
function Person(name, color) {
    this.name = name;
    this.color = color;
   }
   
   const jane = new Person('jane doe', 'yellow');
   
   console.log(jane); //"this" refers to Person

// Principle 4

// code example for Explicit Binding
let favoriteFood = function() {
    console.log(`${this.name}'s favorite food is ${this.food}.`)
   }
   
   favoriteFood.call(jessNOV); //"this" refers to jessNOV