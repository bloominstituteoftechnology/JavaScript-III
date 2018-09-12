/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Needs to be bound to something, otherwise it'll go to he window
* 2. Implicit Binding: Wwhatever is to the left of the dot is the context.
* 3. New Binding: 
* 4. Explicit Binding:
*
* write out a code example of each explanation above
*/

// Principle 1
function sayHello(greeting) {
    console.log(this);
    return greeting;
  }
  sayName("Hello!");
// code example for Window Binding

// Principle 2
const imp = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  imp.sayHello('Phil');
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding