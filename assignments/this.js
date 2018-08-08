/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is a way to specify the window of operation through the keyword this.
* 2. Implicit Binding features a way to invoke a funciton through dot notation.
* 3. New Binding invokes an object through the keword new.
* 4. Explicit Binding happens when you use .apply(), .call(), and .bind() on a funciton and pass the this keyword as a value.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.name);

// Principle 2

// code example for Implicit Binding
myObj.speak("Hello");

// Principle 3

// code example for New Binding
const raceCar = new Car();

// Principle 4

// code example for Explicit Binding
paintJob.call(raceCar, ...colors); 