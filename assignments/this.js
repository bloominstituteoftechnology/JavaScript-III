/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Object Binding
// If the function is invoked in the global scope, 'this' will refer to the global object or 'window object' - this is the same place that global variables are stored.

// code example for Window Binding
let myFunction = function() {
    console.log(this);
}

myFunction();               // As the function is invoked in the global scope, 'this' will refer to the default object (window object).


// Principle 2
// Implicit Binding
// If the function is invoked on an object using dot notation, 'this' will refer to the object that the function is being invoked on.

// code example for Implicit Binding


const SusanObj = {
    name: 'Susan',
    age: 27,
    greet : function(){
        console.log(`Hi, my name is ${this.name}!`);
        console.log(this);
    }
}

SusanObj.greet();             // As the function is invoked on Person using the dot notation, 'this' will refer to the the object Person.


// Principle 3
//New Binding
// When used with a constructor function, 'this' refers to the specific instance of the object created by the constructor.

// code example for New Binding

// Principle 4
// Explicit Binding
// The 'call', 'apply' and 'bind' methods can be used to explicitly define where 'this' references to.

// code example for Explicit Binding