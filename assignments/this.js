// start

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. the first is about window binding. that's when you use "this" in global scope, outside of any specified object. in this case, "this" automatically refers to the window object which can result in some funky behavior
* 2. 2nd is about implicit binding. it's when you use "this" in an object you've created. this way you can dynamically refer to the parent object like this: "this.key"
* 3. 3rd is for new binding. this is referring to when a new object is created through a constructor function. in this case, "this" refers to the new instance that the constructor function creates.
* 4. 4th is for explicit binding. this is when you use .bind, .call, or .apply to specify a specific object that you'd like to refer to. "this" refers to whatever object is being passed in as a parameter (the object in the parentheses).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this.name);

// Principle 2

// code example for Implicit Binding

const dog = {
    eyes: 2,
    legs: 4,
    speak: function() {
        console.log(`I have ${this.eyes} eyes and ${this.legs} legs. Meow.`);
    }
}

dog.speak();

// Principle 3

// code example for New Binding

function Dog(name) {
    this.greeting = "Arf";
    this.name = name;
    this.eyes = 2;
    this.legs = 4;
    this.speak = function() {
        console.log(`I have ${this.eyes} eyes and ${this.legs} legs. Meow.`);
        console.log(this);
    }
};

const kobe = new Dog("Kobe");
kobe.speak();

// Principle 4

// code example for Explicit Binding

const otherDog = new Dog("Other");

Dog.prototype.doTrick = function() {
    console.log(`Hi, my name is ${this.name}.`);
    console.log(this);
};

kobe.doTrick.call(otherDog);

// kobe.doTrick(); // regular way without explicit binding