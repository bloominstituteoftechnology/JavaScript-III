/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the default reference for the 'this' keyword that points to the main Window Object.
* 2. Implicit Binding: references the object that the method is directly bound to.
* 3. Explicit Binding: directly refers to an object through either the .call, .apply or .bind methods.
* 4. New Binding: refers to the Constructor Object it is attached to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var windowBinding = "This is in the window now";
// console.log(this.windowBinding);

// Principle 2

// code example for Implicit Binding
const birthdayCake = {
    name: 'Susan',
    age: 46,
    message: function() {
        console.log(`Happy ${this.age}th birthday ${this.name}`);
    }
}

// birthdayCake.message();

// Principle 3

// code example for New Binding

const Car = function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car('Saturn', 'Vue', '2004');
// console.log(myCar);

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'James'
}

let favFoods = ['Pizza', 'Apples', 'Beer', 'Tikka Masala', 'Beer'];
let foodList = favFoods.join(', ');

function greet() {
    console.log(`I'm ${this.name} and I eat ${foodList}`);
}

// greet.apply(person, favFoods);