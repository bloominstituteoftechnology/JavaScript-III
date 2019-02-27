/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. // Window / Golbal Binding 
 * 
 * -- refers to over all Golbal enviroment. --
 * 
 * 2. Implicit Binding
 * 
 * -- the object standing before the dot is being refered to. 
 * 
 * 
 * 3. New Binding
 * 
 * -- and empty objected is created and referenced by "this", inheriting the prototype function. 
 * 
 * 
 * 4. Explicit Binding
 * 
 * 
 * --  force a function call to use a particular object for this binding, without putting a property function reference on the object. so we explicitly say to a function what object it should use for this — using functions such as call, apply and bind.--
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
// var myFunction = function() {
//   console.log(this);
// };

// myFunction(); // Window

// // Principle 2

// // code example for Implicit Binding

// //making a object method
// let dog = {
//   name: "spot",
//   numLegs: 4,
//   sayLegs: function() {
//     return "This dog has " + dog.numLegs + " legs.";
//   }
// };
// console.log(dog.sayLegs());

// // Principle 3

// // code example for New Binding

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numlegs = 4;
// }
// let terrier = new Dog("Chuck", "Brown");
// console.log(terrier);

// // Principle 4

// // code example for Explicit Binding
// function greet() {
//   console.log(this.name);
// }

// var person = {
//   name: "Alex"
// };

// greet.apply(person, [args]); // Alex
