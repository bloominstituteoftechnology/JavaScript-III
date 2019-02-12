/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the
value of ${this} inside that function will be the window object.

* 2. Implicit binding occurs when dot notation is used to invoke a function

* 3. Constructor functions return an object. When a constructor function 
is used in object oriented programming with the keyword "new" for New Binding

* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    console.log("Hello " + name);
    console.log(this);
}

greetMe("Jane");

//greetMe("Jane"); == window.greetMe("Jane");
------

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
 
  obj.doStuff('awesome'); 
  // prints 'MyObjectName is awesome!'

//In implicit binding, whatever is to the left of the dot becomes the context for this in the function. //


// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding
