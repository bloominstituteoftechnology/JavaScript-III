/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding : Outside of a function 'this' will hold a value for the window or console object.
* 2. Implicit Binding: if the function is called with a dot before it the object left of the dot uses this.
* 3. New Binding: is used with constructor functions, 'this' refers to the specific object that is created and returned by the constructor function. Uses the 'new' keyword to call the constructor function and make a new object.
* 4. Explicit binding: used whenever a .call or .appy method is used 'this' is explicitly named.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(greeting){
    console.log(this + 'How are you?');
    return name;
}

sayHello("Heyo!"); //will return [object Window] How are you?

// Principle 2

// code example for Implicit Binding

const helloObj = {
    greet: "Heyo",
    sayHeyo: function (name) {
        console.log(`${this.greet}, I'm ${name}`);
    }
};

helloObj.sayHeyo('Freddie');

// Principle 3

// code example for New Binding

function NewCharacter(person){
    this.name = person;
    this.greeting = "Hello"
    this.sayHi = function(){
        console.log(this.greeting + " " + this.name);
    }
};

const penny = new NewCharacter('Penny');
const george = new NewCharacter('George');

penny.sayHi();
george.sayHi();
// Principle 4

// code example for Explicit Binding

penny.sayHi.call(george);
george.sayHi.apply(penny);