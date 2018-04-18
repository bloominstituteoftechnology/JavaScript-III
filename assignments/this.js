/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Object Binding:
* 2. Implicit Binding
* 3. Explicit Binding: Binding the "this"-keyword to an object of our choosing.
* 4. `new` Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);
/* In the global execution context, `this` refers to the global (window for us browsies) object */

// Principle 2
// code example for Implicit Binding
const object = {
    "name": "Clippy",
    "sayHello": function() {
        return `Hi! I'm an object and my name is ${this.name}`;
    }
};

console.log(object.sayHello());
/* In conjunction with an object, the `this` keyword referes to the object left of the dot. */


// Principle 3
// code example for New Binding
const Student = function(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
};

const roger = new Student("Roger",12,7);

console.log(roger);
/* */ 

// Principle 4

// code example for Explicit Binding

function sayName() {
    return `My name is ${this.name}`;
}

console.log(sayName.call(roger));
