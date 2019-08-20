/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  EXERCISE 0:

  Build an Airplane constructor that takes a name.
  Give airplanes the ability to take off and land.
  If a plane takes off, its "isFlying" property is true.
  If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:
  
  const myPlane = new Airplane('Jumbo');
  console.log(myPlane.name)              // 'Jumbo'
  console.log(myPlane.isFlying)          // false
  myPlane.takeOff();
  console.log(myPlane.isFlying)          // true
  myPlane.land();
  console.log(myPlane.isFlying)          // Jumbo
*/

/*

EXERCISE 1

- Build a Person Constructor that takes name and age.
- Give persons the ability to greet, returning a string stating name and age.
- Give persons the ability to eat edibles.
- When eating an edible, it should be pushed into a "stomach" property which is an array.
- Give persons the ability to poop.
- When pooping, the stomach should empty.

EXERCISE 2

- Build a Car constructor that takes model name and make.
- Give cars the ability to drive a distance.
- By driving a car, the driven distance should be added to an "odometer" property.
- Give cars the ability to crash.
- A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
- Give cars the ability to be repaired.
- A repaired car can drive again.

*/