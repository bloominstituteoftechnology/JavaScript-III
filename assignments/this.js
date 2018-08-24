/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: This points to the global variable often the window. 
 * 2. Implicit Binding: This points to whatever object preceded it and a period. 
 * 3. New Binding: Points to the object being created by the constructor function
 * 4. Explicit Binding: Points to whatever object is being called or appplied with .call() and .apply()
 *
 * write out a code example of each explanation above
 */

// Principle 1

function speak(phrase) {
    console.log(this);
    return `say ${phrase}`;
}
speak("what up");


// Principle 2

const pets = {
    dog: "Snickers",
    cat: "Thor",
    speak: function (noise) {
        console.log(this);
        return `${this.dog} says ${noise}`;
    }
}

pets.speak("feed me");

// Principle 3

var dog = function (name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    console.log(this);
}

var snickers = new dog("Snickers", 13, "Airedale Terrier");



// Principle 4

const cats = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
    console.log(this);
}

const thor = {
    name: "thor",
    age: 6,
}

const sif = {
    name: "sif",
    age: 3,
}

cats.call(thor);
cats.call(sif);