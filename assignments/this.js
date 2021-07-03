/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers to "this" which is an object named Window 
* 2. Implicit binding occurs when dot notation is used to invoke a function.
* 3. New Binding lets us to buld objects with "new" from created objects.
* 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greeting() {
    "use strict"
    console.log(this);
  }
  
  greeting();

// Principle 2

// code example for Implicit Binding
var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'

// Principle 3

// code example for New Binding

// please refer to example 2

// Principle 4

// code example for Explicit Binding
var runner = { name: 'John', myFavoriteActivity: 'running' };
MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';