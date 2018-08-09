/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. new Binding
* 4. window Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.year = 2018;

function whatYearIsIt(){
    console.log(`The current year is ${this.year}.`);
}

whatYearIsIt();


// Principle 2

// code example for Implicit Binding

const car = {
    make: 'Porsche',
    model: '911 Turbo',
    color: 'black',
    startup(){
        console.log(`The ${this.make} ${this.model} goes 'VROOM VROOM!'`);
    }
}

car.startup();

// Principle 3

// code example for New Binding

function House (stories, material) {
    this.stories = stories;
    this.material = material;
}

const brickHouse = new House(3, 'brick');

console.log(`You see a ${brickHouse.stories} story house made out of ${brickHouse.material}.`)

// Principle 4

// code example for Explicit Binding

const plane = {
    model: 'A-10 Warthog'
}

function fire (){
    console.log(`The ${this.model} goes 'BRRRRRT!'`);
}

fire.call(plane);