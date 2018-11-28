/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - points or bound to the whole window.
* 2. implicit binding - points to the object when attached to a key.
* 3. new binding - when you use the new keyword in front of a constructor function
* 4. explicit binding - pass in the object you want to the this keyword to be bound to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hi() {
	console.log(this);
}
hi();

// Principle 2

// code example for Implicit Binding
const person = {
	name: 'Mike',
	food: 'Pancakes',
	cook: function() {
		console.log(`${this.name} likes to eat ${this.food}`);
	}
};

// Principle 3

// code example for New Binding
function Person(name) {
	this.name = name;
}
const tom = new Person('Tom');
console.log(tom);
// Principle 4

// code example for Explicit Binding
function intro() {
	console.log(`Hi, my name is ${this.name}`);
}

intro.call(person);
