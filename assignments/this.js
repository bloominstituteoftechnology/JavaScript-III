/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window- the most global referrence in the browser for this.
* 2. Implicit- invoking the method inside of an object implicitly binds this to the object in which it is contained.
* 3. Explicit- Appending a call, apply, or bind method to a function with Object or this as a parameter.
* 4. new- Creating a new context of this by using a constructor function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this
// Principle 2

// code example for Implicit Binding
const objIm = {
    method = function() {
        return 'something';
    }
}
objIm.method();
// Principle 3

// code example for New Binding
function ObjNew() {
    this.method = function () {
        return 'something else'
    }
} 
const obj_new = new ObjNew();
// Principle 4

// code example for Explicit Binding
const objEx = {
    'trait' : 'XY'
}
function someFunc() {
    return 'something explicit';
}
someFunc.call(objEx);