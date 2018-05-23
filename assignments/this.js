/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. To reference the window object when in a global scope
* 2. To call a method on a specific object or with a specific objects properties
* 3. In new binding this refers to an instance of an object (or it's properties) created from a constructor class
* 4. Explicit binding, "this" changes the context of a constructor object to an instance of that object when the methods .call and .apply are used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function exampleFunction(name) {
  console.log(name);
  console.log(this.name);
  console.log(this);
  return this.name;
}

exampleFunction("Alec"); //Logs name imput, undefined, then window object
// Principle 2

// code example for Implicit Binding
const myObj = {
  "location": "Stockholm",
  logLocation: function() {
    console.log("Location is", this.location);
    return this.location;
  }
}

myObj.logLocation();
// Principle 3

// code example for New Binding
function PersonWhoIsGreeting(oneReceivingGreeting) {
  this.check = "All good"
  this.greeting = "How do you do,";
  this.oneReceivingGreeting = oneReceivingGreeting;
  this.greet = function() {
    console.log(this.greeting, this.oneReceivingGreeting);
    return (this.check);
  }
}

const doorman = new PersonWhoIsGreeting("my honored guest?");
doorman.greet();
// Principle 4

// code example for Explicit Binding
const me = {
  "name": "Alec",
  "message": "Sensing a theme?",
  "hidden return": "whatever",
  "hidden code": "raspberry"
}

const alsoMe = {
  "name": "still Alec",
  "message": "This is still working",
  "hidden return": "I need quokka"
}

const introduce = function(item1, item2, item3) {
  console.log(`My name is ${this.name} and I like ${item1}, ${item2} and ${item3}`)
  console.log(this.message);
  return this["hidden return"];
}

let items = ["IKEA", "Volvos", "Coffee"];
let otherItems = ["pizza", "basketball", "lifting"];

introduce.call(me, ...items);

let anotherIntroduction = introduce.bind(alsoMe, ...otherItems);

anotherIntroduction();
