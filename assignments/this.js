/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This will bind to the window, without any other limitations
* 2. This will reference variables if used within a function, it is binded to the function
* 3. 
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
var multiplyBy15 ={
  "number" : "15",
  "multiply" : function(number){
    return this.number * number;
  }
}
// Principle 3

// code example for New Binding
function mathThis (number){
  this.num1 = 100;
  this.num2 = 20;
  this.mathIt = function(){
    return ((this.num1 + this.num2) + " " + (this.num1 - this.num2) + " " + (this.num1 * this.num2) + " " + (this.num1 / this.num2));
  }
}
// Principle 4
var dogInfo = {
  name: "tibby",
  breed: "corgi"
}
function printDogInfo (name, breed){
  return "This dog is a " + this.breed + " named " + this.name;
}
printDogInfo.apply(dogInfo);
// code example for Explicit Binding
