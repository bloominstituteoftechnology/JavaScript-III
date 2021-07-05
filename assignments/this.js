/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Unless otherwise specified, the this keyword will always point to the window.
* 2. Implicit Binding: When you invoke a function, the this refers to the left hand side of the invocation.
* 3. New Binding: Allows you to create new objects using the new keyword and this keyword
* 4. Explicit Binding: referes to the user choosing which things bind together in the code. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2
const person = {
age: "10",
name: "Estevan",
greet: function(){
console.log(`Hello my name is ${this.name}`)
}

}
person.greet(); //person is what this refers to in this case 
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function Animal(type){
    this.type = type;
    this.greet = "OMG its a";
    this.speak = function(){
        console.log(`${this.greet} ${this.type}`)
    }

}

const pup = new Animal("Puppy");
pup.speak();

// Principle 4

// code example for Explicit Binding
const me = {
    name : "estevan"
}

function sayHi(){
console.log(`Hi my name is ${this.name}`)
}

sayHi.call(me);