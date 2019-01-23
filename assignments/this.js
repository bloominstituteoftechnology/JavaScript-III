/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The 'this' keyword defaults to binding with the Window.

* 2. An implicit binding is specifically for objects, referenced within the object itself (implied).

* 3. An explicit binding is when we, literally, 'call' or create a binding that did not exist prior (explicit). Example: calling the properties of an object into a separate function.

* 4. A new binding is used to build new objects that gain the attributes of a parent object.


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);



// Principle 2

// code example for Implicit Binding
const myObj = {
    sides: 20,
    description: function() {
        console.log(`This icosahedron has ${this.sides}.`);
    }
}
console.log(myObj.sides);


// Principle 3

// code example for New Binding
function MyObject(myOb) {
        this.sides = myOb.sides;
        this.shape = myOb.shape;
}
const dSix = new MyObject ({
        sides : 6,
        shape : "Cube"
})
console.log(dSix);


// Principle 4

// code example for Explicit Binding

const saxophone = {
    range: "tenor",
    color: "brass"
}

function play() {
    console.log(`My ${this.color} saxophone is a ${this.range}`);
}

play.call(saxophone);