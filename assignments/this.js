/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Needs to be bound to something, otherwise it'll go to he window
* 2. Implicit Binding: Wwhatever is to the left of the dot is the context.
* 3. New Binding: When a constructer function is used.
* 4. Explicit Binding: When call or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greeting) {
    console.log(this);
    return greeting;
  }
  sayName("Hello!");
// Principle 2

// code example for Implicit Binding
const imp = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  imp.sayHello('Phil');
// Principle 3

// code example for New Binding
function theSpeaker(speaker) {
    this.greeting = 'Hello my friend!';
    this.speaker = speaker;
    this.speak = function() {
      console.log(this.greeting + this.speaker);
      console.log(this);
    };
  }
  
  const phil = new theSpeaker('Jill');
  const jill = new theSpeaker('Phil');
  
  jill.speak();
  phil.speak();
// Principle 4

// code example for Explicit Binding
function Car(attributes) {
    this.year = attributes.year;
    this.make = attributes.make;
    this.model = attributes.model;
    this.speak = function () {
      return `This is a ${this.year} ${this.make} ${this.model}`;
    };
  }

  const car = new Car({
    year: '2012',
    make: 'Ferrari',
    model: 'F430',
   });

   console.log(car);
   console.log(car.speak());