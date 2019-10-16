/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: points to the obj. on which the function is called
* 2. Explicit Binding: We can explicitly tell the JS engine to set 'this' to point a certain value using call, apply, or bind
* 3. Global: is the global obj. in a  non strict mode. & undefined in a strict mode
* 4. new Binding: Using the new keyword constructs a new obj. & 'this' points it.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding (global)
console.log(this);
const allThis = function () {
    console.log(this);
    this.somethingg = "hiya";
}
allThis();
// Principle 2
// code example for Implicit Binding
const dog = {
    name: 'sparky',
    age: 3,
    food: 'donuts',
    activity: function (){
        return `${this.name} loves to eat ${this.food}, since he has just turned ${this.age}`;
    }
}
console.log(dog.activity());


// Principle 3
// code example for New Binding
function Skateboards (color, model, year){
    this.color = color;
    this.model = model;
    this.year = year;
}
var skateboads1 = new Skateboards('electric blue', 'zig zagger', 2011);
var skateboads2 = new Skateboards('bright purple', 'baker', 2010);
var skateboads3 = new Skateboards('lovely lilac', 'death wish', 2014);
console.log(skateboads1);
console.log(skateboads2);
console.log(skateboads3);
// Principle 4
// code example for Explicit Binding

const sponge ={
    name: "Spongebob"
}
const star ={
    name: "Patrick Star"
}
function whatsUp(passion1, passion2, passion3){
    return `eeee!! my name is ${this.name} and the activities that bring me joy are ${passion1}, ${passion2} and ${passion3}`;
}
console.log(whatsUp.call(sponge, 'jellyfish', 'the Krusty Krab', 'Krabby Paddies'));

const starPassions = ['sleeping', 'eating', 'hanging with spongebob'];
console.log = (whatsUp.apply(star, starPassions));

const Spongebob = whatsUp.bind(sponge, 'jellyfish', 'the Krusty Krab', 'Krabby Paddies');
// console.log(Spongebob());