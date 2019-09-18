/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if no other rules apply, the "This" keyword defaults to the window object (gloab object in Node) unless you use strict, which will give undefined.
* 2.  implicit binding is automatic when function is invoked. refers to what is left of .
* 3.  Explicit binding  is when we can tell the JS engine to set "this" to a certain value with either Call, Apply, or Bind.
* 4.  Bind - used to create a new function that is permanently bound to a "this" value.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//'use strict';
/* function eat()
{
    console.log(this.food);
}
const food ="Apple"; 

eat();*/   //food is undefined.

// Principle 2

// code example for Implicit Binding

let basketballPlayer = {
    name: 'Joe',
    number: 2,
    shoot: '3 points',
    score: function(){
        console.log(this.shoot);
    }
    }
    basketballPlayer.score();

// Principle 3

// code example for New Binding

function thirsty(){
    console.log(`Takes a drink of ${this.drink}`);
}

let person = {
    name: 'Jerems',
    drink: 'Dewski'
}

drinks = thirsty.bind(person);
drinks();

// Principle 4

// code example for Explicit Binding

function fishing(){
    console.log(`You caught a ${this.caught}`);
}
let goFishing = {
    caught: 'trout'
}

fishing.call(goFishing);