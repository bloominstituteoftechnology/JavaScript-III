 //The for principles of "this";
/* in your own words. explain the four principle for the "this" keyword below.
//*
* 1. Window/Global binding -- when in global scope the value of this will be window/console object.
* 2. Implicit binding -- when function is called with a preceding dot the object before the dot is 'this'
* 3. New binding -- when a constructor function is used 'this' refers to the specific instance of the object that is 
    created and returned by the constructor function.
* 4. Explicit binding -- JS call or apply method is use/ 'this' is explicitly defined
*
 write out a code example of each explanation above*/


// Principle 1

// code example for Window Binding
let seeWindow = function() {
    console.log(this.windowPane);
};

let windowFrame = {
    windowPane: 'clear',
};

seeWindow();
//window.windowPane = 'dirty'; 
seeWindow();

// Principle 2

// code example for Implicit Binding
let sayHey =  {
    name: 'Jackee',
    sayHi: function() {
        console.log(`Hi ${this.name}!`);
    }
};
sayHey.sayHi();

// Principle 3

// code example for New Binding

let Reality = function(perception) {
    this.perception = perception;
};

let earthPlane = new Reality('black and white make grey');

console.log(earthPlane.perception);

// Principle 4

// code example for Explicit Binding

let sayWhere = function() {
    console.log(`im in ${this.place}!`);
};

let texas = {
    place: 'Texas'
};

sayWhere.call(texas);