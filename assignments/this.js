/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* The important thing to note is that what the this keyword points to is determined when the function is called.
*
* 1. window binding - If none of the below paradigms apply, this refers to the window (of the browser). Meaning, if you call a function without any context of an object, and you're not creating a new object or using any of the 3 function methods below to denote context, window is the default object that this refers to.

* 2. Implicit binding - This is an automatic binding that occurs when a method is called on an object. The binding of this is on the object directly preceding the period before the metod name. This happens when a method is contained inside an object, and then the method is called on that object.

* 3. Explicit binding - The programmer explicitly states what this will bind to by calling a function with an object as an argument. This is typically used when a function and object live on the same scope, rather than the method being a key inside an object. The process of doing this is using .call() or .apply() methods on the function.

* 4. new binding - When a new object is created from a constructor function using the new keyword, this refers to the new object. This is how one creates many new objects from the same constructor function, each with its own individual arguments.
*
* write out a code example of each explanation above
*/

// Principle 1 - window binding

// global scope
const favoriteColor = function() {
    console.log(this.color);
}

favoriteColor(); // returns undefined because window doesn't have a key of 'color'


// Principle 2 - Implicit binding

const leighAnn = {
    name: 'Leigh-Ann',
    color: 'green',
    food: 'pizza',
    favoriteColor: function() {
        console.log(`${this.name}'s favorite color is ${this.color}.`)
    }
}

leighAnn.favoriteColor(); // returns "Leigh-Ann's favorite color is green." because leighAnn is the object preceding the method's period


// Principle 3 - new Binding

function Person(name, color) {
    this.name = name;
    this.color = color;
}

const jeff = new Person('Jeff', 'red'); // this will point to jeff any time jeff is the object being called upon, and it will have the key/value pair structure of the constructor function Person

console.log(jeff);


// Principle 4 - Explicit binding

let favoriteFood = function() {
    console.log(`${this.name}'s favorite food is ${this.food}.`)
}

favoriteFood.call(leighAnn); // returns "Leigh-Ann's favorite food is pizza." because the leighAnn object is the argument for .call()