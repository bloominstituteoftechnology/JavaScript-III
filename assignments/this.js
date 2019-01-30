/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when "this" is bound to the global/console scope.
* 2. When you call a function using dot notation the object before the the dot/function is what "this" is referrig to.
* 3. When a constuctor function is used "this" refers to the object created and returned by the constructor.
* 4. Whenever you use 'call' or 'apply', "this" is explicit 
*
* write out a code example of each explanation above

// code example for Window Binding
*/function sayHi(name) {
    console.log(this);
    return name;
}

sayHi('John');
// Principle 1


// code example for Implicit Binding
const theObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
    }

}
theObj.sayHello('John');
// Principle 2


// code example for New Binding
function NicePeople(welcomer) {
    this.welcome = 'Hi there';
    this.welcomer = welcomer;
    this.talk = function() {
        console.log(`${this.welcome} my name is ${this.welcomer}`);
    }
}
const mike = new NicePeople('Mike');
const john = new NicePeople('John');

mike.talk();
john.talk();
// Principle 3


// Principle 4
const person = {
    name: 'Bob'
}
const skills = [ 'HTML', 'CSS', 'JS'];

function introduce(skills) {
    console.log(`My name is ${this.name} and I code in ${skills}`);
}
introduce.call(person, skills);
// code example for Explicit Binding