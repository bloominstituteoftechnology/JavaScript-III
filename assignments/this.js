/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is in the global scope, it refers to the window
* 2. When called by a function with a dot, this points to whatever is to the left of the dot.
* 3. When this is in a constructor function, in points to the specific object that is created
* 4. Whenver call or apply are used, this is explicity defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Melanie");

// Principle 2

// code example for Implicit Binding

const myExample = {
    greeting: 'Hello',
    sayHello: function() {
        console.log(`${this.greeting}, how are you?`);
    }
}

myExample.sayHello();

// Principle 3

// code example for New Binding

function DoorGreeter(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      
    };
  }
  
  const Linda = new DoorGreeter('Mary');
  const Mary = new DoorGreeter('Linda');
  
  Linda.speak();
  Mary.speak();

// Principle 4

// code example for Explicit Binding

Linda.speak.call(Mary); Mary.speak.apply(Linda);