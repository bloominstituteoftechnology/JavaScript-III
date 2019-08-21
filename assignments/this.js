/* The four principles of "this";
 in your own words. explain the four principle for the "this" keyword below.

 1. Window/Global Obj Binding: When in the global scope, the value of 'this' will be the window/console object.

 2. Implicit Binding: whenever a function is called by a preceding dot, the object before the dot is 'this'.

 3. Explicit Binding: Whenever JS call or apply method is used, 'this' is explicitly defined.

 4. New Binding: whenever a constructor function (i.e. a function that returns an object) is used, 'this' refers to the specific instance of the object
                  that is created and returned by the constructor function.

 write out a code example of each explanation above
*/
//--------------------------------------------------------------------------------------------------------------------------------------------
// Principle 1
// code example for Window Binding
function windowBinding() {
  console.log(this.test);
}
windowBinding(); //invoking windowBinding
const test = "Testing msg";
//--------------------------------------------------------------------------------------------------------------------------------------------
// Principle 2
// code example for Implicit Binding
const implicitBinding = {
  name: "Implicit Binding",
  age: "today",
  message: function() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  }
};
implicitBinding.message(); //invoking message
//--------------------------------------------------------------------------------------------------------------------------------------------
// Principle 3
// code example for New Binding
function Food(favourite) {
  this.cusine = favourite;
}

let myFavouriteFood = new Food("Tacos");

console.log(`My favourite food is ${myFavouriteFood.cusine}`); //invoking log

//--------------------------------------------------------------------------------------------------------------------------------------------
// Principle 4
// code example for Explicit Binding
function cat() {
  console.log(this.sound);
}

let myCat = {
  name: "ZoZo",
  sound: "meoooow!"
};
cat.call(myCat); // invoking call

//--------------------------------------------------------------------------------------------------------------------------------------------
