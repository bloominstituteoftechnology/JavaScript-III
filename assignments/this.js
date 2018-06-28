/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding means that if we invoke a function that uses the 'this' keyword without specifying the 'this' keyword, then the 'this' keyword automatically binds to the
window object.
* 2. Implicit Binding means that when a function is invoked and there is a dot to the left of it, whatever is before the dot is the 'this' keyword.
* 3. New Binding means that when a function is invoked with the 'new' keyword, the 'this' keyword in the constructor function is bound to the new object.
* 4. Explicit Binding means that we can invoke a function and state what the 'this' keyword will be referring to. We can put a function in the global scope and and invoke it by setting the
this keyword to an Object. The property call and apply let you invoke the function, with call passing in arguments one at a time and apply taking in arguments as an array. The bind property
invokes the function and creates a new one.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let wFunction = function() {
    console.log(this.say);
}

wFunction();

// Principle 2

// code example for Implicit Binding

let cereal = {
    name: 'Corn Pops',
    parent: `Kellogg's`,
    color: 'yellow',
    parentCompany: function() {
        console.log(this.parent);
    }
}

cereal.parentCompany();

// Principle 3

// code example for New Binding
let computerSpecs = function(gpu, processor, ram){
    this.gpu = gpu;
    this.processor = processor;
    this.ram = ram;
    this.computer = function() {
        console.log(`My computer is made up of a ${this.gpu}, a ${this.processor}, and ${this.ram}.`)
    }
}

const myComputer = new computerSpecs('GTX 1070', 'Xeon E3-1240', '16 GB of RAM');
myComputer.computer();

// Principle 4

// code example for Explicit Binding
let bowlFeatures = function(meal1, meal2, meal3, snack) {
    console.log(`My ${this.name} is ${this.color} and I use it to eat ${meal1} and sometimes after ${meal2} or ${meal3} as a ${snack}.`);
}

let bowl = {
    name: 'cereal bowl',
    color: 'pink',
}

let mealTimes = ['breakfast', 'lunch', 'dinner', 'snack']
// Call ------------------------------
bowlFeatures.call(bowl, mealTimes[0], mealTimes[1], mealTimes[2], mealTimes[3]);
// Apply -----------------------------
bowlFeatures.apply(bowl, mealTimes);
// Bind ------------------------------
let repeatBowl = bowlFeatures.bind(bowl, mealTimes[0], mealTimes[1], mealTimes[2], mealTimes[3]);
repeatBowl();
