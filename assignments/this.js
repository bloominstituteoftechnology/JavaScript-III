/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When in the global scope, the value of “this” will be the window/console Object.
* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New Binding: When a constructor function(object creator) is used, this refers to the particular object 
     that is created and returned by the constructor function.
* 4. Explicit Binding: Whenever JavaScript’s call, apply, or bind method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const Five = function() {
    return this.x;
 }
 
 const x = 5 ;
 Five();

// Principle 2

// code example for Implicit Binding
const Angela = {
	name: 'Angela',
	sayHello: function(person) {
      console.log("Hi "+ person +", my name is " + this.name + ".");
	}
}

Angela.sayHello("Peggy");

// Principle 3

// code example for New Binding
function Room(item) {
    this.item = item;
    this.clean = function() {
      console.log(`I've cleaned the ${this.item}.`);
    };
  }
  
  const bedroom1 = new Room("television");
  
  bedroom1.clean();

// Principle 4

// code example for Explicit Binding
function greet() {
	console.log(this.name);
}

var person = {
	name:'Angela'
};

var greetPerson = greet.bind(person); 
greetPerson();