/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. Window Binding means that when 'this' is applied to a function in the global scope, 'this' will apply to the 'window object'.

* 2. Implicit Binding means whatever object is to the left of the '.', 'this' will be context for 'this'. i.e. sampleObj.speakName(), the 'this' in that method will apply to sampleObj.

* 3. Explicit Binding explicitly defines what 'this' will apply to via the call or apply methods on an object. It can override implicit binding. 

* 4. New Binding refers to the creation of new objects using the constructor function. When an new object is created from a parent object, 'this' will apply to the child object and not the parent.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this.name)
  }
  
  sayName("Nate");




  // Principle 2

// code example for Implicit Binding

const person = {
    name: "Nate",
    sayName: function(name) {
      console.log(`My name is ${this.name}`);
    }
  };

person.sayName();




// Principle 3

// code example for New Binding

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const nate = new Person("Nate", 32, "Bay Area");

console.log(nate.location);


// Principle 4

// code example for Explicit Binding

Person.prototype.sayName = function(name) {
    console.log(`My name is ${this.name}`);
}

const fred = new Person("Fred", 40, "Europe");
console.log(fred);

fred.sayName.call(nate);

