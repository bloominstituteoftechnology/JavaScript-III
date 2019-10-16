/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window binding to "this", will point to the global object
* 2. Implicit Binding is when the "this" word is within a function. The "this" points to the object which the function is invoking on.
* 3. New Binding creates a new function with the same name. It reminds me of being a factory method where we can build many of the same object but with different parameters inside. The "this" points to the instance of that certain object with it's values.
* 4. Explicit Binding is when .call() and .apply() are used on a function. It's called explicit because we are explicitly passing "this" to those two methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const dog = {
	name: 'Beethoven',
	type: 'Retriever',
	noise: 'WOOF!',
	bark: function() {
		console.log(this.noise);
	},
};

dog.bark();

// Principle 3

// code example for New Binding
function Bag(size) {
	this.size = size;
	this.getSize = function() {
		return `The size of your bag is ${this.size}`;
	};
};


const brownbag = new Bag('8in x 3in x 11in');
const gucci = new Bag('13in x 8in x 24in');
console.log(brownbag.getSize());
console.log(gucci.getSize());

// Principle 4

// code example for Explicit Binding
function makeNoise() {
		console.log(`${this.name} ${this.noise}`);
}
const apple = { 
	name: 'Fuji apple', 
	taste: 'sweet',
	noise: 'doesn\'t make a sound',
};

const car = {
	name: 'Roadster',
	wheels: 4,
	noise: 'zzzzzzzzzzzzzZZZZZZooooommmmm!',
};

makeNoise.call(apple);
makeNoise.call(car);

makeNoise.apply(apple);
makeNoise.apply(car);
