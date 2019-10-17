/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
    - a global scope meaning the value of "this" is the entire window.
* 2. Implicit Binding
    - whenever a function is followed by a preceding dot, the object to the left of the dot
* 3. New Binding
    - contstructor function has to be used
    - new binding refers to the specific instance of the object being used and returned by the constructor function
* 4. Explicit Binding
    - Whenever JS .call or .apply methods are being used
    - this is explicitly defined
*
* write out a code example of each explanation above
*/

// ===== Principle 1 ======
// code example for Window Binding

function sayName(_name) {
    console.log(this);
    return _name;
}

sayName("Aaron"); // returns all the window

// ===== Principle 2 ======
// code example for Implicit Binding

const users = {
    name: "aaron",
    password: "password10",
    sayHi: function(id) {
        console.log(
            `Hello, my name is ${this.name}, the website password is ${this.password}, and your id is ${id}`
        );
        console.log(this);
    }
};

console.log(users.sayHi(12));

// ===== Principle 3 ======
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = "Hello ";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

jerry.speak();
newman.speak();

// function AllUsers()

// ===== Principle 4 ======
// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);