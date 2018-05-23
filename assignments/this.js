/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window binding - In the global scope, 'this' will refer to the window.
* 2.  implicit binding - 'this' refers to the proceeding object before the dot' ..
* 3.  new binding - Creates a constructor that binds the 'this' keyword to the constructor/everything in the constructor.
* 4.  explicit binding - Uses functions like call() and apply() to bind 'this' to the obj that is calling them.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
}
// code example for Window Binding

// Principle 2
const greetName = {
    "greeting": "Hello,",
    "sayName": function(name) {
      console.log(`${this.greeting} ${name}`)},
}

// code example for Implicit Binding

// Principle 3
function SayName(name) {
    this.greeting = "Hello,";
    this.name = name;
    this.sayName = function() {
      console.log(`${this.greeting} ${this.name}`);
    };
}

const brandon = new SayName('Brandon');

brandon.sayName();

// code example for New Binding

// Principle 4
let age = {
    "age": 30,
}

function sayNames(name1, name2, name3) {
    console.log(`Hey, ${name1}, ${name2}, and ${name3} are ${this.age} years old.`);
  }
  
  let names = ['Brandon', 'Jess', 'Dan'];
  
  sayNames.call(age, ...names);

// code example for Explicit Binding