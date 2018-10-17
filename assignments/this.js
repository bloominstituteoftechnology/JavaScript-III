//  The for principles of "this";
//  in your own words. explain the four principle for the "this" keyword below.

//   1. window binding occurs when no other binding has been assigned and "this" will be bound to the global object
// * 2. implicit is binding in object methods with this reffering to the object before the dot.
// * 3.  new keyword binding creates a new object and binds it to this
// * 4. explicit occurs when .call is used on a function and you are passing explicitly in a this context
// *
// * write out a code example of each explanation above
// 

// Principle 1

// code example for Window Binding
function hello(){
    "use strict"
    console.log(this)
}
hello();
// Principle 2

// code example for Implicit Binding
const me = {
    name: 'chase',
    age: '20',
    hobby: 'playing video games',
    who: function(){
        console.log(`hello my name is ${this.name}. i am ${this.age} years old and my hobby is ${this.hobby}.`);
         }
    }
    me.who();

// Principle 3

// code example for New Binding
function VoiceLines(hello){
    this.hello = hello;
    this.hiya = 'hiya';
    this.speak = function(){
        console.log(`${this.hiya} ${this.hello}`);
    }
}
const john = new
VoiceLines('jacob');
const jacob = new
VoiceLines('john');

console.log(john);
console.log(jacob);

john.speak();
jacob.speak();

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Chris'
}
const hobbies = ['gaming', 'sleeping', 'eating',];\

function introduce (hobbies1, hobbies2, hobbies3){
    "use strict"
    console.log(`Hello my name is ${this.name} and these are my hobbies ${hobbies1}, ${hobbies2}, ${hobbies3}`)
}
introduce.call(person, hobbies);