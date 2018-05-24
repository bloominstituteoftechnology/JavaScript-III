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
function fruits () {
    console.log(this.fruit);
}

let fruit = 'apple';

fruits();

// Principle 2

// code example for Implicit Binding
var randy = {
    name: 'Randy',
    age: 25,
    likes: 'music'
    sayLikes: function() {
        console.log(this.likes);
    }
};

randy.sayLikes();
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

// Principle 4

// code example for Explicit Binding
function line() {
    console.log(this);
}

let newObj = {
    "name": "Randy",
    "age": "28",
    "location": "CA"
};

line.call(newObj);