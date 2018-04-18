/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding.
* 2. Implicit Binding.
* 3. New Binding.
* 4. Explicit Binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let saySomething = function() {
    console.log(this.comment);
}

let me = {
    comment: "I am learning"
}

saySomething.call(me);
// Principle 2

// code example for Implicit Binding
let school = {
    name: 'Lambda',
    students: 4000,
    age: 5,
    schoolName: function () {
        console.log(this.name);
    }
}

school.schoolName();

// Principle 3

// code example for New Binding
let Truck = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
}

let RAM = new Truck('red', 'RAM 2500', 'work truck');

// Principle 4

// code example for Explicit Binding
let greeting = function () {
    console.log("Hello there, my name is " + this.name);
}

let Jose = {
    name: 'Jose',
    age: 35
};

greeting.call(Jose);