/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding - If there is no context given, 'this' will default to the window object.
* 2. Implicit binding - Creating an object and using the 'this' keyword inside of it to reference values inside the same object.
* 3. New binding - Using the 'new' keyword to create a new objext using a constructor. 'this' will then refer to the new object.
* 4. Explicit binding - Using the .call, .apply, or .bind methods to manually bind the 'this' keyword to a specific context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myFunc = function(){
    console.log(this);
};

myFunc()

// Principle 2

// code example for Implicit Binding
const jesseObj = {
    'name': 'Jesse',
    'sayHi': function(){
        console.log(`${this.name} says hello!`)
    }
}

jesseObj.sayHi();

// Principle 3

// code example for New Binding
function Car(carObj){
    this.make = carObj.make,
    this.model = carObj.model,
    this.year = carObj.year,
    this.engineNoise = carObj.engineNoise,
    this.sound = function(){
        return `When the ${this.make} ${this.model} is running, you hear: ${this.engineNoise}!`;
    }
}

const teslaModel3 = new Car({
    make: 'Tesla',
    model: 'Model 3',
    year: 2018,
    engineNoise: `...(silence)...`
})

console.log(teslaModel3.sound())

// Principle 4

// code example for Explicit Binding