/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - when in global scope, 'this' refers to the window object
* 2. Implicit Binding - when an object is to the left of the dot in a function invocation, 'this' refers to that object
* 3. New Binding - this refers to the instantiation of an object created and returned by a constructor function
* 4. Explicit Binding - this is explicitly defined when using .call(), .apply(), or .bind()
*
* write out a code example of each explanation above
*/

// Principle 1
window.age = 35;
function sayAge() {
    console.log(this.age);
}
// code example for Window Binding

// Principle 2
let graceObj = {
    name: 'Grace',
    age: 25,
    speak: function() {
        console.log(`I'm ${this.age} years old`);
    }
}
graceObj.speak();
// code example for Implicit Binding

// Principle 3
let Animal = function(name, blood, pedals) {
    this.name = name;
    this.blood = blood;
    this.pedals = pedals;
}
let human = new Animal('homo sapien', 'mammal', 'bipedal');
// code example for New Binding

// Principle 4
let sayNameLang = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
}
let languages = ['Javascript', 'Ruby', 'Python'];
sayNameLang.call(graceObj, ...languages);
// code example for Explicit Binding