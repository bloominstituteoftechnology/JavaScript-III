/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding this points to the window
* 2. Implicit Binding this points to the object.
* 3. New Binding this points to the new object that's create which refences the origional obect it was created from.
* 4. Explicit Binding this points to the object properties that passed into the object/function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.name

// Principle 2

// code example for Implicit Binding

const thing = {
    'action': 'something',
    'do': function (){console.log(`I will do ${this.action}`)}
}
thing.do()

// Principle 3

// code example for New Binding
function Person () {
    this.action = 'everything',
    this.do = function (){console.log(`I will do ${this.action}`)}
}

const james = new Person
james.do()

// Principle 4

// code example for Explicit Binding

const animal = {
    'type': 'dog',
    'name': 'Scruff',
    'speak': 'bark'
}

function howSpeak () {
    console.log(`I'm a ${this.type} and I ${this.speak}!`)
}

howSpeak.call(animal)

