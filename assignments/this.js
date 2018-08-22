/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Is the function  called/used by using "new"? 
* 2. Has it been called by using call(),apply() or bind()?
* 3. Is it a medthod?
* 4. Has it been called as a global? Will you see "undefined"
     or "window"?
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const Objekt = {
	thingToBind : "lmao",
	getItBound : function(){
		return this.thingToBind;
	}
};

const unboundThing = Objekt.getItBound;
console.log(unboundThing());	// Should be "undefined"

const boundThing = unboundThing.bind(Objekt);
console.log(boundThing());	// Should be "lmao"

// Principle 2

// code example for Implicit Binding
const Objekt2 = function(){
	this.name = "Default_Name";
};

Objekt2.prototype.sayName = function(name){
	console.log("This objects name is "+name);
}

const newObby = new Objekt2();
newObby.sayName("'new Clone'");

// Principle 3

// code example for New Binding
const Objekt3 = function(apples,oranges,grapes){
	this.apples = apples;
	this.oranges = oranges;
	this.graps = grapes;
};

const Objekt3_2 = new Objekt3("Apples","Oranges","Grapes");

console.log(Objekt3_2);

// Principle 4

// code example for Explicit Binding

const SomeStuff = function(){
	console.log("Property 1: "+this.one+" Property 2: "+this.two);
};

const Objekt4 = {
	one:"PROPERTY1",
	two:"PROPERTY2"
};

SomeStuff.call(Objekt4);

