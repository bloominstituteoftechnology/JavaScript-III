/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' can reference the window or console's object. (For example: it can reveal the methods on Console, such as .log)
* 2. When a method is called, 'this' refers to the object to the left of the .
* 3. When using a constructor method, 'this' refers to the specific objects being created
* 4. When creating a new constructor, 'this' can be used within .call() or .apply() to borrow attributes of the original
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const person = {
    name: 'David',
    age: 23,
    speak: function() {
        return this.name;
    }
}
console.log(person.speak());
// Principle 3

// code example for New Binding
function Person(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.speak = function () {
        console.log(`Hi my name is ${this.name}`);
    };
}
const david = new Person({
    name: "David",
    age: 23,
})
david.speak();
// Principle 4
function Child (attributes) {
    Person.call(this, attributes);
    this.poopPants = attributes.poopPants;
}

let timmy = new Child({poopPants: 'stinky'});
console.log(timmy.poopPants);
// code example for Explicit Binding