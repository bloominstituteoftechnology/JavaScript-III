/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Returns the value of this in the window
* 2. This refers to the object to the left of the dot
* 3. This refers to the object that is created and returned by the constructor function
* 4. This is defined explicity if .call() and .apply() are invoked
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function bio(about) {
console.log(this);
return about;
}
bio("I grew up in Austin, Texas");

// Principle 2

// code example for Implicit Binding

const cat = {
    name: "Calico",
    color: "white",
    sound: function(speak) {
    console.log(`My cat ${this.name} is ${this.color} and likes to ${speak}!`);
    console.log(this);
    } 
};

cat.sound("meow");


// Principle 3

// code example for New Binding

function GoodBand(singer){
    this.instrument = singer.strings;
    this.clothes = singer.textile;
    this.voice = function () {
        console.log(`The best bands have a ${this.instrument} and lead singers who wear ${this.clothes}`)
    }
}
const Good = new ___

let singer{
    this instrument = "gita"
}

// Principle 4

// code example for Explicit Binding