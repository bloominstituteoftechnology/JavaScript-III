/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. It references to the window or console object when called globally
* 2. Implicit binding: 'this' refers to the object preceeding the dot when object.function is called.
* 3. With the use of the 'new' word new object is created and 'this' refers to that object.
* 4. With the use of call, apply or bind functions, the object that is referred by this is called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globally() {
    console.log(this)
}

// Principle 2

// code example for Implicit Binding
let me = {
    name: 'Erinc',
    age: 31,
    sayHi: function () {
        console.log(this.name)
    }
}

me.sayHi()

// Principle 3

// code example for New Binding

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.display = function () {
        console.log(`This is a ${year} ${make} ${model}.`)
    }
}
const camry = new Car('Toyota', 'Camry', 2017)
camry.display()

// Principle 4

// code example for Explicit Binding

let trims = ['xe', 'ce', 'xle'];

let inform = function (trim1, trim2, trim3) {
    console.log(`${this.make} ${this.model} has ${trim1} ${trim2} ${trim3} trims.`)
}

let newFunc = inform.bind(camry, ...trims)

console.log(newFunc())