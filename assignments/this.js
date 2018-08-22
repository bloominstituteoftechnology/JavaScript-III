/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New Binding - The this keyword refers to whatever object was created to the left of the dot. It is a direct "calling"
* 2. Window binding - The this keyword refers to the window object when there is no name to the left to assign a different object. (kind of like a default)
* 3. Implicit Binding - The this keyword refers to the object inside of which it's defined. The easiest one.
* 4. Explicit Binding - the value of the this keyword is explicitly defined within the function call that is being made
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
//a prototype for the constructor under Principle 3
Object.prototype.fullName = function () { 
    console.log (this.firstName, this.lastName);
}

Michael.fullName();

// Principle 3

// code example for New Binding
function Object (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const Michael = new Object('Michael', 'Littleton') // Fun aside: Did I just objectify myself?

// Principle 4

// code example for Explicit Binding

function Student (firstName, lastName, subject) {
    Object.call(this, firstName, lastName); //this 'this' is explicitly applying the 'this' to the specific student that is created
    this.favSubj = subject; //this 'this' is implicit, but applies it to the same student as in the line immediately above
}

