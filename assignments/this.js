/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - the god principle
        Window binding occurs when this is left all alone.  Orphaned "this" only has the window to depend on
* 2. Implicit binding - 
        Uses dot notation inside the object to reference an object property
* 3. New Binding - 
        hey object I'm going to uses the "new" keyword to introduce you two. You're now bound
* 4. Explicit Binding
    .call - comma seperated
    .apply - arrays
    .bind - returns function
    wala
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function WindowBind(bindtype){
    console.log(this);
    return bindtype;
}
WindowBind("this isn't bound to anything");

// Principle 2

// code example for Implicit Binding
const ImplicitObj = {
    greeting: "Hello",
    sayHello: function(name) {
        console.log(`${this.greeting} ${name}, would you like to play a game?`);
      }
};

ImplicitObj.sayHello("John");


// Principle 3

// code example for New Binding

function NewBinding(name) {
    this.name = name;
    this.playsgame = true;
    this.question = function(){
        console.log(`Will ${this.name} play the game? ${this.playsgame}, he will.`);
    };
}

const John = new NewBinding("John");
John.question();

// Principle 4

// code example for Explicit Binding

let kitty = ["cat", "meow"];

function Animal (species, sound) {
    this.species = species;
    this.sound = sound;
}

function Dog (breed){
    Animal.call(this, "Dog", "Woof");
    this.breed = breed;
}

function Cat (breed){
    Animal.apply(this, kitty);
    this.breed = breed;
}

const Teddy = new Dog("Yorkie");
const Snuggles = new Cat("Tabby");

console.log(Teddy);
console.log(Snuggles);