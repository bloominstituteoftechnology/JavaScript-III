/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: The value of "this" will be in the window/ console Object. 

* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is "this". 

* 3. New Binding: When using a constructor function (is a function that returns an object, it's an object creater. OOP) "this" refers to the specific instance of the object that is created and returned by the constructor function.

* 4. Explicit Binding: Whenever JavaScript's call or apply method is used, "this" is explicted defined. We can override what a constructor objects get set to. 
*
* write out a code example of each explanation above
*/

// Principle 1 -----------------------------------------------
function sayName(name) {
  console.log(this);
  return name; 
}
console.log(sayName("Rose Nyland")); 
// code example for Window (global) Binding

// Principle 2 -------------------------------------------------
const myObj = {
  greeting: "Hello",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
  }
};
myObj.sayHello("Dorothy Zbornak");

// code example for Implicit Binding -----------------------------

// Principle 3 ---------------------------------------------------
function GoldenGirlPerson(greeter) {
  this.greeting = "Hello ";
  this. greeter = greeter;
  this.speak = function() {
    console.log(this);
    console.log(this.greeting + this.greeter);
  };
}
const Sophia = new GoldenGirlPerson("Blanche");
const Blanche = new GoldenGirlPerson("Sophia");
Sophia.speak();
Blanche.speak();
// code example for New Binding ----------------------------------

// Principle 4 --------------------------------------------------
Sophia.speak.call(Blanche);
Blanche.speak.apply(Sophia);
// code example for Explicit Binding ----------------------------