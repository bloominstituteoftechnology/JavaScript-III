/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when we don't point to a specific object in our code, "this" will always refer to the window object and will not behave how we would usually want it to
* 2. when "this" is refered to in the method of an object, "this" will always refer to what is left of the dot before the invokation of the method
* 3. the "new" keyword will create a new instance of an object, so we can use "this" in the object constructor to always refer to the same attributes across all new instances
* 4. we can tell the compiler exactly what we want "this" to point to by using the .call or .apply methods
*
* write out a code example of each explanation above
*/


// Principle 1
// code example for Window Binding
let sayName = function () {
    // 'use strict'
    console.log(`My name is ${this.name}`)
};

sayName();


// Principle 2
// code example for Implicit Binding
let example = {
    "name": "Peter",
    "sayName": function() {
        return `My name is ${this.name}`
    }
};

console.log(example.sayName());


// Principle 3
// code example for New Binding
function Computer(gpu, cpu, storage) {
    this.gpu = gpu,
    this.cpu = cpu,
    this.storage = storage,
    this.specs = function () {
        console.log(`Your computer has a ${this.gpu}, ${this.cpu}, and an ${this.storage}`);
    };
}

const myComp = new Computer("GTX 1080ti", "Ryzen 1700x", "SSD");
const broComp = new Computer("GTX 970", "Intel i7", "HDD");
myComp.specs(); //?
broComp.specs(); //?


// Principle 4
// code example for Explicit Binding
let readLocation = function() {
    console.log(`I am located in ${this.location}`)
};

let me = {
    "location": "California"
};

readLocation.call(me);