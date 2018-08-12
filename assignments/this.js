/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. Implicit Binding occurs when a dot notation is used to invoke a function. Whatever is to the left of the dot becomes the context for 'this' in the function.
* 3. New Binding occurs whenever you invoke a function with the 'new' keyword.
* 4. Explicit Binding of 'this' occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.hello = "Hi";

function sayHello(hello) {
  console.log(this.hello)
}

sayHello("hello");

// Principle 2

// code example for Implicit Binding

const user = {
    'name': 'Linda',
    'age': 24,
    'location': 'NYC',
    greet() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

user.greet();

// Principle 3

// code example for New Binding

function person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`)
    }
}

const linda = new person('Linda');
const john = new person('John');
const lambda = new person('CS 13');

linda.speak();
john.speak();
lambda.speak();

// Principle 4

// code example for Explicit Binding

const developer = {
    name: 'Linda',
    age: 26
}

const langs = ['HTML', 'LESS', 'JS'];

function introduce(lang1, lang2, lang3) {
    console.log(`My name is: ${this.name} and I program in: ${lang1}, ${lang2}, ${lang3}`)
}

introduce.call(developer, langs);
introduce.apply(developer, langs);
let holdOn = introduce.bind(developer, ...langs);
holdOn();
introduce(langs);