/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
When this is used on the global scale, it refers to the global (in the case of a browser, window) object

* 2. Implicit binding
This is the common binding for properties or functions created inside an object.  If they are called by using dot notation, the this refers to the object
to the immediate left of the dot of the property or function being called.

* 3. Explicit binding
this is bound specifically and clearly to an object by the call(), apply() or bind() methods.

* 4. New binding
Used within constructors to bind this to each individual instance of an Object returned by that constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
name = "crafty canary";
function windowExample() {
  let name = "silly kitty";
  console.log(this.name); //logs global name variable
  console.log(name); //logs local name variable
}
windowExample();
// Principle 2

// code example for Implicit Binding
const minor = {
  age: 12,
  timeTilDL: function() {
    return `Years until eligible for driver's license: ${16 - this.age}`;
  },
  timeTilAdult: function() {
    return `Years until legal adulthood: ${18 - this.age}`;
  }
}

console.log(minor.timeTilDL());
console.log(minor.timeTilAdult());

// Principle 3

// code example for New Binding

const Aura = function(attributes) {
  this.name = attributes.name;
  this.mood = attributes.mood;
  this.color = attributes.color;
  this.tell = function() {
    return `My name is ${this.name}, I'm ${this.mood}, and my aura is ${this.color}.`
  }
}

const willow = new Aura({
  name: "Willow",
  mood: "cranky",
  color: "army green"
})

console.log(willow.tell());

// Principle 4

// code example for Explicit Binding
