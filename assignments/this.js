/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of this will be the window/console object.
* 2. Implicit binding happens when the dot notation is used to summon a function.
* 3. New binding refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding happens when .call(), .apply() or .bind() is used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

setTimeout(function () {
	console.log(this), 500
})

// Principle 2

// code example for Implicit Binding
const joeObj = {
	greeting: 'How you doing!',
	saysHowdy: function (name) {
		console.log(`${this.greeting} my name is ${name}`);
		console.log(this);
	}
};

joeObj.saysHowdy('The Flash');


// Principle 3

// code example for New Binding

function AwesomePuertoRican(welcomer) {
	this.greeting = 'Sup!!';
	this.welcomer = welcomer;
	this.talk = function () {
		console.log(this.greeting + this.welcomer);
		console.log(this);
	};
}

// Principle 4

// code example for Explicit Binding
// 
function Dog(breed){
  Animal.call(this, 'Dog', 'Woof!')
  this.breed = breed;
}