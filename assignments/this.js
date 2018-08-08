/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding - the value of "this" is the window object. this === window, this.var === window.var === var when on the global scope or outside of any function.

* 2. Implicit binding - When a function is called as a method to an object "this" is set to the object the method is called on.

* 3. New binding - When used in a constructor function "this" refers to the specific instance of the object that is created and returned by the instructor 

* 4. Explicit binding - Passes the context of "this" from one to another using call or apply

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var name = 'Caleb';
this.name;

// Principle 2

// code example for Implicit Binding
const caleb = {
  'greeting': 'Hello',
  'name': 'Caleb',
  'introSelf': function() {
    console.log(`${this.greeting}, my name is ${this.name}.`)
  }
}
caleb.introSelf();
// Principle 3

// code example for New Binding
function CreatePerson(name) {
  this.name = name,
  this.greeting = 'Hello',
  this.introSelf = function() {
    console.log(`${this.greeting}, my name is ${this.name}.`)
  }
}
const bob = new CreatePerson('Bob');
bob.introSelf();
// Principle 4

// code example for Explicit Binding
const carrie = new CreatePerson('Carrie');
carrie.introSelf.call(bob);
// Carrie has an identity crisis.