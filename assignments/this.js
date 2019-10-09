 // The for principles of "this";
//  in your own words. explain the four principle for the "this" keyword below.

//  1. Window Global object binding 
// Window binding is like the forest of trees, not sure which one we are pointing at so we are just pointing at the forest. 
//  2. Implicit Binding 
    // Implicit binding means that we are pointing out a specific tree in our forest by saying "that tree"
//  3. New Binding 
    // New binding creates a new fucntion that says to plant that  new tree over there by using the "new" example within the code 

//  4. Explicit Binding 
// This says I want to go plant a new tree over there. 

//  write out a code example of each explanation above

// Principle 1
console.log(this)

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const person = {
   name: "Jasmine",
   age: "26",
   location: "San Francisco",
   code: function() {
    return `${this.name} loves to ${this.code}`;
    }}
console.log(person.code());
// Principle 3

//New Binding Example

function CordialPerson(greeter) {
    this.greeting = "Hola, Como estas";
    this.greeter = greeter;
    this.speak = function() {
        console.log( `${this.greeting} ${this.greeter} `);
    }
}

const jasmine = new CordialPerson("Jennifer Lopez");

jasmine.speak();

// Exlicit binding 

const singer = {
    'name':'Beyonce',
    'age':38
}
const talents = ['singing','dancing', 'acting'];

function introduce() {
    console.log(`My name is: ${this.name} my talents are, ${talents}`);
}

introduce.call(singer, talents);