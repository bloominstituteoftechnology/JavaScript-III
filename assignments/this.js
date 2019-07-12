/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
* 2. implicit binding
* 3. explicit binding
* 4. new binding (see below examples)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
 'use strict'
 function hello(word) {
   "use strict";
   console.log(this, 'this');
   return(`${word} world!`);
 }
 console.log(hello('hello'));

 // Principle 2

// code example for Implicit Binding

// When you use dot syntax, whatever's to the left is "this"
 const monster = {
   name: "Darth",
   age: 9000,
   food: "humans",
   cook: function() {
  return `${this.name} loves to cook ${this.food}`;
   }
}
console.log(monster);

// Principle 3

// code example for New Binding

const things = {
   food: "lentils",
   name: "Guido"
};

function Person(things) {
   this.food = things.food;
   this.name = things.name;
   this.eat = function() {
     return `This dude eats ${this.food}.`;
   }
 };

const vegan = new Person(things);
const carnivore = new Person({
  food: "pizza",
  name: "Guido"
});
console.log(vegan.eat());
console.log(carnivore.eat());

// Principle 4

// code example for Explicit Binding

// CALL
function Product(name, price) {
   this.name = name;
   this.price = price;
 };

 function Food(name, price) {
   Product.call(this, name, price);
   this.category = 'food';
   console.log(`${this.name} for ${this.price}`);
 };

 console.log(new Food('pizza', 5).name);
 console.log(new Food('veggies', .25).price);
 //expected output: ""