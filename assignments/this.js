/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - 
    In global scope, "this" is bound to the window object
* 2. Implicit Binding -
    When the "this" keyword is bound to the scope its inside. Whenever a method is called "this" is bound to the object the method is built on.
* 3. New Binding -
    When a constructor function is used, "this" is bound to the output object of the constructor.
* 4. Explicit Binding -
    "this" is explicitly defined by using the .call() or .apply() methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name;
//calls the name property of the window object

// Principle 2

// code example for Implicit Binding
const myObj = {
    "text": "some text",
    "method": function() {
        return this.text;
    }
}

console.log(myObj.method());

// Principle 3

// code example for New Binding

function Dog(dogStuff) {
    this.name = dogStuff.name;
    this.age = dogStuff.age;
    this.breed = dogStuff.breed;
}
    Dog.prototype.bark = function() {
        return "woof";
    }

const kneesaa = new Dog ({
    "name": "Kneesaa",
    "age": 3,
    "breed": "Lhasa Apso",
});
console.log(kneesaa.bark());

// Principle 4

// code example for Explicit Binding
function Puppy(puppyStuff) {
    Dog.call(this, dogStuff);
    this.stillGrowing = true;
}

Puppy.prototype = Object.create(Dog.prototype);