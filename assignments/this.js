/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when this will be the value of the window.
* 2. Implicit binding is when a function is after a dot, the this is reffering to the object before the dot.
* 3. New binding is when a constructor function is made, this is reffering to the instances inside of the object.
* 4. Explicit binding is when a method(call, apply, bind) is used to define this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function callName(name) {
  return this.name;
}

console.log(callName('Lauren'));


// Principle 2

// code example for Implicit Binding
const me = {
  'name': 'Lauren',
  'age': 23,
  'iEat': function(good, bad) {
    return `${this.name} eats ${good}, but not ${bad}.`
  }
}

console.log(me.iEat('steak', 'brussel sprouts'));

// Principle 3

// code example for New Binding
function newObj(name, age, location) {
  this.name = name,
  this.age = age,
  this. location = location
}

const drake = new newObj('Drake', 20, 'LA');
console.log(drake);


// Principle 4

// code example for Explicit Binding

const carLot = {
  'name': 'Cars Galore',
  'location': '5th street'
}

const cars = ['Fords', 'Mustangs', 'Chevys'];

function introduction(car1, car2, car3) {
  return `We are ${this.name} and we sell ${car1}, ${car2}, ${car3}.`
}

console.log(introduction.apply(carLot, cars));