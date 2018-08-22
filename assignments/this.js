/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: The default state of "this". If "this" is not bound to anything else, it refers to the Window object.
* 2. New Binding: When you create a new instance of a class with the "new" keyword, it binds "this" to the new instance. "this" then refers to the new object you just created.
* 3. Explicit Binding: By using the .call, .apply, or .bind Window methods, you can explicitly set "this" to refer to a particular object.
* 4. Implicit Binding: When calling a method on an object, the object (whatever is to the left of the dot) is what "this" refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); //logs the Window object

// Principle 2

// code example for Implicit Binding
const MyObject = function (){
  this.name = 'MyObjectName';
  this.myProperty = 'property';
};
 
MyObject.prototype.doStuff = function (action) {
  console.log(this.name + ' is ' + action + '!');
  console.log(this); //logs the object that called this method
}
 
const obj = new MyObject();

obj.doStuff('awesome');

// Principle 3

// code example for New Binding

const AnotherObject = function (){
  this.name = 'MyObjectName';
  this.myProperty = 'property';
  this.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!'); //"this" refers to the object that is being created
  }
};

const instance = new MyObject();

// Principle 4

// code example for Explicit Binding

const person = {
  name: "Joe"
};

function saySomething(something) {
  console.log(this); //logs the object bound to the function
  console.log(this.name + " says " + something);
}

saySomething.call(person, "hello");