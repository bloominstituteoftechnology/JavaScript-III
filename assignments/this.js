/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. When within the confines of the global scope, the value of "this" will be
    the window/console Object.
* 2. Whenever an object is called by a preceding dot, the object before the dot is this.
* 3. When a constructor function is used, `this` refers to the specific instance of the
		the object that is created and returned by the constructor function.
* 4. Whever we use JavaScript's call or apply, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);

// Principle 2

// code example for Implicit Binding
// const myObj = {...};
// myObj.sayHello('Ryan');

// Principle 3

/* code example for New Binding
function Animal(species)	{
	this.species = species;
}

const Chewy = new Animal('dog');
*/


// Principle 4

// code example for Explicit Binding
/* 
let newObj = {
	"name": "Mark",
	"speak": function(param) {
		return this.name + param;
	}
}

let newObj2 = {
	"name": "Henry"
}

console.log(newObj.speak.apply(newObj2, ["JJ"]));
console.log(newObj.speak.call(newObj2, "icecream"));