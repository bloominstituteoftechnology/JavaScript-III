/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW-BINDING: When used in the global scope, the value 'this' refers to the window

* 2. IMPLICIT-BINDING: When a function is called as a Method of an object, the keyword 'this' refers to the  object.

* 3. NEW-BINDING: When constructor function(Object creator) is used to create the instance of the object. The 'this' key refers to the object being created.

* 4. EXPLICIT-BINDING: It is the way of overriding the what the objects created by constructor function can get or set to using 'apply, call, and bind'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
  function getWindow(fn) {
      console.log(this);
      //This function console logs 'window' object
      return fn;
  }
getWindow("venkateshwarlu yagatilee");
// Principle 2
// code example for Implicit Binding
 var myObj = {
 	name: "veny",
 	getName: function() {
 		console.log(this.name);
 	}
 }
 myObj.getName();
 
 // Here the keyword 'this' refers to the object which comes before the 'dot'.

// Principle 3
// code example for New Binding
function Person(fn,ln,age) {
 	 this.fn = fn;
 	 this.ln = ln;
 	 this.age = age;
 	 getName = function() {
 	 	return "My name is " + this.fn + " " + this.ln + " and my age is " + this.age; 
 	 }
 }

// Principle 4

// code example for Explicit Binding
var obj = {
	name: "venky",
	age: 39,
	state: "SC"
}

function getName(city) {
	console.log(`${this.name} with ${this.age} learning code now from ${city} in ${this.state} `);
}

getName.call(obj, "Columbia");