/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding. It occurs when no other binding has been explicitly assigned.
* 2. Implicit binding occurs in object methods
* 3. Explicit binding occurs whenever JavaScript's call or apply methods are used.
* 4. If a constructor function (function used to return an object) is used, this applies to the specific INSTANCE of an object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(name);



// Principle 2
// code example for Implicit Binding

const person = {
    name: 'Jonhy',
    age: 23,
    cook: function() {
        return `${this.name} is ${this.age} years old and he loves to cook.`
    }
}
console.log(person.cook());



// Principle 3
// code example for New Binding

function Employee(name, occupation) {
    this.name = name,
    this.occupation = occupation,
    this.speak = function myOccupation() {
        return `The employee is ${this.name} and their occupation is ${this.occupation}`;
    }
}

let john = new Employee('John', 'Doctor');
let jane = new Employee('Jane', 'President');

console.log(jane.speak());
console.log(john.speak());



// Principle 4
// code example for Explicit Binding

const movies = ['Apacolypse Now', 'Batman', 'Martian'];

function greeting(movies1, movies2, movies3){
    'use strict' 
    console.log(`Hello! ${this.cook()}. And here are their favourite movies: ${movies} `)
}
greeting.apply(person, movies) 