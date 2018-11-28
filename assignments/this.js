/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default behavior, outside of any context (global scope) of "this".
* 2. Implicit Binding means that "this" will refer to whatever precedes the . of a function call.
* 3. New Binding takes effect when a constructor is used, "this" refers to the specific instance of the created object.
* 4. Explicit Binding takes effect when .call,  .apply , .bind are used to give a context to this. The arguments of those methods define what "this" will refer to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);  // logs the Window object to the console.

// Principle 2

// code example for Implicit Binding
const myObject = {
  "firstKey": "a first key",
  "secondKey": "a second key",
  "doSomething": function() {console.log(`Doing something with ${this.firstKey} and ${this.secondKey}`)}
}
myObject.doSomething();

// Principle 3

// code example for New Binding
function GoodPet(petName) {
  this.name = petName;
  this.task = 'Put fur in your house';
  this.doTrick = function() {
    console.log(`I am ${this.name} and I ${this.task}.`);
  };
}
const dog = new GoodPet('Fido');
const cat = new GoodPet('Paws');
dog.doTrick();
cat.doTrick();

// Principle 4

// code example for Explicit Binding
const dog2 = {
  name: 'Ralph'
}
const dog2Tricks = ['Eat', 'Sleep', 'Fetch'];

function goDogGo(dogTricks) {
  console.log(`This dog is called ${this.name} and can ${dogTricks[0]}, ${dogTricks[1]}, AND ${dogTricks[2]}!`);
}

const doDog = goDogGo.bind(dog2, dog2Tricks);
doDog();