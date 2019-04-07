/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When used in global scope this refers to the window object.
* 2. When used after a period (.) this refers to what is on the left of period.
* 3. This refers to instanse of new object that is created with constructor function.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function() {
    console.log(this);

}

// Principle 2

// code example for Implicit Binding

    const hobbit = {
      'name': 'Samwise',
      'food1': "taters",
      'cook': function(food1) {
        console.log(`${this.name} can cook: ${food1} and ${this.food1}`)
      }
    }

    hobbit.cook('fish');

// Principle 3

// code example for New Binding

function CordialPerson(greeter){
    this.greeter = greeter;
    this.greeting = "Hello";
    this.speak = function() {
      console.log(`${this.greeting} ${this.greeter}`)
    }
  }

const jerry = new CordialPerson('Newman');

// Principle 4

// code example for Explicit Binding

function introduce(name) {
  console.log(`Hello!  My name is: ${this.name}`)
}