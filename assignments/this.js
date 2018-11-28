/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: when an object function is invoked, the "this" keyword is bound to the object left of the dot. 
* 2. Explicit binding: we explicitly tell a function what the context of "this" will be. We use three methods to do so:
.call() and .apply(), which invoke the function immediately (note: .call() requires you to pass in arguments one by one,
while .apply() passes in an array), and .bind(), which returns a new function to be invoked later.
* 3. New binding: if a function is invoked with the "new" keyword, "this" will be bound to the new object being constructed.
* 4. Window or global binding: "this" defaults to the window or console object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayAge(age) {
    console.log(this);
    return age;
  }
  sayAge(23); // <- Uh oh! Refers to the window or console object.

// Principle 2
// code example for Implicit Binding

let sharks = {
    name: 'Mako',
    speed: 35,
    speak: function(){
        console.log(this.name)
    }
};

sharks.speak(); // <- refers to the left of the dot


// Principle 3
// code example for New Binding

let Cereal = function(name, brand, color) {
    this.name = name;
    this.brand = brand;
    this.color = color;
}

let luckyCharms = new Cereal('Lucky Charms', 'General Mills', 'Rainbow'); // <- Cereal constructor function was invoked with "new" keyword.
// "This" is therefore bound to the new object that was constructed.

// Principle 4
// code example for Explicit Binding
let speak = function(){
    console.log(`Hello, my name is ${this.name}.`)
}

let fruits = {
    name: 'apple',
    type: 'tree',
};

speak.call(fruits); // <- explicitly states what "this" keyword is.