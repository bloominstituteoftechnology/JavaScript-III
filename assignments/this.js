/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit - When the "this" keyword refers directly to the object that it linked to by means of dot notation, but can be attatched directly to the method of the object it is in.

* 2. Explicit - When the "this" keyword is used in a function that is separate from the object or objects that it will be applied to, but when the function containing "this" explicitly defines the object it is to be applied to during the function call.

* 3. New Binding - When the "this" keyword is used in a object constructor and a new instance of that object is constructed, the  "this" refers to the new instance of the constructed object.

* 4. Window Binding - When the "this" keyword is used in a function that when is called does not used bind, call, apply or is not a new object/ instance of a custructor / constructed object, and there is not an identifier via dot notation, "this" defaults to refering to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let windowBind = function() {
    'use strick'
    console.log(`${this.name} is an example of Window Binding`)
}

windowBind();

// Principle 2

// code example for Implicit Binding
const implicit = {
    name: "RJ",
    age: 32,
    example: function () {
        console.log(`${this.name} is the name in this objedct that is an example of implicit Binding`)
    }
}
implicit.example();

// Principle 3

// code example for New Binding
const Animal = function (name, kind, gender){
    this.name = name,
    this.kind = kind,
    this.gender = gender
}

let cat = new Animal("Olive", "cat", "F")

console.log(cat)

// Principle 4

// code example for Explicit Binding
const explicit = function() {
        console.log(`${this.name} is the name in this objedct that is an example of Explicit Binding`)
}

let exampleVar = {
    name: "RJ",
    age: 32
}

explicit.call(exampleVar);
