/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when this refers to the global scope, or when this defaults to the window object.
* 2. Implicit Binding - when a function is bound to an object as a method, and this refers to the object.
* 3. New Binding - When a function is invoked with the new keyword, this is going to be bound to the new object being constructed.
* 4. Explicit Binding - The this keyword is explicitly stated byt the very first argument that is passed to a .call, .apply, or .bind invocation.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function sayHello(hello) {
//     console.log(thishello)
// }

// sayHello("hello");

// Principle 2
// code example for Implicit Binding

const myObj = {
'name': 'Samwise',
'age': 100,
'cook': function(food1, food2) {
    console.log(`${this.name} can cook ${food1} and ${food2} and it is delicious. The cook has ${this.age} years of experience!`);
}
}
myObj.cook("taters", "fish");

// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = "hello";
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`);
    }
}

const jerry = new
CordialPerson('Newman');
const newman = new
CordialPerson('Jerry');
const josh = new CordialPerson('CS 13');

jerry.speak();
newman.speak();
josh.speak();

// Principle 4
// code example for Explicit Binding

const developer = {
    'name': 'Jim', 
    'age': 40
}

const skills = ['HTML', 'LESS', 'JS'];

function introduce(skill1, skill2, skill3) {
    console.log(`My name is: ${this.name} and I like to program in: ${skill1}, ${skill2}, ${skill3}`);
}

introduce.call(developer, skills);