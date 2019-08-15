/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding is when this is in the global scope, and thus the value of this will be the window or console object.
* 2. implicit binding is when this's value is the object for a dot-called function.
* 3. new binding is when this refers to the current object being created by a constructor function
* 4. explicit binding is when this is used under the call or apply methods, where this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function addNums(num1, num2) {
  sum = num1 + num2;
  console.log(this);
  return sum;
}

addNums(1, 2);

// Principle 2

// code example for Implicit Binding
const itsAName = {
  yourName: 'Your name is',
  really: function(name) {
    console.log(`${this.yourName} ${name}?`);
    console.log(this);
  }
};
itsAName.really('Adric');

// Principle 3

// code example for New Binding
function RealName(notFakeName) {
  this.greeting = 'You need a real name like ';
  this.notFakeName = notFakeName;
  this.speak = function() {
    console.log(this.greeting + this.notFakeName);
    console.log(this);
  };
}

const patrick = new RealName('Patrick');
const eric = new RealName('Eric');

patrick.speak();
eric.speak();

// Principle 4

// code example for Explicit Binding
patrick.speak.call(eric)
eric.speak.apply(patrick)
