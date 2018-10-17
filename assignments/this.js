/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - this is the "global" state of binding and occurs when no other binding has been explicitly assigned. As a result "this" will bind to the window.Side note the use of "use strict" is not necessarily a good thing.
* 2. Implicit binding - think implied or automatic is the binding in objects and methods. The "this" will be connected using a "dot". We do not use arrow functions in a method because it will cause the "this" to not function or break.
* 3. Explicit binding - There are 3 explicit binding (functions); they are call,apply, and bind. Call is for an individual item, apply is used for arrays, and bind is used for variables so it can be stored and held for later. Bind is similar to call in that it is individual. However, now with javaScript syntax, you can use a spread operator ... instead of apply.
* 4. New binding - this is used with constructor functions and when the new keyword is used the "this" will be for that object. 
*
* write out a code example of each explanation above
*/

// Principle 1


// code example for Window 
function wtfWindow(){
    console.log(this)
}
wtfWindow();

// Principle 2

// code example for Implicit Binding
const newStudent = {
    name: 'Asa',
    frustration: function(){
        console.log(`${this.name} rubs his face around keyboard to see if his code can get any better because it certainly can not get any worse`);
    }
}

newStudent.frustration();

// Principle 3

// code example for New Binding
function SpellCaster(wizard){
    this.wizard = wizard;
    this.incantation = 'Abracadabra, I speak and it is created!';
    this.invoke = function(){
        console.log(`I am ${this.wizard} ${this.incantation}`);
    }
    
}
 const gandolf = new SpellCaster('Gandolf');
//  console.log(gandolf)
 gandolf.invoke()
// Principle 4

// code example for Explicit Binding
const student = {
    name: 'Napolean Dynamite'
}

const skillz = ['nunchuk', 'bow hunting', 'computer hacking'];

function noGoodSkillz(skillz1, skillz2, skillz3){
    "use strict"
    console.log(`${this.name} said "I don’t even have any good skills. You know like ${skillz1} skills, ${skillz2} skills, ${skillz3} skills. Girls only want boyfriends who have great skills!`)
}

noGoodSkillz.apply(student, skillz);