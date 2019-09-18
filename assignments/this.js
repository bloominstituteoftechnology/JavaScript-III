/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding (When this is referencing to the window object or global object in node.js)
* 2. Implicit Binding (When you refence an object by calling the object then using dot notation, the this is referencing that object)
* 3. New binding (When you create a constructor and then make a new object using the new keyword, the this inside the constructor function will reference that new object)
* 4. Explisit binding (When you use .call or that .apply and pass in an object, the this will refer to that object you call)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const pet = {
    name: "Cloe",
    fullName: function(){
     return `${this.name} Jefferson`;
    }
};
console.log(pet.fullName());
// Principle 3

// code example for New Binding
let Pets = function(name,age){
    this.name = name;
    this.age = age;
};
let dog = new Pets("Cloe", 22);
console.log(dog.name)
// Principle 4

// code example for Explicit Binding
function sayName(){
    return `Hello my name is ${this.name}`;
};
console.log(sayName.call(dog));