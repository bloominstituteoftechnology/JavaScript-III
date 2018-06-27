/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window
* 2. Implicit
* 3. Explicit
* 4. New
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);

// Principle 2

// code example for Implicit Binding
// const myObj = {
//   greeting: 'Hello',
//   sayHello: function(name) {
//     console.log(`${this.greeting} my name is ${name}`);
//     console.log(this);
//   }
// };
// myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding
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

// Principle 4

// code example for Explicit Binding
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