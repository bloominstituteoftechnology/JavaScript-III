/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding,binds to the left side of dot notation
* 2. Explicit Binding,have to use an owner object 
* 3. New Binding,for constructor functions
* 4. Window Binding,tries to go to the window
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const person = {
  "name": "Steve",
  "age": 42,
  "sport": "baseball",
  "gender": "M",
  "about": function() {
    console.log(`${this.name} is about: ${this.age} years old`);
  }
}

// Principle 3
// code example for New Binding

function helloPerson(greeter) {
  this.greeter = greeter;
  this.greetings = "Hello";
  this.speak = function() {
    return `${this.greetings} ${this.greeter}`
  }
}
const steve = new helloPerson("Steve");
console.log(steve);
console.log(steve.speak());


// Principle 4
// code example for Explicit Binding

const personInfo = {
  "name": "Steve"
}

const skills = ['js', 'html', 'css', 'less'];

function introduce(skills) {
  console.log(`Hello! My name is: ${this.name} and I like to program in: ${skills}`)
}
introduce.call(personInfo, skills);




