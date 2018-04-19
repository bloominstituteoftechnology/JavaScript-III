/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: It is when you run a function that is not associated with an object then this will be Window.
* 2. Implicit Binding: It is when an object invoke a method and then this will point to that object.
* 3. New Binding: It is create an instance from a construtor function which then creates a new object refering to this.  this.name = John and this.age = 20 when instaniate a new object will return {name: John, age: 20};
* 4. Explicit Binding: It is when you explicitly invoke or bind a function to an object that you want to invoke that function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowThis() {
  console.log(this);
}

//windowThis();  Don't uncomment this unless you want to logout the global or window object depending on the tool you are using

// Principle 2

// code example for Implicit Binding
var obj = {
  name: "John",
  sayName: function() {
    return `My name is ${this.name}`;
  }
};
console.log(obj.sayName())

// Principle 3

// code example for New Binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person("John", 20);
console.log(john);

// Principle 4

// code example for Explicit Binding
var person = {
  name: "John",
  age: 21
}

var speak = function() {
  return this.name + " said hello";
}

console.log(speak.call(person));