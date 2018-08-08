/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" by default references the Window.
* 2. "this" in implicit is referencing the what you define as "this".
* 3. New is copying the properties and methods into a new object and "this" is being used to define that particular object.
* 4. "this" in explicit is referencing the what you define as "this" as a parameter. ie: introduce.call(obj);
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.skyColor = "blue";

function defineSkyColor(param1) {
    console.log(this.skyColor);
}

// Principle 2

// code example for Implicit Binding
const clouds = {
    "name": "cloud1",
    "color": "blue",
    "puffiness": 6,
    "move": function() {
        console.log(`${this.name} moved left by 6 feet`);
    }
};

clouds.move();

// Principle 3

// code example for New Binding

function Character(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.race = attributes.race;
}

Character.prototype.speak = function() {
    console.log(`Hello, I am ${this.name}`);
};

Character.prototype.info = function() {
    console.log(`${this.name} is ${this.age} and is ${this.gender} with a race: ${this.race}`);
};

const Elfe = new Character({
    "gender": "F",
    "age": 400,
    "name": "Elfe",
    "race": "Elvish"
});

Elfe.speak();
Elfe.info();

// Principle 4

// code example for Explicit Binding

const plane = {
    "name": "RT-134",
    "height": 400
}

const passengers = 200;

function info() {
    console.log(`${this.name} has ${passengers} passengers and is ${this.height} feet high.`);
}

info.call(plane, passengers);