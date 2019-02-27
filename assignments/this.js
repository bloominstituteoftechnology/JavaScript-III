/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding is a catch all of sorts. If you forget to use the this keyword it will resort to the browser.
* 2.  Implicit Binding is when you invoke a function using dot notation.
* 3.  New Binding is using the word new when creating a new object. 
* 4.  Explicit Binding is when you use a method on a function like .call() or .bind()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function weather() {
    console.log(this);
}

weather();

// Principle 2

// code example for Implicit Binding

const myth = {
    name: 'Asteria',
    creature: 'Starwolf',
    likes: 'running with the stars',
    greet: function () {
        console.log(`My name is ${this.name}. I am a ${this.creature}. I also like ${this.likes}!`)
    }
}

myth.greet();

// Principle 3

// code example for New Binding

function darkSidersIiI(char) {
    this.char = char;
    this.charGreeting ='hello';
    this.speak = function () {
        console.log(`${this.charGreeting}, I'm ${this.char}.`);
    }
}

const fury = new darkSidersIiI('Fury');

console.log(fury);
fury.speak();

// Principle 4

// code example for Explicit Binding


const character = {
    name: 'Melody Pond'
};

const talents = {
    talents1: 'help the Doctor', 
    talents2:'navigate the TARDIS',
    talents3: 'get in trouble'}

function intro() {
    console.log(`Hi I am ${name}, and I ${talents.talents1}, along with ${talents.talents2}. I also tend to ${talents.talents3}.`);
}

intro();