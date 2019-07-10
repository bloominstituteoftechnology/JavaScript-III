/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - When in the global scope, "this" will be the window/console Object
* 2. Implicit - When a function is called by a preceding dot, the object left of the dot will be "this"
* 3. New - Whenever a constructor function is used, "this" refers t0 the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit - Whenever a call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// function sayName(name) {
// 	console.log(this);
// 	return name;
// }
// sayName('Amine');
// code example for Window Binding

// Principle 2
// const myObj = {
// 	greeting : 'Hello',
// 	sayHello : function(name) {
// 		console.log(`${this.greeting} my name is ${name}`);
// 		console.log(this);
// 	},
// };
// myObj.sayHello('Amine');
// code example for Implicit Binding

// Principle 3
// function Person(greeter) {
// 	this.greeting = 'Hello... ';
// 	this.greeter = greeter;
// 	this.speak = function() {
// 		console.log(this.greeting + this.greeter);
// 		console.log(this);
// 	};
// }

// const amine = new Person('Shana');
// const shana = new Person('Amine');

// shana.speak();
// amine.speak();
// code example for New Binding

// Principle 4
function Person(greeter) {
	this.greeting = 'Hello... ';
	this.greeter = greeter;
	this.speak = function() {
		console.log(this.greeting + this.greeter);
		console.log(this);
	};
}

const amine = new Person('Shana');
const shana = new Person('Amine');

shana.speak.call(amine);
amine.speak.apply(shana);

shana.speak();
amine.speak();
// code example for Explicit Binding
