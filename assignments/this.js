/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Accessing the forest of javascript.
 * 2. (Automatic) Look to the left of the invocation and there you will find your this keyword.
 * 3. (WE Control) Like if we're manually walking to every tree we're referring to.
 * 4. Use for later.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function wall() {
    "use strict"
    console.log(this);
}

wall();

// Principle 2
// code example for Implicit Binding
const tree = {
    name: 'Evergreen',
    noise: 'Thud',
    fall: function () {
        console.log(`${this.name} falls and makes a loud ${this.noise}`);
    }
}
tree.fall();

// Principle 3
// code example for Explicit Binding
const bread = {
    name: 'buttermilk bread'
}

const cheese = ['cheddar', 'mozarella', 'pepper-jack']

function grilledCheese(cheese1, cheese2, cheese3) {
    "use strict";
    console.log(`This grilled cheese is made using ${this.name} and filled with ${cheese1}, ${cheese2}, ${cheese3}.`);
}

grilledCheese.call(bread, cheese);

// Principle 4
// code example for New Binding
const snack =
    grilledCheese.bind(bread, cheese);
snack();