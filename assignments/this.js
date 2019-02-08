/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - this will have access to the window/global scope. 
* 2. Implicit Binding - this will have access to the object after the dot. (this.-function-).
* 3. New Binding - when a constructor function is used this refers to the object created by this function
* 4. Explicit Binding - when .call or .apply is used this explicitly points to the object it is set to. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function veggy(veg) {
    console.log(this);
    return veg;
}

veggy("carrot");

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