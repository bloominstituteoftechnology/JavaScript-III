/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window:
        this will always point to window in this situation, and can be seen at the global scope or in an empty function.
* 2. Implicit:
        can only be accessed by the object before calling it using dot notation.
* 3.Explicit:
        used when you want to have both objects/functions seperated.
* 4.New Binding:
        accessed when creating an instance of an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
  // In global scope
  this.apple = {};
  // Inside an empty function
  function emptyFunc() {
    return this;
  }

// Principle 2
// code example for Implicit Binding
  const SpaceShip = {
    fuelType : 'Star Dust',
    fullFuel : true,
    amntEngines : 8,
    distanceOnFull : "42 billion light years",
    pplCapacity: 10802,
    runDiagnostics() {
      console.log(`All ${this.amntEngines} engines are operational`);
    }
  }
  SpaceShip.runDiagnostics();
// Principle 3
// code example for New Binding
  function Dog() {
    this.color = 'black';
  }
  const Lab = new Dog();
// Principle 4
// code example for Explicit Binding
function speak() {
  console.log(`${this.name} says Hi!`);
}

const person = {
        name : 'Fred'
}
speak.apply(person);
