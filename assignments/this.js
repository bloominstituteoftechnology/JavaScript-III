/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binging
    When 'this' is in the Global Scope, its value is the window/console Object
* 2. Implicit Binding
    When 'this' is used before a function with a .

* 3. New Binding
    'this' refers to a specific instance of an object created and returned by a constructor function.

* 4. Explicit Binding
    Whenever .bind or .apply is used, 'this' becomes explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var number = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var globalX = number.getX;
console.log(globalX());



// Principle 2
// code example for Implicit Binding

const sayNameFunc = obj => {
  obj.sayName = function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};
const me = {name: 'Greg'};

sayNameFunc(me);

me.sayName();


// Principle 3
// code example for New Binding

function person(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function () {
    console.log(this.greeting + this.greeter);
    console.log(this)
  };
}

const greg = new person('Greg');


greg.speak();


// Principle 4
// code example for Explicit Binding

function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');
const beverly = new CordialPerson('Beverly');
const diego = new CordialPerson(['Diego']);

jerry.speak();
newman.speak();
jerry.speak.call(beverly);
newman.speak.apply(diego);
