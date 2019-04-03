/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in Window/Global Object Binding, we call upon the console object.
* 2. When in Implicit Binding, the object before the dot is this. 
* 3. 
* 4. Explicit Binding allows us to use method to target and overwrite
*    specific objects.
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
// Since sayName(); is in the global scope it has a Window/Global Binding.
function theWorld(place) {
	console.log(this);
	return place;
}

theWorld('San Diego Zoo');

// Principle 2
// code example for Implicit Binding
// showAnimal is confined within sanDiegoZoo so its binding is to the zoo.
const sanDiegoZoo = {
	greeting: 'Welcome',
	showAnimal: function (animal) {
		console.log(`${this.greeting} this is a ${animal}`);
		console.log(this);
	}
};

sanDiegoZoo.showAnimal('Monkey');

// Principle 3
// code example for New Binding
// by using the New Binding we can create a gorilla with 
// explain being an Implicit Binding inside of it. 
function animalCreator(animal) {
	console.log(this)
	this.intro = 'This is a';
	this.animal = animal;
	this.explain = function () {
		console.log(this)
		console.log(`${this.intro} ${this.animal}`);
	}
}

const gorilla = new animalCreator('Gorilla');
const giraffe = new animalCreator('Giraffe');

gorilla.explain();
giraffe.explain();

// Principle 4
// code example for Explicit Binding
// We call the giraffe object to explicitly get its properties and vice versa.
gorilla.explain.call(giraffe);
giraffe.explain.call(gorilla);