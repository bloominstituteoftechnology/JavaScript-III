/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: when in the global scope, 'this' will become window/console Object. However, we can use "use strict" to prevent it.
* 2. Implicit(automatic) Binding: when a function is called by a preceding dot, the object before that dot is 'this'. It specifically deals with objects.
* 3. New Binding: when a constructor function is used, 'this' refers to the specific instance of the object i.e. created and returned ny the contructor function.
* 4. Explicit Binding: used to bulid new objects. when JS's call/apply method is used, 'this' is explicitly defined. In other words, we control 'this' within functions.
*
* write out a code example of each explanation above
*/

// Principle 1

//ReferenceError: brand is not defined. brand cannot be found with window binding.

// code example for Window Binding

/*const car = {
    brand: "Honda",
    mileage: function() {
        console.log(`${brand} has the best gas mileage!`);
    }
};
car.mileage();*/

// Principle 2
//'car' on the left of the dot(car.mileage()) has 'this' keyword.
//code example for Implicit Binding
/*const car = {
    brand: "Honda",
    mileage: function() {
        console.log(`${this.brand} has the best gas mileage!`);
    }
};
car.mileage();*/


// Principle 3

// code example for New Binding
/*function Vehicle() {
    this.type = luxury

}
const type = new Vehicle("Tesla"); //new applies 'this' binding to the constructor function
*/
// Principle 4
//If we want to use colors, we must have to pass arguments in the function. 'this' keyword is NOT an argument but 'colors' are an argument. 'this' is housed with a car.

// code example for Explicit Binding
/*const car = {
    type: "Sports"
}
const colors =["black", "yellow"];

function vehicle(colors1, colors2) {
    console.log(`This is a ${this.type} car and it comes in two different ${colors1}, ${colors2}!`)
}

//vehicle.call(car,colors); //call keeps in one argument list
vehicle.apply(car, colors); //apply is used to get individual colors */
