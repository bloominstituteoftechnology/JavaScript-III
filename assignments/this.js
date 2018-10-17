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

function speak (word) {
    console.log(this)
    return word;
}

speak("Hello");

// Principle 2

// code example for Implicit Binding

const iceCream = {
    size: "Small",
    flavor: "Strawberry",
    explainOrder: function(order) {
        console.log(`Thank you for your order. You want a ${this.size} ${this.flavor}. Is this correct?`);
        console.log(this);
    }
};

// Principle 3

// code example for New Binding

let newBot = {
    name: 'Jasmine',
    greet: function () {
        console.log('Welcome to botworld' + ' '  +this.name);
    }
};

const jane = new newBot('jane');
const mike = new newBot('mike');

jane.greet;

// Principle 4

// code example for Explicit Binding

jane.greet.call(jane);
mike.greet.call(mike); 

