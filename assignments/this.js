/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - works in global scope
 * 2. Implicit -  only communicates inside of the function/object that it lives in
 * 3. New - works with constructor functions, constructors always have a capital letter
 * 4. Explicit - 'this' is defined when the call or apply method is used
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function myFunc(prop) {
    console.log(this);
    return prop;
  }
  myFunc("This is a window binding");

// Principle 2

// code example for Implicit Binding
const jessIMP = {
    name: 'Jess',
    color: 'orange',
    food: 'thanksgiving dinner',
    favoriteColor: function() {
     console.log(`${this.name}'s favorite color is ${this.color}.`)
    }
   }
   
   jessIMP.favoriteColor();

// Principle 3

// code example for New Binding
function Person(name, color) {
    this.name = name;
    this.color = color;
   }
   
   const bobby = new Person('bob', 'yellow');
   
   console.log(bobby);

// Principle 4

// code example for Explicit Binding
let favoriteFood = function() {
    console.log(`${this.name}'s favorite food is ${this.food}.`)
   }
   
   favoriteFood.call(jessIMP);