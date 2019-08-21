/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers to the window object and is the default if no other values for "this" are found.
* 2. Implicit binding means that "this" refers to the parent object from which the function is called.
* 3. New binding is where you create a new instance of an object to which "this" points.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

Window.weirdVar = "Probably shouldn't be making window properties";
console.log(Window.weirdVar);

// Principle 2

// code example for Implicit Binding

const foo1 = {
    name: "foo1",
    GetName: function() {
        return this.name;
    }
}
console.log(foo1.GetName());

// Principle 3

// code example for New Binding

function Animal(type) {
        this.type = type;
}

const myAnimal = new Animal("platypus");

console.log (myAnimal.type);

// Principle 4

// code example for Explicit Binding

const foo2 = {
    name: "foo2"
}

function GetName() {
    return this.name;
}

console.log(GetName.call(foo2));

var newGetName = GetName.bind(foo1);
console.log(newGetName());