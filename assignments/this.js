/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. A global binding the value of this will be in window.
* 2. Implicit binding uses dot notation.
* 3. Constructor function adds certain properties depending on function and prototype.
* 4. Added with the use of .call(), .apply(), or .bind().
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayYo (greet) {
    console.log(this);
    return greet;
}

sayYo('Hi');
// Principle 2

// code example for Implicit Binding
const lifeInsurance = {
    "name": 'Randy Calderon',
    "price": function(price) {
        console.log(`${this.name} paid ${this.price}`);
        console.log(this);
    }
};

lifeInsurance.price(1000);
// Principle 3

// code example for New Binding
function results(soccer, basketball) {
    this.soccer = soccer;
    this.basketball = basketball;
    this.teams = function() {
        console.log(`My favorite soccer team is ${this.soccer} and basketball team is ${this.basketball}.`);
        console.log(this);
    };
}

const favoriteTeams = new results('Chicago Fire', 'Detroit Pistons');
console.log(favoriteTeams.teams())
// Principle 4

// code example for Explicit Binding

