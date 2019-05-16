/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In a simple function call, this will default to the global object, and be undefined under strict mode.
* 2. Implicit binding, it points to the object of which the function is called.
* 3. This can point to a newly constructed object using the "new" keyword.
* 4. This can also be explicit, in that you can point to a certain value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.mean = "YADADAMEEEEAN???";

function yaddada () {
	console.log(this.mean);
}

// yadada(); will be "YADADAMEEEEAN???" under the window(global) scope.

let mean = "YADDADAMEEEEAN???";

function yaddada () {
	console.log(this.mean);
}

//yadada(); will be undefined, since with let it's scrict.



// Principle 2

// code example for Implicit Binding

let yaddada = {
	mean: function () {
		console.log(this.answer)},
	answer: "No, I definitely do not know what you mean."
}

yaddada.mean(); // "No, I definitely do not know what you mean."

//this is pointing implicitly to it's own object's scope

// Principle 3

// code example for New Binding

function yaddadamean (what) {
	this.mean = what.mean;
}

const yaddada = new yaddadamean({
	mean: function () {
		console.log("YADDADAMEEEEAN????")}
})

yaddada.mean();

//"YADADAMEEEEAN????"


// Principle 4

// code example for Explicit Binding

function yaddada() {
	console.log(this.gUnit);
}

let mean = {
	gUnit: "YADDADAMEEEEAN??"
}

yaddada.call(mean);

//calling yaddadamean, using 'apply' can work as well

function yaddada() {
	console.log(this.gUnit);
}

let mean = {
	gUnit: "YADDADAMEEEEAN???"
}

yaddada = yaddada.bind(mean)

yaddada(); //"YADDADAMEEEEAN???"

//permanently binding 'this' to 'mean' and reassigning 'yaddada' to the permanently bound function. 