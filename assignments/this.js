/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window. Whenever the function is conatined in the global scope. .this always becomes the window unless we change it. 
* 2. Implicit  Binding. allows you to use what is inside of an object. used inside of an Object.
* 3. Constructer Functions Used to consturct thing. uses new bindings
* 4. Using explisict methods. Using .call or . apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Shake(part) {
    console.log('Shake those ' + part);

    //console.log(this);
}
Shake('hips');
// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding