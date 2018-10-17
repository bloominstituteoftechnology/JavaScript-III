/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding occurs when no other has been explicity assigned.

* 2. Implicit is automatic binding in object methods.

* 3.  Explicit binding of occurs when you are explicity passing in a `this` context to 
      call(), or apply().
      
* 4. Default binding refers to how `this` is the global context whenever a function is      invoked without any other rules.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet() {
    'use strict'
    console.log('hi');
}

// Principle 2

// code example for Implicit Binding
const marvel = {
    name: 'Thanos',
    power: 'Infinte Stones',
    speak: function() {
        console.log(`I am ${this.name} and I come for thee ${this.power}!`);
    }
}

// Principle 3

// code example for New Binding
function Avengers(hero) {
    this.hero = hero;
    this.superpowers = 'Elemental';
    this.speak = function() {
        console.log(`I'm ${this.hero} and my power is ${this.superpowers}`);
    }
}

const blankman = new Avengers('BlankMan')

// Principle 4

// code example for Explicit Binding
const villian = {
    name: 'Ultron'
}

const abilities = ['Uplink to any tech', 'Unlimited strength', ];

function takeover(abilities) {
    'use strict'
    console.log(`${this.name} I'\m here to conquer Earth no need to try and stop me here are my powers ${this.abilities}`)
}