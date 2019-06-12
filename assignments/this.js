/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: binds "this..." to the console object.
* 2. Implicit binding: functions in methods; focuses on the object literals.
* 3. New Binding: refers to a specific point in which an object was created.
* 4. Explicit binding: explicit is direct; .call and .apply methods are used in this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
const wizard = {
    name: "Harry Potter"
}
const skills = ['Magic', 'Finding Voldy', 'Breaking my glasses'];

function introduction(wizardry){
    return `Hello! my name is ${this.name} and these are my skills as a wizarding boi: ${wizardry}`;
}
console.log(introduction.call(wizard, skills));