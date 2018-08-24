/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever the call or apply method is used, this is better defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function closedwindow() {
  console.log(this);
}

setTimeout(function() {
  console.log(this);
}, 50);

// Principle 2

// code example for Implicit Binding

let car = {
  model: "Mustang GT",
  myride: function() {
    return `I drive a ${this.model} and I should have bought an SUV`;
  }
};

car.myride();

// Principle 3

// code example for New Binding

function Character(obj) {
  this.sports = obj.sports;
  this.school = obj.school;
  this.year = obj.year;
  this.declare = function() {
    return `I watch a lot of ${this.sports}, I believe that ${
      this.school
    } University will win the ${this.year} NCAA tournament!`;
  };
}
const dukies = new Character({
  sports: "college basketball",
  school: "Duke",
  year: 2019
});
console.log(dukies.declare());

// Principle 4

// code example for Explicit Binding

const Marcus = {
  name: "Marcus"
};

const sports = ["College Basketball", "NFL", "NBA"];
function introduce(sport1, sport2, sport3) {
  return `My name is ${
    this.name
  } and my favorite sports to watch include: ${sport1}, ${sport2}, and ${sport3}.`;
}

introduce.apply(Marcus, sports);

const mysports = introduce.bind(Marcus);
mysports("College Basketball", "NFL", "NBA");
