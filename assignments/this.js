/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding means that should there be no other binding is explicitly assigned, the "this" keyword
     will bind to the overall project.
* 2. Implicit Binding is used by applying dot notation to invoke the function it is in, or another function
     Elsweyr. (ex. this.khajiit).
* 3. New Binding allows you to input a assign a new value to an object, binding something new, thusly.
* 4. Explicit Binding is used when explicitly passing through a function in a "this" context by employing
     .call(), .apply(), or .bind().
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greeting() {
    console.log(this);
}

greeting();

// Principle 2
// code example for Implicit Binding
const khajiit = {
    pronoun: "Khajiit",
    plea: "innocent",
    accusation: "crimes",
    retort: function() {
        return `${this.pronoun} is ${this.plea} of these ${this.accusation}.`;
    }
}

khajiit.retort();

// Principle 3
// code example for New Binding
function Warning(threatened) {
    this.threatener = "you";
    this.speaker = threatened;
    this.action = "provoke me";
    this.threat = "unsheathe my claws";
    this.speak = function() {
        console.log(`If ${this.threatener} ${this.action}, ${this.speaker} will be forced to ${this.threat}.`)
    }
}

const khajiit = new Warning("I");

khajiit.speak();

// Principle 4
// code example for Explicit Binding
const khajMerch = {
    pronoun: "Khajiit",
    stock: "wares"
}

const buyer = [ "you", "have coin" ]

function barter(buyer1, buyer2) {
    console.log(`${this.pronoun} has ${this.stock} if ${buyer1} ${buyer2}.`);
}

// barter.call(khajMerch, buyer);
barter.apply(khajMerch, buyer);