/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding. When in the global scope, "this" is the window/console Object.
* 2. Implicit binding. When a function is called with a dot (.) in front of it, the object before the dot is 'this'.
* 3. New binding. When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned.
* 4. Explicit binding. When call or apply methods are used, 'this' is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function dogSound(bark) {
    console.log(this);
    return bark;
}

console.log("B'ork");

// Principle 2

// code example for Implicit Binding

const dogObj = {
    dogSound: "B'ork",
    makeSound: function(dog) {
        console.log(`${dog} goes ${this.dogSound} ${this.dogSound} ${this.dogSound}!`);
        console.log(this);
    }
};

dogObj.makeSound('Doggo');

// Principle 3

// code example for New Binding

function Animal(sound) {
    this.bark = 'bark!';
    this.sound = sound;
    this.speak = function() {
        console.log(`${this.sound} likes to ${this.bark}!`);
        console.log(this);
    };
}

const dog = new Animal('Doggo');
const baby = new Animal('baby'); 

dog.speak();

// Principle 4

// code example for Explicit Binding

dog.speak.call(baby);
baby.speak.call(dog);