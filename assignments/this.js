/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding is when 'this' is inside the windows object. 
* 2. Implicit Binding is the most often used. Implicit Binding is left of the dot at call time. 
* 3. New binding is when we use a constructor function to bind this with the New keyword. The this keyword is then bound to the object constructed. 
* 4. Explicint binding is using Javascript's call methods, such as call, apply, or bind, to define our objects. 
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding


// code example for Window Binding
function student(id) {
    console.log(this);
    return id;
}
student(23); //?

// Principle 2 - Implicit Binding
const newStudent = {
    greeting: 'hello',
    name: 'tyler',
    sayHi: function(lastName) {
        return `${this.greeting}, my name is ${this.name} ${lastName}`
    }
}

newStudent.sayHi('durbin'); //?

// Another example
const sayNameMixin = function(obj) {
    obj.sayName = function() {
        return `${this.name}: ${this.age}`;
    }
}

const me = {
    name: 'Tyler',
    age: 15
}
const her = {
    name: 'claire',
    age: 18
}

sayNameMixin(me); //?
me.sayName(); //?

sayNameMixin(her);
her.sayName(); //?




// Principle 3 - New Binding
let Hero = function(trait, ability) { // This is creating the constructor function.
    this.trait = trait;
    this.ability = ability
    }


let link = new Hero('archer', 'shoot arrows');
link//?

function NicePerson(name) {
    this.name = name;
    this.greeting = "hi there";
    this.speak = function() {
        return `${this.greeting} , my name is ${this.name}`
    }
}

let elaine = new NicePerson('elaine');
elaine.speak();//?


// code example for New Binding

// Principle 4

// code example for Explicit Binding
const newPerson = function() {
    console.log(`My name is ${this.name}`);
}

const ted = {
    name: 'ted',
    weight: 154
}

newPerson.call(ted) //?

