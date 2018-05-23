/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding: the this keyword is bound or referenced to the global scope
* 2. implicit binding: the this keyword is bound to the direct parent, parent is not explicit
* 3. new binding: you create a new object and bind the this keyword to the new object
* 4. explicit binding: when .call(), .apply(), or .bind() is used on a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    console.log(this);
    return name;
}
sayName("Jeff");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting : 'Hello',
    sayHello : function(name){
        console.log(`${this.greeting} my name is ${name}`);
    }
};
myObj.sayHello('Jeff');

// Principle 3

// code example for New Binding
const sayNameFunction = function(obj){
    obj.sayName=function(){
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    };
};
const a = {name: 'Jeff'};
const b = {name: 'Will'};
sayNameFunction(a);
sayNameFunction(b);

// Principle 4

// code example for Explicit Binding
let me = {
    name: 'Jeff',
    age: 31
};
let sayN = function(skill1, skill2, skill3){
    console.log(`My name is: ${this.name} I like to program with: ${skill1}, ${skill2}, ${skill3}`);
}

let skills = ['HHTML', 'CSS', 'Javascript'];