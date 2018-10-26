/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let windowBound = function(){
    console.log(this);
}

// Principle 2

// code example for Implicit Binding
let myObject = {
    name : "Computer",
    displayInfo : function (){
        console.log(this.name);
    },
    processor : "I-5"
}
myObject.displayInfo();

// Principle 3

// code example for New Binding
const pet = function(name, animalType){
    this.name = name;
    this.animalType = animalType;
}
let cat = new pet(`Trixie`, `cat`);
console.log(pet.name);

// Principle 4

// code example for Explicit Binding
let getProcessor = function(){
    return this.processor;
}
getProcessor = getProcessor.bind(myObject);
console.log(getProcessor());

