/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Bindng: This is when we call the this keyword onthe window object
* 2. implicit Binding: When the functio is called by the preceding dot.
* 3. Explicit Binding: Usig methods like call and apply to force a function call that has the this binfding is explicit
* 4. New Binding: WHen you use the new keyword to call a method with the this binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let myFunction = function() { 
    console.log(this.a);
}
 var a = 6; 
 myFunction();
// Principle 2

// code example for Implicit Binding

const liverpool = {
    name: "Liverpool",
    stadium: "Anfield",
    chant() {
        console.log(`${this.name} is the greatest team and ${this.stadium} is the best stadiu in the world`)
    }
}

liverpool.chant;

// Principle 3

// code example for New Binding
function name(name) {
    return this.name = name;
    

}

let damola = new name("Damola");

// Principle 4

// code example for Explicit Binding
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.apply(person, [args]);