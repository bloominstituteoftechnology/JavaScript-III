/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in global scope, the value of 'this' will be the window/console Object
* 2. Implicit binding: whenever a function is called by a preceding dot, the object left of the dot gets 'this'
* 3. Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by tre constructor function
* 4. Whenver JS's call or apply method is used, 'this' is explicitly defined. For building new objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

unction someFunction() {
      "use strict";
    }
    
    const hobbit = {
      name: 'Samwise',
      food: 'taters',
      cook: function() {
        // with window binding, food cannot be found!
       console.log(`${name} loves to eat ${food}`) 
      }
    }
    
    hobbit.cook();

// Principle 2

// code example for Implicit Binding

const hobbit = {
      name: 'Samwise',
      food: 'taters',
      cook: function() {
        // with window binding, food cannot be found!
       console.log(`${this.name} loves to eat ${this.food}`) 
      }
    }
    
    hobbit.cook();



// Principle 3

// code example for New Binding

const person = {
    name: 'Sarah'
  }
  
  const hobbit = {
    name: 'Frodo'
  }
  
  const skills = ['HTML', 'CSS', 'JS'];
  
  function introduce(skills) {
    
    console.log(`Hello!  My name is ${this.name}, and I have skills in: ${skills}`)
  }

// Principle 4

// code example for Explicit Binding

unction CordialPerson(name) {
    this.greeter = name;
    this.greeter = greeter;
    this.greeting = "Hello";
    this.speak = function() {
      console.log(`${this.greeting}, ${this.greeter}`)
    }
  }
  
  const jerry = {
    greeter: "Newman",
    greeting = "Hello",
    speak = function() {
      console.log(`${this.greeting}, ${this.greeter}`)
    }
  }
  
  const newman = {
    greeter: "Newman",
    greeting = "Hello",
    speak = function() {
      console.log(`${this.greeting}, ${this.greeter}`)
    }
  }
  
  // new applies the this binding to a constructor function
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');