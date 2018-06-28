/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. window - 'this' refers to the window when there is no object to point to
* 2. implicit - 'this' refers to the object from within the object
* 3. explicit - 'this' refers to the object from outside the object
* 4. new - 'this' refers to an object created by a constructor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(){
    console.log(this.name);
}
sayName();

// Principle 2

// code example for Implicit Binding
const myObject = {
        'greeting': 'Hello',
        'sayHello': function(name) {
        console.log(`${this.greeting} my name is: ${name}`);
       }
     }

 myObject.sayHello("Shannon");

// Principle 3

// code example for New Binding
function CandyFactory(flavor) {
    this.flavor = flavor;
    this.speak = function() {
        console.log(`${this.flavor} is my favorite flavor of candy.`)
    }
}

const susie = new CandyFactory('Cherry');

susie.speak();

// Principle 4

// code example for Explicit Binding
const myObject = {
      'name': 'Shannon',
      'age': 24
    }
    
function sayName() {
    console.log(`My name is: ${this.name}`);
}

sayName.call(myObject);