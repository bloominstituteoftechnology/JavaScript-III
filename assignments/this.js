/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The .this keyword refers to window or global scope.
* 2. Implicit Binding: The .this keyword refers to the object to the left of the dot.
* 3. Explicit Binding: Forcing a function to use a particular .this object using .call, .apply, or .bind.
* 4. New Binding: Constructs a new object to use with the function and associate the function to .this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const myFunction = () => {
	return this;
};

let windowBinding = myFunction();

console.log(windowBinding);

// Principle 2

// code example for Implicit Binding

const self = {
	name: 'Derek',
	age: 32,
	city: 'Jacksonville',
	sayName: function() {
		console.log(`My name is ${this.name}.`);
	}
};

self.sayName();

// Principle 3

// code example for New Binding

const Team = function(name, city, sport) {
	this.name = name;
	this.city = city;
	this.sport = sport;
	this.sayThis = function() {
		console.log(
			`The ${this.name} are from ${this.city} and play ${this.sport}.`
		);
	};
};

const jaguars = new Team('Jacksonville Jaguars', 'Jacksonville', 'football');
const gators = new Team('Florida Gators', 'Gainesville', 'college sports');
const magic = new Team('Orlando Magic', 'Orlando', 'basketball');
const marlins = new Team('Miami Marlins', 'Miami', 'baseball');

jaguars.sayThis();
gators.sayThis();
magic.sayThis();
marlins.sayThis();

// Principle 4

// code example for Explicit Binding

const sayName = (name1, name2, name3) => {
	console.log(
		`I have three kids, and their names are ${name1}, ${name2}, and ${name3}.`
	);
};

const derek = {
	name: 'Derek',
	age: 32
};

const kids = ['Cody', 'Kayla', 'Logan'];

sayName.apply(derek, kids);
