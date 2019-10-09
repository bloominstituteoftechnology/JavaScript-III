/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: when in the global scope, the value of 'this will be the window/console Object
* 2. Implicit Binding: whenever a function is called by a preceding dot, the object before that is this.
* 3. New Binding: whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding: Whenever Javascripts call or apply method is used, this is explicitly defined.
Using call, apply or bind
call pass in arguments one by one
apply pass in arguments as array
bind used to create a new function that is permanently bound to this value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//1
// function ghost(){
//     console.log(this.boo);
// }
// ghost();
// const boo = 'boo';
//2
function sayName(name) {
    console.log(this);
    return name;
}
sayName("D'Artagnan");
// Principle 2

// code example for Implicit Binding
//1
// let myGhost = {
//     name: 'Casper',
//     boo: 'booo!',
//     ghost: function(){
//         console.log(this.boo);
//     }
// }
// myGhost.ghost();
//2
const myObj = {
    greeting: 'Hello',
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`);
    }
};
myObj.sayHello('Ryan');
// Principle 3

// code example for New Binding
function CordialPerson( greeter ) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);

// function ghost(){
//     console.log(this.boo);
// }
// let myGhost = {
//     name:'Casper',
//     boo:'boo',
// }
// friendlyGhost = ghost.bind(myGhost);

// friendlyGhost();