/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window Binding:
If not binded to anything else, JS will default the binding to the "Window" object.
* 2. 
Implicit Binding:
Implicit binding means when you call a function and the function is invoked, whatever is left of the dot is referenced by the "this" keyword.
* 3. 
New Binding:
When using the "new" keyword in JS, the interpretor will create a new object and that will be what "this" is referencing.
* 4.
Explicit Binding:
Explicit binding is using the .call, .apply or .bind methods to point the "this" keyword while a function is being invoked.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.name);
// Principle 2

// code example for Implicit Binding
const jim = {
    name: 'Jim',
    sayName() {
        console.log(`My name is ${this.name}`)
    }
}
jim.sayName();
// Principle 3

// code example for New Binding
function User(name) {
    this.name = name
}
const me = new User('Blake')
// Principle 4

// code example for Explicit Binding
const farmer = {
    name: 'John'
}
const crops = ["Corn", "Potatoes"];
function farm(crop1, crop2) {
    console.log(`I am farmer ${this.name} and I farm ${crop1} and ${crop2}`)
}
farm.call(farmer, ...crops);