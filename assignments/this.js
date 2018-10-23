/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: By default, in a global scope, this refers to the window
* 2. Implicit Binding: In implicit binding this refers to what is left of the dot
* 3. New Binding: In a constructor function this will refer to object that is created/returned from the contructor function
* 4. Explicit Binding: When using .call and .apply, 'this' is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
  console.log(this); // logs Window
  return name;
}

console.log(myName("Xavier")); //logs Window, but returns "Xavier"

// Principle 2

// code example for Implicit Binding
const me = {
  name: 'Xavier',
  age: 25,
  major: 'Computer Science',
  introduction: function() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old, and I'm majoring in ${this.major}`); // 'this' refers to the 'me' object
  }
}

me.introduction();

// Principle 3

// code example for New Binding
function GalaxyClassification(name, type) {
  this.name = name,
  this.type = type,
  this.summary = function(){
    console.log(`The ${this.name} is classified as a/an ${this.type} galaxy.`);
  }
}

const milkyWay = new GalaxyClassification('Milky Way', 'Spiral');
const cartwheel = new GalaxyClassification('Cartwheel', 'Irregular');

milkyWay.summary();
cartwheel.summary();

// Principle 4

// code example for Explicit Binding
function hubbleClassification(hubbleClass){
  milkyWay.summary();
  console.log(`Also classified as a/an ${hubbleClass} type galaxy, under the Hubble Classification Scheme.`);
}

hubbleClassification.call(GalaxyClassification, 'Sb');
