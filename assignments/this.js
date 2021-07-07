/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding which is basically when we dont use this properly so it defaults to the window.
* 2. implicit binding is when we tell this EXACTLY what we are referring to through invocation.
* 3. explicit binding, when we explicitly tell the function to call it using methods like .call().
* 4. New binding: When we create a constructor function that we can reference using the new keyboard to make multiple objects witht he same methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);


// Principle 2

// code example for Implicit Binding
const myObject = {
    'name':'Fodo',
    'cook':function(food1, food2){
        console.log( `${this.name} can cook ${food1} and ${food2} and its delcious!`);
    }
}

myObject.cook("Eggs", "Bacon");
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = "Hi there";
    this.greeter = greeter;
    this.speak = function() {
        console.log( `${this.greeting} ${this.greeter} `);
    }
}

const jerry = new CordialPerson("Fordan Greeman");

jerry.speak();


// Principle 4

// code example for Explicit Binding
const developer = {
    'name':'Jim',
    'age':40
}
const skills = ['HTML','PHP','CSS'];

function introduce() {
    console.log(`My name is: ${this.name} and i like to program with: ${skills}.`);
}

introduce.call(developer, skills);