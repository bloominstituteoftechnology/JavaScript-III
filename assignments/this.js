/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the object is bound to the global scope, `this` context will be bound in the window or console Object
* 2. Implicit Binding occurs when the `this` keyword is inside an object and its context is automatically bound to whichever is to the left of the dot or invocation... I think I'm getting it.
* 3. Explicit Binding explicitly binds the context to whatever that is being passed in the constructor... is that the right one? if it is... i'm gettin it.
* 4. New Binidng binds what ever that was explicitly bound from the constructor to a new copy of that object. new keyword bounds whatver the property was in the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowFunc () {
    console.log(this)
}

windowFunc();

// Principle 2

// code example for Implicit Binding

const exampleObject = {
    name: 'CJ',
    message: function(message) {
       return `${this.name}... ${this.message}`;
    }
}

exampleObject.message('what are you doing man. Wrap your head around this!');


// Principle 3

// code example for New Binding
let conFuncType = new ConstructorFunc({
    name: foo,
    location: bar
});
// Principle 4

// code example for Explicit Binding

function ConstructorFunc(foo) {
    this.name = foo.name;
    this.location = foo.location;
}