/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding. This, in the global scope, will refer to the window. It occurs when no other binding has been explicitly assigned. It is bad.
* 2. Implicit Binding is binding methods in objects.
* 3. Explicit Binding is used with functions. It is used to "explicitly" define the this keyword using .call() or .apply().
* 4. New Binding. You can create objects using a constructor function and the new keyword. You create a variable and assign it to an object using the 'new' keyword. Then you define all of the objects values.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function goodbye() {
    console.log(`Goodbye, ${this}`);
}
goodbye();

// Principle 2
// code example for Implicit Binding
const laptop = {
    name: 'MacBook Pro 13',
    size: 13,
    price: 'Too much',
    rating: 10,
    review: function (){
        console.log(`The ${this.name} is a ${this.size} inch laptop with a perfect ${this.rating}/10 rating, but it costs ${this.price}!`);
    }
}
laptop.review();

// Principle 3
// code example for New Binding
function NFLTeam(attributes){
    this.name = attributes.name;
    this.location = attributes.location;
    this.color = attributes.color;
    this.superBowls = attributes.superBowls;
}

const packers = new NFLTeam({
    name: 'Packers',
    location: 'Green Bay, Wisconsin',
    color: 'Green',
    superBowls: 4
})

console.log(packers);

// Principle 4
// code example for Explicit Binding
const player = {
    name: 'Lebron James'
}

const skills = ['Passing', 'Shooting', 'Defense'];

function describe(skills1, skills2, skills3){
    console.log(`${this.name} is the best player in the NBA. His best skills include: ${skills1}, ${skills2}, and ${skills3}.`);
}
describe.call(player, ...skills);