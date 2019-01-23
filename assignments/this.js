/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: If a more specific use for 'this' does not exist. It will always point back to the window, which is the least specific scope.

* 2. Implicit Binding. Automatic binding that happens when dot notation is used to invoke!

* 3. New Binding. Using bind() to create a new function with this bound to it.

* 4. Explicit Binding. Specific binding using call() and apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const builder = {
    name: 'Dak',
    occupation: 'Builder',
    level: 'Level 1',
    skill: function() {
        console.log(`${this.name} is a ${this.level} ${this.occupation}.`);
    }
}

builder.skill();

// Principle 3

// code example for New Binding

let introScene1 = function() {
    console.log('Finally `${this.name}`... you/ "re awake!');
};

let dak = {
    name: 'Dak'
}

let introScene1 = introScene1.bind(dak);
introScene1(); // 'Finally Dak... you're awake!


// Principle 4

// code example for Explicit Binding


const healer = {
    name: 'Grimwell'
  }
  
  const spells = ['Heal', 'Bless', 'Cure'];
  
  function castHeal() {
    "use strict"
    console.log(`${this.name} cast ${spells[0]}!`);
  }
  
  castHeal.call(healer, spells);