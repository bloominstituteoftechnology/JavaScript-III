/**/
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding: the this keyword gets bound to the window object by default when misused.
* 2.  This automatically binds to the object left of the . in the invocation if not told where to go.
* 3.  Explicit binding binds this manually using call bind or apply.
* 4.  New binding creates a new object and assigns this to that.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let myObject = () => this.name = "Billy";
myObject();
console.log(window.name); //stoopid quokka doesn't have a window object

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
