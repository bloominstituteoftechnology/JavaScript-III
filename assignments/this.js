/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - If this is called inside the global scope it will have a value of window. .
* 2. Implicit binding - when a funcion is called using dot notation the object preceding 
        the dot is this. 
* 3. New Binding - when an instance of an object is made using the keyword new, this refers         to the instance of the object that is created by the constructor function. 
* 4. Explicit binding - whenever the call or apply method is used, this is explicitly               defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);
//will return window

// Principle 2
// code example for Implicit Binding
const person = {
    first_name: "Angel",
    last_name: "Torres",
    age: 26,
    speak: function() {
        console.log(`My name is ${this.first_name} ${this.last_name}.`)
    }

}

person.speak();
//will return "My name is Angel Torres"


// Principle 3
// code example for New Binding

function NewAnimal(kind) {
    this.name = kind;
    this.speak = function() {
        console.log(`I am a ${this.name}.`)
    }
}

const zebra = new NewAnimal("zebra");
zebra.speak()
// will return "I am a zebra"

// Principle 4
// code example for Explicit Binding

const cat = new NewAnimal("cat");
zebra.speak.call(cat);
