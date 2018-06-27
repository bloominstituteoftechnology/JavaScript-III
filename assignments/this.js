/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window behind the scenes in the browser
* 2. explicit call bind  apply  are methods on objects called explicitly
* 3. new  creating a new object based off a constructor
* 4. implicit using this inside of an object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function aFunction () {
    console.log(this); 
}

// Principle 2

// code example for Implicit Binding
const aObject = {
    name: 'Jonathan',
    method1: function() {
        console.log(`My name is ${this.name}`); 
    }
}
// Principle 3

// code example for New Binding
function CapitalRequired (name, sport) {
    this.name = name;
    this.sport = sport; 
  } 
const jonathan = new CapitalRequired("Jonathan","running");
// Principle 4

// code example for Explicit Binding
function CapitalRequired2(secondatrributes){ 
    CapitalRequired.call(this, secondatrributes); // THIS IS EXPLICIT.
    //something new would go here. 
  }
  
  CapitalRequired2.prototype = Object.create(CapitalRequired.prototype); //inherit
  
  const jonathanChild = new CapitalRequired2("Jack", "running");