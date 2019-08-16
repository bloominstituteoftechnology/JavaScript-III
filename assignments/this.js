/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding refers to the entire environment from which JS acesses/controlled or influences.
* 2. Implicit Binding just means "this" keyword controlles this object specifically by prefacing the object name with a dot.
* 3. New Binding is used with Constructor functions because the function has not yet been declared thus it needs to have an after the fact scope.
* 4. Explicit binding is used in situations where the constructor function needs to be overidden.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window/Global Object Binding
// code example for Window Binding

function randomFunc(item) {
  console.log(this);

  randomFunc(item);
}
//Calling "this" inside this random function has no restraints or specific bindings,
//thus its scope is absolute to all JS inside the Window//

// Principle 2
// Implicit Binding
// code example for Implicit Binding
const MyObject = function (){
   this.name = 'Pepperocinis';
   this.myProperty = 'property';
 };

 MyObject.prototype.echoIt = function (action) {
   console.log(this.name + ' are ' + action + '!');
 };

 let obj = new MyObject();

 obj.echoIt('amazing');

// Principle 3
// New binding
// code example for New Binding
function StreetVendor(greeter) {
  this.greeting = 'Hi Friend ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const Luis = new CordialPerson('Luis');
const customer = new CordialPerson('Customer');

jerry.speak();
newman.speak();


// Principle 4B
// Explicit Binding
// code example for Explicit Binding

const yourObject = {
  name: 'Jeremy McGrath',
  city: 'Beaverton OR',
  favoriteFood: 'Street tacos'
};

const thingsYouEnjoy = ['Surfing', 'Reading', 'Snowboarding', 'Fishing', 'Movies', 'Music'];

function tellUsAboutYourself(thing1, thing2, thing3){

  console.log(`Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`);
}
