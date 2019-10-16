/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
Global Binding - when no other rules apply, the value of this is the Window.

* 2. 
Implicit Binding - when the function is called and the object (this) is named to the left of a dot.

* 3. 
New Binding - When a constructor function is used.

* 4. 
*Explicit Binding - When a the call, apply or bind method is used to explicitly define 'this'.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayMyName(myName) {
    console.log(this);
    return myName;
  }
  sayName("Katrina");

// Principle 2

// code example for Implicit Binding

const greetingObj = {
    greeting: 'Hey yall',
    sayHello: function(myName) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  greetingObj.sayHello('Katrina');

  

// Principle 3

// code example for New Binding

function NiceGirl(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const beyonce = new NiceGirl('Beyonce');
  const kelly = new NiceGirl('Kelly');
  
  beyonce.speak();
  kelly.speak();

// Principle 4

// code example for Explicit Binding

beyonce.speak.call(beyonce);