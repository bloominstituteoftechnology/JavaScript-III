/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: The 'THIS' keyword follows the rules of different scopes so it must be defined in a funciton and cannot be used outside of it.
* 2. Implicit binding: When using dot notation in a function the object before the dot become 'THIS' 
* 3. New Binding: When a function returns an object the keys in the object have to be proceeded with 'new.'
* 4. Explicit Binding: When using call or apply 'this' is got to be defined immediately.
*
* write out a code example of each explanation above
*/

// Principle 1

function myName(name) {
    console.log(this);
    return name;
}

myName('Jbarz');

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding