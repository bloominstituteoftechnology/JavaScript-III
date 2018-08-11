/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - In the global scope, "this" points to the window/console object.
* 2. Implicit Binding - When a function is invoked, "this" points to the preceding object.
* 3. New Binding - When a constructor function is invoked, "this" points to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - When the call or apply methods are invoked, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const fruit = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} I am a ${name}`);
      console.log(this);
    }
  };
fruit.sayHello('banana');

// Principle 3

// code example for New Binding
function fruit2(user) {
    this.greeting = 'Hello ';
    this.user = user;
    this.speak = function() {
      console.log(this.greeting + this.user +"!");
      console.log(this);
    };
  }
const banana = new fruit2('World');
const apple = new fruit2('there');
banana.speak();

// Principle 4

// code example for Explicit Binding

banana.speak.call(apple);