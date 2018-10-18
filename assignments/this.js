/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window binding points to the window or global object
* 2.  implicit binding automaticly points to the object it is in
* 3.  explicit binding sets the binding to point to a specific object
* 4.  the new binding the constructing function this referse to the object it is being created in
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this, "\n principle 1");

// Principle 2

// code example for Implicit Binding
const me = {
  name: "Dennis",
  speak: function() {
    console.log(`My name is not ${this.name}`, "\n principle 2");
  }
};
me.speak();

// Principle 3

// code example for New Binding
function Car(traits) {
  this.name = traits.name;
  this.maxSpeed = traits.maxSpeed;
  this.size = traits.size;
  this.color = traits.color;
  this.generation = traits.generation;
  this.nickName = traits.nickName;
}

Car.prototype.info = function() {
  console.log(
    `This car is a ${this.generation} ${this.name} and we call it ${
      this.nickName
    }, isn't she so pretty with her ${this.color} color.`,
    "\n principle 3"
  );
};

const skyline = new Car({
  name: "skyline",
  maxSpeed: "really fast",
  size: "mid",
  color: "Pearl White",
  generation: "GTR 35",
  nickName: "Godzilla"
});

skyline.info();

// Principle 4

// code example for Explicit Binding
function Van(attributes) {
  Car.call(this, attributes);
  this.type = attributes.type;
}

const aeroStar = new Van({
  name: "AeroStar",
  maxSpeed: "really slow",
  size: "big",
  color: "dirty black",
  generation: "old",
  nickName: "DeathStar",
  type: "ugly car"
});

console.log(aeroStar, "\n principle 4");
