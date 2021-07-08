/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - when a function is being invoked, look to the left of the dot, and that is what 'this' keyword is referencing to.
* 2. explicit binding - when a function is being invoked, the first argument after the .call/.apply/.bind method is the context of 'this'. '.call' takes in individual arguments, '.apply' takes in arrays, and '.bind' makes a whole new function.
* 3. new binding - with construction functions, when a function is invoked with the 'new' keyword, the 'this' keyword in the constructor function refers to the new "imaginary" 'this' object that is being made behind the scenes
* 4. window binding - when you invoke a function without specifying what the 'this' keyword is, the context of 'this' keyword is the window object, which is where all of the javascript is happening behind the scenes
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
let him = {
    "name": "unknown",
    "age": 999
}
let hello = function() {
    console.log(`I'm ${this.name} and I'm ${this.age} years old.`)
}
console.log(hello());




// Principle 2
// code example for Implicit Binding
let yusuf = {
    "firstName": "Yusuf",
    "lastName": "Nafey",
    "city": "San Francisco",
    "state": "CA",
    "introduce": function() {
        console.log(`Hello I'm ${this.firstName} ${this.lastName}.`)
    }
};
let kevin = {
    "firstName": "Kevin",
    "lastName": "Brack",
    "city": "Chicago",
    "state": "IL",
    "introduce": function() {
        console.log(`Hello I'm ${this.firstName} ${this.lastName}.`)
    },
    "from": function() {
        console.log(`I'm from ${this.city}, ${this.state}.`)
    }
    
};
yusuf.introduce();
kevin.from();




// Principle 3
// code example for New Binding
let Laptop = function(os, size, memory, storage) {
    // invisible 'this = {}' being created
    this.os = os;
    this.size = size;
    this.memory = memory;
    this.storage = storage;
};
const macbookPro = new Laptop("OS X Yosemite", 13, "8gb", "256gb");
const dellXPS15 = new Laptop("Windows 10", 15, "16gb", "512gb");
console.log(macbookPro);
console.log(dellXPS15);




// Principle 4
// code example for Explicit Binding
let me = {
    "name": "Yusuf",
    "age": 22
};
let you = {
    "name": "Kevin",
    "age": 50
};
const myHobbies = ["basketball", "programming", "video games"];
const yourHobbies = ["producing audio", "programming", "animating"];
function enjoys(thing1, thing2, thing3) {
  return `${this.name} enjoys ${thing1}, ${thing2}, and ${thing3}.`
};
console.log(enjoys.call(me, ...myHobbies));
console.log(enjoys.apply(you, yourHobbies));
const yusufEnjoys = enjoys.bind(me, ...myHobbies);
console.log(yusufEnjoys());


// const learned = ["HTML", "CSS", "JavaScript"];
// function thingsIHaveLearned(p1, p2, p3) {
//     return `I am in the ${this.cohort}th ${this.subject} cohort at ${this.school}. Some things I have learned so far include ${p1}, ${p2}, and ${p3}.`
//   }