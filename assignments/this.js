/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding is when the 'this' keyword will point at the window object 
* 2. Implicit Binding is when the 'this' keyword points to the left of the '.' when invoked
* 3. Explicit Binding is when the 'this' keyword has a set place givin by the developer to point to
* 4. New Binding the 'this' keyword refers to the instance of an object created by the constructor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayAge (age) {
    console.log(this);
    return age;
}
// sayAge(5);
// Principle 2

// code example for Implicit Binding
const brandon = {
    greeting: 'hey',
    sayName: function (name) {
        console.log(`${this.greeting} I'm ${name}`);
    }
};

brandon.sayName('Brandon');
// Principle 3

// code example for New Binding
const anthony = {
    'name':'Anthony',
}
const learning = ['HTML', 'CSS', 'JS'];
function intro(skills1, skills2, skills3) {
    console.log(`Hello my name is ${this.name} and I am learning ${skills1}, ${skills2}, ${skills3}`);
}
intro.call(anthony, ...learning);
// Principle 4

// code example for Explicit Binding
function Human(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.talk = function() {
        console.log(this.greeting + this.person);
    };
}
const harry = new Human('Harry');
harry.talk();