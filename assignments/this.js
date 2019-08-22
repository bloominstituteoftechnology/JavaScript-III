/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is more or less getting an error (non-error) undefined when using the this keyword it just means that your binding should be in another location.

* 2. Implicit Binding is where it easy to tell what this is referring to simply by looking to the left of the . in the called function.

* 3. New Binding looks for the keyword of new in order to invoke this. So in the case of new binding this refers to information around the word new.

* 4. Explicit Binding is using one method to call out a function with the focal point being the first argument in the function.
*
* write out a code example of each explanation above
*/

// Principle 1

function infoWB (name, howKnown) {
    greet() 
    return (`Hello, I'm ${this.name} and I'm your ${this.howKnown}!`)
    };

    console.log (infoWB("Kara", "Self"));

// code example for Window Binding

// Principle 2
let infoIB = {
    name: 'Gretchen',
    howKnown: 'neighbor',
    greet () {
    return (`Hello, I'm ${this.name}! and I'm your ${this.howKnown}!`)
}};
console.log (infoIB.greet()); 

//friend is to the left of greet so friend is what this refers too being able to tell what this is invoking is Implicit Binding
// code example for Implicit Binding

// Principle 3



function InfoNB (name, howKnown) {
    this.name = name
    this.howKnown = howKnown
};

let myInfo = new InfoNB ("Kara", "Self");

console.log (`Hello I'm ${myInfo.name} and I'm your ${myInfo.howKnown}!`);

// code example for New Binding

// Principle 4

function greet() {
    return (`Hello, I'm ${this.name}! and I'm your ${this.howKnown}!`);
}
let infoEB = {
    name: 'Dale',
    howKnown: 'Husband',
}

console.log (greet.call(infoEB));
// code example for Explicit Binding