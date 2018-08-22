/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When used alone "this" is a global object.
* 2. In Implicit binding "this" is the object. The owner of hte function. What comes after the dot is the property.
* 3. In new binding, using "new" we create an instance of the object with new.
* 4. Explicit binding is used to call an object method with another object as an argument.
*
* write out a code example of each explanation above
*/

// Principle 1
var x = this;

console.log(x);

// code example for Window Binding

// Principle 2
var imBind = {
  food : "apples",

whatsForDinner: function(name){
  console.log(`Would you like ${this.food} for dinner, ${name}`);
}}
console.log(imBind.whatsForDinner("Pascale"));
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function Outfit(type, style, color) {
  this.type = type;
  this.style = style;
  this.color = color;
  this.speak = function() {
    console.log(`I love my new ${this.color}, ${this.style} ${this.type}!!!!!`);

  };
}

var outfit1 = new Outfit('Dress', 'Vintage', 'Purple');
var outfit2 = new Outfit('Pantsuit', 'Modern', 'Black');

console.log(Outfit)
outfit1.speak();
outfit2.speak();
// Principle 4


// code example for Explicit Binding
