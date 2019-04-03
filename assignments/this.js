/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window --> Overall global scope --> window being the first object that originates.
* 2. Implicit --> Implied or suggested --> ex. when creating objects with a class constructor, this is a placeholder for an object to be.
* 3. New Binding --> binding that originates in the instance of a new object --> new keyword when using class constructors.
* 4. Explicit binding --> specifically designated binding using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const dog = {
    name: 'Doug',
    age: 7,
    speak: function() {
        console.log(`My name is ${this.name} and I say woof woof!`); //<--this.name is implicit binding.
    }
}

dog.speak();


// Principle 3

// code example for New Binding

function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.speak = function() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} and I live in ${this.location}.`);
    };
}

const jake = new Person('Jake', 28, 'Spearfish, SD'); //<--new binding, using a class constructor.
jake.speak(); //jake is an object of class Person, which has implicit binding. The new keyword however gives the new binding.

// Principle 4

// code example for Explicit Binding

const jacob = {
    name: 'Jake',
    playPiano: function() {
        console.log(`My name is ${this.name} and I play piano!`);
    }
}

const roman = {
    name: 'Roman',
    playGuitar: function() {
        console.log(`My name is ${this.name} and I play guitar!`);
    }
}

jacob.playPiano();
roman.playGuitar();
jacob.playPiano.call(roman); //Explicit binding: Calls jacob's playPiano method but uses roman as the object for this in context.
roman.playGuitar.call(jacob); //Explicit binding: Calls roman's playGuitar method but uses jacob as the object for this in context.
