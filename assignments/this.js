/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 * 
 *   In general, "this" in Javascript has a meaning very similar to "this" in English. 
 *   It points to something. 
 * 1. In global scope, "this" is pointing to the whole window. 
 * 2. object.function(); functions on the right of . "this" on the left.
 *    It remains true if you stack objects in the notation like so:
 *    parentObject.childObject.function(); "this" is childObject here.
 * 3. In a constructor function, this refers to the product of the function, 
 *    not the function itself. 
 * 4. Just like in English, "this" is a pronoun, a shortcut used instead of 
 *    directly naming something, used to save one from repetition. Normally,
 *    "this" is used to indirectly, or implicitly, point to something. 
 *    You can explicitly point to things with "this," and one uses call and apply to do so.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

function window(x) {
    console.log(this);
    return this;
}

console.log(window('x'));

// Principle 2
// code example for Implicit Binding
const iraSaysHi = {
    greeting: 'Ira says, \'Hi\!\'',
    sayHi: function () {
        console.log(this.greeting);
    }
};
iraSaysHi.sayHi();


// Principle 3
// code example for New Binding

function PersonMaker(name, age, hometown) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.introduceYourself = function () {
        console.log(`Hi, I'm ${this.name}. I am ${this.age} and am from ${this.hometown}`);
    };
}

const iraSanchez = new PersonMaker('Ira Sanchez', 28, 'Santa Ana');
console.log(iraSanchez.age);

// Principle 4
// code example for Explicit Binding

const clone = new PersonMaker('Anonymous', 99, 'Anytown');
console.log(clone.age);
clone.introduceYourself.apply(iraSanchez);
clone.introduceYourself();