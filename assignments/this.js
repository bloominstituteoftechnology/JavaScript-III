/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding is this binding to the window object, the object that is already provided from the browser.  If you this.name on codepen, it will return codepen because they named their window.
 * 2. Implicit Binding is the binding for objects and methods. It calls  the attribute in the object to the left of the dot.
 * 3. Explicit Binding is the same as above but it is used for functions.
 * 4. New binding uses a 'parent' object and makes a new object with a different name and all the same attributes.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function hello(name) {
    return `Hello ${this.name}!`
}
console.log(hello());
// Principle 2

// code example for Implicit Binding
const shock = {
    name: 'Chris',
    age: 40,
    children: 4
}

console.log(shock.age);
// Principle 3

// code example for New Binding
function Parent(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
}

const chris = new Parent({
    age: 35,
    name: 'Chris',
    location: 'Cleveland, OH',
    phrase: 'Si vis pacem, para bellum   '
});

console.log(chris.phrase);

// Principle 4

// code example for Explicit Binding
const person = {
    "name": "Shock"
}

function introduction(hobbie1, hobbie2, hobbie3) {
    return `Hello, my name is ${this.name} and I like to: ${hobbie1},${hobbie2},${hobbie3}`;
}

const hobbies = ["run", "read", "meditate"];

console.log(introduction.apply(person, hobbies));