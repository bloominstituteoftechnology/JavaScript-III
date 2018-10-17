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
function windowBinding(){
    console.log(`Hello, I am the window, ${this}`);
}

windowBinding();

// Principle 2

// code example for Implicit Binding
const jedi = {
    name: 'Luke',
    weapon: 'Lightsaber',
    swing: function() { console.log(`${this.name} swings his ${this.weapon}`) }
}

jedi.swing();

// Principle 3

// code example for New Binding
function Jedi2(person) {
    this.person = person;
    this.greeting = 'Hello I\'m';
    this.speak = function() {console.log(`${this.greeting} ${this.person}.`)}
}

const maceWindu = new Jedi2('Mace Windu');
const yoda = new Jedi2('Yoda');

maceWindu.speak();
yoda.speak();

// Principle 4

// code example for Explicit Binding
const jedi3 = {
    name: 'Anakin'
}

const skills = ['Meditation', 'Fighting', 'Knowledge'];

function introduce(skills1, skills2, skills3) {
    console.log(`Hello, my name is ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`)
}

// introduce.call(jedi3, ...skills);
// introduce.apply(jedi3, skills);
const introduction = introduce.bind(jedi3, ...skills);
introduction();