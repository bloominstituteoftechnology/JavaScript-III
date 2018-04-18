/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit
* 3. Explicit
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// window.name = 'Brandon';
// function wind(name) {
//     console.log(this);
//     return name;
// }

// Principle 2

// code example for Implicit Binding
const newObj = {
    prop1: 'prop1',
    logProp: function() {
        return this.prop1;
    }
}
console.log(newObj.logProp());

// Principle 3

// code example for New Binding
// function Person(attr) {
//     this.name = attr.name;
//     this.age = attr.age;
//     this.speak = function() {
//         return `My name is ${this.name} and I am ${this.age} years old`;
//     };
// }
// const brandon = new Person({
//     name: 'brandon',
//     age: 28
// });
// console.log(brandon.speak());

// Principle 4

// code example for Explicit Binding
const brandon = {
    name: 'Brandon',
    age: 28
};

const greet = function(skill1, skill2, skill3) {
    return `Hello my name is ${this.name} and I am ${this.age} and I like to ${skill1}, ${skill2} and ${skill3}`;
};

const skills  = ['walking', 'talk', 'chew gum'];

console.log(greet.call(brandon, ...skills));