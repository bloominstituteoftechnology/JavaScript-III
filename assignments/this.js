/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - context is implied as the object to the left of the dot
* 2. Explicit Binding - context is referenced using functions/methods such as call, apply, bind
* 3. New Binding - context is the object being instantiated
* 4. Window/Global Object Binding - context not clearly defined (defaults to window object)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myFirstFunction() {
  return this;
}

myFirstFunction();

// Principle 2

// code example for Implicit Binding
const myFirstObj = {
  myFirstProp: 30,
  myFirstMethod: function() {
    return this.myFirstProp;
  }
};

console.log(myFirstObj.myFirstMethod());

// Principle 3

// code example for New Binding
function myFirstConstructor() {
  this.mySecondProp = 59;
}

let mySecondObj = new myFirstConstructor();
console.log(mySecondObj.mySecondProp);

// Principle 4

// code example for Explicit Binding
function mySecondConstructor(myFirstParam, mySecondParam) {
  return this.myThirdProp + this.myFourthProp + myFirstParam + mySecondParam;
}

const myThirdObject = { myThirdProp: 1, myFourthProp: 3 };

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
console.log(mySecondConstructor.call(myThirdObject, 5, 7));
