/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this is bounded to the global window object
* 2.  this binds to the last object literral within scope.
* 3. binds this to each new object created.
* 4. this binds to a given peramiter.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let windowExample = () => console.log(this);
windowExample();
// Principle 2

// code example for Implicit Binding
let vehicle = {
    make: 'Ford',
    model: 'F350',
    year: '2006',
    whatAreYou: function(){
        return `${this.year} ${this.make} ${this.model}!`;
    }
}
console.log(vehicle.whatAreYou());
// Principle 3

// code example for New Binding
function specificVehicle(owner, make, model, year){
    this.owner = owner;
    this.make = make;
    this.model = model;
    this.year = year;
    this.whatAreYou = function(){
        return `${this.owner}'s ${this.year} ${this.make} ${this.model}!`;
    }
}

const myTruck = new specificVehicle('Brandon', 'Ford', 'F350', 2006);

console.log(myTruck);
console.log(myTruck.whatAreYou());
// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Brandon'
}
const dislikes = ['spiders', 'cats', 'boredom']

function intro(dislike1, dislike2, dislike3){
    return `My name is ${this.name} and I dislike ${dislike1}, ${dislike2}, and ${dislike3}!`
}

const savedIntro = intro.bind(person, ...dislikes);
console.log(savedIntro());