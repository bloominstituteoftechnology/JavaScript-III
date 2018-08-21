/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window: when used outside a function 
* 2. implicit: refering to the object withing the object.
* 3. new: creating new key:value pairings based on the custom labels we make later on.
* 4. explicit: .call, .apply, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1: window
// code example for Window Binding
function saySomething(){
    console.log(this)
  };

// Principle 2: implicit
// code example for Implicit Binding
let person = {
    name: 'Chris Juelfs',
    age: 25,
    gender: 'Male',
    aboutMe: function() {
        return `Hello my name is ${this.name} and i'm a ${this.age} yrs old ${this.gender}.`
    };
};

console.log(person.aboutMe());

// Principle 3: new
// code example for New Binding
function Shape(obj) {
    this.name = obj.name;
    this.sides = obj.sides;
    this.stateSides = function() {
        return `A ${this.name} has ${this.sides} sides.`
    };
};

let Triangle = new Shape({
    name: 'Triangle',
    sides: 3
});
console.log(Triangle.stateSides());

// Principle 4: explicit
// code example for Explicit Binding
const chris = {
    name: 'Chris'
};
const interests = ['Video Games', 'Disc Golf', 'Coding'];
function aboutMe(a, b, c) {
    return `Hello my name is ${this.name} and my interests are ${a}, ${b}, ${c}.`
};
console.log(aboutMe.apply(chris, interests));