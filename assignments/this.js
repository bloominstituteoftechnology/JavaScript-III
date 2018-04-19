/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: The this keyword is always bound to an object. Per default that is the window object.
* 2. Implicit Binding: Refers to "this." used in an object where it is automatically bound to said object and works within it's scope
* 3. New Binding: Used in constructor functions to assign new properties to created objects
* 4. Explicit Binding: Binding the "this"-keyword to an object of our choosing.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let ourObject = {
    "name": 'Klaus',
    "age": 108,
    "hoHo": function () { console.log(`HOHOHO my name is ${this.name}`) },
}

ourObject.hoHo();

// Principle 3
// code example for New Binding
function Parent(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    console.log(this)
}

