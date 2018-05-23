/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. To reference the window object when in a global scope
* 2. To call a method on a specific object or with a specific objects properties
* 3. In new binding this refers to an instance of an object (or it's properties) created from a constructor class
* 4. Explicit binding, "this" changes the context of a constructor object to an instance of that object when the methods .call and .apply are used
*
* write out a code example of each explanation above
*/

// Principle 1

// // code example for Window Binding
// // function exampleFunction(name) {
// //   console.log(name);
// //   console.log(this.name);
// //   console.log(this);
// //   return this.name;
// // }
//
// exampleFunction("Alec"); //Logs name imput, undefined, then window object
// Principle 2

// code example for Implicit Binding
// const myObj = {
//   "location": "Stockholm",
//   logLocation: function() {
//     console.log("Location is", this.location);
//     return this.location;
//   }
// }
//
// myObj.logLocation();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
