/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. In global scope, the value of `this` is the window Object.
 * 2. When a function is called as a method on an object (i.e. no : aFunction() yes: .aFunction), `this` points back to the object to the left of the dot, or the object the method is called on.
 * 3. In this case, `this` refers to the specific instance of the object which was created from a constructor function.
 * 4. Using .apply or .call you can set the value of `this` equal to whatever defined object you choose. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function aFunction(param) {
    return this.param;
}
//RETURNS undefined since this.param is not declared and when looking for a declaration gets hoisted to global scope where `this` refers to the Window object.

// Principle 2

// code example for Implicit Binding

const oneObject = {
    prop1: 'a property',
    method1: function () {
        return `${this.prop1}`;
    }
};
//RETURNS 'a property' since `this` points back to anObject 
console.log(oneObject.method1());

// Principle 3

// code example for New Binding
function anObject(prop) {
    this.prop = prop;
}

anObject.prototype.aMethod = function () {
    return this.prop;
}

const instObj = new anObject('my prop');
instObj.aMethod();

//RETURNS 'my prop' and `this` points back to the object that was created instObj

// Principle 4

// code example for Explicit Binding
/*
 * 
 * function anObject(prop) {
 * this.prop = prop;
 * this.method = function () {
 * return `${this.prop}`;
 *   }
 * };
 */
const instObj2 = new anObject('my prop');
const anotherInstObj = new anObject('this is another prop');

anotherInstObj.aMethod.call(instObj2); //returns "my prop" instead of "this is another prop"
anotherInstObj.aMethod(); //returns "this is another prop" as expected
//RETURNS 'my prop' because using the call method and passing it a param of the other object instObj is allowing us to explicitly define `this` as pointing to the instObj object.  If we did not use .call or .apply then `this` would follow new binding and be bound to anotherInstObj upon its initialization...