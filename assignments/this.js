/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: 'this' points to the window if you don't have it pointing to anything specific in your code.
* 2. Implicit Binding: binding happens automatically whether we like it or not. Used for objects
* 3. Explicit Binding: 'this' used in functions 
* 4. New Binding: creates new objects from scratch
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function window() {
    console.log(this);

}



// Principle 2
// code example for Implicit Binding
const ninja = {
    name: 'Andrew',
    weapon: 'pizza',
    stealth: '40%',
    command: function(){
        console.log(`${this.name} attacks with ${this.stealth} stealth using ${this.weapon}`);
    }
}



// Principle 3
// code example for New Binding
function Ninja(name) {
    this.name = name;
    this.weapon = 'Pizza';
    this.stealth = '40%';
    this.speak = function(){
        console.log(`I ${this.name} eat ${this.weapon} at ${this.stealth}! Hiya! `)
    }
}
const andrew = new Ninja('Andrew')

andrew.speak();


// Principle 4
// code example for Explicit Binding

const person = {
    name: 'Andrew',
    weapon: 'pizza',
    stealth: '40%',
}

const hobbies = ['boating', 'cooking', 'eating'];

function introduce(hobbies1, hobbies2, hobbies3){
  "use strict"
    console.log(`Hallo! my name is ${this.name} and these are my hobbies: ${hobbies1}, ${hobbies2}, ${hobbies3}`)
}

introduce.call(person, ...hobbies);
introduce.apply(person, hobbies);


const forLater = introduce.bind(person, ...hobbies);

forLater();