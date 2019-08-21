/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. _Window Binding_:when 'this' is referenced in the global scope, it's bound to the window
* 2. _Implicit binding_: 'this' refers to the object preceding the dot when a function is called with a dot.
* 3. _New Binding_: when a new object is made from a constructor function, 'this' refers to that object
* 4. _Explicit Binding_: you can explicitly state 'this' by using .call, .apply, or .bind. write the function, write the property (.call, .apply, .bind) and then reference what 'this' refers to by entering the object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello (name){
    console.log (this.name);
};


// Principle 2

// code example for Implicit Binding
var myself = {
    name: "Meera",
    location:"Utah",
    introduction = function(){
        return `Hi, my name is ${this.name} and I live in ${this.location}.`
    }
}

myself.introduction();


// Principle 3

// code example for New Binding
function Dog (breed, hairLength) {
    this.breed = breed,
    this.hairLength = hairLength
};

const doge = new Dog ('australian shepherd', 'long');

console.log(doge);

// Principle 4

// code example for Explicit Binding
let yellNameLoudly = function(){
    console.log (`MY NAME IS ${this.name.toUpperCase()}`)
};

let meera = {
    name: 'meera',
    age: 26
};

yellNameLoudly.call(meera);