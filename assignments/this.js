/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Binding
// It is the default binding when no other binding is made.

// code example for Window Binding
console.log(this);  // Window object

// Principle 2
// Implicit Binding
// It is the method binding that happen when the method is being invoked. 'this' binds to the object to the left of the dot (or left bracket) of the function being invoked

// code example for Implicit Binding
const catInTheHat = {
  name: 'The Cat in The Hat',
  jumpTo: function(object) {
    console.log(`${this.name} is jumping to the ${object}`);
  }
}

catInTheHat.jumpTo('moon'); // 'The Cat in The Hat is jumping to the moon', the 'this' binds to the catInTheHat object.


// Principle 3
// New Binding
// It is a binding created using the 'new' keyword when creating new object.

// code example for New Binding
function Car(model, make, year) {
  this.model = model;
  this.make = make;
  this.year = year;
}

const myCar = new Car('Sienna', 'Toyota', 2015);
console.log(myCar);

// Principle 4
// Explicit Binding
// It is when .bind, .call, or .apply is used to explicitly bind a function to an object.

// code example for Explicit Binding
function displayCar() {
  console.log(`My car is a ${this.year} ${this.make} ${this.model}`);
}

displayCar.call(myCar);  // My car is a 2015 Toyota Sienna