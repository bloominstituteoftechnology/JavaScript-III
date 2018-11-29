/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When this is used in the global or window the value will be the window/console Object
* 2. When used prior to a function and includes a dot its value will be based on the scope of the function it resides within
* 3. Constructor Functions allow for new bindings and will refer to the specific instance of the ojbect. 
* 4. When ever .call or .apply is used it is considered to be Explicity Bound.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function veggy(veg) {
    console.log(this);
    return veg;
  }
  veggy("Carrot");



// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Nick Kruger');



// Principle 3
// code example for New Binding

function home(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const al = new home('Tim');
  const tim = new home('Al');
  
  al.speak();
  tim.speak();

// Principle 4
// code example for Explicit Binding

tim.speak.call(al); al.speak.apply(tim);