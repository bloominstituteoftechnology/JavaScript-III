/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - when this is not bound to anything, it will default to the window object.
* 2. Implicit Binding - when a property is located inside of an object, it points to the parent object which is usually to the left of the dot at call time
* 3. Explicit Binding - when we specifically specify what this is using call, apply, bind
* 4. New Binding - when we use a constructor function to create a new object
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const tim = {
  'name': 'Tim',
  'browser': this.browser,
}
tim["browser"] = "Chrome";

tim.browser;

// Principle 2
// code example for Implicit Binding
const me = {
  name: 'Tim',
  class: 'CS13',
  sayName: function() {
    console.log(this.name);
  }
}

me.sayName();

// Principle 3
// code example for New Binding
const Attraction = function(name, location) {
  this.name = name;
  this.location = location;
}

let pipila = new Attraction('Monumento de Pipila', 'Guanajuato, Mexico');

pipila.name;
pipila.location;

// Principle 4
// code example for Explicit Binding
const sayName = function() {
  console.log('My name is ' + this.name);
};
const sayName2 = function(...languages) {
  console.log('My name is ' + this.name + ' with skills in ' + languages);
};

const Tim = {
	'name': 'Tim',
  'class': 'CS13',
}

const languages = ['html', 'css', 'less'];

// Call
sayName.call(Tim);

// Apply
sayName2.apply(Tim, languages);

// Bind
const newFn = sayName.bind(Tim);
newFn();