/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - this is a default without any other rules. In browser it is the window. Otherwise it is undefined 

* 2. Implicit Binding uses . notation. whatever is to the left is the context.

* 3. New binding - uses the constructor to make a new object instance. this is bound to the constructor.

* 4. Explicit binding - .call .bind and .apply to manipulate the context of this.

*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    return name;
}
sayName('Emily');

// Principle 2

const myObj = {
    greeting: 'Hello',
    sayName: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
    }
  };
  myObj.sayName('Jerry');

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
    console.log(this.greeting + this.greeter);

    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  jerry.speak();

// Principle 4

var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var runner = { name: 'John', myFavoriteActivity: 'running' };
  
  MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);