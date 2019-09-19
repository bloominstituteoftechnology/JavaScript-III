/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - this referes to what is left of the '.' when the fuction is called.
* 2. Explicit Binding - you state what the this keyword will be in the function
* 3. New Binding - when a function is call an function with the key work new in front it creats a new opject.
* 4. Window Binding - the this keyword refers to the window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);


// Principle 2
// code example for Implicit Binding
const roll = function(person){
 person.rollCall = function(){
     console.log(this.name)
 }
}
const aasa ={
    name: 'Aasa',
}
roll(aasa);
aasa.rollCall();


// Principle 3
// code example for New Binding

const BackPack = function (color, pockets,){
    this.color = color;
    this.pockets = pockets
    this.thePack = (`The ${this.color} backpack has ${this.pockets} pockets.`)
};

const aasaBackPack = new BackPack('blue', 'ten')
console.log(aasaBackPack.thePack)

// Principle 4
// code example for Explicit Binding

var favTeam = function(sport, team){
    console.log(`Im ${this.name} and my favorite ${sport} team is the ${team}!`);
};
var myName1 ={
    name: 'Aasa',
};
var myTeam = ['football','Cowboys' ];

favTeam.apply(myName1, myTeam)