/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: How to get function
* 2. new: constructor builds objects
* 3. implicit: what is inside of the object
* 4. explicit: applies and binds
*
* write out a code example of each explanation above
*/

// Principle 1


// code example for Window Binding

// this.name ="Sean"

// function sayName(name) {
//   console.log(this.name)
// }

// Principle 2

// const myObj = {
//    name: 'Sean',
//    method1: function() {
//        console.log(`My name is ${this.name}`); 
//    }
//   }
 
// code example for Implicit Binding

// Principle 3


// function CordialPerson(greeter) {
//   this.greeting = 'Hello ';
//   this.greeter = greeter;
//   this.speak = function() {
//     console.log(this.greeting + this.greeter);
//     console.log(this);
//   };
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// newman.speak();
// newman.speak();

// code example for New Binding

// Principle 4


// function CordialPerson(greeter) {
//   this.greeting = 'Hello ';
//   this.greeter = greeter;
//   this.speak = function() {
//     console.log(this.greeting + this.greeter);
//     console.log(this);
//   };
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');
// jerry.speak.call(newman); 
// newman.speak.apply(jerry);

// code example for Explicit Binding