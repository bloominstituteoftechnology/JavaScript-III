/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding. To me, this means that "this" is always going to look outward to find meaning. It will keep searching until it hits the global object.
* 2. Implicit binding: "This" referes to whatever is preceding the DOT. It is implied.
* 3. New Binding: the "new" keyword creates a new object from a constructor function. "This" refers to the new object being created.
* 4. Explicit binding: Whenever you us a method like .call, there explicit instructions given to what "this" refers to. I think it works as long as the new object is already created. Otherwise"this" does not know what it's refering to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// -BQ console.log(this) would give us the global JavaScript object.

function sayHello(hello) {
	console.log(this);
	return hello;
}
sayHello("Hello World!")

// Principle 2

// code example for Implicit Binding

const implicitBindingObj = {
	favGame: "Dota 2",
	favChar: "Dwarven Sniper",
	introFavGame: function(name) {
		console.log(`Hello, my name is ${name}. My favorit game is ${this.favGame}. My favorite character to play is ${this.favChar}`);
		console.log(this);
	} 
}
implicitBindingObj.introFavGame("Ben Q")

// Principle 3

// code example for New Binding
function NewBinding(name, game, char) {
	this.game = game;
	this.char = char;
	this.name = name;
	this.intro = function() {
		console.log(`Hi! My name is ${this.name}, and my favorite game is ${this.game}. My favorite character to play is ${this.char}.`)
	}
}
const ben = new NewBinding('Ben Q', 'Dota 2', 'Dwarven Sniper');
const cody = new NewBinding('Cody', 'Dota 2', 'Ursa')
ben.intro();

// Principle 4

// code example for Explicit Binding

ben.intro.call(cody);

