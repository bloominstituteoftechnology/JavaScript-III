/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - where "this" is bound to the window object - usually advised not to use
* 2. In Implicit binding "this" refers to the name of the function that is to the left of the dot when you invoke it. 
* 3. In new binding, the new keyword helps the object bind to the "this" keyword in the Constructor function. 
* 4. Explicit binding refers to times when the method might not be included in the object but is instead in the global scope.
//We use the call, apply or bind keywords to help us explicitly define what "this" refers to. 
*
* write out a code example of each explanation above
*/

sayWhat();

// code example for Window Binding

christina.sayWhat();

// code example for Implicit Binding

// Principle 3
function Person (attributes){
    this.name=attributes.name;
    this.age=attributes.age;
    this.email=attributes.email;
};
const me = new Person ({
    "name" : "Christina",
    "age": 36,
    "email": "kopecky12112@gmail.com"
});

// code example for New Binding

// Principle 4

let sayName = function (name){
    console.log(`Hello, my name is ${this.name}`)
}

const you = new Person ({
    "name" : "Jennifer",
    "age": 32,
    "email": "abc123@gmail.io"
});

console.log(sayName.call(you));
// code example for Explicit Binding,