/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'Window binding' is when the 'this' is not binding to any objects, so it defaults the the top object which is window.
* 2. 'Implicit binding' is when the 'this' is binded to an object. Essentially it binds to what is to the left of the dot notation.
* 3. 'New binding' is when a new object is created from a constructor function. 'this' binds to that new object.
* 4. 'Explicit binding' is when the object is specifically binded to an object by using .call, .apply or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(name) {
    return name;
}

// Principle 2

// code example for Implicit Binding
const thisObj = {
    thisExample: 'first example',
    exampleFunc : function() {
        return this.thisExample;
    }
}

// Principle 3

// code example for New Binding
const Obj = function (example) {
    this.exmaple1 = example.exmaple1;
};

const Obj2 = new Obj({
    exmaple1 : 'this example'
})

// Principle 4

// code example for Explicit Binding
let arr = ['this', 'is', 'an', 'example']
randomExample.apply(this, arr);