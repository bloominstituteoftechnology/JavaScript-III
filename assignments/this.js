/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding is when you look to the left of the dot in the function is invoked.
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
function Human(traits) {
    this.name = traits.name
    this.age = traits.age
    this.gender = traits.gender
    this.eat = function () {
        console.log('${this.name} scoffs down their meal')
}

const justin = {
    name = "Justin",
    age = 26,
    gender = "M",
}

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding