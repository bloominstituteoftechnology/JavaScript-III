/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
If nothing is bound to *this*, it will try to go to the window or global scope. The default for *this* when nothing is explicitely stated for it. 

* 2. Implicit binding
*This* is bound to whatever is to the left of the invocation (the left of the period or dot *.* is what provides the context for *this*).

* 3. New Binding
Used to bind *this* to new objects created by Constructor Functions. Binds *this* to the constructor function object. 

* 4. Explicit Binding
Explicit binding is when *this* is bound to a function method (using call(), apply() or bind()). You can use a functions *this* scope as the context when you call or apply (to array) it. Bind is used to store a *this* for later use.  

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const dog = {
  'name': 'Banksy',
  'toy1': "frisbee",
  'play': function(toy1) {
    console.log(`${this.name} can play with his ${toy1} and with his ${this.toy1}!`)
  }
}

dog.play('ball');

// Principle 3

// code example for New Binding

// constructor function: to build objects
function NewPuppy(name){
  this.name = name;
  this.shakegreeting = "lifts paw and shakes your hand";
  this.downgreeting = "bows head and lowers to ground";
  this.excitedgreeting = "jumps on top of you!";
  this.shake = function() {
    console.log(`${this.name} ${this.shakegreeting}.`)
  }
  this.down = function() {
    console.log(`${this.name} ${this.downgreeting}.`)
  }
  this.up = function() {
    console.log(`${this.name} ${this.excitedgreeting}`)
  }
}

// New binding and constructor functions are bread and butter
const banksy = new NewPuppy('Banksy');
const brooklyn = new NewPuppy('Brooklyn');
const kimura = new NewPuppy('Kimura');

banksy.shake();
brooklyn.down();
kimura.up();

// Principle 4

// code example for Explicit Binding

const HouseInfo = {
   'name': 'This little house'
 }

 const rooms = ['living room', 'dining room', 'bedroom'];


 function describehouse(room1, room2, room3){
   console.log(`${this.name} has a ${room1}, ${room2}, and 1 ${room3}.`)
 }

describehouse.call(HouseInfo, ...rooms);