/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window global obeject bindng 
* 2. implicit binding
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWord(word) {
      console.log(this);
      return word;
    }
    sayWord("Da mo fo dm run 6");

// Principle 2

// code example for Implicit Binding

const myObj = {
      greeting: 'Hello',
      sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
      }
    };
    myObj.sayHello('devin');
    

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
      this.greeting = 'Hello ';
      this.greeter = greeter;
      this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
      };
    }
    
    const caylee = new CordialPerson('devin');
    const devin = new CordialPerson('caylee');
    
    caylee.speak();
    devin.speak();
// Principle 4

// code example for Explicit Binding

caylee.speak.call(devin); devin.speak.apply(caylee);