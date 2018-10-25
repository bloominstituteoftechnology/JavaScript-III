/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If we are not using dot notation or using call(), apply(), or bind(), "this" will be the global object, which when working in a browser is the window. 
* 2. Implicit binding happens when we use dot notation to invoke a function.
* 3. New creates a new object and makes the "this" variable point to the new object.
* 4. Explicit binding happens when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding() {
    console.log(`Example of window binding: ${this}`);
}

windowBinding();


// Principle 2

// code example for Implicit Binding
const jedi = {
    name: 'Obi-Wan',
    weapon: 'Lightsaber',
    useLightsaber: function() {
        console.log(`${this.name} prepares to use his ${this.weapon}`)
    }
}

jedi.useLightsaber();


// Principle 3

// code example for New Binding
function Jedi2(person) {
    this.person = person;
    this.greeting = 'Hello I\m';
    this.speak = function() {
        console.log(`${this.greeting} ${this.person}.`)
    }
}

const anakin = new Jedi2('Anakin');
const maceWindu = new Jedi2('Mace Windu');

anakin.speak();
maceWindu.speak();


// Principle 4

// code example for Explicit Binding
const jedi3 = {
    name: 'Yoda'
}

const skills = ['Knowledge', 'Meditation', 'Strategy'];

function showOff(skills1, skills2, skills3) {
    console.log(`My name is ${this.name} and my skills are: ${skills1}, ${skills2}, ${skills3}.`);
}

showOff.call(jedi3, ...skills);
showOff.apply(jedi3, skills);
const shownOff = showOff.bind(jedi3, ...skills);
shownOff();
