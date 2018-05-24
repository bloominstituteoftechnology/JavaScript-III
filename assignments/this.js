/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
Implicit Binding is used when at the time of the call, if there is a reference to the object
being called, and the function is already on/in the object (left of the dot). If the function is being called on an object, this will
reference that object.
* 2. Explicit Binding
Explicit Binding is used when a function is separate from the object. Using a function like
call or apply, you can pass in the reference to this via the parameters.
* 3. New Binding
New Binding is whenever a new object is created, the this keyword inside the factory function
refers to the object being created.
* 4. Window Binding
Window Binding is when none of the other bindings are valid, the this keyword will default to
the window function, or in lieu of that, be undefined.
*
* write out a code example of each explanation above
*/

// Principle 1

let Person = {
    name: 'Jon',
    age: 34,
    sayName: function() {
        console.log(this.name);
    }
}

// Principle 2

let Speak = function() {
    console.log(`My name is ${this.name}`)
}

let newPerson = {
    name: 'Jonathan',
    age: 34,
}

Speak.call(newPerson) //?

// Principle 3

var Animal = function (color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zorra', 'Zebra') //?
// Principle 4

let sayAge = function() {
    console.log(this.age);
}

let thirdPerson = {
    age: 34
}

sayAge()

