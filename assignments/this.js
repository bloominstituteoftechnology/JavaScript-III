/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the this keyword is used but no other context is declared implicitly or explicitly; the computer will read the context of this as being the entire window.
* 2. Implicit binding is most commonly used. This keyword is employed inside of a method and refers to the context of an object.
* 3. Explicit binding is when this keyword is employed in a function and the context refers to some other object unrelated to the function. Methods such as .call(), .apply(), and .bind() are used.
* 4. New binding is used in constructor function and the this keyword serves to bind new instances of the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.greeting = 'howdy';

function greet(greeting) {
    console.log(this.greeting)
}

// Principle 2

const myObject = {
    'name': 'Alex',
    'age': 26,
    'speak': function() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

myObject.speak();

// code example for Implicit Binding

// Principle 3

// code example for New Binding

function Friend(name, age, gender, location) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.speak = function() {
        console.log(`Hi, I'm ${this.name}, I'm from ${this.location}`);
    }
}

const steve = new Friend('Steve', 28, 'M', 'Philadelphia');
steve.speak();

// Principle 4

const toby = {
    'name': 'Toby',
    'species': 'dog',
    'age': 5,
    'gender': 'boy'
}

function sayHi() {
    console.log(`I'm ${this.name}, I'm ${this.age} years old, and I'm a good ${this.gender}!`)
}

sayHi.call(toby);
// code example for Explicit Binding