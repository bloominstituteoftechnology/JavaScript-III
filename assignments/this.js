/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this refers to the calling object. In browsers the outtermost object is the Window. In node it's global.
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

const windowBinding = function() {
	// Returns 'object Window' in browsers and 'object Global' in node
	console.log(this.toString()); 
}
windowBinding();
// code example for Window Binding

// Principle 2
// code example for Implicit Binding
const myself = {
	name: "Jason",
	school: "Lambda",
	speak : function() 
	{ 
		console.log(this); // Writes the objects key:value pairs to console
		return this.name; 
	},
};

myself.speak();

// Principle 3
const Animal = function(species, age, color) {
	this.species = species;
	this.age = age;
	this.color = color;
	console.log(this); 
}

// code example for New Binding
const myDog = new Animal('Dog', 4, 'Brown'); // Creates a new instance of Animal and fills it with the parameters

// Principle 4
const speak = function(sound) {
	if (this.sound === undefined) {
		this.sound = sound;
	}
	console.log(this.sound);
}

// code example for Explicit Binding
speak(myDog);