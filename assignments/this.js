/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When "this" is used globably it will affect the window object. 
* 2. Implicit Binding - Used with dot notation, "this"'s context is whatever is to the left of the dot. 
* 3. New Binding - Used with a constructor function.  "This" makes sure the object properties are used correctly when creating a new object.
* 4. Explicit Binding - Used with .call, .apply, or .bind this is called explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
let baseballPlayer = {
    name: 'Greg Maddux',
    position: 'Starting Pitcher',
    number: 31,
    announcePlayer: function() {
        console.log(`Now playing number ${this.number} ${this.name}.`);
    }
}

baseballPlayer.announcePlayer();

// code example for Implicit Binding

// Principle 3
function Player(obj) {
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.position = obj.position;
    this.battingOrder = obj.battingOrder;
    this.number = obj.number;
    this.announcePlayer = function() {
        console.log(`Batting ${this.battingOrder} and playing ${this.position} number ${this.number} ${this.firstName} ${this.lastName}.`);
    }
}

let MikeTrout = new Player ({
    firstName: 'Mike',
    lastName: 'Trout',
    battingOrder: '3rd',
    number: 27,
    position: 'Center Field',
})

MikeTrout.announcePlayer();
// code example for New Binding

// Principle 4
const positionsPlayed = ['First Base', 'Third Base', 'Starting Pitcher'];

const me = {
    name: 'Alex Martin',
}

function playerIntroduction(pos1, pos2, pos3) {
    console.log(`Hello, my name is ${this.name} and I play ${pos1}, ${pos2}, and ${pos3}.`);
}

playerIntroduction.apply(me, positionsPlayed);
// code example for Explicit Binding