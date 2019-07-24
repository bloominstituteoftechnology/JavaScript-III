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
function sayName(name) {
    console.log (this);
    return name;
}
sayName("Marques")
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: "Hello",
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    };
}
myObj.sayHello("Marques");
// code example for Implicit Binding

// Principle 3
function CordialPerson(greeter) {
    this.greeting = "Hello ";
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
   const Marques = new CordialPerson("Marques");
  const Carter = new CordialPerson("Carter");
  
   Carter.speak();
  Carter.speak();
// code example for New Binding

// Principle 4
Marques.speak.call(Carter);
Carter.speak.apply(Marques);
// code example for Explicit Binding