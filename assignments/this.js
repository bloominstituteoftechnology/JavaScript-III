/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers to using "this" in the global scope.
* 2. Implicit binding refers to cases in when dot notation is used to call a function. "This" refers to the parent function in which the method being called is a part of.
* 3. New binding refers to cases in which a constructor function is used. When a function is called with "new" it turns the function into a constructor function initializing "this" as an empty object and automatically returning it.
* 4. Explicit binding refers to cases in which "this" gets set explicitly by the developer for said constructor functions. Using .call() and .apply() we can pass in a new reference to "this" as well as arguments.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const obj = {
    prop: "prop",
    method: function () {
        return this
    }
};

console.log(obj.method());

// Principle 3

// code example for New Binding
function Constructor(prop) {
    this.prop = prop
}

const constructor = new Constructor("prop");

console.log(constructor);

// Principle 4

// code example for Explicit Binding
function Constructor2(prop) {
    Constructor.call(this, prop);
}

const constructor2 = new Constructor2("prop2");

console.log(constructor2);