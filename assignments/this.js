/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit: Uses.call(), .bind(), .apply() to bind "this."
The first argument you pass to one of these methods will be the context of "this."
* 2. Implicit: Implicit binding uses dot notation. When you call the function, whatever is to the left of the dot is what "this" is referring to. 
* 3. New: When you use the new keyword, JS creates a new object and and assigns "this" to that new object. If you call a function with "new," the "this" keyword will 
reference the object created.
* 4. Window: When none of the previous rules apply, the "this" keyword refers back to the window or global object. 
*
* write out a code example of each explanation above
*/

// Principle 1 Window

function sayHi() {
    console.log(`Hello, my object is ${this}`);
};

// Principle 2 Implicit
const jess = {
    age: 35,
    name: 'Jess',
    sayHi: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
jess.sayHi();


// Principle 3 New

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const Jess = new Person('Jessica', 35);

console.log(Jess.name);

// Principle 4 Explicit

function sayHello() {
    console.log(`Hello again, my name is ${this.name}`);
}

sayHello.call(Jess);

function myAge() {
    console.log(`I am ${this.age} years old.`);
}

const jessAge = myAge.bind(jess);

jessAge();