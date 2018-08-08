/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - This, by default/global, is referencing the window you are in.
* 2. Implicit binding - When you reference the object property to the left while calling.
* 3. Explicit binding - When you reference the object as an argument after using a method on a function.
* 4. New binding - When you create a new object using the New keyword, built off of a prototype.
*
* write out a code example of each explanation above
*/

// Principle 1 == code example for Window Binding

console.log(window.name);

// Principle 2 == code example for Implicit Binding

objectName.keyName;

// Principle 3 == code example for New Binding

introduce.call(Jim, sayMyName);


// Principle 4 == code example for Explicit Binding

const Jimmy = new Friend ('Jim');