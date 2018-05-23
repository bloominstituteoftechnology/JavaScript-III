/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If function being invoked without call/apply/bind or anything left of it, it'll check the window object.
* 2. Implicit Binding - Determine by how the function is being invoked, applies to the left of the invoke.
* 3. New Binding - creating a new object by calling in the parameters of the function.
* 4. Explicit Binding - using 'this' keyword in a function located in the global scope, can be invoke by call(invoking the function with 'this'), apply(pass as an array), bind(pass off as another function to be used later)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const dogName = function(){
  console.log('My dog name is: ' + this.dogName);
};

const dogs = {
  dogName: 'Juno',
  dogBreed: 'Pembroke Welsh Corgi',
  dogAge: 2
};

dogName(); //calling the function without anything in parameter or object.
// Principle 2

// code example for Implicit Binding
const principle1 = {
  dogName: 'Juno',
  dogAge: 2,
  dogBark: function(){
    console.log(this.dogName);
  }
};

principle1.dogBark(); //calling a method inside an object

// Principle 3

// code example for New Binding
var Dogs = function(breed, color, bark){
  this.breed = breed;
  this.color = color;
  this.bark = bark;
};

var corgi = new Dogs('pembroke welsh corgi', 'tri-color', 'all the time'); //creating a new object

// Principle 4

// code example for Explicit Binding
const dogName = function(){
  console.log('My dog name is: ' + this.dogName);
};

const dogs = {
  dogName: 'Juno',
  dogBreed: 'Pembroke Welsh Corgi',
  dogAge: 2
};

dogName.call(dogs); //using the function to call a key within the object.
