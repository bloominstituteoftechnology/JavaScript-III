/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const favoriteColor = function() {
    console.log(this.color);
   }
   
favoriteColor();
// Principle 2

// code example for Implicit Binding
const wesM = {
    name: 'Wes',
    color: 'Green',
    food: 'Cheeseburger',
    favoriteColor: function() {
     console.log(`${this.name}'s favorite color is ${this.color}.`)
    }
}
wesM.favoriteColor();
// Principle 3

// code example for New Binding
function Person(name, color) {
    this.name = name;
    this.color = color;
   }
   
   const James = new Person('James', 'orange');
   
   console.log(James);


// Principle 4

// code example for Explicit Binding
let favoriteFood = function() {
    console.log(`${this.name}'s favorite food is ${this.food}.`)
   }
   
favoriteFood.call(wesM);