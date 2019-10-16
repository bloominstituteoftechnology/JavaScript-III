/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When "this" is not specified or binded to a specific object it will "attach" to the global or window object.
* 2. When implicit binding, "this" keyword is used the function is looking to the left of the . where "this" is used. the func must be
invoked for this to work.
* 3. Explicit Biding is when a function uses the .apply, .call, .bind methods to objects/functions and immediately invoke "this". 
* 4. New Binding is when a new object is created with the new keyword, this binds "this" to each new instance of the object created. This references the particular instance in which is instantiated.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function notSpecified(x){
    console.log(this);
    return x;
}

notSpecified('Is this binded?');

// Principle 2
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding