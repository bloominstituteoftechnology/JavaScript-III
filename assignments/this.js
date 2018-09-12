/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - without a local-scope object to bind to, 'this' defaults to binding to the global Window object.
* 2. Implicit binding - when we use 'this' within a local code context, it will automatically bind to the object directly to its left.
* 3. New binding - 'this' binds to instances of an object that are created using 'new'
* 4. Explicit binding - using .call, .apply, and .bind, we can manually set the context for 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const JS = {
    'name': 'JavaScript',
    'features': ['objects', 'constructors', 'prototypes', 'this'],
    'displayFeatures': function() {console.log(`${this.name} includes ${this.features}`)}
}

JS.displayFeatures();

// Principle 3

function Building(materials) {
    this.walls = 4;
    this.materials = materials;
    this.windows = 'glass';
}

const hotel = new Building('steel');
const home = new Building('bricks');

console.log(hotel);
console.log(home);

// Principle 4

const games = ['red dead redemption', 'witcher: wild hunt', 'halo: reach', 'skyrim']
const player = {
    'name': 'Lola'
}
function play(game1, game2, game3, game4) {
    console.log(`I'm ${this.name} and some of my favorite games are ${game1}, ${game2}, ${game3}, and ${game4}.`)
}

play.call(player, ...games);