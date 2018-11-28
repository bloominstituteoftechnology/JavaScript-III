/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
 *    The window binding is when you (often times accidentally) direct the "this" keyword to refer to the Window object. For instance,
 *    if you were to write a function in the global scope that did not "use strict" and that had a console.log(this), the "this" would
 *    refer to the window object. You typically don't want this to happen.
 *
 * 2. Implicit Binding
 *    Implicit binding is when you bind this inside of an object; the this keyword will then bind to the object in questions, such
 *    as when you are creating a key-value pair in a constructor function with this.name = attributes.name. It is important to note
 *    that, in methods (inside of a constructor function), you have to use a normal ES5 function istead of an ES6 arrow function. If
 *    you use an arrow, the "this" keyword inside of the method will bind a level above the constructor function (or any function when
 *    it's used).
 *
 * 3. Explicit Binding
 *    Explicit binding is when
 *
 * 4. New Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

function windowBinding() {);
  console.log(this);
}

windowBinding();

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
