/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When 'this' has no bindng, it is bound to the window (global in Node).
* 2. Implicit Binding: When function is called as a method of an object, the this' is bound to that object.
* 3. Explicit Binding: When the methods .apply() or .call() is used with a functiom, then 'this' is bound to the specific object in the method parameter.
* 4. New Binding: When a new instance of an object is created, 'this' becomes bound to that new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let cloudsInSky = {
    'size': 'big',

    'fluffyView': function () {
        return `This cloud is a ${this.size} one.`
    }
};

console.log(cloudsInSky.fluffyView());



// Principle 3

// code example for New Binding

let Person = function (name, eyeColor) {
    this.name = name;
    this.eyeColor = eyeColor;
}

let newPerson = new Person('Lloyd', 'brown');

// Principle 4

// code example for Explicit Binding

let anotherPerson = function (name, eyeColor, size) {
    Person.call(this, name, eyeColor);
    this.size = size;
}

let newAnotherPerson = new anotherPerson('Kareem', 'green', 'small');
console.log(newPerson.name);