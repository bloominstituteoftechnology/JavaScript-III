/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - the "this" keyword will always refer to the window the code is in unless another binding is specifically attached.
* 2. Implicit Binding - when calling a function within an object the "this" keyword points to exactly where the function should look for a specific piece of information.
* 3. New Binding -  when used in a constructor the "this" keyword binds the information in the new object to the constructor.  
* 4. Explicit Binding - when the call or apply methods are used
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("William");
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');
// code example for Implicit Binding

// Principle 3
const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
// code example for New Binding

// Principle 4
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
  
  newman.speak();
  newman.speak();
// code example for Explicit Binding