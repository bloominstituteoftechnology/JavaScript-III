/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding occurs when the 'this' keyword is invoked outside of the context of a defined object. In a browser, this context would be the Window. 
* 2. Implicit binding occurs when 'this' is invoked as part of a function that is called using dot notation. The context is the object to the left of the dot. 
* 3. Explicit binding occurs when 'this' is invoked as part of a function upon which .call, .apply, or .bind are used. 
* 4. New binding occurs when a constructor function is used to create a new object. The context is the specific instance of the object that is created by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

function windowExample () {
    console.log(this);
} 

windowExample(); // logs Window due to window binding

// Principle 2

let implicitSandwich = {
    bread: 'Wheat',
    meat: 'Turkey',
    spread: 'Mayo',
    toast: function() {
        console.log(`Ding! ${this.bread} bread is toasted!`)
    }
}

implicitSandwich.toast(); //logs Wheat bread is toasted! due to implicit binding

// Principle 3

function NewSandwich(bread, meat, spread) {
    this.bread = bread;
    this.meat = meat;
    this.spread = spread;
    this.toast = function () {
        console.log(`Ding! ${this.bread} bread is toasted!`)
    }
}

let BeefWithMustard = new NewSandwich('Rye', 'Roast beef', 'Mustard');

BeefWithMustard.toast(); //logs Rye bread is toasted! due to new binding

// Principle 4

function switchBread(betterBread) {
    console.log(`Switched ${this.bread} for ${betterBread.bread}`)
}

let PBAndJ = {
    bread:'White',
    meat: 'None',
    spread: 'Peanut butter and jelly'
}
  
switchBread.call(PBAndJ, BeefWithMustard); // logs Switched White for Rye