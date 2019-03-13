/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1. Window binding in the global scope, "this" refers to the window/console Object. 
* 2. Implicit binding occurs when a function is called with a preceding dot, the object
    before that dot is "this".
* 3. New binding happens when a constructor function is used. The  "this" keyword refers to the specific object being created and returned by the constructor.
* 4. Explicit binding is invoked whenever you use the apply or call methods. The "this" keyword is explicitly defined.
*  
*  
*  
* 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function hello(param) {
//   // 'use strict'; // allows the functionc block scope to prevent the this keyword from leaking out to the window object
//   console.log(this);
//   return `I like say ${param}`
// }
// console.log(hello('hello'))

// Principle 2

// code example for Implicit Binding
// const hobbit = {
//   name: "Samwise",
//   age: 32,
//   food: "taters",
//   cook: function() {
//     return `${this.name} loves to cook ${this.food}`;
//   }
// }
// console.log(hobbit.cook())

// Principle 3

// code example for New Binding
// function Animal(food) {
//   this.food = food;
//   this.eat = function() {
//     console.log(`This animal likes to eat ${this.food}`);
//   }
// }

// const zebra = new Animal('grass');
// const lion = new Animal('meat');

// console.log(zebra)
// console.log(lion)

// zebra.eat()
// lion.eat()


// Principle 4

// code example for Explicit Binding
// const person = {
//   name: "Jack"
// }

// const hobbit = {
//   name: "frodo"
// }

// const skills = ["HTML", "CSS", "JS"];

// function introduce(skills1, skills2, skills3){
//   return `Hello! My name is ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`
// }
// Call will iterate through a list of arguments
// console.log(introduce.call(person, skills));