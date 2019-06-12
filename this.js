/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding  occurs when the this statement is used in the global scope. 
If we aren't using implicit or explicit binding, then the this keyword is considered a window binding.
* 2. Implicit binding occurs whenever a dot notation is used to invoke a function.
* 3. New binding occurs when ever we use the new keyword to instantiate a constructor object. 
The new keyword creates a new object and then binds this to the parent object.
* 4. Explicit binding occurs when the this keyword is invoked using the apply, call, or bind method. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sum(){
    const x = 9;
    console.log(x);
    console.log(this);  // this is referring to the global scope, as a result this is binded to the window.
}

sum();
// Principle 2

// code example for Implicit Binding
// Constructor function
function hello(){
    console.log( `Hello ${this.name}. Thanks for being my ${this.job}`);

}

let project_manager = {
    name: 'Anna',
    job: 'Project Manager',
    hello: hello
};

project_manager.hello();

// Principle 3

// code example for New Binding
function Players (name,position,type,goals){
    this.name = name;
    this.position = position;
    this.type = type;
    this.goals = goals;
}
// Prototype
Players.prototype.cup = function(){
    return `${this.name} is a ${this.type} who plays ${this.position}. He scored ${this.goals} points this cup`
}
// instantiation, new keyword  binds this to the Players object, thus giving it access to all of the properties within the object.
let Soccer = new Players('James Rodriguez', 'forward', 'playmaker', 17);
console.log(Soccer);
//
console.log(Soccer.cup());

// Principle 4

// code example for Explicit Binding

let faves = ['Softdev','Soccer','Ecology']
function interests(thing_1, thing_2, thing_3){
    return `I enjoy ${thing_1} , ${thing_2}, and ${thing_3}`
}
// explicit binding
const me = interests.apply(null,faves);
console.log(me);