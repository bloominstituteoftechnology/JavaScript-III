/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* What is calling it?
* 1. If the function lives in the global scope, the value will be in the window. Window binding.
* 2. 80% use case is implicit binding. When the function is called, if there is something to the left of a dot, that object to the left of the dot refers to this.
* 3. Is the function called by the word new? New binding.
* 4. If the function is called bt call(), apply(), or bind(), this signifies Explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for window Binding
function greet(name) {
    console.log('Hello ' + name);
    console.log(this);
}
greet('Courtney');

// Principle 2
// code example for Implicit Binding
const User = {
    greeting: 'Heya',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}
console.log(Courtney);


// Principle 3
// code example for New Binding
let courtney = new User ({
    firstName: 'Courtney',
    lastName: 'Buratto',
});

console.log(courtney);
courtney.greet('Fia');
// Principle 4

// code example for Explicit Binding
const greetings = ['Hi!', 'Hello!', 'Ciao!']
function greetCourtney('greeting1', 'greeting2', 'greeting3') {
    return `My name is ${Courtney} and sometimes I like to say ${greeting1}, other times ${greeting2} and occasionally ${greeting3}.`
}

greetCourtney.call(courtney);