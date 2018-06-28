/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding involves a scenario in which the 'this' keyword has no objects or functions to reference
other than the entire window (the all encompassing object where the code is being written)

* 2. Implicit Binding is a redirection of the 'this' keyword to a more contained environment such as an object.
it is implicit because the binding happens automatically within the object or function. e.g.

const myObject = {
   'greeting': 'Hello',
  'sayHello': function(name){
    console.log(`${this.greeting} my name is: ${name}`);
    //anything after this is ignored (return)
  }
}

myObject.sayHello("Bob");

in the function above, the 'this' keyword refers to "myObject".

* 3. New Binding involves functions that create new objects.  Use of this method would involve such a constructor function that
contains a 'this' statement and then a follow up that creates a new object with the same functionality of the originally created
constructor function.

function CordialPerson(greeter){
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function (){
    console.log(`${this.greeting} ${this.greeter}`)
  }
}

const jerry = new CordialPerson('Newman'); //new object
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

A situation like the one above shows that 'this' originally references the CordialPerson 'greeter', but is then redirected to another
object that has been made with the constructor function.


* 4. Explicit Binding makes use of established methods that are attached to functions which are known as .call, .apply, and .bind.
Unlike with implicit binding, a method needs to be specified as an attachment to the function being invoked.


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const myObject = {
  'greeting': 'Hello',
  'sayHello': function(name){
    console.log(`${this.greeting} my name is: ${name}`);
    //anything after this is ignored (return)
  }
}

myObject.sayHello("Bob");

// Principle 3

// code example for New Binding

function CordialPerson(greeter){
  this.greeting = 'Hello';
  this.greeter = greeter;
  this.speak = function (){
    console.log(`${this.greeting} ${this.greeter}`)
  }
}

const jerry = new CordialPerson('Newman'); //new object
const newman = new CordialPerson('Jerry');


jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

const myObject = {
  'name': 'Jim',
  'age': 30
}

sayName.call(myObject);
sayName.call(myObject, ...skills) //this works;

// ... is called "spread syntax"
//.call is a built in method of functions that we can use explicitly pass in the this keyword

const skills = ['HTML','CSS','JS']

sayName.apply(myObject,skills)
