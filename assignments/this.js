/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you just use the 'this' keyword without a reference to anything.
* 2. Implicit is when you use the 'this' keyword, and binds itself without you telling it where to go.
* 3. New binds the 'this' keyword to the constructor function.
* 4. Explicit is when you specifically bind the 'this' keyword to an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this.name);
}

console.log(sayName("Josh")) //This wouldn't return "Josh" because the 'this' keyword is bound to the global object(the window)


// Principle 2

// code example for Implicit Binding
const myObject = {
    'greeting': 'What up',
    'sayHello': function(name) {
    console.log(`${this.greeting} my name is: ${name}`);
    } 
}

myObject.sayHello("Erica"); // The reason 'this' works when we invoke the method, it's bound by whatever is directly to the left of it.


// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    // new === this 
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  const josh = new CordialPerson('CS 12'); // The new before the constuctor means the 'this' keyword is bound inside the CodrialPerson function.

// Principle 4

// code example for Explicit Binding
sayName.call(myObject,); //We're explicitaly binding the 'this' keyword to sayName by using the call method.